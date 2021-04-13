<template>
    <div>
        localforage
    </div>
</template>

<script>
    import local from 'localforage'
    export default {
        name: "index",
        created() {
            local.setItem("key", [1, 2, 'three']).then(res => {
                console.log(res, '123')
            })
            local.setItem("keya", [1, 2, '23']).then(res => {
                console.log(res, '123')
            })
        },
        mounted() {
            local.getItem('key').then((res) => {
                console.log(res, 'res')
            }).catch(err => {
                console.log(err);
            })
            local.length().then(res => {
                console.log(res, '123321')
            })
        }
    }
</script>

<style scoped>

</style>
