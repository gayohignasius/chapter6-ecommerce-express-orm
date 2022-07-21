const express = require("express");
const productRouter = require("./src/product/product.route");
const app = express();
const port = 8000;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use(productRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
