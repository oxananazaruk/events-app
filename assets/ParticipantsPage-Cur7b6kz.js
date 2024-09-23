import{d as r,j as t,u as j,r as a,a as P}from"./index-Vz90z9_1.js";import{b as w}from"./api-DL1kl8IV.js";import{E as y}from"./Error-0re87eWu.js";const L=r.div`
  border: ${e=>e.theme.border.grey};
  background-color: rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,b=({participant:e})=>t.jsxs(L,{children:[t.jsx("p",{children:e.fullName}),t.jsx("p",{children:e.email})]}),C=r.ul`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`,S=r.li`
  width: calc((100% - 112px) / 4);
`,v=({participants:e})=>t.jsx(C,{children:e.map(s=>t.jsx(S,{children:t.jsx(b,{participant:s})},s._id))}),E=r.div`
  width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`,N=r.input`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  padding: 10px;
  border-radius: 10px;
`,F=r.div`
  margin-top: 20px;
  text-align: center;
`,_=r.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
`,$=()=>{const e=j(),{event:s}=e.state||{},[c,x]=a.useState([]),[u,l]=a.useState(!1),[f,p]=a.useState(!1),[o,h]=a.useState(""),[d,g]=a.useState([]);a.useEffect(()=>{async function n(){try{l(!0),p(!1);const i=await w(s._id);x(i)}catch(i){console.log(i.message),p(!0)}finally{l(!1)}}n()},[s._id]),a.useEffect(()=>{const n=c.filter(i=>`${i.fullName}`.toLowerCase().includes(o.toLowerCase())||i.email.toLowerCase().includes(o.toLowerCase()));g(n)},[o,c]);const m=n=>{h(n.target.value)};return t.jsxs(E,{children:[t.jsxs(_,{children:[s.title," event participants"]}),t.jsx(F,{children:t.jsx(N,{type:"text",placeholder:"Search by full name or email",value:o,onChange:m})}),u&&t.jsx(P,{}),f&&t.jsx(y,{}),d.length>0?t.jsx(v,{participants:d}):t.jsx("p",{children:"No participants found..."})]})};export{$ as default};
