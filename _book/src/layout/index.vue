<template>
  <router-layout>
    <transition>
      <router-view></router-view>
    </transition>
    <van-tabbar slot="footer" :fixed="true" v-model="active">
      <van-tabbar-item to="/HelloWorld" icon="shop">HelloWorld</van-tabbar-item>
      <van-tabbar-item to="/PloyFill" icon="chat">PloyFill</van-tabbar-item>
      <van-tabbar-item to="/GoodStorage" icon="records">GoodStorage</van-tabbar-item>
    </van-tabbar>
  </router-layout>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    var path = this.$route.path
    switch (path) {
      case '/HelloWorld':
        this.active = 0
        break
      case '/PloyFill':
        this.active = 1
        break
      case '/GoodStorage':
        this.active = 2
        break
      default:
        this.active = 0
        break
    }
  }
}
</script>
