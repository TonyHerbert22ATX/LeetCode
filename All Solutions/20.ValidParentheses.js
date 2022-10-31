// string... ONLY contain... ()[]{}
//must be closed by same bracket... closed in correct order... every close has a opening bracket



// True || False if valid string

// let brackets = ['()',"[]","{}",'([])','({})','([{}]}', '({[]})']

// function isValid(s){
//     let result = false
//     if(s.length % 2 === 1) return result
// for(let i = 0; i < s.length; i=i+2){
//     console.log(s[i])
//     if(brackets.includes(s[i]+s[i+1])){
//         return true
//     }
// }
// for(let i = 0; i < s.length; i++){
//     console.log(s[i])
//     if(s[i] === "(" && s[i+1] === '[' || s[i+1] === '{'){
//         if(s[i+2])
//         result = true
//     }
// }
// return result
// }

function isValid(s){
    let arr = []
    for(let i = 0; i < s.length; i++){
        const c = s[i]
        console.log(c);
        switch(c){
            case '(': arr.push(')')
                break;
            case '[': arr.push(']')
                break;
            case '{': arr.push('}')
                break;
            default: 
                if(c !== arr.pop()){
                    return false
                }
        }
    }
    return arr.length === 0
}


console.log(isValid('()'), 'true');
console.log(isValid('()[]{}'), 'true');
console.log(isValid('(]'), 'false');
console.log(isValid('{[]}'), 'true');
console.log(isValid('([{}])'), 'true');
console.log(isValid('([{])'), 'false');
console.log(isValid('({])'), 'false');