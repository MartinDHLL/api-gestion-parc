module.exports = (app) => {
  app.use("/auth", require("./auth/auth.route"));
  // app.use("/user", require('./user/user.route))
};
