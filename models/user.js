module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    buddyId: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,

    
    profilePhoto: {
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




   User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Routine, {
      onDelete: "cascade"
    });
  };

  return User;
};








