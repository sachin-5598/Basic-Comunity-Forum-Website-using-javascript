const joi = require('joi');

const db = require('../connection');
const tableNames = require('../../constants/tableNames');

const schema = joi.object().keys({
  display_name: joi.string().required(),
  email: joi.string().email().required(),
  google_id: joi.string().required(),
  is_deleted: joi.boolean(),
  role_id: joi.number().integer(),
  image_url: joi.string().uri({
    scheme: [
      /https/
    ]
  })
});

module.exports = {
  findByEmail(email) {
    return db(tableNames.user).where('email', email).first();
  },
  update(id, user) {
    return db(tableNames.user).where('id', id).update(user).returning('*');
  },
  insert(user) {
    const result = schema.validate(user);
    if (!result.error){
      return db(tableNames.user).insert(user).returning('*');
    } else {
      return Promise.reject(result.error);
    }
  }
};
