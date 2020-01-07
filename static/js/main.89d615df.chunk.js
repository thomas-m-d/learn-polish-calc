(this["webpackJsonplearn-polish-calc"]=this["webpackJsonplearn-polish-calc"]||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(23),n(24),n(3)),l=n(4),s=n(6),u=n(5),h=n(10),p=n(7),m=n(1),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleKeypress=n.handleKeypress.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleKeypress",value:function(e){e.keyCode==this.props.charCode&&(e.preventDefault(),this.props.updateInfix())}},{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleKeypress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeypress)}},{key:"render",value:function(){return r.a.createElement("div",{className:"characterInputButtonDiv"},r.a.createElement("button",{id:this.props.buttonID,className:"characterInputButton",onClick:this.props.updateInfix},this.props.character))}}]),t}(r.a.Component),f=Object(m.b)((function(e){return{}}),(function(e,t){return{updateInfix:function(){return e({type:"CHARACTERINPUT",character:t.character})}}}))(d),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleKeyEvent=n.handleKeyEvent.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleKeyEvent",value:function(e){this.props.charCodes.includes(e.keyCode)&&this.props.performFunction()}},{key:"componentDidMount",value:function(){document.addEventListener(this.props.keyEvent,this.handleKeyEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener(this.props.keyEvent,this.handleKeyEvent)}},{key:"render",value:function(){return r.a.createElement("div",{className:"performFunctionButtonDiv"},r.a.createElement("button",{id:this.props.buttonID,className:"performFunctionButton",onClick:this.props.performFunction},this.props.character))}}]),t}(r.a.Component),b=Object(m.b)((function(e){return{}}),(function(e,t){return{performFunction:function(){return e({type:"PERFORMFUNCTION",function:t.function})}}}))(v),g=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"formulaInputField"},r.a.createElement("p",{id:this.props.inputID},this.props.text))}}]),t}(r.a.Component),E=Object(m.b)((function(e,t){return"infix"==t.type?{text:e.infixText}:"polish"==t.type?{text:e.polishText}:{}}),(function(e){return{}}))(g),x=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resultField"},r.a.createElement("p",{id:this.props.pID},this.props.text))}}]),t}(r.a.Component),y=Object(m.b)((function(e){return{text:e.resultText}}),(function(e){return{}}))(x),N=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"titleAndHelpInnerDiv"},r.a.createElement("div",{className:"titleAndHelpFlexBox"},r.a.createElement("h1",{className:"title"},"Learn Polish"),r.a.createElement("div",{className:"helpButtonDiv"},r.a.createElement("button",{className:"helpButton",onClick:this.props.updateHelp},this.props.buttonText))),r.a.createElement("p",{className:"help"},this.props.helpText))}}]),t}(r.a.Component),O=Object(m.b)((function(e){return{buttonText:e.helpButtonText,helpText:e.helpText}}),(function(e,t){return{updateHelp:function(){return e({type:"HELP"})}}}))(N),D=n(2),T=n(12),I=/[+\-*/^]/,k=/[+\-*/^~\.]/,j=/\./,C=/[0-9]/,A=/[1-9]/,B=/[+\-*/^][+\-*/^]/,w=/[*/+]/,S=/[*/]/,P=/[+-]/,H=/(\(|\))/,J=[46],F=[8],K=[13,61],L=["+","-","*","/","^"],R=function(e){if(I.test(e)){var t=e.slice(function(e){for(var t=0,n=0;n<L.length-1;n++)t<e.lastIndexOf(L[n])&&(t=e.lastIndexOf(L[n]));return t}(e)+1);return!!j.test(t)}return!!j.test(e)};function U(e,t){var n,a=JSON.parse(JSON.stringify(e.infixText));return"0"==t.character?1==(n=a).length&&"0"==n.charAt(0)||I.test(n.charAt(n.length-2))&&"0"==n.charAt(n.length-1)?a:a.concat(t.character):"."==t.character?R(a)?a:a.concat(t.character):")"==t.character?function(e){for(var t=0,n=0;n<e.length;n++)"("==e[n]?t++:")"==e[n]&&t--;return!(!(t>0)||")"!=e[e.lenth-1]&&!C.test(e[e.length-1]))}(a)?a.concat(t.character):a:"("==t.character?1==a.length&&"0"==a.charAt(0)?t.character:function(e){return!(!I.test(e[e.length-1])&&"("!=e[e.length-1])}(a)?a.concat(t.character):a:"~"==t.character?1==a.length&&"0"==a.charAt(0)?t.character:function(e){return!(!I.test(e.charAt(e.length-1))&&"~"!=e.charAt(e.length-1)&&"("!=e.charAt(e.length-1))}(a)?a.concat(t.character):a:I.test(t.character)?I.test(a[a.length-1])||"("==a[a.length-1]?a:a.concat(t.character):A.test(t.character)&&1==a.length&&"0"==a.charAt(0)?t.character:a.concat(t.character)}function W(e){for(var t=0,n=0;n<e.length;n++)"("==e.charAt(n)?t++:")"==e.charAt(n)&&t--;return 0==t&&!k.test(e.charAt(e.length-1))}var M=function(e){if("("==e.charAt(0)&&")"==e.charAt(e.length-1)){for(var t=0,n=1;n<e.length-2;n++)if("("==e.charAt(n)?t++:")"==e.charAt(n)&&t--,t<0)return!1;return!0}return!1},q=function(e){return e.slice(1,e.length-1)};function z(e){for(var t=JSON.parse(JSON.stringify(e));M(t);)t=q(t);if(isNaN(t.replace("~","-"))){var n=function(e){var t=[];if(M(e)){for(var n=0,a=q(JSON.parse(JSON.stringify(e)));M(a);)n++,q(a);for(var r=0;r<=n;r++)t.push(r);for(var c=e.length-(1+n);c<e.length;c++)t.push(c)}for(var i=0,o=0,l=0;l<e.length;l++)if(!t.includes(l))if("("==e.charAt(l))0==o&&(i=l),o++;else if(")"==e.charAt(l)&&0==--o)for(var s=i;s<=l;s++)t.push(s);for(var u=[],h=[],p=e.length-1;p>=0;p--)if(!t.includes(p)){if(P.test(e.charAt(p)))return p;S.test(e.charAt(p))?u.push(p):"^"==e.charAt(p)&&h.push(p)}return u.length>0?u.sort((function(e,t){return e-t}))[u.length-1]:h.length>0?h.sort((function(e,t){return e-t}))[h.length-1]:-1}(t),a=t.charAt(n).concat(" "),r=z(t.slice(0,n)).concat(" "),c=z(t.slice(n+1)).concat(" ");return(t=a.concat(r).concat(c)).trim()}return t.trim()}var G={textAlign:"justify",margin:"0 0 .35em 0"},$={margin:"0 0 .35em 0"},Q=r.a.createElement("div",null,r.a.createElement("p",{style:G},"Polish Notation (also known as Prefix Notation) is a set of conventions for writing mathematical formulae where the operators precede the numbers (or other mathematical objects) that they operate upon. Also, when every operator is unambiguous, Polish Notation allows one to represent formulae unambiguously without needing parentheses."),r.a.createElement("p",{style:G},"This calculator is intended to help the user learn the basics of Polish Notation. Either by clicking the in-app buttons or by typing the corresponding keys on their keyboard, the user can enter arithmetic formulae into the top line of the calculator using the more familiar Infix Notation that other calculators use (where operators occur between the numbers they operate upon). The middle line will automatically display the same formulae formatted in Polish Notation. When a formula is evaluated, the result will appear in the bottom line of the calculator."),r.a.createElement("p",{style:G},"There are two primary advantages to learning Polish Notation, one practical and one aesthetic. First, Polish Notation is used in certain programming languages (with LISP as one of the more notable), so to learn these languages one needs a familiarity with Polish Notation. Second, and more importantly, is the mathematical elegance that comes with no longer needing parentheses."),r.a.createElement("p",{style:{textAlign:"justify",marginBottom:".25em",fontWeight:"bold"}},"Usage Notes:"),r.a.createElement("ul",{style:{textAlign:"justify",paddingLeft:"1em",marginTop:"0"}},r.a.createElement("li",{style:$},"Unlike most calculators, which use the symbol '-' ambiguously to represent both subtraction (i.e. 1-1) and negation (i.e. -1), this calculator uses '-' to represent only subtraction. '~' is used to represent negation. This is to ensure no parentheses are needed in this calculator's use of Polish Notion."),r.a.createElement("li",{style:$},"The 'BS' button deletes the final character in the top-most line of the calculator. It can be triggered by typing the Backspace key."),r.a.createElement("li",{style:$},"The 'C' button clears all characters from the calculator. It can be triggered by typing the Delete key."),r.a.createElement("li",{style:$},"The '=' button can be triggered by typing the Equals Sign key or the Enter key.")));function V(e){return e.isHelpShown?(console.log("in if"),Object(D.a)({},e,{isHelpShown:!1,helpButtonText:"Show Help",helpText:""})):(console.log("in else"),Object(D.a)({},e,{isHelpShown:!0,helpButtonText:"Hide Help",helpText:Q}))}var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHARACTERINPUT":var n=U(e,t),a=W(n)?z(n):e.polishText;return Object(D.a)({},e,{infixText:n,polishText:a,resultText:Y.resultText,isNoteExpanded:e.isNoteExpanded});case"PERFORMFUNCTION":return t.function(e);case"HELP":return V(e);default:return e}},Y={infixText:"0",polishText:"0",resultText:"",isHelpShown:!1,helpButtonText:"Show Help",helpText:""},Z=Object(T.b)(X);function _(e){var t="",n="";return n=W(t=1==e.infixText.length?Y.infixText:JSON.parse(JSON.stringify(e.infixText)).slice(0,e.infixText.length-1))?z(t):e.polishText,Object(D.a)({},e,{infixText:t,polishText:n,resultText:Y.resultText})}function ee(e){return Object(D.a)({},e,{infixText:Y.infixText,polishText:Y.polishText,resultText:Y.resultText})}var te=function(e,t,n){return e.indexOf(t)<0&&e.indexOf(n)>=0?e.indexOf(n):e.indexOf(n)<0&&e.indexOf(t)>=0?e.indexOf(t):e.indexOf(t)>=0&&e.indexOf(n)>=0?e.indexOf(t)<e.indexOf(n)?e.indexOf(t):e.indexOf(n):-1},ne=function(e,t){console.log(e);var n=function(e,t){for(var n=t-1;n>0;){if(I.test(e.charAt(n))){n++;break}n--}return n}(e,t),a=function(e,t){for(var n=t+1;n<e.length-1;){if(I.test(e.charAt(n))){n--;break}n++}return n}(e,t),r=function(e,t,n){return e.slice(t,n).replace("~","-")}(e,n,t),c=function(e,t,n){return e.slice(t+1,n+1).replace("~","-")}(e,t,a),i=function(e,t,n){var a=Number(e),r=Number(n);return"+"==t?(a+r).toString().replace("-","~"):"-"==t?(a-r).toString().replace("-","~"):"*"==t?(a*r).toString().replace("-","~"):"/"==t?(a/r).toString().replace("-","~"):"^"==t?Math.pow(a,r).toString().replace("-","~"):""}(r,e.charAt(t),c);return console.log("leftNumber is: "+r),console.log("rightNumber is: "+c),console.log("result is: "+i),e.slice(0,n).concat(i).concat(e.slice(a+1))};function ae(e){for(var t=0,n=0;n<e.length;n++)"("==e[n]?t++:")"==e[n]&&t--;return 0!=t?"Check Parentheses":function(e){for(var t=0;P.test(e);)t=te(e,"+","-"),e=ne(e,t);return e}(function(e){for(var t=0;S.test(e);)t=te(e,"*","/"),e=ne(e,t);return e}(function(e){for(var t=0;e.indexOf("^")>=0;)t=e.indexOf("^"),e=ne(e,t);return e}(function(e){for(var t=0,n=0;H.test(e);){for(var a=0;a<e.length;a++)if(")"==e[a]){t=a;break}for(var r=t;r>=0;r--)if("("==e[r]){n=r;break}e=e.slice(0,n).concat(ae(e.slice(n+1,t))).concat(e.slice(t+1))}return e}(e))))}function re(e){return function(e){for(var t="~".concat("~"),n=e.search(t);n>=0;)n=(e=0==n?e.slice(n+2):e.slice(0,n).concat(e.slice(n+2))).search(t);return e}(function(e){for(var t=JSON.parse(JSON.stringify(e)),n=0;B.test(t);)I.test(t.charAt(n))&&w.test(t.charAt(n+1))?(t=t.slice(0,n).concat(t.slice(n+1)),n=0):n++;return t}(function(e){for(var t=JSON.parse(JSON.stringify(e));I.test(t.charAt(t.length-1));)t=t.slice(0,t.length-2);return t}(e)))}function ce(e){var t=ae(re(JSON.parse(JSON.stringify(e.infixText))));return Object(D.a)({},e,{infixText:e.infixText,polishText:e.polishText,resultText:t})}var ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"calcGrid"},r.a.createElement("div",{id:"titleAndHelpDiv"},r.a.createElement(O,null)),r.a.createElement("div",{id:"infixInputDiv",className:"formulaInput"},r.a.createElement(E,{inputID:"infixInput",type:"infix"})),r.a.createElement("div",{id:"polishInputDiv",className:"formulaInput"},r.a.createElement(E,{inputID:"polishInput",type:"polish"})),r.a.createElement("div",{id:"resultFieldDiv"},r.a.createElement(y,{pID:"resultP"})),r.a.createElement("div",{id:"zeroDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"zero",character:"0",charCode:48})),r.a.createElement("div",{id:"oneDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"one",character:"1",charCode:49})),r.a.createElement("div",{id:"twoDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"two",character:"2",charCode:50})),r.a.createElement("div",{id:"threeDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"three",character:"3",charCode:51})),r.a.createElement("div",{id:"fourDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"four",character:"4",charCode:52})),r.a.createElement("div",{id:"fiveDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"five",character:"5",charCode:53})),r.a.createElement("div",{id:"sixDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"six",character:"6",charCode:54})),r.a.createElement("div",{id:"sevenDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"seven",character:"7",charCode:55})),r.a.createElement("div",{id:"eightDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"eight",character:"8",charCode:56})),r.a.createElement("div",{id:"nineDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"nine",character:"9",charCode:57})),r.a.createElement("div",{id:"decimalDiv",className:"numberButton"},r.a.createElement(f,{buttonID:"decimal",character:".",charCode:46})),r.a.createElement("div",{id:"addDiv",className:"operatorButton"},r.a.createElement(f,{buttonID:"add",character:"+",charCode:43})),r.a.createElement("div",{id:"subtractDiv",className:"operatorButton"},r.a.createElement(f,{buttonID:"subtract",character:"-",charCode:45})),r.a.createElement("div",{id:"multiplyDiv",className:"operatorButton"},r.a.createElement(f,{buttonID:"multiply",character:"*",charCode:42})),r.a.createElement("div",{id:"divideDiv",className:"operatorButton"},r.a.createElement(f,{buttonID:"divide",character:"/",charCode:47})),r.a.createElement("div",{id:"exponentDiv",className:"operatorButton"},r.a.createElement(f,{buttonID:"exponent",character:"^",charCode:94})),r.a.createElement("div",{id:"negativeDiv",className:"operatorButton"},r.a.createElement(f,{buttonID:"negative",character:"~",charCode:126})),r.a.createElement("div",{id:"leftParenDiv",className:"parenButton"},r.a.createElement(f,{buttonID:"leftParen",character:"(",charCode:40})),r.a.createElement("div",{id:"rightParenDiv",className:"parenButton"},r.a.createElement(f,{buttonID:"rightParen",character:")",charCode:41})),r.a.createElement("div",{id:"backspaceDiv",class:"functionButton"},r.a.createElement(b,{buttonID:"backspace",character:"BS",charCodes:F,keyEvent:"keydown",function:_})),r.a.createElement("div",{id:"clearDiv",class:"functionButton"},r.a.createElement(b,{buttonID:"clear",character:"C",charCodes:J,keyEvent:"keydown",function:ee})),r.a.createElement("div",{id:"equalsDiv",class:"functionButton"},r.a.createElement(b,{buttonID:"equals",character:"=",charCodes:K,keyEvent:"keypress",function:ce}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m.a,{store:Z},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.89d615df.chunk.js.map