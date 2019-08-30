(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),s=t.n(r),c=(t(14),t(15),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.contact.find(function(e){return e.email}),t=e.contact.find(function(e){return e.phone});return n.a.createElement("div",{className:"author"},n.a.createElement("img",{className:"card-img-top rounded-circle w-75 mt-5",src:e.imageSrc,alt:"Author"}),n.a.createElement("h1",{className:"mt-3"},e.name),n.a.createElement("h5",{className:"font-weight-normal mt-5"},n.a.createElement("i",{className:a.className})," ",a.email),n.a.createElement("h5",{className:"font-weight-normal mt-3 mb-5"},n.a.createElement("i",{className:t.className})," ",t.phone))}}]),a}(l.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("ul",{className:"nav flex-column"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"#intro",className:""},"About")),n.a.createElement("li",{className:"nav-item mt-3"},n.a.createElement("a",{href:"#skills",className:""},"My skills")))}}]),a}(l.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("div",{className:"text-center sticky-left"},n.a.createElement(d,{resumeData:e}),n.a.createElement(v,{resumeData:e}),n.a.createElement("p",{className:"mt-5"},"Copyright By Ahmas"))}}]),a}(l.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;e.socialLinks;return n.a.createElement("div",{className:"container mt-5 intro",id:"intro"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"I am ",e.name),n.a.createElement("p",{className:"mt-5"},e.role," ",e.roleDescription,n.a.createElement("br",null),e.goals),n.a.createElement("hr",{className:"separetor"}),n.a.createElement("a",{href:"#",className:"mr-4"},n.a.createElement("i",{className:"fa fa-linkedin"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-github"}))))}}]),a}(l.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"skills"},n.a.createElement("div",{className:"mt-5"},n.a.createElement("h2",{className:"text-center"},"My skills")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",{className:"text-center"},"Languages"),n.a.createElement("div",{className:"skill p-2 rounded"},n.a.createElement("h4",null,"HTML"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"95%"},"aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100"},"95%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"CSS"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"90%"},"aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"},"90%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Javascript"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},"50%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"PHP"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"65%"},"aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"},"65%")))),n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",{className:"text-center"},"Frameworks"),n.a.createElement("div",{className:"skill p-2 rounded"},n.a.createElement("h4",null,"Bootstrap"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"85%"},"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},"85%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"ReactJs"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"10%"},"aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"},"10%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Laravel"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"30%"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},"30%"))))),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",{className:"text-center"},"Databases"),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Mysql"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"55%"},"aria-valuenow":"55","aria-valuemin":"0","aria-valuemax":"100"},"55%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Eloquent"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"15%"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},"15%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Doctrine"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"30%"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},"30%")))),n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",{className:"text-center"},"Tools"),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Git/Github"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"30%"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},"30%"))),n.a.createElement("div",{className:"skill p-2 mt-3 rounded"},n.a.createElement("h4",null,"Vs Code"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",style:{width:"70%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"},"70%"))))))}}]),a}(l.Component),N={name:"Hamatane Diallo",imageSrc:"images/ahmas2011.jpg",role:"Self-taught Front Developper",goals:"I want to be a full-stack developper able to developp web and mobile applications",roleDescription:"passionate, curious, rigorous, I love simple, robust, attractive and fast applications",linkedinId:"Id",contact:[{email:"dhamatane@gmail.com",className:"fa fa-envelope-square"},{phone:"+225 49 262 943",className:"fa fa-phone"}],socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/hamatane-diallo-6940a8166/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/dhamatane",className:"fa fa-github"}],skills:[{skillName:"CSS"},{skillName:"HTML"},{skillName:"Javascript"},{skillName:"PHP"},{skillName:"Bootstrap"},{skillName:"ReactJs"},{skillName:"Laravel"}]},f=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar"},n.a.createElement(p,{resumeData:N})),n.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-10 col-lg-10 main pb-5"},n.a.createElement(h,{resumeData:N}),n.a.createElement(E,{resumeData:N}))))}}]),a}(l.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(n.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/me",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/me","/service-worker.js");b?(function(e,a){fetch(e).then(function(t){var l=t.headers.get("content-type");404===t.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(a,e)})}}()},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1af7b55e.chunk.js.map