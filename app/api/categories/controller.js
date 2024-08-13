const { Category } = require("../../db/models");

module.exports = {
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
};
