import{d7 as F,d8 as T,dd as I,d9 as c,dH as y,db as t,dJ as x,dE as B,dc as o}from"./index-C1DpNrdH.js";import{h as E}from"./CopyToClipboard-i_OQSBJr-CMET_cfH.js";import{n as O}from"./OpenLink-CUpJ1mOr-B9-Z_4Mo.js";import{x as q}from"./QrCode-cA9rnMIN-BzeS35Zr.js";import{n as M}from"./ScreenLayout-XFsWudNK-BcghbP7F.js";import{l as h}from"./farcaster-DPlSjvF5-BHYAT9bp.js";import"./browser-BFosCwBg.js";import"./ModalFooter-BldNwiHO-BShE1wlp.js";import"./Screen-Dtn4lspb-CxTfiMab.js";import"./index-CWARkn2w-CRi_aHEp.js";import"./dijkstra-COg3n3zL.js";let S="#8a63d2";const _=({appName:d,loading:m,success:u,errorMessage:e,connectUri:a,onBack:r,onClose:l,onOpenFarcaster:s})=>t.jsx(M,x.isMobile||m?x.isIOS?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:u,fail:!!e},primaryCta:a&&s?{label:"Open Farcaster app",onClick:s}:void 0,onBack:r,onClose:l,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:u,fail:!!e},onBack:r,onClose:l,watermark:!0,children:a&&x.isMobile&&t.jsx(A,{children:t.jsx(O,{text:"Take me to Farcaster",url:a,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${d} to add casts, likes, follows, and more on your behalf.`,onBack:r,onClose:l,watermark:!0,children:t.jsxs(R,{children:[t.jsx(L,{children:a?t.jsx(q,{url:a,size:275,squareLogoElement:h}):t.jsx(V,{children:t.jsx(B,{})})}),t.jsxs(N,{children:[t.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),a&&t.jsx(E,{text:a,itemName:"link",color:S})]})]})});let A=o.div`
  margin-top: 24px;
`,R=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=o.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,N=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,P=o.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,V=o.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const Z={component:()=>{let{lastScreen:d,navigateBack:m,data:u}=F(),e=T(),{requestFarcasterSignerStatus:a,closePrivyModal:r}=I(),[l,s]=c.useState(void 0),[k,v]=c.useState(!1),[j,w]=c.useState(!1),g=c.useRef([]),n=u?.farcasterSigner;c.useEffect((()=>{let b=Date.now(),i=setInterval((async()=>{if(!n?.public_key)return clearInterval(i),void s({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});n.status==="approved"&&(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y)));let p=await a(n?.public_key),C=Date.now()-b;p.status==="approved"?(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y))):C>3e5?(clearInterval(i),s({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):p.status==="revoked"&&(clearInterval(i),s({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))}),2e3);return()=>{clearInterval(i),g.current.forEach((p=>clearTimeout(p)))}}),[]);let f=n?.status==="pending_approval"?n.signer_approval_url:void 0;return t.jsx(_,{appName:e.name,loading:k,success:j,errorMessage:l,connectUri:f,onBack:d?m:void 0,onClose:r,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{Z as FarcasterSignerStatusScreen,_ as FarcasterSignerStatusView,Z as default};
