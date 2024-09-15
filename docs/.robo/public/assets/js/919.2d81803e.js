(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[919],{9047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var a=n(7294);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:c.length>0?a.createElement(a.Fragment,null,c):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var o=n(7462),r=n(6905),l=n(5999),s=n(5281);const i={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function m(e){let{type:t,className:n,children:c}=e;return a.createElement("div",{className:(0,r.Z)(s.k.common.admonition,s.k.common.admonitionType(t),i.admonition,n)},c)}function d(e){let{icon:t,title:n}=e;return a.createElement("div",{className:i.admonitionHeading},a.createElement("span",{className:i.admonitionIcon},t),n)}function u(e){let{children:t}=e;return t?a.createElement("div",{className:i.admonitionContent},t):null}function f(e){const{type:t,icon:n,title:c,children:o,className:r}=e;return a.createElement(m,{type:t,className:r},c||n?a.createElement(d,{title:c,icon:n}):null,a.createElement(u,null,o))}function p(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 14 16"},e),a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))}const h={icon:a.createElement(p,null),title:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")};function E(e){return a.createElement(f,(0,o.Z)({},h,e,{className:(0,r.Z)("alert alert--secondary",e.className)}),e.children)}function g(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 12 16"},e),a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))}const b={icon:a.createElement(g,null),title:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")};function v(e){return a.createElement(f,(0,o.Z)({},b,e,{className:(0,r.Z)("alert alert--success",e.className)}),e.children)}function N(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 14 16"},e),a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))}const y={icon:a.createElement(N,null),title:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")};function k(e){return a.createElement(f,(0,o.Z)({},y,e,{className:(0,r.Z)("alert alert--info",e.className)}),e.children)}function C(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 16 16"},e),a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))}const Z={icon:a.createElement(C,null),title:a.createElement(l.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)"},"warning")};function L(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 12 16"},e),a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))}const B={icon:a.createElement(L,null),title:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")};const w={icon:a.createElement(C,null),title:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")};const x={...{note:E,tip:v,info:k,warning:function(e){return a.createElement(f,(0,o.Z)({},Z,e,{className:(0,r.Z)("alert alert--warning",e.className)}),e.children)},danger:function(e){return a.createElement(f,(0,o.Z)({},B,e,{className:(0,r.Z)("alert alert--danger",e.className)}),e.children)}},...{secondary:e=>a.createElement(E,(0,o.Z)({title:"secondary"},e)),important:e=>a.createElement(k,(0,o.Z)({title:"important"},e)),success:e=>a.createElement(v,(0,o.Z)({title:"success"},e)),caution:function(e){return a.createElement(f,(0,o.Z)({},w,e,{className:(0,r.Z)("alert alert--warning",e.className)}),e.children)}}};function H(e){const t=c(e),n=(o=t.type,x[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),x.info));var o;return a.createElement(n,t)}},4881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(7294),c=n(5999),o=n(5281),r=n(3692),l=n(7462),s=n(6905);const i={iconEdit:"iconEdit_Z9Sw"};function m(e){let{className:t,...n}=e;return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement(r.Z,{to:t,className:o.k.common.editThisPage},a.createElement(m,null),a.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(7294),c=n(5999),o=n(5281),r=n(2263);function l(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.Z)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function s(e){let{lastUpdatedAt:t}=e;const n=new Date(t),o=l({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return a.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:n.toISOString(),itemProp:"dateModified"},o))}}," on {date}")}function i(e){let{lastUpdatedBy:t}=e;return a.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function m(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return a.createElement("span",{className:o.k.common.lastUpdated},a.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?a.createElement(s,{lastUpdatedAt:t}):"",byUser:n?a.createElement(i,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}},4332:(e,t,n)=>{"use strict";n.d(t,{Z:()=>se});var a=n(7294),c=n(1151),o=n(7462),r=n(5742),l=n(2389),s=n(6905),i=n(2949),m=n(6668);function d(){const{prism:e}=(0,m.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var u=n(5281),f=n(7594),p=n.n(f);const h=/title=(?<quote>["'])(?<title>.*?)\1/,E=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(g);function N(e,t){const n=e.map((e=>{const{start:n,end:a}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:c,metastring:o}=t;if(o&&E.test(o)){const e=o.match(E).groups.range;if(0===c.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=c[0].className,a=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],t);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],t);case"html":return N(["js","jsBlock","html"],t);case"python":case"py":case"bash":return N(["bash"],t);case"markdown":case"md":return N(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return N(["tex"],t);case"lua":case"haskell":case"sql":return N(["lua"],t);case"wasm":return N(["wasm"],t);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],t);case"vbnet":return N(["vbnet","rem"],t);case"batch":return N(["rem"],t);case"basic":return N(["rem","f90"],t);case"fsharp":return N(["js","ml"],t);case"ocaml":case"sml":return N(["ml"],t);case"fortran":return N(["f90"],t);case"cobol":return N(["cobol"],t);default:return N(v,t)}}(a,c),l=n.split("\n"),s=Object.fromEntries(c.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(c.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let f=0;f<l.length;){const e=l[f].match(r);if(!e){f+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${f},`:m[t]?s[m[t]].start=f:d[t]&&(s[d[t]].range+=`${s[d[t]].start}-${f-1},`),l.splice(f,1)}n=l.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const k={codeBlockContainer:"codeBlockContainer_Ckt0"};function C(e){let{as:t,...n}=e;const c=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,c]=e;const o=t[a];o&&"string"==typeof c&&(n[o]=c)})),n}(d());return a.createElement(t,(0,o.Z)({},n,{style:c,className:(0,s.Z)(n.className,k.codeBlockContainer,u.k.common.codeBlock)}))}const Z={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L(e){let{children:t,className:n}=e;return a.createElement(C,{as:"pre",tabIndex:0,className:(0,s.Z)(Z.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Z.codeBlockLines},t))}var B=n(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function x(e,t){const[n,c]=(0,a.useState)(),o=(0,a.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=w);const c=(0,B.zX)(t),o=(0,B.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,o),()=>t.disconnect()}),[e,c,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var H=n(4965);const _={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:c,getLineProps:r,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,s.Z)(n,c&&_.codeLine)}),m=t.map(((e,t)=>a.createElement("span",(0,o.Z)({key:t},l({token:e})))));return a.createElement("span",i,c?a.createElement(a.Fragment,null,a.createElement("span",{className:_.codeLineNumber}),a.createElement("span",{className:_.codeLineContent},m)):m,a.createElement("br",null))}var A=n(5999);function I(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function S(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function j(e){let{code:t,className:n}=e;const[c,o]=(0,a.useState)(!1),r=(0,a.useRef)(void 0),l=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const a=document.createElement("textarea"),c=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection(),r=o.rangeCount>0&&o.getRangeAt(0);n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),c&&c.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),a.createElement("button",{type:"button","aria-label":c?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,M.copyButton,c&&M.copyButtonCopied),onClick:l},a.createElement("span",{className:M.copyButtonIcons,"aria-hidden":"true"},a.createElement(I,{className:M.copyButtonIcon}),a.createElement(S,{className:M.copyButtonSuccessIcon})))}function z(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function U(e){let{className:t,onClick:n,isEnabled:c}=e;const o=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,c&&R.wordWrapButtonEnabled),"aria-label":o,title:o},a.createElement(z,{className:R.wordWrapButtonIcon,"aria-hidden":"true"}))}function O(e){let{children:t,className:n="",metastring:c,title:o,showLineNumbers:r,language:l}=e;const{prism:{defaultLanguage:i,magicComments:u}}=(0,m.L)(),f=function(e){return e?.toLowerCase()}(l??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??i),p=d(),E=function(){const[e,t]=(0,a.useState)(!1),[n,c]=(0,a.useState)(!1),o=(0,a.useRef)(null),r=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");c(n)}),[o]);return x(o,l),(0,a.useEffect)((()=>{l()}),[e,l]),(0,a.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:r}}(),g=function(e){return e?.match(h)?.groups.title??""}(c)||o,{lineClassNames:b,code:v}=y(t,{metastring:c,language:f,magicComments:u}),N=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(c);return a.createElement(C,{as:"div",className:(0,s.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},g&&a.createElement("div",{className:Z.codeBlockTitle},g),a.createElement("div",{className:Z.codeBlockContent},a.createElement(H.y$,{theme:p,code:v,language:f??"text"},(e=>{let{className:t,style:n,tokens:c,getLineProps:o,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,s.Z)(t,Z.codeBlock,"thin-scrollbar"),style:n},a.createElement("code",{className:(0,s.Z)(Z.codeBlockLines,N&&Z.codeBlockLinesWithNumbering)},c.map(((e,t)=>a.createElement(T,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:b[t],showLineNumbers:N})))))})),a.createElement("div",{className:Z.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&a.createElement(U,{className:Z.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),a.createElement(j,{className:Z.codeButton,code:v}))))}function $(e){let{children:t,...n}=e;const c=(0,l.Z)(),r=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof r?O:L;return a.createElement(s,(0,o.Z)({key:String(c)},n),r)}function V(e){return a.createElement("code",e)}var P=n(3692);var W=n(788),D=n(8138),q=n(6043);const F={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function J(e,t){return!!e&&(e===t||J(e.parentElement,t))}function Y(e){let{summary:t,children:n,...c}=e;(0,D.Z)().collectAnchor(c.id);const r=(0,l.Z)(),s=(0,a.useRef)(null),{collapsed:i,setCollapsed:m}=(0,q.u)({initialState:!c.open}),[d,u]=(0,a.useState)(c.open),f=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,o.Z)({},c,{ref:s,open:d,"data-collapsed":i,className:(0,W.Z)(F.details,r&&F.isBrowser,c.className),onMouseDown:e=>{G(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;G(t)&&J(t,s.current)&&(e.preventDefault(),i?(m(!1),u(!0)):m(!0))}}),f,a.createElement(q.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),u(!e)}},a.createElement("div",{className:F.collapsibleContent},n)))}const K={details:"details_b_Ee"},Q="alert alert--info";function X(e){let{...t}=e;return a.createElement(Y,(0,o.Z)({},t,{className:(0,s.Z)(Q,K.details,t.className)}))}function ee(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.type)),c=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(X,(0,o.Z)({},e,{summary:n}),c)}var te=n(2503);function ne(e){return a.createElement(te.Z,e)}const ae={containsTaskList:"containsTaskList_mC6p"};function ce(e){if(void 0!==e)return(0,s.Z)(e,e?.includes("contains-task-list")&&ae.containsTaskList)}const oe={img:"img_ev3q"};var re=n(9047);const le={Head:r.Z,details:ee,Details:ee,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?a.createElement(V,e):a.createElement($,e)},a:function(e){return a.createElement(P.Z,e)},pre:function(e){return a.createElement(a.Fragment,null,e.children)},ul:function(e){return a.createElement("ul",(0,o.Z)({},e,{className:ce(e.className)}))},li:function(e){return(0,D.Z)().collectAnchor(e.id),a.createElement("li",e)},img:function(e){return a.createElement("img",(0,o.Z)({decoding:"async",loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,oe.img))}));var t},h1:e=>a.createElement(ne,(0,o.Z)({as:"h1"},e)),h2:e=>a.createElement(ne,(0,o.Z)({as:"h2"},e)),h3:e=>a.createElement(ne,(0,o.Z)({as:"h3"},e)),h4:e=>a.createElement(ne,(0,o.Z)({as:"h4"},e)),h5:e=>a.createElement(ne,(0,o.Z)({as:"h5"},e)),h6:e=>a.createElement(ne,(0,o.Z)({as:"h6"},e)),admonition:re.Z,mermaid:()=>null};function se(e){let{children:t}=e;return a.createElement(c.Z,{components:le},t)}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(7462),c=n(7294),o=n(6905),r=n(3743);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return c.createElement("div",{className:(0,o.Z)(l.tableOfContents,"thin-scrollbar",t)},c.createElement(r.Z,(0,a.Z)({},n,{linkClassName:s,linkActiveClassName:i})))}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(7462),c=n(7294),o=n(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...c}=e;n>=0?t[n].children.push(c):a.push(c)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,c.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,c.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,c.useRef)(void 0),n=m();(0,c.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let c=t;c<=n;c+=1)a.push(`h${c}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=i(l,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(c),e.classList.add(c),t.current=e):e.classList.remove(c)}(e,e===m)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(3692);function f(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?c.createElement("ul",{className:o?void 0:n},t.map((e=>c.createElement("li",{key:e.id},c.createElement(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),c.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=c.memo(f);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const h=(0,o.L)(),E=m??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,c.useMemo)((()=>l({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:E,maxHeadingLevel:g});return d((0,c.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:E,maxHeadingLevel:g}}),[s,i,E,g])),c.createElement(p,(0,a.Z)({toc:b,className:n,linkClassName:s},f))}},2212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(7294),c=n(6905),o=n(5999),r=n(5742);function l(){return a.createElement(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function s(){return a.createElement(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function i(){return a.createElement(r.Z,null,a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var m=n(5281),d=n(9047);function u(e){let{className:t}=e;return a.createElement(d.Z,{type:"caution",title:a.createElement(l,null),className:(0,c.Z)(t,m.k.common.unlistedBanner)},a.createElement(s,null))}function f(e){return a.createElement(a.Fragment,null,a.createElement(i,null),a.createElement(u,e))}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,c,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==c&&".."!==c&&"\u2025"!==c||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);const c={},o=a.createContext(c);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);