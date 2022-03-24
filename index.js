// Code your solution in this file!
const returnFirstTwoDrivers = (function(arr) {
  let newArr = [];
    for (let i = 0; i < arr.length; i++){
     newArr.push(arr[i]);
    }
    return newArr.slice(0,2);
});

const returnLastTwoDrivers = (function(arr) {
    let newArr = [];
      for (let i = 0; i < arr.length; i++){
       newArr.push(arr[i]);
      }
      return newArr.slice(2);

});
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    
    
function createFareMultiplier(num){
    return (fare) => num * fare;
};

function fareDoubler (fare) {
    return fare * 2;
};
   

function fareTripler (fare) {
    return fare * 3;
};

function selectDifferentDrivers(arrayOfDrivers, anyFunction){
   return anyFunction(arrayOfDrivers);
}
   
  

    