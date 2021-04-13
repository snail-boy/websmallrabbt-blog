<template>
    <region-picker
            :province="province"
            :city="city"
            :district="district"
            @onchange="change">
    </region-picker>
</template>

<script>
    export default {
        name: "vue-region-picker",
        data () {
            return {
                province: '广东', // you can set initial value or not.
                city: 440100, // by code or name.
                district: ''
            }
        },
        methods: {
            change(val) {
                console.log(val, '1')
            }
        }
    }
</script>

<style scoped>

</style>
