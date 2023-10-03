//Event Loop

setTimeout(() => {
    console.log('setTimeout'); // выполнится 4 (Callback queue(очередь))
    }, 0);
    const promise = new Promise((resolve) => {
    console.log('Promise'); //выполнится 1 потому, что побадает в стэк (Макрозадача)
    resolve();
    });
    promise.then(() => {
    console.log('Promise resolve'); // выполнится 3 (Микрозадача)
    });
    console.log('End'); // выполнится 2 (Макрозадача)

function runCode() {
    console.log('before promise') //1
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log('Zero Promise') // 4
    resolve()
    }, 0)
    })
    }
    setTimeout(() => {
    console.log('Zero') // 3
    }, 0)
    runCode().then(() => console.log('Zero Promise Invoked')) // 5
    console.log('One') // 2
    
