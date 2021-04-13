<template>
    <div>
        <div>GoodStorage</div>
        <button @click="delStorage">删除</button>
    </div>
</template>

<script>
    import {removeFun, storageFun, storageSessionFun} from "../../utils/cache";

    export default {
        name: "",
        created() {
            storageFun('wk')
            storageSessionFun('www')
        },
        methods: {
            delStorage() {
                removeFun('name')
            }
        }
    }
</script>

<style scoped>

</style>
