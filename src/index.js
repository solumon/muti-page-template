console.log('hello webpack')

const prm = new Promise(resolve => {
    setTimeout(() => {
        resolve(100)
    }, 5000);
})

prm.then((v) => {
    console.log('log ', v)
})
