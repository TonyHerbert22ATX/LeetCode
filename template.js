// array with numbers ... string
// always numbers as string, floats allows

// same array as numbers



function toNumberArray(stringArray){
return stringArray.map((num)=> +num)
}


console.log(toNumberArray(['1.1','2.2','3.3'], [1.1,2.2,3.3]))
console.log(toNumberArray(['1','2','3'], [1,2,3]))