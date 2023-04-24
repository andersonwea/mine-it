function Lf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Tf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var L = {},
  zf = {
    get exports() {
      return L;
    },
    set exports(e) {
      L = e;
    },
  },
  Dl = {},
  O = {},
  Mf = {
    get exports() {
      return O;
    },
    set exports(e) {
      O = e;
    },
  },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or = Symbol.for("react.element"),
  Df = Symbol.for("react.portal"),
  Ff = Symbol.for("react.fragment"),
  Uf = Symbol.for("react.strict_mode"),
  Bf = Symbol.for("react.profiler"),
  $f = Symbol.for("react.provider"),
  Af = Symbol.for("react.context"),
  Wf = Symbol.for("react.forward_ref"),
  Vf = Symbol.for("react.suspense"),
  Hf = Symbol.for("react.memo"),
  Qf = Symbol.for("react.lazy"),
  Au = Symbol.iterator;
function Kf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ua = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sa = Object.assign,
  aa = {};
function Nn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = aa),
    (this.updater = n || ua);
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ca() {}
ca.prototype = Nn.prototype;
function Bi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = aa),
    (this.updater = n || ua);
}
var $i = (Bi.prototype = new ca());
$i.constructor = Bi;
sa($i, Nn.prototype);
$i.isPureReactComponent = !0;
var Wu = Array.isArray,
  fa = Object.prototype.hasOwnProperty,
  Ai = { current: null },
  da = { key: !0, ref: !0, __self: !0, __source: !0 };
function pa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      fa.call(t, r) && !da.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Or,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ai.current,
  };
}
function Yf(e, t) {
  return {
    $$typeof: Or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Or;
}
function Gf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vu = /\/+/g;
function io(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gf("" + e.key)
    : t.toString(36);
}
function qr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Or:
          case Df:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + io(i, 0) : r),
      Wu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vu, "$&/") + "/"),
          qr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Wi(l) &&
            (l = Yf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Wu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + io(o, u);
      i += qr(o, t, n, s, l);
    }
  else if (((s = Kf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + io(o, u++)), (i += qr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    qr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Xf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  br = { transition: null },
  Zf = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: br,
    ReactCurrentOwner: Ai,
  };
B.Children = {
  map: zr,
  forEach: function (e, t, n) {
    zr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Nn;
B.Fragment = Ff;
B.Profiler = Bf;
B.PureComponent = Bi;
B.StrictMode = Uf;
B.Suspense = Vf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zf;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = sa({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ai.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      fa.call(t, s) &&
        !da.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Af,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $f, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = pa;
B.createFactory = function (e) {
  var t = pa.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Wf, render: e };
};
B.isValidElement = Wi;
B.lazy = function (e) {
  return { $$typeof: Qf, _payload: { _status: -1, _result: e }, _init: Xf };
};
B.memo = function (e, t) {
  return { $$typeof: Hf, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = br.transition;
  br.transition = {};
  try {
    e();
  } finally {
    br.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Se.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
B.useId = function () {
  return Se.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Se.current.useRef(e);
};
B.useState = function (e) {
  return Se.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Se.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(Mf);
const le = ia(O),
  Uo = Lf({ __proto__: null, default: le }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = O,
  qf = Symbol.for("react.element"),
  bf = Symbol.for("react.fragment"),
  ed = Object.prototype.hasOwnProperty,
  td = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ha(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) ed.call(t, r) && !nd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: qf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: td.current,
  };
}
Dl.Fragment = bf;
Dl.jsx = ha;
Dl.jsxs = ha;
(function (e) {
  e.exports = Dl;
})(zf);
var Bo = {},
  $o = {},
  rd = {
    get exports() {
      return $o;
    },
    set exports(e) {
      $o = e;
    },
  },
  Le = {},
  Ao = {},
  ld = {
    get exports() {
      return Ao;
    },
    set exports(e) {
      Ao = e;
    },
  },
  ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, M) {
    var D = _.length;
    _.push(M);
    e: for (; 0 < D; ) {
      var H = (D - 1) >>> 1,
        ee = _[H];
      if (0 < l(ee, M)) (_[H] = M), (_[D] = ee), (D = H);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var M = _[0],
      D = _.pop();
    if (D !== M) {
      _[0] = D;
      e: for (var H = 0, ee = _.length, Ze = ee >>> 1; H < Ze; ) {
        var nt = 2 * (H + 1) - 1,
          Ut = _[nt],
          $e = nt + 1,
          Bt = _[$e];
        if (0 > l(Ut, D))
          $e < ee && 0 > l(Bt, Ut)
            ? ((_[H] = Bt), (_[$e] = D), (H = $e))
            : ((_[H] = Ut), (_[nt] = D), (H = nt));
        else if ($e < ee && 0 > l(Bt, D)) (_[H] = Bt), (_[$e] = D), (H = $e);
        else break e;
      }
    }
    return M;
  }
  function l(_, M) {
    var D = _.sortIndex - M.sortIndex;
    return D !== 0 ? D : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    c = 1,
    d = null,
    h = 3,
    g = !1,
    v = !1,
    x = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(_) {
    for (var M = n(a); M !== null; ) {
      if (M.callback === null) r(a);
      else if (M.startTime <= _)
        r(a), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(a);
    }
  }
  function S(_) {
    if (((x = !1), m(_), !v))
      if (n(s) !== null) (v = !0), Mn(P);
      else {
        var M = n(a);
        M !== null && Dn(S, M.startTime - _);
      }
  }
  function P(_, M) {
    (v = !1), x && ((x = !1), p(z), (z = -1)), (g = !0);
    var D = h;
    try {
      for (
        m(M), d = n(s);
        d !== null && (!(d.expirationTime > M) || (_ && !xe()));

      ) {
        var H = d.callback;
        if (typeof H == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var ee = H(d.expirationTime <= M);
          (M = e.unstable_now()),
            typeof ee == "function" ? (d.callback = ee) : d === n(s) && r(s),
            m(M);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var Ze = !0;
      else {
        var nt = n(a);
        nt !== null && Dn(S, nt.startTime - M), (Ze = !1);
      }
      return Ze;
    } finally {
      (d = null), (h = D), (g = !1);
    }
  }
  var j = !1,
    T = null,
    z = -1,
    X = 5,
    F = -1;
  function xe() {
    return !(e.unstable_now() - F < X);
  }
  function ht() {
    if (T !== null) {
      var _ = e.unstable_now();
      F = _;
      var M = !0;
      try {
        M = T(!0, _);
      } finally {
        M ? Ft() : ((j = !1), (T = null));
      }
    } else j = !1;
  }
  var Ft;
  if (typeof f == "function")
    Ft = function () {
      f(ht);
    };
  else if (typeof MessageChannel < "u") {
    var Tn = new MessageChannel(),
      zn = Tn.port2;
    (Tn.port1.onmessage = ht),
      (Ft = function () {
        zn.postMessage(null);
      });
  } else
    Ft = function () {
      I(ht, 0);
    };
  function Mn(_) {
    (T = _), j || ((j = !0), Ft());
  }
  function Dn(_, M) {
    z = I(function () {
      _(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Mn(P));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (X = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = h;
      }
      var D = h;
      h = M;
      try {
        return _();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, M) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var D = h;
      h = _;
      try {
        return M();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (_, M, D) {
      var H = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? H + D : H))
          : (D = H),
        _)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = D + ee),
        (_ = {
          id: c++,
          callback: M,
          priorityLevel: _,
          startTime: D,
          expirationTime: ee,
          sortIndex: -1,
        }),
        D > H
          ? ((_.sortIndex = D),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (x ? (p(z), (z = -1)) : (x = !0), Dn(S, D - H)))
          : ((_.sortIndex = ee), t(s, _), v || g || ((v = !0), Mn(P))),
        _
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (_) {
      var M = h;
      return function () {
        var D = h;
        h = M;
        try {
          return _.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(ma);
(function (e) {
  e.exports = ma;
})(ld);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var va = O,
  je = Ao;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ya = new Set(),
  sr = {};
function bt(e, t) {
  kn(e, t), kn(e + "Capture", t);
}
function kn(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++) ya.add(t[e]);
}
var at = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wo = Object.prototype.hasOwnProperty,
  od =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hu = {},
  Qu = {};
function id(e) {
  return Wo.call(Qu, e)
    ? !0
    : Wo.call(Hu, e)
    ? !1
    : od.test(e)
    ? (Qu[e] = !0)
    : ((Hu[e] = !0), !1);
}
function ud(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sd(e, t, n, r) {
  if (t === null || typeof t > "u" || ud(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vi = /[\-:]([a-z])/g;
function Hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vi, Hi);
    pe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vi, Hi);
    pe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vi, Hi);
  pe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sd(t, n, l, r) && (n = null),
    r || l === null
      ? id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  Ki = Symbol.for("react.strict_mode"),
  Vo = Symbol.for("react.profiler"),
  ga = Symbol.for("react.provider"),
  wa = Symbol.for("react.context"),
  Yi = Symbol.for("react.forward_ref"),
  Ho = Symbol.for("react.suspense"),
  Qo = Symbol.for("react.suspense_list"),
  Gi = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Sa = Symbol.for("react.offscreen"),
  Ku = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ku && e[Ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var b = Object.assign,
  uo;
function Xn(e) {
  if (uo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      uo = (t && t[1]) || "";
    }
  return (
    `
` +
    uo +
    e
  );
}
var so = !1;
function ao(e, t) {
  if (!e || so) return "";
  so = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (so = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function ad(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ao(e.type, !1)), e;
    case 11:
      return (e = ao(e.type.render, !1)), e;
    case 1:
      return (e = ao(e.type, !0)), e;
    default:
      return "";
  }
}
function Ko(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case Vo:
      return "Profiler";
    case Ki:
      return "StrictMode";
    case Ho:
      return "Suspense";
    case Qo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wa:
        return (e.displayName || "Context") + ".Consumer";
      case ga:
        return (e._context.displayName || "Context") + ".Provider";
      case Yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gi:
        return (
          (t = e.displayName || null), t !== null ? t : Ko(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return Ko(e(t));
        } catch {}
    }
  return null;
}
function cd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ko(t);
    case 8:
      return t === Ki ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ka(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fd(e) {
  var t = ka(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Dr(e) {
  e._valueTracker || (e._valueTracker = fd(e));
}
function xa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ka(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function cl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yo(e, t) {
  var n = t.checked;
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ea(e, t) {
  (t = t.checked), t != null && Qi(e, "checked", t, !1);
}
function Go(e, t) {
  Ea(e, t);
  var n = Lt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xo(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xo(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function Ca(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Pa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fr,
  _a = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fr = Fr || document.createElement("div"),
          Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dd = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
  dd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bn[t] = bn[e]);
  });
});
function Oa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (bn.hasOwnProperty(e) && bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Na(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Oa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var pd = b(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function qo(e, t) {
  if (t) {
    if (pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function bo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ei = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ti = null,
  vn = null,
  yn = null;
function Ju(e) {
  if ((e = Ir(e))) {
    if (typeof ti != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Al(t)), ti(e.stateNode, e.type, t));
  }
}
function Ra(e) {
  vn ? (yn ? yn.push(e) : (yn = [e])) : (vn = e);
}
function Ia() {
  if (vn) {
    var e = vn,
      t = yn;
    if (((yn = vn = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
  }
}
function ja(e, t) {
  return e(t);
}
function La() {}
var co = !1;
function Ta(e, t, n) {
  if (co) return e(t, n);
  co = !0;
  try {
    return ja(e, t, n);
  } finally {
    (co = !1), (vn !== null || yn !== null) && (La(), Ia());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ni = !1;
if (at)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        ni = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    ni = !1;
  }
function hd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var er = !1,
  fl = null,
  dl = !1,
  ri = null,
  md = {
    onError: function (e) {
      (er = !0), (fl = e);
    },
  };
function vd(e, t, n, r, l, o, i, u, s) {
  (er = !1), (fl = null), hd.apply(md, arguments);
}
function yd(e, t, n, r, l, o, i, u, s) {
  if ((vd.apply(this, arguments), er)) {
    if (er) {
      var a = fl;
      (er = !1), (fl = null);
    } else throw Error(E(198));
    dl || ((dl = !0), (ri = a));
  }
}
function en(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qu(e) {
  if (en(e) !== e) throw Error(E(188));
}
function gd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = en(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return qu(l), e;
        if (o === r) return qu(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ma(e) {
  return (e = gd(e)), e !== null ? Da(e) : null;
}
function Da(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Da(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fa = je.unstable_scheduleCallback,
  bu = je.unstable_cancelCallback,
  wd = je.unstable_shouldYield,
  Sd = je.unstable_requestPaint,
  re = je.unstable_now,
  kd = je.unstable_getCurrentPriorityLevel,
  Zi = je.unstable_ImmediatePriority,
  Ua = je.unstable_UserBlockingPriority,
  pl = je.unstable_NormalPriority,
  xd = je.unstable_LowPriority,
  Ba = je.unstable_IdlePriority,
  Fl = null,
  et = null;
function Ed(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : _d,
  Cd = Math.log,
  Pd = Math.LN2;
function _d(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Cd(e) / Pd) | 0)) | 0;
}
var Ur = 64,
  Br = 4194304;
function Jn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Jn(u)) : ((o &= i), o !== 0 && (r = Jn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Jn(i)) : o !== 0 && (r = Jn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Od(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ye(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Od(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function li(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $a() {
  var e = Ur;
  return (Ur <<= 1), !(Ur & 4194240) && (Ur = 64), e;
}
function fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n);
}
function Rd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ye(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var W = 0;
function Aa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wa,
  qi,
  Va,
  Ha,
  Qa,
  oi = !1,
  $r = [],
  Et = null,
  Ct = null,
  Pt = null,
  fr = new Map(),
  dr = new Map(),
  gt = [],
  Id =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function es(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dr.delete(t.pointerId);
  }
}
function An(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Ir(t)), t !== null && qi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function jd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Et = An(Et, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ct = An(Ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (Pt = An(Pt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return fr.set(o, An(fr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), dr.set(o, An(dr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ka(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = en(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = za(n)), t !== null)) {
          (e.blockedOn = t),
            Qa(e.priority, function () {
              Va(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function el(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ei = r), n.target.dispatchEvent(r), (ei = null);
    } else return (t = Ir(n)), t !== null && qi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ts(e, t, n) {
  el(e) && n.delete(t);
}
function Ld() {
  (oi = !1),
    Et !== null && el(Et) && (Et = null),
    Ct !== null && el(Ct) && (Ct = null),
    Pt !== null && el(Pt) && (Pt = null),
    fr.forEach(ts),
    dr.forEach(ts);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    oi ||
      ((oi = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, Ld)));
}
function pr(e) {
  function t(l) {
    return Wn(l, e);
  }
  if (0 < $r.length) {
    Wn($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var r = $r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Wn(Et, e),
      Ct !== null && Wn(Ct, e),
      Pt !== null && Wn(Pt, e),
      fr.forEach(t),
      dr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    Ka(n), n.blockedOn === null && gt.shift();
}
var gn = pt.ReactCurrentBatchConfig,
  ml = !0;
function Td(e, t, n, r) {
  var l = W,
    o = gn.transition;
  gn.transition = null;
  try {
    (W = 1), bi(e, t, n, r);
  } finally {
    (W = l), (gn.transition = o);
  }
}
function zd(e, t, n, r) {
  var l = W,
    o = gn.transition;
  gn.transition = null;
  try {
    (W = 4), bi(e, t, n, r);
  } finally {
    (W = l), (gn.transition = o);
  }
}
function bi(e, t, n, r) {
  if (ml) {
    var l = ii(e, t, n, r);
    if (l === null) xo(e, t, r, vl, n), es(e, r);
    else if (jd(l, e, t, n, r)) r.stopPropagation();
    else if ((es(e, r), t & 4 && -1 < Id.indexOf(e))) {
      for (; l !== null; ) {
        var o = Ir(l);
        if (
          (o !== null && Wa(o),
          (o = ii(e, t, n, r)),
          o === null && xo(e, t, r, vl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else xo(e, t, r, null, n);
  }
}
var vl = null;
function ii(e, t, n, r) {
  if (((vl = null), (e = Xi(r)), (e = Wt(e)), e !== null))
    if (((t = en(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = za(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vl = e), null;
}
function Ya(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kd()) {
        case Zi:
          return 1;
        case Ua:
          return 4;
        case pl:
        case xd:
          return 16;
        case Ba:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  eu = null,
  tl = null;
function Ga() {
  if (tl) return tl;
  var e,
    t = eu,
    n = t.length,
    r,
    l = "value" in St ? St.value : St.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (tl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function nl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ar() {
  return !0;
}
function ns() {
  return !1;
}
function Te(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ar
        : ns),
      (this.isPropagationStopped = ns),
      this
    );
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ar));
      },
      persist: function () {},
      isPersistent: Ar,
    }),
    t
  );
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tu = Te(Rn),
  Rr = b({}, Rn, { view: 0, detail: 0 }),
  Md = Te(Rr),
  po,
  ho,
  Vn,
  Ul = b({}, Rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vn &&
            (Vn && e.type === "mousemove"
              ? ((po = e.screenX - Vn.screenX), (ho = e.screenY - Vn.screenY))
              : (ho = po = 0),
            (Vn = e)),
          po);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ho;
    },
  }),
  rs = Te(Ul),
  Dd = b({}, Ul, { dataTransfer: 0 }),
  Fd = Te(Dd),
  Ud = b({}, Rr, { relatedTarget: 0 }),
  mo = Te(Ud),
  Bd = b({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $d = Te(Bd),
  Ad = b({}, Rn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wd = Te(Ad),
  Vd = b({}, Rn, { data: 0 }),
  ls = Te(Vd),
  Hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Kd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kd[e]) ? !!t[e] : !1;
}
function nu() {
  return Yd;
}
var Gd = b({}, Rr, {
    key: function (e) {
      if (e.key) {
        var t = Hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = nl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nu,
    charCode: function (e) {
      return e.type === "keypress" ? nl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? nl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xd = Te(Gd),
  Zd = b({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  os = Te(Zd),
  Jd = b({}, Rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nu,
  }),
  qd = Te(Jd),
  bd = b({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = Te(bd),
  tp = b({}, Ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  np = Te(tp),
  rp = [9, 13, 27, 32],
  ru = at && "CompositionEvent" in window,
  tr = null;
at && "documentMode" in document && (tr = document.documentMode);
var lp = at && "TextEvent" in window && !tr,
  Xa = at && (!ru || (tr && 8 < tr && 11 >= tr)),
  is = String.fromCharCode(32),
  us = !1;
function Za(e, t) {
  switch (e) {
    case "keyup":
      return rp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ja(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function op(e, t) {
  switch (e) {
    case "compositionend":
      return Ja(t);
    case "keypress":
      return t.which !== 32 ? null : ((us = !0), is);
    case "textInput":
      return (e = t.data), e === is && us ? null : e;
    default:
      return null;
  }
}
function ip(e, t) {
  if (ln)
    return e === "compositionend" || (!ru && Za(e, t))
      ? ((e = Ga()), (tl = eu = St = null), (ln = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var up = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!up[e.type] : t === "textarea";
}
function qa(e, t, n, r) {
  Ra(r),
    (t = yl(t, "onChange")),
    0 < t.length &&
      ((n = new tu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  hr = null;
function sp(e) {
  ac(e, 0);
}
function Bl(e) {
  var t = sn(e);
  if (xa(t)) return e;
}
function ap(e, t) {
  if (e === "change") return t;
}
var ba = !1;
if (at) {
  var vo;
  if (at) {
    var yo = "oninput" in document;
    if (!yo) {
      var as = document.createElement("div");
      as.setAttribute("oninput", "return;"),
        (yo = typeof as.oninput == "function");
    }
    vo = yo;
  } else vo = !1;
  ba = vo && (!document.documentMode || 9 < document.documentMode);
}
function cs() {
  nr && (nr.detachEvent("onpropertychange", ec), (hr = nr = null));
}
function ec(e) {
  if (e.propertyName === "value" && Bl(hr)) {
    var t = [];
    qa(t, hr, e, Xi(e)), Ta(sp, t);
  }
}
function cp(e, t, n) {
  e === "focusin"
    ? (cs(), (nr = t), (hr = n), nr.attachEvent("onpropertychange", ec))
    : e === "focusout" && cs();
}
function fp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bl(hr);
}
function dp(e, t) {
  if (e === "click") return Bl(t);
}
function pp(e, t) {
  if (e === "input" || e === "change") return Bl(t);
}
function hp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : hp;
function mr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Wo.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function fs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ds(e, t) {
  var n = fs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = fs(n);
  }
}
function tc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? tc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nc() {
  for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cl(e.document);
  }
  return t;
}
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mp(e) {
  var t = nc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    tc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && lu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ds(n, o));
        var i = ds(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vp = at && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  ui = null,
  rr = null,
  si = !1;
function ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  si ||
    on == null ||
    on !== cl(r) ||
    ((r = on),
    "selectionStart" in r && lu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (rr && mr(rr, r)) ||
      ((rr = r),
      (r = yl(ui, "onSelect")),
      0 < r.length &&
        ((t = new tu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var un = {
    animationend: Wr("Animation", "AnimationEnd"),
    animationiteration: Wr("Animation", "AnimationIteration"),
    animationstart: Wr("Animation", "AnimationStart"),
    transitionend: Wr("Transition", "TransitionEnd"),
  },
  go = {},
  rc = {};
at &&
  ((rc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete un.animationend.animation,
    delete un.animationiteration.animation,
    delete un.animationstart.animation),
  "TransitionEvent" in window || delete un.transitionend.transition);
function $l(e) {
  if (go[e]) return go[e];
  if (!un[e]) return e;
  var t = un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rc) return (go[e] = t[n]);
  return e;
}
var lc = $l("animationend"),
  oc = $l("animationiteration"),
  ic = $l("animationstart"),
  uc = $l("transitionend"),
  sc = new Map(),
  hs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  sc.set(e, t), bt(t, [e]);
}
for (var wo = 0; wo < hs.length; wo++) {
  var So = hs[wo],
    yp = So.toLowerCase(),
    gp = So[0].toUpperCase() + So.slice(1);
  zt(yp, "on" + gp);
}
zt(lc, "onAnimationEnd");
zt(oc, "onAnimationIteration");
zt(ic, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(uc, "onTransitionEnd");
kn("onMouseEnter", ["mouseout", "mouseover"]);
kn("onMouseLeave", ["mouseout", "mouseover"]);
kn("onPointerEnter", ["pointerout", "pointerover"]);
kn("onPointerLeave", ["pointerout", "pointerover"]);
bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wp = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function ms(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yd(r, t, void 0, e), (e.currentTarget = null);
}
function ac(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ms(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ms(l, u, a), (o = s);
        }
    }
  }
  if (dl) throw ((e = ri), (dl = !1), (ri = null), e);
}
function Y(e, t) {
  var n = t[pi];
  n === void 0 && (n = t[pi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cc(t, e, 2, !1), n.add(r));
}
function ko(e, t, n) {
  var r = 0;
  t && (r |= 4), cc(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function vr(e) {
  if (!e[Vr]) {
    (e[Vr] = !0),
      ya.forEach(function (n) {
        n !== "selectionchange" && (wp.has(n) || ko(n, !1, e), ko(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || ((t[Vr] = !0), ko("selectionchange", !1, t));
  }
}
function cc(e, t, n, r) {
  switch (Ya(t)) {
    case 1:
      var l = Td;
      break;
    case 4:
      l = zd;
      break;
    default:
      l = bi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ni ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function xo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Wt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ta(function () {
    var a = o,
      c = Xi(n),
      d = [];
    e: {
      var h = sc.get(e);
      if (h !== void 0) {
        var g = tu,
          v = e;
        switch (e) {
          case "keypress":
            if (nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Xd;
            break;
          case "focusin":
            (v = "focus"), (g = mo);
            break;
          case "focusout":
            (v = "blur"), (g = mo);
            break;
          case "beforeblur":
          case "afterblur":
            g = mo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = rs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Fd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = qd;
            break;
          case lc:
          case oc:
          case ic:
            g = $d;
            break;
          case uc:
            g = ep;
            break;
          case "scroll":
            g = Md;
            break;
          case "wheel":
            g = np;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Wd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = os;
        }
        var x = (t & 4) !== 0,
          I = !x && e === "scroll",
          p = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var f = a, m; f !== null; ) {
          m = f;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = cr(f, p)), S != null && x.push(yr(f, S, m)))),
            I)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((h = new g(h, v, null, n, c)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ei &&
            (v = n.relatedTarget || n.fromElement) &&
            (Wt(v) || v[ct]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = a),
              (v = v ? Wt(v) : null),
              v !== null &&
                ((I = en(v)), v !== I || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = a)),
          g !== v)
        ) {
          if (
            ((x = rs),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = os),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (I = g == null ? h : sn(g)),
            (m = v == null ? h : sn(v)),
            (h = new x(S, f + "leave", g, n, c)),
            (h.target = I),
            (h.relatedTarget = m),
            (S = null),
            Wt(c) === a &&
              ((x = new x(p, f + "enter", v, n, c)),
              (x.target = m),
              (x.relatedTarget = I),
              (S = x)),
            (I = S),
            g && v)
          )
            t: {
              for (x = g, p = v, f = 0, m = x; m; m = tn(m)) f++;
              for (m = 0, S = p; S; S = tn(S)) m++;
              for (; 0 < f - m; ) (x = tn(x)), f--;
              for (; 0 < m - f; ) (p = tn(p)), m--;
              for (; f--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = tn(x)), (p = tn(p));
              }
              x = null;
            }
          else x = null;
          g !== null && vs(d, h, g, x, !1),
            v !== null && I !== null && vs(d, I, v, x, !0);
        }
      }
      e: {
        if (
          ((h = a ? sn(a) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var P = ap;
        else if (ss(h))
          if (ba) P = pp;
          else {
            P = fp;
            var j = cp;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (P = dp);
        if (P && (P = P(e, a))) {
          qa(d, P, n, c);
          break e;
        }
        j && j(e, h, a),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Xo(h, "number", h.value);
      }
      switch (((j = a ? sn(a) : window), e)) {
        case "focusin":
          (ss(j) || j.contentEditable === "true") &&
            ((on = j), (ui = a), (rr = null));
          break;
        case "focusout":
          rr = ui = on = null;
          break;
        case "mousedown":
          si = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (si = !1), ps(d, n, c);
          break;
        case "selectionchange":
          if (vp) break;
        case "keydown":
        case "keyup":
          ps(d, n, c);
      }
      var T;
      if (ru)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        ln
          ? Za(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Xa &&
          n.locale !== "ko" &&
          (ln || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && ln && (T = Ga())
            : ((St = c),
              (eu = "value" in St ? St.value : St.textContent),
              (ln = !0))),
        (j = yl(a, z)),
        0 < j.length &&
          ((z = new ls(z, e, null, n, c)),
          d.push({ event: z, listeners: j }),
          T ? (z.data = T) : ((T = Ja(n)), T !== null && (z.data = T)))),
        (T = lp ? op(e, n) : ip(e, n)) &&
          ((a = yl(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new ls("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: a }),
            (c.data = T)));
    }
    ac(d, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = cr(e, n)),
      o != null && r.unshift(yr(e, o, l)),
      (o = cr(e, t)),
      o != null && r.push(yr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = cr(n, o)), s != null && i.unshift(yr(n, s, u)))
        : l || ((s = cr(n, o)), s != null && i.push(yr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Sp = /\r\n?/g,
  kp = /\u0000|\uFFFD/g;
function ys(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sp,
      `
`
    )
    .replace(kp, "");
}
function Hr(e, t, n) {
  if (((t = ys(t)), ys(e) !== t && n)) throw Error(E(425));
}
function gl() {}
var ai = null,
  ci = null;
function fi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var di = typeof setTimeout == "function" ? setTimeout : void 0,
  xp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gs = typeof Promise == "function" ? Promise : void 0,
  Ep =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gs < "u"
      ? function (e) {
          return gs.resolve(null).then(e).catch(Cp);
        }
      : di;
function Cp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Eo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), pr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  pr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ws(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var In = Math.random().toString(36).slice(2),
  be = "__reactFiber$" + In,
  gr = "__reactProps$" + In,
  ct = "__reactContainer$" + In,
  pi = "__reactEvents$" + In,
  Pp = "__reactListeners$" + In,
  _p = "__reactHandles$" + In;
function Wt(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ws(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = ws(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ir(e) {
  return (
    (e = e[be] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Al(e) {
  return e[gr] || null;
}
var hi = [],
  an = -1;
function Mt(e) {
  return { current: e };
}
function G(e) {
  0 > an || ((e.current = hi[an]), (hi[an] = null), an--);
}
function V(e, t) {
  an++, (hi[an] = e.current), (e.current = t);
}
var Tt = {},
  ye = Mt(Tt),
  Pe = Mt(!1),
  Yt = Tt;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function wl() {
  G(Pe), G(ye);
}
function Ss(e, t, n) {
  if (ye.current !== Tt) throw Error(E(168));
  V(ye, t), V(Pe, n);
}
function fc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, cd(e) || "Unknown", l));
  return b({}, n, r);
}
function Sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (Yt = ye.current),
    V(ye, e),
    V(Pe, Pe.current),
    !0
  );
}
function ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = fc(e, t, Yt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Pe),
      G(ye),
      V(ye, e))
    : G(Pe),
    V(Pe, n);
}
var ot = null,
  Wl = !1,
  Co = !1;
function dc(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function Op(e) {
  (Wl = !0), dc(e);
}
function Dt() {
  if (!Co && ot !== null) {
    Co = !0;
    var e = 0,
      t = W;
    try {
      var n = ot;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (Wl = !1);
    } catch (l) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Fa(Zi, Dt), l);
    } finally {
      (W = t), (Co = !1);
    }
  }
  return null;
}
var cn = [],
  fn = 0,
  kl = null,
  xl = 0,
  ze = [],
  Me = 0,
  Gt = null,
  it = 1,
  ut = "";
function $t(e, t) {
  (cn[fn++] = xl), (cn[fn++] = kl), (kl = e), (xl = t);
}
function pc(e, t, n) {
  (ze[Me++] = it), (ze[Me++] = ut), (ze[Me++] = Gt), (Gt = e);
  var r = it;
  e = ut;
  var l = 32 - Ye(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ye(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (it = (1 << (32 - Ye(t) + l)) | (n << l) | r),
      (ut = o + e);
  } else (it = (1 << o) | (n << l) | r), (ut = e);
}
function ou(e) {
  e.return !== null && ($t(e, 1), pc(e, 1, 0));
}
function iu(e) {
  for (; e === kl; )
    (kl = cn[--fn]), (cn[fn] = null), (xl = cn[--fn]), (cn[fn] = null);
  for (; e === Gt; )
    (Gt = ze[--Me]),
      (ze[Me] = null),
      (ut = ze[--Me]),
      (ze[Me] = null),
      (it = ze[--Me]),
      (ze[Me] = null);
}
var Ie = null,
  Re = null,
  Z = !1,
  Ke = null;
function hc(e, t) {
  var n = De(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Re = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? { id: it, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vi(e) {
  if (Z) {
    var t = Re;
    if (t) {
      var n = t;
      if (!xs(e, t)) {
        if (mi(e)) throw Error(E(418));
        t = _t(n.nextSibling);
        var r = Ie;
        t && xs(e, t)
          ? hc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ie = e));
      }
    } else {
      if (mi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ie = e);
    }
  }
}
function Es(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Qr(e) {
  if (e !== Ie) return !1;
  if (!Z) return Es(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fi(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (mi(e)) throw (mc(), Error(E(418)));
    for (; t; ) hc(e, t), (t = _t(t.nextSibling));
  }
  if ((Es(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Ie ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function mc() {
  for (var e = Re; e; ) e = _t(e.nextSibling);
}
function En() {
  (Re = Ie = null), (Z = !1);
}
function uu(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var Np = pt.ReactCurrentBatchConfig;
function He(e, t) {
  if (e && e.defaultProps) {
    (t = b({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var El = Mt(null),
  Cl = null,
  dn = null,
  su = null;
function au() {
  su = dn = Cl = null;
}
function cu(e) {
  var t = El.current;
  G(El), (e._currentValue = t);
}
function yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function wn(e, t) {
  (Cl = e),
    (su = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (Cl === null) throw Error(E(308));
      (dn = e), (Cl.dependencies = { lanes: 0, firstContext: e });
    } else dn = dn.next = e;
  return t;
}
var Vt = null;
function fu(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function vc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), fu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function st(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), fu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function rl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
function Cs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Pl(e, t, n, r) {
  var l = e.updateQueue;
  yt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== i &&
        (u === null ? (c.firstBaseUpdate = a) : (u.next = a),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var d = l.baseState;
    (i = 0), (c = a = s = null), (u = o);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            x = u;
          switch (((h = t), (g = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                d = v.call(g, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(g, d, h) : v),
                h == null)
              )
                break e;
              d = b({}, d, h);
              break e;
            case 2:
              yt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((a = c = g), (s = d)) : (c = c.next = g),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = d),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Zt |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Ps(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var gc = new va.Component().refs;
function gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? en(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Rt(e),
      o = st(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, l)),
      t !== null && (Ge(t, e, l, r), rl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Rt(e),
      o = st(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, l)),
      t !== null && (Ge(t, e, l, r), rl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Rt(e),
      l = st(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ot(e, l, r)),
      t !== null && (Ge(t, e, r, n), rl(t, e, r));
  },
};
function _s(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mr(n, r) || !mr(l, o)
      : !0
  );
}
function wc(e, t, n) {
  var r = !1,
    l = Tt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ue(o))
      : ((l = _e(t) ? Yt : ye.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xn(e, l) : Tt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Os(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
}
function wi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = gc), du(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ue(o))
    : ((o = _e(t) ? Yt : ye.current), (l.context = xn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (gi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Vl.enqueueReplaceState(l, l.state, null),
      Pl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === gc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ns(e) {
  var t = e._init;
  return t(e._payload);
}
function Sc(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = It(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, m, S) {
    return f === null || f.tag !== 6
      ? ((f = jo(m, p.mode, S)), (f.return = p), f)
      : ((f = l(f, m)), (f.return = p), f);
  }
  function s(p, f, m, S) {
    var P = m.type;
    return P === rn
      ? c(p, f, m.props.children, S, m.key)
      : f !== null &&
        (f.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === vt &&
            Ns(P) === f.type))
      ? ((S = l(f, m.props)), (S.ref = Hn(p, f, m)), (S.return = p), S)
      : ((S = al(m.type, m.key, m.props, null, p.mode, S)),
        (S.ref = Hn(p, f, m)),
        (S.return = p),
        S);
  }
  function a(p, f, m, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Lo(m, p.mode, S)), (f.return = p), f)
      : ((f = l(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, S, P) {
    return f === null || f.tag !== 7
      ? ((f = Kt(m, p.mode, S, P)), (f.return = p), f)
      : ((f = l(f, m)), (f.return = p), f);
  }
  function d(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = jo("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Mr:
          return (
            (m = al(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = Hn(p, null, f)),
            (m.return = p),
            m
          );
        case nn:
          return (f = Lo(f, p.mode, m)), (f.return = p), f;
        case vt:
          var S = f._init;
          return d(p, S(f._payload), m);
      }
      if (Zn(f) || Bn(f))
        return (f = Kt(f, p.mode, m, null)), (f.return = p), f;
      Kr(p, f);
    }
    return null;
  }
  function h(p, f, m, S) {
    var P = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : u(p, f, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Mr:
          return m.key === P ? s(p, f, m, S) : null;
        case nn:
          return m.key === P ? a(p, f, m, S) : null;
        case vt:
          return (P = m._init), h(p, f, P(m._payload), S);
      }
      if (Zn(m) || Bn(m)) return P !== null ? null : c(p, f, m, S, null);
      Kr(p, m);
    }
    return null;
  }
  function g(p, f, m, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(m) || null), u(f, p, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Mr:
          return (p = p.get(S.key === null ? m : S.key) || null), s(f, p, S, P);
        case nn:
          return (p = p.get(S.key === null ? m : S.key) || null), a(f, p, S, P);
        case vt:
          var j = S._init;
          return g(p, f, m, j(S._payload), P);
      }
      if (Zn(S) || Bn(S)) return (p = p.get(m) || null), c(f, p, S, P, null);
      Kr(f, S);
    }
    return null;
  }
  function v(p, f, m, S) {
    for (
      var P = null, j = null, T = f, z = (f = 0), X = null;
      T !== null && z < m.length;
      z++
    ) {
      T.index > z ? ((X = T), (T = null)) : (X = T.sibling);
      var F = h(p, T, m[z], S);
      if (F === null) {
        T === null && (T = X);
        break;
      }
      e && T && F.alternate === null && t(p, T),
        (f = o(F, f, z)),
        j === null ? (P = F) : (j.sibling = F),
        (j = F),
        (T = X);
    }
    if (z === m.length) return n(p, T), Z && $t(p, z), P;
    if (T === null) {
      for (; z < m.length; z++)
        (T = d(p, m[z], S)),
          T !== null &&
            ((f = o(T, f, z)), j === null ? (P = T) : (j.sibling = T), (j = T));
      return Z && $t(p, z), P;
    }
    for (T = r(p, T); z < m.length; z++)
      (X = g(T, p, z, m[z], S)),
        X !== null &&
          (e && X.alternate !== null && T.delete(X.key === null ? z : X.key),
          (f = o(X, f, z)),
          j === null ? (P = X) : (j.sibling = X),
          (j = X));
    return (
      e &&
        T.forEach(function (xe) {
          return t(p, xe);
        }),
      Z && $t(p, z),
      P
    );
  }
  function x(p, f, m, S) {
    var P = Bn(m);
    if (typeof P != "function") throw Error(E(150));
    if (((m = P.call(m)), m == null)) throw Error(E(151));
    for (
      var j = (P = null), T = f, z = (f = 0), X = null, F = m.next();
      T !== null && !F.done;
      z++, F = m.next()
    ) {
      T.index > z ? ((X = T), (T = null)) : (X = T.sibling);
      var xe = h(p, T, F.value, S);
      if (xe === null) {
        T === null && (T = X);
        break;
      }
      e && T && xe.alternate === null && t(p, T),
        (f = o(xe, f, z)),
        j === null ? (P = xe) : (j.sibling = xe),
        (j = xe),
        (T = X);
    }
    if (F.done) return n(p, T), Z && $t(p, z), P;
    if (T === null) {
      for (; !F.done; z++, F = m.next())
        (F = d(p, F.value, S)),
          F !== null &&
            ((f = o(F, f, z)), j === null ? (P = F) : (j.sibling = F), (j = F));
      return Z && $t(p, z), P;
    }
    for (T = r(p, T); !F.done; z++, F = m.next())
      (F = g(T, p, z, F.value, S)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? z : F.key),
          (f = o(F, f, z)),
          j === null ? (P = F) : (j.sibling = F),
          (j = F));
    return (
      e &&
        T.forEach(function (ht) {
          return t(p, ht);
        }),
      Z && $t(p, z),
      P
    );
  }
  function I(p, f, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === rn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Mr:
          e: {
            for (var P = m.key, j = f; j !== null; ) {
              if (j.key === P) {
                if (((P = m.type), P === rn)) {
                  if (j.tag === 7) {
                    n(p, j.sibling),
                      (f = l(j, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  j.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === vt &&
                    Ns(P) === j.type)
                ) {
                  n(p, j.sibling),
                    (f = l(j, m.props)),
                    (f.ref = Hn(p, j, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, j);
                break;
              } else t(p, j);
              j = j.sibling;
            }
            m.type === rn
              ? ((f = Kt(m.props.children, p.mode, S, m.key)),
                (f.return = p),
                (p = f))
              : ((S = al(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = Hn(p, f, m)),
                (S.return = p),
                (p = S));
          }
          return i(p);
        case nn:
          e: {
            for (j = m.key; f !== null; ) {
              if (f.key === j)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Lo(m, p.mode, S)), (f.return = p), (p = f);
          }
          return i(p);
        case vt:
          return (j = m._init), I(p, f, j(m._payload), S);
      }
      if (Zn(m)) return v(p, f, m, S);
      if (Bn(m)) return x(p, f, m, S);
      Kr(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = jo(m, p.mode, S)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return I;
}
var Cn = Sc(!0),
  kc = Sc(!1),
  jr = {},
  tt = Mt(jr),
  wr = Mt(jr),
  Sr = Mt(jr);
function Ht(e) {
  if (e === jr) throw Error(E(174));
  return e;
}
function pu(e, t) {
  switch ((V(Sr, t), V(wr, e), V(tt, jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Jo(t, e));
  }
  G(tt), V(tt, t);
}
function Pn() {
  G(tt), G(wr), G(Sr);
}
function xc(e) {
  Ht(Sr.current);
  var t = Ht(tt.current),
    n = Jo(t, e.type);
  t !== n && (V(wr, e), V(tt, n));
}
function hu(e) {
  wr.current === e && (G(tt), G(wr));
}
var J = Mt(0);
function _l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Po = [];
function mu() {
  for (var e = 0; e < Po.length; e++)
    Po[e]._workInProgressVersionPrimary = null;
  Po.length = 0;
}
var ll = pt.ReactCurrentDispatcher,
  _o = pt.ReactCurrentBatchConfig,
  Xt = 0,
  q = null,
  ie = null,
  ae = null,
  Ol = !1,
  lr = !1,
  kr = 0,
  Rp = 0;
function he() {
  throw Error(E(321));
}
function vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t, n, r, l, o) {
  if (
    ((Xt = o),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ll.current = e === null || e.memoizedState === null ? Tp : zp),
    (e = n(r, l)),
    lr)
  ) {
    o = 0;
    do {
      if (((lr = !1), (kr = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (ae = ie = null),
        (t.updateQueue = null),
        (ll.current = Mp),
        (e = n(r, l));
    } while (lr);
  }
  if (
    ((ll.current = Nl),
    (t = ie !== null && ie.next !== null),
    (Xt = 0),
    (ae = ie = q = null),
    (Ol = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function gu() {
  var e = kr !== 0;
  return (kr = 0), e;
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (q.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Be() {
  if (ie === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ae === null ? q.memoizedState : ae.next;
  if (t !== null) (ae = t), (ie = e);
  else {
    if (e === null) throw Error(E(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ae === null ? (q.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oo(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ie,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var c = a.lane;
      if ((Xt & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = d), (i = r)) : (s = s.next = d),
          (q.lanes |= c),
          (Zt |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Xe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (q.lanes |= o), (Zt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function No(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Xe(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ec() {}
function Cc(e, t) {
  var n = q,
    r = Be(),
    l = t(),
    o = !Xe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ce = !0)),
    (r = r.queue),
    wu(Oc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Er(9, _c.bind(null, n, r, l, t), void 0, null),
      ce === null)
    )
      throw Error(E(349));
    Xt & 30 || Pc(n, t, l);
  }
  return l;
}
function Pc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _c(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Nc(t) && Rc(e);
}
function Oc(e, t, n) {
  return n(function () {
    Nc(t) && Rc(e);
  });
}
function Nc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Rc(e) {
  var t = ft(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function Rs(e) {
  var t = qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lp.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function Er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ic() {
  return Be().memoizedState;
}
function ol(e, t, n, r) {
  var l = qe();
  (q.flags |= e),
    (l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hl(e, t, n, r) {
  var l = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var i = ie.memoizedState;
    if (((o = i.destroy), r !== null && vu(r, i.deps))) {
      l.memoizedState = Er(t, n, o, r);
      return;
    }
  }
  (q.flags |= e), (l.memoizedState = Er(1 | t, n, o, r));
}
function Is(e, t) {
  return ol(8390656, 8, e, t);
}
function wu(e, t) {
  return Hl(2048, 8, e, t);
}
function jc(e, t) {
  return Hl(4, 2, e, t);
}
function Lc(e, t) {
  return Hl(4, 4, e, t);
}
function Tc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function zc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hl(4, 4, Tc.bind(null, t, e), n)
  );
}
function Su() {}
function Mc(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dc(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fc(e, t, n) {
  return Xt & 21
    ? (Xe(n, t) || ((n = $a()), (q.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function Ip(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _o.transition;
  _o.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (_o.transition = r);
  }
}
function Uc() {
  return Be().memoizedState;
}
function jp(e, t, n) {
  var r = Rt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bc(e))
  )
    $c(t, n);
  else if (((n = vc(e, t, n, r)), n !== null)) {
    var l = we();
    Ge(n, e, r, l), Ac(n, t, r);
  }
}
function Lp(e, t, n) {
  var r = Rt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bc(e)) $c(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Xe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), fu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = vc(e, t, l, r)),
      n !== null && ((l = we()), Ge(n, e, r, l), Ac(n, t, r));
  }
}
function Bc(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function $c(e, t) {
  lr = Ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ac(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
var Nl = {
    readContext: Ue,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Tp = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: Is,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ol(4194308, 4, Tc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ol(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ol(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jp.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Rs,
    useDebugValue: Su,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Rs(!1),
        t = e[0];
      return (e = Ip.bind(null, e[1])), (qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        l = qe();
      if (Z) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(E(349));
        Xt & 30 || Pc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Is(Oc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Er(9, _c.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = ce.identifierPrefix;
      if (Z) {
        var n = ut,
          r = it;
        (n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Rp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zp = {
    readContext: Ue,
    useCallback: Mc,
    useContext: Ue,
    useEffect: wu,
    useImperativeHandle: zc,
    useInsertionEffect: jc,
    useLayoutEffect: Lc,
    useMemo: Dc,
    useReducer: Oo,
    useRef: Ic,
    useState: function () {
      return Oo(xr);
    },
    useDebugValue: Su,
    useDeferredValue: function (e) {
      var t = Be();
      return Fc(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Oo(xr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: Uc,
    unstable_isNewReconciler: !1,
  },
  Mp = {
    readContext: Ue,
    useCallback: Mc,
    useContext: Ue,
    useEffect: wu,
    useImperativeHandle: zc,
    useInsertionEffect: jc,
    useLayoutEffect: Lc,
    useMemo: Dc,
    useReducer: No,
    useRef: Ic,
    useState: function () {
      return No(xr);
    },
    useDebugValue: Su,
    useDeferredValue: function (e) {
      var t = Be();
      return ie === null ? (t.memoizedState = e) : Fc(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = No(xr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: Uc,
    unstable_isNewReconciler: !1,
  };
function _n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ad(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Si(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dp = typeof WeakMap == "function" ? WeakMap : Map;
function Wc(e, t, n) {
  (n = st(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Il || ((Il = !0), (Ii = r)), Si(e, t);
    }),
    n
  );
}
function Vc(e, t, n) {
  (n = st(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Si(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Si(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Zp.bind(null, e, t, n)), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ts(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = st(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Fp = pt.ReactCurrentOwner,
  Ce = !1;
function ge(e, t, n, r) {
  t.child = e === null ? kc(t, null, n, r) : Cn(t, e.child, n, r);
}
function zs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    wn(t, l),
    (r = yu(e, t, n, r, o, l)),
    (n = gu()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        dt(e, t, l))
      : (Z && n && ou(t), (t.flags |= 1), ge(e, t, r, l), t.child)
  );
}
function Ms(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Nu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Hc(e, t, o, r, l))
      : ((e = al(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : mr), n(i, r) && e.ref === t.ref)
    )
      return dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (mr(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), dt(e, t, l);
  }
  return ki(e, t, n, r, l);
}
function Qc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(hn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(hn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        V(hn, Ne),
        (Ne |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(hn, Ne),
      (Ne |= r);
  return ge(e, t, l, n), t.child;
}
function Kc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ki(e, t, n, r, l) {
  var o = _e(n) ? Yt : ye.current;
  return (
    (o = xn(t, o)),
    wn(t, l),
    (n = yu(e, t, n, r, o, l)),
    (r = gu()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        dt(e, t, l))
      : (Z && r && ou(t), (t.flags |= 1), ge(e, t, n, l), t.child)
  );
}
function Ds(e, t, n, r, l) {
  if (_e(n)) {
    var o = !0;
    Sl(t);
  } else o = !1;
  if ((wn(t, l), t.stateNode === null))
    il(e, t), wc(t, n, r), wi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ue(a))
      : ((a = _e(n) ? Yt : ye.current), (a = xn(t, a)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Os(t, i, r, a)),
      (yt = !1);
    var h = t.memoizedState;
    (i.state = h),
      Pl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || Pe.current || yt
        ? (typeof c == "function" && (gi(t, n, c, r), (s = t.memoizedState)),
          (u = yt || _s(t, n, u, r, h, s, a))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      yc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : He(t.type, u)),
      (i.props = a),
      (d = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ue(s))
        : ((s = _e(n) ? Yt : ye.current), (s = xn(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== d || h !== s) && Os(t, i, r, s)),
      (yt = !1),
      (h = t.memoizedState),
      (i.state = h),
      Pl(t, r, i, l);
    var v = t.memoizedState;
    u !== d || h !== v || Pe.current || yt
      ? (typeof g == "function" && (gi(t, n, g, r), (v = t.memoizedState)),
        (a = yt || _s(t, n, a, r, h, v, s) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xi(e, t, n, r, o, l);
}
function xi(e, t, n, r, l, o) {
  Kc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ks(t, n, !1), dt(e, t, o);
  (r = t.stateNode), (Fp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Cn(t, e.child, null, o)), (t.child = Cn(t, null, u, o)))
      : ge(e, t, u, o),
    (t.memoizedState = r.state),
    l && ks(t, n, !0),
    t.child
  );
}
function Yc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ss(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ss(e, t.context, !1),
    pu(e, t.containerInfo);
}
function Fs(e, t, n, r, l) {
  return En(), uu(l), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gc(e, t, n) {
  var r = t.pendingProps,
    l = J.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(J, l & 1),
    e === null)
  )
    return (
      vi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Yl(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ci(n)),
              (t.memoizedState = Ei),
              e)
            : ku(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Up(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = It(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = It(u, o)) : ((o = Kt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ci(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ei),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ku(e, t) {
  return (
    (t = Yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Yr(e, t, n, r) {
  return (
    r !== null && uu(r),
    Cn(t, e.child, null, n),
    (e = ku(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Up(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ro(Error(E(422)))), Yr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Yl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Kt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Cn(t, e.child, null, i),
        (t.child.memoizedState = Ci(i)),
        (t.memoizedState = Ei),
        o);
  if (!(t.mode & 1)) return Yr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(E(419))), (r = Ro(o, r, void 0)), Yr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ce || u)) {
    if (((r = ce), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ft(e, l), Ge(r, e, l, -1));
    }
    return Ou(), (r = Ro(Error(E(421)))), Yr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Re = _t(l.nextSibling)),
      (Ie = t),
      (Z = !0),
      (Ke = null),
      e !== null &&
        ((ze[Me++] = it),
        (ze[Me++] = ut),
        (ze[Me++] = Gt),
        (it = e.id),
        (ut = e.overflow),
        (Gt = t)),
      (t = ku(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Us(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yi(e.return, t, n);
}
function Io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Xc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Us(e, n, t);
        else if (e.tag === 19) Us(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && _l(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Io(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && _l(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Io(t, !0, n, null, o);
        break;
      case "together":
        Io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function il(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bp(e, t, n) {
  switch (t.tag) {
    case 3:
      Yc(t), En();
      break;
    case 5:
      xc(t);
      break;
    case 1:
      _e(t.type) && Sl(t);
      break;
    case 4:
      pu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      V(El, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Gc(e, t, n)
          : (V(J, J.current & 1),
            (e = dt(e, t, n)),
            e !== null ? e.sibling : null);
      V(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qc(e, t, n);
  }
  return dt(e, t, n);
}
var Zc, Pi, Jc, qc;
Zc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pi = function () {};
Jc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ht(tt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Yo(e, l)), (r = Yo(e, r)), (o = []);
        break;
      case "select":
        (l = b({}, l, { value: void 0 })),
          (r = b({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Zo(e, l)), (r = Zo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    qo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (sr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (sr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && Y("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
qc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $p(e, t, n) {
  var r = t.pendingProps;
  switch ((iu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return _e(t.type) && wl(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pn(),
        G(Pe),
        G(ye),
        mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (Ti(Ke), (Ke = null)))),
        Pi(e, t),
        me(t),
        null
      );
    case 5:
      hu(t);
      var l = Ht(Sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Jc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return me(t), null;
        }
        if (((e = Ht(tt.current)), Qr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[be] = t), (r[gr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < qn.length; l++) Y(qn[l], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Yu(r, o), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Xu(r, o), Y("invalid", r);
          }
          qo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : sr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), Gu(r, o, !0);
              break;
            case "textarea":
              Dr(r), Zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = gl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Pa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[be] = t),
            (e[gr] = r),
            Zc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = bo(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qn.length; l++) Y(qn[l], e);
                l = r;
                break;
              case "source":
                Y("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (l = r);
                break;
              case "details":
                Y("toggle", e), (l = r);
                break;
              case "input":
                Yu(e, r), (l = Yo(e, r)), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = b({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Xu(e, r), (l = Zo(e, r)), Y("invalid", e);
                break;
              default:
                l = r;
            }
            qo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Na(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && _a(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && ar(e, s)
                    : typeof s == "number" && ar(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (sr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && Y("scroll", e)
                      : s != null && Qi(e, o, s, i));
              }
            switch (n) {
              case "input":
                Dr(e), Gu(e, r, !1);
                break;
              case "textarea":
                Dr(e), Zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? mn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) qc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ht(Sr.current)), Ht(tt.current), Qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (o = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (G(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Re !== null && t.mode & 1 && !(t.flags & 128))
          mc(), En(), (t.flags |= 98560), (o = !1);
        else if (((o = Qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[be] = t;
          } else
            En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (o = !1);
        } else Ke !== null && (Ti(Ke), (Ke = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? ue === 0 && (ue = 3) : Ou())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Pn(), Pi(e, t), e === null && vr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return cu(t.type._context), me(t), null;
    case 17:
      return _e(t.type) && wl(), me(t), null;
    case 19:
      if ((G(J), (o = t.memoizedState), o === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Qn(o, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = _l(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Qn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            re() > On &&
            ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _l(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Z)
            )
              return me(t), null;
          } else
            2 * re() - o.renderingStartTime > On &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = re()),
          (t.sibling = null),
          (n = J.current),
          V(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        _u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Ap(e, t) {
  switch ((iu(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pn(),
        G(Pe),
        G(ye),
        mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hu(t), null;
    case 13:
      if ((G(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        En();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(J), null;
    case 4:
      return Pn(), null;
    case 10:
      return cu(t.type._context), null;
    case 22:
    case 23:
      return _u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gr = !1,
  ve = !1,
  Wp = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function _i(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Bs = !1;
function Vp(e, t) {
  if (((ai = ml), (e = nc()), lu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (l !== 0 && d.nodeType !== 3) || (u = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (s = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++c === r && (s = i),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ci = { focusedElem: e, selectionRange: n }, ml = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    I = v.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : He(t.type, x),
                      I
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          ne(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (v = Bs), (Bs = !1), v;
}
function or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && _i(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ql(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[gr], delete t[pi], delete t[Pp], delete t[_p])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ef(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $s(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ef(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ni(e, t, n), e = e.sibling; e !== null; ) Ni(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var fe = null,
  Qe = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) tf(e, t, n), (n = n.sibling);
}
function tf(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || pn(n, t);
    case 6:
      var r = fe,
        l = Qe;
      (fe = null),
        mt(e, t, n),
        (fe = r),
        (Qe = l),
        fe !== null &&
          (Qe
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (Qe
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Eo(e.parentNode, n)
              : e.nodeType === 1 && Eo(e, n),
            pr(e))
          : Eo(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (l = Qe),
        (fe = n.stateNode.containerInfo),
        (Qe = !0),
        mt(e, t, n),
        (fe = r),
        (Qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && _i(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ne(n, t, u);
        }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), mt(e, t, n), (ve = r))
        : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function As(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Wp()),
      t.forEach(function (r) {
        var l = qp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (fe = u.stateNode), (Qe = !1);
              break e;
            case 3:
              (fe = u.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (fe = u.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          u = u.return;
        }
        if (fe === null) throw Error(E(160));
        tf(o, i, l), (fe = null), (Qe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        ne(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) nf(t, e), (t = t.sibling);
}
function nf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), Je(e), r & 4)) {
        try {
          or(3, e, e.return), Ql(3, e);
        } catch (x) {
          ne(e, e.return, x);
        }
        try {
          or(5, e, e.return);
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      break;
    case 1:
      Ve(t, e), Je(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        Je(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ar(l, "");
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ea(l, o),
              bo(u, i);
            var a = bo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var c = s[i],
                d = s[i + 1];
              c === "style"
                ? Na(l, d)
                : c === "dangerouslySetInnerHTML"
                ? _a(l, d)
                : c === "children"
                ? ar(l, d)
                : Qi(l, c, d, a);
            }
            switch (u) {
              case "input":
                Go(l, o);
                break;
              case "textarea":
                Ca(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? mn(l, !!o.multiple, g, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? mn(l, !!o.multiple, o.defaultValue, !0)
                      : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[gr] = o;
          } catch (x) {
            ne(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (x) {
          ne(e, e.return, x);
        }
      break;
    case 4:
      Ve(t, e), Je(e);
      break;
    case 13:
      Ve(t, e),
        Je(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Cu = re())),
        r & 4 && As(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (a = ve) || c), Ve(t, e), (ve = a)) : Ve(t, e),
        Je(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (d = N = c; N !== null; ) {
              switch (((h = N), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  or(4, h, h.return);
                  break;
                case 1:
                  pn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      ne(r, n, x);
                    }
                  }
                  break;
                case 5:
                  pn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Vs(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (N = g)) : Vs(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (l = d.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = d.stateNode),
                      (s = d.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Oa("display", i)));
              } catch (x) {
                ne(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (x) {
                ne(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), Je(e), r & 4 && As(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), Je(e);
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ef(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ar(l, ""), (r.flags &= -33));
          var o = $s(e);
          Ri(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = $s(e);
          Ni(e, u, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hp(e, t, n) {
  (N = e), rf(e);
}
function rf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Gr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ve;
        u = Gr;
        var a = ve;
        if (((Gr = i), (ve = s) && !a))
          for (N = l; N !== null; )
            (i = N),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Hs(l)
                : s !== null
                ? ((s.return = i), (N = s))
                : Hs(l);
        for (; o !== null; ) (N = o), rf(o), (o = o.sibling);
        (N = l), (Gr = u), (ve = a);
      }
      Ws(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : Ws(e);
  }
}
function Ws(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Ql(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ps(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ps(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && pr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ve || (t.flags & 512 && Oi(t));
      } catch (h) {
        ne(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Vs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Hs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ql(4, t);
          } catch (s) {
            ne(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ne(t, l, s);
            }
          }
          var o = t.return;
          try {
            Oi(t);
          } catch (s) {
            ne(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oi(t);
          } catch (s) {
            ne(t, i, s);
          }
      }
    } catch (s) {
      ne(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var Qp = Math.ceil,
  Rl = pt.ReactCurrentDispatcher,
  xu = pt.ReactCurrentOwner,
  Fe = pt.ReactCurrentBatchConfig,
  $ = 0,
  ce = null,
  oe = null,
  de = 0,
  Ne = 0,
  hn = Mt(0),
  ue = 0,
  Cr = null,
  Zt = 0,
  Kl = 0,
  Eu = 0,
  ir = null,
  Ee = null,
  Cu = 0,
  On = 1 / 0,
  lt = null,
  Il = !1,
  Ii = null,
  Nt = null,
  Xr = !1,
  kt = null,
  jl = 0,
  ur = 0,
  ji = null,
  ul = -1,
  sl = 0;
function we() {
  return $ & 6 ? re() : ul !== -1 ? ul : (ul = re());
}
function Rt(e) {
  return e.mode & 1
    ? $ & 2 && de !== 0
      ? de & -de
      : Np.transition !== null
      ? (sl === 0 && (sl = $a()), sl)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ya(e.type))),
        e)
    : 1;
}
function Ge(e, t, n, r) {
  if (50 < ur) throw ((ur = 0), (ji = null), Error(E(185)));
  Nr(e, n, r),
    (!($ & 2) || e !== ce) &&
      (e === ce && (!($ & 2) && (Kl |= n), ue === 4 && wt(e, de)),
      Oe(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((On = re() + 500), Wl && Dt()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Nd(e, t);
  var r = hl(e, e === ce ? de : 0);
  if (r === 0)
    n !== null && bu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bu(n), t === 1))
      e.tag === 0 ? Op(Qs.bind(null, e)) : dc(Qs.bind(null, e)),
        Ep(function () {
          !($ & 6) && Dt();
        }),
        (n = null);
    else {
      switch (Aa(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = Ua;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = Ba;
          break;
        default:
          n = pl;
      }
      n = df(n, lf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function lf(e, t) {
  if (((ul = -1), (sl = 0), $ & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n) return null;
  var r = hl(e, e === ce ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var o = uf();
    (ce !== e || de !== t) && ((lt = null), (On = re() + 500), Qt(e, t));
    do
      try {
        Gp();
        break;
      } catch (u) {
        of(e, u);
      }
    while (1);
    au(),
      (Rl.current = o),
      ($ = l),
      oe !== null ? (t = 0) : ((ce = null), (de = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = li(e)), l !== 0 && ((r = l), (t = Li(e, l)))), t === 1)
    )
      throw ((n = Cr), Qt(e, 0), wt(e, r), Oe(e, re()), n);
    if (t === 6) wt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Kp(l) &&
          ((t = Ll(e, r)),
          t === 2 && ((o = li(e)), o !== 0 && ((r = o), (t = Li(e, o)))),
          t === 1))
      )
        throw ((n = Cr), Qt(e, 0), wt(e, r), Oe(e, re()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          At(e, Ee, lt);
          break;
        case 3:
          if (
            (wt(e, r), (r & 130023424) === r && ((t = Cu + 500 - re()), 10 < t))
          ) {
            if (hl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = di(At.bind(null, e, Ee, lt), t);
            break;
          }
          At(e, Ee, lt);
          break;
        case 4:
          if ((wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ye(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = di(At.bind(null, e, Ee, lt), r);
            break;
          }
          At(e, Ee, lt);
          break;
        case 5:
          At(e, Ee, lt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Oe(e, re()), e.callbackNode === n ? lf.bind(null, e) : null;
}
function Li(e, t) {
  var n = ir;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = Ll(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && Ti(t)),
    e
  );
}
function Ti(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function Kp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Xe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function wt(e, t) {
  for (
    t &= ~Eu,
      t &= ~Kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qs(e) {
  if ($ & 6) throw Error(E(327));
  Sn();
  var t = hl(e, 0);
  if (!(t & 1)) return Oe(e, re()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = li(e);
    r !== 0 && ((t = r), (n = Li(e, r)));
  }
  if (n === 1) throw ((n = Cr), Qt(e, 0), wt(e, t), Oe(e, re()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    At(e, Ee, lt),
    Oe(e, re()),
    null
  );
}
function Pu(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((On = re() + 500), Wl && Dt());
  }
}
function Jt(e) {
  kt !== null && kt.tag === 0 && !($ & 6) && Sn();
  var t = $;
  $ |= 1;
  var n = Fe.transition,
    r = W;
  try {
    if (((Fe.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (Fe.transition = n), ($ = t), !($ & 6) && Dt();
  }
}
function _u() {
  (Ne = hn.current), G(hn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xp(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((iu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wl();
          break;
        case 3:
          Pn(), G(Pe), G(ye), mu();
          break;
        case 5:
          hu(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          G(J);
          break;
        case 19:
          G(J);
          break;
        case 10:
          cu(r.type._context);
          break;
        case 22:
        case 23:
          _u();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (oe = e = It(e.current, null)),
    (de = Ne = t),
    (ue = 0),
    (Cr = null),
    (Eu = Kl = Zt = 0),
    (Ee = ir = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function of(e, t) {
  do {
    var n = oe;
    try {
      if ((au(), (ll.current = Nl), Ol)) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ol = !1;
      }
      if (
        ((Xt = 0),
        (ae = ie = q = null),
        (lr = !1),
        (kr = 0),
        (xu.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Cr = t), (oe = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = de),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            c = u,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Ls(i);
          if (g !== null) {
            (g.flags &= -257),
              Ts(g, i, u, o, t),
              g.mode & 1 && js(o, a, t),
              (t = g),
              (s = a);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              js(o, a, t), Ou();
              break e;
            }
            s = Error(E(426));
          }
        } else if (Z && u.mode & 1) {
          var I = Ls(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Ts(I, i, u, o, t),
              uu(_n(s, u));
            break e;
          }
        }
        (o = s = _n(s, u)),
          ue !== 4 && (ue = 2),
          ir === null ? (ir = [o]) : ir.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Wc(o, s, t);
              Cs(o, p);
              break e;
            case 1:
              u = s;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Vc(o, u, t);
                Cs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      af(n);
    } catch (P) {
      (t = P), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function uf() {
  var e = Rl.current;
  return (Rl.current = Nl), e === null ? Nl : e;
}
function Ou() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    ce === null || (!(Zt & 268435455) && !(Kl & 268435455)) || wt(ce, de);
}
function Ll(e, t) {
  var n = $;
  $ |= 2;
  var r = uf();
  (ce !== e || de !== t) && ((lt = null), Qt(e, t));
  do
    try {
      Yp();
      break;
    } catch (l) {
      of(e, l);
    }
  while (1);
  if ((au(), ($ = n), (Rl.current = r), oe !== null)) throw Error(E(261));
  return (ce = null), (de = 0), ue;
}
function Yp() {
  for (; oe !== null; ) sf(oe);
}
function Gp() {
  for (; oe !== null && !wd(); ) sf(oe);
}
function sf(e) {
  var t = ff(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? af(e) : (oe = t),
    (xu.current = null);
}
function af(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ap(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (oe = null);
        return;
      }
    } else if (((n = $p(n, t, Ne)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function At(e, t, n) {
  var r = W,
    l = Fe.transition;
  try {
    (Fe.transition = null), (W = 1), Xp(e, t, n, r);
  } finally {
    (Fe.transition = l), (W = r);
  }
  return null;
}
function Xp(e, t, n, r) {
  do Sn();
  while (kt !== null);
  if ($ & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Rd(e, o),
    e === ce && ((oe = ce = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xr ||
      ((Xr = !0),
      df(pl, function () {
        return Sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Fe.transition), (Fe.transition = null);
    var i = W;
    W = 1;
    var u = $;
    ($ |= 4),
      (xu.current = null),
      Vp(e, n),
      nf(n, e),
      mp(ci),
      (ml = !!ai),
      (ci = ai = null),
      (e.current = n),
      Hp(n),
      Sd(),
      ($ = u),
      (W = i),
      (Fe.transition = o);
  } else e.current = n;
  if (
    (Xr && ((Xr = !1), (kt = e), (jl = l)),
    (o = e.pendingLanes),
    o === 0 && (Nt = null),
    Ed(n.stateNode),
    Oe(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Il) throw ((Il = !1), (e = Ii), (Ii = null), e);
  return (
    jl & 1 && e.tag !== 0 && Sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ji ? ur++ : ((ur = 0), (ji = e))) : (ur = 0),
    Dt(),
    null
  );
}
function Sn() {
  if (kt !== null) {
    var e = Aa(jl),
      t = Fe.transition,
      n = W;
    try {
      if (((Fe.transition = null), (W = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (jl = 0), $ & 6)) throw Error(E(331));
        var l = $;
        for ($ |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (N = d);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var h = c.sibling,
                        g = c.return;
                      if ((bc(c), c === a)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (N = h);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var I = x.sibling;
                    (x.sibling = null), (x = I);
                  } while (x !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    or(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (N = p);
                break e;
              }
              N = o.return;
            }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          i = N;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (N = m);
          else
            e: for (i = f; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ql(9, u);
                  }
                } catch (P) {
                  ne(u, u.return, P);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (N = S);
                break e;
              }
              N = u.return;
            }
        }
        if (
          (($ = l), Dt(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (Fe.transition = t);
    }
  }
  return !1;
}
function Ks(e, t, n) {
  (t = _n(n, t)),
    (t = Wc(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = we()),
    e !== null && (Nr(e, 1, t), Oe(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) Ks(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ks(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = _n(n, e)),
            (e = Vc(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = we()),
            t !== null && (Nr(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (de & n) === n &&
      (ue === 4 || (ue === 3 && (de & 130023424) === de && 500 > re() - Cu)
        ? Qt(e, 0)
        : (Eu |= n)),
    Oe(e, t);
}
function cf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = we();
  (e = ft(e, t)), e !== null && (Nr(e, t, n), Oe(e, n));
}
function Jp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cf(e, n);
}
function qp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), cf(e, n);
}
var ff;
ff = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Bp(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), Z && t.flags & 1048576 && pc(t, xl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      il(e, t), (e = t.pendingProps);
      var l = xn(t, ye.current);
      wn(t, n), (l = yu(null, t, r, e, l, n));
      var o = gu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((o = !0), Sl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            du(t),
            (l.updater = Vl),
            (t.stateNode = l),
            (l._reactInternals = t),
            wi(t, r, e, n),
            (t = xi(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && ou(t), ge(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (il(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = eh(r)),
          (e = He(r, e)),
          l)
        ) {
          case 0:
            t = ki(null, t, r, e, n);
            break e;
          case 1:
            t = Ds(null, t, r, e, n);
            break e;
          case 11:
            t = zs(null, t, r, e, n);
            break e;
          case 14:
            t = Ms(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        ki(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        Ds(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Yc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          yc(e, t),
          Pl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = _n(Error(E(423)), t)), (t = Fs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = _n(Error(E(424)), t)), (t = Fs(e, t, r, n, l));
            break e;
          } else
            for (
              Re = _t(t.stateNode.containerInfo.firstChild),
                Ie = t,
                Z = !0,
                Ke = null,
                n = kc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((En(), r === l)) {
            t = dt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xc(t),
        e === null && vi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        fi(r, l) ? (i = null) : o !== null && fi(r, o) && (t.flags |= 32),
        Kc(e, t),
        ge(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && vi(t), null;
    case 13:
      return Gc(e, t, n);
    case 4:
      return (
        pu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        zs(e, t, r, l, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          V(El, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Xe(o.value, i)) {
            if (o.children === l.children && !Pe.current) {
              t = dt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = st(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      yi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  yi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ge(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        wn(t, n),
        (l = Ue(l)),
        (r = r(l)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = He(r, t.pendingProps)),
        (l = He(r.type, l)),
        Ms(e, t, r, l, n)
      );
    case 15:
      return Hc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : He(r, l)),
        il(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), Sl(t)) : (e = !1),
        wn(t, n),
        wc(t, r, l),
        wi(t, r, l, n),
        xi(null, t, r, !0, e, n)
      );
    case 19:
      return Xc(e, t, n);
    case 22:
      return Qc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function df(e, t) {
  return Fa(e, t);
}
function bp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function De(e, t, n, r) {
  return new bp(e, t, n, r);
}
function Nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function eh(e) {
  if (typeof e == "function") return Nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function al(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Nu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case rn:
        return Kt(n.children, l, o, t);
      case Ki:
        (i = 8), (l |= 8);
        break;
      case Vo:
        return (
          (e = De(12, n, t, l | 2)), (e.elementType = Vo), (e.lanes = o), e
        );
      case Ho:
        return (e = De(13, n, t, l)), (e.elementType = Ho), (e.lanes = o), e;
      case Qo:
        return (e = De(19, n, t, l)), (e.elementType = Qo), (e.lanes = o), e;
      case Sa:
        return Yl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ga:
              i = 10;
              break e;
            case wa:
              i = 9;
              break e;
            case Yi:
              i = 11;
              break e;
            case Gi:
              i = 14;
              break e;
            case vt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = De(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Kt(e, t, n, r) {
  return (e = De(7, e, r, t)), (e.lanes = n), e;
}
function Yl(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = Sa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function jo(e, t, n) {
  return (e = De(6, e, null, t)), (e.lanes = n), e;
}
function Lo(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function th(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fo(0)),
    (this.expirationTimes = fo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ru(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new th(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = De(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    du(o),
    e
  );
}
function nh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pf(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (en(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return fc(e, n, t);
  }
  return t;
}
function hf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ru(n, r, !0, e, l, o, i, u, s)),
    (e.context = pf(null)),
    (n = e.current),
    (r = we()),
    (l = Rt(n)),
    (o = st(r, l)),
    (o.callback = t ?? null),
    Ot(n, o, l),
    (e.current.lanes = l),
    Nr(e, l, r),
    Oe(e, r),
    e
  );
}
function Gl(e, t, n, r) {
  var l = t.current,
    o = we(),
    i = Rt(l);
  return (
    (n = pf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(l, t, i)),
    e !== null && (Ge(e, l, i, o), rl(e, l, i)),
    i
  );
}
function Tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ys(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Iu(e, t) {
  Ys(e, t), (e = e.alternate) && Ys(e, t);
}
function rh() {
  return null;
}
var mf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ju(e) {
  this._internalRoot = e;
}
Xl.prototype.render = ju.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Gl(e, t, null, null);
};
Xl.prototype.unmount = ju.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function () {
      Gl(null, e, null, null);
    }),
      (t[ct] = null);
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ha();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && Ka(e);
  }
};
function Lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gs() {}
function lh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Tl(i);
        o.call(a);
      };
    }
    var i = hf(t, r, e, 0, null, !1, !1, "", Gs);
    return (
      (e._reactRootContainer = i),
      (e[ct] = i.current),
      vr(e.nodeType === 8 ? e.parentNode : e),
      Jt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Tl(s);
      u.call(a);
    };
  }
  var s = Ru(e, 0, !1, null, null, !1, !1, "", Gs);
  return (
    (e._reactRootContainer = s),
    (e[ct] = s.current),
    vr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function () {
      Gl(t, s, n, r);
    }),
    s
  );
}
function Jl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Tl(i);
        u.call(s);
      };
    }
    Gl(t, i, e, l);
  } else i = lh(n, t, e, l, r);
  return Tl(i);
}
Wa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 &&
          (Ji(t, n | 1), Oe(t, re()), !($ & 6) && ((On = re() + 500), Dt()));
      }
      break;
    case 13:
      Jt(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var l = we();
          Ge(r, e, 1, l);
        }
      }),
        Iu(e, 1);
  }
};
qi = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = we();
      Ge(t, e, 134217728, n);
    }
    Iu(e, 134217728);
  }
};
Va = function (e) {
  if (e.tag === 13) {
    var t = Rt(e),
      n = ft(e, t);
    if (n !== null) {
      var r = we();
      Ge(n, e, t, r);
    }
    Iu(e, t);
  }
};
Ha = function () {
  return W;
};
Qa = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
ti = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Go(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(E(90));
            xa(r), Go(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ca(e, n);
      break;
    case "select":
      (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
  }
};
ja = Pu;
La = Jt;
var oh = { usingClientEntryPoint: !1, Events: [Ir, sn, Al, Ra, Ia, Pu] },
  Kn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ih = {
    bundleType: Kn.bundleType,
    version: Kn.version,
    rendererPackageName: Kn.rendererPackageName,
    rendererConfig: Kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ma(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kn.findFiberByHostInstance || rh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber)
    try {
      (Fl = Zr.inject(ih)), (et = Zr);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oh;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lu(t)) throw Error(E(200));
  return nh(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Lu(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = mf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[ct] = t.current),
    vr(e.nodeType === 8 ? e.parentNode : e),
    new ju(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Ma(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return Jt(e);
};
Le.hydrate = function (e, t, n) {
  if (!Zl(t)) throw Error(E(200));
  return Jl(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Lu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = mf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = hf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[ct] = t.current),
    vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Xl(t);
};
Le.render = function (e, t, n) {
  if (!Zl(t)) throw Error(E(200));
  return Jl(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Zl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Jt(function () {
        Jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ct] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Pu;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Jl(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Le);
})(rd);
var Xs = $o;
(Bo.createRoot = Xs.createRoot), (Bo.hydrateRoot = Xs.hydrateRoot);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pr() {
  return (
    (Pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pr.apply(this, arguments)
  );
}
var xt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xt || (xt = {}));
const Zs = "popstate";
function uh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return zi(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : zl(l);
  }
  return ah(t, n, null, e);
}
function se(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sh() {
  return Math.random().toString(36).substr(2, 8);
}
function Js(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function zi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Pr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jn(t) : t,
      { state: n, key: (t && t.key) || r || sh() }
    )
  );
}
function zl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function jn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ah(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = xt.Pop,
    s = null,
    a = c();
  a == null && ((a = 0), i.replaceState(Pr({}, i.state, { idx: a }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    u = xt.Pop;
    let I = c(),
      p = I == null ? null : I - a;
    (a = I), s && s({ action: u, location: x.location, delta: p });
  }
  function h(I, p) {
    u = xt.Push;
    let f = zi(x.location, I, p);
    n && n(f, I), (a = c() + 1);
    let m = Js(f, a),
      S = x.createHref(f);
    try {
      i.pushState(m, "", S);
    } catch {
      l.location.assign(S);
    }
    o && s && s({ action: u, location: x.location, delta: 1 });
  }
  function g(I, p) {
    u = xt.Replace;
    let f = zi(x.location, I, p);
    n && n(f, I), (a = c());
    let m = Js(f, a),
      S = x.createHref(f);
    i.replaceState(m, "", S),
      o && s && s({ action: u, location: x.location, delta: 0 });
  }
  function v(I) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof I == "string" ? I : zl(I);
    return (
      se(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let x = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(I) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Zs, d),
        (s = I),
        () => {
          l.removeEventListener(Zs, d), (s = null);
        }
      );
    },
    createHref(I) {
      return t(l, I);
    },
    createURL: v,
    encodeLocation(I) {
      let p = v(I);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: g,
    go(I) {
      return i.go(I);
    },
  };
  return x;
}
var qs;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(qs || (qs = {}));
function ch(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? jn(t) : t,
    l = zu(r.pathname || "/", n);
  if (l == null) return null;
  let o = vf(e);
  fh(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Sh(o[u], Eh(l));
  return i;
}
function vf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (se(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = jt([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (se(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      vf(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: gh(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of yf(o.path)) l(o, i, s);
    }),
    t
  );
}
function yf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = yf(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function fh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const dh = /^:\w+$/,
  ph = 3,
  hh = 2,
  mh = 1,
  vh = 10,
  yh = -2,
  bs = (e) => e === "*";
function gh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bs) && (r += yh),
    t && (r += hh),
    n
      .filter((l) => !bs(l))
      .reduce((l, o) => l + (dh.test(o) ? ph : o === "" ? mh : vh), r)
  );
}
function wh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Sh(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      c = kh(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = u.route;
    o.push({
      params: r,
      pathname: jt([l, c.pathname]),
      pathnameBase: Oh(jt([l, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (l = jt([l, c.pathnameBase]));
  }
  return o;
}
function kh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, c, d) => {
      if (c === "*") {
        let h = u[d] || "";
        i = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (a[c] = Ch(u[d] || "", c)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function xh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Eh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Tu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ch(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Tu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function zu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ph(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? jn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : _h(n, t)) : t,
    search: Nh(r),
    hash: Rh(l),
  };
}
function _h(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function To(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function wf(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = jn(e))
    : ((l = Pr({}, e)),
      se(
        !l.pathname || !l.pathname.includes("?"),
        To("?", "pathname", "search", l)
      ),
      se(
        !l.pathname || !l.pathname.includes("#"),
        To("#", "pathname", "hash", l)
      ),
      se(!l.search || !l.search.includes("#"), To("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let d = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      l.pathname = h.join("/");
    }
    u = d >= 0 ? t[d] : "/";
  }
  let s = Ph(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || c) && (s.pathname += "/"), s;
}
const jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Oh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Nh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Rh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Ih(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Lh = typeof Object.is == "function" ? Object.is : jh,
  { useState: Th, useEffect: zh, useLayoutEffect: Mh, useDebugValue: Dh } = Uo;
function Fh(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Th({ inst: { value: r, getSnapshot: t } });
  return (
    Mh(() => {
      (l.value = r), (l.getSnapshot = t), zo(l) && o({ inst: l });
    }, [e, r, t]),
    zh(
      () => (
        zo(l) && o({ inst: l }),
        e(() => {
          zo(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Dh(r),
    r
  );
}
function zo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Lh(n, r);
  } catch {
    return !0;
  }
}
function Uh(e, t, n) {
  return t();
}
const Bh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $h = !Bh,
  Ah = $h ? Uh : Fh;
"useSyncExternalStore" in Uo && ((e) => e.useSyncExternalStore)(Uo);
const Sf = O.createContext(null),
  kf = O.createContext(null),
  Lr = O.createContext(null),
  ql = O.createContext(null),
  Ln = O.createContext({ outlet: null, matches: [] }),
  xf = O.createContext(null);
function Mi() {
  return (
    (Mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mi.apply(this, arguments)
  );
}
function Wh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Tr() || se(!1);
  let { basename: r, navigator: l } = O.useContext(Lr),
    { hash: o, pathname: i, search: u } = Ef(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : jt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function Tr() {
  return O.useContext(ql) != null;
}
function bl() {
  return Tr() || se(!1), O.useContext(ql).location;
}
function Mu() {
  Tr() || se(!1);
  let { basename: e, navigator: t } = O.useContext(Lr),
    { matches: n } = O.useContext(Ln),
    { pathname: r } = bl(),
    l = JSON.stringify(gf(n).map((u) => u.pathnameBase)),
    o = O.useRef(!1);
  return (
    O.useEffect(() => {
      o.current = !0;
    }),
    O.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let a = wf(u, JSON.parse(l), r, s.relative === "path");
        e !== "/" &&
          (a.pathname = a.pathname === "/" ? e : jt([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state, s);
      },
      [e, t, l, r]
    )
  );
}
function Ef(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = O.useContext(Ln),
    { pathname: l } = bl(),
    o = JSON.stringify(gf(r).map((i) => i.pathnameBase));
  return O.useMemo(() => wf(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Vh(e, t) {
  Tr() || se(!1);
  let { navigator: n } = O.useContext(Lr),
    r = O.useContext(kf),
    { matches: l } = O.useContext(Ln),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = bl(),
    a;
  if (t) {
    var c;
    let x = typeof t == "string" ? jn(t) : t;
    u === "/" || ((c = x.pathname) != null && c.startsWith(u)) || se(!1),
      (a = x);
  } else a = s;
  let d = a.pathname || "/",
    h = u === "/" ? d : d.slice(u.length) || "/",
    g = ch(e, { pathname: h }),
    v = Yh(
      g &&
        g.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, i, x.params),
            pathname: jt([
              u,
              n.encodeLocation
                ? n.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? u
                : jt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && v
    ? O.createElement(
        ql.Provider,
        {
          value: {
            location: Mi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: xt.Pop,
          },
        },
        v
      )
    : v;
}
function Hh() {
  let e = Jh(),
    t = Ih(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return O.createElement(
    O.Fragment,
    null,
    O.createElement("h2", null, "Unexpected Application Error!"),
    O.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? O.createElement("pre", { style: l }, n) : null,
    o
  );
}
class Qh extends O.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? O.createElement(
          Ln.Provider,
          { value: this.props.routeContext },
          O.createElement(xf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Kh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = O.useContext(Sf);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    O.createElement(Ln.Provider, { value: t }, r)
  );
}
function Yh(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || se(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let s = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      a = null;
    n &&
      (i.route.ErrorBoundary
        ? (a = O.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (a = i.route.errorElement)
        : (a = O.createElement(Hh, null)));
    let c = t.concat(r.slice(0, u + 1)),
      d = () => {
        let h = o;
        return (
          s
            ? (h = a)
            : i.route.Component
            ? (h = O.createElement(i.route.Component, null))
            : i.route.element && (h = i.route.element),
          O.createElement(Kh, {
            match: i,
            routeContext: { outlet: o, matches: c },
            children: h,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || u === 0)
      ? O.createElement(Qh, {
          location: n.location,
          component: a,
          error: s,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d();
  }, null);
}
var ea;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(ea || (ea = {}));
var Ml;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Ml || (Ml = {}));
function Gh(e) {
  let t = O.useContext(kf);
  return t || se(!1), t;
}
function Xh(e) {
  let t = O.useContext(Ln);
  return t || se(!1), t;
}
function Zh(e) {
  let t = Xh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || se(!1), n.route.id;
}
function Jh() {
  var e;
  let t = O.useContext(xf),
    n = Gh(Ml.UseRouteError),
    r = Zh(Ml.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function _r(e) {
  se(!1);
}
function qh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = xt.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Tr() && se(!1);
  let u = t.replace(/^\/*/, "/"),
    s = O.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = jn(r));
  let {
      pathname: a = "/",
      search: c = "",
      hash: d = "",
      state: h = null,
      key: g = "default",
    } = r,
    v = O.useMemo(() => {
      let x = zu(a, u);
      return x == null
        ? null
        : {
            location: { pathname: x, search: c, hash: d, state: h, key: g },
            navigationType: l,
          };
    }, [u, a, c, d, h, g, l]);
  return v == null
    ? null
    : O.createElement(
        Lr.Provider,
        { value: s },
        O.createElement(ql.Provider, { children: n, value: v })
      );
}
function Cf(e) {
  let { children: t, location: n } = e,
    r = O.useContext(Sf),
    l = r && !t ? r.router.routes : Di(t);
  return Vh(l, n);
}
var ta;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(ta || (ta = {}));
new Promise(() => {});
function Di(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    O.Children.forEach(e, (r, l) => {
      if (!O.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === O.Fragment) {
        n.push.apply(n, Di(r.props.children, o));
        return;
      }
      r.type !== _r && se(!1), !r.props.index || !r.props.children || se(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Di(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fi() {
  return (
    (Fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fi.apply(this, arguments)
  );
}
function bh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function em(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tm(e, t) {
  return e.button === 0 && (!t || t === "_self") && !em(e);
}
const nm = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function rm(e) {
  let { basename: t, children: n, window: r } = e,
    l = O.useRef();
  l.current == null && (l.current = uh({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, u] = O.useState({ action: o.action, location: o.location });
  return (
    O.useLayoutEffect(() => o.listen(u), [o]),
    O.createElement(qh, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
const lm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  im = O.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: c,
      } = t,
      d = bh(t, nm),
      { basename: h } = O.useContext(Lr),
      g,
      v = !1;
    if (typeof a == "string" && om.test(a) && ((g = a), lm)) {
      let f = new URL(window.location.href),
        m = a.startsWith("//") ? new URL(f.protocol + a) : new URL(a),
        S = zu(m.pathname, h);
      m.origin === f.origin && S != null
        ? (a = S + m.search + m.hash)
        : (v = !0);
    }
    let x = Wh(a, { relative: l }),
      I = um(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: c,
        relative: l,
      });
    function p(f) {
      r && r(f), f.defaultPrevented || I(f);
    }
    return O.createElement(
      "a",
      Fi({}, d, { href: g || x, onClick: v || o ? r : p, ref: n, target: s })
    );
  });
var na;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(na || (na = {}));
var ra;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ra || (ra = {}));
function um(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Mu(),
    s = bl(),
    a = Ef(e, { relative: i });
  return O.useCallback(
    (c) => {
      if (tm(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : zl(s) === zl(a);
        u(e, { replace: d, state: l, preventScrollReset: o, relative: i });
      }
    },
    [s, u, a, r, l, n, e, o, i]
  );
}
const sm = "_app_bl6kh_1",
  am = "_playButton_bl6kh_13",
  la = { app: sm, playButton: am },
  cm = "/mine-it/assets/logo-b0f0e7f2.svg",
  fm = "_logo_1jf9z_2",
  dm = { logo: fm },
  Pf = () =>
    L.jsx("img", { className: dm.logo, src: cm, alt: "logo do mine it" }),
  pm = "_app_2vg7u_1",
  hm = "_leftPillar_2vg7u_22",
  mm = "_rightPillar_2vg7u_29",
  vm = "_spiderWebLeft_2vg7u_36",
  ym = "_spiderWebRight_2vg7u_42",
  Yn = {
    app: pm,
    leftPillar: hm,
    rightPillar: mm,
    spiderWebLeft: vm,
    spiderWebRight: ym,
  },
  gm = "/mine-it/assets/left-pillar-d8930ca6.svg",
  wm = "/mine-it/assets/right-pillar-6e4bb04e.svg",
  Sm = "/mine-it/assets/spider-web1-f9abc9ff.svg",
  km = "/mine-it/assets/spider-web2-dca4561b.svg",
  xm = "_boardGame_s7i0w_1",
  Em = { boardGame: xm };
var qt = {},
  Cm = {
    get exports() {
      return qt;
    },
    set exports(e) {
      qt = e;
    },
  },
  Pm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  _m = Pm,
  Om = _m;
function _f() {}
function Of() {}
Of.resetWarningCache = _f;
var Nm = function () {
  function e(r, l, o, i, u, s) {
    if (s !== Om) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Of,
    resetWarningCache: _f,
  };
  return (n.PropTypes = n), n;
};
Cm.exports = Nm();
const eo = le.createContext(),
  Mo = new Audio("./assets/mine-it-background-music-6a46522e.mp3"),
  Nf = ({ children: e }) => {
    const [t, n] = le.useState(!1),
      [r, l] = le.useState(0),
      [o, i] = le.useState(!1),
      [u, s] = le.useState(!1),
      [a, c] = le.useState(!1),
      d = Mu();
    return (
      le.useEffect(() => {
        (Mo.loop = !0), t ? Mo.play() : Mo.pause();
      }, [t]),
      le.useEffect(() => {
        r === 8 && s(!0), o && c(!0);
      }, [r, o]),
      le.useEffect(() => {
        (u || a) &&
          setTimeout(() => {
            n(!1), d("/mine-it/play/gameover");
          }, 1e3);
      }, [u, a, d]),
      L.jsx(eo.Provider, {
        value: {
          isPlaying: t,
          isWinnerPlayer: u,
          setIsPlaying: n,
          setIsDiamond: l,
          setIsBomb: i,
          setIsWinnerPlayer: s,
          setIsLoserPlayer: c,
        },
        children: e,
      })
    );
  };
Nf.propTypes = { children: qt.any };
const Rm = "_cardItem_j4oli_1",
  Im = "_apearAnime_j4oli_1",
  jm = "_front_j4oli_35",
  Lm = "_back_j4oli_40",
  Tm = "_cardOpenedResult_j4oli_54",
  Jr = {
    cardItem: Rm,
    apearAnime: Im,
    front: jm,
    back: Lm,
    cardOpenedResult: Tm,
  },
  zm = "/mine-it/assets/table-item1-c936da7b.svg",
  Mm = "/mine-it/assets/table-item2-4b1520d2.svg",
  Dm = "/mine-it/assets/table-item3-8472d9bf.svg",
  Fm = "/mine-it/assets/table-item4-3068a550.svg",
  Um = "/mine-it/assets/table-item-back1-581d93dd.svg",
  Bm = "/mine-it/assets/table-item-back2-167dc68b.svg",
  $m = "/mine-it/assets/table-item-back3-03613abb.svg",
  Am = "/mine-it/assets/table-item-back4-c676a2eb.svg",
  Wm = "/mine-it/assets/diamond-purple-b2dc1270.svg",
  Vm = "/mine-it/assets/diamond-red-05cec0b2.svg",
  Hm = "/mine-it/assets/diamond-yellow-99010154.svg",
  Qm = "/mine-it/assets/bomb-1b1063cc.svg",
  oa = [
    { front: zm, back: Um },
    { front: Mm, back: Bm },
    { front: Dm, back: $m },
    { front: Fm, back: Am },
  ],
  Km = [Wm, Vm, Hm],
  Ym = new Audio("./assets/mine-it-dinamite-116e9a6b.mp3"),
  Do = new Audio("./assets/mine-it-right-be6cb7d8.mp3"),
  Du = ({ cardData: e, styleAnimation: t }) => {
    const [n, r] = le.useState({}),
      [l, o] = le.useState(!1),
      { setIsBomb: i, setIsDiamond: u } = le.useContext(eo),
      s = le.useRef(null),
      a = le.useRef(null),
      { itemCard: c, diamond: d, bomb: h } = e;
    le.useEffect(() => {
      function v() {
        r({
          front: oa[c].front,
          back: oa[c].back,
          diamond: Km[d],
          bomb: h ? Qm : !1,
        });
      }
      v();
    }, [c, d, h]);
    function g({ currentTarget: v }) {
      o(!0),
        Do.pause(),
        (Do.currentTime = 0),
        v.classList.add("cardOpened"),
        setTimeout(() => {
          s.current.alt.includes("bomba")
            ? (i(!0), Ym.play())
            : (u((x) => x + 1), Do.play());
        });
    }
    return L.jsxs("div", {
      onClick: l ? void 0 : g,
      className: Jr.cardItem,
      style: t,
      children: [
        L.jsx("button", {
          ref: a,
          className: Jr.back,
          style: { backgroundImage: `url(${n.back})` },
          children: L.jsx("img", {
            ref: s,
            className: Jr.cardOpenedResult,
            src: n.bomb ? n.bomb : n.diamond,
            alt: n.bomb ? "imagem de bomba" : "imagem de diamante",
          }),
        }),
        L.jsx("button", {
          ref: a,
          className: Jr.front,
          style: { backgroundImage: `url(${n.front})` },
        }),
      ],
    });
  };
Du.displayName = "CardItem";
Du.propTypes = { styleAnimation: qt.object, cardData: qt.object };
const Gm = "_cardBoard_ek0tg_1",
  Xm = { cardBoard: Gm },
  Zm = "_startButton_14eyk_1",
  Jm = { startButton: Zm },
  qm = "/mine-it/assets/start-2fd07cf6.png",
  Rf = ({ setIsPlaying: e, isPlaying: t }) => {
    function n() {
      e(!0);
    }
    return t
      ? null
      : L.jsx("button", {
          className: Jm.startButton,
          onClick: n,
          children: L.jsx("img", { src: qm, alt: "imagem de start" }),
        });
  };
Rf.propTypes = { setIsPlaying: qt.func, isPlaying: qt.bool };
const bm = () => {
    const { isPlaying: e, setIsPlaying: t } = le.useContext(eo);
    function n(o, i) {
      return Math.floor(Math.random() * i) + o;
    }
    const l = le.useMemo(() => {
      const o = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        i = n(1, 9);
      return o.map((u) => ({
        itemCard: n(0, 4),
        diamond: n(0, 3),
        bomb: u === i,
      }));
    }, []);
    return L.jsxs("div", {
      className: Xm.cardBoard,
      children: [
        e &&
          l.map((o, i) =>
            L.jsx(
              Du,
              {
                open,
                cardData: o,
                styleAnimation: { animationDelay: `${i * 250}ms` },
              },
              i
            )
          ),
        L.jsx(Rf, { setIsPlaying: t, isPlaying: e }),
      ],
    });
  },
  ev = "/mine-it/assets/coins-ada294f8.svg",
  tv = "_coins_1wvq7_1",
  nv = { coins: tv },
  rv = () =>
    L.jsx("img", {
      className: nv.coins,
      src: ev,
      alt: "image de moedas de ouro",
    }),
  lv = "_coinBag_1t4db_1",
  ov = { coinBag: lv },
  iv = "/mine-it/assets/coin-bag-40fa00dc.svg",
  uv = () =>
    L.jsx("img", {
      className: ov.coinBag,
      src: iv,
      alt: "imagem de um pote de ouro",
    }),
  sv = () =>
    L.jsxs("div", {
      className: Em.boardGame,
      children: [L.jsx(bm, {}), L.jsx(Pf, {}), L.jsx(rv, {}), L.jsx(uv, {})],
    }),
  av = "/mine-it/assets/GAME-OVER-5fe0cf3e.svg",
  cv = "/mine-it/assets/YOU-WIN-1dcb0861.svg",
  fv = "/mine-it/assets/play-again-bcf31fe3.png",
  dv = "/mine-it/assets/try-again-8112d15d.png",
  pv = "_playAgain_cbk90_1",
  hv = "_gameOver_cbk90_14",
  mv = "_gameOverImage_cbk90_25",
  Gn = { playAgain: pv, gameOver: hv, gameOverImage: mv };
function vv(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  e && e.addEventListener && e.addEventListener.apply(e, t);
}
function yv(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  e && e.removeEventListener && e.removeEventListener.apply(e, t);
}
var Fo = typeof window < "u",
  gv = function (e) {
    O.useEffect(e, []);
  };
const wv = gv;
var Sv = function (e) {
  var t = O.useRef(e);
  (t.current = e),
    wv(function () {
      return function () {
        return t.current();
      };
    });
};
const kv = Sv;
var xv = function (e) {
  var t = O.useRef(0),
    n = O.useState(e),
    r = n[0],
    l = n[1],
    o = O.useCallback(function (i) {
      cancelAnimationFrame(t.current),
        (t.current = requestAnimationFrame(function () {
          l(i);
        }));
    }, []);
  return (
    kv(function () {
      cancelAnimationFrame(t.current);
    }),
    [r, o]
  );
};
const Ev = xv;
var Cv = function (e, t) {
  e === void 0 && (e = 1 / 0), t === void 0 && (t = 1 / 0);
  var n = Ev({
      width: Fo ? window.innerWidth : e,
      height: Fo ? window.innerHeight : t,
    }),
    r = n[0],
    l = n[1];
  return (
    O.useEffect(function () {
      if (Fo) {
        var o = function () {
          l({ width: window.innerWidth, height: window.innerHeight });
        };
        return (
          vv(window, "resize", o),
          function () {
            yv(window, "resize", o);
          }
        );
      }
    }, []),
    r
  );
};
const Pv = Cv;
var Ui = {},
  _v = {
    get exports() {
      return Ui;
    },
    set exports(e) {
      Ui = e;
    },
  };
(function (e, t) {
  (function (n, r) {
    e.exports = r(O);
  })(typeof self < "u" ? self : Tf, function (n) {
    return (function (r) {
      var l = {};
      function o(i) {
        if (l[i]) return l[i].exports;
        var u = (l[i] = { i, l: !1, exports: {} });
        return r[i].call(u.exports, u, u.exports, o), (u.l = !0), u.exports;
      }
      return (
        (o.m = r),
        (o.c = l),
        (o.d = function (i, u, s) {
          o.o(i, u) || Object.defineProperty(i, u, { enumerable: !0, get: s });
        }),
        (o.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (o.t = function (i, u) {
          if (
            (1 & u && (i = o(i)),
            8 & u || (4 & u && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var s = Object.create(null);
          if (
            (o.r(s),
            Object.defineProperty(s, "default", { enumerable: !0, value: i }),
            2 & u && typeof i != "string")
          )
            for (var a in i)
              o.d(
                s,
                a,
                function (c) {
                  return i[c];
                }.bind(null, a)
              );
          return s;
        }),
        (o.n = function (i) {
          var u =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return o.d(u, "a", u), u;
        }),
        (o.o = function (i, u) {
          return Object.prototype.hasOwnProperty.call(i, u);
        }),
        (o.p = ""),
        o((o.s = 2))
      );
    })([
      function (r, l) {
        r.exports = n;
      },
      function (r, l, o) {
        var i = {
          linear: function (u, s, a, c) {
            return ((a - s) * u) / c + s;
          },
          easeInQuad: function (u, s, a, c) {
            return (a - s) * (u /= c) * u + s;
          },
          easeOutQuad: function (u, s, a, c) {
            return -(a - s) * (u /= c) * (u - 2) + s;
          },
          easeInOutQuad: function (u, s, a, c) {
            var d = a - s;
            return (u /= c / 2) < 1
              ? (d / 2) * u * u + s
              : (-d / 2) * (--u * (u - 2) - 1) + s;
          },
          easeInCubic: function (u, s, a, c) {
            return (a - s) * (u /= c) * u * u + s;
          },
          easeOutCubic: function (u, s, a, c) {
            return (a - s) * ((u = u / c - 1) * u * u + 1) + s;
          },
          easeInOutCubic: function (u, s, a, c) {
            var d = a - s;
            return (u /= c / 2) < 1
              ? (d / 2) * u * u * u + s
              : (d / 2) * ((u -= 2) * u * u + 2) + s;
          },
          easeInQuart: function (u, s, a, c) {
            return (a - s) * (u /= c) * u * u * u + s;
          },
          easeOutQuart: function (u, s, a, c) {
            return -(a - s) * ((u = u / c - 1) * u * u * u - 1) + s;
          },
          easeInOutQuart: function (u, s, a, c) {
            var d = a - s;
            return (u /= c / 2) < 1
              ? (d / 2) * u * u * u * u + s
              : (-d / 2) * ((u -= 2) * u * u * u - 2) + s;
          },
          easeInQuint: function (u, s, a, c) {
            return (a - s) * (u /= c) * u * u * u * u + s;
          },
          easeOutQuint: function (u, s, a, c) {
            return (a - s) * ((u = u / c - 1) * u * u * u * u + 1) + s;
          },
          easeInOutQuint: function (u, s, a, c) {
            var d = a - s;
            return (u /= c / 2) < 1
              ? (d / 2) * u * u * u * u * u + s
              : (d / 2) * ((u -= 2) * u * u * u * u + 2) + s;
          },
          easeInSine: function (u, s, a, c) {
            var d = a - s;
            return -d * Math.cos((u / c) * (Math.PI / 2)) + d + s;
          },
          easeOutSine: function (u, s, a, c) {
            return (a - s) * Math.sin((u / c) * (Math.PI / 2)) + s;
          },
          easeInOutSine: function (u, s, a, c) {
            return (-(a - s) / 2) * (Math.cos((Math.PI * u) / c) - 1) + s;
          },
          easeInExpo: function (u, s, a, c) {
            return u == 0 ? s : (a - s) * Math.pow(2, 10 * (u / c - 1)) + s;
          },
          easeOutExpo: function (u, s, a, c) {
            var d = a - s;
            return u == c ? s + d : d * (1 - Math.pow(2, (-10 * u) / c)) + s;
          },
          easeInOutExpo: function (u, s, a, c) {
            var d = a - s;
            return u === 0
              ? s
              : u === c
              ? s + d
              : (u /= c / 2) < 1
              ? (d / 2) * Math.pow(2, 10 * (u - 1)) + s
              : (d / 2) * (2 - Math.pow(2, -10 * --u)) + s;
          },
          easeInCirc: function (u, s, a, c) {
            return -(a - s) * (Math.sqrt(1 - (u /= c) * u) - 1) + s;
          },
          easeOutCirc: function (u, s, a, c) {
            return (a - s) * Math.sqrt(1 - (u = u / c - 1) * u) + s;
          },
          easeInOutCirc: function (u, s, a, c) {
            var d = a - s;
            return (u /= c / 2) < 1
              ? (-d / 2) * (Math.sqrt(1 - u * u) - 1) + s
              : (d / 2) * (Math.sqrt(1 - (u -= 2) * u) + 1) + s;
          },
          easeInElastic: function (u, s, a, c) {
            var d,
              h,
              g,
              v = a - s;
            return (
              (g = 1.70158),
              u === 0
                ? s
                : (u /= c) == 1
                ? s + v
                : ((h = 0) || (h = 0.3 * c),
                  (d = v) < Math.abs(v)
                    ? ((d = v), (g = h / 4))
                    : (g = (h / (2 * Math.PI)) * Math.asin(v / d)),
                  -d *
                    Math.pow(2, 10 * (u -= 1)) *
                    Math.sin(((u * c - g) * (2 * Math.PI)) / h) +
                    s)
            );
          },
          easeOutElastic: function (u, s, a, c) {
            var d,
              h,
              g,
              v = a - s;
            return (
              (g = 1.70158),
              u === 0
                ? s
                : (u /= c) == 1
                ? s + v
                : ((h = 0) || (h = 0.3 * c),
                  (d = v) < Math.abs(v)
                    ? ((d = v), (g = h / 4))
                    : (g = (h / (2 * Math.PI)) * Math.asin(v / d)),
                  d *
                    Math.pow(2, -10 * u) *
                    Math.sin(((u * c - g) * (2 * Math.PI)) / h) +
                    v +
                    s)
            );
          },
          easeInOutElastic: function (u, s, a, c) {
            var d,
              h,
              g,
              v = a - s;
            return (
              (g = 1.70158),
              u === 0
                ? s
                : (u /= c / 2) == 2
                ? s + v
                : ((h = 0) || (h = c * 0.44999999999999996),
                  (d = v) < Math.abs(v)
                    ? ((d = v), (g = h / 4))
                    : (g = (h / (2 * Math.PI)) * Math.asin(v / d)),
                  u < 1
                    ? d *
                        Math.pow(2, 10 * (u -= 1)) *
                        Math.sin(((u * c - g) * (2 * Math.PI)) / h) *
                        -0.5 +
                      s
                    : d *
                        Math.pow(2, -10 * (u -= 1)) *
                        Math.sin(((u * c - g) * (2 * Math.PI)) / h) *
                        0.5 +
                      v +
                      s)
            );
          },
          easeInBack: function (u, s, a, c, d) {
            return (
              d === void 0 && (d = 1.70158),
              (a - s) * (u /= c) * u * ((d + 1) * u - d) + s
            );
          },
          easeOutBack: function (u, s, a, c, d) {
            return (
              d === void 0 && (d = 1.70158),
              (a - s) * ((u = u / c - 1) * u * ((d + 1) * u + d) + 1) + s
            );
          },
          easeInOutBack: function (u, s, a, c, d) {
            var h = a - s;
            return (
              d === void 0 && (d = 1.70158),
              (u /= c / 2) < 1
                ? (h / 2) * (u * u * ((1 + (d *= 1.525)) * u - d)) + s
                : (h / 2) * ((u -= 2) * u * ((1 + (d *= 1.525)) * u + d) + 2) +
                  s
            );
          },
          easeInBounce: function (u, s, a, c) {
            var d = a - s;
            return d - i.easeOutBounce(c - u, 0, d, c) + s;
          },
          easeOutBounce: function (u, s, a, c) {
            var d = a - s;
            return (u /= c) < 0.36363636363636365
              ? d * (7.5625 * u * u) + s
              : u < 0.7272727272727273
              ? d * (7.5625 * (u -= 0.5454545454545454) * u + 0.75) + s
              : u < 0.9090909090909091
              ? d * (7.5625 * (u -= 0.8181818181818182) * u + 0.9375) + s
              : d * (7.5625 * (u -= 0.9545454545454546) * u + 0.984375) + s;
          },
          easeInOutBounce: function (u, s, a, c) {
            var d = a - s;
            return u < c / 2
              ? 0.5 * i.easeInBounce(2 * u, 0, d, c) + s
              : 0.5 * i.easeOutBounce(2 * u - c, 0, d, c) + 0.5 * d + s;
          },
        };
        r.exports = i;
      },
      function (r, l, o) {
        r.exports = o(3);
      },
      function (r, l, o) {
        o.r(l),
          o.d(l, "ReactConfetti", function () {
            return Bt;
          });
        var i,
          u,
          s = o(0),
          a = o.n(s),
          c = o(1),
          d = o.n(c);
        function h(y, k) {
          return y + Math.random() * (k - y);
        }
        function g(y, k) {
          for (var C = 0; C < k.length; C++) {
            var w = k[C];
            (w.enumerable = w.enumerable || !1),
              (w.configurable = !0),
              "value" in w && (w.writable = !0),
              Object.defineProperty(y, w.key, w);
          }
        }
        function v(y, k, C) {
          return (
            k in y
              ? Object.defineProperty(y, k, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[k] = C),
            y
          );
        }
        (function (y) {
          (y[(y.Circle = 0)] = "Circle"),
            (y[(y.Square = 1)] = "Square"),
            (y[(y.Strip = 2)] = "Strip");
        })(i || (i = {})),
          (function (y) {
            (y[(y.Positive = 1)] = "Positive"),
              (y[(y.Negative = -1)] = "Negative");
          })(u || (u = {}));
        var x = (function () {
          function y(w, A, R, U) {
            (function (to, no) {
              if (!(to instanceof no))
                throw new TypeError("Cannot call a class as a function");
            })(this, y),
              v(this, "context", void 0),
              v(this, "radius", void 0),
              v(this, "x", void 0),
              v(this, "y", void 0),
              v(this, "w", void 0),
              v(this, "h", void 0),
              v(this, "vx", void 0),
              v(this, "vy", void 0),
              v(this, "shape", void 0),
              v(this, "angle", void 0),
              v(this, "angularSpin", void 0),
              v(this, "color", void 0),
              v(this, "rotateY", void 0),
              v(this, "rotationDirection", void 0),
              v(this, "getOptions", void 0),
              (this.getOptions = A);
            var Q,
              te,
              K = this.getOptions(),
              rt = K.colors,
              Ae = K.initialVelocityX,
              We = K.initialVelocityY;
            (this.context = w),
              (this.x = R),
              (this.y = U),
              (this.w = h(5, 20)),
              (this.h = h(5, 20)),
              (this.radius = h(5, 10)),
              (this.vx =
                typeof Ae == "number" ? h(-Ae, Ae) : h(Ae.min, Ae.max)),
              (this.vy = typeof We == "number" ? h(-We, 0) : h(We.min, We.max)),
              (this.shape =
                ((Q = 0),
                (te = 2),
                Math.floor(Q + Math.random() * (te - Q + 1)))),
              (this.angle = (h(0, 360) * Math.PI) / 180),
              (this.angularSpin = h(-0.2, 0.2)),
              (this.color = rt[Math.floor(Math.random() * rt.length)]),
              (this.rotateY = h(0, 1)),
              (this.rotationDirection = h(0, 1) ? u.Positive : u.Negative);
          }
          var k, C;
          return (
            (k = y),
            (C = [
              {
                key: "update",
                value: function () {
                  var w = this.getOptions(),
                    A = w.gravity,
                    R = w.wind,
                    U = w.friction,
                    Q = w.opacity,
                    te = w.drawShape;
                  (this.x += this.vx),
                    (this.y += this.vy),
                    (this.vy += A),
                    (this.vx += R),
                    (this.vx *= U),
                    (this.vy *= U),
                    this.rotateY >= 1 && this.rotationDirection === u.Positive
                      ? (this.rotationDirection = u.Negative)
                      : this.rotateY <= -1 &&
                        this.rotationDirection === u.Negative &&
                        (this.rotationDirection = u.Positive);
                  var K = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += K),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = Q),
                    (this.context.lineCap = "round"),
                    (this.context.lineWidth = 2),
                    te && typeof te == "function")
                  )
                    te.call(this, this.context);
                  else
                    switch (this.shape) {
                      case i.Circle:
                        this.context.beginPath(),
                          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                          this.context.fill();
                        break;
                      case i.Square:
                        this.context.fillRect(
                          -this.w / 2,
                          -this.h / 2,
                          this.w,
                          this.h
                        );
                        break;
                      case i.Strip:
                        this.context.fillRect(
                          -this.w / 6,
                          -this.h / 2,
                          this.w / 3,
                          this.h
                        );
                    }
                  this.context.closePath(), this.context.restore();
                },
              },
            ]) && g(k.prototype, C),
            y
          );
        })();
        function I(y, k, C) {
          return (
            k in y
              ? Object.defineProperty(y, k, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[k] = C),
            y
          );
        }
        var p = function y(k, C) {
          var w = this;
          (function (R, U) {
            if (!(R instanceof U))
              throw new TypeError("Cannot call a class as a function");
          })(this, y),
            I(this, "canvas", void 0),
            I(this, "context", void 0),
            I(this, "getOptions", void 0),
            I(this, "x", 0),
            I(this, "y", 0),
            I(this, "w", 0),
            I(this, "h", 0),
            I(this, "lastNumberOfPieces", 0),
            I(this, "tweenInitTime", Date.now()),
            I(this, "particles", []),
            I(this, "particlesGenerated", 0),
            I(this, "removeParticleAt", function (R) {
              w.particles.splice(R, 1);
            }),
            I(this, "getParticle", function () {
              var R = h(w.x, w.w + w.x),
                U = h(w.y, w.h + w.y);
              return new x(w.context, w.getOptions, R, U);
            }),
            I(this, "animate", function () {
              var R = w.canvas,
                U = w.context,
                Q = w.particlesGenerated,
                te = w.lastNumberOfPieces,
                K = w.getOptions(),
                rt = K.run,
                Ae = K.recycle,
                We = K.numberOfPieces,
                to = K.debug,
                no = K.tweenFunction,
                ro = K.tweenDuration;
              if (!rt) return !1;
              var lo = w.particles.length,
                Fn = Ae ? lo : Q,
                oo = Date.now();
              if (Fn < We) {
                te !== We &&
                  ((w.tweenInitTime = oo), (w.lastNumberOfPieces = We));
                for (
                  var Fu = w.tweenInitTime,
                    jf = no(
                      oo - Fu > ro ? ro : Math.max(0, oo - Fu),
                      Fn,
                      We,
                      ro
                    ),
                    Uu = Math.round(jf - Fn),
                    Bu = 0;
                  Bu < Uu;
                  Bu++
                )
                  w.particles.push(w.getParticle());
                w.particlesGenerated += Uu;
              }
              return (
                to &&
                  ((U.font = "12px sans-serif"),
                  (U.fillStyle = "#333"),
                  (U.textAlign = "right"),
                  U.fillText(
                    "Particles: ".concat(lo),
                    R.width - 10,
                    R.height - 20
                  )),
                w.particles.forEach(function (Un, $u) {
                  Un.update(),
                    (Un.y > R.height ||
                      Un.y < -100 ||
                      Un.x > R.width + 100 ||
                      Un.x < -100) &&
                      (Ae && Fn <= We
                        ? (w.particles[$u] = w.getParticle())
                        : w.removeParticleAt($u));
                }),
                lo > 0 || Fn < We
              );
            }),
            (this.canvas = k);
          var A = this.canvas.getContext("2d");
          if (!A) throw new Error("Could not get canvas context");
          (this.context = A), (this.getOptions = C);
        };
        function f(y, k) {
          var C = Object.keys(y);
          if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(y);
            k &&
              (w = w.filter(function (A) {
                return Object.getOwnPropertyDescriptor(y, A).enumerable;
              })),
              C.push.apply(C, w);
          }
          return C;
        }
        function m(y) {
          for (var k = 1; k < arguments.length; k++) {
            var C = arguments[k] != null ? arguments[k] : {};
            k % 2
              ? f(Object(C), !0).forEach(function (w) {
                  P(y, w, C[w]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C))
              : f(Object(C)).forEach(function (w) {
                  Object.defineProperty(
                    y,
                    w,
                    Object.getOwnPropertyDescriptor(C, w)
                  );
                });
          }
          return y;
        }
        function S(y, k) {
          for (var C = 0; C < k.length; C++) {
            var w = k[C];
            (w.enumerable = w.enumerable || !1),
              (w.configurable = !0),
              "value" in w && (w.writable = !0),
              Object.defineProperty(y, w.key, w);
          }
        }
        function P(y, k, C) {
          return (
            k in y
              ? Object.defineProperty(y, k, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[k] = C),
            y
          );
        }
        var j = {
            width: typeof window < "u" ? window.innerWidth : 300,
            height: typeof window < "u" ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
              "#795548",
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: d.a.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          },
          T = (function () {
            function y(w, A) {
              var R = this;
              (function (Q, te) {
                if (!(Q instanceof te))
                  throw new TypeError("Cannot call a class as a function");
              })(this, y),
                P(this, "canvas", void 0),
                P(this, "context", void 0),
                P(this, "_options", void 0),
                P(this, "generator", void 0),
                P(this, "rafId", void 0),
                P(this, "setOptionsWithDefaults", function (Q) {
                  var te = {
                    confettiSource: { x: 0, y: 0, w: R.canvas.width, h: 0 },
                  };
                  (R._options = m(m(m({}, te), j), Q)),
                    Object.assign(R, Q.confettiSource);
                }),
                P(this, "update", function () {
                  var Q = R.options,
                    te = Q.run,
                    K = Q.onConfettiComplete,
                    rt = R.canvas,
                    Ae = R.context;
                  te &&
                    ((Ae.fillStyle = "white"),
                    Ae.clearRect(0, 0, rt.width, rt.height)),
                    R.generator.animate()
                      ? (R.rafId = requestAnimationFrame(R.update))
                      : (K &&
                          typeof K == "function" &&
                          R.generator.particlesGenerated > 0 &&
                          K.call(R, R),
                        (R._options.run = !1));
                }),
                P(this, "reset", function () {
                  R.generator &&
                    R.generator.particlesGenerated > 0 &&
                    ((R.generator.particlesGenerated = 0),
                    (R.generator.particles = []),
                    (R.generator.lastNumberOfPieces = 0));
                }),
                P(this, "stop", function () {
                  (R.options = { run: !1 }),
                    R.rafId &&
                      (cancelAnimationFrame(R.rafId), (R.rafId = void 0));
                }),
                (this.canvas = w);
              var U = this.canvas.getContext("2d");
              if (!U) throw new Error("Could not get canvas context");
              (this.context = U),
                (this.generator = new p(this.canvas, function () {
                  return R.options;
                })),
                (this.options = A),
                this.update();
            }
            var k, C;
            return (
              (k = y),
              (C = [
                {
                  key: "options",
                  get: function () {
                    return this._options;
                  },
                  set: function (w) {
                    var A = this._options && this._options.run,
                      R = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(w),
                      this.generator &&
                        (Object.assign(
                          this.generator,
                          this.options.confettiSource
                        ),
                        typeof w.recycle == "boolean" &&
                          w.recycle &&
                          R === !1 &&
                          (this.generator.lastNumberOfPieces =
                            this.generator.particles.length)),
                      typeof w.run == "boolean" &&
                        w.run &&
                        A === !1 &&
                        this.update();
                  },
                },
              ]) && S(k.prototype, C),
              y
            );
          })();
        function z(y) {
          return (
            (function (k) {
              if (Array.isArray(k)) return zn(k);
            })(y) ||
            (function (k) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(k))
                return Array.from(k);
            })(y) ||
            Tn(y) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function X(y) {
          return (X =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (k) {
                  return typeof k;
                }
              : function (k) {
                  return k &&
                    typeof Symbol == "function" &&
                    k.constructor === Symbol &&
                    k !== Symbol.prototype
                    ? "symbol"
                    : typeof k;
                })(y);
        }
        function F() {
          return (F =
            Object.assign ||
            function (y) {
              for (var k = 1; k < arguments.length; k++) {
                var C = arguments[k];
                for (var w in C)
                  Object.prototype.hasOwnProperty.call(C, w) && (y[w] = C[w]);
              }
              return y;
            }).apply(this, arguments);
        }
        function xe(y, k) {
          var C = Object.keys(y);
          if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(y);
            k &&
              (w = w.filter(function (A) {
                return Object.getOwnPropertyDescriptor(y, A).enumerable;
              })),
              C.push.apply(C, w);
          }
          return C;
        }
        function ht(y) {
          for (var k = 1; k < arguments.length; k++) {
            var C = arguments[k] != null ? arguments[k] : {};
            k % 2
              ? xe(Object(C), !0).forEach(function (w) {
                  Ze(y, w, C[w]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C))
              : xe(Object(C)).forEach(function (w) {
                  Object.defineProperty(
                    y,
                    w,
                    Object.getOwnPropertyDescriptor(C, w)
                  );
                });
          }
          return y;
        }
        function Ft(y, k) {
          return (
            (function (C) {
              if (Array.isArray(C)) return C;
            })(y) ||
            (function (C, w) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(C)))) {
                var A = [],
                  R = !0,
                  U = !1,
                  Q = void 0;
                try {
                  for (
                    var te, K = C[Symbol.iterator]();
                    !(R = (te = K.next()).done) &&
                    (A.push(te.value), !w || A.length !== w);
                    R = !0
                  );
                } catch (rt) {
                  (U = !0), (Q = rt);
                } finally {
                  try {
                    R || K.return == null || K.return();
                  } finally {
                    if (U) throw Q;
                  }
                }
                return A;
              }
            })(y, k) ||
            Tn(y, k) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function Tn(y, k) {
          if (y) {
            if (typeof y == "string") return zn(y, k);
            var C = Object.prototype.toString.call(y).slice(8, -1);
            return (
              C === "Object" && y.constructor && (C = y.constructor.name),
              C === "Map" || C === "Set"
                ? Array.from(y)
                : C === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)
                ? zn(y, k)
                : void 0
            );
          }
        }
        function zn(y, k) {
          (k == null || k > y.length) && (k = y.length);
          for (var C = 0, w = new Array(k); C < k; C++) w[C] = y[C];
          return w;
        }
        function Mn(y, k) {
          if (!(y instanceof k))
            throw new TypeError("Cannot call a class as a function");
        }
        function Dn(y, k) {
          for (var C = 0; C < k.length; C++) {
            var w = k[C];
            (w.enumerable = w.enumerable || !1),
              (w.configurable = !0),
              "value" in w && (w.writable = !0),
              Object.defineProperty(y, w.key, w);
          }
        }
        function _(y, k) {
          return (_ =
            Object.setPrototypeOf ||
            function (C, w) {
              return (C.__proto__ = w), C;
            })(y, k);
        }
        function M(y) {
          var k = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })();
          return function () {
            var C,
              w = ee(y);
            if (k) {
              var A = ee(this).constructor;
              C = Reflect.construct(w, arguments, A);
            } else C = w.apply(this, arguments);
            return D(this, C);
          };
        }
        function D(y, k) {
          return !k || (X(k) !== "object" && typeof k != "function") ? H(y) : k;
        }
        function H(y) {
          if (y === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return y;
        }
        function ee(y) {
          return (ee = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (k) {
                return k.__proto__ || Object.getPrototypeOf(k);
              })(y);
        }
        function Ze(y, k, C) {
          return (
            k in y
              ? Object.defineProperty(y, k, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[k] = C),
            y
          );
        }
        var nt = a.a.createRef(),
          Ut = (function (y) {
            (function (R, U) {
              if (typeof U != "function" && U !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (R.prototype = Object.create(U && U.prototype, {
                constructor: { value: R, writable: !0, configurable: !0 },
              })),
                U && _(R, U);
            })(A, y);
            var k,
              C,
              w = M(A);
            function A(R) {
              var U;
              Mn(this, A);
              for (
                var Q = arguments.length,
                  te = new Array(Q > 1 ? Q - 1 : 0),
                  K = 1;
                K < Q;
                K++
              )
                te[K - 1] = arguments[K];
              return (
                Ze(
                  H((U = w.call.apply(w, [this, R].concat(te)))),
                  "canvas",
                  a.a.createRef()
                ),
                Ze(H(U), "confetti", void 0),
                (U.canvas = R.canvasRef || nt),
                U
              );
            }
            return (
              (k = A),
              (C = [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.canvas.current) {
                      var R = $e(this.props)[0];
                      this.confetti = new T(this.canvas.current, R);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var R = $e(this.props)[0];
                    this.confetti && (this.confetti.options = R);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.confetti && this.confetti.stop(),
                      (this.confetti = void 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var R = Ft($e(this.props), 2),
                      U = R[0],
                      Q = R[1],
                      te = ht(
                        {
                          zIndex: 2,
                          position: "absolute",
                          pointerEvents: "none",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        Q.style
                      );
                    return a.a.createElement(
                      "canvas",
                      F(
                        { width: U.width, height: U.height, ref: this.canvas },
                        Q,
                        { style: te }
                      )
                    );
                  },
                },
              ]) && Dn(k.prototype, C),
              A
            );
          })(s.Component);
        function $e(y) {
          var k = {},
            C = {},
            w = [].concat(z(Object.keys(j)), [
              "confettiSource",
              "drawShape",
              "onConfettiComplete",
            ]),
            A = ["canvasRef"];
          for (var R in y) {
            var U = y[R];
            w.includes(R)
              ? (k[R] = U)
              : A.includes(R)
              ? (A[R] = U)
              : (C[R] = U);
          }
          return [k, C, {}];
        }
        Ze(Ut, "defaultProps", ht({}, j)),
          Ze(Ut, "displayName", "ReactConfetti");
        var Bt = a.a.forwardRef(function (y, k) {
          return a.a.createElement(Ut, F({ canvasRef: k }, y));
        });
        l.default = Bt;
      },
    ]).default;
  });
})(_v);
const Ov = ia(Ui),
  Nv = () => {
    const { width: e, height: t } = Pv(),
      {
        setIsBomb: n,
        setIsDiamond: r,
        setIsWinnerPlayer: l,
        setIsLoserPlayer: o,
        isWinnerPlayer: i,
      } = le.useContext(eo),
      u = Mu();
    function s() {
      n(!1), r(0), o(!1), l(!1), u("/mine-it/play");
    }
    return L.jsx("div", {
      className: Gn.gameOver,
      children: i
        ? L.jsxs(L.Fragment, {
            children: [
              L.jsx(Ov, { width: e, height: t, tweenDuration: 2e3 }),
              L.jsx("img", {
                className: Gn.gameOverImage,
                src: cv,
                alt: "Você ganhou",
              }),
              L.jsx("button", {
                onClick: s,
                className: `${Gn.playAgain}`,
                children: L.jsx("img", { src: fv, alt: "jogue de novo" }),
              }),
            ],
          })
        : L.jsxs(L.Fragment, {
            children: [
              L.jsx("img", {
                className: Gn.gameOverImage,
                src: av,
                alt: "Você perdeu",
              }),
              L.jsx("button", {
                onClick: s,
                className: `${Gn.playAgain}`,
                children: L.jsx("img", { src: dv, alt: "tente de novo" }),
              }),
            ],
          }),
    });
  },
  If = () =>
    L.jsxs("div", {
      className: "bg",
      children: [
        L.jsx("div", {
          className: "containerApp",
          children: L.jsxs("div", {
            className: Yn.app,
            children: [
              L.jsx("img", {
                className: Yn.leftPillar,
                src: gm,
                alt: "pillar esquerdo",
              }),
              L.jsx("img", {
                className: Yn.rightPillar,
                src: wm,
                alt: "pillar direito",
              }),
              L.jsx("img", {
                className: Yn.spiderWebLeft,
                src: Sm,
                alt: "teia de aranha esquerda",
              }),
              L.jsx("img", {
                className: Yn.spiderWebRight,
                src: km,
                alt: "teia de aranha direita",
              }),
              L.jsxs(Cf, {
                children: [
                  L.jsx(_r, { path: "/", element: L.jsx(sv, {}) }),
                  L.jsx(_r, { path: "/gameover", element: L.jsx(Nv, {}) }),
                ],
              }),
            ],
          }),
        }),
        "/",
      ],
    }),
  Rv = () =>
    L.jsx("section", {
      className: "bg",
      children: L.jsx("div", {
        className: "containerApp",
        children: L.jsx("div", {
          className: la.app,
          children: L.jsx("button", {
            className: la.playButton,
            children: L.jsx(im, {
              to: "/mine-it/play",
              element: L.jsx(If, {}),
              children: L.jsx(Pf, {}),
            }),
          }),
        }),
      }),
    });
function Iv() {
  return L.jsx("div", {
    children: L.jsx(rm, {
      children: L.jsx(Nf, {
        children: L.jsxs(Cf, {
          children: [
            L.jsx(_r, { exact: !0, path: "/mine-it", element: L.jsx(Rv, {}) }),
            L.jsx(_r, { path: "/mine-it/play/*", element: L.jsx(If, {}) }),
          ],
        }),
      }),
    }),
  });
}
Bo.createRoot(document.getElementById("root")).render(
  L.jsx(le.StrictMode, { children: L.jsx(Iv, {}) })
);
