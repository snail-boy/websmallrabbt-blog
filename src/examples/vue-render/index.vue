<template>
    <div>
        <child>
            <h1 slot="childheader">childheader</h1>
            <h2 slot="childbody">childbody</h2>
            <h3 slot="childfooter">childfooter</h3>
        </child>
        <v-model></v-model>
        <v-slots>
            <template slot-scope="scoped">
                {{scoped.text}}
            </template>
        </v-slots>
    </div>
</template>

<script>
    import Child from "../vue-render/child";
    import VModel from "./v-model";
    import VSlots from "./v-slots";
    export default {
        name: "index",
        components: {VSlots, VModel, Child},
        created() {
            // console.log(vm, 'vm')
            console.log(this.$root)
        }
    }
</script>

<style scoped>

</style>
