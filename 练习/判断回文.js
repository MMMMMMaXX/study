function strIf(str) { 
    return str == str.split('').reverse().join('')
}
var s = 'qwerewq'
console.log(strIf(s));