
const db = require("../models");

module.exports = {

  // Gets all code snippets in db
  getAllPosts: function (req, res) {
    db.Post.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });

  },


  addPost: function (req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  },




  getPosts: function (req, res) {
    db.Post.findAll({
      where: {
        User_id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });

  },



  // Gets all code snippets in db for a specified tag
  editPost: function (req, res) {
    db.Post.update(
      {
        title: req.body.title,
        content: req.body.content,
        photoUrl: req.body.photoUrl
      },
      {
        where: {id: req.params.id }
      })
    .then(function(dbPost)
    {
      res.json(dbPost);
    });
  },


   deletePost: function(req, res) {

    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });


}

}