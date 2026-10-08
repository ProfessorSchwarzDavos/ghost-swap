import{dL as N,d7 as U,d8 as M,dd as D,d9 as n,dg as d,dT as B,dH as k,db as r,dJ as F,dE as W,dc as s}from"./index-C1DpNrdH.js";import{n as z}from"./OpenLink-CUpJ1mOr-B9-Z_4Mo.js";import{x as q}from"./QrCode-cA9rnMIN-BzeS35Zr.js";import{f as V}from"./ModalFooter-BldNwiHO-BShE1wlp.js";import{r as H}from"./LabelXs-oqZNqbm_-CpcSrWWo.js";import{a as P}from"./shouldProceedtoEmbeddedWalletCreationFlow-BxvaW_Vy-BbEXHKns.js";import{n as J}from"./ScreenLayout-XFsWudNK-BcghbP7F.js";import{l as _}from"./farcaster-DPlSjvF5-BHYAT9bp.js";import"./browser-BFosCwBg.js";import{C as Q}from"./check-D5pOW5kA.js";import{C as K}from"./copy-DqLdZM2K.js";import"./Screen-Dtn4lspb-CxTfiMab.js";import"./index-CWARkn2w-CRi_aHEp.js";import"./dijkstra-COg3n3zL.js";import"./createLucideIcon-BAVHleuH.js";let X=s.div`
  width: 100%;
`,Y=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,G=s.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,O=s.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,Z=s(O)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,ee=s(H)`
  margin-bottom: 0.5rem;
`,re=s(V)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const te=({value:e,title:u,placeholder:l,className:t,showCopyButton:c=!0,truncate:o,maxLength:p=40,disabled:m=!1})=>{let[h,x]=n.useState(!1),w=o&&e?((a,E,f)=>{if((a=a.startsWith("https://")?a.slice(8):a).length<=f)return a;if(E==="middle"){let y=Math.ceil(f/2)-2,S=Math.floor(f/2)-1;return`${a.slice(0,y)}...${a.slice(-S)}`}return`${a.slice(0,f-3)}...`})(e,o,p):e;return n.useEffect((()=>{if(h){let a=setTimeout((()=>x(!1)),3e3);return()=>clearTimeout(a)}}),[h]),r.jsxs(X,{className:t,children:[u&&r.jsx(ee,{children:u}),r.jsxs(Y,{$disabled:m,children:[r.jsx(G,{children:e?r.jsx(O,{$disabled:m,title:e,children:w}):r.jsx(Z,{$disabled:m,children:l||"No value"})}),c&&e&&r.jsx(re,{onClick:function(a){a.stopPropagation(),navigator.clipboard.writeText(e).then((()=>x(!0))).catch(console.error)},size:"sm",children:r.jsxs(r.Fragment,h?{children:["Copied",r.jsx(Q,{size:14})]}:{children:["Copy",r.jsx(K,{size:14})]})})]})]})},ae=({connectUri:e,loading:u,success:l,errorMessage:t,onBack:c,onClose:o,onOpenFarcaster:p})=>r.jsx(J,F.isMobile||u?F.isIOS?{title:t?t.message:"Sign in with Farcaster",subtitle:t?t.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:_,iconVariant:"loading",iconLoadingStatus:{success:l,fail:!!t},primaryCta:e&&p?{label:"Open Farcaster app",onClick:p}:void 0,onBack:c,onClose:o,watermark:!0}:{title:t?t.message:"Signing in with Farcaster",subtitle:t?t.detail:"This should only take a moment",icon:_,iconVariant:"loading",iconLoadingStatus:{success:l,fail:!!t},onBack:c,onClose:o,watermark:!0,children:e&&F.isMobile&&r.jsx(ie,{children:r.jsx(z,{text:"Take me to Farcaster",url:e,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:c,onClose:o,watermark:!0,children:r.jsxs(oe,{children:[r.jsx(se,{children:e?r.jsx(q,{url:e,size:275,squareLogoElement:_}):r.jsx(ce,{children:r.jsx(W,{})})}),r.jsxs(ne,{children:[r.jsx(le,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),e&&r.jsx(te,{value:e,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),Te={component:()=>{let{authenticated:e,logout:u,ready:l,user:t}=N(),{lastScreen:c,navigate:o,navigateBack:p,setModalData:m}=U(),h=M(),{getAuthFlow:x,loginWithFarcaster:w,closePrivyModal:a,createAnalyticsEvent:E}=D(),[f,y]=n.useState(void 0),[S,R]=n.useState(!1),[b,L]=n.useState(!1),C=n.useRef([]),$=x(),T=$?.meta.connectUri;return n.useEffect((()=>{let g=Date.now(),j=setInterval((async()=>{let A=await $.pollForReady.execute(),I=Date.now()-g;if(A){clearInterval(j),R(!0);try{await w(),L(!0)}catch(i){let v={retryable:!1,message:"Authentication failed"};if(i?.privyErrorCode===d.ALLOWLIST_REJECTED)return void o("AllowlistRejectionScreen");if(i?.privyErrorCode===d.USER_LIMIT_REACHED)return console.error(new B(i).toString()),void o("UserLimitReachedScreen");if(i?.privyErrorCode===d.USER_DOES_NOT_EXIST)return void o("AccountNotFoundScreen");if(i?.privyErrorCode===d.LINKED_TO_ANOTHER_USER)v.detail=i.message??"This account has already been linked to another user.";else{if(i?.privyErrorCode===d.ACCOUNT_TRANSFER_REQUIRED&&i.data?.data?.nonce)return m({accountTransfer:{nonce:i.data?.data?.nonce,account:i.data?.data?.subject,displayName:i.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:i.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:i.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void o("LinkConflictScreen");i?.privyErrorCode===d.INVALID_CREDENTIALS?(v.retryable=!0,v.detail="Something went wrong. Try again."):i?.privyErrorCode===d.TOO_MANY_REQUESTS&&(v.detail="Too many requests. Please wait before trying again.")}y(v)}}else I>12e4&&(clearInterval(j),y({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))}),2e3);return()=>{clearInterval(j),C.current.forEach((A=>clearTimeout(A)))}}),[]),n.useEffect((()=>{if(l&&e&&b&&t){if(h?.legal.requireUsersAcceptTerms&&!t.hasAcceptedTerms){let g=setTimeout((()=>{o("AffirmativeConsentScreen")}),k);return()=>clearTimeout(g)}b&&(P(t,h.embeddedWallets)?C.current.push(setTimeout((()=>{m({createWallet:{onSuccess:()=>{},onFailure:g=>{console.error(g),E({eventName:"embedded_wallet_creation_failure_logout",payload:{error:g,screen:"FarcasterConnectStatusScreen"}}),u()},callAuthOnSuccessOnClose:!0}}),o("EmbeddedWalletOnAccountCreateScreen")}),k)):C.current.push(setTimeout((()=>a({shouldCallAuthOnSuccess:!0,isSuccess:!0})),k)))}}),[b,l,e,t]),r.jsx(ae,{connectUri:T,loading:S,success:b,errorMessage:f,onBack:c?p:void 0,onClose:a,onOpenFarcaster:()=>{T&&(window.location.href=T)}})}};let ie=s.div`
  margin-top: 24px;
`,oe=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,se=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,ne=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,le=s.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,ce=s.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{Te as FarcasterConnectStatusScreen,ae as FarcasterConnectStatusView,Te as default};
