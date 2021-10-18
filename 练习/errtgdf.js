function fn(){
    
    var read_line = require('readline');
    let inn = '';
    let s,e; 
    inn = 'IBIPBPIPPPP';
    s=0;
    e=10;
    inn = read_line();
    let res = [];
    for(let i=s;i<s+e;i++){
        if(inn[i]==='I'&&res.length===0){
            res.push(inn[i]);
        } else if(inn[i]==='I'&&res.length>0) {
            console.log(res.join(''))
            res=[];
            res.push(inn[i]);
        } else if(inn[i]!=='I'){
            res.push(inn[i]);
        }
    }    
    if(res.length>1){
        console.log(res.join(''));
    }
}
fn()

