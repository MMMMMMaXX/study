function updb2(done){
    setTimeout(()=>{
        done();
    },3000)
}
updb2(function(){
    console.log("upd2 success.");
});
console.log("I like javascript");