import{p as V,m as D,a as U,g as S,u as le,b as $,c as n,_ as G,o as I,d as E,w as c,V as Se,e as o,f as ce,r as de,h as f,i as A,j as re,k as ue,l as $e,n as K,I as O,q as me,s as ne,t as Y,v as Be,x as Pe,y as Ae,z as Te,A as Ee,B as De,C as Le,D as Oe,E as ve,F as Re,R as We,G as ge,H as He,J as Ye,K as je,L as Xe,M as Ge,N as Me,O as Fe,P as Ne,Q as ze,S as qe,T as b,U as Q,W as he,X as k,Y as Je,Z as Ue,$ as fe,a0 as _e,a1 as Ke,a2 as N,a3 as j,a4 as L,a5 as Qe,a6 as z,a7 as Ze,a8 as et,a9 as Z,aa as X,ab as tt,ac as q,ad as st,ae as nt,af as at,ag as it,ah as ot,ai as lt,aj as ct,ak as dt,al as J,am as rt,an as ae,ao as ut,ap as F}from"./index-6e3de7d7.js";const mt=V({fluid:{type:Boolean,default:!1},...D(),...U()},"VContainer"),ee=S()({name:"VContainer",props:mt(),setup(e,a){let{slots:t}=a;const{rtlClasses:s}=le();return $(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),vt="/videos/jumbotron.mp4";const gt={name:"Jumbotron"},ht=o("video",{class:"jumbotron-video v-responsive__sizer",loop:"",autoplay:"",muted:""},[o("source",{src:vt,type:"video/mp4"}),ce(" Your browser does not support the video tag. ")],-1);function ft(e,a,t,s,l,d){return I(),E(ee,{fluid:"",class:"pa-0 d-flex align-center justify-center"},{default:c(()=>[n(Se,{"aspect-ratio":16/9},{default:c(()=>[ht]),_:1})]),_:1})}const _t=G(gt,[["render",ft]]),yt="/images/welcome.png",pt="/images/square.png";const xt={name:"Welcome"},B=e=>(re("data-v-082430ac"),e=e(),ue(),e),bt=B(()=>o("p",{class:"text-1 d-block d-md-block"},"Welcome to  ",-1)),wt=B(()=>o("p",{class:"text-2 d-block d-md-block"},"AGORA PRODUCTION",-1)),kt=B(()=>o("br",{class:"d-none d-md-block"},null,-1)),Ct=B(()=>o("br",{class:"d-none d-md-block"},null,-1)),It=B(()=>o("br",null,null,-1)),Vt=B(()=>o("p",{class:"text-3"},"Agora is a public open space used for assemblies and markets in ancient Greek. Just like agora, we wanted to create an “open space” platform for all people.",-1)),St=B(()=>o("img",{src:yt,style:{width:"100%","max-width":"465px",height:"100%","max-height":"607px"},alt:"Welcome Image"},null,-1)),$t=B(()=>o("div",{class:"image-container"},[o("img",{src:pt,alt:"Square Image",class:"square-image d-sm-none d-lg-block"})],-1));function Bt(e,a,t,s,l,d){const i=de("v-text");return I(),E(ee,{class:"padding-md-130 mt-50",style:{"max-width":"1280px"}},{default:c(()=>[n(A,{class:"mb-md-16"},{default:c(()=>[n(f,{md:"6",cols:"12",class:"padding-md-16 welcome-image"},{default:c(()=>[bt,wt,kt,Ct,It,Vt]),_:1}),n(f,{md:"6",cols:"12",class:"d-sm-flex justify-sm-center justify-md-start"},{default:c(()=>[St]),_:1})]),_:1}),n(A,{class:"mt-md-16"},{default:c(()=>[n(f,{cols:"12",class:"text-center text-md-left"},{default:c(()=>[n(i,{class:"text-bottom pl-md-16 pt-md-16 ml-md-16"},{default:c(()=>[ce("AGORA AS OPEN SPACE")]),_:1})]),_:1})]),_:1}),$t]),_:1})}const Pt=G(xt,[["render",Bt],["__scopeId","data-v-082430ac"]]);const At=S()({name:"VCardActions",props:D(),setup(e,a){let{slots:t}=a;return $e({VBtn:{variant:"text"}}),$(()=>{var s;return n("div",{class:["v-card-actions",e.class],style:e.style},[(s=t.default)==null?void 0:s.call(t)])}),{}}}),Tt=K("v-card-subtitle"),Et=K("v-card-title"),Dt=V({appendAvatar:String,appendIcon:O,prependAvatar:String,prependIcon:O,subtitle:String,title:String,...D(),...me()},"VCardItem"),Lt=S()({name:"VCardItem",props:Dt(),setup(e,a){let{slots:t}=a;return $(()=>{var v;const s=!!(e.prependAvatar||e.prependIcon),l=!!(s||t.prepend),d=!!(e.appendAvatar||e.appendIcon),i=!!(d||t.append),u=!!(e.title||t.title),m=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[l&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(Y,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):s&&n(ne,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[u&&n(Et,{key:"title"},{default:()=>{var _;return[((_=t.title)==null?void 0:_.call(t))??e.title]}}),m&&n(Tt,{key:"subtitle"},{default:()=>{var _;return[((_=t.subtitle)==null?void 0:_.call(t))??e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),i&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(Y,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):d&&n(ne,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ot=K("v-card-text"),Rt=V({appendAvatar:String,appendIcon:O,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Be(),...D(),...me(),...Pe(),...Ae(),...Te(),...Ee(),...De(),...Le(),...Oe(),...U(),...ve(),...Re({variant:"elevated"})},"VCard"),Wt=S()({name:"VCard",directives:{Ripple:We},props:Rt(),setup(e,a){let{attrs:t,slots:s}=a;const{themeClasses:l}=ge(e),{borderClasses:d}=He(e),{colorClasses:i,colorStyles:u,variantClasses:m}=Ye(e),{densityClasses:v}=je(e),{dimensionStyles:_}=Xe(e),{elevationClasses:p}=Ge(e),{loaderClasses:x}=Me(e),{locationStyles:C}=Fe(e),{positionClasses:g}=Ne(e),{roundedClasses:R}=ze(e),P=qe(e,t),W=b(()=>e.link!==!1&&P.isLink.value),T=b(()=>!e.disabled&&e.link!==!1&&(e.link||P.isClickable.value));return $(()=>{const M=W.value?"a":e.tag,h=!!(s.title||e.title),y=!!(s.subtitle||e.subtitle),w=h||y,H=!!(s.append||e.appendAvatar||e.appendIcon),ke=!!(s.prepend||e.prependAvatar||e.prependIcon),Ce=!!(s.image||e.image),Ie=w||ke||H,Ve=!!(s.text||e.text);return Q(n(M,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":T.value},l.value,d.value,i.value,v.value,p.value,x.value,g.value,R.value,m.value,e.class],style:[u.value,_.value,C.value,e.style],href:P.href.value,onClick:T.value&&P.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var te;return[Ce&&n("div",{key:"image",class:"v-card__image"},[s.image?n(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):n(k,{key:"image-img",cover:!0,src:e.image},null)]),n(Je,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:s.loader}),Ie&&n(Lt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),Ve&&n(Ot,{key:"text"},{default:()=>{var se;return[((se=s.text)==null?void 0:se.call(s))??e.text]}}),(te=s.default)==null?void 0:te.call(s),s.actions&&n(At,null,{default:s.actions}),Ue(T.value,"v-card")]}}),[[he("ripple"),T.value&&e.ripple]])}),{}}});const Ht=e=>{const{touchstartX:a,touchendX:t,touchstartY:s,touchendY:l}=e,d=.5,i=16;e.offsetX=t-a,e.offsetY=l-s,Math.abs(e.offsetY)<d*Math.abs(e.offsetX)&&(e.left&&t<a-i&&e.left(e),e.right&&t>a+i&&e.right(e)),Math.abs(e.offsetX)<d*Math.abs(e.offsetY)&&(e.up&&l<s-i&&e.up(e),e.down&&l>s+i&&e.down(e))};function Yt(e,a){var s;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(s=a.start)==null||s.call(a,{originalEvent:e,...a})}function jt(e,a){var s;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(s=a.end)==null||s.call(a,{originalEvent:e,...a}),Ht(a)}function Xt(e,a){var s;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(s=a.move)==null||s.call(a,{originalEvent:e,...a})}function Gt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Yt(t,a),touchend:t=>jt(t,a),touchmove:t=>Xt(t,a)}}function Mt(e,a){var u;const t=a.value,s=t!=null&&t.parent?e.parentElement:e,l=(t==null?void 0:t.options)??{passive:!0},d=(u=a.instance)==null?void 0:u.$.uid;if(!s||!d)return;const i=Gt(a.value);s._touchHandlers=s._touchHandlers??Object.create(null),s._touchHandlers[d]=i,fe(i).forEach(m=>{s.addEventListener(m,i[m],l)})}function Ft(e,a){var d,i;const t=(d=a.value)!=null&&d.parent?e.parentElement:e,s=(i=a.instance)==null?void 0:i.$.uid;if(!(t!=null&&t._touchHandlers)||!s)return;const l=t._touchHandlers[s];fe(l).forEach(u=>{t.removeEventListener(u,l[u])}),delete t._touchHandlers[s]}const ye={mounted:Mt,unmounted:Ft},Nt=ye,pe=Symbol.for("vuetify:v-window"),xe=Symbol.for("vuetify:v-window-group"),be=V({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...D(),...U(),...ve()},"VWindow"),ie=S()({name:"VWindow",directives:{Touch:ye},props:be(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:s}=ge(e),{isRtl:l}=le(),{t:d}=_e(),i=Ke(e,xe),u=N(),m=b(()=>l.value?!e.reverse:e.reverse),v=j(!1),_=b(()=>{const h=e.direction==="vertical"?"y":"x",w=(m.value?!v.value:v.value)?"-reverse":"";return`v-window-${h}${w}-transition`}),p=j(0),x=N(void 0),C=b(()=>i.items.value.findIndex(h=>i.selected.value.includes(h.id)));L(C,(h,y)=>{const w=i.items.value.length,H=w-1;w<=2?v.value=h<y:h===H&&y===0?v.value=!0:h===0&&y===H?v.value=!1:v.value=h<y}),Qe(pe,{transition:_,isReversed:v,transitionCount:p,transitionHeight:x,rootRef:u});const g=b(()=>e.continuous||C.value!==0),R=b(()=>e.continuous||C.value!==i.items.value.length-1);function P(){g.value&&i.prev()}function W(){R.value&&i.next()}const T=b(()=>{const h=[],y={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${m.value?"right":"left"}`,onClick:i.prev,ariaLabel:d("$vuetify.carousel.prev")};h.push(g.value?t.prev?t.prev({props:y}):n(z,y,null):n("div",null,null));const w={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${m.value?"left":"right"}`,onClick:i.next,ariaLabel:d("$vuetify.carousel.next")};return h.push(R.value?t.next?t.next({props:w}):n(z,w,null):n("div",null,null)),h}),M=b(()=>e.touch===!1?e.touch:{...{left:()=>{m.value?P():W()},right:()=>{m.value?W():P()},start:y=>{let{originalEvent:w}=y;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return $(()=>Q(n(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},s.value,e.class],style:e.style},{default:()=>{var h,y;return[n("div",{class:"v-window__container",style:{height:x.value}},[(h=t.default)==null?void 0:h.call(t,{group:i}),e.showArrows!==!1&&n("div",{class:"v-window__controls"},[T.value])]),(y=t.additional)==null?void 0:y.call(t,{group:i})]}}),[[he("touch"),M.value]])),{group:i}}}),zt=V({color:String,cycle:Boolean,delimiterIcon:{type:O,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...be({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),qt=S()({name:"VCarousel",props:zt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const s=Ze(e,"modelValue"),{t:l}=_e(),d=N();let i=-1;L(s,m),L(()=>e.interval,m),L(()=>e.cycle,v=>{v?m():window.clearTimeout(i)}),et(u);function u(){!e.cycle||!d.value||(i=window.setTimeout(d.value.group.next,+e.interval>0?+e.interval:6e3))}function m(){window.clearTimeout(i),window.requestAnimationFrame(u)}return $(()=>{const[v]=ie.filterProps(e);return n(ie,X({ref:d},v,{modelValue:s.value,"onUpdate:modelValue":_=>s.value=_,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:q(e.height)},e.style]}),{default:t.default,additional:_=>{let{group:p}=_;return n(Z,null,[!e.hideDelimiters&&n("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[p.items.value.length>0&&n(Y,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[p.items.value.map((x,C)=>{const g={id:`carousel-item-${x.id}`,"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",C+1,p.items.value.length),class:[p.isSelected(x.id)&&"v-btn--active"],onClick:()=>p.select(x.id,!0)};return t.item?t.item({props:g,item:x}):n(z,X(x,g),null)})]})]),e.progress&&n(tt,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(p.getItemIndex(s.value)+1)/p.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Jt=V({eager:Boolean},"lazy");function Ut(e,a){const t=j(!1),s=b(()=>t.value||e.eager||a.value);L(a,()=>t.value=!0);function l(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:s,onAfterLeave:l}}const we=V({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...D(),...st(),...Jt()},"VWindowItem"),oe=S()({name:"VWindowItem",directives:{Touch:Nt},props:we(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const s=nt(pe),l=at(e,xe),{isBooted:d}=it();if(!s||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const i=j(!1),u=b(()=>d.value&&(s.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function m(){!i.value||!s||(i.value=!1,s.transitionCount.value>0&&(s.transitionCount.value-=1,s.transitionCount.value===0&&(s.transitionHeight.value=void 0)))}function v(){var g;i.value||!s||(i.value=!0,s.transitionCount.value===0&&(s.transitionHeight.value=q((g=s.rootRef.value)==null?void 0:g.clientHeight)),s.transitionCount.value+=1)}function _(){m()}function p(g){i.value&&ct(()=>{!u.value||!i.value||!s||(s.transitionHeight.value=q(g.clientHeight))})}const x=b(()=>{const g=s.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof g!="string"?s.transition.value:g,onBeforeEnter:v,onAfterEnter:m,onEnterCancelled:_,onBeforeLeave:v,onAfterLeave:m,onLeaveCancelled:_,onEnter:p}:!1}),{hasContent:C}=Ut(e,l.isSelected);return $(()=>n(lt,{transition:x.value,disabled:!d.value},{default:()=>{var g;return[Q(n("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[C.value&&((g=t.default)==null?void 0:g.call(t))]),[[ot,l.isSelected.value]])]}})),{groupItem:l}}}),Kt=V({...dt(),...we()},"VCarouselItem"),Qt=S()({name:"VCarouselItem",inheritAttrs:!1,props:Kt(),setup(e,a){let{slots:t,attrs:s}=a;$(()=>{const[l]=k.filterProps(e),[d]=oe.filterProps(e);return n(oe,X({class:"v-carousel-item"},d),{default:()=>[n(k,X(s,l),t)]})})}}),Zt={name:"ServicesCarousel",data(){return{items:[{title:"+ 70",content:"Clients",image:"",description:""},{title:"Branding / Marketing",content:"",image:"/images/welcome/share.svg",description:"Branding defines identity, marketing shares to world"},{title:"Google Business set up",content:"",image:"/images/welcome/google.svg",description:"Online presence with our Google Business set up"},{title:"+ 10",content:"Partners",image:"",description:""},{title:"Photo / Videography",content:"",image:"/images/welcome/camera.svg",description:"Expert photo/videography services for your marketing"},{title:"SEO set up",content:"",image:"/images/welcome/bitcoin.svg",description:"Boost online visibility with our professional SEO setup"},{title:"Web / App Design",content:"",image:"/images/welcome/pencil.svg",description:"Transform your vision into reality with our design"},{title:"News / Ads",content:"",image:"/images/welcome/group.svg",description:"This is the description for Grid Item 9"}]}}},es={key:1,class:"grid-line",style:{width:"100%",height:"0.977px"}},ts={class:"grid-item-description"};function ss(e,a,t,s,l,d){return I(),E(Wt,{elevation:"24",class:"mx-auto",width:"100%",outlined:""},{default:c(()=>[n(qt,{height:"300",cycle:"","hide-delimiters":"","show-arrows":!1},{default:c(()=>[(I(!0),J(Z,null,rt(l.items,(i,u)=>(I(),E(Qt,{key:u},{default:c(()=>[n(A,{class:"d-flex fill-height justify-center align-center pa-5 pa-md-16"},{default:c(()=>[n(f,{cols:"12",class:"grid-item"},{default:c(()=>[i.image?(I(),E(k,{key:0,src:i.image,style:{width:"51.247px",height:"50.783px"}},null,8,["src"])):ae("",!0),o("p",{class:"grid-item-title text-no-wrap",style:ut(i.image?{}:{fontSize:"30px",textAlign:"center"})},F(i.title)+" "+F(i.content),5),i.image?(I(),J("div",es)):ae("",!0),o("p",ts,F(i.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const ns=G(Zt,[["render",ss],["__scopeId","data-v-458bb87c"]]),as="/images/welcome/share.svg",is="/images/welcome/google.svg",os="/images/welcome/camera.svg",ls="/images/welcome/bitcoin.svg",cs="/images/welcome/pencil.svg",ds="/images/welcome/group.svg";const rs={name:"OurServices",components:{ServicesCarousel:ns}},r=e=>(re("data-v-cdbd82a7"),e=e(),ue(),e),us=r(()=>o("p",{class:"services-title"},"Our Services",-1)),ms=r(()=>o("p",{style:{"word-wrap":"break-word"}}," Discover our marketing company, delivering creative solutions to over 70 clients and partners. From digital marketing to brand development, our passionate team crafts tailored strategies for maximum impact and ROI. ",-1)),vs=r(()=>o("p",{class:"grid-1-title"},"+ 70",-1)),gs=r(()=>o("p",{class:"grid-1-content"},"Clients",-1)),hs=r(()=>o("p",{class:"grid-item-title"},"Branding / Marketing",-1)),fs=r(()=>o("div",{class:"grid-line",style:{width:"219.735px",height:"0.977px"}},null,-1)),_s=r(()=>o("p",{class:"grid-item-description"},"Branding defines identity, marketing shares to world",-1)),ys=r(()=>o("p",{class:"grid-item-title"},"Google Business set up",-1)),ps=r(()=>o("div",{class:"grid-line",style:{width:"219.735px",height:"0.977px"}},null,-1)),xs=r(()=>o("p",{class:"grid-item-description"},"Online presence with our Google Business set up",-1)),bs=r(()=>o("p",{class:"grid-1-title"},"+ 10",-1)),ws=r(()=>o("p",{class:"grid-1-content"},"Partners",-1)),ks=r(()=>o("p",{class:"grid-item-title"},"Photo / Videography",-1)),Cs=r(()=>o("div",{class:"grid-line",style:{width:"219.735px",height:"0.977px"}},null,-1)),Is=r(()=>o("p",{class:"grid-item-description"},"Expert photo/videography services for your marketing",-1)),Vs=r(()=>o("p",{class:"grid-item-title"},"SEO set up",-1)),Ss=r(()=>o("div",{class:"grid-line",style:{width:"219.735px",height:"0.977px"}},null,-1)),$s=r(()=>o("p",{class:"grid-item-description"},"Boost online visibility with our professional SEO setup",-1)),Bs=r(()=>o("p",{class:"grid-item-title"},"Web / App Design",-1)),Ps=r(()=>o("div",{class:"grid-line",style:{width:"219.735px",height:"0.977px"}},null,-1)),As=r(()=>o("p",{class:"grid-item-description"},"Transform your vision into reality with our design",-1)),Ts=r(()=>o("p",{class:"grid-item-title"},"News / Ads",-1)),Es=r(()=>o("div",{class:"grid-line",style:{width:"219.735px",height:"0.977px"}},null,-1)),Ds=r(()=>o("p",{class:"grid-item-description"},"This is the description for Grid Item 9.",-1));function Ls(e,a,t,s,l,d){const i=de("ServicesCarousel");return I(),E(ee,{style:{"max-width":"1280px"},class:"mt-16 mt-md-0"},{default:c(()=>[n(A,{class:"custom-row"},{default:c(()=>[n(f,{md:"4",cols:"12",class:"left-column"},{default:c(()=>[us]),_:1}),n(f,{md:"8",cols:"12",class:"right-column"},{default:c(()=>[ms]),_:1})]),_:1}),n(A,{class:"grid-row mt-16 d-none d-md-flex",style:{}},{default:c(()=>[n(f,{md:"4",cols:"12",class:"grid-item"},{default:c(()=>[vs,gs]),_:1}),n(f,{md:"4",sm:"6",cols:"12",class:"grid-item"},{default:c(()=>[n(k,{src:as,style:{width:"51.247px",height:"50.783px"}}),hs,fs,_s]),_:1}),n(f,{md:"4",sm:"6",cols:"12",class:"grid-item"},{default:c(()=>[n(k,{src:is,style:{width:"51.247px",height:"50.783px"}}),ys,ps,xs]),_:1}),n(f,{md:"4",cols:"12",class:"grid-item"},{default:c(()=>[bs,ws]),_:1}),n(f,{md:"4",sm:"6",cols:"12",class:"grid-item"},{default:c(()=>[n(k,{src:os,style:{width:"51.247px",height:"50.783px"}}),ks,Cs,Is]),_:1}),n(f,{md:"4",sm:"6",cols:"12",class:"grid-item"},{default:c(()=>[n(k,{src:ls,style:{width:"51.247px",height:"50.783px"}}),Vs,Ss,$s]),_:1}),n(f,{md:"4",cols:"12",class:"grid-item d-none d-md-block"}),n(f,{md:"4",sm:"6",cols:"12",class:"grid-item"},{default:c(()=>[n(k,{src:cs,style:{width:"51.247px",height:"50.783px"}}),Bs,Ps,As]),_:1}),n(f,{md:"4",sm:"6",cols:"12",class:"grid-item"},{default:c(()=>[n(k,{src:ds,style:{width:"51.247px",height:"50.783px"}}),Ts,Es,Ds]),_:1})]),_:1}),n(A,{class:"my-16"},{default:c(()=>[n(f,{class:"d-flex justify-center d-md-none"},{default:c(()=>[n(i)]),_:1})]),_:1}),n(A,{class:"my-16"},{default:c(()=>[n(f,{class:"d-flex justify-center"},{default:c(()=>[o("button",{class:"btn-service",onClick:a[0]||(a[0]=(...u)=>e.onButtonClick&&e.onButtonClick(...u))},"Find more about service")]),_:1})]),_:1})]),_:1})}const Os=G(rs,[["render",Ls],["__scopeId","data-v-cdbd82a7"]]);const Ws={__name:"Home",setup(e){return(a,t)=>(I(),J(Z,null,[n(_t),n(Pt),n(Os)],64))}};export{Ws as default};