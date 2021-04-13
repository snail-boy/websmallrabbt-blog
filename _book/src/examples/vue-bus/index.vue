<template>
    <router-layout>
        <van-nav-bar slot="header" title="vue-bus" left-arrow @click-left="$router.go(-1)" />
        <vue-child></vue-child>
    </router-layout>
</template>

<script>
    import VueChild from './child.vue'
    export default {
        name: "index",
        components: {
            VueChild
        },
        created() {
            this.$bus.on('add-todo', this.addTodo);
            this.$bus.once('once', () => console.log('This listener will only fire once'));
        },
        beforeDestroy() {
            this.$bus.off('add-todo', this.addTodo);
        },
        methods: {
            addTodo(newTodo) {
                console.log(newTodo, 'addTodo')
            }
        },
    }
</script>

<style scoped>

</style>
