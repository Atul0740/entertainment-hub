(this.webpackJsonpentertainment=this.webpackJsonpentertainment||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=(a(108),a(109),a(110),a(2)),o=function(){return Object(i.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"\ud83c\udfac Entertainment Hub \ud83c\udfa5"})},l=a(10),u=a(210),d=a(213),j=a(215),b=a(92),p=a.n(b),f=a(93),O=a.n(f),h=a(94),m=a.n(h),v=a(66),x=a.n(v),g=a(15),_=Object(u.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function y(){var e=_(),t=c.a.useState(0),a=Object(l.a)(t,2),r=a[0],s=a[1],o=Object(g.f)();return Object(n.useEffect)((function(){0===r?o.push("/"):1===r?o.push("/movies"):2===r?o.push("/series"):3===r&&o.push("/search")}),[r,o]),Object(i.jsxs)(d.a,{value:r,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(i.jsx)(j.a,{style:{color:"white"},label:"Trending",icon:Object(i.jsx)(p.a,{})}),Object(i.jsx)(j.a,{style:{color:"white"},label:"Movies",icon:Object(i.jsx)(O.a,{})}),Object(i.jsx)(j.a,{style:{color:"white"},label:"TV Series",icon:Object(i.jsx)(m.a,{})}),Object(i.jsx)(j.a,{style:{color:"white"},label:"Search",icon:Object(i.jsx)(x.a,{})})]})}var w=a(70),S=a(221),k=a(14),N=a.n(k),C=a(20),P=a(21),T=a.n(P),M=a(218),E="https://image.tmdb.org/t/p/w300",G="https://image.tmdb.org/t/p/w500",B="https://www.movienewz.com/img/films/poster-holder.jpg",I=(a(137),a(225)),D=a(216),z=a(177),F=(a(138),a(217)),V=a(96),J=a.n(V),L=a(95),U=a.n(L),q=(a(172),a(173),function(e){return e.preventDefault()}),A=function(e){var t=e.id,a=e.media_type,c=Object(n.useState)([]),r=Object(l.a)(c,2),s=r[0],o=r[1],u=s.map((function(e){return Object(i.jsxs)("div",{className:"carouselItem",children:[Object(i.jsx)("img",{src:e.profile_path?"".concat(E,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:q,className:"carouselItem__img"}),Object(i.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),d=function(){var e=Object(C.a)(N.a.mark((function e(){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=c1f74ef7207bccaa259c8a578e8f9f01&language=en-US"));case 2:n=e.sent,c=n.data,o(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(i.jsx)(U.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:u,autoPlay:!0})},H=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function R(e){var t=e.children,a=e.media_type,c=e.id,r=H(),s=Object(n.useState)(!1),o=Object(l.a)(s,2),u=o[0],d=o[1],j=Object(n.useState)(),b=Object(l.a)(j,2),p=b[0],f=b[1],O=Object(n.useState)(),h=Object(l.a)(O,2),m=h[0],v=h[1],x=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=c1f74ef7207bccaa259c8a578e8f9f01"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=c1f74ef7207bccaa259c8a578e8f9f01"));case 2:n=e.sent,r=n.data,v(null===(t=r.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(),g()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){d(!0)},children:t}),Object(i.jsx)(I.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:u,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:D.a,BackdropProps:{timeout:500},children:Object(i.jsx)(z.a,{in:u,children:p&&Object(i.jsx)("div",{className:r.paper,children:Object(i.jsxs)("div",{className:"ContentModal",children:[Object(i.jsx)("img",{src:p.poster_path?"".concat(G,"/").concat(p.poster_path):B,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(i.jsx)("img",{src:p.backdrop_path?"".concat(G,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(i.jsxs)("div",{className:"ContentModal__about",children:[Object(i.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(i.jsx)("i",{className:"tagline",children:p.tagline}),Object(i.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(i.jsx)("div",{children:Object(i.jsx)(A,{id:c,media_type:a})}),Object(i.jsx)(F.a,{variant:"contained",startIcon:Object(i.jsx)(J.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(m),children:"Watch the Trailer"})]})]})})})})]})}var W=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,r=e.media_type,s=e.vote_average;return Object(i.jsxs)(R,{media_type:r,id:t,children:[Object(i.jsx)(M.a,{badgeContent:s,color:s>6?"primary":"secondary"}),Object(i.jsx)("img",{className:"poster",src:a?"".concat(E).concat(a):B,alt:n}),Object(i.jsx)("b",{className:"title",children:n}),Object(i.jsxs)("span",{className:"subTitle",children:["tv"===r?"TV Series":"Movie",Object(i.jsx)("span",{className:"subTitle",children:c})]})]})},K=(a(174),a(224)),Q=a(97),X=a(219),Y=Object(Q.a)({palette:{type:"dark"}});function Z(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(i.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(i.jsx)(X.a,{theme:Y,children:Object(i.jsx)(K.a,{onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},count:n,color:"primary",hideNextButton:!0,hidePrevButton:!0})})})}var $=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],d=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=c1f74ef7207bccaa259c8a578e8f9f01&page=".concat(a));case 2:t=e.sent,n=t.data,u(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[a]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(i.jsx)("div",{className:"trending",children:o&&o.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(i.jsx)(Z,{setPage:c})]})},ee=a(73),te=a(226),ae=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,r=e.setGenres,s=e.type,o=e.setPage,l=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/genre/".concat(s,"/list?api_key=c1f74ef7207bccaa259c8a578e8f9f01&language=en-US"));case 2:t=e.sent,a=t.data,r(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return l(),function(){r({})}}),[]),Object(i.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(i.jsx)(te.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),r([].concat(Object(ee.a)(c),[e])),o(1)}(e)}},e.id)})),c.map((function(e){return Object(i.jsx)(te.a,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(ee.a)(t),[e])),r(c.filter((function(t){return t.id!==e.id}))),o(1)}(e)}},e.id)}))]})},ne=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},ce=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(1),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(l.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),x=Object(l.a)(v,2),g=x[0],_=x[1],y=ne(o),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/discover/movie?api_key=c1f74ef7207bccaa259c8a578e8f9f01&page=".concat(b,"&with_genres=").concat(y));case 2:t=e.sent,a=t.data,m(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[y,b]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"Discover Movies"}),Object(i.jsx)(ae,{type:"movie",selectedGenres:o,setSelectedGenres:u,genres:a,setGenres:c,setPage:p}),Object(i.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),g>1&&Object(i.jsx)(Z,{setPage:p,numOfPages:g})]})},re=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(1),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(l.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),x=Object(l.a)(v,2),g=x[0],_=x[1],y=ne(o),w=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/discover/tv?api_key=c1f74ef7207bccaa259c8a578e8f9f01&page=".concat(b,"&with_genres=").concat(y));case 2:t=e.sent,a=t.data,m(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[y,b]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(i.jsx)(ae,{type:"tv",selectedGenres:o,setSelectedGenres:u,genres:a,setGenres:c,setPage:p}),Object(i.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),g>1&&Object(i.jsx)(Z,{setPage:p,numOfPages:g})]})},se=a(222),ie=a(223),oe=a(220),le=(a(175),function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(1),j=Object(l.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(l.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),g=Object(l.a)(v,2),_=g[0],y=g[1],w=Object(Q.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=c1f74ef7207bccaa259c8a578e8f9f01&query=").concat(o,"&page=").concat(b));case 3:t=e.sent,n=t.data,m(n.results),y(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[a,b]),Object(i.jsxs)("div",{children:[Object(i.jsxs)(X.a,{theme:w,children:[Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)(se.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return u(e.target.value)}}),Object(i.jsx)(F.a,{onClick:S,variant:"contained",style:{marginLeft:10},children:Object(i.jsx)(x.a,{fontSize:"large"})})]}),Object(i.jsxs)(ie.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(i.jsx)(oe.a,{style:{width:"50%"},label:"Search Movies"}),Object(i.jsx)(oe.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(i.jsxs)("div",{className:"trending",children:[h&&h.map((function(e){return Object(i.jsx)(W,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),o&&!h&&(a?Object(i.jsx)("h2",{children:"No Series Found"}):Object(i.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(i.jsx)(Z,{setPage:p,numOfPages:_})]})});var ue=function(){return Object(i.jsxs)(w.a,{children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(S.a,{children:Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{path:"/",component:$,exact:!0}),Object(i.jsx)(g.a,{path:"/movies",component:ce}),Object(i.jsx)(g.a,{path:"/series",component:re}),Object(i.jsx)(g.a,{path:"/search",component:le})]})})}),Object(i.jsx)(y,{})]})};s.a.render(Object(i.jsx)(ue,{}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.130c69fe.chunk.js.map