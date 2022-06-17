"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[8150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),h=l,d=s["".concat(u,".").concat(h)]||s[h]||c[h]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={sidebar_position:120},u="120. Triangle",m={unversionedId:"leetcode/medium/Triangle",id:"leetcode/medium/Triangle",title:"120. Triangle",description:"Question",source:"@site/docs/leetcode/medium/120. Triangle.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Triangle",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Triangle",tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120},sidebar:"lcSidebar",previous:{title:"99. Recover Binary Search Tree",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Recover Binary Search Tree"},next:{title:"230. Kth Smallest Element in a BST",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Kth Smallest Element in a BST"}},p={},c=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],s={toc:c};function h(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"120-triangle"},"120. Triangle"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"Given a ",(0,o.kt)("inlineCode",{parentName:"p"},"triangle")," array, return the ",(0,o.kt)("em",{parentName:"p"},"minimum path sum")," from top to bottom."),(0,o.kt)("p",null,"For each step, you may move to an adjacent number of the row below. More formally, if you are on index ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," on the current row, you may move to either index ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," or index ",(0,o.kt)("inlineCode",{parentName:"p"},"i + 1")," on the next row."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]\nOutput: 11\nExplanation: The triangle looks like:\n   2\n  3 4\n 6 5 7\n4 1 8 3\nThe minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: triangle = [[-10]]\nOutput: -10\n")),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"<= triangle.length <= 200"),(0,o.kt)("li",{parentName:"ul"},"triangle","[0]",".length == 1"),(0,o.kt)("li",{parentName:"ul"},"triangle","[i]",".length == triangle","[i - 1]",".length + 1"),(0,o.kt)("li",{parentName:"ul"},"-10^4 <= triangle","[i][j]"," <= 10^4")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("p",null,"Naive solution is to start from the top of the triangle, and iterate through to the bottom while look for the smallest element. However, the minimum path sum ",(0,o.kt)("strong",{parentName:"p"},"might not necessarily be")," the smallest element on each level."),(0,o.kt)("p",null,"(In Place Bottom-Up)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Iterate from the second last level of the triangle, and move upwards. Because we will be computing the level below in each iterations."),(0,o.kt)("li",{parentName:"ol"},"For each level of the triangle, iterate through all the elements."),(0,o.kt)("li",{parentName:"ol"},"Update the current triangle value to the minimum between the ",(0,o.kt)("inlineCode",{parentName:"li"},"i"),"th and ",(0,o.kt)("inlineCode",{parentName:"li"},"i+1"),"th element on the level below."),(0,o.kt)("li",{parentName:"ol"},"So that when we slowly move upwards, the elements are always the minimum sum of the previous levels."),(0,o.kt)("li",{parentName:"ol"},"Finally when we reach the top of the triangle, it is the smallest sum path.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:    \n    int minimumTotal(vector<vector<int>>& triangle) {\n        //Iterate from the second last level of triangle onwards, because we will be computing the level below in each iterations.\n       for(int lv = triangle.size()-2; lv >= 0; lv--){\n           //the size of each triangle levels is the level + 1\n           //e.g. 0th level has 1 element, 1st level has 2 elements\n           for(int i = 0; i <= lv; i++){\n               //Update the current triangle value with the current value + the minimum value from below\n               triangle[lv][i] += min(triangle[lv+1][i],triangle[lv+1][i+1]);\n           }\n       }\n        //When we reach the top, it will be the smallest sum path\n        return triangle[0][0];\n    }\n};\n")))}h.isMDXComponent=!0}}]);