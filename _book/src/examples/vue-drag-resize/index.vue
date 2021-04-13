<template>
    <div>
        <VueDragResize :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">　
            <div class="box" :style="{width: + vw+ 'px',height:+vh+'px'}">
                　<img src="../../assets/logo.png" alt="">
            </div>
        </VueDragResize>
    </div>
</template>

<script>
    import VueDragResize from 'vue-drag-resize' //缩放、拖拽
    export default {
        name: "index",
        components: {
            VueDragResize
        },
        data() {
            return {
                vw: 0,
                vh: 0,
                top: 0,
                left: 0
            };
        },
        created() {
            this.vw = 200 + "px";
            this.vh = 200 + "px";
        },
        methods: {
            resize(newRect) {
                this.vw = newRect.width;
                this.vh = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
            }
        }
    }
</script>

<style scoped>

</style>
