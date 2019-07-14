
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





  // addPost: function (req, res) {
  //   db.Post.create(req.body).then(function(dbPost) {
  //     res.json(dbPost);
  //   }).catch(err => res.status(422).json(err));   
  // },



addPost: function (req, res) {

    db.Post.create(req.body)
        .then(function(dbpost){
              res.json(dbpost);
            })
            // .catch(err => res.status(422).json(err));
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


editPost: function (req, res) {
db.Post.update({
  title: req.body.title, content: req.body.content, photoUrl: req.body.photoUrl},{ where: {id: req.params.id}})
        .then(function(dbpost){
              res.json(dbpost);
        })
        // .catch(err => res.status(422).json(err));
    },



   deletePost: function(req, res) {


    // db.Post.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function(dbPost) {
    //   res.json(dbPost);
    // }).catch(err => res.status(422).json(err));   



     db.Post.destroy(req.body,{ where: {id: req.params.id}})
        .then(function(dbpost){
              res.json(dbpost);
        })
        // .catch(err => res.status(422).json(err));
    }


}

