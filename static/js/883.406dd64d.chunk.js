(self.webpackChunkchili_pepper=self.webpackChunkchili_pepper||[]).push([[883],{4610:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(9634),o=i(579);const a=e=>{let{image:t,title:a}=e;return(0,o.jsx)(r.LazyLoadImage,{className:"card__img",width:"100%",height:"100%",effect:"blur",alt:a,src:i(3907)(`./${t}`)})}},525:(e,t,i)=>{"use strict";i.d(t,{A:()=>w});var r=i(5043),o=i(6543),a=i(4516),n=i(2110),s=i(8972),l=i(5865),p=i(7392),c=i(6494),u=i(4610),d=i(5843),m=i(5084),g=i(7625),h=i(5475),f=i(3003),v=i(3184),y=i(9320),q=i(8942),b=i(579);const x=e=>{let{rating:t}=e;return(0,b.jsx)(a.A,{display:"flex",children:[1,2,3,4,5].map((e=>(0,b.jsx)(a.A,{sx:{color:"#fbc02d",mr:"2px"},children:e<=t?(0,b.jsx)(y.A,{}):(0,b.jsx)(q.A,{})},e)))})},j=e=>{let{data:t}=e;const{title:i,price:y,image:q,slug:j,categoryId:w,id:A,rating:S}=t,k=(0,f.d4)((e=>e.cart.items)).some((e=>e.productId===A)),[$,I]=(0,r.useState)(!1),[L,E]=(0,r.useState)(k);(0,r.useEffect)((()=>{E(k)}),[k]);const{ref:z,inView:R}=(0,d.Wx)({triggerOnce:!0,threshold:.1}),W=(0,f.wA)();(0,r.useEffect)((()=>{R&&!$&&I(!0)}),[R,$]);const F=(e=>{const t=o.LZ.find((t=>t.id===e));return t?t.name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"})(w);return(0,b.jsx)(a.A,{ref:z,sx:{border:"1px solid transparent","&:hover":{borderColor:"rgba(0, 0, 0, 0.15)"},opacity:$?1:0,transform:$?"translateY(0)":"translateY(50px)",transition:"opacity 0.3s ease-in-out, transform 0.3s ease-in-out, border 0.3s ease-in-out",mb:3,overflow:"hidden",width:"100%",height:"100%"},children:(0,b.jsx)(n.A,{className:"card",sx:{boxShadow:"none"},children:(0,b.jsxs)(c.A,{sx:{"&:last-child":{padding:1}},children:[(0,b.jsxs)(h.N_,{to:`/${j}`,component:h.N_,children:[(0,b.jsx)(s.A,{sx:{width:"100%",height:"auto",aspectRatio:"1/1",objectFit:"cover",overflow:"hidden",mb:"10px"},children:(0,b.jsx)(u.A,{image:q})}),(0,b.jsx)(l.A,{sx:{width:"100%",textAlign:"left",minHeight:"24px",fontSize:"14",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontWeight:"bold",fontFamily:"Open Sans"},children:i}),(0,b.jsx)(l.A,{sx:{width:"100%",textAlign:"left",minHeight:"24px",fontSize:"14",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",mb:1},children:F}),(0,b.jsx)(x,{rating:S})]},j),(0,b.jsxs)(a.A,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(l.A,{sx:{textAlign:"center",fontSize:"16",textWrap:"nowrap",fontWeight:"bold",fontFamily:"Open Sans"},children:`${y.toFixed(2)} \u0433\u0440\u043d`}),(0,b.jsx)(p.A,{sx:{px:1,color:"var(--white-90-color)",borderRadius:"0"},onClick:()=>{L||W((0,v.bE)({productId:A,quantity:1,price:y,image:q,category:w})),E(!0)},children:L?(0,b.jsx)(g.A,{sx:{fontSize:24,fill:"var(--black-color)"}}):(0,b.jsx)(m.A,{sx:{fontSize:24,fill:"var(--black-color)"}})})]})]})})})},w=e=>{let{products:t}=e;return(0,b.jsx)(b.Fragment,{children:0===t.length?(0,b.jsx)("p",{children:"\u0429\u043e\u0441\u044c \u043d\u0435 \u043f\u0440\u0430\u0446\u044e\u0454 :("}):t.map(((e,t)=>(0,b.jsx)(j,{data:e},t)))})}},7024:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>L});var r=i(2816),o=i(4516),a=i(5865),n=i(5043),s=i(8387),l=i(1136),p=i(8222),c=i(8610),u=i(4535),d=i(2876),m=i(6240);const g=n.createContext();var h=i(2532),f=i(2372);function v(e){return(0,f.Ay)("MuiGrid",e)}const y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],q=(0,h.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...y.map((e=>`grid-xs-${e}`)),...y.map((e=>`grid-sm-${e}`)),...y.map((e=>`grid-md-${e}`)),...y.map((e=>`grid-lg-${e}`)),...y.map((e=>`grid-xl-${e}`))]);var b=i(579);function x(e){let{breakpoints:t,values:i}=e,r="";Object.keys(i).forEach((e=>{""===r&&0!==i[e]&&(r=e)}));const o=Object.keys(t).sort(((e,i)=>t[e]-t[i]));return o.slice(0,o.indexOf(r))}const j=(0,u.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{container:r,direction:o,item:a,spacing:n,wrap:s,zeroMinWidth:l,breakpoints:p}=i;let c=[];r&&(c=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[i[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const o=e[t];Number(o)>0&&r.push(i[`spacing-${t}-${String(o)}`])})),r}(n,p,t));const u=[];return p.forEach((e=>{const r=i[e];r&&u.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,a&&t.item,l&&t.zeroMinWidth,...c,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((e=>{let{ownerState:t}=e;return{boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},..."wrap"!==t.wrap&&{flexWrap:t.wrap}}}),(function(e){let{theme:t,ownerState:i}=e;const r=(0,l.kW)({values:i.direction,breakpoints:t.breakpoints.values});return(0,l.NI)({theme:t},r,(e=>{const t={flexDirection:e};return e.startsWith("column")&&(t[`& > .${q.item}`]={maxWidth:"none"}),t}))}),(function(e){let{theme:t,ownerState:i}=e;const{container:r,rowSpacing:o}=i;let a={};if(r&&0!==o){const e=(0,l.kW)({values:o,breakpoints:t.breakpoints.values});let i;"object"===typeof e&&(i=x({breakpoints:t.breakpoints.values,values:e})),a=(0,l.NI)({theme:t},e,((e,r)=>{const o=t.spacing(e);return"0px"!==o?{marginTop:t.spacing(-e),[`& > .${q.item}`]:{paddingTop:o}}:i?.includes(r)?{}:{marginTop:0,[`& > .${q.item}`]:{paddingTop:0}}}))}return a}),(function(e){let{theme:t,ownerState:i}=e;const{container:r,columnSpacing:o}=i;let a={};if(r&&0!==o){const e=(0,l.kW)({values:o,breakpoints:t.breakpoints.values});let i;"object"===typeof e&&(i=x({breakpoints:t.breakpoints.values,values:e})),a=(0,l.NI)({theme:t},e,((e,r)=>{const o=t.spacing(e);if("0px"!==o){return{width:`calc(100% + ${o})`,marginLeft:t.spacing(-e),[`& > .${q.item}`]:{paddingLeft:o}}}return i?.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${q.item}`]:{paddingLeft:0}}}))}return a}),(function(e){let t,{theme:i,ownerState:r}=e;return i.breakpoints.keys.reduce(((e,o)=>{let a={};if(r[o]&&(t=r[o]),!t)return e;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const n=(0,l.kW)({values:r.columns,breakpoints:i.breakpoints.values}),s="object"===typeof n?n[o]:n;if(void 0===s||null===s)return e;const p=Math.round(t/s*1e8)/1e6+"%";let c={};if(r.container&&r.item&&0!==r.columnSpacing){const e=i.spacing(r.columnSpacing);if("0px"!==e){const t=`calc(${p} + ${e})`;c={flexBasis:t,maxWidth:t}}}a={flexBasis:p,flexGrow:0,maxWidth:p,...c}}return 0===i.breakpoints.values[o]?Object.assign(e,a):e[i.breakpoints.up(o)]=a,e}),{})}));const w=e=>{const{classes:t,container:i,direction:r,item:o,spacing:a,wrap:n,zeroMinWidth:s,breakpoints:l}=e;let p=[];i&&(p=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const i=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;i.push(e)}})),i}(a,l));const u=[];l.forEach((t=>{const i=e[t];i&&u.push(`grid-${t}-${String(i)}`)}));const d={root:["root",i&&"container",o&&"item",s&&"zeroMinWidth",...p,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==n&&`wrap-xs-${String(n)}`,...u]};return(0,c.A)(d,v,t)},A=n.forwardRef((function(e,t){const i=(0,d.A)({props:e,name:"MuiGrid"}),{breakpoints:r}=(0,m.A)(),o=(0,p.A)(i),{className:a,columns:l,columnSpacing:c,component:u="div",container:h=!1,direction:f="row",item:v=!1,rowSpacing:y,spacing:q=0,wrap:x="wrap",zeroMinWidth:A=!1,...S}=o,k=y||q,$=c||q,I=n.useContext(g),L=h?l||12:I,E={},z={...S};r.keys.forEach((e=>{null!=S[e]&&(E[e]=S[e],delete z[e])}));const R={...o,columns:L,container:h,direction:f,item:v,rowSpacing:k,columnSpacing:$,wrap:x,zeroMinWidth:A,spacing:q,...E,breakpoints:r.keys},W=w(R);return(0,b.jsx)(g.Provider,{value:L,children:(0,b.jsx)(j,{ownerState:R,className:(0,s.A)(W.root,a),as:u,ref:t,...z})})}));const S=A;var k=i(9336),$=i(525),I=i(6543);const L=()=>{const e=I.ZE.filter((e=>e.recommended)),t=I.ZE.filter((e=>e.popularity>80));return(0,b.jsx)(r.A,{className:"custom-container",children:(0,b.jsxs)(o.A,{children:[(0,b.jsxs)(o.A,{display:"flex",flexDirection:"column",children:[(0,b.jsx)(a.A,{variant:"h1",textAlign:"left",fontFamily:"var(--font-family-primary)",fontWeight:"700",fontSize:"36px",mb:"24px",children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"}),(0,b.jsx)(S,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",overflow:"hidden"},children:(0,b.jsx)($.A,{products:e})})]}),(0,b.jsx)(k.A,{sx:{my:4,borderColor:"var(--black-rgba-15-color)"}}),(0,b.jsxs)(o.A,{display:"flex",flexDirection:"column",children:[(0,b.jsx)(a.A,{variant:"h1",textAlign:"left",fontFamily:"var(--font-family-primary)",fontWeight:"700",mb:"24px",fontSize:"36px",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"}),(0,b.jsx)(S,{sx:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",overflow:"hidden"},children:(0,b.jsx)($.A,{products:t})})]})]})})}},6543:(e,t,i)=>{"use strict";i.d(t,{LZ:()=>o,MK:()=>r,ZE:()=>a});const r=[{name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",link:""},{name:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d",link:"shop"},{name:"\u0421\u0442\u0430\u0442\u0442\u0456",link:"articles"},{name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",link:"contacts"}],o=[{id:null,name:"\u0423\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"},{id:1,name:"\u041d\u0430\u0441\u0456\u043d\u043d\u044f",slug:"nasinnya"},{id:2,name:"\u0421\u0432\u0456\u0436\u0438\u0439 \u043f\u0435\u0440\u0435\u0446\u044c",slug:"svizhyy-perets"},{id:3,name:"\u0421\u0443\u0448\u0435\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0446\u044c",slug:"sushenyy-perets"},{id:4,name:"\u0420\u043e\u0437\u0441\u0430\u0434\u0430",slug:"rozsada"},{id:5,name:"\u0421\u043e\u0443\u0441\u0438",slug:"sousy"}],a=[{id:1,title:"\u0411\u0430\u0440\u0430\u043d\u044f\u0447\u0438\u0439 \u0440\u0456\u0433 \u0436\u043e\u0432\u0442\u0438\u0439 - 20 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:5.5,image:"product1.jpg",slug:"nasinnya-pertsyu-baranyachyy-rih-zhovtyy",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:2,title:"Sherwoods Carbonero - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,popularity:100,type:"",price:14.5,image:"product2.jpg",slug:"nasinnya-pertsyu-sherwoods-carbonero",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:3,title:"Numex Eclipse - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,recommended:!0,type:"",price:14.9,image:"product3.jpg",slug:"nasinnya-pertsyu-numex-eclipse",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:4,title:"Papa Joes scotch bonnet - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:14.95,image:"product4.jpg",slug:"nasinnya-pertsyu-papa-joes-scotch-bonnet",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:5,title:"Scotch bonnet trenton FM - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,recommended:!0,type:"",price:14.95,image:"product5.jpg",slug:"nasinnya-pertsyu-scotch-bonnet-trenton-fm",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:6,title:"Habanero hot lemon - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",popularity:100,categoryId:1,type:"",price:14.95,image:"product6.jpg",slug:"nasinnya-pertsyu-habanero-hot-lemon",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:7,title:"Habanero Roger's giant orange - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",popularity:100,categoryId:1,type:"",price:14.95,image:"product7.jpg",slug:"nasinnya-pertsyu-habanero-roger-s-giant-orange",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:8,title:"Habanero Tobago Seasoning - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",popularity:100,categoryId:1,type:"",price:14.95,image:"product8.jpg",slug:"nasinnya-pertsyu-habanero-tobago-seasoning",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:9,title:"Aji Melocoton - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:16.45,image:"product9.jpg",slug:"nasinnya-pertsyu-aji-melocoton",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:10,title:"Habanero Gambia - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",popularity:100,categoryId:1,type:"",price:20.4,image:"product10.jpg",slug:"nasinnya-pertsyu-habanero-gambia",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:11,title:"White Bhut Jolokia JW - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,popularity:100,type:"",price:20.9,image:"product11.jpg",slug:"nasinnya-pertsyu-white-bhut-jolokia-jw",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:12,title:"Black Scorpion Tongue - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:14.95,recommended:!0,image:"product12.jpg",slug:"nasinnya-pertsyu-black-scorpion-tongue",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:13,title:"Datil yellow - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:14.9,image:"product13.jpg",slug:"nasinnya-pertsyu-datil-yellow",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:14,title:"Pimento Caixo - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:14.9,image:"product14.jpg",slug:"nasinnya-pertsyu-pimento-caixo",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:15,title:"Jalapeno Orange - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",popularity:100,categoryId:1,type:"",price:17.45,recommended:!0,image:"product15.jpg",slug:"nasinnya-pertsyu-jalapeno-orange",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:16,title:"Jalapeno black Maroccan - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:19.9,image:"product16.jpg",slug:"nasinnya-pertsyu-jalapeno-black-maroccan",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:17,title:"Sugar rush stripey - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",popularity:100,categoryId:1,type:"",price:19.9,image:"product17.jpg",slug:"nasinnya-pertsyu-sugar-rush-stripey",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:18,title:"Lemon drop - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:20.1,image:"product18.jpg",slug:"nasinnya-pertsyu-lemon-drop",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:19,title:"Jalapeno Purple - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,polularity:100,type:"",price:22.35,image:"product19.jpg",slug:"nasinnya-pertsyu-jalapeno-purple",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:20,title:"Habanero Orange - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:22.35,recommended:!0,image:"product20.jpg",slug:"nasinnya-pertsyu-habanero-orange",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:21,title:"Habanero Chocolate - 5 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:22.35,recommended:!0,image:"product21.jpg",slug:"nasinnya-pertsyu-habanero-chocolate",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:22,title:"\u041c\u0430\u0442\u0430\u0439 - 20 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:12.65,recommended:!0,image:"product22.jpg",slug:"nasinnya-pertsyu-matay",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:23,title:"\u041a\u043e\u0437\u0456\u0439 \u0440\u0456\u0433 - 10 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:4.5,image:"product23.jpg",slug:"nasinnya-pertsyu-koziy-rih",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5},{id:24,title:"\u041a\u0438\u0440\u0430\u0437-\u041a\u0443\u043c\u0440\u0430 - 20 \u043d\u0430\u0441\u0456\u043d\u0438\u043d",categoryId:1,type:"",price:15.5,recommended:!0,image:"product24.webp",slug:"nasinnya-pertsyu-kyraz-kumra",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim similique praesentium quisquam? Fugit mollitia voluptatem modi nam quaerat magni quos quod? Asperiores non architecto deleniti quam doloremque corrupti molestiae est.",rating:5}]},9336:(e,t,i)=>{"use strict";i.d(t,{A:()=>h});var r=i(5043),o=i(8387),a=i(8610),n=i(6596),s=i(4535),l=i(6870),p=i(8206),c=i(5658),u=i(579);const d=(0,s.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((0,l.A)((e=>{let{theme:t}=e;return{margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,n.X4)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:e=>{let{ownerState:t}=e;return!!t.children},style:{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:e=>{let{ownerState:t}=e;return t.children&&"vertical"!==t.orientation},style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"vertical"===t.orientation&&t.children},style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:e=>{let{ownerState:t}=e;return"right"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:e=>{let{ownerState:t}=e;return"left"===t.textAlign&&"vertical"!==t.orientation},style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}}))),m=(0,s.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((0,l.A)((e=>{let{theme:t}=e;return{display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}}))),g=r.forwardRef((function(e,t){const i=(0,p.b)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:n,className:s,orientation:l="horizontal",component:g=(n||"vertical"===l?"div":"hr"),flexItem:h=!1,light:f=!1,role:v=("hr"!==g?"separator":void 0),textAlign:y="center",variant:q="fullWidth",...b}=i,x={...i,absolute:r,component:g,flexItem:h,light:f,orientation:l,role:v,textAlign:y,variant:q},j=(e=>{const{absolute:t,children:i,classes:r,flexItem:o,light:n,orientation:s,textAlign:l,variant:p}=e,u={root:["root",t&&"absolute",p,n&&"light","vertical"===s&&"vertical",o&&"flexItem",i&&"withChildren",i&&"vertical"===s&&"withChildrenVertical","right"===l&&"vertical"!==s&&"textAlignRight","left"===l&&"vertical"!==s&&"textAlignLeft"],wrapper:["wrapper","vertical"===s&&"wrapperVertical"]};return(0,a.A)(u,c.K,r)})(x);return(0,u.jsx)(d,{as:g,className:(0,o.A)(j.root,s),role:v,ref:t,ownerState:x,"aria-orientation":"separator"!==v||"hr"===g&&"vertical"!==l?void 0:l,...b,children:n?(0,u.jsx)(m,{className:j.wrapper,ownerState:x,children:n}):null})}));g&&(g.muiSkipListHighlight=!0);const h=g},7392:(e,t,i)=>{"use strict";i.d(t,{A:()=>q});var r=i(5043),o=i(8387),a=i(8610),n=i(6596),s=i(4535),l=i(6870),p=i(2445),c=i(8206),u=i(434),d=i(6803),m=i(2532),g=i(2372);function h(e){return(0,g.Ay)("MuiIconButton",e)}const f=(0,m.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=i(579);const y=(0,s.Ay)(u.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,"default"!==i.color&&t[`color${(0,d.A)(i.color)}`],i.edge&&t[`edge${(0,d.A)(i.edge)}`],t[`size${(0,d.A)(i.size)}`]]}})((0,l.A)((e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,n.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}})),(0,l.A)((e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter((0,p.A)()).map((e=>{let[i]=e;return{props:{color:i},style:{color:(t.vars||t).palette[i].main}}})),...Object.entries(t.palette).filter((0,p.A)()).map((e=>{let[i]=e;return{props:{color:i,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?`rgba(${(t.vars||t).palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,n.X4)((t.vars||t).palette[i].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${f.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}}))),q=r.forwardRef((function(e,t){const i=(0,c.b)({props:e,name:"MuiIconButton"}),{edge:r=!1,children:n,className:s,color:l="default",disabled:p=!1,disableFocusRipple:u=!1,disableRipple:m=!1,size:g="medium",...f}=i,q={...i,edge:r,color:l,disabled:p,disableFocusRipple:u,disableRipple:m,size:g},b=(e=>{const{classes:t,disabled:i,color:r,edge:o,size:n}=e,s={root:["root",i&&"disabled","default"!==r&&`color${(0,d.A)(r)}`,o&&`edge${(0,d.A)(o)}`,`size${(0,d.A)(n)}`]};return(0,a.A)(s,h,t)})(q);return(0,v.jsx)(y,{className:(0,o.A)(b.root,s),centerRipple:!0,focusRipple:!u,disabled:p,disableRipple:m,ref:t,...f,ownerState:q,children:n})}))},1596:(e,t,i)=>{"use strict";i.d(t,{A:()=>v});var r=i(5043),o=i(8387),a=i(8610),n=i(6596),s=i(4535),l=i(6240),p=i(6870),c=i(8206),u=i(3582),d=i(2532),m=i(2372);function g(e){return(0,m.Ay)("MuiPaper",e)}(0,d.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=i(579);const f=(0,s.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],!i.square&&t.rounded,"elevation"===i.variant&&t[`elevation${i.elevation}`]]}})((0,p.A)((e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:e=>{let{ownerState:t}=e;return!t.square},style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}}))),v=r.forwardRef((function(e,t){const i=(0,c.b)({props:e,name:"MuiPaper"}),r=(0,l.A)(),{className:s,component:p="div",elevation:d=1,square:m=!1,variant:v="elevation",...y}=i,q={...i,component:p,elevation:d,square:m,variant:v},b=(e=>{const{square:t,elevation:i,variant:r,classes:o}=e,n={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${i}`]};return(0,a.A)(n,g,o)})(q);return(0,h.jsx)(f,{as:p,ownerState:q,className:(0,o.A)(b.root,s),ref:t,...y,style:{..."elevation"===v&&{"--Paper-shadow":(r.vars||r).shadows[d],...r.vars&&{"--Paper-overlay":r.vars.overlays?.[d]},...!r.vars&&"dark"===r.palette.mode&&{"--Paper-overlay":`linear-gradient(${(0,n.X4)("#fff",(0,u.A)(d))}, ${(0,n.X4)("#fff",(0,u.A)(d))})`}},...y.style}})}))},3907:(e,t,i)=>{var r={"./product1.jpg":1373,"./product10.jpg":689,"./product11.jpg":2164,"./product12.jpg":3971,"./product13.jpg":2918,"./product14.jpg":6269,"./product15.jpg":435,"./product16.jpg":4127,"./product17.jpg":7778,"./product18.jpg":3753,"./product19.jpg":28,"./product2.jpg":1474,"./product20.jpg":9952,"./product21.jpg":9165,"./product22.jpg":210,"./product23.jpg":6591,"./product24.webp":9836,"./product3.jpg":5759,"./product4.jpg":1444,"./product5.jpg":9489,"./product6.jpg":9910,"./product7.jpg":3075,"./product8.jpg":4936,"./product9.jpg":949};function o(e){var t=a(e);return i(t)}function a(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=3907},9836:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product24.51e98bcad7c7c763f50e.webp"},1373:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product1.056e3a8866c3de32d1be.jpg"},689:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product10.d37e256c4c188dd4c9a6.jpg"},2164:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product11.d0e632df6a790edc980a.jpg"},3971:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product12.475aa67a27eae4d04251.jpg"},2918:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product13.4e8f51dfc7dcdef34cf5.jpg"},6269:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product14.b6b5eb89300e221ffe86.jpg"},435:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product15.424923d7de4cf02e092b.jpg"},4127:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product16.25dc38dfe14b9c5528f9.jpg"},7778:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product17.9b96a78ec82c3f95e7f1.jpg"},3753:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product18.e44f8847e3fbe462125f.jpg"},28:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product19.9b05c1133ec715003c2b.jpg"},1474:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product2.90f7c99e5dc8b7bcb3c3.jpg"},9952:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product20.264cb9e1becb57064b82.jpg"},9165:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product21.69c7b9a6ded9e0ec6bf6.jpg"},210:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product22.e84f75e91aadc2670823.jpg"},6591:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product23.0360e9f2212d84d9ff2c.jpg"},5759:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product3.11cc834bf8cfce15bf15.jpg"},1444:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product4.9c50402563e087733a5f.jpg"},9489:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product5.724c3af9d4adbb1fbc4a.jpg"},9910:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product6.cc8bb2f39cb6308c13ae.jpg"},3075:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product7.270589d2b0af2995df24.jpg"},4936:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product8.973fd9a9a474c53ed7e1.jpg"},949:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/product9.00ffaac5b2084b35835b.jpg"}}]);
//# sourceMappingURL=883.406dd64d.chunk.js.map