(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1df1":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));const o="elForm",c="elFormItem"},"800c":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("c3a5");const o=t=>["","large","medium","small","mini"].includes(t)},f820:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c={class:"about"},i=Object(o["m"])("h1",null,"This is an about page",-1),l=Object(o["o"])("我是 ElButton");function a(t,e,n,a,u,s){var b=Object(o["P"])("el-button");return Object(o["H"])(),Object(o["l"])("div",c,[i,Object(o["p"])(b,null,{default:Object(o["Z"])((function(){return[l]})),_:1})])}var u=n("1df1"),s=n("c3a5"),b=n("800c"),r=Object(o["q"])({name:"ElButton",props:{type:{type:String,default:"default",validator:t=>["default","primary","success","warning","info","danger","text"].includes(t)},size:{type:String,validator:b["a"]},icon:{type:String,default:""},nativeType:{type:String,default:"button",validator:t=>["button","submit","reset"].includes(t)},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},emits:["click"],setup(t,{emit:e}){const n=Object(s["g"])(),c=Object(o["t"])(u["b"],{}),i=Object(o["t"])(u["a"],{}),l=Object(o["h"])(()=>t.size||i.size||n.size),a=Object(o["h"])(()=>t.disabled||c.disabled),b=t=>{e("click",t)};return{buttonSize:l,buttonDisabled:a,handleClick:b}}});const d=["disabled","autofocus","type"],p={key:0,class:"el-icon-loading"},O={key:2};function f(t,e,n,c,i,l){return Object(o["H"])(),Object(o["l"])("button",{class:Object(o["y"])(["el-button",t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}]),disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType,onClick:e[0]||(e[0]=(...e)=>t.handleClick&&t.handleClick(...e))},[t.loading?(Object(o["H"])(),Object(o["l"])("i",p)):Object(o["k"])("v-if",!0),t.icon&&!t.loading?(Object(o["H"])(),Object(o["l"])("i",{key:1,class:Object(o["y"])(t.icon)},null,2)):Object(o["k"])("v-if",!0),t.$slots.default?(Object(o["H"])(),Object(o["l"])("span",O,[Object(o["O"])(t.$slots,"default")])):Object(o["k"])("v-if",!0)],10,d)}r.render=f,r.__file="packages/components/button/src/button.vue";var j=Object(o["q"])({name:"ElButtonGroup"});const m={class:"el-button-group"};function g(t,e,n,c,i,l){return Object(o["H"])(),Object(o["l"])("div",m,[Object(o["O"])(t.$slots,"default")])}j.render=g,j.__file="packages/components/button/src/button-group.vue",r.install=t=>{t.component(r.name,r),t.component(j.name,j)},r.ButtonGroup=j;const v=r,y=v;var k=Object(o["q"])({name:"About",components:{ElButton:y}});k.render=a;e["default"]=k}}]);
//# sourceMappingURL=about-legacy.ade973cc.js.map