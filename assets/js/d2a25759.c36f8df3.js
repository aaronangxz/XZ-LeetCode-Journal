"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6237],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2006:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],u={sidebar_position:88},s="[WIP] 88. Merge Sorted Array",l={unversionedId:"tutorial-basics/Merge Sorted Array",id:"tutorial-basics/Merge Sorted Array",title:"[WIP] 88. Merge Sorted Array",description:"Question",source:"@site/docs/tutorial-basics/88. Merge Sorted Array.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Merge Sorted Array",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Merge Sorted Array",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/88. Merge Sorted Array.md",tags:[],version:"current",sidebarPosition:88,frontMatter:{sidebar_position:88},sidebar:"tutorialSidebar",previous:{title:"53. Maximum Subarray",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Maximum Subarray"},next:{title:"125. Valid Palindrome",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Valid Palindrome"}},p={},m=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wip-88-merge-sorted-array"},"[WIP]"," 88. Merge Sorted Array"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"You are given two integer arrays ",(0,o.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nums2"),", sorted in ",(0,o.kt)("strong",{parentName:"p"},"non-decreasing order"),", and two integers ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", representing the number of elements in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nums2")," respectively."),(0,o.kt)("p",null,"Merge ",(0,o.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nums2")," into a single array sorted in ",(0,o.kt)("strong",{parentName:"p"},"non-decreasing order"),"."),(0,o.kt)("p",null,"The final sorted array should not be returned by the function, but instead be stored inside the array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums1"),". To accommodate this, ",(0,o.kt)("inlineCode",{parentName:"p"},"nums1")," has a length of ",(0,o.kt)("inlineCode",{parentName:"p"},"m + n"),", where the first ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," elements denote the elements that should be merged, and the last ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," elements are set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and should be ignored. ",(0,o.kt)("inlineCode",{parentName:"p"},"nums2")," has a length of ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\nOutput: [1,2,2,3,5,6]\nExplanation: The arrays we are merging are [1,2,3] and [2,5,6].\nThe result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums1 = [1], m = 1, nums2 = [], n = 0\nOutput: [1]\nExplanation: The arrays we are merging are [1] and [].\nThe result of the merge is [1].\n")),(0,o.kt)("p",null,"Example 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums1 = [0], m = 0, nums2 = [1], n = 1\nOutput: [1]\nExplanation: The arrays we are merging are [] and [1].\nThe result of the merge is [1].\nNote that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.\n")),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nums1.length == m + n\nnums2.length == n\n0 <= m, n <= 200\n1 <= m + n <= 200\n-109 <= nums1[i], nums2[j] <= 109\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        int i = 0, j = 0;\n        \n        for(int i = n - 1; i >= 0; i--){\n            int last = nums1[j];\n            for (j = m - 1; j >= 0 && nums1[j] > nums2[i];j--){\n                nums1[j+1] = nums1[j];\n                last = nums1[j+1]\n            }\n            nums1[j+1] = nums2[i];\n            \n            if(j != m-1 || nums2[i] > last) {\n                \n            }\n        }\n    }\n};\n")))}d.isMDXComponent=!0}}]);