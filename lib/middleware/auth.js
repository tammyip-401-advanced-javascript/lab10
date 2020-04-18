'use strict';

const base64 = require('base-64');
// const User = require('../models/users-model.js');

function basicAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.status(403).send('No user found');
    return;
  }
};

module.exports = basicAuth;