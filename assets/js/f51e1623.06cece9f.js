"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[2146],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,f=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1723},u="1732. Find the Highest Altitude",p={unversionedId:"tutorial-basics/Find the Highest Altitude",id:"tutorial-basics/Find the Highest Altitude",title:"1732. Find the Highest Altitude",description:"Question",source:"@site/docs/tutorial-basics/1732. Find the Highest Altitude.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Find the Highest Altitude",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Find the Highest Altitude",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/docs/tutorial-basics/1732. Find the Highest Altitude.md",tags:[],version:"current",sidebarPosition:1723,frontMatter:{sidebar_position:1723},sidebar:"tutorialSidebar",previous:{title:"1592. Rearrange Spaces Between Words",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Rearrange Spaces Between Words"},next:{title:"1929. Concatenation of Array",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Concatenation of Array"}},s={},c=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1732-find-the-highest-altitude"},"1732. Find the Highest Altitude"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"There is a biker going on a road trip. The road trip consists of ",(0,a.kt)("inlineCode",{parentName:"p"},"n + 1")," points at different altitudes. The biker starts his trip on point ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," with altitude equal ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"You are given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"gain")," of length ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"gain[i]")," is the ",(0,a.kt)("strong",{parentName:"p"},"net gain in altitude")," between points ",(0,a.kt)("inlineCode",{parentName:"p"},"i\u200b\u200b\u200b\u200b\u200b\u200b")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"i + 1")," for all ",(0,a.kt)("inlineCode",{parentName:"p"},"(0 <= i < n)"),". Return the ",(0,a.kt)("strong",{parentName:"p"},"highest altitude")," of a point."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: gain = [-5,1,5,0,-7]\nOutput: 1\nExplanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: gain = [-4,-3,-2,-1,4,3,2]\nOutput: 0\nExplanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- n == gain.length\n- 1 <= n <= 100\n- -100 <= gain[i] <= 100\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iterate through the vector, and increment ",(0,a.kt)("inlineCode",{parentName:"li"},"current")," along the way."),(0,a.kt)("li",{parentName:"ol"},"If current is greater than max, replace max.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int largestAltitude(vector<int>& gain) {\n        int max = 0;\n        int current = 0;\n        \n        for(int i = 0; i < gain.size(); i++){\n            current = current + gain[i];\n            if(current > max) max = current;\n        }\n        \n        return max;\n    }\n};\n")))}h.isMDXComponent=!0}}]);