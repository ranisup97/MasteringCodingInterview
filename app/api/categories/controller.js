const { Category } = require("../../db/models");

module.exports = {
  //get all categories
  getAllcategories: async (req, res, next) => {
    try {
      const categories = await Category.findAll({
        where: { user: req.user.id },
        attributes: ["id", "name"], //ini adalah attribut yang mau ditampilkan pada response data , jika attribute di delete maka akan tampil semua data
      }); //get all categories berdasarkan user id yang login pakai findAll
      res
        .status(200)
        .json({ message: "Success get all categoris", data: categories });
    } catch (err) {
      next(err);
    }
  },

  //create categories
  createCategory: async (req, res, next) => {
    try {
      const { name } = req.body;

      const categories = await Category.create({
        //create categori berdasarkan user yang login
        name: name,
        user: req.user.id,
      });

      res
        .status(201)
        .json({ message: "Success create categories", data: categories });
    } catch (err) {
      next(err);
    }
  },
};
