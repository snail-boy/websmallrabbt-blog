<template>
    <div>
        <button type="submit" @click="func">
            <slot>Submit</slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "submit-button",
        methods: {
            func() {
                alert(1)
            }
        }
    }
</script>

<style scoped>

</style>
