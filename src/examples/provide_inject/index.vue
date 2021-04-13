<template>
    <div>
        ProVideInject
        {{getMap}}
        <child></child>
    </div>
</template>

<script>
    import Child from "./child";
    export default {
        name: "ProVideInject",
        components: {Child},
        data() {
            return {
                getMap: 'getMap'
            }
        },
        provide () {
            return {
                getMap: this.getMap,
                bar: '123'
            }
        }
    }
</script>

<style scoped>

</style>
