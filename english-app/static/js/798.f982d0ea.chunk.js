"use strict";(self.webpackChunkenglish_app=self.webpackChunkenglish_app||[]).push([[798],{7798:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5671),s=n(3144),c=n(9340),a=n(5716),o=n(2791),i=n(6434),l=n(4251),u=(n(6562),n(9588)),h=n(1872),d=n(7229),S=n(184),f=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={currentSet:0,currentSentence:"",currentSentenceIndex:0,totalSentencesQty:10,sentence:[],correctSentence:[],taskName:"",answeredSentence:[],totalCorrect:0,isIncorrect:!1},e.answeredRef=o.createRef(),e.isSentenceCorrect=function(){var t=e.state,n=t.correctSentence,r=t.answeredSentence;return n.join(" ")===r.join(" ")},e.highlightErrors=function(){var t=e.state,n=t.correctSentence,r=t.answeredSentence,s=e.answeredRef.current.children;n.forEach((function(e,t){e!==r[t]&&s[t+1].classList.add("-incorrect")})),e.setState({isIncorrect:!0})},e.selectWord=function(t){var n=t.target.textContent;e.setState((function(e){return{answeredSentence:e.answeredSentence.concat(n),currentSet:e.currentSet+1}}),(function(){var t=e.state,n=t.correctSentence,r=t.answeredSentence;n.length===r.length&&(e.isSentenceCorrect()?e.setState((function(e){return{totalCorrect:e.totalCorrect+1,currentSentenceIndex:e.currentSentenceIndex+1,currentSet:0}})):e.highlightErrors())}))},e.removeLastWord=function(){e.setState((function(e){return{answeredSentence:e.answeredSentence.slice(0,-1),currentSet:e.currentSet-1}}))},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.props.fetchData("https://spreadsheets.google.com/feeds/list/1n5633PymXXc-qW_UWMMFxaJYpR-r5PoXrGMaOn7VfF0/".concat(this.props.page,"/public/values?alt=json"))}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentSentenceIndex>=this.state.totalSentencesQty,r=this.state.totalCorrect&&t.totalCorrect!==this.state.totalCorrect;if((e.data!==this.props.data||r)&&!n){var s=this.props.data[this.state.currentSentenceIndex];this.setState({taskName:s.taskName,sentence:s.wordSets,currentSentence:s.translation,correctSentence:s.correctSentence,answeredSentence:[],totalSentencesQty:this.props.data.length})}}},{key:"componentWillUnmount",value:function(){this.props.clearData("fetchedData")}},{key:"render",value:function(){var e=this;return this.props.loading?(0,S.jsx)(h.Z,{}):this.state.totalCorrect===this.state.totalSentencesQty?(0,S.jsx)(u.Z,{children:"Wiktory!"}):(0,S.jsxs)("div",{className:"wrapper",children:[(0,S.jsx)("div",{className:"task-name",children:this.state.taskName}),(0,S.jsx)("div",{className:"current-sentence",children:this.state.currentSentence}),(0,S.jsxs)("div",{ref:this.answeredRef,className:"answer",children:[(0,S.jsx)("span",{className:"voice-over-icon".concat(this.state.isIncorrect?"":" -hidden"),onClick:function(){return(0,d.ar)(e.state.correctSentence.join(","))}}),this.state.answeredSentence.map((function(e,t){return[(0,S.jsx)("span",{children:e},e+t)," "]})),(0,S.jsx)("i",{className:"delete-word".concat(this.state.answeredSentence.length?"":" -hidden"),onClick:this.removeLastWord})]}),(0,S.jsx)("ul",{className:"sentence-tiles",children:this.state.sentence.length&&this.state.currentSet!==this.state.sentence.length&&this.state.sentence[this.state.currentSet].map((function(t){return(0,S.jsx)("li",{onClick:e.selectWord,children:t},t)}))}),(0,S.jsx)("button",{className:"show-rule",children:"Show the Rule"}),(0,S.jsx)("div",{className:"progress-bar-holder",children:(0,S.jsx)("ol",{className:"progress-bar",children:Array(this.state.totalSentencesQty).fill(1).map((function(t,n){return(0,S.jsx)("li",{className:"progress-dot".concat(e.state.currentSentenceIndex===n?" -current":"")},n)}))})})]})}}]),n}(o.Component),p=(0,i.$j)((function(e){return{data:e.wordsConstructor.fetchedData,loading:e.wordsConstructor.loading,error:e.wordsConstructor.error}}),(function(e){return{fetchData:function(t){return e(l.cZ(t))},clearData:function(t){return e(l.Nk(t))}}}))(f)}}]);
//# sourceMappingURL=798.f982d0ea.chunk.js.map