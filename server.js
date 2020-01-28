//----------------------------------------------------
// NPM Repositories
//----------------------------------------------------
const express = require("express");
const fs = require("fs");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const path = require("path");
const app = express();

// Port
const PORT = process.env.PORT || 80;

//----------------------------------------------------
// NPM Express Requirements
//----------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

