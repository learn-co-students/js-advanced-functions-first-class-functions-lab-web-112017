// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num){
  return function(fare) {return fare * num};
}


const fareDoubler = function(fare) {
  fn = createFareMultiplier(2);
  return fn(fare);
}


const fareTripler = function(fare) {
  fn = createFareMultiplier(3);
  return fn(fare);
}


function selectDifferentDrivers(drivers, fn){
  return fn(drivers)
}
