(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8aQL":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));r("pJf4"),r("E5k/");var a=r("q1tI"),n=r.n(a),l=r("Wbzz"),s=r("Bl7J"),u=r("vrFN");function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).state={ordernumber:"",rmanumber:""},Object.assign(r.state,t.location.state),r.handleInputChange=r.handleInputChange.bind(m(r)),r.handleBlur=r.handleBlur.bind(m(r)),r.handleSubmit=r.handleSubmit.bind(m(r)),r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.handleInputChange=function(e){var t,r=e.target,a=r.value,n=r.name;this.setState(((t={})[n]=a,t))},o.handleBlur=function(e){console.warn("Call api/OmsOrderHistory ( "+this.state.ordernumber+" , "+this.state.rmanumber+" )"),"00000901"!==this.state.ordernumber?this.setState({errormessage:"Order "+this.state.ordernumber+" does not exist!"}):"RMA00000001X"!==this.state.rmanumber&&"RMA00000002X"!==this.state.rmanumber&&"0"!==this.state.rmanumber?this.setState({errormessage:"RMANumber "+this.state.rmanumber+" is incorrect!"}):Object(l.navigate)("/returnreview",{state:{apitoken:void 0,sitecode:this.state.sitecode,ordernumber:this.state.ordernumber,rmanumber:this.state.rmanumber}})},o.handleSubmit=function(e){e.preventDefault()},o.render=function(){var e;return e=void 0!==this.state.errormessage?n.a.createElement("div",{className:"container alert alert-danger"},this.state.errormessage):null,n.a.createElement(s.a,null,n.a.createElement(u.a,{title:"ReturnInput"}),n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Returns Input Screen"),n.a.createElement("p",null,n.a.createElement("i",null,"To Test please use: ",n.a.createElement("br",null),"order number == 00000901 ",n.a.createElement("br",null),"rmanumber == RMA00000001X || RMA00000002X || 0")),n.a.createElement("form",{onSubmit:this.handleSubmit,method:"POST"},n.a.createElement("label",{htmlFor:"ordernumber"},n.a.createElement("b",null,"Order Number: "),n.a.createElement("input",{type:"text",id:"ordernumber",name:"ordernumber",value:this.state.ordernumber,onChange:this.handleInputChange,placeholder:"scan barcode from box"})),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"rmanumber"},n.a.createElement("b",null,"RMA Number: "),n.a.createElement("input",{type:"text",id:"rmanumber",name:"rmanumber",value:this.state.rmanumber,onChange:this.handleInputChange,onBlur:this.handleBlur,placeholder:"scan barcode from box"})),n.a.createElement("br",null),e),n.a.createElement(l.Link,{to:"/"},"Go back to the homepage")))},a}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-returninput-js-31b90b9707eb54bee5e9.js.map