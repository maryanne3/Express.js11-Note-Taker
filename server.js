const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Get Routes
const apiRoutes = require("./source/routes/apiRoutes");
const htmlRoutes = require("./source/routes/htmlRoutes");
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));