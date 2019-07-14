

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // userId:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    time: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
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

