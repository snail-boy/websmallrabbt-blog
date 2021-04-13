<template>
    <div>
        <h1>grandChild:</h1>
        {{getMap}}
    </div>
</template>

<script>
    export default {
        name: "subChild",
        inject: {
            getMap: {
                from: 'getMap',
                default: () => [1, 2, 3]
            }
        }
    }
</script>

<style scoped>

</style>
