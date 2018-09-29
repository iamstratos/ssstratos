"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  var e = {};function r(n) {
    if (e[n]) return e[n].exports;var o = e[n] = { i: n, l: !1, exports: {} };return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
  }, r.r = function (t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 17);
}([function (t, e) {
  var r;r = function () {
    return this;
  }();try {
    r = r || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }t.exports = r;
}, function (t, e, r) {
  var n = r(2),
      o = {};for (var a in n) {
    n.hasOwnProperty(a) && (o[n[a]] = a);
  }var i = t.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };for (var s in i) {
    if (i.hasOwnProperty(s)) {
      if (!("channels" in i[s])) throw new Error("missing channels property: " + s);if (!("labels" in i[s])) throw new Error("missing channel labels property: " + s);if (i[s].labels.length !== i[s].channels) throw new Error("channel and label counts mismatch: " + s);var l = i[s].channels,
          u = i[s].labels;delete i[s].channels, delete i[s].labels, Object.defineProperty(i[s], "channels", { value: l }), Object.defineProperty(i[s], "labels", { value: u });
    }
  }i.rgb.hsl = function (t) {
    var e,
        r,
        n = t[0] / 255,
        o = t[1] / 255,
        a = t[2] / 255,
        i = Math.min(n, o, a),
        s = Math.max(n, o, a),
        l = s - i;return s === i ? e = 0 : n === s ? e = (o - a) / l : o === s ? e = 2 + (a - n) / l : a === s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), r = (i + s) / 2, [e, 100 * (s === i ? 0 : r <= .5 ? l / (s + i) : l / (2 - s - i)), 100 * r];
  }, i.rgb.hsv = function (t) {
    var e,
        r,
        n,
        o,
        a,
        i = t[0] / 255,
        s = t[1] / 255,
        l = t[2] / 255,
        u = Math.max(i, s, l),
        h = u - Math.min(i, s, l),
        c = function c(t) {
      return (u - t) / 6 / h + .5;
    };return 0 === h ? o = a = 0 : (a = h / u, e = c(i), r = c(s), n = c(l), i === u ? o = n - r : s === u ? o = 1 / 3 + e - n : l === u && (o = 2 / 3 + r - e), o < 0 ? o += 1 : 1 < o && (o -= 1)), [360 * o, 100 * a, 100 * u];
  }, i.rgb.hwb = function (t) {
    var e = t[0],
        r = t[1],
        n = t[2];return [i.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(r, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(r, n)))];
  }, i.rgb.cmyk = function (t) {
    var e,
        r = t[0] / 255,
        n = t[1] / 255,
        o = t[2] / 255;return [100 * ((1 - r - (e = Math.min(1 - r, 1 - n, 1 - o))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e];
  }, i.rgb.keyword = function (t) {
    var e = o[t];if (e) return e;var r,
        a,
        i,
        s = 1 / 0;for (var l in n) {
      if (n.hasOwnProperty(l)) {
        var u = (a = t, i = n[l], Math.pow(a[0] - i[0], 2) + Math.pow(a[1] - i[1], 2) + Math.pow(a[2] - i[2], 2));u < s && (s = u, r = l);
      }
    }return r;
  }, i.keyword.rgb = function (t) {
    return n[t];
  }, i.rgb.xyz = function (t) {
    var e = t[0] / 255,
        r = t[1] / 255,
        n = t[2] / 255;return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (r = .04045 < r ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * r + .0722 * n), 100 * (.0193 * e + .1192 * r + .9505 * n)];
  }, i.rgb.lab = function (t) {
    var e = i.rgb.xyz(t),
        r = e[0],
        n = e[1],
        o = e[2];return n /= 100, o /= 108.883, r = .008856 < (r /= 95.047) ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (r - n), 200 * (n - (o = .008856 < o ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))];
  }, i.hsl.rgb = function (t) {
    var e,
        r,
        n,
        o,
        a,
        i = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100;if (0 === s) return [a = 255 * l, a, a];e = 2 * l - (r = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];for (var u = 0; u < 3; u++) {
      (n = i + 1 / 3 * -(u - 1)) < 0 && n++, 1 < n && n--, a = 6 * n < 1 ? e + 6 * (r - e) * n : 2 * n < 1 ? r : 3 * n < 2 ? e + (r - e) * (2 / 3 - n) * 6 : e, o[u] = 255 * a;
    }return o;
  }, i.hsl.hsv = function (t) {
    var e = t[0],
        r = t[1] / 100,
        n = t[2] / 100,
        o = r,
        a = Math.max(n, .01);return r *= (n *= 2) <= 1 ? n : 2 - n, o *= a <= 1 ? a : 2 - a, [e, 100 * (0 === n ? 2 * o / (a + o) : 2 * r / (n + r)), (n + r) / 2 * 100];
  }, i.hsv.rgb = function (t) {
    var e = t[0] / 60,
        r = t[1] / 100,
        n = t[2] / 100,
        o = Math.floor(e) % 6,
        a = e - Math.floor(e),
        i = 255 * n * (1 - r),
        s = 255 * n * (1 - r * a),
        l = 255 * n * (1 - r * (1 - a));switch (n *= 255, o) {case 0:
        return [n, l, i];case 1:
        return [s, n, i];case 2:
        return [i, n, l];case 3:
        return [i, s, n];case 4:
        return [l, i, n];case 5:
        return [n, i, s];}
  }, i.hsv.hsl = function (t) {
    var e,
        r,
        n,
        o = t[0],
        a = t[1] / 100,
        i = t[2] / 100,
        s = Math.max(i, .01);return n = (2 - a) * i, r = a * s, [o, 100 * (r = (r /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0), 100 * (n /= 2)];
  }, i.hwb.rgb = function (t) {
    var e,
        r,
        n,
        o,
        a,
        i,
        s,
        l = t[0] / 360,
        u = t[1] / 100,
        h = t[2] / 100,
        c = u + h;switch (1 < c && (u /= c, h /= c), n = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (n = 1 - n), o = u + n * ((r = 1 - h) - u), e) {default:case 6:case 0:
        a = r, i = o, s = u;break;case 1:
        a = o, i = r, s = u;break;case 2:
        a = u, i = r, s = o;break;case 3:
        a = u, i = o, s = r;break;case 4:
        a = o, i = u, s = r;break;case 5:
        a = r, i = u, s = o;}return [255 * a, 255 * i, 255 * s];
  }, i.cmyk.rgb = function (t) {
    var e = t[0] / 100,
        r = t[1] / 100,
        n = t[2] / 100,
        o = t[3] / 100;return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))];
  }, i.xyz.rgb = function (t) {
    var e,
        r,
        n,
        o = t[0] / 100,
        a = t[1] / 100,
        i = t[2] / 100;return r = -.9689 * o + 1.8758 * a + .0415 * i, n = .0557 * o + -.204 * a + 1.057 * i, e = .0031308 < (e = 3.2406 * o + -1.5372 * a + -.4986 * i) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, r = .0031308 < r ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
  }, i.xyz.lab = function (t) {
    var e = t[0],
        r = t[1],
        n = t[2];return r /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (r = .008856 < r ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (e - r), 200 * (r - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
  }, i.lab.xyz = function (t) {
    var e,
        r,
        n,
        o = t[0];e = t[1] / 500 + (r = (o + 16) / 116), n = r - t[2] / 200;var a = Math.pow(r, 3),
        i = Math.pow(e, 3),
        s = Math.pow(n, 3);return r = .008856 < a ? a : (r - 16 / 116) / 7.787, e = .008856 < i ? i : (e - 16 / 116) / 7.787, n = .008856 < s ? s : (n - 16 / 116) / 7.787, [e *= 95.047, r *= 100, n *= 108.883];
  }, i.lab.lch = function (t) {
    var e,
        r = t[0],
        n = t[1],
        o = t[2];return (e = 360 * Math.atan2(o, n) / 2 / Math.PI) < 0 && (e += 360), [r, Math.sqrt(n * n + o * o), e];
  }, i.lch.lab = function (t) {
    var e,
        r = t[0],
        n = t[1];return e = t[2] / 360 * 2 * Math.PI, [r, n * Math.cos(e), n * Math.sin(e)];
  }, i.rgb.ansi16 = function (t) {
    var e = t[0],
        r = t[1],
        n = t[2],
        o = 1 in arguments ? arguments[1] : i.rgb.hsv(t)[2];if (0 === (o = Math.round(o / 50))) return 30;var a = 30 + (Math.round(n / 255) << 2 | Math.round(r / 255) << 1 | Math.round(e / 255));return 2 === o && (a += 60), a;
  }, i.hsv.ansi16 = function (t) {
    return i.rgb.ansi16(i.hsv.rgb(t), t[2]);
  }, i.rgb.ansi256 = function (t) {
    var e = t[0],
        r = t[1],
        n = t[2];return e === r && r === n ? e < 8 ? 16 : 248 < e ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(n / 255 * 5);
  }, i.ansi16.rgb = function (t) {
    var e = t % 10;if (0 === e || 7 === e) return 50 < t && (e += 3.5), [e = e / 10.5 * 255, e, e];var r = .5 * (1 + ~~(50 < t));return [(1 & e) * r * 255, (e >> 1 & 1) * r * 255, (e >> 2 & 1) * r * 255];
  }, i.ansi256.rgb = function (t) {
    if (232 <= t) {
      var e = 10 * (t - 232) + 8;return [e, e, e];
    }var r;return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((r = t % 36) / 6) / 5 * 255, r % 6 / 5 * 255];
  }, i.rgb.hex = function (t) {
    var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();return "000000".substring(e.length) + e;
  }, i.hex.rgb = function (t) {
    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if (!e) return [0, 0, 0];var r = e[0];3 === e[0].length && (r = r.split("").map(function (t) {
      return t + t;
    }).join(""));var n = parseInt(r, 16);return [n >> 16 & 255, n >> 8 & 255, 255 & n];
  }, i.rgb.hcg = function (t) {
    var e,
        r = t[0] / 255,
        n = t[1] / 255,
        o = t[2] / 255,
        a = Math.max(Math.max(r, n), o),
        i = Math.min(Math.min(r, n), o),
        s = a - i;return e = s <= 0 ? 0 : a === r ? (n - o) / s % 6 : a === n ? 2 + (o - r) / s : 4 + (r - n) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? i / (1 - s) : 0)];
  }, i.hsl.hcg = function (t) {
    var e,
        r = t[1] / 100,
        n = t[2] / 100,
        o = 0;return (e = n < .5 ? 2 * r * n : 2 * r * (1 - n)) < 1 && (o = (n - .5 * e) / (1 - e)), [t[0], 100 * e, 100 * o];
  }, i.hsv.hcg = function (t) {
    var e = t[1] / 100,
        r = t[2] / 100,
        n = e * r,
        o = 0;return n < 1 && (o = (r - n) / (1 - n)), [t[0], 100 * n, 100 * o];
  }, i.hcg.rgb = function (t) {
    var e = t[0] / 360,
        r = t[1] / 100,
        n = t[2] / 100;if (0 === r) return [255 * n, 255 * n, 255 * n];var o,
        a = [0, 0, 0],
        i = e % 1 * 6,
        s = i % 1,
        l = 1 - s;switch (Math.floor(i)) {case 0:
        a[0] = 1, a[1] = s, a[2] = 0;break;case 1:
        a[0] = l, a[1] = 1, a[2] = 0;break;case 2:
        a[0] = 0, a[1] = 1, a[2] = s;break;case 3:
        a[0] = 0, a[1] = l, a[2] = 1;break;case 4:
        a[0] = s, a[1] = 0, a[2] = 1;break;default:
        a[0] = 1, a[1] = 0, a[2] = l;}return o = (1 - r) * n, [255 * (r * a[0] + o), 255 * (r * a[1] + o), 255 * (r * a[2] + o)];
  }, i.hcg.hsv = function (t) {
    var e = t[1] / 100,
        r = e + t[2] / 100 * (1 - e),
        n = 0;return 0 < r && (n = e / r), [t[0], 100 * n, 100 * r];
  }, i.hcg.hsl = function (t) {
    var e = t[1] / 100,
        r = t[2] / 100 * (1 - e) + .5 * e,
        n = 0;return 0 < r && r < .5 ? n = e / (2 * r) : .5 <= r && r < 1 && (n = e / (2 * (1 - r))), [t[0], 100 * n, 100 * r];
  }, i.hcg.hwb = function (t) {
    var e = t[1] / 100,
        r = e + t[2] / 100 * (1 - e);return [t[0], 100 * (r - e), 100 * (1 - r)];
  }, i.hwb.hcg = function (t) {
    var e = t[1] / 100,
        r = 1 - t[2] / 100,
        n = r - e,
        o = 0;return n < 1 && (o = (r - n) / (1 - n)), [t[0], 100 * n, 100 * o];
  }, i.apple.rgb = function (t) {
    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255];
  }, i.rgb.apple = function (t) {
    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535];
  }, i.gray.rgb = function (t) {
    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255];
  }, i.gray.hsl = i.gray.hsv = function (t) {
    return [0, 0, t[0]];
  }, i.gray.hwb = function (t) {
    return [0, 100, t[0]];
  }, i.gray.cmyk = function (t) {
    return [0, 0, 0, t[0]];
  }, i.gray.lab = function (t) {
    return [t[0], 0, 0];
  }, i.gray.hex = function (t) {
    var e = 255 & Math.round(t[0] / 100 * 255),
        r = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();return "000000".substring(r.length) + r;
  }, i.rgb.gray = function (t) {
    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100];
  };
}, function (t, e, r) {
  "use strict";
  t.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
}, function (t, e) {
  t.exports = function (t, e, r) {
    return t * (1 - r) + e * r;
  };
}, function (t, e) {
  var r,
      n,
      o = t.exports = {};function a() {
    throw new Error("setTimeout has not been defined");
  }function i() {
    throw new Error("clearTimeout has not been defined");
  }function s(t) {
    if (r === setTimeout) return setTimeout(t, 0);if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);try {
      return r(t, 0);
    } catch (e) {
      try {
        return r.call(null, t, 0);
      } catch (e) {
        return r.call(this, t, 0);
      }
    }
  }!function () {
    try {
      r = "function" == typeof setTimeout ? setTimeout : a;
    } catch (t) {
      r = a;
    }try {
      n = "function" == typeof clearTimeout ? clearTimeout : i;
    } catch (t) {
      n = i;
    }
  }();var l,
      u = [],
      h = !1,
      c = -1;function f() {
    h && l && (h = !1, l.length ? u = l.concat(u) : c = -1, u.length && p());
  }function p() {
    if (!h) {
      var t = s(f);h = !0;for (var e = u.length; e;) {
        for (l = u, u = []; ++c < e;) {
          l && l[c].run();
        }c = -1, e = u.length;
      }l = null, h = !1, function (t) {
        if (n === clearTimeout) return clearTimeout(t);if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);try {
          n(t);
        } catch (e) {
          try {
            return n.call(null, t);
          } catch (e) {
            return n.call(this, t);
          }
        }
      }(t);
    }
  }function v(t, e) {
    this.fun = t, this.array = e;
  }function g() {}o.nextTick = function (t) {
    var e = new Array(arguments.length - 1);if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) {
      e[r - 1] = arguments[r];
    }u.push(new v(t, e)), 1 !== u.length || h || s(p);
  }, v.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (t) {
    return [];
  }, o.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function () {
    return "/";
  }, o.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function () {
    return 0;
  };
}, function (t, e, r) {
  (function (e) {
    (function () {
      var r, n, o, a, i, s;"undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
        return performance.now();
      } : null != e && e.hrtime ? (t.exports = function () {
        return (r() - i) / 1e6;
      }, n = e.hrtime, a = (r = function r() {
        var t;return 1e9 * (t = n())[0] + t[1];
      })(), s = 1e9 * e.uptime(), i = a - s) : Date.now ? (t.exports = function () {
        return Date.now() - o;
      }, o = Date.now()) : (t.exports = function () {
        return new Date().getTime() - o;
      }, o = new Date().getTime());
    }).call(this);
  }).call(this, r(4));
}, function (t, e, r) {
  (function (e) {
    for (var n = r(5), o = "undefined" == typeof window ? e : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o["request" + i], l = o["cancel" + i] || o["cancelRequest" + i], u = 0; !s && u < a.length; u++) {
      s = o[a[u] + "Request" + i], l = o[a[u] + "Cancel" + i] || o[a[u] + "CancelRequest" + i];
    }if (!s || !l) {
      var h = 0,
          c = 0,
          f = [];s = function s(t) {
        if (0 === f.length) {
          var e = n(),
              r = Math.max(0, 1e3 / 60 - (e - h));h = r + e, setTimeout(function () {
            for (var t = f.slice(0), e = f.length = 0; e < t.length; e++) {
              if (!t[e].cancelled) try {
                t[e].callback(h);
              } catch (t) {
                setTimeout(function () {
                  throw t;
                }, 0);
              }
            }
          }, Math.round(r));
        }return f.push({ handle: ++c, callback: t, cancelled: !1 }), c;
      }, l = function l(t) {
        for (var e = 0; e < f.length; e++) {
          f[e].handle === t && (f[e].cancelled = !0);
        }
      };
    }t.exports = function (t) {
      return s.call(o, t);
    }, t.exports.cancel = function () {
      l.apply(o, arguments);
    }, t.exports.polyfill = function (t) {
      t || (t = o), t.requestAnimationFrame = s, t.cancelAnimationFrame = l;
    };
  }).call(this, r(0));
}, function (t, e, r) {
  (function (e) {
    t.exports = e.performance && e.performance.now ? function () {
      return performance.now();
    } : Date.now || function () {
      return +new Date();
    };
  }).call(this, r(0));
}, function (t, e) {
  function r() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
  }function n(t) {
    return "function" == typeof t;
  }function o(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
  }function a(t) {
    return void 0 === t;
  }((t.exports = r).EventEmitter = r).prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (t) {
    if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");return this._maxListeners = t, this;
  }, r.prototype.emit = function (t) {
    var e, r, i, s, l, u;if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
      if ((e = arguments[1]) instanceof Error) throw e;var h = new Error('Uncaught, unspecified "error" event. (' + e + ")");throw h.context = e, h;
    }if (a(r = this._events[t])) return !1;if (n(r)) switch (arguments.length) {case 1:
        r.call(this);break;case 2:
        r.call(this, arguments[1]);break;case 3:
        r.call(this, arguments[1], arguments[2]);break;default:
        s = Array.prototype.slice.call(arguments, 1), r.apply(this, s);} else if (o(r)) for (s = Array.prototype.slice.call(arguments, 1), i = (u = r.slice()).length, l = 0; l < i; l++) {
      u[l].apply(this, s);
    }return !0;
  }, r.prototype.on = r.prototype.addListener = function (t, e) {
    var i;if (!n(e)) throw TypeError("listener must be a function");return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && 0 < i && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this;
  }, r.prototype.once = function (t, e) {
    if (!n(e)) throw TypeError("listener must be a function");var r = !1;function o() {
      this.removeListener(t, o), r || (r = !0, e.apply(this, arguments));
    }return o.listener = e, this.on(t, o), this;
  }, r.prototype.removeListener = function (t, e) {
    var r, a, i, s;if (!n(e)) throw TypeError("listener must be a function");if (!this._events || !this._events[t]) return this;if (i = (r = this._events[t]).length, a = -1, r === e || n(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (o(r)) {
      for (s = i; 0 < s--;) {
        if (r[s] === e || r[s].listener && r[s].listener === e) {
          a = s;break;
        }
      }if (a < 0) return this;1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(a, 1), this._events.removeListener && this.emit("removeListener", t, e);
    }return this;
  }, r.prototype.removeAllListeners = function (t) {
    var e, r;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;if (0 === arguments.length) {
      for (e in this._events) {
        "removeListener" !== e && this.removeAllListeners(e);
      }return this.removeAllListeners("removeListener"), this._events = {}, this;
    }if (n(r = this._events[t])) this.removeListener(t, r);else if (r) for (; r.length;) {
      this.removeListener(t, r[r.length - 1]);
    }return delete this._events[t], this;
  }, r.prototype.listeners = function (t) {
    return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
  }, r.prototype.listenerCount = function (t) {
    if (this._events) {
      var e = this._events[t];if (n(e)) return 1;if (e) return e.length;
    }return 0;
  }, r.listenerCount = function (t, e) {
    return t.listenerCount(e);
  };
}, function (t, e) {
  "function" == typeof Object.create ? t.exports = function (t, e) {
    t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } });
  } : t.exports = function (t, e) {
    t.super_ = e;var r = function r() {};r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
  };
}, function (t, e, r) {
  var n = r(9),
      o = r(8).EventEmitter,
      a = r(7),
      i = r(6);function s(t) {
    if (!(this instanceof s)) return new s(t);this.running = !1, this.last = a(), this._frame = 0, this._tick = this.tick.bind(this), t && this.on("tick", t);
  }n(t.exports = s, o), s.prototype.start = function () {
    if (!this.running) return this.running = !0, this.last = a(), this._frame = i(this._tick), this;
  }, s.prototype.stop = function () {
    return this.running = !1, 0 !== this._frame && i.cancel(this._frame), this._frame = 0, this;
  }, s.prototype.tick = function () {
    this._frame = i(this._tick);var t = a(),
        e = t - this.last;this.emit("tick", e), this.last = t;
  };
}, function (t, e, r) {
  var n = r(1);function o(t, e) {
    return function (r) {
      return e(t(r));
    };
  }function a(t, e) {
    for (var r = [e[t].parent, t], a = n[e[t].parent][t], i = e[t].parent; e[i].parent;) {
      r.unshift(e[i].parent), a = o(n[e[i].parent][i], a), i = e[i].parent;
    }return a.conversion = r, a;
  }t.exports = function (t) {
    for (var e = function (t) {
      var e = function () {
        for (var t = {}, e = Object.keys(n), r = e.length, o = 0; o < r; o++) {
          t[e[o]] = { distance: -1, parent: null };
        }return t;
      }(),
          r = [t];for (e[t].distance = 0; r.length;) {
        for (var o = r.pop(), a = Object.keys(n[o]), i = a.length, s = 0; s < i; s++) {
          var l = a[s],
              u = e[l];-1 === u.distance && (u.distance = e[o].distance + 1, u.parent = o, r.unshift(l));
        }
      }return e;
    }(t), r = {}, o = Object.keys(e), i = o.length, s = 0; s < i; s++) {
      var l = o[s];null !== e[l].parent && (r[l] = a(l, e));
    }return r;
  };
}, function (t, e, r) {
  var n = r(1),
      o = r(11),
      a = {};Object.keys(n).forEach(function (t) {
    a[t] = {}, Object.defineProperty(a[t], "channels", { value: n[t].channels }), Object.defineProperty(a[t], "labels", { value: n[t].labels });var e = o(t);Object.keys(e).forEach(function (r) {
      var n,
          o,
          i,
          s,
          l = e[r];a[t][r] = (o = function o(t) {
        if (null == t) return t;1 < arguments.length && (t = Array.prototype.slice.call(arguments));var e = n(t);if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var r = e.length, o = 0; o < r; o++) {
          e[o] = Math.round(e[o]);
        }return e;
      }, "conversion" in (n = l) && (o.conversion = n.conversion), o), a[t][r].raw = (s = function s(t) {
        return null == t ? t : (1 < arguments.length && (t = Array.prototype.slice.call(arguments)), i(t));
      }, "conversion" in (i = l) && (s.conversion = i.conversion), s);
    });
  }), t.exports = a;
}, function (t, e) {
  t.exports = function (t) {
    return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || 0 <= t.length && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name));
  };
}, function (t, e, r) {
  "use strict";
  var n = r(13),
      o = Array.prototype.concat,
      a = Array.prototype.slice,
      i = t.exports = function (t) {
    for (var e = [], r = 0, i = t.length; r < i; r++) {
      var s = t[r];n(s) ? e = o.call(e, a.call(s)) : e.push(s);
    }return e;
  };i.wrap = function (t) {
    return function () {
      return t(i(arguments));
    };
  };
}, function (t, e, r) {
  var n = r(2),
      o = r(14),
      a = {};for (var i in n) {
    n.hasOwnProperty(i) && (a[n[i]] = i);
  }var s = t.exports = { to: {}, get: {} };function l(t, e, r) {
    return Math.min(Math.max(e, t), r);
  }function u(t) {
    var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
  }s.get = function (t) {
    var e, r;switch (t.substring(0, 3).toLowerCase()) {case "hsl":
        e = s.get.hsl(t), r = "hsl";break;case "hwb":
        e = s.get.hwb(t), r = "hwb";break;default:
        e = s.get.rgb(t), r = "rgb";}return e ? { model: r, value: e } : null;
  }, s.get.rgb = function (t) {
    if (!t) return null;var e,
        r,
        o,
        a = [0, 0, 0, 1];if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
      for (o = e[2], e = e[1], r = 0; r < 3; r++) {
        var i = 2 * r;a[r] = parseInt(e.slice(i, i + 2), 16);
      }o && (a[3] = Math.round(parseInt(o, 16) / 255 * 100) / 100);
    } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
      for (o = (e = e[1])[3], r = 0; r < 3; r++) {
        a[r] = parseInt(e[r] + e[r], 16);
      }o && (a[3] = Math.round(parseInt(o + o, 16) / 255 * 100) / 100);
    } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
      for (r = 0; r < 3; r++) {
        a[r] = parseInt(e[r + 1], 0);
      }e[4] && (a[3] = parseFloat(e[4]));
    } else {
      if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (e = t.match(/(\D+)/)) ? "transparent" === e[1] ? [0, 0, 0, 0] : (a = n[e[1]]) ? (a[3] = 1, a) : null : null;for (r = 0; r < 3; r++) {
        a[r] = Math.round(2.55 * parseFloat(e[r + 1]));
      }e[4] && (a[3] = parseFloat(e[4]));
    }for (r = 0; r < 3; r++) {
      a[r] = l(a[r], 0, 255);
    }return a[3] = l(a[3], 0, 1), a;
  }, s.get.hsl = function (t) {
    if (!t) return null;var e = t.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if (e) {
      var r = parseFloat(e[4]);return [(parseFloat(e[1]) + 360) % 360, l(parseFloat(e[2]), 0, 100), l(parseFloat(e[3]), 0, 100), l(isNaN(r) ? 1 : r, 0, 1)];
    }return null;
  }, s.get.hwb = function (t) {
    if (!t) return null;var e = t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if (e) {
      var r = parseFloat(e[4]);return [(parseFloat(e[1]) % 360 + 360) % 360, l(parseFloat(e[2]), 0, 100), l(parseFloat(e[3]), 0, 100), l(isNaN(r) ? 1 : r, 0, 1)];
    }return null;
  }, s.to.hex = function () {
    var t = o(arguments);return "#" + u(t[0]) + u(t[1]) + u(t[2]) + (t[3] < 1 ? u(Math.round(255 * t[3])) : "");
  }, s.to.rgb = function () {
    var t = o(arguments);return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
  }, s.to.rgb.percent = function () {
    var t = o(arguments),
        e = Math.round(t[0] / 255 * 100),
        r = Math.round(t[1] / 255 * 100),
        n = Math.round(t[2] / 255 * 100);return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + r + "%, " + n + "%)" : "rgba(" + e + "%, " + r + "%, " + n + "%, " + t[3] + ")";
  }, s.to.hsl = function () {
    var t = o(arguments);return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
  }, s.to.hwb = function () {
    var t = o(arguments),
        e = "";return 4 <= t.length && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")";
  }, s.to.keyword = function (t) {
    return a[t.slice(0, 3)];
  };
}, function (t, e, r) {
  "use strict";
  var n = r(15),
      o = r(12),
      a = [].slice,
      i = ["keyword", "gray", "hex"],
      s = {};Object.keys(o).forEach(function (t) {
    s[a.call(o[t].labels).sort().join("")] = t;
  });var l = {};function u(t, e) {
    if (!(this instanceof u)) return new u(t, e);if (e && e in i && (e = null), e && !(e in o)) throw new Error("Unknown model: " + e);var r, h;if (t) {
      if (t instanceof u) this.model = t.model, this.color = t.color.slice(), this.valpha = t.valpha;else if ("string" == typeof t) {
        var c = n.get(t);if (null === c) throw new Error("Unable to parse color from string: " + t);this.model = c.model, h = o[this.model].channels, this.color = c.value.slice(0, h), this.valpha = "number" == typeof c.value[h] ? c.value[h] : 1;
      } else if (t.length) {
        this.model = e || "rgb", h = o[this.model].channels;var p = a.call(t, 0, h);this.color = f(p, h), this.valpha = "number" == typeof t[h] ? t[h] : 1;
      } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [t >> 16 & 255, t >> 8 & 255, 255 & t], this.valpha = 1;else {
        this.valpha = 1;var v = Object.keys(t);"alpha" in t && (v.splice(v.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);var g = v.sort().join("");if (!(g in s)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));this.model = s[g];var d = o[this.model].labels,
            b = [];for (r = 0; r < d.length; r++) {
          b.push(t[d[r]]);
        }this.color = f(b);
      }
    } else this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;if (l[this.model]) for (h = o[this.model].channels, r = 0; r < h; r++) {
      var m = l[this.model][r];m && (this.color[r] = m(this.color[r]));
    }this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
  }function h(t, e, r) {
    return (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
      (l[t] || (l[t] = []))[e] = r;
    }), t = t[0], function (n) {
      var o;return arguments.length ? (r && (n = r(n)), (o = this[t]()).color[e] = n) : (o = this[t]().color[e], r && (o = r(o))), o;
    };
  }function c(t) {
    return function (e) {
      return Math.max(0, Math.min(t, e));
    };
  }function f(t, e) {
    for (var r = 0; r < e; r++) {
      "number" != typeof t[r] && (t[r] = 0);
    }return t;
  }u.prototype = { toString: function toString() {
      return this.string();
    }, toJSON: function toJSON() {
      return this[this.model]();
    }, string: function string(t) {
      var e = this.model in n.to ? this : this.rgb(),
          r = 1 === (e = e.round("number" == typeof t ? t : 1)).valpha ? e.color : e.color.concat(this.valpha);return n.to[e.model](r);
    }, percentString: function percentString(t) {
      var e = this.rgb().round("number" == typeof t ? t : 1),
          r = 1 === e.valpha ? e.color : e.color.concat(this.valpha);return n.to.rgb.percent(r);
    }, array: function array() {
      return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha);
    }, object: function object() {
      for (var t = {}, e = o[this.model].channels, r = o[this.model].labels, n = 0; n < e; n++) {
        t[r[n]] = this.color[n];
      }return 1 !== this.valpha && (t.alpha = this.valpha), t;
    }, unitArray: function unitArray() {
      var t = this.rgb().color;return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), t;
    }, unitObject: function unitObject() {
      var t = this.rgb().object();return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), t;
    }, round: function round(t) {
      return t = Math.max(t || 0, 0), new u(this.color.map((e = t, function (t) {
        return r = e, Number(t.toFixed(r));var r;
      })).concat(this.valpha), this.model);var e;
    }, alpha: function alpha(t) {
      return arguments.length ? new u(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha;
    }, red: h("rgb", 0, c(255)), green: h("rgb", 1, c(255)), blue: h("rgb", 2, c(255)), hue: h(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (t) {
      return (t % 360 + 360) % 360;
    }), saturationl: h("hsl", 1, c(100)), lightness: h("hsl", 2, c(100)), saturationv: h("hsv", 1, c(100)), value: h("hsv", 2, c(100)), chroma: h("hcg", 1, c(100)), gray: h("hcg", 2, c(100)), white: h("hwb", 1, c(100)), wblack: h("hwb", 2, c(100)), cyan: h("cmyk", 0, c(100)), magenta: h("cmyk", 1, c(100)), yellow: h("cmyk", 2, c(100)), black: h("cmyk", 3, c(100)), x: h("xyz", 0, c(100)), y: h("xyz", 1, c(100)), z: h("xyz", 2, c(100)), l: h("lab", 0, c(100)), a: h("lab", 1), b: h("lab", 2), keyword: function keyword(t) {
      return arguments.length ? new u(t) : o[this.model].keyword(this.color);
    }, hex: function hex(t) {
      return arguments.length ? new u(t) : n.to.hex(this.rgb().round().color);
    }, rgbNumber: function rgbNumber() {
      var t = this.rgb().color;return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2];
    }, luminosity: function luminosity() {
      for (var t = this.rgb().color, e = [], r = 0; r < t.length; r++) {
        var n = t[r] / 255;e[r] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
      }return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
    }, contrast: function contrast(t) {
      var e = this.luminosity(),
          r = t.luminosity();return r < e ? (e + .05) / (r + .05) : (r + .05) / (e + .05);
    }, level: function level(t) {
      var e = this.contrast(t);return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : "";
    }, isDark: function isDark() {
      var t = this.rgb().color;return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    }, isLight: function isLight() {
      return !this.isDark();
    }, negate: function negate() {
      for (var t = this.rgb(), e = 0; e < 3; e++) {
        t.color[e] = 255 - t.color[e];
      }return t;
    }, lighten: function lighten(t) {
      var e = this.hsl();return e.color[2] += e.color[2] * t, e;
    }, darken: function darken(t) {
      var e = this.hsl();return e.color[2] -= e.color[2] * t, e;
    }, saturate: function saturate(t) {
      var e = this.hsl();return e.color[1] += e.color[1] * t, e;
    }, desaturate: function desaturate(t) {
      var e = this.hsl();return e.color[1] -= e.color[1] * t, e;
    }, whiten: function whiten(t) {
      var e = this.hwb();return e.color[1] += e.color[1] * t, e;
    }, blacken: function blacken(t) {
      var e = this.hwb();return e.color[2] += e.color[2] * t, e;
    }, grayscale: function grayscale() {
      var t = this.rgb().color,
          e = .3 * t[0] + .59 * t[1] + .11 * t[2];return u.rgb(e, e, e);
    }, fade: function fade(t) {
      return this.alpha(this.valpha - this.valpha * t);
    }, opaquer: function opaquer(t) {
      return this.alpha(this.valpha + this.valpha * t);
    }, rotate: function rotate(t) {
      var e = this.hsl(),
          r = e.color[0];return r = (r = (r + t) % 360) < 0 ? 360 + r : r, e.color[0] = r, e;
    }, mix: function mix(t, e) {
      var r = t.rgb(),
          n = this.rgb(),
          o = void 0 === e ? .5 : e,
          a = 2 * o - 1,
          i = r.alpha() - n.alpha(),
          s = ((a * i == -1 ? a : (a + i) / (1 + a * i)) + 1) / 2,
          l = 1 - s;return u.rgb(s * r.red() + l * n.red(), s * r.green() + l * n.green(), s * r.blue() + l * n.blue(), r.alpha() * o + n.alpha() * (1 - o));
    } }, Object.keys(o).forEach(function (t) {
    if (-1 === i.indexOf(t)) {
      var e = o[t].channels;u.prototype[t] = function () {
        if (this.model === t) return new u(this);if (arguments.length) return new u(arguments, t);var r,
            n = "number" == typeof arguments[e] ? e : this.valpha;return new u((r = o[this.model][t].raw(this.color), Array.isArray(r) ? r : [r]).concat(n), t);
      }, u[t] = function (r) {
        return "number" == typeof r && (r = f(a.call(arguments), e)), new u(r, t);
      };
    }
  }), t.exports = u;
}, function (t, e, r) {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var t = r(16);new Date().getTime();var e = r(10),
        n = r(3),
        o = { stopPosition: 0, colorDurationSec: 1, colorGapDelay: 10, turbDistance: 50, turbFrequency: 1, turbSpeed: 20 };function a(t, e) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", t);for (var n in e) {
        e.hasOwnProperty(n) && r.setAttributeNS(null, n, e[n]);
      }return r;
    }var i = document.getElementById("neurons"),
        s = i.getElementsByTagName("path"),
        l = [],
        u = [];console.log(s.length);for (var h = [], c = [], f = new t("#191919"), p = new t("#373737"), v = 0; v < s.length; v++) {
      var g = s[v].getAttributeNS(null, "fill") || s[v].getAttributeNS(null, "stroke") || null;if (s[v].getAttributeNS(null, "d"), s[v].setAttributeNS(null, "transform", ""), l.push(100), u.push(0), g) {
        g = (g = g.replace("url(#", "")).replace(")", "");var d = document.getElementById(g) || null;if (h.push(d), c.push(.002 * Math.random()), d) {
          for (; d.firstChild;) {
            d.removeChild(d.firstChild);
          }d.appendChild(a("stop", { offset: "-0.4", "stop-color": "#373737" })), d.appendChild(a("stop", { offset: "1", "stop-color": "#373737", id: g + "_stop0" })), d.appendChild(a("stop", { offset: "1.05", "stop-color": "#855AE2", id: g + "_stop1" })), d.appendChild(a("stop", { offset: "1.4", "stop-color": "#191919", id: g + "_stop2" })), d.appendChild(a("stop", { offset: "1.4", "stop-color": "#191919" }));
        }
      } else h.push(null);
    }var b = i.getElementsByTagName("filter");for (v = 0; v < b.length; v++) {
      for (d = b[v]; d.firstChild;) {
        d.removeChild(d.firstChild);
      }
    }function m(t, e, r, n) {
      var a = 0,
          i = null;if (i = document.getElementById(e)) return a = parseFloat(i.getAttributeNS(null, r) || "0"), (a -= n) < -2 && (a = 1.5, _ = Math.floor(Math.random() * (h.length - .5)), k = o.colorDurationSec + (Math.random() - .5), M = !(w = !0)), i.setAttributeNS(null, r, a), a;
    }function y(t, e, r) {
      var n = null;if (n = document.getElementById(t)) return n.setAttributeNS(null, e, r), 0;
    }var w = !1,
        M = !1,
        k = o.colorDurationSec;function x(t, e, r, n) {
      var o,
          a = null;if (a = document.getElementById(e)) {
        if (o = parseFloat(a.getAttributeNS(null, r) || "0"), -1 < t) {
          !M && o - n < .5 && (M = !0, u[t] = 20);var i = (h = 100, v = (c = l[t]) + .06 * (p = (f = u[t]) + .06 * (-35 * (c - h) + -.8 * f)), Math.abs(p) < .01 && Math.abs(v - h) < .01 ? [h, 0] : [v, p]);l[t] = i[0], u[t] = i[1], s[t].setAttributeNS(null, "transform", "scale(1 " + .01 * l[t] + ")");
        }var h, c, f, p, v;return o;
      }
    }var _ = Math.floor(Math.random() * (h.length - .5));e(function (e) {
      e;for (var r = e / (1e3 * k), o = 0, a = "", i = _; i < h.length; i++) {
        if (h[i]) {
          m(0, (a = h[i].getAttribute("id")) + "_stop0", "offset", r + c[i]), o = m(0, a + "_stop1", "offset", r + c[i]), o = m(0, a + "_stop2", "offset", r + c[i]), y(a + "_stop2", "stop-color", new t({ h: n(p.hue(), f.hue(), o + .5), s: n(p.saturationl(), f.saturationl(), o + .5), l: n(p.lightness(), f.lightness(), o + .5), alpha: 1 }).hex());break;
        }
      }if (w) for (w = !1, i = 0; i < h.length; i++) {
        h[i] && (y((a = h[i].getAttribute("id")) + "_stop0", "offset", 1), y(a + "_stop1", "offset", 1.05), y(a + "_stop2", "offset", 1.4));
      }for (i = 0; i < h.length; i++) {
        x(i, (a = h[i].getAttribute("id")) + "_stop1", "offset", r + c[i]);
      }
    }).start();
  });
}]);