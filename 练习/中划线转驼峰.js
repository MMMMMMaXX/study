function test( str ) {
    // write code here
    str = str.split('');
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-') {
            str[i+1] = str[i+1].toUpperCase();
        }
    }
    return str.join('').split('-').join('');
}
console.log(test("border-bottom-color"));