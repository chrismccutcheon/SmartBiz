"use strict";
/*
  Basic Express server to server index.html in the build dir of the public/client dir
*/
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
var app = express();

var PORT = process.env.PORT || 3000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/', express.static(__dirname+'/public/client/'));

app.post('/sendemail', function(req, res){
  if(req.body !== {}){
    const email = req.body.email;
    const title = req.body.title;
    const message = req.body.message;
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }

});

app.listen(PORT);
