!function(s,e){"use strict";function t(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}s=s&&s.hasOwnProperty("default")?s.default:s,e=e&&e.hasOwnProperty("default")?e.default:e;t("body {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\r\n    monospace;\r\n}\r\n");t(".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App-logo {\r\n    animation: App-logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App-header {\r\n  background-color: #282c34;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App-link {\r\n  color: #61dafb;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n");var r=function(e){var t=e.label,n=e.disabled,r=e.clickHandler,a=e.children,o=e.style,l=e.className,i=e.dataToggle,c=e.key;return s.createElement("button",{"data-toggle":i,disabled:n,onClick:r,key:c,className:l||"btn btn-primary",style:o,title:t||"Add Text"},t||s.createElement(s.Fragment,null," Submit "),a||s.createElement(s.Fragment,null))},a=function(e){var t=e.name,n=e.style;return s.createElement("i",{className:t,style:n})};t("");var o=function(e){var t=e.listClass,n=e.data,r=e.style;return n?s.createElement("li",{className:t||"list-group-item",style:r},n.name):s.createElement("b",null,"Loading..")},l=function(e){var t=e.className,n=e.demoData,r=e.listClass,a=e.style;return n?s.createElement("ul",{className:t||"list-group",style:a},n.listItems.map(function(e,t){return s.createElement(o,{key:t,data:e,listClass:r})})):s.createElement("b",null,"Loading")},i={name:"Demo List",listItems:[{id:1,name:"demo 1"},{id:2,name:"demo 2"},{id:3,name:"demo 3"},{id:4,name:"demo 4"},{id:5,name:"demo 5"}]},n=function(e){var t=e.title,n=e.icon;return s.createElement("div",{className:"btn-group",title:t},s.createElement(r,{className:"btn btn-default dropdown-toggle",dataToggle:"dropdown",label:"selcet value "},s.createElement(a,{name:n||"caret"}),s.createElement("span",{className:"caret-right-corner"})),s.createElement(l,{demoData:i,className:"dropdown-menu"}))},c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};t("");var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.render=function(){return s.createElement("div",null,s.createElement("label",{className:"radio-inline"},s.createElement("input",{type:"radio",name:"optradio"}),"Option 1"),s.createElement("label",{className:"radio-inline"},s.createElement("input",{type:"radio",name:"optradio"}),"Option 2"),s.createElement("label",{className:"radio-inline"},s.createElement("input",{type:"radio",name:"optradio"}),"Option 3"))},t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e.render(s.createElement(function(){return s.createElement("div",{className:"App"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("br",null),s.createElement("div",{className:"col-md-3"},s.createElement(r,{className:"btn btn-danger",label:"Submit here",style:{color:"#ffffff"}})),s.createElement("div",{className:"col-md-3"},s.createElement(n,null)),s.createElement("div",{className:"col-md-3"},s.createElement(l,{demoData:i,listClass:"list-group-item"})),s.createElement("div",{className:"col-md-3"},s.createElement(m,null)))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}(React,ReactDOM);
