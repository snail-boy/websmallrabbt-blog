<template>
    <lazy-render :data="myArray" :time="3000" :limit="5000" track-by-data>
        <data-array :array="myArray"></data-array>
    </lazy-render>
<!--    <data-array :array="myArray"></data-array>-->
</template>

<script>
    import dataArray from '@/components/dataArray'
    export default {
        name: 'HelloWorld',
        components: {
            dataArray
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                myArray: []
            }
        },
        created() {
           setTimeout(() => {
               this. myArray = [
                   {
                       name: 'zhangsan'
                   },
                   {
                       name: 'zhangsan'
                   },{
                       name: 'zhangsan'
                   },{
                       name: 'zhangsan'
                   }
               ]
           }, 3000)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
