(function(t){function e(e){for(var r,o,c=e[0],l=e[1],s=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"35f1":function(t,e,n){},"4b02":function(t,e,n){"use strict";var r=n("d710"),a=n.n(r);a.a},"4c75":function(t,e,n){t.exports=n.p+"img/fernando-gomez-developer.7e57ccf0.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Loading"),n("Slider")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.loading?n("div",{staticClass:"loading"}):t._e()])},c=[],l={name:"Loading",data:function(){return{loading:!0}},beforeMount:function(){this.loader()},methods:{loader:function(){var t=this;window.addEventListener("load",(function(){t.loading=!1}))}}},s=l,u=(n("cb13"),n("2877")),f=Object(u["a"])(s,o,c,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider__item"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("SliderImage"),n("SliderCopy")],1)])])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col slider__copy"},[n("span",[t._v("Welcome to my World!")]),n("SliderTitle"),n("h2",{staticClass:"slider__subtitle"},[t._v("Based in COL ")]),n("SocialNetworks")],1)},_=[],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social__networks"},[n("li",[n("a",{attrs:{href:"https://www.linkedin.com/in/fagomezch/",target:"_blank"}},[n("span",{staticClass:"icon icon-linkedin"})])]),n("li",[n("a",{attrs:{href:"https://github.com/fagomezch",target:"_blank"}},[n("span",{staticClass:"icon icon-github"})])]),n("li",[n("a",{attrs:{href:"tel:573127838602"}},[n("span",{staticClass:"icon icon-whatsapp"})])]),n("li",[n("a",{attrs:{href:"mailto:fagomezch@gmail.com"}},[n("span",{staticClass:"icon icon-gmail"})])])])}],g={name:"SocialNetworks"},w=g,y=(n("ae26"),Object(u["a"])(w,b,h,!1,null,null,null)),S=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"slider__title"},[t._v(" Hi, I’m Fernando "),t._l(t.items,(function(e,r){return n("div",{key:e.id,staticClass:"slider__transition"},[n("transition",{attrs:{name:"fade"}},[t.currentItem===r?n("span",{staticClass:"slider__text"},[t._v(" "+t._s(e)+" ")]):t._e()])],1)}))],2)},O=[],j={name:"SliderCopy",data:function(){return{items:["Web Engineer","UX developer","JavaScript lover"],currentItem:0,show:!0}},mounted:function(){var t=this;setInterval((function(){t.currentItem+=1,t.items.length<=t.currentItem&&(t.currentItem=0)}),5e3)}},x=j,k=(n("4b02"),Object(u["a"])(x,C,O,!1,null,null,null)),E=k.exports,I={name:"SliderCopy",components:{SliderTitle:E,SocialNetworks:S}},$=I,P=(n("b1b0"),Object(u["a"])($,v,_,!1,null,null,null)),z=P.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col slider__img"},[r("img",{attrs:{alt:"Fernando Gómez - Frontend developer image profile",src:n("4c75")}})])}],T={name:"SliderImage"},F=T,J=(n("d668"),Object(u["a"])(F,L,M,!1,null,null,null)),N=J.exports,W={name:"Slider",components:{SliderCopy:z,SliderImage:N}},A=W,B=(n("6afe"),Object(u["a"])(A,p,m,!1,null,null,null)),G=B.exports,H={name:"App",components:{Loading:d,Slider:G}},U=H,X=(n("5c0b"),Object(u["a"])(U,a,i,!1,null,null,null)),q=X.exports,D=n("2f62");r["a"].use(D["a"]);var K=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("e9a1"),n("825b"),n("6ee7"),n("c55a"),n("e023");r["a"].config.productionTip=!1,new r["a"]({store:K,render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"6afe":function(t,e,n){"use strict";var r=n("76fa"),a=n.n(r);a.a},"6e55":function(t,e,n){},"6ee7":function(t,e,n){},"76fa":function(t,e,n){},"825b":function(t,e,n){},"9c0c":function(t,e,n){},ae26:function(t,e,n){"use strict";var r=n("bd76"),a=n.n(r);a.a},b1b0:function(t,e,n){"use strict";var r=n("35f1"),a=n.n(r);a.a},bd76:function(t,e,n){},c55a:function(t,e,n){},cb13:function(t,e,n){"use strict";var r=n("f314"),a=n.n(r);a.a},d668:function(t,e,n){"use strict";var r=n("6e55"),a=n.n(r);a.a},d710:function(t,e,n){},e023:function(t,e,n){},e9a1:function(t,e,n){},f314:function(t,e,n){}});
//# sourceMappingURL=app.ccd80fc2.js.map