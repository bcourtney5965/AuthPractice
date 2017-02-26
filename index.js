var express = require('express');
var app = express();
var _ = require("lodash");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var port = 3000;

app.get("/", function(req, res) {
  res.json({message: "Express is up!"});
});

app.listen(port, function() {
  console.log('Express running on port: ' + port);
});
