import{A as e}from"./index.ab732142.js";import{j as u}from"./vendor.099ef73f.js";import"./constant.bcd89818.js";let a={type:"page",body:[{type:"flex",justify:"space-between",className:"m-b-sm",items:[{type:"breadcrumb",items:[{label:"\u6570\u636E\u4E2D\u5FC3",href:"#/",icon:"fa fa-home"},{label:"\u914D\u7F6E\u5355\u6570\u636E\u7BA1\u7406"}]},{label:"\u65B0\u589E\u914D\u7F6E\u5355\u5206\u7C7B",type:"button",actionType:"dialog",level:"primary",dialog:{title:"\u65B0\u589E\u914D\u7F6E\u5355\u5206\u7C7B",body:{type:"form",api:"post:/amis/api/mock2/sample",body:[{type:"input-text",name:"name",label:"\u5206\u7C7B\u540D\u79F0",required:!0}]}}}]},{title:"\u67E5\u8BE2\u6761\u4EF6",type:"form",mode:"inline",body:[{type:"input-text",name:"keywords",label:"",placeholder:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0"},{type:"button",name:"search",label:"\u641C\u7D22",level:"primary",actionType:"reload",target:"items"}]},{type:"crud",name:"items",api:"/series",columns:[{name:"name",label:"\u5206\u7C7B\u540D"},{name:"date",label:"\u6DFB\u52A0\u65F6\u95F4"},{name:"create_user",label:"\u6DFB\u52A0\u4EBA"},{type:"operation",label:"\u64CD\u4F5C",buttons:[{label:"\u4FEE\u6539",type:"button",actionType:"dialog",dialog:{title:"\u65B0\u589E\u914D\u7F6E\u5355\u5206\u7C7B",body:{type:"form",initApi:"/amis/api/mock2/sample/${id}",api:"post:/amis/api/mock2/sample/${id}",body:[{type:"input-text",name:"name",label:"\u5206\u7C7B\u540D\u79F0",required:!0}]}}},{label:"\u5220\u9664",type:"button",actionType:"ajax",level:"danger",confirmText:"\u786E\u8BA4\u8981\u5220\u9664\uFF1F",api:"delete:/amis/api/mock2/sample/${id}"}]}]}]};const o=()=>u(e,{config:a});export{o as default};