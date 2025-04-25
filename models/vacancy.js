const mongoose = require("mongoose");

const VacancySchema = new mongoose.Schema({
  vacancy_id: String,
  post_owner_id: String,
  created_at: String,
  updated_at: String,
});

module.exports = mongoose.model("Vacancy", VacancySchema);
