import{dL as A,dd as M,d7 as N,d9 as r,fF as k,dQ as E,eY as C,eZ as b,db as t,dH as z,dc as p,dU as I,fG as O,fH as q}from"./index-C1DpNrdH.js";import{h as F}from"./CopyToClipboard-i_OQSBJr-CMET_cfH.js";import{d as P}from"./Layouts-BMRfo5hw-C_CQCR7b.js";import{a as H,i as V}from"./JsonTree-BHzNC-ic-B4xq0IeY.js";import{n as $}from"./ScreenLayout-XFsWudNK-BcghbP7F.js";import{c as B}from"./createLucideIcon-BAVHleuH.js";import"./ModalFooter-BldNwiHO-BShE1wlp.js";import"./Screen-Dtn4lspb-CxTfiMab.js";import"./index-CWARkn2w-CRi_aHEp.js";const J=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Q=B("square-pen",J),G=p.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let K=e=>{if(!I(e))return e;try{let a=O(e);return a.includes("�")?e:a}catch{return e}},W=e=>{try{let a=q.decode(e),s=new TextDecoder().decode(a);return s.includes("�")?e:s}catch{return e}},Y=e=>{let{types:a,primaryType:s,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx(F,{text:(n=e.typedData,JSON.stringify(n,null,2)),itemName:"full payload to clipboard"})," "]});var n};const Z=({method:e,messageData:a,copy:s,iconUrl:l,isLoading:n,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:u})=>t.jsx($,{title:s.title,subtitle:s.description,showClose:!0,onClose:u,icon:Q,iconVariant:"subtle",helpText:x?t.jsx(ee,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:n||g||m,loading:n},secondaryCta:d?{label:"Not now",onClick:y,disabled:n||g||m}:void 0,watermark:!0,children:t.jsxs(P,{children:[l?t.jsx(G,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(X,{children:[e==="personal_sign"&&t.jsx(w,{children:K(a)}),e==="eth_signTypedData_v4"&&t.jsx(Y,{typedData:a}),e==="solana_signMessage"&&t.jsx(w,{children:W(a)})]})]})}),ue={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:a,closePrivyModal:s}=M(),{navigate:l,data:n,onUserCloseViaDialogOrKeybindRef:g}=N(),[m,x]=r.useState(!0),[d,c]=r.useState(""),[y,u]=r.useState(),[f,T]=r.useState(null),[R,S]=r.useState(!1);r.useEffect((()=>{e||l("LandingScreen")}),[e]),r.useEffect((()=>{a(k).then((i=>{x(!1),i||(c("An error has occurred, please try again."),u(new E(new C(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:_,data:v,confirmAndSign:j,onSuccess:D,onFailure:L,uiOptions:o}=n.signMessage,U={title:o?.title||"Sign message",description:o?.description||"Signing this message will not cost you any fees.",buttonText:o?.buttonText||"Sign and continue"},h=i=>{i?D(i):L(y||new E(new C("The user rejected the request.",b.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{T(null),c(""),u(void 0)}),200)};return g.current=()=>{h(f)},t.jsx(Z,{method:_,messageData:v,copy:U,iconUrl:o?.iconUrl&&typeof o.iconUrl=="string"?o.iconUrl:void 0,isLoading:R,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:o?.isCancellable,onSign:async()=>{S(!0),c("");try{let i=await j();T(i),S(!1),setTimeout((()=>{h(i)}),z)}catch(i){console.error(i),c("An error has occurred, please try again."),u(new E(new C(d,b.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let X=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=p.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=p(H)`
  margin-top: 0;
`,w=p(V)`
  margin-top: 0;
`;export{ue as SignRequestScreen,Z as SignRequestView,ue as default};
