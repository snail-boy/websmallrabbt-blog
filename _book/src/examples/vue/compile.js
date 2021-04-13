// 渲染dom，解析指令
function Compile(vm, el) {
    this.$vm = vm;
    el = this.$el = this.isElementNode(el) ? el: document.querySelector('el')
    if(!el) return
    this._update(el);
}
Compile.prototype = {
    _update: function (el) {
        this.$fragment = document.createDocumentFragment()
        this.createElm(el)
        el.appendChild(this.$fragment)
    },

    createElm: function (node) {
        var childNode = node.firstChild;
        if(childNode) {
            this.$fragment.appendChild(childNode)
            this.createElm(node)
        }
    }
}
