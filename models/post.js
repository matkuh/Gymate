

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // userId:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
        isUrl: true
      }
    },
   
  },
  {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});



  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};

