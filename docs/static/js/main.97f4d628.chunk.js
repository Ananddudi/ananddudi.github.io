(this["webpackJsonpdeveloper-portfolio"]=this["webpackJsonpdeveloper-portfolio"]||[]).push([[0],{101:function(e,t,a){},107:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},136:function(e,t,a){},156:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),s=a(12),n=a.n(s),o=(a(101),a(27)),i=a(11),l=a(10),d=(a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/orangeTheme-boy.0ebb8c72.svg"),j=a.p+"static/media/orangeTheme-girl.d0ad58be.svg",m=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/eduOrange.c61dcfc3.svg"),b=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/expOrange.9383b2df.svg"),p=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/contactsOrange.75754594.svg"),u=(a.p,a.p,a.p,a.p,{theme:{type:"light",primary:"#f56539",primary400:"#ff764d",primary600:"#fa5624",primary80:"#f56539cc",primary50:"#f5653980",primary30:"#f565394d",secondary:"#eaeaea",secondary70:"#eaeaeab3",secondary50:"#eaeaea80",tertiary:"#212121",tertiary80:"#212121cc",tertiary70:"#212121b3",tertiary50:"#21212180",aboutimg1:d,aboutimg2:j,eduimg:m,expimg:b,contactsimg:p}}),h=a(2),g=Object(r.createContext)();var x=function(e){var t=Object(r.useState)(u.theme),a=Object(l.a)(t,2),c=a[0],s=(a[1],Object(r.useState)(!1)),n=Object(l.a)(s,2),o=n[0],i=n[1],d={theme:c,drawerOpen:o,setHandleDrawer:function(){i(!o)}};return Object(h.jsx)(g.Provider,{value:d,children:e.children})},y=a(53),O=a(7),f=a(29),v=a(24),k=a.n(v),w=a(61),N=a(36),C=a(85),A=a(18),S=a(194),B=a(201),I=a(56),P=a.n(I),D=(a(107),a.p+"static/media/resume.c2211b2f.pdf"),E={name:"Anand dudi",title:"Full-Stack Developer",desciption:"Aim is to make people 'Rich, happy and smart' by leveraging the power of computization",image:a.p+"static/media/images.94a0b1a4.jpg",resumePdf:D};var L=function(){var e,t=Object(r.useContext)(g),a=t.theme,c=t.setHandleDrawer,s=Object(r.useState)(!1),n=Object(l.a)(s,2),o=n[0],i=n[1],d=function(){i(!1),c()},j=Object(S.a)((function(e){var t;return{navMenu:(t={fontSize:"2.5rem",color:a.tertiary,cursor:"pointer",transform:"translateY(-10px)",transition:"color 0.3s","&:hover":{color:a.primary}},Object(O.a)(t,e.breakpoints.down("sm"),{fontSize:"2.5rem"}),Object(O.a)(t,e.breakpoints.down("xs"),{fontSize:"2rem"}),t),MuiDrawer:Object(O.a)({padding:"0em 1.8em",width:"14em",fontFamily:" var(--primaryFont)",fontStyle:" normal",fontWeight:" normal",fontSize:" 24px",background:a.secondary,overflow:"hidden",borderTopRightRadius:"40px",borderBottomRightRadius:"40px"},e.breakpoints.down("sm"),{width:"12em"}),closebtnIcon:Object(O.a)({fontSize:"2rem",fontWeight:"bold",cursor:"pointer",color:a.primary,position:"absolute",right:40,top:40,transition:"color 0.2s","&:hover":{color:a.tertiary}},e.breakpoints.down("sm"),{right:20,top:20}),drawerItem:Object(O.a)({margin:"2rem auto",borderRadius:"78.8418px",background:a.secondary,color:a.primary,width:"85%",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"0 30px",boxSizing:"border-box",border:"2px solid",borderColor:a.primary,transition:"background-color 0.2s, color 0.2s","&:hover":{background:a.primary,color:a.secondary}},e.breakpoints.down("sm"),{width:"100%",padding:"0 25px",height:"55px"}),drawerLinks:Object(O.a)({fontFamily:"var(--primaryFont)",width:"50%",fontSize:"1.3rem",fontWeight:600},e.breakpoints.down("sm"),{fontSize:"1.125rem"}),drawerIcon:Object(O.a)({fontSize:"1.6rem"},e.breakpoints.down("sm"),{fontSize:"1.385rem"})}}))();return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsxs)("div",{className:"navbar--container",children:[Object(h.jsx)("h1",{style:{color:a.secondary},children:(e=E.name,e.length>12?e.split(" ")[0]:e)}),Object(h.jsx)(w.b,{className:j.navMenu,onClick:function(){i(!0),c()},"aria-label":"Menu"})]}),Object(h.jsxs)(B.a,{variant:"temporary",onClose:function(e,t){("backdropClick"!==t||"escapeKeyDown"!==t)&&d()},anchor:"left",open:o,classes:{paper:j.MuiDrawer},className:"drawer",disableScrollLock:!0,children:[Object(h.jsx)("div",{className:"div-closebtn",children:Object(h.jsx)(P.a,{onClick:d,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),d())},className:j.closebtnIcon,role:"button",tabIndex:"0","aria-label":"Close"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{onClick:d,children:Object(h.jsxs)("div",{className:"navLink--container",children:[Object(h.jsx)(k.a,{left:!0,children:Object(h.jsx)(f.a,{to:"/",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsxs)("div",{className:j.drawerItem,children:[Object(h.jsx)(w.a,{className:j.drawerIcon}),Object(h.jsx)("span",{className:j.drawerLinks,children:"Home"})]})})}),Object(h.jsx)(k.a,{left:!0,children:Object(h.jsx)(f.a,{to:"/#about",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsxs)("div",{className:j.drawerItem,children:[Object(h.jsx)(A.j,{className:j.drawerIcon}),Object(h.jsx)("span",{className:j.drawerLinks,children:"About"})]})})}),Object(h.jsx)(k.a,{left:!0,children:Object(h.jsx)(f.a,{to:"/#skill",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsxs)("div",{className:j.drawerItem,children:[Object(h.jsx)(N.b,{className:j.drawerIcon}),Object(h.jsx)("span",{className:j.drawerLinks,children:"Skills"})]})})}),Object(h.jsx)(k.a,{left:!0,children:Object(h.jsx)(f.a,{to:"/#projects",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsxs)("div",{className:j.drawerItem,children:[Object(h.jsx)(A.d,{className:j.drawerIcon}),Object(h.jsx)("span",{className:j.drawerLinks,children:"Projects"})]})})}),Object(h.jsx)(k.a,{left:!0,children:Object(h.jsx)(f.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsxs)("div",{className:j.drawerItem,children:[Object(h.jsx)(A.d,{className:j.drawerIcon}),Object(h.jsx)("span",{className:j.drawerLinks,children:"Contacts"})]})})}),Object(h.jsx)(k.a,{left:!0,children:Object(h.jsx)(f.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsxs)("div",{className:j.drawerItem,children:[Object(h.jsx)(C.a,{className:j.drawerIcon}),Object(h.jsx)("span",{className:j.drawerLinks,children:"Contact"})]})})})]})})]})]})};a(117);var z=function(){var e,t=Object(r.useContext)(g).theme;return Object(h.jsx)("div",{className:"footer",style:{backgroundColor:t.secondary},children:Object(h.jsxs)("p",{style:{color:t.tertiary},children:["Made with",Object(h.jsx)("span",{style:{color:t.primary,margin:"0 0.5rem -1rem 0.5rem"},children:"\u2764"}),"by ",(e=E.name,e.length>10?e.split(" ")[0]:e)]})})},R=a(197),H=(a(118),"https://github.com/Ananddudi"),F="https://www.linkedin.com/in/anand-dudi/",T="https://twitter.com/anand_dudi";var Y=function(){var e=Object(r.useContext)(g),t=e.theme,a=e.drawerOpen,c=Object(S.a)((function(e){return{resumeBtn:Object(O.a)({color:t.primary,borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",fontSize:"1rem",fontWeight:"500",height:"50px",fontFamily:"var(--primaryFont)",border:"3px solid ".concat(t.primary),transition:"100ms ease-out","&:hover":{backgroundColor:t.tertiary,color:t.secondary,border:"3px solid ".concat(t.tertiary)}},e.breakpoints.down("sm"),{width:"180px"}),contactBtn:Object(O.a)({backgroundColor:t.primary,color:t.secondary,borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",height:"50px",fontSize:"1rem",fontWeight:"500",fontFamily:"var(--primaryFont)",border:"3px solid ".concat(t.primary),transition:"100ms ease-out","&:hover":{backgroundColor:t.secondary,color:t.tertiary,border:"3px solid ".concat(t.tertiary)}},e.breakpoints.down("sm"),{display:"none"})}}))();return Object(h.jsx)("div",{className:"landing",children:Object(h.jsxs)("div",{className:"landing--container",children:[Object(h.jsx)("div",{className:"landing--container-left",style:{backgroundColor:t.primary},children:Object(h.jsxs)("div",{className:"lcl--content",children:[F&&Object(h.jsx)("a",{href:F,target:"_blank",rel:"noreferrer",children:Object(h.jsx)(A.f,{className:"landing--social",style:{color:t.secondary},"aria-label":"LinkedIn"})}),H&&Object(h.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",children:Object(h.jsx)(A.e,{className:"landing--social",style:{color:t.secondary},"aria-label":"GitHub"})}),T&&Object(h.jsx)("a",{href:T,target:"_blank",rel:"noreferrer",children:Object(h.jsx)(A.i,{className:"landing--social",style:{color:t.secondary},"aria-label":"Twitter"})})]})}),Object(h.jsx)("img",{src:E.image,alt:"",className:"landing--img",style:{opacity:"".concat(a?"0":"1"),borderColor:t.secondary}}),Object(h.jsx)("div",{className:"landing--container-right",style:{backgroundColor:t.secondary},children:Object(h.jsxs)("div",{className:"lcr--content",style:{color:t.tertiary},children:[Object(h.jsx)("h6",{children:E.title}),Object(h.jsx)("h1",{children:E.name}),Object(h.jsx)("p",{children:E.desciption}),Object(h.jsx)("div",{className:"lcr-buttonContainer",children:Object(h.jsx)(f.a,{to:"/#contacts",smooth:!0,spy:"true",duration:2e3,children:Object(h.jsx)(R.a,{className:c.contactBtn,children:"Contact"})})})]})})]})})},W=(a(119),"Who I am"),M="3+ years of experience as web dev with industrial and freelancing environment.Eager to learn new tech as well as update myself to rapidly changing technologies.Gained hands-on expertise in DevOps Heroku,FTP Server,Git,Github.Deeply focused on scalability and high performance.I always write readable,maintainable and structured code";var J=function(){var e=Object(r.useContext)(g).theme;return Object(h.jsxs)("div",{className:"about",id:"about",style:{backgroundColor:e.secondary},children:[Object(h.jsxs)("div",{className:"line-styling",children:[Object(h.jsx)("div",{className:"style-circle",style:{backgroundColor:e.primary}}),Object(h.jsx)("div",{className:"style-circle",style:{backgroundColor:e.primary}}),Object(h.jsx)("div",{className:"style-line",style:{backgroundColor:e.primary}})]}),Object(h.jsxs)("div",{className:"about-body",children:[Object(h.jsxs)("div",{className:"about-description",children:[Object(h.jsx)("h2",{style:{color:e.primary},children:W}),Object(h.jsx)("p",{style:{color:e.tertiary80},children:M})]}),Object(h.jsx)("div",{className:"about-img",children:Object(h.jsx)("img",{src:e.aboutimg1,alt:""})})]})]})},q=a(86),Q=a.n(q),V=(a(120),["HTML","CSS","Javascript","Python","React","Django","materialui","mongo","sass","nodejs","expressjs","redux","reduxsaga","websocket","nextjs","C++","Blender","Three","Qt","Ubuntu"]),G=a.p+"static/media/html.6a342d61.svg",Z=a.p+"static/media/css.43b6f4bd.svg",K=a.p+"static/media/javascript.e9360603.svg",U=a.p+"static/media/react.2b6a0717.svg",X=a.p+"static/media/bootstrap.19a2d2ff.svg",_=a.p+"static/media/postgresql.c0d71b7c.svg",$=a.p+"static/media/tailwind.254c4865.svg",ee=a.p+"static/media/cplusplus.3398ef50.svg",te=a.p+"static/media/python.cf32ad96.svg",ae=a.p+"static/media/django.d51a8aa4.svg",re=a.p+"static/media/git.a0b8447e.svg",ce=a.p+"static/media/threejs.34faec93.svg",se=a.p+"static/media/qt.d15754ce.svg",ne=a.p+"static/media/blender.b96901d1.svg",oe=a.p+"static/media/ubuntu.3285e742.svg",ie=a.p+"static/media/nodejs-svgrepo-com.719cb353.svg",le=a.p+"static/media/express-js-icon.ea97b712.svg",de=a.p+"static/media/mongodb-svgrepo-com.6d3d1850.svg",je=a.p+"static/media/websocket-svgrepo-com.afbd6437.svg",me=a.p+"static/media/sass-svgrepo-com.02dda4cb.svg",be=a.p+"static/media/redux-svgrepo-com.609190d1.svg",pe=a.p+"static/media/reduxsaga-svgrepo-com.b6e1f04c.svg",ue=a.p+"static/media/material-ui-svgrepo-com.456bfb02.svg",he=a.p+"static/media/nextjs-svgrepo-com.726188da.svg",ge=function(e){switch(e.toLowerCase()){case"html":return G;case"css":return Z;case"javascript":return K;case"react":return U;case"bootstrap":return X;case"postgresql":return _;case"tailwind":return $;case"c++":return ee;case"python":return te;case"django":return ae;case"git":return re;case"blender":return ne;case"three":return ce;case"qt":return se;case"ubuntu":return oe;case"mongo":return de;case"websocket":return je;case"sass":return me;case"nextjs":return he;case"expressjs":return le;case"materialui":return ue;case"redux":return be;case"reduxsaga":return pe;case"nodejs":return ie}};var xe=function(){var e=Object(r.useContext)(g).theme,t={backgroundColor:e.secondary,boxShadow:"0px 0px 30px ".concat(e.primary30)};return Object(h.jsxs)("div",{className:"skills",id:"skill",style:{backgroundColor:e.secondary},children:[Object(h.jsx)("div",{className:"skillsHeader",children:Object(h.jsx)("h2",{style:{color:e.primary},children:"Skills"})}),Object(h.jsx)("div",{className:"skillsContainer",children:Object(h.jsx)("div",{className:"skill--scroll",children:Object(h.jsx)(Q.a,{gradient:!1,speed:120,pauseOnHover:!0,pauseOnClick:!0,delay:0,play:!0,direction:"left",children:V.map((function(a,r){return Object(h.jsxs)("div",{className:"skill--box",style:t,children:[Object(h.jsx)("img",{src:ge(a),alt:a}),Object(h.jsx)("h3",{style:{color:e.tertiary},children:a})]},r)}))})})})]})},ye=a(63),Oe=a(87),fe=a.n(Oe),ve=[{id:1,name:"Elon musk",title:"A guy with vision",text:"I think it is possible for ordinary people to choose to be extraordinary.",image:a.p+"static/media/boy1.f9c177c8.svg"},{id:2,name:"Steve jobs",title:"Apple",text:"To turn really interesting ideas and fledgling technologies into a company that can continue to innovate for years, it requires a lot of discipline.",image:a.p+"static/media/boy2.ece5c080.svg"},{id:3,name:"Jeff Bezos",title:"Amazon",text:"There are two kinds of companies, those that work to try to charge more and those that work to charge less. We will be the second",image:a.p+"static/media/boy3.a46b5f81.svg"}];a(136);var ke=function(){var e=Object(r.useContext)(g).theme,t=Object(r.useRef)();return Object(h.jsx)(h.Fragment,{children:ve.length>0&&Object(h.jsxs)("div",{className:"testimonials",style:{backgroundColor:e.primary},children:[Object(h.jsx)("div",{className:"testimonials--header",children:Object(h.jsx)("h1",{style:{color:e.secondary},children:"Inspiration"})}),Object(h.jsxs)("div",{className:"testimonials--body",children:[Object(h.jsx)(A.h,{className:"quote",style:{color:e.secondary}}),Object(h.jsxs)("div",{className:"testimonials--slider",style:{backgroundColor:e.primary},children:[Object(h.jsx)(fe.a,Object(ye.a)(Object(ye.a)({},{dots:!0,adaptiveHeight:!0,infinite:!0,speed:800,arrows:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,margin:3,loop:!0,autoplaySpeed:3e3,draggable:!0,swipeToSlide:!0,swipe:!0}),{},{ref:t,children:ve.map((function(t){return Object(h.jsx)("div",{className:"single--testimony",children:Object(h.jsxs)("div",{className:"testimonials--container",children:[Object(h.jsx)("div",{className:"review--img",style:{backgroundColor:e.secondary},children:Object(h.jsx)("img",{src:t.image,alt:t.name})}),Object(h.jsxs)("div",{className:"review--content",style:{backgroundColor:e.secondary,color:e.tertiary},children:[Object(h.jsx)("p",{children:t.text}),Object(h.jsx)("h1",{children:t.name}),Object(h.jsx)("h4",{children:t.title})]})]})},t.id)}))})),Object(h.jsx)("button",{className:"prevBtn",onClick:function(){t.current.slickPrev()},style:{backgroundColor:e.secondary},children:Object(h.jsx)(A.a,{style:{color:e.primary},"aria-label":"Previous testimonial"})}),Object(h.jsx)("button",{className:"nextBtn",onClick:function(){t.current.slickNext()},style:{backgroundColor:e.secondary},children:Object(h.jsx)(A.b,{style:{color:e.primary},"aria-label":"Next testimonial"})})]})]})]})})},we=(a(67),a.p+"static/media/eduImgWhite.ae822784.svg"),Ne=a.p+"static/media/eduImgBlack.b19a68ba.svg";var Ce=function(e){var t=e.id,a=e.institution,c=e.course,s=e.startYear,n=e.endYear,o=Object(r.useContext)(g).theme,i=Object(S.a)((function(e){return{educationCard:{backgroundColor:o.primary30,"&:hover":{backgroundColor:o.primary50}}}}))();return Object(h.jsx)(k.a,{bottom:!0,children:Object(h.jsxs)("div",{className:"education-card ".concat(i.educationCard),children:[Object(h.jsx)("div",{className:"educard-img",style:{backgroundColor:o.primary},children:Object(h.jsx)("img",{src:"light"===o.type?Ne:we,alt:""})}),Object(h.jsxs)("div",{className:"education-details",children:[Object(h.jsxs)("h6",{style:{color:o.primary},children:[s,"-",n]}),Object(h.jsx)("h4",{style:{color:o.tertiary},children:c}),Object(h.jsx)("h5",{style:{color:o.tertiary80},children:a})]})]},t)})},Ae=[{id:1,institution:"Oriental Institute of science and technology",course:"Bachelor of Engineering",startYear:"2015"},{id:2,institution:"SVM higher secondar school",course:"12th math science",startYear:"2012"}];var Se=function(){var e=Object(r.useContext)(g).theme;return Object(h.jsx)("div",{className:"education",id:"resume",style:{backgroundColor:e.secondary},children:Object(h.jsxs)("div",{className:"education-body",children:[Object(h.jsxs)("div",{className:"education-description",children:[Object(h.jsx)("h1",{style:{color:e.primary},children:"Education"}),Ae.map((function(e){return Object(h.jsx)(Ce,{id:e.id,institution:e.institution,course:e.course,startYear:e.startYear,endYear:e.endYear},e.id)}))]}),Object(h.jsx)("div",{className:"education-image",children:Object(h.jsx)("img",{src:e.eduimg,alt:""})})]})})},Be=(a(68),[{id:1,company:"Industries",jobtitle:"Full-Stack Developer",startYear:"2019",endYear:"2022"},{id:2,company:"Freelancer",jobtitle:"Software Developer",startYear:"2017",endYear:"2019"},{id:3,company:"For open",jobtitle:"Utilizing functions",startYear:"2017",endYear:"2016"}]),Ie=a.p+"static/media/expImgWhite.0b896d9c.svg",Pe=a.p+"static/media/expImgBlack.6f43b1ca.svg";var De=function(e){var t=e.id,a=e.company,c=e.jobtitle,s=e.startYear,n=e.endYear,o=Object(r.useContext)(g).theme,i=Object(S.a)((function(e){return{experienceCard:{backgroundColor:o.primary30,"&:hover":{backgroundColor:o.primary50}}}}))();return Object(h.jsx)(k.a,{bottom:!0,children:Object(h.jsxs)("div",{className:"experience-card ".concat(i.experienceCard),children:[Object(h.jsx)("div",{className:"expcard-img",style:{backgroundColor:o.primary},children:Object(h.jsx)("img",{src:"light"===o.type?Pe:Ie,alt:""})}),Object(h.jsxs)("div",{className:"experience-details",children:[Object(h.jsxs)("h6",{style:{color:o.primary},children:[s,"-",n]}),Object(h.jsx)("h4",{style:{color:o.tertiary},children:c}),Object(h.jsx)("h5",{style:{color:o.tertiary80},children:a})]})]},t)})};var Ee=function(){var e=Object(r.useContext)(g).theme;return Object(h.jsx)("div",{className:"experience",id:"experience",style:{backgroundColor:e.secondary},children:Object(h.jsxs)("div",{className:"experience-body",children:[Object(h.jsx)("div",{className:"experience-image",children:Object(h.jsx)("img",{src:e.expimg,alt:""})}),Object(h.jsxs)("div",{className:"experience-description",children:[Object(h.jsx)("h1",{style:{color:e.primary},children:"Experience"}),Be.map((function(e){return Object(h.jsx)(De,{id:e.id,jobtitle:e.jobtitle,company:e.company,startYear:e.startYear,endYear:e.endYear},e.id)}))]})]})})},Le=a(202),ze=a(198),Re=a(199),He=a(88),Fe=a.n(He),Te=a(89),Ye=a.n(Te),We=a(45),Me=a(90),Je="dudis.vision@gmail.com",qe="Indore, Madhya Pradesh,India",Qe="";a(156);var Ve=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),o=Object(l.a)(n,2),i=o[0],d=o[1],j=Object(r.useState)(""),m=Object(l.a)(j,2),b=m[0],p=m[1],u=Object(r.useState)(""),x=Object(l.a)(u,2),y=x[0],O=x[1],f=Object(r.useState)(!1),v=Object(l.a)(f,2),k=v[0],w=v[1],C=Object(r.useState)(""),A=Object(l.a)(C,2),B=A[0],I=A[1],D=Object(r.useContext)(g).theme,E=function(e,t){"clickaway"!==t&&s(!1)},L=Object(S.a)((function(e){return{input:{border:"4px solid ".concat(D.primary80),backgroundColor:"".concat(D.secondary),color:"".concat(D.tertiary),fontFamily:"var(--primaryFont)",fontWeight:500,transition:"border 0.2s ease-in-out","&:focus":{border:"4px solid ".concat(D.primary600)}},message:{border:"4px solid ".concat(D.primary80),backgroundColor:"".concat(D.secondary),color:"".concat(D.tertiary),fontFamily:"var(--primaryFont)",fontWeight:500,transition:"border 0.2s ease-in-out","&:focus":{border:"4px solid ".concat(D.primary600)}},label:{backgroundColor:"".concat(D.secondary),color:"".concat(D.primary),fontFamily:"var(--primaryFont)",fontWeight:600,fontSize:"0.9rem",padding:"0 5px",transform:"translate(25px,50%)",display:"inline-flex"},socialIcon:{width:"45px",height:"45px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",backgroundColor:D.primary,color:D.secondary,transition:"250ms ease-in-out","&:hover":{transform:"scale(1.1)",color:D.secondary,backgroundColor:D.tertiary}},detailsIcon:{backgroundColor:D.primary,color:D.secondary,borderRadius:"50%",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"23px",transition:"250ms ease-in-out",flexShrink:0,"&:hover":{transform:"scale(1.1)",color:D.secondary,backgroundColor:D.tertiary}},submitBtn:{backgroundColor:D.primary,color:D.secondary,transition:"250ms ease-in-out","&:hover":{transform:"scale(1.08)",color:D.secondary,backgroundColor:D.tertiary}}}}))();return Object(h.jsxs)("div",{className:"contacts",id:"contacts",style:{backgroundColor:D.secondary},children:[Object(h.jsxs)("div",{className:"contacts--container",children:[Object(h.jsx)("h1",{style:{color:D.primary},children:"Contacts"}),Object(h.jsxs)("div",{className:"contacts-body",children:[Object(h.jsxs)("div",{className:"contacts-form",children:[Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i&&b&&y)if(Ye()(b)){var t={name:i,email:b,message:y};Fe.a.post(Qe,t).then((function(e){console.log("success"),w(!0),I(""),d(""),p(""),O(""),s(!1)}))}else I("Invalid email"),s(!0);else I("Enter all the fields"),s(!0)},children:[Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"Name",className:L.label,children:"Name"}),Object(h.jsx)("input",{value:i,onChange:function(e){return d(e.target.value)},type:"text",name:"Name",className:"form-input ".concat(L.input)})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"Email",className:L.label,children:"Email"}),Object(h.jsx)("input",{value:b,onChange:function(e){return p(e.target.value)},type:"email",name:"Email",className:"form-input ".concat(L.input)})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"Message",className:L.label,children:"Message"}),Object(h.jsx)("textarea",{placeholder:"Type your message....",value:y,onChange:function(e){return O(e.target.value)},type:"text",name:"Message",className:"form-message ".concat(L.message)})]}),Object(h.jsx)("div",{className:"submit-btn",children:Object(h.jsxs)("button",{type:"submit",className:L.submitBtn,children:[Object(h.jsx)("p",{children:k?"Sent":"Send"}),Object(h.jsxs)("div",{className:"submit-icon",children:[Object(h.jsx)(We.c,{className:"send-icon",style:{animation:k?"fly 0.8s linear both":"initial",position:k?"absolute":"initial"}}),Object(h.jsx)(We.a,{className:"success-icon",style:{display:k?"inline-flex":"none",opacity:k?"1":"0"}})]})]})})]}),Object(h.jsx)(Le.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:4e3,onClose:E,children:Object(h.jsx)(ze.a,{action:Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(Re.a,{size:"small","aria-label":"close",color:"inherit",onClick:E,children:Object(h.jsx)(P.a,{fontSize:"small"})})}),style:{backgroundColor:D.primary,color:D.secondary,fontFamily:"var(--primaryFont)"},message:B})})]}),Object(h.jsxs)("div",{className:"contacts-details",children:[Object(h.jsxs)("a",{href:"mailto:".concat(Je),className:"personal-details",children:[Object(h.jsx)("div",{className:L.detailsIcon,children:Object(h.jsx)(Me.a,{})}),Object(h.jsx)("p",{style:{color:D.tertiary},children:Je})]}),Object(h.jsxs)("div",{className:"personal-details",children:[Object(h.jsx)("div",{className:L.detailsIcon,children:Object(h.jsx)(N.c,{})}),Object(h.jsx)("p",{style:{color:D.tertiary},children:qe})]})]})]})]}),Object(h.jsx)("img",{src:D.contactsimg,alt:"contacts",className:"contacts--img"})]})},Ge=[{id:1,projectName:"The Simulation",projectDesc:"This project aims to build Unique 3D website that simulate the real world",tags:["Three.js","Ammo.js","Tween.js"],code:"https://github.com/Ananddudi/SimulationWebApp",demo:"https://dudisimulationapp.netlify.app/",image:a.p+"static/media/one.575cd9aa.png"},{id:2,projectName:"Web Chat",projectDesc:"This project is web chat application leverage idea of snapchat features",tags:["React","Django","Figma","Django-rest-fmwk","Postgresql"],code:"https://github.com/Ananddudi/ChatWebApp",demo:"https://dudichatapp.herokuapp.com/",image:"data:image/png;base64,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"},{id:3,projectName:"Control",projectDesc:"Controls Operating system and utilizes youtube api and openweather map api to show trending videos as well as recent weather data",tags:["Pyqt5","Youtube API","OpenWeatherMap API"],code:"https://github.com/Ananddudi/Controls",demo:"https://photos.app.goo.gl/geCQoc4oQjBjs5cB7",image:a.p+"static/media/os.b5955e49.svg"},{id:4,projectName:"Earth",projectDesc:"Just Simple 3D earth in space",tags:["Three.js","Tween.js"],code:"https://github.com/Ananddudi/First-three.js-project",demo:"https://duditestproject.netlify.app/",image:a.p+"static/media/earth.cf5b45dd.svg"},{id:5,projectName:"CoinExchange",projectDesc:"A Simple Copy of original application with code written from scratch without any library",tags:["React"],code:"https://github.com/Ananddudi/Reactjs-app",demo:"https://myreactjsexample.netlify.app/",image:a.p+"static/media/thirteen.cf0bc49e.svg"},{id:6,projectName:"Calculator",projectDesc:"A calculator with extra functionality for cross platform",tags:["Pyqt5","Qt Designer"],code:"https://github.com/Ananddudi/Cal",demo:"https://photos.app.goo.gl/jLM2e9yJVLPuZT559",image:a.p+"static/media/calc.a76d69a2.svg"}],Ze=(a(160),a.p+"static/media/placeholder.3fcbbdcd.png");a(161);var Ke=function(e){var t=e.id,a=e.name,r=e.desc,c=e.tags,s=e.code,n=e.demo,o=e.image,i=e.theme,l=Object(S.a)((function(e){return{iconBtn:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:50,border:"2px solid ".concat(i.tertiary),color:i.tertiary,transition:"all 0.2s","&:hover":{backgroundColor:i.secondary,color:i.primary,transform:"scale(1.1)",border:"2px solid ".concat(i.secondary)}},icon:{fontSize:"1.1rem",transition:"all 0.2s","&:hover":{}}}}))();return Object(h.jsx)(k.a,{bottom:!0,children:Object(h.jsxs)("div",{className:"singleProject",style:{backgroundColor:i.primary400},children:[Object(h.jsxs)("div",{className:"projectContent",children:[Object(h.jsx)("h2",{id:a.replace(" ","-").toLowerCase(),style:{color:i.tertiary},children:a}),Object(h.jsx)("img",{src:o||Ze,alt:a}),Object(h.jsxs)("div",{className:"project--showcaseBtn",children:[Object(h.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:l.iconBtn,"aria-labelledby":"".concat(a.replace(" ","-").toLowerCase()," ").concat(a.replace(" ","-").toLowerCase(),"-demo"),children:Object(h.jsx)(A.g,{id:"".concat(a.replace(" ","-").toLowerCase(),"-demo"),className:l.icon,"aria-label":"Demo"})}),Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:l.iconBtn,"aria-labelledby":"".concat(a.replace(" ","-").toLowerCase()," ").concat(a.replace(" ","-").toLowerCase(),"-code"),children:Object(h.jsx)(A.c,{id:"".concat(a.replace(" ","-").toLowerCase(),"-code"),className:l.icon,"aria-label":"Code"})})]})]}),Object(h.jsx)("p",{className:"project--desc",style:{background:i.secondary,color:i.tertiary},children:r}),Object(h.jsx)("div",{className:"project--lang",style:{background:i.secondary,color:i.tertiary80},children:c.map((function(e,t){return Object(h.jsx)("span",{children:e},t)}))})]},t)})};var Ue=function(){var e=Object(r.useContext)(g).theme,t=Object(S.a)((function(){return{viewAllBtn:{color:e.tertiary,backgroundColor:e.primary,transition:"color 0.2s","&:hover":{color:e.secondary,backgroundColor:e.primary}},viewArr:{color:e.tertiary,backgroundColor:e.secondary70,width:"40px",height:"40px",padding:"0.5rem",fontSize:"1.05rem",borderRadius:"50%",cursor:"pointer",transition:"background-color 0.2s","&:hover":{color:e.tertiary,backgroundColor:e.secondary}}}}))();return Object(h.jsx)(h.Fragment,{children:Ge.length>0&&Object(h.jsxs)("div",{className:"projects",id:"projects",style:{backgroundColor:e.secondary},children:[Object(h.jsx)("div",{className:"projects--header",children:Object(h.jsx)("h1",{style:{color:e.primary},children:"Projects"})}),Object(h.jsxs)("div",{className:"projects--body",children:[Object(h.jsx)("div",{className:"projects--bodyContainer",children:Ge.slice(0,3).map((function(t){return Object(h.jsx)(Ke,{theme:e,id:t.id,name:t.projectName,desc:t.projectDesc,tags:t.tags,code:t.code,demo:t.demo,image:t.image},t.id)}))}),Ge.length>3&&Object(h.jsx)("div",{className:"projects--viewAll",children:Object(h.jsx)(o.b,{to:"/projects",children:Object(h.jsxs)("button",{className:t.viewAllBtn,children:["View All",Object(h.jsx)(N.a,{className:t.viewArr})]})})})]})]})})},Xe=a(91);a(162);var _e=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(r.useContext)(g).theme;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?c(!0):e<=300&&c(!1)}));var n=Object(S.a)((function(){return{icon:{fontSize:"3rem",color:s.tertiary}}}))();return Object(h.jsx)("div",{style:{display:a?"inline":"none"},className:"backToTop",children:Object(h.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Back to top",children:Object(h.jsx)(Xe.a,{className:n.icon})})})};var $e=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y.a,{children:Object(h.jsxs)("title",{children:[E.name," - Porfolio"]})}),Object(h.jsx)(L,{}),Object(h.jsx)(Y,{}),Object(h.jsx)(J,{}),Object(h.jsx)(xe,{}),Object(h.jsx)(Ue,{}),Object(h.jsx)(Ee,{}),Object(h.jsx)(Se,{}),Object(h.jsx)(ke,{}),Object(h.jsx)(Ve,{}),Object(h.jsx)(z,{})]})},et=a(200);a(163);var tt=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(r.useContext)(g).theme,n=Ge.filter((function(e){return(e.projectName+e.projectDesc+e.tags).toLowerCase().includes(a.toLowerCase())})),i=Object(S.a)((function(e){return{search:Object(O.a)({color:s.tertiary,width:"40%",height:"2.75rem",outline:"none",border:"none",borderRadius:"20px",padding:"0.95rem 1rem",fontFamily:"'Noto Sans TC', sans-serif",fontWeight:500,fontSize:"0.9rem",backgroundColor:s.secondary,boxShadow:"dark"===s.type?"inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060":"inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030","&::placeholder":{color:s.tertiary80}},e.breakpoints.down("sm"),{width:"350px"}),home:Object(O.a)({color:s.secondary,position:"absolute",top:25,left:25,padding:"7px",borderRadius:"50%",boxSizing:"content-box",fontSize:"2rem",cursor:"pointer",boxShadow:(s.type,"3px 3px 6px #ffffff40, -3px -3px 6px #00000050"),transition:"all 0.3s ease-in-out","&:hover":{color:s.tertiary,transform:"scale(1.1)"}},e.breakpoints.down("sm"),{fontSize:"1.8rem"})}}))();return Object(h.jsxs)("div",{className:"projectPage",style:{backgroundColor:s.secondary},children:[Object(h.jsx)(y.a,{children:Object(h.jsxs)("title",{children:[E.name," | Projects"]})}),Object(h.jsxs)("div",{className:"projectPage-header",style:{backgroundColor:s.primary},children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)(We.b,{className:i.home})}),Object(h.jsx)("h1",{style:{color:s.secondary},children:"Projects"})]}),Object(h.jsxs)("div",{className:"projectPage-container",children:[Object(h.jsx)("div",{className:"projectPage-search",children:Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Search project...",className:i.search})}),Object(h.jsx)("div",{className:"project-container",children:Object(h.jsx)(et.a,{className:"project-grid",container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:n.map((function(e){return Object(h.jsx)(Ke,{theme:s,id:e.id,name:e.projectName,desc:e.projectDesc,tags:e.tags,code:e.code,demo:e.demo,image:e.image},e.id)}))})})]})]})};var at=Object(i.g)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),null}));a(164);var rt=function(){return Object(r.useContext)(g).theme,Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)(o.a,{children:[Object(h.jsx)(at,{}),Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",exact:!0,component:$e}),Object(h.jsx)(i.b,{path:"/projects",exact:!0,component:tt}),Object(h.jsx)(i.a,{to:"/"})]})]}),Object(h.jsx)(_e,{})]})};a(165),a(166);n.a.render(Object(h.jsx)(x,{children:Object(h.jsx)(rt,{})}),document.getElementById("root"))},67:function(e,t,a){},68:function(e,t,a){}},[[167,1,2]]]);
//# sourceMappingURL=main.97f4d628.chunk.js.map