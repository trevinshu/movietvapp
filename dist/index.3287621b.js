var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequireec6f;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequireec6f=r),r.register("8vghX",(function(t,e){var n=r("hPtJY"),i=r("kjyEk"),o=r("59kwG"),a=r("ccDAZ");const l=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function s(t){console.log(`[dotenv][DEBUG] ${t}`)}const c={config:function(t){let e=o.resolve(n.cwd(),".env"),r="utf8";const l=Boolean(t&&t.debug),d=Boolean(t&&t.override);var h;t&&(null!=t.path&&(e="~"===(h=t.path)[0]?o.join(a.homedir(),h.slice(1)):h),null!=t.encoding&&(r=t.encoding));try{const t=c.parse(i.readFileSync(e,{encoding:r}));return Object.keys(t).forEach((function(e){Object.prototype.hasOwnProperty.call(n.env,e)?(!0===d&&t[e],l&&s(!0===d?`"${e}" is already defined in \`process.env\` and WAS overwritten`:`"${e}" is already defined in \`process.env\` and was NOT overwritten`)):t[e]})),{parsed:t}}catch(t){return l&&s(`Failed to load ${e} ${t.message}`),{error:t}}},parse:function(t){const e={};let n,r=t.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(n=l.exec(r));){const t=n[1];let r=n[2]||"";r=r.trim();const i=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===i&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),e[t]=r}return e}};t.exports.config=c.config,t.exports.parse=c.parse,t.exports=c})),r.register("hPtJY",(function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],d=!1,h=-1;function u(){d&&s&&(d=!1,s.length?c=s.concat(c):h=-1,c.length&&f())}function f(){if(!d){var t=l(u);d=!0;for(var e=c.length;e;){for(s=c,c=[];++h<e;)s&&s[h].run();h=-1,e=c.length}s=null,d=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new g(t,e)),1!==c.length||d||l(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),r.register("kjyEk",(function(t,e){})),r.register("59kwG",(function(t,e){var n=r("hPtJY");function i(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function o(t,e){for(var n,r="",i=0,o=-1,a=0,l=0;l<=t.length;++l){if(l<t.length)n=t.charCodeAt(l);else{if(47===n)break;n=47}if(47===n){if(o===l-1||1===a);else if(o!==l-1&&2===a){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",i=0):i=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),o=l,a=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=l,a=0;continue}e&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+t.slice(o+1,l):r=t.slice(o+1,l),i=l-o-1;o=l,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var a={resolve:function(){for(var t,e="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var l;a>=0?l=arguments[a]:(void 0===t&&(t=n.cwd()),l=t),i(l),0!==l.length&&(e=l+"/"+e,r=47===l.charCodeAt(0))}return e=o(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(t){if(i(t),0===t.length)return".";var e=47===t.charCodeAt(0),n=47===t.charCodeAt(t.length-1);return 0!==(t=o(t,!e)).length||e||(t="."),t.length>0&&n&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return i(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,e=0;e<arguments.length;++e){var n=arguments[e];i(n),n.length>0&&(void 0===t?t=n:t+="/"+n)}return void 0===t?".":a.normalize(t)},relative:function(t,e){if(i(t),i(e),t===e)return"";if((t=a.resolve(t))===(e=a.resolve(e)))return"";for(var n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var r=t.length,o=r-n,l=1;l<e.length&&47===e.charCodeAt(l);++l);for(var s=e.length-l,c=o<s?o:s,d=-1,h=0;h<=c;++h){if(h===c){if(s>c){if(47===e.charCodeAt(l+h))return e.slice(l+h+1);if(0===h)return e.slice(l+h)}else o>c&&(47===t.charCodeAt(n+h)?d=h:0===h&&(d=0));break}var u=t.charCodeAt(n+h);if(u!==e.charCodeAt(l+h))break;47===u&&(d=h)}var f="";for(h=n+d+1;h<=r;++h)h!==r&&47!==t.charCodeAt(h)||(0===f.length?f+="..":f+="/..");return f.length>0?f+e.slice(l+d):(l+=d,47===e.charCodeAt(l)&&++l,e.slice(l))},_makeLong:function(t){return t},dirname:function(t){if(i(t),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,a=t.length-1;a>=1;--a)if(47===(e=t.charCodeAt(a))){if(!o){r=a;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"//":t.slice(0,r)},basename:function(t,e){if(void 0!==e&&"string"!=typeof e)throw new TypeError('"ext" argument must be a string');i(t);var n,r=0,o=-1,a=!0;if(void 0!==e&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var l=e.length-1,s=-1;for(n=t.length-1;n>=0;--n){var c=t.charCodeAt(n);if(47===c){if(!a){r=n+1;break}}else-1===s&&(a=!1,s=n+1),l>=0&&(c===e.charCodeAt(l)?-1==--l&&(o=n):(l=-1,o=s))}return r===o?o=s:-1===o&&(o=t.length),t.slice(r,o)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){r=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":t.slice(r,o)},extname:function(t){i(t);for(var e=-1,n=0,r=-1,o=!0,a=0,l=t.length-1;l>=0;--l){var s=t.charCodeAt(l);if(47!==s)-1===r&&(o=!1,r=l+1),46===s?-1===e?e=l:1!==a&&(a=1):-1!==e&&(a=-1);else if(!o){n=l+1;break}}return-1===e||-1===r||0===a||1===a&&e===r-1&&e===n+1?"":t.slice(e,r)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var n=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return n?n===e.root?n+r:n+t+r:r}("/",t)},parse:function(t){i(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return e;var n,r=t.charCodeAt(0),o=47===r;o?(e.root="/",n=1):n=0;for(var a=-1,l=0,s=-1,c=!0,d=t.length-1,h=0;d>=n;--d)if(47!==(r=t.charCodeAt(d)))-1===s&&(c=!1,s=d+1),46===r?-1===a?a=d:1!==h&&(h=1):-1!==a&&(h=-1);else if(!c){l=d+1;break}return-1===a||-1===s||0===h||1===h&&a===s-1&&a===l+1?-1!==s&&(e.base=e.name=0===l&&o?t.slice(1,s):t.slice(l,s)):(0===l&&o?(e.name=t.slice(1,a),e.base=t.slice(1,s)):(e.name=t.slice(l,a),e.base=t.slice(l,s)),e.ext=t.slice(a,s)),l>0?e.dir=t.slice(0,l-1):o&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,t.exports=a})),r.register("ccDAZ",(function(t,e){var n,r,i,o,a;n=t.exports,r="homedir",i=()=>a,o=t=>a=t,Object.defineProperty(n,r,{get:i,set:o,enumerable:!0,configurable:!0}),a=function(){return"/"}})),r("8vghX").config();const i="5dba95e581584ef61f28fcb8642f6a9a",o=document.getElementById("trending"),a=document.getElementById("actionMovies"),l=document.getElementById("comedyMovies"),s=document.getElementById("horrorMovies"),c=document.getElementById("romanceMovies"),d=document.getElementById("thrillerMovies"),h=document.getElementById("actionTv"),u=document.getElementById("comedyTv"),f=document.getElementById("documentaryTv"),g=document.getElementById("dramaTv"),p=document.getElementById("familyTv"),v=document.getElementById("kidsTv"),m=document.getElementById("realityTv");!async function(){let t=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${i}`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="trendingItem" data-id="${t.id}" data-type="${t.media_type}">\n            <a href="#" id="viewItem" class="viewItem">\n              <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            </a>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,o.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${i}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28&without_genres=35%2C%2027%2C%2010749%2C%2053`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="movieItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,a.innerHTML=n}))}(),async function(){let t=await fetch(`\n  https://api.themoviedb.org/3/discover/movie?api_key=${i}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35&without_genres=28%2C%2027%2C%2010749%2C%2053`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="movieItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,l.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${i}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27&without_genres=28%2C%2035%2C%2010749%2C%2053`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="movieItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,s.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${i}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749&without_genres=27%2C%20%2053%2C%2028`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="movieItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,c.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${i}&language=en-US&sort_by=popularity.desc&page=1&with_genres=53&without_genres=27%2C%2028%2C%2035%2C%2010749`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="movieItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,d.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=10759&without_genres=35%2C%2099%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,h.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=35&without_genres=10759%2C%2099%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,u.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=99&without_genres=10759%2C%2035%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,f.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=18&without_genres=10759%2C%2035%2C%2099%2C%2010751%2C10762%2C10763%2C10764%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,g.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=10751&without_genres=10759%2C%2035%2C%2099%2C%2018%2C10762%2C10763%2C10764%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,p.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=10762&without_genres=10759%2C%2035%2C%2099%2C%2018%2C%2010751%2C10763%2C10764%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,v.innerHTML=n}))}(),async function(){let t=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${i}&sort_by=popularity.desc&page=1&with_genres=10764&without_genres=10759%2C%2035%2C%2099%2C%2018%2C%2010751%2C10762%2C10767`),e=(await t.json()).results.slice(0,10),n="";e.forEach((t=>{n+=`\n        <div class="tvItem" >\n            <img src='https://image.tmdb.org/t/p/original/${t.backdrop_path}' loading="lazy" alt="movie poster"/>\n            <h4>${t.title?t.title:t.name}</h4>\n        </div>\n     `,m.innerHTML=n}))}(),function(){let t=document.querySelectorAll("#leftButton"),e=document.querySelectorAll("#rightButton");t.forEach((t=>t.addEventListener("click",(t=>{const e=t.target.parentElement;"trending left"===e.dataset.button?(t.preventDefault(),o.scrollLeft-=window.outerWidth):"action left"===e.dataset.button?(t.preventDefault(),a.scrollLeft-=window.outerWidth):"comedy left"===e.dataset.button?(t.preventDefault(),l.scrollLeft-=window.outerWidth):"horror left"===e.dataset.button?(t.preventDefault(),s.scrollLeft-=window.outerWidth):"romance left"===e.dataset.button?(t.preventDefault(),c.scrollLeft-=window.outerWidth):"thriller left"===e.dataset.button?(t.preventDefault(),d.scrollLeft-=window.outerWidth):"action tv left"===e.dataset.button?(t.preventDefault(),h.scrollLeft-=window.outerWidth):"comedy tv left"===e.dataset.button?(t.preventDefault(),u.scrollLeft-=window.outerWidth):"documentary tv left"===e.dataset.button?(t.preventDefault(),f.scrollLeft-=window.outerWidth):"drama tv left"===e.dataset.button?(t.preventDefault(),g.scrollLeft-=window.outerWidth):"family tv left"===e.dataset.button?(t.preventDefault(),p.scrollLeft-=window.outerWidth):"kids tv left"===e.dataset.button?(t.preventDefault(),v.scrollLeft-=window.outerWidth):"reality tv left"===e.dataset.button&&(t.preventDefault(),m.scrollLeft-=window.outerWidth)})))),e.forEach((t=>t.addEventListener("click",(t=>{const e=t.target.parentElement;"trending right"===e.dataset.button?o.scrollLeft+=window.outerWidth:"action right"===e.dataset.button?(t.preventDefault(),a.scrollLeft+=window.outerWidth):"comedy right"===e.dataset.button?(t.preventDefault(),l.scrollLeft+=window.outerWidth):"horror right"===e.dataset.button?(t.preventDefault(),s.scrollLeft+=window.outerWidth):"romance right"===e.dataset.button?(t.preventDefault(),c.scrollLeft+=window.outerWidth):"thriller right"===e.dataset.button?(t.preventDefault(),d.scrollLeft+=window.outerWidth):"action tv right"===e.dataset.button?(t.preventDefault(),h.scrollLeft+=window.outerWidth):"comedy tv right"===e.dataset.button?(t.preventDefault(),u.scrollLeft+=window.outerWidth):"documentary tv right"===e.dataset.button?(t.preventDefault(),f.scrollLeft+=window.outerWidth):"drama tv right"===e.dataset.button?(t.preventDefault(),g.scrollLeft+=window.outerWidth):"family tv right"===e.dataset.button?(t.preventDefault(),p.scrollLeft+=window.outerWidth):"kids tv right"===e.dataset.button?(t.preventDefault(),v.scrollLeft+=window.outerWidth):"reality tv right"===e.dataset.button&&(t.preventDefault(),m.scrollLeft+=window.outerWidth)}))))}();
//# sourceMappingURL=index.3287621b.js.map