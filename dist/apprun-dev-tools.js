!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.apprun=n():e.apprun=n()}(this,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(o,l,function(n){return e[n]}.bind(null,l));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}({0:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return o});class o{constructor(){this._events={}}on(e,n,t={}){this._events[e]=this._events[e]||[],this._events[e].push({fn:n,options:t})}off(e,n){let t=this._events[e];t&&((t=t.filter(e=>e.fn!==n)).length?this._events[e]=t:delete this._events[e])}run(e,...n){let t=this._events[e];return console.assert(!!t,"No subscriber for event: "+e),t&&((t=t.filter(t=>{const{fn:o,options:l}=t;return l.delay?this.delay(e,o,n,l):o.apply(this,n),!t.options.once})).length?this._events[e]=t:delete this._events[e]),t?t.length:0}once(e,n,t={}){this.on(e,n,Object.assign({},t,{once:!0}))}delay(e,n,t,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),n.apply(this,t)},o.delay)}}let l;const r="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e;r.app&&r._AppRunVersions?l=r.app:(l=new o,r.app=l,r._AppRunVersions="AppRun-2"),n.b=l}).call(this,t(3))},3:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},8:function(e,n,t){"use strict";t.r(n);var o=t(0);function l(e){return Object.keys(e).map(n=>` ${"className"===n?"class":n}="${function(e){return"object"==typeof e?Object.keys(e).map(n=>`${n}:${e[n]}`).join(";"):e.toString()}(e[n])}"`).join("")}function r(e){return e.map(e=>s(e)).join("")}function s(e){if(!e)return"";if(function e(n){for(var t in n)null==n[t]?delete n[t]:"object"==typeof n[t]&&e(n[t])}(e),Array.isArray(e))return r(e);if("string"==typeof e)return e.startsWith("_html:")?e.substring(6):e;if(e.tag){const n=e.props?l(e.props):"",t=e.children?r(e.children):"";return`<${e.tag}${n}>${t}</${e.tag}>`}return"object"==typeof e?JSON.stringify(e):void 0}var c=s;function i(e){const n=window.open("","_apprun_debug","toolbar=0");n.document.write(`<html>\n  <title>AppRun Analyzer | ${document.location.href}</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n    li { margin-left: 80px; }\n  </style>\n  <body>\n  <div id="main">${e}</div>\n  <\/script>\n  </body>\n  </html>`),n.document.close()}window["_apprun-help"]=["",()=>{Object.keys(window).forEach(e=>{e.startsWith("_apprun-")&&("_apprun-help"===e?console.log("AppRun Commands:"):console.log(`* ${e.substring(8)}: ${window[e][0]}`))})}];const a=()=>{const e={components:{}};o.b.run("get-components",e);const{components:n}=e;return n},p=e=>{const n=o.b._events,t={},l=a();Object.keys(l).forEach(e=>{l[e].forEach(e=>{e._actions.forEach(n=>{t[n.name]=t[n.name]||[],t[n.name].push(e)})})});const r=[];if(Object.keys(t).forEach(e=>{r.push({event:e,components:t[e],global:!!n[e]})}),r.sort((e,n)=>e.event>n.event?1:-1).map(e=>e.event),e){const e=(e=>{const n=({components:e})=>o.b.createElement("ul",null,e.map(e=>o.b.createElement("li",null,o.b.createElement("div",null,e.constructor.name)))),t=({events:e,global:t})=>o.b.createElement("ul",null,e&&e.filter(e=>e.global===t).map(({event:e,components:t})=>o.b.createElement("li",null,o.b.createElement("div",null,e),o.b.createElement(n,{components:t}))));return o.b.createElement("div",null,o.b.createElement("div",null,"GLOBAL EVENTS"),o.b.createElement(t,{events:e,global:!0}),o.b.createElement("div",null,"LOCAL EVENTS"),o.b.createElement(t,{events:e,global:!1}))})(r);i(c(e))}else console.log("=== GLOBAL EVENTS ==="),r.filter(e=>e.global).forEach(({event:e,components:n})=>console.log({event:e},n)),console.log("=== LOCAL EVENTS ==="),r.filter(e=>!e.global).forEach(({event:e,components:n})=>console.log({event:e},n))},u=e=>{const n=a(),t=[];if(Object.keys(n).forEach(e=>{const o="string"==typeof e?document.getElementById(e):e,l=n[e].map(e=>({component:e,events:e._actions}));t.push({element:o,comps:l})}),e){const e=(e=>{const n=({events:e})=>o.b.createElement("ul",null,e&&e.map(e=>o.b.createElement("li",null,e.name))),t=({components:e})=>o.b.createElement("ul",null,e.map(e=>o.b.createElement("li",null,o.b.createElement("div",null,e.constructor.name),o.b.createElement(n,{events:e._actions}))));return o.b.createElement("ul",null,Object.keys(e).map(n=>o.b.createElement("li",null,o.b.createElement("div",null,"#",n),o.b.createElement(t,{components:e[n]}))))})(n);i(c(e))}else t.forEach(({element:e,comps:n})=>console.log(e,n))};let f=0;if(o.b.on("debug",e=>{1&f&&e.event&&console.log(e),2&f&&e.vdom&&console.log(e)}),window["_apprun-components"]=["components [print]",e=>{u("print"===e)}],window["_apprun-events"]=["events [print]",e=>{p("print"===e)}],window["_apprun-log"]=["log [event|view] on|off",(e,n)=>{"on"===e?f=3:"off"===e?f=0:"event"===e?"on"===n?f|=1:"off"===n&&(f&=-2):"view"===e&&("on"===n?f|=2:"off"===n&&(f&=-3)),console.log(`* log ${e} ${n||""}`)}],window._apprun=(e=>{const[n,...t]=e[0].split(" ").filter(e=>!!e),o=window[`_apprun-${n}`];o?o[1](...t):window["_apprun-help"][1]()}),console.info('AppRun DevTools 0.3: type "_apprun `help`" to list all available commands.'),window.__REDUX_DEVTOOLS_EXTENSION__){let e=!1;const n=window.__REDUX_DEVTOOLS_EXTENSION__.connect();n&&(console.info("Connected to the Redux DevTools"),n.subscribe(n=>{"START"===n.type?e=!0:"STOP"===n.type?e=!1:n.type}),o.b.on("debug",t=>{if(e&&t.event){const e=t.newState,o={type:t.event,payload:t.e};e instanceof Promise?e.then(e=>n.send(o,e)):n.send(o,e)}}))}}})});
//# sourceMappingURL=apprun-dev-tools.js.map