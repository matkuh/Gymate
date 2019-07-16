
module.exports = function(sequelize, DataTypes) {
  var Stat = sequelize.define("Stat", {
    // userId:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },

    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1],
        isNumeric: true
      }
    },

    hours: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1],
        isNumeric: true
      }
    },

    poundsLossed: {
       type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1],
        isNumeric: true
      }
    },

   bmi: {
     type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      len: [1],
      isNumeric: true
    }
  },

   created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
   
  },
  {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});



  Stat.associate = function (models) {
    Stat.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Stat;
};



