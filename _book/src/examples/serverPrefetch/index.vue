<template>
    <div v-if="item">
        {{ item.title }}
    </div>
    <div v-else>...</div>
</template>
<script>
    export default {
        computed: {
            item() {
                let self = this
                setTimeout(() => {
                     self = {
                        title: '123'
                    }
                }, 1000)
            }
        },
        serverPrefetch() {
            this.fetchItem()
        },
        mounted() {
            if (!this.item) {
                this.fetchItem()
            }
        },
        methods: {
            fetchItem() {
                // return the Promise from the action
                console.log('fetchItem')
            }
        }
    }
</script>
