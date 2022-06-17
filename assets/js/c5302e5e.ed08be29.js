"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[3365],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},259:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:338},u="338. Counting Bits",c={unversionedId:"leetcode/easy/Counting Bits",id:"leetcode/easy/Counting Bits",title:"338. Counting Bits",description:"Question",source:"@site/docs/leetcode/easy/338. Counting Bits.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Counting Bits",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Counting Bits",tags:[],version:"current",sidebarPosition:338,frontMatter:{sidebar_position:338},sidebar:"lcSidebar",previous:{title:"242. Valid Anagram",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Valid Anagram"},next:{title:"392. Is Subsequence",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Is Subsequence"}},p={},s=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"338-counting-bits"},"338. Counting Bits"),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,"Given an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", return an array ",(0,i.kt)("inlineCode",{parentName:"p"},"ans")," of length ",(0,i.kt)("inlineCode",{parentName:"p"},"n + 1")," such that for each ",(0,i.kt)("inlineCode",{parentName:"p"},"i (0 <= i <= n), ans[i]")," is the ",(0,i.kt)("strong",{parentName:"p"},"number of")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"'s in the binary representation of ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),"."),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 2\nOutput: [0,1,1]\nExplanation:\n0 --\x3e 0\n1 --\x3e 1\n2 --\x3e 10\n")),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 5\nOutput: [0,1,1,2,1,2]\nExplanation:\n0 --\x3e 0\n1 --\x3e 1\n2 --\x3e 10\n3 --\x3e 11\n4 --\x3e 100\n5 --\x3e 101\n")),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0 <= n <= 10<sup>5</sup>\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Start checking numbers from 0 till ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,i.kt)("li",{parentName:"ol"},"For every number, convert it into bits by doing % 2 and / 2, and if the result is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", increment the count."),(0,i.kt)("li",{parentName:"ol"},"Append the count into the output vector."),(0,i.kt)("li",{parentName:"ol"},"Proceed to the next number.")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> countBits(int n) {\n        int i = 0;\n        int count = 0;\n        vector<int> res;\n        \n        while(i <= n){\n            count = 0;\n            int now = i;\n            \n            while(now >0){\n                int rem = now % 2;\n                now /= 2;\n                if(rem == 1) count++;\n            }\n            \n            res.push_back(count);\n            i++;\n        }\n        return res;\n    }\n};\n")))}m.isMDXComponent=!0}}]);