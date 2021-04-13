<template>
  <router-layout>
    <van-nav-bar slot="header" title="首页" />
    <div style="height: 1000px">
      <van-cell-group>
        <van-cell title="评分" is-link value="Rate" :to="{path:'/rate'}" />
      </van-cell-group>
<!--      <p style="text-align:center;padding-top:30px">所有页面默认开启了缓存<br>请向下滚动</p>-->
      <van-cell-group>
        <van-cell title="记录滚动条位置" is-link :to="{path:'/rate'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-password-strength-meter" is-link :to="{path:'/vue-password-strength-meter'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-bus" is-link :to="{path:'/vue-bus'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-render" is-link :to="{path:'/vue-render'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="slot" is-link :to="{path:'/slot'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="provide-inject" is-link :to="{path:'/provide-inject'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-touch" is-link :to="{path:'/vue-touch'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="good-storage" is-link :to="{path:'/GoodStorage'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-waterfall" is-link :to="{path:'/vue-waterfall'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-social-share" is-link :to="{path:'/vue-social-share'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="crypto" is-link :to="{path:'/crypto'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-touch-keyboard" is-link :to="{path:'/vue-touch-keyboard'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="serverPrefetch" is-link :to="{path:'/serverPrefetch'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="localforage" is-link :to="{path:'/localforage'}" />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="vue-drag-resize" is-link :to="{path:'/vue-drag-resize'}" />
      </van-cell-group>
    </div>
  </router-layout>
</template>
