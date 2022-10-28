// Array of strings... only letters, no Special. Only lowercase.. Min 1... 

// prefix... if no common return empty string ''




function longestCommonPrefix(strings){
    let sortedStrings = strings.sort((a,z)=> z.length - a.length)
    let result = ''
    for(let i = 0; i < sortedStrings[0].length; i++){
        for(let j = 0; j < sortedStrings.length; j++){
            if(sortedStrings[j][i] !== sortedStrings[0][i]){
                return result
            }
        }
        result = result + sortedStrings[0][i]
    }
    return result
}


console.log(longestCommonPrefix(['flower','flow','flight']), 'fl')
console.log(longestCommonPrefix(['dog','racecar','car']), '')