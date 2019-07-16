

module.exports = function(sequelize, DataTypes) {
  var Routine = sequelize.define("Routine", {
    // userId:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    dayOfTheWeek: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    routine: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    hoursChecked: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
    }
   
  },
  {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
});



  Routine.associate = function (models) {
    Routine.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Routine;
};



