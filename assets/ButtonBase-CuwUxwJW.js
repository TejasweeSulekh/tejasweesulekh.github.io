import{F as e,G as t,N as n,P as r,T as i,Y as a,at as o,k as s,q as c,rt as l,x as u}from"./proxy-Wd-cj8Og.js";import{o as d}from"./theme-BycreLFa.js";import{_ as f,b as p,d as m,h,p as g}from"./Container-BEDkWt7Y.js";var _=o(l());function v(e){let t=_.useRef(e);return d(()=>{t.current=e}),_.useRef((...e)=>(0,t.current)(...e)).current}var y=v;function b(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function S(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,x(e,t)}var C=_.createContext(null);function w(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function T(e,t){var n=function(e){return t&&(0,_.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&_.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function E(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function D(e,t,n){return n[t]==null?e.props[t]:n[t]}function O(e,t){return T(e.children,function(n){return(0,_.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:D(n,`appear`,e),enter:D(n,`enter`,e),exit:D(n,`exit`,e)})})}function k(e,t,n){var r=T(e.children),i=E(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,_.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,_.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,_.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:D(o,`exit`,e),enter:D(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,_.cloneElement)(o,{in:!1}):c&&s&&(0,_.isValidElement)(l)&&(i[a]=(0,_.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:D(o,`exit`,e),enter:D(o,`enter`,e)}))}}),i}var A=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},j={component:`div`,childFactory:function(e){return e}},M=function(e){S(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(w(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?O(e,r):k(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=T(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=a({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=b(e,[`component`,`childFactory`]),i=this.state.contextValue,a=A(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?_.createElement(C.Provider,{value:i},a):_.createElement(C.Provider,{value:i},_.createElement(t,r,a))},t}(_.Component);M.propTypes={},M.defaultProps=j;var N={};function P(e,t){let n=_.useRef(N);return n.current===N&&(n.current=e(t)),n}var F=[];function I(e){_.useEffect(e,F)}var L=class e{static create(){return new e}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear};function R(){let e=P(L.create).current;return I(e.disposeEffect),e}function z(e){return r(`MuiPaper`,e)}n(`MuiPaper`,`root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24`.split(`.`));var B=t(),V=e=>{let{square:t,elevation:n,variant:r,classes:i}=e;return p({root:[`root`,r,!t&&`rounded`,r===`elevation`&&`elevation${n}`]},z,i)},H=f(`div`,{name:`MuiPaper`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant===`elevation`&&t[`elevation${n.elevation}`]]}})(g(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create(`box-shadow`),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:`outlined`},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:`elevation`},style:{boxShadow:`var(--Paper-shadow)`,backgroundImage:`var(--Paper-overlay)`}}]}))),U=_.forwardRef(function(t,n){let r=h({props:t,name:`MuiPaper`}),a=u(),{className:o,component:c=`div`,elevation:l=1,square:d=!1,variant:f=`elevation`,...p}=r,m={...r,component:c,elevation:l,square:d,variant:f};return(0,B.jsx)(H,{as:c,ownerState:m,className:e(V(m).root,o),ref:n,...p,style:{...f===`elevation`&&{"--Paper-shadow":(a.vars||a).shadows[l],...a.vars&&{"--Paper-overlay":a.vars.overlays?.[l]},...!a.vars&&a.palette.mode===`dark`&&{"--Paper-overlay":`linear-gradient(${s(`#fff`,i(l))}, ${s(`#fff`,i(l))})`}},...p.style}})});function W(e){try{return e.matches(`:focus-visible`)}catch{}return!1}var G=class e{static create(){return new e}static use(){let t=P(e.create).current,[n,r]=_.useState(!1);return t.shouldMount=n,t.setShouldMount=r,_.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=K(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function ee(){return G.use()}function K(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}function q(t){let{className:n,classes:r,pulsate:i=!1,rippleX:a,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:u}=t,[d,f]=_.useState(!1),p=e(n,r.ripple,r.rippleVisible,i&&r.ripplePulsate),m={width:s,height:s,top:-(s/2)+o,left:-(s/2)+a},h=e(r.child,d&&r.childLeaving,i&&r.childPulsate);return!c&&!d&&f(!0),_.useEffect(()=>{if(!c&&l!=null){let e=setTimeout(l,u);return()=>{clearTimeout(e)}}},[l,c,u]),(0,B.jsx)(`span`,{className:p,style:m,children:(0,B.jsx)(`span`,{className:h})})}var J=n(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),Y=550,te=c`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,ne=c`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,re=c`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ie=f(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),ae=f(q,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${J.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${te};
    animation-duration: ${Y}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${J.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${J.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${J.childLeaving} {
    opacity: 0;
    animation-name: ${ne};
    animation-duration: ${Y}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${J.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${re};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,oe=_.forwardRef(function(t,n){let{center:r=!1,classes:i={},className:a,...o}=h({props:t,name:`MuiTouchRipple`}),[s,c]=_.useState([]),l=_.useRef(0),u=_.useRef(null);_.useEffect(()=>{u.current&&=(u.current(),null)},[s]);let d=_.useRef(!1),f=R(),p=_.useRef(null),m=_.useRef(null),g=_.useCallback(t=>{let{pulsate:n,rippleX:r,rippleY:a,rippleSize:o,cb:s}=t;c(t=>[...t,(0,B.jsx)(ae,{classes:{ripple:e(i.ripple,J.ripple),rippleVisible:e(i.rippleVisible,J.rippleVisible),ripplePulsate:e(i.ripplePulsate,J.ripplePulsate),child:e(i.child,J.child),childLeaving:e(i.childLeaving,J.childLeaving),childPulsate:e(i.childPulsate,J.childPulsate)},timeout:Y,pulsate:n,rippleX:r,rippleY:a,rippleSize:o},l.current)]),l.current+=1,u.current=s},[i]),v=_.useCallback((e={},t={},n=()=>{})=>{let{pulsate:i=!1,center:a=r||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&d.current){d.current=!1;return}e?.type===`touchstart`&&(d.current=!0);let s=o?null:m.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,h;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(a)h=Math.sqrt((2*c.width**2+c.height**2)/3),h%2==0&&(h+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;h=Math.sqrt(e**2+t**2)}e?.touches?p.current===null&&(p.current=()=>{g({pulsate:i,rippleX:l,rippleY:u,rippleSize:h,cb:n})},f.start(80,()=>{p.current&&=(p.current(),null)})):g({pulsate:i,rippleX:l,rippleY:u,rippleSize:h,cb:n})},[r,g,f]),y=_.useCallback(()=>{v({},{pulsate:!0})},[v]),b=_.useCallback((e,t)=>{if(f.clear(),e?.type===`touchend`&&p.current){p.current(),p.current=null,f.start(0,()=>{b(e,t)});return}p.current=null,c(e=>e.length>0?e.slice(1):e),u.current=t},[f]);return _.useImperativeHandle(n,()=>({pulsate:y,start:v,stop:b}),[y,v,b]),(0,B.jsx)(ie,{className:e(J.root,i.root,a),ref:m,...o,children:(0,B.jsx)(M,{component:null,exit:!0,children:s})})});function se(e){return r(`MuiButtonBase`,e)}var X=n(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),ce=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,a=p({root:[`root`,t&&`disabled`,n&&`focusVisible`]},se,i);return n&&r&&(a.root+=` ${r}`),a},le=f(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${X.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),ue=_.forwardRef(function(t,n){let r=h({props:t,name:`MuiButtonBase`}),{action:i,centerRipple:a=!1,children:o,className:s,component:c=`button`,disabled:l=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:f=!1,focusVisibleClassName:p,LinkComponent:g=`a`,onBlur:v,onClick:b,onContextMenu:x,onDragLeave:S,onFocus:C,onFocusVisible:w,onKeyDown:T,onKeyUp:E,onMouseDown:D,onMouseLeave:O,onMouseUp:k,onTouchEnd:A,onTouchMove:j,onTouchStart:M,tabIndex:N=0,TouchRippleProps:P,touchRippleRef:F,type:I,...L}=r,R=_.useRef(null),z=ee(),V=m(z.ref,F),[H,U]=_.useState(!1);l&&H&&U(!1),_.useImperativeHandle(i,()=>({focusVisible:()=>{U(!0),R.current.focus()}}),[]);let G=z.shouldMount&&!u&&!l;_.useEffect(()=>{H&&f&&!u&&z.pulsate()},[u,f,H,z]);let K=Z(z,`start`,D,d),q=Z(z,`stop`,x,d),J=Z(z,`stop`,S,d),Y=Z(z,`stop`,k,d),te=Z(z,`stop`,e=>{H&&e.preventDefault(),O&&O(e)},d),ne=Z(z,`start`,M,d),re=Z(z,`stop`,A,d),ie=Z(z,`stop`,j,d),ae=Z(z,`stop`,e=>{W(e.target)||U(!1),v&&v(e)},!1),se=y(e=>{R.current||=e.currentTarget,W(e.target)&&(U(!0),w&&w(e)),C&&C(e)}),X=()=>{let e=R.current;return c&&c!==`button`&&!(e.tagName===`A`&&e.href)},ue=y(e=>{f&&!e.repeat&&H&&e.key===` `&&z.stop(e,()=>{z.start(e)}),e.target===e.currentTarget&&X()&&e.key===` `&&e.preventDefault(),T&&T(e),e.target===e.currentTarget&&X()&&e.key===`Enter`&&!l&&(e.preventDefault(),b&&b(e))}),de=y(e=>{f&&e.key===` `&&H&&!e.defaultPrevented&&z.stop(e,()=>{z.pulsate(e)}),E&&E(e),b&&e.target===e.currentTarget&&X()&&e.key===` `&&!e.defaultPrevented&&b(e)}),Q=c;Q===`button`&&(L.href||L.to)&&(Q=g);let $={};if(Q===`button`){let e=!!L.formAction;$.type=I===void 0&&!e?`button`:I,$.disabled=l}else !L.href&&!L.to&&($.role=`button`),l&&($[`aria-disabled`]=l);let fe=m(n,R),pe={...r,centerRipple:a,component:c,disabled:l,disableRipple:u,disableTouchRipple:d,focusRipple:f,tabIndex:N,focusVisible:H},me=ce(pe);return(0,B.jsxs)(le,{as:Q,className:e(me.root,s),ownerState:pe,onBlur:ae,onClick:b,onContextMenu:q,onFocus:se,onKeyDown:ue,onKeyUp:de,onMouseDown:K,onMouseLeave:te,onMouseUp:Y,onDragLeave:J,onTouchEnd:re,onTouchMove:ie,onTouchStart:ne,ref:fe,tabIndex:l?-1:N,type:I,...$,...L,children:[o,G?(0,B.jsx)(oe,{ref:V,center:a,...P}):null]})});function Z(e,t,n,r=!1){return y(i=>(n&&n(i),r||e[t](i),!0))}export{R as a,b as c,L as i,y as l,W as n,C as o,U as r,S as s,ue as t,v as u};