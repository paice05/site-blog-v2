(this["webpackJsonpsite-blog"]=this["webpackJsonpsite-blog"]||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/sapphire-1.f5c1e03b.jpg"},167:function(e,t,a){e.exports=a.p+"static/media/docker.e85c0d07.jpg"},168:function(e,t,a){e.exports=a.p+"static/media/js.0e4fdce8.png"},169:function(e,t,a){e.exports=a.p+"static/media/nodejs.994977c4.png"},193:function(e,t,a){e.exports=a(321)},320:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=a(154),i=a(20),u=a(171),s=a(156),m=a.n(s),p=a(14),d=a(157),f=a(115),E=a(401),b=a(52),h={token:"",user:{},status:{type:"",message:""}},g="@auth/AUTH_TOKEN",y="@auth/AUTH_TOKEN_SUCCESS",v="@auth/AUTH_TOKEN_ERROR",O="@auth/AUTH_LOGIN",x="@auth/AUTH_LOGIN_SUCCESS",j="@auth/AUTH_LOGIN_ERROR",w="@auth/AUTH_LOGOUT",k="@auth/AUTH_LOGOUT_SUCCESS",S=function(e,t){return{type:g,payload:{username:e,password:t}}},C=function(){return{type:w}},T={byId:{},allId:[]},R="@authors/AUTHORS_LIST",A="@authors/AUTHORS_LIST_SUCCESS",U="@authors/AUTHORS_LIST_ERROR",_="@authors/AUTHORS_CREATE",L="@authors/AUTHORS_CREATE_SUCCESS",H="@authors/AUTHORS_CREATE_ERROR",N=function(){return{type:R}},I=function(e){return{type:_,payload:e}},P=Object(p.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(b.a)({},e,{token:t.payload.token,user:t.payload.user,status:{type:y,message:""}});case v:return Object(b.a)({},e,{status:{type:v,message:t.payload}});case k:return h;default:return e}},authors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(b.a)({},e,{byId:t.payload.reduce((function(e,t){return e[t.id]=t,e}),{}),allId:t.payload.map((function(e){return e.id}))});default:return T}},form:E.a}),B=a(21),W=a.n(B),F=a(18),D=a(159),G=a.n(D).a.create({baseURL:"http://3.16.156.21:3334",headers:{}}),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return G.get(e,t).then((function(e){return e.data}))},K=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return G.post(e,t,a).then((function(e){return e.data}))},q=W.a.mark($),z=W.a.mark(Q),J=W.a.mark(V),Z=W.a.mark(X);function $(e){var t,a,n,r;return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.username,n=t.password,c.prev=1,c.next=4,Object(F.b)(K,"/auth",{username:a.toLowerCase(),password:n.toLowerCase()});case 4:return r=c.sent,c.next=7,Object(F.c)({type:y});case 7:return c.next=9,Object(F.c)({type:O,payload:r.token});case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(1),c.next=15,Object(F.c)({type:v,payload:"N\xe3o foi poss\xedvel acessar a plataforma, por favor verifique seus dados"});case 15:case"end":return c.stop()}}),q,null,[[1,11]])}function Q(e){var t,a;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(F.b)(M,"/me",{headers:{authorization:"Bearer ".concat(t)}});case 4:return a=n.sent,n.next=7,Object(F.c)({type:x,payload:{user:a,token:t}});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(F.c)({type:j});case 13:case"end":return n.stop()}}),z,null,[[1,9]])}function V(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.c)({type:k});case 2:case"end":return e.stop()}}),J)}function X(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.e)(g,$);case 2:return e.next=4,Object(F.e)(O,Q);case 4:return e.next=6,Object(F.e)(w,V);case 6:case"end":return e.stop()}}),Z)}var Y=X,ee=W.a.mark(ne),te=W.a.mark(re),ae=W.a.mark(ce);function ne(){var e,t,a;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(F.d)((function(e){return e.auth.user.id}));case 2:return e=n.sent,n.prev=3,n.next=6,Object(F.b)(M,"/authors");case 6:return t=n.sent,n.next=9,t.filter((function(t){return t.id!==e}));case 9:return a=n.sent,n.next=12,Object(F.c)({type:A,payload:a});case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(3),n.next=18,Object(F.c)({type:U});case 18:case"end":return n.stop()}}),ee,null,[[3,14]])}function re(e){var t,a,n,r;return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,K("/authors",t);case 4:return a=c.sent,n=a.username,r=a.password,c.next=9,Object(F.c)({type:L});case 9:return c.next=11,Object(F.c)({type:g,payload:{username:n,password:r}});case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(1),c.next=17,Object(F.c)({type:H});case 17:case"end":return c.stop()}}),te,null,[[1,13]])}function ce(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.e)(R,ne);case 2:return e.next=4,Object(F.e)(_,re);case 4:case"end":return e.stop()}}),ae)}var oe=ce,le=W.a.mark(ie);function ie(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)([Y(),oe()]);case 2:case"end":return e.stop()}}),le)}var ue=ie,se={key:"root",storage:m.a},me=Object(f.a)(se,P),pe=Object(u.a)(),de=Object(p.createStore)(me,Object(d.composeWithDevTools)(Object(p.applyMiddleware)(pe))),fe=Object(f.b)(de);pe.run(ue);var Ee={store:de,persistor:fe},be=a(87),he=a(49),ge=a(2),ye=a(33),ve=a(362),Oe=a(366),xe=a(163),je=a.n(xe),we=a(160),ke=a.n(we),Se=a(161),Ce=a.n(Se),Te=a(162),Re=a.n(Te),Ae=function(){var e=r.a.useState("recents"),t=Object(ye.a)(e,2),a=t[0],n=t[1];return r.a.createElement(ve.a,{value:a,onChange:function(e,t){n(t)}},r.a.createElement(Oe.a,{label:"Recents",value:"recents",icon:r.a.createElement(ke.a,null)}),r.a.createElement(Oe.a,{label:"Favorites",value:"favorites",icon:r.a.createElement(Ce.a,null)}),r.a.createElement(Oe.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(Re.a,null)}),r.a.createElement(Oe.a,{label:"Folder",value:"folder",icon:r.a.createElement(je.a,null)}))},Ue=a(16),_e=a(388),Le=a(402),He=a(389),Ne=a(390),Ie=a(65),Pe=a(391),Be=a(392),We=a(322),Fe=a(368),De=a(323),Ge=a(372),Me=a(367),Ke=a(369),qe=a(370),ze=a(371),Je=a(373),Ze=a(374),$e=function(e){var t=e.classes,a=e.side,n=e.toggleDrawer,c=Object(he.f)();return r.a.createElement("div",{className:t.list,role:"presentation",onClick:n(a,!1),onKeyDown:n(a,!1)},r.a.createElement(We.a,null,r.a.createElement(De.a,null,r.a.createElement(Me.a,{primary:"Sapphire"}))),r.a.createElement(Fe.a,null),r.a.createElement(We.a,null,[{text:"Home",icon:Ke.a,path:"/"},{text:"Posts",icon:qe.a,path:"/posts"},{text:"Authors",icon:ze.a,path:"/authors"}].map((function(e){var t=e.text,a=e.icon,n=e.path;return r.a.createElement(De.a,{button:!0,key:t,onClick:function(){return c.push(n)}},r.a.createElement(Ge.a,null,r.a.createElement(a,null)),r.a.createElement(Me.a,{primary:t}))}))),r.a.createElement(Fe.a,null),r.a.createElement(We.a,null,[{text:"Recentes",icon:Je.a},{text:"Categorias",icon:Ze.a}].map((function(e,t){var a=e.text,n=e.icon;return r.a.createElement(De.a,{button:!0,key:a},r.a.createElement(Ge.a,null,r.a.createElement(n,null)),r.a.createElement(Me.a,{primary:a}))}))))},Qe=a(375),Ve=a(379),Xe=a(378),Ye=a(172),et=a(377),tt=a(381),at=a(380),nt=a(376),rt=function(){var e=Object(i.c)(),t=Object(n.useRef)(null),a=Object(n.useState)(!1),c=Object(ye.a)(a,2),o=c[0],l=c[1],u=Object(i.d)((function(e){return e.auth})),s=u.user,m=u.token,p=function(e){t.current&&t.current.contains(e.target)||l(!1)};function d(e){"Tab"===e.key&&(e.preventDefault(),l(!1))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe.a,{ref:t,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){l((function(e){return!e}))},style:{color:"white"}},r.a.createElement(Ie.a,{variant:"inherit",style:{marginRight:"15px"}},m&&s.name),r.a.createElement(nt.a,null)),r.a.createElement(et.a,{open:o,anchorEl:t.current,role:void 0,transition:!0,disablePortal:!0},(function(t){var a=t.TransitionProps,n=t.placement;return r.a.createElement(Xe.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(Ye.a,null,r.a.createElement(Ve.a,{onClickAway:p},r.a.createElement(at.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:d},r.a.createElement(tt.a,{onClick:p},"Perfil"),r.a.createElement(tt.a,{onClick:function(t){p(t),e(C())}},"Logout")))))})))},ct=a(383),ot=a(400),lt=a(399),it=a(382),ut=a(387),st=a(385),mt=a(386),pt=a(384),dt=a(398),ft=function(e){var t=e.label,a=e.type,n=e.input,c=n.value,o=n.onChange;return r.a.createElement("div",null,r.a.createElement(dt.a,{fullWidth:!0,label:t,type:a,value:c,onChange:o}))},Et={labelError:{color:"red",fontSize:"12px"}},bt=Object(lt.a)({form:"auth"})((function(e){var t=e.handleSubmit,a=Object(i.c)(),c=Object(i.d)((function(e){return e.auth.status})),o=c.type,l=c.message,u=Object(n.useState)(!1),s=Object(ye.a)(u,2),m=s[0],p=s[1],d=function(){return p(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe.a,{variant:"outlined",color:"inherit",onClick:function(){return p(!0)}},"Login"),r.a.createElement(it.a,{open:m,onClose:d,"aria-labelledby":"form-dialog-title",maxWidth:!1,fullWidth:!0},r.a.createElement(ct.a,{onSubmit:t((function(e){return function(e){var t=e.username,n=e.password;a(S(t,n))}(e)}))},r.a.createElement(pt.a,{id:"form-dialog-title"},"Remake Blog - Login"),r.a.createElement(st.a,null,r.a.createElement(mt.a,null,"Bem vindo a plataforma de blog da Remake. Acesso agora e fique por dentro de todas as novidades do mundo da tecnologia com as not\xedcias mais atuais do momento."),r.a.createElement(ot.a,{name:"username",component:ft,label:"Username",type:"text"}),r.a.createElement(ot.a,{name:"password",component:ft,label:"Password",type:"password"}),r.a.createElement("p",{style:Et.labelError},o===v&&l)),r.a.createElement(ut.a,null,r.a.createElement(Qe.a,{onClick:d,color:"primary"},"Cancel"),r.a.createElement(Qe.a,{type:"submit",color:"primary"},"Login")))))})),ht=Object(lt.a)({form:"register"})((function(e){var t=e.handleSubmit,a=Object(i.c)(),c=Object(n.useState)(!1),o=Object(ye.a)(c,2),l=o[0],u=o[1],s=function(){return u(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe.a,{color:"inherit",onClick:function(){return u(!0)}},"Register"),r.a.createElement(it.a,{open:l,onClose:s,"aria-labelledby":"form-dialog-title",maxWidth:!1,fullWidth:!0},r.a.createElement(ct.a,{onSubmit:t((function(e){return function(e){var t=e.name,n=e.bio,r=e.username,c=e.password;a(I({name:t,bio:n,username:r,password:c}))}(e)}))},r.a.createElement(pt.a,{id:"form-dialog-title"},"Sapphire Blog - Login"),r.a.createElement(st.a,null,r.a.createElement(mt.a,null,"Bem vindo a plataforma de blog da Sapphire. Acesso agora e fique por dentro de todas as novidades do mundo da tecnologia com as not\xedcias mais atuais do momento."),r.a.createElement(ot.a,{name:"name",component:ft,label:"Name",type:"text"}),r.a.createElement(ot.a,{name:"bio",component:ft,label:"Bio",type:"text"}),r.a.createElement(ot.a,{name:"username",component:ft,label:"Username",type:"text"}),r.a.createElement(ot.a,{name:"password",component:ft,label:"password",type:"password"})),r.a.createElement(ut.a,null,r.a.createElement(Qe.a,{onClick:s,color:"primary"},"Cancel"),r.a.createElement(Qe.a,{type:"submit",color:"primary"},"Register")))))})),gt=Object(_e.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250}}})),yt=function(e){var t=e.title,a=gt(),c=Object(i.d)((function(e){return e.auth})).token,o=Object(n.useState)({left:!1}),l=Object(ye.a)(o,2),u=l[0],s=l[1],m=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(Object(b.a)({},u,Object(Ue.a)({},e,t)))}};return r.a.createElement(He.a,{position:"fixed"},r.a.createElement(Ne.a,null,r.a.createElement(Pe.a,{edge:"start",color:"inherit",className:a.menuButton,"aria-label":"menu",onClick:m("left",!0)},r.a.createElement(Be.a,null)),r.a.createElement(Ie.a,{variant:"h6",className:a.title},t),c?r.a.createElement(rt,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(ht,null),r.a.createElement(bt,null))),r.a.createElement(Le.a,{open:u.left,onClose:m("left",!1)},r.a.createElement($e,{side:"left",toggleDrawer:m,classes:a})))},vt=function(e){var t=e.path,a=e.component,n=e.title,c=Object(ge.a)(e,["path","component","title"]);return r.a.createElement("div",{style:{display:"flex",minHeight:"100vh",flexDirection:"column"}},r.a.createElement(yt,{title:n}),r.a.createElement("div",{style:{flex:1,marginTop:"60px"}},r.a.createElement(he.a,Object.assign({path:t,component:a},c))),r.a.createElement(Ae,null))},Ot=a(393),xt=a(166),jt=a.n(xt),wt=function(){return r.a.createElement(Ot.a,{maxWidth:"sm",style:{textAlign:"center"}},r.a.createElement("h1",null," s\u03b1\u03c1\u03c1\u040bir\u0454 "),r.a.createElement("img",{src:jt.a,width:"100%",alt:"",style:{height:"200px",width:"100%",maxWidth:"400px",marginTop:"20px"}}))},kt=a(394),St=a(395),Ct=a(396),Tt=a(170),Rt=a.n(Tt),At=a(75),Ut=a.n(At),_t=a(167),Lt=a.n(_t),Ht=a(168),Nt=a.n(Ht),It=a(169),Pt=a.n(It),Bt=[{id:1,img:Ut.a,title:"Tecnologia 1",author:"Matheus Paice",featured:!0},{id:2,img:Lt.a,title:"Tecnologia 2",author:"Matheus Paice",featured:!1},{id:3,img:Ut.a,title:"Tecnologia 3",author:"Matheus Paice",featured:!1},{id:4,img:Nt.a,title:"Tecnologia 4",author:"Matheus Paice",featured:!0},{id:5,img:Pt.a,title:"Tecnologia 5",author:"Matheus Paice",featured:!1},{id:6,img:Ut.a,title:"Tecnologia 5",author:"Matheus Paice",featured:!1}],Wt=Object(_e.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:717,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}})),Ft=function(){var e=Wt();return r.a.createElement("div",{className:e.root},r.a.createElement(kt.a,{cellHeight:200,spacing:4,className:e.gridList},Bt.map((function(t){return r.a.createElement(St.a,{key:t.id,cols:t.featured?2:1,rows:t.featured?2:1},r.a.createElement("img",{src:t.img,alt:t.title}),r.a.createElement(Ct.a,{title:t.title,subtitle:r.a.createElement("span",null,"by:",t.author),actionIcon:r.a.createElement(Pe.a,{"aria-label":"info about ".concat(t.title),className:e.icon},r.a.createElement(Rt.a,null)),actionPosition:"left",className:e.titleBar}))}))))},Dt=a(397),Gt=a(403),Mt=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.authors})),a=t.byId,c=t.allId;return Object(n.useEffect)((function(){e(N())}),[e]),r.a.createElement(We.a,null,c.map((function(e){return r.a.createElement("div",{key:a[e].id},r.a.createElement(De.a,{alignItems:"flex-start"},r.a.createElement(Dt.a,null,r.a.createElement(Gt.a,{alt:a[e].name,src:"/static/images/avatar/1.jpg"})),r.a.createElement(Me.a,{primary:a[e].name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie.a,{component:"span",variant:"body2",color:"textPrimary"},a[e].bio))})),r.a.createElement(Fe.a,{variant:"inset",component:"li"}))})))},Kt=function(){return r.a.createElement(be.a,null,r.a.createElement(he.c,null,r.a.createElement(vt,{exact:!0,path:"/",component:wt,title:"Sapphire"}),r.a.createElement(vt,{path:"/posts",component:Ft,title:"Posts"}),r.a.createElement(vt,{path:"/authors",component:Mt,title:"Authors"})))};var qt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:Ee.store},r.a.createElement(l.a,{loading:null,persistor:Ee.persistor},r.a.createElement(Kt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(320);o.a.render(r.a.createElement(qt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a.p+"static/media/react.cba0b89d.png"}},[[193,1,2]]]);
//# sourceMappingURL=main.875f23b2.chunk.js.map