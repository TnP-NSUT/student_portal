(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[12],{190:function(e,a,t){"use strict";var r=t(2),n=t(0),l=t.n(n),c=t(6),o=t.n(c);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},192:function(e,a,t){"use strict";var r=t(2),n=t(3),l=t(6),c=t.n(l),o=t(0),s=t.n(o),i=t(7),d=t(30),m=t(190),b=t(83),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.variant,d=e.as,m=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),u=Object(i.a)(t,"card-img");return s.a.createElement(m,Object(r.a)({ref:a,className:c()(o?u+"-"+o:u,l)},b))}));u.displayName="CardImg",u.defaultProps={variant:null};var p=u,f=Object(m.a)("h5"),g=Object(m.a)("h6"),y=Object(d.a)("card-body"),E=Object(d.a)("card-title",{Component:f}),h=Object(d.a)("card-subtitle",{Component:g}),v=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),j=Object(d.a)("card-header"),x=Object(d.a)("card-footer"),O=Object(d.a)("card-img-overlay"),S=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,d=e.bg,m=e.text,u=e.border,p=e.body,f=e.children,g=e.as,E=void 0===g?"div":g,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(i.a)(t,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return s.a.createElement(b.a.Provider,{value:N},s.a.createElement(E,Object(r.a)({ref:a},h,{className:c()(l,v,d&&"bg-"+d,m&&"text-"+m,u&&"border-"+u)}),p?s.a.createElement(y,null,f):f))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=p,S.Title=E,S.Subtitle=h,S.Body=y,S.Link=v,S.Text=N,S.Header=j,S.Footer=x,S.ImgOverlay=O;a.a=S},202:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r=e=>{let a=new Date(e);return a.setHours(a.getHours()),a.setMinutes(a.getMinutes()),a}},302:function(e,a,t){e.exports={tableWrapper:"AllCompanies_tableWrapper__lhKpk",clrbtn:"AllCompanies_clrbtn__TYlWL"}},303:function(e,a,t){"use strict";var r=t(2),n=t(3),l=t(6),c=t.n(l),o=t(0),s=t.n(o),i=t(7),d=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.striped,d=e.bordered,m=e.borderless,b=e.hover,u=e.size,p=e.variant,f=e.responsive,g=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=Object(i.a)(t,"table"),E=c()(l,y,p&&y+"-"+p,u&&y+"-"+u,o&&y+"-striped",d&&y+"-bordered",m&&y+"-borderless",b&&y+"-hover"),h=s.a.createElement("table",Object(r.a)({},g,{className:E,ref:a}));if(f){var v=y+"-responsive";return"string"===typeof f&&(v=v+"-"+f),s.a.createElement("div",{className:v},h)}return h}));a.a=d},353:function(e,a,t){"use strict";t.r(a),t.d(a,"PageTrafficTable",(function(){return E}));var r=t(0),n=t.n(r),l=t(303),c=t(39),o=t(38),s=t(15),i=t(192),d=t(78),m=t(40),b=t(11),u=t(302),p=t.n(u),f=t(82),g=t(202),y=t(20);const E=e=>{let{companies:a,searchState:t,companyName:r,eventType:c}=e;const s=e=>{const{sourceIcon:t,sourceIconColor:r,searchState:l}=e,s=Object(b.g)();return n.a.createElement(n.a.Fragment,null,a.map((e,a)=>!(""===l||e.title&&e.title.toLowerCase().includes(l.toLowerCase())||e.company&&e.company.Name.toLowerCase().includes(l.toLowerCase()))||"All"!==c&&e.type!==c?null:n.a.createElement("tr",{key:a},n.a.createElement("td",null,n.a.createElement(i.a.Link,{href:"#",className:"text-primary fw-bold"},a+1)),n.a.createElement("td",null,e.company?e.company.Name:""),n.a.createElement("td",{onClick:()=>s.push("/companies/"+e.id),className:"fw-bold",style:{cursor:"pointer",color:"#0089ff",textTransform:"capitalize"}},n.a.createElement(o.a,{icon:t,className:`icon icon-xs text-${r} w-30`}),e.jobtitle),n.a.createElement("td",null,Object(g.a)(e.lastDate).toDateString()," -",Object(g.a)(e.lastDate).toLocaleTimeString()),n.a.createElement("td",null,e.status?new Date(e.lastDate)>new Date?e.status:"End":"--"),n.a.createElement("td",null,e.placeOfPosting),n.a.createElement("td",null,null===e||void 0===e?void 0:e.type))))};return n.a.createElement(i.a,{border:"light",className:"shadow-sm mb-4",style:{borderRadius:"0 0 0.5rem 0.5rem",border:"none"}},n.a.createElement(i.a.Body,{className:p.a.tableWrapper},n.a.createElement(l.a,{responsive:!0,className:"table-centered table-nowrap rounded mb-0"},n.a.createElement("thead",{className:"thead-light"},n.a.createElement("tr",null,n.a.createElement("th",{className:"border-0"},"#"),n.a.createElement("th",{className:"border-0"},"Company"),n.a.createElement("th",{className:"border-0"},"Job Profile"),n.a.createElement("th",{className:"border-0"},"Last Date"),n.a.createElement("th",{className:"border-0"},"Status"),n.a.createElement("th",{className:"border-0"},"Location"),n.a.createElement("th",{className:"border-0"},"Type"))),n.a.createElement("tbody",null,n.a.createElement(s,{searchState:t,companyName:r,eventType:c})))))};a.default=()=>{const{state:{profileData:e}}=Object(r.useContext)(y.a),a=null===e||void 0===e?void 0:e.degree,t=null===e||void 0===e?void 0:e.campus,l=null===e||void 0===e?void 0:e.batch,[i,b]=Object(r.useState)({loading:!1,data:[],error:null}),[u,p]=Object(r.useState)(!0),[g,h]=Object(r.useState)(0),[v,N]=Object(r.useState)(!0),[j,x]=Object(r.useState)(""),[O,S]=Object(r.useState)("All"),[w,C]=Object(r.useState)("All");Object(r.useEffect)(()=>{k()},[]);const k=async()=>{try{b(e=>({...e,loading:!0}));const e=await m.b.get(`/company-events?_sort=createdAt:desc&batch=${l}&_where[0][degrees_allowed_contains]=${a}&campus=${t}&_start=${g}&_limit=14`);let r=e.data;e.data.length<14&&p(!1),b(e=>({loading:!1,data:[...e.data,...r],error:null})),h(e=>e+14),N(!1)}catch(e){b({loading:!1,data:[],error:e}),console.log(e),N(!1)}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{background:"white",padding:"24px"}},n.a.createElement("h2",{style:{color:"black"}},"Job Profiles"),n.a.createElement("div",{className:"p-0 mt-4 bg-white rounded"},n.a.createElement(c.a,{className:"d-md-flex p-0 align-items-center ",style:{gap:"35px"}},n.a.createElement("div",{className:"col-12 col-md-4 mb-2 mb-md-0",style:{border:"0.0625rem solid #d1d7e0",borderRadius:"10px"}},n.a.createElement(c.a.Group,{className:"d-flex justify-content-center align-items-center",style:{padding:"0 0.75rem"}},n.a.createElement(c.a.Label,{className:"mb-0 d-flex justify-content-center align-items-center",style:{fontSize:"13px"}},n.a.createElement(o.a,{icon:s.i,style:{marginRight:"5px"}}),"Search"),n.a.createElement(c.a.Control,{placeholder:"Start typing company name...",value:j,style:{border:"none",marginLeft:"10px",marginRight:"10px",boxShadow:"none",fontStyle:"italic"},onChange:e=>{x(e.target.value)}}))),n.a.createElement("div",{className:"col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center align-items-center",style:{border:"0.0625rem solid #d1d7e0",padding:"0 0.75rem",paddingRight:"0px",borderRadius:"10px"}},n.a.createElement(c.a.Label,{className:"mb-0",style:{marginRight:"10px",fontSize:"13px"}},"Type"),n.a.createElement(c.a.Select,{style:{border:"none",boxShadow:"none",fontStyle:"italic"},value:w,onChange:e=>C(e.target.value)},n.a.createElement("option",null,"All"),n.a.createElement("option",null,"Internship"),n.a.createElement("option",null,"Placement"))),n.a.createElement(d.a,{className:"col-4 col-md-1 mb-2 mb-md-0",style:{height:"35px",background:"linear-gradient(to right, #fb7b4a, #ee3344)",borderColor:"#fb7b4a",padding:0},onClick:()=>{S("All"),C("All"),x("")}},"Clear")))),v?n.a.createElement("div",null,n.a.createElement(f.a,null)):n.a.createElement(n.a.Fragment,null,function(e){let{searchQuery:a,companySelected:t,eventTypeSelected:r}=e;if(i.data)return n.a.createElement(E,{companies:i.data,searchState:a,companyName:t,eventType:r})}({searchQuery:j,companySelected:O,eventTypeSelected:w}),function(){if(i.loading)return n.a.createElement(f.a,null)}(),function(){if(u)return n.a.createElement("div",{className:"d-flex justify-content-center mt-4"},n.a.createElement(d.a,{variant:"dark",style:{background:"linear-gradient(to right, #fb7b4a, #ee3344)",borderColor:"#fb7b4a"},disabled:i.loading,onClick:()=>k()},i.loading?n.a.createElement(f.a,null):"Load More"))}()))}}}]);
//# sourceMappingURL=12.1a1d1bb5.chunk.js.map