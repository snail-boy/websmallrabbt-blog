<template>
    <div>
        <a
                v-bind:href="url"
                class="nav-link"
        >
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: "navigation-link",
        data() {
            return {
                url: 'http://www.baidu.com'
            }
        }
    }
</script>

<style scoped>

</style>
