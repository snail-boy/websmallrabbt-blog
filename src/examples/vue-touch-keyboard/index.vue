<template>
    <div>
        <h1>vue-touch-keyboard</h1>
        <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
        <vue-touch-keyboard :options="options" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" />
    </div>
</template>

<script>

    export default {
        name: "vue-touch-keyboard",
        data() {
            return {
                visible: false,
                layout: "normal",
                input: null,
                options: {
                    useKbEvents: false,
                    preventClickEvent: false
                }
            }
        },
        methods: {
            accept(text) {
                alert("Input text: " + text);
                this.hide();
            },

            show(e) {
                this.input = e.target;
                this.layout = e.target.dataset.layout;

                this.visible = true
                // if (!this.visible)
                //     this.visible = true
            },

            hide() {
                this.visible = false;
            }
        }
    }
</script>

<style scoped>

</style>
