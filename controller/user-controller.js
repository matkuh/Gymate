var db = require("../models");


var uuid = require("uuid/v4");
var AWS = require("aws-sdk");
var s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})







function uploadImage(req, image, cb) {
 //use req from the post method, and the image data can be get using the code below
 
 var imageFile = req.files.file.data;
 s3.createBucket(function(){
     var params = {
         Bucket: process.env.S3_BUCKET_NAME,
         ACL:'public-read',
         Key: `${image}.jpg`,
         Body: imageFile
     }
     s3.upload(params,function(err, data) {
         if(err) {
             console.log("error with upload");
             console.log(err);
         } else {
           console.log("Upload Success");
            console.log("image",data);
            cb(data.Location);
         }
        
       
     })
 });

};









module.exports = {


getAllUsers: function (req, res) {

      db.User.findAll({})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));   
  },



getUser: function (req, res) {

      db.User.findOne({where:{id:req.params.id}})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));   
  },


addUser: function (req, res) {

		db.User.create(req.body, {username:req.body.username})
				.then(dbuser => {
		          res.json(dbuser);
		        })
		        .catch(err => res.status(422).json(err));
  },


editUser: function (req, res) {
db.User.update({name: req.body.name, username: req.body.username, password: req.body.password, height: req.body.height, weight: req.body.weight},{ where: {id: req.params.id}})
        .then(dbuser => {
          res.json(dbuser);
        })
        .catch(err => res.status(422).json(err));
    },


    // db.User.create(req.body).then(function(dbUser) {
    //   res.json(dbUser)
    // });
  // },



	



	// db.User.findAll({
	//       where: {
	//         id: req.params.id
	//       }
	//     }).then(function(dbUser) {
	//       res.json(dbUser);
	//     }).catch(err => res.status(422).json(err));
  // },



	updatePhoto: function(req, res){
		// find user by id and update user with image and other properties
		// example
		/*
			db.User.update({name: "test",image: "imagenamehajkadasjd"}{where:7876787})
			.then(function(response){
				res.json(response)
			})

		*/

		  console.log(process.env.AWS_ACCESS_KEY_ID)
	      console.log(process.env.AWS_SECRET_ACCESS_KEY)
	      console.log(process.env.S3_BUCKET_NAME)

	        var status = req.body.status.toLowerCase();
	        status = status.replace(/\s/g, '');
	        status = status + uuid();


	        var profilePhoto = {
	            status: req.body.status,
	            image: status
	        };

	         uploadImage(req, profilePhoto.image, function(location){
	         	console.log(location);
	         	console.log('!!!!!!!!!!');
	         	console.log(req);


             	db.User.update(
		      	{
			        profilePhoto: location,
		      	},
		      	{
		        	where: {id: req.body.UserId}
		      	})
			    .then(function(dbUser)
			    {
		      		res.json({imageUrl: location});
			    });

				// db.User.update({profilePhoto: location},{ where: {id: req.body.userId}})
		  //       .then(dbuser => {
		  //         res.json(dbuser);
		  //       })
		  //       .catch(err => res.status(422).json(err));
		    
	        });
	}




}














