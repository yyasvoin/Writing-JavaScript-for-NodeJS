# Writing JavaScript for NodeJS

To run the program run `npm start` from the command line.

We can see an example of using NodeJS's module system:

- [**Importing**](https://gitlab.com/york-u-fs1020-spring-2013/writing-javascript-for-nodejs/blob/master/src/index.js#L3)
- [**Exporting**](https://gitlab.com/york-u-fs1020-spring-2013/writing-javascript-for-nodejs/blob/master/src/double.js#L6)


## Instructions

### Creating and Importing a Module

1. Create a new file: `src/get-flight-number.js`
1. Put the file in _strict mode_
1. Export a function from the newly created file
1. Import the new function in `src/index.js` and verify that it runs


### Using the Fetch API in NodeJS

1. Install the `node-fetch` package: `npm install node-fetch`
1. Import `node-fetch` in `src/get-flight-number.js`
1. The body of the function should look like the following

```js
return fetch('https://api.spacexdata.com/v3/launches/latest')
	.then((response) => {
		return response.json();
	})
	.then((latestLaunch) => {
		return latestLaunch.flight_number;
	});
```


### Calling our new function

1. In `src/index.js` add the following code and run the script

```js
getFlightNumber().then((flightNumber) => {
	console.log(`The latest flight number is ${flightNumber}.`);
});
```


### _BONUS:_ Replace `node-fetch` with `axios`

1. Run: `npm remove node-fetch`
1. Run: `npm install axios`
1. Refer to the [axios documentation](https://www.npmjs.com/package/axios) To figure out how to replace the call.
