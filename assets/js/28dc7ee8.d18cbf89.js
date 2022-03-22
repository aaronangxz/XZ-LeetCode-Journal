"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6043],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:856},s="[WIP] 856. Score of Parentheses",u={unversionedId:"tutorial-extras/Score of Parentheses",id:"tutorial-extras/Score of Parentheses",title:"[WIP] 856. Score of Parentheses",description:"Question",source:"@site/docs/tutorial-extras/856. Score of Parentheses.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/Score of Parentheses",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Score of Parentheses",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/docs/tutorial-extras/856. Score of Parentheses.md",tags:[],version:"current",sidebarPosition:856,frontMatter:{sidebar_position:856},sidebar:"tutorialSidebar",previous:{title:"763. Partition Labels",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Partition Labels"},next:{title:"946. Validate Stack Sequences",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Validate Stack Sequences"}},c={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wip-856-score-of-parentheses"},"[WIP]"," 856. Score of Parentheses"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given a balanced parentheses string ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),", return the ",(0,a.kt)("strong",{parentName:"p"},"score")," of the string."),(0,a.kt)("p",null,"The score of a balanced parentheses string is based on the following rule:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"()"')," has score ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AB")," has score ",(0,a.kt)("inlineCode",{parentName:"li"},"A + B"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," are balanced parentheses strings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(A)")," has score ",(0,a.kt)("inlineCode",{parentName:"li"},"2 * A"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," is a balanced parentheses string.")),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "()"\nOutput: 1\n')),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "(())"\nOutput: 2\n')),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "()()"\nOutput: 2\n')),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ","[0, 500]","."),(0,a.kt)("li",{parentName:"ul"},"-100 <= Node.val <= 100"),(0,a.kt)("li",{parentName:"ul"},"0 <= k <= 2 * 109")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int scoreOfParentheses(string s) {\n        stack<int> count;\n        int score = 0;\n        \n        for(int i = 0; i < s.size(); i++){\n            if(s[i] == '('){\n                count.push(score);\n                score = 0;\n            } else{\n                score += count.top() + max(score,1);\n                count.pop();\n            }\n        }\n        return score;\n    }\n};\n")))}f.isMDXComponent=!0}}]);