(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[22],{472:function(e,a,t){"use strict";t.r(a);var s=t(51),r=t(116),n=t(68),l=t(115),o=t(0),c=t.n(o),m=t(52);a.default=()=>{const[e,a]=Object(o.useState)(""),[t,i]=Object(o.useState)(""),[d,u]=Object(o.useState)("");return c.a.createElement("div",{style:{background:"#262b40"}},c.a.createElement("div",{className:"d-flex justify-content-center px-2 align-items-center",style:{height:"100vh",width:"100vw",backgroundSize:"cover"}},c.a.createElement("div",{style:{width:"400px",maxWidth:"100%",color:"orange"}},c.a.createElement("h2",{style:{color:"darkorange"}},"Forgot Password"),c.a.createElement(s.a,{onSubmit:async a=>{if(a.preventDefault(),e)try{await m.a.post("/auth/forgot-password",{email:e}),i("Password reset link has been sent.")}catch(r){var t,s;console.log("error hua idhar"),console.log(null===(t=r.response.data.message)||void 0===t?void 0:t[0].messages[0].message),u(null===(s=r.response.data.message)||void 0===s?void 0:s[0].messages[0].message)}},className:"mt-3"},c.a.createElement(r.a,null,c.a.createElement(n.a,{xs:12},c.a.createElement(s.a.Group,null,c.a.createElement(s.a.Label,null,"Email"),c.a.createElement(s.a.Control,{type:"email",required:!0,value:e,onChange:e=>a(e.target.value)})))),c.a.createElement(r.a,{className:"mt-5"},c.a.createElement(n.a,{xs:12},c.a.createElement(l.a,{style:{width:"100%",background:"linear-gradient(to right, #fb7b4a, #ee3344)"},type:"submit"},"Send Forgot Password Link")))),c.a.createElement("div",{className:"mt-3"},t&&c.a.createElement("p",{style:{color:"green"}},t),d&&c.a.createElement("p",{style:{color:"red"}},d)))))}}}]);
//# sourceMappingURL=22.731735fd.chunk.js.map