(window["webpackJsonpgoogle-news-clone"]=window["webpackJsonpgoogle-news-clone"]||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),c=n(81),s=n(32),l=n(69),u=n(17),p=n(37),m=(n(97),n(6)),d=n(22),g=n(4),b=n(166),f=n(167),h=n(157),O=n(158),E=n(160),y=n(161),v=n(50),w=n.n(v),j=n(176),S=Object(h.a)(function(e){return{menuButton:{marginRight:e.spacing(2)},appBar:{zIndex:e.zIndex.drawer+1},title:{flexGrow:1,fontWeight:600}}}),k=function(e){var t=S();return r.a.createElement(O.a,{position:"fixed",className:t.appBar},r.a.createElement(E.a,null,r.a.createElement(j.a,{mdUp:!0,implementation:"css"},r.a.createElement(y.a,{onClick:e.onMobileMenuToggle,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null))),r.a.createElement(j.a,{smDown:!0,implementation:"css"},r.a.createElement(y.a,{onClick:e.onDesktopMenuToggle,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null))),r.a.createElement("h3",{className:t.title},"Daily News")))},D=n(175),P=n(162),I=n(165),N=n(163),T=n(164),x=n(70),C=n.n(x),M=n(71),B=n.n(M),R=n(73),L=n.n(R),_=n(72),F=n.n(_),G=n(75),z=n.n(G),W=n(74),A=n.n(W),U=n(76),H=n.n(U),J=Object(h.a)(function(e){return{drawer:Object(m.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),drawerPaper:{width:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),borderRight:e.spacing(0)},drawerPaperShift:{width:0,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},toolbar:e.mixins.toolbar,listItem:{borderTopRightRadius:e.spacing(3),borderBottomRightRadius:e.spacing(3),"&:hover":{color:"#1a73e8",background:"none"}},listItemSelected:{borderTopRightRadius:e.spacing(3),borderBottomRightRadius:e.spacing(3),background:"#E6EBFD",color:"#1a73e8","&:hover":{color:"#1a73e8",background:"#E6EBFD"}},listItemIconSelected:{color:"inherit"}}}),V=Object(u.f)(function(e){var t=J(),n=e.location.pathname,a=[[{key:"top-stories",title:"Top stories",icon:r.a.createElement(C.a,null),link:"/",selected:!("/"!==n&&!n.includes("top-stories"))}],[{key:"business",title:"Business",icon:r.a.createElement(B.a,null),link:"/topics/business",selected:!!n.includes("topics/business")},{key:"technology",title:"Technology",icon:r.a.createElement(F.a,null),link:"/topics/technology",selected:!!n.includes("topics/technology")},{key:"entertainment",title:"Entertainment",icon:r.a.createElement(L.a,null),link:"/topics/entertainment",selected:!!n.includes("topics/entertainment")},{key:"sports",title:"Sports",icon:r.a.createElement(A.a,null),link:"/topics/sports",selected:!!n.includes("topics/sports")},{key:"science",title:"Science",icon:r.a.createElement(z.a,null),link:"/topics/science",selected:!!n.includes("topics/science")},{key:"health",title:"Health",icon:r.a.createElement(H.a,null),link:"/topics/health",selected:!!n.includes("topics/health")}]],i=function(){var e=a.length;return a.map(function(n,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,n.map(function(e){return r.a.createElement(p.b,{to:e.link},r.a.createElement(N.a,{button:!0,key:e.key,className:e.selected?t.listItemSelected:t.listItem},r.a.createElement(T.a,{className:e.selected?t.listItemIconSelected:""},e.icon),r.a.createElement("span",null,e.title)))})),e-1!=a?r.a.createElement(I.a,null):null)})};return r.a.createElement("nav",{className:t.drawer,"aria-label":"top-stories categories"},r.a.createElement(j.a,{mdUp:!0,implementation:"css"},r.a.createElement(D.a,{variant:"temporary",open:e.openMobile,onClose:e.onMobileMenuToggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolbar}),i())),r.a.createElement(j.a,{smDown:!0,implementation:"css"},r.a.createElement(D.a,{variant:"permanent",open:!0,classes:{paper:e.openDesktop?t.drawerPaper:t.drawerPaperShift},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolbar}),i())))}),q=Object(h.a)(function(e){return{root:{display:"flex",flexGrow:1},content:{flexGrow:1,padding:e.spacing(3),marginTop:e.spacing(4),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},gridContainer:{flexGrow:1}}}),X=function(e){var t=q(),n=Object(a.useState)(!1),i=Object(d.a)(n,2),o=i[0],c=i[1],s=Object(a.useState)(!0),l=Object(d.a)(s,2),u=l[0],p=l[1];function h(){c(!o)}function O(){p(!u)}return r.a.createElement("div",{className:t.root},r.a.createElement(k,{onMobileMenuToggle:h,onDesktopMenuToggle:O}),r.a.createElement(V,{openMobile:o,openDesktop:u,onMobileMenuToggle:h,onDesktopMenuToggle:O}),r.a.createElement(b.a,{className:Object(g.a)(t.content,Object(m.a)({},t.contentShift,u))},r.a.createElement(f.a,{container:!0,className:t.gridContainer,spacing:2},r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:8},e.children))))},K=n(41),$=n.n(K),Q=n(46),Y=n(171),Z=n(174);function ee(e){return r.a.createElement(Z.a,{"aria-labelledby":e.title||"app-modal-title","aria-describedby":e.description||"app-modal-description",open:e.open,onClose:e.handleClose||null},e.children)}var te=n(78),ne=n.n(te),ae=n(168),re=n(169),ie=n(170),oe=Object(h.a)(function(e){return{gridContainer:{flexGrow:1},card:{borderRadius:e.spacing(1),borderStyle:"solid",borderWidth:"thin",borderColor:"#D3D3D3"},mediaContainer:{padding:e.spacing(1)},media:{maxHeight:200,borderRadius:e.spacing(1)},title:{padding:e.spacing(0),marginBottom:e.spacing(.5)},source:{color:"grey",fontSize:"0.9rem"}}}),ce=function(e){var t=e.article,n=oe();return r.a.createElement(ae.a,{className:n.card},r.a.createElement(f.a,{container:!0,className:n.gridContainer},r.a.createElement(f.a,{item:!0,xs:10},r.a.createElement(re.a,null,r.a.createElement("h3",{className:n.title},t.title),r.a.createElement("span",{className:n.source},t.source.name," - ",ne.a.utc(t.publishedAt).fromNow()),r.a.createElement("p",null,t.description))),r.a.createElement(f.a,{item:!0,xs:2,className:n.mediaContainer},r.a.createElement(ie.a,{className:n.media,component:"img",image:t.urlToImage,title:t.title}))))},se=Object(h.a)(function(e){return{article:{marginBottom:e.spacing(2)},title:{padding:e.spacing(0),margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)}}}),le=function(e){var t=se(),n=e.articles.map(function(e,n){return r.a.createElement("div",{className:t.article,key:n},r.a.createElement(ce,{className:t.article,article:e}))}),a=e.title?r.a.createElement("h2",{className:t.title},e.title):null;return r.a.createElement(r.a.Fragment,null,a,n)},ue=n(79);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var me=["f251266458e947ba94e465c731e10a2a","afbacd1a0f8a435e8971084223998783"],de=n.n(ue).a.create({baseURL:"https://newsapi.org/v2"});de.interceptors.request.use(function(e){var t=Math.floor(Math.random()*me.length),n=me[t];e.headers.Authorization="Bearer ".concat(n);return e.params=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{country:"in",pageSize:100},{},e.params),e});var ge=de,be=function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!1),s=Object(d.a)(c,2),l=s[0],u=s[1];function p(){return(p=Object(Q.a)($.a.mark(function e(){var t;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,ge.get("/top-headlines");case 3:t=e.sent,u(!1),o(t.data.articles);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){!function(){p.apply(this,arguments)}()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{open:l},r.a.createElement(Y.a,{color:"secondary"})),r.a.createElement(le,{title:"Headlines",articles:i}))},fe=n(173),he=n(172),Oe=Object(h.a)(function(e){return{tabsContainer:{borderBottom:"1px solid",borderBottomWidth:"thin",borderBottomColor:"#D3D3D3",marginBottom:e.spacing(3)},tabs:{padding:e.spacing(0),margin:e.spacing(0)},tab:{textTransform:"none",fontFamily:"Google Sans",fontSize:"1.2rem",fontWeight:500,margin:e.spacing(0),padding:e.spacing(2),"&:hover":{color:"#000000"},width:"fit-content",minWidth:e.spacing(0)}}});function Ee(e){var t=e.topicID,n=Oe(),i=Object(a.useState)(e.selectedTabIndex||0),o=Object(d.a)(i,2),c=o[0],s=o[1],l=e.tabs.map(function(e,t){return r.a.createElement(he.a,Object.assign({className:n.tab,label:e},{id:"scrollable-auto-tab-".concat(a=t),"aria-controls":"scrollable-auto-tabpanel-".concat(a)}));var a});return r.a.createElement("div",{className:n.tabsContainer},r.a.createElement(fe.a,{className:n.tabs,value:c,onChange:function(n,a){s(a),window.location="#/topics/".concat(t,"/sections/").concat(e.tabs[a].toLowerCase())},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},l))}var ye=Object(h.a)(function(e){return{title:{fontSize:"1.8rem",textTransform:"capitalize",margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)}}});function ve(e){var t=ye(),n=Object(a.useState)([]),i=Object(d.a)(n,2),o=i[0],c=i[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),u=l[0],p=l[1],m=e.match.params,g=m.topicID,b=m.sectionID,f={business:["Latest","Economy","Markets","Jobs","Personal finance","Entrepreneurship"],technology:["Latest","Mobile","Gadgets","Internet","Virtual Reality","Artificial Intelligence","Computing"],entertainment:["Latest","Movies","Music","Tv","Books","Art","Celebrities"],sports:["Latest","Cricket","Hockey","Tennis","Football","Badminton","Kabbadi","Women's Cricket","Basketball","F1 Racing"],science:["Latest","Environment","Outer space","Physics","Genetics","Wildlife"],health:["Latest","Medicine","Healthcare","Mental health","Nutrition","Fitness"]},h=f[g].map(function(e){return e.toLowerCase()}).indexOf(b),O=-1!==h?h:0;function E(){return(E=Object(Q.a)($.a.mark(function e(){var t;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,ge.get("/top-headlines",{params:{category:g,q:"latest"!==b?b:void 0}});case 3:t=e.sent,p(!1),c(t.data.articles);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){!function(){E.apply(this,arguments)}()},[g,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{open:u},r.a.createElement(Y.a,{color:"secondary"})),r.a.createElement("h2",{className:t.title},g),r.a.createElement(Ee,{tabs:f[g],selectedTabIndex:O,topicID:g}),r.a.createElement(le,{articles:o}))}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Se={isSignedIn:!1,user:{}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return je({},e,{isSignedIn:!0,user:t.payload});case"SIGN_OUT":return je({},e,{isSignedIn:!1,user:{}});default:return e}},De=n(80),Pe=n.n(De);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Te={pageSize:100,country:"in",language:"en"};function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Me={sidebar:!0,pageLoader:!1},Be=Object(s.c)({auth:ke,articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ARTICLES":return t.payload;default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTERS":return Ne({},e,{},t.payload);case"REMOVE_FILTERS":return Pe.a.omit(e,t.payload);default:return e}},sources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SOURCES":return t.payload;default:return e}},uiState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_UI_STATE":return Ce({},e,{},t.payload);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Le=Object(s.e)(Be,Re(Object(s.a)(l.a)));o.a.render(r.a.createElement(c.a,{store:Le},r.a.createElement(function(){return r.a.createElement(p.a,null,r.a.createElement(X,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:be}),r.a.createElement(u.a,{exact:!0,path:"/topics/:topicID",component:ve}),r.a.createElement(u.a,{exact:!0,path:"/topics/:topicID/sections/:sectionID",component:ve}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,n){e.exports=n(118)},97:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.7a44daf4.chunk.js.map