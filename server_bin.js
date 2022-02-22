// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
const l = require("http");
const p = require("https");
const q = require("url");
var x = class extends Error {
  constructor(value_or_anything) {
    super(value_or_anything);
    this.name = "HttpTimeoutError";
    Error.captureStackTrace(this, x);
  }
};
function y(data, options, value) {
  const stringToShorten = !!options.followRedirects;
  const _update_every = Number(options.maxRedirects);
  const maxCharsAmount = isNaN(_update_every) ? 3 : _update_every;
  if (stringToShorten && 0 > maxCharsAmount) {
    return Promise.reject(Error("Too many redirects."));
  }
  let f;
  let u;
  return (new Promise((resolve, cb) => {
    var d = Number(options.timeout);
    if (0 < d) {
      u = setTimeout(() => {
        f.abort();
        cb(new x("Request timed out."));
      }, d);
    }
    const p = Object.assign({}, options);
    if (options.headers) {
      p.headers = Object.assign({}, options.headers);
    }
    delete p.timeout;
    z(p);
    if (value) {
      if (!p.headers) {
        p.headers = {};
      }
      p.headers["content-length"] = Buffer.byteLength(value);
    }
    d = Object.assign(q.parse(data), p);
    if (A(data)) {
      var m = p;
    } else {
      if (data.toLowerCase().startsWith("http://")) {
        m = l;
      } else {
        throw Error(`URL ${data} uses unsupported protocol; must be HTTP or HTTPS.`);
      }
    }
    f = m.request(d, (res) => {
      if (stringToShorten && 300 <= res.statusCode && 400 > res.statusCode && res.headers.location) {
        res.resume();
        const arg = res.headers.location;
        if (A(data) && !A(arg)) {
          cb(Error("Unable to follow HTTPS -> HTTP redirect."));
        } else {
          resolve(y(res.headers.location, Object.assign(p, {
            followRedirects : stringToShorten,
            maxRedirects : maxCharsAmount - 1
          }), value));
        }
      } else {
        var n = [];
        res.on("data", (m) => {
          n.push(m);
        });
        res.on("end", () => {
          resolve({
            statusCode : res.statusCode,
            headers : res.headers,
            body : 0 === n.length ? void 0 : Buffer.concat(n).toString()
          });
        });
      }
    });
    f.on("error", cb);
    f.end(value);
  })).finally(() => {
    return clearTimeout(u);
  });
}
function A(text) {
  return text.toLowerCase().startsWith("https://");
}
function z(msg) {
  if (global.server_js_dev_only) {
    if (!msg.headers) {
      msg.headers = {};
    }
    msg.headers["X-Google-GFE-Frontline-Info"] = "ssl";
  }
}
require("process");
require("process");
const B = require("vm");
global.require = require;
y("https://www.googletagmanager.com/static/serverjs/server_bootstrap.js", Object.assign({}, {
  method : "GET"
})).then(function(res) {
  if (!(400 > res.statusCode)) {
    var message = `Received HTTP status code ${res.statusCode}.`;
    if (void 0 != res.body) {
      message = message + `\n\n${res.body}`;
    }
    throw Error(message);
  }
  try {
    B.runInThisContext(res.body || "");
  } catch (ChangeSetName) {
    throw console.error("Unable to process server bootstrap JS at https://www.googletagmanager.com/static/serverjs/server_bootstrap.js\n", ChangeSetName), ChangeSetName;
  }
}).catch((a) => {
  console.error("Fetching server bootstrap JS from https://www.googletagmanager.com/static/serverjs/server_bootstrap.js failed.");
  throw a;
});
