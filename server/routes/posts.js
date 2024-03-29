//-----------------------------------//
// Import the necessary dependencies //
//-----------------------------------//
const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/posts');
const JWT = require('../middlewares/authentication');
const upload = require('../middlewares/multer');
//-------------------------------------------------------//
// Routers (arranged in the order following the C.R.U.D) //
//-------------------------------------------------------//
//--------------------------------//
// POST request to the post route //
//--------------------------------//
router.post('/', [JWT.auth], upload.single('image'), Ctrl.createPost);
//--------------------------------//
// GET requests to the post route //
//--------------------------------//
router.get('/', [JWT.auth], Ctrl.readAllPosts);
router.get('/:id', [JWT.auth], Ctrl.readOnePost);
//--------------------------------//
// PUT request to the posts route //
//--------------------------------//
router.put('/update/:id', [JWT.auth], upload.single('image'), Ctrl.updatePost);
//-----------------------------------//
// DELETE request to the posts route //
//-----------------------------------//
router.delete('/delete/:id', [JWT.auth], Ctrl.deletePost);
//-------------------//
// Export the router //
//-------------------//
module.exports = router;
