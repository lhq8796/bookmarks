(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bookmarks"],{"04d5":function(e,t,r){"use strict";r("84ea")},"057f":function(e,t,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?s(e):o(n(e))}},"0a06":function(e,t,r){"use strict";var n=r("c532"),o=r("30b5"),i=r("f6b4"),a=r("5270"),s=r("4a7b"),c=r("848b"),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!n){var f=[a,void 0];Array.prototype.unshift.apply(f,r),f.concat(i),o=Promise.resolve(e);while(f.length)o=o.then(f.shift(),f.shift());return o}var l=e;while(r.length){var d=r.shift(),p=r.shift();try{l=d(l)}catch(h){p(h);break}}try{o=a(l)}catch(h){return Promise.reject(h)}while(i.length)o=o.then(i.shift(),i.shift());return o},f.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}})),e.exports=f},"0b42":function(e,t,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?n(t)&&(t=t[a],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"0df6":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},"1dde":function(e,t,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");e.exports=function(e){return i>=51||!n((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2444:function(e,t,r){"use strict";(function(t){var n=r("c532"),o=r("c8af"),i=r("387f"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=r("b50d")),e}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),JSON.stringify(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!r&&"json"===this.responseType;if(a||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a){if("SyntaxError"===s.name)throw i(s,this,"E_JSON_PARSE");throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(a)})),e.exports=u}).call(this,r("4362"))},"2d83":function(e,t,r){"use strict";var n=r("387f");e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},"2e67":function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,r){"use strict";var n=r("c532");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},"387f":function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,r){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=r("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,r){"use strict";var n=r("2d83");e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},"4a0c":function(e){e.exports=JSON.parse('{"_from":"axios","_id":"axios@0.21.2","_inBundle":false,"_integrity":"sha1-ISl9UISyrutCL104575Pu4IjkBc=","_location":"/axios","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"axios","name":"axios","escapedName":"axios","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.nlark.com/axios/download/axios-0.21.2.tgz","_shasum":"21297d5084b2aeeb422f5d38e7be4fbb82239017","_spec":"axios","_where":"C:\\\\Users\\\\lucas\\\\Documents\\\\study-projects\\\\bookmarks","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundleDependencies":false,"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"deprecated":false,"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.2"}')},"4a7b":function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(i,u),n.forEach(a,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(s,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return n.forEach(l,u),r}},"4de4":function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5270:function(e,t,r){"use strict";var n=r("c532"),o=r("c401"),i=r("2e67"),a=r("2444");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return s(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"5f02":function(e,t,r){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"7a77":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,r){"use strict";var n=r("d925"),o=r("e683");e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},"848b":function(e,t,r){"use strict";var n=r("4a0c"),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={},a=n.version.split(".");function s(e,t){for(var r=t?t.split("."):a,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}function c(e,t,r){if("object"!==typeof e)throw new TypeError("options must be an object");var n=Object.keys(e),o=n.length;while(o-- >0){var i=n[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}}o.transitional=function(e,t,r){var o=t&&s(t);function a(e,t){return"[Axios v"+n.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(a(n," has been removed in "+t));return o&&!i[n]&&(i[n]=!0,console.warn(a(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={isOlderVersion:s,assertOptions:c,validators:o}},"84ea":function(e,t,r){},"8df4":function(e,t,r){"use strict";var n=r("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(e){return""}}})},b50d:function(e,t,r){"use strict";var n=r("c532"),o=r("467f"),i=r("7aac"),a=r("30b5"),s=r("83b9"),c=r("c345"),u=r("3934"),f=r("2d83");e.exports=function(e){return new Promise((function(t,r){var l=e.data,d=e.headers,p=e.responseType;n.isFormData(l)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+b)}var v=s(e.baseURL,e.url);function g(){if(h){var n="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,i=p&&"text"!==p&&"json"!==p?h.response:h.responseText,a={data:i,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};o(t,r,a),h=null}}if(h.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(g)},h.onabort=function(){h&&(r(f("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){r(f("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||u(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}"setRequestHeader"in h&&n.forEach(d,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),p&&"json"!==p&&(h.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),r(e),h=null)})),l||(l=null),h.send(l)}))}},b51b:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23");function o(e,t,r,o,i,a){var s=Object(n["L"])("TreeBookmarks");return Object(n["F"])(!0),Object(n["l"])(n["b"],null,Object(n["J"])(o.bookmarks,(function(e){return Object(n["F"])(),Object(n["j"])(s,{key:e.name,class:"mb-4 last-mb-0",data:e},null,8,["data"])})),128)}r("dca8"),r("4de4");var i=r("bc3a"),a=r.n(i),s=a.a.create({baseURL:"/bookmarks"}),c=s,u={class:"flex items-center"},f=["src"];function l(e,t,r,o,i,a){var s=Object(n["L"])("el-link"),c=Object(n["L"])("el-card");return Object(n["F"])(),Object(n["j"])(c,{shadow:"hover"},{header:Object(n["S"])((function(){return[Object(n["m"])("div",null,Object(n["N"])(r.data.name),1)]})),default:Object(n["S"])((function(){return[(Object(n["F"])(!0),Object(n["l"])(n["b"],null,Object(n["J"])(r.data.children,(function(e){return Object(n["F"])(),Object(n["l"])("div",{key:e.name},[Object(n["o"])(s,{href:e.href,target:"_blank",rel:"noopener noreferrer"},{default:Object(n["S"])((function(){return[Object(n["m"])("span",u,[e.icon?(Object(n["F"])(),Object(n["l"])("img",{key:0,src:e.icon,class:"mr-2"},null,8,f)):Object(n["k"])("",!0),Object(n["n"])(" "+Object(n["N"])(e.name),1)])]})),_:2},1032,["href"])])})),128))]})),_:1})}var d=Object(n["p"])({name:"ElCard",props:{header:{type:String,default:""},bodyStyle:{type:[String,Object,Array],default:""},shadow:{type:String,default:""}}});const p={key:0,class:"el-card__header"};function h(e,t,r,o,i,a){return Object(n["F"])(),Object(n["l"])("div",{class:Object(n["x"])(["el-card",e.shadow?"is-"+e.shadow+"-shadow":"is-always-shadow"])},[e.$slots.header||e.header?(Object(n["F"])(),Object(n["l"])("div",p,[Object(n["K"])(e.$slots,"header",{},()=>[Object(n["n"])(Object(n["N"])(e.header),1)])])):Object(n["k"])("v-if",!0),Object(n["m"])("div",{class:"el-card__body",style:Object(n["y"])(e.bodyStyle)},[Object(n["K"])(e.$slots,"default")],4)],2)}d.render=h,d.__file="packages/components/card/src/index.vue",d.install=e=>{e.component(d.name,d)};const m=d,b=m;var v=r("3344"),g={name:"TreeBookmarks",components:{ElCard:b,ElLink:v["a"]},props:{data:{type:Object,default:function(){}}}};g.render=l;var y=g,j={name:"Bookmarks",components:{TreeBookmarks:y},setup:function(){var e=Object(n["I"])([]),t=function(){c.get("/json/bookmarks.json").then((function(t){e.value=t.data}))};return t(),{bookmarks:e}},data:function(){return{filterText:"",props:Object.freeze({expandTrigger:"hover",label:"name"})}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)}}};r("04d5");j.render=o,j.__scopeId="data-v-c8d3faf8";t["default"]=j},b727:function(e,t,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,f=4==e,l=6==e,d=7==e,p=5==e||l;return function(h,m,b,v){for(var g,y,j=i(h),w=o(j),x=n(m,b,3),O=a(w.length),k=0,E=v||s,S=t?E(h,O):r||d?E(h,0):void 0;O>k;k++)if((p||k in w)&&(g=w[k],y=x(g,k,j),e))if(t)S[k]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return k;case 2:c.call(S,g)}else switch(e){case 4:return!1;case 7:c.call(S,g)}return l?-1:u||f?f:S}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb2f:function(e,t,r){var n=r("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bc3a:function(e,t,r){e.exports=r("cee4")},c345:function(e,t,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},c401:function(e,t,r){"use strict";var n=r("c532"),o=r("2444");e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},c532:function(e,t,r){"use strict";var n=r("1d2b"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function b(e){return"[object File]"===o.call(e)}function v(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function y(e){return p(e)&&g(e.pipe)}function j(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function O(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function k(){var e={};function t(t,r){h(e[r])&&h(t)?e[r]=k(e[r],t):h(t)?e[r]=k({},t):i(t)?e[r]=t.slice():e[r]=t}for(var r=0,n=arguments.length;r<n;r++)O(arguments[r],t);return e}function E(e,t,r){return O(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}function S(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:a,isDate:m,isFile:b,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:j,isStandardBrowserEnv:x,forEach:O,merge:k,extend:E,trim:w,stripBOM:S}},c8af:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},cee4:function(e,t,r){"use strict";var n=r("c532"),o=r("1d2b"),i=r("0a06"),a=r("4a7b"),s=r("2444");function c(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=c(s);u.Axios=i,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=r("7a77"),u.CancelToken=r("8df4"),u.isCancel=r("2e67"),u.all=function(e){return Promise.all(e)},u.spread=r("0df6"),u.isAxiosError=r("5f02"),e.exports=u,e.exports.default=u},d925:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},dca8:function(e,t,r){var n=r("23e7"),o=r("bb2f"),i=r("d039"),a=r("861d"),s=r("f183").onFreeze,c=Object.freeze,u=i((function(){c(1)}));n({target:"Object",stat:!0,forced:u,sham:!o},{freeze:function(e){return c&&a(e)?c(s(e)):e}})},df7c:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e){"string"!==typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}function o(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,n="/"===a.charAt(0))}return t=r(o(t.split("/"),(function(e){return!!e})),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),a="/"===i(e,-1);return e=r(o(e.split("/"),(function(e){return!!e})),!n).join("/"),e||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var r=e.length-1;r>=0;r--)if(""!==e[r])break;return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!o){n=i;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=n(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===n&&(o=!1,n=a+1),46===s?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){r=a+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===r+1?"":e.slice(t,n)};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("4362"))},e683:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f183:function(e,t,r){var n=r("23e7"),o=r("d012"),i=r("861d"),a=r("5135"),s=r("9bf2").f,c=r("241c"),u=r("057f"),f=r("90e3"),l=r("bb2f"),d=!1,p=f("meta"),h=0,m=Object.isExtensible||function(){return!0},b=function(e){s(e,p,{value:{objectID:"O"+h++,weakData:{}}})},v=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,p)){if(!m(e))return"F";if(!t)return"E";b(e)}return e[p].objectID},g=function(e,t){if(!a(e,p)){if(!m(e))return!0;if(!t)return!1;b(e)}return e[p].weakData},y=function(e){return l&&d&&m(e)&&!a(e,p)&&b(e),e},j=function(){w.enable=function(){},d=!0;var e=c.f,t=[].splice,r={};r[p]=1,e(r).length&&(c.f=function(r){for(var n=e(r),o=0,i=n.length;o<i;o++)if(n[o]===p){t.call(n,o,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},w=e.exports={enable:j,fastKey:v,getWeakData:g,onFreeze:y};o[p]=!0},f6b4:function(e,t,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);
//# sourceMappingURL=bookmarks-legacy.d6ea77d6.js.map