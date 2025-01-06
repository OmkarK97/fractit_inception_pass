(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7895],{68798:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var o=n(50044),i=n(2265),a=n(55322),s=n(55835),c=(0,n(18427)._)(),nothing=function(){},l=i.forwardRef(function(e,t){var n=i.useRef(null),a=i.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),l=a[0],u=a[1],d=e.forwardProps,p=e.children,f=e.className,m=e.removeScrollBar,g=e.enabled,b=e.shards,w=e.sideCar,y=e.noIsolation,v=e.inert,C=e.allowPinchZoom,k=e.as,x=void 0===k?"div":k,E=e.gapMode,I=(0,o.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=(0,s.q)([n,t]),B=(0,o.__assign)((0,o.__assign)({},I),l);return i.createElement(i.Fragment,null,g&&i.createElement(w,{sideCar:c,removeScrollBar:m,shards:b,noIsolation:y,inert:v,setCallbacks:u,allowPinchZoom:!!C,lockRef:n,gapMode:E}),d?i.cloneElement(i.Children.only(p),(0,o.__assign)((0,o.__assign)({},B),{ref:S})):i.createElement(x,(0,o.__assign)({},B,{className:f,ref:S}),p))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.zi,zeroRight:a.pF};var u=n(26898),d=n(92776),p=n(98662),f=!1;if("undefined"!=typeof window)try{var m=Object.defineProperty({},"passive",{get:function(){return f=!0,!0}});window.addEventListener("test",m,m),window.removeEventListener("test",m,m)}catch(e){f=!1}var g=!!f&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t.ownerDocument,o=t;do{if("undefined"!=typeof ShadowRoot&&o instanceof ShadowRoot&&(o=o.host),elementCouldBeScrolled(e,o)){var i=getScrollVariables(e,o);if(i[1]>i[2])return!0}o=o.parentNode}while(o&&o!==n.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,o,i){var a,s=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=s*o,l=n.target,u=t.contains(l),d=!1,p=c>0,f=0,m=0;do{var g=getScrollVariables(e,l),b=g[0],w=g[1]-g[2]-s*b;(b||w)&&elementCouldBeScrolled(e,l)&&(f+=w,m+=b),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return p&&(i&&1>Math.abs(f)||!i&&c>f)?d=!0:!p&&(i&&1>Math.abs(m)||!i&&-c>m)&&(d=!0),d},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},b=0,w=[],y=(0,u.L)(c,function(e){var t=i.useRef([]),n=i.useRef([0,0]),a=i.useRef(),s=i.useState(b++)[0],c=i.useState(p.Ws)[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var t=(0,o.__spreadArray)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var u=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!l.current.allowPinchZoom;var o,i=getTouchXY(e),s=n.current,c="deltaX"in e?e.deltaX:s[0]-i[0],u="deltaY"in e?e.deltaY:s[1]-i[1],d=e.target,p=Math.abs(c)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===p&&"range"===d.type)return!1;var f=locationCouldBeScrolled(p,d);if(!f)return!0;if(f?o=p:(o="v"===p?"h":"v",f=locationCouldBeScrolled(p,d)),!f)return!1;if(!a.current&&"changedTouches"in e&&(c||u)&&(a.current=o),!o)return!0;var m=a.current||o;return handleScroll(m,t,e,"h"===m?c:u,!0)},[]),f=i.useCallback(function(e){if(w.length&&w[w.length-1]===c){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),o=t.current.filter(function(t){var o;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(o=t.delta)[0]===n[0]&&o[1]===n[1]})[0];if(o&&o.should){e.cancelable&&e.preventDefault();return}if(!o){var i=(l.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(i.length>0?u(e,i[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),m=i.useCallback(function(e,n,o,i){var a={name:e,delta:n,target:o,should:i,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(o)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),y=i.useCallback(function(e){n.current=getTouchXY(e),a.current=void 0},[]),v=i.useCallback(function(t){m(t.type,getDeltaXY(t),t.target,u(t,e.lockRef.current))},[]),C=i.useCallback(function(t){m(t.type,getTouchXY(t),t.target,u(t,e.lockRef.current))},[]);i.useEffect(function(){return w.push(c),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:C}),document.addEventListener("wheel",f,g),document.addEventListener("touchmove",f,g),document.addEventListener("touchstart",y,g),function(){w=w.filter(function(e){return e!==c}),document.removeEventListener("wheel",f,g),document.removeEventListener("touchmove",f,g),document.removeEventListener("touchstart",y,g)}},[]);var k=e.removeScrollBar,x=e.inert;return i.createElement(i.Fragment,null,x?i.createElement(c,{styles:"\n  .block-interactivity-".concat(s," {pointer-events: none;}\n  .allow-interactivity-").concat(s," {pointer-events: all;}\n")}):null,k?i.createElement(d.jp,{gapMode:e.gapMode}):null)}),v=i.forwardRef(function(e,t){return i.createElement(l,(0,o.__assign)({},e,{ref:t,sideCar:y}))});v.classNames=l.classNames;var C=v},18821:function(e,t,n){"use strict";function vanilla_extract_private_esm_getVarName(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function assignInlineVars(e,t){var n={};if("object"==typeof t)!function vanilla_extract_private_esm_walkObject(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={};for(var i in e){var a=e[i],s=[...n,i];"string"==typeof a||"number"==typeof a||null==a?o[i]=t(a,s):"object"!=typeof a||Array.isArray(a)?console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"')):o[i]=vanilla_extract_private_esm_walkObject(a,t,s)}return o}(t,(t,o)=>{null!=t&&(n[vanilla_extract_private_esm_getVarName(function(e,t){var n=e;for(var o of t){if(!(o in n))throw Error("Path ".concat(t.join(" -> ")," does not exist in object"));n=n[o]}return n}(e,o))]=String(t))});else for(var o in e){var i=e[o];null!=i&&(n[vanilla_extract_private_esm_getVarName(o)]=i)}return Object.defineProperty(n,"toString",{value:function(){return Object.keys(this).map(e=>"".concat(e,":").concat(this[e])).join(";")},writable:!1}),n}n.d(t,{L:function(){return assignInlineVars}})},90751:function(e,t,n){"use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){!function(e,t,n){var o;(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,{$:function(){return createSprinkles}});var createSprinkles_c8550e00_esm_createSprinkles=e=>function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=Object.assign({},...n.map(e=>e.styles)),a=Object.keys(i),s=a.filter(e=>"mappings"in i[e]);return Object.assign(t=>{var n=[],o={},a=_objectSpread2({},t),c=!1;for(var l of s){var u=t[l];if(null!=u)for(var d of(c=!0,i[l].mappings))o[d]=u,null==a[d]&&delete a[d]}var p=c?_objectSpread2(_objectSpread2({},o),a):t;for(var f in p)if("continue"===function(){var e=p[f],t=i[f];try{if(t.mappings)return"continue";if("string"==typeof e||"number"==typeof e)n.push(t.values[e].defaultClass);else if(Array.isArray(e))for(var o=0;o<e.length;o++){var a=e[o];if(null!=a){var s=t.responsiveArray[o];n.push(t.values[a].conditions[s])}}else for(var c in e){var l=e[c];null!=l&&n.push(t.values[l].conditions[c])}}catch(e){throw e}}())continue;return e(n.join(" "))},{properties:new Set(a)})},composeStyles=e=>e,createSprinkles=function(){return createSprinkles_c8550e00_esm_createSprinkles(composeStyles)(...arguments)}},47714:function(e,t,n){"use strict";n.d(t,{d:function(){return createMapValueFn},M:function(){return createNormalizeValueFn}});var addRecipe=function(e,t){return Object.defineProperty(e,"__recipe__",{value:t,writable:!1}),e};function createNormalizeValueFn(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");return addRecipe(function(e){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return{[t.defaultCondition]:e}}if(Array.isArray(e)){if(!("responsiveArray"in t))throw Error("Responsive arrays are not supported");var n={};for(var o in t.responsiveArray)null!=e[o]&&(n[t.responsiveArray[o]]=e[o]);return n}return e},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:e.conditions}]})}function createMapValueFn(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");var n=createNormalizeValueFn(e);return addRecipe(function(e,o){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return o(e,t.defaultCondition)}var i=Array.isArray(e)?n(e):e,a={};for(var s in i)null!=i[s]&&(a[s]=o(i[s],s));return a},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:e.conditions}]})}},78343:function(e){"use strict";var t={single_source_shortest_paths:function(e,n,o){var i,a,s,c,l,u,d,p={},f={};f[n]=0;var m=t.PriorityQueue.make();for(m.push(n,0);!m.empty();)for(s in a=(i=m.pop()).value,c=i.cost,l=e[a]||{})l.hasOwnProperty(s)&&(u=c+l[s],d=f[s],(void 0===f[s]||d>u)&&(f[s]=u,m.push(s,u),p[s]=a));if(void 0!==o&&void 0===f[o])throw Error(["Could not find a path from ",n," to ",o,"."].join(""));return p},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],o=t;o;)n.push(o),e[o],o=e[o];return n.reverse(),n},find_path:function(e,n,o){var i=t.single_source_shortest_paths(e,n,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(e){var n,o=t.PriorityQueue,i={};for(n in e=e||{},o)o.hasOwnProperty(n)&&(i[n]=o[n]);return i.queue=[],i.sorter=e.sorter||o.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},53216:function(e){"use strict";e.exports=function(e){for(var t=[],n=e.length,o=0;o<n;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&n>o+1){var a=e.charCodeAt(o+1);a>=56320&&a<=57343&&(i=(i-55296)*1024+a-56320+65536,o+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},75298:function(e,t,n){let o=n(47363),i=n(37621),a=n(46028),s=n(12330);function renderCanvas(e,t,n,a,s){let c=[].slice.call(arguments,1),l=c.length,u="function"==typeof c[l-1];if(!u&&!o())throw Error("Callback required as last argument");if(u){if(l<2)throw Error("Too few arguments provided");2===l?(s=n,n=t,t=a=void 0):3===l&&(t.getContext&&void 0===s?(s=a,a=void 0):(s=a,a=n,n=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(n=t,t=a=void 0):2!==l||t.getContext||(a=n,n=t,t=void 0),new Promise(function(o,s){try{let s=i.create(n,a);o(e(s,t,a))}catch(e){s(e)}})}try{let o=i.create(n,a);s(null,e(o,t,a))}catch(e){s(e)}}t.create=i.create,t.toCanvas=renderCanvas.bind(null,a.render),t.toDataURL=renderCanvas.bind(null,a.renderToDataURL),t.toString=renderCanvas.bind(null,function(e,t,n){return s.render(e,n)})},47363:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},8177:function(e,t,n){let o=n(13400).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,n=o(e),i=145===n?26:2*Math.ceil((n-13)/(2*t-2)),a=[n-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},t.getPositions=function(e){let n=[],o=t.getRowColCoords(e),i=o.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&n.push([o[e],o[t]]);return n}},77654:function(e,t,n){let o=n(37662),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(e){this.mode=o.ALPHANUMERIC,this.data=e}AlphanumericData.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=45*i.indexOf(this.data[t]);n+=i.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=AlphanumericData},41904:function(e){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=BitBuffer},21091:function(e){function BitMatrix(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}BitMatrix.prototype.set=function(e,t,n,o){let i=e*this.size+t;this.data[i]=n,o&&(this.reservedBit[i]=!0)},BitMatrix.prototype.get=function(e,t){return this.data[e*this.size+t]},BitMatrix.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},BitMatrix.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=BitMatrix},90690:function(e,t,n){let o=n(53216),i=n(37662);function ByteData(e){this.mode=i.BYTE,"string"==typeof e&&(e=o(e)),this.data=new Uint8Array(e)}ByteData.getBitsLength=function(e){return 8*e},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},e.exports=ByteData},37039:function(e,t,n){let o=n(9406),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case o.L:return i[(e-1)*4+0];case o.M:return i[(e-1)*4+1];case o.Q:return i[(e-1)*4+2];case o.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case o.L:return a[(e-1)*4+0];case o.M:return a[(e-1)*4+1];case o.Q:return a[(e-1)*4+2];case o.H:return a[(e-1)*4+3];default:return}}},9406:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let n=e.toLowerCase();switch(n){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return n}}},78241:function(e,t,n){let o=n(13400).getSymbolSize;t.getPositions=function(e){let t=o(e);return[[0,0],[t-7,0],[0,t-7]]}},50237:function(e,t,n){let o=n(13400),i=o.getBCHDigit(1335);t.getEncodedBits=function(e,t){let n=e.bit<<3|t,a=n<<10;for(;o.getBCHDigit(a)-i>=0;)a^=1335<<o.getBCHDigit(a)-i;return(n<<10|a)^21522}},51309:function(e,t){let n=new Uint8Array(512),o=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)n[t]=e,o[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)n[e]=n[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return o[e]},t.exp=function(e){return n[e]},t.mul=function(e,t){return 0===e||0===t?0:n[o[e]+o[t]]}},69592:function(e,t,n){let o=n(37662),i=n(13400);function KanjiData(e){this.mode=o.KANJI,this.data=e}KanjiData.getBitsLength=function(e){return 13*e},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=i.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");n=(n>>>8&255)*192+(255&n),e.put(n,13)}},e.exports=KanjiData},68334:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let n={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,o=0,i=0,a=0,s=null,c=null;for(let l=0;l<t;l++){i=a=0,s=c=null;for(let u=0;u<t;u++){let t=e.get(l,u);t===s?i++:(i>=5&&(o+=n.N1+(i-5)),s=t,i=1),(t=e.get(u,l))===c?a++:(a>=5&&(o+=n.N1+(a-5)),c=t,a=1)}i>=5&&(o+=n.N1+(i-5)),a>=5&&(o+=n.N1+(a-5))}return o},t.getPenaltyN2=function(e){let t=e.size,o=0;for(let n=0;n<t-1;n++)for(let i=0;i<t-1;i++){let t=e.get(n,i)+e.get(n,i+1)+e.get(n+1,i)+e.get(n+1,i+1);(4===t||0===t)&&o++}return o*n.N2},t.getPenaltyN3=function(e){let t=e.size,o=0,i=0,a=0;for(let n=0;n<t;n++){i=a=0;for(let s=0;s<t;s++)i=i<<1&2047|e.get(n,s),s>=10&&(1488===i||93===i)&&o++,a=a<<1&2047|e.get(s,n),s>=10&&(1488===a||93===a)&&o++}return o*n.N3},t.getPenaltyN4=function(e){let t=0,o=e.data.length;for(let n=0;n<o;n++)t+=e.data[n];let i=Math.abs(Math.ceil(100*t/o/5)-10);return i*n.N4},t.applyMask=function(e,n){let o=n.size;for(let i=0;i<o;i++)for(let a=0;a<o;a++)n.isReserved(a,i)||n.xor(a,i,function(e,n,o){switch(e){case t.Patterns.PATTERN000:return(n+o)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return o%3==0;case t.Patterns.PATTERN011:return(n+o)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2==0;case t.Patterns.PATTERN101:return n*o%2+n*o%3==0;case t.Patterns.PATTERN110:return(n*o%2+n*o%3)%2==0;case t.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,a,i))},t.getBestMask=function(e,n){let o=Object.keys(t.Patterns).length,i=0,a=1/0;for(let s=0;s<o;s++){n(s),t.applyMask(s,e);let o=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),o<a&&(a=o,i=s)}return i}},37662:function(e,t,n){let o=n(64956),i=n(66579);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!o.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let n=e.toLowerCase();switch(n){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return n}}},10894:function(e,t,n){let o=n(37662);function NumericData(e){this.mode=o.NUMERIC,this.data=e.toString()}NumericData.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(e){let t,n;for(t=0;t+3<=this.data.length;t+=3)n=parseInt(this.data.substr(t,3),10),e.put(n,10);let o=this.data.length-t;o>0&&(n=parseInt(this.data.substr(t),10),e.put(n,3*o+1))},e.exports=NumericData},25153:function(e,t,n){let o=n(51309);t.mul=function(e,t){let n=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<t.length;a++)n[i+a]^=o.mul(e[i],t[a]);return n},t.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){let e=n[0];for(let i=0;i<t.length;i++)n[i]^=o.mul(t[i],e);let i=0;for(;i<n.length&&0===n[i];)i++;n=n.slice(i)}return n},t.generateECPolynomial=function(e){let n=new Uint8Array([1]);for(let i=0;i<e;i++)n=t.mul(n,new Uint8Array([1,o.exp(i)]));return n}},37621:function(e,t,n){let o=n(13400),i=n(9406),a=n(41904),s=n(21091),c=n(8177),l=n(78241),u=n(68334),d=n(37039),p=n(9936),f=n(48670),m=n(50237),g=n(37662),b=n(25082);function setupFormatInfo(e,t,n){let o,i;let a=e.size,s=m.getEncodedBits(t,n);for(o=0;o<15;o++)i=(s>>o&1)==1,o<6?e.set(o,8,i,!0):o<8?e.set(o+1,8,i,!0):e.set(a-15+o,8,i,!0),o<8?e.set(8,a-o-1,i,!0):o<9?e.set(8,15-o-1+1,i,!0):e.set(8,15-o-1,i,!0);e.set(a-8,8,1,!0)}t.create=function(e,t){let n,m;if(void 0===e||""===e)throw Error("No input text");let w=i.M;return void 0!==t&&(w=i.from(t.errorCorrectionLevel,i.M),n=f.from(t.version),m=u.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),function(e,t,n,i){let m;if(Array.isArray(e))m=b.fromArray(e);else if("string"==typeof e){let o=t;if(!o){let t=b.rawSplit(e);o=f.getBestVersionForData(t,n)}m=b.fromString(e,o||40)}else throw Error("Invalid data");let w=f.getBestVersionForData(m,n);if(!w)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;let y=function(e,t,n){let i=new a;n.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(i)});let s=o.getSymbolTotalCodewords(e),c=d.getTotalCodewordsCount(e,t),l=(s-c)*8;for(i.getLengthInBits()+4<=l&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let u=(l-i.getLengthInBits())/8;for(let e=0;e<u;e++)i.put(e%2?17:236,8);return function(e,t,n){let i,a;let s=o.getSymbolTotalCodewords(t),c=d.getTotalCodewordsCount(t,n),l=s-c,u=d.getBlocksCount(t,n),f=s%u,m=u-f,g=Math.floor(s/u),b=Math.floor(l/u),w=b+1,y=g-b,v=new p(y),C=0,k=Array(u),x=Array(u),E=0,I=new Uint8Array(e.buffer);for(let e=0;e<u;e++){let t=e<m?b:w;k[e]=I.slice(C,C+t),x[e]=v.encode(k[e]),C+=t,E=Math.max(E,t)}let S=new Uint8Array(s),B=0;for(i=0;i<E;i++)for(a=0;a<u;a++)i<k[a].length&&(S[B++]=k[a][i]);for(i=0;i<y;i++)for(a=0;a<u;a++)S[B++]=x[a][i];return S}(i,e,t)}(t,n,m),v=o.getSymbolSize(t),C=new s(v);return function(e,t){let n=e.size,o=l.getPositions(t);for(let t=0;t<o.length;t++){let i=o[t][0],a=o[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(n<=i+t))for(let o=-1;o<=7;o++)a+o<=-1||n<=a+o||(t>=0&&t<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===t||6===t)||t>=2&&t<=4&&o>=2&&o<=4?e.set(i+t,a+o,!0,!0):e.set(i+t,a+o,!1,!0))}}(C,t),function(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}(C),function(e,t){let n=c.getPositions(t);for(let t=0;t<n.length;t++){let o=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)-2===t||2===t||-2===n||2===n||0===t&&0===n?e.set(o+t,i+n,!0,!0):e.set(o+t,i+n,!1,!0)}}(C,t),setupFormatInfo(C,n,0),t>=7&&function(e,t){let n,o,i;let a=e.size,s=f.getEncodedBits(t);for(let t=0;t<18;t++)n=Math.floor(t/3),o=t%3+a-8-3,i=(s>>t&1)==1,e.set(n,o,i,!0),e.set(o,n,i,!0)}(C,t),function(e,t){let n=e.size,o=-1,i=n-1,a=7,s=0;for(let c=n-1;c>0;c-=2)for(6===c&&c--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,c-n)){let o=!1;s<t.length&&(o=(t[s]>>>a&1)==1),e.set(i,c-n,o),-1==--a&&(s++,a=7)}if((i+=o)<0||n<=i){i-=o,o=-o;break}}}(C,y),isNaN(i)&&(i=u.getBestMask(C,setupFormatInfo.bind(null,C,n))),u.applyMask(i,C),setupFormatInfo(C,n,i),{modules:C,version:t,errorCorrectionLevel:n,maskPattern:i,segments:m}}(e,n,w,m)}},9936:function(e,t,n){let o=n(25153);function ReedSolomonEncoder(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let n=o.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(n,i),e}return n},e.exports=ReedSolomonEncoder},66579:function(e,t){let n="[0-9]+",o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");let i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";t.KANJI=RegExp(o,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(n,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+o+"$"),s=RegExp("^"+n+"$"),c=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return c.test(e)}},25082:function(e,t,n){let o=n(37662),i=n(10894),a=n(77654),s=n(90690),c=n(69592),l=n(66579),u=n(13400),d=n(78343);function getStringByteLength(e){return unescape(encodeURIComponent(e)).length}function getSegments(e,t,n){let o;let i=[];for(;null!==(o=e.exec(n));)i.push({data:o[0],index:o.index,mode:t,length:o[0].length});return i}function getSegmentsFromString(e){let t,n;let i=getSegments(l.NUMERIC,o.NUMERIC,e),a=getSegments(l.ALPHANUMERIC,o.ALPHANUMERIC,e);u.isKanjiModeEnabled()?(t=getSegments(l.BYTE,o.BYTE,e),n=getSegments(l.KANJI,o.KANJI,e)):(t=getSegments(l.BYTE_KANJI,o.BYTE,e),n=[]);let s=i.concat(a,t,n);return s.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function getSegmentBitsLength(e,t){switch(t){case o.NUMERIC:return i.getBitsLength(e);case o.ALPHANUMERIC:return a.getBitsLength(e);case o.KANJI:return c.getBitsLength(e);case o.BYTE:return s.getBitsLength(e)}}function buildSingleSegment(e,t){let n;let l=o.getBestModeForData(e);if((n=o.from(t,l))!==o.BYTE&&n.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+o.toString(n)+".\n Suggested mode is: "+o.toString(l));switch(n!==o.KANJI||u.isKanjiModeEnabled()||(n=o.BYTE),n){case o.NUMERIC:return new i(e);case o.ALPHANUMERIC:return new a(e);case o.KANJI:return new c(e);case o.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(buildSingleSegment(t,null)):t.data&&e.push(buildSingleSegment(t.data,t.mode)),e},[])},t.fromString=function(e,n){let i=getSegmentsFromString(e,u.isKanjiModeEnabled()),a=function(e){let t=[];for(let n=0;n<e.length;n++){let i=e[n];switch(i.mode){case o.NUMERIC:t.push([i,{data:i.data,mode:o.ALPHANUMERIC,length:i.length},{data:i.data,mode:o.BYTE,length:i.length}]);break;case o.ALPHANUMERIC:t.push([i,{data:i.data,mode:o.BYTE,length:i.length}]);break;case o.KANJI:t.push([i,{data:i.data,mode:o.BYTE,length:getStringByteLength(i.data)}]);break;case o.BYTE:t.push([{data:i.data,mode:o.BYTE,length:getStringByteLength(i.data)}])}}return t}(i),s=function(e,t){let n={},i={start:{}},a=["start"];for(let s=0;s<e.length;s++){let c=e[s],l=[];for(let e=0;e<c.length;e++){let u=c[e],d=""+s+e;l.push(d),n[d]={node:u,lastCount:0},i[d]={};for(let e=0;e<a.length;e++){let s=a[e];n[s]&&n[s].node.mode===u.mode?(i[s][d]=getSegmentBitsLength(n[s].lastCount+u.length,u.mode)-getSegmentBitsLength(n[s].lastCount,u.mode),n[s].lastCount+=u.length):(n[s]&&(n[s].lastCount=u.length),i[s][d]=getSegmentBitsLength(u.length,u.mode)+4+o.getCharCountIndicator(u.mode,t))}}a=l}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:n}}(a,n),c=d.find_path(s.map,"start","end"),l=[];for(let e=1;e<c.length-1;e++)l.push(s.table[c[e]].node);return t.fromArray(l.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(getSegmentsFromString(e,u.isKanjiModeEnabled()))}},13400:function(e,t){let n;let o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return o[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');n=e},t.isKanjiModeEnabled=function(){return void 0!==n},t.toSJIS=function(e){return n(e)}},64956:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},48670:function(e,t,n){let o=n(13400),i=n(37039),a=n(9406),s=n(37662),c=n(64956),l=o.getBCHDigit(7973);function getReservedBitsCount(e,t){return s.getCharCountIndicator(e,t)+4}t.from=function(e,t){return c.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,n){if(!c.isValid(e))throw Error("Invalid QR Code version");void 0===n&&(n=s.BYTE);let a=o.getSymbolTotalCodewords(e),l=i.getTotalCodewordsCount(e,t),u=(a-l)*8;if(n===s.MIXED)return u;let d=u-getReservedBitsCount(n,e);switch(n){case s.NUMERIC:return Math.floor(d/10*3);case s.ALPHANUMERIC:return Math.floor(d/11*2);case s.KANJI:return Math.floor(d/13);case s.BYTE:default:return Math.floor(d/8)}},t.getBestVersionForData=function(e,n){let o;let i=a.from(n,a.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let o=1;o<=40;o++){let i=function(e,t){let n=0;return e.forEach(function(e){let o=getReservedBitsCount(e.mode,t);n+=o+e.getBitsLength()}),n}(e,o);if(i<=t.getCapacity(o,n,s.MIXED))return o}}(e,i);if(0===e.length)return 1;o=e[0]}else o=e;return function(e,n,o){for(let i=1;i<=40;i++)if(n<=t.getCapacity(i,o,e))return i}(o.mode,o.getLength(),i)},t.getEncodedBits=function(e){if(!c.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;o.getBCHDigit(t)-l>=0;)t^=7973<<o.getBCHDigit(t)-l;return e<<12|t}},46028:function(e,t,n){let o=n(10544);t.render=function(e,t,n){var i;let a=n,s=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(s=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),a=o.getOptions(a);let c=o.getImageWidth(e.modules.size,a),l=s.getContext("2d"),u=l.createImageData(c,c);return o.qrToImageData(u.data,e,a),i=s,l.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=c,i.width=c,i.style.height=c+"px",i.style.width=c+"px",l.putImageData(u,0,0),s},t.renderToDataURL=function(e,n,o){let i=o;void 0!==i||n&&n.getContext||(i=n,n=void 0),i||(i={});let a=t.render(e,n,i),s=i.type||"image/png",c=i.rendererOpts||{};return a.toDataURL(s,c.quality)}},12330:function(e,t,n){let o=n(10544);function getColorAttrib(e,t){let n=e.a/255,o=t+'="'+e.hex+'"';return n<1?o+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function svgCmd(e,t,n){let o=e+t;return void 0!==n&&(o+=" "+n),o}t.render=function(e,t,n){let i=o.getOptions(t),a=e.modules.size,s=e.modules.data,c=a+2*i.margin,l=i.color.light.a?"<path "+getColorAttrib(i.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+getColorAttrib(i.color.dark,"stroke")+' d="'+function(e,t,n){let o="",i=0,a=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);l||a||(a=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(o+=a?svgCmd("M",l+n,.5+u+n):svgCmd("m",i,0),i=0,a=!1),l+1<t&&e[c+1]||(o+=svgCmd("h",s),s=0)):i++}return o}(s,a,i.margin)+'"/>',d=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+d+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+l+u+"</svg>\n";return"function"==typeof n&&n(null,p),p}},10544:function(e,t){function hex2rgba(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let n=parseInt(t.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,o=e.scale||4;return{width:n,scale:n?4:o,margin:t,color:{dark:hex2rgba(e.color.dark||"#000000ff"),light:hex2rgba(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,n){let o=t.getScale(e,n);return Math.floor((e+2*n.margin)*o)},t.qrToImageData=function(e,n,o){let i=n.modules.size,a=n.modules.data,s=t.getScale(i,o),c=Math.floor((i+2*o.margin)*s),l=o.margin*s,u=[o.color.light,o.color.dark];for(let t=0;t<c;t++)for(let n=0;n<c;n++){let d=(t*c+n)*4,p=o.color.light;if(t>=l&&n>=l&&t<c-l&&n<c-l){let e=Math.floor((t-l)/s),o=Math.floor((n-l)/s);p=u[a[e*i+o]?1:0]}e[d++]=p.r,e[d++]=p.g,e[d++]=p.b,e[d]=p.a}}},45936:function(e,t,n){var o;!function(i,a){"use strict";var s="function",c="undefined",l="object",u="string",d="major",p="model",f="name",m="type",g="vendor",b="version",w="architecture",y="console",v="mobile",C="tablet",k="smarttv",x="wearable",E="embedded",I="Amazon",S="Apple",B="ASUS",A="BlackBerry",N="Browser",T="Chrome",P="Firefox",R="Google",_="Huawei",M="Microsoft",F="Motorola",O="Opera",W="Samsung",L="Sharp",q="Sony",U="Xiaomi",D="Zebra",j="Facebook",z="Chromium OS",$="Mac OS",extend=function(e,t){var n={};for(var o in e)t[o]&&t[o].length%2==0?n[o]=t[o].concat(e[o]):n[o]=e[o];return n},enumerize=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},has=function(e,t){return typeof e===u&&-1!==lowerize(t).indexOf(lowerize(e))},lowerize=function(e){return e.toLowerCase()},trim=function(e,t){if(typeof e===u)return e=e.replace(/^\s\s*/,""),typeof t===c?e:e.substring(0,500)},rgxMapper=function(e,t){for(var n,o,i,c,u,d,p=0;p<t.length&&!u;){var f=t[p],m=t[p+1];for(n=o=0;n<f.length&&!u&&f[n];)if(u=f[n++].exec(e))for(i=0;i<m.length;i++)d=u[++o],typeof(c=m[i])===l&&c.length>0?2===c.length?typeof c[1]==s?this[c[0]]=c[1].call(this,d):this[c[0]]=c[1]:3===c.length?typeof c[1]!==s||c[1].exec&&c[1].test?this[c[0]]=d?d.replace(c[1],c[2]):a:this[c[0]]=d?c[1].call(this,d,c[2]):a:4===c.length&&(this[c[0]]=d?c[3].call(this,d.replace(c[1],c[2])):a):this[c]=d||a;p+=2}},strMapper=function(e,t){for(var n in t)if(typeof t[n]===l&&t[n].length>0){for(var o=0;o<t[n].length;o++)if(has(t[n][o],e))return"?"===n?a:n}else if(has(t[n],e))return"?"===n?a:n;return e},K={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[b,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,b],[/opios[\/ ]+([\w\.]+)/i],[b,[f,O+" Mini"]],[/\bopr\/([\w\.]+)/i],[b,[f,O]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[b,[f,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[f,b],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[b,[f,"UC"+N]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[b,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[b,[f,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[b,[f,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[b,[f,"Smart Lenovo "+N]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure "+N],b],[/\bfocus\/([\w\.]+)/i],[b,[f,P+" Focus"]],[/\bopt\/([\w\.]+)/i],[b,[f,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[b,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[f,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[b,[f,"MIUI "+N]],[/fxios\/([-\w\.]+)/i],[b,[f,P]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 "+N]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 "+N],b],[/samsungbrowser\/([\w\.]+)/i],[b,[f,W+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],b],[/metasr[\/ ]?([\d\.]+)/i],[b,[f,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[f,"Sogou Mobile"],b],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[f,b],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,j],b],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[f,b],[/\bgsa\/([\w\.]+) .*safari\//i],[b,[f,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[b,[f,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[b,[f,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,T+" WebView"],b],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[b,[f,"Android "+N]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,b],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[b,[f,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[b,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[b,strMapper,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[f,b],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],b],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[b,[f,P+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[f,b],[/(cobalt)\/([\w\.]+)/i],[f,[b,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[g,W],[m,C]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[g,W],[m,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[p,[g,S],[m,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[g,S],[m,C]],[/(macintosh);/i],[p,[g,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[g,L],[m,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[g,_],[m,C]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[p,[g,_],[m,v]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[g,U],[m,v]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[g,U],[m,C]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[g,"OPPO"],[m,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[g,"Vivo"],[m,v]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[p,[g,"Realme"],[m,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[g,F],[m,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[g,F],[m,C]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[g,"LG"],[m,C]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[g,"LG"],[m,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[g,"Lenovo"],[m,C]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[g,"Nokia"],[m,v]],[/(pixel c)\b/i],[p,[g,R],[m,C]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[g,R],[m,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[g,q],[m,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[g,q],[m,C]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[g,"OnePlus"],[m,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[g,I],[m,C]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[g,I],[m,v]],[/(playbook);[-\w\),; ]+(rim)/i],[p,g,[m,C]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[g,A],[m,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[g,B],[m,C]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[g,B],[m,v]],[/(nexus 9)/i],[p,[g,"HTC"],[m,C]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[p,/_/g," "],[m,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[g,"Acer"],[m,C]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[g,"Meizu"],[m,v]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[p,[g,"Ulefone"],[m,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,p,[m,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[g,p,[m,C]],[/(surface duo)/i],[p,[g,M],[m,C]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[g,"Fairphone"],[m,v]],[/(u304aa)/i],[p,[g,"AT&T"],[m,v]],[/\bsie-(\w*)/i],[p,[g,"Siemens"],[m,v]],[/\b(rct\w+) b/i],[p,[g,"RCA"],[m,C]],[/\b(venue[\d ]{2,7}) b/i],[p,[g,"Dell"],[m,C]],[/\b(q(?:mv|ta)\w+) b/i],[p,[g,"Verizon"],[m,C]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[p,[g,"Barnes & Noble"],[m,C]],[/\b(tm\d{3}\w+) b/i],[p,[g,"NuVision"],[m,C]],[/\b(k88) b/i],[p,[g,"ZTE"],[m,C]],[/\b(nx\d{3}j) b/i],[p,[g,"ZTE"],[m,v]],[/\b(gen\d{3}) b.+49h/i],[p,[g,"Swiss"],[m,v]],[/\b(zur\d{3}) b/i],[p,[g,"Swiss"],[m,C]],[/\b((zeki)?tb.*\b) b/i],[p,[g,"Zeki"],[m,C]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[g,"Dragon Touch"],p,[m,C]],[/\b(ns-?\w{0,9}) b/i],[p,[g,"Insignia"],[m,C]],[/\b((nxa|next)-?\w{0,9}) b/i],[p,[g,"NextBook"],[m,C]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[g,"Voice"],p,[m,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[g,"LvTel"],p,[m,v]],[/\b(ph-1) /i],[p,[g,"Essential"],[m,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[p,[g,"Envizen"],[m,C]],[/\b(trio[-\w\. ]+) b/i],[p,[g,"MachSpeed"],[m,C]],[/\btu_(1491) b/i],[p,[g,"Rotor"],[m,C]],[/(shield[\w ]+) b/i],[p,[g,"Nvidia"],[m,C]],[/(sprint) (\w+)/i],[g,p,[m,v]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[g,M],[m,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[g,D],[m,C]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[g,D],[m,v]],[/smart-tv.+(samsung)/i],[g,[m,k]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[g,W],[m,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,"LG"],[m,k]],[/(apple) ?tv/i],[g,[p,S+" TV"],[m,k]],[/crkey/i],[[p,T+"cast"],[g,R],[m,k]],[/droid.+aft(\w+)( bui|\))/i],[p,[g,I],[m,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[p,[g,L],[m,k]],[/(bravia[\w ]+)( bui|\))/i],[p,[g,q],[m,k]],[/(mitv-\w{5}) bui/i],[p,[g,U],[m,k]],[/Hbbtv.*(technisat) (.*);/i],[g,p,[m,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[g,trim],[p,trim],[m,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[m,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[g,p,[m,y]],[/droid.+; (shield) bui/i],[p,[g,"Nvidia"],[m,y]],[/(playstation [345portablevi]+)/i],[p,[g,q],[m,y]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[g,M],[m,y]],[/((pebble))app/i],[g,p,[m,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[p,[g,S],[m,x]],[/droid.+; (glass) \d/i],[p,[g,R],[m,x]],[/droid.+; (wt63?0{2,3})\)/i],[p,[g,D],[m,x]],[/(quest( 2| pro)?)/i],[p,[g,j],[m,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[m,E]],[/(aeobc)\b/i],[p,[g,I],[m,E]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[p,[m,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[m,C]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[m,C]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[m,v]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[b,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[f,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,b],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[f,[b,strMapper,K]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,strMapper,K],[f,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,$],[b,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[b,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,b],[/\(bb(10);/i],[b,[f,A]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[b,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[b,[f,P+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[f,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[b,[f,"watchOS"]],[/crkey\/([\d\.]+)/i],[b,[f,T+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[f,z],b],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,b],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],b],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[f,b]]},UAParser=function(e,t){if(typeof e===l&&(t=e,e=a),!(this instanceof UAParser))return new UAParser(e,t).getResult();var n=typeof i!==c&&i.navigator?i.navigator:a,o=e||(n&&n.userAgent?n.userAgent:""),y=n&&n.userAgentData?n.userAgentData:a,k=t?extend(G,t):G,x=n&&n.userAgent==o;return this.getBrowser=function(){var e,t={};return t[f]=a,t[b]=a,rgxMapper.call(t,o,k.browser),t[d]=typeof(e=t[b])===u?e.replace(/[^\d\.]/g,"").split(".")[0]:a,x&&n&&n.brave&&typeof n.brave.isBrave==s&&(t[f]="Brave"),t},this.getCPU=function(){var e={};return e[w]=a,rgxMapper.call(e,o,k.cpu),e},this.getDevice=function(){var e={};return e[g]=a,e[p]=a,e[m]=a,rgxMapper.call(e,o,k.device),x&&!e[m]&&y&&y.mobile&&(e[m]=v),x&&"Macintosh"==e[p]&&n&&typeof n.standalone!==c&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[p]="iPad",e[m]=C),e},this.getEngine=function(){var e={};return e[f]=a,e[b]=a,rgxMapper.call(e,o,k.engine),e},this.getOS=function(){var e={};return e[f]=a,e[b]=a,rgxMapper.call(e,o,k.os),x&&!e[f]&&y&&"Unknown"!=y.platform&&(e[f]=y.platform.replace(/chrome os/i,z).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===u&&e.length>500?trim(e,500):e,this},this.setUA(o),this};UAParser.VERSION="1.0.37",UAParser.BROWSER=enumerize([f,b,d]),UAParser.CPU=enumerize([w]),UAParser.DEVICE=enumerize([p,g,m,y,v,k,C,x,E]),UAParser.ENGINE=UAParser.OS=enumerize([f,b]),typeof t!==c?(e.exports&&(t=e.exports=UAParser),t.UAParser=UAParser):n.amdO?a!==(o=(function(){return UAParser}).call(t,n,t,e))&&(e.exports=o):typeof i!==c&&(i.UAParser=UAParser);var H=typeof i!==c&&(i.jQuery||i.Zepto);if(H&&!H.ua){var V=new UAParser;H.ua=V.getResult(),H.ua.get=function(){return V.getUA()},H.ua.set=function(e){V.setUA(e);var t=V.getResult();for(var n in t)H.ua[n]=t[n]}}}("object"==typeof window?window:this)},57843:function(e,t,n){"use strict";n.d(t,{FF:function(){return validateObject},S5:function(){return numberToBytesLE},Wd:function(){return equalBytes},bytesToNumberBE:function(){return bytesToNumberBE},ci:function(){return bytesToHex},dQ:function(){return bitMask},eV:function(){return concatBytes},hexToBytes:function(){return hexToBytes},n$:function(){return createHmacDrbg},ql:function(){return ensureBytes},tL:function(){return numberToBytesBE},ty:function(){return bytesToNumberLE}}),BigInt(0);let o=BigInt(1),i=BigInt(2),u8a=e=>e instanceof Uint8Array,a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function bytesToHex(e){if(!u8a(e))throw Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=a[e[n]];return t}function hexToNumber(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);return BigInt(""===e?"0":`0x${e}`)}function hexToBytes(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);let t=e.length;if(t%2)throw Error("padded hex string expected, got unpadded hex of length "+t);let n=new Uint8Array(t/2);for(let t=0;t<n.length;t++){let o=2*t,i=e.slice(o,o+2),a=Number.parseInt(i,16);if(Number.isNaN(a)||a<0)throw Error("Invalid byte sequence");n[t]=a}return n}function bytesToNumberBE(e){return hexToNumber(bytesToHex(e))}function bytesToNumberLE(e){if(!u8a(e))throw Error("Uint8Array expected");return hexToNumber(bytesToHex(Uint8Array.from(e).reverse()))}function numberToBytesBE(e,t){return hexToBytes(e.toString(16).padStart(2*t,"0"))}function numberToBytesLE(e,t){return numberToBytesBE(e,t).reverse()}function ensureBytes(e,t,n){let o;if("string"==typeof t)try{o=hexToBytes(t)}catch(n){throw Error(`${e} must be valid hex string, got "${t}". Cause: ${n}`)}else if(u8a(t))o=Uint8Array.from(t);else throw Error(`${e} must be hex string or Uint8Array`);let i=o.length;if("number"==typeof n&&i!==n)throw Error(`${e} expected ${n} bytes, got ${i}`);return o}function concatBytes(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;return e.forEach(e=>{if(!u8a(e))throw Error("Uint8Array expected");t.set(e,n),n+=e.length}),t}function equalBytes(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}let bitMask=e=>(i<<BigInt(e-1))-o,u8n=e=>new Uint8Array(e),u8fr=e=>Uint8Array.from(e);function createHmacDrbg(e,t,n){if("number"!=typeof e||e<2)throw Error("hashLen must be a number");if("number"!=typeof t||t<2)throw Error("qByteLen must be a number");if("function"!=typeof n)throw Error("hmacFn must be a function");let o=u8n(e),i=u8n(e),a=0,reset=()=>{o.fill(1),i.fill(0),a=0},h=(...e)=>n(i,o,...e),reseed=(e=u8n())=>{i=h(u8fr([0]),e),o=h(),0!==e.length&&(i=h(u8fr([1]),e),o=h())},gen=()=>{if(a++>=1e3)throw Error("drbg: tried 1000 values");let e=0,n=[];for(;e<t;){o=h();let t=o.slice();n.push(t),e+=o.length}return concatBytes(...n)};return(e,t)=>{let n;for(reset(),reseed(e);!(n=t(gen()));)reseed();return reset(),n}}let s={bigint:e=>"bigint"==typeof e,function:e=>"function"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,stringOrUint8Array:e=>"string"==typeof e||e instanceof Uint8Array,isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"==typeof e&&Number.isSafeInteger(e.outputLen)};function validateObject(e,t,n={}){let checkField=(t,n,o)=>{let i=s[n];if("function"!=typeof i)throw Error(`Invalid validator "${n}", expected function`);let a=e[t];if((!o||void 0!==a)&&!i(a,e))throw Error(`Invalid param ${String(t)}=${a} (${typeof a}), expected ${n}`)};for(let[e,n]of Object.entries(t))checkField(e,n,!1);for(let[e,t]of Object.entries(n))checkField(e,t,!0);return e}},58830:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});var o=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`},32211:function(e,t,n){"use strict";n.d(t,{W:function(){return lightTheme}});var o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',i={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${o}`,system:o},a={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},s={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},baseTheme=({borderRadius:e="large",fontStack:t="rounded",overlayBlur:n="none"})=>({blurs:{modalOverlay:s[n].modalOverlay},fonts:{body:i[t]},radii:{actionButton:a[e].actionButton,connectButton:a[e].connectButton,menuButton:a[e].connectButton,modal:a[e].modal,modalMobile:a[e].modalMobile}}),c={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},l=c.blue,lightTheme=({accentColor:e=l.accentColor,accentColorForeground:t=l.accentColorForeground,...n}={})=>({...baseTheme(n),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});lightTheme.accentColors=c},59212:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,o="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(o&&(o+=" "),o+=t);return o}},77470:function(e,t,n){"use strict";n.d(t,{R:function(){return getDefaultState},m:function(){return s}});var o=n(17987),i=n(99024),a=n(11640),s=class extends i.F{#e;#t;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||getDefaultState(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){this.#n=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#r({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});let t="pending"===this.state.status,n=!this.#n.canStart();try{if(!t){this.#r({type:"pending",variables:e,isPaused:n}),await this.#t.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#r({type:"pending",context:t,variables:e,isPaused:n})}let o=await this.#n.start();return await this.#t.config.onSuccess?.(o,e,this.state.context,this),await this.options.onSuccess?.(o,e,this.state.context),await this.#t.config.onSettled?.(o,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(o,null,e,this.state.context),this.#r({type:"success",data:o}),o}catch(t){try{throw await this.#t.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#t.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#r({type:"error",error:t})}}finally{this.#t.runNext(this)}}#r(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),o.V.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},23588:function(e,t,n){"use strict";n.d(t,{D:function(){return useMutation}});var o=n(2265),i=n(77470),a=n(17987),s=n(42996),c=n(40300),l=class extends s.l{#o;#i=void 0;#a;#s;constructor(e,t){super(),this.#o=e,this.setOptions(t),this.bindMethods(),this.#c()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#o.defaultMutationOptions(e),(0,c.VS)(this.options,t)||this.#o.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#a,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,c.Ym)(t.mutationKey)!==(0,c.Ym)(this.options.mutationKey)?this.reset():this.#a?.state.status==="pending"&&this.#a.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#a?.removeObserver(this)}onMutationUpdate(e){this.#c(),this.#l(e)}getCurrentResult(){return this.#i}reset(){this.#a?.removeObserver(this),this.#a=void 0,this.#c(),this.#l()}mutate(e,t){return this.#s=t,this.#a?.removeObserver(this),this.#a=this.#o.getMutationCache().build(this.#o,this.options),this.#a.addObserver(this),this.#a.execute(e)}#c(){let e=this.#a?.state??(0,i.R)();this.#i={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#l(e){a.V.batch(()=>{if(this.#s&&this.hasListeners()){let t=this.#i.variables,n=this.#i.context;e?.type==="success"?(this.#s.onSuccess?.(e.data,t,n),this.#s.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#s.onError?.(e.error,t,n),this.#s.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(e=>{e(this.#i)})})}},u=n(38038),d=n(14805);function useMutation(e,t){let n=(0,u.NL)(t),[i]=o.useState(()=>new l(n,e));o.useEffect(()=>{i.setOptions(e)},[i,e]);let s=o.useSyncExternalStore(o.useCallback(e=>i.subscribe(a.V.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),c=o.useCallback((e,t)=>{i.mutate(e,t).catch(d.Z)},[i]);if(s.error&&(0,d.L)(i.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:c,mutateAsync:s.mutate}}},16198:function(e,t,n){"use strict";n.d(t,{D:function(){return coinbaseWallet}});var o=n(25413),i=n(76026),a=n(39803),s=n(48519),c=n(21693);function coinbaseWallet(e){let t,l,u,d,p;return(0,o.K)(o=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",supportsSimulation:!0,type:coinbaseWallet.type,async connect({chainId:e}={}){try{let t=await this.getProvider(),n=(await t.request({method:"eth_requestAccounts"})).map(e=>(0,a.K)(e));u||(u=this.onAccountsChanged.bind(this),t.on("accountsChanged",u)),d||(d=this.onChainChanged.bind(this),t.on("chainChanged",d)),p||(p=this.onDisconnect.bind(this),t.on("disconnect",p));let o=await this.getChainId();if(e&&o!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===s.ab.code)throw e;return{id:o}});o=t?.id??o}return{accounts:n,chainId:o}}catch(e){if(/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))throw new s.ab(e);throw e}},async disconnect(){let e=await this.getProvider();u&&(e.removeListener("accountsChanged",u),u=void 0),d&&(e.removeListener("chainChanged",d),d=void 0),p&&(e.removeListener("disconnect",p),p=void 0),e.disconnect(),e.close()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,a.K)(e))},async getChainId(){let e=await this.getProvider(),t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){if(!l){let{default:i}=await n.e(4775).then(n.t.bind(n,64775,19));t=new("function"!=typeof i&&"function"==typeof i.default?i.default:i)({reloadOnDisconnect:!1,...e});let a=t.walletExtension?.getChainId(),s=o.chains.find(t=>e.chainId?t.id===e.chainId:t.id===a)||o.chains[0],c=e.chainId||s?.id,u=e.jsonRpcUrl||s?.rpcUrls.default.http[0];l=t.makeWeb3Provider(u,c)}return l},async isAuthorized(){try{let e=await this.getAccounts();return!!e.length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=o.chains.find(e=>e.id===t);if(!n)throw new s.x3(new i.X4);let a=await this.getProvider();try{return await a.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.eC)(n.id)}]}),n}catch(o){if(4902===o.code)try{let o,i;o=e?.blockExplorerUrls?e.blockExplorerUrls:n.blockExplorers?.default.url?[n.blockExplorers?.default.url]:[],i=e?.rpcUrls?.length?e.rpcUrls:[n.rpcUrls.default?.http[0]??""];let s={blockExplorerUrls:o,chainId:(0,c.eC)(t),chainName:e?.chainName??n.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??n.nativeCurrency,rpcUrls:i};return await a.request({method:"wallet_addEthereumChain",params:[s]}),n}catch(e){throw new s.ab(e)}throw new s.x3(o)}},onAccountsChanged(e){0===e.length?this.onDisconnect():o.emitter.emit("change",{accounts:e.map(e=>(0,a.K)(e))})},onChainChanged(e){let t=Number(e);o.emitter.emit("change",{chainId:t})},async onDisconnect(e){o.emitter.emit("disconnect");let t=await this.getProvider();u&&(t.removeListener("accountsChanged",u),u=void 0),d&&(t.removeListener("chainChanged",d),d=void 0),p&&(t.removeListener("disconnect",p),p=void 0)}}))}coinbaseWallet.type="coinbaseWallet"},67797:function(e,t,n){"use strict";n.d(t,{a:function(){return walletConnect}});var o=n(25413),i=n(29358),a=n(76026),s=n(39803),c=n(48519),l=n(21693);function walletConnect(e){let t,u;let d=e.isNewChainsStale??!0,p="eip155";return(0,o.K)(o=>({id:"walletConnect",name:"WalletConnect",type:walletConnect.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){try{let n=await this.getProvider();if(!n)throw new i.M;n.on("display_uri",this.onDisplayUri);let a=e;if(!a){let e=await o.storage?.getItem("state")??{},t=o.chains.some(t=>t.id===e.chainId);a=t?e.chainId:o.chains[0]?.id}if(!a)throw Error("No chains found on connector.");let c=await this.isChainsStale();if(n.session&&c&&await n.disconnect(),!n.session||c){let e=o.chains.filter(e=>e.id!==a).map(e=>e.id);await n.connect({optionalChains:[a,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(o.chains.map(e=>e.id))}let l=(await n.enable()).map(e=>(0,s.K)(e)),u=await this.getChainId();return n.removeListener("display_uri",this.onDisplayUri),n.removeListener("connect",this.onConnect.bind(this)),n.on("accountsChanged",this.onAccountsChanged.bind(this)),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect.bind(this)),n.on("session_delete",this.onSessionDelete.bind(this)),{accounts:l,chainId:u}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new c.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{e?.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),e?.removeListener("chainChanged",this.onChainChanged),e?.removeListener("disconnect",this.onDisconnect.bind(this)),e?.removeListener("session_delete",this.onSessionDelete.bind(this)),e?.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){let e=await this.getProvider();return e.accounts.map(e=>(0,s.K)(e))},async getProvider({chainId:i}={}){async function initProvider(){let t=o.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:i}=await Promise.all([n.e(6764),n.e(1537),n.e(5883)]).then(n.bind(n,70220));return await i.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(o.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),showQrModal:e.showQrModal??!0})}return t||(u||(u=initProvider()),t=await u,t?.events.setMaxListeners(1/0)),i&&await this.switchChain?.({chainId:i}),t},async getChainId(){let e=await this.getProvider();return e.chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;let n=await this.isChainsStale();if(n&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=o.chains.find(e=>e.id===t);if(!n)throw new c.x3(new a.X4);try{let o=await this.getProvider(),i=this.getNamespaceChainsIds(),a=this.getNamespaceMethods(),s=i.includes(t);if(!s&&a.includes("wallet_addEthereumChain")){let i,a;i=e?.blockExplorerUrls?e.blockExplorerUrls:n.blockExplorers?.default.url?[n.blockExplorers?.default.url]:[],a=e?.rpcUrls?.length?e.rpcUrls:[...n.rpcUrls.default.http];let s={blockExplorerUrls:i,chainId:(0,l.eC)(t),chainName:e?.chainName??n.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??n.nativeCurrency,rpcUrls:a};await o.request({method:"wallet_addEthereumChain",params:[s]});let c=await this.getRequestedChainsIds();this.setRequestedChainsIds([...c,t])}return await o.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,l.eC)(t)}]}),n}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new c.ab(t);throw new c.x3(t)}},onAccountsChanged(e){0===e.length?this.onDisconnect():o.emitter.emit("change",{accounts:e.map(e=>(0,s.K)(e))})},onChainChanged(e){let t=Number(e);o.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),n=await this.getAccounts();o.emitter.emit("connect",{accounts:n,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),o.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){o.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){if(!t)return[];let e=t.session?.namespaces[p]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return e??[]},getNamespaceMethods(){if(!t)return[];let e=t.session?.namespaces[p]?.methods;return e??[]},async getRequestedChainsIds(){return await o.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){let e=this.getNamespaceMethods();if(e.includes("wallet_addEthereumChain")||!d)return!1;let t=o.chains.map(e=>e.id),n=this.getNamespaceChainsIds();if(n.length&&!n.some(e=>t.includes(e)))return!1;let i=await this.getRequestedChainsIds();return!t.every(e=>i.includes(e))},async setRequestedChainsIds(e){await o.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}}))}walletConnect.type="walletConnect"},25413:function(e,t,n){"use strict";function createConnector(e){return e}n.d(t,{K:function(){return createConnector}})},77433:function(e,t,n){"use strict";n.d(t,{L:function(){return injected}});var o=n(39803),i=n(48519),a=n(36063),s=n(33679),c=n(21693),l=n(76026),u=n(29358),d=n(25413);let p=/(rabby|trustwallet)/,f={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:findProvider(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>findProvider(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:findProvider(e,"isPhantom")}};function injected(e={}){let t,n,m,g;let{shimDisconnect:b=!0,unstable_shimAsyncInject:w}=e;function getTarget(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...f[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return(0,d.K)(d=>({get icon(){return getTarget().icon},get id(){return getTarget().id},get name(){return getTarget().name},get supportsSimulation(){return p.test(this.id.toLowerCase())},type:injected.type,async setup(){let n=await this.getProvider();n&&e.target&&(m||(m=this.onConnect.bind(this),n.on("connect",m)),t||(t=this.onAccountsChanged.bind(this),n.on("accountsChanged",t)))},async connect({chainId:a,isReconnecting:s}={}){let c=await this.getProvider();if(!c)throw new u.M;let l=[];if(s)l=await this.getAccounts().catch(()=>[]);else if(b)try{let e=await c.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});l=e[0]?.caveats?.[0]?.value?.map(e=>o.K(e))}catch(e){if(e.code===i.ab.code)throw new i.ab(e);if(e.code===i.pT.code)throw e}try{if(!l?.length&&!s){let e=await c.request({method:"eth_requestAccounts"});l=e.map(e=>(0,o.K)(e))}m&&(c.removeListener("connect",m),m=void 0),t||(t=this.onAccountsChanged.bind(this),c.on("accountsChanged",t)),n||(n=this.onChainChanged.bind(this),c.on("chainChanged",n)),g||(g=this.onDisconnect.bind(this),c.on("disconnect",g));let u=await this.getChainId();if(a&&u!==a){let e=await this.switchChain({chainId:a}).catch(e=>{if(e.code===i.ab.code)throw e;return{id:u}});u=e?.id??u}return b&&await d.storage?.removeItem(`${this.id}.disconnected`),e.target||await d.storage?.setItem("injected.connected",!0),{accounts:l,chainId:u}}catch(e){if(e.code===i.ab.code)throw new i.ab(e);if(e.code===i.pT.code)throw new i.pT(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new u.M;n&&(t.removeListener("chainChanged",n),n=void 0),g&&(t.removeListener("disconnect",g),g=void 0),m||(m=this.onConnect.bind(this),t.on("connect",m)),b&&await d.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await d.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new u.M;let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,o.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new u.M;let t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){let e;if("undefined"==typeof window)return;let t=getTarget();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?findProvider(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{let t=b&&await d.storage?.getItem(`${this.id}.disconnected`);if(t)return!1;if(!e.target){let e=await d.storage?.getItem("injected.connected");if(!e)return!1}let n=await this.getProvider();if(!n){if(void 0!==w&&!1!==w){let handleEthereum=async()=>{"undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",handleEthereum);let e=await this.getProvider();return!!e},e="number"==typeof w?w:1e3,t=await Promise.race([..."undefined"!=typeof window?[new Promise(e=>window.addEventListener("ethereum#initialized",()=>e(handleEthereum()),{once:!0}))]:[],new Promise(t=>setTimeout(()=>t(handleEthereum()),e))]);if(t)return!0}throw new u.M}let o=await (0,a.J)(()=>(0,s.F)(()=>this.getAccounts(),{timeout:100}));return!!o.length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=await this.getProvider();if(!n)throw new u.M;let o=d.chains.find(e=>e.id===t);if(!o)throw new i.x3(new l.X4);try{return await Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.eC)(t)}]}).then(async()=>{let e=await this.getChainId();e===t&&d.emitter.emit("change",{chainId:t})}),new Promise(e=>d.emitter.once("change",({chainId:n})=>{n===t&&e()}))]),o}catch(a){if(4902===a.code||a?.data?.originalError?.code===4902)try{let a,s;let{default:l,...u}=o.blockExplorers??{};e?.blockExplorerUrls?a=e.blockExplorerUrls:l&&(a=[l.url,...Object.values(u).map(e=>e.url)]),s=e?.rpcUrls?.length?e.rpcUrls:[o.rpcUrls.default?.http[0]??""];let d={blockExplorerUrls:a,chainId:(0,c.eC)(t),chainName:e?.chainName??o.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??o.nativeCurrency,rpcUrls:s};await n.request({method:"wallet_addEthereumChain",params:[d]});let p=await this.getChainId();if(p!==t)throw new i.ab(Error("User rejected switch after adding network."));return o}catch(e){throw new i.ab(e)}if(a.code===i.ab.code)throw new i.ab(a);throw new i.x3(a)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(d.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),b&&await d.storage?.removeItem(`${this.id}.disconnected`)}else d.emitter.emit("change",{accounts:e.map(e=>(0,o.K)(e))})},onChainChanged(e){let t=Number(e);d.emitter.emit("change",{chainId:t})},async onConnect(e){let o=await this.getAccounts();if(0===o.length)return;let i=Number(e.chainId);d.emitter.emit("connect",{accounts:o,chainId:i});let a=await this.getProvider();a&&(m&&(a.removeListener("connect",m),m=void 0),t||(t=this.onAccountsChanged.bind(this),a.on("accountsChanged",t)),n||(n=this.onChainChanged.bind(this),a.on("chainChanged",n)),g||(g=this.onDisconnect.bind(this),a.on("disconnect",g)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(d.emitter.emit("disconnect"),t&&(n&&(t.removeListener("chainChanged",n),n=void 0),g&&(t.removeListener("disconnect",g),g=void 0),m||(m=this.onConnect.bind(this),t.on("connect",m))))}}))}function findProvider(e,t){function isProvider(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let n=e.ethereum;return n?.providers?n.providers.find(e=>isProvider(e)):n&&isProvider(n)?n:void 0}injected.type="injected"},50963:function(e,t,n){"use strict";let o;n.d(t,{_:function(){return createConfig}});var i,a=n(30315);let subscribeWithSelector=e=>(t,n,o)=>{let i=o.subscribe;o.subscribe=(e,t,n)=>{let a=e;if(t){let i=(null==n?void 0:n.equalityFn)||Object.is,s=e(o.getState());a=n=>{let o=e(n);if(!i(s,o)){let e=s;t(s=o,e)}},(null==n?void 0:n.fireImmediately)&&t(s,s)}return i(a)};let a=e(t,n,o);return a},toThenable=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>toThenable(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>toThenable(t)(e)}}},oldImpl=(e,t)=>(n,o,i)=>{let a,s,c={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,u=new Set,d=new Set;try{a=c.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),n(...e)},o,i);let p=toThenable(c.serialize),setItem=()=>{let e;let t=c.partialize({...o()}),n=p({state:t,version:c.version}).then(e=>a.setItem(c.name,e)).catch(t=>{e=t});if(e)throw e;return n},f=i.setState;i.setState=(e,t)=>{f(e,t),setItem()};let m=e((...e)=>{n(...e),setItem()},o,i),hydrate=()=>{var e;if(!a)return;l=!1,u.forEach(e=>e(o()));let t=(null==(e=c.onRehydrateStorage)?void 0:e.call(c,o()))||void 0;return toThenable(a.getItem.bind(a))(c.name).then(e=>{if(e)return c.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===c.version)return e.state;if(c.migrate)return c.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(s=c.merge(e,null!=(t=o())?t:m),!0),setItem()}).then(()=>{null==t||t(s,void 0),l=!0,d.forEach(e=>e(s))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{c={...c,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>hydrate(),hasHydrated:()=>l,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},hydrate(),s||m},newImpl=(e,t)=>(n,o,i)=>{let a,s={storage:function(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var o;let parse=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),i=null!=(o=n.getItem(e))?o:null;return i instanceof Promise?i.then(parse):parse(i)},setItem:(e,o)=>n.setItem(e,JSON.stringify(o,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,l=new Set,u=new Set,d=s.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...e)},o,i);let setItem=()=>{let e=s.partialize({...o()});return d.setItem(s.name,{state:e,version:s.version})},p=i.setState;i.setState=(e,t)=>{p(e,t),setItem()};let f=e((...e)=>{n(...e),setItem()},o,i),hydrate=()=>{var e,t;if(!d)return;c=!1,l.forEach(e=>{var t;return e(null!=(t=o())?t:f)});let i=(null==(t=s.onRehydrateStorage)?void 0:t.call(s,null!=(e=o())?e:f))||void 0;return toThenable(d.getItem.bind(d))(s.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(a=s.merge(e,null!=(t=o())?t:f),!0),setItem()}).then(()=>{null==i||i(a,void 0),a=o(),c=!0,u.forEach(e=>e(a))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{s={...s,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>hydrate(),hasHydrated:()=>c,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},s.skipHydration||hydrate(),a||f},persist=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),oldImpl(e,t)):newImpl(e,t),createStoreImpl=e=>{let t;let n=new Set,setState=(e,o)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=o?o:"object"!=typeof i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},getState=()=>t,o={setState,getState,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(setState,getState,o),o},vanilla_createStore=e=>e?createStoreImpl(e):createStoreImpl;var s=n(77433),c=n(11953),__classPrivateFieldGet=function(e,t,n,o){if("a"===n&&!o)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)};let Emitter=class Emitter{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),i.set(this,new c.v)}on(e,t){__classPrivateFieldGet(this,i,"f").on(e,t)}once(e,t){__classPrivateFieldGet(this,i,"f").once(e,t)}off(e,t){__classPrivateFieldGet(this,i,"f").off(e,t)}emit(e,...t){let n=t[0];__classPrivateFieldGet(this,i,"f").emit(e,{uid:this.uid,...n})}listenerCount(e){return __classPrivateFieldGet(this,i,"f").listenerCount(e)}};function deserialize_deserialize(e,t){return JSON.parse(e,(e,n)=>{let o=n;return o?.__type==="bigint"&&(o=BigInt(o.value)),o?.__type==="Map"&&(o=new Map(o.value)),t?.(e,o)??o})}function getReferenceKey(e,t){return e.slice(0,t).join(".")||"."}function getCutoff(e,t){let{length:n}=e;for(let o=0;o<n;++o)if(e[o]===t)return o+1;return 0}function serialize_serialize(e,t,n,o){return JSON.stringify(e,function(e,t){let n="function"==typeof e,o="function"==typeof t,i=[],a=[];return function(s,c){if("object"==typeof c){if(i.length){let e=getCutoff(i,this);0===e?i[i.length]=this:(i.splice(e),a.splice(e)),a[a.length]=s;let n=getCutoff(i,c);if(0!==n)return o?t.call(this,s,c,getReferenceKey(a,n)):`[ref=${getReferenceKey(a,n)}]`}else i[0]=c,a[0]=s}return n?e.call(this,s,c):c}}((e,n)=>{let o=n;return"bigint"==typeof o&&(o={__type:"bigint",value:n.toString()}),o instanceof Map&&(o={__type:"Map",value:Array.from(n.entries())}),t?.(e,o)??o},o),n??void 0)}i=new WeakMap;let l={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};var u=n(76026);let d=256;var p=n(81784);function createConfig(e){let t;let{multiInjectedProviderDiscovery:n=!0,storage:i=function(e){let{deserialize:t=deserialize_deserialize,key:n="wagmi",serialize:o=serialize_serialize,storage:i=l}=e;function unwrap(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...i,key:n,async getItem(e,o){let a=i.getItem(`${n}.${e}`),s=await unwrap(a);return s?t(s)??null:o??null},async setItem(e,t){let a=`${n}.${e}`;null===t?await unwrap(i.removeItem(a)):await unwrap(i.setItem(a,o(t)))},async removeItem(e){await unwrap(i.removeItem(`${n}.${e}`))}}}({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:l}),syncConnectedChain:c=!0,ssr:f,...m}=e,g="undefined"!=typeof window&&n?function(){let e=new Set,t=[],request=()=>(function(e){let handler=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",handler),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",handler)})(n=>{t.some(({info:e})=>e.uuid===n.info.uuid)||(t=[...t,n],e.forEach(e=>e(t,{added:[n]})))}),n=request();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),n()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),n(),n=request()},subscribe:(n,{emitImmediately:o}={})=>(e.add(n),o&&n(t,{added:t}),()=>e.delete(n))}}():void 0,b=vanilla_createStore(()=>m.chains),w=vanilla_createStore(()=>[...m.connectors??[],...f?[]:g?.getProviders().map(providerDetailToConnector)??[]].map(setup));function setup(e){var t;let n=(t=function(e=11){if(!o||d+e>512){o="",d=0;for(let e=0;e<256;e++)o+=(256+256*Math.random()|0).toString(16).substring(1)}return o.substring(d,d+++e)}(),new Emitter(t)),a={...e({emitter:n,chains:b.getState(),storage:i}),emitter:n,uid:n.uid};return n.on("connect",connect),a.setup?.(),a}function providerDetailToConnector(e){let{info:t}=e,n=e.provider;return(0,s.L)({target:{...t,id:t.rdns,provider:n}})}let y=new Map;function getInitialState(){return{chainId:b.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let v="0.0.0-canary-";t=p.i.startsWith(v)?parseInt(p.i.replace(v,"")):parseInt(p.i.split(".")[0]??"0");let C=vanilla_createStore(subscribeWithSelector(i?persist(getInitialState,{migrate(e,n){if(n===t)return e;let o=getInitialState(),i=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:o.chainId;return{...o,chainId:i}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:n,name:o,type:i,uid:a}=t.connector;return[e,{...t,connector:{id:n,name:o,type:i,uid:a}}]})},chainId:e.chainId,current:e.current}),skipHydration:f,storage:i,version:t}):getInitialState));function change(e){C.setState(t=>{let n=t.connections.get(e.uid);return n?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??n.accounts,chainId:e.chainId??n.chainId,connector:n.connector})}:t})}function connect(e){"connecting"!==C.getState().status&&"reconnecting"!==C.getState().status&&C.setState(t=>{let n=w.getState().find(t=>t.uid===e.uid);return n?(n.emitter.listenerCount("connect")&&n.emitter.off("connect",change),n.emitter.listenerCount("change")||n.emitter.on("change",change),n.emitter.listenerCount("disconnect")||n.emitter.on("disconnect",disconnect),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:n}),current:e.uid,status:"connected"}):t})}function disconnect(e){C.setState(t=>{let n=t.connections.get(e.uid);if(n){let e=n.connector;e.emitter.listenerCount("change")&&n.connector.emitter.off("change",change),e.emitter.listenerCount("disconnect")&&n.connector.emitter.off("disconnect",disconnect),e.emitter.listenerCount("connect")||n.connector.emitter.on("connect",connect)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};let o=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:o.connector.uid}})}return c&&C.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{let t=b.getState().some(t=>t.id===e);if(t)return C.setState(t=>({...t,chainId:e??t.chainId}))}),g?.subscribe(e=>{let t=new Map;for(let e of w.getState())t.set(e.id,!0);let n=[];for(let o of e){let e=setup(providerDetailToConnector(o));t.has(e.id)||n.push(e)}(!i||C.persist.hasHydrated())&&w.setState(e=>[...e,...n],!0)}),{get chains(){return b.getState()},get connectors(){return w.getState()},storage:i,getClient:function(e={}){let t;let n=e.chainId??C.getState().chainId,o=b.getState().find(e=>e.id===n);if(e.chainId&&!o)throw new u.X4;{let e=y.get(C.getState().chainId);if(e&&!o)return e;if(!o)throw new u.X4}{let e=y.get(n);if(e)return e}if(m.client)t=m.client({chain:o});else{let e=o.id,n=b.getState().map(e=>e.id),i={},s=Object.entries(m);for(let[t,o]of s)if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof o){if(e in o)i[t]=o[e];else{let e=n.some(e=>e in o);if(e)continue;i[t]=o}}else i[t]=o}t=(0,a.e)({...i,chain:o,batch:i.batch??{multicall:!0},transport:t=>m.transports[e]({...t,connectors:w})})}return y.set(n,t),t},get state(){return C.getState()},setState(e){let t;t="function"==typeof e?e(C.getState()):e;let n=getInitialState();"object"!=typeof t&&(t=n);let o=Object.keys(n).some(e=>!(e in t));o&&(t=n),C.setState(t,!0)},subscribe:(e,t,n)=>C.subscribe(e,t,n?{...n,fireImmediately:n.emitImmediately}:void 0),_internal:{mipd:g,store:C,ssr:!!f,syncConnectedChain:c,transports:m.transports,chains:{setState(e){let t="function"==typeof e?e(b.getState()):e;if(0!==t.length)return b.setState(t,!0)},subscribe:e=>b.subscribe(e)},connectors:{providerDetailToConnector,setup,setState:e=>w.setState("function"==typeof e?e(w.getState()):e,!0),subscribe:e=>w.subscribe(e)},events:{change,connect,disconnect}}}}},29358:function(e,t,n){"use strict";n.d(t,{M:function(){return ProviderNotFoundError},O:function(){return SwitchChainNotSupportedError}});var o=n(78306);let ProviderNotFoundError=class ProviderNotFoundError extends o.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}};let SwitchChainNotSupportedError=class SwitchChainNotSupportedError extends o.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},46981:function(e,t,n){"use strict";function getAction(e,t,n){let o=e[t.name];if("function"==typeof o)return o;let i=e[n];return"function"==typeof i?i:n=>t(e,n)}n.d(t,{s:function(){return getAction}})},16470:function(e,t,n){"use strict";n.d(t,{r:function(){return getEnsAvatar}});var o=n(65459),i=n(95950);let EnsAvatarInvalidMetadataError=class EnsAvatarInvalidMetadataError extends i.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}};let EnsAvatarInvalidNftUriError=class EnsAvatarInvalidNftUriError extends i.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}};let EnsAvatarUriResolutionError=class EnsAvatarUriResolutionError extends i.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}};let EnsAvatarUnsupportedNamespaceError=class EnsAvatarUnsupportedNamespaceError extends i.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};let a=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,s=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,c=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,l=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function isImageUri(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function getGateway(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function resolveAvatarUri({uri:e,gatewayUrls:t}){let n=c.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let o=getGateway(t?.ipfs,"https://ipfs.io"),i=getGateway(t?.arweave,"https://arweave.net"),u=e.match(a),{protocol:d,subpath:p,target:f,subtarget:m=""}=u?.groups||{},g="ipns:/"===d||"ipns/"===p,b="ipfs:/"===d||"ipfs/"===p||s.test(e);if(e.startsWith("http")&&!g&&!b){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((g||b)&&f)return{uri:`${o}/${g?"ipns":"ipfs"}/${f}${m}`,isOnChain:!1,isEncoded:!1};if("ar:/"===d&&f)return{uri:`${i}/${f}${m||""}`,isOnChain:!1,isEncoded:!1};let w=e.replace(l,"");if(w.startsWith("<svg")&&(w=`data:image/svg+xml;base64,${btoa(w)}`),w.startsWith("data:")||w.startsWith("{"))return{uri:w,isOnChain:!0,isEncoded:!1};throw new EnsAvatarUriResolutionError({uri:e})}function getJsonImage(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new EnsAvatarInvalidMetadataError({data:e});return e.image||e.image_url||e.image_data}async function getMetadataAvatarUri({gatewayUrls:e,uri:t}){try{let n=await fetch(t).then(e=>e.json()),o=await parseAvatarUri({gatewayUrls:e,uri:getJsonImage(n)});return o}catch{throw new EnsAvatarUriResolutionError({uri:t})}}async function parseAvatarUri({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:o}=resolveAvatarUri({uri:t,gatewayUrls:e});if(o)return n;let i=await isImageUri(n);if(i)return n;throw new EnsAvatarUriResolutionError({uri:t})}async function getNftTokenUri(e,{nft:t}){if("erc721"===t.namespace)return(0,o.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,o.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new EnsAvatarUnsupportedNamespaceError({namespace:t.namespace})}async function parseAvatarRecord(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?parseNftAvatarUri(e,{gatewayUrls:t,record:n}):parseAvatarUri({uri:n,gatewayUrls:t})}async function parseNftAvatarUri(e,{gatewayUrls:t,record:n}){let o=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[n,o,i]=t.split("/"),[a,s]=n.split(":"),[c,l]=o.split(":");if(!a||"eip155"!==a.toLowerCase())throw new EnsAvatarInvalidNftUriError({reason:"Only EIP-155 supported"});if(!s)throw new EnsAvatarInvalidNftUriError({reason:"Chain ID not found"});if(!l)throw new EnsAvatarInvalidNftUriError({reason:"Contract address not found"});if(!i)throw new EnsAvatarInvalidNftUriError({reason:"Token ID not found"});if(!c)throw new EnsAvatarInvalidNftUriError({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:c.toLowerCase(),contractAddress:l,tokenID:i}}(n),i=await getNftTokenUri(e,{nft:o}),{uri:a,isOnChain:s,isEncoded:c}=resolveAvatarUri({uri:i,gatewayUrls:t});if(s&&(a.includes("data:application/json;base64,")||a.startsWith("{"))){let e=c?atob(a.replace("data:application/json;base64,","")):a,n=JSON.parse(e);return parseAvatarUri({uri:getJsonImage(n),gatewayUrls:t})}let l=o.tokenID;return"erc1155"===o.namespace&&(l=l.replace("0x","").padStart(64,"0")),getMetadataAvatarUri({gatewayUrls:t,uri:a.replace(/(?:0x)?{id}/,l)})}var u=n(82600),d=n(35271);async function getEnsAvatar(e,{blockNumber:t,blockTag:n,assetGatewayUrls:o,name:i,gatewayUrls:a,strict:s,universalResolverAddress:c}){let l=await (0,u.s)(e,d.g,"getEnsText")({blockNumber:t,blockTag:n,key:"avatar",name:i,universalResolverAddress:c,gatewayUrls:a,strict:s});if(!l)return null;try{return await parseAvatarRecord(e,{record:l,gatewayUrls:o})}catch{return null}}},42557:function(e,t,n){"use strict";n.d(t,{w:function(){return getEnsName}});var o=n(42980),i=n(94540),a=n(21693),s=n(87815),c=n(66257),l=n(82600),u=n(65459);async function getEnsName(e,{address:t,blockNumber:n,blockTag:d,gatewayUrls:p,strict:f,universalResolverAddress:m}){let g=m;if(!g){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");g=(0,i.L)({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}let b=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let i={address:g,abi:o.du,functionName:"reverse",args:[(0,a.NC)((0,c.T)(b))],blockNumber:n,blockTag:d},s=(0,l.s)(e,u.L,"readContract"),[f,m]=p?await s({...i,args:[...i.args,p]}):await s(i);if(t.toLowerCase()!==m.toLowerCase())return null;return f}catch(e){if(f)throw e;if((0,s.c)(e,"reverse"))return null;throw e}}},35271:function(e,t,n){"use strict";n.d(t,{g:function(){return getEnsText}});var o=n(42980),i=n(3458),a=n(76384),s=n(94540),c=n(21693),l=n(87815),u=n(87332),d=n(66257),p=n(82600),f=n(65459);async function getEnsText(e,{blockNumber:t,blockTag:n,name:m,key:g,gatewayUrls:b,strict:w,universalResolverAddress:y}){let v=y;if(!v){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");v=(0,s.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let s={address:v,abi:o.k3,functionName:"resolve",args:[(0,c.NC)((0,d.T)(m)),(0,a.R)({abi:o.nZ,functionName:"text",args:[(0,u.V)(m),g]})],blockNumber:t,blockTag:n},l=(0,p.s)(e,f.L,"readContract"),w=b?await l({...s,args:[...s.args,b]}):await l(s);if("0x"===w[0])return null;let y=(0,i.k)({abi:o.nZ,functionName:"text",data:w[0]});return""===y?null:y}catch(e){if(w)throw e;if((0,l.c)(e,"resolve"))return null;throw e}}},98873:function(e,t,n){"use strict";n.d(t,{RE:function(){return call}});var o=n(4832),i=n(42980),a=n(21485),s=n(95950),c=n(27878),l=n(98458),u=n(741),d=n(34626),p=n(3458),f=n(76384),m=n(95800),g=n(94540),b=n(21693),w=n(40009),y=n(36074),v=n(21028),C=n(86868),k=n(33668),x=n(2445);async function call(e,t){let{account:i=e.account,batch:u=!!e.batch?.multicall,blockNumber:p,blockTag:f="latest",accessList:g,blobs:k,data:E,gas:I,gasPrice:S,maxFeePerBlobGas:B,maxFeePerGas:A,maxPriorityFeePerGas:N,nonce:T,to:P,value:R,stateOverride:_,...M}=t,F=i?(0,o.T)(i):void 0;try{(0,x.F)(t);let n=p?(0,b.eC)(p):void 0,o=n||f,i=function(e){if(!e)return;let t={};for(let{address:n,...o}of e){if(!(0,m.U)(n,{strict:!1}))throw new a.b({address:n});if(t[n])throw new d.Nc({address:n});t[n]=function(e){let{balance:t,nonce:n,state:o,stateDiff:i,code:a}=e,s={};if(void 0!==a&&(s.code=a),void 0!==t&&(s.balance=(0,b.eC)(t)),void 0!==n&&(s.nonce=(0,b.eC)(n)),void 0!==o&&(s.state=parseStateMapping(o)),void 0!==i){if(s.state)throw new d.Z8;s.stateDiff=parseStateMapping(i)}return s}(o)}return t}(_),s=e.chain?.formatters?.transactionRequest?.format,l=s||C.tG,w=l({...(0,v.K)(M,{format:s}),from:F?.address,accessList:g,blobs:k,data:E,gas:I,gasPrice:S,maxFeePerBlobGas:B,maxFeePerGas:A,maxPriorityFeePerGas:N,nonce:T,to:P,value:R});if(u&&function({request:e}){let{data:t,to:n,...o}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!n&&!(Object.values(o).filter(e=>void 0!==e).length>0)}({request:w})&&!i)try{return await scheduleMulticall(e,{...w,blockNumber:p,blockTag:f})}catch(e){if(!(e instanceof c.pZ)&&!(e instanceof c.mm))throw e}let y=await e.request({method:"eth_call",params:i?[w,o,i]:[w,o]});if("0x"===y)return{data:void 0};return{data:y}}catch(c){let o=function(e){if(!(e instanceof s.G))return;let t=e.walk();return"object"==typeof t?.data?t.data?.data:t.data}(c),{offchainLookup:i,offchainLookupSignature:a}=await n.e(5572).then(n.bind(n,5572));if(!1!==e.ccipRead&&o?.slice(0,10)===a&&P)return{data:await i(e,{data:o,to:P})};throw function(e,{docsPath:t,...n}){let o=(()=>{let t=(0,y.k)(e,n);return t instanceof w.cj?e:t})();return new l.cg(o,{docsPath:t,...n})}(c,{...t,account:F,chain:e.chain})}}async function scheduleMulticall(e,t){let{batchSize:n=1024,wait:o=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:a,blockTag:s="latest",data:u,multicallAddress:d,to:m}=t,w=d;if(!w){if(!e.chain)throw new c.pZ;w=(0,g.L)({blockNumber:a,chain:e.chain,contract:"multicall3"})}let y=a?(0,b.eC)(a):void 0,v=y||s,{schedule:C}=(0,k.S)({id:`${e.uid}.${v}`,wait:o,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*n},fn:async t=>{let n=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),o=(0,f.R)({abi:i.F8,args:[n],functionName:"aggregate3"}),a=await e.request({method:"eth_call",params:[{data:o,to:w},v]});return(0,p.k)({abi:i.F8,args:[n],functionName:"aggregate3",data:a||"0x"})}}),[{returnData:x,success:E}]=await C({data:u,to:m});if(!E)throw new l.VQ({data:x});return"0x"===x?{data:void 0}:{data:x}}function parseStateMapping(e){if(e&&0!==e.length)return e.reduce((e,{slot:t,value:n})=>{if(66!==t.length)throw new u.W_({size:t.length,targetSize:66,type:"hex"});if(66!==n.length)throw new u.W_({size:n.length,targetSize:66,type:"hex"});return e[t]=n,e},{})}},65497:function(e,t,n){"use strict";n.d(t,{s:function(){return getBalance}});var o=n(21693);async function getBalance(e,{address:t,blockNumber:n,blockTag:i="latest"}){let a=n?(0,o.eC)(n):void 0,s=await e.request({method:"eth_getBalance",params:[t,a||i]});return BigInt(s)}},73105:function(e,t,n){"use strict";n.d(t,{A:function(){return multicall}});var o=n(42980),i=n(71878),a=n(95950),s=n(98458),c=n(3458),l=n(76384),u=n(94540),d=n(65573),p=n(82600),f=n(65459);async function multicall(e,t){let{allowFailure:n=!0,batchSize:m,blockNumber:g,blockTag:b,multicallAddress:w,stateOverride:y}=t,v=t.contracts,C=m??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),k=w;if(!k){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");k=(0,u.L)({blockNumber:g,chain:e.chain,contract:"multicall3"})}let x=[[]],E=0,I=0;for(let e=0;e<v.length;e++){let{abi:t,address:o,args:i,functionName:a}=v[e];try{let e=(0,l.R)({abi:t,args:i,functionName:a});I+=(e.length-2)/2,C>0&&I>C&&x[E].length>0&&(E++,I=(e.length-2)/2,x[E]=[]),x[E]=[...x[E],{allowFailure:!0,callData:e,target:o}]}catch(s){let e=(0,d.S)(s,{abi:t,address:o,args:i,docsPath:"/docs/contract/multicall",functionName:a});if(!n)throw e;x[E]=[...x[E],{allowFailure:!0,callData:"0x",target:o}]}}let S=await Promise.allSettled(x.map(t=>(0,p.s)(e,f.L,"readContract")({abi:o.F8,address:k,args:[t],blockNumber:g,blockTag:b,functionName:"aggregate3",stateOverride:y}))),B=[];for(let e=0;e<S.length;e++){let t=S[e];if("rejected"===t.status){if(!n)throw t.reason;for(let n=0;n<x[e].length;n++)B.push({status:"failure",error:t.reason,result:void 0});continue}let o=t.value;for(let t=0;t<o.length;t++){let{returnData:a,success:l}=o[t],{callData:u}=x[e][t],{abi:p,address:f,functionName:m,args:g}=v[B.length];try{if("0x"===u)throw new i.wb;if(!l)throw new s.VQ({data:a});let e=(0,c.k)({abi:p,args:g,data:a,functionName:m});B.push(n?{result:e,status:"success"}:e)}catch(t){let e=(0,d.S)(t,{abi:p,address:f,args:g,docsPath:"/docs/contract/multicall",functionName:m});if(!n)throw e;B.push({error:e,result:void 0,status:"failure"})}}}if(B.length!==v.length)throw new a.G("multicall results mismatch");return B}},65459:function(e,t,n){"use strict";n.d(t,{L:function(){return readContract}});var o=n(3458),i=n(76384),a=n(65573),s=n(82600),c=n(98873);async function readContract(e,t){let{abi:n,address:l,args:u,functionName:d,...p}=t,f=(0,i.R)({abi:n,args:u,functionName:d});try{let{data:t}=await (0,s.s)(e,c.RE,"call")({...p,data:f,to:l});return(0,o.k)({abi:n,args:u,functionName:d,data:t||"0x"})}catch(e){throw(0,a.S)(e,{abi:n,address:l,args:u,docsPath:"/docs/contract/readContract",functionName:d})}}},75404:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var o=n(71186);let i=(0,o.a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},35148:function(e,t,n){"use strict";n.d(t,{d:function(){return http}});var o=n(20722),i=n(95950);let UrlRequiredError=class UrlRequiredError extends i.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};var a=n(33668),s=n(33679),c=n(71891);let l={current:0,take(){return this.current++},reset(){this.current=0}};var u=n(36855);function http(e,t={}){let{batch:n,fetchOptions:i,key:d="http",name:p="HTTP JSON-RPC",onFetchRequest:f,onFetchResponse:m,retryDelay:g}=t;return({chain:b,retryCount:w,timeout:y})=>{let{batchSize:v=1e3,wait:C=0}="object"==typeof n?n:{},k=t.retryCount??w,x=y??t.timeout??1e4,E=e||b?.rpcUrls.default.http[0];if(!E)throw new UrlRequiredError;let I=function(e,t={}){return{async request(n){let{body:i,fetchOptions:a={},onRequest:u=t.onRequest,onResponse:d=t.onResponse,timeout:p=t.timeout??1e4}=n,{headers:f,method:m,signal:g}={...t.fetchOptions,...a};try{let t;let n=await (0,s.F)(async({signal:t})=>{let n={...a,body:Array.isArray(i)?(0,c.P)(i.map(e=>({jsonrpc:"2.0",id:e.id??l.take(),...e}))):(0,c.P)({jsonrpc:"2.0",id:i.id??l.take(),...i}),headers:{...f,"Content-Type":"application/json"},method:m||"POST",signal:g||(p>0?t:null)},o=new Request(e,n);u&&await u(o);let s=await fetch(e,n);return s},{errorInstance:new o.W5({body:i,url:e}),timeout:p,signal:!0});if(d&&await d(n),n.headers.get("Content-Type")?.startsWith("application/json")?t=await n.json():(t=await n.text(),t=JSON.parse(t||"{}")),!n.ok)throw new o.Gg({body:i,details:(0,c.P)(t.error)||n.statusText,headers:n.headers,status:n.status,url:e});return t}catch(t){if(t instanceof o.Gg||t instanceof o.W5)throw t;throw new o.Gg({body:i,details:t.message,url:e})}}}}(E,{fetchOptions:i,onRequest:f,onResponse:m,timeout:x});return(0,u.q)({key:d,name:p,async request({method:t,params:i}){let s={method:t,params:i},{schedule:c}=(0,a.S)({id:`${e}`,wait:C,shouldSplitBatch:e=>e.length>v,fn:e=>I.request({body:e}),sort:(e,t)=>e.id-t.id}),fn=async e=>n?c(e):[await I.request({body:e})],[{error:l,result:u}]=await fn(s);if(l)throw new o.bs({body:s,error:l,url:E});return u},retryCount:k,retryDelay:g,timeout:x,type:"http"},{fetchOptions:i,url:E})}}},42980:function(e,t,n){"use strict";n.d(t,{$o:function(){return u},F8:function(){return o},X$:function(){return l},du:function(){return s},k3:function(){return a},nZ:function(){return c}});let o=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],a=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],s=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],c=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],u=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},28483:function(e,t,n){"use strict";n.d(t,{$:function(){return o},Up:function(){return i},hZ:function(){return a}});let o={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},a={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},98458:function(e,t,n){"use strict";n.d(t,{cg:function(){return CallExecutionError},uq:function(){return ContractFunctionExecutionError},Lu:function(){return ContractFunctionRevertedError},Dk:function(){return ContractFunctionZeroDataError},VQ:function(){return RawContractError}});var o=n(4832),i=n(28483),a=n(49039),s=n(40928),c=n(71891);function formatAbiItemWithArgs({abiItem:e,args:t,includeFunctionName:n=!0,includeName:o=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map((e,n)=>`${o&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?(0,c.P)(t[n]):t[n]}`).join(", ")})`}var l=n(77804),u=n(79352),d=n(32421),p=n(71878),f=n(95950),m=n(34626),g=n(44818),b=n(66291);let CallExecutionError=class CallExecutionError extends f.G{constructor(e,{account:t,docsPath:n,chain:i,data:a,gas:s,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:p,nonce:f,to:b,value:w,stateOverride:y}){let v=t?(0,o.T)(t):void 0,C=(0,g.xr)({from:v?.address,to:b,value:void 0!==w&&`${(0,u.d)(w)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:s,gasPrice:void 0!==c&&`${(0,d.o)(c)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==p&&`${(0,d.o)(p)} gwei`,nonce:f});y&&(C+=`
${(0,m.Bj)(y)}`),super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",C].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}};let ContractFunctionExecutionError=class ContractFunctionExecutionError extends f.G{constructor(e,{abi:t,args:n,contractAddress:o,docsPath:i,functionName:a,sender:c}){let u=(0,l.mE)({abi:t,args:n,name:a}),d=u?formatAbiItemWithArgs({abiItem:u,args:n,includeFunctionName:!1,includeName:!1}):void 0,p=u?(0,s.t)(u,{includeName:!0}):void 0,f=(0,g.xr)({address:o&&(0,b.CR)(o),function:p,args:d&&"()"!==d&&`${[...Array(a?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:c});super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=n,this.cause=e,this.contractAddress=o,this.functionName=a,this.sender=c}};let ContractFunctionRevertedError=class ContractFunctionRevertedError extends f.G{constructor({abi:e,data:t,functionName:n,message:o}){let c,l,u,d,f;if(t&&"0x"!==t)try{f=(0,a.p)({abi:e,data:t});let{abiItem:n,errorName:o,args:c}=f;if("Error"===o)u=c[0];else if("Panic"===o){let[e]=c;u=i.$[e]}else{let e=n?(0,s.t)(n,{includeName:!0}):void 0,t=n&&c?formatAbiItemWithArgs({abiItem:n,args:c,includeFunctionName:!1,includeName:!1}):void 0;l=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){c=e}else o&&(u=o);c instanceof p.yP&&(d=c.signature,l=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${n}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${n}" reverted.`,{cause:c,metaMessages:l}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=d}};let ContractFunctionZeroDataError=class ContractFunctionZeroDataError extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}};let RawContractError=class RawContractError extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},34626:function(e,t,n){"use strict";n.d(t,{Bj:function(){return prettyStateOverride},Nc:function(){return AccountStateConflictError},Z8:function(){return StateAssignmentConflictError}});var o=n(95950);let AccountStateConflictError=class AccountStateConflictError extends o.G{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}};let StateAssignmentConflictError=class StateAssignmentConflictError extends o.G{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}};function prettyStateMapping(e){return e.reduce((e,{slot:t,value:n})=>`${e}        ${t}: ${n}
`,"")}function prettyStateOverride(e){return e.reduce((e,{address:t,...n})=>{let o=`${e}    ${t}:
`;return n.nonce&&(o+=`      nonce: ${n.nonce}
`),n.balance&&(o+=`      balance: ${n.balance}
`),n.code&&(o+=`      code: ${n.code}
`),n.state&&(o+="      state:\n"+prettyStateMapping(n.state)),n.stateDiff&&(o+="      stateDiff:\n"+prettyStateMapping(n.stateDiff)),o},"  State Override:\n").slice(0,-1)}},29580:function(e,t,n){"use strict";n.d(t,{r:function(){return decodeAbiParameters}});var o=n(71878),i=n(39803),a=n(73222),s=n(39868),c=n(57989),l=n(94973),u=n(86714),d=n(30838),p=n(21693);function bytesToNumber(e,t={}){void 0!==t.size&&(0,d.Yf)(e,{size:t.size});let n=(0,p.ci)(e,t);return(0,d.ly)(n,t)}var f=n(56728),m=n(98967);function decodeAbiParameters(e,t){let n="string"==typeof t?(0,f.nr)(t):t,g=(0,a.q)(n);if(0===(0,s.d)(n)&&e.length>0)throw new o.wb;if((0,s.d)(t)&&32>(0,s.d)(t))throw new o.xB({data:"string"==typeof t?t:(0,p.ci)(t),params:e,size:(0,s.d)(t)});let b=0,w=[];for(let t=0;t<e.length;++t){let n=e[t];g.setPosition(b);let[a,s]=function decodeParameter(e,t,{staticPosition:n}){let a=(0,m.S)(t.type);if(a){let[o,i]=a;return function(e,t,{length:n,staticPosition:o}){if(!n){let n=bytesToNumber(e.readBytes(32)),i=o+n,a=i+32;e.setPosition(i);let s=bytesToNumber(e.readBytes(32)),c=hasDynamicChild(t),l=0,u=[];for(let n=0;n<s;++n){e.setPosition(a+(c?32*n:l));let[o,i]=decodeParameter(e,t,{staticPosition:a});l+=i,u.push(o)}return e.setPosition(o+32),[u,32]}if(hasDynamicChild(t)){let i=bytesToNumber(e.readBytes(32)),a=o+i,s=[];for(let o=0;o<n;++o){e.setPosition(a+32*o);let[n]=decodeParameter(e,t,{staticPosition:a});s.push(n)}return e.setPosition(o+32),[s,32]}let i=0,a=[];for(let s=0;s<n;++s){let[n,s]=decodeParameter(e,t,{staticPosition:o+i});i+=s,a.push(n)}return[a,i]}(e,{...t,type:i},{length:o,staticPosition:n})}if("tuple"===t.type)return function(e,t,{staticPosition:n}){let o=0===t.components.length||t.components.some(({name:e})=>!e),i=o?[]:{},a=0;if(hasDynamicChild(t)){let s=bytesToNumber(e.readBytes(32)),c=n+s;for(let n=0;n<t.components.length;++n){let s=t.components[n];e.setPosition(c+a);let[l,u]=decodeParameter(e,s,{staticPosition:c});a+=u,i[o?n:s?.name]=l}return e.setPosition(n+32),[i,32]}for(let s=0;s<t.components.length;++s){let c=t.components[s],[l,u]=decodeParameter(e,c,{staticPosition:n});i[o?s:c?.name]=l,a+=u}return[i,a]}(e,t,{staticPosition:n});if("address"===t.type)return function(e){let t=e.readBytes(32);return[(0,i.x)((0,p.ci)((0,c.T4)(t,-20))),32]}(e);if("bool"===t.type)return[function(e,t={}){let n=e;if(void 0!==t.size&&((0,d.Yf)(n,{size:t.size}),n=(0,l.f)(n)),n.length>1||n[0]>1)throw new u.yr(n);return!!n[0]}(e.readBytes(32),{size:32}),32];if(t.type.startsWith("bytes"))return function(e,t,{staticPosition:n}){let[o,i]=t.type.split("bytes");if(!i){let t=bytesToNumber(e.readBytes(32));e.setPosition(n+t);let o=bytesToNumber(e.readBytes(32));if(0===o)return e.setPosition(n+32),["0x",32];let i=e.readBytes(o);return e.setPosition(n+32),[(0,p.ci)(i),32]}let a=(0,p.ci)(e.readBytes(parseInt(i),32));return[a,32]}(e,t,{staticPosition:n});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,t){let n=t.type.startsWith("int"),o=parseInt(t.type.split("int")[1]||"256"),i=e.readBytes(32);return[o>48?function(e,t={}){void 0!==t.size&&(0,d.Yf)(e,{size:t.size});let n=(0,p.ci)(e,t);return(0,d.y_)(n,t)}(i,{signed:n}):bytesToNumber(i,{signed:n}),32]}(e,t);if("string"===t.type)return function(e,{staticPosition:t}){let n=bytesToNumber(e.readBytes(32)),o=t+n;e.setPosition(o);let i=bytesToNumber(e.readBytes(32));if(0===i)return e.setPosition(t+32),["",32];let a=e.readBytes(i,32),s=function(e,t={}){let n=e;return void 0!==t.size&&((0,d.Yf)(n,{size:t.size}),n=(0,l.f)(n,{dir:"right"})),new TextDecoder().decode(n)}((0,l.f)(a));return e.setPosition(t+32),[s,32]}(e,{staticPosition:n});throw new o.CI(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}(g,n,{staticPosition:0});b+=s,w.push(a)}return w}function hasDynamicChild(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(hasDynamicChild);let n=(0,m.S)(e.type);return!!(n&&hasDynamicChild({...e,type:n[1]}))}},49039:function(e,t,n){"use strict";n.d(t,{p:function(){return decodeErrorResult}});var o=n(28483),i=n(71878),a=n(57989),s=n(65634),c=n(29580),l=n(40928);function decodeErrorResult(e){let{abi:t,data:n}=e,u=(0,a.tP)(n,0,4);if("0x"===u)throw new i.wb;let d=[...t||[],o.Up,o.hZ],p=d.find(e=>"error"===e.type&&u===(0,s.C)((0,l.t)(e)));if(!p)throw new i.yP(u,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:p,args:"inputs"in p&&p.inputs&&p.inputs.length>0?(0,c.r)(p.inputs,(0,a.tP)(n,4)):void 0,errorName:p.name}}},3458:function(e,t,n){"use strict";n.d(t,{k:function(){return decodeFunctionResult}});var o=n(71878),i=n(29580),a=n(77804);let s="/docs/contract/decodeFunctionResult";function decodeFunctionResult(e){let{abi:t,args:n,functionName:c,data:l}=e,u=t[0];if(c){let e=(0,a.mE)({abi:t,args:n,name:c});if(!e)throw new o.xL(c,{docsPath:s});u=e}if("function"!==u.type)throw new o.xL(void 0,{docsPath:s});if(!u.outputs)throw new o.MX(u.name,{docsPath:s});let d=(0,i.r)(u.outputs,l);return d&&d.length>1?d:d&&1===d.length?d[0]:void 0}},71186:function(e,t,n){"use strict";function defineChain(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}n.d(t,{a:function(){return defineChain}})},94540:function(e,t,n){"use strict";n.d(t,{L:function(){return getChainContractAddress}});var o=n(27878);function getChainContractAddress({blockNumber:e,chain:t,contract:n}){let i=t?.contracts?.[n];if(!i)throw new o.mm({chain:t,contract:{name:n}});if(e&&i.blockCreated&&i.blockCreated>e)throw new o.mm({blockNumber:e,chain:t,contract:{name:n,blockCreated:i.blockCreated}});return i.address}},581:function(e,t,n){"use strict";n.d(t,{i:function(){return encodedLabelToLabelhash}});var o=n(45008);function encodedLabelToLabelhash(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,o.v)(t)?t:null}},87815:function(e,t,n){"use strict";n.d(t,{c:function(){return isNullUniversalResolverError}});var o=n(28483),i=n(95950),a=n(98458);function isNullUniversalResolverError(e,t){if(!(e instanceof i.G))return!1;let n=e.walk(e=>e instanceof a.Lu);return n instanceof a.Lu&&(!!(n.data?.errorName==="ResolverNotFound"||n.data?.errorName==="ResolverWildcardNotSupported"||n.data?.errorName==="ResolverNotContract"||n.data?.errorName==="ResolverError"||n.data?.errorName==="HttpError"||n.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&n.reason===o.$[50])}},87332:function(e,t,n){"use strict";n.d(t,{V:function(){return namehash}});var o=n(69809),i=n(56728),a=n(21693),s=n(27064),c=n(581);function namehash(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,a.ci)(t);let n=e.split(".");for(let e=n.length-1;e>=0;e-=1){let a=(0,c.i)(n[e]),l=a?(0,i.O0)(a):(0,s.w)((0,i.qX)(n[e]),"bytes");t=(0,s.w)((0,o.zo)([t,l]),"bytes")}return(0,a.ci)(t)}},99476:function(e,t,n){"use strict";n.d(t,{F:function(){return normalize}});var o=n(2113);function normalize(e){return(0,o.Q6)(e)}},66257:function(e,t,n){"use strict";n.d(t,{T:function(){return packetToBytes}});var o=n(56728),i=n(21693),a=n(27064),s=n(581);function packetToBytes(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let n=new Uint8Array((0,o.qX)(t).byteLength+2),c=0,l=t.split(".");for(let e=0;e<l.length;e++){let t=(0,o.qX)(l[e]);if(t.byteLength>255){var u;t=(0,o.qX)((u=function(e){let t=new Uint8Array(32).fill(0);return e?(0,s.i)(e)||(0,a.w)((0,o.qX)(e)):(0,i.ci)(t)}(l[e]),`[${u.slice(2)}]`))}n[c]=t.length,n.set(t,c+1),c+=t.length+1}return n.byteLength!==c+1?n.slice(0,c+1):n}},65573:function(e,t,n){"use strict";n.d(t,{S:function(){return getContractError}});var o=n(71878),i=n(95950),a=n(98458),s=n(48519);function getContractError(e,{abi:t,address:n,args:c,docsPath:l,functionName:u,sender:d}){let{code:p,data:f,message:m,shortMessage:g}=e instanceof a.VQ?e:e instanceof i.G?e.walk(e=>"data"in e)||e.walk():{},b=e instanceof o.wb?new a.Dk({functionName:u}):[3,s.XS.code].includes(p)&&(f||m||g)?new a.Lu({abi:t,data:"object"==typeof f?f.data:f,functionName:u,message:g??m}):e;return new a.uq(b,{abi:t,args:c,contractAddress:n,docsPath:l,functionName:u,sender:d})}},33668:function(e,t,n){"use strict";n.d(t,{S:function(){return createBatchScheduler}});let o=new Map;function createBatchScheduler({fn:e,id:t,shouldSplitBatch:n,wait:i=0,sort:a}){let exec=async()=>{let t=getScheduler();flush();let n=t.map(({args:e})=>e);0!==n.length&&e(n).then(e=>{a&&Array.isArray(e)&&e.sort(a);for(let n=0;n<t.length;n++){let{pendingPromise:o}=t[n];o.resolve?.([e[n],e])}}).catch(e=>{for(let n=0;n<t.length;n++){let{pendingPromise:o}=t[n];o.reject?.(e)}})},flush=()=>o.delete(t),getBatchedArgs=()=>getScheduler().map(({args:e})=>e),getScheduler=()=>o.get(t)||[],setScheduler=e=>o.set(t,[...getScheduler(),e]);return{flush,async schedule(e){let t={},o=new Promise((e,n)=>{t.resolve=e,t.reject=n}),a=n?.([...getBatchedArgs(),e]);a&&exec();let s=getScheduler().length>0;return s?setScheduler({args:e,pendingPromise:t}):(setScheduler({args:e,pendingPromise:t}),setTimeout(exec,i)),o}}}},33679:function(e,t,n){"use strict";function withTimeout(e,{errorInstance:t=Error("timed out"),timeout:n,signal:o}){return new Promise((i,a)=>{(async()=>{let s;try{let c=new AbortController;n>0&&(s=setTimeout(()=>{o?c.abort():a(t)},n)),i(await e({signal:c?.signal||null}))}catch(e){"AbortError"===e.name&&a(t),a(e)}finally{clearTimeout(s)}})()})}n.d(t,{F:function(){return withTimeout}})},33844:function(e,t,n){"use strict";n.d(t,{E:function(){return useAccountEffect}});var o=n(10815),i=n(2265),a=n(41012);function useAccountEffect(e={}){let{onConnect:t,onDisconnect:n}=e,s=(0,a.Z)(e);(0,i.useEffect)(()=>(0,o.u)(s,{onChange(e,o){if(("reconnecting"===o.status||"connecting"===o.status&&void 0===o.address)&&"connected"===e.status){let{address:n,addresses:i,chain:a,chainId:s,connector:c}=e,l="reconnecting"===o.status||void 0===o.status;t?.({address:n,addresses:i,chain:a,chainId:s,connector:c,isReconnected:l})}else"connected"===o.status&&"disconnected"===e.status&&n?.()}}),[s,t,n])}},23907:function(e,t,n){"use strict";n.d(t,{K:function(){return useBalance}});var o=n(98458),i=n(30838),a=n(94973),s=n(16775),c=n(65497),l=n(46981),u=n(36238);function getUnit(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(u.Bd[e])}var d=n(73105);async function multicall_multicall(e,t){let{allowFailure:n=!0,chainId:o,contracts:i,...a}=t,s=e.getClient({chainId:o}),c=(0,l.s)(s,d.A,"multicall");return c({allowFailure:n,contracts:i,...a})}var p=n(65459);async function readContracts(e,t){let{allowFailure:n=!0,blockNumber:i,blockTag:a,...s}=t,c=t.contracts;try{let t=c.reduce((t,n,o)=>{let i=n.chainId??e.state.chainId;return{...t,[i]:[...t[i]||[],{contract:n,index:o}]}},{}),o=(await Promise.all(Object.entries(t).map(([t,o])=>multicall_multicall(e,{...s,allowFailure:n,blockNumber:i,blockTag:a,chainId:parseInt(t),contracts:o.map(({contract:e})=>e)})))).flat(),l=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return o.reduce((e,t,n)=>(e&&(e[l[n]]=t),e),[])}catch(t){if(t instanceof o.uq)throw t;let promises=()=>c.map(t=>(function(e,t){let{chainId:n,...o}=t,i=e.getClient({chainId:n}),a=(0,l.s)(i,p.L,"readContract");return a(o)})(e,{...t,blockNumber:i,blockTag:a}));if(n)return(await Promise.allSettled(promises())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(promises())}}async function getBalance_getBalance(e,t){let{address:n,blockNumber:u,blockTag:d,chainId:p,token:f,unit:m="ether"}=t;if(f)try{return getTokenBalance(e,{balanceAddress:n,chainId:p,symbolType:"string",tokenAddress:f})}catch(t){if(t instanceof o.uq){let t=await getTokenBalance(e,{balanceAddress:n,chainId:p,symbolType:"bytes32",tokenAddress:f}),o=(0,i.rR)((0,a.f)(t.symbol,{dir:"right"}));return{...t,symbol:o}}throw t}let g=e.getClient({chainId:p}),b=(0,l.s)(g,c.s,"getBalance"),w=await b(u?{address:n,blockNumber:u}:{address:n,blockTag:d}),y=e.chains.find(e=>e.id===p)??g.chain;return{decimals:y.nativeCurrency.decimals,formatted:(0,s.b)(w,getUnit(m)),symbol:y.nativeCurrency.symbol,value:w}}async function getTokenBalance(e,t){let{balanceAddress:n,chainId:o,symbolType:i,tokenAddress:a,unit:c}=t,l={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:i}]}],address:a},[u,d,p]=await readContracts(e,{allowFailure:!1,contracts:[{...l,functionName:"balanceOf",args:[n],chainId:o},{...l,functionName:"decimals",chainId:o},{...l,functionName:"symbol",chainId:o}]}),f=(0,s.b)(u??"0",getUnit(c??d));return{decimals:d,formatted:f,symbol:p,value:u}}var f=n(21637),m=n(31299),g=n(6613),b=n(41012);function useBalance(e={}){let{address:t,query:n={}}=e,o=(0,b.Z)(e),i=(0,g.x)({config:o}),a=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:o,...i}=t[1];if(!n)throw Error("address is required");let a=await getBalance_getBalance(e,{...i,address:n});return a??null},queryKey:function(e={}){return["balance",(0,f.O)(e)]}(t)}}(o,{...e,chainId:e.chainId??i}),s=!!(t&&(n.enabled??!0));return(0,m.aM)({...n,...a,enabled:s})}},81973:function(e,t,n){"use strict";n.d(t,{$:function(){return useConnect}});var o=n(23588),i=n(76026);async function connect(e,t){let n;if((n="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new i.wi;try{e.setState(e=>({...e,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});let o=await n.connect({chainId:t.chainId}),i=o.accounts;return n.emitter.off("connect",e._internal.events.connect),n.emitter.on("change",e._internal.events.change),n.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",n.id),e.setState(e=>({...e,connections:new Map(e.connections).set(n.uid,{accounts:i,chainId:o.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:i,chainId:o.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var a=n(2265),s=n(41012),c=n(48369);let l=[];function getConnectors(e){let t=e.connectors;return(0,c.v)(l,t)?l:(l=t,t)}function useConnect(e={}){let{mutation:t}=e,n=(0,s.Z)(e),i=function(e={}){let t=(0,s.Z)(e);return(0,a.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e._internal.connectors.subscribe((e,t)=>{n(Object.values(e),t)})})(t,{onChange:e}),()=>getConnectors(t),()=>getConnectors(t))}({config:n}),{mutate:c,mutateAsync:l,...u}=(0,o.D)({...t,mutationFn:e=>connect(n,e),mutationKey:["connect"]});return(0,a.useEffect)(()=>n.subscribe(({status:e})=>e,(e,t)=>{"connected"===t&&"disconnected"===e&&u.reset()}),[n,u]),{...u,connect:c,connectAsync:l,connectors:i}}},41684:function(e,t,n){"use strict";n.d(t,{q:function(){return useDisconnect}});var o=n(23588);async function disconnect(e,t={}){let n;if(t.connector)n=t.connector;else{let{connections:t,current:o}=e.state,i=t.get(o);n=i?.connector}let o=e.state.connections;n&&(await n.disconnect(),n.emitter.off("change",e._internal.events.change),n.emitter.off("disconnect",e._internal.events.disconnect),n.emitter.on("connect",e._internal.events.connect),o.delete(n.uid)),e.setState(e=>{if(0===o.size)return{...e,connections:new Map,current:null,status:"disconnected"};let t=o.values().next().value;return{...e,connections:new Map(o),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let n=e.state.connections.get(t)?.connector;if(!n)return;await e.storage?.setItem("recentConnectorId",n.id)}}var i=n(41012),a=n(48369);let s=[];function getConnections(e){let t=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,a.v)(s,t)?s:(s=t,t)}var c=n(2265);function useDisconnect(e={}){let{mutation:t}=e,n=(0,i.Z)(e),{mutate:s,mutateAsync:l,...u}=(0,o.D)({...t,mutationFn:e=>disconnect(n,e),mutationKey:["disconnect"]});return{...u,connectors:(function(e={}){let t=(0,i.Z)(e);return(0,c.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>getConnections(e),n,{equalityFn:a.v})})(t,{onChange:e}),()=>getConnections(t),()=>getConnections(t))})({config:n}).map(e=>e.connector),disconnect:s,disconnectAsync:l}}},96554:function(e,t,n){"use strict";n.d(t,{c:function(){return useEnsAvatar}});var o=n(16470),i=n(46981),a=n(21637),s=n(31299),c=n(6613),l=n(41012);function useEnsAvatar(e={}){let{name:t,query:n={}}=e,u=(0,l.Z)(e),d=(0,c.x)({config:u}),p=function(e,t={}){return{async queryFn({queryKey:t}){let{name:n,scopeKey:a,...s}=t[1];if(!n)throw Error("name is required");return function(e,t){let{chainId:n,...a}=t,s=e.getClient({chainId:n}),c=(0,i.s)(s,o.r,"getEnsAvatar");return c(a)}(e,{...s,name:n})},queryKey:function(e={}){return["ensAvatar",(0,a.O)(e)]}(t)}}(u,{...e,chainId:e.chainId??d}),f=!!(t&&(n.enabled??!0));return(0,s.aM)({...n,...p,enabled:f})}},61517:function(e,t,n){"use strict";n.d(t,{F:function(){return useEnsName}});var o=n(42557),i=n(46981),a=n(21637),s=n(31299),c=n(6613),l=n(41012);function useEnsName(e={}){let{address:t,query:n={}}=e,u=(0,l.Z)(e),d=(0,c.x)({config:u}),p=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:a,...s}=t[1];if(!n)throw Error("address is required");return function(e,t){let{chainId:n,...a}=t,s=e.getClient({chainId:n}),c=(0,i.s)(s,o.w,"getEnsName");return c(a)}(e,{...s,address:n})},queryKey:function(e={}){return["ensName",(0,a.O)(e)]}(t)}}(u,{...e,chainId:e.chainId??d}),f=!!(t&&(n.enabled??!0));return(0,s.aM)({...n,...p,enabled:f})}},24289:function(e,t,n){"use strict";n.d(t,{t:function(){return usePublicClient}});var o=n(42980),i=n(3458),a=n(76384),s=n(94540),c=n(94973),l=n(21693),u=n(87815),d=n(87332),p=n(66257),f=n(82600),m=n(65459);async function getEnsAddress(e,{blockNumber:t,blockTag:n,coinType:g,name:b,gatewayUrls:w,strict:y,universalResolverAddress:v}){let C=v;if(!C){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");C=(0,s.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let s=(0,a.R)({abi:o.X$,functionName:"addr",...null!=g?{args:[(0,d.V)(b),BigInt(g)]}:{args:[(0,d.V)(b)]}}),u={address:C,abi:o.k3,functionName:"resolve",args:[(0,l.NC)((0,p.T)(b)),s],blockNumber:t,blockTag:n},y=(0,f.s)(e,m.L,"readContract"),v=w?await y({...u,args:[...u.args,w]}):await y(u);if("0x"===v[0])return null;let k=(0,i.k)({abi:o.X$,args:null!=g?[(0,d.V)(b),BigInt(g)]:void 0,functionName:"addr",data:v[0]});if("0x"===k||"0x00"===(0,c.f)(k))return null;return k}catch(e){if(y)throw e;if((0,u.c)(e,"resolve"))return null;throw e}}var g=n(16470),b=n(42557);async function getEnsResolver(e,{blockNumber:t,blockTag:n,name:o,universalResolverAddress:i}){let a=i;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,s.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[c]=await (0,f.s)(e,m.L,"readContract")({address:a,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,l.NC)((0,p.T)(o))],blockNumber:t,blockTag:n});return c}var w=n(35271),y=n(98873);function createFilterRequestScope(e,{method:t}){let n={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:o,status:i,transport:a})=>{"success"===i&&t===e&&(n[o]=a.request)}),t=>n[t]||e.request}async function createBlockFilter(e){let t=createFilterRequestScope(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}var v=n(71878),C=n(95950);let FilterTypeNotSupportedError=class FilterTypeNotSupportedError extends C.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};var k=n(56728),x=n(27064),E=n(40959),I=n(98967),S=n(40928),B=n(77804);let A="/docs/contract/encodeEventTopics";function encodeEventTopics(e){let{abi:t,eventName:n,args:o}=e,i=t[0];if(n){let e=(0,B.mE)({abi:t,name:n});if(!e)throw new v.mv(n,{docsPath:A});i=e}if("event"!==i.type)throw new v.mv(void 0,{docsPath:A});let a=(0,S.t)(i),s=(0,E.n)(a),c=[];if(o&&"inputs"in i){let e=i.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(o)?o:Object.values(o).length>0?e?.map(e=>o[e.name])??[]:[];t.length>0&&(c=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((o,i)=>encodeArg({param:e,value:t[n][i]})):t[n]?encodeArg({param:e,value:t[n]}):null)??[])}return[s,...c]}function encodeArg({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,x.w)((0,k.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new FilterTypeNotSupportedError(e.type);return(0,I.E)([e],[t])}async function createContractEventFilter(e,t){let{address:n,abi:o,args:i,eventName:a,fromBlock:s,strict:c,toBlock:u}=t,d=createFilterRequestScope(e,{method:"eth_newFilter"}),p=a?encodeEventTopics({abi:o,args:i,eventName:a}):void 0,f=await e.request({method:"eth_newFilter",params:[{address:n,fromBlock:"bigint"==typeof s?(0,l.eC)(s):s,toBlock:"bigint"==typeof u?(0,l.eC)(u):u,topics:p}]});return{abi:o,args:i,eventName:a,id:f,request:d(f),strict:!!c,type:"event"}}async function createEventFilter(e,{address:t,args:n,event:o,events:i,fromBlock:a,strict:s,toBlock:c}={}){let u=i??(o?[o]:void 0),d=createFilterRequestScope(e,{method:"eth_newFilter"}),p=[];u&&(p=[u.flatMap(e=>encodeEventTopics({abi:[e],eventName:e.name,args:n}))],o&&(p=p[0]));let f=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,l.eC)(a):a,toBlock:"bigint"==typeof c?(0,l.eC)(c):c,...p.length?{topics:p}:{}}]});return{abi:u,args:n,eventName:o?o.name:void 0,fromBlock:a,id:f,request:d(f),strict:!!s,toBlock:c,type:"event"}}async function createPendingTransactionFilter(e){let t=createFilterRequestScope(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}var N=n(4832),T=n(65573),P=n(89412);async function estimateContractGas(e,t){let{abi:n,address:o,args:i,functionName:s,...c}=t,l=(0,a.R)({abi:n,args:i,functionName:s});try{let t=await (0,f.s)(e,P.Q,"estimateGas")({data:l,to:o,...c});return t}catch(t){let e=c.account?(0,N.T)(c.account):void 0;throw(0,T.S)(t,{abi:n,address:o,args:i,docsPath:"/docs/contract/estimateContractGas",functionName:s,sender:e?.address})}}var R=n(77451),_=n(17976),M=n(65497);async function getBlobBaseFee(e){let t=await e.request({method:"eth_blobBaseFee"});return BigInt(t)}var F=n(3891);let O=new Map,W=new Map;async function withCache(e,{cacheKey:t,cacheTime:n=1/0}){let o=function(e){let buildCache=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),t=buildCache(e,O),n=buildCache(e,W);return{clear:()=>{t.clear(),n.clear()},promise:t,response:n}}(t),i=o.response.get();if(i&&n>0){let e=new Date().getTime()-i.created.getTime();if(e<n)return i.data}let a=o.promise.get();a||(a=e(),o.promise.set(a));try{let e=await a;return o.response.set({created:new Date,data:e}),e}finally{o.promise.clear()}}let cacheKey=e=>`blockNumber.${e}`;async function getBlockNumber(e,{cacheTime:t=e.cacheTime}={}){let n=await withCache(()=>e.request({method:"eth_blockNumber"}),{cacheKey:cacheKey(e.uid),cacheTime:t});return BigInt(n)}var L=n(30838);async function getBlockTransactionCount(e,{blockHash:t,blockNumber:n,blockTag:o="latest"}={}){let i;let a=void 0!==n?(0,l.eC)(n):void 0;return i=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[a||o]}),(0,L.ly)(i)}async function getBytecode(e,{address:t,blockNumber:n,blockTag:o="latest"}){let i=void 0!==n?(0,l.eC)(n):void 0,a=await e.request({method:"eth_getCode",params:[t,i||o]});if("0x"!==a)return a}var q=n(13438),U=n(39868),D=n(99851),j=n(29580);let z="/docs/contract/decodeEventLog";function decodeEventLog(e){let{abi:t,data:n,strict:o,topics:i}=e,a=o??!0,[s,...c]=i;if(!s)throw new v.FM({docsPath:z});let l=t.find(e=>"event"===e.type&&s===(0,E.n)((0,S.t)(e)));if(!(l&&"name"in l)||"event"!==l.type)throw new v.lC(s,{docsPath:z});let{name:u,inputs:d}=l,p=d?.some(e=>!("name"in e&&e.name)),f=p?[]:{},m=d.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<m.length;e++){let t=m[e],n=c[e];if(!n)throw new v.Gy({abiItem:l,param:t});f[p?e:t.name||e]=function({param:e,value:t}){if("string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))return t;let n=(0,j.r)([e],t)||[];return n[0]}({param:t,value:n})}let g=d.filter(e=>!("indexed"in e&&e.indexed));if(g.length>0){if(n&&"0x"!==n)try{let e=(0,j.r)(g,n);if(e){if(p)f=[...f,...e];else for(let t=0;t<g.length;t++)f[g[t].name]=e[t]}}catch(e){if(a){if(e instanceof v.xB||e instanceof D.lQ)throw new v.SM({abiItem:l,data:n,params:g,size:(0,U.d)(n)});throw e}}else if(a)throw new v.SM({abiItem:l,data:"0x",params:g,size:0})}return{eventName:u,args:Object.values(f).length>0?f:void 0}}function parseEventLogs({abi:e,eventName:t,logs:n,strict:o=!0}){return n.map(n=>{try{let i=decodeEventLog({...n,abi:e,strict:o});if(t&&!t.includes(i.eventName))return null;return{...i,...n}}catch(i){let e,t;if(i instanceof v.lC)return null;if(i instanceof v.SM||i instanceof v.Gy){if(o)return null;e=i.abiItem.name,t=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return{...n,args:t?[]:{},eventName:e}}}).filter(Boolean)}function formatLog(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}async function getLogs(e,{address:t,blockHash:n,fromBlock:o,toBlock:i,event:a,events:s,args:c,strict:u}={}){let d;let p=u??!1,f=s??(a?[a]:void 0),m=[];f&&(m=[f.flatMap(e=>encodeEventTopics({abi:[e],eventName:e.name,args:c}))],a&&(m=m[0])),d=n?await e.request({method:"eth_getLogs",params:[{address:t,topics:m,blockHash:n}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:m,fromBlock:"bigint"==typeof o?(0,l.eC)(o):o,toBlock:"bigint"==typeof i?(0,l.eC)(i):i}]});let g=d.map(e=>formatLog(e));return f?parseEventLogs({abi:f,logs:g,strict:p}):g}async function getContractEvents(e,t){let{abi:n,address:o,args:i,blockHash:a,eventName:s,fromBlock:c,toBlock:l,strict:u}=t,d=s?(0,B.mE)({abi:n,name:s}):void 0,p=d?void 0:n.filter(e=>"event"===e.type);return(0,f.s)(e,getLogs,"getLogs")({address:o,args:i,blockHash:a,event:d,events:p,fromBlock:c,toBlock:l,strict:u})}async function getFeeHistory(e,{blockCount:t,blockNumber:n,blockTag:o="latest",rewardPercentiles:i}){let a=n?(0,l.eC)(n):void 0,s=await e.request({method:"eth_feeHistory",params:[(0,l.eC)(t),a||o,i]});return{baseFeePerGas:s.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:s.gasUsedRatio,oldestBlock:BigInt(s.oldestBlock),reward:s.reward?.map(e=>e.map(e=>BigInt(e)))}}async function getFilterChanges(e,{filter:t}){let n="strict"in t&&t.strict,o=await t.request({method:"eth_getFilterChanges",params:[t.id]});if("string"==typeof o[0])return o;let i=o.map(e=>formatLog(e));return"abi"in t&&t.abi?parseEventLogs({abi:t.abi,logs:i,strict:n}):i}async function getFilterLogs(e,{filter:t}){let n=t.strict??!1,o=await t.request({method:"eth_getFilterLogs",params:[t.id]}),i=o.map(e=>formatLog(e));return t.abi?parseEventLogs({abi:t.abi,logs:i,strict:n}):i}var $=n(75188);async function getProof(e,{address:t,blockNumber:n,blockTag:o,storageKeys:i}){let a=void 0!==n?(0,l.eC)(n):void 0,s=await e.request({method:"eth_getProof",params:[t,i,a||(o??"latest")]});return{...s,balance:s.balance?BigInt(s.balance):void 0,nonce:s.nonce?(0,L.ly)(s.nonce):void 0,storageProof:s.storageProof?s.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function getStorageAt(e,{address:t,blockNumber:n,blockTag:o="latest",slot:i}){let a=void 0!==n?(0,l.eC)(n):void 0,s=await e.request({method:"eth_getStorageAt",params:[t,i,a||o]});return s}var K=n(44818),G=n(52017);async function getTransaction(e,{blockHash:t,blockNumber:n,blockTag:o,hash:i,index:a}){let s=o||"latest",c=void 0!==n?(0,l.eC)(n):void 0,u=null;if(i?u=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?u=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,l.eC)(a)]}):(c||s)&&(u=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[c||s,(0,l.eC)(a)]})),!u)throw new K.Bh({blockHash:t,blockNumber:n,blockTag:s,hash:i,index:a});let d=e.chain?.formatters?.transaction?.format||G.Tr;return d(u)}async function getTransactionConfirmations(e,{hash:t,transactionReceipt:n}){let[o,i]=await Promise.all([(0,f.s)(e,getBlockNumber,"getBlockNumber")({}),t?(0,f.s)(e,getTransaction,"getBlockNumber")({hash:t}):void 0]),a=n?.blockNumber||i?.blockNumber;return a?o-a+1n:0n}var H=n(31742);let V={"0x0":"reverted","0x1":"success"};function formatTransactionReceipt(e){let t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>formatLog(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,L.ly)(e.transactionIndex):null,status:e.status?V[e.status]:null,type:e.type?G.c8[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}async function getTransactionReceipt(e,{hash:t}){let n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new K.Yb({hash:t});let o=e.chain?.formatters?.transactionReceipt?.format||formatTransactionReceipt;return o(n)}var Y=n(73105);async function simulateContract(e,t){let{abi:n,address:o,args:s,dataSuffix:c,functionName:l,...u}=t,d=u.account?(0,N.T)(u.account):e.account,p=(0,a.R)({abi:n,args:s,functionName:l});try{let{data:a}=await (0,f.s)(e,y.RE,"call")({batch:!1,data:`${p}${c?c.replace("0x",""):""}`,to:o,...u,account:d}),m=(0,i.k)({abi:n,args:s,functionName:l,data:a||"0x"}),g=n.filter(e=>"name"in e&&e.name===t.functionName);return{result:m,request:{abi:g,address:o,args:s,dataSuffix:c,functionName:l,...u,account:d}}}catch(e){throw(0,T.S)(e,{abi:n,address:o,args:s,docsPath:"/docs/contract/simulateContract",functionName:l,sender:d?.address})}}async function uninstallFilter(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}var Z=n(69809),X=n(98458),Q=n(57843),J=n(45008),ee=n(12732);async function verifyHash(e,{address:t,hash:n,signature:i,...a}){let s=(0,J.v)(i)?i:(0,l.NC)(i);try{let{data:i}=await (0,f.s)(e,y.RE,"call")({data:(0,ee.w)({abi:o.$o,args:[t,n,s],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...a});return function(e,t){let n=(0,J.v)(e)?(0,k.O0)(e):e,o=(0,J.v)(t)?(0,k.O0)(t):t;return(0,Q.Wd)(n,o)}(i??"0x0","0x1")}catch(e){if(e instanceof X.cg)return!1;throw e}}async function verifyMessage(e,{address:t,message:n,signature:o,...i}){let a=function(e,t){let n="string"==typeof e?(0,k.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,k.O0)(e.raw),o=(0,k.qX)(`Ethereum Signed Message:
${n.length}`);return(0,x.w)((0,Z.zo)([o,n]),void 0)}(n);return verifyHash(e,{address:t,hash:a,signature:o,...i})}var et=n(29578);function hashStruct({data:e,primaryType:t,types:n}){let o=function encodeData({data:e,primaryType:t,types:n}){let o=[{type:"bytes32"}],i=[function({primaryType:e,types:t}){let n=(0,l.NC)(function({primaryType:e,types:t}){let n="",o=function findTypeDependencies({primaryType:e,types:t},n=new Set){let o=e.match(/^\w*/u),i=o?.[0];if(n.has(i)||void 0===t[i])return n;for(let e of(n.add(i),t[i]))findTypeDependencies({primaryType:e.type,types:t},n);return n}({primaryType:e,types:t});o.delete(e);let i=[e,...Array.from(o).sort()];for(let e of i)n+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return n}({primaryType:e,types:t}));return(0,x.w)(n)}({primaryType:t,types:n})];for(let a of n[t]){let[t,s]=function encodeField({types:e,name:t,type:n,value:o}){if(void 0!==e[n])return[{type:"bytes32"},(0,x.w)(encodeData({data:o,primaryType:n,types:e}))];if("bytes"===n){let e=o.length%2?"0":"";return o=`0x${e+o.slice(2)}`,[{type:"bytes32"},(0,x.w)(o)]}if("string"===n)return[{type:"bytes32"},(0,x.w)((0,l.NC)(o))];if(n.lastIndexOf("]")===n.length-1){let i=n.slice(0,n.lastIndexOf("[")),a=o.map(n=>encodeField({name:t,type:i,types:e,value:n}));return[{type:"bytes32"},(0,x.w)((0,I.E)(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},o]}({types:n,name:a.name,type:a.type,value:e[a.name]});o.push(t),i.push(s)}return(0,I.E)(o,i)}({data:e,primaryType:t,types:n});return(0,x.w)(o)}async function verifyTypedData(e,t){let{address:n,signature:o,message:i,primaryType:a,types:s,domain:c,...l}=t,u=function(e){let{domain:t={},message:n,primaryType:o}=e,i={EIP712Domain:(0,et.cj)({domain:t}),...e.types};(0,et.iC)({domain:t,message:n,primaryType:o,types:i});let a=["0x1901"];return t&&a.push(function({domain:e,types:t}){return hashStruct({data:e,primaryType:"EIP712Domain",types:t})}({domain:t,types:i})),"EIP712Domain"!==o&&a.push(hashStruct({data:n,primaryType:o,types:i})),(0,x.w)((0,Z.zo)(a))}({message:i,primaryType:a,types:s,domain:c});return verifyHash(e,{address:n,hash:u,signature:o,...l})}var en=n(71492);let er=new Map,eo=new Map,ei=0;function observe(e,t,n){let o=++ei,getListeners=()=>er.get(e)||[],unsubscribe=()=>{let t=getListeners();er.set(e,t.filter(e=>e.id!==o))},unwatch=()=>{let t=eo.get(e);1===getListeners().length&&t&&t(),unsubscribe()},i=getListeners();if(er.set(e,[...i,{id:o,fns:t}]),i&&i.length>0)return unwatch;let a={};for(let e in t)a[e]=(...t)=>{let n=getListeners();if(0!==n.length)for(let o of n)o.fns[e]?.(...t)};let s=n(a);return"function"==typeof s&&eo.set(e,s),unwatch}var ea=n(36063),es=n(71891),ec=n(21810);function poll(e,{emitOnBegin:t,initialWaitTime:n,interval:o}){let i=!0,unwatch=()=>i=!1,watch=async()=>{let a;t&&(a=await e({unpoll:unwatch}));let s=await n?.(a)??o;await (0,ec.D)(s);let poll=async()=>{i&&(await e({unpoll:unwatch}),await (0,ec.D)(o),poll())};poll()};return watch(),unwatch}function watchBlockNumber(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:o,onError:i,poll:a,pollingInterval:s=e.pollingInterval}){let c;let l=void 0!==a?a:"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type);return l?(()=>{let a=(0,es.P)(["watchBlockNumber",e.uid,t,n,s]);return observe(a,{onBlockNumber:o,onError:i},o=>poll(async()=>{try{let t=await (0,f.s)(e,getBlockNumber,"getBlockNumber")({cacheTime:0});if(c){if(t===c)return;if(t-c>1&&n)for(let e=c+1n;e<t;e++)o.onBlockNumber(e,c),c=e}(!c||t>c)&&(o.onBlockNumber(t,c),c=t)}catch(e){o.onError?.(e)}},{emitOnBegin:t,interval:s}))})():(()=>{let a=(0,es.P)(["watchBlockNumber",e.uid,t,n]);return observe(a,{onBlockNumber:o,onError:i},t=>{let n=!0,unsubscribe=()=>n=!1;return(async()=>{try{let o=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:i}=await o.subscribe({params:["newHeads"],onData(e){if(!n)return;let o=(0,L.y_)(e.result?.number);t.onBlockNumber(o,c),c=o},onError(e){t.onError?.(e)}});unsubscribe=i,n||unsubscribe()}catch(e){i?.(e)}})(),()=>unsubscribe()})})()}async function waitForTransactionReceipt(e,{confirmations:t=1,hash:n,onReplaced:o,pollingInterval:i=e.pollingInterval,retryCount:a=6,retryDelay:s=({count:e})=>200*~~(1<<e),timeout:c}){let l,u,d;let p=(0,es.P)(["waitForTransactionReceipt",e.uid,n]),m=!1;return new Promise((g,b)=>{c&&setTimeout(()=>b(new K.mc({hash:n})),c);let w=observe(p,{onReplaced:o,resolve:g,reject:b},o=>{let c=(0,f.s)(e,watchBlockNumber,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(m)return;let p=i,done=e=>{c(),e(),w()};try{if(d){if(t>1&&(!d.blockNumber||p-d.blockNumber+1n<t))return;done(()=>o.resolve(d));return}if(l||(m=!0,await (0,ea.J)(async()=>{(l=await (0,f.s)(e,getTransaction,"getTransaction")({hash:n})).blockNumber&&(p=l.blockNumber)},{delay:s,retryCount:a}),m=!1),d=await (0,f.s)(e,getTransactionReceipt,"getTransactionReceipt")({hash:n}),t>1&&(!d.blockNumber||p-d.blockNumber+1n<t))return;done(()=>o.resolve(d))}catch(n){if(n instanceof K.Bh||n instanceof K.Yb){if(!l){m=!1;return}try{u=l,m=!0;let n=await (0,ea.J)(()=>(0,f.s)(e,F.Q,"getBlock")({blockNumber:p,includeTransactions:!0}),{delay:s,retryCount:a,shouldRetry:({error:e})=>e instanceof en.f});m=!1;let i=n.transactions.find(({from:e,nonce:t})=>e===u.from&&t===u.nonce);if(!i||(d=await (0,f.s)(e,getTransactionReceipt,"getTransactionReceipt")({hash:i.hash}),t>1&&(!d.blockNumber||p-d.blockNumber+1n<t)))return;let c="replaced";i.to===u.to&&i.value===u.value?c="repriced":i.from===i.to&&0n===i.value&&(c="cancelled"),done(()=>{o.onReplaced?.({reason:c,replacedTransaction:u,transaction:i,transactionReceipt:d}),o.resolve(d)})}catch(e){done(()=>o.reject(e))}}else done(()=>o.reject(n))}}})})})}var el=n(78723),eu=n(48519),ed=n(47990),ep=n(73971);function publicActions(e){return{call:t=>(0,y.RE)(e,t),createBlockFilter:()=>createBlockFilter(e),createContractEventFilter:t=>createContractEventFilter(e,t),createEventFilter:t=>createEventFilter(e,t),createPendingTransactionFilter:()=>createPendingTransactionFilter(e),estimateContractGas:t=>estimateContractGas(e,t),estimateGas:t=>(0,P.Q)(e,t),getBalance:t=>(0,M.s)(e,t),getBlobBaseFee:()=>getBlobBaseFee(e),getBlock:t=>(0,F.Q)(e,t),getBlockNumber:t=>getBlockNumber(e,t),getBlockTransactionCount:t=>getBlockTransactionCount(e,t),getBytecode:t=>getBytecode(e,t),getChainId:()=>(0,q.L)(e),getContractEvents:t=>getContractEvents(e,t),getEnsAddress:t=>getEnsAddress(e,t),getEnsAvatar:t=>(0,g.r)(e,t),getEnsName:t=>(0,b.w)(e,t),getEnsResolver:t=>getEnsResolver(e,t),getEnsText:t=>(0,w.g)(e,t),getFeeHistory:t=>getFeeHistory(e,t),estimateFeesPerGas:t=>(0,R.X)(e,t),getFilterChanges:t=>getFilterChanges(e,t),getFilterLogs:t=>getFilterLogs(e,t),getGasPrice:()=>(0,$.o)(e),getLogs:t=>getLogs(e,t),getProof:t=>getProof(e,t),estimateMaxPriorityFeePerGas:t=>(0,_._)(e,t),getStorageAt:t=>getStorageAt(e,t),getTransaction:t=>getTransaction(e,t),getTransactionConfirmations:t=>getTransactionConfirmations(e,t),getTransactionCount:t=>(0,H.K)(e,t),getTransactionReceipt:t=>getTransactionReceipt(e,t),multicall:t=>(0,Y.A)(e,t),prepareTransactionRequest:t=>(0,ed.Z)(e,t),readContract:t=>(0,m.L)(e,t),sendRawTransaction:t=>(0,ep.p)(e,t),simulateContract:t=>simulateContract(e,t),verifyMessage:t=>verifyMessage(e,t),verifyTypedData:t=>verifyTypedData(e,t),uninstallFilter:t=>uninstallFilter(e,t),waitForTransactionReceipt:t=>waitForTransactionReceipt(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:o=!1,onBlock:i,onError:a,includeTransactions:s,poll:c,pollingInterval:l=e.pollingInterval}){let u,d,p;let m=void 0!==c?c:"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type),g=s??!1;return m?(()=>{let s=(0,es.P)(["watchBlocks",e.uid,t,n,o,g,l]);return observe(s,{onBlock:i,onError:a},i=>poll(async()=>{try{let o=await (0,f.s)(e,F.Q,"getBlock")({blockTag:t,includeTransactions:g});if(o.number&&u?.number){if(o.number===u.number)return;if(o.number-u.number>1&&n)for(let t=u?.number+1n;t<o.number;t++){let n=await (0,f.s)(e,F.Q,"getBlock")({blockNumber:t,includeTransactions:g});i.onBlock(n,u),u=n}}(!u?.number||"pending"===t&&!o?.number||o.number&&o.number>u.number)&&(i.onBlock(o,u),u=o)}catch(e){i.onError?.(e)}},{emitOnBegin:o,interval:l}))})():(d=!0,p=()=>d=!1,(async()=>{try{let t=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:n}=await t.subscribe({params:["newHeads"],onData(t){if(!d)return;let n=e.chain?.formatters?.block?.format||el.Z,o=n(t.result);i(o,u),u=o},onError(e){a?.(e)}});p=n,d||p()}catch(e){a?.(e)}})(),()=>p())})(e,t),watchBlockNumber:t=>watchBlockNumber(e,t),watchContractEvent:t=>(function(e,t){let{abi:n,address:o,args:i,batch:a=!0,eventName:s,fromBlock:c,onError:l,onLogs:u,poll:d,pollingInterval:p=e.pollingInterval,strict:m}=t,g=void 0!==d?d:"bigint"==typeof c||"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type);return g?(()=>{let t=m??!1,d=(0,es.P)(["watchContractEvent",o,i,a,e.uid,s,p,t,c]);return observe(d,{onLogs:u,onError:l},l=>{let u,d;void 0!==c&&(u=c-1n);let m=!1,g=poll(async()=>{if(!m){try{d=await (0,f.s)(e,createContractEventFilter,"createContractEventFilter")({abi:n,address:o,args:i,eventName:s,strict:t,fromBlock:c})}catch{}m=!0;return}try{let c;if(d)c=await (0,f.s)(e,getFilterChanges,"getFilterChanges")({filter:d});else{let a=await (0,f.s)(e,getBlockNumber,"getBlockNumber")({});c=u&&u!==a?await (0,f.s)(e,getContractEvents,"getContractEvents")({abi:n,address:o,args:i,eventName:s,fromBlock:u+1n,toBlock:a,strict:t}):[],u=a}if(0===c.length)return;if(a)l.onLogs(c);else for(let e of c)l.onLogs([e])}catch(e){d&&e instanceof eu.yR&&(m=!1),l.onError?.(e)}},{emitOnBegin:!0,interval:p});return async()=>{d&&await (0,f.s)(e,uninstallFilter,"uninstallFilter")({filter:d}),g()}})})():(()=>{let t=(0,es.P)(["watchContractEvent",o,i,a,e.uid,s,p,m??!1]),c=!0,unsubscribe=()=>c=!1;return observe(t,{onLogs:u,onError:l},t=>((async()=>{try{let a=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),l=s?encodeEventTopics({abi:n,eventName:s,args:i}):[],{unsubscribe:u}=await a.subscribe({params:["logs",{address:o,topics:l}],onData(e){if(!c)return;let o=e.result;try{let{eventName:e,args:i}=decodeEventLog({abi:n,data:o.data,topics:o.topics,strict:m}),a=formatLog(o,{args:i,eventName:e});t.onLogs([a])}catch(a){let e,n;if(a instanceof v.SM||a instanceof v.Gy){if(m)return;e=a.abiItem.name,n=a.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=formatLog(o,{args:n?[]:{},eventName:e});t.onLogs([i])}},onError(e){t.onError?.(e)}});unsubscribe=u,c||unsubscribe()}catch(e){l?.(e)}})(),()=>unsubscribe()))})()})(e,t),watchEvent:t=>(function(e,{address:t,args:n,batch:o=!0,event:i,events:a,fromBlock:s,onError:c,onLogs:l,poll:u,pollingInterval:d=e.pollingInterval,strict:p}){let m,g;let b=void 0!==u?u:"bigint"==typeof s||"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type),w=p??!1;return b?(()=>{let u=(0,es.P)(["watchEvent",t,n,o,e.uid,i,d,s]);return observe(u,{onLogs:l,onError:c},c=>{let l,u;void 0!==s&&(l=s-1n);let p=!1,m=poll(async()=>{if(!p){try{u=await (0,f.s)(e,createEventFilter,"createEventFilter")({address:t,args:n,event:i,events:a,strict:w,fromBlock:s})}catch{}p=!0;return}try{let s;if(u)s=await (0,f.s)(e,getFilterChanges,"getFilterChanges")({filter:u});else{let o=await (0,f.s)(e,getBlockNumber,"getBlockNumber")({});s=l&&l!==o?await (0,f.s)(e,getLogs,"getLogs")({address:t,args:n,event:i,events:a,fromBlock:l+1n,toBlock:o}):[],l=o}if(0===s.length)return;if(o)c.onLogs(s);else for(let e of s)c.onLogs([e])}catch(e){u&&e instanceof eu.yR&&(p=!1),c.onError?.(e)}},{emitOnBegin:!0,interval:d});return async()=>{u&&await (0,f.s)(e,uninstallFilter,"uninstallFilter")({filter:u}),m()}})})():(m=!0,g=()=>m=!1,(async()=>{try{let o=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),s=a??(i?[i]:void 0),u=[];s&&(u=[s.flatMap(e=>encodeEventTopics({abi:[e],eventName:e.name,args:n}))],i&&(u=u[0]));let{unsubscribe:d}=await o.subscribe({params:["logs",{address:t,topics:u}],onData(e){if(!m)return;let t=e.result;try{let{eventName:e,args:n}=decodeEventLog({abi:s??[],data:t.data,topics:t.topics,strict:w}),o=formatLog(t,{args:n,eventName:e});l([o])}catch(i){let e,n;if(i instanceof v.SM||i instanceof v.Gy){if(p)return;e=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let o=formatLog(t,{args:n?[]:{},eventName:e});l([o])}},onError(e){c?.(e)}});g=d,m||g()}catch(e){c?.(e)}})(),()=>g())})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:n,onTransactions:o,poll:i,pollingInterval:a=e.pollingInterval}){let s,c;let l=void 0!==i?i:"webSocket"!==e.transport.type;return l?(()=>{let i=(0,es.P)(["watchPendingTransactions",e.uid,t,a]);return observe(i,{onTransactions:o,onError:n},n=>{let o;let i=poll(async()=>{try{if(!o)try{o=await (0,f.s)(e,createPendingTransactionFilter,"createPendingTransactionFilter")({});return}catch(e){throw i(),e}let a=await (0,f.s)(e,getFilterChanges,"getFilterChanges")({filter:o});if(0===a.length)return;if(t)n.onTransactions(a);else for(let e of a)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{o&&await (0,f.s)(e,uninstallFilter,"uninstallFilter")({filter:o}),i()}})})():(s=!0,c=()=>s=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!s)return;let t=e.result;o([t])},onError(e){n?.(e)}});c=t,s||c()}catch(e){n?.(e)}})(),()=>c())})(e,t)}}function getPublicClient(e,t={}){let n=function(e,t={}){let n;try{n=e.getClient(t)}catch{}return n}(e,t);return n?.extend(publicActions)}var eh=n(65401),ef=n(41012);function usePublicClient(e={}){let t=(0,ef.Z)(e);return(0,eh.useSyncExternalStoreWithSelector)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>getPublicClient(e),n,{equalityFn:(e,t)=>e?.uid===t?.uid})})(t,{onChange:e}),()=>getPublicClient(t,e),()=>getPublicClient(t,e),e=>e,(e,t)=>e?.uid===t?.uid)}},62200:function(e,t,n){"use strict";n.d(t,{Q:function(){return useSignMessage}});var o=n(23588),i=n(77043),a=n(46981),s=n(71660);async function signMessage_signMessage(e,t){let n;let{account:o,connector:c,...l}=t;n="object"==typeof o&&"local"===o.type?e.getClient():await (0,s.e)(e,{account:o,connector:c});let u=(0,a.s)(n,i.l,"signMessage");return u({...l,...o?{account:o}:{}})}var c=n(41012);function useSignMessage(e={}){let{mutation:t}=e,n=(0,c.Z)(e),{mutate:i,mutateAsync:a,...s}=(0,o.D)({...t,mutationFn:e=>signMessage_signMessage(n,e),mutationKey:["signMessage"]});return{...s,signMessage:i,signMessageAsync:a}}},73449:function(e,t,n){"use strict";n.d(t,{o:function(){return useSwitchChain}});var o=n(23588),i=n(76026),a=n(29358);async function switchChain(e,t){let{addEthereumChainParameter:n,chainId:o}=t,s=e.state.connections.get(t.connector?.uid??e.state.current);if(s){let e=s.connector;if(!e.switchChain)throw new a.O({connector:e});let t=await e.switchChain({addEthereumChainParameter:n,chainId:o});return t}let c=e.chains.find(e=>e.id===o);if(!c)throw new i.X4;return e.setState(e=>({...e,chainId:o})),c}var s=n(48369);let c=[];function getChains(e){let t=e.chains;return(0,s.v)(c,t)?c:(c=t,t)}var l=n(2265),u=n(41012);function useSwitchChain(e={}){let{mutation:t}=e,n=(0,u.Z)(e),{mutate:i,mutateAsync:a,...s}=(0,o.D)({...t,mutationFn:e=>switchChain(n,e),mutationKey:["switchChain"]});return{...s,chains:function(e={}){let t=(0,u.Z)(e);return(0,l.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e._internal.chains.subscribe((e,t)=>{n(e,t)})})(t,{onChange:e}),()=>getChains(t),()=>getChains(t))}({config:n}),switchChain:i,switchChainAsync:a}}}}]);