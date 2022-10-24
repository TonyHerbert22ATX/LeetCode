const roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
}

function intToRoman(num){
    let answer = ''
    console.log(num);
    while(num != 0)
    if(num >= 1000){
        answer += roman[1000]
        num -= 1000
    }else if(num >= 900){
        answer += roman[100] + roman[1000]
        num -= 900
    }else if(num >= 500){
        answer += roman[500]
        num -= 500
    }else if(num >= 400){
        answer += roman[100] + roman[500]
        num -= 400
    }else if(num >= 100){
        answer += roman[100]
        num -= 100
    }else if(num >= 90){
        answer += roman[10] + roman[100]
        num -= 90
    }else if(num >= 50){
        answer += roman[50]
        num -= 50
    }else if(num >= 40){
        answer += roman[10] + roman[50]
        num -= 40
    }else if(num >= 10){
        answer += roman[10]
        num -= 10
    }else if(num >= 9){
        answer += roman[1] + roman[10]
        num -= 9
    }else if(num >= 5){
        answer += roman[5]
        num -= 5
    }else if(num >= 4){
        answer += roman[1] + roman[5]
        num -= 4
    }else{
        answer += roman[1]
        num -= 1
    }
    return answer
}







console.log(intToRoman(3), 'III')
console.log(intToRoman(58), 'LVIII')
console.log(intToRoman(1994), 'MCMXCIV')





