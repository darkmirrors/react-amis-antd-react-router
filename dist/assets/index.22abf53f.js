import{_ as f,A as u,j as e,M as t,f as a,e as c,g as r,O as y}from"./vendor.099ef73f.js";const s=(i,l={style:{fontSize:"16px"}})=>f.exports.createElement(u&&u[i],l),{SubMenu:x}=t,p=()=>e(t,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[{title:"\u9996\u9875",key:"/",icon:"HomeOutlined",isPublic:!0},{title:"\u5546\u54C1",key:"/products",icon:"",children:[{title:"todo",key:"/todo",icon:""},{title:"\u5206\u7C7B\u5217\u8868",key:"/series",icon:""}]},{title:"\u7528\u6237\u7BA1\u7406",key:"/user",icon:""}].map((l,d)=>{var o;return(o=l.children)!=null&&o.length?e(x,{icon:l.icon?s(l.icon):"",title:l.title,children:l.children.map(n=>e(t.Item,{icon:n.icon?s(n.icon):"",children:e(a,{to:n.key,children:n.title})},n.key))},l.key):e(t.Item,{icon:l.icon?s(l.icon):"",children:e(a,{to:l.key,children:l.title})},l.key)})}),{Header:m,Content:h,Sider:k}=r,g=()=>{const[i,l]=f.exports.useState(!1),d=o=>{l(o)};return c(r,{children:[c(m,{className:"header flex flex-row justify-between",children:[e("div",{className:"logo w-52 mr-5 flex flex-auto",children:"123"}),c(h,{className:"flex flex-row justify-end",children:[c(t,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{minWidth:"400px"},children:[e(t.Item,{children:e(a,{to:"login",children:"\u8DF3\u8F6C\u767B\u5F55"})},"1"),e(t.Item,{children:"nav 2"},"2"),e(t.Item,{children:"nav "},"3")]}),e("div",{className:"text-white",children:"123"})]})]}),c(r,{style:{flexDirection:"row",height:"calc(100vh - 64px)"},children:[e(k,{width:200,className:"overflow-scroll",collapsible:!0,collapsed:i,onCollapse:d,children:e(p,{})}),e(r,{className:"p-3.5",children:e(h,{className:"overflow-scroll",children:e(y,{})})})]})]})};export{g as default};