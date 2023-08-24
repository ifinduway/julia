import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
// Or as a directive-only
import { VueMaskDirective } from 'v-mask'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuetify, {
  VApp,
  VCombobox,
  VSelect,
  VInput,
  VTextField,
  VCardText,
} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)
Vue.use(VueAxios, axios)
Vue.use(Vuetify, {
  components: {
    VApp,
    VCombobox,
    VSelect,
    VInput,
    VTextField,
    VCardText,
  }
})

const opts = {}

Vue.directive('mask', VueMaskDirective)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(opts)
}).$mount('#app')
