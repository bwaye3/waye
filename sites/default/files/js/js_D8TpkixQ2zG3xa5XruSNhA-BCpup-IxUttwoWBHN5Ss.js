//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}()});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });

      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID.id);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID.id + '"]'), html);
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs, 'tokens[]': uncachedTokens },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/gim;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../ie","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.sortable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&a<b+c},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){var b=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),a.each(this.items,function(){b._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),!!d&&(!(this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e))&&(this.currentItem=d,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-this.document.scrollTop()<g.scrollSensitivity?h=this.document.scrollTop(this.document.scrollTop()-g.scrollSpeed):this.window.height()-(b.pageY-this.document.scrollTop())<g.scrollSensitivity&&(h=this.document.scrollTop(this.document.scrollTop()+g.scrollSpeed)),b.pageX-this.document.scrollLeft()<g.scrollSensitivity?h=this.document.scrollLeft(this.document.scrollLeft()-g.scrollSpeed):this.window.width()-(b.pageX-this.document.scrollLeft())<g.scrollSensitivity&&(h=this.document.scrollLeft(this.document.scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new a.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&d+j<i,m="y"===this.options.axis||b+k>f&&b+k<g,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b,c,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),e="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),f=d&&e;return!!f&&(b=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection(),this.floating?"right"===c||"down"===b?2:1:b&&("down"===b?2:1))},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?"right"===e&&c||"left"===e&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;d>=0;d--)for(f=a(j[d],this.document[0]),e=f.length-1;e>=0;e--)g=a.data(f[e],this.widgetFullName),g&&g!==this&&!g.options.disabled&&i.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;d>=0;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c],this.document[0]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;d<j;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]);return b._addClass(e,"ui-sortable-placeholder",c||b.currentItem[0].className)._removeClass(e,"ui-sortable-helper"),"tbody"===d?b._createTrPlaceholder(b.currentItem.find("tr").eq(0),a("<tr>",b.document[0]).appendTo(e)):"tr"===d?b._createTrPlaceholder(b.currentItem,e):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){c&&!d.forcePlaceholderSize||(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_createTrPlaceholder:function(b,c){var d=this;b.children().each(function(){a("<td>&#160;</td>",d.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(c)})},_contactContainers:function(b){var c,d,e,f,g,h,i,j,k,l,m=null,n=null;for(c=this.containers.length-1;c>=0;c--)if(!a.contains(this.currentItem[0],this.containers[c].element[0]))if(this._intersectsWith(this.containers[c].containerCache)){if(m&&a.contains(this.containers[c].element[0],m.element[0]))continue;m=this.containers[c],n=c}else this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0);if(m)if(1===this.containers.length)this.containers[n].containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1);else{for(e=1e4,f=null,k=m.floating||this._isFloating(this.currentItem),g=k?"left":"top",h=k?"width":"height",l=k?"pageX":"pageY",d=this.items.length-1;d>=0;d--)a.contains(this.containers[n].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(i=this.items[d].item.offset()[g],j=!1,b[l]-i>this.items[d][h]/2&&(j=!0),Math.abs(b[l]-i)<e&&(e=Math.abs(b[l]-i),f=this.items[d],this.direction=j?"up":"down"));if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[n])return void(this.currentContainer.containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1));f?this._rearrange(b,f,null,!0):this._rearrange(b,null,this.containers[n].element,!0),this._trigger("change",b,this._uiHash()),this.containers[n]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[n],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===e.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===e.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,e=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)"auto"!==this._storedCSS[d]&&"static"!==this._storedCSS[d]||(this._storedCSS[d]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||e.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;d>=0;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],a):a(jQuery)}(function(a){return a.ui.formResetMixin={_formResetHandler:function(){var b=a(this);setTimeout(function(){var c=b.data("ui-form-reset-instances");a.each(c,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var b=this.form.data("ui-form-reset-instances");b.splice(a.inArray(this,b),1),b.length?this.form.data("ui-form-reset-instances",b):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.checkboxradio",[a.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var b,c,d=this,e=this._super()||{};return this._readType(),c=this.element.labels(),this.label=a(c[c.length-1]),this.label.length||a.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?a(this).text():this.outerHTML}),this.originalLabel&&(e.label=this.originalLabel),b=this.element[0].disabled,null!=b&&(e.disabled=b),e},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var b=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===b&&/radio|checkbox/.test(this.type)||a.error("Can't create checkboxradio on element.nodeName="+b+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var b,c=this.element[0].name,d="input[name='"+a.ui.escapeSelector(c)+"']";return c?(b=this.form.length?a(this.form[0].elements).filter(d):a(d).filter(function(){return 0===a(this).form().length}),b.not(this.element)):a([])},_toggleClasses:function(){var b=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",b),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",b)._toggleClass(this.icon,null,"ui-icon-blank",!b),"radio"===this.type&&this._getRadioGroup().each(function(){var b=a(this).checkboxradio("instance");b&&b._removeClass(b.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){if("label"!==a||b)return this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),void(this.element[0].disabled=b)):void this.refresh()},_updateIcon:function(b){var c="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=a("<span>"),this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=b?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,b?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),b||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]),a.ui.checkboxradio});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../widget"],a):a(jQuery)}(function(a){var b=/ui-corner-([a-z]){2,6}/g;return a.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];a.each(this.options.items,function(d,e){var f,g={};if(e)return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(g=b["_"+d+"Options"]?b["_"+d+"Options"]("middle"):{classes:{}},b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);if("button"!==d||!e.parent(".ui-spinner").length){f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(c,d){var e={};return a.each(c,function(f){var g=d.options.classes[f]||"";g=a.trim(g.replace(b,"")),e[f]=(g+" "+c[f]).replace(/\s+/g," ")}),e},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);;
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
var $settings = drupalSettings.gavias_sliderlayer.settings;

var $group_settings = drupalSettings.gavias_sliderlayer.group_settings;

var $layers = drupalSettings.gavias_sliderlayer.layers_settings;

var $cxt = 0;

if($layers == 'null') $layers =  new Array();

if($settings == 'null') $settings =  {}; 

if($group_settings == 'null') $group_settings = { startwidth: 1170, startheight: 600 };

var delayer = drupalSettings.gavias_sliderlayer.delayer; 

var deslider = drupalSettings.gavias_sliderlayer.deslider;

var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

var $screen_ = '';
base64Encode = function(r) {
    var e, n, t, a, o, i, d, C = "",
        h = 0;
    for (r = UTF8Encode(r); h < r.length;) e = r.charCodeAt(h++), n = r.charCodeAt(h++), t = r.charCodeAt(h++), a = e >> 2, o = (3 & e) << 4 | n >> 4, i = (15 & n) << 2 | t >> 6, d = 63 & t, isNaN(n) ? i = d = 64 : isNaN(t) && (d = 64), C = C + key.charAt(a) + key.charAt(o) + key.charAt(i) + key.charAt(d);
    return C
}, UTF8Encode = function(r) {
    r = r.replace(/\x0d\x0a/g, "\n");
    for (var e = "", n = 0; n < r.length; n++) {
        var t = r.charCodeAt(n);
        128 > t ? e += String.fromCharCode(t) : t > 127 && 2048 > t ? (e += String.fromCharCode(t >> 6 | 192), e += String.fromCharCode(63 & t | 128)) : (e += String.fromCharCode(t >> 12 | 224), e += String.fromCharCode(t >> 6 & 63 | 128), e += String.fromCharCode(63 & t | 128))
    }
    return e
}, GaviasCompare = function(r, e) {
    return r.index < e.index ? -1 : r.index > e.index ? 1 : 0
};

(function ($) {
  $(window).load(function(){
    if(!$('input[name*="video_youtube_args"').val()){
      $('input[name*="video_youtube_args"').val('version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&ref=0;origin=http://server.local;autoplay=1;');
    }
    if(!$('input[name*="video_vimeo_args"').val()){
      $('input[name*="video_vimeo_args"').val('title=0&byline=0&portrait=0&api=1');
    }
  })

  $(document).ready(function () {

  //=========== Ranger ==================
   var delay = 9000;
    if($group_settings['delay']){
      delay = $group_settings['delay'];
    }

  var ui_slider = document.getElementById('g-slider');
    noUiSlider.create(ui_slider, {
      start: [ 0, parseInt(delay) ],
      step: 10, 
      margin: 20, 
      connect: true, 
      behaviour: 'tap-drag',
      range: {
        'min': 0,
        'max': parseInt(delay)
      },
      //pips: { 
        //mode: 'steps',
        //density: 2
     // }
    });

    var end = document.getElementById('g_data_end'),
    start = document.getElementById('g_data_start');

    ui_slider.noUiSlider.on('slide', function( values, handle ) {
      if ( handle ) {
        end.value = values[handle];
      } else {
        start.value = values[handle];
      }
    });

    // $('#g_data_start').on('change', function() {
    //   ui_slider.noUiSlider.set($('#g_data_start').val());
    // });

    // $('#g_data_end').on('change', function() {
    //    ui_slider.noUiSlider.set([null, $('#g_data_end').val()]);
    // });
    

    if($.fn.ColorPicker){
      $('input.color-picker').each(function(){
        var $input = $(this);
        var name = $input.attr('name');
        $( "<span class=\"color-check color-"+name+"\"></span>" ).insertAfter( $input );
        $input.ColorPicker({
          onChange:function (hsb, hex, rgb) {
           $('span.color-' + name).css('backgroundColor', '#' + hex);
            $input.val( '#' + hex );
            $input.trigger('change');
          } 
       });
      });
    };

    //Option input ===
    var previous_val;

    $('select[name=text_style]').on('focus', function () {
      previous_val = this.value;
    }).change(function () {
      $('.layer[id=layer' + '-' + $cxt + '] .inner').removeClass(previous_val);
      $('.layer[id=layer' + '-' + $cxt + '] .inner').addClass($(this).val());

      var _screen = $('#prview-option-screen').val();
      var left = $layers[$cxt].left;
      if(_screen == '_sm')  left = $layers[$cxt].left_sm;
      if(_screen == '_xs')  left = $layers[$cxt].left_xs;

      if(left == 'center'){
        $('#layer-' + $cxt).css({
          left: '50%',
          'margin-left' : -($('#layer-' + $cxt).width()/2)
        });
      }else if(left=='left'){
        $('#layer-' + $cxt).css({
          right: 'auto',
          left: 0,
        });
      }else if(left=='right'){
        $('#layer-' + $cxt).css({
          right: 0,
          left: 'auto'
        });
      }

      previous_val = $(this).val();

    });

    $('#content-type').find('#layer-text').keyup(function () {
      $layers[$cxt].text = $(this).val();
      $('#layer-' + $cxt).find('.inner').html($(this).val());
      var _screen = $('#prview-option-screen').val();
      var left = $layers[$cxt].left;
      if(_screen == '_sm')  left = $layers[$cxt].left_sm;
      if(_screen == '_xs')  left = $layers[$cxt].left_xs;

      if(left =='center'){
        $('#layer-' + $cxt).css({
          left: '50%',
          'margin-left' : -($('#layer-' + $cxt).width()/2)
        });
      }else if(left=='left'){
        $('#layer-' + $cxt).css({
          right: 'auto',
          left: 0
        });
      }else if(left=='right'){
        $('#layer-' + $cxt).css({
          right: 0,
          left: 'auto'
        });
      }
    })

    $('[name=custom_css]').keyup(function(){
      $layers[$cxt].custom_css = $(this).val();
      $('#layer-' + $cxt).find('.inner').attr('style',$(this).val());
    });

    $('[name=custom_class]').change(function(){
      $layers[$cxt].custom_class = $(this).val();
      $('#layer-' + $cxt).find('.inner').attr('class', 'inner');
      $('#layer-' + $cxt).find('.inner').addClass($(this).val());
      $('#layer-' + $cxt).find('.inner').addClass($(this).parents('.fieldset-wrapper').find('[name=custom_style]').val());
    });
    
    $('[name=custom_style]').change(function(){
      $layers[$cxt].custom_style = $(this).val();
      $('#layer-' + $cxt).find('.inner').attr('class', 'inner');
      $('#layer-' + $cxt).find('.inner').addClass($(this).val());
      $('#layer-' + $cxt).find('.inner').addClass($(this).parents('.fieldset-wrapper').find('[name=custom_class]').val());
    });

    //$('#gavias_slider_single').width($group_settings.startwidth).height($group_settings.startheight);

    $('input[name=top]').change(function () {
      $('#layer-' + $cxt).css({
        top: $(this).val() + 'px'
      });
    });

    $('input[name=top_sm]').change(function () {
      if($('#prview-option-screen').val() == "_sm"){
        $('#layer-' + $cxt).css({
          top: $(this).val() + 'px'
        });
      }
    });

    $('input[name=top_xs]').change(function () {
      if($('#prview-option-screen').val() == "_xs"){
        $('#layer-' + $cxt).css({
          top: $(this).val() + 'px'
        });
      }
    });

    $('input[name=left]').on('change', function () {
      if($('#prview-option-screen').val() == ''){
        if($(this).val()=='center'){
          $('#layer-' + $cxt).css({
            left: '50%',
            'margin-left' : -($('#layer-' + $cxt).width()/2)
          });
        }else if($(this).val()=='left'){
          $('#layer-' + $cxt).css({
            left: 0,
            'margin-left': 0
          });
        }else if($(this).val()=='right'){
          $('#layer-' + $cxt).css({
            right: 0,
            'margin-left': 0
          });
        }else{
          $('#layer-' + $cxt).css({
            left: $(this).val() + 'px',
            'margin-left': 0
          });
        }
      }
    });

    $('input[name=left_sm]').on('change', function () {
      if($('#prview-option-screen').val() == "_sm"){
        if($(this).val()=='center'){
          $('#layer-' + $cxt).css({
            left: '50%',
            'margin-left' : -($('#layer-' + $cxt).width()/2)
          });
        }else if($(this).val()=='left'){
          $('#layer-' + $cxt).css({
            left: 0,
            'margin-left': 0
          });
        }else if($(this).val()=='right'){
          $('#layer-' + $cxt).css({
            right: 0,
            'margin-left': 0
          });
        }else{
          $('#layer-' + $cxt).css({
            left: $(this).val() + 'px',
            'margin-left': 0
          });
        }
      }
    });

    $('input[name=left_xs]').on('change', function () {
      if($('#prview-option-screen').val() == "_xs"){
        if($(this).val()=='center'){
          $('#layer-' + $cxt).css({
            left: '50%',
            'margin-left' : -($('#layer-' + $cxt).width()/2)
          });
        }else if($(this).val()=='left'){
          $('#layer-' + $cxt).css({
            left: 0,
            'margin-left': 0
          });
        }else if($(this).val()=='right'){
          $('#layer-' + $cxt).css({
            right: 0,
            'margin-left': 0
          });
        }else{
          $('#layer-' + $cxt).css({
            left: $(this).val() + 'px',
            'margin-left': 0
          });
        }
      }
    });

    $('input[name=font_size_lg]').on('change', function(){
      $('#layer-' + $cxt + ' .inner').css('font-size', $(this).val() + 'px');
      $layers[$cxt]['font_size_lg'] = $(this).val();
    });

    $('input[name=line_height_lg]').on('change', function(){
      $('#layer-' + $cxt + ' .inner').css('line-height', $(this).val() + 'px');
      $layers[$cxt]['line_height_lg'] = $(this).val();
    });

    $('input[name=font_size_sm]').on('change', function(){
      if($('#prview-option-screen').val() == "_sm"){
        $('#layer-' + $cxt + ' .inner').css('font-size', $(this).val() + 'px');
        $layers[$cxt]['font_size_sm'] = $(this).val();
      }
    });

    $('input[name=line_height_sm]').on('change', function(){
      if($('#prview-option-screen').val() == "_sm"){
        $('#layer-' + $cxt + ' .inner').css('line-height', $(this).val() + 'px');
        $layers[$cxt]['line_height_sm'] = $(this).val();
      }
    });

    $('input[name=font_size_xs]').on('change', function(){
      if($('#prview-option-screen').val() == "_xs"){
        $('#layer-' + $cxt + ' .inner').css('font-size', $(this).val() + 'px');
        $layers[$cxt]['font_size_xs'] = $(this).val();

      }
    });

    $('input[name=line_height_xs]').on('change', function(){
      if($('#prview-option-screen').val() == "_xs"){
        $('#layer-' + $cxt + ' .inner').css('line-height', $(this).val() + 'px');
        $layers[$cxt]['line_height_xs'] = $(this).val();
      }
    });

    //Align
    $('select[name=text_align_lg]').on('change', function(){
      $('#layer-' + $cxt + ' .inner').css('text-align', $(this).val());
      $layers[$cxt]['text_align_lg'] = $(this).val();
    });

    $('select[name=text_align_sm]').on('change', function(){
      if($('#prview-option-screen').val() == "_sm"){
        $('#layer-' + $cxt + ' .inner').css('text-align', $(this).val());
        $layers[$cxt]['text_align_sm'] = $(this).val();
      }
    });

    $('select[name=text_align_xs]').on('change', function(){
      if($('#prview-option-screen').val() == "_xs"){
        $('#layer-' + $cxt + ' .inner').css('text-align', $(this).val());
        $layers[$cxt]['text_align_xs'] = $(this).val();
      }
    });


    //Color
    $('input[name=color_lg]').on('change', function(){
      $('#layer-' + $cxt + ' .inner').css('color', $(this).val());
      $layers[$cxt]['color_lg'] = $(this).val();
    });

    $('input[name=color_sm]').on('change', function(){
      if($('#prview-option-screen').val() == "_sm"){
        $('#layer-' + $cxt + ' .inner').css( 'color', $(this).val());
        $layers[$cxt]['color_sm'] = $(this).val();
      }
    });

    $('input[name=color_xs]').on('change', function(){
      if($('#prview-option-screen').val() == "_xs"){
        $('#layer-' + $cxt + ' .inner').css('color', $(this).val());
        $layers[$cxt]['color_xs'] = $(this).val();
      }
    });


    $('input[name=width]').change(function () {
      $('#layer-' + $cxt).css({
        width: $(this).val() + 'px'
      });
    });

    $('input[name=height]').change(function () {
      $('#layer-' + $cxt).css({
        height: $(this).val() + 'px'
      });
    });

    if(!$group_settings.gridheight_sm){
      $("#prview-option-screen option[value=_sm]").remove();
    }
    if(!$group_settings.gridheight_xs){
      $("#prview-option-screen option[value=_xs]").remove();
    }

    $('#prview-option-screen').val('');

    function set_position_layer(__layer, ptop, pleft){
      $('#layer-' + __layer).css({
        'top': ptop + 'px'
      });
      if(pleft =='center'){
        $('#layer-' + __layer).css({
          left: '50%',
          'margin-left' : -($('#layer-' + __layer).width()/2)
        });
      }else if(pleft=='left'){
        $('#layer-' + __layer).css({
          left: 0,
          'margin-left': 0
        });
      }else if(pleft=='right'){
        $('#layer-' + __layer).css({
            right: 0,
            'margin-left': 0
        });
      }else{
        $('#layer-' + __layer).css({
            left: pleft + 'px',
            'margin-left': 0
        });
      }
    }


    $('#prview-option-screen').on('change', function(){
      var _screen = $(this).val();
      $screen_ = _screen;
      var _screen_class = _screen;

      if(_screen_class =='') _screen_class = '_lg';
      $('.layer-single-settingsss').removeClass('layer-settings__lg').removeClass('layer-settings__sm').removeClass('layer-settings__xs');
      $('.layer-single-settingsss').addClass('layer-settings_' + _screen_class);
      $('#gavias_slider_single').addClass('layer-preview-screen' + _screen_class);

      if(_screen == ''){
        $('#gavias_slider_single').width($group_settings.gridwidth).height($group_settings.gridheight);

        var __layer = 0;
        $('#gavias_slider_single > .layer').each(function(){
          $('#layer-' + __layer + ' .inner').css({
            'font-size': $layers[__layer]['font_size_lg'] + 'px',
            'line-height':$layers[__layer]['line_height_lg'] + 'px',
            'text-align':$layers[__layer]['text_align_lg'],
            'color':$layers[__layer]['color_lg'],
          });

          var width = $layers[__layer]['width'];
          var height = $layers[__layer]['height'];
          if($layers[__layer]['type'] == 'image'){
            $('#layer-' + __layer).css({
              'width': width,
              'height': height
            });
          }

          var pleft = $layers[__layer]['left'], ptop = $layers[__layer]['top'];
          set_position_layer(__layer, ptop, pleft);
          __layer = __layer + 1;
        })
      }

      if(_screen == '_sm'){
        $('#gavias_slider_single').width(778).height($group_settings.gridheight_sm);
        var __layer = 0;
        $('#gavias_slider_single > .layer').each(function(){
          $('#layer-' + __layer + ' .inner').css({
            'font-size': $layers[__layer]['font_size_sm'] + 'px',
            'line-height':$layers[__layer]['line_height_sm'] + 'px',
            'text-align':$layers[__layer]['text_align_sm'],
            'color':$layers[__layer]['color_sm'],
          });
          var width_sm = $layers[__layer]['width_sm'];
          var height_sm = $layers[__layer]['height_sm'];
          if($layers[__layer]['type'] == 'image'){
            $('#layer-' + __layer).css({
              'width': width_sm,
              'height': height_sm
            });
          }

          var pleft = $layers[__layer]['left_sm'], ptop = $layers[__layer]['top_sm'];
          set_position_layer(__layer, ptop, pleft);
          __layer = __layer + 1;
        })
      }

      if(_screen == '_xs'){
        $('#gavias_slider_single').width(480).height($group_settings.gridheight_xs);
        var __layer = 0;
        $('#gavias_slider_single > .layer').each(function(){
          $('#layer-' + __layer + ' .inner').css({
            'font-size': $layers[__layer]['font_size_xs'] + 'px',
            'line-height':$layers[__layer]['line_height_xs'] + 'px',
            'text-align':$layers[__layer]['text_align_xs'],
            'color':$layers[__layer]['color_xs'],
          });
          var width_xs = $layers[__layer]['width_xs'];
          var height_xs = $layers[__layer]['height_xs'];
          if($layers[__layer]['type'] == 'image'){
            $('#layer-' + __layer).css({
              'width': width_xs,
              'height': height_xs
            });
          }

          var pleft = $layers[__layer]['left_xs'], ptop = $layers[__layer]['top_xs'];
          set_position_layer(__layer, ptop, pleft);
          __layer = __layer + 1;
        })
      }

    });
  

      

    //=========== End Ranger ==================  
    load_slider();

    $('#add_layer').click(function () {
      add_layer();
      return false;
    })

    $('#save').click(function () {
      $(this).attr('disabled', 'true');
      save_layer_slider();
    })
 
    $('input#g-image-layer').on('onchange', function(){
        $url = drupalSettings.gavias_sliderlayer.base_url + $(this).val();
        insertImageToLayer($url);
    });

    $('input#background-image').on('onchange', function(){
      $url = drupalSettings.gavias_sliderlayer.base_url + $(this).val();
      setSlideSackground($url);
    });

  function insertImageToLayer(url){
    var layerid = 'layer-' + $cxt;
    var img = $('<img>').attr('src', url);
    $('#'+layerid).find('.inner').html(img);
    var image = new Image();
    image.onload = function() {
      $('#'+layerid).width(this.width);
      $('#'+layerid).height(this.height);
      $('input[name=width]').val(this.width);
      $('input[name=height]').val(this.height);
    }
    image.src = url;
  }

  function setSlideSackground(url){
    jQuery('#gavias_slider_single').css({
      backgroundImage:'url('+url+')'
    });
  }

});

//========================================
  function notify(style, text) {
    $.notify({
        title: 'Notification',
        text: text,
        image: '<i class="fa fa-bell" style="font-size: 30px;color: #fff;"></i>',
        hideAnimation: 'slideUp',
    }, {
        style: 'metro',
        className: style,
        autoHide: true,
        clickToHide: true,
    });
  }

  function load_slider() {
    $settings = $.extend(true, deslider, $settings);
    if ($settings.background_image_uri != '') {
      $('#gavias_slider_single').css({
        'background-image': 'url(' + drupalSettings.gavias_sliderlayer.base_url  + $settings.background_image_uri + ')'
      })
    } else {
      $('#gavias_slider_single').css({
        backgroundImage: 'none'
      })
    }

    jQuery('.slide-option').each(function (index) {
      if (typeof $settings[jQuery(this).attr('name')] != "undefined") {
        jQuery(this).val($settings[jQuery(this).attr('name')]);
      } else {
        jQuery(this).val('');
      }
    });
    load_layers();
  }

  function save_slider() {
    $('input.slide-option, select.slide-option').each(function (index) {
      $settings[$(this).attr('name')] = $(this).val();
    });
  }

  function gva_sl_append_config_layer(l, i, t){
    l.title = l.title || 'Layer ' + (i + 1);
    var title = $('<span>').text($layers[i].title);
    var remove = $('<span>').text('').addClass('remove-layer fa fa-times');
    var clone = $('<span>').text('').addClass('fa fa-clone');
    var move = $('<span>').text('').addClass('move fa fa-arrows');
    title.click(function () { // Click to right layer
      save_layer();
      load_layer(i);
    })
    clone.click(function () {
      save_layer();
      duplicate_layer(i);
    })
    remove.click(function () {
      remove_layer(i);
    })
    t.append(title).append(remove).append(clone).append(move);
  }

  function load_layers() {
    $('#gavias_slider_single').find('div').remove();
    $('#gavias_list_layers').find('li').remove();
    
    if (typeof $layers == 'undefined') {
      $layers = new Array();
    }
    $($layers).each(function (i) {
      if($layers[i])
        if($layers[i].removed != 1){
          gva_sl_add_tab_layer(i);
        }
    })
    $('.layer-option').val('');
    if ((typeof $layers[0] != 'undefined')) {
      load_layer(0);
    }
  }

  function add_layer() {
    save_layer();
    var j = $layers.length;
    $layers[j] = {};
    $start_layer = 0;
    $.each($layers, function(index, layer){
      if(parseInt(layer['data_time_start']) > $start_layer){
        $start_layer = layer['data_time_start'];
      }
    });

    delayer['data_time_start'] = parseInt($start_layer) + 500;
    $.extend(true, $layers[j], delayer);
    gva_sl_add_tab_layer(j);
    load_layer(j);
  }

  function gva_sl_add_tab_layer(i) {
     var layertype = $layers[i].type;
     var t = $('<li>').attr('index', i).addClass(layertype);
        
     gva_sl_append_config_layer($layers[i], i, t);

     $('ul#gavias_list_layers').append(t);

     var newdelayer = $('<div>').addClass('layer tp-caption').attr('id', 'layer-' + i);
     newdelayer.addClass('caption');
     if (typeof $layers[i].text_style == 'undefined') {
        $layers[i].text_style = 'text';
     }
     if ($layers[i].type == 'text') {
        newdelayer.addClass($layers[i].text_style);
     }
     var content = '';
     switch ($layers[i].type) {
        case 'image':
        var url = drupalSettings.gavias_sliderlayer.base_url  + $layers[i].image_uri;
          content = '<img src="' + url + '" />';
          var img = new Image();
          var img_width = $layers[i].width || this.width;
          var img_height = $layers[i].height || this.height;
          img.onload = function() {
            newdelayer.width(img_width); //aa
            newdelayer.height(img_height);
          }
          img.src = drupalSettings.gavias_sliderlayer.base_url  + $layers[i].image_uri;
          break;
        case 'text':
          content = $layers[i].text;
     }
     var inner = $('<div>').addClass('inner');
     if($layers[i].custom_css){
        inner.attr('style',$layers[i].custom_css);
     };
     if($layers[i].custom_class){
        inner.addClass($layers[i].custom_class);
     };
    if($layers[i].custom_style){
      inner.addClass($layers[i].custom_style);
    }
    if($layers[i].font_size_lg){
      inner.css('font-size', $layers[i].font_size_lg + 'px');
    }
    if($layers[i].line_height_lg){
      inner.css('line-height', $layers[i].line_height_lg + 'px');
    }
    if($layers[i].color_lg){
      inner.css('color', $layers[i].color_lg);
    }
   if($layers[i].text_align_lg){
      inner.css('text-align', $layers[i].text_align_lg);
    }
     inner.html(content);
     newdelayer.append(inner);
     var zIndex = 99 - $layers[i].index;
  
     newdelayer.mousedown(function () {
        save_layer();
        load_layer(i);
     }).draggable({ 
        containment: "parent",
        drag: function (event, ui) {
          //ui.helper.width('auto');
          ui.helper.height('auto');
          $screen_ = $('#prview-option-screen').val();
          var __left = $('input[name=left'+$screen_+']').val();
          if(__left == 'center'){
            $('input[name=left'+$screen_+']').val('center');
            $('input[name=top'+$screen_+']').val(Math.round(ui.position.top));
            ui.position.left = '50%';
            ui.helper.css('margin-left', -ui.helper.width/2);
            $layers[i]['left' + $screen_] = 'center';
            $layers[i]['top' + $screen_] = Math.round(ui.position.top);
          }else if(__left == 'left'){
            $('input[name=left'+$screen_+']').val('left');
            $('input[name=top'+$screen_+']').val(Math.round(ui.position.top));
            ui.position.left = 10;
            ui.position.right = "auto";
            ui.helper.css('margin-left', 0);
            $layers[i]['left' + $screen_] = 'left';
            $layers[i]['top' + $screen_] = Math.round(ui.position.top);
          }else if(__left == 'right'){
            $('input[name=left'+$screen_+']').val('right');
            $('input[name=top'+$screen_+']').val(Math.round(ui.position.top));
            ui.position.left = 'auto';
            ui.position.right = 0;
            ui.helper.css('margin-left', 0);
            $layers[i]['left' + $screen_] = 'right';
            $layers[i]['top' + $screen_] = Math.round(ui.position.top);
          }else{
            $('input[name=left'+$screen_+']').val(Math.round(ui.position.left));
            $('input[name=top'+$screen_+']').val(Math.round(ui.position.top));
            ui.helper.css('margin-left', 0);
            $layers[i]['left' + $screen_] = Math.round(ui.position.left);
            $layers[i]['top' + $screen_] = Math.round(ui.position.top);
          }
        },
        grid: [5, 5]
     }).resizable({
        aspectRatio: $layers[i].type=='image',
        handles: 'e',
        stop: function (e, ui) {
          $screen_ = $('#prview-option-screen').val();
          $('input[name=width'+$screen_+']').val(ui.size.width);
          $('input[name=height'+$screen_+']').val(ui.size.height);

          $layers[i]['width' + $screen_] = ui.size.width;
          $layers[i]['height' + $screen_] = ui.size.height;

          $screen_ = $('#prview-option-screen').val();
          var __left = $('input[name=left'+$screen_+']').val();
          if(__left == 'center'){
            ui.position.left = '50%';
            ui.helper.css('margin-left', -ui.size.width/2);
          }
        }
     });

    newdelayer.click(function () {
      save_layer();
      load_layer(i);
    })

     var _screen = $('#prview-option-screen').val();
     $('#gavias_slider_single').append(newdelayer);
     var left = $layers[i].left;
     var top = $layers[i].top;
     if(_screen == '_sm'){
      left = $layers[i].left_sm;
      top = $layers[i].top_sm;
     }
     if(_screen == '_xs'){
      left = $layers[i].left_xs;
      top = $layers[i].top_xs;
     }
     var layer_style = $layers[i].type;
     var _width = newdelayer.width();
     if(layer_style== 'image') {
        _width = $layers[i].width;
     }
     if(left=='center'){
        newdelayer.css({
          'left': '50%',
          'margin-left' : -(_width/2),
        })
     }else if(left=='left'){
        newdelayer.css({
          'left': 0
        })
     }else if(left=='right'){
        newdelayer.css({
          'right': 0
        })
     }else{
        newdelayer.css({
          'left': left + 'px'
        })
     }
      newdelayer.css({
        top: top + 'px',
        zIndex: zIndex
     });

     $('#layeroptions').show(0);

     $('#gavias_list_layers').sortable({
           handle: '.move',
           update: function (event, ui) {
              $('#gavias_list_layers').find('li').each(function (index) {
                    var lindex = $(this).attr('index');
                    $layers[lindex].index = index;
                    $('#layer-'+lindex).css({zIndex:(99-index)});
                    save_layer();
              });
              $layers.sort(GaviasCompare);
              save_slider();
              load_slider();
           }
     });
  }

  function duplicate_layer(i) {
    save_layer();
    var j = $layers.length;
    $layers[j] = {};
    $start_layer = 0;
    $.each($layers, function(index, layer){
      if(parseInt(layer['data_time_start']) > $start_layer){
        $start_layer = layer['data_time_start'];
      }
    });
    
    $.extend(true, $layers[j], $layers[i]);
    gva_sl_add_tab_layer(j);
    load_layer(j);
  }

 function load_type_layer(type){
    $('.g-content-setting').each(function(){
      $(this).css('display','none');
    });
    $('#content-'+ type).css('display','block');
    $layers[$cxt].type = type;
    $('ul#gavias_list_layers li.active').removeClass('image text').addClass(type);
    if (type == 'image') {
      //var op = $('#0-' + $cxt).resizable("option");
      //$('#layer-' + $cxt).resizable( "destroy");
      //op.aspectRatio = true;
      //$('#layer-' + $cxt).resizable();
    } else if (type == 'text') {
      $('#content-'+ type).find('textarea[id=layer-text]').trigger('keyup');
      var op2 = $('#layer-' + $cxt).resizable( "option");
      $('#layer-' + $cxt).resizable( "destroy");
     op2.aspectRatio = false;
     $('#layer-' + $cxt).resizable(op2);
    } 
  }

  function load_layer(i) {
    $cxt = i;
    $('.layer').removeClass('selected');
    $('#layer-' + i).addClass('selected');
    $('ul#gavias_list_layers').find('li').removeClass('active');
    $('ul#gavias_list_layers').find('li[index=' + i + ']').addClass('active');

    $('.layer-option').each(function (index) {
      if (typeof $layers[i][$(this).attr('name')] != 'undefined') {
        if($(this).attr('name')=='data_time_end' || $(this).attr('name')=='data_time_start'){
          $(this).val($layers[i][$(this).attr('name')]);       
        }else{
          $(this).val($layers[i][$(this).attr('name')]);
        }
      } else {
        $(this).val('');
      }
    });

    var ui_slider = document.getElementById('g-slider');
    //alert($layers[i]['data_time_end']);
    ui_slider.noUiSlider.set([$layers[i]['data_time_start'], $layers[i]['data_time_end']]);

    var type = $layers[i]['select_content_type'];
    load_type_layer(type);

    $('.select-content-type').change(function(){
        var type = $(this).val();
        load_type_layer(type);
    });
  }

  function set_layer_position($i, top, left) {
    //$layers[$i].top = top;
    //$layers[$i].left = left;
  }
  window.set_layer_position = set_layer_position;

  function save_layer() {
    if ($layers.length == 0) {
      return;
    }
    $('.layer-option').each(function (index) {
      if($(this) != 'undefined'){
        $layers[$cxt][$(this).attr('name')] = $(this).val();
      }
    })
  }

  function remove_layer(i) {
    $('#layer-' + i).remove();
    $layers[i]['removed'] = 1;
    $('ul#gavias_list_layers').find('li[index=' + i + ']').remove();
    if (i == $cxt) {
      if($('ul#gavias_list_layers li').length > 0){
        var f = parseInt($('ul#gavias_list_layers').find('li:first').attr('index'));
        load_layer(f);
      }
    }
  }

  function save_layer_slider() {
    save_slider();
    save_layer();
    var layers = [];

    $layers.sort(GaviasCompare);
    $.each($layers,function(index, layer){
      if(layer.removed == 0){
        layers[layers.length] = layer;
      }
    });
    $layers = layers;
    var settings = $.extend(true, {}, $settings);
    
    //console.log($settings);
    //console.log($layers);
    //console.log($layers); return;
    var datasettings = base64Encode(JSON.stringify(settings));

    var datalayers = base64Encode(JSON.stringify(layers));

    var gid = $('input[name=gid]').val();
    var sid = $('input[name=sid]').val();
    var title = $('input[name=title]').val();
    var sort_index = $('input[name=sort_index]').val();
    var status = $('select[name=status]').val();
    var background_image_uri = $('input[name=background_image_uri]').val();
    var data = {
      sort_index: sort_index,
      status: status,
      title: title,
      sid: sid,
      gid: gid,
      background_image_uri: background_image_uri,
      datalayers: datalayers,
      settings: datasettings
    };
    $.ajax({
      url: drupalSettings.gavias_sliderlayer.save_url,
      type: 'POST',
      data: data,
      dataType: 'json',
      success: function (data) {
        $('#save').val('Save');
        notify('success', 'Slider updated');
        $('#save').removeAttr('disabled');
        window.location = data['url_edit'];
       
      },
      error: function (jqXHR, textStatus, errorThrown) {
        notify('black', 'Slider not updated');
        $('#save').removeAttr('disabled');
      }
    });
  }
})(jQuery);
;
/** Notify.js - v0.3.1 - 2014/06/29
 * http://notifyjs.com/
 * Copyright (c) 2014 Jaime Pillora - MIT
 */
(function(t,i,n,e){"use strict";var r,o,s,a,h,l,c,u,p,d,f,m,w,y,g,b,v,x,S,P,C,N,k,H,T,A,M,j=[].indexOf||function(t){for(var i=0,n=this.length;n>i;i++)if(i in this&&this[i]===t)return i;return-1};C="notify",P=C+"js",s=C+"!blank",k={t:"top",m:"middle",b:"bottom",l:"left",c:"center",r:"right"},w=["l","c","r"],M=["t","m","b"],v=["t","b","l","r"],x={t:"b",m:null,b:"t",l:"r",c:null,r:"l"},S=function(t){var i;return i=[],n.each(t.split(/\W+/),function(t,n){var r;return r=n.toLowerCase().charAt(0),k[r]?i.push(r):e}),i},A={},a={name:"core",html:'<div class="'+P+'-wrapper">\n  <div class="'+P+'-arrow"></div>\n  <div class="'+P+'-container"></div>\n</div>',css:"."+P+"-corner {\n  position: fixed;\n  margin: 5px;\n  z-index: 1050;\n}\n\n."+P+"-corner ."+P+"-wrapper,\n."+P+"-corner ."+P+"-container {\n  position: relative;\n  display: block;\n  height: inherit;\n  width: inherit;\n  margin: 3px;\n}\n\n."+P+"-wrapper {\n  z-index: 1;\n  position: absolute;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n."+P+"-container {\n  display: none;\n  z-index: 1;\n  position: absolute;\n}\n\n."+P+"-hidable {\n  cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n  position: relative;\n}\n\n."+P+"-arrow {\n  position: absolute;\n  z-index: 2;\n  width: 0;\n  height: 0;\n}"},T={"border-radius":["-webkit-","-moz-"]},f=function(t){return A[t]},o=function(i,e){var r,o,s,a;if(!i)throw"Missing Style name";if(!e)throw"Missing Style definition";if(!e.html)throw"Missing Style HTML";return(null!=(a=A[i])?a.cssElem:void 0)&&(t.console&&console.warn(""+C+": overwriting style '"+i+"'"),A[i].cssElem.remove()),e.name=i,A[i]=e,r="",e.classes&&n.each(e.classes,function(t,i){return r+="."+P+"-"+e.name+"-"+t+" {\n",n.each(i,function(t,i){return T[t]&&n.each(T[t],function(n,e){return r+="  "+e+t+": "+i+";\n"}),r+="  "+t+": "+i+";\n"}),r+="}\n"}),e.css&&(r+="/* styles for "+e.name+" */\n"+e.css),r&&(e.cssElem=b(r),e.cssElem.attr("id","notify-"+e.name)),s={},o=n(e.html),p("html",o,s),p("text",o,s),e.fields=s},b=function(t){var i;i=h("style"),i.attr("type","text/css"),n("head").append(i);try{i.html(t)}catch(e){i[0].styleSheet.cssText=t}return i},p=function(t,i,e){var r;return"html"!==t&&(t="text"),r="data-notify-"+t,u(i,"["+r+"]").each(function(){var i;return i=n(this).attr(r),i||(i=s),e[i]=t})},u=function(t,i){return t.is(i)?t:t.find(i)},N={clickToHide:!0,autoHide:!0,autoHideDelay:5e3,arrowShow:!0,arrowSize:5,breakNewLines:!0,elementPosition:"bottom",globalPosition:"top right",style:"bootstrap",className:"error",showAnimation:"slideDown",showDuration:400,hideAnimation:"slideUp",hideDuration:200,gap:5},g=function(t,i){var e;return e=function(){},e.prototype=t,n.extend(!0,new e,i)},l=function(t){return n.extend(N,t)},h=function(t){return n("<"+t+"></"+t+">")},m={},d=function(t){var i;return t.is("[type=radio]")&&(i=t.parents("form:first").find("[type=radio]").filter(function(i,e){return n(e).attr("name")===t.attr("name")}),t=i.first()),t},y=function(t,i,n){var r,o;if("string"==typeof n)n=parseInt(n,10);else if("number"!=typeof n)return;if(!isNaN(n))return r=k[x[i.charAt(0)]],o=i,t[r]!==e&&(i=k[r.charAt(0)],n=-n),t[i]===e?t[i]=n:t[i]+=n,null},H=function(t,i,n){if("l"===t||"t"===t)return 0;if("c"===t||"m"===t)return n/2-i/2;if("r"===t||"b"===t)return n-i;throw"Invalid alignment"},c=function(t){return c.e=c.e||h("div"),c.e.text(t).html()},r=function(){function t(t,i,e){"string"==typeof e&&(e={className:e}),this.options=g(N,n.isPlainObject(e)?e:{}),this.loadHTML(),this.wrapper=n(a.html),this.options.clickToHide&&this.wrapper.addClass(""+P+"-hidable"),this.wrapper.data(P,this),this.arrow=this.wrapper.find("."+P+"-arrow"),this.container=this.wrapper.find("."+P+"-container"),this.container.append(this.userContainer),t&&t.length&&(this.elementType=t.attr("type"),this.originalElement=t,this.elem=d(t),this.elem.data(P,this),this.elem.before(this.wrapper)),this.container.hide(),this.run(i)}return t.prototype.loadHTML=function(){var t;return t=this.getStyle(),this.userContainer=n(t.html),this.userFields=t.fields},t.prototype.show=function(t,i){var n,r,o,s,a,h=this;if(r=function(){return t||h.elem||h.destroy(),i?i():e},a=this.container.parent().parents(":hidden").length>0,o=this.container.add(this.arrow),n=[],a&&t)s="show";else if(a&&!t)s="hide";else if(!a&&t)s=this.options.showAnimation,n.push(this.options.showDuration);else{if(a||t)return r();s=this.options.hideAnimation,n.push(this.options.hideDuration)}return n.push(r),o[s].apply(o,n)},t.prototype.setGlobalPosition=function(){var t,i,e,r,o,s,a,l;return l=this.getPosition(),a=l[0],s=l[1],o=k[a],t=k[s],r=a+"|"+s,i=m[r],i||(i=m[r]=h("div"),e={},e[o]=0,"middle"===t?e.top="45%":"center"===t?e.left="45%":e[t]=0,i.css(e).addClass(""+P+"-corner"),n("body").append(i)),i.prepend(this.wrapper)},t.prototype.setElementPosition=function(){var t,i,r,o,s,a,h,l,c,u,p,d,f,m,g,b,S,P,C,N,T,A,z,D,E,L,O,I,W;for(z=this.getPosition(),N=z[0],P=z[1],C=z[2],p=this.elem.position(),l=this.elem.outerHeight(),d=this.elem.outerWidth(),c=this.elem.innerHeight(),u=this.elem.innerWidth(),D=this.wrapper.position(),s=this.container.height(),a=this.container.width(),m=k[N],b=x[N],S=k[b],h={},h[S]="b"===N?l:"r"===N?d:0,y(h,"top",p.top-D.top),y(h,"left",p.left-D.left),W=["top","left"],E=0,O=W.length;O>E;E++)T=W[E],g=parseInt(this.elem.css("margin-"+T),10),g&&y(h,T,g);if(f=Math.max(0,this.options.gap-(this.options.arrowShow?r:0)),y(h,S,f),this.options.arrowShow){for(r=this.options.arrowSize,i=n.extend({},h),t=this.userContainer.css("border-color")||this.userContainer.css("background-color")||"white",L=0,I=v.length;I>L;L++)T=v[L],A=k[T],T!==b&&(o=A===m?t:"transparent",i["border-"+A]=""+r+"px solid "+o);y(h,k[b],r),j.call(v,P)>=0&&y(i,k[P],2*r)}else this.arrow.hide();return j.call(M,N)>=0?(y(h,"left",H(P,a,d)),i&&y(i,"left",H(P,r,u))):j.call(w,N)>=0&&(y(h,"top",H(P,s,l)),i&&y(i,"top",H(P,r,c))),this.container.is(":visible")&&(h.display="block"),this.container.removeAttr("style").css(h),i?this.arrow.removeAttr("style").css(i):e},t.prototype.getPosition=function(){var t,i,n,e,r,o,s,a;if(i=this.options.position||(this.elem?this.options.elementPosition:this.options.globalPosition),t=S(i),0===t.length&&(t[0]="b"),n=t[0],0>j.call(v,n))throw"Must be one of ["+v+"]";return(1===t.length||(e=t[0],j.call(M,e)>=0&&(r=t[1],0>j.call(w,r)))||(o=t[0],j.call(w,o)>=0&&(s=t[1],0>j.call(M,s))))&&(t[1]=(a=t[0],j.call(w,a)>=0?"m":"l")),2===t.length&&(t[2]=t[1]),t},t.prototype.getStyle=function(t){var i;if(t||(t=this.options.style),t||(t="default"),i=A[t],!i)throw"Missing style: "+t;return i},t.prototype.updateClasses=function(){var t,i;return t=["base"],n.isArray(this.options.className)?t=t.concat(this.options.className):this.options.className&&t.push(this.options.className),i=this.getStyle(),t=n.map(t,function(t){return""+P+"-"+i.name+"-"+t}).join(" "),this.userContainer.attr("class",t)},t.prototype.run=function(t,i){var r,o,a,h,l,p=this;if(n.isPlainObject(i)?n.extend(this.options,i):"string"===n.type(i)&&(this.options.className=i),this.container&&!t)return this.show(!1),e;if(this.container||t){o={},n.isPlainObject(t)?o=t:o[s]=t;for(a in o)r=o[a],h=this.userFields[a],h&&("text"===h&&(r=c(r),this.options.breakNewLines&&(r=r.replace(/\n/g,"<br/>"))),l=a===s?"":"="+a,u(this.userContainer,"[data-notify-"+h+l+"]").html(r));return this.updateClasses(),this.elem?this.setElementPosition():this.setGlobalPosition(),this.show(!0),this.options.autoHide?(clearTimeout(this.autohideTimer),this.autohideTimer=setTimeout(function(){return p.show(!1)},this.options.autoHideDelay)):e}},t.prototype.destroy=function(){return this.wrapper.remove()},t}(),n[C]=function(t,i,e){return t&&t.nodeName||t.jquery?n(t)[C](i,e):(e=i,i=t,new r(null,i,e)),t},n.fn[C]=function(t,i){return n(this).each(function(){var e;return e=d(n(this)).data(P),e?e.run(t,i):new r(n(this),t,i)}),this},n.extend(n[C],{defaults:l,addStyle:o,pluginOptions:N,getStyle:f,insertCSS:b}),n(function(){return b(a.css).attr("id","core-notify"),n(i).on("click","."+P+"-hidable",function(){return n(this).trigger("notify-hide")}),n(i).on("notify-hide","."+P+"-wrapper",function(){var t;return null!=(t=n(this).data(P))?t.show(!1):void 0})})})(window,document,jQuery);;
(function ($) {
$.notify.addStyle("metro", {
    html:
        "<div>" +
            "<div class='image' data-notify-html='image'/>" +
            "<div class='text-wrapper'>" +
                "<div class='title' data-notify-html='title'/>" +
                "<div class='text' data-notify-html='text'/>" +
            "</div>" +
        "</div>",
    classes: {
        error: {
            "color": "#fafafa !important",
            "background-color": "#F71919",
            "border": "1px solid #FF0026"
        },
        success: {
            "background-color": "#5CB85C",
            "border": "1px solid #4DB149",
            "color": '#fff'
        },
        info: {
            "color": "#fafafa !important",
            "background-color": "#1E90FF",
            "border": "1px solid #1E90FF"
        },
        warning: {
            "background-color": "#FAFA47",
            "border": "1px solid #EEEE45"
        },
        black: {
            "color": "#fafafa !important",
            "background-color": "#333",
            "border": "1px solid #000"
        },
        white: {
            "background-color": "#f1f1f1",
            "border": "1px solid #ddd"
        }
    }
});
})(jQuery);;
/*! nouislider - 8.0.2 - 2015-07-06 13:22:09 */

!function(a){if("function"==typeof define&&define.amd)define([],a);else if("object"==typeof exports){var b=require("fs");module.exports=a(),module.exports.css=function(){return b.readFileSync(__dirname+"/nouislider.min.css","utf8")}}else window.noUiSlider=a()}(function(){"use strict";function a(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function b(a,b){return Math.round(a/b)*b}function c(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.defaultView||c.parentWindow,e=c.documentElement,f=d.pageXOffset;return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f=0),{top:b.top+d.pageYOffset-e.clientTop,left:b.left+f-e.clientLeft}}function d(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function e(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function f(a,b,c){j(a,b),setTimeout(function(){k(a,b)},c)}function g(a){return Math.max(Math.min(a,100),0)}function h(a){return Array.isArray(a)?a:[a]}function i(a){var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function k(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function l(a,b){a.classList?a.classList.contains(b):new RegExp("(^| )"+b+"( |$)","gi").test(a.className)}function m(a,b){return 100/(b-a)}function n(a,b){return 100*b/(a[1]-a[0])}function o(a,b){return n(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function p(a,b){return b*(a[1]-a[0])/100+a[0]}function q(a,b){for(var c=1;a>=b[c];)c+=1;return c}function r(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=q(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+o([d,e],c)/m(f,g)}function s(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=q(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],p([d,e],(c-f)*m(f,g))}function t(a,c,d,e){if(100===e)return e;var f,g,h=q(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function u(a,b,c){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!d(e)||!d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(e),c.xVal.push(b[0]),e?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1])}function v(a,b,c){return b?void(c.xSteps[a]=n([c.xVal[a],c.xVal[a+1]],b)/m(c.xPct[a],c.xPct[a+1])):!0}function w(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)u(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)v(e,this.xNumSteps[e],this)}function x(a,b){if(!d(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function y(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");a.spectrum=new w(b,a.snap,a.dir,a.singleStep)}function z(a,b){if(b=h(b),!Array.isArray(b)||!b.length||b.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length,a.start=b}function A(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function B(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function C(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function D(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(a,b){if(!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function F(a,b){if(!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function G(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function H(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function I(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function J(a){var b,c={margin:0,limit:0,animate:!0,format:U};b={step:{r:!1,t:x},start:{r:!0,t:z},connect:{r:!0,t:C},direction:{r:!0,t:G},snap:{r:!1,t:A},animate:{r:!1,t:B},range:{r:!0,t:y},orientation:{r:!1,t:D},margin:{r:!1,t:E},limit:{r:!1,t:F},behaviour:{r:!0,t:H},format:{r:!1,t:I}};var d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"};return Object.keys(d).forEach(function(b){void 0===a[b]&&(a[b]=d[b])}),Object.keys(b).forEach(function(d){var e=b[d];if(void 0===a[d]){if(e.r)throw new Error("noUiSlider: '"+d+"' is required.");return!0}e.t(c,a[d])}),c.pips=a.pips,c.style=c.ort?"top":"left",c}function K(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[g(d),g(e)]):[d,e]}function L(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e||f,g}function M(a,b){var c=document.createElement("div"),d=document.createElement("div"),e=["-lower","-upper"];return a&&e.reverse(),j(d,T[3]),j(d,T[3]+e[b]),j(c,T[2]),c.appendChild(d),c}function N(a,b,c){switch(a){case 1:j(b,T[7]),j(c[0],T[6]);break;case 3:j(c[1],T[6]);case 2:j(c[0],T[7]);case 0:j(b,T[6])}}function O(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(c.appendChild(M(b,d)));return e}function P(a,b,c){j(c,T[0]),j(c,T[8+a]),j(c,T[4+b]);var d=document.createElement("div");return j(d,T[1]),c.appendChild(d),d}function Q(b,d){function e(a,b,c){if("range"===a||"steps"===a)return M.xVal;if("count"===a){var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return M.fromStepping(c?M.getStep(a):a)}):"values"===a?c?b.map(function(a){return M.fromStepping(M.getStep(M.toStepping(a)))}):b:void 0}function m(b,c,d){var e=M.direction,f={},g=M.xVal[0],h=M.xVal[M.xVal.length-1],i=!1,j=!1,k=0;return M.direction=0,d=a(d.slice().sort(function(a,b){return a-b})),d[0]!==g&&(d.unshift(g),i=!0),d[d.length-1]!==h&&(d.push(h),j=!0),d.forEach(function(a,e){var g,h,l,m,n,o,p,q,r,s,t=a,u=d[e+1];if("steps"===c&&(g=M.xNumSteps[e]),g||(g=u-t),t!==!1&&void 0!==u)for(h=t;u>=h;h+=g){for(m=M.toStepping(h),n=m-k,q=n/b,r=Math.round(q),s=n/r,l=1;r>=l;l+=1)o=k+l*s,f[o.toFixed(5)]=["x",0];p=d.indexOf(h)>-1?1:"steps"===c?2:0,!e&&i&&(p=0),h===u&&j||(f[m.toFixed(5)]=[h,p]),k=m}}),M.direction=e,f}function n(a,b,c){function e(a){return["-normal","-large","-sub"][a]}function f(a,b,c){return'class="'+b+" "+b+"-"+h+" "+b+e(c[1])+'" style="'+d.style+": "+a+'%"'}function g(a,d){M.direction&&(a=100-a),d[1]=d[1]&&b?b(d[0],d[1]):d[1],i.innerHTML+="<div "+f(a,"noUi-marker",d)+"></div>",d[1]&&(i.innerHTML+="<div "+f(a,"noUi-value",d)+">"+c.to(d[0])+"</div>")}var h=["horizontal","vertical"][d.ort],i=document.createElement("div");return j(i,"noUi-pips"),j(i,"noUi-pips-"+h),Object.keys(a).forEach(function(b){g(b,a[b])}),i}function o(a){var b=a.mode,c=a.density||1,d=a.filter||!1,f=a.values||!1,g=a.stepped||!1,h=e(b,f,g),i=m(c,b,h),j=a.format||{to:Math.round};return I.appendChild(n(i,d,j))}function p(){return G["offset"+["Width","Height"][d.ort]]}function q(a,b){void 0!==b&&(b=Math.abs(b-d.dir)),Object.keys(R).forEach(function(c){var d=c.split(".")[0];a===d&&R[c].forEach(function(a){a(h(B()),b,r(Array.prototype.slice.call(Q)))})})}function r(a){return 1===a.length?a[0]:d.dir?a.reverse():a}function s(a,b,c,e){var f=function(b){return I.hasAttribute("disabled")?!1:l(I,T[14])?!1:(b=L(b),a===S.start&&void 0!==b.buttons&&b.buttons>1?!1:(b.calcPoint=b.points[d.ort],void c(b,e)))},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,!1),g.push([a,f])}),g}function t(a,b){var c,d,e=b.handles||H,f=!1,g=100*(a.calcPoint-b.start)/p(),h=e[0]===H[0]?0:1;if(c=K(g,b.positions,e.length>1),f=y(e[0],c[h],1===e.length),e.length>1){if(f=y(e[1],c[h?0:1],!1)||f)for(d=0;d<b.handles.length;d++)q("slide",d)}else f&&q("slide",h)}function u(a,b){var c=G.getElementsByClassName(T[15]),d=b.handles[0]===H[0]?0:1;c.length&&k(c[0],T[15]),a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var e=document.documentElement;e.noUiListeners.forEach(function(a){e.removeEventListener(a[0],a[1])}),k(I,T[12]),q("set",d),q("change",d)}function v(a,b){var c=document.documentElement;if(1===b.handles.length&&(j(b.handles[0].children[0],T[15]),b.handles[0].hasAttribute("disabled")))return!1;a.stopPropagation();var d=s(S.move,c,t,{start:a.calcPoint,handles:b.handles,positions:[J[0],J[H.length-1]]}),e=s(S.end,c,u,{handles:b.handles});if(c.noUiListeners=d.concat(e),a.cursor){document.body.style.cursor=getComputedStyle(a.target).cursor,H.length>1&&j(I,T[12]);var f=function(){return!1};document.body.noUiListener=f,document.body.addEventListener("selectstart",f,!1)}}function w(a){var b,e,g=a.calcPoint,h=0;return a.stopPropagation(),H.forEach(function(a){h+=c(a)[d.style]}),b=h/2>g||1===H.length?0:1,g-=c(G)[d.style],e=100*g/p(),d.events.snap||f(I,T[14],300),H[b].hasAttribute("disabled")?!1:(y(H[b],e),q("slide",b),q("set",b),q("change",b),void(d.events.snap&&v(a,{handles:[H[h]]})))}function x(a){var b,c;if(!a.fixed)for(b=0;b<H.length;b+=1)s(S.start,H[b].children[0],v,{handles:[H[b]]});a.tap&&s(S.start,G,w,{handles:H}),a.drag&&(c=[G.getElementsByClassName(T[7])[0]],j(c[0],T[10]),a.fixed&&c.push(H[c[0]===H[0]?1:0].children[0]),c.forEach(function(a){s(S.start,a,v,{handles:H})}))}function y(a,b,c){var e=a!==H[0]?1:0,f=J[0]+d.margin,h=J[1]-d.margin,i=J[0]+d.limit,l=J[1]-d.limit;return H.length>1&&(b=e?Math.max(b,f):Math.min(b,h)),c!==!1&&d.limit&&H.length>1&&(b=e?Math.min(b,i):Math.max(b,l)),b=M.getStep(b),b=g(parseFloat(b.toFixed(7))),b===J[e]?!1:(a.style[d.style]=b+"%",a.previousSibling||(k(a,T[17]),b>50&&j(a,T[17])),J[e]=b,Q[e]=M.fromStepping(b),q("update",e),!0)}function z(a,b){var c,e,f;for(d.limit&&(a+=1),c=0;a>c;c+=1)e=c%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=d.format.from(f),(f===!1||isNaN(f)||y(H[e],M.toStepping(f),c===3-d.dir)===!1)&&q("update",e))}function A(a){var b,c,e=h(a);for(d.dir&&d.handles>1&&e.reverse(),d.animate&&-1!==J[0]&&f(I,T[14],300),b=H.length>1?3:1,1===e.length&&(b=1),z(b,e),c=0;c<H.length;c++)q("set",c)}function B(){var a,b=[];for(a=0;a<d.handles;a+=1)b[a]=d.format.to(Q[a]);return r(b)}function C(){T.forEach(function(a){a&&k(I,a)}),I.innerHTML="",delete I.noUiSlider}function D(){var a=J.map(function(a,b){var c=M.getApplicableStep(a),d=i(String(c[2])),e=Q[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),h=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[h,f]});return r(a)}function E(a,b){R[a]=R[a]||[],R[a].push(b),"update"===a.split(".")[0]&&H.forEach(function(a,b){q("update",b)})}function F(a){var b=a.split(".")[0],c=a.substring(b.length);Object.keys(R).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete R[a]})}var G,H,I=b,J=[-1,-1],M=d.spectrum,Q=[],R={};if(I.noUiSlider)throw new Error("Slider was already initialized.");return G=P(d.dir,d.ort,I),H=O(d.handles,d.dir,G),N(d.connect,I,H),x(d.events),d.pips&&o(d.pips),{destroy:C,steps:D,on:E,off:F,get:B,set:A}}function R(a,b){if(!a.nodeName)throw new Error("noUiSlider.create requires a single element.");var c=J(b,a),d=Q(a,c);d.set(c.start),a.noUiSlider=d}var S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},T=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];w.prototype.getMargin=function(a){return 2===this.xPct.length?n(this.xVal,a):!1},w.prototype.toStepping=function(a){return a=r(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},w.prototype.fromStepping=function(a){return this.direction&&(a=100-a),e(s(this.xVal,this.xPct,a))},w.prototype.getStep=function(a){return this.direction&&(a=100-a),a=t(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},w.prototype.getApplicableStep=function(a){var b=q(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},w.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var U={to:function(a){return a.toFixed(2)},from:Number};return{create:R}});;
/*
 * jQuery UI Widget 1.10.1+amd
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */

(function (factory) {
    if (typeof define === "function" && define.amd) {
        // Register as an anonymous AMD module:
        define(["jquery"], factory);
    } else {
        // Browser globals:
        factory(jQuery);
    }
}(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( value === undefined ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( value === undefined ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

}));
;
/*
 * jQuery Iframe Transport Plugin 1.6.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, nomen: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts three additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            var form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // javascript:false as initial iframe src
                    // prevents warning popups on HTTPS in IE6.
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    iframe = $(
                        '<iframe src="javascript:false;" name="iframe-transport-' +
                            (counter += 1) + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="javascript:false;"></iframe>')
                                    .appendTo(form);
                                form.remove();
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, and script:
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));
;
/*
 * jQuery File Upload Plugin 5.26
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document, File, Blob, FormData, location */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // The FileReader API is not actually used, but works as feature detection,
    // as e.g. Safari supports XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads:
    $.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default the complete document.
            // Set to null to disable paste support:
            pasteZone: $(document),
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uplaods, else
            // once for each file selection.
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows to override plugin options as well as define ajax settings.
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (data.autoUpload || (data.autoUpload !== false &&
                        ($(this).data('blueimp-fileupload') ||
                        $(this).data('fileupload')).options.autoUpload)) {
                    data.submit();
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require a refresh after assigning a new value:
        _refreshOptionsList: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _BitrateTimer: function () {
            this.timestamp = +(new Date());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if (typeof options.formData === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if (options.formData) {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            obj._progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = +(new Date()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger('progress', e, data);
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger('progressall', e, this._progress);
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _initXHRData: function (options) {
            var formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = options.paramName[0];
            options.headers = options.headers || {};
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
                options.contentType = file.type;
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: options.paramName[index] || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (options.formData instanceof FormData) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        options.headers['Content-Disposition'] = 'attachment; filename="' +
                            encodeURI(file.name) + '"';
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // Files are also Blob instances, but some browsers
                            // (Firefox 3.6) support the File API but not Blobs.
                            // This check allows the tests to run with
                            // dummy objects:
                            if ((window.Blob && file instanceof Blob) ||
                                    (window.File && file instanceof File)) {
                                formData.append(
                                    options.paramName[index] || paramName,
                                    file,
                                    file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && $('<a></a>').prop('href', options.url)
                    .prop('host') !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options, 'iframe');
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type || options.form.prop('method') || '')
                .toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the callback arguments:
        _addConvenienceMethods: function (e, data) {
            var that = this;
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger('submit', e, this) !== false) &&
                        that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                return this._getXHRPromise();
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
            };
            data.progress = function () {
                return this._progress;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes = options.uploadedBytes || 0,
                mcs = options.maxChunkSize || fs,
                slice = file.slice || file.webkitSlice || file.mozSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = 'Uploaded bytes exceed file size';
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (o._progress.loaded === currentLoaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            if (!data._progress) {
                data._progress = {};
            }
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            options.result = result;
            options.textStatus = textStatus;
            options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            options.jqXHR = jqXHR;
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._active -= 1;
            this._trigger('always', null, options);
            if (this._active === 0) {
                // The stop callback is triggered when all uploads have
                // been completed, equivalent to the global ajaxStop event:
                this._trigger('stop');
            }
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger('send', e, options) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._sending -= 1;
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    pipe = (this._sequence = this._sequence.pipe(send, send));
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                limit = options.limitMultiFileUploads,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i;
            if (!(options.singleFileUploads || limit) ||
                    !this._isXHRUpload(options)) {
                fileSet = [data.files];
                paramNameSet = [paramName];
            } else if (!options.singleFileUploads && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < data.files.length; i += limit) {
                    fileSet.push(data.files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = data.files;
            $.each(fileSet || data.files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger('add', e, newData);
                return result;
            });
            return result;
        },

        _replaceFileInput: function (input) {
            var inputClone = input.clone(true);
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                dirReader;
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                dirReader.readEntries(function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                }, errorHandler);
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data.fileInput);
                }
                if (that._trigger('change', e, data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var cbd = e.originalEvent.clipboardData,
                items = (cbd && cbd.items) || [],
                data = {files: []};
            $.each(items, function (index, item) {
                var file = item.getAsFile && item.getAsFile();
                if (file) {
                    data.files.push(file);
                }
            });
            if (this._trigger('paste', e, data) === false ||
                    this._onAdd(e, data) === false) {
                return false;
            }
        },

        _onDrop: function (e) {
            var that = this,
                dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
            }
            this._getDroppedFiles(dataTransfer).always(function (files) {
                data.files = files;
                if (that._trigger('drop', e, data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onDragOver: function (e) {
            var dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer;
            if (this._trigger('dragover', e) === false) {
                return false;
            }
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1) {
                dataTransfer.dropEffect = 'copy';
                e.preventDefault();
            }
        },

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            this._on(this.options.fileInput, {
                change: this._onChange
            });
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var refresh = $.inArray(key, this._refreshOptionsList) !== -1;
            if (refresh) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (refresh) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _create: function () {
            var options = this.options;
            // Initialize options set via HTML5 data-attributes:
            $.extend(options, $(this.element[0].cloneNode(false)).data());
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data).then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));
;
(function($) {
    $(function(){
        // Initialize the jQuery File Upload plugin
        $('.upload').each(function(){
            var $this = $(this);
            var $_id = $(this).attr('data-id');
            $(this).fileupload({
                add: function (e, data) {
                    var $_id = data.form[0].id;
                    $('#gva-' + $_id + ' .loading').each(function(){
                            $(this).css('display', 'inline-block'); 
                    });
                    var jqXHR = data.submit().done(function(data){
                        data = JSON.parse(data);
                        $('#gva-' + $_id + ' .loading').each(function(){
                            $(this).css('display', 'none'); 
                        });
                        $('#gva-' + $_id + ' input.file-input').each(function(){
                            $(this).val(data['file_url']); 
                        });

                        $('#gavias_slider_single').css('background-image', 'url(\'' + data['file_url_full'] + '\')');

                        $('#gva-' + $_id + ' .gavias-field-upload-remove').each(function(){
                            $(this).css('display', 'inline-block');
                        });

                    });
                },

                progress: function(e, data){
                
                },
                fail: function(e, data){
                    // Something has gone wrong!
                    data.context.addClass('error');
                }
            });
        });

        $('.upload-image-layer').each(function(){
            var $this = $(this);
            var $_id = $(this).attr('data-id');
            $(this).fileupload({
                add: function (e, data) {

                    var $_id = data.form[0].id;

                    $('#gva-' + $_id + ' .loading').each(function(){
                            $(this).css('display', 'inline-block'); 
                    });
                    var jqXHR = data.submit().done(function(data){
                        data = JSON.parse(data);
                        $('#gva-' + $_id + ' .loading').each(function(){
                            $(this).css('display', 'none'); 
                        });
                        $('#gva-' + $_id + ' input.file-input').each(function(){
                            $(this).val(data['file_url']); 
                            $('#g-image-layer').trigger('onchange');
                        });
                    });
                },

                progress: function(e, data){
                
                },
                fail: function(e, data){
                    // Something has gone wrong!
                    data.context.addClass('error');
                }
            });
        });

        // Helper function that formats the file sizes
        function formatFileSize(bytes) {
            if (typeof bytes !== 'number') {
                return '';
            }

            if (bytes >= 1000000000) {
                return (bytes / 1000000000).toFixed(2) + ' GB';
            }

            if (bytes >= 1000000) {
                return (bytes / 1000000).toFixed(2) + ' MB';
            }

            return (bytes / 1000).toFixed(2) + ' KB';
        }

    });

    $(document).ready(function () {
        //Gavias Load Images
        function gavias_sliderlayer_load_images($btn, $btn_choose_image){
            $($btn).click(function(){
                $this = $(this);
                $.ajax({
                 url: drupalSettings.gavias_sliderlayer.get_images_upload_url,
                 type: 'POST',
                 success: function (data) {
                    
                    var html = '';
                    $.each(data['data'], function( index, value ) {
                        if(value['file_url_full'] != 'undefined' || value['file_url_full']){
                            html += '<a data-image="'+value['file_url']+'" data-image-demo="'+value['file_url_full']+'" class="'+$btn_choose_image+'" ><img src="'+value['file_url_full']+'"/></a>';
                        }
                    });
                   $this.parents('.gva-upload-image').find('.gavias-box-images .gavias-box-images-inner .list-images').each(function(){
                        $(this).html(html);
                        $(this).parents('.gavias-box-images').addClass('open-popup');
                    })
                },
                 error: function (jqXHR, textStatus, errorThrown) {
                   alert(textStatus + ":" + jqXHR.responseText);
                 }
              });
            });  
        }

        //Gavias Choose Image Slider
        function gavias_sliderlayer_choose_image_slider(){

            $( ".gva-upload-image" ).delegate( ".btn-choose-image-upload", "click", function() {
                var file_url = $(this).attr('data-image');
                var file_url_full = $(this).attr('data-image-demo');
                $(this).parents('.gva-upload-image').find('input.file-input').each(function(){
                    $(this).val(file_url); 
                });

                $('#gavias_slider_single').css('background-image', 'url(\'' + file_url_full + '\')');

                $(this).parents('.gavias-box-images').removeClass('open-popup');
            });


            $('.gva-upload-image .close').click(function(){
                $(this).parents('.gavias-box-images').removeClass('open-popup');
            });
        }

        //Gavias Choose Image Layer
        function gavias_sliderlayer_choose_image_layer(){

            $( ".gva-upload-image-layer" ).delegate( ".btn-choose-image-upload-layer", "click", function() {
                var file_url = $(this).attr('data-image');
                var file_url_full = $(this).attr('data-image-demo');
                $(this).parents('.gva-upload-image').find('input.file-input').each(function(){
                    $(this).val(file_url); 
                });

                $('#g-image-layer').trigger('onchange');

                $(this).parents('.gavias-box-images').removeClass('open-popup');
            });


            $('.gva-upload-image .close').click(function(){
                $(this).parents('.gavias-box-images').removeClass('open-popup');
            });
        }



        gavias_sliderlayer_load_images('.btn-get-images-upload', 'btn-choose-image-upload');
        gavias_sliderlayer_load_images('.btn-get-images-upload-layer', 'btn-choose-image-upload-layer');
        gavias_sliderlayer_choose_image_slider();
        gavias_sliderlayer_choose_image_layer();
    });

    $(document).ready(function(){
        $('.gavias-field-upload-remove').click(function(){
          $(this).parent().find('.gavias-image-demo').attr('src', $(this).attr("data-src"));
          $(this).parent().find('input.file-input').val('');
        })
    });

})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + window.location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span> <span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', height + 'px');

              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', newHeight + 'px');
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target),d=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&d.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var c=a(b.target).closest(".ui-menu-item"),d=a(b.currentTarget);c[0]===d[0]&&(this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(b,d))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){var c=!a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]));c&&this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){var b=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),c=b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),c.children().each(function(){var b=a(this);b.data("ui-menu-submenu-caret")&&b.remove()})},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",f=!1,e=b.keyCode>=96&&b.keyCode<=105?(b.keyCode-96).toString():String.fromCharCode(b.keyCode),clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c,d,e,f,g=this,h=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),d=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.prev(),d=a("<span>").data("ui-menu-submenu-caret",!0);g._addClass(d,"ui-menu-icon","ui-icon "+h),c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),this._addClass(d,"ui-menu","ui-widget ui-widget-content ui-front"),b=i.add(this.element),c=b.find(this.options.items),c.not(".ui-menu-item").each(function(){var b=a(this);g._isDivider(b)&&g._addClass(b,"ui-menu-divider","ui-widget-content")}),e=c.not(".ui-menu-item, .ui-menu-divider"),f=e.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(e,"ui-menu-item")._addClass(f,"ui-menu-item-wrapper"),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",String(a)),this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){var c,d,e;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),e=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(e,null,"ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=f||!g&&this._isContentEditable(this.element),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==a.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(b,c){var d,e;return this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)})):(e=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",b,{item:e})&&b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(e.value),d=c.item.attr("aria-label")||e.value,void(d&&a.trim(d).length&&(this.liveRegion.children().hide(),a("<div>").text(d).appendTo(this.liveRegion))))},menuselect:function(b,c){var d=c.item.data("ui-autocomplete-item"),e=this.previous;this.element[0]!==a.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=e,this._delay(function(){this.previous=e,this.selectedItem=d})),!1!==this._trigger("select",b,{item:d})&&this._value(d.value),this.term=this._value(),this.close(b),this.selectedItem=d}}),this.liveRegion=a("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(b){var c=this.menu.element[0];return b.target===this.element[0]||b.target===c||a.contains(c,b.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front, dialog")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;b&&(!b||c||d)||(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var b=++this.requestIndex;return a.proxy(function(a){b===this.requestIndex&&this.__response(a),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({},b,{label:b.label||b.value,value:b.value||b.label})})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<div>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),b.preventDefault())},_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(b){var c;this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),a("<div>").text(c).appendTo(this.liveRegion))}}),a.ui.autocomplete});;
/**
 * @file
 * Behaviors for the search widget in the admin toolbar.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.adminToolbarSearch = {

    // If extra links have been fetched.
    extraFetched: false,

    attach: function (context) {
      if (context != document) {
        return;
      }

      var getUrl = window.location;
      var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
      var $self = this;
      this.links = [];
      $('.toolbar-tray a[data-drupal-link-system-path]').each(function () {
        if (this.href != baseUrl) {
          var label = $self.getItemLabel(this);
          $self.links.push({
            'value': $(this).attr('href'),
            'label': label + ' ' + $(this).attr('href'),
            'labelRaw': label
          });
        }
      });

      $("#admin-toolbar-search-input").autocomplete({
        minLength: 2,
        source: function (request, response) {
          var data = $self.handleAutocomplete(request.term);
          if (!$self.extraFetched && drupalSettings.adminToolbarSearch.loadExtraLinks) {
            $.getJSON( "/admin/admin-toolbar-search", function( data ) {
              $(data).each(function() {
                var item = this;
                item.label = this.labelRaw + ' ' + this.value;
                $self.links.push(item);
              });

              $self.extraFetched = true;

              var results = $self.handleAutocomplete(request.term);
              response(results);
            });
          }
          else {
            response(data);
          }
        },
        open: function () {
          var zIndex = $('#toolbar-item-administration-search-tray')
            .css("z-index") + 1;
          $(this).autocomplete('widget').css('z-index', zIndex);

          return false;
        },
        select: function (event, ui) {
          if (ui.item.value) {
            location.href = ui.item.value;
            return false;
          }
        }
      }).data("ui-autocomplete")._renderItem = (function (ul, item) {
        return $("<li>")
          .append('<div>' + item.labelRaw + ' <span class="admin-toolbar-search-url">' + item.value + '</span></div>')
          .appendTo(ul);
      });

      // Focus on search field when tab is clicked, or enter is pressed.
      $(context).find('#toolbar-item-administration-search')
        .once('admin_toolbar_search')
        .each(function () {
          if (Drupal.behaviors.adminToolbarSearch.isSearchVisible()) {
            $('#admin-toolbar-search-input').focus();
          }
          $(this).on('click', function () {
            $self.focusOnSearchElement();
          });
        });

      // Initialize hotkey / keyboard shortcut.
      this.initHotkey();
    },
    focusOnSearchElement: function () {
      var waitforVisible = function () {
        if ($('#toolbar-item-administration-search-tray:visible').length) {
          $('#admin-toolbar-search-input').focus();
        }
        else {
          setTimeout(function () {
            waitforVisible();
          }, 1);
        }
      };
      waitforVisible();
    },
    getItemLabel: function (item) {
      var breadcrumbs = [];
      $(item).parents().each(function () {
        if ($(this).hasClass('menu-item')) {
          var $link = $(this).find('a:first');
          if ($link.length && !$link.hasClass('admin-toolbar-search-ignore')) {
            breadcrumbs.unshift($link.text());
          }
        }
      });
      return breadcrumbs.join(' > ');
    },
    handleAutocomplete: function (term) {
      var $self = this;
      var keywords = term.split(" "); // Split search terms into list.

      var suggestions = [];
      $self.links.forEach(function (element) {
        var label = element.label.toLowerCase();

        // Add exact matches.
        if (label.indexOf(term.toLowerCase()) >= 0) {
          suggestions.push(element);
        }
        else {
          // Add suggestions where it matches all search terms.
          var matchCount = 0;
          keywords.forEach(function (keyword) {
            if (label.indexOf(keyword.toLowerCase()) >= 0) {
              matchCount++;
            }
          });
          if (matchCount == keywords.length) {
            suggestions.push(element);
          }
        }
      });
      return suggestions;
    },
    /**
     * Whether the search is visible or not.
     *
     * @returns {boolean}
     *   True if visible, false otherwise.
     */
    isSearchVisible: function () {
      return $('#toolbar-item-administration-search-tray').is(':visible');
    },
    /**
     * Toggles the toolbar search tray.
     */
    toggleSearch: function () {
      $('#toolbar-item-administration-search').trigger('click');
    },
    /**
     * Binds a keyboard shortcut to toggle the search.
     */
    initHotkey: function () {
      $(document)
        .once('admin_toolbar_search')
        .keydown(function (event) {
          // Show the form with alt + S.
          if (!Drupal.behaviors.adminToolbarSearch.isSearchVisible()) {
            // 83 = s.
            if (event.altKey === true && event.keyCode === 83) {
              Drupal.behaviors.adminToolbarSearch.toggleSearch();
              event.preventDefault();
            }
          }
          // Hide the search with alt + S or ESC.
          else {
            // 83 = s.
            if (
              (event.altKey === true && event.keyCode === 83) ||
              event.key === 'Escape'
            ) {
              Drupal.behaviors.adminToolbarSearch.toggleSearch();
              event.preventDefault();
            }
          }
        });
    }
  };

})(jQuery, Drupal);
;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        var close = Drupal.t('Close');
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href="#close" class="joyride-close-tip" aria-label="' + close + '">&times;</a>',
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', {
            '!tour_item': index + 1,
            '!total': total
          });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,

      $tabbableElements: $(),

      $disabledElements: $(),

      released: false,

      active: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      tabbingContext.activate();

      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;

      var $disabledSet = $(':tabbable').not($set);

      tabbingContext.$disabledElements = $disabledSet;

      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);

      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);

        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);

        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);

        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,

      isVisible: false,

      contextualCount: 0,

      tabbingContext: null
    },

    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,

    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();

        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },

        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));

      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

;(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function(ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function(ev,$el,s,cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if ( Math.sqrt( (s.pX-cX)*(s.pX-cX) + (s.pY-cY)*(s.pY-cY) ) < cfg.sensitivity ) {
      $el.off(s.event,track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX; ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX; delete s.pY;
      return cfg.over.apply($el[0],[ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX; s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout( function(){compare(ev, $el, s, cfg);} , cfg.interval );
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function(ev,$el,s,out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0],[ev]);
  };

  $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ( $.isPlainObject(handlerIn) ) {
      cfg = $.extend(cfg, handlerIn);
      if ( !$.isFunction(cfg.out) ) {
        cfg.out = cfg.over;
      }
    } else if ( $.isFunction(handlerOut) ) {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
    } else {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function(e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({},e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent'+instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) { return; }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX; state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove,track).on(mousemove,track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout( function(){compare(ev,$el,state,cfg);} , cfg.interval );
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) { return; }
        // unbind expensive mousemove event
        $el.off(mousemove,track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout( function(){delay(ev,$el,state,cfg.out);} , cfg.timeout );
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
  };
});
;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      $('.toolbar-tray li.menu-item--expanded, .toolbar-tray ul li.menu-item--expanded .menu-item', context).hoverIntent({
        over: function () {
          // At the current depth, we should delete all "hover-intent" classes.
          // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
          $(this).parent().find('li').removeClass('hover-intent');
          $(this).addClass('hover-intent');
        },
        out: function () {
          $(this).removeClass('hover-intent');
        },
        timeout: 250
      });

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

    }
  };
})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);;
(function ($) {
   $.fn.gav_skrollr = function(s) {
      var $w = $(window), 
          loaded, 
          skrollr = this
          th = 200;
       this.one("gav_skrollr", function() {
         s.refresh();
      });
      function gav_skrollr() {
         var inview = skrollr.filter(function() {
           var $e = $(this);
           var wt = $w.scrollTop(),
               wb = wt + $w.height(),
               et = $e.offset().top,
               eb = et + $e.height();

           return eb >= wt - th && et <= wb + th;
         });
         loaded = inview.trigger("gav_skrollr");
         skrollr = skrollr.not(loaded);
      }
      $(window).on("scroll.gav_skrollr", gav_skrollr);
   };
   $(window).on('load', function(){
      setTimeout(function() {
         s = skrollr.init({forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}});
         if($('.skrollable.refresh').length){
            $('.skrollable.refresh').gav_skrollr(s);
         }
      }, 50);
   });
})(jQuery);
;
