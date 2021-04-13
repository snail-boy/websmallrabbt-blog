<template>
    <div>
        count-to
        <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
    </div>
</template>

<script>
    import CountTo from 'vue-count-to'

    export default {
        name: "index",
        components: {
            CountTo
        },
        data() {
            return {
                count: ''
            }
        },
    }
</script>

<style scoped>
    .card-panel-num {
        font-size: 20px;
        color: red;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

</style>
