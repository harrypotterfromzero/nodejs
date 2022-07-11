import express from "express";
import confiViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web';
require("dotenv").config();


const app = express();
const port = process.env.PORT || 8080;

//setup view engine
confiViewEngine(app);
//init webroute
initWebRoute(app);
app.listen(port, () => {
  console.log(`ung dung dang chay o port: ${port}`);
});
