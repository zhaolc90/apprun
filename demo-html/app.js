!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];return console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t]),n?n.length:0}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let o;const r="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;r.app&&r._AppRunVersions?o=r.app:(o=new s,r.app=o,r._AppRunVersions="AppRun-2"),e.b=o}).call(this,n(3))},function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(2);const r=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value);const o=this.children?Array.from(this.children):[];o.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign({},s,{children:o})).mount(this._shadowRoot,n),this._component.mounted&&this._component.mounted(s,o),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});var i=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,r(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,s,o)=>{const r=t?t.toString():s;return a.defineMetadata(`apprun-update:${r}`,{name:r,key:s,options:e},n),o}}function u(t,e={}){return function(n,s){const o=t?t.toString():s;a.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n)}}function l(t,e){return function(n){return i(t,n,e),n}}const h=(t,e)=>(e?t.state[e]:t.state)||"",d=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};var f=(t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[o,...r]=n;"string"==typeof o?e[t]=t=>s.run(o,...r,t):"function"==typeof o&&(e[t]=t=>s.setState(o(s.state,...r,t)))}}else if("$bind"===t){const o=e.type||"text",r="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=h(s,r),e.onclick=t=>d(s,r||t.target.name,t.target.checked);break;case"radio":e.checked=h(s,r)===e.value,e.onclick=t=>d(s,r||t.target.name,t.target.value);break;case"number":case"range":e.value=h(s,r),e.oninput=t=>d(s,r||t.target.name,Number(t.target.value));break;default:e.value=h(s,r),e.oninput=t=>d(s,r||t.target.name,t.target.value)}else"select"===n?(e.value=h(s,r),e.onchange=t=>{t.target.multiple||d(s,r||t.target.name,t.target.value)}):"option"===n&&(e.selected=h(s,r),e.onclick=t=>d(s,r||t.target.name,t.target.selected))}else app.run("$",{key:t,tag:n,props:e,component:s})};const p={};s.b.on("get-components",t=>t.components=p);const m=t=>t;class b{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0}))}render(t,e){s.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=s.b.createElement;s.b.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(f(n,e,t,this),delete e[n])}),n(t,e,...s));const o=e?this.view(t,e):this.view(t);return s.b.createElement=n,o}renderState(t){if(!this.view)return;const e=this._view(t);if(s.b.debug&&s.b.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";if(this.unload){if(n._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver)){const e=new MutationObserver(t=>{const{removedNodes:s,oldValue:o}=t[0];(o===this.tracking_id||Array.from(s).indexOf(n)>=0)&&(this.unload(this.state),e.disconnect())});n.parentNode&&e.observe(n.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else n.removeAttribute&&n.removeAttribute(t);n._component=this}this.render(n,e),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),p[t]=p[t]||[],p[t].push(this),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...o)=>{const r=e(this.state,...o);s.b.debug&&s.b.run("debug",{component:this,event:t,e:o,state:this.state,newState:r,options:n}),this.setState(r,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,o]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,o])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=m),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?s.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?s.b.on(o,e,n):this._app.on(o,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.b.off(e,n):this._app.off(e,n)})}}b.__isAppRunComponent=!0;const y=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.b.run(e,...n)||s.b.run("///",e,...n),s.b.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");s.b.run("/"+n,...o)||s.b.run("///","/"+n,...o),s.b.run("//","/"+n,...o)}else s.b.run(t)||s.b.run("///",t),s.b.run("//",t)};n.d(e,"app",function(){return s.b}),n.d(e,"Component",function(){return b}),n.d(e,"on",function(){return u}),n.d(e,"update",function(){return c}),n.d(e,"event",function(){return c}),n.d(e,"ROUTER_EVENT",function(){return"//"}),n.d(e,"ROUTER_404_EVENT",function(){return"///"}),n.d(e,"customElement",function(){return l}),s.b.createElement=o.b,s.b.render=function(t,e,n){Object(o.c)(t,e,n)},s.b.Fragment=o.a,s.b.webComponent=i,s.b.start=(t,e,n,s,o)=>{const r=Object.assign({},o,{render:!0,global_event:!0}),i=new b(e,n,s);return o&&o.rendered&&(i.rendered=o.rendered),i.mount(t,r),i};const _=t=>{};s.b.on("$",_),s.b.on("debug",t=>_),s.b.on("//",_),s.b.on("#",_),s.b.route=y,s.b.on("route",t=>s.b.route&&s.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.b.route===y&&(window.onpopstate=()=>y(location.hash),y(location.hash))});e.default=s.b;"object"==typeof window&&(window.Component=b,window.React=s.b)},function(t,e,n){"use strict";var s=n(0);let o=0;function r(t,e,n=0){if(0===n&&(o=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>r(t,e,o++));let i=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:o,props:r,children:i}=t;let a=r&&r.id;a||(a=`_${n}${Date.now()}`);const c=`_${n}`;e.__componentCache||(e.__componentCache={});let u=e.__componentCache[c];u?a=u.__eid:(u=e.__componentCache[c]=new o(Object.assign({},r,{children:i})).mount(a)).__eid=a,u.mounted&&u.mounted(r,i);const l=u.state;let h="";return l instanceof Promise||!u.view||(h=u._view(l,r),u.rendered&&setTimeout(()=>u.rendered(l,r))),s.b.createElement("section",Object.assign({},r,{id:a}),h)}(t,e,o++)),i&&Array.isArray(i.children)&&(i.children=i.children.map(t=>r(t,e,o++))),i}n.d(e,"b",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"a",function(){return b});const i="_props";function a(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const s=a(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)}const u={},l=function(t,e,n={}){if(null==e)return;if(e=r(e,n),!t)return;Array.isArray(e)?d(t,e):d(t,[e])};function h(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(d(t,e.children),m(t,e.props)):t.parentNode.replaceChild(p(e),t)}function d(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if(n instanceof HTMLElement)t.insertBefore(n,o);else if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(f(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)h(t.childNodes[s],n);else{const r=u[e];r?(t.insertBefore(r,o),t.appendChild(o),h(t.childNodes[s],n)):t.insertBefore(p(n),o)}else h(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(p(e[t]));t.appendChild(s)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function p(t,e=!1){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return m(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(p(t,e))),n}function m(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[i]||{},e||{}),t[i]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(u[s]=t)}}function b(t,...e){return a(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,function(t,e,n){"use strict";n.r(e);var s=n(1);let o=class extends s.Component{constructor(){super(...arguments),this.state=0,this.view=t=>s.default.createElement("div",null,s.default.createElement("h1",null,t)),this.update={"-1":t=>t-1,"+1":t=>t+1},this.children=[],this.rendered=t=>{this.children.forEach(t=>{this.element.firstElementChild.appendChild(t)}),this.element.setAttribute("num",t)},this.mounted=({num:t},e)=>{this.children=e,this.run(".",parseInt(t))}}};o=function(t,e,n,s){var o,r=arguments.length,i=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i}([Object(s.customElement)("my-app")],o);let r=class extends s.Component{constructor(){super(...arguments),this.state={},this.view=t=>s.default.createElement(s.default.Fragment,null,s.default.createElement("div",null,s.default.createElement("button",{$onclick:"fetchComic"},"XKCD")),t.loading?s.default.createElement("div",null,"loading ... "):"",t.comic&&s.default.createElement(s.default.Fragment,null,s.default.createElement("h3",null,t.comic.title),s.default.createElement("img",{src:t.comic.url}))),this.update={loading:(t,e)=>Object.assign({},t,{loading:e}),fetchComic:async t=>{this.run("loading",!0);const e=await fetch("https://xkcd-imgs.herokuapp.com/"),n=await e.json();return this.run("loading",!1),{comic:n}}},this.mounted=()=>this.run("fetchComic")}};r=function(t,e,n,s){var o,r=arguments.length,i=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i}([Object(s.customElement)("my-xkcd")],r)}])});
//# sourceMappingURL=app.js.map