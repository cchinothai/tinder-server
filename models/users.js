module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  users.associate = (models) => {
    // users.hasMany(models.posts, {
    //   foreignKey: "userId",
    //   onDelete: "CASCADE",
    // });
    // users.hasMany(models.likes, {
    //   foreignKey: "userId",
    //   onDelete: "CASCADE",
    // });
    // users.hasMany(models.notis, {
    //   foreignKey: "userId",
    //   onDelete: "CASCADE",
    // });
    // users.hasMany(models.Comments, {
    //   foreignKey: "userId",
    //   onDelete: "CASCADE",
    // });
  };
  return users;
};
