/**
 * @param {string} s
 * @return {string}
 */
/*
dabab
babad
*/
var longestPalindrome = function(s) {
    // // var rs = s.split('').reverse().join('');
    // var str = '';
    // var temp = '';
    // var max = 0;
    // // for(i in s) {
    // //     for(j in rs) {
    // //         if(s[i] === re[j]) {
    // //             temp.push(s[i]);
    // //         }
    // //     }
    // //     if(temp.length > max) {
    // //         str = temp;
    // //     }
    // //     temp = [];
    // // }
    // for(var i = 0; i < s.length; i++) {
    //     for(var j = i; j < s.length; j++) {
    //         temp += s[j];
    //         // console.log(s[j]);            
    //         if(temp === temp.split('').reverse().join('') && temp.length > max) {
    //             str = temp;
    //             max = temp.length;
    //             // console.log(str);
    //         }
    //     }
    //     // console.log('-------');
    //     temp = '';
    // }
    // return str;

    if (!s || s.length === 0) return "";
  let res = s[0];

  const dp = [];

  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true;
      // specail case 1
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      // specail case 2
      else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        // state transition
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        // update res
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};
// var s = [1,2,3];
// var str = '789'
// console.log(s.length);
// console.log(str.split('').reverse().join(''));
console.log(longestPalindrome('baaabc'));