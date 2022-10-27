// integer ... any number

// T/F if palindrome


function isPalindrome(number){
    let reverseNumber = number.toString().split('').reverse().join('')
    console.log(reverseNumber)
    return (reverseNumber == number)
}



console.log(isPalindrome(121), 'True');
console.log(isPalindrome(-121), 'False');
console.log(isPalindrome(10), 'False');