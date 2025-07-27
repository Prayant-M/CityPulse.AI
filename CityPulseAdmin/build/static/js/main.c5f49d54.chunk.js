(this["webpackJsonpuser-login"] = this["webpackJsonpuser-login"] || []).push([
  [0],
  {
    74: function (e, t, s) {},
    89: function (e, t, s) {},
    90: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(2),
        a = s.n(c),
        n = s(31),
        r = s.n(n),
        l = s(26),
        i = (s(73), s(95)),
        o = s(96),
        d = s(66),
        j = s(14),
        m = (s(74), s(9)),
        b = s(0),
        h = s(3),
        x = s(10),
        u = s(28),
        O = s(92),
        g = s(93),
        p = s(99),
        f = s(94),
        v = s(100),
        N = s(98),
        y = s(32),
        w = s(63),
        _ = Object(w.a)({
          apiKey: "AIzaSyD1eF7IAs9l-P1UntCR_n7qM8ZeEd6MQlo",
          authDomain: "citypulseapp-5e012.firebaseapp.com",
          projectId: "citypulseapp-5e012",
          storageBucket: "citypulseapp-5e012.firebasestorage.app",
          messagingSenderId: "893499848636",
          appId: "1:893499848636:web:25a7e1ce78470d08915db9",
          measurementId: "G-XRM7CZZHXP",
        }),
        k = Object(y.c)(_),
        C = Object(u.c)(_),
        S = s(1),
        A = Object(c.createContext)();
      function F(e) {
        var t = e.children,
          s = Object(c.useState)({}),
          a = Object(x.a)(s, 2),
          n = a[0],
          r = a[1];
        return (
          Object(c.useEffect)(function () {
            var e = Object(y.d)(k, function (e) {
              console.log("Auth", e), r(e);
            });
            return function () {
              e();
            };
          }, []),
          Object(S.jsx)(A.Provider, {
            value: {
              user: n,
              logIn: function (e, t) {
                return Object(y.e)(k, e, t);
              },
              signUp: function (e, t) {
                return Object(y.b)(k, e, t);
              },
              logOut: function () {
                return Object(y.g)(k);
              },
              googleSignIn: function () {
                var e = new y.a();
                return Object(y.f)(k, e);
              },
            },
            children: t,
          })
        );
      }
      function I() {
        return Object(c.useContext)(A);
      }
      var L = function () {
          var e = I(),
            t = e.logOut,
            s = e.user,
            a = Object(j.o)(),
            n = Object(c.useState)(""),
            r = Object(x.a)(n, 2),
            i = r[0],
            o = r[1],
            d = Object(c.useState)(""),
            y = Object(x.a)(d, 2),
            w = y[0],
            _ = y[1],
            k = Object(c.useState)([]),
            A = Object(x.a)(k, 2),
            F = A[0],
            L = A[1],
            P = Object(c.useState)([]),
            B = Object(x.a)(P, 2),
            E = B[0],
            D = B[1],
            M = Object(c.useState)(!0),
            H = Object(x.a)(M, 2),
            z = H[0],
            R = H[1],
            G = Object(c.useState)(!0),
            U = Object(x.a)(G, 2),
            $ = U[0],
            W = U[1],
            T = Object(c.useState)(null),
            V = Object(x.a)(T, 2),
            K = V[0],
            Y = V[1],
            Z = Object(c.useState)(null),
            J = Object(x.a)(Z, 2),
            q = J[0],
            X = J[1],
            Q = (function () {
              var e = Object(h.a)(
                Object(b.a)().mark(function e() {
                  return Object(b.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), t();
                          case 3:
                            a("/"), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0.message);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(c.useEffect)(function () {
            var e = (function () {
              var e = Object(h.a)(
                Object(b.a)().mark(function e() {
                  var t, s;
                  return Object(b.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              R(!0),
                              (e.next = 4),
                              Object(u.b)(Object(u.a)(C, "reflex_verdicts"))
                            );
                          case 4:
                            (t = e.sent),
                              (s = []),
                              t.forEach(function (e) {
                                s.push(Object(m.a)({ id: e.id }, e.data()));
                              }),
                              L(s),
                              Y(null),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              console.error(
                                "Error fetching reflex verdicts:",
                                e.t0
                              ),
                              Y("Failed to load data from Firestore");
                          case 15:
                            return (e.prev = 15), R(!1), e.finish(15);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11, 15, 18]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []),
            Object(c.useEffect)(function () {
              var e = (function () {
                var e = Object(h.a)(
                  Object(b.a)().mark(function e() {
                    var t, s;
                    return Object(b.a)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                W(!0),
                                (e.next = 4),
                                Object(u.b)(Object(u.a)(C, "react_verdicts"))
                              );
                            case 4:
                              (t = e.sent),
                                (s = []),
                                t.forEach(function (e) {
                                  s.push(Object(m.a)({ id: e.id }, e.data()));
                                }),
                                D(s),
                                X(null),
                                (e.next = 15);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(0)),
                                console.error(
                                  "Error fetching react verdicts:",
                                  e.t0
                                ),
                                X(
                                  "Failed to load react verdicts from Firestore"
                                );
                            case 15:
                              return (e.prev = 15), W(!1), e.finish(15);
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 11, 15, 18]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }, []);
          var ee = function (e) {
              return e
                .split("_")
                .map(function (e) {
                  return e.charAt(0).toUpperCase() + e.slice(1);
                })
                .join(" ");
            },
            te = function (e) {
              return null === e || void 0 === e
                ? "N/A"
                : "boolean" === typeof e
                ? e
                  ? "Yes"
                  : "No"
                : "object" === typeof e && e.seconds
                ? new Date(1e3 * e.seconds).toLocaleString()
                : "object" === typeof e &&
                  void 0 !== e._lat &&
                  void 0 !== e._long
                ? "".concat(e._lat.toFixed(6), ", ").concat(e._long.toFixed(6))
                : "object" !== typeof e || Array.isArray(e)
                ? Array.isArray(e)
                  ? e.join(", ")
                  : e.toString()
                : JSON.stringify(e);
            },
            se = function (e) {
              return e >= 0.7 ? "success" : e >= 0.4 ? "warning" : "danger";
            },
            ce = function (e) {
              switch (null === e || void 0 === e ? void 0 : e.toLowerCase()) {
                case "confirmed":
                  return "success";
                case "unconfirmed":
                  return "warning";
                case "rejected":
                  return "danger";
                default:
                  return "secondary";
              }
            },
            ae = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "No analysis available";
              return "string" === typeof e
                ? e
                : e && "object" === typeof e && e.verdict
                ? e.verdict
                : t;
            },
            ne = function (e) {
              if (!e || "string" !== typeof e) return "No content available";
              var t = e
                .replace(
                  /^### (.*$)/gm,
                  '<h6 class="text-primary mb-2 mt-3">$1</h6>'
                )
                .replace(
                  /^## (.*$)/gm,
                  '<h5 class="text-primary mb-2 mt-3">$1</h5>'
                )
                .replace(
                  /^# (.*$)/gm,
                  '<h4 class="text-primary mb-2 mt-3">$1</h4>'
                )
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/__(.*?)__/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(/_(.*?)_/g, "<em>$1</em>")
                .replace(
                  /```([\s\S]*?)```/g,
                  '<pre class="bg-light p-2 rounded"><code>$1</code></pre>'
                )
                .replace(
                  /`([^`]+)`/g,
                  '<code class="bg-light px-1 rounded">$1</code>'
                )
                .replace(/^\* (.*$)/gm, "<li>$1</li>")
                .replace(/^- (.*$)/gm, "<li>$1</li>")
                .replace(/^\+ (.*$)/gm, "<li>$1</li>")
                .replace(/\n\n/g, '</p><p class="mb-2">')
                .replace(/\n/g, "<br>");
              return (
                (t = t.replace(
                  /(<li>[\s\S]*<\/li>)/g,
                  '<ul class="mb-2">$1</ul>'
                )).startsWith("<") || (t = '<p class="mb-2">' + t + "</p>"),
                t
              );
            };
          return Object(S.jsxs)("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              Object(S.jsx)("nav", {
                className:
                  "navbar navbar-expand-lg navbar-dark bg-dark shadow-sm",
                style: {
                  width: "100vw",
                  marginLeft: "-50vw",
                  left: "50%",
                  position: "relative",
                },
                children: Object(S.jsxs)("div", {
                  className: "container-fluid px-4 mx-auto",
                  style: { width: "100%" },
                  children: [
                    Object(S.jsx)("span", {
                      className: "navbar-brand fw-bold fs-4",
                      children: "CityPulse Admin",
                    }),
                    Object(S.jsx)("div", {
                      className: "d-flex",
                      children: Object(S.jsx)(l.b, {
                        to: "/maps",
                        className: "nav-link text-white me-4",
                        children: "Maps",
                      }),
                    }),
                    Object(S.jsxs)("div", {
                      className: "d-flex align-items-center ms-auto",
                      children: [
                        Object(S.jsx)("span", {
                          className: "text-white me-3",
                          children: s && s.email,
                        }),
                        Object(S.jsx)(O.a, {
                          variant: "outline-light",
                          onClick: Q,
                          className: "rounded-3 px-3",
                          children: "Sign Out",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(S.jsx)("main", {
                className: "flex-grow-1 bg-light",
                children: Object(S.jsx)("div", {
                  className: "container-fluid h-100 p-4",
                  children: Object(S.jsx)("div", {
                    className: "row h-100 justify-content-center",
                    children: Object(S.jsxs)("div", {
                      className: "col-12",
                      children: [
                        w &&
                          Object(S.jsx)("div", {
                            className: "p-3 mb-3 bg-white rounded-3 shadow-sm",
                            children: Object(S.jsx)("p", {
                              className: "mb-0",
                              children: w,
                            }),
                          }),
                        Object(S.jsxs)("div", {
                          className: "mb-4 w-100",
                          children: [
                            Object(S.jsx)("h3", {
                              className: "mb-4 text-dark",
                              children: "Reflex Verdicts",
                            }),
                            z &&
                              Object(S.jsxs)("div", {
                                className: "text-center py-4",
                                children: [
                                  Object(S.jsx)(g.a, {
                                    animation: "border",
                                    role: "status",
                                    children: Object(S.jsx)("span", {
                                      className: "visually-hidden",
                                      children: "Loading...",
                                    }),
                                  }),
                                  Object(S.jsx)("p", {
                                    className: "mt-2 text-muted",
                                    children: "Loading reflex verdicts...",
                                  }),
                                ],
                              }),
                            K &&
                              Object(S.jsx)("div", {
                                className: "alert alert-danger",
                                role: "alert",
                                children: K,
                              }),
                            !z &&
                              !K &&
                              0 === F.length &&
                              Object(S.jsx)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children:
                                  "No reflex verdicts found in the database.",
                              }),
                            !z &&
                              !K &&
                              F.length > 0 &&
                              Object(S.jsx)(p.a, {
                                className: "w-100",
                                children: F.map(function (e, t) {
                                  var s, c, a;
                                  return Object(S.jsxs)(
                                    p.a.Item,
                                    {
                                      eventKey: t.toString(),
                                      className: "mb-3",
                                      children: [
                                        Object(S.jsx)(p.a.Header, {
                                          className: "w-100",
                                          children: Object(S.jsxs)("div", {
                                            className:
                                              "d-flex align-items-center justify-content-between w-100 pe-4",
                                            children: [
                                              Object(S.jsxs)("div", {
                                                className:
                                                  "d-flex align-items-center flex-grow-1",
                                                children: [
                                                  Object(S.jsxs)("strong", {
                                                    className: "me-3 fs-5",
                                                    children: [
                                                      "Cell ID: ",
                                                      e.cell_id || "Unknown",
                                                    ],
                                                  }),
                                                  void 0 !==
                                                    e.crowd_confidence &&
                                                    Object(S.jsxs)(f.a, {
                                                      bg: se(
                                                        e.crowd_confidence
                                                      ),
                                                      className:
                                                        "me-3 px-3 py-2",
                                                      style: {
                                                        fontSize: "0.85rem",
                                                      },
                                                      children: [
                                                        "Confidence:",
                                                        " ",
                                                        (
                                                          100 *
                                                          e.crowd_confidence
                                                        ).toFixed(1),
                                                        "%",
                                                      ],
                                                    }),
                                                  Object(S.jsx)(f.a, {
                                                    bg: "secondary",
                                                    className: "me-2",
                                                    children:
                                                      e.category ||
                                                      "Unknown Category",
                                                  }),
                                                ],
                                              }),
                                              e.location &&
                                                Object(S.jsx)("div", {
                                                  className:
                                                    "text-muted text-truncate flex-shrink-1",
                                                  style: {
                                                    maxWidth: "400px",
                                                    fontSize: "0.9rem",
                                                  },
                                                  children: e.location,
                                                }),
                                            ],
                                          }),
                                        }),
                                        Object(S.jsxs)(p.a.Body, {
                                          children: [
                                            Object(S.jsxs)("div", {
                                              className: "row",
                                              children: [
                                                Object(S.jsx)("div", {
                                                  className: "col-md-3 mb-3",
                                                  children: Object(S.jsxs)(
                                                    v.a,
                                                    {
                                                      className: "h-100",
                                                      children: [
                                                        Object(S.jsx)(
                                                          v.a.Header,
                                                          {
                                                            className:
                                                              "bg-primary text-white",
                                                            children: Object(
                                                              S.jsx
                                                            )("h6", {
                                                              className: "mb-0",
                                                              children:
                                                                "Basic Information",
                                                            }),
                                                          }
                                                        ),
                                                        Object(S.jsx)(
                                                          v.a.Body,
                                                          {
                                                            children: Object(
                                                              S.jsxs
                                                            )("div", {
                                                              className:
                                                                "row g-2",
                                                              children: [
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Cell ID:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      e.cell_id ||
                                                                        "N/A",
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Category:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      Object(
                                                                        S.jsx
                                                                      )(f.a, {
                                                                        bg: "info",
                                                                        className:
                                                                          "ms-1",
                                                                        children:
                                                                          e.category ||
                                                                          "N/A",
                                                                      }),
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Coordinates:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      te(
                                                                        e.coordinates
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Confidence:",
                                                                        }
                                                                      ),
                                                                      Object(
                                                                        S.jsx
                                                                      )(f.a, {
                                                                        bg: se(
                                                                          e.crowd_confidence
                                                                        ),
                                                                        className:
                                                                          "ms-2",
                                                                        children:
                                                                          void 0 !==
                                                                          e.crowd_confidence
                                                                            ? (
                                                                                100 *
                                                                                e.crowd_confidence
                                                                              ).toFixed(
                                                                                1
                                                                              ) +
                                                                              "%"
                                                                            : "N/A",
                                                                      }),
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Processed At:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "small",
                                                                        {
                                                                          className:
                                                                            "text-muted",
                                                                          children:
                                                                            te(
                                                                              e.processed_at
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Timestamp:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "small",
                                                                        {
                                                                          className:
                                                                            "text-muted",
                                                                          children:
                                                                            te(
                                                                              e.timestamp
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(S.jsx)("div", {
                                                  className: "col-md-5 mb-3",
                                                  children: Object(S.jsxs)(
                                                    v.a,
                                                    {
                                                      className: "h-100",
                                                      children: [
                                                        Object(S.jsx)(
                                                          v.a.Header,
                                                          {
                                                            className:
                                                              "bg-success text-white",
                                                            children: Object(
                                                              S.jsx
                                                            )("h6", {
                                                              className: "mb-0",
                                                              children:
                                                                "Location Details",
                                                            }),
                                                          }
                                                        ),
                                                        Object(S.jsx)(
                                                          v.a.Body,
                                                          {
                                                            children: Object(
                                                              S.jsx
                                                            )("p", {
                                                              className:
                                                                "mb-0 small",
                                                              children:
                                                                e.location ||
                                                                "Location not available",
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(S.jsx)("div", {
                                                  className: "col-md-4 mb-3",
                                                  children: Object(S.jsxs)(
                                                    v.a,
                                                    {
                                                      className: "h-100",
                                                      children: [
                                                        Object(S.jsx)(
                                                          v.a.Header,
                                                          {
                                                            className:
                                                              "bg-info text-white",
                                                            children: Object(
                                                              S.jsx
                                                            )("h6", {
                                                              className: "mb-0",
                                                              children:
                                                                "Sources Summary",
                                                            }),
                                                          }
                                                        ),
                                                        Object(S.jsx)(
                                                          v.a.Body,
                                                          {
                                                            children: Object(
                                                              S.jsxs
                                                            )("div", {
                                                              className:
                                                                "row g-2",
                                                              children: [
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "News Count:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      Object(
                                                                        S.jsx
                                                                      )(f.a, {
                                                                        bg: "primary",
                                                                        children:
                                                                          (null ===
                                                                            (s =
                                                                              e.sources) ||
                                                                          void 0 ===
                                                                            s
                                                                            ? void 0
                                                                            : s.news_count) ||
                                                                          0,
                                                                      }),
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Social Media Count:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      Object(
                                                                        S.jsx
                                                                      )(f.a, {
                                                                        bg: "primary",
                                                                        children:
                                                                          (null ===
                                                                            (c =
                                                                              e.sources) ||
                                                                          void 0 ===
                                                                            c
                                                                            ? void 0
                                                                            : c.social_media_count) ||
                                                                          0,
                                                                      }),
                                                                    ],
                                                                  }
                                                                ),
                                                                Object(S.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-12",
                                                                    children: [
                                                                      Object(
                                                                        S.jsx
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Weather Alert Count:",
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      Object(
                                                                        S.jsx
                                                                      )(f.a, {
                                                                        bg: "primary",
                                                                        children:
                                                                          (null ===
                                                                            (a =
                                                                              e.sources) ||
                                                                          void 0 ===
                                                                            a
                                                                            ? void 0
                                                                            : a.weather_alert_count) ||
                                                                          0,
                                                                      }),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                e.verdicts &&
                                                  Object(S.jsx)("div", {
                                                    className: "col-12 mb-3",
                                                    children: Object(S.jsxs)(
                                                      v.a,
                                                      {
                                                        children: [
                                                          Object(S.jsx)(
                                                            v.a.Header,
                                                            {
                                                              className:
                                                                "bg-dark text-white",
                                                              children: Object(
                                                                S.jsx
                                                              )("h6", {
                                                                className:
                                                                  "mb-0",
                                                                children:
                                                                  "\ud83e\udd16 AI Analysis Verdicts",
                                                              }),
                                                            }
                                                          ),
                                                          Object(S.jsx)(
                                                            v.a.Body,
                                                            {
                                                              children: Object(
                                                                S.jsxs
                                                              )("div", {
                                                                className:
                                                                  "row g-3",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "col-md-12 mb-3",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "border-start border-primary border-4 ps-3",
                                                                            children:
                                                                              [
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "h6",
                                                                                  {
                                                                                    className:
                                                                                      "text-primary mb-2",
                                                                                    children:
                                                                                      "\ud83d\udcf8 Image Analysis",
                                                                                  }
                                                                                ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "p",
                                                                                  {
                                                                                    className:
                                                                                      "mb-0 small",
                                                                                    children:
                                                                                      ae(
                                                                                        e
                                                                                          .verdicts
                                                                                          .image,
                                                                                        "No image analysis available"
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  Object(S.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "col-md-4",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "border-start border-warning border-4 ps-3",
                                                                            children:
                                                                              [
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "h6",
                                                                                  {
                                                                                    className:
                                                                                      "text-warning mb-2",
                                                                                    children:
                                                                                      "\ud83d\udcf0 News Analysis",
                                                                                  }
                                                                                ),
                                                                                e
                                                                                  .verdicts
                                                                                  .news &&
                                                                                  e
                                                                                    .verdicts
                                                                                    .news
                                                                                    .articles &&
                                                                                  Object(
                                                                                    S.jsxs
                                                                                  )(
                                                                                    S.Fragment,
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "strong",
                                                                                            {
                                                                                              className:
                                                                                                "small",
                                                                                              children:
                                                                                                "Articles Verdict:",
                                                                                            }
                                                                                          ),
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "small mb-2 text-muted",
                                                                                              children:
                                                                                                ae(
                                                                                                  e
                                                                                                    .verdicts
                                                                                                    .news
                                                                                                    .articles,
                                                                                                  "No verdict available"
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "strong",
                                                                                  {
                                                                                    className:
                                                                                      "small",
                                                                                    children:
                                                                                      "Overall:",
                                                                                  }
                                                                                ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "p",
                                                                                  {
                                                                                    className:
                                                                                      "small mb-0",
                                                                                    children:
                                                                                      ae(
                                                                                        e
                                                                                          .verdicts
                                                                                          .news,
                                                                                        "No news analysis available"
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  Object(S.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "col-md-4",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "border-start border-danger border-4 ps-3",
                                                                            children:
                                                                              [
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "h6",
                                                                                  {
                                                                                    className:
                                                                                      "text-danger mb-2",
                                                                                    children:
                                                                                      "\ud83d\udcf1 Social Media Analysis",
                                                                                  }
                                                                                ),
                                                                                e
                                                                                  .verdicts
                                                                                  .social_media &&
                                                                                  e
                                                                                    .verdicts
                                                                                    .social_media
                                                                                    .social_media_posts &&
                                                                                  Object(
                                                                                    S.jsxs
                                                                                  )(
                                                                                    S.Fragment,
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "strong",
                                                                                            {
                                                                                              className:
                                                                                                "small",
                                                                                              children:
                                                                                                "Posts Verdict:",
                                                                                            }
                                                                                          ),
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "small mb-2 text-muted",
                                                                                              children:
                                                                                                ae(
                                                                                                  e
                                                                                                    .verdicts
                                                                                                    .social_media
                                                                                                    .social_media_posts,
                                                                                                  "No verdict available"
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "strong",
                                                                                  {
                                                                                    className:
                                                                                      "small",
                                                                                    children:
                                                                                      "Overall:",
                                                                                  }
                                                                                ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "p",
                                                                                  {
                                                                                    className:
                                                                                      "small mb-0",
                                                                                    children:
                                                                                      ae(
                                                                                        e
                                                                                          .verdicts
                                                                                          .social_media,
                                                                                        "No social media analysis available"
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  Object(S.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "col-md-4",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "border-start border-info border-4 ps-3",
                                                                            children:
                                                                              [
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "h6",
                                                                                  {
                                                                                    className:
                                                                                      "text-info mb-2",
                                                                                    children:
                                                                                      "\ud83c\udf24\ufe0f Weather Analysis",
                                                                                  }
                                                                                ),
                                                                                e
                                                                                  .verdicts
                                                                                  .weather_alerts &&
                                                                                  e
                                                                                    .verdicts
                                                                                    .weather_alerts
                                                                                    .alerts &&
                                                                                  Object(
                                                                                    S.jsxs
                                                                                  )(
                                                                                    S.Fragment,
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "strong",
                                                                                            {
                                                                                              className:
                                                                                                "small",
                                                                                              children:
                                                                                                "Alerts Verdict:",
                                                                                            }
                                                                                          ),
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "small mb-2 text-muted",
                                                                                              children:
                                                                                                ae(
                                                                                                  e
                                                                                                    .verdicts
                                                                                                    .weather_alerts
                                                                                                    .alerts,
                                                                                                  "No verdict available"
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "strong",
                                                                                  {
                                                                                    className:
                                                                                      "small",
                                                                                    children:
                                                                                      "Overall:",
                                                                                  }
                                                                                ),
                                                                                Object(
                                                                                  S.jsx
                                                                                )(
                                                                                  "p",
                                                                                  {
                                                                                    className:
                                                                                      "small mb-0",
                                                                                    children:
                                                                                      ae(
                                                                                        e
                                                                                          .verdicts
                                                                                          .weather_alerts,
                                                                                        "No weather analysis available"
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                Object(S.jsx)("div", {
                                                  className: "col-12 mb-3",
                                                  children: Object(S.jsx)(p.a, {
                                                    children: Object(S.jsxs)(
                                                      p.a.Item,
                                                      {
                                                        eventKey: "0",
                                                        children: [
                                                          Object(S.jsx)(
                                                            p.a.Header,
                                                            {
                                                              children: Object(
                                                                S.jsx
                                                              )("strong", {
                                                                children:
                                                                  "\ud83d\udcca Detailed Source Analysis",
                                                              }),
                                                            }
                                                          ),
                                                          Object(S.jsx)(
                                                            p.a.Body,
                                                            {
                                                              children: Object(
                                                                S.jsxs
                                                              )("div", {
                                                                className:
                                                                  "row g-3",
                                                                children: [
                                                                  e.news &&
                                                                    Object(
                                                                      S.jsx
                                                                    )("div", {
                                                                      className:
                                                                        "col-md-4",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(v.a, {
                                                                          className:
                                                                            "h-100",
                                                                          children:
                                                                            [
                                                                              Object(
                                                                                S.jsx
                                                                              )(
                                                                                v
                                                                                  .a
                                                                                  .Header,
                                                                                {
                                                                                  className:
                                                                                    "bg-warning text-dark",
                                                                                  children:
                                                                                    Object(
                                                                                      S.jsx
                                                                                    )(
                                                                                      "h6",
                                                                                      {
                                                                                        className:
                                                                                          "mb-0",
                                                                                        children:
                                                                                          "\ud83d\udcf0 News Details",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                S.jsx
                                                                              )(
                                                                                v
                                                                                  .a
                                                                                  .Body,
                                                                                {
                                                                                  children:
                                                                                    e
                                                                                      .news
                                                                                      .articles &&
                                                                                    Object(
                                                                                      S.jsxs
                                                                                    )(
                                                                                      "div",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            Object(
                                                                                              S.jsx
                                                                                            )(
                                                                                              "strong",
                                                                                              {
                                                                                                children:
                                                                                                  "Articles Verdict:",
                                                                                              }
                                                                                            ),
                                                                                            Object(
                                                                                              S.jsx
                                                                                            )(
                                                                                              "p",
                                                                                              {
                                                                                                className:
                                                                                                  "small mb-0 text-muted",
                                                                                                children:
                                                                                                  ae(
                                                                                                    e
                                                                                                      .news
                                                                                                      .articles,
                                                                                                    "No verdict available"
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                  e.social_media &&
                                                                    Object(
                                                                      S.jsx
                                                                    )("div", {
                                                                      className:
                                                                        "col-md-4",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(v.a, {
                                                                          className:
                                                                            "h-100",
                                                                          children:
                                                                            [
                                                                              Object(
                                                                                S.jsx
                                                                              )(
                                                                                v
                                                                                  .a
                                                                                  .Header,
                                                                                {
                                                                                  className:
                                                                                    "bg-danger text-white",
                                                                                  children:
                                                                                    Object(
                                                                                      S.jsx
                                                                                    )(
                                                                                      "h6",
                                                                                      {
                                                                                        className:
                                                                                          "mb-0",
                                                                                        children:
                                                                                          "\ud83d\udcf1 Social Media Details",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                S.jsx
                                                                              )(
                                                                                v
                                                                                  .a
                                                                                  .Body,
                                                                                {
                                                                                  children:
                                                                                    e
                                                                                      .social_media
                                                                                      .social_media_posts &&
                                                                                    Object(
                                                                                      S.jsxs
                                                                                    )(
                                                                                      "div",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            Object(
                                                                                              S.jsx
                                                                                            )(
                                                                                              "strong",
                                                                                              {
                                                                                                children:
                                                                                                  "Posts Verdict:",
                                                                                              }
                                                                                            ),
                                                                                            Object(
                                                                                              S.jsx
                                                                                            )(
                                                                                              "p",
                                                                                              {
                                                                                                className:
                                                                                                  "small mb-0 text-muted",
                                                                                                children:
                                                                                                  ae(
                                                                                                    e
                                                                                                      .social_media
                                                                                                      .social_media_posts,
                                                                                                    "No verdict available"
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                  e.weather_alerts &&
                                                                    Object(
                                                                      S.jsx
                                                                    )("div", {
                                                                      className:
                                                                        "col-md-4",
                                                                      children:
                                                                        Object(
                                                                          S.jsxs
                                                                        )(v.a, {
                                                                          className:
                                                                            "h-100",
                                                                          children:
                                                                            [
                                                                              Object(
                                                                                S.jsx
                                                                              )(
                                                                                v
                                                                                  .a
                                                                                  .Header,
                                                                                {
                                                                                  className:
                                                                                    "bg-info text-white",
                                                                                  children:
                                                                                    Object(
                                                                                      S.jsx
                                                                                    )(
                                                                                      "h6",
                                                                                      {
                                                                                        className:
                                                                                          "mb-0",
                                                                                        children:
                                                                                          "\ud83c\udf24\ufe0f Weather Details",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                S.jsx
                                                                              )(
                                                                                v
                                                                                  .a
                                                                                  .Body,
                                                                                {
                                                                                  children:
                                                                                    e
                                                                                      .weather_alerts
                                                                                      .alerts &&
                                                                                    Object(
                                                                                      S.jsxs
                                                                                    )(
                                                                                      "div",
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            Object(
                                                                                              S.jsx
                                                                                            )(
                                                                                              "strong",
                                                                                              {
                                                                                                children:
                                                                                                  "Alerts Verdict:",
                                                                                              }
                                                                                            ),
                                                                                            Object(
                                                                                              S.jsx
                                                                                            )(
                                                                                              "p",
                                                                                              {
                                                                                                className:
                                                                                                  "small mb-0 text-muted",
                                                                                                children:
                                                                                                  ae(
                                                                                                    e
                                                                                                      .weather_alerts
                                                                                                      .alerts,
                                                                                                    "No verdict available"
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            Object.keys(e).filter(function (e) {
                                              return ![
                                                "id",
                                                "cell_id",
                                                "category",
                                                "coordinates",
                                                "crowd_confidence",
                                                "location",
                                                "processed_at",
                                                "timestamp",
                                                "sources",
                                                "verdicts",
                                                "news",
                                                "social_media",
                                                "weather_alerts",
                                              ].includes(e);
                                            }).length > 0 &&
                                              Object(S.jsxs)(v.a, {
                                                className: "mt-3",
                                                children: [
                                                  Object(S.jsx)(v.a.Header, {
                                                    className:
                                                      "bg-light text-dark",
                                                    children: Object(S.jsx)(
                                                      "h6",
                                                      {
                                                        className: "mb-0",
                                                        children:
                                                          "Additional Information",
                                                      }
                                                    ),
                                                  }),
                                                  Object(S.jsx)(v.a.Body, {
                                                    children: Object(S.jsx)(
                                                      "div",
                                                      {
                                                        className: "row g-2",
                                                        children:
                                                          Object.entries(e)
                                                            .filter(function (
                                                              e
                                                            ) {
                                                              var t = Object(
                                                                x.a
                                                              )(e, 1)[0];
                                                              return ![
                                                                "id",
                                                                "cell_id",
                                                                "category",
                                                                "coordinates",
                                                                "crowd_confidence",
                                                                "location",
                                                                "processed_at",
                                                                "timestamp",
                                                                "sources",
                                                                "verdicts",
                                                                "news",
                                                                "social_media",
                                                                "weather_alerts",
                                                              ].includes(t);
                                                            })
                                                            .map(function (e) {
                                                              var t = Object(
                                                                  x.a
                                                                )(e, 2),
                                                                s = t[0],
                                                                c = t[1];
                                                              return Object(
                                                                S.jsxs
                                                              )(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "col-md-6",
                                                                  children: [
                                                                    Object(
                                                                      S.jsxs
                                                                    )(
                                                                      "strong",
                                                                      {
                                                                        children:
                                                                          [
                                                                            ee(
                                                                              s
                                                                            ),
                                                                            ":",
                                                                          ],
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    te(c),
                                                                  ],
                                                                },
                                                                s
                                                              );
                                                            }),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id
                                  );
                                }),
                              }),
                          ],
                        }),
                        Object(S.jsxs)("div", {
                          className: "mb-4 w-100",
                          children: [
                            Object(S.jsx)("h3", {
                              className: "mb-4 text-dark",
                              children: "React Verdicts",
                            }),
                            $ &&
                              Object(S.jsxs)("div", {
                                className: "text-center py-4",
                                children: [
                                  Object(S.jsx)(g.a, {
                                    animation: "border",
                                    role: "status",
                                    children: Object(S.jsx)("span", {
                                      className: "visually-hidden",
                                      children: "Loading...",
                                    }),
                                  }),
                                  Object(S.jsx)("p", {
                                    className: "mt-2 text-muted",
                                    children: "Loading react verdicts...",
                                  }),
                                ],
                              }),
                            q &&
                              Object(S.jsx)("div", {
                                className: "alert alert-danger",
                                role: "alert",
                                children: q,
                              }),
                            !$ &&
                              !q &&
                              0 === E.length &&
                              Object(S.jsx)("div", {
                                className: "alert alert-info",
                                role: "alert",
                                children:
                                  "No react verdicts found in the database.",
                              }),
                            !$ &&
                              !q &&
                              E.length > 0 &&
                              Object(S.jsx)(p.a, {
                                className: "w-100",
                                children: E.map(function (e, t) {
                                  return Object(S.jsxs)(
                                    p.a.Item,
                                    {
                                      eventKey: "react-".concat(t.toString()),
                                      className: "mb-3",
                                      children: [
                                        Object(S.jsx)(p.a.Header, {
                                          className: "w-100",
                                          children: Object(S.jsxs)("div", {
                                            className:
                                              "d-flex align-items-center justify-content-between w-100 pe-4",
                                            children: [
                                              Object(S.jsxs)("div", {
                                                className:
                                                  "d-flex align-items-center flex-grow-1",
                                                children: [
                                                  Object(S.jsxs)("strong", {
                                                    className: "me-3 fs-5",
                                                    children: [
                                                      "Cell ID: ",
                                                      e.cell_id || "Unknown",
                                                    ],
                                                  }),
                                                  void 0 !== e.confidence &&
                                                    Object(S.jsxs)(f.a, {
                                                      bg: se(e.confidence),
                                                      className:
                                                        "me-3 px-3 py-2",
                                                      style: {
                                                        fontSize: "0.85rem",
                                                      },
                                                      children: [
                                                        "Confidence:",
                                                        " ",
                                                        (
                                                          100 * e.confidence
                                                        ).toFixed(1),
                                                        "%",
                                                      ],
                                                    }),
                                                  Object(S.jsx)(f.a, {
                                                    bg: "secondary",
                                                    className: "me-2",
                                                    children:
                                                      e.category ||
                                                      "Unknown Category",
                                                  }),
                                                  Object(S.jsx)(f.a, {
                                                    bg: ce(e.status),
                                                    className: "me-2",
                                                    children:
                                                      e.status ||
                                                      "Unknown Status",
                                                  }),
                                                ],
                                              }),
                                              Object(S.jsx)("div", {
                                                className:
                                                  "text-muted text-truncate flex-shrink-1",
                                                style: {
                                                  maxWidth: "300px",
                                                  fontSize: "0.9rem",
                                                },
                                                children:
                                                  e.final_verdict ||
                                                  "No verdict",
                                              }),
                                            ],
                                          }),
                                        }),
                                        Object(S.jsx)(p.a.Body, {
                                          children: Object(S.jsxs)("div", {
                                            className: "row",
                                            children: [
                                              Object(S.jsx)("div", {
                                                className: "col-md-4 mb-3",
                                                children: Object(S.jsxs)(v.a, {
                                                  className: "h-100",
                                                  children: [
                                                    Object(S.jsx)(v.a.Header, {
                                                      className:
                                                        "bg-primary text-white",
                                                      children: Object(S.jsx)(
                                                        "h6",
                                                        {
                                                          className: "mb-0",
                                                          children:
                                                            "Basic Information",
                                                        }
                                                      ),
                                                    }),
                                                    Object(S.jsx)(v.a.Body, {
                                                      children: Object(S.jsxs)(
                                                        "div",
                                                        {
                                                          className: "row g-2",
                                                          children: [
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "Cell ID:",
                                                                    }
                                                                  ),
                                                                  " ",
                                                                  e.cell_id ||
                                                                    "N/A",
                                                                ],
                                                              }
                                                            ),
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "Category:",
                                                                    }
                                                                  ),
                                                                  " ",
                                                                  Object(S.jsx)(
                                                                    f.a,
                                                                    {
                                                                      bg: "info",
                                                                      className:
                                                                        "ms-1",
                                                                      children:
                                                                        e.category ||
                                                                        "N/A",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "Status:",
                                                                    }
                                                                  ),
                                                                  " ",
                                                                  Object(S.jsx)(
                                                                    f.a,
                                                                    {
                                                                      bg: ce(
                                                                        e.status
                                                                      ),
                                                                      className:
                                                                        "ms-1",
                                                                      children:
                                                                        e.status ||
                                                                        "N/A",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "Confidence:",
                                                                    }
                                                                  ),
                                                                  Object(S.jsx)(
                                                                    f.a,
                                                                    {
                                                                      bg: se(
                                                                        e.confidence
                                                                      ),
                                                                      className:
                                                                        "ms-2",
                                                                      children:
                                                                        void 0 !==
                                                                        e.confidence
                                                                          ? (
                                                                              100 *
                                                                              e.confidence
                                                                            ).toFixed(
                                                                              1
                                                                            ) +
                                                                            "%"
                                                                          : "N/A",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "Processing Time:",
                                                                    }
                                                                  ),
                                                                  " ",
                                                                  Object(S.jsx)(
                                                                    "small",
                                                                    {
                                                                      className:
                                                                        "text-muted",
                                                                      children:
                                                                        e.processing_time_sec
                                                                          ? "".concat(
                                                                              e.processing_time_sec.toFixed(
                                                                                2
                                                                              ),
                                                                              "s"
                                                                            )
                                                                          : "N/A",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "Start Time:",
                                                                    }
                                                                  ),
                                                                  " ",
                                                                  Object(S.jsx)(
                                                                    "small",
                                                                    {
                                                                      className:
                                                                        "text-muted",
                                                                      children:
                                                                        te(
                                                                          e.start_time
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            Object(S.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "col-12",
                                                                children: [
                                                                  Object(S.jsx)(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        "End Time:",
                                                                    }
                                                                  ),
                                                                  " ",
                                                                  Object(S.jsx)(
                                                                    "small",
                                                                    {
                                                                      className:
                                                                        "text-muted",
                                                                      children:
                                                                        te(
                                                                          e.end_time
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Object(S.jsx)("div", {
                                                className: "col-md-8 mb-3",
                                                children: Object(S.jsxs)(v.a, {
                                                  className: "h-100",
                                                  children: [
                                                    Object(S.jsx)(v.a.Header, {
                                                      className:
                                                        "bg-success text-white",
                                                      children: Object(S.jsx)(
                                                        "h6",
                                                        {
                                                          className: "mb-0",
                                                          children:
                                                            "Final Verdict",
                                                        }
                                                      ),
                                                    }),
                                                    Object(S.jsx)(v.a.Body, {
                                                      children: Object(S.jsx)(
                                                        "p",
                                                        {
                                                          className:
                                                            "mb-0 small",
                                                          children:
                                                            e.final_verdict ||
                                                            "No final verdict available",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              e.analysis &&
                                                Object(S.jsx)("div", {
                                                  className: "col-12 mb-3",
                                                  children: Object(S.jsxs)(
                                                    v.a,
                                                    {
                                                      children: [
                                                        Object(S.jsx)(
                                                          v.a.Header,
                                                          {
                                                            className:
                                                              "bg-dark text-white",
                                                            children: Object(
                                                              S.jsx
                                                            )("h6", {
                                                              className: "mb-0",
                                                              children:
                                                                "\ud83d\udd0d Detailed Analysis",
                                                            }),
                                                          }
                                                        ),
                                                        Object(S.jsx)(
                                                          v.a.Body,
                                                          {
                                                            children: Object(
                                                              S.jsx
                                                            )("div", {
                                                              className:
                                                                "analysis-content small",
                                                              dangerouslySetInnerHTML:
                                                                {
                                                                  __html: ne(
                                                                    e.analysis
                                                                  ),
                                                                },
                                                              style: {
                                                                lineHeight:
                                                                  "1.5",
                                                                fontSize:
                                                                  "0.9rem",
                                                              },
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              e.thought_process &&
                                                e.thought_process.length > 0 &&
                                                Object(S.jsx)("div", {
                                                  className: "col-12 mb-3",
                                                  children: Object(S.jsxs)(
                                                    v.a,
                                                    {
                                                      children: [
                                                        Object(S.jsx)(
                                                          v.a.Header,
                                                          {
                                                            className:
                                                              "bg-info text-white",
                                                            children: Object(
                                                              S.jsx
                                                            )("h6", {
                                                              className: "mb-0",
                                                              children:
                                                                "\ud83e\udde0 Thought Process",
                                                            }),
                                                          }
                                                        ),
                                                        Object(S.jsx)(
                                                          v.a.Body,
                                                          {
                                                            children: Object(
                                                              S.jsx
                                                            )("div", {
                                                              className:
                                                                "timeline",
                                                              children:
                                                                e.thought_process.map(
                                                                  function (
                                                                    e,
                                                                    t
                                                                  ) {
                                                                    return Object(
                                                                      S.jsx
                                                                    )(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "mb-3 pb-3 border-bottom border-light",
                                                                        children:
                                                                          Object(
                                                                            S.jsxs
                                                                          )(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "d-flex justify-content-between align-items-start",
                                                                              children:
                                                                                [
                                                                                  Object(
                                                                                    S.jsxs
                                                                                  )(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "flex-grow-1",
                                                                                      children:
                                                                                        [
                                                                                          Object(
                                                                                            S.jsxs
                                                                                          )(
                                                                                            f.a,
                                                                                            {
                                                                                              bg: "secondary",
                                                                                              className:
                                                                                                "mb-2",
                                                                                              children:
                                                                                                [
                                                                                                  "Step ",
                                                                                                  t +
                                                                                                    1,
                                                                                                ],
                                                                                            }
                                                                                          ),
                                                                                          Object(
                                                                                            S.jsx
                                                                                          )(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "mb-1 small",
                                                                                              children:
                                                                                                e.thought,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  Object(
                                                                                    S.jsx
                                                                                  )(
                                                                                    "small",
                                                                                    {
                                                                                      className:
                                                                                        "text-muted ms-3",
                                                                                      children:
                                                                                        te(
                                                                                          e.timestamp
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                      },
                                                                      t
                                                                    );
                                                                  }
                                                                ),
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              e.actions &&
                                                e.actions.length > 0 &&
                                                Object(S.jsx)("div", {
                                                  className: "col-12 mb-3",
                                                  children: Object(S.jsxs)(
                                                    v.a,
                                                    {
                                                      children: [
                                                        Object(S.jsx)(
                                                          v.a.Header,
                                                          {
                                                            className:
                                                              "bg-warning text-dark",
                                                            children: Object(
                                                              S.jsx
                                                            )("h6", {
                                                              className: "mb-0",
                                                              children:
                                                                "\u26a1 Actions Taken",
                                                            }),
                                                          }
                                                        ),
                                                        Object(S.jsx)(
                                                          v.a.Body,
                                                          {
                                                            children: Object(
                                                              S.jsx
                                                            )("div", {
                                                              className:
                                                                "row g-3",
                                                              children:
                                                                e.actions.map(
                                                                  function (
                                                                    e,
                                                                    t
                                                                  ) {
                                                                    return Object(
                                                                      S.jsx
                                                                    )(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "col-md-6",
                                                                        children:
                                                                          Object(
                                                                            S.jsx
                                                                          )(
                                                                            v.a,
                                                                            {
                                                                              className:
                                                                                "h-100 border-start border-warning border-4",
                                                                              children:
                                                                                Object(
                                                                                  S.jsxs
                                                                                )(
                                                                                  v
                                                                                    .a
                                                                                    .Body,
                                                                                  {
                                                                                    className:
                                                                                      "p-3",
                                                                                    children:
                                                                                      [
                                                                                        Object(
                                                                                          S.jsxs
                                                                                        )(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "d-flex justify-content-between align-items-start mb-2",
                                                                                            children:
                                                                                              [
                                                                                                Object(
                                                                                                  S.jsxs
                                                                                                )(
                                                                                                  f.a,
                                                                                                  {
                                                                                                    bg: "warning",
                                                                                                    text: "dark",
                                                                                                    className:
                                                                                                      "mb-2",
                                                                                                    children:
                                                                                                      [
                                                                                                        "Action ",
                                                                                                        t +
                                                                                                          1,
                                                                                                      ],
                                                                                                  }
                                                                                                ),
                                                                                                Object(
                                                                                                  S.jsx
                                                                                                )(
                                                                                                  "small",
                                                                                                  {
                                                                                                    className:
                                                                                                      "text-muted",
                                                                                                    children:
                                                                                                      te(
                                                                                                        e.timestamp
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                        Object(
                                                                                          S.jsx
                                                                                        )(
                                                                                          "h6",
                                                                                          {
                                                                                            className:
                                                                                              "small mb-2",
                                                                                            children:
                                                                                              e.action,
                                                                                          }
                                                                                        ),
                                                                                        Object(
                                                                                          S.jsxs
                                                                                        )(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "mb-2",
                                                                                            children:
                                                                                              [
                                                                                                Object(
                                                                                                  S.jsx
                                                                                                )(
                                                                                                  "strong",
                                                                                                  {
                                                                                                    className:
                                                                                                      "small",
                                                                                                    children:
                                                                                                      "Action Needed:",
                                                                                                  }
                                                                                                ),
                                                                                                " ",
                                                                                                Object(
                                                                                                  S.jsx
                                                                                                )(
                                                                                                  f.a,
                                                                                                  {
                                                                                                    bg: e.action_needed
                                                                                                      ? "success"
                                                                                                      : "secondary",
                                                                                                    children:
                                                                                                      e.action_needed
                                                                                                        ? "Yes"
                                                                                                        : "No",
                                                                                                  }
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                        Object(
                                                                                          S.jsxs
                                                                                        )(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "mb-2",
                                                                                            children:
                                                                                              [
                                                                                                Object(
                                                                                                  S.jsx
                                                                                                )(
                                                                                                  "strong",
                                                                                                  {
                                                                                                    className:
                                                                                                      "small",
                                                                                                    children:
                                                                                                      "Executed:",
                                                                                                  }
                                                                                                ),
                                                                                                " ",
                                                                                                Object(
                                                                                                  S.jsx
                                                                                                )(
                                                                                                  f.a,
                                                                                                  {
                                                                                                    bg: e.executed
                                                                                                      ? "success"
                                                                                                      : "danger",
                                                                                                    children:
                                                                                                      e.executed
                                                                                                        ? "Yes"
                                                                                                        : "No",
                                                                                                  }
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                        e.result &&
                                                                                          Object(
                                                                                            S.jsxs
                                                                                          )(
                                                                                            "div",
                                                                                            {
                                                                                              children:
                                                                                                [
                                                                                                  Object(
                                                                                                    S.jsx
                                                                                                  )(
                                                                                                    "strong",
                                                                                                    {
                                                                                                      className:
                                                                                                        "small",
                                                                                                      children:
                                                                                                        "Result:",
                                                                                                    }
                                                                                                  ),
                                                                                                  Object(
                                                                                                    S.jsx
                                                                                                  )(
                                                                                                    "p",
                                                                                                    {
                                                                                                      className:
                                                                                                        "small mb-0 text-muted mt-1",
                                                                                                      children:
                                                                                                        e.result,
                                                                                                    }
                                                                                                  ),
                                                                                                ],
                                                                                            }
                                                                                          ),
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                      },
                                                                      t
                                                                    );
                                                                  }
                                                                ),
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              Object.keys(e).filter(function (
                                                e
                                              ) {
                                                return ![
                                                  "id",
                                                  "cell_id",
                                                  "category",
                                                  "confidence",
                                                  "final_verdict",
                                                  "status",
                                                  "analysis",
                                                  "thought_process",
                                                  "actions",
                                                  "processing_time_sec",
                                                  "start_time",
                                                  "end_time",
                                                  "reflex_verdict_id",
                                                ].includes(e);
                                              }).length > 0 &&
                                                Object(S.jsxs)(v.a, {
                                                  className: "mt-3",
                                                  children: [
                                                    Object(S.jsx)(v.a.Header, {
                                                      className:
                                                        "bg-light text-dark",
                                                      children: Object(S.jsx)(
                                                        "h6",
                                                        {
                                                          className: "mb-0",
                                                          children:
                                                            "Additional Information",
                                                        }
                                                      ),
                                                    }),
                                                    Object(S.jsx)(v.a.Body, {
                                                      children: Object(S.jsx)(
                                                        "div",
                                                        {
                                                          className: "row g-2",
                                                          children:
                                                            Object.entries(e)
                                                              .filter(function (
                                                                e
                                                              ) {
                                                                var t = Object(
                                                                  x.a
                                                                )(e, 1)[0];
                                                                return ![
                                                                  "id",
                                                                  "cell_id",
                                                                  "category",
                                                                  "confidence",
                                                                  "final_verdict",
                                                                  "status",
                                                                  "analysis",
                                                                  "thought_process",
                                                                  "actions",
                                                                  "processing_time_sec",
                                                                  "start_time",
                                                                  "end_time",
                                                                  "reflex_verdict_id",
                                                                ].includes(t);
                                                              })
                                                              .map(function (
                                                                e
                                                              ) {
                                                                var t = Object(
                                                                    x.a
                                                                  )(e, 2),
                                                                  s = t[0],
                                                                  c = t[1];
                                                                return Object(
                                                                  S.jsxs
                                                                )(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "col-md-6",
                                                                    children: [
                                                                      Object(
                                                                        S.jsxs
                                                                      )(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            [
                                                                              ee(
                                                                                s
                                                                              ),
                                                                              ":",
                                                                            ],
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      te(c),
                                                                    ],
                                                                  },
                                                                  s
                                                                );
                                                              }),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    e.id
                                  );
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(S.jsx)("div", {
                className: "bg-dark text-white py-2 px-3",
                style: {
                  width: "100vw",
                  marginLeft: "-50vw",
                  left: "50%",
                  position: "relative",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                },
                children: Object(S.jsxs)(N.a, {
                  onSubmit: function (e) {
                    e.preventDefault(), _(i), o("");
                  },
                  className: "d-flex gap-2",
                  children: [
                    Object(S.jsx)(N.a.Control, {
                      as: "textarea",
                      rows: 1,
                      placeholder: "Write your message here...",
                      value: i,
                      onChange: function (e) {
                        return o(e.target.value);
                      },
                      className: "flex-grow-1 border-0 shadow-sm",
                      style: {
                        borderRadius: "20px",
                        minHeight: "40px",
                        resize: "none",
                        padding: "8px 16px",
                      },
                    }),
                    Object(S.jsx)(O.a, {
                      variant: "light",
                      type: "submit",
                      className: "rounded-pill px-3",
                      style: { height: "40px", whiteSpace: "nowrap" },
                      children: "Post",
                    }),
                  ],
                }),
              }),
              Object(S.jsx)("footer", {
                className: "bg-dark text-white py-2",
                style: {
                  width: "100vw",
                  marginLeft: "-50vw",
                  left: "50%",
                  position: "relative",
                },
                children: Object(S.jsx)("div", {
                  className: "container-fluid px-4 text-center",
                  children: Object(S.jsxs)("div", {
                    className: "text-white small",
                    style: { fontSize: "0.7rem" },
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " CityPulse Admin. All rights reserved.",
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        P = s(97),
        B = s(67),
        E = s.n(B),
        D = function () {
          var e = Object(c.useState)(""),
            t = Object(x.a)(e, 2),
            s = t[0],
            a = t[1],
            n = Object(c.useState)(""),
            r = Object(x.a)(n, 2),
            i = r[0],
            o = r[1],
            d = Object(c.useState)(""),
            m = Object(x.a)(d, 2),
            u = m[0],
            g = m[1],
            p = I(),
            f = p.logIn,
            v = p.googleSignIn,
            y = Object(j.o)(),
            w = (function () {
              var e = Object(h.a)(
                Object(b.a)().mark(function e(t) {
                  return Object(b.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              g(""),
                              (e.prev = 2),
                              (e.next = 5),
                              f(s, i)
                            );
                          case 5:
                            y("/home"), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(2)), g(e.t0.message);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            _ = (function () {
              var e = Object(h.a)(
                Object(b.a)().mark(function e(t) {
                  return Object(b.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              (e.next = 4),
                              v()
                            );
                          case 4:
                            y("/home"), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0.message);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(S.jsx)("div", {
            className:
              "min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light",
            children: Object(S.jsx)("div", {
              className: "w-100",
              style: { maxWidth: "400px" },
              children: Object(S.jsxs)("div", {
                className: "p-5 bg-white rounded-3 shadow-sm",
                children: [
                  Object(S.jsxs)("div", {
                    className: "text-center mb-4",
                    children: [
                      Object(S.jsx)("h2", {
                        className: "fw-bold mb-1",
                        style: { color: "#212529" },
                        children: "CityPulse Admin",
                      }),
                      Object(S.jsx)("p", {
                        className: "text-muted",
                        children: "Sign in to your admin dashboard",
                      }),
                    ],
                  }),
                  u &&
                    Object(S.jsx)(P.a, {
                      variant: "danger",
                      className: "rounded-2",
                      children: u,
                    }),
                  Object(S.jsxs)(N.a, {
                    onSubmit: w,
                    children: [
                      Object(S.jsx)(N.a.Group, {
                        className: "mb-3",
                        controlId: "formBasicEmail",
                        children: Object(S.jsx)(N.a.Control, {
                          type: "email",
                          placeholder: "Email address",
                          onChange: function (e) {
                            return a(e.target.value);
                          },
                          className: "py-2 border-2",
                          style: {
                            borderColor: "#dee2e6",
                            borderRadius: "8px",
                          },
                        }),
                      }),
                      Object(S.jsx)(N.a.Group, {
                        className: "mb-4",
                        controlId: "formBasicPassword",
                        children: Object(S.jsx)(N.a.Control, {
                          type: "password",
                          placeholder: "Password",
                          onChange: function (e) {
                            return o(e.target.value);
                          },
                          className: "py-2 border-2",
                          style: {
                            borderColor: "#dee2e6",
                            borderRadius: "8px",
                          },
                        }),
                      }),
                      Object(S.jsx)(O.a, {
                        variant: "dark",
                        type: "submit",
                        className: "w-100 py-2 mb-3 rounded-3 fw-bold",
                        style: { backgroundColor: "#212529", border: "none" },
                        children: "Log In",
                      }),
                    ],
                  }),
                  Object(S.jsxs)("div", {
                    className: "d-flex align-items-center mb-3",
                    children: [
                      Object(S.jsx)("div", {
                        className: "flex-grow-1 border-top",
                        style: { borderColor: "#dee2e6" },
                      }),
                      Object(S.jsx)("div", {
                        className: "px-3 text-muted",
                        children: "or",
                      }),
                      Object(S.jsx)("div", {
                        className: "flex-grow-1 border-top",
                        style: { borderColor: "#dee2e6" },
                      }),
                    ],
                  }),
                  Object(S.jsx)("div", {
                    className: "d-flex justify-content-center mb-4",
                    children: Object(S.jsx)(E.a, {
                      onClick: _,
                      style: {
                        borderRadius: "8px",
                        boxShadow: "none",
                        border: "1px solid #dee2e6",
                      },
                    }),
                  }),
                  Object(S.jsxs)("div", {
                    className: "text-center text-muted",
                    children: [
                      "Don't have an account?",
                      " ",
                      Object(S.jsx)(l.b, {
                        to: "/signup",
                        className: "text-decoration-none fw-bold",
                        style: { color: "#212529" },
                        children: "Sign up",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        M = s(7),
        H = s(41),
        z = (function () {
          var e = Object(h.a)(
            Object(b.a)().mark(function e() {
              var t, s, c;
              return Object(b.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (t = Object(u.a)(C, "CellData")),
                          (e.next = 4),
                          Object(u.b)(t)
                        );
                      case 4:
                        return (
                          (s = e.sent),
                          (c = s.docs.map(function (e) {
                            return Object(m.a)({ id: e.id }, e.data());
                          })),
                          console.log("Fetched cell data:", c),
                          e.abrupt("return", c)
                        );
                      case 10:
                        throw (
                          ((e.prev = 10),
                          (e.t0 = e.catch(0)),
                          console.error("Error fetching cell data:", e.t0),
                          e.t0)
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        R = (function () {
          var e = Object(h.a)(
            Object(b.a)().mark(function e(t, s) {
              var c;
              return Object(b.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (c = new window.google.maps.Geocoder()),
                          e.abrupt(
                            "return",
                            new Promise(function (e, a) {
                              c.geocode(
                                { location: { lat: t, lng: s } },
                                function (t, s) {
                                  if ("OK" === s)
                                    if (t[0]) {
                                      var c = t[0].formatted_address,
                                        a = t[0].address_components.find(
                                          function (e) {
                                            return (
                                              e.types.includes("locality") ||
                                              e.types.includes("sublocality")
                                            );
                                          }
                                        );
                                      e(a ? a.long_name : c);
                                    } else e("Unknown Location");
                                  else
                                    console.error(
                                      "Geocoder failed due to: " + s
                                    ),
                                      e("Unknown Location");
                                }
                              );
                            })
                          )
                        );
                      case 5:
                        return (
                          (e.prev = 5),
                          (e.t0 = e.catch(0)),
                          console.error("Error in reverse geocoding:", e.t0),
                          e.abrupt("return", "Unknown Location")
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 5]]
              );
            })
          );
          return function (t, s) {
            return e.apply(this, arguments);
          };
        })(),
        G =
          (s(89),
          function (e) {
            var t = e.center,
              s = e.zoom,
              n = e.style,
              r = Object(c.useRef)(null),
              l = Object(c.useState)(null),
              i = Object(x.a)(l, 2),
              o = i[0],
              d = i[1],
              j = Object(c.useState)([]),
              m = Object(x.a)(j, 2),
              u = (m[0], m[1]),
              O = Object(c.useState)(null),
              g = Object(x.a)(O, 2),
              p = g[0],
              f = g[1],
              v = Object(c.useState)([]),
              N = Object(x.a)(v, 2),
              y = N[0],
              w = N[1],
              _ = Object(c.useState)(null),
              k = Object(x.a)(_, 2),
              C = k[0],
              A = k[1],
              F = Object(c.useState)({
                total: 0,
                withIncidents: 0,
                withPredictions: 0,
              }),
              I = Object(x.a)(F, 2),
              L = (I[0], I[1]);
            Object(c.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(h.a)(
                    Object(b.a)().mark(function e() {
                      var t, s, c, a;
                      return Object(b.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), z();
                              case 3:
                                (t = e.sent),
                                  console.log("Loaded cell data:", t),
                                  console.log(
                                    "Total cells loaded:",
                                    (null === t || void 0 === t
                                      ? void 0
                                      : t.length) || 0
                                  ),
                                  t && t.length > 0
                                    ? (console.log(
                                        "Sample cell data structures:"
                                      ),
                                      t.slice(0, 3).forEach(function (e, t) {
                                        console.log(
                                          "Cell ".concat(t + 1, ":"),
                                          {
                                            id: e.id,
                                            coordinates: {
                                              min_lat: e.min_lat,
                                              max_lat: e.max_lat,
                                              min_lon: e.min_lon,
                                              max_lon: e.max_lon,
                                              min_lng: e.min_lng,
                                              max_lng: e.max_lng,
                                            },
                                            incidents: e.incidents,
                                            predicted: e.predicted,
                                            hasValidCoords: !(
                                              !e.min_lat ||
                                              !e.max_lat ||
                                              (!e.min_lon && !e.min_lng) ||
                                              (!e.max_lon && !e.max_lng)
                                            ),
                                          }
                                        );
                                      }),
                                      w(t),
                                      (s = t.length),
                                      (c = t.filter(function (e) {
                                        return (
                                          Array.isArray(e.incidents) &&
                                          e.incidents.length > 0
                                        );
                                      }).length),
                                      (a = t.filter(function (e) {
                                        return (
                                          Array.isArray(e.predicted) &&
                                          e.predicted.length > 0
                                        );
                                      }).length),
                                      console.log(
                                        "Grid Statistics: "
                                          .concat(s, " total cells, ")
                                          .concat(c, " with incidents, ")
                                          .concat(a, " with predictions")
                                      ),
                                      L({
                                        total: s,
                                        withIncidents: c,
                                        withPredictions: a,
                                      }))
                                    : (console.log(
                                        "No cell data found in Firestore, creating test grid"
                                      ),
                                      P()),
                                  (e.next = 14);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "Failed to load cell data:",
                                    e.t0
                                  ),
                                  console.log(
                                    "Creating test grid due to error"
                                  ),
                                  P();
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                o && e();
              },
              [o]
            );
            var P = function () {
              var e,
                t,
                s,
                c,
                a = [],
                n = o ? o.getBounds() : null;
              n
                ? ((e = n.getSouthWest().lat()),
                  (t = n.getNorthEast().lat()),
                  (s = n.getSouthWest().lng()),
                  (c = n.getNorthEast().lng()))
                : ((e = 12.8), (t = 13.1), (s = 77.4), (c = 77.8));
              var r = (t - e) / 20,
                l = (c - s) / 20;
              console.log(
                "Creating grid covering area: "
                  .concat(e.toFixed(4), ", ")
                  .concat(s.toFixed(4), " to ")
                  .concat(t.toFixed(4), ", ")
                  .concat(c.toFixed(4))
              );
              for (var i = 0; i < 20; i++)
                for (var d = 0; d < 20; d++) {
                  var j = e + i * r,
                    m = j + r,
                    b = s + d * l,
                    h = b + l;
                  a.push({
                    id: "grid_cell_".concat(i, "_").concat(d),
                    min_lat: j,
                    max_lat: m,
                    min_lon: b,
                    max_lon: h,
                    incidents:
                      Math.random() > 0.8
                        ? [
                            "Incident ".concat(
                              Math.floor(3 * Math.random()) + 1
                            ),
                          ]
                        : [],
                    timestamp: new Date(),
                  });
                }
              console.log("Created full map grid with", a.length, "cells"),
                w(a),
                L({
                  total: a.length,
                  withIncidents: a.filter(function (e) {
                    return e.incidents.length > 0;
                  }).length,
                  withPredictions: 0,
                });
            };
            Object(c.useEffect)(
              function () {
                if (r.current && !o) {
                  var e = new window.google.maps.Map(r.current, {
                    center: t || { lat: 12.95, lng: 77.635 },
                    zoom: s || 12,
                    mapTypeControl: !0,
                    streetViewControl: !0,
                    fullscreenControl: !0,
                    mapTypeId: "roadmap",
                  });
                  d(e);
                  var c = new window.google.maps.InfoWindow();
                  f(c);
                  var a = new window.google.maps.Marker({
                    position: t || { lat: 12.95, lng: 77.635 },
                    map: e,
                    title: "Home/Center Point",
                    icon: {
                      url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                    },
                  });
                  A(a);
                }
              },
              [r, o, t, s]
            );
            var B = a.a.useCallback(
              Object(h.a)(
                Object(b.a)().mark(function e() {
                  var t, s, c, a, n, r, l, i, d, j, m, x;
                  return Object(b.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (o && 0 !== y.length) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (
                              (u(function (e) {
                                return (
                                  e.forEach(function (e) {
                                    return e.setMap(null);
                                  }),
                                  []
                                );
                              }),
                              (t = []),
                              console.log(
                                "Creating rectangles for ".concat(
                                  y.length,
                                  " cells"
                                )
                              ),
                              (s = y.filter(function (e) {
                                var t =
                                    "number" === typeof e.min_lat &&
                                    "number" === typeof e.max_lat &&
                                    !isNaN(e.min_lat) &&
                                    !isNaN(e.max_lat),
                                  s =
                                    ("number" === typeof e.min_lon &&
                                      "number" === typeof e.max_lon &&
                                      !isNaN(e.min_lon) &&
                                      !isNaN(e.max_lon)) ||
                                    ("number" === typeof e.min_lng &&
                                      "number" === typeof e.max_lng &&
                                      !isNaN(e.min_lng) &&
                                      !isNaN(e.max_lng));
                                return t && s;
                              })),
                              console.log(
                                "Found "
                                  .concat(
                                    s.length,
                                    " cells with valid coordinates out of "
                                  )
                                  .concat(y.length, " total")
                              ),
                              0 !== s.length)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              console.warn(
                                "No cells with valid coordinates found"
                              ),
                              e.abrupt("return")
                            );
                          case 10:
                            (c = 1 / 0),
                              (a = -1 / 0),
                              (n = 1 / 0),
                              (r = -1 / 0),
                              s.forEach(function (e) {
                                "number" !== typeof e.min_lat ||
                                  isNaN(e.min_lat) ||
                                  (c = Math.min(c, e.min_lat)),
                                  "number" !== typeof e.max_lat ||
                                    isNaN(e.max_lat) ||
                                    (a = Math.max(a, e.max_lat));
                                var t = e.min_lon || e.min_lng,
                                  s = e.max_lon || e.max_lng;
                                "number" !== typeof t ||
                                  isNaN(t) ||
                                  (n = Math.min(n, t)),
                                  "number" !== typeof s ||
                                    isNaN(s) ||
                                    (r = Math.max(r, s));
                              }),
                              (l = (c + a) / 2),
                              (i = (n + r) / 2),
                              console.log(
                                "Grid Center: "
                                  .concat(l.toFixed(6), ", ")
                                  .concat(i.toFixed(6))
                              ),
                              console.log(
                                "Grid Bounds: "
                                  .concat(c.toFixed(6), ", ")
                                  .concat(n.toFixed(6), " to ")
                                  .concat(a.toFixed(6), ", ")
                                  .concat(r.toFixed(6))
                              ),
                              console.log(
                                "Processing ".concat(s.length, " valid cells")
                              ),
                              (d = Object(M.a)(s)),
                              (e.prev = 19),
                              (m = Object(b.a)().mark(function e() {
                                var s, c, a, n, r, l, i, d, m, x, u, O, g;
                                return Object(b.a)().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((s = j.value),
                                          (c = s.min_lon || s.min_lng),
                                          (a = s.max_lon || s.max_lng),
                                          s.min_lat && s.max_lat && c && a)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          console.warn(
                                            "Skipping cell ".concat(
                                              s.id,
                                              " due to missing coordinates:"
                                            ),
                                            s
                                          ),
                                          e.abrupt("return", "continue")
                                        );
                                      case 6:
                                        (n =
                                          new window.google.maps.LatLngBounds(
                                            new window.google.maps.LatLng(
                                              s.min_lat,
                                              c
                                            ),
                                            new window.google.maps.LatLng(
                                              s.max_lat,
                                              a
                                            )
                                          )),
                                          (r = Array.isArray(s.incidents)
                                            ? s.incidents.length
                                            : 0),
                                          (l = Array.isArray(s.predicted)
                                            ? s.predicted.length
                                            : 0),
                                          (i = "#00FF00"),
                                          (d = "#00AA00"),
                                          r > 0
                                            ? ((i = "#FF0000"), (d = "#CC0000"))
                                            : l > 0 &&
                                              ((i = "#FFFF00"),
                                              (d = "#CCCC00")),
                                          (m = new window.google.maps.Rectangle(
                                            {
                                              bounds: n,
                                              fillColor: i,
                                              fillOpacity: 0.3,
                                              strokeColor: d,
                                              strokeOpacity: 0.8,
                                              strokeWeight: 1,
                                              map: o,
                                            }
                                          )),
                                          (x = (s.min_lat + s.max_lat) / 2),
                                          (u = (c + a) / 2),
                                          (O = null),
                                          (g = !1),
                                          m.addListener(
                                            "mouseover",
                                            (function () {
                                              var e = Object(h.a)(
                                                Object(b.a)().mark(function e(
                                                  t
                                                ) {
                                                  var n, l, i, d, j, h, f, v, N;
                                                  return Object(b.a)().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (g = !0),
                                                              O &&
                                                                (clearTimeout(
                                                                  O
                                                                ),
                                                                (O = null)),
                                                              m.setOptions({
                                                                fillOpacity: 0.6,
                                                                strokeWeight: 3,
                                                              }),
                                                              (n =
                                                                '\n          <div style="padding: 12px; min-width: 280px; font-family: Arial, sans-serif;">\n            <h6 style="margin: 0 0 10px 0; color: #333; font-weight: bold; border-bottom: 2px solid #007bff; padding-bottom: 5px;">\n              \ud83d\udccd '
                                                                  .concat(
                                                                    s.id ||
                                                                      "Unknown Cell",
                                                                    '\n            </h6>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83d\udccd Location:</strong> <span style="color: #999;">Loading...</span>\n            </div>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83c\udf0d Coordinates:</strong><br>\n              <small style="color: #666;">\n                Center: '
                                                                  )
                                                                  .concat(
                                                                    x.toFixed(
                                                                      6
                                                                    ),
                                                                    ", "
                                                                  )
                                                                  .concat(
                                                                    u.toFixed(
                                                                      6
                                                                    ),
                                                                    "\n              </small>\n            </div>\n          </div>\n        "
                                                                  )),
                                                              p &&
                                                                g &&
                                                                (p.setContent(
                                                                  n
                                                                ),
                                                                p.setPosition({
                                                                  lat: x,
                                                                  lng: u,
                                                                }),
                                                                p.open(o)),
                                                              (e.prev = 5),
                                                              (e.next = 8),
                                                              R(x, u)
                                                            );
                                                          case 8:
                                                            if (
                                                              ((l = e.sent), g)
                                                            ) {
                                                              e.next = 11;
                                                              break;
                                                            }
                                                            return e.abrupt(
                                                              "return"
                                                            );
                                                          case 11:
                                                            if (
                                                              ((i = "N/A"),
                                                              s.timestamp)
                                                            )
                                                              try {
                                                                (d = s.timestamp
                                                                  .toDate
                                                                  ? s.timestamp.toDate()
                                                                  : new Date(
                                                                      s.timestamp
                                                                    )),
                                                                  (i =
                                                                    d.toLocaleString());
                                                              } catch (t) {
                                                                console.warn(
                                                                  "Error formatting timestamp for cell",
                                                                  s.id,
                                                                  t
                                                                );
                                                              }
                                                            (j =
                                                              Array.isArray(
                                                                s.incidents
                                                              ) &&
                                                              s.incidents
                                                                .length > 0
                                                                ? s.incidents.join(
                                                                    ", "
                                                                  )
                                                                : "No incidents reported"),
                                                              (h =
                                                                Array.isArray(
                                                                  s.predicted
                                                                ) &&
                                                                s.predicted
                                                                  .length > 0
                                                                  ? s.predicted.join(
                                                                      ", "
                                                                    )
                                                                  : "No predictions"),
                                                              (f = function (
                                                                e,
                                                                t
                                                              ) {
                                                                return e > 0
                                                                  ? {
                                                                      text: "Active Incidents",
                                                                      color:
                                                                        "#dc3545",
                                                                      icon: "\ufffd",
                                                                    }
                                                                  : t > 0
                                                                  ? {
                                                                      text: "Predicted Risk",
                                                                      color:
                                                                        "#ffc107",
                                                                      icon: "\ufffd",
                                                                    }
                                                                  : {
                                                                      text: "Safe",
                                                                      color:
                                                                        "#28a745",
                                                                      icon: "\ufffd",
                                                                    };
                                                              }),
                                                              (v = f(
                                                                r,
                                                                Array.isArray(
                                                                  s.predicted
                                                                )
                                                                  ? s.predicted
                                                                      .length
                                                                  : 0
                                                              )),
                                                              (N =
                                                                '\n          <div style="padding: 12px; min-width: 280px; font-family: Arial, sans-serif;">\n            <h6 style="margin: 0 0 10px 0; color: #333; font-weight: bold; border-bottom: 2px solid #007bff; padding-bottom: 5px;">\n              \ud83d\udccd '
                                                                  .concat(
                                                                    s.id ||
                                                                      "Unknown Cell",
                                                                    '\n            </h6>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83d\udccd Location:</strong> '
                                                                  )
                                                                  .concat(
                                                                    l,
                                                                    '\n            </div>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83c\udf0d Coordinates:</strong><br>\n              <small style="color: #666;">\n                Center: '
                                                                  )
                                                                  .concat(
                                                                    x.toFixed(
                                                                      6
                                                                    ),
                                                                    ", "
                                                                  )
                                                                  .concat(
                                                                    u.toFixed(
                                                                      6
                                                                    ),
                                                                    "<br>\n                Bounds: "
                                                                  )
                                                                  .concat(
                                                                    s.min_lat.toFixed(
                                                                      4
                                                                    ),
                                                                    "-"
                                                                  )
                                                                  .concat(
                                                                    s.max_lat.toFixed(
                                                                      4
                                                                    ),
                                                                    ", "
                                                                  )
                                                                  .concat(
                                                                    c.toFixed(
                                                                      4
                                                                    ),
                                                                    "-"
                                                                  )
                                                                  .concat(
                                                                    a.toFixed(
                                                                      4
                                                                    ),
                                                                    '\n              </small>\n            </div>\n            <div style="margin-bottom: 8px;">\n              <strong>\u26a0\ufe0f Status:</strong>\n              <span style="color: '
                                                                  )
                                                                  .concat(
                                                                    v.color,
                                                                    '; font-weight: bold; margin-left: 5px;">\n                '
                                                                  )
                                                                  .concat(
                                                                    v.icon,
                                                                    " "
                                                                  )
                                                                  .concat(
                                                                    v.text,
                                                                    " ("
                                                                  )
                                                                  .concat(
                                                                    r,
                                                                    " incidents"
                                                                  )
                                                                  .concat(
                                                                    Array.isArray(
                                                                      s.predicted
                                                                    ) &&
                                                                      s
                                                                        .predicted
                                                                        .length >
                                                                        0
                                                                      ? ", ".concat(
                                                                          s
                                                                            .predicted
                                                                            .length,
                                                                          " predictions"
                                                                        )
                                                                      : "",
                                                                    ')\n              </span>\n            </div>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83d\udccb Current Incidents:</strong><br>\n              <small style="color: #666; font-style: '
                                                                  )
                                                                  .concat(
                                                                    0 === r
                                                                      ? "italic"
                                                                      : "normal",
                                                                    '; background-color: #f8f9fa; padding: 4px; border-radius: 4px; display: block;">\n                '
                                                                  )
                                                                  .concat(
                                                                    j,
                                                                    '\n              </small>\n            </div>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83d\udd2e Predicted Issues:</strong><br>\n              <small style="color: #666; font-style: '
                                                                  )
                                                                  .concat(
                                                                    Array.isArray(
                                                                      s.predicted
                                                                    ) &&
                                                                      s
                                                                        .predicted
                                                                        .length >
                                                                        0
                                                                      ? "normal"
                                                                      : "italic",
                                                                    '; background-color: #fff3cd; padding: 4px; border-radius: 4px; display: block;">\n                '
                                                                  )
                                                                  .concat(
                                                                    h,
                                                                    '\n              </small>\n            </div>\n            <div style="margin-bottom: 8px;">\n              <strong>\ud83d\udd52 Last Updated:</strong><br>\n              <small style="color: #666;">'
                                                                  )
                                                                  .concat(
                                                                    i,
                                                                    '</small>\n            </div>\n            <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #eee; text-align: center;">\n              <small style="color: #999;">Hover to view \u2022 Click for details</small>\n            </div>\n          </div>\n        '
                                                                  )),
                                                              p &&
                                                                (p.setContent(
                                                                  N
                                                                ),
                                                                p.setPosition({
                                                                  lat: x,
                                                                  lng: u,
                                                                }),
                                                                p.open(o)),
                                                              (e.next = 24);
                                                            break;
                                                          case 21:
                                                            (e.prev = 21),
                                                              (e.t0 =
                                                                e.catch(5)),
                                                              console.error(
                                                                "Error getting location name:",
                                                                e.t0
                                                              );
                                                          case 24:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e,
                                                    null,
                                                    [[5, 21]]
                                                  );
                                                })
                                              );
                                              return function (t) {
                                                return e.apply(this, arguments);
                                              };
                                            })()
                                          ),
                                          m.addListener(
                                            "mouseout",
                                            function () {
                                              (g = !1),
                                                m.setOptions({
                                                  fillOpacity: 0.3,
                                                  strokeWeight: 1,
                                                }),
                                                setTimeout(function () {
                                                  p && p.close();
                                                }, 200);
                                            }
                                          ),
                                          m.addListener("click", function () {
                                            o.fitBounds(n),
                                              o.setZoom(
                                                Math.min(o.getZoom() + 2, 18)
                                              );
                                          }),
                                          t.push(m);
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })),
                              d.s();
                          case 22:
                            if ((j = d.n()).done) {
                              e.next = 29;
                              break;
                            }
                            return e.delegateYield(m(), "t0", 24);
                          case 24:
                            if ("continue" !== e.t0) {
                              e.next = 27;
                              break;
                            }
                            return e.abrupt("continue", 27);
                          case 27:
                            e.next = 22;
                            break;
                          case 29:
                            e.next = 34;
                            break;
                          case 31:
                            (e.prev = 31), (e.t1 = e.catch(19)), d.e(e.t1);
                          case 34:
                            return (e.prev = 34), d.f(), e.finish(34);
                          case 37:
                            console.log(
                              "Created "
                                .concat(t.length, " rectangles out of ")
                                .concat(s.length, " valid cells")
                            ),
                              u(t),
                              !(s.length > 0) ||
                                isNaN(c) ||
                                isNaN(a) ||
                                isNaN(n) ||
                                isNaN(r) ||
                                ((x = new window.google.maps.LatLngBounds(
                                  new window.google.maps.LatLng(
                                    c - 0.005,
                                    n - 0.005
                                  ),
                                  new window.google.maps.LatLng(
                                    a + 0.005,
                                    r + 0.005
                                  )
                                )),
                                o.fitBounds(x),
                                !C ||
                                  isNaN(l) ||
                                  isNaN(i) ||
                                  (C.setPosition({ lat: l, lng: i }),
                                  C.setTitle(
                                    "Grid Center: "
                                      .concat(l.toFixed(4), ", ")
                                      .concat(i.toFixed(4), " | ")
                                      .concat(s.length, " cells")
                                  )));
                          case 40:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[19, 31, 34, 37]]
                  );
                })
              ),
              [y, o, C, p]
            );
            return (
              Object(c.useEffect)(
                function () {
                  o && y.length > 0 && window.google && B();
                },
                [o, y, B]
              ),
              Object(S.jsx)("div", { ref: r, style: n })
            );
          }),
        U = function (e) {
          var t = e.center,
            s = e.zoom,
            c = e.style;
          return Object(S.jsx)(H.Wrapper, {
            apiKey: "xxxxx",
            render: function (e) {
              switch (e) {
                case H.Status.LOADING:
                  return Object(S.jsx)("div", {
                    className:
                      "d-flex justify-content-center align-items-center",
                    style: c,
                    children: Object(S.jsx)("div", {
                      className: "spinner-border text-primary",
                      role: "status",
                      children: Object(S.jsx)("span", {
                        className: "visually-hidden",
                        children: "Loading...",
                      }),
                    }),
                  });
                case H.Status.FAILURE:
                  return Object(S.jsxs)("div", {
                    className: "alert alert-danger m-3",
                    role: "alert",
                    children: [
                      Object(S.jsx)("h4", {
                        className: "alert-heading",
                        children: "Error Loading Map",
                      }),
                      Object(S.jsx)("p", {
                        children:
                          "Failed to load Google Maps. Please check your API key and internet connection.",
                      }),
                      Object(S.jsx)("hr", {}),
                      Object(S.jsx)("p", {
                        className: "mb-0",
                        children:
                          "Make sure to replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key in MapComponent.js",
                      }),
                    ],
                  });
                case H.Status.SUCCESS:
                  return Object(S.jsx)(G, { center: t, zoom: s, style: c });
                default:
                  return null;
              }
            },
          });
        },
        $ = function () {
          var e = Object(c.useState)(!0),
            t = Object(x.a)(e, 2),
            s = t[0],
            a = t[1],
            n = Object(c.useState)(!1),
            r = Object(x.a)(n, 2),
            i = r[0],
            o = r[1],
            d = Object(c.useState)(!1),
            j = Object(x.a)(d, 2),
            m = j[0],
            b = j[1];
          return (
            Object(c.useEffect)(function () {
              var e = setTimeout(function () {
                a(!1), o(!0);
              }, 3e3);
              return function () {
                return clearTimeout(e);
              };
            }, []),
            Object(S.jsxs)("div", {
              style: {
                height: "100vh",
                width: "100vw",
                margin: 0,
                padding: 0,
                overflow: "hidden",
                position: "fixed",
                top: 0,
                left: 0,
              },
              children: [
                Object(S.jsx)("nav", {
                  className:
                    "navbar navbar-expand-lg navbar-dark bg-dark shadow-sm",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1e3,
                    margin: 0,
                  },
                  children: Object(S.jsxs)("div", {
                    className: "container-fluid px-4",
                    children: [
                      Object(S.jsx)("span", {
                        className: "navbar-brand fw-bold fs-4",
                        children: "CityPulse Maps",
                      }),
                      Object(S.jsx)("div", {
                        className: "d-flex",
                        children: Object(S.jsx)(l.b, {
                          to: "/home",
                          className: "nav-link text-white me-4",
                          children: Object(S.jsx)(O.a, {
                            variant: "outline-light",
                            className: "rounded-3 px-3",
                            children: "Home",
                          }),
                        }),
                      }),
                      Object(S.jsx)("div", {
                        className: "d-flex align-items-center ms-auto",
                      }),
                    ],
                  }),
                }),
                Object(S.jsxs)("main", {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    margin: 0,
                    padding: 0,
                  },
                  children: [
                    Object(S.jsx)(U, {
                      center: { lat: 12.95, lng: 77.635 },
                      zoom: 11,
                      style: {
                        width: "100vw",
                        height: "100vh",
                        margin: 0,
                        padding: 0,
                      },
                    }),
                    Object(S.jsx)("div", {
                      className: "position-absolute",
                      style: { top: "80px", left: "16px", zIndex: 1e3 },
                      children: Object(S.jsxs)("div", {
                        className: "card shadow-sm",
                        style: {
                          width: m ? "auto" : "300px",
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          transition: "all 0.3s ease-in-out",
                        },
                        children: [
                          Object(S.jsxs)("div", {
                            className:
                              "card-header bg-primary text-white d-flex justify-content-between align-items-center",
                            children: [
                              !m &&
                                Object(S.jsx)("h6", {
                                  className: "mb-0",
                                  children: "CityPulse Dashboard",
                                }),
                              Object(S.jsx)(O.a, {
                                variant: "link",
                                size: "sm",
                                className: "text-white p-0",
                                onClick: function () {
                                  return b(!m);
                                },
                                style: { textDecoration: "none" },
                                children: m ? "\ud83d\udcca" : "\u2796",
                              }),
                            ],
                          }),
                          !m &&
                            Object(S.jsxs)("div", {
                              className: "card-body p-3",
                              children: [
                                Object(S.jsx)("p", {
                                  className: "small mb-2 text-muted",
                                  children:
                                    "Interactive city analytics and real-time data visualization",
                                }),
                                s &&
                                  Object(S.jsxs)("div", {
                                    className: "mb-3",
                                    children: [
                                      Object(S.jsx)("div", {
                                        className:
                                          "spinner-border spinner-border-sm text-primary me-2",
                                        role: "status",
                                        children: Object(S.jsx)("span", {
                                          className: "visually-hidden",
                                          children: "Loading...",
                                        }),
                                      }),
                                      Object(S.jsx)("small", {
                                        className: "text-muted",
                                        children: "Loading cell data...",
                                      }),
                                    ],
                                  }),
                                !s &&
                                  i &&
                                  Object(S.jsx)("div", {
                                    className: "mb-3",
                                    children: Object(S.jsx)("div", {
                                      className:
                                        "alert alert-success py-2 mb-2",
                                      role: "alert",
                                      style: { fontSize: "0.8rem" },
                                      children:
                                        "\u2705 Grid loaded successfully!",
                                    }),
                                  }),
                                Object(S.jsxs)("div", {
                                  className: "mb-3",
                                  style: { fontSize: "0.8rem" },
                                  children: [
                                    Object(S.jsx)("div", {
                                      className: "fw-bold mb-2",
                                      children: "Grid Color Legend:",
                                    }),
                                    Object(S.jsxs)("div", {
                                      className: "d-flex flex-wrap gap-1",
                                      children: [
                                        Object(S.jsx)("span", {
                                          className: "badge",
                                          style: {
                                            backgroundColor: "#00FF00",
                                            color: "#000",
                                          },
                                          children: "Safe",
                                        }),
                                        Object(S.jsx)("span", {
                                          className: "badge",
                                          style: {
                                            backgroundColor: "#FFFF00",
                                            color: "#000",
                                          },
                                          children: "Predicted Risk",
                                        }),
                                        Object(S.jsx)("span", {
                                          className: "badge",
                                          style: {
                                            backgroundColor: "#FF0000",
                                            color: "#fff",
                                          },
                                          children: "High Risk",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(S.jsxs)("div", {
                                  className: "d-flex gap-2 mb-2",
                                  children: [
                                    Object(S.jsx)("button", {
                                      className:
                                        "btn btn-sm btn-outline-primary flex-fill",
                                      children: "Filters",
                                    }),
                                    Object(S.jsx)("button", {
                                      className:
                                        "btn btn-sm btn-outline-secondary flex-fill",
                                      children: "Layers",
                                    }),
                                  ],
                                }),
                                Object(S.jsx)("div", {
                                  className: "d-flex gap-2 mb-2",
                                  children: Object(S.jsx)("button", {
                                    className: "btn btn-sm btn-warning w-100",
                                    onClick: function () {
                                      console.log(
                                        "Reloading grid for current view..."
                                      ),
                                        window.location.reload();
                                    },
                                    children:
                                      "\ud83d\udd04 Reload Grid for Current View",
                                  }),
                                }),
                                Object(S.jsx)("div", {
                                  className: "mt-2",
                                  children: Object(S.jsxs)("small", {
                                    className: "text-muted",
                                    children: [
                                      "\ud83c\udfe0 Blue marker shows grid center",
                                      Object(S.jsx)("br", {}),
                                      "\ud83d\udccd Hover over grid cells to view details",
                                      Object(S.jsx)("br", {}),
                                      "\ud83d\udd0d Click cells to zoom in",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        W = function (e) {
          var t = e.children,
            s = I().user;
          return (
            console.log("Check user in Private: ", s),
            s ? t : Object(S.jsx)(j.a, { to: "/" })
          );
        },
        T = function () {
          var e = Object(c.useState)(""),
            t = Object(x.a)(e, 2),
            s = t[0],
            a = t[1],
            n = Object(c.useState)(""),
            r = Object(x.a)(n, 2),
            i = r[0],
            o = r[1],
            d = Object(c.useState)(""),
            m = Object(x.a)(d, 2),
            u = m[0],
            g = m[1],
            p = I().signUp,
            f = Object(j.o)(),
            v = (function () {
              var e = Object(h.a)(
                Object(b.a)().mark(function e(t) {
                  return Object(b.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              o(""),
                              (e.prev = 2),
                              (e.next = 5),
                              p(s, u)
                            );
                          case 5:
                            f("/"), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(2)), o(e.t0.message);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(S.jsx)("div", {
            className:
              "min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light",
            children: Object(S.jsx)("div", {
              className: "w-100",
              style: { maxWidth: "400px" },
              children: Object(S.jsxs)("div", {
                className: "p-5 bg-white rounded-3 shadow-sm",
                children: [
                  Object(S.jsxs)("div", {
                    className: "text-center mb-4",
                    children: [
                      Object(S.jsx)("h2", {
                        className: "fw-bold mb-1",
                        style: { color: "#212529" },
                        children: "Create Account",
                      }),
                      Object(S.jsx)("p", {
                        className: "text-muted",
                        children: "Join CityPulse Admin Dashboard",
                      }),
                    ],
                  }),
                  i &&
                    Object(S.jsx)(P.a, {
                      variant: "danger",
                      className: "rounded-2",
                      children: i,
                    }),
                  Object(S.jsxs)(N.a, {
                    onSubmit: v,
                    children: [
                      Object(S.jsx)(N.a.Group, {
                        className: "mb-3",
                        controlId: "formBasicEmail",
                        children: Object(S.jsx)(N.a.Control, {
                          type: "email",
                          placeholder: "Email address",
                          onChange: function (e) {
                            return a(e.target.value);
                          },
                          className: "py-2 border-2",
                          style: {
                            borderColor: "#dee2e6",
                            borderRadius: "8px",
                          },
                        }),
                      }),
                      Object(S.jsx)(N.a.Group, {
                        className: "mb-4",
                        controlId: "formBasicPassword",
                        children: Object(S.jsx)(N.a.Control, {
                          type: "password",
                          placeholder: "Create password",
                          onChange: function (e) {
                            return g(e.target.value);
                          },
                          className: "py-2 border-2",
                          style: {
                            borderColor: "#dee2e6",
                            borderRadius: "8px",
                          },
                        }),
                      }),
                      Object(S.jsx)(O.a, {
                        variant: "dark",
                        type: "submit",
                        className: "w-100 py-2 mb-3 rounded-3 fw-bold",
                        style: { backgroundColor: "#212529", border: "none" },
                        children: "Sign Up",
                      }),
                    ],
                  }),
                  Object(S.jsxs)("div", {
                    className: "text-center text-muted mt-4",
                    children: [
                      "Already have an account?",
                      " ",
                      Object(S.jsx)(l.b, {
                        to: "/",
                        className: "text-decoration-none fw-bold",
                        style: { color: "#212529" },
                        children: "Log In",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var V = function () {
        return Object(S.jsx)(F, {
          children: Object(S.jsxs)(j.d, {
            children: [
              Object(S.jsx)(j.b, {
                path: "/home",
                element: Object(S.jsx)(i.a, {
                  style: { width: "1700px" },
                  children: Object(S.jsx)(o.a, {
                    children: Object(S.jsx)(d.a, {
                      children: Object(S.jsx)(W, {
                        children: Object(S.jsx)(L, {}),
                      }),
                    }),
                  }),
                }),
              }),
              Object(S.jsx)(j.b, {
                path: "/",
                element: Object(S.jsx)(i.a, {
                  style: { width: "400px" },
                  children: Object(S.jsx)(o.a, {
                    children: Object(S.jsx)(d.a, {
                      children: Object(S.jsx)(D, {}),
                    }),
                  }),
                }),
              }),
              Object(S.jsx)(j.b, {
                path: "/signup",
                element: Object(S.jsx)(i.a, {
                  style: { width: "400px" },
                  children: Object(S.jsx)(o.a, {
                    children: Object(S.jsx)(d.a, {
                      children: Object(S.jsx)(T, {}),
                    }),
                  }),
                }),
              }),
              Object(S.jsx)(j.b, {
                path: "/maps",
                element: Object(S.jsx)($, {}),
              }),
            ],
          }),
        });
      };
      r.a.render(
        Object(S.jsx)(a.a.StrictMode, {
          children: Object(S.jsx)(l.a, { children: Object(S.jsx)(V, {}) }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[90, 1, 2]],
]);
//# sourceMappingURL=main.c5f49d54.chunk.js.map
