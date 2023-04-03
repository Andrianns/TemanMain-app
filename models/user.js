'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Event, { foreignKey: 'AdminId' });
      User.hasMany(models.Request, { foreignKey: 'UserId' });
      User.hasMany(models.Invitation, { foreignKey: 'UserId' });
      // User.hasMany(models.Magnet, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Email is already exists.',
        },
        validate: {
          notNull: {
            msg: 'Email cannot be empty.',
          },
          notEmpty: {
            msg: 'Email cannot be empty.',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password cannot be empty.',
          },
          notEmpty: {
            msg: 'Password cannot be empty.',
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'First Name cannot be empty.',
          },
          notEmpty: {
            msg: 'First Name cannot be empty.',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Last Name cannot be empty.',
          },
          notEmpty: {
            msg: 'Last Name cannot be empty.',
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Address cannot be empty.',
          },
          notEmpty: {
            msg: 'Address cannot be empty.',
          },
        },
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Birthdate cannot be empty.',
          },
          notEmpty: {
            msg: 'Birthdate cannot be empty.',
          },
        },
      },
      profilePict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Profile Pict cannot be empty.',
          },
          notEmpty: {
            msg: 'Profile Pict cannot be empty.',
          },
        },
      },
      instagramAccount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Instagram cannot be empty.',
          },
          notEmpty: {
            msg: 'Instagram cannot be empty.',
          },
        },
      },
      twitterAccount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Twitter cannot be empty.',
          },
          notEmpty: {
            msg: 'Twitter cannot be empty.',
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Phone Number cannot be empty.',
          },
          notEmpty: {
            msg: 'Phone Number cannot be empty.',
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Gender cannot be empty.',
          },
          notEmpty: {
            msg: 'Gender cannot be empty.',
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Role cannot be empty.',
          },
          notEmpty: {
            msg: 'Role cannot be empty.',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
