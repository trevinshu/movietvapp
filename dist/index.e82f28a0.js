// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bFOAz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dV6cC":[function(require,module,exports) {
require("dotenv").config();
const apiKey = "5dba95e581584ef61f28fcb8642f6a9a";
//Get Containers/Items/Buttons
const trendingContainer = document.getElementById("trending");
const searchContainer = document.getElementById("searchContainer");
const movieContainer = document.querySelectorAll(".movieContainer");
const tvContainer = document.querySelectorAll(".tvContainer");
const actionMovies = document.getElementById("actionMovies");
const comedyMovies = document.getElementById("comedyMovies");
const horrorMovies = document.getElementById("horrorMovies");
const romanceMovies = document.getElementById("romanceMovies");
const thrillerMovies = document.getElementById("thrillerMovies");
const actionTv = document.getElementById("actionTv");
const comedyTv = document.getElementById("comedyTv");
const documentaryTv = document.getElementById("documentaryTv");
const dramaTv = document.getElementById("dramaTv");
const familyTv = document.getElementById("familyTv");
const kidsTv = document.getElementById("kidsTv");
const realityTv = document.getElementById("realityTv");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const toggleColorScheme = document.getElementById("toggleColorScheme");
const button = document.getElementById("colorModeIcon");
let lightMode = localStorage.getItem("lightMode");
const modalContainer = document.getElementById("modalContainer");
let footer = document.getElementById("footer");
const modalInfo = document.getElementById("modalContent");
//Event Listeners
trendingContainer.addEventListener("click", viewSelectedMovieTvItem);
actionTv.addEventListener("click", viewSelectedTvItem);
modalInfo.addEventListener("click", closeModal);
//Enable Light Mode
const enableLightMode = ()=>{
    document.body.classList.add("light");
    button.classList.add("fa-moon");
    button.classList.remove("fa-sun");
    localStorage.setItem("lightMode", "enabled");
};
//Disable Light Mode
const disableLightMode = ()=>{
    document.body.classList.remove("light");
    button.classList.remove("fa-moon");
    button.classList.add("fa-sun");
    localStorage.setItem("lightMode", null);
};
//Load Light Mode If Enabled On Previous Visit
if (lightMode === "enabled") enableLightMode();
//Toggle Light Mode On/Off
toggleColorScheme.addEventListener("click", (e)=>{
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") enableLightMode();
    else disableLightMode();
    e.preventDefault();
});
//Handle Search Click
searchBtn.addEventListener("click", (e)=>{
    const input = searchInput.value;
    getMoviesAndShowsBySearch(input);
    e.preventDefault();
});
//Draw Content For Search Input
async function getMoviesAndShowsBySearch(searchInput1) {
    let response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchInput1}&page=1`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    try {
        if (data.total_results !== 0) results.forEach((item)=>{
            html += `
      <div class="searchItem" data-id="${item.id}" data-type="${item.media_type}">
          <a href="#" id="viewItem" class="viewItem">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : '<h4 class="emptyImgMsg">No Poster Available For This Movie/Show</h4>'}
          </a>
          <h4>${item.title ? item.title : item.name}</h4>
      </div>
    `;
            resultMsg("searchHeading", `Search Results For <span>${searchInput1}</span>:`);
            searchContainer.innerHTML = html;
            removePreLoadedContent();
        });
        else {
            resultMsg("searchHeading", `No Results Found For <span>${searchInput1}</span>:`);
            searchContainer.innerHTML = "";
            removePreLoadedContent();
        }
    } catch (err) {
        console.log(err);
    }
}
//Draw Message For Search Result
function resultMsg(className, msg) {
    let msgContainer = document.getElementById("msgContainer");
    let resultMsg1 = `<h2 class="${className}">${msg}</h2>`;
    msgContainer.innerHTML = resultMsg1;
}
//Remove Pre-Loaded Content For Search Results
function removePreLoadedContent() {
    movieContainer.forEach((movieContainers)=>{
        movieContainers.remove();
    });
    tvContainer.forEach((tvContainers)=>{
        tvContainers.remove();
    });
}
//Get Trending Movies
async function getTrendingMovies() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="trendingItem" data-id="${item.id}" data-type="${item.media_type}">
            <a href="#" id="viewItem" class="viewItem">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This Movie/Show</h4>"}
            </a>
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        trendingContainer.innerHTML = html;
    });
}
getTrendingMovies();
//Function to View Selected Movie/TV Show
function viewSelectedMovieTvItem(e) {
    const imgBtn = e.target.parentElement.parentElement;
    const type = imgBtn.dataset.type;
    const id = imgBtn.dataset.id;
    getInfo(type, id);
    e.preventDefault();
}
//Function to View Selected Movie/TV Show
function viewSelectedTvItem(e) {
    const imgBtn = e.target.parentElement;
    const type = "tv";
    const id = imgBtn.dataset.id;
    getInfo(type, id);
    e.preventDefault();
}
//API Call to Get Movie/Show Info
async function getInfo(type, id) {
    if (type === "tv") {
        let response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`);
        let data = await response.json();
        let responseTwo = await fetch(`https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${apiKey}`);
        let rating = await responseTwo.json();
        let responseThree = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`);
        let cast = await responseThree.json();
        showTvModal(data, rating, cast);
    } else {
        let response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`);
        let data = await response.json();
        let responseTwo = await fetch(`https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${apiKey}`);
        let rating = await responseTwo.json();
        let responseThree = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`);
        let cast = await responseThree.json();
        showTvModal(data, rating, cast);
    }
}
//Close Modal
function closeModal(e) {
    const closeModal1 = e.target.parentElement.parentElement.parentElement.parentElement;
    closeModal1.classList.remove("showModal");
    document.body.style.overflow = "scroll";
    footer.style.visibility = "visible";
    e.preventDefault();
}
//Function to display tv show info in modal
function showTvModal(info, rating, cast) {
    modalContainer.classList.add("showModal");
    document.body.style.overflow = "hidden";
    footer.style.visibility = "hidden";
    console.log(rating);
    let html = `
    <div class="modalHeader">
      <h2>${info.name ? info.name : info.title}</h2>
      <button id="closeModal" class="closeModal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="showTags">
      <p><span>Seasons:</span> ${info.number_of_seasons}</p>
      <p><span>Rating:</span> ${info.vote_average * 10}%</p>
      <p><span>Runtime:</span> ${info.episode_run_time} minutes</p>
      <p><span>Genre:</span>${info.genres.map((tag)=>` ${tag.name}`)}</p>
      <p><span>Content Rating: </span>${rating.results[0].rating}</p>
    </div>
    <div class="innerContent">  
      ${info.poster_path ? `<img src="https://image.tmdb.org/t/p/original/${info.poster_path}" loading="lazy" alt="movie poster" class="poster"/>` : "<h4>No Poster Available For This Movie/Show</h4>"}
      <div class="innerContentInfo">
        <div class="description">
          <h3>Description:</h3>
          <p>${info.overview}</p>
        </div>
        <div class="castContainer">
          <h3>Cast:</h3>
          ${cast.cast.map((tag)=>`<div class="castInfo">${tag.profile_path ? `<img src="https://image.tmdb.org/t/p/original/${tag.profile_path}" loading="lazy" alt="actor photo"/>` : '<h4 class="altText">No Picture Available For This Actor/Actress</h4>'} <h4>${tag.name} as <span>${tag.character}</span></h4></div>`).join(" ")}
        </div>
        <div class="creator">
          <h3>Created By:</h3>
          <p>${info.created_by.map((tag)=>`${tag.name}`).join(" & ")}</p>
        </div>
      </div>
    </div>
  `;
    modalInfo.innerHTML = html;
}
//Get Action Movies
async function getActionMovies() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28&without_genres=35%2C%2027%2C%2010749%2C%2053`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="movieItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This Movie</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        actionMovies.innerHTML = html;
    });
}
getActionMovies();
//Get Comedy Movies
async function getComedyMovies() {
    let response = await fetch(`
  https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35&without_genres=28%2C%2027%2C%2010749%2C%2053`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    try {
        results.forEach((item)=>{
            html += `
        <div class="movieItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This Movie</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
            comedyMovies.innerHTML = html;
        });
    } catch (error) {
        if (results === null) console.log("No Results Found");
    }
}
getComedyMovies();
//Get Horror Movies
async function getHorrorMovies() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27&without_genres=28%2C%2035%2C%2010749%2C%2053`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="movieItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This Movie</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        horrorMovies.innerHTML = html;
    });
}
getHorrorMovies();
//Get Romance Movies
async function getRomanceMovies() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749&without_genres=27%2C%20%2053%2C%2028`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="movieItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This Movie</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        romanceMovies.innerHTML = html;
    });
}
getRomanceMovies();
//Get Thriller Movies
async function getThrillerMovies() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=53&without_genres=27%2C%2028%2C%2035%2C%2010749`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="movieItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This Movie</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        thrillerMovies.innerHTML = html;
    });
}
getThrillerMovies();
//Get Action TV
async function getActionTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10759&without_genres=35%2C%2099%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" data-id="${item.id}">
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        actionTv.innerHTML = html;
    });
}
getActionTv();
//Get Comedy TV
async function getComedyTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=35&without_genres=10759%2C%2099%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        comedyTv.innerHTML = html;
    });
}
getComedyTv();
//Get Documentary TV
async function getDocumentaryTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=99&without_genres=10759%2C%2035%2C%2018%2C%2010751%2C10762%2C10763%2C10764%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        documentaryTv.innerHTML = html;
    });
}
getDocumentaryTv();
//Get Drama TV
async function getDramaTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=18&without_genres=10759%2C%2035%2C%2099%2C%2010751%2C10762%2C10763%2C10764%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        dramaTv.innerHTML = html;
    });
}
getDramaTv();
//Get Family TV
async function getFamilyTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10751&without_genres=10759%2C%2035%2C%2099%2C%2018%2C10762%2C10763%2C10764%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        familyTv.innerHTML = html;
    });
}
getFamilyTv();
//Get Kids TV
async function getKidsTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10762&without_genres=10759%2C%2035%2C%2099%2C%2018%2C%2010751%2C10763%2C10764%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        kidsTv.innerHTML = html;
    });
}
getKidsTv();
//Get Reality TV
async function getRealityTv() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=10764&without_genres=10759%2C%2035%2C%2099%2C%2018%2C%2010751%2C10762%2C10767`);
    let data = await response.json();
    let results = data.results.slice(0, 10);
    let html = "";
    results.forEach((item)=>{
        html += `
        <div class="tvItem" >
            ${item.backdrop_path ? `<img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" loading="lazy" alt="movie poster"/>` : "<h4>No Poster Available For This TV Show</h4>"}
            <h4>${item.title ? item.title : item.name}</h4>
        </div>
     `;
        realityTv.innerHTML = html;
    });
}
getRealityTv();
//Arrow Btn Scroll Carousel
function carousel() {
    let leftBtn = document.querySelectorAll("#leftButton");
    let rightBtn = document.querySelectorAll("#rightButton");
    leftBtn.forEach((leftButton)=>leftButton.addEventListener("click", (e)=>{
            const leftParent = e.target.parentElement;
            if (leftParent.dataset.button === "trending left") {
                e.preventDefault();
                trendingContainer.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "action left") {
                e.preventDefault();
                actionMovies.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "comedy left") {
                e.preventDefault();
                comedyMovies.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "horror left") {
                e.preventDefault();
                horrorMovies.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "romance left") {
                e.preventDefault();
                romanceMovies.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "thriller left") {
                e.preventDefault();
                thrillerMovies.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "action tv left") {
                e.preventDefault();
                actionTv.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "comedy tv left") {
                e.preventDefault();
                comedyTv.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "documentary tv left") {
                e.preventDefault();
                documentaryTv.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "drama tv left") {
                e.preventDefault();
                dramaTv.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "family tv left") {
                e.preventDefault();
                familyTv.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "kids tv left") {
                e.preventDefault();
                kidsTv.scrollLeft -= window.outerWidth;
            } else if (leftParent.dataset.button === "reality tv left") {
                e.preventDefault();
                realityTv.scrollLeft -= window.outerWidth;
            }
        }));
    rightBtn.forEach((rightButton)=>rightButton.addEventListener("click", (e)=>{
            const rightParent = e.target.parentElement;
            if (rightParent.dataset.button === "trending right") trendingContainer.scrollLeft += window.outerWidth;
            else if (rightParent.dataset.button === "action right") {
                e.preventDefault();
                actionMovies.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "comedy right") {
                e.preventDefault();
                comedyMovies.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "horror right") {
                e.preventDefault();
                horrorMovies.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "romance right") {
                e.preventDefault();
                romanceMovies.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "thriller right") {
                e.preventDefault();
                thrillerMovies.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "action tv right") {
                e.preventDefault();
                actionTv.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "comedy tv right") {
                e.preventDefault();
                comedyTv.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "documentary tv right") {
                e.preventDefault();
                documentaryTv.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "drama tv right") {
                e.preventDefault();
                dramaTv.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "family tv right") {
                e.preventDefault();
                familyTv.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "kids tv right") {
                e.preventDefault();
                kidsTv.scrollLeft += window.outerWidth;
            } else if (rightParent.dataset.button === "reality tv right") {
                e.preventDefault();
                realityTv.scrollLeft += window.outerWidth;
            }
        }));
}
carousel();
//Generate Footer Content
function generateFooter() {
    let date = new Date().getFullYear();
    footer.innerHTML = `
      <p>Designed & Developed by Trevin Shu &copy; ${date}</p>
    `;
}
generateFooter();

},{"dotenv":"lErsX"}],"lErsX":[function(require,module,exports) {
var process = require("process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
// Parser src into an Object
function parse(src) {
    const obj = {};
    // Convert buffer to string
    let lines = src.toString();
    // Convert line breaks to same format
    lines = lines.replace(/\r\n?/mg, "\n");
    let match;
    while((match = LINE.exec(lines)) != null){
        const key = match[1];
        // Default undefined or null to empty string
        let value = match[2] || "";
        // Remove whitespace
        value = value.trim();
        // Check if double quoted
        const maybeQuote = value[0];
        // Remove surrounding quotes
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        // Expand newlines if double quoted
        if (maybeQuote === '"') {
            value = value.replace(/\\n/g, "\n");
            value = value.replace(/\\r/g, "\r");
        }
        // Add to object
        obj[key] = value;
    }
    return obj;
}
function _log(message) {
    console.log(`[dotenv][DEBUG] ${message}`);
}
function _resolveHome(envPath) {
    return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
}
// Populates process.env from .env file
function config(options) {
    let dotenvPath = path.resolve(process.cwd(), ".env");
    let encoding = "utf8";
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    if (options) {
        if (options.path != null) dotenvPath = _resolveHome(options.path);
        if (options.encoding != null) encoding = options.encoding;
    }
    try {
        // Specifying an encoding returns a string instead of a buffer
        const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, {
            encoding
        }));
        Object.keys(parsed).forEach(function(key) {
            if (!Object.prototype.hasOwnProperty.call(process.env, key)) parsed[key];
            else {
                if (override === true) parsed[key];
                if (debug) {
                    if (override === true) _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
                    else _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
                }
            }
        });
        return {
            parsed
        };
    } catch (e) {
        if (debug) _log(`Failed to load ${dotenvPath} ${e.message}`);
        return {
            error: e
        };
    }
}
const DotenvModule = {
    config,
    parse
};
module.exports.config = DotenvModule.config;
module.exports.parse = DotenvModule.parse;
module.exports = DotenvModule;

},{"process":"d5jf4","fs":"jhUEF","path":"loE3o","os":"6yyXu"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"6yyXu":[function(require,module,exports) {
exports.endianness = function() {
    return "LE";
};
exports.hostname = function() {
    if (typeof location !== "undefined") return location.hostname;
    else return "";
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return "Browser";
};
exports.release = function() {
    if (typeof navigator !== "undefined") return navigator.appVersion;
    return "";
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {};
};
exports.arch = function() {
    return "javascript";
};
exports.platform = function() {
    return "browser";
};
exports.tmpdir = exports.tmpDir = function() {
    return "/tmp";
};
exports.EOL = "\n";
exports.homedir = function() {
    return "/";
};

},{}]},["bFOAz","dV6cC"], "dV6cC", "parcelRequireec6f")

//# sourceMappingURL=index.e82f28a0.js.map
