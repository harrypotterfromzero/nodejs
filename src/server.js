const express = require('express');
const path = require('path');
const app = express();
const port =8080;
import confiViewEngine from './configs/viewEngine';

confiViewEngine(app);
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/about',(req,res)=>{
    res.send('port url')
})

app.listen(port,()=>{
    console.log(`ung dung dang chay o port: ${port}`);
})