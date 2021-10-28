"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[493],{2959:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return s}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],m={sidebar_position:3},p="3. Wizard template creation",d={unversionedId:"creating-a-template/Template-creation",id:"creating-a-template/Template-creation",isDocsHomePage:!1,title:"3. Wizard template creation",description:"Step 1: Create your Wizard configuration",source:"@site/docs/creating-a-template/3-Template-creation.md",sourceDirName:"creating-a-template",slug:"/creating-a-template/Template-creation",permalink:"/project-merlin-documentation/docs/creating-a-template/Template-creation",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/creating-a-template/3-Template-creation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Monaco configuration",permalink:"/project-merlin-documentation/docs/creating-a-template/Monaco-configuration"},next:{title:"Using a template",permalink:"/project-merlin-documentation/docs/using-templates/using-a-template"}},l=[{value:"Step 1: Create your Wizard configuration",id:"step-1-create-your-wizard-configuration",children:[]},{value:"Step 2: Create and upload configuration archive",id:"step-2-create-and-upload-configuration-archive",children:[]}],c={toc:l};function s(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-wizard-template-creation"},"3. Wizard template creation"),(0,o.kt)("h3",{id:"step-1-create-your-wizard-configuration"},"Step 1: Create your Wizard configuration"),(0,o.kt)("p",null,"In addition to Monaco configuration, a ",(0,o.kt)("em",{parentName:"p"},"wizard.json")," has to be added at the project root. This json file defines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unique template identifier"),(0,o.kt)("li",{parentName:"ul"},"Friendly template name which will be shown in the list of templates"),(0,o.kt)("li",{parentName:"ul"},"Template description"),(0,o.kt)("li",{parentName:"ul"},"Input parameters that will be asked for as part of the onboarding form and mapped to parameters as defined in Step 2. Each parameter has to at least define an id and friendly name. The id is used to map parameters from the Wizard with parameters in the Monaco configuration."),(0,o.kt)("li",{parentName:"ul"},"Summary list, which can be used to provide additional information prior to applying a template. It is recommended to add information about which Dynatrace entities this template creates.")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="wizard.json"',title:'"wizard.json"'},'{\n  "id": "firstOnboardingForm",\n  "friendlyName": "My first application onboarding form",\n  "description": "Onboards a web application according to monitoring best practices.",\n  "parameters": [{ \n    "id": "applicationName",\n    "friendlyName": "Application Name",\n    "type": "text"\n  }, { \n    "id": "teamName",\n    "friendlyName": "Team Name",\n    "type": "text"\n  }, {\n    "id": "managementZoneName",\n    "friendlyName": "Management Zone Name",\n    "description": "Management Zone the newly onboarded application will be added to. Will be \\"Default\\" if not specified.",\n    "type": "text",\n    "optional": true\n  }],\n  "summary": [\n    "Management Zone - A management zone will be created...",\n    "Tagging rule - Lorem ..."\n  ]\n}\n')),(0,o.kt)("h4",{id:"parameter-options"},"Parameter options"),(0,o.kt)("p",null,"Each parameter has the following options "),(0,o.kt)("h5",{id:"text-parameter"},"Text parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "id": "url",\n    "friendlyName": "Url",\n    "description": "Url for app",\n    "type": "text",\n    "default": "https://dynatrace.com",\n     "optional": false\n')),(0,o.kt)("h5",{id:"dropdown-parameter"},"Dropdown parameter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'      "id": "teamname",\n      "friendlyName": "Team Name",\n      "description": "Team name will be added to uniquely identify entities across your environment.",\n      "type": "select",\n      "options": [{\n        "value": "devOps",\n        "name": "DevOps"\n      }, {\n        "value": "product",\n        "name": "Product"\n      }, {\n        "value": "finance",\n        "name": "Finance"\n      }]\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure each parameter defines at least an id and friendly name. Furthermore, the parameters id has to match EXACTLY any parameterized Monaco values from Step 2."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="wizard.json"',title:'"wizard.json"'},'...\n  "parameters": [{ \n    "id": "applicationName",\n    ...\n')),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="monaco/projects/project-1/configuration-type-1/config.yaml"',title:'"monaco/projects/project-1/configuration-type-1/config.yaml"'},'...\nsample1:\n- name: "{{ applicationName }}" \n...\n')))),(0,o.kt)("h3",{id:"step-2-create-and-upload-configuration-archive"},"Step 2: Create and upload configuration archive"),(0,o.kt)("p",null,"Eventually, your working directory should now look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/\n  monaco/\n    environment.yaml\n    projects/\n      project-1/\n        configuration-type-1/\n          config.yaml\n          config.json\n      .../\n  wizard.json\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Avoid using mac to create the templates o zip files since sometimes, Mac would add extra metadata to the files that the CLI is not able to process"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the same name for the main folder and the zip file"))),(0,o.kt)("p",null,"Go ahead and create a zip archive from everything in your working directory."),(0,o.kt)("p",null,"In DynaWizard you can now click ",(0,o.kt)("em",{parentName:"p"},"Add new template")," in the upper right corner or go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http(s)://<your DynaWizard host>/new"),". This will direct you to a form, allowing you to select and submit the earlier created zip archive."),(0,o.kt)("p",null,"A sample template can be found ",(0,o.kt)("a",{parentName:"p",href:"#"},"here"),"."))}s.isMDXComponent=!0}}]);