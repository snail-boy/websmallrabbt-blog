import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PloyFill from '@/examples/resize-observer-polyfill'
import GoodStorage from '@/examples/good-storage'
import VueDemo from '@/examples/vue'
import VueTouch from '@/examples/vue-touch'
import countup from '@/examples/countup'
import index from '@/pages/index'
import vueRegionPicker from '@/examples/vue-region-picker/index'
import vueAmap from '@/examples/vue-amap/index'
import vuePasswordStrengthMeter from '@/examples/vue-password-strength-meter'

Vue.use(Router)
const progress = {
  func: [
    {call: 'color', modifier: 'temp', argument: '#ffb000'},
    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
    {call: 'location', modifier: 'temp', argument: 'top'},
    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
  ]
}

export default new Router({
  routes: [
    {
      path: '',
      component: index,
      children: [{
        path: '/',
        component: r => require(['@/pages/home'], r),
        meta: {
          progress: progress
        }
      }, {
        path: '/tab',
        component: r => require(['@/pages/tab'], r),
        meta: {
          progress: progress
        }
      }, {
        path: '/swipe',
        component: r => require(['@/pages/swipe'], r),
        meta: {
          progress: progress
        }
      }]
    },
    {
      path: '/rate',
      component: r => require(['@/pages/rate'], r),
      meta: {
        keepAlive: false,
        progress: progress
      }
    },
    {
      path: '/button',
      component: r => require(['@/pages/button'], r),
      meta: {
        keepAlive: false,
        progress: progress
      }
    },
    {
      path: '/address',
      component: r => require(['@/pages/address'], r),
      meta: {
        keepAlive: false,
        progress: progress
      }
    },
    {
      path: '/demo',
      component: r => require(['@/pages/demo'], r),
      meta: {
        keepAlive: false,
        progress: progress
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: r => require(['@/components/HelloWorld'], r),
      meta: {
        title: 'helloworld',
        keepAlive: false
      }
    },
    {
      path: '/PloyFill',
      name: 'PloyFill',
      component: PloyFill,
      meta:{
        title:'首页' // 标题设置在这里
      }
    },
    {
      path: '/GoodStorage',
      name: 'GoodStorage',
      component: GoodStorage,
      meta: {
        title: 'GoodStorage'
      }
    },
    {
      path: '/VueDemo',
      name: 'VueDemo',
      component: VueDemo,
      meta: {
        title: 'VueDemo'
      }
    },
    {
      path: '/vue-touch',
      name: 'vue-touch',
      component: VueTouch,
      meta: {
        title: 'vue-touch'
      }
    },
    {
      path: '/countup',
      name: 'countup',
      component: countup,
      meta: {
        title: 'countup'
      }
    },
    {
      path: '/vue-region-picker',
      name: 'vue-region-picker',
      component: vueRegionPicker,
      meta: {
        title: 'vueRegionPicker'
      }
    },
    {
      path: '/vue-amap',
      name: 'vue-amap',
      component:  vueAmap
    },
    {
      path: '/vue-password-strength-meter',
      name: 'vue-password-strength-meter',
      component:  vuePasswordStrengthMeter
    },
    {
      path: '/vue-bus',
      name: '/vue-bus',
      component:  r => require(['@/examples/vue-bus'], r),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/vue-render',
      name: '/vue-render',
      component:  r => require(['@/examples/vue-render'], r),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/slot',
      name: '/slot',
      component:  r => require(['@/examples/slot'], r)
    },
    {
      path: '/provide-inject',
      name: '/provide-inject',
      component:  r => require(['@/examples/provide_inject'], r)
    },
    {
      path: '/vue-waterfall',
      name: '/vue-waterfall',
      component:  r => require(['@/examples/vue-waterfall'], r)
    },
    {
      path: '/vue-social-share',
      name: '/vue-social-share',
      component:  r => require(['@/examples/vue-social-share'], r)
    },
    {
      path: '/crypto',
      name: '/crypto',
      component:  r => require(['@/examples/crypto'], r)
    },
    {
      path: '/vue-touch-keyboard',
      name: '/vue-touch-keyboard',
      component:  r => require(['@/examples/vue-touch-keyboard'], r)
    },
    {
      path: '/serverPrefetch',
      name: '/serverPrefetch',
      component:  r => require(['@/examples/serverPrefetch'], r)
    },
    {
      path: '/localforage',
      name: '/localforage',
      component:  r => require(['@/examples/localforage'], r)
    }, {
      path: '/vue-drag-resize',
      name: '/vueDragResize',
      component:  r => require(['@/examples/vue-drag-resize'], r)
    }
  ]
})
