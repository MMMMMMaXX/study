async function test(){
    const p = new Promise(r => setTimeout(r, 1000))
    setTimeout(console.log('a'), 0)
    await p
    console.log('b');
  }
  test() 
  