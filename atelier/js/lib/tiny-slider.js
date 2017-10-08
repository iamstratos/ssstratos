var tns = function() {
    function t() {
        for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
            if (null !== (t = arguments[a]))
                for (e in t) n = t[e], i !== n && void 0 !== n && (i[e] = n);
        return i
    }

    function e(t) {
        return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
    }

    function n(t, e, n) {
        return n && localStorage.setItem(t, e), e
    }

    function i() {
        var t = window.tnsId;
        return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId
    }

    function a(t) {
        var e = document.createElement("style");
        return t && e.setAttribute("media", t), document.querySelector("head").appendChild(e), e.sheet ? e.sheet : e.styleSheet
    }

    function r(t) {
        return ("insertRule" in t ? t.cssRules : t.rules).length
    }

    function o(t, e) {
        return Math.atan2(t, e) * (180 / Math.PI)
    }

    function s(t, e) {
        var n = !1,
            i = Math.abs(90 - Math.abs(t));
        return i >= 90 - e ? n = "horizontal" : i <= e && (n = "vertical"), n
    }

    function l(t, e) {
        return t.hasAttribute(e)
    }

    function c(t, e) {
        return t.getAttribute(e)
    }

    function u(t) {
        return void 0 !== t.item
    }

    function d(t, e) {
        if (t = u(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--;)
                for (var i in e) t[n].setAttribute(i, e[i])
    }

    function f(t, e) {
        t = u(t) || t instanceof Array ? t : [t], e = e instanceof Array ? e : [e];
        for (var n = e.length, i = t.length; i--;)
            for (var a = n; a--;) t[i].removeAttribute(e[a])
    }

    function v(t) {
        l(t, "hidden") || d(t, {
            hidden: ""
        })
    }

    function h(t) {
        l(t, "hidden") && f(t, "hidden")
    }

    function p(t) {
        return "boolean" == typeof t.complete ? t.complete : "number" == typeof t.naturalWidth ? 0 !== t.naturalWidth : void 0
    }

    function m(t) {
        for (var e = document.createElement("fakeelement"), n = (t.length, 0); n < t.length; n++) {
            var i = t[n];
            if (void 0 !== e.style[i]) return i
        }
        return !1
    }

    function y(t, e) {
        var n = !1;
        return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
    }

    function g(t, e) {
        for (var n in e) {
            var i = ("touchstart" === n || "touchmove" === n) && L;
            t.addEventListener(n, e[n], i)
        }
    }

    function b(t, e) {
        for (var n in e) {
            var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && L;
            t.removeEventListener(n, e[n], i)
        }
    }

    function x() {
        return {
            topics: {},
            on: function(t, e) {
                this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
            },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break
                        }
            },
            emit: function(t, e) {
                this.topics[t] && this.topics[t].forEach(function(t) {
                    t(e)
                })
            }
        }
    }

    function T(t, e, n, i, a, r, o) {
        function s() {
            r -= l, u += d, t.style[e] = n + u + c + i, r > 0 ? setTimeout(s, l) : o()
        }
        var l = Math.min(r, 10),
            c = a.indexOf("%") >= 0 ? "%" : "px",
            a = a.replace(c, ""),
            u = Number(t.style[e].replace(n, "").replace(i, "").replace(c, "")),
            d = (a - u) / r * l;
        setTimeout(s, l)
    }
    Object.keys || (Object.keys = function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }),
    function() {
        "use strict";
        "remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }(),
    function() {
        "use strict";
        var t, e, n, i = window,
            a = document,
            r = Object,
            o = "length",
            s = "item contains add remove toggle toString toLocaleString".split(" "),
            l = s[2],
            c = s[3],
            u = s[4],
            d = "prototype",
            f = "defineProperty" in r || "__defineGetter__" in r[d] || null,
            v = function(t, e, n, i) {
                r.defineProperty ? r.defineProperty(t, e, {
                    configurable: !1 === f || !! i,
                    get: n
                }) : t.__defineGetter__(e, n)
            }, h = function(t, e) {
                var n = this,
                    i = [],
                    a = {}, d = 0,
                    f = 0,
                    h = function() {
                        if (d >= f)
                            for (; f < d; ++f)! function(t) {
                                v(n, t, function() {
                                    return p(), i[t]
                                }, !1)
                            }(f)
                    }, p = function() {
                        var n, r, s = arguments,
                            l = /\s+/;
                        if (s[o])
                            for (r = 0; r < s[o]; ++r)
                                if (l.test(s[r])) throw n = new SyntaxError('String "' + s[r] + '" contains an invalid character'), n.code = 5, n.name = "InvalidCharacterError", n;
                        for (i = ("" + t[e]).replace(/^\s+|\s+$/g, "").split(l), "" === i[0] && (i = []), a = {}, r = 0; r < i[o]; ++r) a[i[r]] = !0;
                        d = i[o], h()
                    };
                return p(), v(n, o, function() {
                    return p(), d
                }), n[s[6]] = n[s[5]] = function() {
                    return p(), i.join(" ")
                }, n.item = function(t) {
                    return p(), i[t]
                }, n.contains = function(t) {
                    return p(), !! a[t]
                }, n[l] = function() {
                    p.apply(n, r = arguments);
                    for (var r, s, l = 0, c = r[o]; l < c; ++l) s = r[l], a[s] || (i.push(s), a[s] = !0);
                    d !== i[o] && (d = i[o] >>> 0, t[e] = i.join(" "), h())
                }, n[c] = function() {
                    p.apply(n, r = arguments);
                    for (var r, s = {}, l = 0, c = []; l < r[o]; ++l) s[r[l]] = !0, delete a[r[l]];
                    for (l = 0; l < i[o]; ++l) s[i[l]] || c.push(i[l]);
                    i = c, d = c[o] >>> 0, t[e] = i.join(" "), h()
                }, n[u] = function(t, e) {
                    return p.apply(n, [t]), void 0 !== e ? e ? (n[l](t), !0) : (n[c](t), !1) : a[t] ? (n[c](t), !1) : (n[l](t), !0)
                },
                function(t, e) {
                    if (e)
                        for (var n = 0; n < 7; ++n) e(t, s[n], {
                            enumerable: !1
                        })
                }(n, r.defineProperty), n
            }, p = function(t, e, n) {
                v(t[d], e, function() {
                    var t, i = this,
                        r = "__defineGetter__defineProperty" + e;
                    if (i[r]) return t;
                    if (i[r] = !0, !1 === f) {
                        for (var s, l = p.mirror = p.mirror || a.createElement("div"), c = l.childNodes, u = c[o], d = 0; d < u; ++d)
                            if (c[d]._R === i) {
                                s = c[d];
                                break
                            }
                        s || (s = l.appendChild(a.createElement("div"))), t = h.call(s, i, n)
                    } else t = new h(i, n);
                    return v(i, e, function() {
                        return t
                    }), delete i[r], t
                }, !0)
            };
        if (i.DOMTokenList) t = a.createElement("div").classList, d = i.DOMTokenList[d], t[l].apply(t, s), 2 > t[o] && (e = d[l], n = d[c], d[l] = function() {
            for (var t = 0, n = arguments; t < n[o]; ++t) e.call(this, n[t])
        }, d[c] = function() {
            for (var t = 0, e = arguments; t < e[o]; ++t) n.call(this, e[t])
        }), t[u]("List", !1) && (d[u] = function(t, e) {
            var n = this;
            return n[(e = void 0 === e ? !n.contains(t) : e) ? l : c](t), !! e
        });
        else {
            if (f) try {
                v({}, "support")
            } catch (t) {
                f = !1
            }
            h.polyfill = !0, i.DOMTokenList = h, p(i.Element, "classList", "className"), p(i.HTMLLinkElement, "relList", "rel"), p(i.HTMLAnchorElement, "relList", "rel"), p(i.HTMLAreaElement, "relList", "rel")
        }
    }();
    var E = function() {
        var t = document.styleSheets[0];
        return "insertRule" in t ? function(t, e, n, i) {
            t.insertRule(e + "{" + n + "}", i)
        } : "addRule" in t ? function(t, e, n, i) {
            t.addRule(e, n, i)
        } : void 0
    }(),
        C = !1;
    try {
        var w = Object.defineProperty({}, "passive", {
            get: function() {
                C = !0
            }
        });
        window.addEventListener("test", null, w)
    } catch (t) {}
    var L = !! C && {
        passive: !0
    }, D = navigator.userAgent,
        O = !0,
        P = localStorage;
    try {
        P.tnsApp ? P.tnsApp !== D && (P.tnsApp = D, ["tC", "tSP", "tMQ", "tTf", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
            P.removeItem(t)
        })) : P.tnsApp = D
    } catch (t) {
        O = !1
    }
    var A = document,
        M = window,
        N = {
            ENTER: 13,
            SPACE: 32,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        }, k = e(P.tC) || n("tC", function() {
            var t = document,
                e = t.body,
                n = t.createElement("div"),
                i = !1;
            e.appendChild(n);
            try {
                for (var a, r = ["calc(10px)", "-moz-calc(10px)", "-webkit-calc(10px)"], o = 0; o < 3; o++)
                    if (a = r[o], n.style.width = a, 10 === n.offsetWidth) {
                        i = a.replace("(10px)", "");
                        break
                    }
            } catch (t) {}
            return e.removeChild(n), i
        }(), O),
        I = e(P.tSP) || n("tSP", function() {
            var t, e = document,
                n = e.body,
                i = e.createElement("div"),
                a = e.createElement("div");
            i.style.cssText = "width: 10px", a.style.cssText = "float: left; width: 5.5px; height: 10px;", t = a.cloneNode(!0), i.appendChild(a), i.appendChild(t), n.appendChild(i);
            var r = a.offsetTop !== t.offsetTop;
            return n.removeChild(i), r
        }(), O),
        S = e(P.tMQ) || n("tMQ", function() {
            var t = document,
                e = t.body,
                n = t.createElement("div");
            n.className = "tns-mq-test", e.appendChild(n);
            var i = window.getComputedStyle ? window.getComputedStyle(n).position : n.currentStyle.position;
            return e.removeChild(n), "absolute" === i
        }(), O),
        W = e(P.tTf) || n("tTf", m(["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"]), O),
        H = e(P.tTDu) || n("tTDu", m(["transitionDuration", "WebkitTransitionDuration", "MozTransitionDuration", "OTransitionDuration"]), O),
        R = e(P.tTDe) || n("tTDe", m(["transitionDelay", "WebkitTransitionDelay", "MozTransitionDelay", "OTransitionDelay"]), O),
        B = e(P.tADu) || n("tADu", m(["animationDuration", "WebkitAnimationDuration", "MozAnimationDuration", "OAnimationDuration"]), O),
        z = e(P.tADe) || n("tADe", m(["animationDelay", "WebkitAnimationDelay", "MozAnimationDelay", "OAnimationDelay"]), O),
        j = e(P.tTE) || n("tTE", y(H, "Transition"), O),
        G = e(P.tAE) || n("tAE", y(B, "Animation"), O);
    return S || (I = !1),
    function(e) {
        function n(t) {
            var n = e[t];
            return !n && ee && te.indexOf(t) >= 0 && ee.forEach(function(e) {
                Zt[e][t] && (n = !0)
            }), n
        }

        function u(t, n) {
            n = n ? n : $t;
            var i;
            if ("items" === t && u("fixedWidth")) i = Math.floor(n / (u("fixedWidth") + u("gutter")));
            else if ("slideBy" !== t || zt)
                if ("edgePadding" !== t || zt)
                    if ("autoHeight" !== t || zt && "outer" !== ue) {
                        if (i = e[t], ee && te.indexOf(t) >= 0)
                            for (var a = 0, r = ee.length; a < r; a++) {
                                var o = ee[a];
                                if (!(n >= o)) break;
                                t in Zt[o] && (i = Zt[o][t])
                            }
                    } else i = !0;
                    else i = !1;
                    else i = "page";
            return "items" === t && (i = Math.max(1, Math.min(Jt, i))), "slideBy" === t && "page" === i && (i = u("items")), i
        }

        function m(t) {
            return k ? k + "(" + 100 * t + "% / " + Ce + ")" : 100 * t / Ce + "%"
        }

        function y(t, e, n) {
            var i = "";
            if (t) {
                var a = t;
                e && (a += e), i = n ? "margin: 0px " + ($t % (n + e) + e) / 2 + "px" : Ut ? "margin: 0 " + t + "px 0 " + a + "px;" : "padding: " + a + "px 0 " + t + "px 0;"
            } else if (e && !n) {
                var r = Ut ? "right" : "bottom";
                i = "margin-" + r + ": -" + e + "px;"
            }
            return i
        }

        function C(t, e, n) {
            n = Math.min(Jt, n);
            return t ? (t + e) * Ce + "px" : k ? k + "(" + 100 * Ce + "% / " + n + ")" : 100 * Ce / n + "%"
        }

        function w(t, e, n) {
            n = Math.min(Jt, n);
            var i = "";
            if (Ut) {
                if (i = "width:", t) i += t + e + "px";
                else {
                    var a = zt ? Ce : Math.min(Jt, n);
                    i += k ? k + "(100% / " + a + ")" : 100 / a + "%"
                }
                i += qe + ";"
            }
            return i
        }

        function L(t) {
            var e = "";
            if (t !== !1) {
                e = (Ut ? "padding-" : "margin-") + (Ut ? "right" : "bottom") + ": " + t + "px;"
            }
            return e
        }

        function D(t) {
            t = t || M.event, clearTimeout(oe), oe = setTimeout(function() {
                $t !== Vt.clientWidth && (O(), "outer" === ue && He.emit("outerResized", St(t)))
            }, 100)
        }

        function O() {
            var t = ne,
                n = Ae,
                i = le,
                a = _e;
            if ($t = Vt.clientWidth, Ft = Xt.clientWidth, ee && (ne = P()), t !== ne || ve) {
                var o = he,
                    s = ge,
                    l = ve,
                    c = fe,
                    d = de,
                    f = ne > 0 ? Zt[ee[ne - 1]] : e;
                if (le = u("items"), ce = u("slideBy"), _e = Jt <= le, le !== i && (Ie = Ce - le - Ne, Bn()), _e !== a && _e && (Ae = zt ? Ee : 0), t !== ne && (pe = f.speed || u("speed"), fe = f.edgePadding || u("edgePadding"), de = f.gutter || u("gutter"), ve = f.fixedWidth || u("fixedWidth"), ve !== l && rt(), (ge = u("autoHeight")) !== s && (ge || (Xt.style.height = ""))), he = !_e && (f.arrowKeys || u("arrowKeys")), he !== o && (he ? g(A, Ke) : b(A, Ke)), Je) {
                    var p = sn,
                        m = ln;
                    sn = !_e && (f.controls || u("controls")), ln = f.controlsText || u("controlsText"), sn !== p && (sn ? h(cn) : v(cn)), ln !== m && (nn.innerHTML = ln[0], an.innerHTML = ln[1])
                }
                if ($e) {
                    var x = dn;
                    dn = !_e && (f.nav || u("nav")), dn !== x && (dn ? (h(fn), It()) : v(fn))
                }
                if (tn) {
                    var T = In;
                    In = !_e && (f.touch || u("touch")), In !== T && zt && (In ? g(Kt, Ye) : b(Kt, Ye))
                }
                if (en) {
                    var D = Hn;
                    Hn = !_e && (f.mouseDrag || u("mouseDrag")), Hn !== D && zt && (Hn ? g(Kt, Qe) : b(Kt, Qe))
                }
                if (Ze) {
                    var O = bn,
                        M = Cn,
                        N = Pn,
                        k = En;
                    if (_e ? bn = Cn = Pn = !1 : (bn = f.autoplay || u("autoplay"), bn ? (Cn = f.autoplayHoverPause || u("autoplayHoverPause"), Pn = f.autoplayResetOnVisibility || u("autoplayResetOnVisibility")) : Cn = Pn = !1), En = f.autoplayText || u("autoplayText"), xn = f.autoplayTimeout || u("autoplayTimeout"), bn !== O && (bn ? (wn && h(wn), Ln || ht()) : (wn && v(wn), Ln && pt())), Cn !== M && (Cn ? g(Kt, Ve) : b(Kt, Ve)), Pn !== N && (Pn ? g(A, Xe) : b(A, Xe)), wn && En !== k) {
                        var I = bn ? 1 : 0,
                            W = wn.innerHTML,
                            H = W.length - k[I].length;
                        W.substring(H) === k[I] && (wn.innerHTML = W.substring(0, H) + En[I])
                    }
                }
                if (!S) {
                    fe === c && de === d || (Xt.style.cssText = y(fe, de, ve)), zt && Ut && (ve !== l || de !== d || le !== i) && (Kt.style.width = C(ve, de, le));
                    var R = w(ve, de, le);
                    de !== d && (R += L(de)), R.length > 0 && (be.removeRule(r(be) - 1), E(be, "#" + Ge + " > .tns-item", R, r(be))), ve || Ae !== n || st(0)
                }
                Ae !== n && (He.emit("indexChanged", St()), st(0), Me = Ae), le !== i && (U(), J(), nt(), It(), $(), navigator.msMaxTouchPoints && Q())
            }
            Ut || (Y(), Nt(), rt()), _(), V()
        }

        function P() {
            return ne = 0, ee.forEach(function(t, e) {
                $t >= t && (ne = e + ie)
            }), ne
        }

        function _() {
            if (ve && Ee)
                if (_e) {
                    if (!Qt[0].classList.contains("tns-transparent")) {
                        fe && (Xt.style.margin = "0");
                        for (var t = Ee; t--;) Qt[t].classList.add("tns-transparent"), Qt[Ce - t - 1].classList.add("tns-transparent")
                    }
                } else if (fe && ($t <= ve + de ? "0px" !== Xt.style.margin && (Xt.style.margin = "0") : Xt.style.cssText = y(fe, de, ve)), Qt[0].classList.contains("tns-transparent"))
                for (var t = Ee; t--;) Qt[t].classList.remove("tns-transparent"), Qt[Ce - t - 1].classList.remove("tns-transparent")
        }

        function q() {
            Ln && (pt(), Dn = !0)
        }

        function F() {
            !Ln && Dn && (ht(), Dn = !1)
        }

        function U() {
            if (xe) {
                var t = Ae,
                    e = Ae + le;
                for (fe && (t -= 1, e += 1); t < e; t++)[].forEach.call(Qt[t].querySelectorAll(".tns-lazy-img"), function(t) {
                    var e = {};
                    e[j] = function(t) {
                        t.stopPropagation()
                    }, g(t, e), t.classList.contains("loaded") || (t.src = c(t, "data-src"), t.classList.add("loaded"))
                })
            }
        }

        function V() {
            if (ge) {
                for (var t = [], e = Ae; e < Ae + le; e++)[].forEach.call(Qt[e].querySelectorAll("img"), function(e) {
                    t.push(e)
                });
                0 === t.length ? K() : X(t)
            }
        }

        function X(t) {
            t.forEach(function(e, n) {
                p(e) && t.splice(n, 1)
            }), 0 === t.length ? K() : setTimeout(function() {
                X(t)
            }, 16)
        }

        function K() {
            for (var t, e = [], n = Ae; n < Ae + le; n++) e.push(Qt[n].offsetHeight);
            t = Math.max.apply(null, e), Xt.style.height !== t && (H && it(pe), Xt.style.height = t + "px")
        }

        function Y() {
            re = [0];
            for (var t, e = Qt[0].getBoundingClientRect().top, n = 1; n < Ce; n++) t = Qt[n].getBoundingClientRect().top, re.push(t - e)
        }

        function Q() {
            Vt.style.msScrollSnapPointsX = "snapInterval(0%, " + 100 / le + "%)"
        }

        function J() {
            for (var t = Ce; t--;) {
                var e = Qt[t];
                t >= Ae && t < Ae + le ? l(e, "tabindex") && (d(e, {
                    "aria-hidden": "false"
                }), f(e, ["tabindex"])) : l(e, "tabindex") || d(e, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                })
            }
        }

        function $() {
            if (dn && (mn = pn !== -1 ? pn : (Ae - Ne) % Jt, pn = -1, mn !== yn)) {
                var t = un[yn],
                    e = un[mn];
                d(t, {
                    tabindex: "-1",
                    "aria-selected": "false"
                }), d(e, {
                    tabindex: "0",
                    "aria-selected": "true"
                })
            }
        }

        function Z(t) {
            return "button" === t.nodeName.toLowerCase()
        }

        function tt(t) {
            return "true" === t.getAttribute("aria-disabled")
        }

        function et(t, e, n) {
            t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
        }

        function nt() {
            if (sn && !ye) {
                var t = rn ? nn.disabled : tt(nn),
                    e = on ? an.disabled : tt(an),
                    n = Ae === ke,
                    i = !me && Ae === Ie;
                n && !t && et(rn, nn, !0), !n && t && et(rn, nn, !1), i && !e && et(on, an, !0), !i && e && et(on, an, !1)
            }
        }

        function it(t, e) {
            t = t ? t / 1e3 + "s" : "", e = e || Kt, e.style[H] = t, zt || (e.style[B] = t), Ut || (Xt.style[H] = t)
        }

        function at() {
            var t;
            if (Ut)
                if (ve) t = -(ve + de) * Ae + "px";
                else {
                    var e = W ? Ce : le;
                    t = 100 * -Ae / e + "%"
                } else t = -re[Ae] + "px";
            return t
        }

        function rt(t) {
            t || (t = at()), Kt.style[De] = Oe + t + Pe
        }

        function ot(t, e, n, i) {
            for (var a = t, r = t + le; a < r; a++) {
                var o = Qt[a];
                i || (o.style.left = 100 * (a - Ae) / le + "%"), H && it(pe, o), _t && R && (o.style[R] = o.style[z] = _t * (a - t) / 1e3 + "s"), o.classList.remove(e), o.classList.add(n), i && Te.push(o)
            }
        }

        function st(t, e) {
            void 0 === t && (t = pe), H && it(t), zn(t, e), J(), dn && vn.indexOf(Ae % Jt) < 0 && It(), $(), nt(), U()
        }

        function lt() {
            Le && Bn(), Ae !== Me && (He.emit("indexChanged", St()), He.emit("transitionStart", St()), Se = !0, st())
        }

        function ct(t) {
            function e(t) {
                return t.toLowerCase().replace(/-/g, "")
            }
            if (He.emit("transitionEnd", St(t)), !zt && Te.length > 0)
                for (var n = 0; n < le; n++) {
                    var i = Te[n];
                    i.style.left = "", H && it(0, i), _t && R && (i.style[R] = i.style[z] = ""), i.classList.remove(Gt), i.classList.add(qt)
                }
            if (!t || !zt && t.target.parentNode === Kt || t.target === Kt && e(t.propertyName) === e(De)) {
                if (!Le) {
                    var a = Ae;
                    Bn(), Ae !== a && (H && it(0), rt(), He.emit("indexChanged", St()))
                }
                V(), "inner" === ue && He.emit("innerLoaded", St()), Se = !1, yn = mn, Me = Ae
            }
        }

        function ut(t) {
            if (!_e)
                if ("prev" === t) dt(null, -1);
                else if ("next" === t) dt(null, 1);
            else if (!Se) {
                var e = Ae % Jt,
                    i = 0;
                if (!ye && n("edgePadding") && e--, e < 0 && (e += Jt), "first" === t) i = -e;
                else if ("last" === t) i = Jt - le - e;
                else if ("number" != typeof t && (t = parseInt(t)), !isNaN(t)) {
                    var a = t % Jt;
                    a < 0 && (a += Jt), !ye && fe && (a += 1), i = a - e
                }
                Ae += i, Ae % Jt != Me % Jt && lt()
            }
        }

        function dt(t, e) {
            if (!Se) {
                var n;
                if (!e) {
                    t = t || M.event;
                    for (var i = t.target || t.srcElement; i !== cn && [nn, an].indexOf(i) < 0;) i = i.parentNode
                }
                i && i === nn || e === -1 ? Ae > ke && (Ae -= ce, n = !0) : (i && i === an || 1 === e) && (me && Ae === Ie ? ut(0) : Ae < Ie && (Ae += ce, n = !0)), n && lt()
            }
        }

        function ft(t) {
            if (!Se) {
                t = t || M.event;
                for (var e, n = t.target || t.srcElement; n !== fn && !l(n, "data-nav");) n = n.parentNode;
                l(n, "data-nav") && (e = pn = [].indexOf.call(un, n), ut(e))
            }
        }

        function vt(t, e) {
            d(wn, {
                "data-action": t
            }), wn.innerHTML = On[0] + t + On[1] + e
        }

        function ht() {
            yt(), wn && vt("stop", En[1]), Ln = !0
        }

        function pt() {
            mt(), wn && vt("start", En[0]), Ln = !1
        }

        function mt() {
            Ln = "paused", clearInterval(gn)
        }

        function yt() {
            Ln !== !0 && (clearInterval(gn), gn = setInterval(function() {
                dt(null, Tn)
            }, xn))
        }

        function gt() {
            Ln ? pt() : ht()
        }

        function bt() {
            An != A.hidden && Ln !== !1 && (A.hidden ? mt() : yt()), An = A.hidden
        }

        function xt(t) {
            switch (t = t || M.event, t.keyCode) {
                case N.LEFT:
                    dt(null, -1);
                    break;
                case N.RIGHT:
                    dt(null, 1)
            }
        }

        function Tt(t) {
            switch (t = t || M.event, t.keyCode) {
                case N.LEFT:
                case N.UP:
                case N.PAGEUP:
                    nn.disabled || dt(null, -1);
                    break;
                case N.RIGHT:
                case N.DOWN:
                case N.PAGEDOWN:
                    an.disabled || dt(null, 1);
                    break;
                case N.HOME:
                    ut(0);
                    break;
                case N.END:
                    ut(Jt - 1)
            }
        }

        function Et(t) {
            t.focus()
        }

        function Ct(t) {
            function n(t) {
                return e.navContainer ? t : vn[t]
            }
            var i = A.activeElement;
            if (l(i, "data-nav")) {
                t = t || M.event;
                var a = t.keyCode,
                    r = [].indexOf.call(un, i),
                    o = vn.length,
                    s = vn.indexOf(r);
                switch (e.navContainer && (o = Jt, s = r), a) {
                    case N.LEFT:
                    case N.PAGEUP:
                        s > 0 && Et(un[n(s - 1)]);
                        break;
                    case N.UP:
                    case N.HOME:
                        s > 0 && Et(un[n(0)]);
                        break;
                    case N.RIGHT:
                    case N.PAGEDOWN:
                        s < o - 1 && Et(un[n(s + 1)]);
                        break;
                    case N.DOWN:
                    case N.END:
                        s < o - 1 && Et(un[n(o - 1)]);
                        break;
                    case N.ENTER:
                    case N.SPACE:
                        pn = r, ut(r)
                }
            }
        }

        function wt() {
            st(0, Kt.scrollLeft()), Me = Ae
        }

        function Lt(t) {
            return t.target || t.srcElement
        }

        function Dt(t) {
            return t.type.indexOf("touch") >= 0
        }

        function Ot(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function Pt(t) {
            t = t || M.event;
            var e;
            Dt(t) ? (e = t.changedTouches[0], He.emit("touchStart", St(t))) : (e = t, Ot(t), He.emit("dragStart", St(t))), Sn = parseInt(e.clientX), Wn = parseInt(e.clientY), Mn = parseFloat(Kt.style[De].replace(Oe, "").replace(Pe, ""))
        }

        function At(t) {
            if (t = t || M.event, null !== Sn) {
                var n;
                if (Dt(t) ? n = t.changedTouches[0] : (n = t, Ot(t)), Nn = parseInt(n.clientX) - Sn, kn = parseInt(n.clientY) - Wn, s(o(kn, Nn), 15) === e.axis && Nn) {
                    Dt(t) ? He.emit("touchMove", St(t)) : (Rn || (Rn = !0), He.emit("dragMove", St(t))), se || (se = !0);
                    var i = Mn;
                    if (Ut)
                        if (ve) i += Nn, i += "px";
                        else {
                            var a = W ? Nn * le * 100 / (Ft * Ce) : 100 * Nn / Ft;
                            i += a, i += "%"
                        } else i += kn, i += "px";
                    W && it(0), Kt.style[De] = Oe + i + Pe
                }
            }
        }

        function Mt(t) {
            if (t = t || M.event, se) {
                se = !1;
                var e;
                if (Dt(t) ? (e = t.changedTouches[0], He.emit("touchEnd", St(t))) : (e = t, He.emit("dragEnd", St(t))), Nn = parseInt(e.clientX) - Sn, kn = parseInt(e.clientY) - Wn, Sn = Wn = null, Ut) {
                    var n = -Nn * le / Ft;
                    n = Nn > 0 ? Math.floor(n) : Math.ceil(n), Ae += n
                } else {
                    var i = -(Mn + kn);
                    if (i <= 0) Ae = ke;
                    else if (i >= re[re.length - 1]) Ae = Ie;
                    else {
                        var a = 0;
                        do {
                            a++, Ae = kn < 0 ? a + 1 : a
                        } while (a < Ce && i >= re[a + 1])
                    }
                } if (lt(), Rn) {
                    Rn = !1;
                    var r = Lt(t);
                    g(r, {
                        click: function t(e) {
                            Ot(e), b(r, {
                                click: t
                            })
                        }
                    })
                }
            }
        }

        function Nt() {
            Xt.style.height = re[Ae + le] - re[Ae] + "px"
        }

        function kt() {
            vn = [];
            for (var t = !ye && fe ? Ae - 1 : Ae, e = t % Jt % le; e < Jt;)!ye && e + le > Jt && (e = Jt - le), vn.push(e), e += le;
            (ye && vn.length * le < Jt || !ye && vn[0] > 0) && vn.unshift(0)
        }

        function It() {
            dn && !e.navContainer && (kt(), vn !== hn && (hn.length > 0 && hn.forEach(function(t) {
                d(un[t], {
                    hidden: ""
                })
            }), vn.length > 0 && vn.forEach(function(t) {
                f(un[t], "hidden")
            }), hn = vn))
        }

        function St(t) {
            return {
                container: Kt,
                slideItems: Qt,
                navContainer: fn,
                navItems: un,
                controlsContainer: cn,
                prevButton: nn,
                nextButton: an,
                items: le,
                slideBy: ce,
                cloneCount: Ee,
                slideCount: Jt,
                slideCountNew: Ce,
                index: Ae,
                indexCached: Me,
                navCurrentIndex: mn,
                navCurrentIndexCached: yn,
                visibleNavIndexes: vn,
                visibleNavIndexesCached: hn,
                event: t || {}
            }
        }
        if (e = t({
            container: A.querySelector(".slider"),
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            slideBy: 1,
            controls: !0,
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            nav: !0,
            navContainer: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            touch: !0,
            mouseDrag: !1,
            nested: !1,
            onInit: !1
        }, e || {}), ["container", "controlsContainer", "navContainer", "autoplayButton"].forEach(function(t) {
            "string" == typeof e[t] && (e[t] = A.querySelector(e[t]))
        }), e.container && e.container.nodeName && !(e.container.children.length < 2)) {
            if (e.responsive) {
                var Wt = {}, Ht = e.responsive;
                for (var Rt in Ht) {
                    var Bt = Ht[Rt];
                    Wt[Rt] = "number" == typeof Bt ? {
                        items: Bt
                    } : Bt
                }
                e.responsive = Wt, Wt = null
            }
            var zt = "carousel" === e.mode;
            if (!zt) {
                e.axis = "horizontal", e.rewind = !1, e.loop = !0, e.edgePadding = !1;
                var jt = "tns-fadeIn",
                    Gt = "tns-fadeOut",
                    _t = !1,
                    qt = e.animateNormal || "tns-normal";
                j && G && (jt = e.animateIn || jt, Gt = e.animateOut || Gt, _t = e.animateDelay || _t)
            }
            var Ft, Ut = "horizontal" === e.axis,
                Vt = A.createElement("div"),
                Xt = A.createElement("div"),
                Kt = e.container,
                Yt = Kt.parentNode,
                Qt = Kt.children,
                Jt = Qt.length,
                $t = Yt.clientWidth,
                Zt = e.responsive,
                te = [],
                ee = !1,
                ne = 0,
                ie = 0;
            if (Zt) {
                ee = Object.keys(Zt).map(function(t) {
                    return parseInt(t)
                }).sort(function(t, e) {
                    return t - e
                }), ee.indexOf(0) < 0 && (ie = 1), ee.forEach(function(t) {
                    te = te.concat(Object.keys(Zt[t]))
                });
                var ae = [];
                te.forEach(function(t) {
                    ae.indexOf(t) < 0 && ae.push(t)
                }), te = ae, ne = P()
            }
            var re, oe, se, le = u("items"),
                ce = "page" === u("slideBy") ? le : u("slideBy"),
                ue = e.nested,
                de = u("gutter"),
                fe = u("edgePadding"),
                ve = u("fixedWidth"),
                he = u("arrowKeys"),
                pe = u("speed"),
                me = e.rewind,
                ye = !me && e.loop,
                ge = u("autoHeight"),
                be = a(),
                xe = e.lazyload,
                Te = [],
                Ee = ye ? 2 * Jt : n("edgePadding") ? 1 : 0,
                Ce = zt ? Jt + 2 * Ee : Jt + Ee,
                we = !(!ve || ye || fe),
                Le = !zt || !ye,
                De = Ut ? "left" : "top",
                Oe = "",
                Pe = "",
                Ae = zt ? Ee : 0,
                Me = Ae,
                Ne = !ye && n("edgePadding") ? 1 : 0,
                ke = Ne,
                Ie = Ce - le - Ne,
                Se = !1,
                We = e.onInit,
                He = new x,
                Re = Kt.id,
                Be = Kt.className,
                ze = Qt[0].id,
                je = Qt[0].className,
                Ge = Kt.id || i(),
                _e = Jt <= le,
                qe = "inner" === ue ? " !important" : "",
                Fe = {
                    click: dt,
                    keydown: Tt
                }, Ue = {
                    click: ft,
                    keydown: Ct
                }, Ve = {
                    mouseover: q,
                    mouseout: F
                }, Xe = {
                    visibilitychange: bt
                }, Ke = {
                    keydown: xt
                }, Ye = {
                    touchstart: Pt,
                    touchmove: At,
                    touchend: Mt,
                    touchcancel: Mt
                }, Qe = {
                    mousedown: Pt,
                    mousemove: At,
                    mouseup: Mt,
                    mouseleave: Mt
                }, Je = n("controls"),
                $e = n("nav"),
                Ze = n("autoplay"),
                tn = n("touch"),
                en = n("mouseDrag");
            if (Je) var nn, an, rn, on, sn = u("controls"),
            ln = u("controlsText"), cn = e.controlsContainer;
            if ($e) var un, dn = u("nav"),
            fn = e.navContainer, vn = [], hn = vn, pn = -1, mn = 0, yn = 0;
            if (Ze) var gn, bn = u("autoplay"),
            xn = u("autoplayTimeout"), Tn = "forward" === e.autoplayDirection ? 1 : -1, En = u("autoplayText"), Cn = u("autoplayHoverPause"), wn = e.autoplayButton, Ln = !1, Dn = !1, On = ["<span class='tns-visually-hidden'>", " animation</span>"], Pn = u("autoplayResetOnVisibility"), An = !1;
            if (tn) var Mn, Nn, kn, In = u("touch"),
            Sn = null, Wn = null;
            if (en) var Hn = u("mouseDrag"),
            Rn = !1;
            _e && (sn = dn = In = Hn = he = bn = Cn = Pn = !1), W && (De = W, Oe = "translate", Oe += Ut ? "X(" : "Y(", Pe = ")"),
            function() {
                Vt.appendChild(Xt), Yt.insertBefore(Vt, Kt), Xt.appendChild(Kt), Ft = Xt.clientWidth;
                var t = "tns-outer",
                    i = "tns-inner",
                    a = " tns-slider tns-" + e.mode;
                if (zt && (Ut && (n("edgePadding") || n("gutter") && !e.fixedWidth) ? t += " tns-ovh" : i += " tns-ovh"), Vt.className = t, Xt.className = i, Xt.id = Ge + "-iw", ge && (Xt.className += " tns-ah", Xt.style[H] = pe / 1e3 + "s"), "" === Kt.id && (Kt.id = Ge), a += I ? " tns-subpixel" : " tns-no-subpixel", a += k ? " tns-calc" : " tns-no-calc", zt && (a += " tns-" + e.axis), Kt.className += a, zt && j) {
                    var o = {};
                    o[j] = ct, g(Kt, o)
                }
                t = i = a = null;
                for (var s = 0; s < Jt; s++) {
                    var l = Qt[s];
                    l.id = Ge + "-item" + s, l.classList.add("tns-item"), !zt && qt && l.classList.add(qt), d(l, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                }
                if (ye || fe) {
                    for (var c = A.createDocumentFragment(), h = A.createDocumentFragment(), p = Ee; p--;) {
                        var b = p % Jt,
                            x = Qt[b].cloneNode(!0);
                        if (f(x, "id"), h.insertBefore(x, h.firstChild), zt) {
                            var T = Qt[Jt - 1 - b].cloneNode(!0);
                            f(T, "id"), c.appendChild(T)
                        }
                    }
                    Kt.insertBefore(c, Kt.firstChild), Kt.appendChild(h), Qt = Kt.children
                }
                for (var P = Ae; P < Ae + le; P++) {
                    var l = Qt[P];
                    d(l, {
                        "aria-hidden": "false"
                    }), f(l, ["tabindex"]), zt || (l.style.left = 100 * (P - Ae) / le + "%", l.classList.remove(qt), l.classList.add(jt))
                }
                if (zt && Ut)
                    if (I) {
                        var N = M.getComputedStyle(Qt[0]).fontSize;
                        N.indexOf("em") > 0 && (N = 16 * parseFloat(N) + "px"), E(be, "#" + Ge, "font-size:0;", r(be)), E(be, "#" + Ge + " > .tns-item", "font-size:" + N + ";", r(be))
                    } else[].forEach.call(Qt, function(t, e) {
                        t.style.marginLeft = m(e)
                    });
                if (S) {
                    var W = y(e.edgePadding, e.gutter, e.fixedWidth);
                    E(be, "#" + Ge + "-iw", W, r(be)), zt && Ut && (W = "width:" + C(e.fixedWidth, e.gutter, e.items), E(be, "#" + Ge, W, r(be))), (Ut || e.gutter) && (W = w(e.fixedWidth, e.gutter, e.items) + L(e.gutter), E(be, "#" + Ge + " > .tns-item", W, r(be)))
                } else if (Xt.style.cssText = y(fe, de, ve), zt && Ut && (Kt.style.width = C(ve, de, le)), Ut || de) {
                    var W = w(ve, de, le) + L(de);
                    E(be, "#" + Ge + " > .tns-item", W, r(be))
                }
                if (Ut || (Y(), Nt()), Zt && S && ee.forEach(function(t) {
                    var e = Zt[t],
                        i = "",
                        a = "",
                        r = "",
                        o = "",
                        s = u("items", t),
                        l = u("fixedWidth", t),
                        c = u("edgePadding", t),
                        d = u("gutter", t);
                    ("edgePadding" in e || "gutter" in e) && (a = "#" + Ge + "-iw{" + y(c, d, l) + "}"), zt && Ut && ("fixedWidth" in e || "gutter" in e || "items" in e) && (r = "#" + Ge + "{width:" + C(l, d, s) + "}"), ("fixedWidth" in e || n("fixedWidth") && "gutter" in e) && (o += w(l, d, s)), "gutter" in e && (o += L(d)), o.length > 0 && (o = "#" + Ge + " > .tns-item{" + o + "}"), i = a + r + o, i.length > 0 && be.insertRule("@media (min-width: " + t / 16 + "em) {" + i + "}", be.cssRules.length)
                }), zt && rt(), navigator.msMaxTouchPoints && (Vt.classList.add("ms-touch"), g(Vt, {
                    scroll: wt
                }), Q()), $e) {
                    if (fn) d(fn, {
                        "aria-label": "Carousel Pagination"
                    }), un = fn.children, [].forEach.call(un, function(t, e) {
                        d(t, {
                            "data-nav": e,
                            tabindex: "-1",
                            "aria-selected": "false",
                            "aria-controls": Ge + "-item" + e
                        })
                    });
                    else {
                        for (var R = "", P = 0; P < Jt; P++) R += '<button data-nav="' + P + '" tabindex="-1" aria-selected="false" aria-controls="' + Ge + "-item" + P + '" hidden type="button"></button>';
                        R = '<div class="tns-nav" aria-label="Carousel Pagination">' + R + "</div>", Vt.insertAdjacentHTML("afterbegin", R), fn = Vt.querySelector(".tns-nav"), un = fn.children, It()
                    } if (H) {
                        var B = H.substring(0, H.length - 18).toLowerCase(),
                            W = "transition: all " + pe / 1e3 + "s";
                        B && (W = "-" + B + "-" + W), E(be, "[aria-controls^=" + Ge + "-item]", W, r(be))
                    }
                    d(un[0], {
                        tabindex: "0",
                        "aria-selected": "true"
                    }), g(fn, Ue), dn || v(fn)
                }
                if (Ze) {
                    var z = bn ? "stop" : "start";
                    wn ? d(wn, {
                        "data-action": z
                    }) : e.autoplayButtonOutput && (Xt.insertAdjacentHTML("beforebegin", '<button data-action="' + z + '" type="button">' + On[0] + z + On[1] + En[0] + "</button>"), wn = Vt.querySelector("[data-action]")), wn && g(wn, {
                        click: gt
                    }), bn ? (ht(), Cn && g(Kt, Ve), Pn && g(Kt, Xe)) : wn && v(wn)
                }
                Je && (cn ? (nn = cn.children[0], an = cn.children[1], d(cn, {
                    "aria-label": "Carousel Navigation",
                    tabindex: "0"
                }), d(nn, {
                    "data-controls": "prev"
                }), d(an, {
                    "data-controls": "next"
                }), d(cn.children, {
                    "aria-controls": Ge,
                    tabindex: "-1"
                })) : (Vt.insertAdjacentHTML("afterbegin", '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Ge + '" type="button">' + ln[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Ge + '" type="button">' + ln[1] + "</button></div>"), cn = Vt.querySelector(".tns-controls"), nn = cn.children[0], an = cn.children[1]), rn = Z(nn), on = Z(an), ye || et(rn, nn, !0), g(cn, Fe), sn || v(cn)), In && g(Kt, Ye), Hn && g(Kt, Qe), he && g(A, Ke), "inner" === ue ? He.on("outerResized", function() {
                    O(), He.emit("innerLoaded", St())
                }) : (g(M, {
                    resize: D
                }), "outer" === ue && He.on("innerLoaded", V)), U(), V(), _(), "function" == typeof We && We(St()), "inner" === ue && He.emit("innerLoaded", St())
            }();
            var Bn = function() {
                return ye ? function() {
                    var t = ke,
                        e = Ie;
                    zt && (t += ce, e -= ce);
                    var n = de ? de : 0;
                    if (ve && $t % (ve + n) > n && (e -= 1), Ae > e)
                        for (; Ae >= t + Jt;) Ae -= Jt;
                    else if (Ae < t)
                        for (; Ae <= e - Jt;) Ae += Jt
                } : function() {
                    Ae = Math.max(ke, Math.min(Ie, Ae))
                }
            }(),
                zn = function() {
                    return zt ? function(t, e) {
                        if (e || (e = at()), we && Ae === Ie) {
                            var n = W ? 100 * -((Ce - le) / Ce) : 100 * -(Ce / le - 1);
                            e = Math.max(parseFloat(e), n) + "%"
                        }
                        H || !t ? (rt(e), 0 === pe && ct()) : T(Kt, De, Oe, Pe, e, pe, ct), Ut || Nt()
                    } : function() {
                        Te = [];
                        var t = {};
                        t[j] = t[G] = ct, b(Qt[Me], t), g(Qt[Ae], t), ot(Me, jt, Gt, !0), ot(Ae, qt, jt), j && G && 0 !== pe || setTimeout(ct, 0)
                    }
                }();
            return {
                getInfo: St,
                events: He,
                goTo: ut,
                destroy: function() {
                    if (be.disabled = !0, ye)
                        for (var t = Ee; t--;) Qt[0].remove(), Qt[Qt.length - 1].remove();
                    for (var n = Jt; n--;) Qt[n].id = ze || "", Qt[n].className = je || "";
                    if (f(Qt, ["style", "aria-hidden", "tabindex"]), Qt = Ge = Jt = Ce = Ee = null, sn && (b(cn, Fe), e.controlsContainer && (f(cn, ["aria-label", "tabindex"]), f(cn.children, ["aria-controls", "aria-disabled", "tabindex"])), cn = nn = an = null), dn && (b(fn, Ue), e.navContainer && (f(fn, ["aria-label"]), f(un, ["aria-selected", "aria-controls", "tabindex"])), fn = un = null), bn && (wn && b(wn, {
                        click: gt
                    }), b(Kt, Ve), b(Kt, Xe), e.autoplayButton && f(wn, ["data-action"])), Kt.id = Re || "", Kt.className = Be || "", Kt.style = "", zt && j) {
                        var i = {};
                        i[j] = ct, b(Kt, i)
                    }
                    b(Kt, Ye), b(Kt, Qe), Yt.insertBefore(Kt, Vt), Vt.remove(), Vt = Xt = Kt = null, b(A, Ke), b(M, {
                        resize: D
                    })
                }
            }
        }
    }
}();

export default tns;