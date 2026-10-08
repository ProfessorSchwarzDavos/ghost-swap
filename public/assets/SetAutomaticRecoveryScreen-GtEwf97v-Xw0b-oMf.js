import{dL as R,dd as U,d7 as $,d9 as y,db as e,ey as g,eN as w,dH as k,dc as I}from"./index-C1DpNrdH.js";import{F as P}from"./ExclamationTriangleIcon-CJdVzjxY.js";import{F as W}from"./LockClosedIcon-DGSZ5L77.js";import{L as x,u as v,h as j}from"./ModalFooter-BldNwiHO-BShE1wlp.js";import{r as A}from"./Subtitle-CV-2yKE4-D_bt0o_I.js";import{e as S}from"./Title-BnzYV3Is-CtS12wM6.js";const M=I.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${t=>t.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,K={component:()=>{let{user:t}=R(),{client:b,walletProxy:u,refreshSessionAndUser:C,closePrivyModal:s}=U(),r=$(),{entropyId:m,entropyIdVerifier:T}=r.data?.recoverWallet??{},[a,f]=y.useState(!1),[l,E]=y.useState(null),[i,h]=y.useState(null);function n(){if(!a){if(i)return r.data?.setWalletPassword?.onFailure(i),void s();if(!l)return r.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),void s()}}r.onUserCloseViaDialogOrKeybindRef.current=n;let F=!(!a&&!l);return e.jsxs(e.Fragment,i?{children:[e.jsx(x,{onClose:n},"header"),e.jsx(M,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:e.jsx(P,{height:38,width:38,stroke:"var(--privy-color-error)"})}),e.jsx(S,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),e.jsx(g,{style:{minHeight:"2rem"}}),e.jsx(v,{onClick:()=>h(null),children:"Try again"}),e.jsx(j,{})]}:{children:[e.jsx(x,{onClose:n},"header"),e.jsx(W,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),e.jsx(S,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),e.jsx(A,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),e.jsx(g,{style:{minHeight:"2rem"}}),e.jsx(v,{loading:a,disabled:F,onClick:()=>(async function(){f(!0);try{let o=await b.getAccessToken(),c=w(t,m);if(!o||!u||!c)return;if(!(await u.setRecovery({accessToken:o,entropyId:m,entropyIdVerifier:T,existingRecoveryMethod:c.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let d=await C();if(!d)throw Error("Unable to set recovery on wallet");let p=w(d,c.address);if(!p)throw Error("Unabled to set recovery on wallet");E(!!d),setTimeout((()=>{r.data?.setWalletPassword?.onSuccess(p),s()}),k)}catch(o){h(o)}finally{f(!1)}})(),children:l?"Success":"Confirm"}),e.jsx(j,{})]})}};export{K as SetAutomaticRecoveryScreen,K as default};
