import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;


const router = new VueRouter({

});

new Vue({

  render: h => h(App),
}).$mount('#app')
