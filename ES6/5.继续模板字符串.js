let name="Max"
let address="网吧"
let fmtstr=markdown`你好，${name}！
晚上一起去${address}玩吗？
等你的回信`
// console.log(fmtstr);

function markdown(formats,...args) {
    console.log(formats);
    console.log(args);
    let result="# 信息标题\n";
    for(let i=0;i<formats.length;i++){
        result += formats[i] + "**" + (args[i] || '') + "**";
    }
    return result;
}
