const validator = require('../utilities/validator');

const validateContact = async (req, res, next) => {
  const validationRule = {
    "firstName": "required|string",
    "lastName": "required|string",
    "email": "required|string|email",
    "favoriteColor": "required|string",
    "birthday": "required|string",
  };

  await validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
          res
          .status(412)
          .json({
                  success: false,
                  message: 'Validation failed',
                  data: err
                });
      } else {
          next();
      }
  }).catch( err => console.log(err))
};

const updateContact = async (req, res, next) => {
  const validationRule = {
    "firstName": "string",
    "lastName": "string",
    "email": "string|email",
    "favoriteColor": "string",
    "birthday": "string",
  };

  await validator(req.body, validationRule, {}, async (err, status) => {
      if (!status) {
          res
          .status(412)
          .json({
                  success: false,
                  message: 'Validation failed',
                  data: err
                });
      } else {
         next();
      }
  }).catch( err => console.log(err))
};

module.exports = {
  validateContact,
  updateContact
}