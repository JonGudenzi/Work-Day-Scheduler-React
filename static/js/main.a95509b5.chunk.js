(this["webpackJsonpwork-day-scheduler"]=this["webpackJsonpwork-day-scheduler"]||[]).push([[0],{13:function(t,e,r){},17:function(t,e,r){},19:function(t,e,r){"use strict";r.r(e);var c=r(1),a=r.n(c),o=r(7),n=r.n(o),s=r(4),u=(r(13),r(6)),l=r(0);var i=function(t){console.log(t.text);var e=Object(c.useState)(t.text),r=Object(s.a)(e,2),a=r[0],o=r[1];return Object(l.jsxs)("div",{className:"row",id:t.currentHour,children:[Object(l.jsx)("label",{className:"col-sm-1 hour",children:t.currentHour}),Object(l.jsx)("textarea",{value:a,onChange:function(t){return o(t.target.value)},id:"".concat(t.currentHour,"-hour-task"),type:"text",className:"col-md-10 time-block"}),Object(l.jsxs)("button",{onClick:function(){var e=t.hourTask.filter((function(e){return e.hour===t.currentHour}));e[0].text=a;var r=t.hourTask.filter((function(e){return e.hour!==t.currentHour})),c=[].concat(Object(u.a)(r),Object(u.a)(e)).sort((function(t,e){return t.hour-e.hour}));t.setHourTask(c),localStorage.setItem("time",JSON.stringify(c))},type:"submit",className:"saveBtn col-sm-1",children:["SAVE",Object(l.jsx)("i",{className:"fas fa-save save"})]})]})};var h=function(){var t=Object(c.useState)(JSON.parse(localStorage.getItem("time"))||[{hour:8,text:""},{hour:9,text:""},{hour:10,text:""},{hour:11,text:""},{hour:12,text:""},{hour:13,text:""},{hour:14,text:""},{hour:15,text:""},{hour:16,text:""},{hour:17,text:""}]),e=Object(s.a)(t,2),r=e[0],a=e[1];return console.log(r),Object(l.jsx)("div",{className:"App",children:r.map((function(t){var e=t.hour,c=t.text;return Object(l.jsx)(i,{currentHour:e,text:c,hourTask:r,setHourTask:a},e)}))})},j=r(8),d=r.n(j);var x=function(){return Object(l.jsxs)("header",{className:"jumbotron",children:[Object(l.jsx)("h1",{className:"display-3",children:"Work Day Scheduler"}),Object(l.jsx)("p",{className:"lead",children:"A simple calendar app for scheduling your work day"}),Object(l.jsx)(d.a,{format:"dddd MMMM Do YYYY, h:mm a"}),Object(l.jsx)("p",{className:"lead"})]})},b=(r(17),function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(e){var r=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,n=e.getTTFB;r(t),c(t),a(t),o(t),n(t)}))});r(18);n.a.render(Object(l.jsxs)(a.a.StrictMode,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(h,{})]}),document.getElementById("root")),b()}},[[19,1,2]]]);
//# sourceMappingURL=main.a95509b5.chunk.js.map