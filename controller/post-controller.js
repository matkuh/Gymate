
const db = require("../models");

module.exports = {

  // Gets all code snippets in db
  // getAllPosts: function (req, res) {
  //   db.Post.findAll({}).then(function(dbPost) {
  //     res.json(dbPost);
  //   }).catch(err => res.status(422).json(err));   

  // },


  // getAllPosts: function (req, res) {

  //     db.Post.findAll({})
  //       .then(dbUser => res.json(dbPost))
  //       .catch(err => res.status(422).json(err));   
  // },



//Add new routine for specific user
   addPost: function (req, res) {
    db.Post.create({
      user_id: req.body.user_id,
      content: req.body.text}
      ).then(function(dbPost) {
      res.json(dbPost);
    });
  },


  getPosts: function (req, res) {
    db.Post.findAll({
      order:[['time', 'desc']],
      limit:10}
      ).then(function(dbPost) {
      res.json(dbPost);
    });
  },






  // getPosts: function (req, res) {
  //   db.Post.findAll({
  //     where: {
  //       User_id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   }).catch(err => res.status(422).json(err));   

  // },


// getPosts: function (req, res) {

//       db.Post.findAll({where:{User_id:req.params.id}})
//         .then(dbPost => res.json(dbPost))
//         .catch(err => res.status(422).json(err));   
//   },





  // Gets all code snippets in db for a specified tag
  // editPost: function (req, res) {
  //   db.Post.update(
  //     {
  //       title: req.body.title,
  //       content: req.body.content,
  //       photoUrl: req.body.photoUrl
  //     },
  //     {
  //       where: {id: req.params.id }
  //     })
  //   .then(function(dbPost)
  //   {
  //     res.json(dbPost);
  //   }).catch(err => res.status(422).json(err));   
  // },





}

