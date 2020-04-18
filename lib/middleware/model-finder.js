'use strict';
const usersSchema = require('../models/users-schema.js');
const Model = require('../models/model.js');

const modelFinder = (req, res, next) => {

  switch (req.params.model) {
    case 'users':
      console.log('found model users');
      req.colModel = new Model(usersSchema);
      next();
      break;
    default:
      console.log('invalid model');
      res.status(404);
      res.end();
      break;
  }
};

module.exports = modelFinder;