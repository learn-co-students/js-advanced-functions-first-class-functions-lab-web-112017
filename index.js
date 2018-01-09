// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  newArray = array.slice(0,2);
  return newArray;
};

const returnLastTwoDrivers = function (array) {
  newArray = array.slice(-2);
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mult) {
  return function (num) {
    return mult * num;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, func) {
   return func(array)  
}
