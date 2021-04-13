// 所有支持到的指令

// directives.js

/**
 * 指令集和
 *
 * v-model
 */
var directives = {
    /**
     * 链接patch方法，将指令转化为真实的数据并展示
     */
    _link: function (vm, node, exp, dir) {
        var patchFn = patch(vm, node, exp, dir);
        patchFn  && patchFn(node, vm._getVal(exp));
    },

    /**
     * v-model事件处理，这里的v-model只针对了<input type='text'>
     */
    model: function (vm, node, exp) {
        this._link(vm, node, exp, 'model');

        var val = vm._getVal(exp);
        node.addEventListener('input', function (e) {
            var newVal = e.target.value;
            if (newVal === val) return;
            vm._setVal(exp,newVal);
            val = newVal;
        });
    },

    /**
     * {{}}事件处理
     */
    text: function (vm, node, exp) {
        this._link(vm, node, exp, 'text');
    }
}
