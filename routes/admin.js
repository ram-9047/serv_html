const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/add-product", (req, res) => {
  //   res.send(`<form action="/admin/product" method="post">
  //           <input type="text" name="title" />
  //           <button type="submit"> Add Product</button>
  //       </form>`);
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});
router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
