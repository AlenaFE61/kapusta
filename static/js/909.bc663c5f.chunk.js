"use strict";(self.webpackChunkkapusta=self.webpackChunkkapusta||[]).push([[909],{2548:function(e,t,n){n.d(t,{OK:function(){return S},td:function(){return x},x4:function(){return _},mQ:function(){return w}});var r=n(1413),a=n(9439),l=n(2791);function c(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var s=c("Tab"),o=c("TabList"),u=c("TabPanel");function i(e,t){return l.Children.map(e,(function(e){return null===e?null:function(e){return s(e)||o(e)||u(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,l.cloneElement)(e,(0,r.Z)((0,r.Z)({},e.props),{},{children:i(e.props.children,t)})):e}))}function d(e,t){return l.Children.forEach(e,(function(e){null!==e&&(s(e)||u(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(o(e)&&t(e),d(e.props.children,t)))}))}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var p=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(r&&(r+=" "),r+=t);return r};function m(e){var t=0;return d(e,(function(e){s(e)&&t++})),t}var v,h=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function y(e){return e&&"getAttribute"in e}function N(e){return y(e)&&e.getAttribute("data-rttab")}function C(e){return y(e)&&"true"===e.getAttribute("aria-disabled")}var T=function(e){var t=(0,l.useRef)([]),n=(0,l.useRef)([]),r=(0,l.useRef)();function a(t,n){t<0||t>=b()||(0,e.onSelect)(t,e.selectedIndex,n)}function c(e){for(var t=b(),n=e+1;n<t;n++)if(!C(y(n)))return n;for(var r=0;r<e;r++)if(!C(y(r)))return r;return e}function d(e){for(var t=e;t--;)if(!C(y(t)))return t;for(t=b();t-- >e;)if(!C(y(t)))return t;return e}function b(){return m(e.children)}function y(e){return t.current["tabs-".concat(e)]}function T(e){var t=e.target;do{if(R(t)){if(C(t))return;return void a([].slice.call(t.parentNode.children).filter(N).indexOf(t),e)}}while(null!=(t=t.parentNode))}function R(e){if(!N(e))return!1;var t=e.parentElement;do{if(t===r.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}e.children;var g=e.className,w=(e.disabledTabClassName,e.domRef),k=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,e.disableLeftRightKeys,f(e,h));return l.createElement("div",Object.assign({},k,{className:p(g),onClick:T,onKeyDown:function(t){var n=e.direction,r=e.disableUpDownKeys,l=e.disableLeftRightKeys;if(R(t.target)){var s=e.selectedIndex,o=!1,u=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(o=!0,u=!1,T(t)),(l||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(l||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(s=function(){for(var e=b();e--;)if(!C(y(e)))return e;return null}(),o=!0,u=!0):36!==t.keyCode&&"Home"!==t.code||(s=function(){for(var e=b(),t=0;t<e;t++)if(!C(y(t)))return t;return null}(),o=!0,u=!0):(s="rtl"===n?d(s):c(s),o=!0,u=!0):(s="rtl"===n?c(s):d(s),o=!0,u=!0),o&&t.preventDefault(),u&&a(s,t)}},ref:function(e){r.current=e,w&&w(e)},"data-rttabs":!0}),function(){var r=0,a=e.children,c=e.disabledTabClassName,d=e.focus,f=e.forceRenderTabPanel,p=e.selectedIndex,m=e.selectedTabClassName,h=e.selectedTabPanelClassName,N=e.environment;n.current=n.current||[];for(var C=n.current.length-b(),T=(0,l.useId)();C++<0;)n.current.push("".concat(T).concat(n.current.length));return i(a,(function(e){var a=e;if(o(e)){var b=0,C=!1;null==v&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{v=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){v=!1}}(N);var T=N||("undefined"!==typeof window?window:void 0);v&&T&&(C=l.Children.toArray(e.props.children).filter(s).some((function(e,t){return T.document.activeElement===y(t)}))),a=(0,l.cloneElement)(e,{children:i(e.props.children,(function(e){var r="tabs-".concat(b),a=p===b,s={tabRef:function(e){t.current[r]=e},id:n.current[b],selected:a,focus:a&&(d||C)};return m&&(s.selectedClassName=m),c&&(s.disabledClassName=c),b++,(0,l.cloneElement)(e,s)}))})}else if(u(e)){var R={id:n.current[r],selected:p===r};f&&(R.forceRender=f),h&&(R.selectedClassName=h),r++,a=(0,l.cloneElement)(e,R)}return a}))}())};T.defaultProps={className:"react-tabs",focus:!1},T.propTypes={};var R=T,g=function(e){var t=e.children,n=e.defaultFocus,c=e.defaultIndex,s=e.focusTabOnClick,o=e.onSelect,u=(0,l.useState)(n),i=(0,a.Z)(u,2),d=i[0],f=i[1],b=(0,l.useState)(function(e){return null===e.selectedIndex?1:0}(e)),p=(0,a.Z)(b,1)[0],v=(0,l.useState)(1===p?c||0:null),h=(0,a.Z)(v,2),y=h[0],N=h[1];if((0,l.useEffect)((function(){f(!1)}),[]),1===p){var C=m(t);(0,l.useEffect)((function(){if(null!=y){var e=Math.max(0,C-1);N(Math.min(y,e))}}),[C])}var T=(0,r.Z)({},e);return T.focus=d,T.onSelect=function(e,t,n){"function"===typeof o&&!1===o(e,t,n)||(s&&f(!0),1===p&&N(e))},null!=y&&(T.selectedIndex=y),delete T.defaultFocus,delete T.defaultIndex,delete T.focusTabOnClick,l.createElement(R,T,t)};g.propTypes={},g.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},g.tabsRole="Tabs";var w=g,k=["children","className"],E=function(e){var t=e.children,n=e.className,r=f(e,k);return l.createElement("ul",Object.assign({},r,{className:p(n),role:"tablist"}),t)};E.tabsRole="TabList",E.propTypes={},E.defaultProps={className:"react-tabs__tab-list"};var x=E,O=n(4942),I=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"],P="react-tabs__tab",j={className:P,disabledClassName:"".concat(P,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(P,"--selected")},A=function(e){var t,n=(0,l.useRef)(),r=e.children,a=e.className,c=e.disabled,s=e.disabledClassName,o=e.focus,u=e.id,i=e.selected,d=e.selectedClassName,b=e.tabIndex,m=e.tabRef,v=f(e,I);return(0,l.useEffect)((function(){i&&o&&n.current.focus()}),[i,o]),l.createElement("li",Object.assign({},v,{className:p(a,(t={},(0,O.Z)(t,d,i),(0,O.Z)(t,s,c),t)),ref:function(e){n.current=e,m&&m(e)},role:"tab",id:"tab".concat(u),"aria-selected":i?"true":"false","aria-disabled":c?"true":"false","aria-controls":"panel".concat(u),tabIndex:b||(i?"0":null),"data-rttab":!0}),r)};A.propTypes={},A.tabsRole="Tab",A.defaultProps=j;var S=A,K=["children","className","forceRender","id","selected","selectedClassName"],Z="react-tabs__tab-panel",D={className:Z,forceRender:!1,selectedClassName:"".concat(Z,"--selected")},L=function(e){var t=e.children,n=e.className,r=e.forceRender,a=e.id,c=e.selected,s=e.selectedClassName,o=f(e,K);return l.createElement("div",Object.assign({},o,{className:p(n,(0,O.Z)({},s,c)),role:"tabpanel",id:"panel".concat(a),"aria-labelledby":"tab".concat(a)}),r||c?t:null)};L.tabsRole="TabPanel",L.propTypes={},L.defaultProps=D;var _=L},8200:function(){}}]);
//# sourceMappingURL=909.bc663c5f.chunk.js.map