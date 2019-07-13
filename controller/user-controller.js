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

	addUser: function (req, res) {
    db.User.create(req.body).then(function(dbRoutine) {
      res.json(dbUser);
    });
  },




	getUser: function (req, res) {

	db.User.findAll({
	      where: {
	        id: req.params.id
	      }
	    }).then(function(dbUser) {
	      res.json(dbUser);
	    });
  },



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


	        console.log(`https://gymateproject2.s3.us-west-1.amazonaws.com/${profilePhoto.image}.jpg`);

	         uploadImage(req, profilePhoto.image, function(location){
	         	console.log(location);
             	db.User.update(
		      	{
			        profilePhoto: location,
		      	},
		      	{
		        	where: {id: 1 }
		      	})
			    .then(function(dbUser)
			    {
		      		res.json(dbUser);
			    });

	        });
	},




	delete: function(req, res) {
		console.log("delete")
	}

}





