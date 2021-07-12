/*
  Various utility functions used in the math stepper
 */
const Util = {};

// Adds `value` to a list in `dict`, creating a new list if the key isn't in
// the dictionary yet. Returns the updated dictionary.
Util.appendToArrayInObject = function(dict, key, value) {
  if (dict[key]) {
    dict[key].push(value);
  }
  else {
    dict[key] = [value];
  }
  return dict;
};

const operators = ['=', '+', '-', '*', '/', '>', '<', '>=', '<=', '==', '!=']
function isOp(v) {
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] == v) return true
    }
    return false
}

function isNum(v) {
  return !isNaN(parseFloat(v)) && isFinite(v)
}

module.exports = Util;
