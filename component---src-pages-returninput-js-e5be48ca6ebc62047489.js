(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8aQL":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),l=r("Wbzz"),i=r("Bl7J"),o=r("vrFN");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"ReturnInput"}),a.a.createElement("h1",null,"Returns Input Screen"),a.a.createElement("form",{action:"../returnreview"},a.a.createElement("b",null,a.a.createElement("label",{for:"orderid"},"OrderId:"),a.a.createElement("br",null)),a.a.createElement("input",{type:"text",id:"orderid",name:"orderid",value:"scan bar code from box"}),a.a.createElement("br",null),a.a.createElement("b",null,a.a.createElement("label",{for:"RMAId"},"RMAId:"),a.a.createElement("br",null)),a.a.createElement("input",{type:"text",id:"rmaid",name:"rmaid",value:"scan bar code from box"}),a.a.createElement("br",null),a.a.createElement("input",{type:"submit",value:"Submit - Hidden"})),a.a.createElement("h3",null,"Notes:"),a.a.createElement("p",null,a.a.createElement("ol",null,a.a.createElement("li",null,"Once you tab out of the RMAId field the form should submit"),a.a.createElement("li",null,"If RMA is wrong, canceled. Then show an error."),a.a.createElement("li",null,"Order Id is required, if OrderId does not existing in OMS then show an Red error, `Order does not exist`"),a.a.createElement("li",null,"Form submit will make a call to with OrderId ",a.a.createElement("i",null,"api/OmsOrderHistory")," to get the details and then parse the response for the RMA number.  It will verify the RMA number."))),a.a.createElement(l.Link,{to:"index"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-returninput-js-e5be48ca6ebc62047489.js.map