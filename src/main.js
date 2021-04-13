// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'

import RouteTransition from '@/components/vue-route-transition'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(RouteTransition)

import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'

Vue.use(RegionPicker, {
  region: REGION_DATA,
  vueVersion: 1 // or 2, default 1
})



var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)


import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '091bea0bd6ea718e685bd8eddd5d9568',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});

import VueProgressBar from 'vue-progressbar'
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}
Vue.use(VueProgressBar, options)


import LazyRender from 'vue-lazy-render'
Vue.use(LazyRender)


import VueBus from 'vue-bus';
Vue.use(VueBus);


import waterfall from 'vue-waterfall2'
Vue.use(waterfall)


var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

import VueTouchKeyboard from "vue-touch-keyboard";
import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style





Vue.use(VueTouchKeyboard);


Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
