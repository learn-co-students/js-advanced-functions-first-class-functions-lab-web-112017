// Code your solution in this file!

const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0,2);
};

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (calculate) {
  return function (num) {
    return num * calculate;
  }
}

const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier) {
  return createFareMultiplier * 3;
}

function selectDifferentDrivers (arr, func) {
  return func(arr);
}


// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
