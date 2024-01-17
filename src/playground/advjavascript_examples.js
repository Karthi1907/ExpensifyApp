const nums = [10, 20, 30, 40, 50, 5, 24, 15, 2];

// const getNumbersLessThan = function ( nums, srchNum ) {
//     return nums.filter ( function (num) {
//         return num < srchNum
//     })
// };

const getNumbersGreaterThan = ( nums, srchNum ) => nums.filter( (num)  => num >= srchNum );

console.log(getNumbersGreaterThan(nums, 15));
console.log(getNumbersLessThan(40));