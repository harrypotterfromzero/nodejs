const express = require('express');

const configViewEngine= (app)=>{
    app.set("view engine","ejs");//cau truc mac dinh
    app.set("views","./src/views")//lay duong dan
}
export default configViewEngine;