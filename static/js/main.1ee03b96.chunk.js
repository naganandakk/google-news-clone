(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(75)},53:function(e,t,a){},54:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=a(19),s=a(8),o=a(39),u=(a(53),a(10)),m=a(2),d=Object(m.a)(),p=(a(54),a(24)),v=function(){return r.a.createElement("div",{className:"ui menu"},r.a.createElement(p.a,{to:"/"},r.a.createElement("div",{className:"header item"},"News")))},E=a(13),h=a(9),f=a(16),b=a(17),O=a(20),g=a(18),N=a(21),j=a(28),y=a.n(j),w=a(41),S=a(42),I=["f251266458e947ba94e465c731e10a2a","afbacd1a0f8a435e8971084223998783"],_=a.n(S).a.create({baseURL:"https://newsapi.org/v2"});_.interceptors.request.use(function(e){var t=Math.floor(Math.random()*I.length),a=I[t];return e.headers.Authorization="Bearer ".concat(a),e});var k=_,A=function(e){var t=e.article;return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui small image"},r.a.createElement("img",{alt:"",src:t.urlToImage})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.title),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,t.content))))},T=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui action input"},r.a.createElement("input",{type:"text",placeholder:"Search..."}),r.a.createElement("select",{className:"ui compact selection dropdown"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{selected:"",value:"articles"},"Articles"),r.a.createElement("option",{value:"products"},"Products")),r.a.createElement("div",{className:"ui button"},"Search"))}}]),t}(r.a.Component),C=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).renderPlaceHolder=function(){var e=Object(h.a)(Array(5).keys()).map(function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement("div",{className:"image header"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"paragraph"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"})))});return r.a.createElement("div",{className:"ui placeholder"},e)},a.renderArticles=function(){if(!a.props.articles.length)return a.renderPlaceHolder();var e=a.props.articles.map(function(e,t){return r.a.createElement(A,{article:e,key:t})});return r.a.createElement("div",{className:"ui items"},e)},a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticles(Object(E.a)({pageSize:100,sources:"the-hindu"},this.props.filters))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),this.renderArticles())}}]),t}(r.a.Component),R=Object(l.b)(function(e){return{articles:e.articles,filters:e.filters}},{fetchArticles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(w.a)(y.a.mark(function t(a){var n,r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.keys(e).map(function(t){return t+"="+e[t]}).join("&"),t.next=3,k.get("/everything?".concat(n));case 3:r=t.sent,a({type:"FETCH_ARTICLES",payload:r.data.articles});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(C);var F=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(u.b,{history:d},r.a.createElement(v,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:R}))))},L={isSignedIn:!1,user:{}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(E.a)({},e,{isSignedIn:!0,user:t.payload});case"SIGN_OUT":return Object(E.a)({},e,{isSignedIn:!1,user:{}});default:return e}},D=a(43),M=a.n(D),H=Object(s.c)({auth:x,articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ARTICLES":return[].concat(Object(h.a)(e),Object(h.a)(t.payload));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTERS":return[].concat(Object(h.a)(e),Object(h.a)(t.payload));case"REMOVE_FILTERS":return M.a.omit(e,t.payload);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,B=Object(s.e)(H,P(Object(s.a)(o.a)));i.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.1ee03b96.chunk.js.map