<script>
    export default {
        render: function(createElement) {
            let self = this
            return createElement(
                'div', [
                    createElement('input', {
                        domProps: {
                            value: self.childinput
                        },
                        on: {
                            input: function (event) {
                                self.childinput = event.target.value
                            }
                        }
                    }),
                    createElement('div', self.childinput)
                ]
            )
        },
        data() {
            return {
                childinput: 'childinput'
            }
        },
        watch: {
            childinput(v) {
                console.log(v)
            }
        }
    }
</script>

<style scoped>
    .child {
        background: pink
    }
    .more {
        background: red
    }
</style>
