import{ds as j,db as n,dn as $,dc as l}from"./index-C1DpNrdH.js";import{l as g,i as a,o as d,c as h}from"./ethers-DNxEwCFm-CL-zZ6zC.js";import{r as k}from"./getFormattedUsdFromLamports-De3U9GlO-C446pzMl.js";import{t as y}from"./transaction-BNTP-bFm-CrebgH-D.js";const O=({weiQuantities:e,tokenPrice:r,tokenSymbol:s})=>{let i=a(e),t=r?d(i,r):void 0,o=h(i,s);return n.jsx(c,{children:t||o})},P=({weiQuantities:e,tokenPrice:r,tokenSymbol:s})=>{let i=a(e),t=r?d(i,r):void 0,o=h(i,s);return n.jsx(c,{children:t?n.jsxs(n.Fragment,{children:[n.jsx(S,{children:"USD"}),t==="<$0.01"?n.jsxs(x,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):t]}):o})},D=({quantities:e,tokenPrice:r,tokenSymbol:s="SOL",tokenDecimals:i=9})=>{let t=e.reduce(((u,f)=>u+f),0n),o=r&&s==="SOL"&&i===9?k(t,r):void 0,m=s==="SOL"&&i===9?y(t):`${j(t,i)} ${s}`;return n.jsx(c,{children:o?n.jsx(n.Fragment,{children:o==="<$0.01"?n.jsxs(x,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):o}):m})};let c=l.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=l.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,p=l.span`
  font-size: 10px;
`,x=l.span`
  display: flex;
  align-items: center;
`;function v(e,r){return`https://explorer.solana.com/account/${e}?chain=${r}`}const F=e=>n.jsx(b,{href:e.chainType==="ethereum"?g(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:$(e.walletAddress)});let b=l.a`
  &:hover {
    text-decoration: underline;
  }
`;export{F as S,D as f,P as h,O as p};
