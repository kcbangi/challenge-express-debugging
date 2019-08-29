const express = require("express");
const router = express.Router();

const get = require("../contact/get/index");

router.get("/contact", get);
