const express = require("express");

const routes = require("./source/route");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));