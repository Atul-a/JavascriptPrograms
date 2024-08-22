function pallindrome( number ){
    const str = number.toString();
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

const number = 1411;
if( pallindrome(number) ){
    console.log("Pallindrome number is = " + number);
}else{
    console.log("number is not pallindrome");
}