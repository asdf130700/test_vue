import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '../src/router/index.js'

Vue.config.productionTip = false
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


Vue.use(ElementUI)
// Vue.use(VueRouter)



// const router = new VueRouter({
//   mode: history,
//   routes: [
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar }
//   ]
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
