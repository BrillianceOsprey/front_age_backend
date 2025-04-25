const Vacancy = require("../models/Vacancy");

exports.createVacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.create(req.body);
    res.status(201).json(vacancy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.json(vacancies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
