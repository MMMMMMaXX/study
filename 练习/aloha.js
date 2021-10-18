/*
aloha
时间限制： 3000MS
内存限制： 786432KB
题目描述：
  给你一个只包含小写字母的字符串，你可以按任意顺序重排这个字符串中的字符。问重排后的串中至多能有多少个'aloha'子串？（不含引号）输出个数。

  一个字符串中，任意连续的字符构成的子字符串称为子串。例如对于字符串'abacd'来说，'bac'和'abacd'都是它的子串，而'aac'和'abc'不是。

输入描述
一行，包含一个字符串S。

输出描述
一个整数，表示重排后最多能有的'aloha'子串个数。
*/
function findAloha(S) {
    let alohaNum = [0 , 0 , 0 , 0];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'a') {
            alohaNum[0]++;
        } else if (S[i] === 'l') {
            alohaNum[1]++;
        } else if (S[i] === 'o') {
            alohaNum[2]++;
        } else if (S[i] === 'h') {
            alohaNum[3]++;
        }
    }
    alohaNum[0]--;
    alohaNum.sort();
    return alohaNum[0];
}
console.log(findAloha('alohalohalohaaaalo'));