"use strict";(self.webpackChunkenglish_app=self.webpackChunkenglish_app||[]).push([[946],{9946:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var r=a(2982),n=a(2791),s=a(6871),c=a(6434),o=a(4251),d=a(1872),i=a(2246),l=a(184),g=i.aN.text,u=function(t){t.target.classList.add("-dragged"),t.dataTransfer.setData(g,t.target.dataset.id),t.dataTransfer.effectAllowed="move"},f=function(t){t.target.classList.remove("-dragged")},p=function(t){t.dataTransfer.types[0]===g&&(t.preventDefault(),!t.target.classList.contains("droppable")||t.target.classList.contains("-correct")||t.target.classList.contains("-wrong")||t.target.classList.add("-active"))},h=function(t){(0,r.Z)(document.querySelectorAll(".droppable")).forEach((function(t){t.children.length||t.classList.remove("-active","-correct","-wrong")}))},v=function(t){var e=t.target.closest(".draggable-container"),a=e||t.target.closest(".box:not(.-wrong):not(.-correct)");if(a){var r=t.dataTransfer.getData(g);a.appendChild(function(t){var e=document.querySelector('[data-id="'.concat(t,'"]'));return e.parentNode.removeChild(e)}(r)),h(),e||(!function(t){t.target.firstElementChild.dataset.id===t.target.parentNode.dataset.value?(t.target.classList.add("-correct"),t.target.parentNode.classList.add("-correct"),t.target.firstElementChild.draggable=!1):t.target.classList.add("-wrong")}(t),t.target.classList.remove("-active"))}},m=(0,c.$j)((function(t){return{data:t.wordsConstructor.fetchedData,loading:t.wordsConstructor.loading,error:t.wordsConstructor.error}}),(function(t){return{fetchDataConnect:function(e){return t(o.cZ(e))}}}))((function(t){var e=t.fetchDataConnect,a=t.data,r=t.loading,c=t.title,o=(0,s.UO)().token;return(0,n.useEffect)((function(){var t=i.GP["/drag-and-drop"],a=(0,i.Ym)(t);e((0,i.U1)(a,o))}),[]),r?(0,l.jsx)(d.Z,{}):a?(0,l.jsxs)("div",{className:"DragAndDrop",children:[c?(0,l.jsx)("h1",{children:c}):null,(0,l.jsxs)("div",{className:"drag-and-drop",onDragStart:u,onDragEnd:f,onDragLeave:h,onDragOver:p,onDrop:v,children:[(0,l.jsx)("div",{className:"draggable-container",children:a.map((function(t){return(0,l.jsx)("span",{className:"element","data-id":t.word,draggable:!0,children:t.word},t.word)}))}),(0,l.jsx)("ol",{className:"droppable-container",children:a.filter((function(t){return t.sentence?t.sentence:null})).map((function(t){return(0,l.jsxs)("li",{className:"sentense","data-value":t.correctWord,children:[t.sentence.split("|+|")[0],(0,l.jsx)("span",{className:"box droppable"}),t.sentence.split("|+|")[1]]},t.correctWord)}))})]})]}):void 0}))}}]);
//# sourceMappingURL=946.3ff46032.chunk.js.map