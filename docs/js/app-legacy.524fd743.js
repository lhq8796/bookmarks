(function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],s=0,b=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);v&&v(t);while(b.length)b.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var l=a[c];0!==o[l]&&(r=!1)}r&&(n.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},o={app:0},n=[];function c(e){return u.p+"js/"+({"about~bookmarks":"about~bookmarks",about:"about",bookmarks:"bookmarks"}[e]||e)+"-legacy."+{"about~bookmarks":"cb4a4a69",about:"ce91450c",bookmarks:"c047dbcd"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var i=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(s);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",i.name="ChunkLoadError",i.type=r,i.request=n,a[1](i)}o[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/bookmarks/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var v=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3fdc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),o={id:"nav"},n=Object(r["j"])("主页"),c=Object(r["j"])(" | "),u=Object(r["j"])("关于"),l=Object(r["j"])(" | "),i=Object(r["j"])("书签");function s(e,t){var a=Object(r["H"])("router-link"),s=Object(r["H"])("router-view");return Object(r["z"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",o,[Object(r["k"])(a,{to:"/"},{default:Object(r["R"])((function(){return[n]})),_:1}),c,Object(r["k"])(a,{to:"/about"},{default:Object(r["R"])((function(){return[u]})),_:1}),l,Object(r["k"])(a,{to:"/bookmarks"},{default:Object(r["R"])((function(){return[i]})),_:1})]),Object(r["k"])(s)],64)}a("89c3");const v={};v.render=s;var b=v,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),p=a("cf05"),f=a.n(p),h={class:"home"},m=Object(r["h"])("img",{class:"mx-auto",alt:"Vue logo",src:f.a},null,-1);function g(e,t,a,o,n,c){var u=Object(r["H"])("HelloWorld");return Object(r["z"])(),Object(r["g"])("div",h,[m,Object(r["k"])(u,{msg:"Welcome to Your Vue.js App"})])}Object(r["C"])("data-v-64c5a022");var j={class:"hello"},k=Object(r["i"])('<p data-v-64c5a022> For a guide and recipes on how to configure / customize this project,<br data-v-64c5a022> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vue-cli documentation</a>. </p><h3 data-v-64c5a022>Installed CLI Plugins</h3><ul data-v-64c5a022><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-64c5a022>babel</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-64c5a022>router</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-64c5a022>vuex</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-64c5a022>eslint</a></li></ul><h3 data-v-64c5a022>Essential Links</h3><ul data-v-64c5a022><li data-v-64c5a022><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>Core Docs</a></li><li data-v-64c5a022><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>Forum</a></li><li data-v-64c5a022><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>Community Chat</a></li><li data-v-64c5a022><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-64c5a022>Twitter</a></li><li data-v-64c5a022><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>News</a></li></ul><h3 data-v-64c5a022>Ecosystem</h3><ul data-v-64c5a022><li data-v-64c5a022><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vue-router</a></li><li data-v-64c5a022><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vuex</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-64c5a022>vue-devtools</a></li><li data-v-64c5a022><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vue-loader</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-64c5a022>awesome-vue</a></li></ul>',7);function O(e,t,a,o,n,c){return Object(r["z"])(),Object(r["g"])("div",j,[Object(r["h"])("h1",null,Object(r["J"])(a.msg),1),k])}Object(r["A"])();var _={name:"HelloWorld",props:{msg:String}};a("5bc3");_.render=O,_.__scopeId="data-v-64c5a022";var y=_,w={name:"Home",components:{HelloWorld:y}};w.render=g;var x=w,P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return Promise.all([a.e("about~bookmarks"),a.e("about")]).then(a.bind(null,"f820"))}},{path:"/bookmarks",name:"Bookmarks",component:function(){return Promise.all([a.e("about~bookmarks"),a.e("bookmarks")]).then(a.bind(null,"b51b"))}}],H=Object(d["a"])({history:Object(d["b"])("/bookmarks/"),routes:P}),C=H,S=a("5502"),E=Object(S["a"])({state:{},mutations:{},actions:{},modules:{}});a("7437");Object(r["d"])(b).use(E).use(C).mount("#app")},"5bc3":function(e,t,a){"use strict";a("3fdc")},"89c3":function(e,t,a){"use strict";a("c9d2")},c9d2:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app-legacy.524fd743.js.map