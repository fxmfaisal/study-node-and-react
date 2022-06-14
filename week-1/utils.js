const UtilsModule = {};

/**
 * @param {*} value 
 * @returns {string} Stringified of `value`. If the `value` is boolean or number, it will
 * be converted into string. If it's string, it will be trimmed. If other than
 * that, empty string will be returned.
 */
 UtilsModule.getTrimmedString = function (value) {
  const valType = typeof value;

  return valType == 'string'
    ? value.trim()
    : value === null || value === undefined
      ? ''
      : valType == 'number' || valType == 'boolean'
        ? value.toString()
        : '';
}

module.exports = UtilsModule;