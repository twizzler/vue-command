(function(e){function t(t){for(var o,i,c=t[0],a=t[1],u=t[2],d=0,b=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,c=1;c<r.length;c++){var a=r[c];0!==n[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0fbb":function(e,t,r){},"168f":function(e,t,r){"use strict";r("4c7b")},"22d5":function(e,t,r){"use strict";r("e597")},"3d74":function(e,t,r){"use strict";r("0fbb")},"4c7b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("7a23");const n={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"},s={class:"container"},i=Object(o["g"])("div",{class:"row"},[Object(o["g"])("div",{class:"col"},[Object(o["g"])("h1",null,"vue-command"),Object(o["g"])("p",{class:"lead"},[Object(o["h"])(" A fully working, most feature-rich Vue.js terminal emulator. Now with Vue.js 3 support! "),Object(o["g"])("a",{href:"https://github.com/ndabAP/vue-command"},"Github")])])],-1),c={class:"row mb-4"},a={class:"col"},u=Object(o["g"])("div",{class:"row"},[Object(o["g"])("div",{class:"col"},[Object(o["g"])("pre",null,[Object(o["g"])("code",null,"$ npm install --save vue-command")])])],-1);function l(e,t){const r=Object(o["y"])("vue-command");return Object(o["s"])(),Object(o["f"])("section",null,[Object(o["g"])("div",n,[Object(o["g"])("div",s,[i,Object(o["g"])("div",c,[Object(o["g"])("div",a,[Object(o["i"])(r,{"dispatched-queries":e.dispatchedQueries,"onUpdate:dispatched-queries":t[0]||(t[0]=t=>e.dispatchedQueries=t),history:e.history,"onUpdate:history":t[1]||(t[1]=t=>e.history=t),query:e.query,"onUpdate:query":t[2]||(t[2]=t=>e.query=t),commands:e.commands,"hide-bar":e.hideBar,"hide-prompt":e.hidePrompt,invert:e.invert,prompt:e.prompt,"options-resolver":e.optionsResolver,"help-text":"Type in help","show-help":""},null,8,["dispatched-queries","history","query","commands","hide-bar","hide-prompt","invert","prompt","options-resolver"])])]),u])])])}r("14d9");const d=Symbol("publish"),b=()=>{const e={};return{[d](t){const r=e[t];if(r)for(const e of r)e()},on(t,r){e[t]||(e[t]=[]),e[t].push(r)},off(t){delete e[t]}}},p=(e,t)=>e&&t,m=(e,t)=>e||t;var j=r("22d1"),v=r.n(j),O=r("5b05"),h=r.n(O),y=r("4d97"),f=r.n(y),_=r("23bc"),g=r.n(_),w=r("2326"),q=r.n(w),k=r("23db"),P=r.n(k),x=r("e039"),C=r.n(x);const Q=["disabled","placeholder","onKeydown","onKeyup"];var T={__name:"VueCommandQuery",setup(e,{expose:t}){const r=Object(o["m"])("appendToHistory"),n=Object(o["m"])("dispatch"),s=Object(o["m"])("hidePrompt"),i=Object(o["m"])("invert"),c=Object(o["m"])("helpText"),a=Object(o["m"])("helpTimeout"),u=Object(o["m"])("optionsResolver"),l=Object(o["m"])("parser"),d=Object(o["m"])("programs"),b=Object(o["m"])("setCursorPosition"),m=Object(o["m"])("setQuery"),j=Object(o["m"])("showHelp"),O=Object(o["m"])("signals"),y=Object(o["m"])("terminal"),_=Object(o["v"])(!1),w=Object(o["v"])(""),k=Object(o["v"])(null),x=Object(o["u"])({prompt:"",query:""}),T=async()=>{const e=x.query;if(P()(e))return;const t=M(e),n=v()(t),s=[];for(const r of d.value)r.startsWith(n)&&s.push(r);switch(C()(s)){case 0:break;case 1:{const t=v()(s);if(p(h()(C()(t),C()(q()(e))),g()(u),g()(l)))return void u(t,l(e),m);f()(C()(t),C()(q()(e)))&&m(t);break}default:_.value=!0,r(D(J(...s))),await Object(o["o"])(),m(x.query)}},S=()=>{k.value.focus()},F=()=>{O.on("SIGINT",B)},E=e=>{},H=()=>{if(p(!j,_.value))return;const e=setTimeout(()=>{w.value=c},a),t=Object(o["E"])(_,()=>{clearTimeout(e),t()})},B=()=>{_.value=!0,x.query=x.query+"^C",r(U())},R=()=>{_.value=!0,n()},I=Object(o["E"])(()=>x.query,()=>{b(k.value.selectionStart)}),A=Object(o["E"])(()=>y.value.cursorPosition,e=>{k.value.setSelectionRange(e,e)}),N=Object(o["E"])(()=>y.value.query,e=>{x.query=e}),G=Object(o["E"])(_,()=>{O.off("SIGINT"),N(),I(),A(),G(),w.value=""});return Object(o["q"])(()=>{x.prompt=y.value.prompt}),Object(o["r"])(()=>{S(),H(),F()}),t({focus:S}),(e,t)=>(Object(o["s"])(),Object(o["f"])("div",{class:Object(o["p"])({"vue-command__query":!Object(o["B"])(i),"vue-command__query--invert":Object(o["B"])(i)})},[Object(o["B"])(s)?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("span",{key:0,class:Object(o["p"])({"vue-command__query__prompt":!Object(o["B"])(i),"vue-command__query__prompt--invert":Object(o["B"])(i)})},Object(o["A"])(x.prompt),3)),Object(o["F"])(Object(o["g"])("input",{ref_key:"queryRef",ref:k,"onUpdate:modelValue":t[0]||(t[0]=e=>x.query=e),class:Object(o["p"])({"vue-command__query__input":!Object(o["B"])(i),"vue-command__query__input--invert":Object(o["B"])(i)}),disabled:_.value,placeholder:w.value,autocapitalize:"none",autocorrect:"off",type:"text",onClick:t[1]||(t[1]=t=>Object(o["B"])(b)(e.$refs.queryRef.selectionStart)),onInput:t[2]||(t[2]=e=>Object(o["B"])(m)(e.target.value)),onKeydown:[Object(o["G"])(Object(o["H"])(T,["exact","prevent"]),["tab"]),Object(o["G"])(Object(o["H"])(E,["ctrl","exact","prevent"]),["r"])],onKeyup:[t[3]||(t[3]=Object(o["G"])(Object(o["H"])(t=>Object(o["B"])(b)(e.$refs.queryRef.selectionStart),["exact"]),["arrow-left"])),t[4]||(t[4]=Object(o["G"])(Object(o["H"])(t=>Object(o["B"])(b)(e.$refs.queryRef.selectionStart),["exact"]),["arrow-right"])),Object(o["G"])(Object(o["H"])(R,["exact"]),["enter"])]},null,42,Q),[[o["C"],x.query]])],2))}};r("3d74");const S=T;var F=S,E=r("91bb"),H=r.n(E),B=r("5226"),R=r.n(B),I=r("aa6f"),A=r.n(I);const N="ArrowUp",G="ArrowDown",V="c",$=(e,{decrementHistory:t,incrementHistory:r})=>{const o=e.vueCommandRef,n=e=>{switch(e.key){case N:case G:switch(e.preventDefault(),e.key){case N:t();break;case G:r();break}}};o.addEventListener("keydown",n)},L=(e,{sendSignal:t})=>{const r=e=>{switch(e.ctrlKey){case!0:switch(e.key){case V:t("SIGINT")}break;case!1:break}};window.addEventListener("keydown",r)},z=()=>[$,L],D=(e,t="VueCommandStdout")=>Object(o["n"])(Object(o["j"])({name:t,setup(){const e=Object(o["m"])("exit");Object(o["r"])(e)},render(){return g()(e)?e():Object(o["l"])("div",e)}})),K=(e,t="command not found",r="VueCommandNotFound")=>{const o=`${e}: ${t}`;return D(o,r)},U=()=>Object(o["n"])(F),M=e=>H()(R()(e)," "),J=(...e)=>()=>{const t=[];return A()(e,e=>{t.push(Object(o["l"])("li",e))}),Object(o["l"])("ul",t)},W=()=>[U()],X=e=>()=>{const t=[];return A()(e,e=>{const r=[];A()(e,e=>{r.push(Object(o["l"])("td",e))}),t.push(Object(o["l"])("tr",r))}),Object(o["l"])("table",t)};var Y=r("c832"),Z=r.n(Y),ee=r("f9cd"),te=r.n(ee),re=r("65de"),oe=r.n(re),ne=r("881d"),se=r.n(ne),ie={__name:"VueCommand",props:{commands:{default:()=>({}),required:!1,type:Object},cursorPosition:{default:0,required:!1,type:Number},dispatchedQueries:{default:new Set,required:!1,type:Set},eventResolver:{default:()=>z(),required:!1,type:Array},helpText:{default:null,required:!1,type:String},helpTimeout:{default:3e3,required:!1,type:Number},hideBar:{default:!1,required:!1,type:Boolean},hidePrompt:{default:!1,required:!1,type:Boolean},history:{default:()=>W(),required:!1,type:Array},historyPosition:{default:0,required:!1,type:Number},invert:{default:!1,required:!1,type:Boolean},isFullscreen:{default:!1,required:!1,type:Boolean},optionsResolver:{default:null,required:!1,type:Function},parser:{default:e=>M(e),required:!1,type:Function},prompt:{default:"~$",required:!1,type:String},showHelp:{default:!1,required:!1,type:Boolean},query:{default:"",required:!1,type:String}},emits:["closeClicked","minimizeClicked","fullscreenClicked","update:cursorPosition","update:dispatchedQueries","update:history","update:historyPosition","update:isFullscreen","update:query"],setup(e,{expose:t,emit:r}){const n=e,s=Object(o["v"])(null),i=Object(o["v"])(null),c=Object(o["v"])(null),a=Object(o["u"])(b()),u=Object(o["u"])({cursorPosition:n.cursorPosition,dispatchedQueries:n.dispatchedQueries,history:n.history,historyPosition:n.historyPosition,isFullscreen:n.isFullscreen,prompt:n.prompt,query:n.query}),l=Object(o["b"])(()=>({cursorPosition:u.cursorPosition,dispatchedQueries:u.dispatchedQueries,history:u.history,historyPosition:u.historyPosition,invert:n.invert,isFullscreen:u.isFullscreen,prompt:u.prompt,query:u.query})),j=Object(o["b"])(()=>Object.keys(n.commands)),O=Object(o["b"])(()=>e=>m(!u.isFullscreen,p(u.isFullscreen,oe()(e,C()(u.history)-1)))),y=Object(o["b"])(()=>e=>p(u.isFullscreen,oe()(e,C()(u.history)-1))),f=e=>{u.dispatchedQueries.delete(e),u.dispatchedQueries.add(e),r("update:dispatchedQueries",u.dispatchedQueries)},_=()=>{if(u.isFullscreen)return;const e=te()(u.history);if(!oe()(Z()(e,"__name"),"VueCommandQuery"))return;const t=te()(s.value);t.focus()},w=()=>{B(u.dispatchedQueries.size)},q=(...e)=>{u.history.push(...e),r("update:history",u.history)},k=async()=>{const e=u.query;if(P()(e))return void q(U());f(e);const t=n.parser(e),r=v()(M(e)),s=Z()(n.commands,r);if(!g()(s))return void q(K(r));const i=await Promise.resolve(s(t));if(oe()(Z()(i,"__name"),"VueCommandQuery")){const e=i;return void q(e)}const c=Object(o["j"])({name:"VueCommandEntryComponent",provide(){return{context:{rawQuery:e,parsedQuery:t}}},render:()=>Object(o["l"])(i)});q(Object(o["n"])(c))},x=()=>{q(U()),w(),E(0),H(!1),R("")},Q=()=>{if(oe()(u.historyPosition,0))return;B(u.historyPosition-1);const e=se()([...u.dispatchedQueries],u.historyPosition);R(e)},T=()=>{if(!h()(u.historyPosition,u.dispatchedQueries.size))return;B(u.historyPosition+1);const e=se()([...u.dispatchedQueries],u.historyPosition);R(e)},S=async()=>{await Object(o["o"])(),i.value.scrollTop=i.value.scrollHeight},F=e=>{a[d](e)},E=e=>{u.cursorPosition=e,r("update:cursorPosition",e)},H=e=>{u.isFullscreen=e,r("update:isFullscreen",e)},B=e=>{u.historyPosition=e,r("update:historyPosition",e)},R=e=>{u.query=e,r("update:query",e)};return Object(o["E"])(u.history,async()=>{await S()}),Object(o["E"])(()=>n.cursorPosition,e=>{u.cursorPosition=e}),Object(o["E"])(()=>n.dispatchedQueries,e=>{u.dispatchedQueries=e}),Object(o["E"])(()=>n.history,e=>{u.history=e}),Object(o["E"])(()=>n.historyPosition,e=>{u.historyPosition=e}),Object(o["E"])(()=>n.isFullscreen,e=>{u.isFullscreen=e}),Object(o["E"])(()=>n.prompt,e=>{u.prompt=e}),Object(o["E"])(()=>n.query,e=>{u.query=e}),Object(o["r"])(()=>{const e=Object(o["k"])();for(const t of n.eventResolver)t(e.refs,e.exposed)}),Object(o["t"])("addDispatchedQuery",f),Object(o["t"])("appendToHistory",q),Object(o["t"])("dispatch",k),Object(o["t"])("decrementHistory",Q),Object(o["t"])("exit",x),Object(o["t"])("helpText",n.helpText),Object(o["t"])("helpTimeout",n.helpTimeout),Object(o["t"])("hidePrompt",n.hidePrompt),Object(o["t"])("incrementHistory",T),Object(o["t"])("invert",n.invert),Object(o["t"])("optionsResolver",n.optionsResolver),Object(o["t"])("parser",n.parser),Object(o["t"])("programs",j),Object(o["t"])("sendSignal",F),Object(o["t"])("setCursorPosition",E),Object(o["t"])("setFullscreen",H),Object(o["t"])("setHistoryPosition",B),Object(o["t"])("showHelp",n.showHelp),Object(o["t"])("signals",a),Object(o["t"])("setQuery",R),Object(o["t"])("terminal",l),t({addDispatchedQuery:f,appendToHistory:q,decrementHistory:Q,dispatch:k,exit:x,incrementHistory:T,programs:j,sendSignal:F,setCursorPosition:E,setFullscreen:H,setHistoryPosition:B,setQuery:R,signals:a,terminal:l}),(t,n)=>(Object(o["s"])(),Object(o["f"])("div",{ref_key:"vueCommandRef",ref:c,class:Object(o["p"])({"vue-command":!e.invert,"vue-command--invert":e.invert})},[Object(o["x"])(t.$slots,"bar",{},()=>[e.hideBar?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("div",{key:0,class:Object(o["p"])({"vue-command__bar":!e.invert,"vue-command__bar--invert":e.invert})},[Object(o["g"])("span",{class:Object(o["p"])({"vue-command__bar__button":!e.invert,"vue-command__bar__button--invert":e.invert,"vue-command__bar__button--fullscreen":!e.invert,"vue-command__bar__button--fullscreen--invert":e.invert}),onClick:n[0]||(n[0]=e=>r("closeClicked"))},null,2),Object(o["g"])("span",{class:Object(o["p"])({"vue-command__bar__button":!e.invert,"vue-command__bar__button--invert":e.invert,"vue-command__bar__button--minimize":!e.invert,"vue-command__bar__button--minimize--invert":e.invert}),onClick:n[1]||(n[1]=e=>r("minimizeClicked"))},null,2),Object(o["g"])("span",{class:Object(o["p"])({"vue-command__bar__button":!e.invert,"vue-command__bar__button--invert":e.invert,"vue-command__bar__button--close":!e.invert,"vue-command__bar__button--close--invert":e.invert}),onClick:n[2]||(n[2]=e=>r("fullscreenClicked"))},null,2)],2))]),Object(o["g"])("div",{ref_key:"vueCommandHistoryRef",ref:i,class:Object(o["p"])({"vue-command__history":!e.invert,"vue-command__history--invert":e.invert}),onClick:_},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(u.history,(t,r)=>Object(o["F"])((Object(o["s"])(),Object(o["f"])("div",{key:r,class:Object(o["p"])({"vue-command__history__entry":!e.invert,"vue-command__history__entry--invert":e.invert,"vue-command__history__entry--fullscreen":Object(o["B"])(y)(r),"vue-command__history__entry--fullscreen--invert":e.invert&&Object(o["B"])(y)(r)})},[(Object(o["s"])(),Object(o["d"])(Object(o["z"])(t),{ref_for:!0,ref_key:"vueCommandHistoryEntryComponentRefs",ref:s,class:Object(o["p"])({"vue-command__history__entry__component":!e.invert,"vue-command__history__entry__component--invert":e.invert})},null,8,["class"]))],2)),[[o["D"],Object(o["B"])(O)(r)]])),128))],2)],2))}};r("168f");const ce=ie;var ae=ce;function ue(e,t){return Object(o["F"])((Object(o["s"])(),Object(o["f"])("div",null,[Object(o["g"])("textarea",{ref:"nano",onKeyup:t[0]||(t[0]=Object(o["G"])(Object(o["H"])((...t)=>e.exit&&e.exit(...t),["ctrl","exact"]),["x"]))},"This is a nano text editor emulator! Press Ctrl + x to leave.",544)],512)),[[o["D"],e.terminal.isFullscreen]])}var le={inject:["exit","setFullscreen","terminal"],created(){this.setFullscreen(!0)},mounted(){this.$refs.nano.focus()}},de=(r("7787"),r("6b0d")),be=r.n(de);const pe=be()(le,[["render",ue],["__scopeId","data-v-d2d1666e"]]);var me=pe;const je={key:0},ve={key:1},Oe={key:2};function he(e,t){return Object(o["s"])(),Object(o["f"])("div",null,[e.isLoading||e.isError?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("span",je,Object(o["A"])(e.joke),1)),e.isLoading&&!e.isError?(Object(o["s"])(),Object(o["f"])("span",ve,Object(o["A"])(e.loadingText),1)):Object(o["e"])("",!0),e.isError?(Object(o["s"])(),Object(o["f"])("span",Oe,"There was an error getting the joke")):Object(o["e"])("",!0)])}const ye="https://api.chucknorris.io/jokes/random";var fe={inject:["exit","signals"],data:()=>({isError:!1,isLoading:!0,joke:"",loadingText:"Loading ..."}),async mounted(){const e=new AbortController;this.signals.on("SIGINT",()=>{e.abort(),this.signals.off("SIGINT")});try{const t=await fetch(ye,{signal:e.signal});if(this.signals.off("SIGINT"),!t.ok)return this.isLoading=!1,this.isError=!0,void this.exit();const{value:r}=await t.json();this.joke=r,this.isLoading=!1}catch(t){"AbortError"===t.name?this.loadingText=this.loadingText+"^C":(this.isError=!0,this.isLoading=!1)}finally{this.exit()}}};const _e=be()(fe,[["render",he]]);var ge=_e;const we="neil@moon~$";var qe={components:{VueCommand:ae},setup(){const e=Object(o["v"])(new Set),t=Object(o["v"])(!1),r=Object(o["v"])(!1),n=Object(o["v"])(W()),s=Object(o["v"])(!1),i=Object(o["v"])(we),c=Object(o["v"])(""),a=(e,t,r)=>{switch(e){case"cd":switch(t.length){case 1:r("cd home");break;case 2:"home".startsWith(t[1])&&"home"!==t[1]&&r("cd home");break}break}};return{commands:{cd:e=>(e.length<1||("home"===e[1]&&(i.value=we+"/home"),"../"!==e[1]&&".."!==e[1]||i.value!==we+"/home"||(i.value=""+we)),U()),clear:()=>(n.value=[],U()),"hello-world":()=>D("Hello world"),help:()=>{const e=["cd","hello-world","help","nano","norris"];return D(J(...e))},history:()=>{const t=[];for(const[r,o]of[...e.value].entries())t.push([r,o]);return D(X(t))},nano:()=>me,norris:()=>ge},dispatchedQueries:e,hideBar:t,hidePrompt:r,history:n,invert:s,prompt:i,query:c,optionsResolver:a}}};r("22d5");const ke=be()(qe,[["render",l]]);var Pe=ke,xe=r("9483");Object(xe["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Ce=Object(o["c"])(Pe);Ce.config.unwrapInjectedRef=!0,Ce.mount("#app")},7787:function(e,t,r){"use strict";r("8689")},8689:function(e,t,r){},e597:function(e,t,r){}});
//# sourceMappingURL=app.1c48fd61.js.map