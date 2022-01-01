//------------------------------------//
// Imports the necessary dependencies //
//------------------------------------//
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const { authentication } = require('../middlewares/authentication');
//-------------------------------------------------------//
// Routers (arranged in the order following the C.R.U.D) //
//-------------------------------------------------------//
//----------------------------------//
// POST requests to the users route //
//----------------------------------//
router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);
//---------------------------------//
// GET requests to the users route //
//---------------------------------//
router.get('/profile/:id', authentication, usersCtrl.profile);
router.get('/auth', authentication, usersCtrl.auth);
//--------------------------------//
// PUT request to the users route //
//--------------------------------//
router.put('/profile/update', authentication, usersCtrl.updatePassword);
//-----------------------------------//
// DELETE request to the users route //
//-----------------------------------//
router.delete('/profile/delete/:id', authentication, usersCtrl.profileDelete);
//--------------------//
// Exports the router //
//--------------------//
module.exports = router;
