<template>
    <div>
        <div v-for="(item, index) in array" :key="index">
            {{item.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['array']
    }
</script>

<style scoped>

</style>
