/-- asynchronous basics --/

console.log("Start");

setTimeout(() => {
    console.log('Two second timer.')
}, 2000)

setTimeout(() => {
    console.log('Zero second timer.')
}, 0)

console.log("Stop");
