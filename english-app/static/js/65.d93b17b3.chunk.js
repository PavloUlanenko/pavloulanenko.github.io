"use strict";(self.webpackChunkenglish_app=self.webpackChunkenglish_app||[]).push([[65],{1065:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var r=a(2982),n=a(2791),c=a(6871),s=a(6434),o=a(7375),d=a(4251),i=a(3670),l=a(2246),g=a(184),u=(0,o.L)("DRAG_AND_DROP"),f=l.aN.text,p=function(t){t.target.classList.add("-dragged"),t.dataTransfer.setData(f,t.target.dataset.id),t.dataTransfer.effectAllowed="move"},h=function(t){t.target.classList.remove("-dragged")},v=function(t){t.dataTransfer.types[0]===f&&(t.preventDefault(),!t.target.classList.contains("droppable")||t.target.classList.contains("-correct")||t.target.classList.contains("-wrong")||t.target.classList.add("-active"))},m=function(t){(0,r.Z)(document.querySelectorAll(".droppable")).forEach((function(t){t.children.length||t.classList.remove("-active","-correct","-wrong")}))},D=function(t){var e=t.target.closest(".draggable-container"),a=e||t.target.closest(".box:not(.-wrong):not(.-correct)");if(a){var r=t.dataTransfer.getData(f);a.appendChild(function(t){var e=document.querySelector('[data-id="'.concat(t,'"]'));return e.parentNode.removeChild(e)}(r)),m(),e||(!function(t){t.target.firstElementChild.dataset.id===t.target.parentNode.dataset.value?(t.target.classList.add("-correct"),t.target.parentNode.classList.add("-correct"),t.target.firstElementChild.draggable=!1):t.target.classList.add("-wrong")}(t),t.target.classList.remove("-active"))}},L=(0,s.$j)((function(t){return{data:t.dragAndDrop.fetchedData,loading:t.dragAndDrop.loading,error:t.dragAndDrop.error}}),(function(t){return{fetchDataConnect:function(e,a){return t(d.cZ(e,a))},restoreInitialStateConnect:function(){return t(u.restoreInitialState())}}}))((function(t){var e=t.fetchDataConnect,a=t.data,r=t.loading,s=t.title,o=(0,c.UO)().token;return(0,n.useEffect)((function(){var t=l.GP["/drag-and-drop"],a=(0,l.Ym)(t),r=u.fetchStart,n=u.fetchSuccess,c=u.fetchFail;e((0,l.U1)(a,o),{fetchStartHandler:r,fetchSuccessHandler:n,fetchFailHandler:c})}),[]),r?(0,g.jsx)(i.Z,{}):a?(0,g.jsxs)("div",{className:"DragAndDrop",children:[s?(0,g.jsx)("h1",{children:s}):null,(0,g.jsxs)("div",{className:"drag-and-drop",onDragStart:p,onDragEnd:h,onDragLeave:m,onDragOver:v,onDrop:D,children:[(0,g.jsx)("div",{className:"draggable-container",children:a.map((function(t){return(0,g.jsx)("span",{className:"element","data-id":t.word,draggable:!0,children:t.word},t.word)}))}),(0,g.jsx)("ol",{className:"droppable-container",children:a.filter((function(t){return t.sentence?t.sentence:null})).map((function(t){return(0,g.jsxs)("li",{className:"sentense","data-value":t.correctWord,children:[t.sentence.split("|+|")[0],(0,g.jsx)("span",{className:"box droppable"}),t.sentence.split("|+|")[1]]},t.correctWord)}))})]})]}):void 0}))}}]);
//# sourceMappingURL=65.d93b17b3.chunk.js.map