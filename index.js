// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice(drivers.length-2, drivers.length);

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(setInit) {
  const init = setInit
  return function fareMultiplier(multi) {
    return init * multi
  }
}

function fareDoubler(num) {
  const callback = createFareMultiplier(num)
  return callback(2)
}

function fareTripler(num) {
  const callback = createFareMultiplier(num)
  return callback(3)
}

function selectDifferentDrivers(drivers, callback) {
  return callback(drivers);
}
