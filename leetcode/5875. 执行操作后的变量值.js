/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    var sum=0;
    for(let i=0;i<operations.length;i++){
        if(operations[i][0]==='+'||operations[i][2]==='+'){
            sum++;
        }else if(operations[i][0]==='-'||operations[i][2]==='-'){
            sum--;
        }
    }
    return sum;
};
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
