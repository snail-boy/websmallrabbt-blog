<template>
    <div>
        vue-bus-child
    </div>
</template>

<script>
    export default {
        name: "child",
        data() {
          return {
              newTodoText: 'newTodoText'
          }
        },
        created() {
            this.addTodo()
        },
        methods: {
            addTodo() {
                this.$bus.emit('add-todo', { text: this.newTodoText });
                // this.$bus.emit('once');
                // this.newTodoText = '';
            }
        }
    }
</script>

<style scoped>

</style>
