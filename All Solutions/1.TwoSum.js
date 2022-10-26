// Array of #'s... > 2.. Always Positive.. ALways #'s.. 
// # target... Always one Solution...Cannot use same element



function twoSum(array, target){
// loop through to find arr # to = target
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === target){
                return [i,j]
            }
        }
    }
}


console.log(twoSum([2,7,11,15],9), '[0,1]');
console.log(twoSum([3,2,4],6), '[1,2]');
console.log(twoSum([3,3],6), '[0,1]');
console.log(twoSum([3,2,3],6), '[0,2]');
console.log(twoSum([2,5,5,11],10), '[1,1]');