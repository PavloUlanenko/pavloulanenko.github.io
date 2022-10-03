"use strict";(self.webpackChunkenglish_app=self.webpackChunkenglish_app||[]).push([[785],{3785:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5671),s=n(3144),c=n(9340),a=n(5716),o=n(2791),i=n(6434),l=n(7375),u=n(4251),h=n(6562),d=(n(4537),n(184)),f=o.forwardRef((function(e,t){var n=e.show,r=e.showWithoutBackDrop,s=(e.onOpenHandler,e.onCloseHandler,e.children);return(0,o.useEffect)((function(){}),[]),(0,o.useEffect)((function(){!function(e){e.current.showModal()}(t)}),[n]),(0,d.jsx)("dialog",{open:r,className:"ModalDialog",ref:t,children:s})})),S=n(3670),p=n(7229),m=n(2246),w=n(7774),C=(0,l.L)("SENTENCES_CONSTRUCTOR"),v=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={currentSet:0,currentSentence:"",currentSentenceIndex:0,totalSentencesQty:10,sentence:[],correctSentence:[],taskName:"",answeredSentence:[],totalCorrect:0,isIncorrect:!1,showModal:!1},e.answeredRef=o.createRef(),e.modalRef=o.createRef(),e.isSentenceCorrect=function(){var t=e.state,n=t.correctSentence,r=t.answeredSentence;return n.join(" ")===r.join(" ")},e.highlightErrors=function(){var t=e.state,n=t.correctSentence,r=t.answeredSentence,s=e.answeredRef.current.children;n.forEach((function(e,t){e!==r[t]&&s[t+1].classList.add(m.s0)})),e.setState({isIncorrect:!0})},e.selectWord=function(t){var n=t.target.textContent;e.setState((function(e){return{answeredSentence:e.answeredSentence.concat(n),currentSet:e.currentSet+1}}),(function(){var t=e.state,n=t.correctSentence,r=t.answeredSentence;n.length===r.length&&(e.isSentenceCorrect()?e.setState((function(e){return{totalCorrect:e.totalCorrect+1,currentSentenceIndex:e.currentSentenceIndex+1,currentSet:0,isIncorrect:!1}})):e.highlightErrors());e.state.totalCorrect===e.state.totalSentencesQty&&e.setState({showModal:!0})}))},e.removeLastWord=function(){e.setState((function(e){return{answeredSentence:e.answeredSentence.slice(0,-1),currentSet:e.currentSet-1}}))},e.closeModal=function(){e.setState({showModal:!1})},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=m.GP["/sentences-constructor"],t=this.props.params.token,n=void 0===t?"2:8":t,r=(0,m.Ym)(e),s=C.fetchStart,c=C.fetchSuccess,a=C.fetchFail;this.props.fetchDataConnect((0,m.U1)(r,n),{fetchStartHandler:s,fetchSuccessHandler:c,fetchFailHandler:a})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentSentenceIndex>=this.state.totalSentencesQty,r=this.state.totalCorrect&&t.totalCorrect!==this.state.totalCorrect;if((e.data!==this.props.data||r)&&!n){var s=this.props.data[this.state.currentSentenceIndex];this.setState({taskName:s.taskName,sentence:s.wordSets.split("|").map((function(e){return e.split("+")})),currentSentence:s.translation,correctSentence:s.correctSentence.split("+"),answeredSentence:[],totalSentencesQty:this.props.data.length})}}},{key:"componentWillUnmount",value:function(){this.props.restoreInitialStateConnect()}},{key:"render",value:function(){var e=this;return this.props.loading?(0,d.jsx)(S.Z,{}):this.state.showModal?(0,d.jsxs)(f,{ref:this.modalRef,show:!0,children:[(0,d.jsx)("h5",{children:"Victory!"}),(0,d.jsx)(h.Z,{classNames:"-secondary",onClickHandler:function(){e.modalRef.current.close()},children:"Ok"})]}):(0,d.jsxs)("div",{className:"SentencesConstructor wrapper",children:[this.state.taskName?(0,d.jsx)("div",{className:"task-name",children:this.state.taskName}):null,(0,d.jsx)("div",{className:"current-sentence",children:this.state.currentSentence}),(0,d.jsxs)("div",{ref:this.answeredRef,className:"answer",children:[(0,d.jsx)("span",{className:"voice-over-icon ".concat(this.state.isIncorrect?m.c8:""),onClick:function(){return(0,p.ar)(e.state.correctSentence.join(","))}}),this.state.answeredSentence.map((function(e,t){return[(0,d.jsx)("span",{children:e},e+t)," "]})),(0,d.jsx)("i",{className:"delete-word ".concat(this.state.answeredSentence.length?"":m.or),onClick:this.removeLastWord})]}),(0,d.jsx)("ul",{className:"sentence-tiles",children:this.state.sentence.length&&this.state.currentSet!==this.state.sentence.length&&this.state.sentence[this.state.currentSet].map((function(t){return(0,d.jsx)("li",{onClick:e.selectWord,children:t},t)}))}),(0,d.jsx)("button",{className:"show-rule",children:"Show the Rule"}),(0,d.jsx)("div",{className:"progress-bar-holder",children:(0,d.jsx)("ol",{className:"progress-bar",children:Array(this.state.totalSentencesQty).fill(1).map((function(t,n){return(0,d.jsx)("li",{className:"progress-dot".concat(e.state.currentSentenceIndex===n?" -current":"")},n)}))})})]})}}]),n}(o.Component),x=(0,w.Z)((0,i.$j)((function(e){return{data:e.sentencesConstructor.fetchedData,loading:e.sentencesConstructor.loading,error:e.sentencesConstructor.error}}),(function(e){return{fetchDataConnect:function(t,n){return e(u.cZ(t,n))},restoreInitialStateConnect:function(){return e(C.restoreInitialState())}}}))(v))}}]);
//# sourceMappingURL=785.d8ddce52.chunk.js.map