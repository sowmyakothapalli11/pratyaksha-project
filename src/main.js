// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "chart.js"
import "hchs-vue-charts";
Vue.use(window.VueCharts)

import { IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)

import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)

import { BCarousel } from 'bootstrap-vue'
Vue.component('b-carousel', BCarousel)

import { BCarouselSlide } from 'bootstrap-vue'

Vue.component('b-carousel-slide', BCarouselSlide)


Vue.use(BootstrapVue);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
