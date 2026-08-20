module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {

    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },

    public_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },

    
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    phone_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },

  }, {
    underscored: true
  });
  return User;
};