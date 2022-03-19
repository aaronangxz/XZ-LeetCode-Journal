"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6731],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:217},u="217. Contains Duplicate",c={unversionedId:"tutorial-basics/Contains Duplicate",id:"tutorial-basics/Contains Duplicate",title:"217. Contains Duplicate",description:"Question",source:"@site/docs/tutorial-basics/217. Contains Duplicate.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Contains Duplicate",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Contains Duplicate",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/docs/tutorial-basics/217. Contains Duplicate.md",tags:[],version:"current",sidebarPosition:217,frontMatter:{sidebar_position:217},sidebar:"tutorialSidebar",previous:{title:"125. Valid Palindrome",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Valid Palindrome"},next:{title:"242. Valid Anagram",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Valid Anagram"}},s={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"217-contains-duplicate"},"217. Contains Duplicate"),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if any value appears at least twice in the array, and return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if every element is distinct."),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1]\nOutput: true\n")),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1]\nOutput: true\n")),(0,i.kt)("p",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n")),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- 1 <= nums.length <= 105\n- -109 <= nums[i] <= 109\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a hash table with ",(0,i.kt)("inlineCode",{parentName:"li"},"unordered_map")," with both key and value as integer. The key will be the element from ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),", while value will be the number of occurences."),(0,i.kt)("li",{parentName:"ol"},"Iterate through the ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," vector, for every element, insert into the table and at the same time increment the count."),(0,i.kt)("li",{parentName:"ol"},"As long as the count is > 1, it is a duplicate.")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        //hash map\n       unordered_map<int,int> m;\n        \n        for(int i = 0; i < nums.size(); i++){\n            //insert into map, in the position of current element\n            //increment count\n            m[nums[i]]++;\n            \n            //when the element has more than 1 as value, it is a duplicate\n            if(m[nums[i]] > 1) return true;\n        }\n        \n        return false;\n    }\n};\n")))}d.isMDXComponent=!0}}]);