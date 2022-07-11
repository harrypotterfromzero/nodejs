const express = require("express");
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/about", (req, res) => {
    res.send("port url");
  });
  return app.use("/", router);
};
// module.export = initWebRoute;
export default initWebRoute;
