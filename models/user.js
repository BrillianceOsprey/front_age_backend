const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  amount: String,
  billing_address: String,
  created_at: String,
  current_plan_post_count: String,
  card_holder_email: String,
  card_holder_name: String,
  expire_at: String,
  current_stripe_transaction_id: String,
  current_subscription_plan: String,
  userID: String,
  subscription_status: String,
});

const VacancyRef = new mongoose.Schema({
  vacancy_id: String,
});

const UserSchema = new mongoose.Schema({
  userID: String,
  userName: String,
  userEmail: String,
  userPhone: String,
  createdAt: String,
  lastLogined: String,
  subscription: SubscriptionSchema,
  active_vacancies: [VacancyRef],
  inactive_vacancies: [VacancyRef],
});

module.exports = mongoose.model("User", UserSchema);
