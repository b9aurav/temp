(()=>{var e={};e.id=681,e.ids=[681],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8523:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=s(482),a=s(9108),n=s(2563),l=s.n(n),i=s(8300),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(t,o);let d=["",{children:["schedule",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1857)),"D:\\Projects\\sow-sync-frontend\\src\\app\\schedule\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1342)),"D:\\Projects\\sow-sync-frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\sow-sync-frontend\\src\\app\\schedule\\page.tsx"],u="/schedule/page",h={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/schedule/page",pathname:"/schedule",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8159:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},90:()=>{},314:(e,t,s)=>{Promise.resolve().then(s.bind(s,2361))},6191:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5344),a=s(8428);s(3729);let n=e=>r.jsx("div",{className:" flex justify-center items-center dark:bg-gray-800 shadow-lg rounded-full bg-white",children:(0,r.jsxs)("button",{onClick:e.onToggle,className:"h-10 w-10 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",children:[r.jsx("svg",{className:"fill-violet-700 block dark:hidden",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),r.jsx("svg",{className:"fill-yellow-500 hidden dark:block",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"})})]})}),l=e=>{let t=(0,a.useRouter)();return(0,r.jsxs)("div",{className:"flex gap-2 w-full justify-center items-center p-2 variant-glass-surface rounded-b-2xl border border-[#2b334c] fixed top-0 left-0",children:[(0,r.jsxs)("div",{className:"btn-group variant-filled",children:[r.jsx("button",{onClick:()=>t.push("/farmer"),children:"Farmers"}),r.jsx("button",{onClick:()=>t.push("/farm"),children:"Farms"}),r.jsx("button",{onClick:()=>t.push("/schedule"),children:"Schedules"})]}),r.jsx(n,{onToggle:()=>{document.querySelector("html")?.classList.toggle("dark")}})]})}},2361:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(5344),a=s(3729),n=s(6191),l=s(8642);let i=e=>{let[t,s]=(0,a.useState)(0),[n,l]=(0,a.useState)(""),[i,o]=(0,a.useState)(0),[d,c]=(0,a.useState)("ton");return((0,a.useEffect)(()=>{e.data.daysAfterSowing&&e.data.fertiliser&&e.data.quantity&&e.data.quantityUnit&&(s(e.data.daysAfterSowing),l(e.data.fertiliser),o(e.data.quantity),c(e.data.quantityUnit))},[e.data.daysAfterSowing,e.data.fertiliser,e.data.quantity,e.data.quantityUnit]),e.show)?r.jsx("div",{className:" z-50 fixed w-full h-full top-0 left-0 variant-glass-surface flex items-center justify-center",children:(0,r.jsxs)("div",{className:"card p-4",children:[(0,r.jsxs)("label",{className:"label mt-2",children:[r.jsx("span",{children:"Days After Sowing"}),r.jsx("input",{className:"input",type:"number",value:t,placeholder:"Days After Sowing",onChange:e=>s(parseInt(e.target.value))})]}),(0,r.jsxs)("label",{className:"label mt-2",children:[r.jsx("span",{children:"Fertiliser"}),r.jsx("input",{className:"input",type:"text",value:n,placeholder:"Fertiliser",onChange:e=>l(e.target.value)})]}),(0,r.jsxs)("label",{className:"label mt-2",children:[r.jsx("span",{children:"Quantity"}),r.jsx("input",{className:"input",type:"number",value:i,placeholder:"Quantity",onChange:e=>o(parseFloat(e.target.value))})]}),(0,r.jsxs)("label",{className:"label mt-2",children:[r.jsx("span",{children:"Quantity Unit"}),(0,r.jsxs)("select",{value:d,className:"input",onChange:e=>c(e.target.value),children:[r.jsx("option",{value:"ton",children:"ton"}),r.jsx("option",{value:"kg",children:"kg"}),r.jsx("option",{value:"g",children:"g"}),r.jsx("option",{value:"L",children:"L"}),r.jsx("option",{value:"ml",children:"ml"})]})]}),(0,r.jsxs)("div",{className:"flex justify-end gap-2 mt-4",children:[r.jsx("button",{type:"button",className:"btn variant-ringed",onClick:e.onClose,children:"Cancel"}),r.jsx("button",{type:"button",className:"btn variant-filled",onClick:()=>{if(!t||!n||!i||!d){alert("All fields are required");return}fetch("http://20.244.40.42:3000/updateSchedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({daysAfterSowing:t,fertiliser:n,quantity:i,quantityUnit:d,farmId:e.data.farmId,id:e.data.id})}).then(e=>e.json()).then(t=>{t.id?(alert("Schedule updated successfully"),e.onClose(),e.onSave()):console.error("Error:",t.error)}).catch(e=>console.error("Error:",e))},children:"Save"})]})]})}):null},o=e=>{let[t,s]=(0,a.useState)({}),[o,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)({});(0,a.useEffect)(()=>{h()},[]);let h=()=>{fetch("http://20.244.40.42:3000/getSchedules",{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>s(e)).catch(e=>console.error("Error:",e))},p=e=>{window.confirm("Are you sure you want to delete this schedule?")&&fetch("http://20.244.40.42:3000/removeSchedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then(e=>e.json()).then(e=>{e.id?(alert("Schedule deleted successfully"),h()):console.error("Error:",e.error)}).catch(e=>console.error("Error:",e))},x=()=>{fetch("http://20.244.40.42:3000/getSchedulesDue",{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>s(e)).catch(e=>console.error("Error:",e))};return(0,r.jsxs)("main",{className:"w-screen",children:[r.jsx(i,{show:o,data:c,onClose:()=>d(!1),onSave:h}),r.jsx(n.default,{}),(0,r.jsxs)("div",{className:"w-screen max-h-[90%] flex p-4 flex-col items-center mt-16 ",children:[(0,r.jsxs)("label",{className:"flex items-center space-x-2 mb-4",children:[r.jsx("input",{className:"checkbox",type:"checkbox",onClick:e=>{e.currentTarget.checked?x():h()}}),r.jsx("p",{children:"Schedules due for today/tomorrow"})]}),r.jsx("div",{className:"table-container border border-[#2b334c] ",children:(0,r.jsxs)("table",{className:"table table-hover",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("td",{children:"#"}),r.jsx("td",{children:"Farm ID"}),r.jsx("td",{children:"Days after Sowing"}),r.jsx("td",{children:"Fertiliser"}),r.jsx("td",{children:"Quantity"}),r.jsx("td",{children:"Quantity Unit"}),r.jsx("td",{children:"Actions"})]})}),r.jsx("tbody",{children:Object.values(t).map((e,t)=>(0,r.jsxs)("tr",{children:[r.jsx("td",{children:t+1}),r.jsx("td",{children:e.farmId}),r.jsx("td",{children:e.daysAfterSowing}),r.jsx("td",{children:e.fertiliser}),r.jsx("td",{children:e.quantity}),r.jsx("td",{children:e.quantityUnit}),r.jsx("td",{children:(0,r.jsxs)("div",{className:"flex gap-2",children:[r.jsx("button",{type:"button",className:"btn-icon variant-filled-secondary btn-sm",onClick:()=>{u(e),d(!0)},children:r.jsx(l.zmo,{})}),r.jsx("button",{type:"button",className:"btn-icon variant-filled-primary btn-sm",onClick:()=>p(e.id),children:r.jsx(l.ZkW,{})})]})})]},t))})]})})]})]})}},1342:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>l});var r=s(5036),a=s(3640),n=s.n(a);s(5023);let l={title:"Create Next App",description:"Generated by create next app"};function i({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,"data-theme":"crimson",children:e})})}},1857:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>l});let r=(0,s(6843).createProxy)(String.raw`D:\Projects\sow-sync-frontend\src\app\schedule\page.tsx`),{__esModule:a,$$typeof:n}=r,l=r.default},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,225,404,642],()=>s(8523));module.exports=r})();