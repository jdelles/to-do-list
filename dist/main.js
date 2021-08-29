(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,":root {\n    --color-anti-flash-white: #f2f2f2;\n    --color-white-smoke: #f4faf7;\n    --color-white-cream: #f4fffb; \n    --color-middle-blue: #81d0e8; \n    --color-iceberg: #71a1d1; \n}\n\n*, \n*::after, \n*::before {\n    margin: 0; \n    padding: 0; \n    box-sizing: border-box;\n}\n\nbody {\n    background: var(--color-anti-flash-white);\n}\n\nheader {\n    text-align: center;\n    background: var(--color-white-smoke); \n    font-size: 24px;\n    padding: 2em;\n}\n\nbutton {\n    padding: 5px 10px; \n    margin: 5px; \n    background-color: var(--color-middle-blue);\n    color: var(--color-white-cream); \n    font-size: 18px; \n    border: 1px solid transparent; \n}\n\nbutton:hover {\n    background: var(--color-iceberg);\n    cursor: pointer;\n}\n\nmain {\n    margin: 0 auto; \n    padding: 2em; \n    max-width: 700px; \n}\n\nmain h2 {\n    font-size: 22px; \n    margin-bottom: 5px; \n}\n\nmain p,\nmain li {\n    font-size: 18px; \n    margin-bottom: 5px; \n}\n\ninput {\n    width: 100%; \n    margin-bottom: 5px; \n    font-size: 16px; \n    padding: 5px; \n}\n\nfooter {\n    position: fixed; \n    bottom: 0; \n    width: 100%; \n    background: var(--color-middle-blue); \n    color: var(--color-white-smoke); \n    font-size: 16px; \n    padding: 1em; \n    text-align: center; \n}\n\nfooter a {\n    color: var(--color-iceberg); \n    text-decoration: none;\n}\n\nfooter a:hover {\n    color: var(--color-white-smoke); \n    cursor: pointer;\n}\n\n.hidden {\n    display: none; \n}\n\n.ghost-button {\n    padding: 5px 10px; \n    margin: 5px; \n    background-color: var(--color-anti-flash-white); \n    color: var(--color-middle-blue);\n    font-size: 18px; \n    border: 1px solid var(--color-middle-blue);; \n}\n\n.ghost-button:hover {\n    color: var(--color-white-cream); \n}",""]);const a=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=o.base?d[0]+o.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:r(m,o),references:1}),i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},134:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(134),t=n.n(e);const o=e=>{let n=new Map,o=new Array;return{name:e,getToDos:()=>n,addTodoToProject:(e,r,a,i)=>{if((e=>!n.has(e))()){const c=t()(e,r,a,i);n.set(e,c),o.push(e)}else alert("ToDos must have a unique name")},removeTodoFromProject:e=>{n.delete(e);const t=o.indexOf(e);t>-1&&o.splice(t,1)}}},r=()=>{let e,t;const n=new Map,r=new Array,a=t=>{e=t},i=e=>{if((e=>!n.has(e))(e)){const t=o(e);return a(t),n.set(e,t),r.push(e),t}alert("Project name must be unique")};return t=i("default"),r.push("default"),e=t,{activeProject:e,setActiveProject:a,createProject:i,deleteProject:o=>{n.get(o).getToDos().forEach(removeTodoFromProject),n.delete(o);const a=r.indexOf(o);a>-1&&r.splice(a,1),e=t}}};var a=n(379),i=n.n(a),c=n(795),d=n.n(c),l=n(569),s=n.n(l),u=n(565),p=n.n(u),m=n(216),f=n.n(m),h=n(589),v=n.n(h),b=n(426),x={};x.styleTagTransform=v(),x.setAttributes=p(),x.insert=s().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=f(),i()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="To Do List",e.appendChild(t);const n=document.createElement("nav"),o=document.createElement("button");o.addEventListener("click",(()=>{preventDefault(),document.getElementById("toDoForm").classList.remove("hidden"),r.addTodoToSpecifiedProject(title,description,date,priority,projectName)})),o.textContent="+ Todo";const a=document.createElement("button");return a.addEventListener("click",(()=>{document.getElementById("projectForm").classList.remove("hidden"),r.createProject(t)})),a.textContent="+ Project",n.appendChild(o),n.appendChild(a),e.appendChild(n),e}());const t=e.appendChild(document.createElement("main"));t.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2");t.textContent="Add a new to do";const n=document.createElement("form"),o=document.createElement("input");o.type="text",o.placeholder="Title";const r=document.createElement("input");r.type="text",r.placeholder="Description";const a=document.createElement("input");a.type="text",a.placeholder="Priority";const i=document.createElement("input");i.type="text",i.placeholder="Date";const c=document.createElement("button");c.textContent="Submit";const d=document.createElement("button");return d.classList.add("ghost-button"),d.textContent="Cancel",n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(d),e.appendChild(t),e.appendChild(n),e.classList.add("hidden"),e.id="toDoForm",e}()),t.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h2");t.textContent="Add a new project";const n=document.createElement("form"),o=document.createElement("input");o.type="text",o.placeholder="Project Name";const r=document.createElement("button");return r.textContent="Submit",n.appendChild(o),n.appendChild(r),e.appendChild(t),e.appendChild(n),e.classList.add("hidden"),e.id="projectForm",e}()),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("div");return t.innerHTML='<p>Copyright © <a href="https://www.github.com/jdelles">James Delles</a> 2021</p>',e.appendChild(t),e}())}()})()})();