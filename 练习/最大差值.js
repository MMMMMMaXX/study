function getMaxP(arr) {
    return Math.max(...arr) - Math.min(...arr)
}
var arr = [10, 5, 11, 7, 8, 9]
console.log(getMaxP(arr));