import{d6 as b,d7 as k,d8 as A,d9 as t,da as L,db as e,dc as x}from"./index-C1DpNrdH.js";import{n as F}from"./index-CWARkn2w-CRi_aHEp.js";import{h as G,t as O}from"./GooglePay-B53WnudL-DKB--9Pa.js";import{a as g,o as _,p as R}from"./isPaymentRequestAvailable-Bq1cemEn-AYBnvxRJ.js";import{n as D}from"./styles-DVyDvTdj-D5gxcGpv.js";import{i as w,l as n,s as l}from"./styles-BSL8-rdX-DcaouSpI.js";import{C as T,L as Y}from"./landmark-B2AuY3bn.js";import{W as S}from"./wallet-lEIvawjP.js";import"./ScreenLayout-XFsWudNK-BcghbP7F.js";import"./ModalFooter-BldNwiHO-BShE1wlp.js";import"./Screen-Dtn4lspb-CxTfiMab.js";import"./createLucideIcon-BAVHleuH.js";const J={component:()=>{let r=b(),{onUserCloseViaDialogOrKeybindRef:d}=k(),P=A(),s=t.useRef(!1),h=g(_),y=g(R),[v,E]=t.useState(!1),u=h?"APPLE_PAY":h===!1&&y?"GOOGLE_PAY":null,p=h===!0||h===!1&&y!==void 0,f=!r?.startFiat||p||v;t.useEffect((()=>{let j=window.setTimeout((()=>E(!0)),2e3);return()=>window.clearTimeout(j)}),[]),t.useEffect((()=>{r&&(s.current=!1)}),[r]);let C=t.useRef(null);t.useEffect((()=>{r&&!r.error&&f&&C.current!==r&&(C.current=r,r.recordRowsViewed?.({walletPay:r.startFiat?u:void 0,walletPayTimedOut:r.startFiat?!p:void 0}))}),[f,r,u,p]);let i=t.useCallback((async()=>{!s.current&&r&&(s.current=!0,L(),await r.onCancel())}),[r]);if(t.useEffect((()=>(d.current=i,()=>{d.current===i&&(d.current=null)})),[i,d]),!r)return null;if(r.error)return e.jsx(w,{title:"Unable to add funds",subtitle:r.error,showClose:!0,onClose:i,primaryCta:{label:"Close",onClick:i}});let m=async j=>{s.current||(s.current=!0,await r.startFiat?.(j))};return e.jsx(w,{title:"Pay with",subtitle:"Debit cards typically have higher success rates than credit cards, even with Apple Pay or Google Pay.",showClose:!0,onClose:i,children:f?e.jsxs(D,{style:{marginTop:"1rem"},$colorScheme:P.appearance.palette.colorScheme,children:[r.startFiat&&e.jsxs(n,{onClick:()=>m("CREDIT_DEBIT_CARD"),children:[e.jsx(a,{children:e.jsx(T,{})}),e.jsxs(o,{children:[e.jsx(l,{children:"Debit or credit card"}),e.jsx(c,{children:"Less than 10 minutes"})]})]}),r.startFiat&&u==="APPLE_PAY"&&e.jsxs(n,{onClick:()=>m("APPLE_PAY"),children:[e.jsx(a,{children:e.jsx(G,{width:18,height:18})}),e.jsxs(o,{children:[e.jsx(l,{children:"Apple Pay"}),e.jsx(c,{children:"Less than 10 minutes"})]})]}),r.startFiat&&u==="GOOGLE_PAY"&&e.jsxs(n,{onClick:()=>m("GOOGLE_PAY"),children:[e.jsx(a,{children:e.jsx(O,{width:18,height:18})}),e.jsxs(o,{children:[e.jsx(l,{children:"Google Pay"}),e.jsx(c,{children:"Less than 10 minutes"})]})]}),r.startFiat&&e.jsxs(n,{onClick:()=>m("BANK"),children:[e.jsx(a,{children:e.jsx(Y,{})}),e.jsxs(o,{children:[e.jsx(l,{children:"Bank account"}),e.jsx(c,{children:"1–2 days"})]})]}),r.startCrypto&&e.jsxs(n,{onClick:async()=>{s.current||(s.current=!0,await r.startCrypto?.())},children:[e.jsx(a,{children:e.jsx(S,{})}),e.jsxs(o,{children:[e.jsx(l,{children:"Crypto wallet or exchange"}),e.jsx(c,{children:"Instant"})]})]})]}):e.jsx(z,{children:e.jsx(F,{size:"50px"})})})}};let z=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-height: 8rem;
`,a=x.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-icon-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,o=x.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,c=x.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{J as AddFundsSelectionScreen,J as default};
