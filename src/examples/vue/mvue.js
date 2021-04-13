// 入口函数

function MVue(options) {
    this.$options = options
    this._data = options.data || {}
}
MVue.prototype = {
    _getVal: function (exp) {
        return this._data[exp]
    },
    _setVal: function (exp, newVal) {
        this._data[exp] = newVal
    }
}


