import{j as e,L as m,d as a,r as o,a as b}from"./index-BeQXFneV.js";import{f as z}from"./api-DL1kl8IV.js";import{E as D}from"./Error-DyuLtr52.js";const C=({event:t})=>{const{title:l,eventDate:c,description:d,organizer:x}=t;return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:l}),e.jsx("p",{children:d}),e.jsx("p",{children:c}),e.jsx("p",{children:x})]}),e.jsxs("div",{children:[e.jsx(m,{to:"/registration",state:{event:t},children:"Register"}),e.jsx(m,{to:"/participants",state:{event:t},children:"View"})]})]})},T=a.ul`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`,H=a.li`
  width: calc((100% - 112px) / 4);
`,I=({events:t})=>e.jsx(T,{children:t.map(l=>e.jsx(H,{children:e.jsx(C,{event:l})},l._id))}),_=a.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,$=a.div`
  margin-top: 50px;
  text-align: center;
`,B=a.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`,M=a.select`
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  border: ${t=>t.theme.border.grey};
  color: ${t=>t.theme.color.text};
  width: 200px;
  &:focus {
    outline: none;
    border: ${t=>t.theme.border.blue};
  }
`,N=a.p`
  margin-top: 20px;
  text-align: center;
`,A=()=>{const[t,l]=o.useState([]),[c,d]=o.useState(!1),[x,h]=o.useState(!1),[u,j]=o.useState(1),[p,v]=o.useState(!0),[g,E]=o.useState("");o.useEffect(()=>{async function r(){try{d(!0),h(!1);const n=await z(u);n.length<9&&v(!1),l(s=>{const i=n.filter(L=>!s.some(y=>y._id===L._id));return[...s,...i]})}catch(n){console.log(n.message),h(!0)}finally{d(!1)}}r()},[u]),o.useEffect(()=>{const r=()=>{if(window.innerHeight+document.documentElement.scrollTop<document.documentElement.offsetHeight-20||c||!p)return null;j(n=>n+1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[c,p]);const w=(r,n)=>{switch(n){case"title":return r.sort((s,i)=>s.title.localeCompare(i.title));case"eventDate":return r.sort((s,i)=>new Date(s.eventDate)-new Date(i.eventDate));case"organizer":return r.sort((s,i)=>s.organizer.localeCompare(i.organizer));default:return r}},S=r=>{E(r.target.value)},f=w([...t],g);return e.jsxs(_,{children:[e.jsxs($,{children:[e.jsx(B,{htmlFor:"sort",children:"Sort by: "}),e.jsxs(M,{id:"sort",value:g,onChange:S,children:[e.jsx("option",{value:"",children:"None"}),e.jsx("option",{value:"title",children:"Title"}),e.jsx("option",{value:"eventDate",children:"Event Date"}),e.jsx("option",{value:"organizer",children:"Organizer"})]})]}),c&&e.jsx(b,{}),x&&e.jsx(D,{}),f.length>0&&e.jsx(I,{events:f}),!p&&e.jsx(N,{children:"No more events to load"})]})};export{A as default};
