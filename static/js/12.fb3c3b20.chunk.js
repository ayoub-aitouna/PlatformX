(this.webpackJsonpplatformx=this.webpackJsonpplatformx||[]).push([[12],{110:function(e,t,a){"use strict";a.r(t);a(2);var n={_origin:"https://api.emailjs.com"},s=function(e,t,a){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var r=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText},o=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(s,o){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,a=new r(t);200===a.status||"OK"===a.text?s(a):o(a)})),i.addEventListener("error",(function(e){var t=e.target;o(new r(t))})),i.open("POST",n._origin+e,!0),Object.keys(a).forEach((function(e){i.setRequestHeader(e,a[e])})),i.send(t)}))},i=function(e,t,a,r){var i=r||n._userID,c=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(a);s(i,e,t);var l=new FormData(c);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),o("/api/v1.0/email/send-form",l)},c=(a(38),a(67)),l=a.n(c),m=a(1);t.default=function(){return Object(m.jsx)("div",{className:l.a.wrapper,children:Object(m.jsx)("section",{id:"contact",className:l.a.contact,children:Object(m.jsxs)("div",{className:l.a.skills_info,children:[Object(m.jsx)("h1",{className:l.a.skillshead,children:"Contact me"}),Object(m.jsx)("div",{className:l.a.contact_ftom_contaner,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i("service_b5p3fbc","template_j4b7nsj",e.target,"user_9TIMzOzG3X3lMgfqbVmzI").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(m.jsx)("input",{type:"hidden",name:"subject",value:"Contact For Some dtails about work "}),Object(m.jsx)("input",{name:"name",type:"text",className:l.a.fullname,placeholder:"full name"}),Object(m.jsx)("input",{name:"email",type:"email",className:l.a.Email,placeholder:"Example@E-mail.com"}),Object(m.jsx)("textarea",{name:"message",rows:"17",cols:"50",className:l.a.contact_form_message,placeholder:"Your message"}),Object(m.jsx)("input",{type:"submit",value:"Send Email"})]})})]})})})}},67:function(e,t,a){e.exports={wrapper:"Footer_wrapper__cGOWB",contact:"Footer_contact__1mxfJ",contact_ftom_contaner:"Footer_contact_ftom_contaner__N21vP"}}}]);
//# sourceMappingURL=12.fb3c3b20.chunk.js.map