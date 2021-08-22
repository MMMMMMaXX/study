/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 输入s，返回使得s中不存在两个相同频次的字符所需的最小删除次数
 * @param s string字符串 输入字符串
 * @return int整型
 */
 function minDeletions( s ) {
    // write code here
    let temp = {};
    for(let i = 0; i < s.length; i++) {
        if(temp[s[i]] >= 1) {
            temp[s[i]]++
        } else {
            temp[s[i]] = 1;
        }
        console.log(s[i]);
    }
    
    console.log(temp);
}
minDeletions("aab")
