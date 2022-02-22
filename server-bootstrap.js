// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
var k;
var aa = function(options) {
  var i = 0;
  return function() {
    return i < options.length ? {
      done : false,
      value : options[i++]
    } : {
      done : true
    };
  };
};
var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(object, property, descriptor) {
  if (object == Array.prototype || object == Object.prototype) {
    return object;
  }
  object[property] = descriptor.value;
  return object;
};
var la = function(expr) {
  expr = ["object" == typeof globalThis && globalThis, expr, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  var i = 0;
  for (; i < expr.length; ++i) {
    var window = expr[i];
    if (window && window.Math == Math) {
      return window;
    }
  }
  throw Error("Cannot find global object");
};
var ma = la(this);
var na = function(o, n) {
  if (n) {
    a: {
      var data = ma;
      o = o.split(".");
      var c = 0;
      for (; c < o.length - 1; c++) {
        var type = o[c];
        if (!(type in data)) {
          break a;
        }
        data = data[type];
      }
      o = o[o.length - 1];
      c = data[o];
      n = n(c);
      if (n != c && null != n) {
        ba(data, o, {
          configurable : true,
          writable : true,
          value : n
        });
      }
    }
  }
};
na("Symbol", function(a) {
  if (a) {
    return a;
  }
  var init = function(ngModelCtrl_, inputs) {
    this.O = ngModelCtrl_;
    ba(this, "description", {
      configurable : true,
      writable : true,
      value : inputs
    });
  };
  init.prototype.toString = function() {
    return this.O;
  };
  var name = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_";
  var widgetUniqueIDIndex = 0;
  var e = function(i) {
    if (this instanceof e) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new init(name + (i || "") + "_" + widgetUniqueIDIndex++, i);
  };
  return e;
});
na("Symbol.iterator", function(color) {
  if (color) {
    return color;
  }
  color = Symbol("Symbol.iterator");
  var crossfilterable_layers = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; layer_i++) {
    var d = ma[crossfilterable_layers[layer_i]];
    if ("function" === typeof d && "function" != typeof d.prototype[color]) {
      ba(d.prototype, color, {
        configurable : true,
        writable : true,
        value : function() {
          return oa(aa(this));
        }
      });
    }
  }
  return color;
});
var oa = function(g) {
  g = {
    next : g
  };
  g[Symbol.iterator] = function() {
    return this;
  };
  return g;
};
var w = function(data) {
  function check(d) {
    return data.next(d);
  }
  function show(reason) {
    return data.throw(reason);
  }
  return new Promise(function(unCleanDataForForm, PL$58) {
    function fn(item) {
      if (item.done) {
        unCleanDataForForm(item.value);
      } else {
        Promise.resolve(item.value).then(check, show).then(fn, PL$58);
      }
    }
    fn(data.next());
  });
};
var pa = this || self;
var qa = function(d) {
  const buffersConcatenated = Buffer.from(d, "base64");
  if (buffersConcatenated.toString("base64") === d) {
    return buffersConcatenated.toString();
  }
};
var ra = function(e, n, val = false) {
  e = (e || "").split(";").map((proxyValue) => {
    return proxyValue.replace(/^\s+/, "");
  }).filter((type) => {
    return type.startsWith(n + "=");
  }).map((OldString) => {
    return OldString.substring(n.length + 1);
  });
  return val ? e : e.map(decodeURIComponent);
};
var x = function(o, n, artistTrack = false) {
  return ra(o.headers.cookie || "", n, artistTrack)[0] || "";
};
function sa(item, i) {
  var v = item.headers;
  if (v["x-gtm-server-preview"]) {
    item = Object;
    var obj = item.assign;
    v = v["x-gtm-server-preview"];
    if (Array.isArray(v)) {
      v = v[0] || "";
    }
    v = (qa(v) || "").split("|");
    if (3 != v.length) {
      throw Error("Invalid 'x-gtm-server-preview' header value.");
    }
    return obj.call(item, {
      containerId : i
    }, {
      l : v[0],
      m : v[1],
      s : v[2]
    });
  }
  obj = {
    containerId : i,
    m : z(ta(v["x-gtm-auth"]), i),
    s : z(ta(v["x-gtm-debug"]), i),
    l : z(ta(v["x-gtm-preview"]), i)
  };
  if (void 0 !== obj.m || void 0 !== obj.s || void 0 !== obj.l) {
    return obj;
  }
  v = x(item, "gtm_auth");
  const s = x(item, "gtm_debug");
  item = x(item, "gtm_preview");
  obj.m = z(v, i);
  obj.s = z(s, i);
  obj.l = z(item, i);
  return obj;
}
function z(b, i) {
  const param = `${i}=`;
  b = b.split(":").find((allProps) => {
    return !allProps.indexOf(param);
  });
  if (void 0 !== b) {
    return b.substring(param.length);
  }
}
function ua(key, range, number) {
  const val = `${range}=`;
  key = key.split(":").filter((param) => {
    return param.length && param.indexOf(val);
  });
  if (number) {
    key.push(`${val}${number}`);
  }
  return key.join(":");
}
function ta(reply) {
  if (Array.isArray(reply)) {
    reply = reply[0];
  }
  return reply || "";
}
var A = {
  "Cache-Control" : "no-store",
  "Content-Disposition" : 'attachment; filename="f.txt"',
  "Content-Type" : "application/json; charset=utf-8",
  "X-Content-Type-Options" : "nosniff"
};
const va = require("url");
const wa = Date.now() + 10368E5 + Math.floor(1728E5 * Math.random());
var xa = 0;
var ya = 0;
function Da(options, b) {
  if ("GET" !== options.method) {
    return false;
  }
  var a = va.parse(options.url, true);
  if (!a.pathname.endsWith("/healthz") && !a.pathname.endsWith("/healthy")) {
    return false;
  }
  if ((a = a.query.servertype) && "serverjs" !== a) {
    b = B(b, 500);
  } else {
    if (a = options.headers["x-sgtm-healthz"]) {
      a = a.split(",")[0];
      a = a.split("=");
      options = a[0];
      a = parseInt(a[1], 10);
      options = isNaN(a) ? B(b, 500) : "server_start_millis" === options ? Date.now() - xa > a ? B(b, 500) : B(b, 200, "ok") : "container_refresh_millis" === options ? Date.now() - ya > a ? B(b, 500) : B(b, 200, "ok") : false;
    } else {
      options = false;
    }
    b = options ? true : Date.now() > wa ? B(b, 503) : B(b, 200, "ok");
  }
  return b;
}
function B(res, code, c = "") {
  res.writeHead(code, {
    "Content-Type" : "text/plain"
  });
  res.end(c);
  return true;
}
const Ea = require("http");
const Fa = require("https");
const Ga = require("url");
var Ha = class extends Error {
  constructor(value_or_anything) {
    super(value_or_anything);
    this.name = "HttpTimeoutError";
    Error.captureStackTrace(this, Ha);
  }
};
function Ia(url, opts, body) {
  const stringToShorten = !!opts.followRedirects;
  const _update_every = Number(opts.maxRedirects);
  const maxCharsAmount = isNaN(_update_every) ? 3 : _update_every;
  if (stringToShorten && 0 > maxCharsAmount) {
    return Promise.reject(Error("Too many redirects."));
  }
  let d;
  let k;
  return (new Promise((resolve, reject) => {
    var m = Number(opts.timeout);
    let results = opts.timeoutCallbacks;
    if (0 < m) {
      results = results || [];
      k = setTimeout(() => {
        for (const disposer of results) {
          disposer();
        }
      }, m);
    }
    if (results) {
      results.push(() => {
        d.abort();
        reject(new Ha("Request timed out."));
      });
    }
    const value = Object.assign({}, opts);
    if (opts.headers) {
      value.headers = Object.assign({}, opts.headers);
    }
    delete value.timeout;
    Ja(value);
    if (body) {
      if (!value.headers) {
        value.headers = {};
      }
      value.headers["content-length"] = Buffer.byteLength(body);
    }
    m = Object.assign(Ga.parse(url), value);
    d = Ka(url).request(m, (res) => {
      if (stringToShorten && 300 <= res.statusCode && 400 > res.statusCode && res.headers.location) {
        res.resume();
        const valueProgess = res.headers.location;
        if (La(url) && !La(valueProgess)) {
          reject(Error("Unable to follow HTTPS -> HTTP redirect."));
        } else {
          resolve(Ia(res.headers.location, Object.assign(value, {
            timeoutCallbacks : results,
            followRedirects : stringToShorten,
            maxRedirects : maxCharsAmount - 1
          }), body));
        }
      } else {
        var parts = [];
        res.on("data", (parami) => {
          parts.push(parami);
        });
        res.on("end", () => {
          resolve({
            statusCode : res.statusCode,
            headers : res.headers,
            body : 0 === parts.length ? void 0 : Buffer.concat(parts).toString()
          });
        });
      }
    });
    d.on("error", reject);
    d.end(body);
  })).finally(() => {
    return void clearTimeout(k);
  });
}
function D(key) {
  return Ia(key, Object.assign({}, {
    method : "GET"
  }));
}
function Ma(options) {
  if (400 <= options.statusCode) {
    throw Error(`Received HTTP status code ${options.statusCode}.`);
  }
}
function La(a) {
  return a.toLowerCase().startsWith("https://");
}
function Ka(b) {
  if (La(b)) {
    return Fa;
  }
  if (b.toLowerCase().startsWith("http://")) {
    return Ea;
  }
  throw Error(`URL ${b} uses unsupported protocol; must be HTTP or HTTPS.`);
}
function Ja(_message) {
  if (global.server_js_dev_only) {
    if (!_message.headers) {
      _message.headers = {};
    }
    _message.headers["X-Google-GFE-Frontline-Info"] = "ssl";
  }
}
class Na {
  constructor(errors, definitionType) {
    this.P = errors[pa.Symbol.iterator]();
    this.T = definitionType;
    this.V = 0;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const me = this.P.next();
    return {
      value : me.done ? void 0 : this.T.call(void 0, me.value, this.V++),
      done : me.done
    };
  }
}
var Oa = function(a, b) {
  return new Na(a, b);
};
var Pa = Object.freeze || function(partKeys) {
  return partKeys;
};
var E = "StopIteration" in pa ? pa.StopIteration : {
  message : "StopIteration",
  stack : ""
};
var F = function() {
};
F.prototype.F = function() {
  throw E;
};
F.prototype.next = function() {
  return Qa;
};
var Qa = Pa({
  done : true,
  value : void 0
});
F.prototype.v = function() {
  return this;
};
var Ta = function(fields) {
  if (fields instanceof G || fields instanceof Ra || fields instanceof M) {
    return fields;
  }
  if ("function" == typeof fields.F) {
    return new G(() => {
      return Sa(fields);
    });
  }
  if ("function" == typeof fields[Symbol.iterator]) {
    return new G(() => {
      return fields[Symbol.iterator]();
    });
  }
  if ("function" == typeof fields.v) {
    return new G(() => {
      return Sa(fields.v());
    });
  }
  throw Error("Not an iterator or iterable.");
};
const Sa = (p) => {
  if (!(p instanceof F)) {
    return p;
  }
  let keepToken = false;
  return {
    next() {
      let command_module_id;
      for (; !keepToken;) {
        try {
          command_module_id = p.F();
          break;
        } catch (c) {
          if (c !== E) {
            throw c;
          }
          keepToken = true;
        }
      }
      return {
        value : command_module_id,
        done : keepToken
      };
    }
  };
};
class G {
  constructor(i_j) {
    this.J = i_j;
  }
  v() {
    return new Ra(this.J());
  }
  [Symbol.iterator]() {
    return new M(this.J());
  }
  L() {
    return new M(this.J());
  }
}
class Ra extends F {
  constructor(value) {
    super();
    this.A = value;
  }
  F() {
    const nextOther = this.A.next();
    if (nextOther.done) {
      throw E;
    }
    return nextOther.value;
  }
  next() {
    return this.A.next();
  }
  [Symbol.iterator]() {
    return new M(this.A);
  }
  L() {
    return new M(this.A);
  }
}
class M extends G {
  constructor(value) {
    super(() => {
      return value;
    });
    this.A = value;
  }
  next() {
    return this.A.next();
  }
}
var N = function(a, b) {
  this.i = {};
  this.h = [];
  this.B = this.size = 0;
  var argl = arguments.length;
  if (1 < argl) {
    if (argl % 2) {
      throw Error("Uneven number of arguments");
    }
    var i = 0;
    for (; i < argl; i = i + 2) {
      this.set(arguments[i], arguments[i + 1]);
    }
  } else {
    if (a) {
      this.addAll(a);
    }
  }
};
k = N.prototype;
k.D = function() {
  return this.size;
};
k.K = function() {
  Ua(this);
  return this.h.concat();
};
k.has = function(id) {
  return O(this.i, id);
};
k.clear = function() {
  this.i = {};
  this.B = this.size = this.h.length = 0;
};
k.remove = function(i) {
  return this.delete(i);
};
k.delete = function(id) {
  return O(this.i, id) ? (delete this.i[id], --this.size, this.B++, this.h.length > 2 * this.size && Ua(this), true) : false;
};
var Ua = function(row) {
  if (row.size != row.h.length) {
    var i = 0;
    var j = 0;
    for (; i < row.h.length;) {
      var id = row.h[i];
      if (O(row.i, id)) {
        row.h[j++] = id;
      }
      i++;
    }
    row.h.length = j;
  }
  if (row.size != row.h.length) {
    var o = {};
    j = i = 0;
    for (; i < row.h.length;) {
      id = row.h[i];
      if (!O(o, id)) {
        row.h[j++] = id;
        o[id] = 1;
      }
      i++;
    }
    row.h.length = j;
  }
};
k = N.prototype;
k.get = function(id, add) {
  return O(this.i, id) ? this.i[id] : add;
};
k.set = function(a, b) {
  if (!O(this.i, a)) {
    this.size += 1;
    this.h.push(a);
    this.B++;
  }
  this.i[a] = b;
};
k.addAll = function(o) {
  if (o instanceof N) {
    var x = o.K();
    var i = 0;
    for (; i < x.length; i++) {
      this.set(x[i], o.get(x[i]));
    }
  } else {
    for (x in o) {
      this.set(x, o[x]);
    }
  }
};
k.forEach = function(a, f) {
  var colorChunks = this.K();
  var i = 0;
  for (; i < colorChunks.length; i++) {
    var c = colorChunks[i];
    var g = this.get(c);
    a.call(f, g, c, this);
  }
};
k.clone = function() {
  return new N(this);
};
k.keys = function() {
  return Ta(this.v(true)).L();
};
k.values = function() {
  return Ta(this.v(false)).L();
};
k.entries = function() {
  const relNode = this;
  return Oa(this.keys(), function(x) {
    return [x, relNode.get(x)];
  });
};
k.v = function(v) {
  Ua(this);
  var i = 0;
  var newLibraryVersion = this.B;
  var results = this;
  var g = new F;
  g.next = function() {
    if (newLibraryVersion != results.B) {
      throw Error("The map has changed since the iterator was created");
    }
    if (i >= results.h.length) {
      return Qa;
    }
    var k = results.h[i++];
    return {
      value : v ? k : results.i[k],
      done : false
    };
  };
  const updateStatsLabel = g.next;
  g.F = function() {
    var f = updateStatsLabel.call(g);
    if (f.done) {
      throw E;
    }
    return f.value;
  };
  return g;
};
var O = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var Wa = function(a) {
  this.N = a || null;
  this.G = true;
  this.M = void 0;
  this.i = new N;
  this.g = new Va("", void 0);
  this.g.next = this.g.j = this.g;
};
var Ya = function(r, n) {
  if ((n = r.i.get(n)) && r.G) {
    n.remove();
    Xa(r, n);
  }
  return n;
};
k = Wa.prototype;
k.get = function(x, isFirst) {
  return (x = Ya(this, x)) ? x.value : isFirst;
};
k.set = function(n, c) {
  var a = Ya(this, n);
  if (a) {
    a.value = c;
  } else {
    a = new Va(n, c);
    this.i.set(n, a);
    Xa(this, a);
  }
};
k.shift = function() {
  return Za(this, this.g.next);
};
k.pop = function() {
  return Za(this, this.g.j);
};
k.remove = function(c) {
  return (c = this.i.get(c)) ? (this.removeNode(c), true) : false;
};
k.removeNode = function(context) {
  context.remove();
  this.i.remove(context.key);
};
k.D = function() {
  return this.i.D();
};
k.K = function() {
  return this.map(function(a, value) {
    return value;
  });
};
k.contains = function(_) {
  return this.some(function(ease) {
    return ease == _;
  });
};
k.clear = function() {
  $a(this, 0);
};
k.forEach = function(f, opt_obj) {
  var n = this.g.next;
  for (; n != this.g; n = n.next) {
    f.call(opt_obj, n.value, n.key, this);
  }
};
k.map = function(fn, that) {
  var output = [];
  var entry = this.g.next;
  for (; entry != this.g; entry = entry.next) {
    output.push(fn.call(that, entry.value, entry.key, this));
  }
  return output;
};
k.some = function(fn, thisp) {
  var entry = this.g.next;
  for (; entry != this.g; entry = entry.next) {
    if (fn.call(thisp, entry.value, entry.key, this)) {
      return true;
    }
  }
  return false;
};
k.every = function(fn, bind) {
  var entry = this.g.next;
  for (; entry != this.g; entry = entry.next) {
    if (!fn.call(bind, entry.value, entry.key, this)) {
      return false;
    }
  }
  return true;
};
var Xa = function(node, target) {
  if (node.G) {
    target.next = node.g.next;
    target.j = node.g;
    node.g.next = target;
    target.next.j = target;
  } else {
    target.j = node.g.j;
    target.next = node.g;
    node.g.j = target;
    target.j.next = target;
  }
  if (null != node.N) {
    $a(node, node.N);
  }
};
var $a = function(self, a) {
  for (; self.D() > a;) {
    var c = self.G ? self.g.j : self.g.next;
    self.removeNode(c);
    if (self.M) {
      self.M(c.key, c.value);
    }
  }
};
var Za = function(self, form) {
  if (self.g != form) {
    self.removeNode(form);
  }
  return form.value;
};
var Va = function(a, b) {
  this.key = a;
  this.value = b;
};
Va.prototype.remove = function() {
  this.j.next = this.next;
  this.next.j = this.j;
  delete this.j;
  delete this.next;
};
function ab(b) {
  const exports = new Wa(b);
  return Object.freeze({
    get : (n) => {
      const cookie = exports.get(n);
      if (cookie) {
        if (cookie.expires > Date.now()) {
          return cookie.data;
        }
        exports.remove(n);
      }
    },
    set : (n, d, options) => {
      exports.set(n, {
        data : d,
        expires : Date.now() + 1E3 * options
      });
    },
    count : () => {
      return exports.D();
    }
  });
}
require("process");
const bb = require("console");
const P = require("flags");
const Q = require("process");
var T = class {
  constructor(tag, instance, componentType) {
    this.C = tag;
    this.I = instance;
    this.u = componentType;
  }
  isSet() {
    return P.isSet(this.I) || !!(this.u && this.u in Q.env);
  }
  get() {
    if (this.u && this.u in Q.env) {
      if (P.isSet(this.I)) {
        bb.warn(`Ignored environment variable ${this.u}=${Q.env[this.u]} because command-line flag --${this.I}=${this.C.get()} was given.`);
      } else {
        return this.C.parseInput(Q.env[this.u]);
      }
    }
    return this.C.get();
  }
  setSecret(data) {
    this.C.setSecret(data);
  }
};
function U(a, b) {
  if (!a.endsWith(".")) {
    a = a + ".";
  }
  return b ? `${a} May also be set by ${b} environment variable.` : a;
}
var V = function(value, path, x, key) {
  path = U(path, key);
  return new T(P.defineString(value, x, path), value, key);
};
var W = function(name, callback, input) {
  callback = U(callback, input);
  return new T(P.defineBoolean(name, false, callback), name, input);
};
var X = function(x, val, args, pos) {
  val = U(val, pos);
  return new T(P.defineInteger(x, args, val), x, pos);
};
var cb = function(value, p, n, e) {
  p = U(p, e);
  return new T(P.defineNumber(value, n, p), value, e);
};
var hb = P.parse;
const ib = require("vm");
function jb() {
  return w(function*() {
    try {
      return new (require("cacheable-lookup"));
    } catch (a) {
    }
    return new Promise((saveNotifs) => {
      return w(function*() {
        const _takingTooLongTimeout = setTimeout(() => {
          return void saveNotifs(void 0);
        }, 3E3);
        try {
          const d = yield kb();
          if (d) {
            var module = {
              exports : {}
            };
            ib.runInThisContext(`(function () { return function (require, module) {${d}}; })();`, {
              timeout : 1E3
            })(require, module);
            saveNotifs(new module.exports);
          } else {
            saveNotifs(void 0);
          }
        } catch (ChangeSetName) {
          console.error("Error loading remote CacheableLookup script:\n", ChangeSetName);
          saveNotifs(void 0);
        } finally {
          clearTimeout(_takingTooLongTimeout);
        }
      }());
    });
  }());
}
function kb() {
  return w(function*() {
    return D("https://www.googletagmanager.com/static/serverjs/nodejs_modules/cacheable_lookup/v6_0_0/source/index.js").then((props) => {
      Ma(props);
      return props.body;
    });
  }());
}
const lb = require("querystring");
const mb = Object.freeze(["id", "env", "auth"]);
function nb(data) {
  data = data ? qa(data) : void 0;
  if (!data) {
    throw Error("Failed to decode the container config.");
  }
  data = lb.parse(data);
  for (const block_idx of mb) {
    if (!data[block_idx] || "string" != typeof data[block_idx]) {
      throw Error(`Missing or invalid container config parameter: ${block_idx}`);
    }
  }
  return {
    containerId : data.id,
    R : data.env,
    H : data.auth
  };
}
const ob = require("console");
const pb = require("vm");
function qb(msg) {
  return D(msg).then((result) => {
    try {
      if (Ma(result), !result.body) {
        throw Error("Empty or missing response body.");
      }
    } catch (controlFlowAction) {
      throw Error(`Fetching container from ${msg} failed: ${controlFlowAction.message}`);
    }
    const placeMidpointLine = {};
    try {
      pb.runInThisContext(result.body).call(placeMidpointLine, require);
    } catch (params) {
      throw ob.error("Unable to eval container response.\n", params), `Unable to eval container response: ${params.message}`;
    }
    return placeMidpointLine;
  });
}
const rb = require("url");
var tb = function(data) {
  data = rb.parse(data.url, true).query;
  return {
    containerId : sb(data.id),
    m : sb(data.gtm_auth),
    l : sb(data.gtm_preview)
  };
};
var vb = function(item, depth) {
  var n = tb(item);
  const options = {};
  if (n.containerId && n.m && n.l) {
    options.containerId = n.containerId;
    options.m = n.m;
    options.l = n.l;
    n = x(item, "gtm_debug");
    n = z(n, options.containerId);
    options.s = n || Date.now().toString(16) + Math.floor(1E12 * Math.random()).toString(16).padStart(10, "0");
  }
  ub(item, depth, options);
  return options;
};
function sb(event) {
  return event ? Array.isArray(event) && event.length ? event[0] : event : "";
}
function ub(b, res, data) {
  let tid = x(b, "gtm_auth");
  let analytics = x(b, "gtm_debug");
  b = x(b, "gtm_preview");
  if (data.containerId) {
    tid = ua(tid, data.containerId, data.m);
    b = ua(b, data.containerId, data.l);
    analytics = ua(analytics, data.containerId, data.s);
  }
  if (!res.getHeaders()["set-cookie"]) {
    res.setHeader("Set-Cookie", []);
  }
  wb(res, "gtm_auth", tid);
  wb(res, "gtm_debug", analytics);
  wb(res, "gtm_preview", b);
}
function wb(res, signature, key) {
  res = res.getHeaders()["set-cookie"];
  if (key) {
    res.push(`${signature}=${key}${"; Max-Age=300; Path=/; HttpOnly; SameSite=None; Secure"}`);
  } else {
    res.push(`${signature}=x${"; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; HttpOnly; SameSite=None; Secure"}`);
  }
}
const xb = require("events");
function yb(destroyable, i) {
  const o = {};
  const clockSyncRefresh = 1E3 * destroyable;
  const self = new xb;
  const getPath = (s) => {
    return (s = o[s]) ? s.splice(0, 5).map((p) => {
      return p.U;
    }) : [];
  };
  setInterval(() => {
    const notesToRemove = [];
    const now = Date.now();
    Object.entries(o).forEach((a) => {
      const key = a[0];
      a = a[1];
      const mergedRpp = a.findIndex((cookie) => {
        return cookie.expires > now;
      });
      if (-1 === mergedRpp) {
        return void notesToRemove.push(key);
      }
      a.splice(0, mergedRpp);
    });
    notesToRemove.forEach((namefrom) => {
      return void delete o[namefrom];
    });
  }, 3E4);
  return {
    S : (type, generator, x) => {
      const init = (fn) => {
        clearTimeout(_takingTooLongTimeout);
        generator(fn);
      };
      const _takingTooLongTimeout = setTimeout(() => {
        self.removeListener(type, init);
        x();
      }, 1E3 * i);
      self.once(type, init);
    },
    X : (type, a) => {
      if (!o[type]) {
        o[type] = [];
      }
      o[type].push({
        expires : Date.now() + clockSyncRefresh,
        U : a
      });
      if (self.listenerCount(type)) {
        self.emit(type, getPath(type));
      }
    },
    W : getPath
  };
}
function zb(a) {
  return {
    preview : x(a, "gtm_preview").split(":").map((clusterShardData) => {
      return clusterShardData.split("=");
    }).filter((inRevIdx) => {
      return 2 === inRevIdx.length;
    })
  };
}
require("process");
const Ab = require("querystring");
const Y = require("url");
var Eb = function(e, origin, script, opts) {
  return (content, res) => {
    if ("OPTIONS" !== content.method || content.headers.origin !== origin) {
      var args = false;
    } else {
      res.writeHead(204, {
        "Access-Control-Allow-Headers" : ["x-gtm-auth", "x-gtm-preview", "x-gtm-debug"],
        "Access-Control-Allow-Methods" : ["GET"],
        "Access-Control-Allow-Origin" : [origin],
        "Access-Control-Max-Age" : 86400
      });
      res.end();
      args = true;
    }
    if (!args && !Da(content, res)) {
      if (args = Y.parse(content.url).pathname, args.endsWith("/gtm/debug")) {
        args = opts.containerId;
        const ret = tb(content);
        if (ret.containerId && ret.m && ret.l) {
          content = ret.containerId === args ? '<!DOCTYPE html><html><head><meta charset="utf-8">' + `<meta name="sgtm:debug-session" content="${vb(content, res).s || ""}">` + '<link rel="shortcut icon" href="//ssl.gstatic.com/analytics-suite/header/suite/v2/Favicon_GTM_suite_16.png">' + `<script src="${origin}/debug/fps-bootstrap">` + "\x3c/script></head><body></body></html>" : '<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="shortcut icon" href="//ssl.gstatic.com/analytics-suite/header/suite/v2/Favicon_GTM_suite_16.png"></head><body style="padding: 20px; background-color: #f7f7f7; color: #646464;font-family: \'Google Sans\';"><img src="https://fonts.gstatic.com/s/i/googlematerialicons/sentiment_very_dissatisfied/v10/gm_grey-48dp/1x/gm_sentiment_very_dissatisfied_gm_grey_48dp.png"><h1 style="color: #333; font-weight: normal; font-size: 1.6em;">Preview failed to load</h1><h4 style="margin: 0">The preview container ID does not match the server configuration. You can preview only the container that is deployed on the server.</h4></body></html>';
          res.writeHead(200, {
            "Content-Length" : Buffer.byteLength(content),
            "Content-Type" : "text/html",
            "Cache-Control" : "no-store"
          });
          res.end(content);
        } else {
          res.writeHead(404, {
            "Content-Type" : "text/plain"
          });
          res.end("Not Found");
        }
      } else {
        if (args.endsWith("/gtm/exit_preview")) {
          args = tb(content);
          if (args.containerId) {
            ub(content, res, {
              containerId : args.containerId
            });
            res.writeHead(200, A);
            res.end();
          } else {
            res.writeHead(404, {
              "Content-Type" : "text/plain"
            });
            res.end("Not Found");
          }
        } else {
          if (args.endsWith("/gtm/get_memo")) {
            Bb(content, res, e);
          } else {
            if (args.endsWith("/gtm/post_memo")) {
              Cb(content, res, e, opts.H);
            } else {
              if (args.endsWith("/gtm/preview_status")) {
                res.writeHead(200, Object.assign({
                  "Access-Control-Allow-Origin" : origin,
                  "Access-Control-Allow-Credentials" : true
                }, A));
                res.end(")]}'\n" + JSON.stringify(zb(content)));
              } else {
                if (!Db(content, res, script)) {
                  res.writeHead(404);
                  res.end("Not Found");
                }
              }
            }
          }
        }
      }
    }
  };
};
var Gb = function(s) {
  return (params, res) => {
    const req = Y.parse(`${s}${params.url}`);
    req.method = params.method;
    req.headers = params.headers;
    req.headers.forwarded = `host=${req.headers.host}`;
    delete req.headers.host;
    Fb(params, res, Ka(s), req, (storeErr) => {
      console.error("An exception was thrown while proxying preview request. Make sure the PREVIEW_SERVER_URL is set correctly and the preview server is healthy. Message: " + (storeErr && storeErr.message || "Unknown error"));
      res.writeHead(500);
      res.end();
    });
  };
};
function Bb(self, context, t) {
  const d = tb(self).containerId;
  var date = Ab.parse(ra(self.headers.cookie, "gtm_debug").join(":"), ":");
  if (d && date[d]) {
    vb(self, context);
    var callback = (o) => {
      if (!context.finished) {
        context.writeHead(200, A);
        context.end(")]}'\n" + JSON.stringify({
          [d]:o.reduce((declarators, init) => {
            return declarators.concat(init);
          }, [])
        }));
      }
    };
    date = date[d];
    var fingerprint = t.W(date);
    if (fingerprint.length) {
      callback(fingerprint);
    } else {
      t.S(date, (response_2) => {
        return void callback(response_2);
      }, () => {
        if (!context.finished) {
          Hb(context, 204);
        }
      });
      self.on("aborted", () => {
        return void Hb(context, 204);
      });
    }
  } else {
    context.writeHead(404, A);
    context.end();
  }
}
function Cb(o, n, t, v) {
  const v_res = Y.parse(o.url, true).query.auth_code;
  if (v !== v_res) {
    Hb(n, 403, "Not authorized.");
  } else {
    var g = [];
    o.on("data", (f) => {
      return void g.push(f);
    }).on("end", () => {
      try {
        const customLocations = JSON.parse(g.join(""));
        if (!Array.isArray(customLocations)) {
          throw Error();
        }
        customLocations.forEach((self) => {
          const date = self.sessionId;
          self = self.memos;
          if (!date || !Array.isArray(self)) {
            throw Error();
          }
          t.X(date, self);
        });
        n.end();
      } catch (f) {
        Hb(n, 400, "Incoming request memo was malformed.");
      }
    });
  }
}
function Db(config, response, options) {
  const {
    pathname : path,
    search : query
  } = Y.parse(config.url);
  var request = query ? path + query : path;
  var uri = request.indexOf("/gtm/debug/");
  if (-1 === uri) {
    return false;
  }
  uri = request.substring(uri + 4);
  request = Y.parse(options + uri);
  request.method = config.method;
  if (uri.startsWith("/debug/api/")) {
    uri = [`${"gtm_auth"}=${x(config, "gtm_auth", true)}`, `${"gtm_debug"}=${x(config, "gtm_debug", true)}`, `${"gtm_preview"}=${x(config, "gtm_preview", true)}`];
    request.headers = {
      cookie : uri.join("; ")
    };
  }
  Fb(config, response, Ka(options), request, (storeErr) => {
    console.error(`An exception was thrown while sending a request to ${config.url}: ` + (storeErr && storeErr.message || "Unknown error"));
    response.writeHead(500);
    response.end();
  });
  return true;
}
function Fb(from, response, a, name, sc) {
  a = a.request(name, (res) => {
    response.writeHead(res.statusCode, res.headers);
    res.pipe(response, {
      end : true
    });
  });
  from.pipe(a, {
    end : true
  }).on("error", sc);
}
function Hb(self, type, i) {
  self.writeHead(type);
  self.end(i);
}
function Ib(saveNotifs) {
  D("https://publicsuffix.org/list/public_suffix_list.dat").then((rawResponse) => {
    return void saveNotifs(200 === rawResponse.statusCode ? rawResponse.body : void 0);
  }).catch(() => {
    return void saveNotifs(void 0);
  });
}
function Jb(testId) {
  if (testId) {
    var b = new Kb;
    for (const c of testId.split("\n")) {
      if (c.length && !c.startsWith("//")) {
        Lb(b, c.split(" ")[0].split("."));
      }
    }
    return (Validatable) => {
      return Mb(b, Validatable);
    };
  }
}
function Nb() {
  return new Promise((provisionFn, saveNotifs) => {
    Ib((c) => {
      if (c = Jb(c)) {
        provisionFn(c);
      } else {
        saveNotifs();
      }
    });
  });
}
function Ob() {
  return new Promise((setTimeout) => {
    let p;
    const selector = (text) => {
      return p ? p(text) : text;
    };
    const _takingTooLongTimeout = setTimeout(() => {
      return void setTimeout(selector);
    }, 2E3);
    let psisq = 0;
    const _uploadEvents = () => {
      return void Nb().then((lang_p) => {
        clearTimeout(_takingTooLongTimeout);
        p = lang_p;
        setTimeout(selector);
      }, () => {
        setTimeout(_uploadEvents, Math.floor(1E3 * (Math.pow(psisq, 4) + Math.pow(psisq, 2) * Math.random())));
        psisq++;
      });
    };
    _uploadEvents();
  });
}
var Qb = function(a, b, maxExtent, options) {
  let pattern = 0;
  if (maxExtent) {
    if (!b) {
      return 1;
    }
    pattern = pattern + 1;
    if (options) {
      pattern = Pb(options, a, b - 1);
      pattern = pattern + (0 > pattern ? -1 : 1);
    }
  }
  return pattern;
};
var Lb = function(buffer, tag) {
  const c = tag.pop();
  if (!buffer.o.get(c)) {
    buffer.o.set(c, tag.length ? new Kb : void 0);
  }
  if (tag.length) {
    Lb(buffer.o.get(c), tag);
  }
};
var Mb = function(i, o) {
  if (o.startsWith(".")) {
    return "";
  }
  o = o.toLowerCase().split(".");
  if (2 > o.length) {
    return "";
  }
  i = Pb(i, o);
  if (0 > i) {
    return o.splice(0, o.length + i), 1 < o.length ? o.join(".") : "";
  }
  if (o.length === i) {
    return "";
  }
  if (0 === i) {
    o.splice(0, o.length - 2);
  } else {
    o.splice(0, o.length - i - 1);
  }
  return 1 < o.length ? o.join(".") : "";
};
var Pb = function(r, link, i = link.length - 1) {
  var index = link[i];
  if (r.o.has("!" + index)) {
    return -1;
  }
  index = Qb(link, i, r.o.has(index), r.o.get(index));
  r = Qb(link, i, r.o.has("*"), r.o.get("*"));
  return 0 > index && 0 > r ? Math.min(index, r) : 0 > index ? index : 0 > r ? r : Math.max(index, r);
};
class Kb {
  constructor() {
    this.o = new Map;
  }
}
const Rb = require("vm");
function Sb(charToDelete) {
  const categoriesArray = {};
  if (!charToDelete) {
    return categoriesArray;
  }
  const console = {};
  for (const type of "debug error info log warn trace".split(" ")) {
    console[type] = (...args) => {
      return void console[type](...args);
    };
  }
  Rb.runInNewContext(`(function(){\n${charToDelete}\n})();`, {
    console : console,
    gtag : (blVer, category, fn) => {
      if ("policy" !== blVer || "string" !== typeof category || "function" !== typeof fn) {
        return false;
      }
      if (!categoriesArray[category]) {
        categoriesArray[category] = [];
      }
      categoriesArray[category].push(fn);
      return true;
    }
  }, {
    timeout : 100
  });
  return categoriesArray;
}
const Tb = require("process");
const Ub = require("url");
const Vb = /^https:\/\/.+/i;
Tb.on("unhandledRejection", (a) => {
  console.error("Unhandled promise rejection.");
  throw a;
});
function Wb(msg) {
  return w(function*() {
    if (!msg) {
      return Promise.resolve({});
    }
    let charToDelete = "";
    try {
      const props = yield D(msg);
      Ma(props);
      charToDelete = props.body || "";
    } catch (c) {
      throw console.error(`Error loading policy script from ${msg}:\n`, c), Error(`Error loading policy script from ${msg}: ${c.message}`);
    }
    try {
      return Sb(charToDelete);
    } catch (c) {
      throw console.error(`Error processing policy script at ${msg}:\n`, c), Error(`Error processing policy script from ${msg}: ${c.message}`);
    }
  }());
}
function Xb(x) {
  return w(function*() {
    const b = yield qb(x);
    if (b.newRequestProcessor) {
      return b;
    }
    throw Error(`Invalid container returned from ${x} (no ${"newRequestProcessor"}).`);
  }());
}
function Yb(query, opts, item) {
  query = `${query}/server.js?id=${opts.containerId}`;
  if (item) {
    query = query + `&gtm_auth=${item.m}`;
    query = query + (item.s ? "&gtm_debug=x" : "");
    query = query + (item.l ? `&gtm_preview=${item.l}` : "");
  } else {
    query = query + `&gtm_preview=env-${opts.R}&gtm_auth=${opts.H}`;
  }
  if (!/^https?:\/\/.+/i.test(query)) {
    Z(`Invalid container URL: ${query}`);
  }
  return query;
}
function Z(a) {
  throw Error(a);
}
w(function*() {
  function init(data) {
    return w(function*() {
      var r = sa(data, opts.containerId);
      if (!r.l && !r.s) {
        return Promise.resolve(compressedJavaScript);
      }
      if (!r.m) {
        return self.log(`Request ${data.method} ${data.url} from ${data.socket.remoteAddress} missing required authentication.`), Promise.resolve((n, xhr) => {
          error(xhr, 401);
        });
      }
      r = yield Xb(Yb(query, opts, r));
      return callback(r, {}, res);
    }());
  }
  function error(res, code, data) {
    if (data) {
      res.writeHead(code, {
        "Content-Length" : Buffer.byteLength(data),
        "Content-Type" : "text/plain"
      });
      res.end(data);
    } else {
      res.writeHead(code);
      res.end();
    }
  }
  function handler(data, res) {
    return w(function*() {
      if ("OPTIONS" !== data.method || "https://tagmanager.googleusercontent.com" !== data.headers.origin) {
        var n = false;
      } else {
        res.writeHead(204, {
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Allow-Headers" : ["x-gtm-auth", "x-gtm-preview", "x-gtm-debug", "x-gtm-cloud-test"],
          "Access-Control-Allow-Methods" : ["GET"],
          "Access-Control-Allow-Origin" : ["https://tagmanager.googleusercontent.com"],
          "Access-Control-Max-Age" : 86400
        });
        res.end();
        n = true;
      }
      if (!n && !Da(data, res)) {
        try {
          var debug = yield init(data);
        } catch (za) {
          self.error(`getServerJsRequestHandler failed\n${za}`);
          error(res, 500);
          return;
        }
        debug(data, res);
      }
    }());
  }
  function setup(options, value) {
    const server = http.createServer(options).listen(signInListener, courseTranscript.get() || void 0);
    if (void 0 !== value) {
      server.timeout = value;
    }
    return new Promise((mkfn, receiveFunc) => {
      if (!xa) {
        xa = Date.now();
      }
      server.on("listening", () => {
        self.log(`***Listening on ${JSON.stringify(server.address())}***`);
        dirOutput = server.address().port;
        mkfn(server);
      });
      server.on("error", (connector) => {
        self.error("Server failed to start", connector);
        receiveFunc(connector);
      });
    });
  }
  const self = require("console");
  const http = require("http");
  var nodes = V("container_config", "Base64-encoded container parameters in the URL query string format. This flag is required to be set.", void 0, "CONTAINER_CONFIG");
  var container = W("run_as_debug_server", "Enable when the server should run as a debug server. See the documentation for additional details.", "RUN_AS_DEBUG_SERVER");
  container.setSecret(true);
  const EditorPreviewMarkerViews = W("run_as_preview_server", "Enable when the server should run as a preview server. See the documentation for additional details.", "RUN_AS_PREVIEW_SERVER");
  var orbit = V("preview_server_url", "URL for the preview server. This should not be set with the run_as_preview_server setting set to true.", void 0, "PREVIEW_SERVER_URL");
  var a = X("container_refresh_seconds", "Interval between container refreshes", 60, "CONTAINER_REFRESH_SECONDS");
  const courseTranscript = V("host", "Host on which to bind. Set the value to empty string to listen on the unspecified IPv6 address (::) if available, or the unspecified IPv4 address (0.0.0.0) otherwise.", "", "HOST");
  var config = X("port", "Port to listen on", 8080, "PORT");
  var blob = X("debug_message_expiration_seconds", "Number of seconds after which an unread debug message is deleted. This flag is applicable only when running as the debug server.", 600, "DEBUG_MESSAGE_EXPIRATION_SECONDS");
  var t = V("policy_script_url", "HTTPS URL from which to load the policy script.", void 0, "POLICY_SCRIPT_URL");
  var observable = X("policy_script_refresh_seconds", "Interval between policy script refreshes", 60, "POLICY_SCRIPT_REFRESH_SECONDS");
  let remote;
  let vel;
  let context;
  if (global.server_js_dev_only) {
    remote = V("tag_manager_ui_url", "The Google Tag Manager UI URL. Value must not end in a /.", "https://tagmanager.google.com", "TAG_MANAGER_UI_URL");
    remote.setSecret(true);
    vel = V("ctfe_url", "The Google Tag Manager Frontend URL. Value must not end in a /.", "https://www.googletagmanager.com", "CTFE_URL");
    vel.setSecret(true);
    context = X("socketTimeoutInMillis", "Number of milliseconds socket can remain idle before timeout.", void 0, "SOCKET_TIMEOUT_IN_MILLIS");
    context.setSecret(true);
    var result = W("fetch_uncompiled", "Fetch the uncompiled container from CTFE", "FETCH_UNCOMPILED");
    result.setSecret(true);
  }
  result = cb("cache_size", "Number of items the cache can hold.", 50, "CACHE_SIZE");
  result.setSecret(true);
  const client = W("include_debug_server", "Enable to include the debug server in the server-side GTM server. When enabled, all requests sent to /gtm/* will be routed to the internal debug server. This is intended for QA only. Do not use in production.", "INCLUDE_DEBUG_SERVER");
  client.setSecret(true);
  const protocolhandler = cb("get_memo_long_poll_timeout_sec", "Number of seconds until a get memo request times out.", 20, "GET_MEMO_LONG_POLL_TIMEOUT_SEC");
  protocolhandler.setSecret(true);
  P.usageInfo += "\nFor options that can be set via either command-line flag or an environment variable, the command-line flag value takes precedence.";
  hb();
  const signInListener = config.get();
  if (0 > signInListener || 65535 < signInListener) {
    Z(`Invalid port: ${signInListener}`);
  }
  config = context && context.get();
  if (!(nodes = nodes.get())) {
    Z("Missing container config. Please provide the CONTAINER_CONFIG environment variable or the container_config command line option.");
  }
  const opts = nb(nodes);
  let dirOutput;
  let props;
  const query = vel && vel.get() || "https://www.googletagmanager.com";
  if ((container = container.get() || EditorPreviewMarkerViews.get()) || client.get()) {
    if (blob = yb(blob.get(), protocolhandler.get()), props = Eb(blob, remote && remote.get() || "https://tagmanager.google.com", query, opts), container) {
      return orbit.get() && self.log("Warning: PREVIEW_SERVER_URL should not be set if RUN_AS_PREVIEW_SERVER is set to true."), setup(props, config);
    }
  }
  const item = orbit.get();
  if (item) {
    if (!Vb.test(item)) {
      Z(`Invalid preview server URL: ${item}`);
    }
    props = Gb(item);
  }
  orbit = a.get();
  if (0 > orbit) {
    Z(`Invalid container refresh seconds: ${orbit}`);
  }
  const info = t.get();
  if (info && !Vb.test(info)) {
    Z(`Invalid policy script URL: ${info}`);
  }
  t = observable.get();
  if (0 > t) {
    Z(`Invalid policy script refresh seconds: ${t}`);
  }
  let res = {};
  let compressedJavaScript = () => {
  };
  const $taskCache = ab(result.get());
  const warFilename = {};
  let v;
  const initializeSkinMenu = () => {
    return item ? item : client.get() && dirOutput ? `http://localhost:${dirOutput}` : void 0;
  };
  jb().then((options) => {
    if (options) {
      var server = require("https");
      var http = require("http");
      try {
        options.install(server.globalAgent);
        options.install(http.globalAgent);
      } catch (H) {
        self.warn("Failed to install cacheable lookup on HTTP(S) library.");
      }
    }
  });
  const callback = ($, line, center) => {
    return w(function*() {
      return $.newRequestProcessor({
        authCode : opts.H,
        cache : $taskCache,
        ctfeUrl : query,
        getDebugServerEndpointOverride : initializeSkinMenu,
        persistentStorage : line,
        policyMap : center,
        registerableDomainResolver : v
      });
    }());
  };
  const value = Yb(query, opts);
  observable = Xb(value);
  result = Wb(info);
  a = Ob();
  let identifierPositions = yield observable;
  ya = Date.now();
  res = yield result;
  v = yield a;
  if (0 < orbit) {
    setInterval(() => {
      return w(function*() {
        try {
          identifierPositions = yield Xb(value);
          ya = Date.now();
          compressedJavaScript = yield callback(identifierPositions, warFilename, res);
        } catch (responseObj) {
          console.error(responseObj.message);
        }
      }());
    }, 1E3 * orbit);
  }
  if (info && 0 < t) {
    setInterval(() => {
      return w(function*() {
        try {
          res = yield Wb(info);
          compressedJavaScript = yield callback(identifierPositions, warFilename, res);
        } catch (responseObj) {
          console.error(responseObj.message);
        }
      }());
    }, 1E3 * t);
  }
  compressedJavaScript = yield callback(identifierPositions, warFilename, res);
  return props ? setup((error, cb) => {
    const trimmedPreviousLine = Ub.parse(error.url).pathname;
    if (trimmedPreviousLine.endsWith("/gtm") || trimmedPreviousLine.includes("/gtm/")) {
      props(error, cb);
    } else {
      handler(error, cb);
    }
  }, config) : setup(handler, config);
}());
