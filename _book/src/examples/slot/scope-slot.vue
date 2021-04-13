<template>
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
</template>

<script>
    export default {
        name: "scope-slot",
        created() {
            console.log(this.user, 'user')
        }
    }
</script>

<style scoped>

</style>
