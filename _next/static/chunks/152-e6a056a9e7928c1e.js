(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{381:function(e,t,r){"use strict";var o=r(1706),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,s,a,_,l,n,d=!1;t||(t={}),r=t.debug||!1;try{if(a=o(),_=document.createRange(),l=document.getSelection(),(n=document.createElement("span")).textContent=e,n.ariaHidden="true",n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=i[t.format]||i.default;window.clipboardData.setData(s,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(n),_.selectNodeContents(n),l.addRange(_),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(b){r&&console.error("unable to copy using execCommand: ",b),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(b){r&&console.error("unable to copy using clipboardData: ",b),r&&console.error("falling back to prompt"),s=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(s,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(_):l.removeAllRanges()),n&&document.body.removeChild(n),a()}return d}},250:function(e,t,r){"use strict";r.r(t)},1732:function(e,t,r){"use strict";r.r(t)},219:function(e,t,r){"use strict";r.r(t)},5929:function(e,t,r){"use strict";r.r(t)},989:function(e,t,r){"use strict";r.r(t)},1288:function(e,t,r){"use strict";r.r(t)},853:function(e,t,r){"use strict";r.r(t)},6398:function(e,t,r){"use strict";r.r(t)},1185:function(e,t,r){"use strict";r.r(t)},2760:function(e,t,r){"use strict";r.r(t)},6709:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});var o=r(7328),i=r(6670),s=r(2322),a=(r(2784),r(5300)),_=r(6486);const l=e=>{switch(e){case"Tamagui (No Compiler)":case"Tamagui":return"$pink9";case"Stitches":return"$yellow9";case"Stitches 0.1.9":return"$yellow4";case"Styled Components":case"SC":return"$red9";case"react-native-web":case"RN":case"RNW":case"React Native":return"$purple9";case"Emotion":return"$green9";case"Dripsy":return"$blue9";case"NativeBase":return"$orange9";default:return"gray"}};function n(e){let{data:t,large:r,skipOthers:n=!1,animateEnter:d=!1}=e;const b=Math.max(...t.map((e=>e.value)));return(0,s.jsx)(a.FA,{space:"$2",marginTop:"_mt-1aj14ak",marginBottom:"_mb-1aj14ak",children:t.map(((e,t)=>{const n="".concat(e.value/b*100,"%");return(0,s.jsxs)(a.sL,{space:"$3",children:[(0,s.jsx)("div",{className:(0,_.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  "+(r?" _w-120px":" _w-70px")),children:(0,s.jsx)("p",{className:(0,_.concatClassName)("  is_Paragraph font_body _cur-text _ussel-text _ww-break-word _bxs-border-box _dsp-inline  _mb--3px _mt--3px _ta-right _whiteSpace-nowrap _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz  "+("Tamagui"===e.name?" _fow-700":" _fow-400")),children:e.name},e.name)}),(0,s.jsx)("div",{className:"  is_XStack _fg-1 _mr-65px _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-center ",children:(0,s.jsx)(a.FA,(0,i.Z)((0,o.Z)({bc:l(e.name),o:(e.name,1),width:n,height:20,br:"$2",position:"relative",jc:"center",scaleX:1,animation:"lazy"},d&&{enterStyle:{scaleX:0}}),{children:(0,s.jsxs)("p",{className:"  is_Paragraph font_body _transform-1hmnzav _r-lrpkci _pos-absolute _whiteSpace-nowrap _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcbz _ls-3oolt0 _fos-3slpwn _lh-3or5r4 _ww-break-word _bxs-border-box _dsp-inline ",children:[e.value,"ms"]})}))})]},t)}))})}r(250)},1497:function(e,t,r){"use strict";r.d(t,{F:function(){return s}});var o=r(2322),i=(r(2784),r(6709));const s=()=>(0,o.jsx)(i.i,{animateEnter:!0,skipOthers:!0,large:!0,data:[{name:"Tamagui",value:.02},{name:"react-native-web",value:.063},{name:"Dripsy",value:.108},{name:"NativeBase",value:.73}]})},3548:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var o=r(2322),i=r(5503);r(2784);const s=()=>(0,o.jsx)("div",{className:"  is_YStack _mr-lrpjp9 _bblr-100px _bbrr-100px _btrr-100px _btlr-100px _jc-center _h-25px _w-25px _bg-8htuv0 _mt-2px _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:(0,o.jsx)(i.J,{size:12,color:"var(--colorHover)"})});r(1732)},773:function(e,t,r){"use strict";r.d(t,{E:function(){return s},w:function(){return a}});var o=r(1560),i=r(7855);const s=(0,o.z)(i.Paragraph,{name:"Code",tag:"code",fontFamily:"$mono",size:"$3",variants:{colored:{true:{color:"$color",backgroundColor:"$background"}}},borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj147z",paddingRight:"_pr-1aj147z",paddingBottom:"_pb-1aj147z",paddingLeft:"_pl-1aj147z",whiteSpace:"_whiteSpace-pre",cursor:"_cur-inherit",lineHeight:"_lh-20px"}),a=(0,o.z)(i.Paragraph,{name:"CodeInline",tag:"code",fontFamily:"$mono",paddingTop:"_pt-lrpjoe",paddingRight:"_pr-lrpjoe",paddingBottom:"_pb-lrpjoe",paddingLeft:"_pl-lrpjoe",fontSize:"_fos-inherit",borderTopLeftRadius:"_btlr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderBottomLeftRadius:"_bblr-lmimb3",cursor:"_cur-inherit",backgroundColor:"_bg-180kg62",color:"_col-rnt87j"});r(219)},815:function(e,t,r){"use strict";r.d(t,{s:function(){return c}});var o=r(7328),i=r(6670),s=r(6297),a=r(2322),_=(r(2784),r(1077)),l=r(5300),n=r(773),d=r(2897),b=r(6486);function c(e){var{source:t,language:r}=e,c=(0,s.Z)(e,["source","language"]);return(0,a.jsx)(l.FA,(0,i.Z)((0,o.Z)({borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",flexShrink:"_fs-1",flexGrow:"_fg-1",borderRightStyle:"_borderRightStyle-solid",borderLeftStyle:"_borderLeftStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderBottomStyle:"_borderBottomStyle-solid",borderLeftWidth:"_blw-1px",borderBottomWidth:"_bbw-1px",borderRightWidth:"_brw-1px",borderTopWidth:"_btw-1px",overflowY:"_overflowY-hidden",overflowX:"_overflowX-hidden",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",backgroundColor:"_bg-8htuv0"},c),{className:(0,b.concatClassName)(("language-".concat(r)||0)+" "+(c&&c.className||""),c),children:(0,a.jsx)(_.Z,{contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,a.jsx)(_.Z,{horizontal:!0,contentContainerStyle:{flex:1},showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,children:(0,a.jsx)(d.S,{f:1,children:(0,a.jsx)(n.E,{dangerouslySetInnerHTML:{__html:t}})})})})}))}r(5929)},5147:function(e,t,r){"use strict";r.d(t,{q:function(){return R},M:function(){return S}});var o=r(2322),i=r(6361),s=r(1428),a=r(2029),_=r(9097),l=r.n(_),n=r(2784),d=r(5300),b=r(9145),c=r(2341),p=r(7328),m=r(8682),x=r(1309);const f=e=>{const{tint:t}=(0,x.d5)();return(0,o.jsx)(m.Q,(0,p.Z)({tint:t},e))};var h=r(815),u=r(5437),g=r(7219),w=r(6486);const v="  is_YStack",y="  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",j=[{name:"Bouncy",description:"A bouncy spring",animation:"bouncy",settings:i.s.animations.bouncy},{name:"Lazy",description:"A lazy, straightforward spring",animation:"lazy",settings:i.s.animations.lazy},{name:"Quick",description:"A super fast spring",animation:"quick",settings:i.s.animations.quick}];let k=!1;function S(e){let{animationCode:t}=e;const{tint:r}=(0,x.d5)(),{0:i,1:s}=(0,n.useState)(!0);return(0,o.jsx)("div",{className:y,children:(0,o.jsxs)(u._k,{position:"relative",space:"$8",children:[(0,o.jsxs)(d.FA,{zIndex:"_zi-1",space:"$3",children:[(0,o.jsxs)(g.PP,{pos:"relative",children:["Universal ",(0,o.jsx)("span",{className:"rainbow clip-text",children:"Animations"})]}),(0,o.jsx)(g.vk,{children:"Better platform targeting with animation drivers that can be changed without changing code."})]}),(0,o.jsxs)("div",{className:"  is_XStack _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,o.jsx)(c.Q,{name:r,children:(0,o.jsx)("div",{className:"  is_YStack _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _zi-100 _bg-8htuv0 _mr-lrpkci _als-center _fg-2 _fd-column _miw-5511 _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch _bxsh-asvu26 ",children:(0,o.jsx)(R,{})})}),(0,o.jsxs)("div",{className:"  is_YStack _transform-1rgx1si _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _overflowY-hidden _overflowX-hidden _bblr-lmimfe _bbrr-lmimfe _btrr-lmimfe _btlr-lmimfe _pos-relative _bxsh-1duix2k _dsp-_sm_none ",children:[(0,o.jsxs)("div",{className:(0,w.concatClassName)(v+" _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0  _jc-center _ai-center _pos-absolute _t-0px _l-0px _r-0px _b-0px  "+(i?" _o-1 _pe-auto":" _o-0 _pe-none")),children:[(0,o.jsx)("div",{className:"  is_YStack _o-0dot5 _t-6011 _pos-absolute _l-0px _r-0px _b-0px _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "}),(0,o.jsx)(b.zx,{accessibilityLabel:"View more",transform:"_transform-1m3rtws",iconAfter:a.K,size:"$4",paddingRight:"_pr-1aj14ak",paddingLeft:"_pl-1aj14ak",height:"_h-a0wku7",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",themeInverse:!0,zIndex:"_zi-10",onPress:()=>s(!1),children:"View more"})]}),(0,o.jsx)(h.s,{pe:i?"none":"auto",maxHeight:500,height:500,maxWidth:530,minWidth:530,language:"tsx",source:t})]})]}),(0,o.jsxs)(d.sL,{alignSelf:"_als-center",space:"$3",children:[(0,o.jsx)(l(),{href:"/docs/core/animations#css",passHref:!0,children:(0,o.jsx)(b.zx,{accessibilityLabel:"CSS docs",fontFamily:"$silkscreen",theme:r,tag:"a",children:"CSS \xbb"})}),(0,o.jsx)(l(),{href:"/docs/core/animations#reanimated",passHref:!0,children:(0,o.jsx)(b.zx,{accessibilityLabel:"Reanimated docs",fontFamily:"$silkscreen",tag:"a",children:"Reanimated \xbb"})}),(0,o.jsx)(l(),{href:"/docs/core/animations",passHref:!0,children:(0,o.jsx)(b.zx,{accessibilityLabel:"Animation docs",fontFamily:"$silkscreen",tag:"a",children:"Docs \xbb"})})]})]})})}const R=(0,n.memo)((()=>{const{0:e,1:t}=(0,n.useState)(0),r=j[e],i=(0,n.useRef)(null),{0:a,1:_}=(0,n.useState)(2),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;_((t=>(t+e)%3))},d="string"===typeof r.settings?[["transition",r.settings]]:Object.entries(r.settings);return(0,s.q)(i,(e=>{let[t]=e;if(null===t||void 0===t?void 0:t.isIntersecting){const e=e=>{"ArrowRight"===e.key&&l(),"ArrowLeft"===e.key&&l(-1)};return k||(k=!0,l()),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}})),(0,o.jsxs)("div",{className:"  is_XStack _transform-199k8sv _als-center _h-305px _overflowY-hidden _overflowX-hidden _bblr-lmimby _bbrr-lmimby _btrr-lmimby _btlr-lmimby _w-10011 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _borderRightStyle-solid _borderLeftStyle-solid _borderTopStyle-solid _borderBottomStyle-solid _blw-1px _bbw-1px _brw-1px _btw-1px _fd-1b2fkz3 _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _bxsh-9enu5w ",children:[(0,o.jsx)("div",{ref:i,className:"  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _w-6011 _jc-center _ai-center _bg-180kg62 _pos-relative _w-_sm_10011 ",children:(0,o.jsx)(f,{position:a,animation:r.animation})}),(0,o.jsx)("div",{className:"  is_Separator _transform-cx1iw7 _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _borderBottomStyle-solid _borderRightStyle-solid _fg-1 _borderLeftStyle-solid _borderTopStyle-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch "}),(0,o.jsxs)("div",{className:"  is_YStack _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch _w-4011 _dsp-_sm_none ",children:[(0,o.jsx)(c.Q,{name:"alt2",children:(0,o.jsx)("div",{className:"  is_YStack _bg-cbjnf9 _zi--1 _pos-absolute _t-0px _l-0px _r-0px _b-0px _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch "})}),(0,o.jsx)("div",{className:"  is_YStack _fg-1 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:j.map(((e,i)=>{const s=e===r;return(0,o.jsx)(c.Q,{name:s?"active":"alt2",children:(0,o.jsxs)("div",{onClick:()=>{t(i),l()},className:(0,w.concatClassName)(v+" _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _cur-pointer _pb-1aj148u _pt-1aj148u _pr-1aj14ak _pl-1aj14ak  "+(s?"  _bg-8htuv0":" ")),children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _fow-800 _mb-lrpkbn _cur-inherit _ussel-none _col-b5vn3b _ff-4yewjq _ls-3ooluq _fos-3slpyd _lh-3or5su _ww-break-word _bxs-border-box _dsp-inline ",children:e.name}),(0,o.jsx)("p",{className:"  is_Paragraph font_body _col-vhj0rs _maw-10011 _overflowX-hidden _overflowY-hidden _textOverflow-ellipsis _whiteSpace-nowrap _cur-inherit _ussel-none _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz _ww-break-word _bxs-border-box _dsp-inline ",children:e.description})]})},e.name)}))}),(0,o.jsx)("div",{className:"  is_Separator _transform-n24na2 _mah-0px _h-0px _fg-1 _borderRightStyle-solid _borderLeftStyle-solid _borderTopStyle-solid _borderBottomStyle-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch "}),(0,o.jsx)("div",{className:"  is_XStack _jc-center _pl-1aj14ak _pb-1aj14ak _pr-1aj14ak _pt-1aj14ak _bg-180kg62 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-center ",children:d.map(((e,t)=>{let[r,i]=e;return"type"===r?null:(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)("div",{className:y,children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqccu _ls-3ooltv _fos-3slpxi _lh-3or5rz _ww-break-word _bxs-border-box _dsp-inline ",children:r}),(0,o.jsx)("p",{className:"  is_Paragraph font_body _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcek _ls-3oolvl _fos-3slpz8 _lh-3or5tp _ww-break-word _bxs-border-box _dsp-inline ",children:i})]}),t<d.length-1&&(0,o.jsx)("div",{className:"  is_Separator _ml-15px _mr-15px _transform-cx1iw7 _h-initial _mah-initial _w-0px _maw-0px _bbw-0px _brw-1px _borderBottomStyle-solid _borderRightStyle-solid _fg-1 _borderLeftStyle-solid _borderTopStyle-solid _blw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch "})]},r)}))})]})]})}));r(989)},1542:function(e,t,r){"use strict";r.d(t,{D:function(){return w}});var o=r(7328),i=r(2322),s=r(2930),a=r(2784),_=r(5300),l=r(1662),n=r(9145),d=r(815),b=r(5437),c=r(7219),p=r(6566),m=r(1309),x=r(6486),f=r(2341);const h="  is_Paragraph font_body _pl-1aj14ca _pr-1aj14ca _ta-center _mih-50px _als-center _maw-480px _mb-1aj14ak _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _fow-3uqcff _ls-3oolwg _fos-3slq03 _lh-3or5uk _ww-break-word _bxs-border-box _dsp-inline ",u="  is_H5 font_heading _als-center _col-qpe6k3 _tt-3tb9i2 _ff-4yewjq _fow-3uqcga _ls-3oolxb _fos-3slq0y _lh-3or5vf _ml-0px _mb-0px _mr-0px _mt-0px _cur-text _ussel-text _ww-break-word _bxs-border-box _dsp-inline ",g="  _maw-_sm_10011";function w(e){let{examples:t,onlyDemo:r}=e;const{tint:d}=(0,m.d5)(),{0:w,1:y}=(0,a.useState)(0),j=t[w];return(0,i.jsx)(b._k,{position:"relative",children:(0,i.jsxs)(_.FA,{zIndex:"_zi-1",space:"$6",children:[!r&&(0,i.jsxs)(_.FA,{alignItems:"_ai-center",space:"$3",children:[(0,i.jsx)(c.PP,{children:"A better style system"}),(0,i.jsxs)(c.vk,{tag:"a",ai:"center",jc:"center",children:["A multi-faceted optimizing compiler enables",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:["SSR-first atomic CSS","eliminating inline style logic","flattening your component tree","removing dead code entirely"][w]}),"."]})]}),(0,i.jsx)(l.E4,{scrollable:!0,bordered:!0,borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_borderLeftStyle-solid",borderRightStyle:"_borderRightStyle-solid",chromeless:!0,backgroundColor:"_bg-16hdpw2",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",shadowColor:"_shac-16hdpw2",theme:d,alignSelf:"_als-center",maxWidth:"_maw-10011",children:t.map(((e,t)=>(0,i.jsx)(n.zx,{accessibilityLabel:"See example",onPress:()=>y(t),theme:t===w?"active":null,size:"$4",paddingRight:"_pr-1aj14ak",paddingLeft:"_pl-1aj14ak",height:"_h-a0wku7",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",fontFamily:"$silkscreen",chromeless:!0,backgroundColor:"_bg-16hdpw2",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",shadowColor:"_shac-16hdpw2",className:(0,x.concatClassName)(t===w?" _o-1":" _o-0dot5"),children:e.name},t)))}),(0,i.jsxs)("div",{className:(0,x.concatClassName)("  is_XStack _jc-7aqssh _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch  _fd-_sm_column "+(r?"  _fd-column":" ")),children:[(0,i.jsxs)(_.FA,{maxWidth:"_maw-5011",flexGrow:"_fg-1",flexShrink:"_fs-1",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",space:"$2",className:(0,x.concatClassName)((r?"  _maw-10011":" ")+g),children:[(0,i.jsx)("h5",{className:u,children:"Input"}),(0,i.jsx)("p",{className:h,children:(0,i.jsx)("span",{style:{opacity:.65},children:j.input.description})}),(0,i.jsx)(v,(0,o.Z)({},j.input))]},"input".concat(w)),(0,i.jsx)(f.Q,{name:"alt2",children:(0,i.jsx)("div",{className:(0,x.concatClassName)("  is_YStack _fd-column _miw-0px _mih-0px _bxs-border-box _fb-auto _dsp-flex _fs-0  _pe-none _zi-1000 _t-95px _jc-center _ai-center _r-0px _l-0px _pos-absolute  _dsp-_sm_none "+(r?"  _dsp-none":" ")),children:(0,i.jsx)(p.b,{als:"center",p:"$3",mb:0,children:(0,i.jsx)(s.N,{color:"var(--colorHover)",size:22})})})}),(0,i.jsxs)(_.FA,{maxWidth:"_maw-5011",flexGrow:"_fg-1",flexShrink:"_fs-1",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",space:"$2",className:(0,x.concatClassName)((r?"  _mt-1aj14ca _maw-10011":" ")+"  _mt-_sm_1aj14ca"+g),children:[(0,i.jsx)("h5",{className:u,children:"Output"}),(0,i.jsx)("p",{className:h,children:(0,i.jsx)("span",{style:{opacity:.65},children:j.output.description})}),(0,i.jsx)(v,(0,o.Z)({},j.output))]},"output".concat(w))]})]})})}const v=(0,a.memo)((e=>{let{examples:t}=e;const{0:r,1:o}=(0,a.useState)(0),s=t[r],{tint:_}=(0,m.d5)();return(0,i.jsxs)("div",{className:"  is_YStack _fg-1 _overflowY-hidden _overflowX-hidden _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:[(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.E4,{size:"$2",borderTopLeftRadius:"_btlr-lmima8",borderTopRightRadius:"_btrr-lmima8",borderBottomRightRadius:"_bbrr-lmima8",borderBottomLeftRadius:"_bblr-lmima8",theme:_,bordered:!0,alignSelf:"_als-center",marginBottom:"_mb-lrpkdd",zIndex:"_zi-10",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_borderLeftStyle-solid",borderRightStyle:"_borderRightStyle-solid",children:t.map(((e,t)=>(0,i.jsx)(n.zx,{accessibilityLabel:"See example",onPress:()=>o(t),theme:t===r?"active":"alt1",borderTopLeftRadius:"_btlr-lmim8i",borderTopRightRadius:"_btrr-lmim8i",borderBottomRightRadius:"_bbrr-lmim8i",borderBottomLeftRadius:"_bblr-lmim8i",children:e.name},t)))})}),(0,i.jsx)("div",{className:"  is_XStack _fg-1 _maw-10011 _fd-row _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:(0,i.jsx)("div",{className:"  is_YStack _o-0hover-1 _o-0dot9 _maw-10011 _fg-1 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-1 _ai-stretch ",children:(0,i.jsx)(d.s,{height:300,theme:"Card",maxHeight:300,f:1,language:s.language,source:s.code})})})]})}));r(1288)},7219:function(e,t,r){"use strict";r.d(t,{PP:function(){return a},t_:function(){return s},vk:function(){return _}});var o=r(1560),i=r(7855);const s=(0,o.z)(i.H1,{className:"word-break-keep-all",size:"$9","color-gtSm":"_col-_gtSm_b5vn3b","textTransform-gtSm":"_tt-_gtSm_1b7l12b","fontFamily-gtSm":"_ff-_gtSm_4yewjq","fontWeight-gtSm":"_fow-_gtSm_1cfkkj7","letterSpacing-gtSm":"_ls-_gtSm_1782q72","fontSize-gtSm":"_fos-_gtSm_1all9bv","lineHeight-gtSm":"_lh-_gtSm_17a9wki","maxWidth-gtSm":"_maw-_gtSm_9011",marginBottom:"_mb-1aj148u"}),a=(0,o.z)(i.H2,{className:"word-break-keep-all",name:"HomeH2",size:"$11","color-xs":"_col-_xs_b5vn3b","textTransform-xs":"_tt-_xs_3tb9kn","fontFamily-xs":"_ff-_xs_4yewjq","fontWeight-xs":"_fow-_xs_3uqciv","letterSpacing-xs":"_ls-_xs_3oolzw","fontSize-xs":"_fos-_xs_3slq3j","lineHeight-xs":"_lh-_xs_3or5y0","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_1b7l12b","fontFamily-sm":"_ff-_sm_4yewjq","fontWeight-sm":"_fow-_sm_1cfkkj7","letterSpacing-sm":"_ls-_sm_1782q72","fontSize-sm":"_fos-_sm_1all9bv","lineHeight-sm":"_lh-_sm_17a9wki",marginTop:"_mt-lrpkci",maxWidth:"_maw-720px",alignSelf:"_als-center",textAlign:"_ta-center"}),_=(0,o.z)(i.H3,{className:"word-break-keep-all",fontFamily:"$body",name:"HomeH3",theme:"alt1",size:"$8","fontWeight-sm":"_fow-_sm_400","color-sm":"_col-_sm_b5vn3b","textTransform-sm":"_tt-_sm_none","fontFamily-sm":"_ff-_sm_4yewjq","letterSpacing-sm":"_ls-_sm_-015px1a","fontSize-sm":"_fos-_sm_3slq0y","lineHeight-sm":"_lh-_sm_3or5vf",maxWidth:"_maw-690px",letterSpacing:"_ls--015px1a",paddingRight:"_pr-20px",paddingLeft:"_pl-20px",fontWeight:"_fow-400",alignSelf:"_als-center",textAlign:"_ta-center"});r(853)},6566:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var o=r(1560),i=r(5300);const s=(0,o.z)(i.FA,{alignSelf:"_als-flex-start",paddingTop:"_pt-1aj148u",paddingRight:"_pr-1aj148u",paddingBottom:"_pb-1aj148u",paddingLeft:"_pl-1aj148u",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-100px",borderTopRightRadius:"_btrr-100px",borderBottomRightRadius:"_bbrr-100px",borderBottomLeftRadius:"_bblr-100px"});r(6398)},5890:function(e,t,r){"use strict";r.d(t,{S:function(){return g}});var o=r(7328),i=r(6670),s=r(6297),a=r(2322),_=r(5032),l=r(6935),n=r(2930),d=r(2784),b=r(2341),c=r(5947),p=r(5300),m=r(6186),x=r(9145),f="/_next/static/media/kanye.8a1ab422.jpg",h=r(6486);const u="  is_Paragraph font_body _col-rnt87j _cur-text _ussel-text _ff-4yewjq _fow-3uqcdp _ls-3ooluq _fos-3slpyd _lh-3or5su _ww-break-word _bxs-border-box _dsp-inline ",g=(0,d.memo)((e=>{var{theme:t,alt:r,onHoverSection:d,pointerEvents:g,pointerEventsControls:w}=e,v=(0,s.Z)(e,["theme","alt","onHoverSection","pointerEvents","pointerEventsControls"]);return(0,a.jsx)(b.Q,{name:r?"alt".concat(r):null,children:(0,a.jsxs)(c.Zb,(0,i.Z)((0,o.Z)({overflowX:"_overflowX-visible",overflowY:"_overflowY-visible",bordered:!0,borderBottomLeftRadius:"_bblr-lmimej",borderBottomRightRadius:"_bbrr-lmimej",borderTopRightRadius:"_btrr-lmimej",borderTopLeftRadius:"_btlr-lmimej",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_borderLeftStyle-solid",borderRightStyle:"_borderRightStyle-solid",pointerEvents:g,alignItems:"_ai-stretch",paddingTop:"_pt-0px",paddingRight:"_pr-0px",paddingBottom:"_pb-0px",paddingLeft:"_pl-0px"},v),{className:(0,h.concatClassName)(""+(v&&v.className||""),v),children:[(0,a.jsxs)(p.sL,{paddingLeft:"_pl-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingRight:"_pr-1aj14ak",paddingTop:"_pt-1aj14ak",alignItems:"_ai-center",space:"$5",children:[(0,a.jsx)("div",{className:"  is_Square _w-90px _h-90px _miw-90px _maw-90px _mah-90px _mih-90px _bblr-lmimdo _bbrr-lmimdo _btrr-lmimdo _btlr-lmimdo _overflowY-hidden _overflowX-hidden _bg-180kg62 _jc-center _ai-center _fd-column _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 ",children:(0,a.jsx)(m.E,{width:90,height:90,src:f})}),(0,a.jsxs)("div",{className:"  is_YStack _jc-center _mt--10px _fd-column _miw-165px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _fs-0 _ai-stretch ",children:[(0,a.jsx)("p",{className:"  is_Paragraph font_body _fow-700 _cur-text _ussel-text _col-b5vn3b _ff-4yewjq _ls-3oolvl _fos-3slpz8 _lh-3or5tp _ww-break-word _bxs-border-box _dsp-inline ",children:"Spaceship"}),(0,a.jsx)("p",{className:u,children:"Kanye West"}),(0,a.jsx)("p",{className:u,children:"College Dropout"})]})]}),(0,a.jsx)("div",{className:"  is_Separator _mb--1px _transform-n24na2 _mah-0px _h-0px _fg-1 _borderRightStyle-solid _borderLeftStyle-solid _borderTopStyle-solid _borderBottomStyle-solid _blw-0px _bbw-1px _brw-0px _btw-0px _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-column _miw-0px _mih-0px _pos-relative _bxs-border-box _fb-auto _dsp-flex _ai-stretch "}),(0,a.jsxs)(p.sL,{alignItems:"_ai-center",borderBottomLeftRadius:"_bblr-17px",borderBottomRightRadius:"_bbrr-17px",backgroundColor:"_bg-8htuv0",paddingBottom:"_pb-1aj14ak",paddingTop:"_pt-1aj14ak",paddingLeft:"_pl-1aj14ca",paddingRight:"_pr-1aj14ca",width:"_w-10011",zIndex:"_zi-1000",space:"$5",justifyContent:"_jc-center",pointerEvents:g,children:[(0,a.jsx)(_.F,{size:20}),(0,a.jsx)(x.zx,{bordered:!0,"borderTopColor-hover":"_btc-0hover-1byp41v","borderRightColor-hover":"_brc-0hover-1byp41v","borderBottomColor-hover":"_bbc-0hover-1byp41v","borderLeftColor-hover":"_blc-0hover-1byp41v","transform-hover":"_transform-0hover-1g5rx3l","boxShadow-hover":"_bxsh-0hover-13vh14k","borderTopColor-active":"_btc-0active-1fsewm4","borderRightColor-active":"_brc-0active-1fsewm4","borderBottomColor-active":"_bbc-0active-1fsewm4","borderLeftColor-active":"_blc-0active-1fsewm4",marginBottom:"_mb-lrpkgt",marginTop:"_mt-lrpkgt",borderTopWidth:"_btw-1px",borderRightWidth:"_brw-1px",borderBottomWidth:"_bbw-1px",borderLeftWidth:"_blw-1px",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-solid",borderTopStyle:"_borderTopStyle-solid",borderLeftStyle:"_borderLeftStyle-solid",borderRightStyle:"_borderRightStyle-solid",icon:l.d,size:"$8",circular:!0,width:"_w-a0wkxn",height:"_h-a0wkxn",maxWidth:"_maw-a0wkxn",maxHeight:"_mah-a0wkxn",minWidth:"_miw-a0wkxn",minHeight:"_mih-a0wkxn",borderTopLeftRadius:"_btlr-100000px",borderTopRightRadius:"_btrr-100000px",borderBottomRightRadius:"_bbrr-100000px",borderBottomLeftRadius:"_bblr-100000px",paddingTop:"_pt-0px",paddingBottom:"_pb-0px",paddingRight:"_pr-0px",paddingLeft:"_pl-0px",elevation:"$2",boxShadow:"_bxsh-1cgax6a",pointerEvents:w}),(0,a.jsx)(n.N,{size:20})]})]}))})}));r(1185)},2897:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var o=r(1560),i=r(5300);const s=(0,o.z)(i.FA,{tag:"pre",backgroundColor:"_bg-180kg62",borderTopLeftRadius:"_btlr-lmimby",borderTopRightRadius:"_btrr-lmimby",borderBottomRightRadius:"_bbrr-lmimby",borderBottomLeftRadius:"_bblr-lmimby",paddingTop:"_pt-1aj14ak",paddingRight:"_pr-1aj14ak",paddingBottom:"_pb-1aj14ak",paddingLeft:"_pl-1aj14ak",overflowX:"_overflowX-visible",overflowY:"_overflowY-visible"});r(2760)},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);