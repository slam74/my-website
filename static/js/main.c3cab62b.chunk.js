(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),r=c.n(n),i=c(15),l=c(7),j=(c(27),c(0));var o=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(i.a)(n,2),o=(r[0],r[1]),m=function(){return a(!1)},b=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(s.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-container",children:[Object(j.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(j.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(j.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/",className:"nav-links",onClick:m,children:"About Me"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/projects",className:"nav-links",onClick:m,children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/contact",className:"nav-links",onClick:m,children:"Contact"})})]})]})})})},m=c(2);c(9),c(34);var b=function(){return Object(j.jsxs)("div",{className:"hero-container",children:[Object(j.jsx)("h1",{children:"Simon Lam"}),Object(j.jsx)("h2",{children:"a computer programming graduate"})]})};c(35);var d=function(){return Object(j.jsxs)("div",{className:"me",children:[Object(j.jsx)("h1",{children:"Hello World!"}),Object(j.jsx)("p",{children:"I completed my diploma in computer programming at Seneca College in April 2021."}),Object(j.jsx)("p",{children:"Here are my skill sets and tools I've used:"}),Object(j.jsxs)("table",{class:"table",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{class:"table-dark",children:"Programming Languages"}),Object(j.jsx)("td",{children:"C, C++, Java, Swift"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{class:"table-dark",children:"Web Development"}),Object(j.jsx)("td",{children:"JavaScript, React, Angular, HTML5, CSS3, Bootstrap"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{class:"table-dark",children:"Database Management"}),Object(j.jsx)("td",{children:"Oracle SQL, PL/SQL, MongoDB NoSQL"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{class:"table-dark",children:"Tools"}),Object(j.jsx)("td",{children:"MS Visual Studio, Visual Studio Code, Eclipse, XCode, Linux, Git, UML"})]})]})]})};c(36);var h=function(){return Object(j.jsx)("div",{className:"footer-container",children:Object(j.jsxs)("section",{className:"footer",children:[Object(j.jsx)("h2",{children:"Thanks for Visiting!"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{href:"mailto:simon.lam06@gmail.com",children:Object(j.jsx)("i",{class:"fas fa-envelope"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/simon-lam247/",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-linkedin"})}),Object(j.jsx)("a",{href:"https://github.com/slam74",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-github-square"})})]}),Object(j.jsx)("h2",{children:"Simon Lam \xa9 2021"})]})})};var O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(d,{}),Object(j.jsx)(h,{})]})},x=c(19),u=c(20),p=c(22),f=c(21),g=function(e){Object(p.a)(c,e);var t=Object(f.a)(c);function c(e){var s;return Object(x.a)(this,c),(s=t.call(this,e)).state={name:"",email:"",message:""},s}return Object(u.a)(c,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"contact",children:Object(j.jsxs)("div",{className:"hero-container",children:[Object(j.jsx)("h1",{children:"Contact Me"}),Object(j.jsxs)("p",{children:["I am currently looking for employment. If you are aware of any developer opportunities, please let me know! Or message me if you just want to chat. You can email me at ",Object(j.jsx)("a",{href:"mailto:simon.lam06@gmail.com",children:"simon.lam06@gmail.com"}),", or send me a quick message by filling out the form below and click the SUBMIT button. I will get back to you as soon as possible."]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{id:"contact-form",action:"https://formspree.io/f/mrgrevyo",method:"POST",children:[Object(j.jsx)("input",{name:"name",placeholder:"Name",type:"text",className:"form-control",required:!0}),Object(j.jsx)("input",{name:"email",placeholder:"Enter Email",type:"email",className:"form-control",required:!0}),Object(j.jsx)("textarea",{name:"message",placeholder:"Your Message",className:"form-control",rows:"10",required:!0}),Object(j.jsx)("button",{type:"submit",className:"btn btn-secondary btn-lg",children:"SUBMIT"})]})]})}),Object(j.jsx)(h,{})]})}}]),c}(a.a.Component);c(37);var v=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{className:"cards__item",children:Object(j.jsxs)(l.b,{className:"cards__item__link",to:e.path,children:[Object(j.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(j.jsx)("img",{className:"cards__item__img",alt:"Project Image",src:e.src})}),Object(j.jsx)("div",{className:"cards__item__info",children:Object(j.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var k=function(){return Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsx)("h1",{children:"Here is some of my work"}),Object(j.jsxs)("div",{className:"cards__container",children:[Object(j.jsxs)("ul",{className:"cards__items",children:[Object(j.jsx)(v,{src:"images/pikachu.png",text:"The Pikachu Project",label:"Pokemon",path:"/"}),Object(j.jsx)(v,{src:"images/pikachu.png",text:"The Pikachu Project",label:"Pokemon",path:"/"})]}),Object(j.jsxs)("ul",{className:"cards__items",children:[Object(j.jsx)(v,{src:"images/pikachu.png",text:"The Pikachu Project",label:"Pokemon",path:"/"}),Object(j.jsx)(v,{src:"images/pikachu.png",text:"The Pikachu Project",label:"Pokemon",path:"/"})]})]})]})};var N=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"projects",children:Object(j.jsx)("div",{className:"hero-container",children:Object(j.jsx)("h1",{children:"Projects"})})}),Object(j.jsx)(k,{}),Object(j.jsx)(h,{})]})};function _(){var e=Object(m.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(o,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(m.a,{path:"/contact",component:g}),Object(j.jsx)(m.a,{path:"/projects",component:N})]})]})})};r.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))},9:function(e,t,c){}},[[38,1,2]]]);
//# sourceMappingURL=main.c3cab62b.chunk.js.map