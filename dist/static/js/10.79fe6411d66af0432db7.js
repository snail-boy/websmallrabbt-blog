webpackJsonp([10],{sy9f:function(e,d,s){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var t={data:()=>({chosenAddressId:"1",list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}]}),methods:{onAdd(){this.Toast("新增地址")},onEdit(e,d){this.Toast("编辑地址:"+d)}}},a={render:function(){var e=this,d=e.$createElement,s=e._self._c||d;return s("router-layout",[s("van-nav-bar",{attrs:{slot:"header",title:"AdddressEdit 地址编辑","left-arrow":""},on:{"click-left":function(d){return e.$router.go(-1)}},slot:"header"}),e._v(" "),s("van-address-list",{attrs:{list:e.list,"disabled-list":e.disabledList,"disabled-text":"以下地址超出配送范围"},on:{add:e.onAdd,edit:e.onEdit},model:{value:e.chosenAddressId,callback:function(d){e.chosenAddressId=d},expression:"chosenAddressId"}})],1)},staticRenderFns:[]},n=s("VU/8")(t,a,!1,null,null,null);d.default=n.exports}});
//# sourceMappingURL=10.79fe6411d66af0432db7.js.map