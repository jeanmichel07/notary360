require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 4000;
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'notary360'
});
// enable CORS
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/login",(req, res)=>{
  const username = req.body.username;
  const pwd = req.body.password;

  const queryGetUser = "SELECT * FROM notaire WHERE username = ?";
  db.query(queryGetUser, username, (err, result)=>{
  
    if(err){
      console.log(err)
      res.send({err:err});
    }
    if (!username || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password required."
      });
    }

    if(result.length > 0){
      if(result[0].password !== pwd){
        return res.status(401).json({
          error: true,
          message: "Password est incorrect."
        });
      }else{
        const token = utils.generateToken(result[0]);
        const userObj = utils.getCleanUser(result[0]);
        return res.json({ user: userObj, token });
      }
    }else{
      return res.status(401).json({
        error: true,
        message: "Username est incorrect."
      });      
    }
  })
});

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});


// request handlers
app.get('/', (req, res) => {
  if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
  res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
});


// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required."
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) return res.status(401).json({
      error: true,
      message: "Invalid token."
    });

    // return 401 status if the userId does not match.
    if (user.userId !== userData.userId) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    }
    // get basic user details
    var userObj = utils.getCleanUser(userData);
    return res.json({ user: userObj, token });
  });
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});
