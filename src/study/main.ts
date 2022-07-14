import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log('哈哈哈')
new Vue({
    render: (h) => h(App)
}).$mount('#app')
