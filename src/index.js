'use strict';

// Files should always start with: 'use strict';

const double = require('./double');
const getFlightNumber = require('./get-flight-number');

console.log('double(4):', double(4));
console.log('double(2.5):', double(2.5));

getFlightNumber().then((flightNumber) => {
  console.log(`The latest flight number is ${flightNumber}.`);
});
