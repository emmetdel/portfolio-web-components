!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return u});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${i}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;let n=-1,i=0;const a=[],c=t=>{const d=t.content,p=document.createTreeWalker(d,133,null,!1);let h=0;for(;p.nextNode();){n++;const t=p.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const a=t.attributes;let c=0;for(let e=0;e<a.length;e++)a[e].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=e.strings[i],a=u.exec(r)[2],c=a.toLowerCase()+o,l=t.getAttribute(c).split(s);this.parts.push({type:"attribute",index:n,name:a,strings:l}),t.removeAttribute(c),i+=l.length-1}}"TEMPLATE"===t.tagName&&c(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(s),c=o.length-1;for(let e=0;e<c;e++)r.insertBefore(""===o[e]?l():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[c]?(r.insertBefore(l(),t),a.push(t)):t.data=o[c],i+=c}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&n!==h||(n++,e.insertBefore(l(),t)),h=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(a.push(t),n--),i++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1})}}};c(t);for(const e of a)e.parentNode.removeChild(e)}}const c=e=>-1!==e.index,l=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";n.d(t,"h",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return h}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return g});var r=n(6),i=n(3),s=n(2),o=n(9),a=n(4),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=e=>null===e||!("object"==typeof e||"function"==typeof e);class u{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===s.a||l(e)&&e===this.value||(this.value=e,Object(r.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const e=this.value;this.value=s.a,e(this)}this.value!==s.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(c.c)()),this.endNode=e.appendChild(Object(c.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Object(c.c)()),e._insert(this.endNode=Object(c.c)())}insertAfterPart(e){e._insert(this.startNode=Object(c.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=s.a,e(this)}const e=this._pendingValue;e!==s.a&&(l(e)?e!==this.value&&this._commitText(e):e instanceof a.b?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===s.b?(this.value=s.b,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const n=new o.a(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)void 0===(n=t[r])&&(n=new p(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(i.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class h{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=s.a,e(this)}if(this._pendingValue===s.a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=s.a}}class f extends u{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let y=!1;try{const e={get capture(){return y=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class g{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Object(r.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=s.a,e(this)}if(this._pendingValue===s.a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=v(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=s.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const v=e=>e&&(y?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r={},i={}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null,r=null)=>{let i=t;for(;i!==n;){const t=i.nextSibling;e.insertBefore(i,r),i=t}},s=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}}},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return o});var r=n(3),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=i.e.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+i.b+r[3]+i.f:e+i.g}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(r.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var r=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(e){let t=s.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},s.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(r.f);return void 0===(n=t.keyString.get(i))&&(n=new r.a(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const s=new Map},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,i=e=>(...t)=>{const n=e(...t);return r.set(n,!0),n},s=e=>"function"==typeof e&&r.has(e)},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var r=n(3),i=n(1),s=n(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(e,t,n)=>{let a=o.get(t);void 0===a&&(Object(r.b)(t,t.firstChild),o.set(t,a=new i.e(Object.assign({templateFactory:s.b},n))),a.appendInto(t)),a.setValue(e),a.commit()}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0});const i=n(10),s=n(23),o=n(12);r(n(12)),r(n(16));var a=n(10);t.html=a.html,t.svg=a.svg,t.TemplateResult=a.TemplateResult,t.SVGTemplateResult=a.SVGTemplateResult;const c=n(13);r(n(13)),(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const l=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,i=t.length;r<i;r++){const i=t[r];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class u extends o.UpdatingElement{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){l(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?c.supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof i.TemplateResult&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}t.LitElement=u,u.finalized=!0,u.render=s.render},function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(3),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const o=e=>{const r=document.createTreeWalker(e,133,null,!1);let a=r.nextNode();for(;n<t.length&&null!==a;){const e=t[n];if(Object(i.d)(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(e),r.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.r(t);var r=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class i{handleAttributeExpressions(e,t,n,i){const s=t[0];if("."===s){return new r.f(e,t.slice(1),n).parts}return"@"===s?[new r.d(e,t.slice(1),i.eventContext)]:"?"===s?[new r.c(e,t.slice(1),n)]:new r.a(e,t,n).parts}handleTextExpression(e){return new r.e(e)}}const s=new i;var o=n(4),a=n(6),c=n(3),l=n(2),u=n(7),d=n(5),p=n(9),h=n(0);n.d(t,"html",function(){return f}),n.d(t,"svg",function(){return m}),n.d(t,"DefaultTemplateProcessor",function(){return i}),n.d(t,"defaultTemplateProcessor",function(){return s}),n.d(t,"directive",function(){return a.a}),n.d(t,"isDirective",function(){return a.b}),n.d(t,"removeNodes",function(){return c.b}),n.d(t,"reparentNodes",function(){return c.c}),n.d(t,"noChange",function(){return l.a}),n.d(t,"nothing",function(){return l.b}),n.d(t,"AttributeCommitter",function(){return r.a}),n.d(t,"AttributePart",function(){return r.b}),n.d(t,"BooleanAttributePart",function(){return r.c}),n.d(t,"EventPart",function(){return r.d}),n.d(t,"isPrimitive",function(){return r.h}),n.d(t,"NodePart",function(){return r.e}),n.d(t,"PropertyCommitter",function(){return r.f}),n.d(t,"PropertyPart",function(){return r.g}),n.d(t,"parts",function(){return u.a}),n.d(t,"render",function(){return u.b}),n.d(t,"templateCaches",function(){return d.a}),n.d(t,"templateFactory",function(){return d.b}),n.d(t,"TemplateInstance",function(){return p.a}),n.d(t,"SVGTemplateResult",function(){return o.a}),n.d(t,"TemplateResult",function(){return o.b}),n.d(t,"createMarker",function(){return h.c}),n.d(t,"isTemplatePartActive",function(){return h.d}),n.d(t,"Template",function(){return h.a}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const f=(e,...t)=>new o.b(e,t,"html",s),m=(e,...t)=>new o.a(e,t,"svg",s)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(8);class o extends s.LitElement{shouldUpdate(){return this.active}}r([s.property({type:Boolean}),i("design:type",Boolean)],o.prototype,"active",void 0),t.PageViewElement=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.JSCompiler_renameProperty=((e,t)=>e),t.defaultConverter={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},t.notEqual=((e,t)=>t!==e&&(t==t||e==e));const r={attribute:!0,type:String,converter:t.defaultConverter,reflect:!1,hasChanged:t.notEqual},i=Promise.resolve(!0),s=1,o=4,a=8,c=16,l=32;class u extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=i,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=r){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this.requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,n,r=t.notEqual){return r(e,n)}static _propertyValueFromAttribute(e,n){const r=n.type,i=n.converter||t.defaultConverter,s="function"==typeof i?i:i.fromAttribute;return s?s(e,r):e}static _propertyValueToAttribute(e,n){if(void 0===n.reflect)return;const r=n.type,i=n.converter;return(i&&i.toAttribute||t.defaultConverter.toAttribute)(e,r)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|l,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=r){const i=this.constructor,s=i._attributeNameForProperty(e,n);if(void 0!==s){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|a,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=this._updateState&~a}}_attributeToProperty(e,t){if(this._updateState&a)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n._classProperties.get(i)||r;this._updateState=this._updateState|c,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~c}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const i=this.constructor,s=i._classProperties.get(e)||r;i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&c||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|o;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&l}get _hasRequestedUpdate(){return this._updateState&o}get hasUpdated(){return this._updateState&s}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&s||(this._updateState=this._updateState|s,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~o}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}t.UpdatingElement=u,u.finalized=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;const r=Symbol();class i{constructor(e,t){if(t!==r)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(t.supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}t.CSSResult=i,t.unsafeCSS=(e=>new i(String(e),r));t.css=((e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof i)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new i(n,r)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(15)},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(8),o=n(17);n(18),n(19),n(21),n(22);let a=class extends s.LitElement{firstUpdated(){o.installRouter(e=>{this.currentPage=e.hash})}render(){return s.html`
            <header-element location=${this.currentPage}></header-element>
            <main role="main" class="main-content">
                <portfolio-page class="page" ?active="${"#/portfolio"===this.currentPage}"></portfolio-page>
                <cv-page class="page" ?active="${"#/cv"===this.currentPage}"></cv-page>
                <writing-page class="page" ?active="${"#/writing"===this.currentPage}"></writing-page>
            </main>
        `}};a.styles=s.css`
        .page {
          display: none;
        }
        .page[active] {
          display: block;
        }

        .main-content{
            max-width: 900px;
            margin: auto;
        }
    `,r([s.property({type:String}),i("design:type",Object)],a.prototype,"currentPage",void 0),a=r([s.customElement("my-app")],a),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.customElement=(e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t));const r=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),i=(e,t,n)=>{t.constructor.createProperty(n,e)};t.property=function(e){return(t,n)=>void 0!==n?i(e,t,n):r(e,t)},t.query=a((e,t)=>e.querySelector(t)),t.queryAll=a((e,t)=>e.querySelectorAll(t));const s=(e,t,n)=>{Object.defineProperty(t,n,e)},o=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function a(e){return t=>(n,r)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==r?s(i,n,r):o(i,n)}}t.eventOptions=(e=>(t,n)=>void 0!==n?((e,t,n)=>{Object.assign(t[n],e)})(e,t,n):((e,t)=>Object.assign({},t,{finisher(n){Object.assign(n.prototype[t.key],e)}}))(e,t))},function(e,t,n){"use strict";n.r(t),n.d(t,"installRouter",function(){return r});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const n=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const r=n.href;if(!r||-1!==r.indexOf("mailto:"))return;const i=window.location,s=i.origin||i.protocol+"//"+i.host;0===r.indexOf(s)&&(t.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),e(i,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)}},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(8);let o=class extends s.LitElement{constructor(){super(...arguments),this.location=""}render(){return s.html`
            <section id="header">
                <h1>Emmet Delaney</h1>
                <!-- <ul>
                                                                                                                                            <li><a id="portfolio" href="/#/portfolio">portfolio</a></li>
                                                                                                                                            <li><a id="cv" href="/#/cv">cv</a></li>
                                                                                                                                            <li><a id="writing" href="/#/writing">writing</a></li>
                                                                                                                                        </ul> -->
                <p>software developer</p>
            </section>
        `}};o.styles=s.css`
        #header{
            display: flex;
            flex-direction: row;
            height: 75px;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: auto;
            padding: 0 10px 0 10px;
            box-sizing: border-box;
        }
        p{
            color: var(--color-primary);

        }
        h1{
            font-size: var(--large);
            color: var(--color-dark-grey);
            padding: 0;
            margin: 0;
        }
        /* h1 > a:link, h1 > a:hover{
            color: inherit;
            text-decoration: none;
            font-style: normal;
            background-color: initial;
        }

        ul{
            display: flex;
            flex-direction: row;
            list-style: none;
            font-size: var(--medium);
            margin: 0;
            padding: 0;
            align-items: center;
        }
        ul > li{
            margin-bottom: 10px;
            color: var(--color-primary);
            width: 50%;
            margin-left: var(--large);
            margin-bottom: 0;
        }
        a:link, a:visited{
            color: inherit;
            text-decoration: none;
        }
        a:hover{
            background-color: var(--color-secondary);
            font-style: italic;
            color: white;
            cursor: pointer;
        }
        a:active{
            text-decoration: underline;
        } */
    `,r([s.property({type:String}),i("design:type",Object)],o.prototype,"location",void 0),o=r([s.customElement("header-element")],o),t.default=o},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(8),o=n(11);n(20);let a=class extends o.PageViewElement{constructor(){super(...arguments),this.repos=[]}firstUpdated(){fetch("https://api.github.com/users/emmetdel/repos").then(e=>e.json()).then(e=>e.map(e=>({name:e.name,description:e.description,link:e.html_url}))).then(e=>this.repos=e)}render(){return this.repos.length<1?s.html`<p>Loading...</p>`:s.html`
            <div id="portfolio-page">
                ${this.repos.map(e=>s.html`
                        <project-card name=${e.name} description=${e.description} link=${e.link}></project-card>
                    `)}
            </div>
        `}};a.styles=s.css`
        :host{
            padding: 20px 10px;
        }
        #portfolio-page{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-template-rows: minmax(250px, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 20px;
        }
    `,r([s.property({type:Array}),i("design:type",Array)],a.prototype,"repos",void 0),a=r([s.customElement("portfolio-page")],a),t.default=a},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(8);let o=class extends s.LitElement{constructor(){super(...arguments),this.Name="",this.Description="",this.Link=""}render(){return s.html`
            <h3>${this.Name}</h3>
            <p>${"null"===this.Description?"There is no information to display":this.Description}</p>
            <a href=${this.Link}>Read More...</a>

        `}};o.styles=s.css`
        :host{
            display: flex;
            flex-direction: column;
            padding: var(--small);
            word-wrap: break-word;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            background-color: white;
        }
        :host > p{
            font-size: var(--small);
            color: var(--color-medium-grey);
        }
        :host > h3{
            margin: 0;
            color: var(--color-dark-grey);
        }
        a{
            margin-top: auto;   
            font-size: var(--small);
            color: var(--color-secondary);     
        }
    `,r([s.property({type:String}),i("design:type",Object)],o.prototype,"Name",void 0),r([s.property({type:String}),i("design:type",Object)],o.prototype,"Description",void 0),r([s.property({type:String}),i("design:type",Object)],o.prototype,"Link",void 0),o=r([s.customElement("project-card")],o),t.default=o},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});const i=n(8),s=n(11);let o=class extends s.PageViewElement{render(){return i.html`
            <div>
                <h1>writing Page</h1>
            </div>
        `}};o=r([i.customElement("writing-page")],o),t.default=o},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});const i=n(8),s=n(11);let o=class extends s.PageViewElement{render(){return i.html`
            <div>
                <h1>CV Page</h1>
            </div>
        `}};o=r([i.customElement("cv-page")],o),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(3),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=133;function o(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,s,null,!1);let o=c(r),a=r[o],l=-1,u=0;const d=[];let p=null;for(;i.nextNode();){l++;const e=i.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(d.push(e),null===p&&(p=e)),null!==p&&u++;void 0!==a&&a.index===l;)a.index=null!==p?-1:a.index-u,a=r[o=c(r,o)]}d.forEach(e=>e.parentNode.removeChild(e))}const a=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,s,null,!1);for(;n.nextNode();)t++;return t},c=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(i.d)(t))return n}return-1};var l=n(7),u=n(5),d=n(9),p=n(4),h=n(10);n.d(t,"render",function(){return b}),n.d(t,"html",function(){return h.html}),n.d(t,"svg",function(){return h.svg}),n.d(t,"TemplateResult",function(){return h.TemplateResult});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=(e,t)=>`${e}--${t}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),m=!1);const y=e=>t=>{const n=f(t.type,e);let r=u.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(i.f);if(void 0===(s=r.keyString.get(o))){const n=t.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,e),s=new i.a(t,n),r.keyString.set(o,s)}return r.stringsArray.set(t.strings,s),s},g=["html","svg"],v=new Set,_=(e,t,n)=>{v.add(n);const r=e.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{g.forEach(t=>{const n=u.a.get(f(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),o(e,n)})})})(n),function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const o=document.createTreeWalker(r,s,null,!1);let l=c(i),u=0,d=-1;for(;o.nextNode();)for(d++,o.currentNode===n&&(u=a(t),n.parentNode.insertBefore(t,n));-1!==l&&i[l].index===d;){if(u>0){for(;-1!==l;)i[l].index+=u,l=c(i,l);return}l=c(i,l)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),o(t,e)}},b=(e,t,n)=>{const i=n.scopeName,s=l.a.has(t),o=t instanceof ShadowRoot&&m&&e instanceof p.b,a=o&&!v.has(i),c=a?document.createDocumentFragment():t;if(Object(l.b)(e,c,Object.assign({templateFactory:y(i)},n)),a){const e=l.a.get(c);l.a.delete(c),e.value instanceof d.a&&_(c,e.value.template,i),Object(r.b)(t,t.firstChild),t.appendChild(c),l.a.set(t,e)}!s&&o&&window.ShadyCSS.styleElement(t.host)}}]);