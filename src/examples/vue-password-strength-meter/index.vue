<template>
    <router-layout>
        <van-nav-bar slot="header" title="密码强度器" left-arrow @click-left="$router.go(-1)" />
<!--        <password-->
<!--                v-model="password"-->
<!--                :toggle="true"-->
<!--                @score="showScore"-->
<!--                @feedback="showFeedback"-->
<!--        />-->
        <input type="password" v-model="password">
        <password v-model="password" :strength-meter-only="true"/>
    </router-layout>
</template>

<script>
    import Password from 'vue-password-strength-meter'
    export default {
        name: "index",
        components: { Password },
        data() {
            return {
                password: null,
            }
        },
        methods: {
            showFeedback ({suggestions, warning}) {
                console.log('🙏', suggestions)
                console.log('⚠', warning)
            },
            showScore (score) {
                console.log('💯', score)
            }
        }
    }
</script>

<style scoped>
    .vue-password {
        width: 100%;
        height: 100%;
    }

</style>
