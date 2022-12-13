import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
// Or as a directive-only
import { VueMaskDirective } from 'v-mask'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)
Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
