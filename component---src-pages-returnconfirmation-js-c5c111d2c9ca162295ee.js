(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+G43":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a("E5k/");var r=a("q1tI"),n=a.n(r),s=a("Wbzz"),l=a("Bl7J"),o=a("vrFN"),i=a("Y3JS");var c=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={skipped:[],processed:[]},Object.assign(a.state,t.location.state),console.debug(a.state),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.componentDidMount=function(){this.timer=setInterval((function(){return Object(s.navigate)("/returninput")}),3e4)},c.componentWillUnmount=function(){clearInterval(this.timer)},c.groupItems=function(){var e=this;this.state.hasOwnProperty("orderitems")&&this.state.orderitems.items.forEach((function(t){e.state.selectedProps.hasOwnProperty(t.ID)?!0===e.state.selectedProps[t.ID]?e.state.processed.push(t):e.state.skipped.push(t):console.debug("Item was never selectable {"+t.ID+" "+t.StyleNumber+" "+t.ItemStatusName+" "+t.RMANumber+"}")}))},c.render=function(){var e,t,a;return e="skip"===this.state.action?n.a.createElement("h1",null,"Return Confirmation Skipped"):n.a.createElement("h1",null,"Return Confirmation Processed"),this.groupItems(),t=this.state.processed.length>0?n.a.createElement("div",{className:"alert alert-success"},n.a.createElement("h3",null,"The following items were returned:"),n.a.createElement(i.a,{items:this.state.processed,tableheaders:this.state.orderitems.tableHeaders})):null,null===(a=this.state.skipped.length>0?n.a.createElement("div",{className:"alert alert-danger"},n.a.createElement("h3",null,"The following items need to be updated in OMS:"),n.a.createElement("p",null,n.a.createElement("span",null,n.a.createElement("b",null,"Please login to OMS UI, and update the following items with missing, broken, or incorrect. ",n.a.createElement("br",null),n.a.createElement("i",null,"Make sure to add a note to notify Consumer Services")))),n.a.createElement(i.a,{items:this.state.skipped,tableheaders:this.state.orderitems.tableHeaders})):null)&&null===t&&(t=n.a.createElement("div",{className:"alert alert-danger"},n.a.createElement("p",null,n.a.createElement("span",null,n.a.createElement("b",null,"Nothing was processed and nothing was skipped. ",n.a.createElement("br",null),n.a.createElement("i",null,"Please try the order again or try a different order.")))))),n.a.createElement(l.a,null,n.a.createElement(o.a,{title:"ReturnConfirmation"}),e,n.a.createElement("div",{className:"container-fluid"},t),n.a.createElement("div",{className:"container-fluid"},a),n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.Link,{to:"/returninput"},"Return Input")),n.a.createElement("div",{className:"container"},n.a.createElement(s.Link,{to:"/"},"Go back to the homepage")))},r}(n.a.Component)},MBJH:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var n=a("TSYQ"),s=a.n(n),l=a("q1tI"),o=a.n(l),i=(a("pJf4"),a("QA0p"),o.a.createContext({}));i.Consumer,i.Provider;function c(e,t){var a=Object(l.useContext)(i);return e||a[t]||t}var u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.striped,i=e.bordered,u=e.borderless,d=e.hover,p=e.size,m=e.variant,h=e.responsive,f=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=c(a,"table"),b=s()(n,v,m&&v+"-"+m,p&&v+"-"+p,l&&v+"-striped",i&&v+"-bordered",u&&v+"-borderless",d&&v+"-hover"),E=o.a.createElement("table",r({},f,{className:b,ref:t}));if(h){var y=v+"-responsive";return"string"==typeof h&&(y=y+"-"+h),o.a.createElement("div",{className:y},E)}return E}));t.a=u},QA0p:function(e,t,a){"use strict";a("E5k/"),a("pJf4"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,r=a.propTypes,s=a.defaultProps,l=a.allowFallback,o=void 0!==l&&l,i=a.displayName,c=void 0===i?e.name||e.displayName:i,u=function(t,a){return e(t,a)};return Object.assign(n.default.forwardRef||!o?n.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:r,defaultProps:s})};var r,n=(r=a("q1tI"))&&r.__esModule?r:{default:r}},TSYQ:function(e,t,a){var r;a("MIFh"),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===s)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},Y3JS:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("pJf4"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var r=a("q1tI"),n=a.n(r),s=a("MBJH");var l=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={items:t.items,tableheaders:t.tableheaders,selectedProps:t.selectedProps},void 0!==t.inputChangeHander&&(a.handleInputChange=t.inputChangeHander,a.handleInputChange=a.handleInputChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a))),console.debug(a.state),a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this;return this.state.hasOwnProperty("selectedProps")&&void 0!==this.state.selectedProps&&Object.keys(this.state.selectedProps).length>0&&(e=n.a.createElement("th",null,"Select")),n.a.createElement(s.a,{striped:!0,bordered:!0,hover:!0,responsive:"md"},n.a.createElement("thead",null,n.a.createElement("tr",null,e,this.state.tableheaders.items.map((function(e){return n.a.createElement("th",{key:e.key},e.name)})),n.a.createElement("th",null,this.state.tableheaders.rma.name))),n.a.createElement("tbody",null,this.state.items.map((function(e){var a;return void 0===t.state.selectedProps?a=null:t.state.selectedProps.hasOwnProperty(e.ID)?!0===t.state.selectedProps[e.ID]?a=n.a.createElement("td",null,n.a.createElement("label",{htmlFor:e.ID},n.a.createElement("input",{type:"checkbox",id:"itemid-"+e.ID,name:"itemId",value:e.ID,defaultChecked:!0,onChange:t.handleInputChange}))):!1===t.state.selectedProps[e.ID]&&(a=n.a.createElement("td",null,n.a.createElement("label",{htmlFor:e.ID},n.a.createElement("input",{type:"checkbox",id:"itemid-"+e.ID,name:"itemId",value:e.ID,onChange:t.handleInputChange})))):a=n.a.createElement("td",null,n.a.createElement("span",null,"-")),n.a.createElement("tr",{key:e.ID},a,t.state.tableheaders.items.map((function(t){return"ImageURL"===t.key?n.a.createElement("td",{key:e.ID+"-"+t.key},n.a.createElement("img",{src:e[t.key],alt:e.StyleNumber})):n.a.createElement("td",{key:e.ID+"-"+t.key},e[t.key])})),n.a.createElement("td",null,e.RMANumber))}))))},r}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-returnconfirmation-js-c5c111d2c9ca162295ee.js.map