"use strict";(self.webpackChunkenglish_app=self.webpackChunkenglish_app||[]).push([[587],{1587:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(1413),a=t(2982),c=t(181);var i=t(885),s=t(2791),o=t(6871),l=t(6434),u=t(4251),d=t(7375),f=t(3670),h=t(6562),m=t(8790),v=t(7229),p=t(2246),y=t(184),x=(0,d.L)("findMatch"),j={type:"text",maxLength:1,autoComplete:"off"},w=(0,l.$j)((function(e){return{data:e.findMatch.fetchedData,loading:e.findMatch.loading,error:e.findMatch.error}}),(function(e){return{fetchDataConnect:function(n,t){return e(u.cZ(n,t))},restoreInitialStateConnect:function(){return e(x.restoreInitialState())}}}))((function(e){var n=e.fetchDataConnect,t=e.data,l=e.loading,u=e.title,d=(0,o.UO)().token,w=(0,s.useState)(null),S=(0,i.Z)(w,2),Z=S[0],b=S[1],C=(0,s.useState)(!1),g=(0,i.Z)(C,2),N=g[0],k=g[1],I=(0,s.useState)(!1),L=(0,i.Z)(I,2),A=L[0],F=L[1],M=(0,s.useState)(0),D=(0,i.Z)(M,2),H=D[0],E=D[1],U=(0,s.useRef)({});(0,s.useEffect)((function(){var e=p.GP["/find_match"],t=(0,p.Ym)(e),r=x.fetchStart,a=x.fetchSuccess,c=x.fetchFail;n((0,p.U1)(t,d),{fetchStartHandler:r,fetchSuccessHandler:a,fetchFailHandler:c})}),[]),(0,s.useEffect)((function(){if(t){var e={words:(0,v.FJ)(t.map((function(e){return e.word}))),matches:(0,v.FJ)(t.map((function(e){return e.match})))};b(e)}N&&k(!1),A&&F(!1)}),[t,H]);return l?(0,y.jsx)(f.Z,{}):Z?(0,y.jsx)("div",{className:"FindMatch",children:(0,y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,r=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,c.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(o)throw i}}}}(new FormData(U.current));try{var a=function(){var e=(0,i.Z)(n.value,2),r=e[0],a=e[1],c=a,s=(null===a||void 0===a?void 0:a.toUpperCase().charCodeAt(0))-p.MY,o=Z.matches[s],l=t.find((function(e){var n=e.word;return e.match===o&&n===r})),u=document.querySelector('[name="'.concat(r,'"]'));c&&l?(u.classList.add("Valid"),u.classList.remove("Invalid")):(u.classList.add("Invalid"),u.classList.remove("Valid"))};for(r.s();!(n=r.n()).done;)a()}catch(s){r.e(s)}finally{r.f()}},ref:U,className:"find-match-form",children:[u?(0,y.jsx)("h1",{children:u}):null,(0,y.jsx)("ul",{className:"words",children:Z.words.map((function(e,n){return(0,y.jsxs)("li",{children:[(0,y.jsx)("span",{children:e}),(0,y.jsx)("div",{className:"input-holder",children:(0,y.jsx)(m.Z,{data:(0,r.Z)((0,r.Z)({},j),{},{name:e}),value:A?t[n].match:""})})]},e)}))}),(0,y.jsx)("ul",{className:"matches",children:Z.matches.map((function(e){return(0,y.jsx)("li",{children:(0,y.jsx)("span",{children:e})},e)}))}),(0,y.jsxs)("div",{className:"buttons-wrap",children:[(0,y.jsx)(h.Z,{disabled:N,type:"submit",classNames:"-primary -wide",children:"Check"}),(0,y.jsx)(h.Z,{classNames:"-primary -wide",onClickHandler:function(){(0,a.Z)(document.querySelectorAll(".find-match-form input")).forEach((function(e){e.classList.remove("Valid","Invalid")})),F(!0),k(!0)},children:"Show Correct Answers"}),(0,y.jsx)(h.Z,{classNames:"-secondary -wide",onClickHandler:function(){return E((function(e){return e+1}))},children:"Try Again"})]})]})}):void 0}))}}]);
//# sourceMappingURL=587.946d3743.chunk.js.map