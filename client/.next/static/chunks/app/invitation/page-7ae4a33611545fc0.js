(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[354],{7803:function(e,t,n){Promise.resolve().then(n.bind(n,5036))},5036:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(9268),i=n(6008),l=n(6006);let r=e=>{let{date:t}=e,[n,i]=(0,l.useState)(0),[r,c]=(0,l.useState)(0),[u,d]=(0,l.useState)(0),[a,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=setInterval(()=>{let e=Date.parse(t)-Date.parse(new Date);i(Math.floor(e/864e5)),c(Math.floor(e/36e5%24)),d(Math.floor(e/1e3/60%60)),o(Math.floor(e/1e3%60))},1e3);return()=>clearInterval(e)},[t]),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",padding:"60px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{children:n}),(0,s.jsx)("div",{children:"d\xedas"})]}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{children:r}),(0,s.jsx)("div",{children:"hs"})]}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{children:u}),(0,s.jsx)("div",{children:"min"})]}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{children:a}),(0,s.jsx)("div",{children:"seg"})]})]})};n(6394);var c=n(8817);function u(){let[e,t]=(0,l.useState)(!1),[n,i]=(0,l.useState)(0),r=(0,l.useRef)(null);return(0,l.useEffect)(()=>()=>{r.current&&r.current.pause()},[]),(0,s.jsx)("div",{children:(0,s.jsx)("button",{onClick:function(){t(e=>!e),e?(i(r.current.seek()),r.current.pause()):(r.current=new c.Howl({src:["/utils/flowers.mp3"],onend:function(){t(!1)},onload:function(){n>0&&r.current.seek(n)}}),r.current.play())},children:e?"\uD83D\uDD0A":"\uD83D\uDD08"})})}let d=()=>{let e=(0,i.useRouter)();return(0,l.useEffect)(()=>{let t=window.sessionStorage.getItem("authenticated");t||e.push("/")},[]),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(r,{date:"2023-04-29T15:43:40.237Z"}),(0,s.jsx)(u,{})]})})};var a=d}},function(e){e.O(0,[525,455,744],function(){return e(e.s=7803)}),_N_E=e.O()}]);