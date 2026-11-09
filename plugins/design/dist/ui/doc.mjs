const require = (id) => { const table = globalThis.__UCODE_PLUGIN_HOST__?.cjs; const value = table?.[id]; if (value === undefined) throw new Error("插件运行时缺少 CommonJS 依赖：" + id); return value; };
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe3, getSnapshot) {
        didWarnOld18Alpha || void 0 === React41.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState29({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect5(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe3, value, getSnapshot]
        );
        useEffect29(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe3(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe3]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe3, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React41 = __require("react"), objectIs = "function" === typeof Object.is ? Object.is : is, useState29 = React41.useState, useEffect29 = React41.useEffect, useLayoutEffect5 = React41.useLayoutEffect, useDebugValue = React41.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React41.useSyncExternalStore ? React41.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.7.0_react@19.3.0/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// plugins/plugins/design/ui/doc.tsx
import { i18n as i18n2, ui } from "@ucode/plugin-api";
import { useEffect as useEffect28, useState as useState28 } from "react";

// plugins/plugins/design/ui/design-canvas.tsx
import { useEffect as useEffect27, useState as useState27 } from "react";

// plugins/plugins/design/ui/i18n.ts
import { i18n } from "@ucode/plugin-api";
var useTranslation = () => ({
  t: i18n.t
});

// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t2, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t2 = 0; t2 < o; t2++) e[t2] && (f = r(e[t2])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t2, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t2 = r(e)) && (n && (n += " "), n += t2);
  return n;
}

// node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// node_modules/.pnpm/cn@0.4.0/node_modules/cn/dist/tables.js
var P = 48;
var U = (s, o = 0) => {
  const out = new Int32Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i) - P - o;
  return out;
};
var PS = (counts) => {
  const out = new Int32Array(counts.length + 1);
  for (let i = 0; i < counts.length; i++) out[i + 1] = out[i] + counts[i];
  return out;
};
var DZ = (s) => {
  const out = new Int32Array(s.length);
  let a = 0;
  for (let i = 0; i < s.length; i++) {
    const z = s.charCodeAt(i) - P;
    a += z >>> 1 ^ -(z & 1);
    out[i] = a;
  }
  return out;
};
var GROUP_COUNT = 384;
var customValidatorNames = [];
var edgeStart = PS(U("E0500002005282000000002000150000020021820000011200000003022202000300004200120000200420001200021200301200010400162000010000220021010:2192001200220012000220012000200200200400010200040000000000400200108200110100000022010313000162002000020020012020080213000228200000000082000000000120002000120020020040101020300130001001010"));
var labelStart = PS(U(":11111111211111119311546544411119731869:671397415686432441111111111161114151214313433415:78311132233313187211117221449443411141111151152226611131111112212518142224214215421421542142424242516171151615616347111111111197911327451111111111111111111113134714133513411111311111111111111111111112444411111342312715245411117:3"));
var labelText = "@containerabcdefghinlmoprstunderlineviawzccentlignnimatespectuto-colsrowsaglorightnessckdrop-sisbcontrastfiltergrayscalehue-rotateinvertopacityslurrightnessaturateepia-coniclinearpositionradialsizeockurrderttom-belrstxyespacing-xyaretoursorlnt-umnsendspantartainentrasteividerop-shadowurationcorationlay-xyasendillexontromlter-featuresstretchapr-xyayscaleidow-colsrowsue-rotatedentlinesetvert-beringsxyeshadoweiadingftnest-clamp-imageabein-lrstxyskx--b-coniclpositionrsizet-x-y-fromto-fromto-inearfromto-fromto-adialfromto-fromtofromtofromtofromtoblockhinlinew-screenesblockhinlinewbjectpacityrutlinederigin-offsetbelrstxyesrspective-originaceholderioghtng-offsettateundedw-xyz-belrstlreseslr-endspantartaturatecepiahizekewpace-taleroll-xyz-barmpbelrstxyesbelrstxyes-thumbrackadowrink-xyxyartrokeabextora-shadowpckingnsformitionlate-xyz-offsetill-changeoom";
var edgeTarget = (() => {
  const N = edgeStart.length - 1;
  const sizes = new Int32Array(N);
  for (let i = N - 1; i >= 0; i--) {
    let s = 1;
    let c = i + 1;
    for (let k = edgeStart[i]; k < edgeStart[i + 1]; k++) {
      s += sizes[c];
      c += sizes[c];
    }
    sizes[i] = s;
  }
  const out = new Int32Array(edgeStart[N]);
  let e = 0;
  for (let i = 0; i < N; i++) {
    let c = i + 1;
    for (let k = edgeStart[i]; k < edgeStart[i + 1]; k++) {
      out[e++] = c;
      c += sizes[c];
    }
  }
  return out;
})();
var nodeGroup = U("02000000000000900<=0?000B000F00F00\u014FI0J0LNPRTVX0000]_a00000000000000000000000rst0000000z\u014F00000000000\x85\u014F000\x880000\u014F000000\x900000\x970000000000000000000000000000000000000000000000000000\xCB000000000000000000000\xDE000000000000000000\xF00000000\xF80\xF9\xFA\xFB\xFC\xFD\xFE\xFF\u0100\u0101\u0102\u0103\u0104\u0105\u0106000000000000000000000000000000000000000000\u01270\u0128\u012A00000000000000000000\u013C\u013D00000\u016C000000", 1);
var vlistPat = PS(U("123333359346463635126536711576"));
var vlistOps = U("93203242332583253248325D>E?F@03263243255B:032523853:0325B:8GA032542H<C=12727B:0328432553;D>E?3257D>032585:0325B:;0328B:032");
var vlistRef = U("012113445661666666789111:5;;;;;;;;444;;;:62999<1161=62>>?61:21@ABCD4446996:64E:::;:?::64:F114GHHIHHHHIHH1HH1HH1HHHHHH::EEJ4444::EE4444441691;644444114244444:;K6666555555555555555999666664444444444444444444444226?6:66644L9M?D:111::::6DE199");
var vlistGroup = DZ("020200202020020020020020020020200200200200200200200002020202001003040106000200200200200200200200200200200200200200200200200200200200200200200200200200200200020020020020020020002020200202002002002002002002002002002020002002020020200220200200200200200200200200200200020020020000200020002000200200200020020020002000200200200020020202002020202000200200020022000200200020020002002000200220002002000200W0Z00020020002002020002002000200g0j0002002000200200020020002002000200200020020002000200002000002002002002002000200020000200002002002002002002002020020020200200200200200200200200202020020020020020020020020002002002020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020002002002002002002000200200200200200200200200200020202020002000200020002002002002000020200200");
var nodeVlist = (() => {
  const out = (/* @__PURE__ */ new Int32Array(319)).fill(-1);
  const A = DZ("02422242:222222242224222242442222222422222244442242226224222426222422442462222422622222222626222462242622422622422424242422222222422222222242422222222222222222622442224222222222222224424442262222222222222222222226224222424242422224422422422222");
  const V = DZ("02222222222222222222202222222222222222222222221422222222222222222222222222222222222Y\\222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221422222222222222222222222222222222222222\u013F\u0142222222222222222222");
  for (let i = 0; i < A.length; i++) out[A[i]] = V[i];
  return out;
})();
var SETS = "container |break-after- all auto avoid avoid-page column left page right|break-before- all auto avoid avoid-page column left page right|break-inside-a uto void void-column void-page|box-decoration- clone slice|box- border content| contents flow-root hidden table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group| not-sr-only sr-only|float- end left none right start|clear- both end left none right start|isolat e ion-auto|overflow- auto clip hidden scroll visible|overflow-x- auto clip hidden scroll visible|overflow-y- auto clip hidden scroll visible|overscroll- auto contain none|overscroll-x- auto contain none|overscroll-y- auto contain none| absolute fixed relative static sticky| collapse invisible visible|justify- around baseline between center center-safe end end-safe evenly normal start stretch|justify-items- center center-safe end end-safe normal start stretch|justify-self- auto center center-safe end end-safe start stretch|items- baseline baseline-last center center-safe end end-safe start stretch|self- auto baseline baseline-last center center-safe end end-safe start stretch|place-content- around baseline between center center-safe end end-safe evenly start stretch|place-items- baseline center center-safe end end-safe start stretch|place-self- auto center center-safe end end-safe start stretch| antialiased subpixel-antialiased| italic not-italic|normal-nums |ordinal |slashed-zero | lining-nums oldstyle-nums| proportional-nums tabular-nums| diagonal-fractions stacked-fractions| no-underline overline| capitalize lowercase normal-case uppercase|truncate |whitespace- break-spaces normal nowrap pre pre-line pre-wrap|break- all keep normal words|wrap- anywhere break-word normal|hyphens- auto manual none|mix-blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay plus-darker plus-lighter saturation screen soft-light|table- auto fixed|caption- bottom top|backface- hidden visible|appearance- auto none|scheme- dark light light-dark normal only-dark only-light|field-sizing- content fixed|pointer-events- auto none|resize  -none -x -y|snap- align-none center end start|snap- always normal|snap- both none x y|snap- mandatory proximity|touch- auto manipulation none|touch-pan- left right x|touch-pan- down up y|touch-pinch-zoom |select- all auto none text|forced-color-adjust- auto none| normal size| baseline bottom middle sub super text-bottom text-top top| bounce none ping pulse spin| auto square video| auto fr max min px|none | auto full px| fixed local scroll|clip- border content padding text|origin- border content padding| bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| no-repeat repeat repeat-round repeat-space repeat-x repeat-y| auto contain cover| gradient-to-b gradient-to-bl gradient-to-br gradient-to-l gradient-to-r gradient-to-t gradient-to-tl gradient-to-tr none|blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay saturation screen soft-light|to- b bl br l r t tl tr| auto dvh fit full lh lvh max min px screen svh| dashed dotted double hidden none solid| collapse separate|px |auto |full | content none strict| inline-size size|layout |paint |style | around baseline between center center-safe end end-safe evenly normal start stretch| alias all-scroll auto cell col-resize context-menu copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize no-drop none not-allowed ns-resize nw-resize nwse-resize pointer progress row-resize s-resize se-resize sw-resize text vertical-text w-resize wait zoom-in zoom-out| dashed dotted double solid wavy| auto from-font|reverse |initial | in in-out initial linear out| col col-reverse row row-reverse| nowrap wrap wrap-reverse| auto initial none| black bold extrabold extralight light medium normal semibold thin| condensed expanded extra-condensed extra-expanded normal semi-condensed semi-expanded ultra-condensed ultra-expanded|flow- col col-dense dense row row-dense| none subgrid| auto dvh dvw fit full lh lvh lvw max min px screen svh svw| block flex grid table| auto dvw fit full lvw max min px screen svw| loose none normal px relaxed snug tight|through |item | inside outside| decimal disc none| auto px| clip-border clip-content clip-fill clip-padding clip-stroke clip-view no-clip| add exclude intersect subtract| alpha luminance match|origin- border content fill padding stroke view|type- alpha luminance| circle ellipse| closest-corner closest-side farthest-corner farthest-side|at- bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| dvh fit full lh lvh max min none px screen svh| auto dvh dvw fit full lh lvh lvw max min none px screen svh svw| dvw fit full lvw max min none px screen svw| auto dvh dvw fit full lvh lvw max min none prose px svh svw| auto dvh dvw fit full lvh lvw max min none px screen svh svw| contain cover fill none scale-down| first last none| distant dramatic midrange near none normal|inset | full none|3d | auto smooth|gutter- auto both stable| auto none thin| inner none| auto dvh dvw fit full lvh lvw max min px svh svw|base | center end justify left right start| clip ellipsis| balance nowrap pretty wrap| normal tight tighter wide wider widest| cpu gpu none| 3d flat| all colors none opacity shadow transform| discrete normal| full px| auto dvh dvw fit full lvh lvw max min px screen svh svw| auto contents scroll transform".split("|").map((s) => {
  const tails = s.split(" ");
  const prefix = tails.shift();
  for (let i = 0; i < tails.length; i++) tails[i] = prefix + tails[i];
  return tails;
});
var AA = DZ("0000000000000000000000000000000000000000000000000000000000000262242:6@200000006:240B428:4422400002046044222426220026642642462026224222824220022400000000\\00N222422242222222224062242222222422226264222422222222222222442804222422222222222222222222220<4<0204260002444020204224422");
var AG = DZ("\u0260222222222222222222222222222222222222222222222222222222222222\u02D54222226>\u02B622\u02B7\u02BA\u02B72\u02B8\u02B742\u02B42\u029322>621422\u0276222\u0279\u027C\u0277\u027A\u0277\u027A22\u027142222\u02682\u026726622\u0258\u0253244\u01B8\u01B5222]d24242\u01D6\u01D3\u019A\xC4\u022B2263\u0228\u0225\u02282222222\u01E3222222222222222222\u01C2\u01BD2\u01BE\u01B52222222422222\u019C\u019122222222222222222222144\u0166\u016322\u0162\u015F222222222222222222222\u01382\u013168\u0126\u0123\u0126\u0261\u01704\u0120\xAB\xAE\u011D822\u0114\u0111\u01142\u01132222622");
var AS = DZ("02222222222222222222222222222222222222222222222222222222222222222202022222222222EH2200IL021042222Y\\222IL0cf2e10j2222U00X202[^2y0000120|{~\x7F\x8222\x85\x88\x87:22|22222222222G000q\x86OVI00000}\x9A2\x9B>40000\x8C\x9DB00000I\xA8\xA9000\xAC00000000000000\x8D021M\xAE\xAD00\xB0\x93000000000000000000000\x96222\x9BHGHa1\xBA222\xBF2\xC02222\xC9\xCC000\xAD\xB02\xB1");
var litAnchor = /* @__PURE__ */ new Int32Array(995);
var litGroup = /* @__PURE__ */ new Int32Array(995);
var litPool = /* @__PURE__ */ new Int32Array(995);
var poolText = "";
var poolOffsets = /* @__PURE__ */ new Int32Array(1038);
{
  const tailRef = /* @__PURE__ */ new Map();
  let nextRef = 0;
  let e = 0;
  for (let i = 0; i < AA.length; i++) for (const tail of SETS[AS[i]]) {
    let r2 = tailRef.get(tail);
    if (r2 === void 0) {
      r2 = nextRef++;
      tailRef.set(tail, r2);
      poolOffsets[r2 * 2] = poolText.length;
      poolOffsets[r2 * 2 + 1] = tail.length;
      poolText += tail;
    }
    litAnchor[e] = AA[i];
    litGroup[e] = AG[i];
    litPool[e] = r2;
    e++;
  }
}
var adjGid = DZ("0b2N:222@R>F@286\xA62@H2D266226FB22B2>BD\\6N22222Z222D222p");
var adjStart = PS(U("1::24444432:442:44:44>222222:44:4421322511111311111114"));
var adjTgt = DZ("2\x8A4A;33N=C@H4A;33N=C@<27;83:;8393NQ:3NQ\u02B0222\u02C9\xBA\u0174\u017D2R2=18c\u01B4\xC5\u0147\x9C=c\u011E\xDBC1\u0188\u01DD\u0208:\u012725=11D3A@4=<1;1DEr25;11B3?<6;:371BCn9@7=<8192>2E121@9@EHE@9>2T25511<398454131<=V25511<398454131<=\x84\u01A7N\u017E2\u0110\xE5242L222290000f22500\u025B000\u01D8222");
var patGid = U("\u0133");
var patTgt = U("\x97");
var postfixLookupGroups = U("1");
var orderSensitiveModifiers = "* ** after backdrop before details-content file first-letter first-line marker placeholder selection";
var tables_generated_default = {
  GROUP_COUNT,
  customValidatorNames,
  edgeStart,
  labelStart,
  labelText,
  edgeTarget,
  nodeGroup,
  nodeVlist,
  vlistPat,
  vlistOps,
  vlistRef,
  vlistGroup,
  litAnchor,
  litGroup,
  litPool,
  poolOffsets,
  poolText,
  adjGid,
  adjStart,
  adjTgt,
  patGid,
  patTgt,
  postfixLookupGroups,
  orderSensitiveModifiers
};

// node_modules/.pnpm/cn@0.4.0/node_modules/cn/dist/engine.js
var IS_JSC = "line" in /* @__PURE__ */ new Error();
var EXTERNAL = -1;
var DEAD = -1;
var fnv = (str, s, e) => {
  let h = 2166136261;
  for (let p = s; p < e; p++) h = Math.imul(h ^ str.charCodeAt(p), 16777619);
  return h;
};
var spanHash = (str, s, e) => {
  const len = e - s;
  let h = Math.imul(len, 2654435761) ^ str.charCodeAt(s);
  if (len > 3) {
    const q = len >> 2;
    const m = len >> 1;
    h = Math.imul(h ^ str.charCodeAt(s + 1) << 8 ^ str.charCodeAt(s + 2) << 16 ^ str.charCodeAt(s + q), 2246822507);
    h = Math.imul(h ^ str.charCodeAt(s + m) << 8 ^ str.charCodeAt(s + m + q) << 16 ^ str.charCodeAt(e - 3), 3266489909);
    h ^= str.charCodeAt(e - 2) << 8 ^ str.charCodeAt(e - 1) << 16;
    for (let p = s + 3, q2 = e - 4; p < s + 8 && p < q2; p++, q2--) h = Math.imul(h ^ str.charCodeAt(p) ^ str.charCodeAt(q2) << 8, 16777619);
  }
  return h ^ h >>> 15 | 0;
};
var createEngine = (T, validatorImpls, options2 = {}) => {
  const { GROUP_COUNT: GROUP_COUNT2, edgeStart: edgeStart2, labelStart: labelStart2, labelText: labelText2, edgeTarget: edgeTarget2, nodeGroup: nodeGroup2, nodeVlist: nodeVlist2, vlistPat: vlistPat2, vlistOps: vlistOps2, vlistRef: vlistRef2, vlistGroup: vlistGroup2, litAnchor: litAnchor2, litGroup: litGroup2, litPool: litPool2, poolOffsets: poolOffsets2, poolText: poolText2, adjGid: adjGid2, adjStart: adjStart2, adjTgt: adjTgt2, patGid: patGid2, patTgt: patTgt2, postfixLookupGroups: postfixLookupGroups2, customValidatorNames: customValidatorNames2, orderSensitiveModifiers: orderSensitiveModifiers2 } = T;
  const adjRow = new Int32Array(GROUP_COUNT2).fill(-1);
  for (let i = 0; i < adjGid2.length; i++) adjRow[adjGid2[i]] = i;
  let maxAdj = 0;
  for (let r2 = 0; r2 + 1 < adjStart2.length; r2++) {
    const n = adjStart2[r2 + 1] - adjStart2[r2];
    if (n > maxAdj) maxAdj = n;
  }
  let CLAIM_PER_TOKEN = 32;
  while (CLAIM_PER_TOKEN < 2 * (1 + maxAdj + patGid2.length)) CLAIM_PER_TOKEN <<= 1;
  const vgStart = new Int32Array(vlistRef2.length + 1);
  for (let l = 0; l < vlistRef2.length; l++) vgStart[l + 1] = vgStart[l] + vlistPat2[vlistRef2[l] + 1] - vlistPat2[vlistRef2[l]];
  const postfixLookupSet = new Uint8Array(GROUP_COUNT2);
  for (let i = 0; i < postfixLookupGroups2.length; i++) postfixLookupSet[postfixLookupGroups2[i]] = 1;
  const nodeCount = edgeStart2.length - 1;
  const nodeHasLit = new Uint8Array(nodeCount);
  let litMaxLen = 0;
  let litNoArb = true;
  for (let i = 0; i < litAnchor2.length; i++) {
    nodeHasLit[litAnchor2[i]] = 1;
    const len = poolOffsets2[litPool2[i] * 2 + 1];
    if (len > litMaxLen) litMaxLen = len;
    const c0 = poolText2.charCodeAt(poolOffsets2[litPool2[i] * 2]);
    if (c0 === 91 || c0 === 40) litNoArb = false;
  }
  let LIT_SIZE = 1;
  while (LIT_SIZE < litAnchor2.length * 2) LIT_SIZE <<= 1;
  const litTable = new Int32Array(LIT_SIZE).fill(-1);
  for (let i = 0; i < litAnchor2.length; i++) {
    const off = poolOffsets2[litPool2[i] * 2];
    let idx = (fnv(poolText2, off, off + poolOffsets2[litPool2[i] * 2 + 1]) ^ Math.imul(litAnchor2[i], 2654435761) | 0) & LIT_SIZE - 1;
    while (litTable[idx] !== -1) idx = idx + 1 & LIT_SIZE - 1;
    litTable[idx] = i;
  }
  const litProbe = (anchor, input, s, e) => {
    let idx = (fnv(input, s, e) ^ Math.imul(anchor, 2654435761) | 0) & LIT_SIZE - 1;
    const len = e - s;
    for (; ; ) {
      const entry = litTable[idx];
      if (entry === -1) return -1;
      if (litAnchor2[entry] === anchor && poolOffsets2[litPool2[entry] * 2 + 1] === len) {
        const off = poolOffsets2[litPool2[entry] * 2];
        let ok = true;
        for (let k = 0; k < len; k++) if (poolText2.charCodeAt(off + k) !== input.charCodeAt(s + k)) {
          ok = false;
          break;
        }
        if (ok) return litGroup2[entry];
      }
      idx = idx + 1 & LIT_SIZE - 1;
    }
  };
  const cacheSize = options2.cacheSize ?? 8192;
  const RAW_PREFIX = options2.prefix ?? T.prefix ?? "";
  const FULL_PREFIX = RAW_PREFIX === "" ? "" : RAW_PREFIX + ":";
  const FPL = FULL_PREFIX.length;
  const vCustom = (customValidatorNames2 ?? []).map((name) => {
    const fn = validatorImpls && validatorImpls[name];
    if (!fn) throw new Error("cn: missing validator " + name);
    return fn;
  });
  const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
  const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  let aKind = 0;
  let aLabelS = -1;
  let aLabelE = -1;
  let aValS = -1;
  let aValE = -1;
  const isWordCode = (c) => c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95;
  const isUniWS = (c) => /\s/.test(String.fromCharCode(c));
  const analyzeArb = (input, s, e) => {
    aKind = 0;
    aLabelS = -1;
    if (e - s < 3) return;
    const c0 = input.charCodeAt(s);
    const cl = input.charCodeAt(e - 1);
    if (c0 === 91 && cl === 93) aKind = 1;
    else if (c0 === 40 && cl === 41) aKind = 2;
    else return;
    aValS = s + 1;
    aValE = e - 1;
    let p = s + 1;
    if (isWordCode(input.charCodeAt(p))) {
      p++;
      while (p < e - 1) {
        const c = input.charCodeAt(p);
        if (!isWordCode(c) && c !== 45) break;
        p++;
      }
      if (p < e - 2 && input.charCodeAt(p) === 58) {
        aLabelS = s + 1;
        aLabelE = p;
        aValS = p + 1;
      }
    }
  };
  const spanEq = (input, s, e, str) => {
    if (e - s !== str.length) return false;
    for (let i = 0; i < str.length; i++) if (input.charCodeAt(s + i) !== str.charCodeAt(i)) return false;
    return true;
  };
  const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
  const tshirtRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  const isNumStr = (v) => !!v && !Number.isNaN(Number(v));
  const spanIsNamedContainerQuery = (input, s, e) => {
    if (e - s < 11 || !spanEq(input, s, s + 10, "@container")) return false;
    if (input.charCodeAt(s + 10) === 47) return e - s >= 12;
    const c11 = input.charCodeAt(s + 11);
    return c11 === 115 && e - s >= 17 && spanEq(input, s + 10, s + 16, "-size/") || c11 === 110 && e - s >= 19 && spanEq(input, s + 10, s + 18, "-normal/");
  };
  const VKIND = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ];
  const VLABELS = "length|number|number weight|family-name|position percentage|length size bg-size|image url|shadow|length|family-name|position percentage|length size bg-size|image url|shadow|number weight".split("|").map((s) => s.split(" "));
  const VFALL = [
    2,
    3,
    1,
    0,
    0,
    0,
    4,
    5,
    0,
    0,
    0,
    0,
    0,
    1,
    1
  ];
  const runValidator = (op, input, s, e) => {
    if (op >= 10) {
      if (op >= 25) return vCustom[op - 25](input.slice(s, e));
      const i = op - 10;
      if (aKind !== VKIND[i]) return false;
      if (aLabelS >= 0) {
        for (const L of VLABELS[i]) if (spanEq(input, aLabelS, aLabelE, L)) return true;
        return false;
      }
      switch (VFALL[i]) {
        case 0:
          return false;
        case 1:
          return true;
        case 2: {
          const v = input.slice(aValS, aValE);
          return lengthUnitRegex.test(v) && !colorFunctionRegex.test(v);
        }
        case 3:
          return isNumStr(input.slice(aValS, aValE));
        case 4:
          return imageRegex.test(input.slice(aValS, aValE));
        default:
          return shadowRegex.test(input.slice(aValS, aValE));
      }
    }
    switch (op) {
      case 0:
        return true;
      case 1:
        return aKind === 0;
      case 2:
        return aKind === 1;
      case 3:
        return aKind === 2;
      case 4:
        return fractionRegex.test(input.slice(s, e));
      case 5:
        return isNumStr(input.slice(s, e));
      case 6: {
        const v = input.slice(s, e);
        return !!v && Number.isInteger(Number(v));
      }
      case 7:
        return e > s && input.charCodeAt(e - 1) === 37 && isNumStr(input.slice(s, e - 1));
      case 8:
        return tshirtRegex.test(input.slice(s, e));
      default:
        return spanIsNamedContainerQuery(input, s, e);
    }
  };
  const orderSensitive = new Set(typeof orderSensitiveModifiers2 === "string" ? orderSensitiveModifiers2.split(" ") : orderSensitiveModifiers2);
  const internSpan = (map, input, s, e, imp, make) => {
    const h = fnv(input, s, e) ^ (imp ? 2654435769 : 0) | 0;
    let bucket = map.get(h);
    if (bucket !== void 0) outer: for (let b = 0; b < bucket.length; b++) {
      const en = bucket[b];
      if (en.imp !== imp || en.k.length !== e - s) continue;
      for (let i = 0; i < en.k.length; i++) if (en.k.charCodeAt(i) !== input.charCodeAt(s + i)) continue outer;
      return en.id;
    }
    else map.set(h, bucket = []);
    const k = input.slice(s, e);
    const id = make(k);
    bucket.push({
      k,
      imp,
      id
    });
    return id;
  };
  let ctxByHash = /* @__PURE__ */ new Map();
  let ctxByCanon = /* @__PURE__ */ new Map();
  let nextCtxId = 2;
  const MAX_CTX = 4096;
  const canonicalizeContext = (raw, important) => {
    const mods = [];
    let dB = 0, dP = 0, start = 0;
    for (let i = 0; i < raw.length; i++) {
      const c = raw.charCodeAt(i);
      if (dB === 0 && dP === 0 && c === 58) {
        mods.push(raw.slice(start, i));
        start = i + 1;
      } else if (c === 91) dB++;
      else if (c === 93) dB--;
      else if (c === 40) dP++;
      else if (c === 41) dP--;
    }
    mods.push(raw.slice(start));
    let canonical = mods[0];
    if (mods.length > 1) {
      const result = [];
      let segment = [];
      for (const mod of mods) if (mod.charCodeAt(0) === 91 || orderSensitive.has(mod)) {
        if (segment.length) {
          result.push(...segment.sort());
          segment = [];
        }
        result.push(mod);
      } else segment.push(mod);
      if (segment.length) result.push(...segment.sort());
      canonical = result.join(":");
    }
    const key = important ? canonical + " !" : canonical;
    let id = ctxByCanon.get(key);
    if (id === void 0) ctxByCanon.set(key, id = nextCtxId++);
    return id;
  };
  let dynByHash = /* @__PURE__ */ new Map();
  let nextDynId = GROUP_COUNT2;
  const MAX_DYN = GROUP_COUNT2 + 4096;
  const newDynId = () => nextDynId++;
  const ID_LIMIT = 2097152;
  const TOKEN_TABLE = 8192;
  const memoHash = new Int32Array(TOKEN_TABLE);
  const memoStr = new Array(TOKEN_TABLE).fill(null);
  const memoGid = new Int32Array(TOKEN_TABLE);
  const memoCtx = new Int32Array(TOKEN_TABLE);
  const memoFlags = new Uint8Array(TOKEN_TABLE);
  let memoTick = 0;
  const memoPut = (way0, input, ts, te, h, gid, ctxId, flags) => {
    let slot = way0;
    if (memoStr[way0] !== null) {
      if (memoStr[way0 | 1] === null) slot = way0 | 1;
      else if ((memoTick++ & 3) === 0) slot = way0 | memoTick >> 2 & 1;
      else return;
    }
    memoStr[slot] = input.slice(ts, te);
    memoHash[slot] = h;
    memoGid[slot] = gid;
    memoCtx[slot] = ctxId;
    memoFlags[slot] = flags;
  };
  const memoReset = () => memoStr.fill(null);
  let cap = 256;
  let tokI32 = [
    new Int32Array(cap),
    new Int32Array(cap),
    new Int32Array(cap),
    new Int32Array(cap)
  ];
  let [tokStart, tokEnd, tokGid, tokCtx] = tokI32;
  let tokFlags = new Uint8Array(cap);
  let keep = new Uint8Array(cap);
  const growTokens = () => {
    cap *= 2;
    tokI32 = tokI32.map((a) => {
      const n = new Int32Array(cap);
      n.set(a);
      return n;
    });
    [tokStart, tokEnd, tokGid, tokCtx] = tokI32;
    const nf = new Uint8Array(cap);
    nf.set(tokFlags);
    tokFlags = nf;
    keep = new Uint8Array(cap);
  };
  let ckptCap = 64;
  let ckptNode = new Int32Array(ckptCap);
  let ckptTail = new Int32Array(ckptCap);
  const claim0 = new Int32Array(GROUP_COUNT2);
  let CLAIM_TABLE = 2048;
  let claimShift = 21;
  let claimKeys = new Float64Array(CLAIM_TABLE);
  let claimEpochs = new Int32Array(CLAIM_TABLE);
  let epoch = 0;
  const claimTest = (ctx, gid) => {
    if (ctx === 0 && gid < GROUP_COUNT2) {
      if (claim0[gid] === epoch) return 1;
      claim0[gid] = epoch;
      return 0;
    }
    const key = ctx * 2097152 + gid + 1;
    let idx = Math.imul(key, 2654435761) >>> claimShift;
    for (; ; ) {
      if (claimEpochs[idx] !== epoch) break;
      if (claimKeys[idx] === key) return 1;
      idx = idx + 1 & CLAIM_TABLE - 1;
    }
    claimKeys[idx] = key;
    claimEpochs[idx] = epoch;
    return 0;
  };
  const resolveAt = (input, bs, endPos, nodeAt, ckptAt) => {
    if (endPos - bs >= 2 && input.charCodeAt(bs) === 91 && input.charCodeAt(endPos - 1) === 93) {
      let colon = -1;
      for (let p = bs + 1; p < endPos - 1; p++) if (input.charCodeAt(p) === 58) {
        colon = p;
        break;
      }
      if (colon === -1 || colon === bs + 1) return EXTERNAL;
      return internSpan(dynByHash, input, bs + 1, colon, 0, newDynId);
    }
    if (nodeAt >= 0 && nodeGroup2[nodeAt] >= 0) return nodeGroup2[nodeAt];
    for (let k = ckptAt - 1; k >= 0; k--) {
      const tailStart = ckptTail[k];
      if (tailStart > endPos) continue;
      const nodeId = ckptNode[k];
      const tlen = endPos - tailStart;
      if (nodeHasLit[nodeId] === 1 && tlen > 0 && tlen <= litMaxLen) {
        const c0 = input.charCodeAt(tailStart);
        if (litNoArb === false || c0 !== 91 && c0 !== 40) {
          const g = litProbe(nodeId, input, tailStart, endPos);
          if (g >= 0) return g;
        }
      }
      const vl = nodeVlist2[nodeId];
      if (vl < 0) continue;
      const pat = vlistRef2[vl];
      const vs = vlistPat2[pat];
      const ve = vlistPat2[pat + 1];
      if (vs === ve) continue;
      analyzeArb(input, tailStart, endPos);
      const g0 = vgStart[vl] - vs;
      for (let v = vs; v < ve; v++) if (runValidator(vlistOps2[v], input, tailStart, endPos)) return vlistGroup2[g0 + v];
    }
    return EXTERNAL;
  };
  const mergeClassList = (input) => {
    const n = input.length;
    let tokenCount = 0;
    let totalTokenChars = 0;
    let sawNonSpaceWS = false;
    if (nextCtxId > MAX_CTX || ctxByHash.size > MAX_CTX) {
      ctxByHash = /* @__PURE__ */ new Map();
      ctxByCanon = /* @__PURE__ */ new Map();
      nextCtxId = 2;
      memoReset();
    }
    if (nextDynId > MAX_DYN) {
      dynByHash = /* @__PURE__ */ new Map();
      nextDynId = GROUP_COUNT2;
      memoReset();
    }
    let i = 0;
    while (i < n) {
      let c = input.charCodeAt(i);
      if (c === 32 || c >= 9 && c <= 13 || c >= 160 && isUniWS(c)) {
        if (c !== 32) sawNonSpaceWS = true;
        i++;
        continue;
      }
      const ts = i;
      let th = 0;
      while (i < n) {
        c = input.charCodeAt(i);
        if (c <= 32) {
          if (c === 32) break;
          if (c >= 9 && c <= 13) {
            sawNonSpaceWS = true;
            break;
          }
        } else if (c >= 160 && isUniWS(c)) {
          sawNonSpaceWS = true;
          break;
        }
        th = Math.imul(th ^ c, 16777619);
        i++;
      }
      const te = i;
      const len = te - ts;
      if (tokenCount === cap) growTokens();
      const t3 = tokenCount++;
      tokStart[t3] = ts;
      tokEnd[t3] = te;
      totalTokenChars += len;
      th ^= Math.imul(len, 2654435761);
      const h = th ^ th >>> 15 | 0;
      const way0 = h & 8190;
      {
        let hitAt = -1;
        if (memoHash[way0] === h && memoStr[way0] !== null && memoStr[way0].length === len) hitAt = way0;
        else if (memoHash[way0 | 1] === h && memoStr[way0 | 1] !== null && memoStr[way0 | 1].length === len) hitAt = way0 | 1;
        if (hitAt >= 0) {
          const s = memoStr[hitAt];
          let ok = true;
          for (let k = 0; k < len; k++) if (s.charCodeAt(k) !== input.charCodeAt(ts + k)) {
            ok = false;
            break;
          }
          if (ok) {
            tokGid[t3] = memoGid[hitAt];
            tokCtx[t3] = memoCtx[hitAt];
            tokFlags[t3] = memoFlags[hitAt];
            continue;
          }
        }
      }
      let pts = ts;
      if (FPL !== 0) {
        if (te - ts <= FPL || !input.startsWith(FULL_PREFIX, ts)) {
          tokGid[t3] = EXTERNAL;
          memoPut(way0, input, ts, te, h, EXTERNAL, 0, 0);
          continue;
        }
        pts = ts + FPL;
      }
      let depthB = 0, depthP = 0;
      let lastColon = -1, lastSlash = -1;
      for (let p = pts; p < te; p++) {
        const pc = input.charCodeAt(p);
        if (depthB === 0 && depthP === 0) {
          if (pc === 58) {
            lastColon = p;
            continue;
          }
          if (pc === 47) {
            lastSlash = p;
            continue;
          }
        }
        if (pc === 91) depthB++;
        else if (pc === 93) depthB--;
        else if (pc === 40) depthP++;
        else if (pc === 41) depthP--;
      }
      const modStart = lastColon >= pts ? lastColon + 1 : pts;
      let bs = modStart;
      let be = te;
      let important = false;
      let prefixShift = 0;
      if (be > bs && input.charCodeAt(be - 1) === 33) {
        important = true;
        be--;
      } else if (be > bs && input.charCodeAt(bs) === 33) {
        important = true;
        bs++;
        prefixShift = 1;
      }
      let postfixEnd = -1;
      if (lastSlash > modStart) {
        postfixEnd = lastSlash + prefixShift;
        if (postfixEnd >= be) postfixEnd = -1;
      }
      let feedStart = bs;
      if (be - bs > 1 && input.charCodeAt(bs) === 45) feedStart = bs + 1;
      let node = 0;
      let lp = 0;
      let le = 0;
      let pending = -1;
      let ckptTop = 0;
      if (nodeVlist2[0] >= 0 || nodeHasLit[0] === 1) {
        ckptNode[0] = 0;
        ckptTail[0] = feedStart;
        ckptTop = 1;
      }
      let slashNode = DEAD;
      let slashCkpt = 0;
      for (let p = feedStart; p < be; p++) {
        if (p === postfixEnd) {
          slashNode = lp < le ? DEAD : node;
          slashCkpt = ckptTop;
        }
        if (node !== DEAD) {
          const cc = input.charCodeAt(p);
          let arrived = -1;
          if (lp < le) {
            if (labelText2.charCodeAt(lp) === cc) {
              lp++;
              if (lp === le) arrived = node = pending;
            } else node = DEAD;
          } else {
            const es = edgeStart2[node];
            const ee = edgeStart2[node + 1];
            let next = DEAD;
            for (let e = es; e < ee; e++) {
              const ls = labelStart2[e];
              if (labelText2.charCodeAt(ls) === cc) {
                if (labelStart2[e + 1] - ls === 1) arrived = next = edgeTarget2[e];
                else {
                  lp = ls + 1;
                  le = labelStart2[e + 1];
                  pending = edgeTarget2[e];
                  next = node;
                }
                break;
              }
            }
            node = next;
          }
          if (arrived >= 0 && (nodeVlist2[arrived] >= 0 || nodeHasLit[arrived] === 1) && p + 1 < be && input.charCodeAt(p + 1) === 45) {
            if (ckptTop === ckptCap) {
              ckptCap *= 2;
              const nv = new Int32Array(ckptCap);
              nv.set(ckptNode);
              ckptNode = nv;
              const nt = new Int32Array(ckptCap);
              nt.set(ckptTail);
              ckptTail = nt;
            }
            ckptNode[ckptTop] = arrived;
            ckptTail[ckptTop] = p + 2;
            ckptTop++;
          }
        }
      }
      if (postfixEnd === be) {
        slashNode = lp < le ? DEAD : node;
        slashCkpt = ckptTop;
      }
      const endNode = lp < le ? DEAD : node;
      let gid;
      let hasPostfix = false;
      if (postfixEnd >= 0) {
        hasPostfix = true;
        gid = resolveAt(input, bs, postfixEnd, slashNode, slashCkpt);
        if (gid !== EXTERNAL && gid < GROUP_COUNT2 && postfixLookupSet[gid]) {
          const gidFull = resolveAt(input, bs, be, endNode, ckptTop);
          if (gidFull !== EXTERNAL && gidFull !== gid) {
            gid = gidFull;
            hasPostfix = false;
          }
        } else if (gid === EXTERNAL) {
          gid = resolveAt(input, bs, be, endNode, ckptTop);
          hasPostfix = false;
        }
      } else gid = resolveAt(input, bs, be, endNode, ckptTop);
      let ctxId = 0;
      let flags = 0;
      if (gid === EXTERNAL) tokGid[t3] = EXTERNAL;
      else {
        flags = hasPostfix ? 1 : 0;
        ctxId = pts >= lastColon ? important ? 1 : 0 : internSpan(ctxByHash, input, pts, lastColon, important ? 1 : 0, (k) => canonicalizeContext(k, important));
        tokGid[t3] = gid;
        tokFlags[t3] = flags;
        tokCtx[t3] = ctxId;
      }
      memoPut(way0, input, ts, te, h, gid, ctxId, flags);
    }
    if (tokenCount === 0) return "";
    if (tokenCount === 1) return tokStart[0] === 0 && tokEnd[0] === n ? input : input.slice(tokStart[0], tokEnd[0]);
    if (tokenCount * CLAIM_PER_TOKEN > CLAIM_TABLE) {
      while (tokenCount * CLAIM_PER_TOKEN > CLAIM_TABLE) {
        CLAIM_TABLE <<= 1;
        claimShift--;
      }
      claimKeys = new Float64Array(CLAIM_TABLE);
      claimEpochs = new Int32Array(CLAIM_TABLE);
    }
    if (nextCtxId >= ID_LIMIT || nextDynId >= ID_LIMIT) throw new Error("cn: too many distinct classes in one merge");
    epoch = epoch + 1 | 0;
    if (epoch === 0) {
      claim0.fill(0);
      claimEpochs.fill(0);
      epoch = 1;
    }
    let didDrop = false;
    for (let t3 = tokenCount - 1; t3 >= 0; t3--) {
      const gid = tokGid[t3];
      if (gid === EXTERNAL) {
        keep[t3] = 1;
        continue;
      }
      const ctxId = tokCtx[t3];
      if (claimTest(ctxId, gid) === 1) {
        keep[t3] = 0;
        didDrop = true;
        continue;
      }
      keep[t3] = 1;
      if (gid < GROUP_COUNT2) {
        const r2 = adjRow[gid];
        if (r2 >= 0) for (let k = adjStart2[r2]; k < adjStart2[r2 + 1]; k++) claimTest(ctxId, adjTgt2[k]);
        if (tokFlags[t3] & 1) {
          for (let k = 0; k < patGid2.length; k++) if (patGid2[k] === gid) claimTest(ctxId, patTgt2[k]);
        }
      }
    }
    if (!didDrop && !sawNonSpaceWS && n === totalTokenChars + tokenCount - 1) return input;
    let out = "";
    let t2 = 0;
    while (t2 < tokenCount) {
      if (!keep[t2]) {
        t2++;
        continue;
      }
      const runStart = tokStart[t2];
      let runEnd = tokEnd[t2];
      let u = t2 + 1;
      while (u < tokenCount && keep[u] && tokStart[u] === runEnd + 1 && input.charCodeAt(runEnd) === 32) {
        runEnd = tokEnd[u];
        u++;
      }
      if (out.length > 0) out += " ";
      out += input.slice(runStart, runEnd);
      t2 = u;
    }
    return out;
  };
  const DOOR_SIZE = 16384;
  const door = new Int32Array(DOOR_SIZE * 2);
  let doorBase = 0;
  let doorEpoch = 1;
  let cache = /* @__PURE__ */ Object.create(null);
  let prevCache = /* @__PURE__ */ Object.create(null);
  let cacheMap = /* @__PURE__ */ new Map();
  let prevCacheMap = /* @__PURE__ */ new Map();
  let cacheCount = 0;
  let doorMarks = 0;
  const rotateDoor = () => {
    doorBase ^= DOOR_SIZE;
    doorEpoch = doorEpoch + 1 | 0;
    doorMarks = 0;
  };
  const mergeCached = (input) => {
    let merged = cache[input];
    if (merged !== void 0) return merged;
    const hash = spanHash(input, 0, input.length);
    const slot = (hash & 16383) + doorBase;
    const wasSeen = door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1);
    if (wasSeen) {
      merged = prevCache[input];
      if (merged !== void 0) {
        cache[input] = merged;
        return merged;
      }
    }
    merged = mergeClassList(input);
    if (wasSeen) {
      cache[input] = merged;
      if (++cacheCount > cacheSize) {
        cacheCount = 0;
        prevCache = cache;
        cache = /* @__PURE__ */ Object.create(null);
        rotateDoor();
      }
    } else {
      door[slot] = hash ^ doorEpoch;
      if (++doorMarks > DOOR_SIZE) rotateDoor();
    }
    return merged;
  };
  const mergeCachedMap = (input) => {
    let merged = cacheMap.get(input);
    if (merged !== void 0) return merged;
    const hash = spanHash(input, 0, input.length);
    const slot = (hash & 16383) + doorBase;
    const wasSeen = door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1);
    if (wasSeen) {
      merged = prevCacheMap.get(input);
      if (merged !== void 0) {
        cacheMap.set(input, merged);
        return merged;
      }
    }
    merged = mergeClassList(input);
    if (wasSeen) {
      cacheMap.set(input, merged);
      if (++cacheCount > cacheSize) {
        cacheCount = 0;
        prevCacheMap = cacheMap;
        cacheMap = /* @__PURE__ */ new Map();
        rotateDoor();
      }
    } else {
      door[slot] = hash ^ doorEpoch;
      if (++doorMarks > DOOR_SIZE) rotateDoor();
    }
    return merged;
  };
  const seenBefore = (input) => {
    const hash = spanHash(input, 0, input.length);
    const slot = (hash & 16383) + doorBase;
    if (door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1)) return true;
    door[slot] = hash ^ doorEpoch;
    if (++doorMarks > DOOR_SIZE) rotateDoor();
    return false;
  };
  const mergeString = cacheSize === 0 ? mergeClassList : IS_JSC ? (input) => {
    const merged = cacheMap.get(input);
    return merged !== void 0 ? merged : mergeCachedMap(input);
  } : mergeCached;
  const merge = function() {
    return arguments.length === 1 && typeof arguments[0] === "string" ? mergeString(arguments[0]) : mergeString(twJoin.apply(null, arguments));
  };
  return {
    merge,
    mergeString,
    seenBefore: cacheSize === 0 ? () => false : seenBefore,
    mergeUncached: mergeClassList
  };
};
var resolveValue = (v, clsxMode) => {
  if (!v) return "";
  if (typeof v === "string") return v;
  let out = "";
  if (typeof v.length === "number" && (clsxMode ? Array.isArray(v) : true)) {
    const arr = v;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (!item) continue;
      const r2 = typeof item === "string" ? item : resolveValue(item, clsxMode);
      if (r2) {
        if (out) out += " ";
        out += r2;
      }
    }
    return out;
  }
  if (clsxMode) {
    if (typeof v === "number") return "" + v;
    if (typeof v === "object") {
      for (const k in v) if (v[k]) {
        if (out) out += " ";
        out += k;
      }
    }
  }
  return out;
};
var joinArgs = (args, clsxMode) => {
  let s = "";
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (!a) continue;
    const r2 = typeof a === "string" ? a : resolveValue(a, clsxMode);
    if (r2) {
      if (s) s += " ";
      s += r2;
    }
  }
  return s;
};
var twJoin = function() {
  return joinArgs(arguments, false);
};
var BUCKET_CAP = 256;
var BUCKET_MISS_CAP = 16;
var BUCKET_SKIP = 1024;
var CHURN_SIZE = 4096;
var wrapClsx = (mergeString, fresh) => {
  const seenBefore = fresh === void 0 ? () => true : fresh.seenBefore;
  const mergeUncached = fresh === void 0 ? mergeString : fresh.mergeUncached;
  let argCache = /* @__PURE__ */ new Map();
  let prevArgCache = /* @__PURE__ */ new Map();
  let argCount = 0;
  let lastHit = null;
  let churnKey = null;
  let churnOwn = [];
  let churnVal = [];
  let churnTick = 0;
  const churnLookup = (key, own, join) => {
    if (churnKey === null) {
      churnKey = new Array(CHURN_SIZE).fill("");
      churnOwn = new Array(CHURN_SIZE).fill("");
      churnVal = new Array(CHURN_SIZE).fill("");
    }
    const way0 = spanHash(key, 0, key.length) & 4094;
    if (churnKey[way0] === key && churnOwn[way0] === own) return churnVal[way0];
    if (churnKey[way0 | 1] === key && churnOwn[way0 | 1] === own) return churnVal[way0 | 1];
    const merged = mergeString(join ? own + " " + key : key);
    const slot = churnKey[way0] === "" ? way0 : way0 | (churnKey[way0 | 1] === "" ? 1 : churnTick++ & 1);
    churnKey[slot] = key;
    churnOwn[slot] = own;
    churnVal[slot] = merged;
    return merged;
  };
  const match3 = (e, v0, v1, v2) => {
    let k = 0;
    if (v0) {
      if (v0 !== e.a0) return false;
      k = 1;
    }
    if (v1) {
      if (v1 !== (k === 0 ? e.a0 : e.a1)) return false;
      k++;
    }
    if (v2) {
      if (v2 !== (k === 0 ? e.a0 : k === 1 ? e.a1 : e.a2)) return false;
      k++;
    }
    return k === e.t;
  };
  const matchN = (e, vals) => {
    const ea = e.a;
    let k = 0;
    for (let i = 0; i < vals.length; i++) {
      const v = vals[i];
      if (!v) continue;
      if (v !== ea[k]) return false;
      k++;
    }
    return k === e.t;
  };
  const resolveArgs = (vals, probed) => {
    const nArgs = vals.length;
    const pred = lastHit === null ? null : lastHit.n;
    if (!probed) {
      if (pred !== null && matchN(pred, vals)) {
        lastHit = pred;
        return pred.r;
      }
      if (lastHit !== null && lastHit !== pred && matchN(lastHit, vals)) return lastHit.r;
    }
    let first = "";
    let firstIdx = -1;
    let truthy = 0;
    let hasResolvedValue = false;
    for (let i = 0; i < nArgs; i++) {
      let v = vals[i];
      if (!v) continue;
      if (typeof v !== "string") {
        v = vals[i] = resolveValue(v, true);
        if (!v) continue;
        hasResolvedValue = true;
      }
      if (firstIdx < 0) {
        first = v;
        firstIdx = i;
      }
      truthy++;
    }
    if (truthy === 0) return "";
    if (truthy === 1) return mergeString(first);
    if (hasResolvedValue) {
      if (pred !== null && matchN(pred, vals)) {
        lastHit = pred;
        return pred.r;
      }
      if (lastHit !== null && lastHit !== pred && matchN(lastHit, vals)) return lastHit.r;
    }
    let bucket = argCache.get(first);
    if (bucket === void 0) {
      bucket = prevArgCache.get(first);
      if (bucket !== void 0) argCache.set(first, bucket);
    }
    let hit = null;
    if (bucket !== void 0) {
      if (bucket.skip > 0) {
        bucket.skip--;
        lastHit = null;
        let joined = first;
        for (let i = firstIdx + 1; i < nArgs; i++) {
          const v = vals[i];
          if (v) joined += " " + v;
        }
        return churnLookup(joined, "", false);
      }
      const entries2 = bucket.e;
      outer: for (let b = 0; b < entries2.length; b++) {
        const e = entries2[b];
        if (e.t !== truthy) continue;
        const ea = e.a;
        let k = 1;
        for (let i = firstIdx + 1; i < nArgs; i++) {
          const v = vals[i];
          if (v && v !== ea[k++]) continue outer;
        }
        hit = e;
        break;
      }
      if (hit !== null) bucket.miss = 0;
    }
    if (hit === null) {
      let joined = first;
      const a = [first];
      for (let i = firstIdx + 1; i < nArgs; i++) {
        const v = vals[i];
        if (!v) continue;
        joined += " " + v;
        a.push(v);
      }
      if (!seenBefore(joined)) return mergeUncached(joined);
      hit = {
        r: mergeString(joined),
        t: a.length,
        a0: a[0],
        a1: a[1],
        a2: a[2] ?? "",
        a,
        n: null
      };
      if (bucket === void 0) argCache.set(first, bucket = {
        e: [],
        miss: 0,
        skip: 0,
        at: 0
      });
      else if (++bucket.miss > BUCKET_MISS_CAP) {
        bucket.miss = BUCKET_MISS_CAP;
        bucket.skip = BUCKET_SKIP;
        bucket.e.length = 0;
        bucket.at = 0;
      }
      const entries2 = bucket.e;
      if (entries2.length < BUCKET_CAP) entries2.push(hit);
      else {
        entries2[bucket.at] = hit;
        bucket.at = bucket.at + 1 & 255;
      }
      if (++argCount > 1e3) {
        argCount = 0;
        prevArgCache = argCache;
        argCache = /* @__PURE__ */ new Map();
      }
    }
    if (lastHit !== null && lastHit !== hit) lastHit.n = hit;
    lastHit = hit;
    return hit.r;
  };
  const mergeSingleValue = (value) => Array.isArray(value) ? resolveArgs(value.slice(), false) : mergeString(resolveValue(value, true));
  return function(v0, v1, v2) {
    const nArgs = arguments.length;
    if ((nArgs | 1) === 3) {
      const lh2 = lastHit;
      if (lh2 !== null) {
        const pred = lh2.n;
        if (pred !== null && match3(pred, v0, v1, v2)) {
          lastHit = pred;
          return pred.r;
        }
        if (lh2 !== pred && match3(lh2, v0, v1, v2)) return lh2.r;
      }
      if (nArgs === 2 && typeof v1 === "string" && v1 !== "") {
        const bucket = argCache.get(v0);
        if (bucket !== void 0 && bucket.skip > 0) {
          bucket.skip--;
          lastHit = null;
          return churnLookup(v1, v0, true);
        }
      }
      return resolveArgs([
        v0,
        v1,
        v2
      ], true);
    }
    if (nArgs === 1) return typeof v0 === "string" ? mergeString(v0) : mergeSingleValue(v0);
    const lh = lastHit;
    if (lh !== null) {
      const pred = lh.n;
      if (pred !== null) {
        const pa = pred.a;
        let k = 0;
        let ok = true;
        for (let i = 0; i < nArgs; i++) {
          const v = arguments[i];
          if (!v) continue;
          if (v !== pa[k]) {
            ok = false;
            break;
          }
          k++;
        }
        if (ok && k === pred.t) {
          lastHit = pred;
          return pred.r;
        }
      }
      if (lh !== pred) {
        const la = lh.a;
        let k = 0;
        let ok = true;
        for (let i = 0; i < nArgs; i++) {
          const v = arguments[i];
          if (!v) continue;
          if (v !== la[k]) {
            ok = false;
            break;
          }
          k++;
        }
        if (ok && k === lh.t) return lh.r;
      }
    }
    const vals = [];
    for (let i = 0; i < nArgs; i++) vals.push(arguments[i]);
    return resolveArgs(vals, true);
  };
};

// node_modules/.pnpm/cn@0.4.0/node_modules/cn/dist/index.js
var instance = /* @__PURE__ */ createEngine(tables_generated_default);
var cn = /* @__PURE__ */ wrapClsx(instance.mergeString, instance);
var twMerge = instance.merge;

// node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.11_@types+react-dom@19.3.0_@types+react@19.3.0__@ty_1cefac523ff1599310033b3615397f52/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
import * as React4 from "react";

// node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+re_f83f88542c24ef44463bf36336741c4c/node_modules/@radix-ui/react-primitive/dist/index.mjs
import * as React3 from "react";
import * as ReactDOM from "react-dom";

// node_modules/.pnpm/@radix-ui+react-slot@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  Root: () => Slot,
  Slot: () => Slot,
  Slottable: () => Slottable,
  createSlot: () => createSlot,
  createSlottable: () => createSlottable
});
import * as React2 from "react";

// node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React from "react";
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// node_modules/.pnpm/@radix-ui+react-slot@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp3 = Object.defineProperty;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot22 = React2.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    React2.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent(child) && typeof use === "function") {
          child = use(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React2.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React2.Children.count(children) === 1 && React2.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React2.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React2.cloneElement(slottableElement, mergedProps);
  });
  Slot22.displayName = `${ownerName}.Slot`;
  return Slot22;
}
__name2(createSlot, "createSlot");
var Slot = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable22 = /* @__PURE__ */ __name2((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
  Slottable22.displayName = `${ownerName}.Slottable`;
  Slottable22.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable22;
}
__name2(createSlottable, "createSlottable");
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name2((slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!React2.isValidElement(child2)) return null;
    return React2.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return React2.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
__name2(mergeProps, "mergeProps");
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name2(getElementRef, "getElementRef");
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name2(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name2(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
__name2(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name2((ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name2((ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = React2[" use ".trim().toString()];

// node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+re_f83f88542c24ef44463bf36336741c4c/node_modules/@radix-ui/react-primitive/dist/index.mjs
import { jsx } from "react/jsx-runtime";
var __defProp4 = Object.defineProperty;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot3 = createSlot(`Primitive.${node}`);
  const Node2 = React3.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
__name3(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");

// node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.11_@types+react-dom@19.3.0_@types+react@19.3.0__@ty_1cefac523ff1599310033b3615397f52/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
import { jsx as jsx2 } from "react/jsx-runtime";
var __defProp5 = Object.defineProperty;
var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var VisuallyHidden = /* @__PURE__ */ React4.forwardRef(
  /* @__PURE__ */ __name4(function VisuallyHidden2(props, forwardedRef) {
    return /* @__PURE__ */ jsx2(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
      }
    );
  }, "VisuallyHidden")
);
var Root = VisuallyHidden;

// node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
import * as React5 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var __defProp6 = Object.defineProperty;
var __name5 = (target, value) => __defProp6(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
  const Context = React5.createContext(defaultContext);
  Context.displayName = rootComponentName + "Context";
  const Provider2 = /* @__PURE__ */ __name5((props) => {
    const { children, ...context } = props;
    const value = React5.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx3(Context.Provider, { value, children });
  }, "Provider");
  Provider2.displayName = rootComponentName + "Provider";
  function useContext22(consumerName, options2 = {}) {
    const { optional = false } = options2;
    const context = React5.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    if (optional) return void 0;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name5(useContext22, "useContext");
  return [Provider2, useContext22];
}
__name5(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React5.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index3 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = /* @__PURE__ */ __name5((props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index3] || BaseContext;
      const value = React5.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx3(Context.Provider, { value, children });
    }, "Provider");
    Provider2.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope, options2 = {}) {
      const { optional = false } = options2;
      const Context = scope?.[scopeName]?.[index3] || BaseContext;
      const context = React5.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      if (optional) return void 0;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    __name5(useContext22, "useContext");
    return [Provider2, useContext22];
  }
  __name5(createContext32, "createContext");
  const createScope = /* @__PURE__ */ __name5(() => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React5.createContext(defaultContext);
    });
    return /* @__PURE__ */ __name5(function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React5.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    }, "useScope");
  }, "createScope");
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name5(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = /* @__PURE__ */ __name5(() => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return /* @__PURE__ */ __name5(function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React5.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    }, "useComposedScopes");
  }, "createScope");
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
__name5(composeContextScopes, "composeContextScopes");

// node_modules/.pnpm/@radix-ui+react-collection@1.1.15_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_ed97e98f526881a1c9b799d335ea2adc/node_modules/@radix-ui/react-collection/dist/index.mjs
import * as React6 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
import * as React22 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var __defProp7 = Object.defineProperty;
var __name6 = (target, value) => __defProp7(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createCollection(name) {
  const PROVIDER_NAME2 = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope3] = createContextScope(PROVIDER_NAME2);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME2,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = /* @__PURE__ */ __name6((props) => {
    const { scope, children } = props;
    const ref = React6.useRef(null);
    const itemMap = React6.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsx4(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME2;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React6.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsx4(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React6.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React6.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React6.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsx4(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection3(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React6.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  __name6(useCollection3, "useCollection");
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection3,
    createCollectionScope3
  ];
}
__name6(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
  static {
    __name6(this, "OrderedDict");
  }
  #keys;
  constructor(entries2) {
    super(entries2);
    this.#keys = [...super.keys()];
    __instanciated.set(this, true);
  }
  set(key, value) {
    if (__instanciated.get(this)) {
      if (this.has(key)) {
        this.#keys[this.#keys.indexOf(key)] = key;
      } else {
        this.#keys.push(key);
      }
    }
    super.set(key, value);
    return this;
  }
  insert(index3, key, value) {
    const has = this.has(key);
    const length = this.#keys.length;
    const relativeIndex = toSafeInteger(index3);
    let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
    if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
      this.set(key, value);
      return this;
    }
    const size4 = this.size + (has ? 0 : 1);
    if (relativeIndex < 0) {
      actualIndex++;
    }
    const keys = [...this.#keys];
    let nextValue;
    let shouldSkip = false;
    for (let i = actualIndex; i < size4; i++) {
      if (actualIndex === i) {
        let nextKey = keys[i];
        if (keys[i] === key) {
          nextKey = keys[i + 1];
        }
        if (has) {
          this.delete(key);
        }
        nextValue = this.get(nextKey);
        this.set(key, value);
      } else {
        if (!shouldSkip && keys[i - 1] === key) {
          shouldSkip = true;
        }
        const currentKey = keys[shouldSkip ? i : i - 1];
        const currentValue = nextValue;
        nextValue = this.get(currentKey);
        this.delete(currentKey);
        this.set(currentKey, currentValue);
      }
    }
    return this;
  }
  with(index3, key, value) {
    const copy2 = new _OrderedDict(this);
    copy2.insert(index3, key, value);
    return copy2;
  }
  before(key) {
    const index3 = this.#keys.indexOf(key) - 1;
    if (index3 < 0) {
      return void 0;
    }
    return this.entryAt(index3);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(key, newKey, value) {
    const index3 = this.#keys.indexOf(key);
    if (index3 === -1) {
      return this;
    }
    return this.insert(index3, newKey, value);
  }
  after(key) {
    let index3 = this.#keys.indexOf(key);
    index3 = index3 === -1 || index3 === this.size - 1 ? -1 : index3 + 1;
    if (index3 === -1) {
      return void 0;
    }
    return this.entryAt(index3);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(key, newKey, value) {
    const index3 = this.#keys.indexOf(key);
    if (index3 === -1) {
      return this;
    }
    return this.insert(index3 + 1, newKey, value);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    this.#keys = [];
    return super.clear();
  }
  delete(key) {
    const deleted = super.delete(key);
    if (deleted) {
      this.#keys.splice(this.#keys.indexOf(key), 1);
    }
    return deleted;
  }
  deleteAt(index3) {
    const key = this.keyAt(index3);
    if (key !== void 0) {
      return this.delete(key);
    }
    return false;
  }
  at(index3) {
    const key = at(this.#keys, index3);
    if (key !== void 0) {
      return this.get(key);
    }
  }
  entryAt(index3) {
    const key = at(this.#keys, index3);
    if (key !== void 0) {
      return [key, this.get(key)];
    }
  }
  indexOf(key) {
    return this.#keys.indexOf(key);
  }
  keyAt(index3) {
    return at(this.#keys, index3);
  }
  from(key, offset4) {
    const index3 = this.indexOf(key);
    if (index3 === -1) {
      return void 0;
    }
    let dest = index3 + offset4;
    if (dest < 0) dest = 0;
    if (dest >= this.size) dest = this.size - 1;
    return this.at(dest);
  }
  keyFrom(key, offset4) {
    const index3 = this.indexOf(key);
    if (index3 === -1) {
      return void 0;
    }
    let dest = index3 + offset4;
    if (dest < 0) dest = 0;
    if (dest >= this.size) dest = this.size - 1;
    return this.keyAt(dest);
  }
  find(predicate, thisArg) {
    let index3 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index3, this])) {
        return entry;
      }
      index3++;
    }
    return void 0;
  }
  findIndex(predicate, thisArg) {
    let index3 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index3, this])) {
        return index3;
      }
      index3++;
    }
    return -1;
  }
  filter(predicate, thisArg) {
    const entries2 = [];
    let index3 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index3, this])) {
        entries2.push(entry);
      }
      index3++;
    }
    return new _OrderedDict(entries2);
  }
  map(callbackfn, thisArg) {
    const entries2 = [];
    let index3 = 0;
    for (const entry of this) {
      entries2.push([entry[0], Reflect.apply(callbackfn, thisArg, [entry, index3, this])]);
      index3++;
    }
    return new _OrderedDict(entries2);
  }
  reduce(...args) {
    const [callbackfn, initialValue] = args;
    let index3 = 0;
    let accumulator = initialValue ?? this.at(0);
    for (const entry of this) {
      if (index3 === 0 && args.length === 1) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index3, this]);
      }
      index3++;
    }
    return accumulator;
  }
  reduceRight(...args) {
    const [callbackfn, initialValue] = args;
    let accumulator = initialValue ?? this.at(-1);
    for (let index3 = this.size - 1; index3 >= 0; index3--) {
      const entry = this.at(index3);
      if (index3 === this.size - 1 && args.length === 1) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index3, this]);
      }
    }
    return accumulator;
  }
  toSorted(compareFn) {
    const entries2 = [...this.entries()].sort(compareFn);
    return new _OrderedDict(entries2);
  }
  toReversed() {
    const reversed = new _OrderedDict();
    for (let index3 = this.size - 1; index3 >= 0; index3--) {
      const key = this.keyAt(index3);
      const element = this.get(key);
      reversed.set(key, element);
    }
    return reversed;
  }
  toSpliced(...args) {
    const entries2 = [...this.entries()];
    entries2.splice(...args);
    return new _OrderedDict(entries2);
  }
  slice(start, end) {
    const result = new _OrderedDict();
    let stop = this.size - 1;
    if (start === void 0) {
      return result;
    }
    if (start < 0) {
      start = start + this.size;
    }
    if (end !== void 0 && end > 0) {
      stop = end - 1;
    }
    for (let index3 = start; index3 <= stop; index3++) {
      const key = this.keyAt(index3);
      const element = this.get(key);
      result.set(key, element);
    }
    return result;
  }
  every(predicate, thisArg) {
    let index3 = 0;
    for (const entry of this) {
      if (!Reflect.apply(predicate, thisArg, [entry, index3, this])) {
        return false;
      }
      index3++;
    }
    return true;
  }
  some(predicate, thisArg) {
    let index3 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index3, this])) {
        return true;
      }
      index3++;
    }
    return false;
  }
};
function at(array, index3) {
  if ("at" in Array.prototype) {
    return Array.prototype.at.call(array, index3);
  }
  const actualIndex = toSafeIndex(array, index3);
  return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name6(at, "at");
function toSafeIndex(array, index3) {
  const length = array.length;
  const relativeIndex = toSafeInteger(index3);
  const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
  return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name6(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
  return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name6(toSafeInteger, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function createCollection2(name) {
  const PROVIDER_NAME2 = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope3] = createContextScope(PROVIDER_NAME2);
  const [CollectionContextProvider, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME2,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new OrderedDict(),
      setItemMap: /* @__PURE__ */ __name6(() => void 0, "setItemMap")
    }
  );
  const CollectionProvider = /* @__PURE__ */ __name6(({ state, ...props }) => {
    return state ? /* @__PURE__ */ jsx22(CollectionProviderImpl, { ...props, state }) : /* @__PURE__ */ jsx22(CollectionInit, { ...props });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME2;
  const CollectionInit = /* @__PURE__ */ __name6((props) => {
    const state = useInitCollection();
    return /* @__PURE__ */ jsx22(CollectionProviderImpl, { ...props, state });
  }, "CollectionInit");
  CollectionInit.displayName = PROVIDER_NAME2 + "Init";
  const CollectionProviderImpl = /* @__PURE__ */ __name6((props) => {
    const { scope, children, state } = props;
    const ref = React22.useRef(null);
    const [collectionElement, setCollectionElement] = React22.useState(
      null
    );
    const composeRefs2 = useComposedRefs(ref, setCollectionElement);
    const [itemMap, setItemMap] = state;
    React22.useEffect(() => {
      if (!collectionElement) return;
      const observer = getChildListObserver(() => {
      });
      observer.observe(collectionElement, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }, [collectionElement]);
    return /* @__PURE__ */ jsx22(
      CollectionContextProvider,
      {
        scope,
        itemMap,
        setItemMap,
        collectionRef: composeRefs2,
        collectionRefObject: ref,
        collectionElement,
        children
      }
    );
  }, "CollectionProviderImpl");
  CollectionProviderImpl.displayName = PROVIDER_NAME2 + "Impl";
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React22.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsx22(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React22.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React22.useRef(null);
      const [element, setElement] = React22.useState(null);
      const composedRefs = useComposedRefs(forwardedRef, ref, setElement);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      const { setItemMap } = context;
      const itemDataRef = React22.useRef(itemData);
      if (!shallowEqual(itemDataRef.current, itemData)) {
        itemDataRef.current = itemData;
      }
      const memoizedItemData = itemDataRef.current;
      React22.useEffect(() => {
        const itemData2 = memoizedItemData;
        setItemMap((map) => {
          if (!element) {
            return map;
          }
          if (!map.has(element)) {
            map.set(element, { ...itemData2, element });
            return map.toSorted(sortByDocumentPosition);
          }
          return map.set(element, { ...itemData2, element }).toSorted(sortByDocumentPosition);
        });
        return () => {
          setItemMap((map) => {
            if (!element || !map.has(element)) {
              return map;
            }
            map.delete(element);
            return new OrderedDict(map);
          });
        };
      }, [element, memoizedItemData, setItemMap]);
      return /* @__PURE__ */ jsx22(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useInitCollection() {
    return React22.useState(new OrderedDict());
  }
  __name6(useInitCollection, "useInitCollection");
  function useCollection3(scope) {
    const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
    return itemMap;
  }
  __name6(useCollection3, "useCollection");
  const functions = {
    createCollectionScope: createCollectionScope3,
    useCollection: useCollection3,
    useInitCollection
  };
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    functions
  ];
}
__name6(createCollection2, "createCollection");
function shallowEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object") return false;
  if (a == null || b == null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (a[key] !== b[key]) return false;
  }
  return true;
}
__name6(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
  return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name6(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
  return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name6(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        callback();
        return;
      }
    }
  });
  return observer;
}
__name6(getChildListObserver, "getChildListObserver");

// node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var __defProp8 = Object.defineProperty;
var __name7 = (target, value) => __defProp8(target, "name", { value, configurable: true });
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return /* @__PURE__ */ __name7(function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  }, "handleEvent");
}
__name7(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access window outside of the DOM");
  }
  return element?.ownerDocument?.defaultView ?? window;
}
__name7(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access document outside of the DOM");
  }
  return element?.ownerDocument ?? document;
}
__name7(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getOwnerDocument(node);
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
__name7(getActiveElement, "getActiveElement");
function isFrame(element) {
  return element.tagName === "IFRAME";
}
__name7(isFrame, "isFrame");

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React9 from "react";

// node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/internal/is-development.false.mjs
var IS_DEVELOPMENT = false;

// node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React7 from "react";
var useLayoutEffect2 = globalThis?.document ? React7.useLayoutEffect : () => {
};

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React23 from "react";

// node_modules/.pnpm/@radix-ui+react-use-effect-event@0.0.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
import * as React8 from "react";
var __defProp9 = Object.defineProperty;
var __name8 = (target, value) => __defProp9(target, "name", { value, configurable: true });
var useReactEffectEvent = React8[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React8[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = React8.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    useLayoutEffect2(() => {
      ref.current = callback;
    });
  }
  return React8.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name8(useEffectEvent, "useEffectEvent");

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var __defProp10 = Object.defineProperty;
var __name9 = (target, value) => __defProp10(target, "name", { value, configurable: true });
var useInsertionEffect = React9[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = /* @__PURE__ */ __name9(() => {
  }, "onChange"),
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (IS_DEVELOPMENT) {
    const isControlledRef = React9.useRef(prop !== void 0);
    React9.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React9.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
__name9(useControllableState, "useControllableState");
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React9.useState(defaultProp);
  const prevValueRef = React9.useRef(value);
  const onChangeRef = React9.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React9.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
__name9(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
  return typeof value === "function";
}
__name9(isFunction, "isFunction");
var SYNC_STATE = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init2) {
  const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = useEffectEvent(onChangeProp);
  if (IS_DEVELOPMENT) {
    const isControlledRef = React23.useRef(controlledState !== void 0);
    React23.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{ ...initialArg, state: defaultProp }];
  if (init2) {
    args.push(init2);
  }
  const [internalState, dispatch] = React23.useReducer(
    (state2, action) => {
      if (action.type === SYNC_STATE) {
        return { ...state2, state: action.state };
      }
      const next = reducer(state2, action);
      if (isControlled && !Object.is(next.state, state2.state)) {
        onChange(next.state);
      }
      return next;
    },
    ...args
  );
  const uncontrolledState = internalState.state;
  const prevValueRef = React23.useRef(uncontrolledState);
  React23.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [uncontrolledState, prevValueRef, isControlled]);
  const state = React23.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return { ...internalState, state: controlledState };
    }
    return internalState;
  }, [internalState, controlledState]);
  React23.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({ type: SYNC_STATE, state: controlledState });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}
__name9(useControllableStateReducer, "useControllableStateReducer");

// node_modules/.pnpm/@radix-ui+react-presence@1.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_2fe228634386b203c3622b9fd60e1034/node_modules/@radix-ui/react-presence/dist/index.mjs
import * as React24 from "react";
import * as React10 from "react";
var __defProp11 = Object.defineProperty;
var __name10 = (target, value) => __defProp11(target, "name", { value, configurable: true });
function useStateMachine(initialState, machine) {
  return React10.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
__name10(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name10((props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React24.Children.only(children);
  const ref = useStableComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React24.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
  const [node, setNode] = React24.useState();
  const stylesRef = React24.useRef(null);
  const prevPresentRef = React24.useRef(present);
  const prevAnimationNameRef = React24.useRef("none");
  const mountAnimationNameRef = React24.useRef(void 0);
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React24.useEffect(() => {
    if (state === "mounted") {
      prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
      mountAnimationNameRef.current = void 0;
    } else {
      prevAnimationNameRef.current = "none";
    }
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        mountAnimationNameRef.current = currentAnimationName;
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = /* @__PURE__ */ __name10((event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      }, "handleAnimationEnd");
      const handleAnimationStart = /* @__PURE__ */ __name10((event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      }, "handleAnimationStart");
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React24.useCallback((node2) => {
      if (node2) {
        const styles = getComputedStyle(node2);
        stylesRef.current = styles;
        mountAnimationNameRef.current = getAnimationName(styles);
      } else {
        stylesRef.current = null;
      }
      setNode(node2);
    }, [])
  };
}
__name10(usePresence, "usePresence");
function setRef2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name10(setRef2, "setRef");
function useStableComposedRefs(...refs) {
  const refsRef = React24.useRef(refs);
  refsRef.current = refs;
  return React24.useCallback((node) => {
    const currentRefs = refsRef.current;
    let hasCleanup = false;
    const cleanups = currentRefs.map((ref) => {
      const cleanup = setRef2(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef2(currentRefs[i], null);
          }
        }
      };
    }
  }, []);
}
__name10(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
__name10(getAnimationName, "getAnimationName");
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name10(getElementRef2, "getElementRef");

// node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
import * as React11 from "react";
var __defProp12 = Object.defineProperty;
var __name11 = (target, value) => __defProp12(target, "name", { value, configurable: true });
var useReactId = React11[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React11.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
__name11(useId, "useId");

// node_modules/.pnpm/@radix-ui+react-direction@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
import * as React12 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var __defProp13 = Object.defineProperty;
var __name12 = (target, value) => __defProp13(target, "name", { value, configurable: true });
var DirectionContext = React12.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React12.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
__name12(useDirection, "useDirection");

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.19_@types+react-dom@19.3.0_@types+react@19.3.0__@_c9641557e0183ada0688bd7873e8a9d9/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import * as React14 from "react";

// node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
import * as React13 from "react";
var __defProp14 = Object.defineProperty;
var __name13 = (target, value) => __defProp14(target, "name", { value, configurable: true });
function useCallbackRef(callback) {
  const callbackRef = React13.useRef(callback);
  React13.useEffect(() => {
    callbackRef.current = callback;
  });
  return React13.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name13(useCallbackRef, "useCallbackRef");

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.19_@types+react-dom@19.3.0_@types+react@19.3.0__@_c9641557e0183ada0688bd7873e8a9d9/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import { jsx as jsx6 } from "react/jsx-runtime";
var __defProp15 = Object.defineProperty;
var __name14 = (target, value) => __defProp15(target, "name", { value, configurable: true });
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React14.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ React14.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name14(function DismissableLayer2(props, forwardedRef) {
    const {
      disableOutsidePointerEvents = false,
      deferPointerDownOutside = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React14.useContext(DismissableLayerContext);
    const [node, setNode] = React14.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = React14.useState({});
    const composedRefs = useComposedRefs(forwardedRef, setNode);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
    const index3 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index3 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const isDeferredPointerDownOutsideRef = React14.useRef(false);
    const pointerDownOutside = usePointerDownOutside(
      (event) => {
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
      },
      {
        ownerDocument,
        deferPointerDownOutside,
        isDeferredPointerDownOutsideRef,
        dismissableSurfaces: context.dismissableSurfaces,
        shouldHandlePointerDownOutside: React14.useCallback(
          (target) => {
            if (!(target instanceof Node)) {
              return false;
            }
            const isPointerDownOnBranch = [...context.branches].some(
              (branch) => branch.contains(target)
            );
            return isPointerEventsEnabled && !isPointerDownOnBranch;
          },
          [context.branches, isPointerEventsEnabled]
        )
      }
    );
    const focusOutside = useFocusOutside((event) => {
      if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const isHighestLayer = node ? index3 === layers.length - 1 : false;
    const handleKeyDown = useCallbackRef((event) => {
      if (event.key !== "Escape") {
        return;
      }
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    });
    React14.useEffect(() => {
      if (!isHighestLayer) {
        return;
      }
      ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, [ownerDocument, isHighestLayer, handleKeyDown]);
    React14.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents) {
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
          }
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React14.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React14.useEffect(() => {
      const handleUpdate = /* @__PURE__ */ __name14(() => force({}), "handleUpdate");
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsx6(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function useDismissableLayerSurface() {
  const context = React14.useContext(DismissableLayerContext);
  const [node, setNode] = React14.useState(null);
  React14.useEffect(() => {
    if (!node) {
      return;
    }
    context.dismissableSurfaces.add(node);
    return () => {
      context.dismissableSurfaces.delete(node);
    };
  }, [node, context.dismissableSurfaces]);
  return setNode;
}
__name14(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name14(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
  const {
    ownerDocument = globalThis?.document,
    deferPointerDownOutside = false,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside = IS_TRUE
  } = args;
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React14.useRef(false);
  const isPointerDownOutsideRef = React14.useRef(false);
  const interceptedOutsideInteractionEventsRef = React14.useRef(/* @__PURE__ */ new Map());
  const handleClickRef = React14.useRef(() => {
  });
  React14.useEffect(() => {
    function resetOutsideInteraction() {
      isPointerDownOutsideRef.current = false;
      isDeferredPointerDownOutsideRef.current = false;
      interceptedOutsideInteractionEventsRef.current.clear();
    }
    __name14(resetOutsideInteraction, "resetOutsideInteraction");
    function isOutsideInteractionIntercepted() {
      return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
    }
    __name14(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
    function handleInteractionCapture(event) {
      if (!isPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isDismissableSurface = target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target));
      if (!isDismissableSurface) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, true);
      }
      if (event.type === "click") {
        window.setTimeout(() => {
          if (isPointerDownOutsideRef.current) {
            handleClickRef.current();
          }
        }, 0);
      }
    }
    __name14(handleInteractionCapture, "handleInteractionCapture");
    function handleInteractionBubble(event) {
      if (isPointerDownOutsideRef.current) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, false);
      }
    }
    __name14(handleInteractionBubble, "handleInteractionBubble");
    const handlePointerDown = /* @__PURE__ */ __name14((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
          resetOutsideInteraction();
          if (!wasOutsideInteractionIntercepted) {
            handleAndDispatchCustomEvent(
              POINTER_DOWN_OUTSIDE,
              handlePointerDownOutside,
              eventDetail,
              { discrete: true }
            );
          }
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        __name14(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
        if (!shouldHandlePointerDownOutside(event.target)) {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          resetOutsideInteraction();
          isPointerInsideReactTreeRef.current = false;
          return;
        }
        const eventDetail = { originalEvent: event };
        isPointerDownOutsideRef.current = true;
        isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
        interceptedOutsideInteractionEventsRef.current.clear();
        if (!deferPointerDownOutside || event.button !== 0) {
          handleAndDispatchPointerDownOutsideEvent2();
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
        resetOutsideInteraction();
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown");
    const outsideInteractionEvents = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const eventName of outsideInteractionEvents) {
      ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
      ownerDocument.addEventListener(eventName, handleInteractionBubble);
    }
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
      for (const eventName of outsideInteractionEvents) {
        ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
        ownerDocument.removeEventListener(eventName, handleInteractionBubble);
      }
    };
  }, [
    ownerDocument,
    handlePointerDownOutside,
    deferPointerDownOutside,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ __name14(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture")
  };
}
__name14(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React14.useRef(false);
  React14.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name14((event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    }, "handleFocus");
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: /* @__PURE__ */ __name14(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ __name14(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
  };
}
__name14(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name14(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
__name14(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");

// node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_91a0a1d715213a5ab8359e0114beaafa/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
import * as React15 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var __defProp16 = Object.defineProperty;
var __name15 = (target, value) => __defProp16(target, "name", { value, configurable: true });
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FocusScope = /* @__PURE__ */ React15.forwardRef(
  /* @__PURE__ */ __name15(function FocusScope2(props, forwardedRef) {
    const {
      loop = false,
      trapped = false,
      onMountAutoFocus: onMountAutoFocusProp,
      onUnmountAutoFocus: onUnmountAutoFocusProp,
      ...scopeProps
    } = props;
    const [container, setContainer] = React15.useState(null);
    const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React15.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, setContainer);
    const focusScope = React15.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    React15.useEffect(() => {
      if (trapped) {
        let handleFocusIn2 = function(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (container.contains(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleFocusOut2 = function(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!container.contains(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleMutations2 = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body) return;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container);
          }
        };
        var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
        __name15(handleFocusIn2, "handleFocusIn");
        __name15(handleFocusOut2, "handleFocusOut");
        __name15(handleMutations2, "handleMutations");
        document.addEventListener("focusin", handleFocusIn2);
        document.addEventListener("focusout", handleFocusOut2);
        const mutationObserver = new MutationObserver(handleMutations2);
        if (container) mutationObserver.observe(container, { childList: true, subtree: true });
        return () => {
          document.removeEventListener("focusin", handleFocusIn2);
          document.removeEventListener("focusout", handleFocusOut2);
          mutationObserver.disconnect();
        };
      }
    }, [trapped, container, focusScope.paused]);
    React15.useEffect(() => {
      if (container) {
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
    const handleKeyDown = React15.useCallback(
      (event) => {
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container2 = event.currentTarget;
          const [first, last] = getTabbableEdges(container2);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container2) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      },
      [loop, trapped, focusScope.paused]
    );
    return /* @__PURE__ */ jsx7(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
  }, "FocusScope")
);
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
__name15(focusFirst, "focusFirst");
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
__name15(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name15((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
__name15(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
  const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
  for (const element of elements) {
    const hidden = canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container });
    if (!hidden) {
      return element;
    }
  }
}
__name15(findVisible, "findVisible");
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
__name15(isHidden, "isHidden");
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
__name15(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
__name15(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
__name15(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index3 = updatedArray.indexOf(item);
  if (index3 !== -1) {
    updatedArray.splice(index3, 1);
  }
  return updatedArray;
}
__name15(arrayRemove, "arrayRemove");
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
__name15(removeLinks, "removeLinks");

// node_modules/.pnpm/@radix-ui+react-portal@1.1.17_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_484564a2ec4329649f69b712999578b8/node_modules/@radix-ui/react-portal/dist/index.mjs
import * as React16 from "react";
import * as ReactDOM2 from "react-dom";
import { jsx as jsx8 } from "react/jsx-runtime";
var __defProp17 = Object.defineProperty;
var __name16 = (target, value) => __defProp17(target, "name", { value, configurable: true });
var Portal = /* @__PURE__ */ React16.forwardRef(
  /* @__PURE__ */ __name16(function Portal2(props, forwardedRef) {
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = React16.useState(false);
    useLayoutEffect2(() => setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? ReactDOM2.createPortal(/* @__PURE__ */ jsx8(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
  }, "Portal")
);

// node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
import * as React17 from "react";
var __defProp18 = Object.defineProperty;
var __name17 = (target, value) => __defProp18(target, "name", { value, configurable: true });
var count2 = 0;
var guards = null;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
__name17(FocusGuards, "FocusGuards");
function useFocusGuards() {
  React17.useEffect(() => {
    if (!guards) {
      guards = { start: createFocusGuard(), end: createFocusGuard() };
    }
    const { start, end } = guards;
    if (document.body.firstElementChild !== start) {
      document.body.insertAdjacentElement("afterbegin", start);
    }
    if (document.body.lastElementChild !== end) {
      document.body.insertAdjacentElement("beforeend", end);
    }
    count2++;
    return () => {
      if (count2 === 1) {
        guards?.start.remove();
        guards?.end.remove();
        guards = null;
      }
      count2 = Math.max(0, count2 - 1);
    };
  }, []);
}
__name17(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
__name17(createFocusGuard, "createFocusGuard");

// node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
import * as React27 from "react";

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/UI.js
import * as React20 from "react";

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState as useState8 } from "react";
function useCallbackRef2(initialValue, callback) {
  var ref = useState8(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
import * as React18 from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React18.useLayoutEffect : React18.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options2);
  return medium;
}

// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
import * as React19 from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React19.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React20.forwardRef(function(props, parentRef) {
  var ref = React20.useRef(null);
  var _a = React20.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React20.createElement(
    React20.Fragment,
    null,
    enabled && React20.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React20.cloneElement(React20.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React20.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import * as React26 from "react";

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React25 from "react";

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/hook.js
import * as React21 from "react";

// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React21.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React25.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React25.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React25.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React26.useRef([]);
  var touchStartRef = React26.useRef([0, 0]);
  var activeAxis = React26.useRef();
  var id = React26.useState(idCounter++)[0];
  var Style2 = React26.useState(styleSingleton)[0];
  var lastProps = React26.useRef(props);
  React26.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React26.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React26.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var selection = window.getSelection();
    var anchorNode = selection && selection.anchorNode;
    var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
    if (isTouchingSelection) {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React26.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React26.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React26.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React26.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React26.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React26.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React26.createElement(
    React26.Fragment,
    null,
    inert ? React26.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React26.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React27.forwardRef(function(props, ref) {
  return React27.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/.pnpm/@radix-ui+react-use-size@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-size/dist/index.mjs
import * as React28 from "react";
var __defProp19 = Object.defineProperty;
var __name18 = (target, value) => __defProp19(target, "name", { value, configurable: true });
function useSize(element) {
  const [size4, setSize] = React28.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries2) => {
        if (!Array.isArray(entries2)) {
          return;
        }
        if (!entries2.length) {
          return;
        }
        const entry = entries2[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}
__name18(useSize, "useSize");

// node_modules/.pnpm/@radix-ui+react-context-menu@2.3.7_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_a45f3c3b96e9a41c7d65148a5c96078f/node_modules/@radix-ui/react-context-menu/dist/index.mjs
var dist_exports5 = {};
__export(dist_exports5, {
  Arrow: () => Arrow23,
  CheckboxItem: () => CheckboxItem2,
  Content: () => Content22,
  ContextMenu: () => ContextMenu,
  ContextMenuArrow: () => ContextMenuArrow,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuItemIndicator: () => ContextMenuItemIndicator,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger,
  Group: () => Group2,
  Item: () => Item22,
  ItemIndicator: () => ItemIndicator2,
  Label: () => Label2,
  Portal: () => Portal22,
  RadioGroup: () => RadioGroup2,
  RadioItem: () => RadioItem2,
  Root: () => Root23,
  Separator: () => Separator2,
  Sub: () => Sub2,
  SubContent: () => SubContent2,
  SubTrigger: () => SubTrigger2,
  Trigger: () => Trigger,
  createContextMenuScope: () => createContextMenuScope
});
import * as React35 from "react";

// node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_1a4859a4d38c8778bb96b91c46c24aae/node_modules/@radix-ui/react-menu/dist/index.mjs
import * as React34 from "react";

// node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a93a51527b621c5e55983a5c5250df35/node_modules/@radix-ui/react-popper/dist/index.mjs
import * as React31 from "react";

// node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
  }
  return coords;
}
async function detectOverflow(state, options2) {
  var _await$platform$isEle;
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options2, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) && await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
    ...platform2,
    detectOverflow
  };
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var arrow = (options2) => ({
  name: "arrow",
  options: options2,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options2, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(minPadding, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "flip",
    options: options2,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options2, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "hide",
    options: options2,
    async fn(state) {
      const {
        rects,
        platform: platform2
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options2, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform2.detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform2.detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options2) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options2, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options2) {
  if (options2 === void 0) {
    options2 = 0;
  }
  return {
    name: "offset",
    options: options2,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options2);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "shift",
    options: options2,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform: platform2
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options2, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    options: options2,
    fn(state) {
      var _rawOffset$mainAxis, _rawOffset$crossAxis;
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options2, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
        crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return {
    name: "size",
    options: options2,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options2, state);
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === void 0) {
    rootBoundary = "viewport";
  }
  const isLayoutViewport = rootBoundary === "layoutViewport";
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
    const shouldDropCurrentNode = !currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static");
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options2 = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries2) {
      const ratio = entries2[0].intersectionRatio;
      if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options2,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options2);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener("resize", handleResize);
  refresh(true);
  return () => {
    win.removeEventListener("resize", handleResize);
    cleanup();
  };
}
function autoUpdate(reference, floating, update, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options2;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update);
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options2) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = options2 != null ? options2 : {};
  const platformWithCache = {
    ...platform,
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/.pnpm/@floating-ui+react-dom@2.1.9_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React29 from "react";
import { useLayoutEffect as useLayoutEffect4 } from "react";
import * as ReactDOM3 from "react-dom";
var isClient = typeof document !== "undefined";
var noop = function noop2() {
};
var index = isClient ? useLayoutEffect4 : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React29.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options2;
  const [data, setData] = React29.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React29.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React29.useState(null);
  const [_floating, _setFloating] = React29.useState(null);
  const setReference = React29.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React29.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React29.useRef(null);
  const floatingRef = React29.useRef(null);
  const dataRef = React29.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React29.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React29.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React29.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React29.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React29.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React29.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options2) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options: options2,
    fn(state) {
      const {
        element,
        padding
      } = typeof options2 === "function" ? options2(state) : options2;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options2, deps) => {
  const result = offset2(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
var shift3 = (options2, deps) => {
  const result = shift2(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
var limitShift3 = (options2, deps) => {
  const result = limitShift2(options2);
  return {
    fn: result.fn,
    options: [options2, deps]
  };
};
var flip3 = (options2, deps) => {
  const result = flip2(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
var size3 = (options2, deps) => {
  const result = size2(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
var hide3 = (options2, deps) => {
  const result = hide2(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};
var arrow3 = (options2, deps) => {
  const result = arrow$1(options2);
  return {
    name: result.name,
    fn: result.fn,
    options: [options2, deps]
  };
};

// node_modules/.pnpm/@radix-ui+react-arrow@1.1.15_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_6edb1cf8e3d8e91f7d7ed004bd71d70d/node_modules/@radix-ui/react-arrow/dist/index.mjs
import * as React30 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var __defProp20 = Object.defineProperty;
var __name19 = (target, value) => __defProp20(target, "name", { value, configurable: true });
var Arrow = /* @__PURE__ */ React30.forwardRef(
  /* @__PURE__ */ __name19(function Arrow2(props, forwardedRef) {
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ jsx9(
      Primitive.svg,
      {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ jsx9("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
);
var Root2 = Arrow;

// node_modules/.pnpm/@radix-ui+react-popper@1.3.7_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a93a51527b621c5e55983a5c5250df35/node_modules/@radix-ui/react-popper/dist/index.mjs
import { jsx as jsx10 } from "react/jsx-runtime";
var __defProp21 = Object.defineProperty;
var __name20 = (target, value) => __defProp21(target, "name", { value, configurable: true });
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = /* @__PURE__ */ __name20((props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React31.useState(null);
  const [placementState, setPlacementState] = React31.useState(void 0);
  return /* @__PURE__ */ jsx10(
    PopperProvider,
    {
      scope: __scopePopper,
      anchor,
      onAnchorChange: setAnchor,
      placementState,
      setPlacementState,
      children
    }
  );
}, "Popper");
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = /* @__PURE__ */ React31.forwardRef(
  /* @__PURE__ */ __name20(function PopperAnchor2(props, forwardedRef) {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React31.useRef(null);
    const onAnchorChange = context.onAnchorChange;
    const callbackRef = React31.useCallback(
      (node) => {
        ref.current = node;
        if (node) {
          onAnchorChange(node);
        }
      },
      [onAnchorChange]
    );
    const composedRefs = useComposedRefs(forwardedRef, callbackRef);
    const anchorRef = React31.useRef(null);
    React31.useEffect(() => {
      if (!virtualRef) {
        return;
      }
      const previousAnchor = anchorRef.current;
      anchorRef.current = virtualRef.current;
      if (previousAnchor !== anchorRef.current) {
        onAnchorChange(anchorRef.current);
      }
    });
    const sideAndAlign = context.placementState && getSideAndAlignFromPlacement(context.placementState);
    const placedSide = sideAndAlign?.[0];
    const placedAlign = sideAndAlign?.[1];
    return virtualRef ? null : /* @__PURE__ */ jsx10(
      Primitive.div,
      {
        "data-radix-popper-side": placedSide,
        "data-radix-popper-align": placedAlign,
        ...anchorProps,
        ref: composedRefs
      }
    );
  }, "PopperAnchor")
);
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = /* @__PURE__ */ React31.forwardRef(
  /* @__PURE__ */ __name20(function PopperContent2(props, forwardedRef) {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = React31.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, setContent);
    const [arrow4, setArrow] = React31.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: /* @__PURE__ */ __name20((...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      }, "whileElementsMounted"),
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: /* @__PURE__ */ __name20(({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }, "apply")
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({
          strategy: "referenceHidden",
          ...detectOverflowOptions,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: hasExplicitBoundaries ? detectOverflowOptions.boundary : void 0
        })
      ]
    });
    const setPlacementState = context.setPlacementState;
    useLayoutEffect2(() => {
      setPlacementState(placement);
      return () => {
        setPlacementState(void 0);
      };
    }, [placement, setPlacementState]);
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = React31.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ jsx10(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          "--radix-popper-transform-origin": [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ jsx10(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            placedAlign,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ jsx10(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: !isPositioned ? "none" : contentProps.style?.animation
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = /* @__PURE__ */ React31.forwardRef(
  /* @__PURE__ */ __name20(function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ jsx10(
        "span",
        {
          ref: contentContext.onArrowChange,
          style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[contentContext.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: `rotate(180deg)`,
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ jsx10(
            Root2,
            {
              ...arrowProps,
              ref: forwardedRef,
              style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  }, "PopperArrow")
);
function isNotNull(value) {
  return value !== null;
}
__name20(isNotNull, "isNotNull");
var transformOrigin = /* @__PURE__ */ __name20((options2) => ({
  name: "transformOrigin",
  options: options2,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options2.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options2.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
}), "transformOrigin");
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
__name20(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");
var Root22 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow3 = PopperArrow;

// node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.19_@types+react-dom@19.3.0_@types+react@19.3.0__@types_81f1fd0d9cdef2b0433035d03950785c/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import * as React33 from "react";

// node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
import * as React210 from "react";
import * as React32 from "react";
var __defProp22 = Object.defineProperty;
var __name21 = (target, value) => __defProp22(target, "name", { value, configurable: true });
var _isHydrated = false;
function useIsHydrated() {
  const [isHydrated, setIsHydrated] = React32.useState(_isHydrated);
  React32.useEffect(() => {
    if (!_isHydrated) {
      _isHydrated = true;
      setIsHydrated(true);
    }
  }, []);
  return isHydrated;
}
__name21(useIsHydrated, "useIsHydrated");
var useReactSyncExternalStore = React210[" useSyncExternalStore ".trim().toString()];
function subscribe() {
  return () => {
  };
}
__name21(subscribe, "subscribe");
function useIsHydratedModern() {
  return useReactSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
__name21(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;

// node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.19_@types+react-dom@19.3.0_@types+react@19.3.0__@types_81f1fd0d9cdef2b0433035d03950785c/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import { jsx as jsx11 } from "react/jsx-runtime";
var __defProp23 = Object.defineProperty;
var __name22 = (target, value) => __defProp23(target, "name", { value, configurable: true });
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ React33.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name22(function RovingFocusGroup2(props, forwardedRef) {
    return /* @__PURE__ */ jsx11(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx11(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx11(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }, "RovingFocusGroup")
);
var RovingFocusGroupImpl = /* @__PURE__ */ React33.forwardRef(/* @__PURE__ */ __name22(function RovingFocusGroupImpl2(props, forwardedRef) {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir: dir2,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React33.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir2);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React33.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React33.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React33.useState(0);
  React33.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsx11(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React33.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React33.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React33.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React33.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsx11(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst2(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
}, "RovingFocusGroupImpl"));
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ React33.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name22(function RovingFocusGroupItem2(props, forwardedRef) {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    const isHydrated = useIsHydrated2();
    useLayoutEffect2(() => {
      if (!isHydrated || !focusable) {
        return;
      }
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }, [isHydrated, focusable, onFocusableItemAdd, onFocusableItemRemove]);
    React33.useEffect(() => {
      if (isHydrated || !focusable) {
        return;
      }
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }, [isHydrated, focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsx11(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsx11(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst2(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
);
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir2) {
  if (dir2 !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name22(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir2) {
  const key = getDirectionAwareKey(event.key, dir2);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name22(getFocusIntent, "getFocusIntent");
function focusFirst2(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
__name22(focusFirst2, "focusFirst");
function wrapArray(array, startIndex) {
  return array.map((_, index3) => array[(startIndex + index3) % array.length]);
}
__name22(wrapArray, "wrapArray");
var Root3 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

// node_modules/.pnpm/@radix-ui+react-menu@2.1.24_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_1a4859a4d38c8778bb96b91c46c24aae/node_modules/@radix-ui/react-menu/dist/index.mjs
import { jsx as jsx12 } from "react/jsx-runtime";
var __defProp24 = Object.defineProperty;
var __name23 = (target, value) => __defProp24(target, "name", { value, configurable: true });
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope2,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = /* @__PURE__ */ __name23((props) => {
  const { __scopeMenu, open = false, children, dir: dir2, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React34.useState(null);
  const isUsingKeyboardRef = React34.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir2);
  React34.useEffect(() => {
    const handleKeyDown = /* @__PURE__ */ __name23(() => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    }, "handleKeyDown");
    const handlePointer = /* @__PURE__ */ __name23(() => isUsingKeyboardRef.current = false, "handlePointer");
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  React34.useEffect(() => {
    if (!open) {
      return;
    }
    const handleBlur = /* @__PURE__ */ __name23(() => handleOpenChange(false), "handleBlur");
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, [open, handleOpenChange]);
  return /* @__PURE__ */ jsx12(Root22, { ...popperScope, children: /* @__PURE__ */ jsx12(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ jsx12(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React34.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
}, "Menu");
var MenuAnchor = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuAnchor2(props, forwardedRef) {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ jsx12(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }, "MenuAnchor")
);
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
  forceMount: void 0
});
var MenuPortal = /* @__PURE__ */ __name23((props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ jsx12(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ jsx12(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx12(Portal, { asChild: true, container, children }) }) });
}, "MenuPortal");
var CONTENT_NAME2 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME2);
var MenuContent = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
    return /* @__PURE__ */ jsx12(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx12(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx12(Collection2.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ jsx12(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx12(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }, "MenuContent")
);
var MenuRootContentModal = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function MenuRootContentModal2(props, forwardedRef) {
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const ref = React34.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React34.useEffect(() => {
      const content = ref.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsx12(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }, "MenuRootContentModal")
);
var MenuRootContentNonModal = /* @__PURE__ */ React34.forwardRef(/* @__PURE__ */ __name23(function MenuRootContentNonModal2(props, forwardedRef) {
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  return /* @__PURE__ */ jsx12(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
}, "MenuRootContentNonModal"));
var Slot2 = createSlot("MenuContent.ScrollLock");
var MenuContentImpl = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function MenuContentImpl2(props, forwardedRef) {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME2, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection2(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React34.useState(null);
    const contentRef = React34.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React34.useRef(0);
    const searchRef = React34.useRef("");
    const pointerGraceTimerRef = React34.useRef(0);
    const pointerGraceIntentRef = React34.useRef(null);
    const pointerDirRef = React34.useRef("right");
    const lastPointerXRef = React34.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React34.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot2, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = /* @__PURE__ */ __name23((key) => {
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      (/* @__PURE__ */ __name23((function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      }), "updateSearch"))(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    }, "handleTypeaheadSearch");
    React34.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React34.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ jsx12(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React34.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React34.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React34.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React34.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ jsx12(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ jsx12(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ jsx12(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ jsx12(
                  Root3,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ jsx12(
                      Content,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content) return;
                          if (!FIRST_LAST_KEYS.includes(event.key)) return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                          focusFirst3(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "MenuContentImpl")
);
var MenuGroup = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuGroup2(props, forwardedRef) {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ jsx12(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }, "MenuGroup")
);
var MenuLabel = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuLabel2(props, forwardedRef) {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ jsx12(Primitive.div, { ...labelProps, ref: forwardedRef });
  }, "MenuLabel")
);
var ITEM_NAME2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function MenuItem2(props, forwardedRef) {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React34.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME2, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME2, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React34.useRef(false);
    const handleSelect = /* @__PURE__ */ __name23(() => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    }, "handleSelect");
    return /* @__PURE__ */ jsx12(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled || event.target !== event.currentTarget) {
            return;
          }
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (isTypingAhead && event.key === " ") {
            return;
          }
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }, "MenuItem")
);
var MenuItemImpl = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuItemImpl2(props, forwardedRef) {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME2, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = React34.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React34.useState(false);
    const [textContent, setTextContent] = React34.useState("");
    React34.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ jsx12(
      Collection2.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ jsx12(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ jsx12(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
);
var MenuCheckboxItem = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function MenuCheckboxItem2(props, forwardedRef) {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ jsx12(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsx12(
      MenuItem,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }, "MenuCheckboxItem")
);
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME,
  { value: void 0, onValueChange: /* @__PURE__ */ __name23(() => {
  }, "onValueChange") }
);
var MenuRadioGroup = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuRadioGroup2(props, forwardedRef) {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef(onValueChange);
    return /* @__PURE__ */ jsx12(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ jsx12(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }, "MenuRadioGroup")
);
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuRadioItem2(props, forwardedRef) {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ jsx12(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsx12(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }, "MenuRadioItem")
);
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function MenuItemIndicator2(props, forwardedRef) {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ jsx12(
      Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ jsx12(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }, "MenuItemIndicator")
);
var MenuSeparator = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuSeparator2(props, forwardedRef) {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ jsx12(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }, "MenuSeparator")
);
var MenuArrow = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuArrow2(props, forwardedRef) {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ jsx12(Arrow3, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }, "MenuArrow")
);
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = /* @__PURE__ */ __name23((props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = React34.useState(null);
  const [content, setContent] = React34.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React34.useEffect(() => {
    if (parentMenuContext.open === false) handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return /* @__PURE__ */ jsx12(Root22, { ...popperScope, children: /* @__PURE__ */ jsx12(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ jsx12(
        MenuSubProvider,
        {
          scope: __scopeMenu,
          contentId: useId(),
          triggerId: useId(),
          trigger,
          onTriggerChange: setTrigger,
          children
        }
      )
    }
  ) });
}, "MenuSub");
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuSubTrigger2(props, forwardedRef) {
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = React34.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = React34.useCallback(() => {
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React34.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    React34.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    const composedRefs = useComposedRefs(forwardedRef, subContext.onTriggerChange);
    return /* @__PURE__ */ jsx12(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ jsx12(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? subContext.contentId : void 0,
        "data-state": getOpenState(context.open),
        ...props,
        ref: composedRefs,
        onClick: (event) => {
          props.onClick?.(event);
          if (props.disabled || event.defaultPrevented) return;
          event.currentTarget.focus();
          if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const side = context.content?.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (props.disabled || event.target !== event.currentTarget) {
            return;
          }
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (isTypingAhead && event.key === " ") {
            return;
          }
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            context.content?.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }, "MenuSubTrigger")
);
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = /* @__PURE__ */ React34.forwardRef(
  /* @__PURE__ */ __name23(function MenuSubContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, align = "start", ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = React34.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    return /* @__PURE__ */ jsx12(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx12(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx12(Collection2.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx12(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align,
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            subContext.trigger?.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function getOpenState(open) {
  return open ? "open" : "closed";
}
__name23(getOpenState, "getOpenState");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name23(isIndeterminate, "isIndeterminate");
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name23(getCheckedState, "getCheckedState");
function focusFirst3(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
__name23(focusFirst3, "focusFirst");
function wrapArray2(array, startIndex) {
  return array.map((_, index3) => array[(startIndex + index3) % array.length]);
}
__name23(wrapArray2, "wrapArray");
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
__name23(getNextMatch, "getNextMatch");
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
__name23(isPointInPolygon, "isPointInPolygon");
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
__name23(isPointerInGraceArea, "isPointerInGraceArea");
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
__name23(whenMouse, "whenMouse");
var Root32 = Menu;
var Anchor2 = MenuAnchor;
var Portal3 = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow22 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// node_modules/.pnpm/@radix-ui+react-context-menu@2.3.7_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_a45f3c3b96e9a41c7d65148a5c96078f/node_modules/@radix-ui/react-context-menu/dist/index.mjs
import { Fragment as Fragment5, jsx as jsx13, jsxs } from "react/jsx-runtime";
var __defProp25 = Object.defineProperty;
var __name24 = (target, value) => __defProp25(target, "name", { value, configurable: true });
var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [
  createMenuScope
]);
var useMenuScope = createMenuScope();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = /* @__PURE__ */ __name24((props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, dir: dir2, modal = true } = props;
  const hasInteractedRef = React35.useRef(false);
  if (IS_DEVELOPMENT) {
    const hasWarnedRef = React35.useRef(false);
    React35.useEffect(() => {
      if (openProp === true && !hasInteractedRef.current && !hasWarnedRef.current) {
        hasWarnedRef.current = true;
        console.warn(
          "ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."
        );
      }
    }, [openProp]);
  }
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: false,
    onChange: onOpenChange,
    caller: CONTEXT_MENU_NAME
  });
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(
    ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open,
      onOpenChange: setOpen,
      modal,
      hasInteractedRef,
      children: /* @__PURE__ */ jsx13(Root32, { ...menuScope, dir: dir2, open, onOpenChange: setOpen, modal, children })
    }
  );
}, "ContextMenu");
var TRIGGER_NAME = "ContextMenuTrigger";
var ContextMenuTrigger = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name24(function ContextMenuTrigger2(props, forwardedRef) {
    const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
    const context = useContextMenuContext(TRIGGER_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const [point, setPoint] = React35.useState({ x: 0, y: 0 });
    const virtualRef = React35.useMemo(
      () => ({
        current: {
          getBoundingClientRect: /* @__PURE__ */ __name24(() => DOMRect.fromRect({ width: 0, height: 0, ...point }), "getBoundingClientRect")
        }
      }),
      [point]
    );
    const longPressTimerRef = React35.useRef(0);
    const clearLongPress = React35.useCallback(
      () => window.clearTimeout(longPressTimerRef.current),
      []
    );
    const handleOpen = /* @__PURE__ */ __name24((event) => {
      context.hasInteractedRef.current = true;
      setPoint({ x: event.clientX, y: event.clientY });
      context.onOpenChange(true);
    }, "handleOpen");
    React35.useEffect(() => clearLongPress, [clearLongPress]);
    React35.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
    return /* @__PURE__ */ jsxs(Fragment5, { children: [
      /* @__PURE__ */ jsx13(Anchor2, { ...menuScope, virtualRef }),
      /* @__PURE__ */ jsx13(
        Primitive.span,
        {
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          style: { WebkitTouchCallout: "none", ...props.style },
          onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, (event) => {
            clearLongPress();
            handleOpen(event);
            event.preventDefault();
          }),
          onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(
            props.onPointerDown,
            whenTouchOrPen((event) => {
              clearLongPress();
              if (context.open) {
                context.onOpenChange(false);
              }
              longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
            })
          ),
          onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, whenTouchOrPen(clearLongPress)),
          onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
          onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, whenTouchOrPen(clearLongPress))
        }
      )
    ] });
  }, "ContextMenuTrigger")
);
var ContextMenuPortal = /* @__PURE__ */ __name24((props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(Portal3, { ...menuScope, ...portalProps });
}, "ContextMenuPortal");
var CONTENT_NAME3 = "ContextMenuContent";
var ContextMenuContent = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name24(function ContextMenuContent2(props, forwardedRef) {
    const { __scopeContextMenu, ...contentProps } = props;
    const context = useContextMenuContext(CONTENT_NAME3, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = React35.useRef(false);
    return /* @__PURE__ */ jsx13(
      Content2,
      {
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
        },
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }, "ContextMenuContent")
);
var ContextMenuGroup = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name24(function ContextMenuGroup2(props, forwardedRef) {
    const { __scopeContextMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ jsx13(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }, "ContextMenuGroup")
);
var ContextMenuLabel = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name24(function ContextMenuLabel2(props, forwardedRef) {
    const { __scopeContextMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ jsx13(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }, "ContextMenuLabel")
);
var ContextMenuItem = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name24(function ContextMenuItem2(props, forwardedRef) {
    const { __scopeContextMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ jsx13(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }, "ContextMenuItem")
);
var ContextMenuCheckboxItem = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuCheckboxItem2(props, forwardedRef) {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
}, "ContextMenuCheckboxItem"));
var ContextMenuRadioGroup = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuRadioGroup2(props, forwardedRef) {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
}, "ContextMenuRadioGroup"));
var ContextMenuRadioItem = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuRadioItem2(props, forwardedRef) {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
}, "ContextMenuRadioItem"));
var ContextMenuItemIndicator = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuItemIndicator2(props, forwardedRef) {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
}, "ContextMenuItemIndicator"));
var ContextMenuSeparator = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuSeparator2(props, forwardedRef) {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
}, "ContextMenuSeparator"));
var ContextMenuArrow = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name24(function ContextMenuArrow2(props, forwardedRef) {
    const { __scopeContextMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ jsx13(Arrow22, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }, "ContextMenuArrow")
);
var SUB_NAME2 = "ContextMenuSub";
var ContextMenuSub = /* @__PURE__ */ __name24((props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SUB_NAME2
  });
  return /* @__PURE__ */ jsx13(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
}, "ContextMenuSub");
var ContextMenuSubTrigger = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuSubTrigger2(props, forwardedRef) {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(SubTrigger, { ...menuScope, ...triggerItemProps, ref: forwardedRef });
}, "ContextMenuSubTrigger"));
var ContextMenuSubContent = /* @__PURE__ */ React35.forwardRef(/* @__PURE__ */ __name24(function ContextMenuSubContent2(props, forwardedRef) {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ jsx13(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
}, "ContextMenuSubContent"));
function whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
__name24(whenTouchOrPen, "whenTouchOrPen");
var Root23 = ContextMenu;
var Trigger = ContextMenuTrigger;
var Portal22 = ContextMenuPortal;
var Content22 = ContextMenuContent;
var Group2 = ContextMenuGroup;
var Label2 = ContextMenuLabel;
var Item22 = ContextMenuItem;
var CheckboxItem2 = ContextMenuCheckboxItem;
var RadioGroup2 = ContextMenuRadioGroup;
var RadioItem2 = ContextMenuRadioItem;
var ItemIndicator2 = ContextMenuItemIndicator;
var Separator2 = ContextMenuSeparator;
var Arrow23 = ContextMenuArrow;
var Sub2 = ContextMenuSub;
var SubTrigger2 = ContextMenuSubTrigger;
var SubContent2 = ContextMenuSubContent;

// node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.24_@types+react-dom@19.3.0_@types+react@19.3.0__@type_7d49998c05ab8caaa25682aaeda077f5/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var dist_exports7 = {};
__export(dist_exports7, {
  Arrow: () => Arrow24,
  CheckboxItem: () => CheckboxItem22,
  Content: () => Content23,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuArrow: () => DropdownMenuArrow,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuItemIndicator: () => DropdownMenuItemIndicator,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Group: () => Group22,
  Item: () => Item23,
  ItemIndicator: () => ItemIndicator22,
  Label: () => Label22,
  Portal: () => Portal23,
  RadioGroup: () => RadioGroup22,
  RadioItem: () => RadioItem22,
  Root: () => Root24,
  Separator: () => Separator22,
  Sub: () => Sub22,
  SubContent: () => SubContent22,
  SubTrigger: () => SubTrigger22,
  Trigger: () => Trigger2,
  createDropdownMenuScope: () => createDropdownMenuScope
});
import * as React36 from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var __defProp26 = Object.defineProperty;
var __name25 = (target, value) => __defProp26(target, "name", { value, configurable: true });
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope2 = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = /* @__PURE__ */ __name25((props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir: dir2,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  const triggerRef = React36.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DROPDOWN_MENU_NAME
  });
  return /* @__PURE__ */ jsx14(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React36.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ jsx14(Root32, { ...menuScope, open, onOpenChange: setOpen, dir: dir2, modal, children })
    }
  );
}, "DropdownMenu");
var TRIGGER_NAME2 = "DropdownMenuTrigger";
var DropdownMenuTrigger = /* @__PURE__ */ React36.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name25(function DropdownMenuTrigger2(props, forwardedRef) {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME2, __scopeDropdownMenu);
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    const composedRefs = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsx14(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ jsx14(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composedRefs,
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open) event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled) return;
          if (["Enter", " "].includes(event.key)) context.onOpenToggle();
          if (event.key === "ArrowDown") context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key)) event.preventDefault();
        })
      }
    ) });
  }, "DropdownMenuTrigger")
);
var DropdownMenuPortal = /* @__PURE__ */ __name25((props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(Portal3, { ...menuScope, ...portalProps });
}, "DropdownMenuPortal");
var CONTENT_NAME4 = "DropdownMenuContent";
var DropdownMenuContent = /* @__PURE__ */ React36.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name25(function DropdownMenuContent2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME4, __scopeDropdownMenu);
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React36.useRef(false);
    return /* @__PURE__ */ jsx14(
      Content2,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }, "DropdownMenuContent")
);
var DropdownMenuGroup = /* @__PURE__ */ React36.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name25(function DropdownMenuGroup2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return /* @__PURE__ */ jsx14(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }, "DropdownMenuGroup")
);
var DropdownMenuLabel = /* @__PURE__ */ React36.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name25(function DropdownMenuLabel2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return /* @__PURE__ */ jsx14(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }, "DropdownMenuLabel")
);
var DropdownMenuItem = /* @__PURE__ */ React36.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name25(function DropdownMenuItem2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return /* @__PURE__ */ jsx14(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }, "DropdownMenuItem")
);
var DropdownMenuCheckboxItem = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuCheckboxItem2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
}, "DropdownMenuCheckboxItem"));
var DropdownMenuRadioGroup = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuRadioGroup2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
}, "DropdownMenuRadioGroup"));
var DropdownMenuRadioItem = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuRadioItem2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
}, "DropdownMenuRadioItem"));
var DropdownMenuItemIndicator = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuItemIndicator2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
}, "DropdownMenuItemIndicator"));
var DropdownMenuSeparator = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuSeparator2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
}, "DropdownMenuSeparator"));
var DropdownMenuArrow = /* @__PURE__ */ React36.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name25(function DropdownMenuArrow2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return /* @__PURE__ */ jsx14(Arrow22, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }, "DropdownMenuArrow")
);
var DropdownMenuSub = /* @__PURE__ */ __name25((props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ jsx14(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
}, "DropdownMenuSub");
var DropdownMenuSubTrigger = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuSubTrigger2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
}, "DropdownMenuSubTrigger"));
var DropdownMenuSubContent = /* @__PURE__ */ React36.forwardRef(/* @__PURE__ */ __name25(function DropdownMenuSubContent2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx14(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
}, "DropdownMenuSubContent"));
var Root24 = DropdownMenu;
var Trigger2 = DropdownMenuTrigger;
var Portal23 = DropdownMenuPortal;
var Content23 = DropdownMenuContent;
var Group22 = DropdownMenuGroup;
var Label22 = DropdownMenuLabel;
var Item23 = DropdownMenuItem;
var CheckboxItem22 = DropdownMenuCheckboxItem;
var RadioGroup22 = DropdownMenuRadioGroup;
var RadioItem22 = DropdownMenuRadioItem;
var ItemIndicator22 = DropdownMenuItemIndicator;
var Separator22 = DropdownMenuSeparator;
var Arrow24 = DropdownMenuArrow;
var Sub22 = DropdownMenuSub;
var SubTrigger22 = DropdownMenuSubTrigger;
var SubContent22 = DropdownMenuSubContent;

// node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var __defProp27 = Object.defineProperty;
var __name26 = (target, value) => __defProp27(target, "name", { value, configurable: true });
function clamp2(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
__name26(clamp2, "clamp");

// node_modules/.pnpm/@radix-ui+react-scroll-area@1.2.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+_47b6dff4b2d9824e3df7c2f128498256/node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var dist_exports8 = {};
__export(dist_exports8, {
  Corner: () => Corner,
  Root: () => Root4,
  ScrollArea: () => ScrollArea,
  ScrollAreaCorner: () => ScrollAreaCorner,
  ScrollAreaScrollbar: () => ScrollAreaScrollbar,
  ScrollAreaThumb: () => ScrollAreaThumb,
  ScrollAreaViewport: () => ScrollAreaViewport,
  Scrollbar: () => Scrollbar,
  Thumb: () => Thumb,
  Viewport: () => Viewport,
  createScrollAreaScope: () => createScrollAreaScope
});
import * as React211 from "react";
import * as React37 from "react";
import { Fragment as Fragment6, jsx as jsx15, jsxs as jsxs2 } from "react/jsx-runtime";
var __defProp28 = Object.defineProperty;
var __name27 = (target, value) => __defProp28(target, "name", { value, configurable: true });
function useStateMachine2(initialState, machine) {
  return React37.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
__name27(useStateMachine2, "useStateMachine");
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = /* @__PURE__ */ React211.forwardRef(
  /* @__PURE__ */ __name27(function ScrollArea2(props, forwardedRef) {
    const {
      __scopeScrollArea,
      type = "hover",
      dir: dir2,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = React211.useState(null);
    const [viewport, setViewport] = React211.useState(null);
    const [content, setContent] = React211.useState(null);
    const [scrollbarX, setScrollbarX] = React211.useState(null);
    const [scrollbarY, setScrollbarY] = React211.useState(null);
    const [cornerWidth, setCornerWidth] = React211.useState(0);
    const [cornerHeight, setCornerHeight] = React211.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = React211.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = React211.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, setScrollArea);
    const direction = useDirection(dir2);
    return /* @__PURE__ */ jsx15(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ jsx15(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": cornerWidth + "px",
              "--radix-scroll-area-corner-height": cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }, "ScrollArea")
);
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = /* @__PURE__ */ React211.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name27(function ScrollAreaViewport2(props, forwardedRef) {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = React211.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ jsxs2(Fragment6, { children: [
      /* @__PURE__ */ jsx15(ScrollAreaViewportStyle, { nonce }),
      /* @__PURE__ */ jsx15(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: /* @__PURE__ */ jsx15("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }, "ScrollAreaViewport")
);
var ScrollAreaViewportStyle = /* @__PURE__ */ React211.memo(
  /* @__PURE__ */ __name27(function ScrollAreaViewportStyle2({ nonce }) {
    return /* @__PURE__ */ jsx15(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
        },
        nonce
      }
    );
  }, "ScrollAreaViewportStyle"),
  (prevProps, nextProps) => prevProps.nonce === nextProps.nonce
);
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = /* @__PURE__ */ React211.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name27(function ScrollAreaScrollbar2(props, forwardedRef) {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React211.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsx15(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsx15(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsx15(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsx15(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef, "data-state": "visible" }) : null;
  }, "ScrollAreaScrollbar")
);
var ScrollAreaScrollbarHover = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarHover2(props, forwardedRef) {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React211.useState(false);
  React211.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = /* @__PURE__ */ __name27(() => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      }, "handlePointerEnter");
      const handlePointerLeave = /* @__PURE__ */ __name27(() => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      }, "handlePointerLeave");
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsx15(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx15(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
}, "ScrollAreaScrollbarHover"));
var ScrollAreaScrollbarScroll = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarScroll2(props, forwardedRef) {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine2("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React211.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React211.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = /* @__PURE__ */ __name27(() => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      }, "handleScroll");
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsx15(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsx15(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
}, "ScrollAreaScrollbarScroll"));
var ScrollAreaScrollbarAuto = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarAuto2(props, forwardedRef) {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React211.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsx15(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx15(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
}, "ScrollAreaScrollbarAuto"));
var ScrollAreaScrollbarVisible = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarVisible2(props, forwardedRef) {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React211.useRef(null);
  const pointerOffsetRef = React211.useRef(0);
  const [sizes, setSizes] = React211.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: /* @__PURE__ */ __name27((thumb) => thumbRef.current = thumb, "onThumbChange"),
    onThumbPointerUp: /* @__PURE__ */ __name27(() => pointerOffsetRef.current = 0, "onThumbPointerUp"),
    onThumbPointerDown: /* @__PURE__ */ __name27((pointerPos) => pointerOffsetRef.current = pointerPos, "onThumbPointerDown")
  };
  function getScrollPosition(pointerPos, dir2) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir2);
  }
  __name27(getScrollPosition, "getScrollPosition");
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsx15(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset4}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx15(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset4}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
}, "ScrollAreaScrollbarVisible"));
var ScrollAreaScrollbarX = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarX2(props, forwardedRef) {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React211.useState();
  const ref = React211.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React211.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx15(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
}, "ScrollAreaScrollbarX"));
var ScrollAreaScrollbarY = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarY2(props, forwardedRef) {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React211.useState();
  const ref = React211.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React211.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx15(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
}, "ScrollAreaScrollbarY"));
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaScrollbarImpl2(props, forwardedRef) {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React211.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, setScrollbar);
  const rectRef = React211.useRef(null);
  const prevWebkitUserSelectRef = React211.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  __name27(handleDragScroll, "handleDragScroll");
  React211.useEffect(() => {
    const handleWheel = /* @__PURE__ */ __name27((event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    }, "handleWheel");
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React211.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsx15(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef(onThumbChange),
      onThumbPointerUp: useCallbackRef(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      children: /* @__PURE__ */ jsx15(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
}, "ScrollAreaScrollbarImpl"));
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = /* @__PURE__ */ React211.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name27(function ScrollAreaThumb2(props, forwardedRef) {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ jsx15(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsx15(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }, "ScrollAreaThumb")
);
var ScrollAreaThumbImpl = /* @__PURE__ */ React211.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name27(function ScrollAreaThumbImpl2(props, forwardedRef) {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(forwardedRef, scrollbarContext.onThumbChange);
    const removeUnlinkedScrollListenerRef = React211.useRef(void 0);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    React211.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll2 = /* @__PURE__ */ __name27(() => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        }, "handleScroll");
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ jsx15(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }, "ScrollAreaThumbImpl")
);
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = /* @__PURE__ */ React211.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name27(function ScrollAreaCorner2(props, forwardedRef) {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ jsx15(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }, "ScrollAreaCorner")
);
var ScrollAreaCornerImpl = /* @__PURE__ */ React211.forwardRef(/* @__PURE__ */ __name27(function ScrollAreaCornerImpl2(props, forwardedRef) {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React211.useState(0);
  const [height, setHeight] = React211.useState(0);
  const hasSize = Boolean(width && height);
  const { onCornerWidthChange, onCornerHeightChange } = context;
  useResizeObserver(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  React211.useEffect(() => {
    return () => {
      onCornerWidthChange(0);
      onCornerHeightChange(0);
    };
  }, [onCornerWidthChange, onCornerHeightChange]);
  return hasSize ? /* @__PURE__ */ jsx15(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
}, "ScrollAreaCornerImpl"));
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
__name27(toInt, "toInt");
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
__name27(getThumbRatio, "getThumbRatio");
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
__name27(getThumbSize, "getThumbSize");
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir2 = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset4 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset4;
  const minPointerPos = sizes.scrollbar.paddingStart + offset4;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir2 === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
__name27(getScrollPositionFromPointer, "getScrollPositionFromPointer");
function getThumbOffsetFromScroll(scrollPos, sizes, dir2 = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir2 === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
__name27(getThumbOffsetFromScroll, "getThumbOffsetFromScroll");
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
__name27(linearScale, "linearScale");
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
__name27(isScrollingWithinScrollbarBounds, "isScrollingWithinScrollbarBounds");
var addUnlinkedScrollListener = /* @__PURE__ */ __name27((node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (/* @__PURE__ */ __name27((function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  }), "loop"))();
  return () => window.cancelAnimationFrame(rAF);
}, "addUnlinkedScrollListener");
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = React211.useRef(0);
  React211.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React211.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
__name27(useDebounceCallback, "useDebounceCallback");
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
__name27(useResizeObserver, "useResizeObserver");
var Root4 = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;

// node_modules/.pnpm/@radix-ui+react-tooltip@1.2.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+reac_410793db862c85b741943c612cdfda62/node_modules/@radix-ui/react-tooltip/dist/index.mjs
var dist_exports9 = {};
__export(dist_exports9, {
  Arrow: () => Arrow25,
  Content: () => Content24,
  Portal: () => Portal4,
  Provider: () => Provider,
  Root: () => Root33,
  Tooltip: () => Tooltip,
  TooltipArrow: () => TooltipArrow,
  TooltipContent: () => TooltipContent,
  TooltipPortal: () => TooltipPortal,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  Trigger: () => Trigger3,
  createTooltipScope: () => createTooltipScope
});
import * as React38 from "react";
import { jsx as jsx16, jsxs as jsxs3 } from "react/jsx-runtime";
var __defProp29 = Object.defineProperty;
var __name28 = (target, value) => __defProp29(target, "name", { value, configurable: true });
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope2 = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = /* @__PURE__ */ __name28((props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = React38.useRef(true);
  const isPointerInTransitRef = React38.useRef(false);
  const skipDelayTimerRef = React38.useRef(0);
  React38.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ jsx16(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayedRef,
      delayDuration,
      onOpen: React38.useCallback(() => {
        if (skipDelayDuration <= 0) return;
        window.clearTimeout(skipDelayTimerRef.current);
        isOpenDelayedRef.current = false;
      }, [skipDelayDuration]),
      onClose: React38.useCallback(() => {
        if (skipDelayDuration <= 0) return;
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => isOpenDelayedRef.current = true,
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React38.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
}, "TooltipProvider");
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = /* @__PURE__ */ __name28((props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope2(__scopeTooltip);
  const [trigger, setTrigger] = React38.useState(null);
  const [contentIdState, setContentId] = React38.useState(void 0);
  const generatedContentId = useId();
  const openTimerRef = React38.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React38.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: /* @__PURE__ */ __name28((open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange?.(open2);
    }, "onChange"),
    caller: TOOLTIP_NAME
  });
  const stateAttribute = React38.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React38.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React38.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React38.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React38.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  const contentId = contentIdState ?? generatedContentId;
  return /* @__PURE__ */ jsx16(Root22, { ...popperScope, children: /* @__PURE__ */ jsx16(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      setContentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React38.useCallback(() => {
        if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React38.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
}, "Tooltip");
var TRIGGER_NAME3 = "TooltipTrigger";
var TooltipTrigger = /* @__PURE__ */ React38.forwardRef(
  /* @__PURE__ */ __name28(function TooltipTrigger2(props, forwardedRef) {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME3, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME3, __scopeTooltip);
    const popperScope = usePopperScope2(__scopeTooltip);
    const ref = React38.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React38.useRef(false);
    const hasPointerMoveOpenedRef = React38.useRef(false);
    const handlePointerUp = React38.useCallback(() => isPointerDownRef.current = false, []);
    React38.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return /* @__PURE__ */ jsx16(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsx16(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          if (context.open) {
            context.onClose();
          }
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }, "TooltipTrigger")
);
var PORTAL_NAME2 = "TooltipPortal";
var [PortalProvider2, usePortalContext2] = createTooltipContext(PORTAL_NAME2, {
  forceMount: void 0
});
var TooltipPortal = /* @__PURE__ */ __name28((props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME2, __scopeTooltip);
  return /* @__PURE__ */ jsx16(PortalProvider2, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ jsx16(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx16(Portal, { asChild: true, container, children }) }) });
}, "TooltipPortal");
var CONTENT_NAME5 = "TooltipContent";
var TooltipContent = /* @__PURE__ */ React38.forwardRef(
  /* @__PURE__ */ __name28(function TooltipContent2(props, forwardedRef) {
    const portalContext = usePortalContext2(CONTENT_NAME5, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME5, props.__scopeTooltip);
    return /* @__PURE__ */ jsx16(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ jsx16(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx16(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }, "TooltipContent")
);
var TooltipContentHoverable = /* @__PURE__ */ React38.forwardRef(/* @__PURE__ */ __name28(function TooltipContentHoverable2(props, forwardedRef) {
  const context = useTooltipContext(CONTENT_NAME5, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME5, props.__scopeTooltip);
  const ref = React38.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React38.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React38.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React38.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React38.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React38.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = /* @__PURE__ */ __name28((event) => handleCreateGraceArea(event, content), "handleTriggerLeave");
      const handleContentLeave = /* @__PURE__ */ __name28((event) => handleCreateGraceArea(event, trigger), "handleContentLeave");
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React38.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = /* @__PURE__ */ __name28((event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon2(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      }, "handleTrackPointerGrace");
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ jsx16(TooltipContentImpl, { ...props, ref: composedRefs });
}, "TooltipContentHoverable"));
var Slottable2 = createSlottable("TooltipContent");
var TooltipContentImpl = /* @__PURE__ */ React38.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name28(function TooltipContentImpl2(props, forwardedRef) {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      id: idProp,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME5, __scopeTooltip);
    const popperScope = usePopperScope2(__scopeTooltip);
    const { onClose } = context;
    React38.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React38.useEffect(() => {
      if (context.trigger) {
        const handleScroll2 = /* @__PURE__ */ __name28((event) => {
          if (event.target instanceof Node && event.target.contains(context.trigger)) {
            onClose();
          }
        }, "handleScroll");
        window.addEventListener("scroll", handleScroll2, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll2, { capture: true });
      }
    }, [context.trigger, onClose]);
    const { setContentId } = context;
    useLayoutEffect2(() => {
      setContentId(idProp);
      return () => {
        setContentId(void 0);
      };
    }, [idProp, setContentId]);
    return /* @__PURE__ */ jsx16(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ jsxs3(
          Content,
          {
            "data-state": context.stateAttribute,
            role: ariaLabel ? void 0 : "tooltip",
            id: ariaLabel ? void 0 : context.contentId,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              /* @__PURE__ */ jsx16(Slottable2, { children }),
              ariaLabel ? /* @__PURE__ */ jsx16(Root, { id: context.contentId, role: "tooltip", children: ariaLabel }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
);
var TooltipArrow = /* @__PURE__ */ React38.forwardRef(
  /* @__PURE__ */ __name28(function TooltipArrow2(props, forwardedRef) {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope2(__scopeTooltip);
    return /* @__PURE__ */ jsx16(Arrow3, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }, "TooltipArrow")
);
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
__name28(getExitSideFromRect, "getExitSideFromRect");
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
__name28(getPaddedExitPoints, "getPaddedExitPoints");
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
__name28(getPointsFromRect, "getPointsFromRect");
function isPointInPolygon2(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
__name28(isPointInPolygon2, "isPointInPolygon");
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
__name28(getHull, "getHull");
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r2 = upperHull[upperHull.length - 2];
      if ((q.x - r2.x) * (p.y - r2.y) >= (q.y - r2.y) * (p.x - r2.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r2 = lowerHull[lowerHull.length - 2];
      if ((q.x - r2.x) * (p.y - r2.y) >= (q.y - r2.y) * (p.x - r2.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
__name28(getHullPresorted, "getHullPresorted");
var Provider = TooltipProvider;
var Root33 = Tooltip;
var Trigger3 = TooltipTrigger;
var Portal4 = TooltipPortal;
var Content24 = TooltipContent;
var Arrow25 = TooltipArrow;

// packages/ui/src/base/tooltip.tsx
import { jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
function Tooltip2({ ...props }) {
  return /* @__PURE__ */ jsx17(dist_exports9.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger3({ ...props }) {
  return /* @__PURE__ */ jsx17(dist_exports9.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent3({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx17(dist_exports9.Portal, { children: /* @__PURE__ */ jsxs4(
    dist_exports9.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-inverse px-3 py-1.5 text-xs text-inverse-foreground has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx17(dist_exports9.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-xs bg-inverse fill-inverse" })
      ]
    }
  ) });
}

// packages/ui/src/base/button.tsx
import { jsx as jsx18, jsxs as jsxs5 } from "react/jsx-runtime";
var buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-base",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/60",
        outline: "border-border bg-background hover:bg-state-hover aria-expanded:bg-state-selected aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-state-hover aria-expanded:bg-state-selected",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/40 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-icon-xs",
        sm: "h-7 gap-1 rounded-md px-2.5 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-icon-sm",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        // 四档图标按钮统一 `rounded-md`：方形按钮体量小，跟相邻的 chip 与行内元素同档
        // （文本控件的 32 / 36px 档仍取基类的 `rounded-lg`，取档口径见 DESIGN.md「圆角」）
        icon: "size-8 rounded-md",
        "icon-xs": "size-6 rounded-md in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-icon-xs",
        "icon-sm": "size-7 rounded-md in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  asChild = false,
  className,
  size: size4 = "default",
  tooltip,
  tooltipSide,
  variant = "default",
  ...props
}) {
  const Comp = asChild ? dist_exports.Root : "button";
  const button = /* @__PURE__ */ jsx18(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size4,
      className: cn(buttonVariants({ variant, size: size4, className })),
      ...props
    }
  );
  if (!tooltip || asChild) return button;
  return /* @__PURE__ */ jsxs5(Tooltip2, { children: [
    /* @__PURE__ */ jsx18(TooltipTrigger3, { asChild: true, children: button }),
    /* @__PURE__ */ jsx18(TooltipContent3, { side: tooltipSide, children: tooltip })
  ] });
}
function IconButton({
  children,
  className,
  label,
  pressed,
  size: size4 = "icon-sm",
  tooltip,
  type = "button",
  variant = "ghost",
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    Button,
    {
      ...props,
      ...pressed === void 0 ? null : { "aria-pressed": pressed },
      "aria-label": label,
      className: cn(pressed && "bg-muted text-foreground", className),
      size: size4,
      tooltip: tooltip ?? label,
      type,
      variant,
      children
    }
  );
}

// packages/ui/src/base/empty.tsx
import { jsx as jsx19, jsxs as jsxs6 } from "react/jsx-runtime";
function Empty({ action, className, hint, icon, title }) {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-2 px-6 py-8 text-center",
        className
      ),
      children: [
        icon ? /* @__PURE__ */ jsx19("span", { "aria-hidden": true, className: "text-foreground-subtle", children: icon }) : null,
        /* @__PURE__ */ jsx19("p", { className: "text-sm font-medium", children: title }),
        hint ? /* @__PURE__ */ jsx19("p", { className: "max-w-md text-xs text-foreground-subtle", children: hint }) : null,
        action ? /* @__PURE__ */ jsx19("div", { className: "mt-1 flex items-center gap-2", children: action }) : null
      ]
    }
  );
}

// plugins/plugins/design/ui/store.ts
import { events, http, react } from "@ucode/plugin-api";
var entries = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Set();
var version = 0;
var subscribe2 = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
var emitChange = () => {
  version += 1;
  for (const listener of listeners) listener();
};
var call = (pluginId, action, sessionId, body = {}) => http.call(pluginId, action, { sessionId, ...body });
var entryOf = (sessionId) => {
  const existing = entries.get(sessionId);
  if (existing) return existing;
  const created = { state: null, error: null };
  entries.set(sessionId, created);
  return created;
};
var write = (sessionId, patch) => {
  entries.set(sessionId, { ...entryOf(sessionId), ...patch });
  emitChange();
};
var load = async (pluginId, sessionId) => {
  const current = entryOf(sessionId);
  try {
    const snapshot = await call(pluginId, "snapshot", sessionId, {
      ...current.pageId ? { pageId: current.pageId } : {}
    });
    const render = current.state === null ? await call(pluginId, "render", sessionId, { pageId: snapshot.pageId }) : await call(pluginId, "render", sessionId, {
      pageId: snapshot.pageId,
      revision: current.state.revision
    });
    const incoming = render.svg === null ? snapshot.revision : render.revision;
    const previous = current.state;
    if (previous !== null && incoming < previous.revision) return;
    entries.set(sessionId, {
      error: null,
      pageId: snapshot.pageId,
      state: {
        revision: incoming,
        pageId: snapshot.pageId,
        pages: snapshot.pages,
        nodes: snapshot.nodes,
        selection: snapshot.selection,
        mentionPrefix: snapshot.mentionPrefix,
        path: snapshot.path,
        truncated: snapshot.truncated === true,
        ...snapshot.warning === void 0 ? {} : { warning: snapshot.warning },
        svg: render.svg ?? previous?.svg ?? "",
        boxes: render.svg === null ? previous?.boxes ?? {} : render.boxes,
        bounds: render.bounds
      }
    });
    emitChange();
  } catch (cause) {
    write(sessionId, { error: cause instanceof Error ? cause.message : String(cause) });
  }
};
var subscribed = /* @__PURE__ */ new Set();
var useDesignCanvas = (sessionId, pluginId) => {
  react.useSyncExternalStore(subscribe2, () => version);
  react.useEffect(() => {
    if (!pluginId || subscribed.has(pluginId)) return;
    subscribed.add(pluginId);
    events.on(pluginId, (event) => {
      if (event.type !== "design_update" && event.type !== "opened") return;
      for (const tracked of entries.keys()) void load(pluginId, tracked);
    });
  }, [pluginId]);
  react.useEffect(() => {
    if (sessionId) void load(pluginId, sessionId);
  }, [pluginId, sessionId]);
  const entry = sessionId === null ? void 0 : entries.get(sessionId);
  return {
    state: entry?.state ?? null,
    error: entry?.error ?? null,
    reload: () => {
      if (sessionId) void load(pluginId, sessionId);
    },
    select: (ids) => {
      if (!sessionId) return;
      const current = entryOf(sessionId).state;
      if (current) write(sessionId, { state: { ...current, selection: [...ids] } });
      void call(pluginId, "select", sessionId, { ids }).catch(() => load(pluginId, sessionId));
    },
    setPage: (pageId) => {
      if (!sessionId) return;
      entries.set(sessionId, { ...entryOf(sessionId), pageId });
      void load(pluginId, sessionId);
    },
    createPage: () => {
      if (!sessionId) return;
      void call(pluginId, "doc", sessionId, { action: "createPage" }).then(
        () => load(pluginId, sessionId)
      );
    },
    openFile: (path) => {
      if (!sessionId) return;
      void call(pluginId, "doc", sessionId, { action: "open", path }).then(
        () => load(pluginId, sessionId)
      );
    }
  };
};

// plugins/plugins/design/ui/host.tsx
import { actions, http as http2 } from "@ucode/plugin-api";
import { createContext as createContext5, useContext as useContext4, useEffect as useEffect21 } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var HostContext = createContext5(null);
function DesignHostProvider({
  value,
  children
}) {
  return /* @__PURE__ */ jsx20(HostContext.Provider, { value, children });
}
var useWorkbench = () => useContext4(HostContext) ?? {
  pluginId: "",
  sessionId: null,
  cwd: null,
  narrow: false
};
var useDesignClient = () => {
  const host = useWorkbench();
  return {
    sessionId: host.sessionId,
    call: (action, body = {}) => http2.call(host.pluginId, action, { sessionId: host.sessionId, ...body })
  };
};
var useClient = () => {
  const host = useWorkbench();
  return {
    apis: {
      design: {
        node: (input) => http2.call(host.pluginId, "node", { sessionId: host.sessionId, id: input.id })
      }
    }
  };
};
var useComposerInsert = () => (item) => {
  actions.insertMention({ scheme: "design", label: item.label, anchor: item.anchor });
};
var hostOf = (props) => ({
  pluginId: props.host.pluginId,
  sessionId: props.host.sessionId,
  cwd: props.host.cwd,
  narrow: props.narrow
});

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef20, createElement as createElement7 } from "react";

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index3, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index3;
}).join(" ").trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef as forwardRef19, createElement as createElement6 } from "react";

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef19(
  ({
    color = "currentColor",
    size: size4 = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement6(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size4,
      height: size4,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size4) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement6(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef20(
    ({ className, ...props }, ref) => createElement7(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
var Check = createLucideIcon("check", __iconNode);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
var ChevronDown = createLucideIcon("chevron-down", __iconNode2);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode3);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/copy.js
var __iconNode4 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
var Copy = createLucideIcon("copy", __iconNode4);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/eye-off.js
var __iconNode5 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
var EyeOff = createLucideIcon("eye-off", __iconNode5);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/file-plus-2.js
var __iconNode6 = [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }],
  ["path", { d: "M6 12v6", key: "1u72j0" }]
];
var FilePlus2 = createLucideIcon("file-plus-2", __iconNode6);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/file-question-mark.js
var __iconNode7 = [
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
];
var FileQuestionMark = createLucideIcon("file-question-mark", __iconNode7);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/frame.js
var __iconNode8 = [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
];
var Frame = createLucideIcon("frame", __iconNode8);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var __iconNode9 = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
];
var GripVertical = createLucideIcon("grip-vertical", __iconNode9);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/image.js
var __iconNode10 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
var Image = createLucideIcon("image", __iconNode10);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js
var __iconNode11 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
var LoaderCircle = createLucideIcon("loader-circle", __iconNode11);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/maximize-2.js
var __iconNode12 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
var Maximize2 = createLucideIcon("maximize-2", __iconNode12);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/message-square-plus.js
var __iconNode13 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 8v6", key: "1ib9pf" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }]
];
var MessageSquarePlus = createLucideIcon("message-square-plus", __iconNode13);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/minus.js
var __iconNode14 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
var Minus = createLucideIcon("minus", __iconNode14);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/plus.js
var __iconNode15 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
var Plus = createLucideIcon("plus", __iconNode15);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js
var __iconNode16 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
var RefreshCw = createLucideIcon("refresh-cw", __iconNode16);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/square.js
var __iconNode17 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
var Square = createLucideIcon("square", __iconNode17);

// node_modules/.pnpm/lucide-react@0.545.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/type.js
var __iconNode18 = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
];
var Type = createLucideIcon("type", __iconNode18);

// plugins/plugins/design/ui/design-tab.tsx
import { useMemo as useMemo13 } from "react";

// packages/ui/src/base/dropdown-menu.tsx
import { jsx as jsx21, jsxs as jsxs7 } from "react/jsx-runtime";
function DropdownMenu2({ ...props }) {
  return /* @__PURE__ */ jsx21(dist_exports7.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger3({
  ...props
}) {
  return /* @__PURE__ */ jsx21(dist_exports7.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent3({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx21(dist_exports7.Portal, { children: /* @__PURE__ */ jsx21(
    dist_exports7.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      align,
      className: cn(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-popover ring-1 ring-border-strong duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem3({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    dist_exports7.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-state-hover focus:text-foreground not-data-[variant=destructive]:focus:**:text-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-base data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator3({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    dist_exports7.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}

// packages/ui/src/base/floating-panel.tsx
import {
  useCallback as useCallback17,
  useEffect as useEffect23,
  useRef as useRef21,
  useState as useState21
} from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/Trans.js
import { useContext as useContext5 } from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/TransWithoutContext.js
import { Fragment as Fragment7, isValidElement as isValidElement2, cloneElement as cloneElement4, createElement as createElement8, Children as Children4 } from "react";

// node_modules/.pnpm/i18next@26.4.2_typescript@7.0.2/node_modules/i18next/dist/esm/i18next.js
var isString = (obj) => typeof obj === "string";
var defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
var makeString = (object) => {
  if (object == null) return "";
  return String(object);
};
var copy = (a, s, t2) => {
  a.forEach((m) => {
    if (s[m]) t2[m] = s[m];
  });
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.includes("###") ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString(object);
var getLastOfPath = (object, path, Empty2) => {
  const stack = !isString(path) ? path : path.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty2) object[key] = new Empty2();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
var setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== void 0 || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === void 0 && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
var getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return void 0;
  if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
  return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
var escape = (data) => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};
var RegExpCache = class {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
};
var chars = [" ", ",", "?", "!", ";"];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => !nsSeparator.includes(c) && !keySeparator.includes(c));
  if (possibleChars.length === 0) return true;
  const r2 = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r2.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r2.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
var deepFind = (obj, path, keySeparator = ".") => {
  if (!obj) return void 0;
  if (obj[path]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
    return obj[path];
  }
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].includes(typeof next) && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
var getCleanedCode = (code) => code?.replace(/_/g, "-");
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    console?.[type]?.apply?.(console, args);
  }
};
var Logger = class _Logger {
  constructor(concreteLogger, options2 = {}) {
    this.init(concreteLogger, options2);
  }
  init(concreteLogger, options2 = {}) {
    this.prefix = options2.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options2;
    this.debug = options2.debug;
  }
  log(...args) {
    return this.forward(args, "log", "", true);
  }
  warn(...args) {
    return this.forward(args, "warn", "", true);
  }
  error(...args) {
    return this.forward(args, "error", "");
  }
  deprecate(...args) {
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    args = args.map((a) => isString(a) ? a.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : a);
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new _Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options2) {
    options2 = options2 || this.options;
    options2.prefix = options2.prefix || this.prefix;
    return new _Logger(this.logger, options2);
  }
};
var baseLogger = new Logger();
var EventEmitter = class {
  constructor() {
    this.observers = {};
  }
  on(events2, listener) {
    events2.split(" ").forEach((event) => {
      if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
    return this;
  }
  emit(event, ...args) {
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer(event, ...args);
        }
      });
    }
  }
};
var ResourceStore = class extends EventEmitter {
  constructor(data, options2 = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super();
    this.data = data || {};
    this.options = options2;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (!this.options.ns.includes(ns)) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index3 = this.options.ns.indexOf(ns);
    if (index3 > -1) {
      this.options.ns.splice(index3, 1);
    }
  }
  getResource(lng, ns, key, options2 = {}) {
    const keySeparator = options2.keySeparator !== void 0 ? options2.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options2.ignoreJSONStructure !== void 0 ? options2.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.includes(".")) {
      path = lng.split(".");
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.includes(".")) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value, options2 = {
    silent: false
  }) {
    const keySeparator = options2.keySeparator !== void 0 ? options2.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.includes(".")) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options2.silent) this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources, options2 = {
    silent: false
  }) {
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options2.silent) this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite, options2 = {
    silent: false,
    skipCopy: false
  }) {
    let path = [lng, ns];
    if (lng.includes(".")) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options2.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options2.silent) this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
};
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options2, translator) {
    processors.forEach((processor) => {
      value = this.processors[processor]?.process(value, key, options2, translator) ?? value;
    });
    return value;
  }
};
var PATH_KEY = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
function createProxy() {
  const state = [];
  const handler = /* @__PURE__ */ Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    proxy?.revoke?.();
    if (key === PATH_KEY) return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(/* @__PURE__ */ Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
  const {
    [PATH_KEY]: path
  } = selector(createProxy());
  const keySeparator = opts?.keySeparator ?? ".";
  const nsSeparator = opts?.nsSeparator ?? ":";
  const strict = opts?.enableSelector === "strict";
  if (path.length > 1 && nsSeparator) {
    const ns = opts?.ns;
    const nsList = strict ? Array.isArray(ns) ? ns : ns ? [ns] : null : Array.isArray(ns) ? ns : null;
    if (nsList) {
      const candidates = strict ? nsList : nsList.length > 1 ? nsList.slice(1) : [];
      if (candidates.includes(path[0])) {
        return `${path[0]}${nsSeparator}${path.slice(1).join(keySeparator)}`;
      }
    }
  }
  return path.join(keySeparator);
}
var shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
var Translator = class _Translator extends EventEmitter {
  constructor(services, options2 = {}) {
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options2;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
    this.checkedLoadedFor = {};
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key, o = {
    interpolation: {}
  }) {
    const opt = {
      ...o
    };
    if (key == null) return false;
    const resolved = this.resolve(key, opt);
    if (resolved?.res === void 0) return false;
    const isObject2 = shouldHandleAsObject(resolved.res);
    if (opt.returnObjects === false && isObject2) {
      return false;
    }
    return true;
  }
  extractFromKey(key, opt) {
    let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
    let namespaces = opt.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.includes(nsSeparator);
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.includes(parts[0])) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, o, lastKey) {
    let opt = typeof o === "object" ? {
      ...o
    } : o;
    if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
      opt = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof opt === "object") opt = {
      ...opt
    };
    if (!opt) opt = {};
    if (keys == null) return "";
    if (typeof keys === "function") keys = keysFromSelector(keys, {
      ...this.options,
      ...opt
    });
    if (!Array.isArray(keys)) keys = [String(keys)];
    keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
      ...this.options,
      ...opt
    }) : String(k));
    const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
    const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], opt);
    const namespace = namespaces[namespaces.length - 1];
    let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const lng = opt.lng || this.language;
    const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng?.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(opt)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(opt)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, opt);
    let res = resolved?.res;
    const resUsedKey = resolved?.usedKey || key;
    const resExactUsedKey = resolved?.exactUsedKey || key;
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
    const hasDefaultValue = _Translator.hasDefaultValue(opt);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
    const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
      ordinal: false
    }) : "";
    const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
    const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && !noObject.includes(resType) && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!opt.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
          ...opt,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r2;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return r2;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            if (hasDefaultValue && !res) {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            } else {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            }
            if (copy2[m] === deepKey) copy2[m] = resForObjHndl[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, opt, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, needsPluralHandling && !updateMissing ? `${key}${this.pluralResolver.getSuffix(lng, opt.count, opt)}` : key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...opt,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
        } else {
          lngs.push(opt.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, opt);
              if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && !suffixes.includes(`${this.options.pluralSeparator}zero`)) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, opt, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
        res = `${namespace}${nsSeparator}${key}`;
      }
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(opt);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, opt, resolved, lastKey) {
    if (this.i18nFormat?.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...opt
      }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!opt.skipInterpolation) {
      if (opt.interpolation) this.interpolator.init({
        ...opt,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...opt.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) opt.nest = false;
      }
      if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
      if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
        if (lastKey?.[0] === args[0] && !opt.context) {
          this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return this.translate(...args, key);
      }, opt);
      if (opt.interpolation) this.interpolator.reset();
    }
    const postProcess = opt.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(opt)
        },
        ...opt
      } : opt, this);
    }
    return res;
  }
  resolve(keys, opt = {}) {
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    if (Array.isArray(keys)) keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
      ...this.options,
      ...opt
    }) : k);
    keys.forEach((k) => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, opt);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
      const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
      const needsContextHandling = opt.context !== void 0 && (isString(opt.context) || typeof opt.context === "number") && opt.context !== "";
      const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!this.checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
          this.checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat?.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              finalKeys.push(key + pluralSuffix);
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                finalKeys.push(contextKey + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, opt);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key, options2 = {}) {
    if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options2);
    return this.resourceStore.getResource(code, ns, key, options2);
  }
  getUsedParamsDetails(options2 = {}) {
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options2.replace && !isString(options2.replace);
    let data = useOptionsReplaceForData ? options2.replace : options2;
    if (useOptionsReplaceForData && typeof options2.count !== "undefined") {
      data = {
        ...data,
        count: options2.count
      };
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options2) {
    const prefix = "defaultValue";
    for (const option in options2) {
      if (Object.prototype.hasOwnProperty.call(options2, option) && option.startsWith(prefix) && void 0 !== options2[option]) {
        return true;
      }
    }
    return false;
  }
};
var LanguageUtil = class {
  constructor(options2) {
    this.options = options2;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
    this.resolveHierarchyCache = {};
  }
  clearCache() {
    this.resolveHierarchyCache = {};
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || !code.includes("-")) return null;
    const p = code.split("-");
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x") return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || !code.includes("-")) return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.includes("-")) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {
      }
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode) return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(code);
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach((code) => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found) return;
        const lngScOnly = this.getScriptPartFromCode(code);
        if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly) return true;
          if (!supportedLng.includes("-") && !lngOnly.includes("-")) return false;
          if (supportedLng.includes("-") && !lngOnly.includes("-") && supportedLng.slice(0, supportedLng.indexOf("-")) === lngOnly) return true;
          if (supportedLng.startsWith(lngOnly) && lngOnly.length > 1) return true;
          return false;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === "function") fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackLng = this.options.fallbackLng;
    const fallbackLngKey = Array.isArray(fallbackLng) ? fallbackLng.join("|") : fallbackLng;
    if (fallbackLngKey !== this._cachedFallbackLng) {
      this.resolveHierarchyCache = {};
      this._cachedFallbackLng = fallbackLngKey;
    }
    const hasCacheableFallback = fallbackCode === void 0 || fallbackCode === false || isString(fallbackCode);
    const usesUncacheableOptionsFallback = fallbackCode === void 0 && typeof this.options.fallbackLng === "function";
    const cacheable = isString(code) && hasCacheableFallback && !usesUncacheableOptionsFallback;
    let cacheKey = null;
    if (cacheable) {
      let fallbackCacheKey;
      if (fallbackCode === void 0) fallbackCacheKey = "undefined";
      else if (fallbackCode === false) fallbackCacheKey = "boolean:false";
      else fallbackCacheKey = `string:${fallbackCode}`;
      cacheKey = `${code.length}:${code}|${fallbackCacheKey}`;
    }
    if (cacheKey !== null) {
      const cached = this.resolveHierarchyCache[cacheKey];
      if (cached !== void 0) return cached.slice();
    }
    const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.includes("-") || code.includes("_"))) {
      if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (!codes.includes(fc)) addCode(this.formatLanguageCode(fc));
    });
    if (cacheKey !== null) {
      this.resolveHierarchyCache[cacheKey] = codes;
      return codes.slice();
    }
    return codes;
  }
};
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
var dummyRule = {
  select: (count3) => count3 === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
var PluralResolver = class {
  constructor(languageUtils, options2 = {}) {
    this.languageUtils = languageUtils;
    this.options = options2;
    this.logger = baseLogger.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code, options2 = {}) {
    const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
    const type = options2.ordinal ? "ordinal" : "cardinal";
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (typeof Intl === "undefined") {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return dummyRule;
      }
      if (!code.match(/-|_/)) return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options2);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code, options2 = {}) {
    let rule = this.getRule(code, options2);
    if (!rule) rule = this.getRule("dev", options2);
    return rule?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(code, key, options2 = {}) {
    return this.getSuffixes(code, options2).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code, options2 = {}) {
    let rule = this.getRule(code, options2);
    if (!rule) rule = this.getRule("dev", options2);
    if (!rule) return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options2.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
  }
  getSuffix(code, count3, options2 = {}) {
    const rule = this.getRule(code, options2);
    if (rule) {
      return `${this.options.prepend}${options2.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count3)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix("dev", count3, options2);
  }
};
var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === void 0) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");
var Interpolator = class {
  constructor(options2 = {}) {
    this.logger = baseLogger.create("interpolator");
    this.options = options2;
    this.format = options2?.interpolation?.format || ((value) => value);
    this.init(options2);
  }
  init(options2 = {}) {
    if (!options2.interpolation) options2.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options2.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix ? regexEscape(unescapePrefix) : "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix ? regexEscape(unescapeSuffix) : "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp?.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options2) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (!key.includes(this.formatSeparator)) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, void 0, lng, {
          ...options2,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options2,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    if (!this.escapeValue && typeof str === "string" && /\$t\([^)]*\{[^}]*\{\{/.test(str)) {
      this.logger.warn("nesting options string contains interpolated variables with escapeValue: false \u2014 if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
    }
    const missingInterpolationHandler = options2?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options2?.interpolation?.skipOnVariables !== void 0 ? options2.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => val
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? this.escape(val) : val
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options2);
            value = isString(temp) ? temp : "";
          } else if (options2 && Object.prototype.hasOwnProperty.call(options2, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], regexSafe(safeValue));
        if (skipOnVariables) {
          todo.regex.lastIndex += safeValue.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc, options2 = {}) {
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (!key.includes(sep)) return key;
      const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.includes(this.prefix)) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options2
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      const keyEndIndex = /{.*}/s.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
      if (keyEndIndex !== -1) {
        formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
        match[1] = match[1].slice(0, keyEndIndex);
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (formatters.length) {
        value = formatters.reduce((v, f) => this.format(v, f, options2.lng, {
          ...options2,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], regexSafe(makeString(value)));
      this.regexp.lastIndex = 0;
    }
    return str;
  }
};
var parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.includes("(")) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].slice(0, -1);
    if (formatName === "currency" && !optStr.includes(":")) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && !optStr.includes(":")) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === "false") formatOptions[trimmedKey] = false;
          if (val === "true") formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
var createCachedFormatter = (fn) => {
  const cache = {};
  return (v, l, o) => {
    let optForCache = o;
    if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [o.interpolationkey]: void 0
      };
    }
    const key = l + JSON.stringify(optForCache);
    let frm = cache[key];
    if (!frm) {
      frm = fn(getCleanedCode(l), o);
      cache[key] = frm;
    }
    return frm(v);
  };
};
var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
var Formatter = class {
  constructor(options2 = {}) {
    this.logger = baseLogger.create("formatter");
    this.options = options2;
    this.init(options2);
  }
  init(services, options2 = {
    interpolation: {}
  }) {
    this.formatSeparator = options2.interpolation.formatSeparator || ",";
    const cf = options2.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
    this.formats = {
      number: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: cf((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: cf((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: cf((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng, options2 = {}) {
    if (!format) return value;
    if (value == null) return value;
    const rawFormats = format.split(this.formatSeparator);
    const formats = [];
    for (let i = 0; i < rawFormats.length; i++) {
      let f = rawFormats[i];
      while (f.indexOf("(") > -1 && !f.includes(")") && i + 1 < rawFormats.length) {
        f = `${f}${this.formatSeparator}${rawFormats[++i]}`;
      }
      formats.push(f);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options2?.formatParams?.[options2.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options2.locale || options2.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options2,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
};
var removePending = (q, name) => {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
var Connector = class extends EventEmitter {
  constructor(backend, store, services, options2 = {}) {
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options2;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options2.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options2.maxRetries >= 0 ? options2.maxRetries : 5;
    this.retryTimeout = options2.retryTimeout >= 1 ? options2.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(services, options2.backend, options2);
  }
  queueLoad(languages, namespaces, options2, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options2.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0) pending[name] = true;
          if (toLoad[name] === void 0) toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read(lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r2 = fc(lng, ns);
        if (r2 && typeof r2.then === "function") {
          r2.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r2);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces, options2 = {}, callback) {
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options2, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name, prefix = "") {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate, options2 = {}, clb = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "") return;
    if (this.backend?.create) {
      const opts = {
        ...options2,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r2;
          if (fc.length === 5) {
            r2 = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r2 = fc(languages, namespace, key, fallbackValue);
          }
          if (r2 && typeof r2.then === "function") {
            r2.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r2);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
};
var get = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  enableSelector: false,
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object") ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options2 = args[3] || args[2];
      Object.keys(options2).forEach((key) => {
        ret[key] = options2[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
});
var transformOptions = (options2) => {
  if (isString(options2.ns)) options2.ns = [options2.ns];
  if (isString(options2.fallbackLng)) options2.fallbackLng = [options2.fallbackLng];
  if (isString(options2.fallbackNS)) options2.fallbackNS = [options2.fallbackNS];
  if (options2.supportedLngs && !options2.supportedLngs.includes("cimode")) {
    options2.supportedLngs = options2.supportedLngs.concat(["cimode"]);
  }
  return options2;
};
var noop3 = () => {
};
var bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
var I18n = class _I18n extends EventEmitter {
  constructor(options2 = {}, callback) {
    super();
    this.options = transformOptions(options2);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options2.isClone) {
      if (!this.options.initAsync) {
        this.init(options2, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options2, callback);
      }, 0);
    }
  }
  init(options2 = {}, callback) {
    this.isInitializing = true;
    if (typeof options2 === "function") {
      callback = options2;
      options2 = {};
    }
    if (options2.defaultNS == null && options2.ns) {
      if (isString(options2.ns)) {
        options2.defaultNS = options2.ns;
      } else if (!options2.ns.includes("translation")) {
        options2.defaultNS = options2.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options2)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options2.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options2.keySeparator;
    }
    if (options2.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options2.nsSeparator;
    }
    if (typeof this.options.overloadTranslationOptionHandler !== "function") {
      this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === "function") return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator
      });
      if (formatter) {
        s.formatter = createClassOnDemand(formatter);
        if (s.formatter.init) s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop3;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = (...args) => this.store[fcName](...args);
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = (...args) => {
        this.store[fcName](...args);
        return this;
      };
    });
    const deferred = defer();
    const load2 = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load2();
    } else {
      setTimeout(load2, 0);
    }
    return deferred;
  }
  loadResources(language, callback = noop3) {
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === "function") usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng) return;
        if (lng === "cimode") return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode") return;
          if (!toLoad.includes(l)) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      this.options.preload?.forEach?.((l) => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop3;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (["cimode", "dev"].includes(l)) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].includes(lngInLngs)) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
    if (!this.resolvedLanguage && !this.languages.includes(l) && this.store.hasLanguageSomeTranslations(l)) {
      this.resolvedLanguage = l;
      this.languages.unshift(l);
    }
  }
  changeLanguage(lng, callback) {
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        if (this.isLanguageChangingTo === lng) {
          setLngProps(l);
          this.translator.changeLanguage(l);
          this.isLanguageChangingTo = void 0;
          this.emit("languageChanged", l);
          this.logger.log("languageChanged", l);
        }
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve((...args) => this.t(...args));
      if (callback) callback(err, (...args) => this.t(...args));
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const fl = isString(lngs) ? lngs : lngs && lngs[0];
      const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        this.services.languageDetector?.cacheUserLanguage?.(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix, fixedOpts) {
    const scopeNs = fixedOpts?.scopeNs;
    const fixedT = (key, opts, ...rest) => {
      let o;
      if (typeof opts !== "object") {
        o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        o = {
          ...opts
        };
      }
      o.lng = o.lng || fixedT.lng;
      o.lngs = o.lngs || fixedT.lngs;
      const explicitCallNs = o.ns !== void 0 && o.ns !== null;
      o.ns = o.ns || fixedT.ns;
      if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const selectorOpts = {
        ...this.options,
        ...o
      };
      if (Array.isArray(scopeNs) && !explicitCallNs) selectorOpts.ns = scopeNs;
      if (typeof o.keyPrefix === "function") o.keyPrefix = keysFromSelector(o.keyPrefix, selectorOpts);
      const keySeparator = this.options.keySeparator || ".";
      let resultKey;
      if (o.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => {
          if (typeof k === "function") k = keysFromSelector(k, selectorOpts);
          return `${o.keyPrefix}${keySeparator}${k}`;
        });
      } else {
        if (typeof key === "function") key = keysFromSelector(key, selectorOpts);
        resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
      }
      return this.t(resultKey, o);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t(...args) {
    return this.translator?.translate(...args);
  }
  exists(...args) {
    return this.translator?.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns, options2 = {}) {
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options2.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode") return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options2.precheck) {
      const preResult = options2.precheck(this, loadNotPending);
      if (preResult !== void 0) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach((n) => {
      if (!this.options.ns.includes(n)) this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => !preloaded.includes(lng) && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!lng) return "rtl";
    try {
      const l = new Intl.Locale(lng);
      if (l && l.getTextInfo) {
        const ti = l.getTextInfo();
        if (ti && ti.direction) return ti.direction;
      }
    } catch (e) {
    }
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
    if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
    return rtlLngs.includes(languageUtils.getLanguagePartFromCode(lng)) || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(options2 = {}, callback) {
    const instance3 = new _I18n(options2, callback);
    instance3.createInstance = _I18n.createInstance;
    return instance3;
  }
  cloneInstance(options2 = {}, callback = noop3) {
    const forkResourceStore = options2.forkResourceStore;
    if (forkResourceStore) delete options2.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options2,
      ...{
        isClone: true
      }
    };
    const clone = new _I18n(mergedOptions);
    if (options2.debug !== void 0 || options2.prefix !== void 0) {
      clone.logger = clone.logger.clone(options2);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = {
          ...this.store.data[l]
        };
        prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = {
            ...prev[l][n]
          };
          return acc;
        }, prev[l]);
        return prev;
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    if (options2.interpolation) {
      const defOpts = get();
      const mergedInterpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation,
        ...options2.interpolation
      };
      const mergedForInterpolator = {
        ...mergedOptions,
        interpolation: mergedInterpolation
      };
      clone.services.interpolator = new Interpolator(mergedForInterpolator);
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", (event, ...args) => {
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
};
var instance2 = I18n.createInstance();
var createInstance = instance2.createInstance;
var dir = instance2.dir;
var init = instance2.init;
var loadResources = instance2.loadResources;
var reloadResources = instance2.reloadResources;
var use2 = instance2.use;
var changeLanguage = instance2.changeLanguage;
var getFixedT = instance2.getFixedT;
var t = instance2.t;
var exists = instance2.exists;
var setDefaultNamespace = instance2.setDefaultNamespace;
var hasLoadedNamespace = instance2.hasLoadedNamespace;
var loadNamespaces = instance2.loadNamespaces;
var loadLanguages = instance2.loadLanguages;

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/utils.js
var warn = (i18n3, code, msg, rest) => {
  const args = [msg, {
    code,
    ...rest || {}
  }];
  if (i18n3?.services?.logger?.forward) {
    return i18n3.services.logger.forward(args, "warn", "react-i18next::", true);
  }
  if (isString2(args[0])) args[0] = `react-i18next:: ${args[0]}`;
  if (i18n3?.services?.logger?.warn) {
    i18n3.services.logger.warn(...args);
  } else if (console?.warn) {
    console.warn(...args);
  }
};
var alreadyWarned = {};
var warnOnce = (i18n3, code, msg, rest) => {
  if (isString2(msg) && alreadyWarned[msg]) return;
  if (isString2(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
  warn(i18n3, code, msg, rest);
};
var loadedClb = (i18n3, cb) => () => {
  if (i18n3.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n3.off("initialized", initialized);
      }, 0);
      cb();
    };
    i18n3.on("initialized", initialized);
  }
};
var loadNamespaces2 = (i18n3, ns, cb) => {
  i18n3.loadNamespaces(ns, loadedClb(i18n3, cb));
};
var loadLanguages2 = (i18n3, lng, ns, cb) => {
  if (isString2(ns)) ns = [ns];
  if (i18n3.options.preload && i18n3.options.preload.indexOf(lng) > -1) return loadNamespaces2(i18n3, ns, cb);
  ns.forEach((n) => {
    if (i18n3.options.ns.indexOf(n) < 0) i18n3.options.ns.push(n);
  });
  i18n3.loadLanguages(lng, loadedClb(i18n3, cb));
};
var hasLoadedNamespace2 = (ns, i18n3, options2 = {}) => {
  if (!i18n3.languages || !i18n3.languages.length) {
    warnOnce(i18n3, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
      languages: i18n3.languages
    });
    return true;
  }
  return i18n3.hasLoadedNamespace(ns, {
    lng: options2.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      if (options2.bindI18n && options2.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
    }
  });
};
var isString2 = (obj) => typeof obj === "string";
var isObject = (obj) => typeof obj === "object" && obj !== null;

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "\xA9",
  "&#169;": "\xA9",
  "&reg;": "\xAE",
  "&#174;": "\xAE",
  "&hellip;": "\u2026",
  "&#8230;": "\u2026",
  "&#x2F;": "/",
  "&#47;": "/"
};
var unescapeHtmlEntity = (m) => htmlEntities[m];
var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/defaults.js
var defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape,
  transDefaultProps: void 0
};
var getDefaults = () => defaultOptions;

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
var getI18n = () => i18nInstance;

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/context.js
import { createContext as createContext6 } from "react";
var I18nContext = createContext6();
var ReportNamespaces = class {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
};

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTrans.js
import { useContext as useContext6 } from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js
import React40 from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js
var TranslationParserError = class _TranslationParserError extends Error {
  constructor(message, position, translationString) {
    super(message);
    this.name = "TranslationParserError";
    this.position = position;
    this.translationString = translationString;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _TranslationParserError);
    }
  }
};

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js
var commonEntities = {
  "&nbsp;": "\xA0",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&copy;": "\xA9",
  "&reg;": "\xAE",
  "&trade;": "\u2122",
  "&hellip;": "\u2026",
  "&ndash;": "\u2013",
  "&mdash;": "\u2014",
  "&lsquo;": "\u2018",
  "&rsquo;": "\u2019",
  "&sbquo;": "\u201A",
  "&ldquo;": "\u201C",
  "&rdquo;": "\u201D",
  "&bdquo;": "\u201E",
  "&dagger;": "\u2020",
  "&Dagger;": "\u2021",
  "&bull;": "\u2022",
  "&prime;": "\u2032",
  "&Prime;": "\u2033",
  "&lsaquo;": "\u2039",
  "&rsaquo;": "\u203A",
  "&sect;": "\xA7",
  "&para;": "\xB6",
  "&middot;": "\xB7",
  "&ensp;": "\u2002",
  "&emsp;": "\u2003",
  "&thinsp;": "\u2009",
  "&euro;": "\u20AC",
  "&pound;": "\xA3",
  "&yen;": "\xA5",
  "&cent;": "\xA2",
  "&curren;": "\xA4",
  "&times;": "\xD7",
  "&divide;": "\xF7",
  "&minus;": "\u2212",
  "&plusmn;": "\xB1",
  "&ne;": "\u2260",
  "&le;": "\u2264",
  "&ge;": "\u2265",
  "&asymp;": "\u2248",
  "&equiv;": "\u2261",
  "&infin;": "\u221E",
  "&int;": "\u222B",
  "&sum;": "\u2211",
  "&prod;": "\u220F",
  "&radic;": "\u221A",
  "&part;": "\u2202",
  "&permil;": "\u2030",
  "&deg;": "\xB0",
  "&micro;": "\xB5",
  "&larr;": "\u2190",
  "&uarr;": "\u2191",
  "&rarr;": "\u2192",
  "&darr;": "\u2193",
  "&harr;": "\u2194",
  "&crarr;": "\u21B5",
  "&lArr;": "\u21D0",
  "&uArr;": "\u21D1",
  "&rArr;": "\u21D2",
  "&dArr;": "\u21D3",
  "&hArr;": "\u21D4",
  "&alpha;": "\u03B1",
  "&beta;": "\u03B2",
  "&gamma;": "\u03B3",
  "&delta;": "\u03B4",
  "&epsilon;": "\u03B5",
  "&zeta;": "\u03B6",
  "&eta;": "\u03B7",
  "&theta;": "\u03B8",
  "&iota;": "\u03B9",
  "&kappa;": "\u03BA",
  "&lambda;": "\u03BB",
  "&mu;": "\u03BC",
  "&nu;": "\u03BD",
  "&xi;": "\u03BE",
  "&omicron;": "\u03BF",
  "&pi;": "\u03C0",
  "&rho;": "\u03C1",
  "&sigma;": "\u03C3",
  "&tau;": "\u03C4",
  "&upsilon;": "\u03C5",
  "&phi;": "\u03C6",
  "&chi;": "\u03C7",
  "&psi;": "\u03C8",
  "&omega;": "\u03C9",
  "&Alpha;": "\u0391",
  "&Beta;": "\u0392",
  "&Gamma;": "\u0393",
  "&Delta;": "\u0394",
  "&Epsilon;": "\u0395",
  "&Zeta;": "\u0396",
  "&Eta;": "\u0397",
  "&Theta;": "\u0398",
  "&Iota;": "\u0399",
  "&Kappa;": "\u039A",
  "&Lambda;": "\u039B",
  "&Mu;": "\u039C",
  "&Nu;": "\u039D",
  "&Xi;": "\u039E",
  "&Omicron;": "\u039F",
  "&Pi;": "\u03A0",
  "&Rho;": "\u03A1",
  "&Sigma;": "\u03A3",
  "&Tau;": "\u03A4",
  "&Upsilon;": "\u03A5",
  "&Phi;": "\u03A6",
  "&Chi;": "\u03A7",
  "&Psi;": "\u03A8",
  "&Omega;": "\u03A9",
  "&Agrave;": "\xC0",
  "&Aacute;": "\xC1",
  "&Acirc;": "\xC2",
  "&Atilde;": "\xC3",
  "&Auml;": "\xC4",
  "&Aring;": "\xC5",
  "&AElig;": "\xC6",
  "&Ccedil;": "\xC7",
  "&Egrave;": "\xC8",
  "&Eacute;": "\xC9",
  "&Ecirc;": "\xCA",
  "&Euml;": "\xCB",
  "&Igrave;": "\xCC",
  "&Iacute;": "\xCD",
  "&Icirc;": "\xCE",
  "&Iuml;": "\xCF",
  "&ETH;": "\xD0",
  "&Ntilde;": "\xD1",
  "&Ograve;": "\xD2",
  "&Oacute;": "\xD3",
  "&Ocirc;": "\xD4",
  "&Otilde;": "\xD5",
  "&Ouml;": "\xD6",
  "&Oslash;": "\xD8",
  "&Ugrave;": "\xD9",
  "&Uacute;": "\xDA",
  "&Ucirc;": "\xDB",
  "&Uuml;": "\xDC",
  "&Yacute;": "\xDD",
  "&THORN;": "\xDE",
  "&szlig;": "\xDF",
  "&agrave;": "\xE0",
  "&aacute;": "\xE1",
  "&acirc;": "\xE2",
  "&atilde;": "\xE3",
  "&auml;": "\xE4",
  "&aring;": "\xE5",
  "&aelig;": "\xE6",
  "&ccedil;": "\xE7",
  "&egrave;": "\xE8",
  "&eacute;": "\xE9",
  "&ecirc;": "\xEA",
  "&euml;": "\xEB",
  "&igrave;": "\xEC",
  "&iacute;": "\xED",
  "&icirc;": "\xEE",
  "&iuml;": "\xEF",
  "&eth;": "\xF0",
  "&ntilde;": "\xF1",
  "&ograve;": "\xF2",
  "&oacute;": "\xF3",
  "&ocirc;": "\xF4",
  "&otilde;": "\xF5",
  "&ouml;": "\xF6",
  "&oslash;": "\xF8",
  "&ugrave;": "\xF9",
  "&uacute;": "\xFA",
  "&ucirc;": "\xFB",
  "&uuml;": "\xFC",
  "&yacute;": "\xFD",
  "&thorn;": "\xFE",
  "&yuml;": "\xFF",
  "&iexcl;": "\xA1",
  "&iquest;": "\xBF",
  "&fnof;": "\u0192",
  "&circ;": "\u02C6",
  "&tilde;": "\u02DC",
  "&OElig;": "\u0152",
  "&oelig;": "\u0153",
  "&Scaron;": "\u0160",
  "&scaron;": "\u0161",
  "&Yuml;": "\u0178",
  "&ordf;": "\xAA",
  "&ordm;": "\xBA",
  "&macr;": "\xAF",
  "&acute;": "\xB4",
  "&cedil;": "\xB8",
  "&sup1;": "\xB9",
  "&sup2;": "\xB2",
  "&sup3;": "\xB3",
  "&frac14;": "\xBC",
  "&frac12;": "\xBD",
  "&frac34;": "\xBE",
  "&spades;": "\u2660",
  "&clubs;": "\u2663",
  "&hearts;": "\u2665",
  "&diams;": "\u2666",
  "&loz;": "\u25CA",
  "&oline;": "\u203E",
  "&frasl;": "\u2044",
  "&weierp;": "\u2118",
  "&image;": "\u2111",
  "&real;": "\u211C",
  "&alefsym;": "\u2135"
};
var entityPattern = new RegExp(Object.keys(commonEntities).map((entity) => entity.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
var decodeHtmlEntities = (text) => text.replace(entityPattern, (match) => commonEntities[match]).replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10))).replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js
var tokenize = (translation) => {
  const tokens = [];
  let position = 0;
  let currentText = "";
  const flushText = () => {
    if (currentText) {
      tokens.push({
        type: "Text",
        value: currentText,
        position: position - currentText.length
      });
      currentText = "";
    }
  };
  while (position < translation.length) {
    const char = translation[position];
    if (char === "<") {
      const tagMatch = translation.slice(position).match(/^<(\d+)>/);
      if (tagMatch) {
        flushText();
        tokens.push({
          type: "TagOpen",
          value: tagMatch[0],
          position,
          tagNumber: parseInt(tagMatch[1], 10)
        });
        position += tagMatch[0].length;
      } else {
        const closeTagMatch = translation.slice(position).match(/^<\/(\d+)>/);
        if (closeTagMatch) {
          flushText();
          tokens.push({
            type: "TagClose",
            value: closeTagMatch[0],
            position,
            tagNumber: parseInt(closeTagMatch[1], 10)
          });
          position += closeTagMatch[0].length;
        } else {
          currentText += char;
          position += 1;
        }
      }
    } else {
      currentText += char;
      position += 1;
    }
  }
  flushText();
  return tokens;
};

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js
import React39 from "react";
var renderDeclarationNode = (declaration, children, childDeclarations) => {
  const {
    type,
    props = {}
  } = declaration;
  if (props.children && Array.isArray(props.children) && childDeclarations) {
    const {
      children: _childrenToRemove,
      ...propsWithoutChildren
    } = props;
    return React39.createElement(type, propsWithoutChildren, ...children);
  }
  if (children.length === 0) {
    return React39.createElement(type, props);
  }
  if (children.length === 1) {
    return React39.createElement(type, props, children[0]);
  }
  return React39.createElement(type, props, ...children);
};
var renderTranslation = (translation, declarations = []) => {
  if (!translation) {
    return [];
  }
  const tokens = tokenize(translation);
  const result = [];
  const stack = [];
  const literalTagNumbers = /* @__PURE__ */ new Set();
  const getCurrentDeclarations = () => {
    if (stack.length === 0) {
      return declarations;
    }
    const parentFrame = stack[stack.length - 1];
    if (parentFrame.declaration.props?.children && Array.isArray(parentFrame.declaration.props.children)) {
      return parentFrame.declaration.props.children;
    }
    return parentFrame.declarations;
  };
  tokens.forEach((token) => {
    switch (token.type) {
      case "Text":
        {
          const decoded = decodeHtmlEntities(token.value);
          const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
          targetArray.push(decoded);
        }
        break;
      case "TagOpen":
        {
          const {
            tagNumber
          } = token;
          const currentDeclarations = getCurrentDeclarations();
          const declaration = currentDeclarations[tagNumber];
          if (!declaration) {
            literalTagNumbers.add(tagNumber);
            const literalText = `<${tagNumber}>`;
            const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
            targetArray.push(literalText);
            break;
          }
          stack.push({
            tagNumber,
            children: [],
            position: token.position,
            declaration,
            declarations: currentDeclarations
          });
        }
        break;
      case "TagClose":
        {
          const {
            tagNumber
          } = token;
          if (literalTagNumbers.has(tagNumber)) {
            const literalText = `</${tagNumber}>`;
            const literalTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
            literalTargetArray.push(literalText);
            literalTagNumbers.delete(tagNumber);
            break;
          }
          if (stack.length === 0) {
            throw new TranslationParserError(`Unexpected closing tag </${tagNumber}> at position ${token.position}`, token.position, translation);
          }
          const frame = stack.pop();
          if (frame.tagNumber !== tagNumber) {
            throw new TranslationParserError(`Mismatched tags: expected </${frame.tagNumber}> but got </${tagNumber}> at position ${token.position}`, token.position, translation);
          }
          const element = renderDeclarationNode(frame.declaration, frame.children, frame.declarations);
          const elementTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
          elementTargetArray.push(element);
        }
        break;
    }
  });
  if (stack.length > 0) {
    const unclosed = stack[stack.length - 1];
    throw new TranslationParserError(`Unclosed tag <${unclosed.tagNumber}> at position ${unclosed.position}`, unclosed.position, translation);
  }
  return result;
};

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTransWithoutContext.js
function IcuTransWithoutContext({
  i18nKey,
  defaultTranslation,
  content,
  ns,
  values = {},
  i18n: i18nFromProps,
  t: tFromProps
}) {
  const i18n3 = i18nFromProps || getI18n();
  if (!i18n3) {
    warnOnce(i18n3, "NO_I18NEXT_INSTANCE", `IcuTrans: You need to pass in an i18next instance using i18nextReactModule`, {
      i18nKey
    });
    return React40.createElement(React40.Fragment, {}, defaultTranslation);
  }
  const t2 = tFromProps || i18n3.t?.bind(i18n3) || ((k) => k);
  let namespaces = ns || t2.ns || i18n3.options?.defaultNS;
  namespaces = isString2(namespaces) ? [namespaces] : namespaces || ["translation"];
  let mergedValues = values;
  if (i18n3.options?.interpolation?.defaultVariables) {
    mergedValues = values && Object.keys(values).length > 0 ? {
      ...values,
      ...i18n3.options.interpolation.defaultVariables
    } : {
      ...i18n3.options.interpolation.defaultVariables
    };
  }
  const translation = t2(i18nKey || defaultTranslation, {
    defaultValue: defaultTranslation,
    ...mergedValues,
    ns: namespaces
  });
  try {
    const rendered = renderTranslation(translation, content);
    return React40.createElement(React40.Fragment, {}, ...rendered);
  } catch (error) {
    warn(i18n3, "ICU_TRANS_RENDER_ERROR", `IcuTrans component error for key "${i18nKey}": ${error.message}`, {
      i18nKey,
      error
    });
    return React40.createElement(React40.Fragment, {}, translation);
  }
}
IcuTransWithoutContext.displayName = "IcuTransWithoutContext";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/IcuTrans.js
function IcuTrans({
  i18nKey,
  defaultTranslation,
  content,
  ns,
  values = {},
  i18n: i18nFromProps,
  t: tFromProps
}) {
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = useContext6(I18nContext) || {};
  const i18n3 = i18nFromProps || i18nFromContext || getI18n();
  const t2 = tFromProps || i18n3?.t.bind(i18n3);
  return IcuTransWithoutContext({
    i18nKey,
    defaultTranslation,
    content,
    ns: ns || t2?.ns || defaultNSFromContext || i18n3?.options?.defaultNS,
    values,
    i18n: i18n3,
    t: tFromProps
  });
}
IcuTrans.displayName = "IcuTrans";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/useTranslation.js
var import_shim = __toESM(require_shim(), 1);
import { useContext as useContext7, useCallback as useCallback16, useMemo as useMemo9, useEffect as useEffect22, useRef as useRef20, useState as useState20 } from "react";
var notReadyT = (k, optsOrDefaultValue) => {
  if (isString2(optsOrDefaultValue)) return optsOrDefaultValue;
  if (isObject(optsOrDefaultValue) && isString2(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
  if (typeof k === "function") return "";
  if (Array.isArray(k)) {
    const last = k[k.length - 1];
    return typeof last === "function" ? "" : last;
  }
  return k;
};
var notReadySnapshot = {
  t: notReadyT,
  ready: false
};
var dummySubscribe = () => () => {
};
var useTranslation2 = (ns, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = useContext7(I18nContext) || {};
  const i18n3 = i18nFromProps || i18nFromContext || getI18n();
  if (i18n3 && !i18n3.reportNamespaces) i18n3.reportNamespaces = new ReportNamespaces();
  if (!i18n3) {
    warnOnce(i18n3, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
  }
  const i18nOptions = useMemo9(() => ({
    ...getDefaults(),
    ...i18n3?.options?.react,
    ...props
  }), [i18n3, props]);
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  const nsOrContext = ns || defaultNSFromContext || i18n3?.options?.defaultNS;
  const unstableNamespaces = isString2(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
  const namespaces = useMemo9(() => unstableNamespaces, unstableNamespaces);
  i18n3?.reportNamespaces?.addUsedNamespaces?.(namespaces);
  const revisionRef = useRef20(0);
  const subscribe3 = useCallback16((callback) => {
    if (!i18n3) return dummySubscribe;
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    const wrappedCallback = () => {
      revisionRef.current += 1;
      callback();
    };
    if (bindI18n) i18n3.on(bindI18n, wrappedCallback);
    if (bindI18nStore) i18n3.store.on(bindI18nStore, wrappedCallback);
    return () => {
      if (bindI18n) bindI18n.split(" ").forEach((e) => i18n3.off(e, wrappedCallback));
      if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n3.store.off(e, wrappedCallback));
    };
  }, [i18n3, i18nOptions]);
  const snapshotRef = useRef20();
  const getSnapshot = useCallback16(() => {
    if (!i18n3) {
      return notReadySnapshot;
    }
    const calculatedReady = !!(i18n3.isInitialized || i18n3.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace2(n, i18n3, i18nOptions));
    const currentLng = props.lng || i18n3.language;
    const currentRevision = revisionRef.current;
    const lastSnapshot = snapshotRef.current;
    if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
      return lastSnapshot;
    }
    const calculatedT = i18n3.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix, {
      scopeNs: namespaces
    });
    const newSnapshot = {
      t: calculatedT,
      ready: calculatedReady,
      lng: currentLng,
      keyPrefix,
      revision: currentRevision
    };
    snapshotRef.current = newSnapshot;
    return newSnapshot;
  }, [i18n3, namespaces, keyPrefix, i18nOptions, props.lng]);
  const [loadCount, setLoadCount] = useState20(0);
  const {
    t: t2,
    ready
  } = (0, import_shim.useSyncExternalStore)(subscribe3, getSnapshot, getSnapshot);
  useEffect22(() => {
    if (i18n3 && !ready && !useSuspense) {
      const onLoaded = () => setLoadCount((c) => c + 1);
      if (props.lng) {
        loadLanguages2(i18n3, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces2(i18n3, namespaces, onLoaded);
      }
    }
  }, [i18n3, props.lng, namespaces, ready, useSuspense, loadCount]);
  const finalI18n = i18n3 || {};
  const wrapperRef = useRef20(null);
  const wrapperLangRef = useRef20();
  const languageKey = (inst) => `${inst.language}|${inst.resolvedLanguage}|${inst.languages?.join(",")}`;
  const createI18nWrapper = (original) => {
    const descriptors = Object.getOwnPropertyDescriptors(original);
    if (descriptors.__original) delete descriptors.__original;
    const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
    if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) {
      try {
        Object.defineProperty(wrapper, "__original", {
          value: original,
          writable: false,
          enumerable: false,
          configurable: false
        });
      } catch (_) {
      }
    }
    return wrapper;
  };
  const ret = useMemo9(() => {
    const original = finalI18n;
    const lang = original && languageKey(original);
    let i18nWrapper = original;
    if (original) {
      if (wrapperRef.current && wrapperRef.current.__original === original) {
        if (wrapperLangRef.current !== lang) {
          i18nWrapper = createI18nWrapper(original);
          wrapperRef.current = i18nWrapper;
          wrapperLangRef.current = lang;
        } else {
          i18nWrapper = wrapperRef.current;
        }
      } else {
        i18nWrapper = createI18nWrapper(original);
        wrapperRef.current = i18nWrapper;
        wrapperLangRef.current = lang;
      }
    }
    const effectiveT = !ready && !useSuspense ? (...args) => {
      warnOnce(i18n3, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
      return t2(...args);
    } : t2;
    const arr = [effectiveT, i18nWrapper, ready];
    arr.t = effectiveT;
    arr.i18n = i18nWrapper;
    arr.ready = ready;
    return arr;
  }, [t2, finalI18n, ready, finalI18n.resolvedLanguage, finalI18n.language, finalI18n.languages]);
  if (i18n3 && useSuspense && !ready) {
    let inDevelopment = false;
    try {
      inDevelopment = true;
    } catch (e) {
    }
    if (inDevelopment) {
      warnOnce(i18n3, "SUSPENDED_WHILE_LOADING", "useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook");
    }
    throw new Promise((resolve) => {
      const onLoaded = () => resolve();
      if (props.lng) {
        loadLanguages2(i18n3, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces2(i18n3, namespaces, onLoaded);
      }
    });
  }
  return ret;
};

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/withTranslation.js
import { createElement as createElement9, forwardRef as forwardRefReact } from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/I18nextProvider.js
import { createElement as createElement10, useMemo as useMemo10 } from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/withSSR.js
import { createElement as createElement11 } from "react";

// node_modules/.pnpm/react-i18next@17.0.15_i18next@26.4.2_typescript@7.0.2__react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@7.0.2/node_modules/react-i18next/dist/es/useSSR.js
import { useContext as useContext8 } from "react";

// packages/ui/src/utils/floating-panel.ts
var clamp3 = (value, min2, max2) => Math.min(Math.max(value, min2), Math.max(min2, max2));
var clampRect = (rect, area, limits) => {
  const width = clamp3(rect.width, limits.minWidth, Math.min(limits.maxWidth, area.width));
  const height = clamp3(rect.height, limits.minHeight, Math.min(limits.maxHeight, area.height));
  return {
    width,
    height,
    x: clamp3(rect.x, 0, Math.max(0, area.width - width)),
    y: clamp3(rect.y, 0, Math.max(0, area.height - height))
  };
};
var clampPosition = (rect, area, visibleHeight = rect.height) => {
  const { x, y } = clampRect({ ...rect, height: visibleHeight }, area, {
    minWidth: 0,
    minHeight: 0,
    maxWidth: rect.width,
    maxHeight: visibleHeight
  });
  return { ...rect, x, y };
};
var dragRect = (start, delta, area, visibleHeight = start.height) => clampPosition({ ...start, x: start.x + delta.x, y: start.y + delta.y }, area, visibleHeight);
var resizeRect = (start, delta, edge, area, limits) => clampRect(
  {
    ...start,
    width: edge.right ? start.width + delta.x : start.width,
    height: edge.bottom ? start.height + delta.y : start.height
  },
  area,
  limits
);

// packages/ui/src/base/floating-panel.tsx
import { Fragment as Fragment8, jsx as jsx23, jsxs as jsxs8 } from "react/jsx-runtime";
var FLOATING_PANEL_HEADER_HEIGHT = 36;
var RESIZE_EDGE = 10;
var PADDING = 12;
var DEFAULT_LIMITS = {
  minWidth: 160,
  minHeight: 120,
  maxWidth: 420,
  maxHeight: 640
};
var readStored = (key) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;
    const value = JSON.parse(raw);
    if (typeof value.x !== "number" || typeof value.y !== "number" || typeof value.width !== "number" || typeof value.height !== "number") {
      return null;
    }
    return {
      x: value.x,
      y: value.y,
      width: value.width,
      height: value.height,
      collapsed: value.collapsed === true
    };
  } catch {
    return null;
  }
};
function FloatingPanel({
  title,
  storageKey,
  children,
  defaultPosition = { x: 12, y: 12 },
  defaultCorner = "top-left",
  defaultSize = { width: 240, height: 320 },
  defaultCollapsed = false,
  limits: limitOverrides
}) {
  const { t: t2 } = useTranslation2();
  const limits = { ...DEFAULT_LIMITS, ...limitOverrides };
  const limitsRef = useRef21(limits);
  limitsRef.current = limits;
  const panelRef = useRef21(null);
  const [rect, setRect] = useState21(() => {
    const stored = readStored(storageKey);
    return stored ?? { ...defaultPosition, ...defaultSize };
  });
  const [collapsed, setCollapsed] = useState21(
    () => readStored(storageKey)?.collapsed ?? defaultCollapsed
  );
  const placed = useRef21(readStored(storageKey) !== null);
  const collapsedRef = useRef21(collapsed);
  collapsedRef.current = collapsed;
  const gesture = useRef21(null);
  const areaElement = useCallback17(() => {
    const panel = panelRef.current;
    if (panel === null) return null;
    return panel.offsetParent ?? panel.parentElement;
  }, []);
  const areaOf = useCallback17(() => {
    const element = areaElement();
    return {
      width: element?.clientWidth ?? window.innerWidth,
      height: element?.clientHeight ?? window.innerHeight
    };
  }, [areaElement]);
  const cornerStyle = () => {
    if (defaultCorner === "top-right") return { right: PADDING, top: PADDING };
    if (defaultCorner === "bottom-right") return { right: PADDING, bottom: PADDING };
    return { left: defaultPosition.x, top: defaultPosition.y };
  };
  const gestureStart = () => {
    if (placed.current) return rect;
    const area = areaElement();
    const panel = panelRef.current;
    if (area === null || panel === null) return rect;
    const areaBox = area.getBoundingClientRect();
    const panelBox = panel.getBoundingClientRect();
    return {
      ...rect,
      x: panelBox.left - areaBox.left,
      y: panelBox.top - areaBox.top
    };
  };
  useEffect23(() => {
    const area = areaElement();
    if (area === null) return;
    const clampNow = () => {
      if (!placed.current) return;
      const element = areaElement();
      if (element === null) return;
      setRect((prev) => clampRect(prev, areaOf(), limitsRef.current));
    };
    clampNow();
    const observer = new ResizeObserver(clampNow);
    observer.observe(area);
    return () => observer.disconnect();
  }, [areaElement, areaOf]);
  useEffect23(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ ...rect, collapsed }));
    } catch {
    }
  }, [collapsed, rect, storageKey]);
  const beginGesture = (event, next) => {
    if (event.button !== 0) return;
    const target = event.target;
    if (target?.closest("button, a, input, textarea, select") != null) {
      return;
    }
    const start = gestureStart();
    if (!placed.current) {
      placed.current = true;
      setRect(start);
    }
    event.preventDefault();
    event.stopPropagation();
    const from = { x: event.clientX, y: event.clientY };
    gesture.current = next.kind === "drag" ? { kind: "drag", pointerId: event.pointerId, start, from } : { kind: "resize", pointerId: event.pointerId, start, from, edge: next.edge };
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
    }
  };
  useEffect23(() => {
    const onMove = (event) => {
      const current = gesture.current;
      if (current === null || event.pointerId !== current.pointerId) return;
      const delta = { x: event.clientX - current.from.x, y: event.clientY - current.from.y };
      const area = areaOf();
      const bounds = limitsRef.current;
      setRect(
        current.kind === "drag" ? (
          // 收起时只有标题栏：边界要按可见高度收，否则拖不到容器底部
          dragRect(
            current.start,
            delta,
            area,
            collapsedRef.current ? FLOATING_PANEL_HEADER_HEIGHT : current.start.height
          )
        ) : resizeRect(current.start, delta, current.edge, area, bounds)
      );
    };
    const onUp = () => {
      gesture.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("blur", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("blur", onUp);
    };
  }, [areaOf]);
  const height = collapsed ? FLOATING_PANEL_HEADER_HEIGHT : rect.height;
  return /* @__PURE__ */ jsxs8(
    "section",
    {
      ref: panelRef,
      className: "absolute z-10 flex flex-col overflow-hidden rounded-lg bg-popover shadow-dialog ring-1 ring-border-strong",
      style: {
        ...placed.current ? { left: rect.x, top: rect.y } : cornerStyle(),
        width: rect.width,
        height
      },
      "aria-label": title,
      children: [
        /* @__PURE__ */ jsxs8(
          "div",
          {
            className: cn(
              "flex h-9 shrink-0 items-center gap-1 border-b border-border px-2 text-xs text-foreground-subtle select-none",
              collapsed ? "border-b-0" : void 0
            ),
            onPointerDown: (event) => beginGesture(event, { kind: "drag" }),
            style: { cursor: "grab", touchAction: "none" },
            children: [
              /* @__PURE__ */ jsx23(GripVertical, { className: "size-icon-xs shrink-0", "aria-hidden": true }),
              /* @__PURE__ */ jsx23("span", { className: "min-w-0 flex-1 truncate", children: title }),
              /* @__PURE__ */ jsx23(
                IconButton,
                {
                  className: "shrink-0 text-foreground-subtle hover:text-foreground",
                  label: collapsed ? t2("\u5C55\u5F00\u9762\u677F") : t2("\u6536\u8D77\u9762\u677F"),
                  size: "icon-xs",
                  onClick: () => setCollapsed((prev) => !prev),
                  children: /* @__PURE__ */ jsx23(
                    ChevronDown,
                    {
                      className: cn("size-icon-xs transition-transform", collapsed && "-rotate-90")
                    }
                  )
                }
              )
            ]
          }
        ),
        collapsed ? null : /* @__PURE__ */ jsx23("div", { className: "flex min-h-0 flex-1 flex-col overflow-hidden", children }),
        collapsed ? null : /* @__PURE__ */ jsx23(Fragment8, { children: /* @__PURE__ */ jsx23(
          "div",
          {
            className: "absolute right-0 bottom-0 cursor-nwse-resize",
            style: { width: RESIZE_EDGE, height: RESIZE_EDGE, touchAction: "none" },
            onPointerDown: (event) => beginGesture(event, { kind: "resize", edge: { right: true, bottom: true } })
          }
        ) })
      ]
    }
  );
}

// packages/ui/src/base/spinner.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
function Spinner({ className }) {
  return /* @__PURE__ */ jsx24(LoaderCircle, { "aria-hidden": true, className: cn("size-icon-sm shrink-0 animate-spin", className) });
}

// plugins/plugins/design/ui/use-canvas-viewport.ts
import { useCallback as useCallback18, useEffect as useEffect24, useRef as useRef22, useState as useState22 } from "react";

// plugins/plugins/design/ui/design-viewport.ts
var DESIGN_MIN_SCALE = 0.1;
var DESIGN_MAX_SCALE = 4;
var DESIGN_FIT_PADDING = 32;
var clampScale = (scale) => Math.min(DESIGN_MAX_SCALE, Math.max(DESIGN_MIN_SCALE, scale));
var designExtent = (boxes, fallback) => {
  const values = Object.values(boxes);
  if (values.length === 0) {
    if (fallback === null) return null;
    return { minX: fallback.x, minY: fallback.y, width: fallback.width, height: fallback.height };
  }
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  for (const box of values) {
    minX = Math.min(minX, box.x);
    minY = Math.min(minY, box.y);
    maxX = Math.max(maxX, box.x + box.width);
    maxY = Math.max(maxY, box.y + box.height);
  }
  return { minX, minY, width: Math.max(0, maxX - minX), height: Math.max(0, maxY - minY) };
};
var fitScale = (extent, area) => {
  if (extent === null || extent.width <= 0 || extent.height <= 0) return 1;
  if (area.width <= 0 || area.height <= 0) return 1;
  const usableWidth = Math.max(1, area.width - DESIGN_FIT_PADDING * 2);
  const usableHeight = Math.max(1, area.height - DESIGN_FIT_PADDING * 2);
  return clampScale(Math.min(1, usableWidth / extent.width, usableHeight / extent.height));
};
var STEP_SCALES = [
  0.1,
  0.15,
  0.25,
  0.33,
  0.5,
  0.67,
  0.75,
  1,
  1.25,
  1.5,
  2,
  2.5,
  3,
  4
];
var stepScale = (scale, direction) => {
  if (direction === 1) {
    return STEP_SCALES.find((step) => step > scale + 1e-6) ?? DESIGN_MAX_SCALE;
  }
  const smaller = [...STEP_SCALES].reverse().find((step) => step < scale - 1e-6);
  return smaller ?? DESIGN_MIN_SCALE;
};
var formatScale = (scale) => {
  const percent = Math.round(scale * 1e3) / 10;
  return `${Number.isInteger(percent) ? percent : percent.toFixed(1)}%`;
};
var panView = (view, dx, dy) => ({
  ...view,
  x: view.x + dx,
  y: view.y + dy
});
var zoomViewAt = (view, cursor, nextScale) => {
  const scale = clampScale(nextScale);
  const ratio = scale / view.scale;
  return {
    scale,
    x: cursor.x - (cursor.x - view.x) * ratio,
    y: cursor.y - (cursor.y - view.y) * ratio
  };
};
var fitView = (extent, area) => {
  const scale = fitScale(extent, area);
  if (extent === null) return { scale, x: 0, y: 0 };
  return {
    scale,
    x: (area.width - extent.width * scale) / 2,
    y: (area.height - extent.height * scale) / 2
  };
};
var normalizeMarquee = (from, to) => ({
  x: Math.min(from.x, to.x),
  y: Math.min(from.y, to.y),
  width: Math.abs(to.x - from.x),
  height: Math.abs(to.y - from.y)
});
var nodesInMarquee = (boxes, marquee) => Object.entries(boxes).filter(
  ([, box]) => box.x < marquee.x + marquee.width && box.x + box.width > marquee.x && box.y < marquee.y + marquee.height && box.y + box.height > marquee.y
).map(([id]) => id);

// plugins/plugins/design/ui/use-canvas-viewport.ts
var ZOOM_SENSITIVITY = 0.01;
var ZOOM_MAX_STEP = 1.2;
var lineHeightOf = (event) => {
  if (event.deltaMode === 1) return 16;
  if (event.deltaMode === 2) return 400;
  return 1;
};
function useCanvasViewport(extent) {
  const elementRef = useRef22(null);
  const layerRef = useRef22(null);
  const [container, setContainer] = useState22(null);
  const [view, setView] = useState22({ scale: 1, x: 0, y: 0 });
  const containerRef = useCallback18((node) => {
    elementRef.current = node;
    setContainer(node);
  }, []);
  const fit = useCallback18(() => {
    const element = elementRef.current;
    if (element === null) return;
    setView(fitView(extent, { width: element.clientWidth, height: element.clientHeight }));
  }, [extent]);
  const zoomTo = useCallback18((nextScaleOf) => {
    const element = elementRef.current;
    if (element === null) return;
    const cursor = { x: element.clientWidth / 2, y: element.clientHeight / 2 };
    setView((prev) => zoomViewAt(prev, cursor, nextScaleOf(prev.scale)));
  }, []);
  const zoomStep = useCallback18(
    (direction) => zoomTo((scale) => stepScale(scale, direction)),
    [zoomTo]
  );
  useEffect24(() => {
    if (container === null) return;
    const element = container;
    const onWheel = (event) => {
      event.preventDefault();
      const rect = element.getBoundingClientRect();
      const cursor = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (event.ctrlKey || event.metaKey) {
        const factor = Math.min(
          ZOOM_MAX_STEP,
          Math.max(1 / ZOOM_MAX_STEP, Math.exp(-event.deltaY * ZOOM_SENSITIVITY))
        );
        setView((prev) => zoomViewAt(prev, cursor, prev.scale * factor));
        return;
      }
      setView(
        (prev) => panView(prev, -event.deltaX * lineHeightOf(event), -event.deltaY * lineHeightOf(event))
      );
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [container]);
  useEffect24(() => {
    if (container === null) return;
    const element = container;
    let dragging = null;
    const onPointerDown = (event) => {
      if (event.button !== 1) return;
      event.preventDefault();
      dragging = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
      try {
        element.setPointerCapture(event.pointerId);
      } catch {
      }
    };
    const onPointerMove = (event) => {
      if (dragging === null || event.pointerId !== dragging.pointerId) return;
      const dx = event.clientX - dragging.x;
      const dy = event.clientY - dragging.y;
      dragging = { ...dragging, x: event.clientX, y: event.clientY };
      setView((prev) => panView(prev, dx, dy));
    };
    const endDrag = () => {
      dragging = null;
    };
    element.addEventListener("pointerdown", onPointerDown);
    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerup", endDrag);
    element.addEventListener("pointercancel", endDrag);
    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerup", endDrag);
      element.removeEventListener("pointercancel", endDrag);
    };
  }, [container]);
  return { containerRef, layerRef, view, fit, zoomTo, zoomStep };
}

// packages/ui/src/base/scroll-area.tsx
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
function ScrollArea3({
  className,
  children,
  horizontal = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    dist_exports8.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx25(
          dist_exports8.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx25(ScrollBar, {}),
        horizontal ? /* @__PURE__ */ jsx25(ScrollBar, { orientation: "horizontal" }) : null,
        /* @__PURE__ */ jsx25(dist_exports8.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    dist_exports8.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx25(
        dist_exports8.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border hover:bg-foreground-subtle/60"
        }
      )
    }
  );
}

// plugins/plugins/design/ui/async-data.ts
import { useCallback as useCallback19, useEffect as useEffect25, useState as useState23 } from "react";
var useAsyncData = (key, load2, reloadToken = 0) => {
  const [data, setData] = useState23(null);
  const [error, setError] = useState23(null);
  const [loading, setLoading] = useState23(false);
  const [token, setToken] = useState23(0);
  const reload = useCallback19(() => setToken((value) => value + 1), []);
  useEffect25(() => {
    if (!key) return;
    let alive = true;
    setLoading(true);
    load2().then((result) => {
      if (!alive) return;
      setData(result);
      setError(null);
    }).catch((cause) => {
      if (!alive) return;
      setError(cause instanceof Error ? cause.message : String(cause));
    }).finally(() => {
      if (alive) setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [key, reloadToken, token]);
  return { data, error, loading, reload };
};

// plugins/plugins/design/ui/design-inspector.tsx
import { Fragment as Fragment9, jsx as jsx26, jsxs as jsxs10 } from "react/jsx-runtime";
var toHex = (color) => {
  const channel = (value) => Math.round(Math.min(1, Math.max(0, value)) * 255).toString(16).padStart(2, "0");
  return `#${channel(color.r)}${channel(color.g)}${channel(color.b)}`.toUpperCase();
};
var round2 = (value) => Math.round(value * 10) / 10;
function DesignInspector({
  sessionId,
  nodeId,
  revision
}) {
  const { t: t2 } = useTranslation();
  const client = useClient();
  const data = useAsyncData(
    nodeId === null ? "" : `${sessionId}#${nodeId}#${revision}`,
    () => {
      if (nodeId === null) return Promise.reject(new Error("\u6CA1\u6709\u9009\u4E2D\u8282\u70B9"));
      return client.apis.design.node({ sessionId, id: nodeId });
    }
  );
  if (nodeId === null) {
    return /* @__PURE__ */ jsx26(
      Empty,
      {
        className: "h-full",
        title: t2("\u672A\u9009\u4E2D\u8282\u70B9"),
        hint: t2("\u5728\u753B\u5E03\u6216\u56FE\u5C42\u91CC\u70B9\u4E00\u4E2A\u8282\u70B9\uFF0C\u8FD9\u91CC\u663E\u793A\u5B83\u7684\u5C5E\u6027")
      }
    );
  }
  const detail = data.data;
  if (detail === null) {
    return data.error === null ? /* @__PURE__ */ jsx26("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsx26(Spinner, {}) }) : /* @__PURE__ */ jsx26(Empty, { className: "h-full", title: t2("\u8BFB\u4E0D\u5230\u8FD9\u4E2A\u8282\u70B9\u7684\u5C5E\u6027"), hint: data.error.message });
  }
  return (
    // 自绘滚动条：属性行数常常超出浮窗高度，得让人一眼看出还有内容
    /* @__PURE__ */ jsx26(ScrollArea3, { type: "always", horizontal: true, className: "h-full", children: /* @__PURE__ */ jsxs10("div", { className: "px-3 py-2 text-xs", children: [
      /* @__PURE__ */ jsxs10(Section, { title: t2("\u57FA\u672C"), children: [
        /* @__PURE__ */ jsx26(Row, { label: t2("\u540D\u79F0"), value: detail.name || t2("\u672A\u547D\u540D\u56FE\u5C42") }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u7C7B\u578B"), value: detail.type }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u8DEF\u5F84"), value: detail.path, mono: true })
      ] }),
      /* @__PURE__ */ jsxs10(Section, { title: t2("\u4F4D\u7F6E\u4E0E\u5C3A\u5BF8"), children: [
        /* @__PURE__ */ jsx26(Row, { label: t2("\u4F4D\u7F6E"), value: `${round2(detail.x)}, ${round2(detail.y)}`, mono: true }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5C3A\u5BF8"), value: `${round2(detail.width)} \xD7 ${round2(detail.height)}`, mono: true }),
        detail.rotation === 0 ? null : /* @__PURE__ */ jsx26(Row, { label: t2("\u65CB\u8F6C"), value: `${round2(detail.rotation)}\xB0` }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u4E0D\u900F\u660E\u5EA6"), value: `${Math.round(detail.opacity * 100)}%` }),
        detail.visible ? null : /* @__PURE__ */ jsx26(Row, { label: t2("\u53EF\u89C1"), value: t2("\u5426") }),
        detail.cornerRadius === 0 ? null : /* @__PURE__ */ jsx26(Row, { label: t2("\u5706\u89D2"), value: `${round2(detail.cornerRadius)}px` })
      ] }),
      /* @__PURE__ */ jsx26(Section, { title: t2("\u586B\u5145"), children: /* @__PURE__ */ jsx26(Paints, { paints: detail.fills, empty: t2("\u6CA1\u6709\u586B\u5145") }) }),
      /* @__PURE__ */ jsx26(Section, { title: t2("\u63CF\u8FB9"), children: /* @__PURE__ */ jsx26(Paints, { paints: detail.strokes, empty: t2("\u6CA1\u6709\u63CF\u8FB9") }) }),
      detail.text === void 0 ? null : /* @__PURE__ */ jsxs10(Section, { title: t2("\u6587\u672C"), children: [
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5185\u5BB9"), value: detail.text.characters || t2("\uFF08\u7A7A\uFF09") }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5B57\u53F7"), value: `${round2(detail.text.fontSize)}px` }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5B57\u91CD"), value: String(detail.text.fontWeight) }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5B57\u4F53"), value: detail.text.fontFamily }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5BF9\u9F50"), value: detail.text.textAlignHorizontal }),
        detail.text.lineHeight === null ? null : /* @__PURE__ */ jsx26(Row, { label: t2("\u884C\u9AD8"), value: `${round2(detail.text.lineHeight)}px` }),
        detail.text.letterSpacing === 0 ? null : /* @__PURE__ */ jsx26(Row, { label: t2("\u5B57\u8DDD"), value: `${round2(detail.text.letterSpacing)}px` })
      ] }),
      /* @__PURE__ */ jsxs10(Section, { title: t2("\u5E03\u5C40"), children: [
        /* @__PURE__ */ jsx26(Row, { label: t2("\u81EA\u52A8\u5E03\u5C40"), value: detail.layoutMode }),
        detail.layoutMode === "NONE" ? null : /* @__PURE__ */ jsxs10(Fragment9, { children: [
          /* @__PURE__ */ jsx26(Row, { label: t2("\u95F4\u8DDD"), value: `${round2(detail.itemSpacing)}px` }),
          /* @__PURE__ */ jsx26(
            Row,
            {
              label: t2("\u5185\u8FB9\u8DDD"),
              value: `${round2(detail.padding.top)} / ${round2(detail.padding.right)} / ${round2(
                detail.padding.bottom
              )} / ${round2(detail.padding.left)}`,
              mono: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx26(Row, { label: t2("\u5B50\u8282\u70B9"), value: String(detail.childCount) })
      ] })
    ] }) })
  );
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxs10("section", { className: "mb-3 last:mb-0", children: [
    /* @__PURE__ */ jsx26("h3", { className: "mb-1 font-medium text-foreground-subtle", children: title }),
    /* @__PURE__ */ jsx26("dl", { className: "space-y-1", children })
  ] });
}
function Row({ label, value, mono }) {
  return /* @__PURE__ */ jsxs10("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsx26("dt", { className: "w-16 shrink-0 text-foreground-subtle", children: label }),
    /* @__PURE__ */ jsx26("dd", { className: `flex-1 whitespace-nowrap ${mono ? "font-mono" : ""}`, title: value, children: value })
  ] });
}
function Paints({ paints, empty }) {
  const { t: t2 } = useTranslation();
  const visible = paints.filter((paint) => paint.visible);
  if (visible.length === 0) return /* @__PURE__ */ jsx26("dd", { className: "text-foreground-subtle", children: empty });
  return /* @__PURE__ */ jsx26(Fragment9, { children: visible.map((paint, index3) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: 色板按顺序排列，位置即身份
    /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2", children: [
      paint.imageHash === void 0 ? /* @__PURE__ */ jsxs10(Fragment9, { children: [
        /* @__PURE__ */ jsx26(
          "span",
          {
            className: "size-icon-sm shrink-0 rounded-xs ring-1 ring-border",
            style: { backgroundColor: toHex(paint.color) },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsx26("span", { className: "font-mono", children: toHex(paint.color) })
      ] }) : /* @__PURE__ */ jsxs10(Fragment9, { children: [
        /* @__PURE__ */ jsx26("span", { className: "font-mono", children: t2("\u56FE\u7247") }),
        /* @__PURE__ */ jsx26("span", { className: "text-foreground-subtle", children: paint.imageScaleMode })
      ] }),
      paint.opacity === 1 ? null : /* @__PURE__ */ jsx26("span", { className: "text-foreground-subtle", children: t2("\u4E0D\u900F\u660E\u5EA6 {{value}}%", { value: String(Math.round(paint.opacity * 100)) }) }),
      paint.weight === void 0 ? null : /* @__PURE__ */ jsx26("span", { className: "text-foreground-subtle", children: `${round2(paint.weight)}px` })
    ] }, `paint-${index3}`)
  )) });
}

// plugins/plugins/design/ui/design-layers.tsx
import { useMemo as useMemo11, useState as useState24 } from "react";
import { jsx as jsx27, jsxs as jsxs11 } from "react/jsx-runtime";
var iconOf = (type) => {
  if (type === "TEXT") return Type;
  if (type === "FRAME" || type === "COMPONENT" || type === "INSTANCE") return Frame;
  if (type === "ELLIPSE" || type === "IMAGE") return Image;
  return Square;
};
function DesignLayers({
  nodes,
  selection,
  onSelect,
  truncated = false
}) {
  const { t: t2 } = useTranslation();
  const [collapsed, setCollapsed] = useState24(() => /* @__PURE__ */ new Set());
  const parents = useMemo11(() => {
    const map = /* @__PURE__ */ new Map();
    for (const node of nodes) map.set(node.id, node.parentId);
    return map;
  }, [nodes]);
  const containers = useMemo11(() => {
    const set = /* @__PURE__ */ new Set();
    for (const node of nodes) if (node.parentId !== null) set.add(node.parentId);
    return set;
  }, [nodes]);
  const isHidden2 = (nodeId) => {
    let parent = parents.get(nodeId) ?? null;
    while (parent !== null) {
      if (collapsed.has(parent)) return true;
      parent = parents.get(parent) ?? null;
    }
    return false;
  };
  const toggle = (nodeId) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) next.delete(nodeId);
      else next.add(nodeId);
      return next;
    });
  };
  if (nodes.length === 0) {
    return /* @__PURE__ */ jsx27(
      Empty,
      {
        className: "h-full",
        icon: /* @__PURE__ */ jsx27(FileQuestionMark, { className: "size-7" }),
        title: t2("\u8FD8\u6CA1\u6709\u56FE\u5C42"),
        hint: t2("\u8BA9 agent \u5148\u51FA\u7A3F\uFF1A\u8BBE\u8BA1\u6A21\u5F0F\u91CC\u5B83\u7528 design_* \u5DE5\u5177\u628A\u754C\u9762\u753B\u51FA\u6765")
      }
    );
  }
  const selected = new Set(selection);
  return (
    // 自绘滚动条（`type="always"`）：macOS 的浮层滚动条不动就不显示，浮窗里看不出内容还有多少
    /* @__PURE__ */ jsxs11(ScrollArea3, { type: "always", horizontal: true, className: "min-h-0 flex-1", children: [
      /* @__PURE__ */ jsx27("ul", { className: "py-1", "aria-label": t2("\u8BBE\u8BA1\u56FE\u5C42"), children: nodes.filter((node) => !isHidden2(node.id)).map((node) => {
        const Icon2 = iconOf(node.type);
        const active = selected.has(node.id);
        const hasChildren = containers.has(node.id);
        const open = hasChildren && !collapsed.has(node.id);
        return /* @__PURE__ */ jsxs11(
          "li",
          {
            className: cn(
              // 行宽随内容走（长名字横向滚），但不窄于容器：短行的选中 / hover 底色仍铺满整行
              "flex w-max min-w-full items-stretch",
              // 高亮铺满整行（直角、左右顶格）：缩进与折角也属于这一行，只亮名字那一段会像没对齐
              active ? "bg-state-selected" : onSelect === void 0 ? void 0 : "hover:bg-state-hover"
            ),
            children: [
              /* @__PURE__ */ jsx27("span", { style: { width: `${4 + node.depth * 12}px` }, className: "shrink-0" }),
              hasChildren ? /* @__PURE__ */ jsx27(
                "button",
                {
                  type: "button",
                  "aria-label": open ? t2("\u6536\u8D77\u56FE\u5C42") : t2("\u5C55\u5F00\u56FE\u5C42"),
                  "aria-expanded": open,
                  className: "flex w-4 shrink-0 items-center justify-center text-foreground-subtlest hover:text-foreground",
                  onClick: () => toggle(node.id),
                  children: /* @__PURE__ */ jsx27(
                    ChevronRight,
                    {
                      className: cn("size-icon-xs transition-transform", open && "rotate-90")
                    }
                  )
                }
              ) : /* @__PURE__ */ jsx27("span", { className: "w-4 shrink-0" }),
              /* @__PURE__ */ jsxs11(
                "button",
                {
                  type: "button",
                  "aria-pressed": active,
                  disabled: onSelect === void 0,
                  onClick: (event) => {
                    if (onSelect === void 0) return;
                    if (event.shiftKey || event.metaKey || event.ctrlKey) {
                      const next = new Set(selected);
                      if (next.has(node.id)) next.delete(node.id);
                      else next.add(node.id);
                      onSelect([...next]);
                      return;
                    }
                    onSelect([node.id]);
                  },
                  className: cn(
                    "flex min-w-0 flex-1 items-center gap-1.5 py-1 pr-2 text-left text-xs",
                    active ? "text-foreground" : "text-foreground-subtle enabled:hover:text-foreground"
                  ),
                  children: [
                    /* @__PURE__ */ jsx27(Icon2, { className: "size-icon-xs shrink-0" }),
                    /* @__PURE__ */ jsx27("span", { className: "whitespace-nowrap", children: node.name || t2("\u672A\u547D\u540D\u56FE\u5C42") }),
                    node.width === 0 || node.height === 0 ? /* @__PURE__ */ jsx27(EyeOff, { className: "ml-auto size-icon-xs shrink-0", "aria-hidden": true }) : null
                  ]
                }
              )
            ]
          },
          node.id
        );
      }) }),
      truncated ? /* @__PURE__ */ jsx27("p", { className: "shrink-0 border-t border-border px-2 py-1 text-xs text-foreground-subtle", children: t2("\u56FE\u5C42\u592A\u591A\uFF0C\u8FD9\u91CC\u53EA\u5217\u51FA\u524D {{count}} \u4E2A", { count: nodes.length }) }) : null
    ] })
  );
}

// plugins/plugins/design/ui/design-surface.tsx
import {
  Fragment as Fragment10,
  useCallback as useCallback20,
  useEffect as useEffect26,
  useMemo as useMemo12,
  useRef as useRef23,
  useState as useState25
} from "react";

// packages/ui/src/base/context-menu.tsx
import { jsx as jsx28, jsxs as jsxs12 } from "react/jsx-runtime";
function ContextMenu2({ ...props }) {
  return /* @__PURE__ */ jsx28(dist_exports5.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger3({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx28(
    dist_exports5.Trigger,
    {
      "data-slot": "context-menu-trigger",
      className: cn("select-none", className),
      ...props
    }
  );
}
function ContextMenuContent3({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx28(dist_exports5.Portal, { children: /* @__PURE__ */ jsx28(
    dist_exports5.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-36 origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-popover ring-1 ring-border-strong duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem3({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx28(
    dist_exports5.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/context-menu-item relative flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-state-hover focus:text-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-base focus:*:[svg]:text-foreground data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}

// plugins/plugins/design/ui/design-surface.tsx
import { jsx as jsx29, jsxs as jsxs13 } from "react/jsx-runtime";
var nodePathsOf = (nodes) => {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const paths = /* @__PURE__ */ new Map();
  for (const node of nodes) {
    const segments = [];
    let current = node;
    while (current !== void 0) {
      segments.unshift(current.name);
      current = current.parentId === null ? void 0 : byId.get(current.parentId);
    }
    paths.set(node.id, segments.join(" / "));
  }
  return paths;
};
function DesignSurface({
  svg,
  boxes,
  bounds,
  nodes,
  pageId,
  selection,
  onSelect,
  onInsert,
  mentionPrefix,
  fitKey,
  emptyHint,
  overlayInset,
  viewport,
  extent
}) {
  const { t: t2 } = useTranslation();
  const paths = useMemo12(() => nodePathsOf(nodes), [nodes]);
  const { containerRef, layerRef, view } = viewport;
  const [marquee, setMarquee] = useState25(null);
  const selected = new Set(selection);
  const selectable = onSelect !== void 0;
  const fitted = useRef23(null);
  useEffect26(() => {
    if (extent === null || fitted.current === fitKey) return;
    fitted.current = fitKey;
    viewport.fit();
  }, [extent, fitKey, viewport]);
  const pagePointOf = useCallback20(
    (event) => {
      const layer = layerRef.current;
      if (layer === null || extent === null) return null;
      const rect = layer.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) / view.scale,
        y: (event.clientY - rect.top) / view.scale
      };
    },
    [extent, view.scale]
  );
  const finishMarquee = useCallback20(
    (dragged, additive) => {
      if (onSelect === void 0) return;
      const moved = Math.abs(dragged.to.x - dragged.from.x) + Math.abs(dragged.to.y - dragged.from.y);
      if (moved < 2) {
        onSelect([]);
        return;
      }
      const hits = nodesInMarquee(boxes, normalizeMarquee(dragged.from, dragged.to));
      if (hits.length === 0) {
        onSelect([]);
        return;
      }
      onSelect([.../* @__PURE__ */ new Set([...additive ? selection : [], ...hits])]);
    },
    [boxes, onSelect, selection]
  );
  const origin = { x: extent?.minX ?? 0, y: extent?.minY ?? 0 };
  const empty = svg === "" && Object.keys(boxes).length === 0;
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      ref: containerRef,
      className: "relative min-h-0 flex-1 touch-none overflow-hidden bg-muted/40",
      children: [
        selectable ? /* @__PURE__ */ jsx29(
          "button",
          {
            type: "button",
            "aria-label": t2("\u6846\u9009\u6216\u6E05\u7A7A\u9009\u4E2D"),
            className: cn(
              "absolute inset-0 cursor-crosshair touch-none",
              marquee !== null && "select-none"
            ),
            onPointerDown: (event) => {
              if (event.button !== 0) return;
              const point = pagePointOf(event);
              if (point === null) return;
              setMarquee({ from: point, to: point });
              try {
                event.currentTarget.setPointerCapture(event.pointerId);
              } catch {
              }
            },
            onPointerMove: (event) => {
              if (marquee === null) return;
              const point = pagePointOf(event);
              if (point !== null) setMarquee({ from: marquee.from, to: point });
            },
            onPointerUp: (event) => {
              const dragged = marquee;
              setMarquee(null);
              if (dragged === null) return;
              finishMarquee(dragged, event.shiftKey || event.metaKey || event.ctrlKey);
            },
            onPointerCancel: () => setMarquee(null)
          }
        ) : null,
        empty ? /* @__PURE__ */ jsx29(
          "div",
          {
            className: "flex h-full",
            style: overlayInset !== void 0 && overlayInset > 0 ? { paddingRight: overlayInset } : void 0,
            children: /* @__PURE__ */ jsx29(
              Empty,
              {
                className: "h-full flex-1",
                title: t2("\u753B\u5E03\u8FD8\u662F\u7A7A\u7684"),
                hint: emptyHint ?? t2("\u8BA9 agent \u5148\u51FA\u7A3F\uFF1A\u8BBE\u8BA1\u6A21\u5F0F\u91CC\u5B83\u7528 design_* \u5DE5\u5177\u628A\u754C\u9762\u753B\u51FA\u6765")
              }
            )
          }
        ) : /* @__PURE__ */ jsxs13(
          "div",
          {
            ref: layerRef,
            className: "pointer-events-none absolute top-0 left-0",
            style: {
              // 先按包络把页面原点挪到图层原点，再整体缩放，最后按视口平移：顺序不能反
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale}) translate(${-origin.x}px, ${-origin.y}px)`,
              transformOrigin: "top left"
            },
            children: [
              /* @__PURE__ */ jsx29(
                "div",
                {
                  className: "absolute shadow-popover",
                  style: {
                    left: bounds?.x ?? 0,
                    top: bounds?.y ?? 0,
                    width: bounds?.width ?? extent?.width,
                    height: bounds?.height ?? extent?.height
                  },
                  dangerouslySetInnerHTML: { __html: svg }
                }
              ),
              marquee === null ? null : /* @__PURE__ */ jsx29(
                "div",
                {
                  className: "pointer-events-none absolute border border-dashed border-ring bg-ring/10",
                  style: (() => {
                    const rect = normalizeMarquee(marquee.from, marquee.to);
                    return { left: rect.x, top: rect.y, width: rect.width, height: rect.height };
                  })()
                }
              ),
              Object.entries(boxes).map(([id, box]) => {
                const node = nodes.find((item) => item.id === id);
                const active = selected.has(id);
                const target = /* @__PURE__ */ jsx29(
                  "button",
                  {
                    type: "button",
                    "aria-label": paths.get(id) ?? id,
                    title: paths.get(id) ?? id,
                    onClick: (event) => {
                      if (!selectable) return;
                      event.stopPropagation();
                      if (event.shiftKey || event.metaKey || event.ctrlKey) {
                        const next = new Set(selected);
                        if (next.has(id)) next.delete(id);
                        else next.add(id);
                        onSelect?.([...next]);
                        return;
                      }
                      onSelect?.([id]);
                    },
                    className: cn(
                      "pointer-events-auto absolute rounded-none",
                      selectable ? "cursor-pointer" : "cursor-default",
                      // 命中框：直角、两档同宽（2px）。选中用画布选中色，悬停同色降透明度——
                      // 两档线宽不一致时，画面里会同时出现粗细不同的框，分不清哪个是「选中」、哪个是稿子自己的边
                      active ? "ring-2 ring-canvas-selection" : "hover:ring-2 hover:ring-canvas-selection/50"
                    ),
                    style: {
                      left: box.x,
                      top: box.y,
                      width: box.width,
                      height: box.height
                    },
                    "data-design-node-id": id,
                    "data-design-node-name": node?.name ?? ""
                  }
                );
                if (onInsert === void 0 && mentionPrefix === void 0) {
                  return /* @__PURE__ */ jsx29(Fragment10, { children: target }, id);
                }
                return /* @__PURE__ */ jsxs13(ContextMenu2, { children: [
                  /* @__PURE__ */ jsx29(ContextMenuTrigger3, { asChild: true, children: target }),
                  /* @__PURE__ */ jsxs13(ContextMenuContent3, { children: [
                    onInsert === void 0 ? null : /* @__PURE__ */ jsxs13(ContextMenuItem3, { onSelect: () => onInsert(id), children: [
                      /* @__PURE__ */ jsx29(MessageSquarePlus, { className: "size-icon-sm" }),
                      t2("\u52A0\u5165\u5BF9\u8BDD")
                    ] }),
                    mentionPrefix === void 0 ? null : /* @__PURE__ */ jsxs13(
                      ContextMenuItem3,
                      {
                        onSelect: () => {
                          void navigator.clipboard?.writeText(`${mentionPrefix}/${pageId}/${id}`);
                        },
                        children: [
                          /* @__PURE__ */ jsx29(Copy, { className: "size-icon-sm" }),
                          t2("\u590D\u5236\u5F15\u7528\u951A\u70B9")
                        ]
                      }
                    )
                  ] })
                ] }, id);
              })
            ]
          }
        )
      ]
    }
  );
}

// plugins/plugins/design/ui/design-tab.tsx
import { Fragment as Fragment11, jsx as jsx30, jsxs as jsxs14 } from "react/jsx-runtime";
function DesignTabView(view) {
  const { t: t2 } = useTranslation();
  const extent = useMemo13(() => designExtent(view.boxes, view.bounds), [view.boxes, view.bounds]);
  const viewport = useCanvasViewport(extent);
  if (view.loading) {
    return /* @__PURE__ */ jsx30("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsx30(Spinner, {}) });
  }
  return /* @__PURE__ */ jsxs14("div", { className: "flex h-full min-h-0 w-full flex-col", children: [
    /* @__PURE__ */ jsxs14("div", { className: "@container flex h-9 shrink-0 items-center gap-1 border-b border-border px-2", children: [
      view.pages.length > 0 ? /* @__PURE__ */ jsxs14(DropdownMenu2, { children: [
        /* @__PURE__ */ jsx30(DropdownMenuTrigger3, { asChild: true, children: /* @__PURE__ */ jsxs14(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 max-w-20 min-w-0 justify-between gap-1 px-2 text-xs @[24rem]:max-w-32",
            "aria-label": t2("\u9009\u62E9\u9875\u9762"),
            children: [
              /* @__PURE__ */ jsx30("span", { className: "min-w-0 truncate", children: view.pages.find((page) => page.id === view.pageId)?.name ?? "" }),
              /* @__PURE__ */ jsx30(ChevronDown, { className: "size-icon-xs shrink-0 text-foreground-subtle" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs14(DropdownMenuContent3, { align: "start", className: "w-auto min-w-40", children: [
          view.pages.map((page) => /* @__PURE__ */ jsxs14(
            DropdownMenuItem3,
            {
              disabled: view.onPageChange === void 0,
              onSelect: () => view.onPageChange?.(page.id),
              children: [
                /* @__PURE__ */ jsx30("span", { className: "min-w-0 truncate", children: page.name }),
                page.id === view.pageId ? /* @__PURE__ */ jsx30(Check, { className: "ml-auto size-icon-sm" }) : null
              ]
            },
            page.id
          )),
          view.onCreatePage === void 0 ? null : /* @__PURE__ */ jsxs14(Fragment11, { children: [
            /* @__PURE__ */ jsx30(DropdownMenuSeparator3, {}),
            /* @__PURE__ */ jsxs14(DropdownMenuItem3, { onSelect: () => view.onCreatePage?.(), children: [
              /* @__PURE__ */ jsx30(FilePlus2, { className: "size-icon-sm" }),
              t2("\u65B0\u5EFA\u9875\u9762")
            ] })
          ] })
        ] })
      ] }) : null,
      /* @__PURE__ */ jsx30(
        IconButton,
        {
          className: "text-foreground-subtle hover:text-foreground",
          label: t2("\u7F29\u5C0F"),
          size: "icon-sm",
          onClick: () => viewport.zoomStep(-1),
          children: /* @__PURE__ */ jsx30(Minus, { className: "size-icon-sm" })
        }
      ),
      /* @__PURE__ */ jsx30("span", { className: "hidden min-w-11 text-center text-xs text-foreground-subtle tabular-nums @[19rem]:inline", children: formatScale(viewport.view.scale) }),
      /* @__PURE__ */ jsx30(
        IconButton,
        {
          className: "text-foreground-subtle hover:text-foreground",
          label: t2("\u653E\u5927"),
          size: "icon-sm",
          onClick: () => viewport.zoomStep(1),
          children: /* @__PURE__ */ jsx30(Plus, { className: "size-icon-sm" })
        }
      ),
      /* @__PURE__ */ jsx30(
        IconButton,
        {
          className: "text-foreground-subtle hover:text-foreground",
          label: t2("\u9002\u5E94\u89C6\u56FE"),
          size: "icon-sm",
          onClick: viewport.fit,
          children: /* @__PURE__ */ jsx30(Maximize2, { className: "size-icon-sm" })
        }
      ),
      /* @__PURE__ */ jsxs14("div", { className: "ml-auto flex min-w-0 items-center gap-2", children: [
        view.onReload === void 0 ? null : /* @__PURE__ */ jsx30(
          IconButton,
          {
            className: "text-foreground-subtle hover:text-foreground",
            label: t2("\u91CD\u65B0\u8F7D\u5165"),
            size: "icon-sm",
            onClick: view.onReload,
            children: /* @__PURE__ */ jsx30(RefreshCw, { className: "size-icon-sm" })
          }
        ),
        view.selection.length > 0 ? /* @__PURE__ */ jsxs14(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: "text-xs",
            "aria-label": t2("\u52A0\u5165\u5BF9\u8BDD\uFF08{{count}} \u4E2A\uFF09", { count: view.selection.length }),
            onClick: () => {
              for (const id of view.selection) view.onInsert?.(id);
            },
            children: [
              /* @__PURE__ */ jsx30(MessageSquarePlus, { className: "size-icon-sm" }),
              /* @__PURE__ */ jsx30("span", { className: "hidden @[30rem]:inline", children: t2("\u52A0\u5165\u5BF9\u8BDD\uFF08{{count}} \u4E2A\uFF09", { count: view.selection.length }) })
            ]
          }
        ) : null
      ] })
    ] }),
    view.warning === void 0 ? null : /* @__PURE__ */ jsx30("div", { className: "shrink-0 border-b border-border bg-warning/10 px-3 py-1.5 text-xs text-foreground-subtle", children: view.warning }),
    /* @__PURE__ */ jsxs14("div", { className: "relative flex min-h-0 flex-1", children: [
      /* @__PURE__ */ jsx30(
        DesignSurface,
        {
          viewport,
          extent,
          svg: view.svg,
          boxes: view.boxes,
          bounds: view.bounds,
          nodes: view.nodes,
          pageId: view.pageId,
          selection: view.selection,
          fitKey: `${view.path}#${view.pageId}`,
          ...view.onSelect ? { onSelect: view.onSelect } : {},
          ...view.onInsert ? { onInsert: view.onInsert } : {},
          ...view.mentionPrefix ? { mentionPrefix: view.mentionPrefix } : {},
          ...view.emptyHint ? { emptyHint: view.emptyHint } : {}
        }
      ),
      /* @__PURE__ */ jsx30(
        FloatingPanel,
        {
          title: t2("\u56FE\u5C42"),
          storageKey: "ucode-float-design-layers",
          defaultSize: { width: 240, height: 320 },
          children: /* @__PURE__ */ jsx30(
            DesignLayers,
            {
              nodes: view.nodes,
              selection: view.selection,
              ...view.onSelect ? { onSelect: view.onSelect } : {},
              ...view.truncated === true ? { truncated: true } : {}
            }
          )
        }
      ),
      /* @__PURE__ */ jsx30(
        FloatingPanel,
        {
          title: t2("\u5C5E\u6027"),
          storageKey: "ucode-float-design-inspector",
          defaultCorner: "bottom-right",
          defaultCollapsed: true,
          defaultSize: { width: 260, height: 360 },
          children: /* @__PURE__ */ jsx30(
            DesignInspector,
            {
              sessionId: view.sessionId,
              nodeId: view.selection[0] ?? null,
              revision: view.revision
            }
          )
        }
      )
    ] })
  ] });
}

// plugins/plugins/design/ui/design-canvas.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
var pendingView = () => ({
  path: "",
  sessionId: "",
  revision: 0,
  pages: [],
  pageId: "",
  svg: "",
  boxes: {},
  bounds: null,
  nodes: [],
  selection: [],
  loading: true
});
function DesignCanvas() {
  const { t: t2 } = useTranslation();
  const workbench = useWorkbench();
  const sessionId = workbench?.sessionId ?? null;
  const canvas = useDesignCanvas(sessionId, workbench.pluginId);
  const insert = useComposerInsert();
  const state = canvas.state;
  const [stalled, setStalled] = useState27(false);
  useEffect27(() => {
    if (state !== null) {
      setStalled(false);
      return;
    }
    const timer = setTimeout(() => setStalled(true), 4e3);
    return () => clearTimeout(timer);
  }, [state]);
  if (sessionId === null) {
    return /* @__PURE__ */ jsx31(
      Empty,
      {
        className: "h-full",
        title: t2("\u8FD8\u6CA1\u6709\u4F1A\u8BDD"),
        hint: t2("\u8BBE\u8BA1\u7A3F\u6302\u5728\u4F1A\u8BDD\u4E0A\uFF1A\u5148\u53D1\u4E00\u6761\u6D88\u606F\uFF0C\u753B\u5E03\u624D\u6709\u5730\u65B9\u843D\u7A3F")
      }
    );
  }
  if (state === null) {
    if (canvas.error !== null) {
      return /* @__PURE__ */ jsx31(Empty, { className: "h-full", title: t2("\u8FD9\u4EFD\u8BBE\u8BA1\u7A3F\u6253\u4E0D\u5F00"), hint: canvas.error });
    }
    if (stalled) {
      return /* @__PURE__ */ jsx31(
        Empty,
        {
          className: "h-full",
          title: t2("\u6CA1\u80FD\u6253\u5F00\u8FD9\u4EFD\u8BBE\u8BA1\u7A3F"),
          hint: t2("\u91CD\u8BD5\u4E00\u6B21\uFF1B\u8FD8\u4E0D\u884C\u5C31\u6362\u4E00\u4EFD\u7A3F\u5B50\u518D\u5207\u56DE\u6765"),
          action: /* @__PURE__ */ jsx31(
            Button,
            {
              size: "sm",
              variant: "ghost",
              onClick: () => {
                setStalled(false);
                canvas.reload();
              },
              children: t2("\u91CD\u8BD5")
            }
          )
        }
      );
    }
    return /* @__PURE__ */ jsx31(DesignTabView, { ...pendingView() });
  }
  return /* @__PURE__ */ jsx31(
    DesignTabView,
    {
      path: state.path,
      pages: state.pages,
      pageId: state.pageId,
      svg: state.svg,
      boxes: state.boxes,
      bounds: state.bounds,
      nodes: state.nodes,
      selection: state.selection,
      loading: false,
      sessionId,
      revision: state.revision,
      ...state.truncated ? { truncated: true } : {},
      ...state.warning === void 0 ? {} : { warning: state.warning },
      mentionPrefix: state.mentionPrefix,
      onSelect: (ids) => canvas.select(ids),
      onInsert: (nodeId) => {
        const label = state.nodes.find((node) => node.id === nodeId)?.name ?? nodeId;
        insert({ label, anchor: `${state.mentionPrefix}/${state.pageId}/${nodeId}` });
      },
      onPageChange: (pageId) => canvas.setPage(pageId),
      onCreatePage: () => canvas.createPage(),
      onReload: () => canvas.reload()
    }
  );
}

// plugins/plugins/design/ui/doc.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function DesignDocument(props) {
  const host = hostOf(props);
  const path = props.path ?? "";
  const [error, setError] = useState28(null);
  const [ready, setReady] = useState28(false);
  const client = useDesignClient();
  useEffect28(() => {
    if (!host.sessionId || !path) return;
    let alive = true;
    setReady(false);
    setError(null);
    void client.call("doc", { action: "open", path }).then(() => {
      if (alive) setReady(true);
    }).catch((cause) => {
      if (alive) setError(cause instanceof Error ? cause.message : String(cause));
    });
    return () => {
      alive = false;
    };
  }, [host.sessionId, path]);
  if (host.sessionId === null) {
    return /* @__PURE__ */ jsx32(
      ui.Empty,
      {
        className: "h-full",
        title: i18n2.t("\u8FD8\u6CA1\u6709\u4F1A\u8BDD"),
        hint: i18n2.t("\u8BBE\u8BA1\u7A3F\u6302\u5728\u4F1A\u8BDD\u4E0A\uFF1A\u5148\u53D1\u4E00\u6761\u6D88\u606F\uFF0C\u753B\u5E03\u624D\u6709\u5730\u65B9\u843D\u7A3F")
      }
    );
  }
  if (error !== null) {
    return /* @__PURE__ */ jsx32(ui.Empty, { className: "h-full", title: i18n2.t("\u8FD9\u4EFD\u8BBE\u8BA1\u7A3F\u6253\u4E0D\u5F00"), hint: error });
  }
  if (!ready) {
    return /* @__PURE__ */ jsx32("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsx32(ui.Spinner, {}) });
  }
  return /* @__PURE__ */ jsx32(DesignHostProvider, { value: host, children: /* @__PURE__ */ jsx32(DesignCanvas, {}) });
}
export {
  DesignDocument
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/eye-off.js:
lucide-react/dist/esm/icons/file-plus-2.js:
lucide-react/dist/esm/icons/file-question-mark.js:
lucide-react/dist/esm/icons/frame.js:
lucide-react/dist/esm/icons/grip-vertical.js:
lucide-react/dist/esm/icons/image.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/maximize-2.js:
lucide-react/dist/esm/icons/message-square-plus.js:
lucide-react/dist/esm/icons/minus.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/refresh-cw.js:
lucide-react/dist/esm/icons/square.js:
lucide-react/dist/esm/icons/type.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.545.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
