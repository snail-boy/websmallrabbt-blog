
<script>
    export default {
        render: function(createElement) {
            let childheader = this.$slots.childheader,
                childbody = this.$slots.childbody,
                childfooter = this.$slots.childfooter;
            return createElement(
                'div', {
                    // class: {
                    //     child: true,
                    //     more: false
                    // },
                    // attrs: {
                    //     id: 'foo',
                    //     name: 'child'
                    // },
                    // style: {
                    //     width: '100%',
                    //     height: '50px'
                    // },
                    // domProps: {
                    //     innerHTML: 'child-innerHTML-demo'
                    // }

                    // 元素

                    // this.$slots
                    class: 'child',
                    style: {
                        width: '100%'
                    },

                },
                [
                    createElement('div', childheader),
                    createElement('div', childbody),
                    createElement('div', childfooter),
                ]
            )
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
