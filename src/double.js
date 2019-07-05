'use strict';

// We need to add this string to every file to enforce strict mode

// Whatever we assign as the value of `module.exports` is what will be required
module.exports = function double(a) {
  return a * 2;
};
