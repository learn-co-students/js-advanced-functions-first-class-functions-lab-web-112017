// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (mult) {
  return (function (num) { return mult * num })
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function (arr, func) {
  return func(arr)
}
