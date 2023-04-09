"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{8997:function(e,n,t){t.d(n,{H:function(){return l}});var o=t(2111),r=t(7729),i=t.n(r),s=t(5632);function l(e){var n;let{url:t="https://tamagui.dev",pathname:r,title:l="Tamagui",description:a="",poster:d,...u}=e,c=(0,s.useRouter)(),k=null!==(n=u.image)&&void 0!==n?n:d?"".concat(t,"/").concat(d):"".concat(t,"/social.png"),h=r||c.asPath;return(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:l}),(0,o.jsx)("meta",{name:"description",content:a}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,o.jsx)("meta",{property:"og:url",content:"".concat(t).concat(h)}),(0,o.jsx)("meta",{property:"og:title",content:l}),(0,o.jsx)("meta",{property:"og:description",content:a}),(0,o.jsx)("meta",{property:"og:image",content:k}),(0,o.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}t(2784)},4959:function(e,n,t){t.d(n,{E:function(){return c}});var o=t(2111),r=t(2685),i=t(4176),s=t(2137),l=t(4583),a=t(2784),d=t(2832);(0,r.Gy)({Image:d.Z});let u=(0,i.z)(d.Z,{name:"Image",position:"relative",source:{uri:""},zIndex:1}),c=u.extractable((0,a.forwardRef)((e,n)=>{let t=(0,s.lA)(e),{src:r,source:i,...a}=t,d="string"==typeof r?{uri:r,...l.$L&&{width:t.width,height:t.height}}:null!=i?i:r;return(0,o.jsx)(u,{ref:n,source:d,...a})}));c.getSize=d.Z.getSize,c.getSizeWithHeaders=d.Z.getSizeWithHeaders,c.prefetch=d.Z.prefetch,c.prefetchWithMetadata=d.Z.prefetchWithMetadata,c.abortPrefetch=d.Z.abortPrefetch,c.queryCache=d.Z.queryCache},2506:function(e,n,t){t.d(n,{HC:function(){return b}});var o=t(2111),r=t(4176),i=t(2137),s=t(8768),l=t(6086),a=t(7376),d=t(9415),u=t(3237),c=t(5361),k=t(3235),h=t(3017),x=t(5721),f=t(9130),p=t(7813),j=t(2784);let m="ListItem",L=(0,r.z)(h.K,{name:m,tag:"li",variants:{unstyled:{false:{size:"$true",alignItems:"center",flexWrap:"nowrap",width:"100%",borderColor:"$borderColor",maxWidth:"100%",overflow:"hidden",flexDirection:"row",backgroundColor:"$backgroundStrong"}},size:{"...size":(e,n)=>{let{tokens:t}=n;return{minHeight:t.size[e],paddingHorizontal:t.space[e],paddingVertical:(0,k.getSpace)(e,-2)}}},active:{true:{hoverStyle:{backgroundColor:"$background"}}},disabled:{true:{opacity:.5,pointerEvents:"none"}}},defaultVariants:{unstyled:!1}}),y=(0,r.z)(f.J,{name:"ListItemText",variants:{unstyled:{false:{color:"$color",userSelect:"none",flexGrow:1,flexShrink:1,ellipse:!0,cursor:"default"}}},defaultVariants:{unstyled:!1}}),g=(0,r.z)(y,{name:"ListItemSubtitle",variants:{unstyled:{false:{opacity:.6,maxWidth:"100%",size:"$3",color:"$color"}}},defaultVariants:{unstyled:!1}}),v=(0,r.z)(y,{name:"ListItemTitle"}),$=function(e){var n;let{Text:t=y,Subtitle:r=g,Title:d=v}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{Text:y,Subtitle:g,Title:v},{children:u,icon:h,iconAfter:f,noTextWrap:j,theme:m,space:L,spaceFlex:$,scaleIcon:w=1,scaleSpace:W=1,subTitle:b,color:z,fontWeight:H,letterSpacing:C,fontSize:S,fontFamily:B,textAlign:N,textProps:I,title:F,...Z}=e,A=(0,i.lA)(e),T=A.size||"$true",R="$".concat(+String(T).replace("$","")-1),E=(0,c.yv)(T)*w,P=(0,k.useGetThemedIcon)({size:E,color:z}),[V,_]=[h,f].map(P),U=(0,s.Ve)(null!==(n=(0,l.lz)().space[A.space])&&void 0!==n?n:E)*W,K=(0,p.k)(t,A);return{props:{fontFamily:B,...Z,children:(0,o.jsxs)(o.Fragment,{children:[V?(0,o.jsxs)(o.Fragment,{children:[V,(0,o.jsx)(a.LZ,{size:U})]}):null,F||b?(0,o.jsxs)(x.FA,{flex:1,children:["all"===j?F:(0,o.jsx)(d,{size:T,children:F}),b?(0,o.jsx)(o.Fragment,{children:"string"==typeof b&&"all"!==j?(0,o.jsx)(r,{size:R,children:b}):b}):null,K]}):K,_?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.LZ,{size:U}),_]}):null]})}}},w=(0,j.forwardRef)((e,n)=>{let{props:t}=$(e);return(0,o.jsx)(L,{ref:n,justifyContent:"space-between",...t})}),W={inlineProps:new Set(["color","fontWeight","fontSize","fontFamily","letterSpacing","textAlign"])},b=(0,d.$)(L.extractable((0,u.Y)(w,{componentName:m}),W),{Text:y,Subtitle:g})},6235:function(e,n,t){t.d(n,{r:function(){return l}});var o=t(2111),r=t(4583),i=t(5721),s=t(2784);function l(e){let{children:n,columns:t,itemMinWidth:l=200,gap:a}=e;if(r.$L)return(0,o.jsx)("div",{style:{gap:a,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(l,"px, 1fr) )")},children:n});let d=s.Children.toArray(n);return(0,o.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:d.map((e,n)=>e?(0,o.jsx)(i.sL,{flex:1,minWidth:l,marginRight:a,marginBottom:a,children:e},n):null)})}},858:function(e,n,t){t.d(n,{Zb:function(){return h}});var o=t(2111),r=t(3017),i=t(4176),s=t(9415),l=t(9694),a=t(2784);let d=(0,i.z)(r.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(e,{tokens:n})=>({borderRadius:n.radius[e]??e})}},defaultVariants:{size:"$true"}}),u=(0,i.z)(r.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(e,{tokens:n})=>({padding:n.space[e]??e})}}}),c=(0,i.z)(u,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),k=(0,i.z)(r.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),h=(0,s.$)(d.extractable((0,a.forwardRef)(({size:e,__scopeCard:n,children:t,...r},i)=>(0,o.jsx)(d,{ref:i,...r,children:a.Children.map(t,n=>(0,l.y)(n)&&!n.props.size?(0,a.cloneElement)(n,{size:e}):n)}))),{Header:u,Footer:c,Background:k})},848:function(e,n,t){t.d(n,{Q:function(){return u}});var o=t(2111),r=t(65),i=t(4128),s=t(3554),l=t(3284),a=t(4729),d=t(9145);function u(e){let[n,t]=(0,s.T)({strategy:"most-recent-wins",prop:e.position,defaultProp:0}),u=c[n],k=(0,l.z)(()=>{t(e=>(e+1)%c.length)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.b,{animation:e.animation||"bouncy",onPress:k,size:104,borderColor:"$borderColor",borderWidth:1,borderRadius:"$9",backgroundColor:"$color9",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...u,children:e.children||(0,o.jsx)(r.K7,{downscale:.75})}),(0,o.jsx)(d.zx,{position:"absolute",bottom:20,left:20,icon:i.s,theme:e.tint,size:"$5",circular:!0,onPress:k})]})}let c=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},5189:function(e,n,t){t.d(n,{O:function(){return s},q:function(){return l}});var o=t(2784),r=t(4583),i=t(3284);function s(e,{once:n,...t}={}){let[i,s]=(0,o.useState)([]);return r.$L&&l(e,e=>{let t=e.some(e=>null==e?void 0:e.isIntersecting);(!n||t)&&s(n=>{let t=e.map(e=>(null==e?void 0:e.isIntersecting)??!1);return n.length===t.length&&n.every((e,n)=>e===t[n])?n:t})},t),Array.isArray(e)?i:i[0]}function l(e,n,{threshold:t=0,root:r,rootMargin:s}={},l=[]){let a=(0,i.z)(n);(0,o.useEffect)(()=>{let n=Array.isArray(e)?e:[e];if(!n.length)return;let o=null,i=[],l=new IntersectionObserver(e=>{i=n.map((n,t)=>e.find(e=>e.target===n.current)??i[t]??null),null==o||o(),o=a(i)||null},{threshold:t,root:r,rootMargin:s});for(let e of n)e.current&&l.observe(e.current);return()=>{null==o||o(),l.disconnect()}},[a,e,r,s,t,...l])}},2029:function(e,n,t){t.d(n,{K:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="ArrowDown";let a=(0,r.memo)((0,s.H)(l))},5503:function(e,n,t){t.d(n,{J:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.aH,{points:"20 6 9 17 4 12",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Check";let a=(0,r.memo)((0,s.H)(l))},1255:function(e,n,t){t.d(n,{s:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="ChevronLeft";let a=(0,r.memo)((0,s.H)(l))},9941:function(e,n,t){t.d(n,{_:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="ChevronRight";let a=(0,r.memo)((0,s.H)(l))},3161:function(e,n,t){t.d(n,{E:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Code";let a=(0,r.memo)((0,s.H)(l))},3557:function(e,n,t){t.d(n,{C:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Copy";let a=(0,r.memo)((0,s.H)(l))},5920:function(e,n,t){t.d(n,{x:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"9",y1:"2",x2:"9",y2:"4",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"15",y1:"2",x2:"15",y2:"4",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"9",y1:"21",x2:"9",y2:"22",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"22",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"20",y1:"9",x2:"22",y2:"9",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"20",y1:"14",x2:"22",y2:"14",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"2",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.x1,{x1:"2",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Cpu";let a=(0,r.memo)((0,s.H)(l))},2930:function(e,n,t){t.d(n,{N:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="FastForward";let a=(0,r.memo)((0,s.H)(l))},273:function(e,n,t){t.d(n,{S:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Layers";let a=(0,r.memo)((0,s.H)(l))},1190:function(e,n,t){t.d(n,{H:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Lock";let a=(0,r.memo)((0,s.H)(l))},7576:function(e,n,t){t.d(n,{$:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.y$,{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="MapPin";let a=(0,r.memo)((0,s.H)(l))},6935:function(e,n,t){t.d(n,{d:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Pause";let a=(0,r.memo)((0,s.H)(l))},4128:function(e,n,t){t.d(n,{s:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Play";let a=(0,r.memo)((0,s.H)(l))},5032:function(e,n,t){t.d(n,{F:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsxs)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,o.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};l.displayName="Rewind";let a=(0,r.memo)((0,s.H)(l))},2800:function(e,n,t){t.d(n,{U:function(){return a}});var o=t(2111),r=t(2784),i=t(3398),s=t(1618);let l=e=>{let{color:n="black",size:t=24,...r}=e;return(0,o.jsx)(i.ny,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,o.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};l.displayName="Star";let a=(0,r.memo)((0,s.H)(l))}}]);