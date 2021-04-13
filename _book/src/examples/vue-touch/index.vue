<template>
    <div>
        <v-touch v-on:swipeleft="onSwipeLeft()">onSwipeLeft!</v-touch>
        <v-touch v-on:swiperight="onSwipeRight()">onSwipeRight!</v-touch>
        <v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch> //点击 渲染为一个a标签
        <v-touch v-on:press="onPress">onPress</v-touch>
        <v-touch  class="swipeLeft" v-on:rotate="onRotate">onRotate</v-touch>
        <v-touch class="swipeLeft" v-on:pan="onPan">移动事件</v-touch>
    </div>
</template>

<script>
    export default {
        name: "VueTouch",
        data() {
            return {

            }
        },

        methods: {
            onSwipeLeft() {
                console.log('swipeleft')
            },
            onSwipeRight() {
                console.log('swipeRight')
            },
            onTap(params) {
                console.log(params, '123')
            },
            onPress() {
                console.log('onPress')
            },
            onRotate() {
                console.log('onRotate')
            },
            onPan(params) {
                console.log(params, 'move')
            }
        }
    }
</script>

<style scoped>
    .swipeLeft {
        height: 100vh;
    }
</style>
