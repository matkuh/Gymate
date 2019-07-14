
const db = require("../models");

module.exports = {



  // getAllPosts: function (req, res) {

  //     db.Post.findAll({})
  //       .then(dbUser => res.json(dbPost))
  //       .catch(err => res.status(422).json(err));   
  // },




   addPost: function (req, res) {

    console.log(req.body);
    console.log(req.body.userId);
    db.Post.create({
      UserId: req.body.userId,
      content: req.body.content}
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

  getPostsByUser: function (req, res) {
    db.Post.findAll(
      {
        where: {UserId: req.params.id}
      },
      {
        order:[['time', 'desc']],
        limit:10
      }
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

