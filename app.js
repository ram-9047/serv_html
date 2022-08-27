const express = require("express");
const body_parser = require("body-parser");
const path = require("path");

const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contact");
const successRoute = require("./routes/success");

//----------body-parsing-------------
app.use(body_parser.urlencoded({ extended: false }));

//routes
app.use("/admin", adminRoute);
app.use("/contactus", contactRoute);
app.use("/success", successRoute);
app.use(shopRoute);

app.use((req, res) => {
  //   res.status(404).send(`<h1>Page Not Found.!!!!!!!!!!!!</h1>`);
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
//---------port----------
const port = 3000 || process.env.PORT;

//-----------server----------
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
