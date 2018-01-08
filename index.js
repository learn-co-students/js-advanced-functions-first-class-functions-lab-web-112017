// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return (function(fare) { return fare * int; });
}

function fareDoubler(int) {
  return createFareMultiplier(2)(int);
}

function fareTripler(int) {
  return createFareMultiplier(3)(int);
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
