"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[217],{1470:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return k}});var a=n(7462),i=n(3366),l=n(7294),r=n(3905),o=n(9443);var s=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),c="tabItem_1uMI",d="tabItemActive_2DSg";var m=function(e){var t,n=e.lazy,a=e.block,i=e.defaultValue,r=e.values,o=e.groupId,m=e.className,p=l.Children.toArray(e.children),v=null!=r?r:p.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=i?i:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,b=s(),h=b.tabGroupChoices,k=b.setTabGroupChoices,g=(0,l.useState)(f),w=g[0],y=g[1],x=[];if(null!=o){var T=h[o];null!=T&&T!==w&&v.some((function(e){return e.value===T}))&&y(T)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;y(a),null!=o&&(k(o,a),setTimeout((function(){var e,n,a,i,l,r,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,l=e.right,r=window,o=r.innerHeight,s=r.innerWidth,n>=0&&l<=s&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.target)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},m)},v.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:I,onClick:I},null!=n?n:t)}))),n?(0,l.cloneElement)(p.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var p=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},v=["components"],f={sidebar_position:2,title:"Install DynaWizard"},b="Installation",h={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Install DynaWizard",description:"There are multiple options to install and run DynaWizard.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Install DynaWizard"},sidebar:"tutorialSidebar",previous:{title:"What is DynaWizard?",permalink:"/docs/"},next:{title:"Creating a Template",permalink:"/docs/templates/creating-a-template"}},k=[],g={toc:k};function w(e){var t=e.components,n=(0,i.Z)(e,v);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"There are multiple options to install and run DynaWizard."),(0,r.kt)(m,{defaultValue:"linux-macos",values:[{label:"Linux / MacOS",value:"linux-macos"},{label:"Windows",value:"windows"},{label:"Kubernetes",value:"k8s"}],mdxType:"Tabs"},(0,r.kt)(p,{value:"linux-macos",mdxType:"TabItem"},"Linux"),(0,r.kt)(p,{value:"windows",mdxType:"TabItem"},"Windows"),(0,r.kt)(p,{value:"k8s",mdxType:"TabItem"},"k8s")))}w.isMDXComponent=!0}}]);