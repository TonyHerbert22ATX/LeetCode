// given 2 arrays (word1 & word2).... Always Strings... any length... 
// true/false... if words concat are the same



// * This was my first attempt... I think I can make the runtime & memory better
function arrayStringsAreEqual(word1,word2){
    //take each word and concat
    let w1 = word1.join('')
    let w2 = word2.join('')
    return (w1 === w2)? true : false
}

// * Optimized 
function arrayStringsAreEqual(word1,word2){
    return (word1.join('') === word2.join(''))
}


console.log(arrayStringsAreEqual(['ab','c'],['a','bc']), 'true')
console.log(arrayStringsAreEqual(['ab','c'],['a','cc']), 'false')
console.log(arrayStringsAreEqual(['abc','d','ef'],['abcdef']), 'true')