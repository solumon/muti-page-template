export default {
    getPrice: function () {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(100)
            }, 5000);
        })
    }
}
