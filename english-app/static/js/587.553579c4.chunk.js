"use strict";(self.webpackChunkenglish_app=self.webpackChunkenglish_app||[]).push([[587],{1587:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r=t(1413),a=t(2982),o=t(181);var i=t(885),c=t(2791),s=t(6871),l=t(6434),u=t(4251),d=t(1872),f=t(6562),h=t(8790),m=t(7229),v=t(2246),p=t(184),w={type:"text",maxLength:1,autoComplete:"off"},y=(0,l.$j)((function(n){return{data:n.wordsConstructor.fetchedData,loading:n.wordsConstructor.loading,error:n.wordsConstructor.error}}),(function(n){return{fetchDataConnect:function(e){return n(u.cZ(e))}}}))((function(n){var e=n.fetchDataConnect,t=n.data,l=n.loading,u=n.title,y=(0,s.UO)().token,x=(0,c.useState)(null),j=(0,i.Z)(x,2),Z=j[0],b=j[1],C=(0,c.useState)(!1),S=(0,i.Z)(C,2),g=S[0],N=S[1],k=(0,c.useState)(!1),A=(0,i.Z)(k,2),L=A[0],D=A[1],I=(0,c.useState)(0),E=(0,i.Z)(I,2),F=E[0],U=E[1],V=(0,c.useRef)({});(0,c.useEffect)((function(){var n=v.GP["/find_match"],t=(0,v.Ym)(n);e((0,v.U1)(t,y))}),[]),(0,c.useEffect)((function(){if(t){var n={words:(0,m.FJ)(t.map((function(n){return n.word}))),matches:(0,m.FJ)(t.map((function(n){return n.match})))};b(n)}g&&N(!1),L&&D(!1)}),[t,F]);return l?(0,p.jsx)(d.Z,{}):Z?(0,p.jsx)("div",{className:"FindMatch",children:(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e,r=function(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=(0,o.Z)(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){s=!0,i=n},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw i}}}}(new FormData(V.current));try{var a=function(){var n=(0,i.Z)(e.value,2),r=n[0],a=n[1],o=a,c=(null===a||void 0===a?void 0:a.toUpperCase().charCodeAt(0))-v.MY,s=Z.matches[c],l=t.find((function(n){var e=n.word;return n.match===s&&e===r})),u=document.querySelector('[name="'.concat(r,'"]'));o&&l?(u.classList.add("Valid"),u.classList.remove("Invalid")):(u.classList.add("Invalid"),u.classList.remove("Valid"))};for(r.s();!(e=r.n()).done;)a()}catch(c){r.e(c)}finally{r.f()}},ref:V,className:"find-match-form",children:[u?(0,p.jsx)("h1",{children:u}):null,(0,p.jsx)("ul",{className:"words",children:Z.words.map((function(n,e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("span",{children:n}),(0,p.jsx)("div",{className:"input-holder",children:(0,p.jsx)(h.Z,{data:(0,r.Z)((0,r.Z)({},w),{},{name:n}),value:L?t[e].match:""})})]},n)}))}),(0,p.jsx)("ul",{className:"matches",children:Z.matches.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)("span",{children:n})},n)}))}),(0,p.jsxs)("div",{className:"buttons-wrap",children:[(0,p.jsx)(f.Z,{disabled:g,type:"submit",classNames:"-primary -wide",children:"Check"}),(0,p.jsx)(f.Z,{classNames:"-primary -wide",onClickHandler:function(){(0,a.Z)(document.querySelectorAll(".find-match-form input")).forEach((function(n){n.classList.remove("Valid","Invalid")})),D(!0),N(!0)},children:"Show Correct Answers"}),(0,p.jsx)(f.Z,{classNames:"-secondary -wide",onClickHandler:function(){return U((function(n){return n+1}))},children:"Try Again"})]})]})}):void 0}))}}]);
//# sourceMappingURL=587.553579c4.chunk.js.map