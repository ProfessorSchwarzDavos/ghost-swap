import{d9 as a,dL as T,dd as _,d7 as E,db as e,eN as I,eO as F,e9 as N,dc as u,ek as O}from"./index-C1DpNrdH.js";import{F as U}from"./ShieldCheckIcon-CsxQr82V.js";import{b as W}from"./ModalFooter-BldNwiHO-BShE1wlp.js";import{l as V}from"./Layouts-BMRfo5hw-C_CQCR7b.js";import{g as H,h as B,y as L,w as M,k as q}from"./shared-C4KM7VSO-DcBF7UP1.js";import{w as t}from"./Screen-Dtn4lspb-CxTfiMab.js";import"./index-CWARkn2w-CRi_aHEp.js";const re={component:()=>{let[o,h]=a.useState(!0),{authenticated:p,user:b}=T(),{walletProxy:y,closePrivyModal:m,createAnalyticsEvent:v,client:g}=_(),{navigate:j,data:k,onUserCloseViaDialogOrKeybindRef:C}=E(),[l,A]=a.useState(void 0),[x,n]=a.useState(""),[d,f]=a.useState(!1),{entropyId:c,entropyIdVerifier:$,onCompleteNavigateTo:w,onSuccess:S,onFailure:P}=k.recoverWallet,i=(r="User exited before their wallet could be recovered")=>{m({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new N(r):r)};return C.current=i,a.useEffect((()=>{if(!p)return i("User must be authenticated and have a Privy wallet before it can be recovered")}),[p]),e.jsxs(t,{children:[e.jsx(t.Header,{icon:U,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:i}),e.jsx(t.Body,{children:e.jsx(z,{children:e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx(B,{type:o?"password":"text",onChange:r=>(s=>{s&&A(s)})(r.target.value),disabled:d,style:{paddingRight:"2.3rem"}}),e.jsx(L,{style:{right:"0.75rem"},children:o?e.jsx(M,{onClick:()=>h(!1)}):e.jsx(q,{onClick:()=>h(!0)})})]}),!!x&&e.jsx(D,{children:x})]})})}),e.jsxs(t.Footer,{children:[e.jsx(t.HelpText,{children:e.jsxs(V,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(t.Actions,{children:e.jsx(K,{loading:d||!y,disabled:!l,onClick:async()=>{f(!0);let r=await g.getAccessToken(),s=I(b,c);if(!r||!s||l===null)return i("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:s.address}}),await y?.recover({accessToken:r,entropyId:c,entropyIdVerifier:$,recoveryPassword:l}),n(""),w?j(w):m({shouldCallAuthOnSuccess:!1}),S?.(s),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:s.address}})}catch(R){F(R)?n("Invalid recovery password, please try again."):n("An error has occurred, please try again.")}finally{f(!1)}},$hideAnimations:!c&&d,children:"Recover your account"})}),e.jsx(t.Watermark,{})]})]})}};let z=u.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,D=u.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,K=u(W)`
  ${({$hideAnimations:o})=>o&&O`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{re as PasswordRecoveryScreen,re as default};
