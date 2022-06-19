const Validation = {};

const createResponse = Validation.createResponse = function (correct, message) {
  return {
    correct: correct,
    message: message
  };
}

/**
 * The type of `arrOfValidations` is Array<[Function, var]> where Function is
 * validation method and var is the given param to test with.
 * @returns object containing the result. See `Validation.createResponse`
 *   above;
 */
Validation.executeValidations = function (arrOfValidations) {
  var incorrectResult;
  var correctResult = createResponse(true, 'All validation passed.');

  if (!Array.isArray(arrOfValidations)) {
    return createResponse(false, 'Invalid type of parameter.');
  }

  if (arrOfValidations.length == 0) {
    return correctResult;
  }

  arrOfValidations.forEach(item => {
    if (
      typeof incorrectResult == 'undefined' &&
      Array.isArray(item) && item.length == 2 && typeof item[0] == 'function'
    ) {
      var validation = item[0](item[1]);

      if (!validation.correct) {
        incorrectResult = validation;
      }
    }
  });

  return typeof incorrectResult != 'undefined'
    ? incorrectResult
    : correctResult;
};

/**
 * To check if the provided `name` is correct and to follow these rules:
 *   a. required
 *   b. max length allow 100
 * @param {string} name 
 * @returns object containing the result. See `Validation.createResponse`
 *   above;
 */
Validation.isNameCorrect = function (name) {
  const nameType = typeof name;

  if (nameType != 'string'){
    return createResponse(false, 'Name should be string');
  }
  
  if (name == '') {
    return createResponse(false, 'Name is required');
  }

  if (name.length > 100) {
    return createResponse(false, 'Maximum length for name is 100 characters');
  }

  return createResponse(true, 'Valid!');
};

Validation.isUserNameCorrect = function (name) {
  const nameType = typeof name;

  if (nameType != 'string'){
    return createResponse(false, 'Username should be string');
  }
  
  if (name == '') {
    return createResponse(false, 'Username is required');
  }

  return createResponse(true, 'Valid!');
};

module.exports = Validation;
