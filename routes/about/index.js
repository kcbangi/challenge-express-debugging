const express = require("express");
const router = express.Router();

const get = require("../about/get/index");

router.get("/about", get);
