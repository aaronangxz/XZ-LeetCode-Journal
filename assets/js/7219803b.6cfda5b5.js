"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[3656],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return S}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},E={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),S=o,_=p["".concat(i,".").concat(S)]||p[S]||E[S]||s;return t?r.createElement(_,c(c({ref:n},l),{},{components:t})):r.createElement(_,c({ref:n},l))}));function S(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<s;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},425:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return S},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return E}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),c=["components"],a={displayed_sidebar:"notesSideBar"},i="GitHub Actions",u={unversionedId:"notes/CICD/GitHubActions",id:"notes/CICD/GitHubActions",title:"GitHub Actions",description:"- ${{secrets.X}} will read from Github secrets",source:"@site/docs/notes/CICD/GitHubActions.md",sourceDirName:"notes/CICD",slug:"/notes/CICD/GitHubActions",permalink:"/XZ-LeetCode-Journal/docs/notes/CICD/GitHubActions",tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Selection Sort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/SelectionSort"},next:{title:"Multi Threading",permalink:"/XZ-LeetCode-Journal/docs/notes/CS fundamentals/Multi Threading"}},l={},E=[],p={toc:E};function S(e){var n=e.components,t=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,s.kt)("h1",{id:"deploy"},"Deploy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"${{secrets.X}}")," will read from Github secrets")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'# This is a basic workflow to help you get started with Actions\n\nname: Deployment\n\n# Controls when the workflow will run\non:\n  # Triggers the workflow on push or pull request events but only for the master branch\n  push:\n    branches: [ master ]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  # This workflow contains a single job called "build"\n  build:\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v2\n      - name: Heroku login credentials\n        run: |\n          cat > ~/.netrc <<EOF\n            machine api.heroku.com\n              login $HEROKU_EMAIL\n              password $HEROKU_API_KEY\n            machine git.heroku.com\n              login $HEROKU_EMAIL\n              password $HEROKU_API_KEY\n          EOF\n        env:\n          HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}\n          HEROKU_EMAIL: ${{ secrets.HEROKU_EMAIL }}\n      - name: Login Heroku\n        run: heroku login\n      - name: Set Remote\n        run: heroku git:remote -a sea-dinner-order\n      - name: Filter\n        run: git filter-branch -- --all\n      - name: Push\n        working-directory: ./\n        run: git push --force heroku master\n')),(0,s.kt)("h1",{id:"codecov"},"CodeCov"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"name: Test and coverage\n\non: [push, pull_request]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          fetch-depth: 2\n      - uses: actions/setup-go@v2\n        with:\n          go-version: '1.17'\n      - name: Run coverage in processors\n        working-directory: processors\n        env:\n          TEST_DB_USERNAME: ${{secrets.TEST_DB_USERNAME}}\n          TEST_DB_PASSWORD: ${{secrets.TEST_DB_PASSWORD}}\n          TEST_DB_URL: ${{secrets.TEST_DB_URL}}\n          TEST_DB_NAME: ${{secrets.TEST_DB_NAME}}\n          AES_KEY: ${{secrets.AES_KEY}}\n          TOKEN: ${{secrets.TOKEN}}\n          TEST_REDIS_URL: ${{secrets.TEST_REDIS_URL}}\n          TEST_REDIS_PORT: ${{secrets.TEST_REDIS_PORT}}\n          TEST_REDIS_PASSWORD: ${{secrets.TEST_REDIS_PASSWORD}}\n          TEST_NEWRELIC_KEY: ${{secrets.TEST_NEWRELIC_KEY}}\n        run: go test -coverprofile=coverage.out -covermode=atomic\n      - name: Run coverage in bot\n        working-directory: bot\n        env:\n          TEST_DB_USERNAME: ${{secrets.TEST_DB_USERNAME}}\n          TEST_DB_PASSWORD: ${{secrets.TEST_DB_PASSWORD}}\n          TEST_DB_URL: ${{secrets.TEST_DB_URL}}\n          TEST_DB_NAME: ${{secrets.TEST_DB_NAME}}\n          AES_KEY: ${{secrets.AES_KEY}}\n          TOKEN: ${{secrets.TOKEN}}\n          REDIS_URL: ${{secrets.REDIS_URL}}\n          REDIS_PORT: ${{secrets.REDIS_PORT}}\n          REDIS_PASSWORD: ${{secrets.REDIS_PASSWORD}}\n          TEST_REDIS_URL: ${{secrets.TEST_REDIS_URL}}\n          TEST_REDIS_PORT: ${{secrets.TEST_REDIS_PORT}}\n          TEST_REDIS_PASSWORD: ${{secrets.TEST_REDIS_PASSWORD}}\n          TEST_NEWRELIC_KEY: ${{secrets.TEST_NEWRELIC_KEY}}\n        run: go test -coverprofile=coverage.out -covermode=atomic\n      - name: Upload coverage to Codecov\n        uses: codecov/codecov-action@v2\n")),(0,s.kt)("h1",{id:"static-check"},"Static Check"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Matrix: Runs all combinations")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'name: "StaticCheck"\non: ["push", "pull_request"]\n\njobs:\n  ci:\n    name: "Run Static Check"\n    strategy:\n      fail-fast: false\n      matrix:\n        os: ["windows-latest", "ubuntu-latest", "macOS-latest"]\n        go: ["1.17.x"]\n    runs-on: ${{ matrix.os }}\n    steps:\n      - uses: actions/checkout@v1\n        with:\n          fetch-depth: 1\n      - uses: WillAbides/setup-go-faster@v1.7.0\n        with:\n          go-version: ${{ matrix.go }}\n      - run: "go vet ./..."\n      - uses: dominikh/staticcheck-action@v1.2.0\n        with:\n          version: "2022.1.1"\n          install-go: false\n          cache-key: ${{ matrix.go }}\n')))}S.isMDXComponent=!0}}]);