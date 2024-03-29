//-----------------------------------//
// Import the necessary dependencies //
//-----------------------------------//
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
//----------------//
// Import routers //
//----------------//
const authRouter = require('./routes/authentication');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const likesRouter = require('./routes/likes');
const commentsRouter = require('./routes/comments');
//-----------------//
// Import database //
//-----------------//
const { sequelize } = require('./models');
//---------------------------------//
// Call the necessary dependencies //
//---------------------------------//
const app = express();
app.use(cors());
app.use(helmet());
//------------------------//
// Parse the JSON request //
//------------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//-------------//
// Call routes //
//-------------//
app.use('/api/sign', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/likes', likesRouter);
app.use('/api/comments', commentsRouter);
app.use('/image', express.static(path.join(__dirname, 'image')));
//------------------------------------------------------------------------------//
// Check the connection to the database and send the result back to the console //
//------------------------------------------------------------------------------//
const bdCheck = async function () {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
bdCheck();
//--------//
// Export //
//--------//
module.exports = app;
