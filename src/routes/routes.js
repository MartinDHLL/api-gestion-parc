module.exports = (app) => {
  app.use("/auth", require("./auth/auth.route"));
};
