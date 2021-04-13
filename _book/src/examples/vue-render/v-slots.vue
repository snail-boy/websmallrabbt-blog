// 子组件
<script>
    export default {
        render: function(createElement) {
            let self = this
            return createElement(
                'div', {
                    style: {
                        width: '100%',
                        height: '50px'
                    },
                    class: 'child'
                }, [
                    self.$scopedSlots.default({
                        text: this.childmsg
                    })
                ]
            )
        },
        data() {
            return {
                childmsg: 'childmsg'
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
