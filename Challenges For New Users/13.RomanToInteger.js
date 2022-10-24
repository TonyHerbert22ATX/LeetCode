const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
}

// *FIRST TRY
function romanToInt(s){
    let result = 0
    // console.log(s);
    for(let i = 0; i < s.length; i++){
        // console.log(s[i]+s[i+1]);
        if(roman.hasOwnProperty(s[i]+s[i+1])){
            result += roman[s[i]+s[i+1]]
            i++
        }else{
            result += roman[s[i]]
        }
    }
    return result
}

// * SECOND TRY
function romanToInt(s){
    let result = 0
    for(let i = 0; i < s.length; i++){
        let current = roman[s[i]]
        let next =roman[s[i+1]]
        if(current < next){
            result += next - current
            i++
        }else{
            result += current
        }
    }
    return result
}





console.log(romanToInt('CMI'), 901)
console.log(romanToInt('III'), 3)
console.log(romanToInt('LVIII'), 58)
console.log(romanToInt('MCMXCIV'), 1994)





