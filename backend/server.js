const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const port = 5000;

app.use(express.json());

//User data with hashed password for demonstration
const mockUser = {
  username: "demoUser",
  //Password hashed for demo
};
