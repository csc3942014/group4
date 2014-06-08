/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/

(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) { return new x.fn.init(e, t, r) }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) { return t.toUpperCase() }, q = function (e) { (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready()) }, _ = function () { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) }; x.fn = x.prototype = { jquery: f, constructor: x, init: function (e, n, r) { var i, o; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (o = a.getElementById(i[2]), o && o.parentNode) { if (o.id !== i[2]) return r.find(e); this.length = 1, this[0] = o } return this.context = a, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this)) }, selector: "", length: 0, toArray: function () { return g.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return x.each(this, e, t) }, ready: function (e) { return x.ready.promise().done(e), this }, slice: function () { return this.pushStack(g.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(x.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? x.readyWait++ : x.ready(!0) }, ready: function (e) { if (e === !0 ? ! --x.readyWait : !x.isReady) { if (!a.body) return setTimeout(x.ready); x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === x.type(e) }, isArray: Array.isArray || function (e) { return "array" === x.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e }, isPlainObject: function (e) { var n; if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1; try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (r) { return !1 } if (x.support.ownLast) for (n in e) return v.call(e, n); for (n in e); return n === t || v.call(e, n) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || a; var r = k.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && x.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(D, "ms-").replace(L, H) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: b && !b.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : b.call(e) } : function (e) { return null == e ? "" : (e + "").replace(C, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (m) return m.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return d.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var l = 0, u = e.length, c = null == r; if ("object" === x.type(r)) { o = !0; for (l in r) x.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(x(e), n) })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r))); return o ? e : c ? n.call(e) : u ? n(e[0], r) : a }, now: function () { return (new Date).getTime() }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), x.ready.promise = function (t) { if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready); else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else { a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q); var r = !1; try { r = null == e.frameElement && a.documentElement } catch (i) { } r && r.doScroll && function o() { if (!x.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) } _(), x.ready() } } () } return n.promise(t) }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { c["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = x.type(e); return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = x(a), function (e, t) { var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) { return e === t ? (S = !0, 0) : 0 }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) }; try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) { M = { apply: H.length ? function (e, t) { _.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function at(e, t, n, i) { var o, a, s, l, u, c, d, m, y, x; if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n; if (1 !== (l = t.nodeType) && 9 !== l) return []; if (h && !i) { if (o = Z.exec(e)) if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n } else { if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n; if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n } if (r.qsa && (!g || !g.test(e))) { if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) { c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length; while (u--) c[u] = m + yt(c[u]); y = V.test(e) && t.parentNode || t, x = c.join(",") } if (x) try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) { } finally { d || t.removeAttribute("id") } } } return kt(e.replace(z, "$1"), t, n, i) } function st() { var e = []; function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r } return t } function lt(e) { return e[b] = !0, e } function ut(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function ct(e, t) { var n = e.split("|"), r = e.length; while (r--) o.attrHandle[n[r]] = t } function pt(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function ft(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function dt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function ht(e) { return lt(function (t) { return t = +t, lt(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } s = at.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function (e) { var n = e ? e.ownerDocument || e : w, i = n.defaultView; return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () { p() }), r.attributes = ut(function (e) { return e.className = "i", !e.getAttribute("className") }), r.getElementsByTagName = ut(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ut(function (e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ut(function (e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function (e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function (e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, o.find.CLASS = r.getElementsByClassName && function (e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ut(function (e) { var t = n.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:") })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, A = d.compareDocumentPosition ? function (e, t) { if (e === t) return S = !0, 0; var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return S = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0; if (o === a) return pt(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, n) : f }, at.matches = function (e, t) { return at(e, null, null, t) }, at.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) { } return at(t, f, null, [e]).length > 0 }, at.contains = function (e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function (e, n) { (e.ownerDocument || e) !== f && p(e); var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t; return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a }, at.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function (e) { var t, n = [], i = 0, o = 0; if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) t === e[o] && (i = n.push(o)); while (i--) e.splice(n[i], 1) } return e }, a = at.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += a(t); return n }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling"} }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function (e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, l) { var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break } } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e); return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: lt(function (e) { var t = [], n = [], r = l(e.replace(z, "$1")); return r[b] ? lt(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: lt(function (e) { return function (t) { return at(e, t).length > 0 } }), contains: lt(function (e) { return function (t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }), lang: lt(function (e) { return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) { var n; do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === d }, focus: function (e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !o.pseudos.empty(e) }, header: function (e) { return tt.test(e.nodeName) }, input: function (e) { return et.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: ht(function () { return [0] }), last: ht(function (e, t) { return [t - 1] }), eq: ht(function (e, t, n) { return [0 > n ? n + t : n] }), even: ht(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: ht(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0; ) e.push(r); return e }), gt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r; ) e.push(r); return e })} }, o.pseudos.nth = o.pseudos.eq; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[n] = ft(n); for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n); function gt() { } gt.prototype = o.filters = o.pseudos, o.setFilters = new gt; function mt(e, t) { var n, r, i, a, s, l, u, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, l = [], u = o.preFilter; while (s) { (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length)); for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? at.error(e) : k(e, l).slice(0) } function yt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function vt(e, t, n) { var r = t.dir, o = n && "parentNode" === r, a = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i) } : function (t, n, s) { var l, u, c, p = T + " " + a; if (s) { while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) return l === !0 } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0 } } function bt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function xt(e, t, n, r, i) { var o, a = [], s = 0, l = e.length, u = null != t; for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s)); return a } function wt(e, t, n, r, i, o) { return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) { var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, l), r) { u = xt(y, d), r(u, [], s, l), c = u.length; while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { u = [], c = y.length; while (c--) (p = y[c]) && u.push(m[c] = p); i(null, y = [], u, l) } c = y.length; while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p)) } } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y) }) } function Tt(e) { var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) { return e === t }, s, !0), p = vt(function (e) { return F.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) } ]; for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)]; else { if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) { for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break; return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e)) } f.push(n) } return bt(f) } function Ct(e, t) { var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1; for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, l, c)) { p.push(h); break } w && (T = k, i = ++n) } r && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, r && b !== v) { g = 0; while (m = t[g++]) m(x, y, l, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p)); y = xt(y) } M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p) } return w && (T = k, u = C), x }; return r ? lt(s) : s } l = at.compile = function (e, t) { var n, r = [], i = [], o = E[e + " "]; if (!o) { t || (t = mt(e)), n = t.length; while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o); o = E(e, Ct(i, r)) } return o }; function Nt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) at(e, t[r], n); return n } function kt(e, t, n, i) { var a, s, u, c, p, f = mt(e); if (!i && 1 === f.length) { if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) { if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n; e = e.slice(s.shift().value.length) } a = Q.needsContext.test(e) ? 0 : s.length; while (a--) { if (u = s[a], o.relative[c = u.type]) break; if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n; break } } } return l(e, f)(i, t, !h, n, V.test(e)), n } r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), ut(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ct("type|href|height|width", function (e, n, r) { return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2) }), r.attributes && ut(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ct("value", function (e, n, r) { return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue }), ut(function (e) { return null == e.getAttribute("disabled") }) || ct(B, function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains } (e); var O = {}; function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function (e, n) { t[n] = !0 }), t } x.Callbacks = function (e) { e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e); var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable()) }, p = { add: function () { if (l) { var t = l.length; (function i(t) { x.each(t, function (t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r)) } return this }, remove: function () { return l && x.each(arguments, function (e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) }, empty: function () { return l = [], o = 0, this }, disable: function () { return l = u = r = t, this }, disabled: function () { return !l }, lock: function () { return u = t, r || p.disable(), this }, locked: function () { return !u }, fireWith: function (e, t) { return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, x.extend({ Deferred: function (e) { var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return x.Deferred(function (n) { x.each(t, function (t, o) { var a = o[0], s = x.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? x.extend(e, r) : r } }, i = {}; return r.pipe = r.then, x.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, l, u; if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i; return i || o.resolveWith(u, n), o.promise() } }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t; s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip; for (f in x(t)) break; return t.ownLast = "0" !== f, x(function () { var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0]; l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1} : {}, function () { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null) }), n = s = l = u = r = o = null, t
    } ({}); var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g; function R(e, n, r, i) { if (x.acceptData(e)) { var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s; if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o } } function W(e, t, n) { if (x.acceptData(e)) { var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando; if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) delete r[t[i]]; if (n ? !I(r) : !x.isEmptyObject(r)) return } (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } } x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function (e, t, n) { return R(e, t, n) }, removeData: function (e, t) { return W(e, t) }, _data: function (e, t, n) { return R(e, t, n, !0) }, _removeData: function (e, t) { return W(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({ data: function (e, n) { var r, i, o = null, a = 0, s = this[0]; if (e === t) { if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) { for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i])); x._data(s, "parsedAttrs", !0) } return o } return "object" == typeof e ? this.each(function () { x.data(this, e) }) : arguments.length > 1 ? this.each(function () { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null }, removeData: function (e) { return this.each(function () { x.removeData(this, e) }) } }); function $(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(P, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) { } x.data(e, n, r) } else r = t } return r } function I(e) { var t; for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } x.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () { x.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) } }), x.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () { var t = x.queue(this, e, n); x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { x.dequeue(this, e) }) }, delay: function (e, t) { return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l)); return l(), o.promise(n) } }); var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input; x.fn.extend({ attr: function (e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { x.removeAttr(this, e) }) }, prop: function (e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = x.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).addClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = x.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).removeClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? x.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var t, r = 0, o = x(this), a = e.match(T) || []; while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = x.isFunction(e), this.each(function (n) { var o; 1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n) } } }), x.extend({ valHooks: { option: { get: function (e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) { if (t = x(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n, r, i = e.options, o = x.makeArray(t), a = i.length; while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0); return n || (e.selectedIndex = -1), o } } }, attr: function (e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(T); if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } }} }), X = { set: function (e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) { var r = x.expr.attrHandle[n] || x.find.attr; x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) { var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null; return x.expr.attrHandle[n] = o, a } : function (e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null } }), K && Q || (x.attrHooks.value = { set: function (e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function (e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function (e, n) { x.attrHooks[n] = { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) { x.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () { x.valHooks[this] = { set: function (e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } function at() { try { return a.activeElement } catch (e) { } } x.event = { global: {}, add: function (e, n, r, o, a) { var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length; while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0); e = null } }, remove: function (e, t, n, r, i) { var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e); if (m && (c = m.events)) { t = (t || "").match(T) || [""], u = t.length; while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) x.event.remove(e, d + t[u], n, r, !0); x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events")) } }, trigger: function (n, r, i, o) { var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : []; if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!o && !p.noBubble && !x.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u; f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault(); if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) { f = i[l], f && (i[l] = null), x.event.triggered = g; try { i[g]() } catch (y) { } x.event.triggered = t, f && (i[l] = f) } return n.result } }, dispatch: function (e) { e = x.event.fix(e); var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {}; if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], l = n.delegateCount, u = e.target; if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i); o.length && s.push({ elem: u, handlers: o }) } return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s }, fix: function (e) { if (e[x.expando]) return e; var t, n, r, i = e.type, o = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length; while (t--) n = r[t], e[n] = o[n]; return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, o, s = n.button, l = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== at() && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function () { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function (e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, x.removeEvent = a.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, x.Event = function (e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) { x.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), x.support.submitBubbles || (x.event.special.submit = { setup: function () { return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t; r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) } }), x.support.changeBubbles || (x.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return x.event.remove(this, "._change"), !Z.test(this.nodeName) } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { x.event.simulate(t, e.target, x.event.fix(e), !0) }; x.event.special[t] = { setup: function () { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && a.removeEventListener(e, r, !0) } } }), x.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () { x.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { x.event.remove(this, e, r, n) }) }, trigger: function (e, t) { return this.each(function () { x.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t } }); var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; x.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e) return this.pushStack(x(e).filter(function () { for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0 })); for (t = 0; i > t; t++) x.find(e, r[t], n); return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, has: function (e) { var t, n = x(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e || [], !0)) }, filter: function (e) { return this.pushStack(ft(this, e || [], !1)) }, is: function (e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break } return this.pushStack(o.length > 1 ? x.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n); return this.pushStack(x.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } x.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return x.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return x.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return x.dir(e, "nextSibling") }, prevAll: function (e) { return x.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function (e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return x.sibling(e.firstChild) }, contents: function (e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function (e, t) { x.fn[e] = function (n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({ filter: function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) { return 1 === e.nodeType })) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (x.isFunction(t)) return x.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }); if (t.nodeType) return x.grep(e, function (e) { return e === t !== n }); if ("string" == typeof t) { if (st.test(t)) return x.filter(t, e, n); t = x.filter(t, e) } return x.grep(e, function (e) { return x.inArray(e, t) >= 0 !== n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(a), Dt = jt.appendChild(a.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function (e) { return x.access(this, function (e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) }, append: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.appendChild(e) } }) }, prepend: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = e ? x.filter(e, this) : this, i = 0; for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n)); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]); t++) { 1 === e.nodeType && x.cleanData(Ft(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && x.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return x.clone(this, e, t) }) }, html: function (e) { return x.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = x.map(this, function (e) { return [e.nextSibling, e.parentNode] }), t = 0; return this.domManip(arguments, function (n) { var r = e[t++], i = e[t++]; i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r)) }, !0), t ? this : this.remove() }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, t, n) { e = d.apply([], e); var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h); if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) { var i = p.eq(r); g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n) }); if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) { for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u); if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, ""))); l = r = null } return this } }); function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e } function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function _t(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) } function Mt(e, t) { if (1 === t.nodeType && x.hasData(e)) { var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]) } a.data && (a.data = x.extend({}, a.data)) } } function Ot(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) { i = x._data(t); for (r in i.events) x.removeEvent(t, r, i.handle); t.removeAttribute(x.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { x.fn[e] = function (e) { var n, r = 0, i = [], o = x(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get()); return this.pushStack(i) } }); function Ft(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n)); return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s } function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) } x.extend({
        clone: function (e, t, n) { var r, i, o, a, s, l = x.contains(e.ownerDocument, e); if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]); if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]); else Mt(e, o); return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) { var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) { s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) } x.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild } else d.push(t.createTextNode(o)); s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special; for (; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }), x.fn.extend({ wrapAll: function (e) { if (x.isFunction(e)) return this.each(function (t) { x(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = x(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return x.isFunction(e) ? this.each(function (t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = x(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = x.isFunction(e); return this.each(function (n) { x(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() } }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } x.fn.extend({ css: function (e, n) { return x.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o); return a } return r !== t ? x.style(e, n, r) : x.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { nn(this) ? x(this).show() : x(this).hide() }) } }), x.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, l = x.camelCase(n), u = e.style; if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style; return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l }) : a.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style; return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function ln(e) { var t = a, n = Gt[e]; return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n } function un(e, t) { var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display"); return n.remove(), r } x.each(["height", "width"], function (e, n) { x.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), x(function () { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function (e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) { x.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function (e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) { x.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (x.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; x.fn.extend({ serialize: function () { return x.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function (e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n")} }) : { name: t.name, value: n.replace(fn, "\r\n")} }).get() } }), x.param = function (e, n) { var r, i = [], o = function (e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (x.isArray(t)) x.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { x.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }); var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(T) || []; if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function (e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u } return s(n.dataTypes[0]) || !o["*"] && s("*") } function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && x.extend(!0, e, r), e } x.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, l = e.indexOf(" "); return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { x.fn[t] = function (e) { return this.on(t, e) } }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0} }, ajaxSetup: function (e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === b) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === b ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return b || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else C.always(e[C.status]); return this }, abort: function (e) { var t = e || w; return u && u.abort(t), k(0, t), this } }; if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C; l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) C.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort(); w = "abort"; for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]); if (u = qn(jn, p, n, C)) { C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { C.abort("timeout") }, p.timeout)); try { b = 1, u.send(y, k) } catch (N) { if (!(2 > b)) throw N; k(-1, N) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, N = n; 2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop"))) } return C }, getJSON: function (e, t, n) { return x.get(e, t, n, "json") }, getScript: function (e, n) { return x.get(e, t, n, "script") } }), x.each(["get", "post"], function (e, n) { x[n] = function (e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }); function Mn(e, n, r) { var i, o, a, s, l = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in l) if (l[s] && l[s].test(o)) { u.unshift(s); break } if (u[0] in r) a = u[0]; else { for (s in r) { if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== u[0] && u.unshift(a), r[a]) : t } function On(e, t, n, r) { var i, o, a, s, l, u = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) { if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break } if (a !== !0) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o} } } return { state: "success", data: t} } x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = a.head || x("head")[0] || a.documentElement; return { send: function (t, i) { n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/; x.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } x.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) { if (!n.crossDomain || x.support.cors) { var r; return { send: function (i, o) { var a, s, l = n.xhr(); if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s]; n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) { } l.send(n.hasContent && n.data || null), r = function (e, i) { var s, u, c, p; try { if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort(); else { p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText); try { c = l.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, u) }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20; if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1; do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l) } return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n } ] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = x.now() } function Zn(e, t, n) { var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length; for (; a > o; o++) if (r = i[o].call(n, t, e)) return r } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () { delete l.elem }), l = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; for (; l > a; a++) u.tweens[a].run(o); return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1) }, u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? u.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) u.tweens[n].run(1); return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this } }), c = u.props; for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r; return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) } function tr(e, t) { var n, r, i, o, a; for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } x.Animation = x.extend(er, { tweener: function (e, t) { x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow"); n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () { s.unqueued || l() }), s.unqueued++, u.always(function () { u.always(function () { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })); for (r in t) if (i = t[r], Vn.exec(i)) { if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue; c[r] = d && d[r] || x.style(e, r) } if (!x.isEmptyObject(c)) { d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () { x(e).hide() }), u.done(function () { var t; x._removeData(e, "fxshow"); for (t in c) x.style(e, t, c[t]) }); for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } x.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function (e, t) { var n = x.fn[t]; x.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), x.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () { var t = er(this, x.extend({}, e), o); (i || x._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && x.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0; for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle"} }, function (e, t) { x.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function (e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () { var e, n = x.timers, r = 0; for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || x.fx.stop(), Xn = t }, x.fx.timer = function (e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function () { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function () { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) { return x.grep(x.timers, function (t) { return e === t.elem }).length }), x.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { x.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, x.offset = { setOffset: function (e, t, n) { var r = x.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f; l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u) } }, x.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0)} } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); x.fn[e] = function (i) { return x.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } x.each({ Height: "height", Width: "width" }, function (e, n) { x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { x.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return x.access(this, function (n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), x.fn.size = function () { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () { return x }))
})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);












(function() {
  var CSRFToken, Click, ComponentUrl, Link, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, constrainPageCacheTo, createDocument, currentState, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  currentState = null;

  loadedAssets = null;

  referer = null;

  createDocument = null;

  xhr = null;

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    reflectNewUrl(url);
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  fetchReplacement = function(url, onLoadFunction) {
    if (onLoadFunction == null) {
      onLoadFunction = (function(_this) {
        return function() {};
      })(this);
    }
    triggerEvent('page:fetch', {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent('page:receive');
      if (doc = processResponse()) {
        changePage.apply(null, extractTitleAndBody(doc));
        reflectRedirectedUrl();
        onLoadFunction();
        return triggerEvent('page:load');
      } else {
        return document.location.href = url.absolute;
      }
    };
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent('page:restore');
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent('page:expire', pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    triggerEvent('page:change');
    return triggerEvent('page:update');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location.href + preservedHash);
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function() {
    return !triggerEvent('page:before-change');
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      return xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.head.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.body), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref = testDoc.body) != null ? _ref.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  ComponentUrl = (function() {
    function ComponentUrl(original) {
      this.original = original != null ? original : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype._parse = function() {
      var _ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      _ref = this.link, this.href = _ref.href, this.protocol = _ref.protocol, this.host = _ref.host, this.hostname = _ref.hostname, this.port = _ref.port, this.pathname = _ref.pathname, this.search = _ref.search, this.hash = _ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(_super) {
    __extends(Link, _super);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, _i, _len;
      extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link) {
      this.link = link;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    Link.prototype._anchored = function() {
      var current;
      return ((this.hash && this.withoutHash()) === (current = new ComponentUrl).withoutHash()) || (this.href === current.href + '#');
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.link;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event) {
      this.event = event;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented()) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent('page:change');
      return triggerEvent('page:update');
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent('page:update');
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', Click.installHandlerLast, true);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks
  };

}).call(this);
/*! KineticJS v5.0.2 2014-03-26 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/

var Kinetic = {}; !function (a) { var b = Math.PI / 180; Kinetic = { version: "5.0.2", stages: [], idCounter: 0, ids: {}, names: {}, shapes: {}, listenClickTap: !1, inDblClickWindow: !1, enableTrace: !1, traceArrMax: 100, dblClickWindow: 400, pixelRatio: void 0, dragDistance: 0, angleDeg: !0, UA: function () { var b = a.navigator && a.navigator.userAgent || "", c = b.toLowerCase(), d = /(chrome)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || c.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [], e = !!b.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i); return { browser: d[1] || "", version: d[2] || "0", mobile: e} } (), Filters: {}, Node: function (a) { this._init(a) }, Shape: function (a) { this.__init(a) }, Container: function (a) { this.__init(a) }, Stage: function (a) { this.___init(a) }, BaseLayer: function (a) { this.___init(a) }, Layer: function (a) { this.____init(a) }, FastLayer: function (a) { this.____init(a) }, Group: function (a) { this.___init(a) }, isDragging: function () { var a = Kinetic.DD; return a ? a.isDragging : !1 }, isDragReady: function () { var a = Kinetic.DD; return a ? !!a.node : !1 }, _addId: function (a, b) { void 0 !== b && (this.ids[b] = a) }, _removeId: function (a) { void 0 !== a && delete this.ids[a] }, _addName: function (a, b) { void 0 !== b && (void 0 === this.names[b] && (this.names[b] = []), this.names[b].push(a)) }, _removeName: function (a, b) { if (void 0 !== a) { var c = this.names[a]; if (void 0 !== c) { for (var d = 0; d < c.length; d++) { var e = c[d]; e._id === b && c.splice(d, 1) } 0 === c.length && delete this.names[a] } } }, getAngle: function (a) { return this.angleDeg ? a * b : a } } } (this), function (a, b) { if ("object" == typeof exports) { var c = require("canvas"), d = require("jsdom").jsdom, e = d("<!DOCTYPE html><html><head></head><body></body></html>"), f = b(); return Kinetic.document = e, Kinetic.window = Kinetic.document.createWindow(), Kinetic.window.Image = c.Image, Kinetic.root = a, Kinetic._nodeCanvas = c, void (module.exports = f) } "function" == typeof define && define.amd && define(b), Kinetic.document = document, Kinetic.window = window, Kinetic.root = a } ((1, eval)("this"), function () { return Kinetic }), function () { Kinetic.Collection = function () { var a = [].slice.call(arguments), b = a.length, c = 0; for (this.length = b; b > c; c++) this[c] = a[c]; return this }, Kinetic.Collection.prototype = [], Kinetic.Collection.prototype.each = function (a) { for (var b = 0; b < this.length; b++) a(this[b], b) }, Kinetic.Collection.prototype.toArray = function () { var a, b = [], c = this.length; for (a = 0; c > a; a++) b.push(this[a]); return b }, Kinetic.Collection.toCollection = function (a) { var b, c = new Kinetic.Collection, d = a.length; for (b = 0; d > b; b++) c.push(a[b]); return c }, Kinetic.Collection._mapMethod = function (a) { Kinetic.Collection.prototype[a] = function () { var b, c = this.length, d = [].slice.call(arguments); for (b = 0; c > b; b++) this[b][a].apply(this[b], d); return this } }, Kinetic.Collection.mapMethods = function (a) { var b = a.prototype; for (var c in b) Kinetic.Collection._mapMethod(c) }, Kinetic.Transform = function () { this.m = [1, 0, 0, 1, 0, 0] }, Kinetic.Transform.prototype = { translate: function (a, b) { this.m[4] += this.m[0] * a + this.m[2] * b, this.m[5] += this.m[1] * a + this.m[3] * b }, scale: function (a, b) { this.m[0] *= a, this.m[1] *= a, this.m[2] *= b, this.m[3] *= b }, rotate: function (a) { var b = Math.cos(a), c = Math.sin(a), d = this.m[0] * b + this.m[2] * c, e = this.m[1] * b + this.m[3] * c, f = this.m[0] * -c + this.m[2] * b, g = this.m[1] * -c + this.m[3] * b; this.m[0] = d, this.m[1] = e, this.m[2] = f, this.m[3] = g }, getTranslation: function () { return { x: this.m[4], y: this.m[5]} }, skew: function (a, b) { var c = this.m[0] + this.m[2] * b, d = this.m[1] + this.m[3] * b, e = this.m[2] + this.m[0] * a, f = this.m[3] + this.m[1] * a; this.m[0] = c, this.m[1] = d, this.m[2] = e, this.m[3] = f }, multiply: function (a) { var b = this.m[0] * a.m[0] + this.m[2] * a.m[1], c = this.m[1] * a.m[0] + this.m[3] * a.m[1], d = this.m[0] * a.m[2] + this.m[2] * a.m[3], e = this.m[1] * a.m[2] + this.m[3] * a.m[3], f = this.m[0] * a.m[4] + this.m[2] * a.m[5] + this.m[4], g = this.m[1] * a.m[4] + this.m[3] * a.m[5] + this.m[5]; this.m[0] = b, this.m[1] = c, this.m[2] = d, this.m[3] = e, this.m[4] = f, this.m[5] = g }, invert: function () { var a = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), b = this.m[3] * a, c = -this.m[1] * a, d = -this.m[2] * a, e = this.m[0] * a, f = a * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), g = a * (this.m[1] * this.m[4] - this.m[0] * this.m[5]); this.m[0] = b, this.m[1] = c, this.m[2] = d, this.m[3] = e, this.m[4] = f, this.m[5] = g }, getMatrix: function () { return this.m }, setAbsolutePosition: function (a, b) { var c = this.m[0], d = this.m[1], e = this.m[2], f = this.m[3], g = this.m[4], h = this.m[5], i = (c * (b - h) - d * (a - g)) / (c * f - d * e), j = (a - g - e * i) / c; this.translate(j, i) } }; var a = "2d", b = "[object Array]", c = "[object Number]", d = "[object String]", e = Math.PI / 180, f = 180 / Math.PI, g = "#", h = "", i = "0", j = "Kinetic warning: ", k = "Kinetic error: ", l = "rgb(", m = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] }, n = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/; Kinetic.Util = { _isElement: function (a) { return !(!a || 1 != a.nodeType) }, _isFunction: function (a) { return !!(a && a.constructor && a.call && a.apply) }, _isObject: function (a) { return !!a && a.constructor == Object }, _isArray: function (a) { return Object.prototype.toString.call(a) == b }, _isNumber: function (a) { return Object.prototype.toString.call(a) == c }, _isString: function (a) { return Object.prototype.toString.call(a) == d }, _throttle: function (a, b, c) { var d, e, f, g = null, h = 0; c || (c = {}); var i = function () { h = c.leading === !1 ? 0 : (new Date).getTime(), g = null, f = a.apply(d, e), d = e = null }; return function () { var j = (new Date).getTime(); h || c.leading !== !1 || (h = j); var k = b - (j - h); return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f } }, _hasMethods: function (a) { var b, c = []; for (b in a) this._isFunction(a[b]) && c.push(b); return c.length > 0 }, createCanvasElement: function () { var a = Kinetic.document.createElement("canvas"); return a.style = a.style || {}, a }, isBrowser: function () { return "object" != typeof exports }, _isInDocument: function (a) { for (; a = a.parentNode; ) if (a == Kinetic.document) return !0; return !1 }, _simplifyArray: function (a) { var b, c, d = [], e = a.length, f = Kinetic.Util; for (b = 0; e > b; b++) c = a[b], f._isNumber(c) ? c = Math.round(1e3 * c) / 1e3 : f._isString(c) || (c = c.toString()), d.push(c); return d }, _getImage: function (b, c) { var d, e; if (b) if (this._isElement(b)) c(b); else if (this._isString(b)) d = new Kinetic.window.Image, d.onload = function () { c(d) }, d.src = b; else if (b.data) { e = Kinetic.Util.createCanvasElement(), e.width = b.width, e.height = b.height; var f = e.getContext(a); f.putImageData(b, 0, 0), this._getImage(e.toDataURL(), c) } else c(null); else c(null) }, _getRGBAString: function (a) { var b = a.red || 0, c = a.green || 0, d = a.blue || 0, e = a.alpha || 1; return ["rgba(", b, ",", c, ",", d, ",", e, ")"].join(h) }, _rgbToHex: function (a, b, c) { return ((1 << 24) + (a << 16) + (b << 8) + c).toString(16).slice(1) }, _hexToRgb: function (a) { a = a.replace(g, h); var b = parseInt(a, 16); return { r: b >> 16 & 255, g: b >> 8 & 255, b: 255 & b} }, getRandomColor: function () { for (var a = (16777215 * Math.random() << 0).toString(16); a.length < 6; ) a = i + a; return g + a }, get: function (a, b) { return void 0 === a ? b : a }, getRGB: function (a) { var b; return a in m ? (b = m[a], { r: b[0], g: b[1], b: b[2] }) : a[0] === g ? this._hexToRgb(a.substring(1)) : a.substr(0, 4) === l ? (b = n.exec(a.replace(/ /g, "")), { r: parseInt(b[1], 10), g: parseInt(b[2], 10), b: parseInt(b[3], 10) }) : { r: 0, g: 0, b: 0} }, _merge: function (a, b) { var c = this._clone(b); for (var d in a) c[d] = this._isObject(a[d]) ? this._merge(a[d], c[d]) : a[d]; return c }, cloneObject: function (a) { var b = {}; for (var c in a) b[c] = this._isObject(a[c]) ? this.cloneObject(a[c]) : this._isArray(a[c]) ? this.cloneArray(a[c]) : a[c]; return b }, cloneArray: function (a) { return a.slice(0) }, _degToRad: function (a) { return a * e }, _radToDeg: function (a) { return a * f }, _capitalize: function (a) { return a.charAt(0).toUpperCase() + a.slice(1) }, error: function (a) { throw new Error(k + a) }, warn: function (a) { Kinetic.root.console && console.warn && console.warn(j + a) }, extend: function (a, b) { for (var c in b.prototype) c in a.prototype || (a.prototype[c] = b.prototype[c]) }, addMethods: function (a, b) { var c; for (c in b) a.prototype[c] = b[c] }, _getControlPoints: function (a, b, c, d, e, f, g) { var h = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2)), i = Math.sqrt(Math.pow(e - c, 2) + Math.pow(f - d, 2)), j = g * h / (h + i), k = g * i / (h + i), l = c - j * (e - a), m = d - j * (f - b), n = c + k * (e - a), o = d + k * (f - b); return [l, m, n, o] }, _expandPoints: function (a, b) { var c, d, e = a.length, f = []; for (c = 2; e - 2 > c; c += 2) d = Kinetic.Util._getControlPoints(a[c - 2], a[c - 1], a[c], a[c + 1], a[c + 2], a[c + 3], b), f.push(d[0]), f.push(d[1]), f.push(a[c]), f.push(a[c + 1]), f.push(d[2]), f.push(d[3]); return f }, _removeLastLetter: function (a) { return a.substring(0, a.length - 1) } } } (), function () { var a = Kinetic.Util.createCanvasElement(), b = a.getContext("2d"), c = Kinetic.UA.mobile ? function () { var a = window.devicePixelRatio || 1, c = b.webkitBackingStorePixelRatio || b.mozBackingStorePixelRatio || b.msBackingStorePixelRatio || b.oBackingStorePixelRatio || b.backingStorePixelRatio || 1; return a / c } () : 1; Kinetic.Canvas = function (a) { this.init(a) }, Kinetic.Canvas.prototype = { init: function (a) { a = a || {}; var b = a.pixelRatio || Kinetic.pixelRatio || c; this.pixelRatio = b, this._canvas = Kinetic.Util.createCanvasElement(), this._canvas.style.padding = 0, this._canvas.style.margin = 0, this._canvas.style.border = 0, this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = 0, this._canvas.style.left = 0 }, getContext: function () { return this.context }, getPixelRatio: function () { return this.pixelRatio }, setPixelRatio: function (a) { this.pixelRatio = a, this.setSize(this.getWidth(), this.getHeight()) }, setWidth: function (a) { this.width = this._canvas.width = a * this.pixelRatio, this._canvas.style.width = a + "px" }, setHeight: function (a) { this.height = this._canvas.height = a * this.pixelRatio, this._canvas.style.height = a + "px" }, getWidth: function () { return this.width }, getHeight: function () { return this.height }, setSize: function (a, b) { this.setWidth(a), this.setHeight(b) }, toDataURL: function (a, b) { try { return this._canvas.toDataURL(a, b) } catch (c) { try { return this._canvas.toDataURL() } catch (d) { return Kinetic.Util.warn("Unable to get data URL. " + d.message), "" } } } }, Kinetic.SceneCanvas = function (a) { a = a || {}; var b = a.width || 0, c = a.height || 0; Kinetic.Canvas.call(this, a), this.context = new Kinetic.SceneContext(this), this.setSize(b, c) }, Kinetic.SceneCanvas.prototype = { setWidth: function (a) { var b = this.pixelRatio, c = this.getContext()._context; Kinetic.Canvas.prototype.setWidth.call(this, a), c.scale(b, b) }, setHeight: function (a) { var b = this.pixelRatio, c = this.getContext()._context; Kinetic.Canvas.prototype.setHeight.call(this, a), c.scale(b, b) } }, Kinetic.Util.extend(Kinetic.SceneCanvas, Kinetic.Canvas), Kinetic.HitCanvas = function (a) { a = a || {}; var b = a.width || 0, c = a.height || 0; Kinetic.Canvas.call(this, a), this.context = new Kinetic.HitContext(this), this.setSize(b, c) }, Kinetic.Util.extend(Kinetic.HitCanvas, Kinetic.Canvas) } (), function () { var a = ",", b = "(", c = ")", d = "([", e = "])", f = ";", g = "()", h = "=", i = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"]; Kinetic.Context = function (a) { this.init(a) }, Kinetic.Context.prototype = { init: function (a) { this.canvas = a, this._context = a._canvas.getContext("2d"), Kinetic.enableTrace && (this.traceArr = [], this._enableTrace()) }, fillShape: function (a) { a.getFillEnabled() && this._fill(a) }, strokeShape: function (a) { a.getStrokeEnabled() && this._stroke(a) }, fillStrokeShape: function (a) { var b = a.getFillEnabled(); b && this._fill(a), a.getStrokeEnabled() && this._stroke(a) }, getTrace: function (i) { var j, k, l, m, n = this.traceArr, o = n.length, p = ""; for (j = 0; o > j; j++) k = n[j], l = k.method, l ? (m = k.args, p += l, p += i ? g : Kinetic.Util._isArray(m[0]) ? d + m.join(a) + e : b + m.join(a) + c) : (p += k.property, i || (p += h + k.val)), p += f; return p }, clearTrace: function () { this.traceArr = [] }, _trace: function (a) { var b, c = this.traceArr; c.push(a), b = c.length, b >= Kinetic.traceArrMax && c.shift() }, reset: function () { var a = this.getCanvas().getPixelRatio(); this.setTransform(1 * a, 0, 0, 1 * a, 0, 0) }, getCanvas: function () { return this.canvas }, clear: function (a) { var b = this.getCanvas(); a ? this.clearRect(a.x || 0, a.y || 0, a.width || 0, a.height || 0) : this.clearRect(0, 0, b.getWidth(), b.getHeight()) }, _applyLineCap: function (a) { var b = a.getLineCap(); b && this.setAttr("lineCap", b) }, _applyOpacity: function (a) { var b = a.getAbsoluteOpacity(); 1 !== b && this.setAttr("globalAlpha", b) }, _applyLineJoin: function (a) { var b = a.getLineJoin(); b && this.setAttr("lineJoin", b) }, setAttr: function (a, b) { this._context[a] = b }, arc: function () { var a = arguments; this._context.arc(a[0], a[1], a[2], a[3], a[4], a[5]) }, beginPath: function () { this._context.beginPath() }, bezierCurveTo: function () { var a = arguments; this._context.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]) }, clearRect: function () { var a = arguments; this._context.clearRect(a[0], a[1], a[2], a[3]) }, clip: function () { this._context.clip() }, closePath: function () { this._context.closePath() }, createImageData: function () { var a = arguments; return 2 === a.length ? this._context.createImageData(a[0], a[1]) : 1 === a.length ? this._context.createImageData(a[0]) : void 0 }, createLinearGradient: function () { var a = arguments; return this._context.createLinearGradient(a[0], a[1], a[2], a[3]) }, createPattern: function () { var a = arguments; return this._context.createPattern(a[0], a[1]) }, createRadialGradient: function () { var a = arguments; return this._context.createRadialGradient(a[0], a[1], a[2], a[3], a[4], a[5]) }, drawImage: function () { var a = arguments, b = this._context; 3 === a.length ? b.drawImage(a[0], a[1], a[2]) : 5 === a.length ? b.drawImage(a[0], a[1], a[2], a[3], a[4]) : 9 === a.length && b.drawImage(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]) }, fill: function () { this._context.fill() }, fillText: function () { var a = arguments; this._context.fillText(a[0], a[1], a[2]) }, getImageData: function () { var a = arguments; return this._context.getImageData(a[0], a[1], a[2], a[3]) }, lineTo: function () { var a = arguments; this._context.lineTo(a[0], a[1]) }, moveTo: function () { var a = arguments; this._context.moveTo(a[0], a[1]) }, rect: function () { var a = arguments; this._context.rect(a[0], a[1], a[2], a[3]) }, putImageData: function () { var a = arguments; this._context.putImageData(a[0], a[1], a[2]) }, quadraticCurveTo: function () { var a = arguments; this._context.quadraticCurveTo(a[0], a[1], a[2], a[3]) }, restore: function () { this._context.restore() }, rotate: function () { var a = arguments; this._context.rotate(a[0]) }, save: function () { this._context.save() }, scale: function () { var a = arguments; this._context.scale(a[0], a[1]) }, setLineDash: function () { var a = arguments, b = this._context; this._context.setLineDash ? b.setLineDash(a[0]) : "mozDash" in b ? b.mozDash = a[0] : "webkitLineDash" in b && (b.webkitLineDash = a[0]) }, setTransform: function () { var a = arguments; this._context.setTransform(a[0], a[1], a[2], a[3], a[4], a[5]) }, stroke: function () { this._context.stroke() }, strokeText: function () { var a = arguments; this._context.strokeText(a[0], a[1], a[2]) }, transform: function () { var a = arguments; this._context.transform(a[0], a[1], a[2], a[3], a[4], a[5]) }, translate: function () { var a = arguments; this._context.translate(a[0], a[1]) }, _enableTrace: function () { var a, b, c = this, d = i.length, e = Kinetic.Util._simplifyArray, f = this.setAttr, g = function (a) { var d, f = c[a]; c[a] = function () { return b = e(Array.prototype.slice.call(arguments, 0)), d = f.apply(c, arguments), c._trace({ method: a, args: b }), d } }; for (a = 0; d > a; a++) g(i[a]); c.setAttr = function () { f.apply(c, arguments), c._trace({ property: arguments[0], val: arguments[1] }) } } }, Kinetic.SceneContext = function (a) { Kinetic.Context.call(this, a) }, Kinetic.SceneContext.prototype = { _fillColor: function (a) { var b = a.fill() || Kinetic.Util._getRGBAString({ red: a.fillRed(), green: a.fillGreen(), blue: a.fillBlue(), alpha: a.fillAlpha() }); this.setAttr("fillStyle", b), a._fillFunc(this) }, _fillPattern: function (a) { var b = a.getFillPatternImage(), c = a.getFillPatternX(), d = a.getFillPatternY(), e = a.getFillPatternScale(), f = Kinetic.getAngle(a.getFillPatternRotation()), g = a.getFillPatternOffset(), h = a.getFillPatternRepeat(); (c || d) && this.translate(c || 0, d || 0), f && this.rotate(f), e && this.scale(e.x, e.y), g && this.translate(-1 * g.x, -1 * g.y), this.setAttr("fillStyle", this.createPattern(b, h || "repeat")), this.fill() }, _fillLinearGradient: function (a) { var b = a.getFillLinearGradientStartPoint(), c = a.getFillLinearGradientEndPoint(), d = a.getFillLinearGradientColorStops(), e = this.createLinearGradient(b.x, b.y, c.x, c.y); if (d) { for (var f = 0; f < d.length; f += 2) e.addColorStop(d[f], d[f + 1]); this.setAttr("fillStyle", e), this.fill() } }, _fillRadialGradient: function (a) { for (var b = a.getFillRadialGradientStartPoint(), c = a.getFillRadialGradientEndPoint(), d = a.getFillRadialGradientStartRadius(), e = a.getFillRadialGradientEndRadius(), f = a.getFillRadialGradientColorStops(), g = this.createRadialGradient(b.x, b.y, d, c.x, c.y, e), h = 0; h < f.length; h += 2) g.addColorStop(f[h], f[h + 1]); this.setAttr("fillStyle", g), this.fill() }, _fill: function (a) { var b = a.fill() || a.fillRed() || a.fillGreen() || a.fillBlue(), c = a.getFillPatternImage(), d = a.getFillLinearGradientColorStops(), e = a.getFillRadialGradientColorStops(), f = a.getFillPriority(); b && "color" === f ? this._fillColor(a) : c && "pattern" === f ? this._fillPattern(a) : d && "linear-gradient" === f ? this._fillLinearGradient(a) : e && "radial-gradient" === f ? this._fillRadialGradient(a) : b ? this._fillColor(a) : c ? this._fillPattern(a) : d ? this._fillLinearGradient(a) : e && this._fillRadialGradient(a) }, _stroke: function (a) { var b = a.dash(), c = a.getStrokeScaleEnabled(); a.hasStroke() && (c || (this.save(), this.setTransform(1, 0, 0, 1, 0, 0)), this._applyLineCap(a), b && a.dashEnabled() && this.setLineDash(b), this.setAttr("lineWidth", a.strokeWidth()), this.setAttr("strokeStyle", a.stroke() || Kinetic.Util._getRGBAString({ red: a.strokeRed(), green: a.strokeGreen(), blue: a.strokeBlue(), alpha: a.strokeAlpha() })), a._strokeFunc(this), c || this.restore()) }, _applyShadow: function (a) { var b = Kinetic.Util, c = a.getAbsoluteOpacity(), d = b.get(a.getShadowColor(), "black"), e = b.get(a.getShadowBlur(), 5), f = b.get(a.getShadowOpacity(), 1), g = b.get(a.getShadowOffset(), { x: 0, y: 0 }); f && this.setAttr("globalAlpha", f * c), this.setAttr("shadowColor", d), this.setAttr("shadowBlur", e), this.setAttr("shadowOffsetX", g.x), this.setAttr("shadowOffsetY", g.y) } }, Kinetic.Util.extend(Kinetic.SceneContext, Kinetic.Context), Kinetic.HitContext = function (a) { Kinetic.Context.call(this, a) }, Kinetic.HitContext.prototype = { _fill: function (a) { this.save(), this.setAttr("fillStyle", a.colorKey), a._fillFuncHit(this), this.restore() }, _stroke: function (a) { a.hasStroke() && (this._applyLineCap(a), this.setAttr("lineWidth", a.strokeWidth()), this.setAttr("strokeStyle", a.colorKey), a._strokeFuncHit(this)) } }, Kinetic.Util.extend(Kinetic.HitContext, Kinetic.Context) } (), function () { var a = "get", b = "set"; Kinetic.Factory = { addGetterSetter: function (a, b, c, d, e) { this.addGetter(a, b, c), this.addSetter(a, b, d, e), this.addOverloadedGetterSetter(a, b) }, addGetter: function (b, c, d) { var e = a + Kinetic.Util._capitalize(c); b.prototype[e] = function () { var a = this.attrs[c]; return void 0 === a ? d : a } }, addSetter: function (a, c, d, e) { var f = b + Kinetic.Util._capitalize(c); a.prototype[f] = function (a) { return d && (a = d.call(this, a)), this._setAttr(c, a), e && e.call(this), this } }, addComponentsGetterSetter: function (c, d, e, f, g) { var h, i, j = e.length, k = Kinetic.Util._capitalize, l = a + k(d), m = b + k(d); c.prototype[l] = function () { var a = {}; for (h = 0; j > h; h++) i = e[h], a[i] = this.getAttr(d + k(i)); return a }, c.prototype[m] = function (a) { var b, c = this.attrs[d]; f && (a = f.call(this, a)); for (b in a) this._setAttr(d + k(b), a[b]); return this._fireChangeEvent(d, c, a), g && g.call(this), this }, this.addOverloadedGetterSetter(c, d) }, addOverloadedGetterSetter: function (c, d) { var e = Kinetic.Util._capitalize(d), f = b + e, g = a + e; c.prototype[d] = function () { return arguments.length ? (this[f](arguments[0]), this) : this[g]() } }, backCompat: function (a, b) { var c; for (c in b) a.prototype[c] = a.prototype[b[c]] }, afterSetFilter: function () { this._filterUpToDate = !1 } }, Kinetic.Validators = { RGBComponent: function (a) { return a > 255 ? 255 : 0 > a ? 0 : Math.round(a) }, alphaComponent: function (a) { return a > 1 ? 1 : 1e-4 > a ? 1e-4 : a } } } (), function () {
    var a = "absoluteOpacity", b = "absoluteTransform", c = "Change", d = "children", e = ".", f = "", g = "get", h = "id", i = "kinetic", j = "listening", k = "mouseenter", l = "mouseleave", m = "name", n = "set", o = "Shape", p = " ", q = "stage", r = "transform", s = "Stage", t = "visible", u = ["id"], v = ["xChange.kinetic", "yChange.kinetic", "scaleXChange.kinetic", "scaleYChange.kinetic", "skewXChange.kinetic", "skewYChange.kinetic", "rotationChange.kinetic", "offsetXChange.kinetic", "offsetYChange.kinetic", "transformsEnabledChange.kinetic"].join(p); Kinetic.Util.addMethods(Kinetic.Node, {
        _init: function (c) { var d = this; this._id = Kinetic.idCounter++, this.eventListeners = {}, this.attrs = {}, this._cache = {}, this._filterUpToDate = !1, this.setAttrs(c), this.on(v, function () { this._clearCache(r), d._clearSelfAndDescendantCache(b) }), this.on("visibleChange.kinetic", function () { d._clearSelfAndDescendantCache(t) }), this.on("listeningChange.kinetic", function () { d._clearSelfAndDescendantCache(j) }), this.on("opacityChange.kinetic", function () { d._clearSelfAndDescendantCache(a) }) }, _clearCache: function (a) { a ? delete this._cache[a] : this._cache = {} }, _getCache: function (a, b) { var c = this._cache[a]; return void 0 === c && (this._cache[a] = b.call(this)), this._cache[a] }, _clearSelfAndDescendantCache: function (a) { this._clearCache(a), this.children && this.getChildren().each(function (b) { b._clearSelfAndDescendantCache(a) }) }, clearCache: function () { return delete this._cache.canvas, this._filterUpToDate = !1, this }, cache: function (a) { { var b = a || {}, c = b.x || 0, d = b.y || 0, e = b.width || this.width(), f = b.height || this.height(), g = b.drawBorder || !1; this.getLayer() } if (0 === e || 0 === f) return void Kinetic.Util.warn("Width or height of caching configuration equals 0. Cache is ignored."); var h = new Kinetic.SceneCanvas({ pixelRatio: 1, width: e, height: f }), i = new Kinetic.SceneCanvas({ pixelRatio: 1, width: e, height: f }), j = new Kinetic.HitCanvas({ width: e, height: f }), k = (this.transformsEnabled(), this.x(), this.y(), h.getContext()), l = j.getContext(); return this.clearCache(), k.save(), l.save(), g && (k.save(), k.beginPath(), k.rect(0, 0, e, f), k.closePath(), k.setAttr("strokeStyle", "red"), k.setAttr("lineWidth", 5), k.stroke(), k.restore()), k.translate(-1 * c, -1 * d), l.translate(-1 * c, -1 * d), "Shape" === this.nodeType && (k.translate(-1 * this.x(), -1 * this.y()), l.translate(-1 * this.x(), -1 * this.y())), this.drawScene(h, this), this.drawHit(j, this), k.restore(), l.restore(), this._cache.canvas = { scene: h, filter: i, hit: j }, this }, _drawCachedSceneCanvas: function (a) { a.save(), this.getLayer()._applyTransform(this, a), a.drawImage(this._getCachedSceneCanvas()._canvas, 0, 0), a.restore() }, _getCachedSceneCanvas: function () { var a, b, c, d, e = this.filters(), f = this._cache.canvas, g = f.scene, h = f.filter, i = h.getContext(); if (e) { if (!this._filterUpToDate) { try { for (a = e.length, i.clear(), i.drawImage(g._canvas, 0, 0), b = i.getImageData(0, 0, h.getWidth(), h.getHeight()), c = 0; a > c; c++) d = e[c], d.call(this, b), i.putImageData(b, 0, 0) } catch (j) { Kinetic.Util.warn("Unable to apply filter. " + j.message) } this._filterUpToDate = !0 } return h } return g }, _drawCachedHitCanvas: function (a) { var b = this._cache.canvas, c = b.hit; a.save(), this.getLayer()._applyTransform(this, a), a.drawImage(c._canvas, 0, 0), a.restore() }, on: function (a, b) { var c, d, g, h, i, j = a.split(p), k = j.length; for (c = 0; k > c; c++) d = j[c], g = d.split(e), h = g[0], i = g[1] || f, this.eventListeners[h] || (this.eventListeners[h] = []), this.eventListeners[h].push({ name: i, handler: b }); return this }, off: function (a) { var b, c, d, f, g, h, i = a.split(p), j = i.length; for (b = 0; j > b; b++) if (d = i[b], f = d.split(e), g = f[0], h = f[1], g) this.eventListeners[g] && this._off(g, h); else for (c in this.eventListeners) this._off(c, h); return this }, dispatchEvent: function (a) { var b = { target: this, type: a.type, evt: a }; this.fire(a.type, b) }, addEventListener: function (a, b) { this.on(a, function (a) { b.call(this, a.evt) }) }, remove: function () { var c = this.getParent(); return c && c.children && (c.children.splice(this.index, 1), c._setChildrenIndices(), delete this.parent), this._clearSelfAndDescendantCache(q), this._clearSelfAndDescendantCache(b), this._clearSelfAndDescendantCache(t), this._clearSelfAndDescendantCache(j), this._clearSelfAndDescendantCache(a), this }, destroy: function () { Kinetic._removeId(this.getId()), Kinetic._removeName(this.getName(), this._id), this.remove() }, getAttr: function (a) { var b = g + Kinetic.Util._capitalize(a); return Kinetic.Util._isFunction(this[b]) ? this[b]() : this.attrs[a] }, getAncestors: function () { for (var a = this.getParent(), b = new Kinetic.Collection; a; ) b.push(a), a = a.getParent(); return b }, getAttrs: function () { return this.attrs || {} }, setAttrs: function (a) { var b, c; if (a) for (b in a) b === d || (c = n + Kinetic.Util._capitalize(b), Kinetic.Util._isFunction(this[c]) ? this[c](a[b]) : this._setAttr(b, a[b])); return this }, isListening: function () { return this._getCache(j, this._isListening) }, _isListening: function () { var a = this.getListening(), b = this.getParent(); return "inherit" === a ? b ? b.isListening() : !0 : a }, isVisible: function () { return this._getCache(t, this._isVisible) }, _isVisible: function () { var a = this.getVisible(), b = this.getParent(); return "inherit" === a ? b ? b.isVisible() : !0 : a }, shouldDrawHit: function () { var a = this.getLayer(); return a && a.hitGraphEnabled() && this.isListening() && this.isVisible() && !Kinetic.isDragging() }, show: function () { return this.setVisible(!0), this }, hide: function () { return this.setVisible(!1), this }, getZIndex: function () { return this.index || 0 }, getAbsoluteZIndex: function () { function a(i) { for (b = [], c = i.length, d = 0; c > d; d++) e = i[d], h++, e.nodeType !== o && (b = b.concat(e.getChildren().toArray())), e._id === g._id && (d = c); b.length > 0 && b[0].getDepth() <= f && a(b) } var b, c, d, e, f = this.getDepth(), g = this, h = 0; return g.nodeType !== s && a(g.getStage().getChildren()), h }, getDepth: function () { for (var a = 0, b = this.parent; b; ) a++, b = b.parent; return a }, setPosition: function (a) { return this.setX(a.x), this.setY(a.y), this }, getPosition: function () { return { x: this.getX(), y: this.getY()} }, getAbsolutePosition: function () { var a = this.getAbsoluteTransform().getMatrix(), b = new Kinetic.Transform, c = this.offset(); return b.m = a.slice(), b.translate(c.x, c.y), b.getTranslation() }, setAbsolutePosition: function (a) { var b, c = this._clearTransform(); return this.attrs.x = c.x, this.attrs.y = c.y, delete c.x, delete c.y, b = this.getAbsoluteTransform(), b.invert(), b.translate(a.x, a.y), a = { x: this.attrs.x + b.getTranslation().x, y: this.attrs.y + b.getTranslation().y }, this.setPosition({ x: a.x, y: a.y }), this._setTransform(c), this }, _setTransform: function (a) { var c; for (c in a) this.attrs[c] = a[c]; this._clearCache(r), this._clearSelfAndDescendantCache(b) }, _clearTransform: function () { var a = { x: this.getX(), y: this.getY(), rotation: this.getRotation(), scaleX: this.getScaleX(), scaleY: this.getScaleY(), offsetX: this.getOffsetX(), offsetY: this.getOffsetY(), skewX: this.getSkewX(), skewY: this.getSkewY() }; return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, this._clearCache(r), this._clearSelfAndDescendantCache(b), a }, move: function (a) { var b = a.x, c = a.y, d = this.getX(), e = this.getY(); return void 0 !== b && (d += b), void 0 !== c && (e += c), this.setPosition({ x: d, y: e }), this }, _eachAncestorReverse: function (a, b) { var c, d, e = [], f = this.getParent(); if (b && b._id === this._id) return a(this), !0; for (e.unshift(this); f && (!b || f._id !== b._id); ) e.unshift(f), f = f.parent; for (c = e.length, d = 0; c > d; d++) a(e[d]) }, rotate: function (a) { return this.setRotation(this.getRotation() + a), this }, moveToTop: function () { if (!this.parent) return void Kinetic.Util.warn("Node has no parent. moveToTop function is ignored."); var a = this.index; return this.parent.children.splice(a, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0 }, moveUp: function () { if (!this.parent) return void Kinetic.Util.warn("Node has no parent. moveUp function is ignored."); var a = this.index, b = this.parent.getChildren().length; return b - 1 > a ? (this.parent.children.splice(a, 1), this.parent.children.splice(a + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1 }, moveDown: function () { if (!this.parent) return void Kinetic.Util.warn("Node has no parent. moveDown function is ignored."); var a = this.index; return a > 0 ? (this.parent.children.splice(a, 1), this.parent.children.splice(a - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1 }, moveToBottom: function () { if (!this.parent) return void Kinetic.Util.warn("Node has no parent. moveToBottom function is ignored."); var a = this.index; return a > 0 ? (this.parent.children.splice(a, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1 }, setZIndex: function (a) { if (!this.parent) return void Kinetic.Util.warn("Node has no parent. zIndex parameter is ignored."); var b = this.index; return this.parent.children.splice(b, 1), this.parent.children.splice(a, 0, this), this.parent._setChildrenIndices(), this }, getAbsoluteOpacity: function () { return this._getCache(a, this._getAbsoluteOpacity) }, _getAbsoluteOpacity: function () { var a = this.getOpacity(); return this.getParent() && (a *= this.getParent().getAbsoluteOpacity()), a }, moveTo: function (a) { return Kinetic.Node.prototype.remove.call(this), a.add(this), this }, toObject: function () { var a, b, c, d, e = Kinetic.Util, f = {}, g = this.getAttrs(); f.attrs = {}; for (a in g) b = g[a], e._isFunction(b) || e._isElement(b) || e._isObject(b) && e._hasMethods(b) || (c = this[a], delete g[a], d = c ? c.call(this) : null, g[a] = b, d !== b && (f.attrs[a] = b)); return f.className = this.getClassName(), f }, toJSON: function () { return JSON.stringify(this.toObject()) }, getParent: function () { return this.parent }, getLayer: function () { var a = this.getParent(); return a ? a.getLayer() : null }, getStage: function () { return this._getCache(q, this._getStage) }, _getStage: function () { var a = this.getParent(); return a ? a.getStage() : void 0 }, fire: function (a, b, c) { return c ? this._fireAndBubble(a, b || {}) : this._fire(a, b || {}), this }, getAbsoluteTransform: function (a) { return a ? this._getAbsoluteTransform(a) : this._getCache(b, this._getAbsoluteTransform) }, _getAbsoluteTransform: function (a) { var b, c, d = new Kinetic.Transform; return this._eachAncestorReverse(function (a) { b = a.transformsEnabled(), c = a.getTransform(), "all" === b ? d.multiply(c) : "position" === b && d.translate(a.x(), a.y()) }, a), d }, getTransform: function () { return this._getCache(r, this._getTransform) }, _getTransform: function () { var a = new Kinetic.Transform, b = this.getX(), c = this.getY(), d = Kinetic.getAngle(this.getRotation()), e = this.getScaleX(), f = this.getScaleY(), g = this.getSkewX(), h = this.getSkewY(), i = this.getOffsetX(), j = this.getOffsetY(); return (0 !== b || 0 !== c) && a.translate(b, c), 0 !== d && a.rotate(d), (0 !== g || 0 !== h) && a.skew(g, h), (1 !== e || 1 !== f) && a.scale(e, f), (0 !== i || 0 !== j) && a.translate(-1 * i, -1 * j), a }, clone: function (a) { var b, c, d, e, f, g = this.getClassName(), h = Kinetic.Util.cloneObject(this.attrs); for (var j in u) { var k = u[j]; delete h[k] } for (b in a) h[b] = a[b]; var l = new Kinetic[g](h); for (b in this.eventListeners) for (c = this.eventListeners[b], d = c.length, e = 0; d > e; e++) f = c[e], f.name.indexOf(i) < 0 && (l.eventListeners[b] || (l.eventListeners[b] = []), l.eventListeners[b].push(f)); return l }, toDataURL: function (a) { a = a || {}; var b = a.mimeType || null, c = a.quality || null, d = this.getStage(), e = a.x || 0, f = a.y || 0, g = new Kinetic.SceneCanvas({ width: a.width || this.getWidth() || (d ? d.getWidth() : 0), height: a.height || this.getHeight() || (d ? d.getHeight() : 0), pixelRatio: 1 }), h = g.getContext(); return h.save(), (e || f) && h.translate(-1 * e, -1 * f), this.drawScene(g), h.restore(), g.toDataURL(b, c) }, toImage: function (a) { Kinetic.Util._getImage(this.toDataURL(a), function (b) { a.callback(b) }) }, setSize: function (a) { return this.setWidth(a.width), this.setHeight(a.height), this }, getSize: function () { return { width: this.getWidth(), height: this.getHeight()} }, getWidth: function () { return this.attrs.width || 0 }, getHeight: function () { return this.attrs.height || 0 }, getClassName: function () { return this.className || this.nodeType }, getType: function () { return this.nodeType }, getDragDistance: function () { return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Kinetic.dragDistance }, _get: function (a) { return this.nodeType === a ? [this] : [] }, _off: function (a, b) { var c, d, e = this.eventListeners[a]; for (c = 0; c < e.length; c++) if (d = e[c].name, !("kinetic" === d && "kinetic" !== b || b && d !== b)) { if (e.splice(c, 1), 0 === e.length) { delete this.eventListeners[a]; break } c-- } }, _fireChangeEvent: function (a, b, d) { this._fire(a + c, { oldVal: b, newVal: d }) }, setId: function (a) { var b = this.getId(); return Kinetic._removeId(b), Kinetic._addId(this, a), this._setAttr(h, a), this }, setName: function (a) { var b = this.getName(); return Kinetic._removeName(b, this._id), Kinetic._addName(this, a), this._setAttr(m, a), this }, setAttr: function () {
            var a = Array.prototype.slice.call(arguments), b = a[0], c = a[1], d = n + Kinetic.Util._capitalize(b), e = this[d];
            return Kinetic.Util._isFunction(e) ? e.call(this, c) : this._setAttr(b, c), this
        }, _setAttr: function (a, b) { var c; void 0 !== b && (c = this.attrs[a], this.attrs[a] = b, this._fireChangeEvent(a, c, b)) }, _setComponentAttr: function (a, b, c) { var d; void 0 !== c && (d = this.attrs[a], d || (this.attrs[a] = this.getAttr(a)), this.attrs[a][b] = c, this._fireChangeEvent(a, d, c)) }, _fireAndBubble: function (a, b, c) { var d = !0; b && this.nodeType === o && (b.target = this), a === k && c && this._id === c._id ? d = !1 : a === l && c && this._id === c._id && (d = !1), d && (this._fire(a, b), b && !b.cancelBubble && this.parent && (c && c.parent ? this._fireAndBubble.call(this.parent, a, b, c.parent) : this._fireAndBubble.call(this.parent, a, b))) }, _fire: function (a, b) { var c, d = this.eventListeners[a]; if (b.type = a, d) for (c = 0; c < d.length; c++) d[c].handler.call(this, b) }, draw: function () { return this.drawScene(), this.drawHit(), this }
    }), Kinetic.Node.create = function (a, b) { return this._createNode(JSON.parse(a), b) }, Kinetic.Node._createNode = function (a, b) { var c, d, e, f = Kinetic.Node.prototype.getClassName.call(a), g = a.children; if (b && (a.attrs.container = b), c = new Kinetic[f](a.attrs), g) for (d = g.length, e = 0; d > e; e++) c.add(this._createNode(g[e])); return c }, Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "position"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "x", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "y", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "opacity", 1), Kinetic.Factory.addGetter(Kinetic.Node, "name"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "name"), Kinetic.Factory.addGetter(Kinetic.Node, "id"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "id"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "rotation", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, "scale", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Node, "scaleX", 1), Kinetic.Factory.addGetterSetter(Kinetic.Node, "scaleY", 1), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, "skew", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Node, "skewX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "skewY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, "offset", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Node, "offsetX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Node, "offsetY", 0), Kinetic.Factory.addSetter(Kinetic.Node, "dragDistance"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "dragDistance"), Kinetic.Factory.addSetter(Kinetic.Node, "width", 0), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "width"), Kinetic.Factory.addSetter(Kinetic.Node, "height", 0), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "height"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "listening", "inherit"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "filters", void 0, function (a) { return this._filterUpToDate = !1, a }), Kinetic.Factory.addGetterSetter(Kinetic.Node, "visible", "inherit"), Kinetic.Factory.addGetterSetter(Kinetic.Node, "transformsEnabled", "all"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "size"), Kinetic.Factory.backCompat(Kinetic.Node, { rotateDeg: "rotate", setRotationDeg: "setRotation", getRotationDeg: "getRotation" }), Kinetic.Collection.mapMethods(Kinetic.Node)
} (), function () { Kinetic.Filters.Grayscale = function (a) { var b, c, d = a.data, e = d.length; for (b = 0; e > b; b += 4) c = .34 * d[b] + .5 * d[b + 1] + .16 * d[b + 2], d[b] = c, d[b + 1] = c, d[b + 2] = c } } (), function () { Kinetic.Filters.Brighten = function (a) { var b, c = 255 * this.brightness(), d = a.data, e = d.length; for (b = 0; e > b; b += 4) d[b] += c, d[b + 1] += c, d[b + 2] += c }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "brightness", 0, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.Invert = function (a) { var b, c = a.data, d = c.length; for (b = 0; d > b; b += 4) c[b] = 255 - c[b], c[b + 1] = 255 - c[b + 1], c[b + 2] = 255 - c[b + 2] } } (), function () { function a() { this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null } function b(b, e) { var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = b.data, E = b.width, F = b.height, G = e + e + 1, H = E - 1, I = F - 1, J = e + 1, K = J * (J + 1) / 2, L = new a, M = null, N = L, O = null, P = null, Q = c[e], R = d[e]; for (h = 1; G > h; h++) N = N.next = new a, h == J && (M = N); for (N.next = L, l = k = 0, g = 0; F > g; g++) { for (u = v = w = x = m = n = o = p = 0, q = J * (y = D[k]), r = J * (z = D[k + 1]), s = J * (A = D[k + 2]), t = J * (B = D[k + 3]), m += K * y, n += K * z, o += K * A, p += K * B, N = L, h = 0; J > h; h++) N.r = y, N.g = z, N.b = A, N.a = B, N = N.next; for (h = 1; J > h; h++) i = k + ((h > H ? H : h) << 2), m += (N.r = y = D[i]) * (C = J - h), n += (N.g = z = D[i + 1]) * C, o += (N.b = A = D[i + 2]) * C, p += (N.a = B = D[i + 3]) * C, u += y, v += z, w += A, x += B, N = N.next; for (O = L, P = M, f = 0; E > f; f++) D[k + 3] = B = p * Q >> R, 0 !== B ? (B = 255 / B, D[k] = (m * Q >> R) * B, D[k + 1] = (n * Q >> R) * B, D[k + 2] = (o * Q >> R) * B) : D[k] = D[k + 1] = D[k + 2] = 0, m -= q, n -= r, o -= s, p -= t, q -= O.r, r -= O.g, s -= O.b, t -= O.a, i = l + ((i = f + e + 1) < H ? i : H) << 2, u += O.r = D[i], v += O.g = D[i + 1], w += O.b = D[i + 2], x += O.a = D[i + 3], m += u, n += v, o += w, p += x, O = O.next, q += y = P.r, r += z = P.g, s += A = P.b, t += B = P.a, u -= y, v -= z, w -= A, x -= B, P = P.next, k += 4; l += E } for (f = 0; E > f; f++) { for (v = w = x = u = n = o = p = m = 0, k = f << 2, q = J * (y = D[k]), r = J * (z = D[k + 1]), s = J * (A = D[k + 2]), t = J * (B = D[k + 3]), m += K * y, n += K * z, o += K * A, p += K * B, N = L, h = 0; J > h; h++) N.r = y, N.g = z, N.b = A, N.a = B, N = N.next; for (j = E, h = 1; e >= h; h++) k = j + f << 2, m += (N.r = y = D[k]) * (C = J - h), n += (N.g = z = D[k + 1]) * C, o += (N.b = A = D[k + 2]) * C, p += (N.a = B = D[k + 3]) * C, u += y, v += z, w += A, x += B, N = N.next, I > h && (j += E); for (k = f, O = L, P = M, g = 0; F > g; g++) i = k << 2, D[i + 3] = B = p * Q >> R, B > 0 ? (B = 255 / B, D[i] = (m * Q >> R) * B, D[i + 1] = (n * Q >> R) * B, D[i + 2] = (o * Q >> R) * B) : D[i] = D[i + 1] = D[i + 2] = 0, m -= q, n -= r, o -= s, p -= t, q -= O.r, r -= O.g, s -= O.b, t -= O.a, i = f + ((i = g + J) < I ? i : I) * E << 2, m += u += O.r = D[i], n += v += O.g = D[i + 1], o += w += O.b = D[i + 2], p += x += O.a = D[i + 3], O = O.next, q += y = P.r, r += z = P.g, s += A = P.b, t += B = P.a, u -= y, v -= z, w -= A, x -= B, P = P.next, k += E } } var c = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], d = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]; Kinetic.Filters.Blur = function (a) { var c = Math.round(this.blurRadius()); c > 0 && b(a, c) }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "blurRadius", 0, null, Kinetic.Factory.afterSetFilter) } (), function () { function a(a, b, c) { var d = 4 * (c * a.width + b), e = []; return e.push(a.data[d++], a.data[d++], a.data[d++], a.data[d++]), e } function b(a, b) { return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2)) } function c(a) { for (var b = [0, 0, 0], c = 0; c < a.length; c++) b[0] += a[c][0], b[1] += a[c][1], b[2] += a[c][2]; return b[0] /= a.length, b[1] /= a.length, b[2] /= a.length, b } function d(d, e) { var f = a(d, 0, 0), g = a(d, d.width - 1, 0), h = a(d, 0, d.height - 1), i = a(d, d.width - 1, d.height - 1), j = e || 10; if (b(f, g) < j && b(g, i) < j && b(i, h) < j && b(h, f) < j) { for (var k = c([g, f, i, h]), l = [], m = 0; m < d.width * d.height; m++) { var n = b(k, [d.data[4 * m], d.data[4 * m + 1], d.data[4 * m + 2]]); l[m] = j > n ? 0 : 255 } return l } } function e(a, b) { for (var c = 0; c < a.width * a.height; c++) a.data[4 * c + 3] = b[c] } function f(a, b, c) { for (var d = [1, 1, 1, 1, 0, 1, 1, 1, 1], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++) for (var i = 0; b > i; i++) { for (var j = h * b + i, k = 0, l = 0; e > l; l++) for (var m = 0; e > m; m++) { var n = h + l - f, o = i + m - f; if (n >= 0 && c > n && o >= 0 && b > o) { var p = n * b + o, q = d[l * e + m]; k += a[p] * q } } g[j] = 2040 === k ? 255 : 0 } return g } function g(a, b, c) { for (var d = [1, 1, 1, 1, 1, 1, 1, 1, 1], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++) for (var i = 0; b > i; i++) { for (var j = h * b + i, k = 0, l = 0; e > l; l++) for (var m = 0; e > m; m++) { var n = h + l - f, o = i + m - f; if (n >= 0 && c > n && o >= 0 && b > o) { var p = n * b + o, q = d[l * e + m]; k += a[p] * q } } g[j] = k >= 1020 ? 255 : 0 } return g } function h(a, b, c) { for (var d = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++) for (var i = 0; b > i; i++) { for (var j = h * b + i, k = 0, l = 0; e > l; l++) for (var m = 0; e > m; m++) { var n = h + l - f, o = i + m - f; if (n >= 0 && c > n && o >= 0 && b > o) { var p = n * b + o, q = d[l * e + m]; k += a[p] * q } } g[j] = k } return g } Kinetic.Filters.Mask = function (a) { var b = this.threshold(), c = d(a, b); return c && (c = f(c, a.width, a.height), c = g(c, a.width, a.height), c = h(c, a.width, a.height), e(a, c)), a }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "threshold", 0, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.RGB = function (a) { var b, c, d = a.data, e = d.length, f = this.red(), g = this.green(), h = this.blue(); for (b = 0; e > b; b += 4) c = (.34 * d[b] + .5 * d[b + 1] + .16 * d[b + 2]) / 255, d[b] = c * f, d[b + 1] = c * g, d[b + 2] = c * h, d[b + 3] = d[b + 3] }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "red", 0, function (a) { return this._filterUpToDate = !1, a > 255 ? 255 : 0 > a ? 0 : Math.round(a) }), Kinetic.Factory.addGetterSetter(Kinetic.Node, "green", 0, function (a) { return this._filterUpToDate = !1, a > 255 ? 255 : 0 > a ? 0 : Math.round(a) }), Kinetic.Factory.addGetterSetter(Kinetic.Node, "blue", 0, Kinetic.Validators.RGBComponent, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.HSV = function (a) { var b, c, d, e, f, g = a.data, h = g.length, i = Math.pow(2, this.value()), j = Math.pow(2, this.saturation()), k = Math.abs(this.hue() + 360) % 360, l = i * j * Math.cos(k * Math.PI / 180), m = i * j * Math.sin(k * Math.PI / 180), n = .299 * i + .701 * l + .167 * m, o = .587 * i - .587 * l + .33 * m, p = .114 * i - .114 * l - .497 * m, q = .299 * i - .299 * l - .328 * m, r = .587 * i + .413 * l + .035 * m, s = .114 * i - .114 * l + .293 * m, t = .299 * i - .3 * l + 1.25 * m, u = .587 * i - .586 * l - 1.05 * m, v = .114 * i + .886 * l - .2 * m; for (b = 0; h > b; b += 4) c = g[b + 0], d = g[b + 1], e = g[b + 2], f = g[b + 3], g[b + 0] = n * c + o * d + p * e, g[b + 1] = q * c + r * d + s * e, g[b + 2] = t * c + u * d + v * e, g[b + 3] = f }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "hue", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "saturation", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "value", 0, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Factory.addGetterSetter(Kinetic.Node, "hue", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "saturation", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "luminance", 0, null, Kinetic.Factory.afterSetFilter), Kinetic.Filters.HSL = function (a) { var b, c, d, e, f, g = a.data, h = g.length, i = 1, j = Math.pow(2, this.saturation()), k = Math.abs(this.hue() + 360) % 360, l = 127 * this.luminance(), m = i * j * Math.cos(k * Math.PI / 180), n = i * j * Math.sin(k * Math.PI / 180), o = .299 * i + .701 * m + .167 * n, p = .587 * i - .587 * m + .33 * n, q = .114 * i - .114 * m - .497 * n, r = .299 * i - .299 * m - .328 * n, s = .587 * i + .413 * m + .035 * n, t = .114 * i - .114 * m + .293 * n, u = .299 * i - .3 * m + 1.25 * n, v = .587 * i - .586 * m - 1.05 * n, w = .114 * i + .886 * m - .2 * n; for (b = 0; h > b; b += 4) c = g[b + 0], d = g[b + 1], e = g[b + 2], f = g[b + 3], g[b + 0] = o * c + p * d + q * e + l, g[b + 1] = r * c + s * d + t * e + l, g[b + 2] = u * c + v * d + w * e + l, g[b + 3] = f } } (), function () { Kinetic.Filters.Emboss = function (a) { var b = 10 * this.embossStrength(), c = 255 * this.embossWhiteLevel(), d = this.embossDirection(), e = this.embossBlend(), f = 0, g = 0, h = a.data, i = a.width, j = a.height, k = 4 * i, l = j; switch (d) { case "top-left": f = -1, g = -1; break; case "top": f = -1, g = 0; break; case "top-right": f = -1, g = 1; break; case "right": f = 0, g = 1; break; case "bottom-right": f = 1, g = 1; break; case "bottom": f = 1, g = 0; break; case "bottom-left": f = 1, g = -1; break; case "left": f = 0, g = -1 } do { var m = (l - 1) * k, n = f; 1 > l + n && (n = 0), l + n > j && (n = 0); var o = (l - 1 + n) * i * 4, p = i; do { var q = m + 4 * (p - 1), r = g; 1 > p + r && (r = 0), p + r > i && (r = 0); var s = o + 4 * (p - 1 + r), t = h[q] - h[s], u = h[q + 1] - h[s + 1], v = h[q + 2] - h[s + 2], w = t, x = w > 0 ? w : -w, y = u > 0 ? u : -u, z = v > 0 ? v : -v; if (y > x && (w = u), z > x && (w = v), w *= b, e) { var A = h[q] + w, B = h[q + 1] + w, C = h[q + 2] + w; h[q] = A > 255 ? 255 : 0 > A ? 0 : A, h[q + 1] = B > 255 ? 255 : 0 > B ? 0 : B, h[q + 2] = C > 255 ? 255 : 0 > C ? 0 : C } else { var D = c - w; 0 > D ? D = 0 : D > 255 && (D = 255), h[q] = h[q + 1] = h[q + 2] = D } } while (--p) } while (--l) }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossStrength", .5, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossWhiteLevel", .5, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossDirection", "top-left", null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "embossBlend", !1, null, Kinetic.Factory.afterSetFilter) } (), function () { function a(a, b, c, d, e) { var f, g = c - b, h = e - d; return 0 === g ? d + h / 2 : 0 === h ? d : (f = (a - b) / g, f = h * f + d) } Kinetic.Filters.Enhance = function (b) { var c, d, e, f, g = b.data, h = g.length, i = g[0], j = i, k = g[1], l = k, m = g[2], n = m, o = g[3], p = o, q = this.enhance(); if (0 !== q) { for (f = 0; h > f; f += 4) c = g[f + 0], i > c ? i = c : c > j && (j = c), d = g[f + 1], k > d ? k = d : d > l && (l = d), e = g[f + 2], m > e ? m = e : e > n && (n = e); j === i && (j = 255, i = 0), l === k && (l = 255, k = 0), n === m && (n = 255, m = 0), p === o && (p = 255, o = 0); var r, s, t, u, v, w, x, y, z, A, B, C; for (q > 0 ? (s = j + q * (255 - j), t = i - q * (i - 0), v = l + q * (255 - l), w = k - q * (k - 0), y = n + q * (255 - n), C = m - q * (m - 0), B = p + q * (255 - p), z = o - q * (o - 0)) : (r = .5 * (j + i), s = j + q * (j - r), t = i + q * (i - r), u = .5 * (l + k), v = l + q * (l - u), w = k + q * (k - u), x = .5 * (n + m), y = n + q * (n - x), C = m + q * (m - x), A = .5 * (p + o), B = p + q * (p - A), z = o + q * (o - A)), f = 0; h > f; f += 4) g[f + 0] = a(g[f + 0], i, j, t, s), g[f + 1] = a(g[f + 1], k, l, w, v), g[f + 2] = a(g[f + 2], m, n, C, y) } }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "enhance", 0, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.Posterize = function (a) { var b, c = Math.round(254 * this.levels()) + 1, d = a.data, e = d.length, f = 255 / c; for (b = 0; e > b; b += 1) d[b] = Math.floor(d[b] / f) * f }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "levels", .5, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.Noise = function (a) { var b, c = 255 * this.noise(), d = a.data, e = d.length, f = c / 2; for (b = 0; e > b; b += 4) d[b + 0] += f - 2 * f * Math.random(), d[b + 1] += f - 2 * f * Math.random(), d[b + 2] += f - 2 * f * Math.random() }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "noise", .2, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.Pixelate = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p = Math.ceil(this.pixelSize()), q = a.width, r = a.height, s = Math.ceil(q / p), t = Math.ceil(r / p); for (a = a.data, m = 0; s > m; m += 1) for (n = 0; t > n; n += 1) { for (e = 0, f = 0, g = 0, h = 0, i = m * p, j = i + p, k = n * p, l = k + p, o = 0, b = i; j > b; b += 1) if (!(b >= q)) for (c = k; l > c; c += 1) c >= r || (d = 4 * (q * c + b), e += a[d + 0], f += a[d + 1], g += a[d + 2], h += a[d + 3], o += 1); for (e /= o, f /= o, g /= o, b = i; j > b; b += 1) if (!(b >= q)) for (c = k; l > c; c += 1) c >= r || (d = 4 * (q * c + b), a[d + 0] = e, a[d + 1] = f, a[d + 2] = g, a[d + 3] = h) } }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "pixelSize", 8, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.Threshold = function (a) { var b, c = 255 * this.threshold(), d = a.data, e = d.length; for (b = 0; e > b; b += 1) d[b] = d[b] < c ? 0 : 255 }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "threshold", .5, null, Kinetic.Factory.afterSetFilter) } (), function () { Kinetic.Filters.Sepia = function (a) { var b, c, d, e, f, g, h, i, j, k = a.data, l = a.width, m = a.height, n = 4 * l; do { b = (m - 1) * n, c = l; do d = b + 4 * (c - 1), e = k[d], f = k[d + 1], g = k[d + 2], h = .393 * e + .769 * f + .189 * g, i = .349 * e + .686 * f + .168 * g, j = .272 * e + .534 * f + .131 * g, k[d] = h > 255 ? 255 : h, k[d + 1] = i > 255 ? 255 : i, k[d + 2] = j > 255 ? 255 : j, k[d + 3] = k[d + 3]; while (--c) } while (--m) } } (), function () { Kinetic.Filters.Solarize = function (a) { var b = a.data, c = a.width, d = a.height, e = 4 * c, f = d; do { var g = (f - 1) * e, h = c; do { var i = g + 4 * (h - 1), j = b[i], k = b[i + 1], l = b[i + 2]; j > 127 && (j = 255 - j), k > 127 && (k = 255 - k), l > 127 && (l = 255 - l), b[i] = j, b[i + 1] = k, b[i + 2] = l } while (--h) } while (--f) } } (), function () { var a = function (a, b, c) { var d, e, f, g, h = a.data, i = b.data, j = a.width, k = a.height, l = c.polarCenterX || j / 2, m = c.polarCenterY || k / 2, n = 0, o = 0, p = 0, q = 0, r = Math.sqrt(l * l + m * m); e = j - l, f = k - m, g = Math.sqrt(e * e + f * f), r = g > r ? g : r; var s, t, u, v, w = k, x = j, y = 360 / x * Math.PI / 180; for (t = 0; x > t; t += 1) for (u = Math.sin(t * y), v = Math.cos(t * y), s = 0; w > s; s += 1) e = Math.floor(l + r * s / w * v), f = Math.floor(m + r * s / w * u), d = 4 * (f * j + e), n = h[d + 0], o = h[d + 1], p = h[d + 2], q = h[d + 3], d = 4 * (t + s * j), i[d + 0] = n, i[d + 1] = o, i[d + 2] = p, i[d + 3] = q }, b = function (a, b, c) { var d, e, f, g, h, i, j = a.data, k = b.data, l = a.width, m = a.height, n = c.polarCenterX || l / 2, o = c.polarCenterY || m / 2, p = 0, q = 0, r = 0, s = 0, t = Math.sqrt(n * n + o * o); e = l - n, f = m - o, i = Math.sqrt(e * e + f * f), t = i > t ? i : t; var u, v, w, x, y = m, z = l, A = c.polarRotation || 0; for (e = 0; l > e; e += 1) for (f = 0; m > f; f += 1) g = e - n, h = f - o, u = Math.sqrt(g * g + h * h) * y / t, v = (180 * Math.atan2(h, g) / Math.PI + 360 + A) % 360, v = v * z / 360, w = Math.floor(v), x = Math.floor(u), d = 4 * (x * l + w), p = j[d + 0], q = j[d + 1], r = j[d + 2], s = j[d + 3], d = 4 * (f * l + e), k[d + 0] = p, k[d + 1] = q, k[d + 2] = r, k[d + 3] = s }, c = Kinetic.Util.createCanvasElement(); Kinetic.Filters.Kaleidoscope = function (d) { var e, f, g, h, i, j, k, l, m, n, o = d.width, p = d.height, q = Math.round(this.kaleidoscopePower()), r = Math.round(this.kaleidoscopeAngle()), s = Math.floor(o * (r % 360) / 360); if (!(1 > q)) { c.width = o, c.height = p; var t = c.getContext("2d").getImageData(0, 0, o, p); a(d, t, { polarCenterX: o / 2, polarCenterY: p / 2 }); for (var u = o / Math.pow(2, q); 8 >= u; ) u = 2 * u, q -= 1; u = Math.ceil(u); var v = u, w = 0, x = v, y = 1; for (s + u > o && (w = v, x = 0, y = -1), f = 0; p > f; f += 1) for (e = w; e !== x; e += y) g = Math.round(e + s) % o, m = 4 * (o * f + g), i = t.data[m + 0], j = t.data[m + 1], k = t.data[m + 2], l = t.data[m + 3], n = 4 * (o * f + e), t.data[n + 0] = i, t.data[n + 1] = j, t.data[n + 2] = k, t.data[n + 3] = l; for (f = 0; p > f; f += 1) for (v = Math.floor(u), h = 0; q > h; h += 1) { for (e = 0; v + 1 > e; e += 1) m = 4 * (o * f + e), i = t.data[m + 0], j = t.data[m + 1], k = t.data[m + 2], l = t.data[m + 3], n = 4 * (o * f + 2 * v - e - 1), t.data[n + 0] = i, t.data[n + 1] = j, t.data[n + 2] = k, t.data[n + 3] = l; v *= 2 } b(t, d, { polarRotation: 0 }) } }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "kaleidoscopePower", 2, null, Kinetic.Factory.afterSetFilter), Kinetic.Factory.addGetterSetter(Kinetic.Node, "kaleidoscopeAngle", 0, null, Kinetic.Factory.afterSetFilter) } (), function () { function a(a) { Kinetic.root.setTimeout(a, 1e3 / 60) } function b() { return e.apply(Kinetic.root, arguments) } var c = 500, d = function () { return Kinetic.root.performance && Kinetic.root.performance.now ? function () { return Kinetic.root.performance.now() } : function () { return (new Date).getTime() } } (), e = function () { return Kinetic.root.requestAnimationFrame || Kinetic.root.webkitRequestAnimationFrame || Kinetic.root.mozRequestAnimationFrame || Kinetic.root.oRequestAnimationFrame || Kinetic.root.msRequestAnimationFrame || a } (); Kinetic.Animation = function (a, b) { var c = Kinetic.Animation; this.func = a, this.setLayers(b), this.id = c.animIdCounter++, this.frame = { time: 0, timeDiff: 0, lastTime: d()} }, Kinetic.Animation.prototype = { setLayers: function (a) { var b = []; b = a ? a.length > 0 ? a : [a] : [], this.layers = b }, getLayers: function () { return this.layers }, addLayer: function (a) { var b, c, d = this.layers; if (d) { for (b = d.length, c = 0; b > c; c++) if (d[c]._id === a._id) return !1 } else this.layers = []; return this.layers.push(a), !0 }, isRunning: function () { var a, b = Kinetic.Animation, c = b.animations, d = c.length; for (a = 0; d > a; a++) if (c[a].id === this.id) return !0; return !1 }, start: function () { var a = Kinetic.Animation; this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = d(), a._addAnimation(this) }, stop: function () { Kinetic.Animation._removeAnimation(this) }, _updateFrameObject: function (a) { this.frame.timeDiff = a - this.frame.lastTime, this.frame.lastTime = a, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff } }, Kinetic.Animation.animations = [], Kinetic.Animation.animIdCounter = 0, Kinetic.Animation.animRunning = !1, Kinetic.Animation._addAnimation = function (a) { this.animations.push(a), this._handleAnimation() }, Kinetic.Animation._removeAnimation = function (a) { var b, c = a.id, d = this.animations, e = d.length; for (b = 0; e > b; b++) if (d[b].id === c) { this.animations.splice(b, 1); break } }, Kinetic.Animation._runFrames = function () { var a, b, c, e, f, g, h, i, j = {}, k = this.animations; for (e = 0; e < k.length; e++) { for (a = k[e], b = a.layers, c = a.func, a._updateFrameObject(d()), g = b.length, f = 0; g > f; f++) h = b[f], void 0 !== h._id && (j[h._id] = h); c && c.call(a, a.frame) } for (i in j) j[i].draw() }, Kinetic.Animation._animationLoop = function () { var a = Kinetic.Animation; a.animations.length ? (b(a._animationLoop), a._runFrames()) : a.animRunning = !1 }, Kinetic.Animation._handleAnimation = function () { var a = this; this.animRunning || (this.animRunning = !0, a._animationLoop()) }; var f = Kinetic.Node.prototype.moveTo; Kinetic.Node.prototype.moveTo = function (a) { f.call(this, a) }, Kinetic.Layer.prototype.batchDraw = function () { var a = this, b = Kinetic.Animation; this.batchAnim || (this.batchAnim = new b(function () { a.lastBatchDrawTime && d() - a.lastBatchDrawTime > c && a.batchAnim.stop() }, this)), this.lastBatchDrawTime = d(), this.batchAnim.isRunning() || (this.draw(), this.batchAnim.start()) }, Kinetic.Stage.prototype.batchDraw = function () { this.getChildren().each(function (a) { a.batchDraw() }) } } ((1, eval)("this")), function () { var a = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 }, b = 1, c = 2, d = 3, e = 0; Kinetic.Tween = function (b) { var c, d = this, g = b.node, h = g._id, i = b.duration || 1, j = b.easing || Kinetic.Easings.Linear, k = !!b.yoyo; this.node = g, this._id = e++, this.anim = new Kinetic.Animation(function () { d.tween.onEnterFrame() }, g.getLayer()), this.tween = new f(c, function (a) { d._tweenFunc(a) }, j, 0, 1, 1e3 * i, k), this._addListeners(), Kinetic.Tween.attrs[h] || (Kinetic.Tween.attrs[h] = {}), Kinetic.Tween.attrs[h][this._id] || (Kinetic.Tween.attrs[h][this._id] = {}), Kinetic.Tween.tweens[h] || (Kinetic.Tween.tweens[h] = {}); for (c in b) void 0 === a[c] && this._addAttr(c, b[c]); this.reset(), this.onFinish = b.onFinish, this.onReset = b.onReset }, Kinetic.Tween.attrs = {}, Kinetic.Tween.tweens = {}, Kinetic.Tween.prototype = { _addAttr: function (a, b) { var c, d, e, f, g, h = this.node, i = h._id; if (e = Kinetic.Tween.tweens[i][a], e && delete Kinetic.Tween.attrs[i][e][a], c = h.getAttr(a), Kinetic.Util._isArray(b)) for (d = [], g = b.length, f = 0; g > f; f++) d.push(b[f] - c[f]); else d = b - c; Kinetic.Tween.attrs[i][this._id][a] = { start: c, diff: d }, Kinetic.Tween.tweens[i][a] = this._id }, _tweenFunc: function (a) { var b, c, d, e, f, g, h, i = this.node, j = Kinetic.Tween.attrs[i._id][this._id]; for (b in j) { if (c = j[b], d = c.start, e = c.diff, Kinetic.Util._isArray(d)) for (f = [], h = d.length, g = 0; h > g; g++) f.push(d[g] + e[g] * a); else f = d + e * a; i.setAttr(b, f) } }, _addListeners: function () { var a = this; this.tween.onPlay = function () { a.anim.start() }, this.tween.onReverse = function () { a.anim.start() }, this.tween.onPause = function () { a.anim.stop() }, this.tween.onFinish = function () { a.onFinish && a.onFinish() }, this.tween.onReset = function () { a.onReset && a.onReset() } }, play: function () { return this.tween.play(), this }, reverse: function () { return this.tween.reverse(), this }, reset: function () { this.node; return this.tween.reset(), this }, seek: function (a) { this.node; return this.tween.seek(1e3 * a), this }, pause: function () { return this.tween.pause(), this }, finish: function () { this.node; return this.tween.finish(), this }, destroy: function () { var a, b = this.node._id, c = this._id, d = Kinetic.Tween.tweens[b]; this.pause(); for (a in d) delete Kinetic.Tween.tweens[b][a]; delete Kinetic.Tween.attrs[b][c] } }; var f = function (a, b, c, d, e, f, g) { this.prop = a, this.propFunc = b, this.begin = d, this._pos = d, this.duration = f, this._change = 0, this.prevPos = 0, this.yoyo = g, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = c, this._change = e - this.begin, this.pause() }; f.prototype = { fire: function (a) { var b = this[a]; b && b() }, setTime: function (a) { a > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : 0 > a ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = a, this.update()) }, getTime: function () { return this._time }, setPosition: function (a) { this.prevPos = this._pos, this.propFunc(a), this._pos = a }, getPosition: function (a) { return void 0 === a && (a = this._time), this.func(a, this.begin, this._change, this.duration) }, play: function () { this.state = c, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay") }, reverse: function () { this.state = d, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse") }, seek: function (a) { this.pause(), this._time = a, this.update(), this.fire("onSeek") }, reset: function () { this.pause(), this._time = 0, this.update(), this.fire("onReset") }, finish: function () { this.pause(), this._time = this.duration, this.update(), this.fire("onFinish") }, update: function () { this.setPosition(this.getPosition(this._time)) }, onEnterFrame: function () { var a = this.getTimer() - this._startTime; this.state === c ? this.setTime(a) : this.state === d && this.setTime(this.duration - a) }, pause: function () { this.state = b, this.fire("onPause") }, getTimer: function () { return (new Date).getTime() } }, Kinetic.Easings = { BackEaseIn: function (a, b, c, d) { var e = 1.70158; return c * (a /= d) * a * ((e + 1) * a - e) + b }, BackEaseOut: function (a, b, c, d) { var e = 1.70158; return c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b }, BackEaseInOut: function (a, b, c, d) { var e = 1.70158; return (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b }, ElasticEaseIn: function (a, b, c, d, e, f) { var g = 0; return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - g) * Math.PI / f)) + b) }, ElasticEaseOut: function (a, b, c, d, e, f) { var g = 0; return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), e * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - g) * Math.PI / f) + c + b) }, ElasticEaseInOut: function (a, b, c, d, e, f) { var g = 0; return 0 === a ? b : 2 == (a /= d / 2) ? b + c : (f || (f = .3 * d * 1.5), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), 1 > a ? -.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - g) * Math.PI / f) + b : e * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - g) * Math.PI / f) * .5 + c + b) }, BounceEaseOut: function (a, b, c, d) { return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b }, BounceEaseIn: function (a, b, c, d) { return c - Kinetic.Easings.BounceEaseOut(d - a, 0, c, d) + b }, BounceEaseInOut: function (a, b, c, d) { return d / 2 > a ? .5 * Kinetic.Easings.BounceEaseIn(2 * a, 0, c, d) + b : .5 * Kinetic.Easings.BounceEaseOut(2 * a - d, 0, c, d) + .5 * c + b }, EaseIn: function (a, b, c, d) { return c * (a /= d) * a + b }, EaseOut: function (a, b, c, d) { return -c * (a /= d) * (a - 2) + b }, EaseInOut: function (a, b, c, d) { return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b }, StrongEaseIn: function (a, b, c, d) { return c * (a /= d) * a * a * a * a + b }, StrongEaseOut: function (a, b, c, d) { return c * ((a = a / d - 1) * a * a * a * a + 1) + b }, StrongEaseInOut: function (a, b, c, d) { return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b }, Linear: function (a, b, c, d) { return c * a / d + b } } } (), function () { Kinetic.DD = { anim: new Kinetic.Animation, isDragging: !1, offset: { x: 0, y: 0 }, node: null, _drag: function (a) { var b = Kinetic.DD, c = b.node; if (c) { if (!b.isDragging) { var d = c.getStage().getPointerPosition(), e = c.dragDistance(), f = Math.max(Math.abs(d.x - b.startPointerPos.x), Math.abs(d.y - b.startPointerPos.y)); if (e > f) return } c._setDragPosition(a), b.isDragging || (b.isDragging = !0, c.fire("dragstart", a, !0)), c.fire("dragmove", a, !0) } }, _endDragBefore: function (a) { var b, c, d = Kinetic.DD, e = d.node; e && (b = e.nodeType, c = e.getLayer(), d.anim.stop(), d.isDragging && (d.isDragging = !1, Kinetic.listenClickTap = !1, a && (a.dragEndNode = e)), delete d.node, (c || e).draw()) }, _endDragAfter: function (a) { a = a || {}; var b = a.dragEndNode; a && b && b.fire("dragend", a, !0) } }, Kinetic.Node.prototype.startDrag = function () { var a = Kinetic.DD, b = this.getStage(), c = this.getLayer(), d = b.getPointerPosition(), e = this.getAbsolutePosition(); d && (a.node && a.node.stopDrag(), a.node = this, a.startPointerPos = d, a.offset.x = d.x - e.x, a.offset.y = d.y - e.y, a.anim.setLayers(c || this.getLayers()), a.anim.start(), this._setDragPosition()) }, Kinetic.Node.prototype._setDragPosition = function (a) { var b = Kinetic.DD, c = this.getStage().getPointerPosition(), d = this.getDragBoundFunc(); if (c) { var e = { x: c.x - b.offset.x, y: c.y - b.offset.y }; void 0 !== d && (e = d.call(this, e, a)), this.setAbsolutePosition(e) } }, Kinetic.Node.prototype.stopDrag = function () { var a = Kinetic.DD, b = {}; a._endDragBefore(b), a._endDragAfter(b) }, Kinetic.Node.prototype.setDraggable = function (a) { this._setAttr("draggable", a), this._dragChange() }; var a = Kinetic.Node.prototype.destroy; Kinetic.Node.prototype.destroy = function () { var b = Kinetic.DD; b.node && b.node._id === this._id && this.stopDrag(), a.call(this) }, Kinetic.Node.prototype.isDragging = function () { var a = Kinetic.DD; return a.node && a.node._id === this._id && a.isDragging }, Kinetic.Node.prototype._listenDrag = function () { var a = this; this._dragCleanup(), "Stage" === this.getClassName() ? this.on("contentMousedown.kinetic contentTouchstart.kinetic", function (b) { Kinetic.DD.node || a.startDrag(b) }) : this.on("mousedown.kinetic touchstart.kinetic", function (b) { Kinetic.DD.node || a.startDrag(b) }) }, Kinetic.Node.prototype._dragChange = function () { if (this.attrs.draggable) this._listenDrag(); else { this._dragCleanup(); var a = this.getStage(), b = Kinetic.DD; a && b.node && b.node._id === this._id && b.node.stopDrag() } }, Kinetic.Node.prototype._dragCleanup = function () { "Stage" === this.getClassName() ? (this.off("contentMousedown.kinetic"), this.off("contentTouchstart.kinetic")) : (this.off("mousedown.kinetic"), this.off("touchstart.kinetic")) }, Kinetic.Factory.addGetterSetter(Kinetic.Node, "dragBoundFunc"), Kinetic.Factory.addGetter(Kinetic.Node, "draggable", !1), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, "draggable"); var b = Kinetic.document.documentElement; b.addEventListener("mouseup", Kinetic.DD._endDragBefore, !0), b.addEventListener("touchend", Kinetic.DD._endDragBefore, !0), b.addEventListener("mouseup", Kinetic.DD._endDragAfter, !1), b.addEventListener("touchend", Kinetic.DD._endDragAfter, !1) } (), function () {
    Kinetic.Util.addMethods(Kinetic.Container, {
        __init: function (a) { this.children = new Kinetic.Collection, Kinetic.Node.call(this, a) }, getChildren: function (a) { if (a) { var b = new Kinetic.Collection; return this.children.each(function (c) { a(c) && b.push(c) }), b } return this.children }, hasChildren: function () { return this.getChildren().length > 0 }, removeChildren: function () { for (var a, b = Kinetic.Collection.toCollection(this.children), c = 0; c < b.length; c++) a = b[c], delete a.parent, a.index = 0, a.hasChildren() && a.removeChildren(), a.remove(); return b = null, this.children = new Kinetic.Collection, this }, destroyChildren: function () { for (var a, b = Kinetic.Collection.toCollection(this.children), c = 0; c < b.length; c++) a = b[c], delete a.parent, a.index = 0, a.destroy(); return b = null, this.children = new Kinetic.Collection, this }, add: function (a) { if (!(arguments.length > 1)) { if (a.getParent()) return void a.moveTo(this); var b = this.children; return this._validateAdd(a), a.index = b.length, a.parent = this, b.push(a), this._fire("add", { child: a }), this } for (var c = 0; c < arguments.length; c++) this.add(arguments[c]) }, destroy: function () { this.hasChildren() && this.destroyChildren(), Kinetic.Node.prototype.destroy.call(this) }, find: function (a) { var b, c, d, e, f, g, h, i = [], j = a.replace(/ /g, "").split(","), k = j.length; for (b = 0; k > b; b++) if (d = j[b], "#" === d.charAt(0)) f = this._getNodeById(d.slice(1)), f && i.push(f); else if ("." === d.charAt(0)) e = this._getNodesByName(d.slice(1)), i = i.concat(e); else for (g = this.getChildren(), h = g.length, c = 0; h > c; c++) i = i.concat(g[c]._get(d)); return Kinetic.Collection.toCollection(i) }, _getNodeById: function (a) { var b = Kinetic.ids[a]; return void 0 !== b && this.isAncestorOf(b) ? b : null }, _getNodesByName: function (a) { var b = Kinetic.names[a] || []; return this._getDescendants(b) }, _get: function (a) { for (var b = Kinetic.Node.prototype._get.call(this, a), c = this.getChildren(), d = c.length, e = 0; d > e; e++) b = b.concat(c[e]._get(a)); return b }, toObject: function () { var a = Kinetic.Node.prototype.toObject.call(this); a.children = []; for (var b = this.getChildren(), c = b.length, d = 0; c > d; d++) { var e = b[d]; a.children.push(e.toObject()) } return a }, _getDescendants: function (a) { for (var b = [], c = a.length, d = 0; c > d; d++) { var e = a[d]; this.isAncestorOf(e) && b.push(e) } return b }, isAncestorOf: function (a) { for (var b = a.getParent(); b; ) { if (b._id === this._id) return !0; b = b.getParent() } return !1 }, clone: function (a) { var b = Kinetic.Node.prototype.clone.call(this, a); return this.getChildren().each(function (a) { b.add(a.clone()) }), b }, getAllIntersections: function (a) { var b = []; return this.find("Shape").each(function (c) { c.isVisible() && c.intersects(a) && b.push(c) }), b }, _setChildrenIndices: function () { this.children.each(function (a, b) { a.index = b }) }, drawScene: function (a, b) { var c = this.getLayer(), d = a || c && c.getCanvas(), e = d && d.getContext(), f = this._cache.canvas, g = f && f.scene; return this.isVisible() && (g ? this._drawCachedSceneCanvas(e) : this._drawChildren(d, "drawScene", b)), this }, drawHit: function (a, b) { var c = this.getLayer(), d = a || c && c.hitCanvas, e = d && d.getContext(), f = this._cache.canvas, g = f && f.hit; return this.shouldDrawHit() && (g ? this._drawCachedHitCanvas(e) : this._drawChildren(d, "drawHit", b)), this }, _drawChildren: function (a, b, c) {
            var d, e, f = this.getLayer(), g = a && a.getContext(), h = this.getClipWidth(), i = this.getClipHeight(), j = h && i;
            j && f && (d = this.getClipX(), e = this.getClipY(), g.save(), f._applyTransform(this, g), g.beginPath(), g.rect(d, e, h, i), g.clip(), g.reset()), this.children.each(function (d) { d[b](a, c) }), j && g.restore()
        }
    }), Kinetic.Util.extend(Kinetic.Container, Kinetic.Node), Kinetic.Container.prototype.get = Kinetic.Container.prototype.find, Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container, "clip", ["x", "y", "width", "height"]), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipX"), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipY"), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipWidth"), Kinetic.Factory.addGetterSetter(Kinetic.Container, "clipHeight"), Kinetic.Collection.mapMethods(Kinetic.Container)
} (), function () { function a(a) { a.fill() } function b(a) { a.stroke() } function c(a) { a.fill() } function d(a) { a.stroke() } function e() { this._clearCache(f) } var f = "hasShadow"; Kinetic.Util.addMethods(Kinetic.Shape, { __init: function (f) { this.nodeType = "Shape", this._fillFunc = a, this._strokeFunc = b, this._fillFuncHit = c, this._strokeFuncHit = d; for (var g, h = Kinetic.shapes; ; ) if (g = Kinetic.Util.getRandomColor(), g && !(g in h)) break; this.colorKey = g, h[g] = this, Kinetic.Node.call(this, f), this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic", e) }, hasChildren: function () { return !1 }, getChildren: function () { return [] }, getContext: function () { return this.getLayer().getContext() }, getCanvas: function () { return this.getLayer().getCanvas() }, hasShadow: function () { return this._getCache(f, this._hasShadow) }, _hasShadow: function () { return this.getShadowEnabled() && 0 !== this.getShadowOpacity() && !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY()) }, hasFill: function () { return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops()) }, hasStroke: function () { return !!(this.stroke() || this.strokeRed() || this.strokeGreen() || this.strokeBlue()) }, _get: function (a) { return this.className === a || this.nodeType === a ? [this] : [] }, intersects: function (a) { var b, c = this.getStage(), d = c.bufferHitCanvas; return d.getContext().clear(), this.drawScene(d), b = d.context.getImageData(Math.round(a.x), Math.round(a.y), 1, 1).data, b[3] > 0 }, destroy: function () { Kinetic.Node.prototype.destroy.call(this), delete Kinetic.shapes[this.colorKey] }, _useBufferCanvas: function () { return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasFill() && this.hasStroke() && this.getStage() }, drawScene: function (a, b) { var c, d, e, f = this.getLayer(), g = a || f.getCanvas(), h = g.getContext(), i = this._cache.canvas, j = this.sceneFunc(), k = this.hasShadow(); return this.isVisible() && (i ? this._drawCachedSceneCanvas(h) : j && (h.save(), this._useBufferCanvas() ? (c = this.getStage(), d = c.bufferCanvas, e = d.getContext(), e.clear(), e.save(), e._applyLineJoin(this), f._applyTransform(this, e, b), j.call(this, e), e.restore(), k && (h.save(), h._applyShadow(this), h.drawImage(d._canvas, 0, 0), h.restore()), h._applyOpacity(this), h.drawImage(d._canvas, 0, 0)) : (h._applyLineJoin(this), f._applyTransform(this, h, b), k && (h.save(), h._applyShadow(this), j.call(this, h), h.restore()), h._applyOpacity(this), j.call(this, h)), h.restore())), this }, drawHit: function (a, b) { var c = this.getLayer(), d = a || c.hitCanvas, e = d.getContext(), f = this.hitFunc() || this.sceneFunc(), g = this._cache.canvas, h = g && g.hit; return this.shouldDrawHit() && (h ? this._drawCachedHitCanvas(e) : f && (e.save(), e._applyLineJoin(this), c._applyTransform(this, e, b), f.call(this, e), e.restore())), this }, drawHitFromCache: function (a) { var b, c, d, e, f, g, h, i, j = a || 0, k = this._cache.canvas, l = this._getCachedSceneCanvas(), m = l.getContext(), n = k.hit, o = n.getContext(), p = l.getWidth(), q = l.getHeight(); o.clear(); try { for (b = m.getImageData(0, 0, p, q), c = b.data, d = o.getImageData(0, 0, p, q), e = d.data, f = c.length, g = Kinetic.Util._hexToRgb(this.colorKey), h = 0; f > h; h += 4) i = c[h + 3], i > j && (e[h] = g.r, e[h + 1] = g.g, e[h + 2] = g.b, e[h + 3] = 255); o.putImageData(d, 0, 0) } catch (r) { Kinetic.Util.warn("Unable to draw hit graph from cached scene canvas. " + r.message) } return this } }), Kinetic.Util.extend(Kinetic.Shape, Kinetic.Node), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "stroke"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeRed", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeGreen", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeBlue", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeAlpha", 1, Kinetic.Validators.alphaComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeWidth", 2), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "lineJoin"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "lineCap"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "sceneFunc"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "hitFunc"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "dash"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowColor"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowRed", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowGreen", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowBlue", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowAlpha", 1, Kinetic.Validators.alphaComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowBlur"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowOpacity"), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "shadowOffset", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowOffsetX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowOffsetY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternImage"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fill"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRed", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillGreen", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillBlue", 0, Kinetic.Validators.RGBComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillAlpha", 1, Kinetic.Validators.alphaComponent), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientColorStops"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientStartRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientEndRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientColorStops"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternRepeat", "repeat"), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "shadowEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "dashEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "strokeScaleEnabled", !0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPriority", "color"), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillPatternOffset", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternOffsetX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternOffsetY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillPatternScale", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternScaleX", 1), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternScaleY", 1), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillLinearGradientStartPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientStartPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientStartPointY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillLinearGradientEndPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientEndPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillLinearGradientEndPointY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillRadialGradientStartPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientStartPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientStartPointY", 0), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, "fillRadialGradientEndPoint", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientEndPointX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillRadialGradientEndPointY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Shape, "fillPatternRotation", 0), Kinetic.Factory.backCompat(Kinetic.Shape, { dashArray: "dash", getDashArray: "getDash", setDashArray: "getDash", drawFunc: "sceneFunc", getDrawFunc: "getSceneFunc", setDrawFunc: "setSceneFunc", drawHitFunc: "hitFunc", getDrawHitFunc: "getHitFunc", setDrawHitFunc: "setHitFunc" }), Kinetic.Collection.mapMethods(Kinetic.Shape) } (), function () { function a(a, b) { a.content.addEventListener(b, function (c) { a[I + b](c) }, !1) } var b = "Stage", c = "string", d = "px", e = "mouseout", f = "mouseleave", g = "mouseover", h = "mouseenter", i = "mousemove", j = "mousedown", k = "mouseup", l = "click", m = "dblclick", n = "touchstart", o = "touchend", p = "tap", q = "dbltap", r = "touchmove", s = "contentMouseout", t = "contentMouseover", u = "contentMousemove", v = "contentMousedown", w = "contentMouseup", x = "contentClick", y = "contentDblclick", z = "contentTouchstart", A = "contentTouchend", B = "contentDbltap", C = "contentTouchmove", D = "div", E = "relative", F = "inline-block", G = "kineticjs-content", H = " ", I = "_", J = "container", K = "", L = [j, i, k, e, n, r, o, g], M = L.length; Kinetic.Util.addMethods(Kinetic.Stage, { ___init: function (a) { this.nodeType = b, Kinetic.Container.call(this, a), this._id = Kinetic.idCounter++, this._buildDOM(), this._bindContentEvents(), this._enableNestedTransforms = !1, Kinetic.stages.push(this) }, _validateAdd: function (a) { "Layer" !== a.getType() && Kinetic.Util.error("You may only add layers to the stage.") }, setContainer: function (a) { if (typeof a === c) { var b = a; if (a = Kinetic.document.getElementById(a), !a) throw "Can not find container in document with id " + b } return this._setAttr(J, a), this }, shouldDrawHit: function () { return !0 }, draw: function () { return Kinetic.Node.prototype.draw.call(this), this }, setHeight: function (a) { return Kinetic.Node.prototype.setHeight.call(this, a), this._resizeDOM(), this }, setWidth: function (a) { return Kinetic.Node.prototype.setWidth.call(this, a), this._resizeDOM(), this }, clear: function () { var a, b = this.children, c = b.length; for (a = 0; c > a; a++) b[a].clear(); return this }, clone: function (a) { return a || (a = {}), a.container = Kinetic.document.createElement(D), Kinetic.Container.prototype.clone.call(this, a) }, destroy: function () { var a = this.content; Kinetic.Container.prototype.destroy.call(this), a && Kinetic.Util._isInDocument(a) && this.getContainer().removeChild(a); var b = Kinetic.stages.indexOf(this); b > -1 && Kinetic.stages.splice(b, 1) }, getPointerPosition: function () { return this.pointerPos }, getStage: function () { return this }, getContent: function () { return this.content }, toDataURL: function (a) { function b(e) { var f = i[e], j = f.toDataURL(), k = new Kinetic.window.Image; k.onload = function () { h.drawImage(k, 0, 0), e < i.length - 1 ? b(e + 1) : a.callback(g.toDataURL(c, d)) }, k.src = j } a = a || {}; var c = a.mimeType || null, d = a.quality || null, e = a.x || 0, f = a.y || 0, g = new Kinetic.SceneCanvas({ width: a.width || this.getWidth(), height: a.height || this.getHeight(), pixelRatio: 1 }), h = g.getContext()._context, i = this.children; (e || f) && h.translate(-1 * e, -1 * f), b(0) }, toImage: function (a) { var b = a.callback; a.callback = function (a) { Kinetic.Util._getImage(a, function (a) { b(a) }) }, this.toDataURL(a) }, getIntersection: function (a) { var b, c, d = this.getChildren(), e = d.length, f = e - 1; for (b = f; b >= 0; b--) if (c = d[b].getIntersection(a)) return c; return null }, _resizeDOM: function () { if (this.content) { var a, b, c = this.getWidth(), e = this.getHeight(), f = this.getChildren(), g = f.length; for (this.content.style.width = c + d, this.content.style.height = e + d, this.bufferCanvas.setSize(c, e), this.bufferHitCanvas.setSize(c, e), a = 0; g > a; a++) b = f[a], b.getCanvas().setSize(c, e), b.hitCanvas.setSize(c, e), b.draw() } }, add: function (a) { if (!(arguments.length > 1)) return Kinetic.Container.prototype.add.call(this, a), a._setCanvasSize(this.width(), this.height()), a.draw(), this.content.appendChild(a.canvas._canvas), this; for (var b = 0; b < arguments.length; b++) this.add(arguments[b]) }, getParent: function () { return null }, getLayer: function () { return null }, getLayers: function () { return this.getChildren() }, _bindContentEvents: function () { for (var b = 0; M > b; b++) a(this, L[b]) }, _mouseover: function (a) { Kinetic.UA.mobile || (this._setPointerPosition(a), this._fire(t, { evt: a })) }, _mouseout: function (a) { if (!Kinetic.UA.mobile) { this._setPointerPosition(a); var b = this.targetShape; b && !Kinetic.isDragging() && (b._fireAndBubble(e, { evt: a }), b._fireAndBubble(f, { evt: a }), this.targetShape = null), this.pointerPos = void 0, this._fire(s, { evt: a }) } }, _mousemove: function (a) { if (!Kinetic.UA.mobile) { this._setPointerPosition(a); var b = Kinetic.DD, c = this.getIntersection(this.getPointerPosition()); c && c.isListening() ? Kinetic.isDragging() || this.targetShape && this.targetShape._id === c._id ? c._fireAndBubble(i, { evt: a }) : (this.targetShape && (this.targetShape._fireAndBubble(e, { evt: a }, c), this.targetShape._fireAndBubble(f, { evt: a }, c)), c._fireAndBubble(g, { evt: a }, this.targetShape), c._fireAndBubble(h, { evt: a }, this.targetShape), this.targetShape = c) : this.targetShape && !Kinetic.isDragging() && (this.targetShape._fireAndBubble(e, { evt: a }), this.targetShape._fireAndBubble(f, { evt: a }), this.targetShape = null), this._fire(u, { evt: a }), b && b._drag(a) } a.preventDefault && a.preventDefault() }, _mousedown: function (a) { if (!Kinetic.UA.mobile) { this._setPointerPosition(a); var b = this.getIntersection(this.getPointerPosition()); Kinetic.listenClickTap = !0, b && b.isListening() && (this.clickStartShape = b, b._fireAndBubble(j, { evt: a })), this._fire(v, { evt: a }) } a.preventDefault && a.preventDefault() }, _mouseup: function (a) { if (!Kinetic.UA.mobile) { this._setPointerPosition(a); var b = this.getIntersection(this.getPointerPosition()), c = this.clickStartShape, d = !1; Kinetic.inDblClickWindow ? (d = !0, Kinetic.inDblClickWindow = !1) : Kinetic.inDblClickWindow = !0, setTimeout(function () { Kinetic.inDblClickWindow = !1 }, Kinetic.dblClickWindow), b && b.isListening() && (b._fireAndBubble(k, { evt: a }), Kinetic.listenClickTap && c && c._id === b._id && (b._fireAndBubble(l, { evt: a }), d && b._fireAndBubble(m, { evt: a }))), this._fire(w, { evt: a }), Kinetic.listenClickTap && (this._fire(x, { evt: a }), d && this._fire(y, { evt: a })), Kinetic.listenClickTap = !1 } a.preventDefault && a.preventDefault() }, _touchstart: function (a) { this._setPointerPosition(a); var b = this.getIntersection(this.getPointerPosition()); Kinetic.listenClickTap = !0, b && b.isListening() && (this.tapStartShape = b, b._fireAndBubble(n, { evt: a }), b.isListening() && a.preventDefault && a.preventDefault()), this._fire(z, { evt: a }) }, _touchend: function (a) { this._setPointerPosition(a); var b = this.getIntersection(this.getPointerPosition()), c = !1; Kinetic.inDblClickWindow ? (c = !0, Kinetic.inDblClickWindow = !1) : Kinetic.inDblClickWindow = !0, setTimeout(function () { Kinetic.inDblClickWindow = !1 }, Kinetic.dblClickWindow), b && b.isListening() && (b._fireAndBubble(o, { evt: a }), Kinetic.listenClickTap && b._id === this.tapStartShape._id && (b._fireAndBubble(p, { evt: a }), c && b._fireAndBubble(q, { evt: a })), b.isListening() && a.preventDefault && a.preventDefault()), Kinetic.listenClickTap && (this._fire(A, { evt: a }), c && this._fire(B, { evt: a })), Kinetic.listenClickTap = !1 }, _touchmove: function (a) { this._setPointerPosition(a); var b = Kinetic.DD, c = this.getIntersection(this.getPointerPosition()); c && c.isListening() && (c._fireAndBubble(r, { evt: a }), c.isListening() && a.preventDefault && a.preventDefault()), this._fire(C, { evt: a }), b && b._drag(a) }, _setPointerPosition: function (a) { var b, c = this._getContentPosition(), d = a.offsetX, e = a.clientX, f = null, g = null; a = a ? a : window.event, void 0 !== a.touches ? 1 === a.touches.length && (b = a.touches[0], f = b.clientX - c.left, g = b.clientY - c.top) : void 0 !== d ? (f = d, g = a.offsetY) : "mozilla" === Kinetic.UA.browser ? (f = a.layerX, g = a.layerY) : void 0 !== e && c && (f = e - c.left, g = a.clientY - c.top), null !== f && null !== g && (this.pointerPos = { x: f, y: g }) }, _getContentPosition: function () { var a = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : { top: 0, left: 0 }; return { top: a.top, left: a.left} }, _buildDOM: function () { var a = this.getContainer(); if (!a) { if (Kinetic.Util.isBrowser()) throw "Stage has not container. But container is required"; a = Kinetic.document.createElement(D) } a.innerHTML = K, this.content = Kinetic.document.createElement(D), this.content.style.position = E, this.content.style.display = F, this.content.className = G, this.content.setAttribute("role", "presentation"), a.appendChild(this.content), this.bufferCanvas = new Kinetic.SceneCanvas({ pixelRatio: 1 }), this.bufferHitCanvas = new Kinetic.HitCanvas, this._resizeDOM() }, _onContent: function (a, b) { var c, d, e = a.split(H), f = e.length; for (c = 0; f > c; c++) d = e[c], this.content.addEventListener(d, b, !1) }, cache: function () { Kinetic.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.") }, clearCache: function () { } }), Kinetic.Util.extend(Kinetic.Stage, Kinetic.Container), Kinetic.Factory.addGetter(Kinetic.Stage, "container"), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage, "container") } (), function () { Kinetic.Util.addMethods(Kinetic.BaseLayer, { ___init: function (a) { this.nodeType = "Layer", Kinetic.Container.call(this, a) }, createPNGStream: function () { return this.canvas._canvas.createPNGStream() }, getCanvas: function () { return this.canvas }, getHitCanvas: function () { return this.hitCanvas }, getContext: function () { return this.getCanvas().getContext() }, clear: function (a) { return this.getContext().clear(a), this.getHitCanvas().getContext().clear(a), this }, setZIndex: function (a) { Kinetic.Node.prototype.setZIndex.call(this, a); var b = this.getStage(); return b && (b.content.removeChild(this.getCanvas()._canvas), a < b.getChildren().length - 1 ? b.content.insertBefore(this.getCanvas()._canvas, b.getChildren()[a + 1].getCanvas()._canvas) : b.content.appendChild(this.getCanvas()._canvas)), this }, moveToTop: function () { Kinetic.Node.prototype.moveToTop.call(this); var a = this.getStage(); a && (a.content.removeChild(this.getCanvas()._canvas), a.content.appendChild(this.getCanvas()._canvas)) }, moveUp: function () { if (Kinetic.Node.prototype.moveUp.call(this)) { var a = this.getStage(); a && (a.content.removeChild(this.getCanvas()._canvas), this.index < a.getChildren().length - 1 ? a.content.insertBefore(this.getCanvas()._canvas, a.getChildren()[this.index + 1].getCanvas()._canvas) : a.content.appendChild(this.getCanvas()._canvas)) } }, moveDown: function () { if (Kinetic.Node.prototype.moveDown.call(this)) { var a = this.getStage(); if (a) { var b = a.getChildren(); a.content.removeChild(this.getCanvas()._canvas), a.content.insertBefore(this.getCanvas()._canvas, b[this.index + 1].getCanvas()._canvas) } } }, moveToBottom: function () { if (Kinetic.Node.prototype.moveToBottom.call(this)) { var a = this.getStage(); if (a) { var b = a.getChildren(); a.content.removeChild(this.getCanvas()._canvas), a.content.insertBefore(this.getCanvas()._canvas, b[1].getCanvas()._canvas) } } }, getLayer: function () { return this }, remove: function () { var a = this.getStage(), b = this.getCanvas(), c = b._canvas; return Kinetic.Node.prototype.remove.call(this), a && c && Kinetic.Util._isInDocument(c) && a.content.removeChild(c), this }, getStage: function () { return this.parent } }), Kinetic.Util.extend(Kinetic.BaseLayer, Kinetic.Container), Kinetic.Factory.addGetterSetter(Kinetic.BaseLayer, "clearBeforeDraw", !0), Kinetic.Collection.mapMethods(Kinetic.BaseLayer) } (), function () { var a = "#", b = "beforeDraw", c = "draw", d = [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1}], e = d.length; Kinetic.Util.addMethods(Kinetic.Layer, { ____init: function (a) { this.nodeType = "Layer", this.canvas = new Kinetic.SceneCanvas, this.hitCanvas = new Kinetic.HitCanvas, Kinetic.BaseLayer.call(this, a) }, _setCanvasSize: function (a, b) { this.canvas.setSize(a, b), this.hitCanvas.setSize(a, b) }, _validateAdd: function (a) { var b = a.getType(); "Group" !== b && "Shape" !== b && Kinetic.Util.error("You may only add groups and shapes to a layer.") }, getIntersection: function (a) { var b, c, f, g; if (!this.hitGraphEnabled() || !this.isVisible()) return null; for (c = 0; e > c; c++) { if (f = d[c], b = this._getIntersection({ x: a.x + f.x, y: a.y + f.y }), g = b.shape) return g; if (!b.antialiased) return null } }, _getIntersection: function (b) { var c, d, e = this.hitCanvas.context._context.getImageData(b.x, b.y, 1, 1).data, f = e[3]; return 255 === f ? (c = Kinetic.Util._rgbToHex(e[0], e[1], e[2]), d = Kinetic.shapes[a + c], { shape: d }) : f > 0 ? { antialiased: !0} : {} }, drawScene: function (a, d) { var e = this.getLayer(), f = a || e && e.getCanvas(); return this._fire(b, { node: this }), this.getClearBeforeDraw() && f.getContext().clear(), Kinetic.Container.prototype.drawScene.call(this, f, d), this._fire(c, { node: this }), this }, _applyTransform: function (a, b, c) { var d = a.getAbsoluteTransform(c).getMatrix(); b.transform(d[0], d[1], d[2], d[3], d[4], d[5]) }, drawHit: function (a, b) { var c = this.getLayer(), d = a || c && c.hitCanvas; return c && c.getClearBeforeDraw() && c.getHitCanvas().getContext().clear(), Kinetic.Container.prototype.drawHit.call(this, d, b), this }, clear: function (a) { return this.getContext().clear(a), this.getHitCanvas().getContext().clear(a), this }, setVisible: function (a) { return Kinetic.Node.prototype.setVisible.call(this, a), a ? (this.getCanvas()._canvas.style.display = "block", this.hitCanvas._canvas.style.display = "block") : (this.getCanvas()._canvas.style.display = "none", this.hitCanvas._canvas.style.display = "none"), this }, enableHitGraph: function () { return this.setHitGraphEnabled(!0), this }, disableHitGraph: function () { return this.setHitGraphEnabled(!1), this } }), Kinetic.Util.extend(Kinetic.Layer, Kinetic.BaseLayer), Kinetic.Factory.addGetterSetter(Kinetic.Layer, "hitGraphEnabled", !0), Kinetic.Collection.mapMethods(Kinetic.Layer) } (), function () { Kinetic.Util.addMethods(Kinetic.FastLayer, { ____init: function (a) { this.nodeType = "Layer", this.canvas = new Kinetic.SceneCanvas, Kinetic.BaseLayer.call(this, a) }, _validateAdd: function (a) { var b = a.getType(); "Shape" !== b && Kinetic.Util.error("You may only add shapes to a fast layer.") }, _setCanvasSize: function (a, b) { this.canvas.setSize(a, b) }, hitGraphEnabled: function () { return !1 }, getIntersection: function () { return null }, drawScene: function (a) { var b = this.getLayer(), c = a || b && b.getCanvas(); return this.getClearBeforeDraw() && c.getContext().clear(), Kinetic.Container.prototype.drawScene.call(this, c), this }, _applyTransform: function (a, b, c) { if (!c || c._id !== this._id) { var d = a.getTransform().getMatrix(); b.transform(d[0], d[1], d[2], d[3], d[4], d[5]) } }, draw: function () { return this.drawScene(), this }, clear: function (a) { return this.getContext().clear(a), this }, setVisible: function (a) { return Kinetic.Node.prototype.setVisible.call(this, a), this.getCanvas()._canvas.style.display = a ? "block" : "none", this } }), Kinetic.Util.extend(Kinetic.FastLayer, Kinetic.BaseLayer), Kinetic.Collection.mapMethods(Kinetic.FastLayer) } (), function () { Kinetic.Util.addMethods(Kinetic.Group, { ___init: function (a) { this.nodeType = "Group", Kinetic.Container.call(this, a) }, _validateAdd: function (a) { var b = a.getType(); "Group" !== b && "Shape" !== b && Kinetic.Util.error("You may only add groups and shapes to groups.") } }), Kinetic.Util.extend(Kinetic.Group, Kinetic.Container), Kinetic.Collection.mapMethods(Kinetic.Group) } (), function () { Kinetic.Rect = function (a) { this.___init(a) }, Kinetic.Rect.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Rect", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b = this.getCornerRadius(), c = this.getWidth(), d = this.getHeight(); a.beginPath(), b ? (a.moveTo(b, 0), a.lineTo(c - b, 0), a.arc(c - b, b, b, 3 * Math.PI / 2, 0, !1), a.lineTo(c, d - b), a.arc(c - b, d - b, b, 0, Math.PI / 2, !1), a.lineTo(b, d), a.arc(b, d - b, b, Math.PI / 2, Math.PI, !1), a.lineTo(0, b), a.arc(b, b, b, Math.PI, 3 * Math.PI / 2, !1)) : a.rect(0, 0, c, d), a.closePath(), a.fillStrokeShape(this) } }, Kinetic.Util.extend(Kinetic.Rect, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Rect, "cornerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Rect) } (), function () { var a = 2 * Math.PI - 1e-4, b = "Circle"; Kinetic.Circle = function (a) { this.___init(a) }, Kinetic.Circle.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = b, this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (b) { b.beginPath(), b.arc(0, 0, this.getRadius(), 0, a, !1), b.closePath(), b.fillStrokeShape(this) }, getWidth: function () { return 2 * this.getRadius() }, getHeight: function () { return 2 * this.getRadius() }, setWidth: function (a) { Kinetic.Node.prototype.setWidth.call(this, a), this.setRadius(a / 2) }, setHeight: function (a) { Kinetic.Node.prototype.setHeight.call(this, a), this.setRadius(a / 2) } }, Kinetic.Util.extend(Kinetic.Circle, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Circle, "radius", 0), Kinetic.Collection.mapMethods(Kinetic.Circle) } (), function () { var a = 2 * Math.PI - 1e-4, b = "Ellipse"; Kinetic.Ellipse = function (a) { this.___init(a) }, Kinetic.Ellipse.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = b, this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (b) { var c = this.getRadius(), d = c.x, e = c.y; b.beginPath(), b.save(), d !== e && b.scale(1, e / d), b.arc(0, 0, d, 0, a, !1), b.restore(), b.closePath(), b.fillStrokeShape(this) }, getWidth: function () { return 2 * this.getRadius().x }, getHeight: function () { return 2 * this.getRadius().y }, setWidth: function (a) { Kinetic.Node.prototype.setWidth.call(this, a), this.setRadius({ x: a / 2 }) }, setHeight: function (a) { Kinetic.Node.prototype.setHeight.call(this, a), this.setRadius({ y: a / 2 }) } }, Kinetic.Util.extend(Kinetic.Ellipse, Kinetic.Shape), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Ellipse, "radius", ["x", "y"]), Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, "radiusX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, "radiusY", 0), Kinetic.Collection.mapMethods(Kinetic.Ellipse) } (), function () { var a = 2 * Math.PI - 1e-4; Kinetic.Ring = function (a) { this.___init(a) }, Kinetic.Ring.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Ring", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (b) { b.beginPath(), b.arc(0, 0, this.getInnerRadius(), 0, a, !1), b.moveTo(this.getOuterRadius(), 0), b.arc(0, 0, this.getOuterRadius(), a, 0, !0), b.closePath(), b.fillStrokeShape(this) }, getWidth: function () { return 2 * this.getOuterRadius() }, getHeight: function () { return 2 * this.getOuterRadius() }, setWidth: function (a) { Kinetic.Node.prototype.setWidth.call(this, a), this.setOuterRadius(a / 2) }, setHeight: function (a) { Kinetic.Node.prototype.setHeight.call(this, a), this.setOuterRadius(a / 2) } }, Kinetic.Util.extend(Kinetic.Ring, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Ring, "innerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Ring, "outerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Ring) } (), function () { Kinetic.Wedge = function (a) { this.___init(a) }, Kinetic.Wedge.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Wedge", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { a.beginPath(), a.arc(0, 0, this.getRadius(), 0, Kinetic.getAngle(this.getAngle()), this.getClockwise()), a.lineTo(0, 0), a.closePath(), a.fillStrokeShape(this) } }, Kinetic.Util.extend(Kinetic.Wedge, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Wedge, "radius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Wedge, "angle", 0), Kinetic.Factory.addGetterSetter(Kinetic.Wedge, "clockwise", !1), Kinetic.Factory.backCompat(Kinetic.Wedge, { angleDeg: "angle", getAngleDeg: "getAngle", setAngleDeg: "setAngle" }), Kinetic.Collection.mapMethods(Kinetic.Wedge) } (), function () { Math.PI / 180; Kinetic.Arc = function (a) { this.___init(a) }, Kinetic.Arc.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Arc", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b = Kinetic.getAngle(this.angle()), c = this.clockwise(); a.beginPath(), a.arc(0, 0, this.getOuterRadius(), 0, b, c), a.arc(0, 0, this.getInnerRadius(), b, 0, !c), a.closePath(), a.fillStrokeShape(this) } }, Kinetic.Util.extend(Kinetic.Arc, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "innerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "outerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "angle", 0), Kinetic.Factory.addGetterSetter(Kinetic.Arc, "clockwise", !1), Kinetic.Collection.mapMethods(Kinetic.Arc) } (), function () { var a = "Image"; Kinetic.Image = function (a) { this.___init(a) }, Kinetic.Image.prototype = { ___init: function (b) { Kinetic.Shape.call(this, b), this.className = a, this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc) }, _useBufferCanvas: function () { return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke() }, _sceneFunc: function (a) { var b, c, d, e, f = this.getWidth(), g = this.getHeight(), h = this.getImage(); h && (b = this.getCrop(), c = b.width, d = b.height, e = c && d ? [h, b.x, b.y, c, d, 0, 0, f, g] : [h, 0, 0, f, g]), a.beginPath(), a.rect(0, 0, f, g), a.closePath(), a.fillStrokeShape(this), h && a.drawImage.apply(a, e) }, _hitFunc: function (a) { var b = this.getWidth(), c = this.getHeight(); a.beginPath(), a.rect(0, 0, b, c), a.closePath(), a.fillStrokeShape(this) }, getWidth: function () { var a = this.getImage(); return this.attrs.width || (a ? a.width : 0) }, getHeight: function () { var a = this.getImage(); return this.attrs.height || (a ? a.height : 0) } }, Kinetic.Util.extend(Kinetic.Image, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Image, "image"), Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image, "crop", ["x", "y", "width", "height"]), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropX", 0), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropY", 0), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropWidth", 0), Kinetic.Factory.addGetterSetter(Kinetic.Image, "cropHeight", 0), Kinetic.Collection.mapMethods(Kinetic.Image) } (), function () {
    function a(a) { a.fillText(this.partialText, 0, 0) } function b(a) { a.strokeText(this.partialText, 0, 0) } var c = "auto", d = "center", e = "Change.kinetic", f = "2d", g = "-", h = "", i = "left", j = "text", k = "Text", l = "middle", m = "normal", n = "px ", o = " ", p = "right", q = "word", r = "char", s = "none", t = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "lineHeight", "text", "width", "height", "wrap"], u = t.length, v = Kinetic.Util.createCanvasElement().getContext(f); Kinetic.Text = function (a) { this.___init(a) }, Kinetic.Text.prototype = {
        ___init: function (d) { var f = this; void 0 === d.width && (d.width = c), void 0 === d.height && (d.height = c), Kinetic.Shape.call(this, d), this._fillFunc = a, this._strokeFunc = b, this.className = k; for (var g = 0; u > g; g++) this.on(t[g] + e, f._setTextData); this._setTextData(), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc) }, _sceneFunc: function (a) { var b, c = this.getPadding(), e = this.getTextHeight(), f = this.getLineHeight() * e, g = this.textArr, h = g.length, j = this.getWidth(); for (a.setAttr("font", this._getContextFont()), a.setAttr("textBaseline", l), a.setAttr("textAlign", i), a.save(), a.translate(c, 0), a.translate(0, c + e / 2), b = 0; h > b; b++) { var k = g[b], m = k.text, n = k.width; a.save(), this.getAlign() === p ? a.translate(j - n - 2 * c, 0) : this.getAlign() === d && a.translate((j - n - 2 * c) / 2, 0), this.partialText = m, a.fillStrokeShape(this), a.restore(), a.translate(0, f) } a.restore() }, _hitFunc: function (a) { var b = this.getWidth(), c = this.getHeight(); a.beginPath(), a.rect(0, 0, b, c), a.closePath(), a.fillStrokeShape(this) }, setText: function (a) { var b = Kinetic.Util._isString(a) ? a : a.toString(); return this._setAttr(j, b), this }, getWidth: function () { return this.attrs.width === c ? this.getTextWidth() + 2 * this.getPadding() : this.attrs.width }, getHeight: function () { return this.attrs.height === c ? this.getTextHeight() * this.textArr.length * this.getLineHeight() + 2 * this.getPadding() : this.attrs.height }, getTextWidth: function () { return this.textWidth }, getTextHeight: function () { return this.textHeight }, _getTextSize: function (a) { var b, c = v, d = this.getFontSize(); return c.save(), c.font = this._getContextFont(), b = c.measureText(a), c.restore(), { width: b.width, height: parseInt(d, 10)} }, _getContextFont: function () { return this.getFontStyle() + o + this.getFontVariant() + o + this.getFontSize() + n + this.getFontFamily() }, _addTextLine: function (a, b) { return this.textArr.push({ text: a, width: b }) }, _getTextWidth: function (a) { return v.measureText(a).width }, _setTextData: function () {
            var a = this.getText().split("\n"), b = +this.getFontSize(), d = 0, e = this.getLineHeight() * b, f = this.attrs.width, h = this.attrs.height, i = f !== c, j = h !== c, k = this.getPadding(), l = f - 2 * k, m = h - 2 * k, n = 0, p = this.getWrap(), q = p !== s, t = p !== r && q; this.textArr = [], v.save(), v.font = this._getContextFont(); for (var u = 0, w = a.length; w > u; ++u) {
                var x = a[u], y = this._getTextWidth(x); if (i && y > l) for (; x.length > 0; ) {
                    for (var z = 0, A = x.length, B = "", C = 0; A > z; ) { var D = z + A >>> 1, E = x.slice(0, D + 1), F = this._getTextWidth(E); l >= F ? (z = D + 1, B = E, C = F) : A = D } if (!B) break; if (t) {
                        var G = Math.max(B.lastIndexOf(o), B.lastIndexOf(g)) + 1; G > 0 && (z = G, B = B.slice(0, z), C = this._getTextWidth(B))
                    } if (this._addTextLine(B, C), d = Math.max(d, C), n += e, !q || j && n + e > m) break; if (x = x.slice(z), x.length > 0 && (y = this._getTextWidth(x), l >= y)) { this._addTextLine(x, y), n += e, d = Math.max(d, y); break }
                } else this._addTextLine(x, y), n += e, d = Math.max(d, y); if (j && n + e > m) break
            } v.restore(), this.textHeight = b, this.textWidth = d
        }
    }, Kinetic.Util.extend(Kinetic.Text, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontFamily", "Arial"), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontSize", 12), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontStyle", m), Kinetic.Factory.addGetterSetter(Kinetic.Text, "fontVariant", m), Kinetic.Factory.addGetterSetter(Kinetic.Text, "padding", 0), Kinetic.Factory.addGetterSetter(Kinetic.Text, "align", i), Kinetic.Factory.addGetterSetter(Kinetic.Text, "lineHeight", 1), Kinetic.Factory.addGetterSetter(Kinetic.Text, "wrap", q), Kinetic.Factory.addGetter(Kinetic.Text, "text", h), Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text, "text"), Kinetic.Collection.mapMethods(Kinetic.Text)
} (), function () { Kinetic.Line = function (a) { this.___init(a) }, Kinetic.Line.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Line", this.on("pointsChange.kinetic tensionChange.kinetic closedChange.kinetic", function () { this._clearCache("tensionPoints") }), this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b, c, d, e = this.getPoints(), f = e.length, g = this.getTension(), h = this.getClosed(); if (a.beginPath(), a.moveTo(e[0], e[1]), 0 !== g && f > 4) { for (b = this.getTensionPoints(), c = b.length, d = h ? 0 : 4, h || a.quadraticCurveTo(b[0], b[1], b[2], b[3]); c - 2 > d; ) a.bezierCurveTo(b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]); h || a.quadraticCurveTo(b[c - 2], b[c - 1], e[f - 2], e[f - 1]) } else for (d = 2; f > d; d += 2) a.lineTo(e[d], e[d + 1]); h ? (a.closePath(), a.fillStrokeShape(this)) : a.strokeShape(this) }, getTensionPoints: function () { return this._getCache("tensionPoints", this._getTensionPoints) }, _getTensionPoints: function () { return this.getClosed() ? this._getTensionPointsClosed() : Kinetic.Util._expandPoints(this.getPoints(), this.getTension()) }, _getTensionPointsClosed: function () { var a = this.getPoints(), b = a.length, c = this.getTension(), d = Kinetic.Util, e = d._getControlPoints(a[b - 2], a[b - 1], a[0], a[1], a[2], a[3], c), f = d._getControlPoints(a[b - 4], a[b - 3], a[b - 2], a[b - 1], a[0], a[1], c), g = Kinetic.Util._expandPoints(a, c), h = [e[2], e[3]].concat(g).concat([f[0], f[1], a[b - 2], a[b - 1], f[2], f[3], e[0], e[1], a[0], a[1]]); return h } }, Kinetic.Util.extend(Kinetic.Line, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Line, "closed", !1), Kinetic.Factory.addGetterSetter(Kinetic.Line, "tension", 0), Kinetic.Factory.addGetterSetter(Kinetic.Line, "points"), Kinetic.Collection.mapMethods(Kinetic.Line) } (), function () { Kinetic.Sprite = function (a) { this.___init(a) }, Kinetic.Sprite.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Sprite", this.anim = new Kinetic.Animation, this.on("animationChange.kinetic", function () { this.frameIndex(0) }), this.on("frameRateChange.kinetic", function () { this.anim.isRunning() && (clearInterval(this.interval), this._setInterval()) }), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc) }, _sceneFunc: function (a) { var b = this.getAnimation(), c = this.frameIndex(), d = 4 * c, e = this.getAnimations()[b], f = e[d + 0], g = e[d + 1], h = e[d + 2], i = e[d + 3], j = this.getImage(); j && a.drawImage(j, f, g, h, i, 0, 0, h, i) }, _hitFunc: function (a) { var b = this.getAnimation(), c = this.frameIndex(), d = 4 * c, e = this.getAnimations()[b], f = e[d + 2], g = e[d + 3]; a.beginPath(), a.rect(0, 0, f, g), a.closePath(), a.fillShape(this) }, _useBufferCanvas: function () { return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke() }, _setInterval: function () { var a = this; this.interval = setInterval(function () { a._updateIndex() }, 1e3 / this.getFrameRate()) }, start: function () { var a = this.getLayer(); this.anim.setLayers(a), this._setInterval(), this.anim.start() }, stop: function () { this.anim.stop(), clearInterval(this.interval) }, isRunning: function () { return this.anim.isRunning() }, _updateIndex: function () { var a = this.frameIndex(), b = this.getAnimation(), c = this.getAnimations(), d = c[b], e = d.length / 4; this.frameIndex(e - 1 > a ? a + 1 : 0) } }, Kinetic.Util.extend(Kinetic.Sprite, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "animation"), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "animations"), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "image"), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "frameIndex", 0), Kinetic.Factory.addGetterSetter(Kinetic.Sprite, "frameRate", 17), Kinetic.Factory.backCompat(Kinetic.Sprite, { index: "frameIndex", getIndex: "getFrameIndex", setIndex: "setFrameIndex" }), Kinetic.Collection.mapMethods(Kinetic.Sprite) } (), function () { Kinetic.Path = function (a) { this.___init(a) }, Kinetic.Path.prototype = { ___init: function (a) { this.dataArray = []; var b = this; Kinetic.Shape.call(this, a), this.className = "Path", this.dataArray = Kinetic.Path.parsePathData(this.getData()), this.on("dataChange.kinetic", function () { b.dataArray = Kinetic.Path.parsePathData(this.getData()) }), this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b = this.dataArray, c = !1; a.beginPath(); for (var d = 0; d < b.length; d++) { var e = b[d].command, f = b[d].points; switch (e) { case "L": a.lineTo(f[0], f[1]); break; case "M": a.moveTo(f[0], f[1]); break; case "C": a.bezierCurveTo(f[0], f[1], f[2], f[3], f[4], f[5]); break; case "Q": a.quadraticCurveTo(f[0], f[1], f[2], f[3]); break; case "A": var g = f[0], h = f[1], i = f[2], j = f[3], k = f[4], l = f[5], m = f[6], n = f[7], o = i > j ? i : j, p = i > j ? 1 : i / j, q = i > j ? j / i : 1; a.translate(g, h), a.rotate(m), a.scale(p, q), a.arc(0, 0, o, k, k + l, 1 - n), a.scale(1 / p, 1 / q), a.rotate(-m), a.translate(-g, -h); break; case "z": a.closePath(), c = !0 } } c ? a.fillStrokeShape(this) : a.strokeShape(this) } }, Kinetic.Util.extend(Kinetic.Path, Kinetic.Shape), Kinetic.Path.getLineLength = function (a, b, c, d) { return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b)) }, Kinetic.Path.getPointOnLine = function (a, b, c, d, e, f, g) { void 0 === f && (f = b), void 0 === g && (g = c); var h = (e - c) / (d - b + 1e-8), i = Math.sqrt(a * a / (1 + h * h)); b > d && (i *= -1); var j, k = h * i; if (d === b) j = { x: f, y: g + k }; else if ((g - c) / (f - b + 1e-8) === h) j = { x: f + i, y: g + k }; else { var l, m, n = this.getLineLength(b, c, d, e); if (1e-8 > n) return void 0; var o = (f - b) * (d - b) + (g - c) * (e - c); o /= n * n, l = b + o * (d - b), m = c + o * (e - c); var p = this.getLineLength(f, g, l, m), q = Math.sqrt(a * a - p * p); i = Math.sqrt(q * q / (1 + h * h)), b > d && (i *= -1), k = h * i, j = { x: l + i, y: m + k} } return j }, Kinetic.Path.getPointOnCubicBezier = function (a, b, c, d, e, f, g, h, i) { function j(a) { return a * a * a } function k(a) { return 3 * a * a * (1 - a) } function l(a) { return 3 * a * (1 - a) * (1 - a) } function m(a) { return (1 - a) * (1 - a) * (1 - a) } var n = h * j(a) + f * k(a) + d * l(a) + b * m(a), o = i * j(a) + g * k(a) + e * l(a) + c * m(a); return { x: n, y: o} }, Kinetic.Path.getPointOnQuadraticBezier = function (a, b, c, d, e, f, g) { function h(a) { return a * a } function i(a) { return 2 * a * (1 - a) } function j(a) { return (1 - a) * (1 - a) } var k = f * h(a) + d * i(a) + b * j(a), l = g * h(a) + e * i(a) + c * j(a); return { x: k, y: l} }, Kinetic.Path.getPointOnEllipticalArc = function (a, b, c, d, e, f) { var g = Math.cos(f), h = Math.sin(f), i = { x: c * Math.cos(e), y: d * Math.sin(e) }; return { x: a + (i.x * g - i.y * h), y: b + (i.x * h + i.y * g)} }, Kinetic.Path.parsePathData = function (a) { if (!a) return []; var b = a, c = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"]; b = b.replace(new RegExp(" ", "g"), ","); for (var d = 0; d < c.length; d++) b = b.replace(new RegExp(c[d], "g"), "|" + c[d]); var e = b.split("|"), f = [], g = 0, h = 0; for (d = 1; d < e.length; d++) { var i = e[d], j = i.charAt(0); i = i.slice(1), i = i.replace(new RegExp(",-", "g"), "-"), i = i.replace(new RegExp("-", "g"), ",-"), i = i.replace(new RegExp("e,-", "g"), "e-"); var k = i.split(","); k.length > 0 && "" === k[0] && k.shift(); for (var l = 0; l < k.length; l++) k[l] = parseFloat(k[l]); for (; k.length > 0 && !isNaN(k[0]); ) { var m, n, o, p, q, r, s, t, u, v, w = null, x = [], y = g, z = h; switch (j) { case "l": g += k.shift(), h += k.shift(), w = "L", x.push(g, h); break; case "L": g = k.shift(), h = k.shift(), x.push(g, h); break; case "m": var A = k.shift(), B = k.shift(); if (g += A, h += B, w = "M", f.length > 2 && "z" === f[f.length - 1].command) for (var C = f.length - 2; C >= 0; C--) if ("M" === f[C].command) { g = f[C].points[0] + A, h = f[C].points[1] + B; break } x.push(g, h), j = "l"; break; case "M": g = k.shift(), h = k.shift(), w = "M", x.push(g, h), j = "L"; break; case "h": g += k.shift(), w = "L", x.push(g, h); break; case "H": g = k.shift(), w = "L", x.push(g, h); break; case "v": h += k.shift(), w = "L", x.push(g, h); break; case "V": h = k.shift(), w = "L", x.push(g, h); break; case "C": x.push(k.shift(), k.shift(), k.shift(), k.shift()), g = k.shift(), h = k.shift(), x.push(g, h); break; case "c": x.push(g + k.shift(), h + k.shift(), g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), w = "C", x.push(g, h); break; case "S": n = g, o = h, m = f[f.length - 1], "C" === m.command && (n = g + (g - m.points[2]), o = h + (h - m.points[3])), x.push(n, o, k.shift(), k.shift()), g = k.shift(), h = k.shift(), w = "C", x.push(g, h); break; case "s": n = g, o = h, m = f[f.length - 1], "C" === m.command && (n = g + (g - m.points[2]), o = h + (h - m.points[3])), x.push(n, o, g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), w = "C", x.push(g, h); break; case "Q": x.push(k.shift(), k.shift()), g = k.shift(), h = k.shift(), x.push(g, h); break; case "q": x.push(g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), w = "Q", x.push(g, h); break; case "T": n = g, o = h, m = f[f.length - 1], "Q" === m.command && (n = g + (g - m.points[0]), o = h + (h - m.points[1])), g = k.shift(), h = k.shift(), w = "Q", x.push(n, o, g, h); break; case "t": n = g, o = h, m = f[f.length - 1], "Q" === m.command && (n = g + (g - m.points[0]), o = h + (h - m.points[1])), g += k.shift(), h += k.shift(), w = "Q", x.push(n, o, g, h); break; case "A": p = k.shift(), q = k.shift(), r = k.shift(), s = k.shift(), t = k.shift(), u = g, v = h, g = k.shift(), h = k.shift(), w = "A", x = this.convertEndpointToCenterParameterization(u, v, g, h, s, t, p, q, r); break; case "a": p = k.shift(), q = k.shift(), r = k.shift(), s = k.shift(), t = k.shift(), u = g, v = h, g += k.shift(), h += k.shift(), w = "A", x = this.convertEndpointToCenterParameterization(u, v, g, h, s, t, p, q, r) } f.push({ command: w || j, points: x, start: { x: y, y: z }, pathLength: this.calcLength(y, z, w || j, x) }) } ("z" === j || "Z" === j) && f.push({ command: "z", points: [], start: void 0, pathLength: 0 }) } return f }, Kinetic.Path.calcLength = function (a, b, c, d) { var e, f, g, h, i = Kinetic.Path; switch (c) { case "L": return i.getLineLength(a, b, d[0], d[1]); case "C": for (e = 0, f = i.getPointOnCubicBezier(0, a, b, d[0], d[1], d[2], d[3], d[4], d[5]), h = .01; 1 >= h; h += .01) g = i.getPointOnCubicBezier(h, a, b, d[0], d[1], d[2], d[3], d[4], d[5]), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g; return e; case "Q": for (e = 0, f = i.getPointOnQuadraticBezier(0, a, b, d[0], d[1], d[2], d[3]), h = .01; 1 >= h; h += .01) g = i.getPointOnQuadraticBezier(h, a, b, d[0], d[1], d[2], d[3]), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g; return e; case "A": e = 0; var j = d[4], k = d[5], l = d[4] + k, m = Math.PI / 180; if (Math.abs(j - l) < m && (m = Math.abs(j - l)), f = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], j, 0), 0 > k) for (h = j - m; h > l; h -= m) g = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], h, 0), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g; else for (h = j + m; l > h; h += m) g = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], h, 0), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g; return g = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], l, 0), e += i.getLineLength(f.x, f.y, g.x, g.y) } return 0 }, Kinetic.Path.convertEndpointToCenterParameterization = function (a, b, c, d, e, f, g, h, i) { var j = i * (Math.PI / 180), k = Math.cos(j) * (a - c) / 2 + Math.sin(j) * (b - d) / 2, l = -1 * Math.sin(j) * (a - c) / 2 + Math.cos(j) * (b - d) / 2, m = k * k / (g * g) + l * l / (h * h); m > 1 && (g *= Math.sqrt(m), h *= Math.sqrt(m)); var n = Math.sqrt((g * g * h * h - g * g * l * l - h * h * k * k) / (g * g * l * l + h * h * k * k)); e === f && (n *= -1), isNaN(n) && (n = 0); var o = n * g * l / h, p = n * -h * k / g, q = (a + c) / 2 + Math.cos(j) * o - Math.sin(j) * p, r = (b + d) / 2 + Math.sin(j) * o + Math.cos(j) * p, s = function (a) { return Math.sqrt(a[0] * a[0] + a[1] * a[1]) }, t = function (a, b) { return (a[0] * b[0] + a[1] * b[1]) / (s(a) * s(b)) }, u = function (a, b) { return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(t(a, b)) }, v = u([1, 0], [(k - o) / g, (l - p) / h]), w = [(k - o) / g, (l - p) / h], x = [(-1 * k - o) / g, (-1 * l - p) / h], y = u(w, x); return t(w, x) <= -1 && (y = Math.PI), t(w, x) >= 1 && (y = 0), 0 === f && y > 0 && (y -= 2 * Math.PI), 1 === f && 0 > y && (y += 2 * Math.PI), [q, r, g, h, v, y, j, f] }, Kinetic.Factory.addGetterSetter(Kinetic.Path, "data"), Kinetic.Collection.mapMethods(Kinetic.Path) } (), function () { function a(a) { a.fillText(this.partialText, 0, 0) } function b(a) { a.strokeText(this.partialText, 0, 0) } var c = "", d = "normal"; Kinetic.TextPath = function (a) { this.___init(a) }, Kinetic.TextPath.prototype = { ___init: function (c) { var d = this; this.dummyCanvas = Kinetic.Util.createCanvasElement(), this.dataArray = [], Kinetic.Shape.call(this, c), this._fillFunc = a, this._strokeFunc = b, this._fillFuncHit = a, this._strokeFuncHit = b, this.className = "TextPath", this.dataArray = Kinetic.Path.parsePathData(this.attrs.data), this.on("dataChange.kinetic", function () { d.dataArray = Kinetic.Path.parsePathData(this.attrs.data) }), this.on("textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic", d._setTextData), d._setTextData(), this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { a.setAttr("font", this._getContextFont()), a.setAttr("textBaseline", "middle"), a.setAttr("textAlign", "left"), a.save(); for (var b = this.glyphInfo, c = 0; c < b.length; c++) { a.save(); var d = b[c].p0; a.translate(d.x, d.y), a.rotate(b[c].rotation), this.partialText = b[c].text, a.fillStrokeShape(this), a.restore() } a.restore() }, getTextWidth: function () { return this.textWidth }, getTextHeight: function () { return this.textHeight }, setText: function (a) { Kinetic.Text.prototype.setText.call(this, a) }, _getTextSize: function (a) { var b = this.dummyCanvas, c = b.getContext("2d"); c.save(), c.font = this._getContextFont(); var d = c.measureText(a); return c.restore(), { width: d.width, height: parseInt(this.attrs.fontSize, 10)} }, _setTextData: function () { var a = this, b = this._getTextSize(this.attrs.text); this.textWidth = b.width, this.textHeight = b.height, this.glyphInfo = []; for (var c, d, e, f = this.attrs.text.split(""), g = -1, h = 0, i = function () { h = 0; for (var b = a.dataArray, d = g + 1; d < b.length; d++) { if (b[d].pathLength > 0) return g = d, b[d]; "M" == b[d].command && (c = { x: b[d].points[0], y: b[d].points[1] }) } return {} }, j = function (b) { var f = a._getTextSize(b).width, g = 0, j = 0; for (d = void 0; Math.abs(f - g) / f > .01 && 25 > j; ) { j++; for (var k = g; void 0 === e; ) e = i(), e && k + e.pathLength < f && (k += e.pathLength, e = void 0); if (e === {} || void 0 === c) return void 0; var l = !1; switch (e.command) { case "L": Kinetic.Path.getLineLength(c.x, c.y, e.points[0], e.points[1]) > f ? d = Kinetic.Path.getPointOnLine(f, c.x, c.y, e.points[0], e.points[1], c.x, c.y) : e = void 0; break; case "A": var m = e.points[4], n = e.points[5], o = e.points[4] + n; 0 === h ? h = m + 1e-8 : f > g ? h += Math.PI / 180 * n / Math.abs(n) : h -= Math.PI / 360 * n / Math.abs(n), (0 > n && o > h || n >= 0 && h > o) && (h = o, l = !0), d = Kinetic.Path.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], h, e.points[6]); break; case "C": 0 === h ? h = f > e.pathLength ? 1e-8 : f / e.pathLength : f > g ? h += (f - g) / e.pathLength : h -= (g - f) / e.pathLength, h > 1 && (h = 1, l = !0), d = Kinetic.Path.getPointOnCubicBezier(h, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3], e.points[4], e.points[5]); break; case "Q": 0 === h ? h = f / e.pathLength : f > g ? h += (f - g) / e.pathLength : h -= (g - f) / e.pathLength, h > 1 && (h = 1, l = !0), d = Kinetic.Path.getPointOnQuadraticBezier(h, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3]) } void 0 !== d && (g = Kinetic.Path.getLineLength(c.x, c.y, d.x, d.y)), l && (l = !1, e = void 0) } }, k = 0; k < f.length && (j(f[k]), void 0 !== c && void 0 !== d); k++) { var l = Kinetic.Path.getLineLength(c.x, c.y, d.x, d.y), m = 0, n = Kinetic.Path.getPointOnLine(m + l / 2, c.x, c.y, d.x, d.y), o = Math.atan2(d.y - c.y, d.x - c.x); this.glyphInfo.push({ transposeX: n.x, transposeY: n.y, text: f[k], rotation: o, p0: c, p1: d }), c = d } } }, Kinetic.TextPath.prototype._getContextFont = Kinetic.Text.prototype._getContextFont, Kinetic.Util.extend(Kinetic.TextPath, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontFamily", "Arial"), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontSize", 12), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontStyle", d), Kinetic.Factory.addGetterSetter(Kinetic.TextPath, "fontVariant", d), Kinetic.Factory.addGetter(Kinetic.TextPath, "text", c), Kinetic.Collection.mapMethods(Kinetic.TextPath) } (), function () { Kinetic.RegularPolygon = function (a) { this.___init(a) }, Kinetic.RegularPolygon.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "RegularPolygon", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b, c, d, e = this.attrs.sides, f = this.attrs.radius; for (a.beginPath(), a.moveTo(0, 0 - f), b = 1; e > b; b++) c = f * Math.sin(2 * b * Math.PI / e), d = -1 * f * Math.cos(2 * b * Math.PI / e), a.lineTo(c, d); a.closePath(), a.fillStrokeShape(this) } }, Kinetic.Util.extend(Kinetic.RegularPolygon, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, "radius", 0), Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, "sides", 0), Kinetic.Collection.mapMethods(Kinetic.RegularPolygon) } (), function () { Kinetic.Star = function (a) { this.___init(a) }, Kinetic.Star.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Star", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b = this.innerRadius(), c = this.outerRadius(), d = this.numPoints(); a.beginPath(), a.moveTo(0, 0 - c); for (var e = 1; 2 * d > e; e++) { var f = e % 2 === 0 ? c : b, g = f * Math.sin(e * Math.PI / d), h = -1 * f * Math.cos(e * Math.PI / d); a.lineTo(g, h) } a.closePath(), a.fillStrokeShape(this) } }, Kinetic.Util.extend(Kinetic.Star, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Star, "numPoints", 5), Kinetic.Factory.addGetterSetter(Kinetic.Star, "innerRadius", 0), Kinetic.Factory.addGetterSetter(Kinetic.Star, "outerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Star) } (), function () { var a = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text"], b = "Change.kinetic", c = "none", d = "up", e = "right", f = "down", g = "left", h = "Label", i = a.length; Kinetic.Label = function (a) { this.____init(a) }, Kinetic.Label.prototype = { ____init: function (a) { var b = this; this.className = h, Kinetic.Group.call(this, a), this.on("add.kinetic", function (a) { b._addListeners(a.child), b._sync() }) }, getText: function () { return this.find("Text")[0] }, getTag: function () { return this.find("Tag")[0] }, _addListeners: function (c) { var d, e = this, f = function () { e._sync() }; for (d = 0; i > d; d++) c.on(a[d] + b, f) }, getWidth: function () { return this.getText().getWidth() }, getHeight: function () { return this.getText().getHeight() }, _sync: function () { var a, b, c, h, i, j, k, l = this.getText(), m = this.getTag(); if (l && m) { switch (a = l.getWidth(), b = l.getHeight(), c = m.getPointerDirection(), h = m.getPointerWidth(), k = m.getPointerHeight(), i = 0, j = 0, c) { case d: i = a / 2, j = -1 * k; break; case e: i = a + h, j = b / 2; break; case f: i = a / 2, j = b + k; break; case g: i = -1 * h, j = b / 2 } m.setAttrs({ x: -1 * i, y: -1 * j, width: a, height: b }), l.setAttrs({ x: -1 * i, y: -1 * j }) } } }, Kinetic.Util.extend(Kinetic.Label, Kinetic.Group), Kinetic.Collection.mapMethods(Kinetic.Label), Kinetic.Tag = function (a) { this.___init(a) }, Kinetic.Tag.prototype = { ___init: function (a) { Kinetic.Shape.call(this, a), this.className = "Tag", this.sceneFunc(this._sceneFunc) }, _sceneFunc: function (a) { var b = this.getWidth(), c = this.getHeight(), h = this.getPointerDirection(), i = this.getPointerWidth(), j = this.getPointerHeight(); a.beginPath(), a.moveTo(0, 0), h === d && (a.lineTo((b - i) / 2, 0), a.lineTo(b / 2, -1 * j), a.lineTo((b + i) / 2, 0)), a.lineTo(b, 0), h === e && (a.lineTo(b, (c - j) / 2), a.lineTo(b + i, c / 2), a.lineTo(b, (c + j) / 2)), a.lineTo(b, c), h === f && (a.lineTo((b + i) / 2, c), a.lineTo(b / 2, c + j), a.lineTo((b - i) / 2, c)), a.lineTo(0, c), h === g && (a.lineTo(0, (c + j) / 2), a.lineTo(-1 * i, c / 2), a.lineTo(0, (c - j) / 2)), a.closePath(), a.fillStrokeShape(this) } }, Kinetic.Util.extend(Kinetic.Tag, Kinetic.Shape), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "pointerDirection", c), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "pointerWidth", 0), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "pointerHeight", 0), Kinetic.Factory.addGetterSetter(Kinetic.Tag, "cornerRadius", 0), Kinetic.Collection.mapMethods(Kinetic.Tag) } ();
        /*****************************
* page process
******************************/


        function writeMessage(message) {
            //text.setText(message);
            Output(message);
            layer.draw();
        }


        function writeCord(cords) {
            cord.setText(cords);
            layer.draw();
        }

        //____________________________________
        //Defining Stage for Keyboard Area
        //____________________________________

        var stage = new Kinetic.Stage({
            container: 'container',
            width: 700,
            height: 500
        });
        var layer = new Kinetic.Layer();

        var firstRowHeight = (1 * ((stage.height() - 50) / 9));
        var eX = 10;
        var eY = 5;
        var usrString = "";

        var middleSpace = new Kinetic.Rect({
            x: 100,
            y: 100,
            width: 500,
            height: 250,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        //___________________________________
        //Defining First Row Of Keys
        //___________________________________

        var keyQ = new Kinetic.Rect({
            x: 100,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtQ = new Kinetic.Text({
            x: 100 + eX,
            y: firstRowHeight + eY,
            text: 'Q',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black',
        });

        var keyW = new Kinetic.Rect({
            x: 150,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtW = new Kinetic.Text({
            x: 150 + eX,
            y: firstRowHeight + eY,
            text: 'W',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyE = new Kinetic.Rect({
            x: 200,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtE = new Kinetic.Text({
            x: 200 + eX,
            y: firstRowHeight + eY,
            text: 'E',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyR = new Kinetic.Rect({
            x: 250,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtR = new Kinetic.Text({
            x: 250 + eX,
            y: firstRowHeight + eY,
            text: 'R',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyT = new Kinetic.Rect({
            x: 300,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtT = new Kinetic.Text({
            x: 300 + eX,
            y: firstRowHeight + eY,
            text: 'T',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyY = new Kinetic.Rect({
            x: 350,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtY = new Kinetic.Text({
            x: 350 + eX,
            y: firstRowHeight + eY,
            text: 'Y',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyU = new Kinetic.Rect({
            x: 400,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtU = new Kinetic.Text({
            x: 400 + eX,
            y: firstRowHeight + eY,
            text: 'U',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyI = new Kinetic.Rect({
            x: 450,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtI = new Kinetic.Text({
            x: 450 + eX,
            y: firstRowHeight + eY,
            align: 'center',
            text: 'I',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black',
        });

        var keyO = new Kinetic.Rect({
            x: 500,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtO = new Kinetic.Text({
            x: 500 + eX,
            y: firstRowHeight + eY,
            text: 'O',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyP = new Kinetic.Rect({
            x: 550,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtP = new Kinetic.Text({
            x: 550 + eX,
            y: firstRowHeight + eY,
            text: 'P',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyBkSp = new Kinetic.Rect({
            x: 600,
            y: firstRowHeight,
            width: 50,
            height: 100,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtBkSp = new Kinetic.Text({
            x: 600 + eX,
            y: 2 * (firstRowHeight),
            text: '<-',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        //___________________________________
        //Defining Middle Keys
        //___________________________________

        var keyA = new Kinetic.Rect({
            x: 50,
            y: 2 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtA = new Kinetic.Text({
            x: 50 + eX,
            y: 2 * (firstRowHeight) + eY,
            text: 'A',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyS = new Kinetic.Rect({
            x: 50,
            y: 3 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtS = new Kinetic.Text({
            x: 50 + eX,
            y: 3 * (firstRowHeight) + eY,
            text: 'S',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyD = new Kinetic.Rect({
            x: 50,
            y: 4 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtD = new Kinetic.Text({
            x: 50 + eX,
            y: 4 * (firstRowHeight) + eY,
            text: 'D',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyF = new Kinetic.Rect({
            x: 50,
            y: 5 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtF = new Kinetic.Text({
            x: 50 + eX,
            y: 5 * (firstRowHeight) + eY,
            text: 'F',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyG = new Kinetic.Rect({
            x: 50,
            y: 6 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtG = new Kinetic.Text({
            x: 50 + eX,
            y: 6 * (firstRowHeight) + eY,
            text: 'G',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyH = new Kinetic.Rect({
            x: 600,
            y: 3 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtH = new Kinetic.Text({
            x: 600 + eX,
            y: 3 * (firstRowHeight) + eY,
            text: 'H',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyJ = new Kinetic.Rect({
            x: 600,
            y: 4 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtJ = new Kinetic.Text({
            x: 600 + eX,
            y: 4 * (firstRowHeight) + eY,
            text: 'J',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyK = new Kinetic.Rect({
            x: 600,
            y: 5 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtK = new Kinetic.Text({
            x: 600 + eX,
            y: 5 * (firstRowHeight) + eY,
            text: 'K',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyL = new Kinetic.Rect({
            x: 600,
            y: 6 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtL = new Kinetic.Text({
            x: 600 + eX,
            y: 6 * (firstRowHeight) + eY,
            text: 'L',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        //___________________________________
        //Defining Third Row Of Keys
        //___________________________________



        var keyZ = new Kinetic.Rect({
            x: 100,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtZ = new Kinetic.Text({
            x: 100 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'Z',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyX = new Kinetic.Rect({
            x: 150,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtX = new Kinetic.Text({
            x: 150 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'X',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyC = new Kinetic.Rect({
            x: 200,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtC = new Kinetic.Text({
            x: 200 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'C',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyV = new Kinetic.Rect({
            x: 250,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtV = new Kinetic.Text({
            x: 250 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'V',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyB = new Kinetic.Rect({
            x: 300,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtB = new Kinetic.Text({
            x: 300 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'B',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyN = new Kinetic.Rect({
            x: 350,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtN = new Kinetic.Text({
            x: 350 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'N',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyM = new Kinetic.Rect({
            x: 400,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtM = new Kinetic.Text({
            x: 400 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'M',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keySpc = new Kinetic.Rect({
            x: 450,
            y: 7 * (firstRowHeight),
            width: 100,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtSpc = new Kinetic.Text({
            x: 450,
            y: 7 * (firstRowHeight) + eY,
            text: 'Space',
            fontSize: 40,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyEntr = new Kinetic.Rect({
            x: 550,
            y: 7 * (firstRowHeight),
            width: 100,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtEntr = new Kinetic.Text({
            x: 550,
            y: 7 * (firstRowHeight) + eY,
            text: 'Enter',
            fontSize: 40,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        //_____________________________________
        //NON KEY AGGRGATE DISPLAY DEFINITIONS
        //_____________________________________
        var text = new Kinetic.Text({
            x: 50,
            y: 1,
            fontFamily: 'Ariel',
            fontSize: 24,
            text: '',
            fill: 'black'
        });

        var cord = new Kinetic.Text({
            x: 530,
            y: 25,
            fontFamily: 'Garamond',
            fontSize: 24,
            text: '',
            fill: 'black'
        });

        stage.on('mousemove', function () {
            var mousePos = stage.getPointerPosition();
            var x = mousePos.x;
            var y = mousePos.y;
            writeCord('x: ' + x + ', y: ' + y);
        });

        //__________________________________________________
        //Key functions
        //______________________________________________
        //First row
        //______________________________________________      


        keyTxtQ.on('mouseover', function () {
            usrString = usrString + 'Q';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtQ.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtW.on('mouseover', function () {
            usrString = usrString + 'W';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtW.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtE.on('mouseover', function () {
            usrString = usrString + 'E';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtE.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtR.on('mouseover', function () {
            usrString = usrString + 'R';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtR.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtT.on('mouseover', function () {
            usrString = usrString + 'T';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtT.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtY.on('mouseover', function () {
            usrString = usrString + 'Y';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtY.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtU.on('mouseover', function () {
            usrString = usrString + 'U';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtU.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtI.on('mouseover', function () {
            usrString = usrString + 'I';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtI.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtO.on('mouseover', function () {
            usrString = usrString + 'O';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtO.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtP.on('mouseover', function () {
            usrString = usrString + 'P';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtP.on('mouseout', function () {
            this.fill('#000000');
        });



        //__________________________________________________
        //Key functions
        //______________________________________________
        //Second row
        //______________________________________________  

        keyTxtA.on('mouseover', function () {
            usrString = usrString + 'A';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtA.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtS.on('mouseover', function () {
            usrString = usrString + 'S';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtS.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtD.on('mouseover', function () {
            usrString = usrString + 'D';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtD.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtF.on('mouseover', function () {
            usrString = usrString + 'F';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtF.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtG.on('mouseover', function () {
            usrString = usrString + 'G';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtG.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtH.on('mouseover', function () {
            usrString = usrString + 'H';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtH.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtJ.on('mouseover', function () {
            usrString = usrString + 'J';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtJ.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtK.on('mouseover', function () {
            usrString = usrString + 'K';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtK.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtL.on('mouseover', function () {
            usrString = usrString + 'L';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtL.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtBkSp.on('mouseover', function () {
            usrString = usrString.substring(0, usrString.length - 1);
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtBkSp.on('mouseout', function () {
            this.fill('#000000');
        });


        //__________________________________________________
        //Key functions
        //______________________________________________
        //Third row
        //______________________________________________  

        keyTxtZ.on('mouseover', function () {
            usrString = usrString + 'Z';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtZ.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtX.on('mouseover', function () {
            usrString = usrString + 'X';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtX.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtC.on('mouseover', function () {
            usrString = usrString + 'C';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtC.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtV.on('mouseover', function () {
            usrString = usrString + 'V';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtV.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtB.on('mouseover', function () {
            usrString = usrString + 'B';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtB.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtN.on('mouseover', function () {
            usrString = usrString + 'N';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtN.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtM.on('mouseover', function () {
            usrString = usrString + 'M';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtM.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtSpc.on('mouseover', function () {
            usrString = usrString + ' ';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtSpc.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtEntr.on('mouseover', function () {
            OnEnter();
            usrString = "";
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtEntr.on('mouseout', function () {
            this.fill('#000000');
        });

        //______________________________________
        //Display Layer
        //______________________________________
        //First Row
        //______________________________________


        layer.add(keyQ);
        layer.add(keyTxtQ);
        layer.add(keyW);
        layer.add(keyTxtW);
        layer.add(keyE);
        layer.add(keyTxtE);
        layer.add(keyR);
        layer.add(keyTxtR);
        layer.add(keyT);
        layer.add(keyTxtT);
        layer.add(keyY);
        layer.add(keyTxtY);
        layer.add(keyU);
        layer.add(keyTxtU);
        layer.add(keyI);
        layer.add(keyTxtI);
        layer.add(keyO);
        layer.add(keyTxtO);
        layer.add(keyP);
        layer.add(keyTxtP);
        layer.add(keyBkSp);
        layer.add(keyTxtBkSp);


        //______________________________________
        //Display Layer
        //______________________________________
        //Second Row
        //______________________________________


        layer.add(keyA);
        layer.add(keyTxtA);
        layer.add(keyS);
        layer.add(keyTxtS);
        layer.add(keyD);
        layer.add(keyTxtD);
        layer.add(keyF);
        layer.add(keyTxtF);
        layer.add(keyG);
        layer.add(keyTxtG);
        layer.add(keyH);
        layer.add(keyTxtH);
        layer.add(keyJ);
        layer.add(keyTxtJ);
        layer.add(keyK);
        layer.add(keyTxtK);
        layer.add(keyL);
        layer.add(keyTxtL);

        //______________________________________
        //Display Layer
        //______________________________________
        //Third Row
        //______________________________________


        layer.add(keyZ);
        layer.add(keyTxtZ);
        layer.add(keyX);
        layer.add(keyTxtX);
        layer.add(keyC);
        layer.add(keyTxtC);
        layer.add(keyV);
        layer.add(keyTxtV);
        layer.add(keyB);
        layer.add(keyTxtB);
        layer.add(keyN);
        layer.add(keyTxtN);
        layer.add(keyM);
        layer.add(keyTxtM);
        layer.add(keySpc);
        layer.add(keyTxtSpc);
        layer.add(keyEntr);
        layer.add(keyTxtEntr);
        //______________________________________
        //Display Layer
        //______________________________________
        //Aggrgate header footer
        //______________________________________
        layer.add(middleSpace);
        layer.add(cord);
        layer.add(text);
        stage.add(layer);
var messageRecord = "";
function writeMessage(message) {
    //text.setText(message);
    if (message == "Enter") {
        OnEnter();
        messageRecord = "";
    }
    else if (message == "BkSp") {
        if (messageRecord != "")
            messageRecord = messageRecord.substr(0, messageRecord.length - 1);
    }
    else if (message == "Spc")
        messageRecord += " ";
    else
        messageRecord += message;
    Output(messageRecord);
        
    layer.draw();
}
function writeCord(cords) {
	cord.setText(cords);
	layer.draw();
      }


//____________________________________
//Defining Stage for Keyboard Area
//____________________________________
      	var stage = new Kinetic.Stage({
        	container: 'container',
        	width: 1100,
        	height: 500
      	});
      	var layer = new Kinetic.Layer();


//___________________________________
//Defining First Row Of Keys
//___________________________________

      	var keyQ = new Kinetic.Rect({
		x: 50,
       		y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      
	var keyTxtQ = new Kinetic.Text({
        	x: 50,
        	y: stage.height()/5,
        	text: 'Q',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyW = new Kinetic.Rect({
		x: 100,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtW = new Kinetic.Text({
        	x: 100,
        	y: stage.height()/5,
        	text: 'W',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyE = new Kinetic.Rect({
		x: 150,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtE = new Kinetic.Text({
        	x: 150,
        	y: stage.height()/5,
        	text: 'E',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyR = new Kinetic.Rect({
		x: 200,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtR = new Kinetic.Text({
        	x: 200,
        	y: stage.height()/5,
        	text: 'R',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyT = new Kinetic.Rect({
		x: 250,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtT = new Kinetic.Text({
        	x: 250,
        	y: stage.height()/5,
        	text: 'T',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyY = new Kinetic.Rect({
		x: 300,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtY = new Kinetic.Text({
        	x: 300,
        	y: stage.height()/5,
        	text: 'Y',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
     	 });

      	var keyU = new Kinetic.Rect({
		x: 350,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtU = new Kinetic.Text({
        	x: 350,
        	y: stage.height()/5,
        	text: 'U',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyI = new Kinetic.Rect({
		x: 400,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtI = new Kinetic.Text({
        	x: 400,
        	y: stage.height()/5,
        	text: 'I',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyO = new Kinetic.Rect({
		x: 450,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtO = new Kinetic.Text({
        	x: 450,
        	y: stage.height()/5,
        	text: 'O',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyP = new Kinetic.Rect({
		x: 500,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtP = new Kinetic.Text({
        	x: 500,
        	y: stage.height()/5,
        	text: 'P',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

//___________________________________
//Defining Second Row Of Keys
//___________________________________

      var keyA = new Kinetic.Rect({
	x: 50,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtA = new Kinetic.Text({
        x: 50,
        y: 2*(stage.height()/5),
        text: 'A',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyS = new Kinetic.Rect({
	x: 100,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtS = new Kinetic.Text({
        x: 100,
        y: 2*(stage.height()/5),
        text: 'S',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyD = new Kinetic.Rect({
	x: 150,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtD = new Kinetic.Text({
        x: 150,
        y: 2*(stage.height()/5),
        text: 'D',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyF = new Kinetic.Rect({
	x: 200,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtF = new Kinetic.Text({
        x: 200,
        y: 2*(stage.height()/5),
        text: 'F',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyG = new Kinetic.Rect({
	x: 250,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtG = new Kinetic.Text({
        x: 250,
        y: 2*(stage.height()/5),
        text: 'G',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyH = new Kinetic.Rect({
	x: 300,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtH = new Kinetic.Text({
        x: 300,
        y: 2*(stage.height()/5),
        text: 'H',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyJ = new Kinetic.Rect({
	x: 350,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtJ = new Kinetic.Text({
        x: 350,
        y: 2*(stage.height()/5),
        text: 'J',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyK = new Kinetic.Rect({
	x: 400,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtK = new Kinetic.Text({
        x: 400,
        y: 2*(stage.height()/5),
        text: 'K',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyL = new Kinetic.Rect({
	x: 450,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtL = new Kinetic.Text({
        x: 450,
        y: 2*(stage.height()/5),
        text: 'L',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyBkSp = new Kinetic.Rect({
	x: 500,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtBkSp = new Kinetic.Text({
        x: 500,
        y: 2*(stage.height()/5),
        text: '<-',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

//___________________________________
//Defining Third Row Of Keys
//___________________________________



      var keyZ = new Kinetic.Rect({
	x: 50,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtZ = new Kinetic.Text({
        x: 50,
        y: 3*(stage.height()/5),
        text: 'Z',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyX = new Kinetic.Rect({
	x: 100,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtX = new Kinetic.Text({
        x: 100,
        y: 3*(stage.height()/5),
        text: 'X',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyC = new Kinetic.Rect({
	x: 150,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtC = new Kinetic.Text({
        x: 150,
        y: 3*(stage.height()/5),
        text: 'C',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyV = new Kinetic.Rect({
	x: 200,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtV = new Kinetic.Text({
        x: 200,
        y: 3*(stage.height()/5),
        text: 'V',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyB = new Kinetic.Rect({
	x: 250,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtB = new Kinetic.Text({
        x: 250,
        y: 3*(stage.height()/5),
        text: 'B',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyN = new Kinetic.Rect({
	x: 300,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtN = new Kinetic.Text({
        x: 300,
        y: 3*(stage.height()/5),
        text: 'N',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyM = new Kinetic.Rect({
	x: 350,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtM = new Kinetic.Text({
        x: 350,
        y: 3*(stage.height()/5),
        text: 'M',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keySpc = new Kinetic.Rect({
	x: 400,
        y: 3*(stage.height()/5),
        width: 100,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtSpc = new Kinetic.Text({
        x: 400,
        y: 3*(stage.height()/5),
        text: 'Space',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyEnter = new Kinetic.Rect({
	x: 500,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtEnter = new Kinetic.Text({
        x: 500,
        y: 3*(stage.height()/5),
        text: '<!',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

//_____________________________________
//NON KEY AGGRGATE DISPLAY DEFINITIONS
//_____________________________________
      var text = new Kinetic.Text({
        x: 50,
        y: 70,
        fontFamily: 'Garamond',
        fontSize: 24,
        text: '',
        fill: 'black'
      });

      	var cord = new Kinetic.Text({
	x: 450,
        y: 360,
        fontFamily: 'Garamond',
        fontSize: 24,
        text: '',
        fill: 'black'	
      	});
      

	stage.on('mousemove', function() {
        	var mousePos = stage.getPointerPosition();
        	var x = mousePos.x;
        	var y = mousePos.y;
        	writeCord('x: ' + x + ', y: ' + y);
      	});

//__________________________________________________
//Key functions
//______________________________________________
//First row
//______________________________________________      


      keyQ.on('mouseover', function(){
	writeMessage('Q');
      });
      keyW.on('mouseover', function(){
	writeMessage('W');
      });
      keyE.on('mouseover', function(){
	writeMessage('E');
      });
      keyR.on('mouseover', function(){
	writeMessage('R');
      });
      keyT.on('mouseover', function(){
	writeMessage('T');
      });
      keyY.on('mouseover', function(){
	writeMessage('Y');
      });
      keyU.on('mouseover', function(){
	writeMessage('U');
      });
      keyI.on('mouseover', function(){
	writeMessage('I');
      });
      keyO.on('mouseover', function(){
	writeMessage('O');
      });
      keyP.on('mouseover', function(){
	writeMessage('P');
      });


//__________________________________________________
//Key functions
//______________________________________________
//Second row
//______________________________________________  

      keyA.on('mouseover', function(){
	writeMessage('A');
      });
      keyS.on('mouseover', function(){
	writeMessage('S');
      });
      keyD.on('mouseover', function(){
	writeMessage('D');
      });
      keyF.on('mouseover', function(){
	writeMessage('F');
      });
      keyG.on('mouseover', function(){
	writeMessage('G');
      });
      keyH.on('mouseover', function(){
	writeMessage('H');
      });
      keyJ.on('mouseover', function(){
	writeMessage('J');
      });
      keyK.on('mouseover', function(){
	writeMessage('K');
      });
      keyL.on('mouseover', function(){
	writeMessage('L');
      });
      keyBkSp.on('mouseover', function(){
	writeMessage('BkSp');
      });


//__________________________________________________
//Key functions
//______________________________________________
//Third row
//______________________________________________  
      
      keyZ.on('mouseover', function(){
	writeMessage('Z');
      });
      keyX.on('mouseover', function(){
	writeMessage('X');
      });
      keyC.on('mouseover', function(){
	writeMessage('C');
      });
      keyV.on('mouseover', function(){
	writeMessage('V');
      });
      keyB.on('mouseover', function(){
	writeMessage('B');
      });
      keyN.on('mouseover', function(){
	writeMessage('N');
      });
      keyM.on('mouseover', function(){
	writeMessage('M');
      });
      keySpc.on('mouseover', function(){
	writeMessage('Spc');
      });
      keyEnter.on('mouseover', function(){
	writeMessage('Enter');
      });

//______________________________________
//Display Layer
//______________________________________
//First Row
//______________________________________

      layer.add(keyQ);
      layer.add(keyTxtQ);
      layer.add(keyW);
      layer.add(keyTxtW);
      layer.add(keyE);
      layer.add(keyTxtE);
      layer.add(keyR);
      layer.add(keyTxtR);
      layer.add(keyT);
      layer.add(keyTxtT);
      layer.add(keyY);
      layer.add(keyTxtY);
      layer.add(keyU);
      layer.add(keyTxtU);
      layer.add(keyI);
      layer.add(keyTxtI);
      layer.add(keyO);
      layer.add(keyTxtO);
      layer.add(keyP);
      layer.add(keyTxtP);


//______________________________________
//Display Layer
//______________________________________
//Second Row
//______________________________________


      layer.add(keyA);
      layer.add(keyTxtA);
      layer.add(keyS);
      layer.add(keyTxtS);
      layer.add(keyD);
      layer.add(keyTxtD);
      layer.add(keyF);
      layer.add(keyTxtF);
      layer.add(keyG);
      layer.add(keyTxtG);
      layer.add(keyH);
      layer.add(keyTxtH);
      layer.add(keyJ);
      layer.add(keyTxtJ);
      layer.add(keyK);
      layer.add(keyTxtK);
      layer.add(keyL);
      layer.add(keyTxtL);
      layer.add(keyBkSp);
      layer.add(keyTxtBkSp);

//______________________________________
//Display Layer
//______________________________________
//Third Row
//______________________________________


      layer.add(keyZ);
      layer.add(keyTxtZ);
      layer.add(keyX);
      layer.add(keyTxtX);
      layer.add(keyC);
      layer.add(keyTxtC);
      layer.add(keyV);
      layer.add(keyTxtV);
      layer.add(keyB);
      layer.add(keyTxtB);
      layer.add(keyN);
      layer.add(keyTxtN);
      layer.add(keyM);
      layer.add(keyTxtM);
      layer.add(keySpc);
      layer.add(keyTxtSpc);
      layer.add(keyEnter);
      layer.add(keyTxtEnter);

//______________________________________
//Display Layer
//______________________________________
//Aggrgate header footer
//______________________________________

      layer.add(cord);
      layer.add(text);
      stage.add(layer);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {
  jQuery(function() {
    $("a[rel~=popover], .has-popover").popover();
    return $("a[rel~=tooltip], .has-tooltip").tooltip();
  });

}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
function loadSuiteWords(row, suiteId)
{
    enableNewBUtton();
    setSelectedRow(row);
    
    $( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: suiteId } );
    
};

function cleanRowStyles()
{
    var table = document.getElementById("tsTbl");
    for (var i = 0, row; row = table.rows[i]; i++) {
       $(row).removeClass('success'); 
    }
}
function enableNewBUtton()
{
    document.getElementById("newWrdBtn").classList.remove("disabled");
}
function setSelectedRow(row)
{
    cleanRowStyles();
    $(row).parent('tr').addClass('success');
}
;
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//





;
