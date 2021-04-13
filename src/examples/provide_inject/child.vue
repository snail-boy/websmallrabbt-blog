<template>
    <div>
        <h1>child:</h1>
        {{getMap}}

        <sub-child></sub-child>
    </div>
</template>

<script>
    import SubChild from "./subChild";
    export default {
        name: "child",
        components: {SubChild},
        inject: {
            getMap: {
                from: 'bar',
                default: () => 'default'
            }
        }
    }
</script>

<style scoped>

</style>
