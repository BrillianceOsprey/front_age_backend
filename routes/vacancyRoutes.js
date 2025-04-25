const express = require("express");
const router = express.Router();
const vacancyController = require("../controllers/vacancyController");

router.post("/", vacancyController.createVacancy);
router.get("/", vacancyController.getVacancies);

module.exports = router;
