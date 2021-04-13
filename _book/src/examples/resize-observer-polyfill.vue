<template>
    <div>
        resize-observer-polyfill
    </div>
</template>

<script>
    import ResizeObserver from 'resize-observer-polyfill';

    export default {
        name: "resize-observer-polyfill",
        created() {
            const ro = new ResizeObserver((entries, observer) => {
                for (const entry of entries) {
                    const {left, top, width, height} = entry.contentRect;

                    console.log('Element:', entry.target);
                    console.log(`Element's size: ${ width }px x ${ height }px`);
                    console.log(`Element's paddings: ${ top }px ; ${ left }px`);
                }
            });

            ro.observe(document.body);
        }
    }
</script>

<style scoped>

</style>
