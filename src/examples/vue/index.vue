<template>
    <div>
        VueDemo
        <div id="name">1</div>
    </div>
</template>

<script>
    export default {
        name: "VueDemo",
        created() {
            var obj = {};
            Object.defineProperty(obj,"name",{
                get() {
                    // return document.querySelector("#name").innerHTML;
                },
                set(val) {
                    console.log(document.querySelector("#name").innerHTML)
                    // document.querySelector("#name").innerHTML = val;
                }
            })
            obj.name = "Aaron";
        }
    }
</script>

<style scoped>

</style>
