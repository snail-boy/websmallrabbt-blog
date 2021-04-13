<template>
    <!--    <router-view v-wechat-title='$route.meta.title'/>-->
    <div id="app">
        <vue-route-transition :keepAlive="true"></vue-route-transition>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'hah',
            titleTemplate: '%s - Yay!',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        },
        data() {
            return {
                active: 0
            }
        },
        mounted() {
            this.$Progress.finish()
        },
        created() {
            this.$Progress.start()
            this.$router.beforeEach((to, from, next) => {
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress
                    this.$Progress.parseMeta(meta)
                }
                //  start the progress bar
                this.$Progress.start()
                //  continue to next page
                next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
                //  finish the progress bar
                this.$Progress.finish()
            })
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    body {
        background: #f1f1f1;
    }
</style>
