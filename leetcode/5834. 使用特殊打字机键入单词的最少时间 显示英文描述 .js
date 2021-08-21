/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let now = 'a';
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        if(now.charCodeAt() < 'n'.charCodeAt()){
            if (word[i] <= String.fromCharCode(now.charCodeAt()+13)) {
                if(word[i].charCodeAt() - now.charCodeAt() > 0) {
                    sum = sum + word[i].charCodeAt() - now.charCodeAt() + 1;
                    // console.log('you',word[i].charCodeAt() - now.charCodeAt() + 1);
                } else {
                    sum = sum + now.charCodeAt() - word[i].charCodeAt() + 1;
                    // console.log('you',now.charCodeAt() - word[i].charCodeAt() + 1);
                }
            } else {
                sum = sum + 26 - (word[i].charCodeAt() - now.charCodeAt()) + 1;
                // console.log('zuo',26 - (word[i].charCodeAt() - now.charCodeAt()) + 1);
            }    
        } else {
            if (word[i] <= String.fromCharCode(now.charCodeAt())) {
                if(now.charCodeAt() - word[i].charCodeAt() > 13) {
                    sum = sum + 26 - (now.charCodeAt() - word[i].charCodeAt()) + 1;
                    // console.log('you2',26 - (now.charCodeAt() - word[i].charCodeAt()) + 1);
                } else {
                    sum = sum + now.charCodeAt() - word[i].charCodeAt() + 1;
                    // console.log('you2',now.charCodeAt() - word[i].charCodeAt() + 1);
                }
            } else {
                if(word[i].charCodeAt() - now.charCodeAt() > 13) {
                    sum = sum + (word[i].charCodeAt() - now.charCodeAt()) + 1;
                    // console.log('zuo2',(word[i].charCodeAt() - now.charCodeAt()) + 1);
                } else {
                    sum = sum + word[i].charCodeAt() - now.charCodeAt() + 1;
                    // console.log('zuo2',word[i].charCodeAt() - now.charCodeAt() + 1);
                }
            }
        }
        now = word[i];
    }
    return sum;
};
console.log(minTimeToType("evbedrhwy"));