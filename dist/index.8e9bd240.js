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
})({"cWaoa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
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
            } else fullReload();
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
        console.log("[parcel] ✨ Error resolved");
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
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
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
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
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

},{}],"1jwFz":[function(require,module,exports) {
var _index = require("./src/box/index");
var _util = require("./src/util");
let container = (0, _util.NewNode)({
    w: [
        800,
        "px"
    ],
    h: [
        800,
        "px"
    ],
    bg: "white"
});
let h1 = document.createElement("h1");
h1.innerText = "Smart Nodes";
container.style.padding = "5px";
document.body.id = "some id...";
(0, _util.CreateNumberOfNodes)(9).forEach((props, index)=>{
    let node = (0, _util.NewNode)(props);
    (0, _index.FlexContainer)(node).AlignItems().JustifyContent();
    if (index === 4) {
        node.textContent = "";
        (0, _util.CreateNumberOfNodes)(3).forEach((_n, i)=>{
            let subNode = (0, _util.NewNode)({
                w: [
                    50,
                    "px"
                ],
                h: [
                    50,
                    "px"
                ],
                bg: "#fff",
                c: "#9f9f9f",
                txt: `${index}.${i}`
            });
            let subNode$ = (0, _index.FlexContainer)(subNode).Wrap().Center().Gap("10px");
            node.appendChild(subNode$.node);
        });
        (0, _index.FlexItem)({
            container: node,
            at: [
                3
            ]
        }).AlignSelf("flex-start");
    }
    container.appendChild(node);
});
document.body.appendChild(h1);
document.body.appendChild(container);
let flexBody = (0, _index.FlexContainer)(document.body);
let flexedContainer = (0, _index.FlexContainer)(container);
flexBody.Direction().JustifyContent().AlignItems().Gap("20px");
flexedContainer.Direction().Wrap().JustifyContent().AlignItems().Gap("20px").AlignContent();

},{"./src/box/index":"3964P","./src/util":"7wzGb"}],"3964P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlexContainer", ()=>FlexContainer);
parcelHelpers.export(exports, "FlexItem", ()=>FlexItem);
var _container = require("./Container/Container");
var _item = require("./Item/Item");
function FlexContainer(node) {
    return (0, _container.Container)({
        node
    });
}
function FlexItem(options) {
    return (0, _item.Item)({
        ...options
    });
}

},{"./Container/Container":"jxR7a","./Item/Item":"hkLmz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxR7a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
var _cssclasses = require("../CSSClasses");
let isElementWrapped = false;
const Container = (options)=>{
    let { node  } = options;
    if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
    let id = node.id;
    if (!id) throw Error("No id specified");
    node.classList.add((0, _cssclasses.FlexCSS).flex);
    node.setAttribute("flexContainer", `flexContainerId-${node.id}`);
    return {
        node,
        Direction (direction = "column") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let directions = {
                "column": (0, _cssclasses.FlexCSS)["flex_direction--column"],
                "row": (0, _cssclasses.FlexCSS)["flex_direction--row"],
                "row-reverse": (0, _cssclasses.FlexCSS)["flex_direction--row-reverse"],
                "column-reverse": (0, _cssclasses.FlexCSS)["flex_direction--column-reverse"]
            };
            for(let key in directions)node.classList.remove(directions[key]);
            node.classList.add(directions[direction] || directions["column"]);
            return this;
        },
        AlignItems (alignement = "center") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let alignements = {
                "center": (0, _cssclasses.FlexCSS)["flex_align-items--center"],
                "flex-start": (0, _cssclasses.FlexCSS)["flex_align-items--flex-start"],
                "flex-end": (0, _cssclasses.FlexCSS)["flex_align-items--flex-end"],
                "baseline": (0, _cssclasses.FlexCSS)["flex_align-items--baseline"],
                "stretch": (0, _cssclasses.FlexCSS)["flex_align-items--stretch"]
            };
            for(let key in alignements)node.classList.remove(alignements[key]);
            node.classList.add(alignements[alignement] || alignements["center"]);
            return this;
        },
        JustifyContent (justification = "center") {
            // implement start-end left-right
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let justifications = {
                "center": (0, _cssclasses.FlexCSS)["flex_justify-content--center"],
                "flex-start": (0, _cssclasses.FlexCSS)["flex_justify-content--flex-start"],
                "flex-end": (0, _cssclasses.FlexCSS)["flex_justify-content--flex-end"],
                "space-between": (0, _cssclasses.FlexCSS)["flex_justify-content--space-between"],
                "space-around": (0, _cssclasses.FlexCSS)["flex_justify-content--space-around"],
                "space-evenly": (0, _cssclasses.FlexCSS)["flex_justify-content--space-evenly"]
            };
            for(let key in justifications)node.classList.remove(justifications[key]);
            node.classList.add(justifications[justification] || justifications["center"]);
            return this;
        },
        Wrap (wrap = "wrap") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let wraps = {
                "wrap": (0, _cssclasses.FlexCSS)["flex_wrap--wrap"],
                "no-wrap": (0, _cssclasses.FlexCSS)["flex_wrap--no-wrap"],
                "wrap-reverse": (0, _cssclasses.FlexCSS)["flex_wrap--wrap-reverse"]
            };
            for(let key in wraps)node.classList.remove(wraps[key]);
            node.classList.add(wraps[wrap] || wraps["no-wrap"]);
            isElementWrapped = true;
            return this;
        },
        Flow (flow = {
            direction: "row",
            wrap: "wrap"
        }) {
            if (!id) throw Error("No id specified");
            if (flow.wrap) this.Wrap(flow.wrap);
            if (flow.direction) this.Direction(flow.direction);
            return this;
        },
        Gap (gap) {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            node.style.gap = gap || "0px";
            return this;
        },
        AlignContent (alignement = "center") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            if (!isElementWrapped || !(node.classList.contains("flex_wrap--wrap") || node.classList.contains("flex_wrap--wrap-reverse"))) throw Error("Element should have wrap or wrap-reverse class to use align-content, use Wrap() method to set wrap or wrap-reverse class to element before using AlignContent() method or use Flow() method to set both direction and wrap at once.");
            let alignements = {
                "center": (0, _cssclasses.FlexCSS)["flex_align-content--center"],
                "flex-start": (0, _cssclasses.FlexCSS)["flex_align-content--flex-start"],
                "flex-end": (0, _cssclasses.FlexCSS)["flex_align-content--flex-end"],
                "space-between": (0, _cssclasses.FlexCSS)["flex_align-content--space-between"],
                "space-around": (0, _cssclasses.FlexCSS)["flex_align-content--space-around"],
                "space-evenly": (0, _cssclasses.FlexCSS)["flex_align-content--space-evenly"],
                "stretch": (0, _cssclasses.FlexCSS)["flex_align-content--stretch"]
            };
            for(let key in alignements)node.classList.remove(alignements[key]);
            node.classList.add(alignements[alignement] || alignements["center"]);
            return this;
        },
        Center (wrap = "wrap", alignContent = "center") {
            this.AlignItems();
            this.JustifyContent();
            if (wrap) this.Wrap(wrap);
            this.AlignContent(alignContent);
            return this;
        },
        CenterLeft (wrap = "no-wrap", alignContent = "center") {
            this.AlignItems();
            this.JustifyContent("flex-start");
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this;
        },
        CenterRight (wrap = "no-wrap", alignContent = "center") {
            this.AlignItems();
            this.JustifyContent("flex-end");
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this;
        },
        CenterTop (wrap = "no-wrap", alignContent = "center") {
            this.AlignItems("flex-start");
            this.JustifyContent();
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this;
        },
        CenterBottom (wrap = "no-wrap", alignContent = "center") {
            this.AlignItems("flex-end");
            this.JustifyContent();
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this;
        }
    };
};

},{"../CSSClasses":"dwadV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwadV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlexCSS", ()=>FlexCSS);
const FlexCSS = {
    flex: "flex",
    flex_item: "flex_item",
    "flex_direction--row": "flex_direction--row",
    "flex_direction--row-reverse": "flex_direction--row-reverse",
    "flex_direction--column": "flex_direction--column",
    "flex_direction--column-reverse": "flex_direction--column-reverse",
    "flex_align-items--center": "flex_align-items--center",
    "flex_align-items--flex-end": "flex_align-items--flex-end",
    "flex_align-items--flex-start": "flex_align-items--flex-start",
    "flex_align-items--stretch": "flex_align-items--stretch",
    "flex_align-items--baseline": "flex_align-items--baseline",
    "flex_align-self--center": "flex_align-self--center",
    "flex_align-self--flex-end": "flex_align-self--flex-end",
    "flex_align-self--flex-start": "flex_align-self--flex-start",
    "flex_align-self--stretch": "flex_align-self--stretch",
    "flex_align-self--baseline": "flex_align-self--baseline",
    "flex_justify-content--flex-start": "flex_justify-content--flex-start",
    "flex_justify-content--flex-end": "flex_justify-content--flex-end",
    "flex_justify-content--center": "flex_justify-content--center",
    "flex_justify-content--space-between": "flex_justify-content--space-between",
    "flex_justify-content--space-around": "flex_justify-content--space-around",
    "flex_justify-content--space-evenly": "flex_justify-content--space-evenly",
    "flex_wrap--no-wrap": "flex_wrap--no-wrap",
    "flex_wrap--wrap": "flex_wrap--wrap",
    "flex_wrap--wrap-reverse": "flex_wrap--wrap-reverse",
    "flex_align-content--flex-start": "flex_align-content--flex-start",
    "flex_align-content--flex-end": "flex_align-content--flex-end",
    "flex_align-content--center": "flex_align-content--center",
    "flex_align-content--space-between": "flex_align-content--space-between",
    "flex_align-content--space-evenly": "flex_align-content--space-evenly",
    "flex_align-content--space-around": "flex_align-content--space-around",
    "flex_align-content--stretch": "flex_align-content--stretch",
    "flex-item--flex-grow": "flex-item--flex-grow"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hkLmz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item);
var _cssclasses = require("../CSSClasses");
const atIsANumber = (at)=>typeof at === "number";
const Item = (options)=>{
    let { container , at  } = options;
    let childNodes = Array.from(container.childNodes);
    let len = childNodes.length;
    let element = null;
    let elements = null;
    if (atIsANumber(at)) {
        if (at < 1 || at > len) throw Error(`Index out of bounds. Child count length: ${len}, Index passed: ${at}`);
        element = childNodes[at - 1];
        element.classList.add((0, _cssclasses.FlexCSS)["flex_item"]);
        elements = null;
    } else {
        let [start, end] = at;
        if (at.length === 1) {
            start = at[0];
            end = at[0];
        }
        if (start > end) throw Error("Start index must be less than end index");
        if (start < 1 || end < 1) throw Error("Array index must be greater than 0");
        if (start > len || end > len) throw Error("Array index must be less than child count length");
        element = null;
        elements = childNodes.slice(start - 1, end);
    }
    return {
        AlignSelf (alignement = "center") {
            let a = {
                "center": (0, _cssclasses.FlexCSS)["flex_align-self--center"],
                "flex-start": (0, _cssclasses.FlexCSS)["flex_align-self--flex-start"],
                "flex-end": (0, _cssclasses.FlexCSS)["flex_align-self--flex-end"],
                "stretch": (0, _cssclasses.FlexCSS)["flex_align-self--stretch"],
                "baseline": (0, _cssclasses.FlexCSS)["flex_align-self--baseline"]
            };
            if (elements === null) {
                for(let key in a)if (element) element.classList.remove(a[key]);
            } else for (let el of elements)for(let key1 in a)el.classList.remove(a[key1]);
            if (elements === null) {
                if (element) element.classList.add(a[alignement] || a["center"]);
            } else for (let el1 of elements)el1.classList.add(a[alignement] || a["center"]);
            return this;
        },
        Order (order = 0) {
            if (element) {
                if (!element.id) throw Error("No id specified");
                if (!element.classList.contains("flex")) throw Error("Parent is not flexed");
                element.style.order = `${order}`;
            }
            return this;
        },
        Flex (flex) {
            if (!element) return;
            if (!element.id) throw Error("No id specified");
            if (!element.classList.contains("flex")) throw Error("Parent is not flexed");
            let { grow , shrink , basis  } = flex;
            function growHandler(grow) {
                if (!element) return;
                element.classList.add("flex-item--flex-grow");
                element.style.setProperty("--flex-grow", grow.toString());
            }
            function shrinkHandler(shrink) {
                if (!element) return;
                element.classList.add("flex-item--flex-shrink");
                element.style.setProperty("--flex-shrink", shrink.toString());
            }
            function basisHandler(options) {
                if (!element) return;
                let { value , unit  } = options;
                element.classList.add("flex-item--flex-basis");
                element.style.setProperty("--flex-basis", unit ? value.toString().concat(unit) : value.toString());
            }
            if (grow) growHandler(grow);
            if (shrink) shrinkHandler(shrink);
            if (basis) basisHandler(basis);
        }
    };
};

},{"../CSSClasses":"dwadV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wzGb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registry", ()=>registry);
parcelHelpers.export(exports, "NewNode", ()=>NewNode);
parcelHelpers.export(exports, "CreateNumberOfNodes", ()=>CreateNumberOfNodes);
const registry = {};
const NewNode = (options)=>{
    let { w , h , bg , c , txt  } = options;
    let div = document.createElement("div");
    const uuid = ()=>Math.random() * 10e10;
    div.id = `${uuid()}`;
    div.style.width = `${w?.[0]}${w?.[1]}`;
    div.style.height = `${h?.[0]}${h?.[1]}`;
    div.style.backgroundColor = bg ? bg : "black";
    div.style.color = c ? c : "white";
    div.style.boxShadow = "0 0 5px 0 " + (c ? c : bg);
    div.style.borderRadius = "5px";
    div.style.fontSize = "2rem";
    if (txt) div.textContent = txt;
    if (registry[div.id]) registry[div.id] = div;
    return div;
};
const CreateNumberOfNodes = (n)=>{
    let colors = [
        "#fafafa",
        "lightblue"
    ];
    let props = [];
    for(let i = 1; i <= n; i++){
        let bg = colors[i % 2 === 0 ? 0 : 1];
        let color = colors[i % 2 === 0 ? 1 : 0];
        props.push({
            w: [
                200,
                "px"
            ],
            h: [
                200,
                "px"
            ],
            bg,
            c: color,
            txt: `${i}`
        });
    }
    return props;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cWaoa","1jwFz"], "1jwFz", "parcelRequire9b7d")

//# sourceMappingURL=index.8e9bd240.js.map
