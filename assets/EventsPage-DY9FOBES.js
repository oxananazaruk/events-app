import{d as n,L,j as e,r as i,a as D}from"./index-Vz90z9_1.js";import{f as k}from"./api-DL1kl8IV.js";import{E as $}from"./Error-0re87eWu.js";const C=n.div`
  border: ${t=>t.theme.border.grey};
  background-color: rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,T=n.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,m=n.p`
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,H=n.p`
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  margin-top: 12px;
`,I=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`,v=n(L)`
  color: ${t=>t.theme.color.buttons};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;

  &:hover,
  &:focus {
    color: ${t=>t.theme.color.main};
    border-bottom: ${t=>t.theme.border.blue};
  }
`,N=({event:t})=>{const{title:l,eventDate:c,description:d,organizer:p}=t;return e.jsxs(C,{children:[e.jsxs("div",{children:[e.jsx(T,{children:l}),e.jsx(m,{children:d}),e.jsx(m,{children:c}),e.jsx(H,{children:p})]}),e.jsxs(I,{children:[e.jsx(v,{to:"/registration",state:{event:t},children:"Register"}),e.jsx(v,{to:"/participants",state:{event:t},children:"View"})]})]})},_=n.ul`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`,B=n.li`
  width: calc((100% - 112px) / 4);
`,M=({events:t})=>e.jsx(_,{children:t.map(l=>e.jsx(B,{children:e.jsx(N,{event:l})},l._id))}),O=n.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,P=n.div`
  margin-top: 50px;
  text-align: center;
`,R=n.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`,W=n.select`
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
`,A=n.p`
  margin-top: 20px;
  text-align: center;
`,G=()=>{const[t,l]=i.useState([]),[c,d]=i.useState(!1),[p,h]=i.useState(!1),[g,w]=i.useState(1),[x,j]=i.useState(!0),[u,E]=i.useState("");i.useEffect(()=>{async function o(){try{d(!0),h(!1);const r=await k(g);r.length<9&&j(!1),l(s=>{const a=r.filter(S=>!s.some(z=>z._id===S._id));return[...s,...a]})}catch(r){console.log(r.message),h(!0)}finally{d(!1)}}o()},[g]),i.useEffect(()=>{const o=()=>{if(window.innerHeight+document.documentElement.scrollTop<document.documentElement.offsetHeight-20||c||!x)return null;w(r=>r+1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[c,x]);const b=(o,r)=>{switch(r){case"title":return o.sort((s,a)=>s.title.localeCompare(a.title));case"eventDate":return o.sort((s,a)=>new Date(s.eventDate)-new Date(a.eventDate));case"organizer":return o.sort((s,a)=>s.organizer.localeCompare(a.organizer));default:return o}},y=o=>{E(o.target.value)},f=b([...t],u);return e.jsxs(O,{children:[e.jsxs(P,{children:[e.jsx(R,{htmlFor:"sort",children:"Sort by: "}),e.jsxs(W,{id:"sort",value:u,onChange:y,children:[e.jsx("option",{value:"",children:"None"}),e.jsx("option",{value:"title",children:"Title"}),e.jsx("option",{value:"eventDate",children:"Event Date"}),e.jsx("option",{value:"organizer",children:"Organizer"})]})]}),c&&e.jsx(D,{}),p&&e.jsx($,{}),f.length>0&&e.jsx(M,{events:f}),!x&&e.jsx(A,{children:"No more events to load"})]})};export{G as default};
