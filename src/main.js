import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'

if (process.env.NODE_ENV === 'production') {
  // const { mockXHR } = require('../mock')
  // mockXHR()
}

Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
