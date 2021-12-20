//--------------------------------------//
// Importing the necessary dependencies //
//--------------------------------------//
const express = require('express');
const router = express.Router();
const { Posts } = require('../models');
const { authentication } = require('../middlewares/authentication');
//----------------//
// Create routers //
//----------------//
router.post('/', authentication, async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});
router.get('/', authentication, async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});
router.get('/byId/:id', authentication, async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});
//-----------------//
// Exports routers //
//-----------------//
module.exports = router;
