// 根据具体的指令来修改渲染的内容

// patch.js

/**
 * 更改node value，在编译之前，替换 v-model  {{*}} 为真实数据
 * @param {*} vm
 * @param {*} node
 * @param {*} exp
 * @param {*} dir
 */
function patch (vm, node, exp, dir) {

    switch (dir) {
        case 'model':
            /**
             * input / textear
             */
            return function (node , val) {
                node.value = typeof val === 'undefined' ? '' : val;
            }
        case 'text':
            /**
             * {{*}}
             */
            return function (node , val) {
                node.textContent = typeof val === 'undefined' ? '' : val;
            }
    }

}
