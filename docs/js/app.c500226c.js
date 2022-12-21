(function(e){function t(t){for(var o,c,s=t[0],u=t[1],a=t[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},i=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4b96":function(e,t,r){"use strict";r("74d2")},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("7a23");const n={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"},i={class:"container"},c=Object(o["g"])("div",{class:"row"},[Object(o["g"])("div",{class:"col"},[Object(o["g"])("h1",null,"vue-command"),Object(o["g"])("p",{class:"lead"},[Object(o["h"])(" A fully working, most feature-rich Vue.js terminal emulator. Now with Vue.js 3 support! "),Object(o["g"])("a",{href:"https://github.com/ndabAP/vue-command"},"Github")])])],-1),s={class:"row mb-4"},u={class:"col"},a=Object(o["g"])("div",{class:"row"},[Object(o["g"])("div",{class:"col"},[Object(o["g"])("pre",null,[Object(o["g"])("code",null,"$ npm install --save vue-command")])])],-1);function l(e,t){const r=Object(o["y"])("vue-command");return Object(o["s"])(),Object(o["f"])("section",null,[Object(o["g"])("div",n,[Object(o["g"])("div",i,[c,Object(o["g"])("div",s,[Object(o["g"])("div",u,[Object(o["i"])(r,{history:e.history,"onUpdate:history":t[0]||(t[0]=t=>e.history=t),query:e.query,"onUpdate:query":t[1]||(t[1]=t=>e.query=t),commands:e.commands,"hide-bar":e.hideBar,"hide-prompt":e.hidePrompt,invert:e.invert,prompt:e.prompt,"help-text":"Type in help","options-resolver":e.optionsResolver,"show-help":""},null,8,["history","query","commands","hide-bar","hide-prompt","invert","prompt","options-resolver"])])]),a])])])}r("14d9");const d=(e,t)=>e&&t,b=(e,t)=>e||t;var p=r("22d1"),m=r.n(p),j=r("5b05"),v=r.n(j),O=r("4d97"),y=r.n(O),h=r("23bc"),f=r.n(h),_=r("2326"),g=r.n(_),w=r("23db"),q=r.n(w),k=r("e039"),P=r.n(k);const x=["disabled","placeholder","onKeydown","onKeyup"];var C={__name:"VueCommandQuery",setup(e,{expose:t}){const r=Object(o["m"])("appendToHistory"),n=Object(o["m"])("dispatch"),i=Object(o["m"])("hidePrompt"),c=Object(o["m"])("invert"),s=Object(o["m"])("helpText"),u=Object(o["m"])("helpTimeout"),a=Object(o["m"])("optionsResolver"),l=Object(o["m"])("parser"),b=Object(o["m"])("programs"),p=Object(o["m"])("setCursorPosition"),j=Object(o["m"])("setQuery"),O=Object(o["m"])("showHelp"),h=Object(o["m"])("terminal"),_=Object(o["v"])(!1),w=Object(o["v"])(""),k=Object(o["v"])(null),C=Object(o["u"])({prompt:"",query:""}),F=async()=>{const e=C.query;if(q()(e))return;const t=I(e),n=m()(t),i=[];for(const r of b.value)r.startsWith(n)&&i.push(r);switch(P()(i)){case 0:break;case 1:{const t=m()(i);if(d(v()(t.length,P()(g()(e))),f()(a),f()(l)))return void a(t,l(e),j);y()(t.length,P()(g()(e)))&&j(t);break}default:_.value=!0,r(L(K(...i))),await Object(o["o"])(),j(C.query)}},H=()=>{k.value.focus()},Q=e=>{},B=()=>{const e=setTimeout(()=>{w.value=s},u),t=Object(o["E"])(_,()=>{clearTimeout(e),t()})},E=()=>{_.value=!0,n()},T=Object(o["E"])(()=>C.query,()=>{p(k.value.selectionStart)}),R=Object(o["E"])(()=>h.value.cursorPosition,e=>{k.value.setSelectionRange(e,e)}),S=Object(o["E"])(()=>h.value.query,e=>{C.query=e}),A=Object(o["E"])(_,()=>{S(),T(),R(),A(),w.value=""});return Object(o["q"])(()=>{C.prompt=h.value.prompt}),Object(o["r"])(()=>{H(),d(O,!_.value)&&B()}),t({focus:H}),(e,t)=>(Object(o["s"])(),Object(o["f"])("div",{class:Object(o["p"])({"vue-command__query":!Object(o["B"])(c),"vue-command__query--invert":Object(o["B"])(c)})},[Object(o["B"])(i)?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("span",{key:0,class:Object(o["p"])({"vue-command__query__prompt":!Object(o["B"])(c),"vue-command__query__prompt--invert":Object(o["B"])(c)})},Object(o["A"])(C.prompt),3)),Object(o["F"])(Object(o["g"])("input",{ref_key:"queryRef",ref:k,"onUpdate:modelValue":t[0]||(t[0]=e=>C.query=e),class:Object(o["p"])({"vue-command__query__input":!Object(o["B"])(c),"vue-command__query__input--invert":Object(o["B"])(c)}),disabled:_.value,placeholder:w.value,autocapitalize:"none",autocorrect:"off",type:"text",onClick:t[1]||(t[1]=t=>Object(o["B"])(p)(e.$refs.queryRef.selectionStart)),onInput:t[2]||(t[2]=e=>Object(o["B"])(j)(e.target.value)),onKeydown:[Object(o["G"])(Object(o["H"])(F,["exact","prevent"]),["tab"]),Object(o["G"])(Object(o["H"])(Q,["ctrl","exact","prevent"]),["r"])],onKeyup:[t[3]||(t[3]=Object(o["G"])(Object(o["H"])(t=>Object(o["B"])(p)(e.$refs.queryRef.selectionStart),["exact"]),["arrow-left"])),t[4]||(t[4]=Object(o["G"])(Object(o["H"])(t=>Object(o["B"])(p)(e.$refs.queryRef.selectionStart),["exact"]),["arrow-right"])),Object(o["G"])(Object(o["H"])(E,["exact"]),["enter"])]},null,42,x),[[o["C"],C.query]])],2))}};r("4b96");const F=C;var H=F,Q=r("91bb"),B=r.n(Q),E=r("5226"),T=r.n(E),R=r("aa6f"),S=r.n(R);const A="ArrowUp",V="ArrowDown",$=(e,t)=>{const r=e.vueCommandHistoryRef,o=e=>{switch(e.key){case A:case V:switch(e.preventDefault(),e.key){case A:t.decrementHistory();break;case V:t.incrementHistory();break}}};r.addEventListener("keydown",o)},z=()=>[$],L=(e,t="VueCommandStdout")=>Object(o["n"])(Object(o["j"])({name:t,setup(){const e=Object(o["m"])("exit");Object(o["r"])(e)},render(){return f()(e)?e():Object(o["l"])("div",e)}})),N=(e,t=!1)=>()=>t?Object(o["l"])("div",{innerHtml:e}):Object(o["l"])("div",e),G=(e,t="command not found",r="VueCommandNotFound")=>{const o=`${e}: ${t}`;return L(N(o),r)},D=()=>Object(o["n"])(H),I=e=>B()(T()(e)," "),K=(...e)=>()=>{const t=[];return S()(e,e=>{t.push(Object(o["l"])("li",e))}),Object(o["l"])("ul",t)},M=()=>[D()];var U=r("c832"),J=r.n(U),W=r("f9cd"),X=r.n(W),Y=r("65de"),Z=r.n(Y),ee=r("881d"),te=r.n(ee),re={__name:"VueCommand",props:{commands:{default:()=>({}),required:!1,type:Object},cursorPosition:{default:0,required:!1,type:Number},dispatchedQueries:{default:new Set,required:!1,type:Set},eventResolver:{default:()=>z(),required:!1,type:Array},helpText:{default:null,required:!1,type:String},helpTimeout:{default:3e3,required:!1,type:Number},hideBar:{default:!1,required:!1,type:Boolean},hidePrompt:{default:!1,required:!1,type:Boolean},history:{default:()=>M(),required:!1,type:Array},historyPosition:{default:0,required:!1,type:Number},invert:{default:!1,required:!1,type:Boolean},isFullscreen:{default:!1,required:!1,type:Boolean},optionsResolver:{default:null,required:!1,type:Function},parser:{default:e=>I(e),required:!1,type:Function},prompt:{default:"~$",required:!1,type:String},showHelp:{default:!1,required:!1,type:Boolean},query:{default:"",required:!1,type:String}},emits:["closeClicked","minimizeClicked","fullscreenClicked","update:cursorPosition","update:dispatchedQueries","update:history","update:historyPosition","update:isFullscreen","update:query"],setup(e,{expose:t,emit:r}){const n=e,i=Object(o["v"])(null),c=Object(o["v"])(null),s=Object(o["v"])(null),u=Object(o["u"])({cursorPosition:n.cursorPosition,dispatchedQueries:n.dispatchedQueries,history:n.history,historyPosition:n.historyPosition,isFullscreen:n.isFullscreen,prompt:n.prompt,query:n.query}),a=Object(o["b"])(()=>({cursorPosition:u.cursorPosition,dispatchedQueries:u.dispatchedQueries,history:u.history,historyPosition:u.historyPosition,invert:n.invert,isFullscreen:u.isFullscreen,prompt:u.prompt,query:u.query})),l=Object(o["b"])(()=>Object.keys(n.commands)),p=Object(o["b"])(()=>e=>b(!u.isFullscreen,d(u.isFullscreen,Z()(e,u.history.length-1)))),j=Object(o["b"])(()=>e=>d(u.isFullscreen,Z()(e,u.history.length-1))),O=e=>{u.dispatchedQueries.delete(e),u.dispatchedQueries.add(e),r("update:dispatchedQueries",u.dispatchedQueries)},y=()=>{if(u.isFullscreen)return;const e=X()(u.history);if(!Z()(J()(e,"__name"),"VueCommandQuery"))return;const t=X()(i.value);t.focus()},h=()=>{H(u.dispatchedQueries.size)},_=async()=>{const e=u.query;if(q()(e))return void g(D());O(e);const t=n.parser(e),r=m()(I(e)),i=J()(n.commands,r);if(!f()(i))return void g(G(r));const c=await Promise.resolve(i(t));if(Z()(J()(c,"__name"),"VueCommandQuery")){const e=c;return void g(e)}const s=Object(o["j"])({provide(){return{context:{rawQuery:e,parsedQuery:t}}},render:()=>Object(o["l"])(c)});g(Object(o["n"])(s))},g=(...e)=>{u.history.push(...e),r("update:history",u.history)},w=()=>{g(D()),h(),C(0),F(!1),Q("")},k=()=>{if(!v()(u.historyPosition,u.dispatchedQueries.size))return;H(u.historyPosition+1);const e=te()([...u.dispatchedQueries],u.historyPosition);Q(e)},P=()=>{if(Z()(u.historyPosition,0))return;H(u.historyPosition-1);const e=te()([...u.dispatchedQueries],u.historyPosition);Q(e)},x=async()=>{await Object(o["o"])(),c.value.scrollTop=c.value.scrollHeight},C=e=>{u.cursorPosition=e,r("update:cursorPosition",e)},F=e=>{u.isFullscreen=e,r("update:isFullscreen",e)},H=e=>{u.historyPosition=e,r("update:historyPosition",e)},Q=e=>{u.query=e,r("update:query",e)};return Object(o["E"])(u.history,async()=>{await x()}),Object(o["E"])(()=>n.cursorPosition,e=>{u.cursorPosition=e}),Object(o["E"])(()=>n.dispatchedQueries,e=>{u.dispatchedQueries=e}),Object(o["E"])(()=>n.history,e=>{u.history=e}),Object(o["E"])(()=>n.historyPosition,e=>{u.historyPosition=e}),Object(o["E"])(()=>n.isFullscreen,e=>{u.isFullscreen=e}),Object(o["E"])(()=>n.prompt,e=>{u.prompt=e}),Object(o["E"])(()=>n.query,e=>{u.query=e}),Object(o["r"])(()=>{const e=Object(o["k"])();for(const t of n.eventResolver)t(e.refs,e.exposed)}),Object(o["t"])("addDispatchedQuery",O),Object(o["t"])("appendToHistory",g),Object(o["t"])("dispatch",_),Object(o["t"])("decrementHistory",P),Object(o["t"])("exit",w),Object(o["t"])("helpText",n.helpText),Object(o["t"])("helpTimeout",n.helpTimeout),Object(o["t"])("hidePrompt",n.hidePrompt),Object(o["t"])("incrementHistory",k),Object(o["t"])("invert",n.invert),Object(o["t"])("optionsResolver",n.optionsResolver),Object(o["t"])("parser",n.parser),Object(o["t"])("programs",l),Object(o["t"])("setCursorPosition",C),Object(o["t"])("setFullscreen",F),Object(o["t"])("setHistoryPosition",H),Object(o["t"])("showHelp",n.showHelp),Object(o["t"])("setQuery",Q),Object(o["t"])("terminal",a),t({addDispatchedQuery:O,appendToHistory:g,decrementHistory:P,dispatch:_,exit:w,incrementHistory:k,programs:l,setCursorPosition:C,setFullscreen:F,setHistoryPosition:H,setQuery:Q,terminal:a}),(t,n)=>(Object(o["s"])(),Object(o["f"])("div",{ref_key:"vueCommandRef",ref:s,class:Object(o["p"])({"vue-command":!e.invert,"vue-command--invert":e.invert})},[Object(o["x"])(t.$slots,"bar",{},()=>[e.hideBar?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("div",{key:0,class:Object(o["p"])({"vue-command__bar":!e.invert,"vue-command__bar--invert":e.invert})},[Object(o["g"])("span",{class:Object(o["p"])({"vue-command__bar__button":!e.invert,"vue-command__bar__button--invert":e.invert,"vue-command__bar__button--fullscreen":!e.invert,"vue-command__bar__button--fullscreen--invert":e.invert}),onClick:n[0]||(n[0]=e=>r("closeClicked"))},null,2),Object(o["g"])("span",{class:Object(o["p"])({"vue-command__bar__button":!e.invert,"vue-command__bar__button--invert":e.invert,"vue-command__bar__button--minimize":!e.invert,"vue-command__bar__button--minimize--invert":e.invert}),onClick:n[1]||(n[1]=e=>r("minimizeClicked"))},null,2),Object(o["g"])("span",{class:Object(o["p"])({"vue-command__bar__button":!e.invert,"vue-command__bar__button--invert":e.invert,"vue-command__bar__button--close":!e.invert,"vue-command__bar__button--close--invert":e.invert}),onClick:n[2]||(n[2]=e=>r("fullscreenClicked"))},null,2)],2))]),Object(o["g"])("div",{ref_key:"vueCommandHistoryRef",ref:c,class:Object(o["p"])({"vue-command__history":!e.invert,"vue-command__history--invert":e.invert}),onClick:y},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(u.history,(t,r)=>Object(o["F"])((Object(o["s"])(),Object(o["f"])("div",{key:r,class:Object(o["p"])({"vue-command__history__entry":!e.invert,"vue-command__history__entry--invert":e.invert,"vue-command__history__entry--fullscreen":Object(o["B"])(j)(r),"vue-command__history__entry--fullscreen--invert":e.invert&&Object(o["B"])(j)(r)})},[(Object(o["s"])(),Object(o["d"])(Object(o["z"])(t),{ref_for:!0,ref_key:"vueCommandHistoryEntryComponentRefs",ref:i,class:Object(o["p"])({"vue-command__history__entry__component":!e.invert,"vue-command__history__entry__component--invert":e.invert})},null,8,["class"]))],2)),[[o["D"],Object(o["B"])(p)(r)]])),128))],2)],2))}};r("ee74");const oe=re;var ne=oe;function ie(e,t){return Object(o["F"])((Object(o["s"])(),Object(o["f"])("div",null,[Object(o["g"])("textarea",{ref:"nano",onKeyup:t[0]||(t[0]=Object(o["G"])(Object(o["H"])((...t)=>e.exit&&e.exit(...t),["ctrl","exact"]),["x"]))},"This is a nano text editor emulator! Press Ctrl + x to leave.",544)],512)),[[o["D"],e.terminal.isFullscreen]])}var ce={inject:["exit","setFullscreen","terminal"],created(){this.setFullscreen(!0)},mounted(){this.$refs.nano.focus()}},se=(r("7787"),r("6b0d")),ue=r.n(se);const ae=ue()(ce,[["render",ie],["__scopeId","data-v-d2d1666e"]]);var le=ae;const de={key:0},be={key:1},pe={key:2};function me(e,t){return Object(o["s"])(),Object(o["f"])("div",null,[e.isLoading||e.isError?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("span",de,Object(o["A"])(e.joke),1)),e.isLoading&&!e.isError?(Object(o["s"])(),Object(o["f"])("span",be,"Loading ...")):Object(o["e"])("",!0),e.isError?(Object(o["s"])(),Object(o["f"])("span",pe,"There was an error getting the joke")):Object(o["e"])("",!0)])}const je="https://api.chucknorris.io/jokes/random",ve=5e3,Oe=new AbortController;var ye={inject:["exit"],data:()=>({isError:!1,isLoading:!0,joke:""}),async mounted(){setTimeout(()=>{this.isLoading&&Oe.abort()},ve);try{const e=await fetch(je,{signal:Oe.signal});if(!e.ok)return this.isLoading=!1,this.setIsError(!0),void this.exit();const{value:t}=await e.json();this.joke=t}catch(e){this.setIsError(!0)}finally{this.isLoading=!1,this.exit()}},methods:{setIsError(e){this.isError=e}}};const he=ue()(ye,[["render",me]]);var fe=he;const _e="neil@moon~$";var ge={components:{VueCommand:ne},setup(){const e=Object(o["v"])(!1),t=Object(o["v"])(!1),r=Object(o["v"])(M()),n=Object(o["v"])(!1),i=Object(o["v"])(_e),c=Object(o["v"])(""),s=(e,t,r)=>{switch(e){case"cd":switch(t.length){case 1:r("cd home");break;case 2:"home".startsWith(t[1])&&"home"!==t[1]&&r("cd home");break}break}};return{commands:{cd:e=>{if(!(e.length<1))return"home"===e[1]&&(i.value=_e+"/home"),"../"!==e[1]&&".."!==e[1]||i.value!==_e+"/home"||(i.value=""+_e),D()},clear:()=>(r.value=[],D()),"hello-world":()=>L("Hello world"),help:()=>{const e=["cd","hello-world","help","nano","norris"];return L(K(...e))},nano:()=>le,norris:()=>fe},hideBar:e,hidePrompt:t,history:r,invert:n,prompt:i,query:c,optionsResolver:s}}};r("86a2");const we=ue()(ge,[["render",l]]);var qe=we,ke=r("9483");Object(ke["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Pe=Object(o["c"])(qe);Pe.config.unwrapInjectedRef=!0,Pe.mount("#app")},"74d2":function(e,t,r){},7787:function(e,t,r){"use strict";r("8689")},"7a7d":function(e,t,r){},8689:function(e,t,r){},"86a2":function(e,t,r){"use strict";r("7a7d")},ecae:function(e,t,r){},ee74:function(e,t,r){"use strict";r("ecae")}});
//# sourceMappingURL=app.c500226c.js.map