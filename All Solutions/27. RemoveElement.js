//Array of #... always #'s  No funny business
// #... always #'s (Val)

// Array of #'s remove all val


function removeElement(nums,val){
    // filter arr to remove val
    let counter = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[counter] = nums[i]
            counter++
        }
    }
    console.log(nums.slice(0, counter));
    return counter
}


console.log(removeElement([3,2,2,3], 3), '2 [2,2]')
console.log(removeElement([0,1,2,2,3,0,4,2], 2), '5 [0,1,4,0,3]')