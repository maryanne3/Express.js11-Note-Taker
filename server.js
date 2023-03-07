// create express server
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// get routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app is listening to the port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});