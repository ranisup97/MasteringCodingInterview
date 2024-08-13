const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signin: async (req, res, next) => {
    try {
      const { email, password } = req.body; //body raw
      const checkuser = await User.findOne({ where: { email: email } }); //cek user berdasarkan email

      if (checkuser) {
        const checkPassword = bcrypt.compareSync(password, checkuser.password); //compare password sesuai atau tidak

        if (checkPassword) {
          const token = jwt.sign(
            {
              user: {
                id: checkuser.id, //isi token jwt
                name: checkuser.name, //isi token jwt
                email: checkuser.email, //isi token jwt
              },
            },
            "secret"
          );
          res.status(200).json({ message: "Success Signin", data: token });
        } else {
          res.status(403).json({ message: "Invalid Password" });
        }
      } else {
        res.status(403).json({ message: "Invalid Email" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  signup: async (req, res, next) => {
    try {
      const { name, email, password, confirmPassword } = req.body; //menerima name,email,password dan confirmpassword dari body
      if (password !== confirmPassword) {
        //cek jika password tidak sama dengan confirm password
        res
          .status(403)
          .json({ message: "Paasword and confirm password don't match" });
      }

      const checkEmail = await User.findOne({ where: { email: email } });
      if (checkEmail) {
        //jika email sudah ada
        res.status(403).json({ message: "email registered" });
      }

      const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role: "admin",
      }); //create user jika user belum ada, role default admin
      delete user.dataValues.password; //passwordnya di delete agar tidak muncul di balikan message nya

      res.status(201).json({
        message: "Success Signup",
        data: user,
      });
    } catch (err) {
      next(err);
    }
  },
};
