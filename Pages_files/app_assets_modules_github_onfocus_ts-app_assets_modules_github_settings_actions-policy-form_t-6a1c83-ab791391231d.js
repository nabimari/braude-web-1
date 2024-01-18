"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_onfocus_ts-app_assets_modules_github_settings_actions-policy-form_t-6a1c83"],{254:(e,t,o)=>{o.d(t,{ZG:()=>a,q6:()=>c,w4:()=>l});var r=o(8439);let s=!1,i=new r.Z;function n(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of i.matches(t))e.data.call(null,t)}function a(e,t){s||(s=!0,document.addEventListener("focus",n,!0)),i.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function l(e,t,o){function r(t){let s=t.currentTarget;s&&(s.removeEventListener(e,o),s.removeEventListener("blur",r))}a(t,function(t){t.addEventListener(e,o),t.addEventListener("blur",r)})}function c(e,t){function o(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",o))}a(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",o)})}},97538:(e,t,o)=>{var r=o(76006);function s(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}let i=class ActionsPolicyFormElement extends HTMLElement{connectedCallback(){this.toggleSpecificOptions()}toggleSpecificOptions(){this.selectRadio.checked?this.specificOptions.hidden=!1:this.specificOptions.hidden=!0}};s([r.fA],i.prototype,"specificOptions",void 0),s([r.fA],i.prototype,"selectRadio",void 0),i=s([r.Ih],i)},67691:(e,t,o)=>{var r,s,i,n=o(76006),a=o(4412);function l(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}let c=class RunnerImageElement extends HTMLElement{async connectedCallback(){await a.x,this.selectRunnerPlatform(),this.customImageUriInput.onkeydown=e=>e.stopPropagation()}selectRunnerPlatform(){let e=this.getSelectedPlatform();this.updateImageTabContent(e),this.customImageUriInput.required="custom"===e;let t=this.getSelectedImageVersion(e);t&&(this.updateSelectedImageHint(t),this.customImageGenerationOptions&&this.updateCustomImageGenerationOptions(t),this.machineSpecsDropdown&&this.machineSpecsDropdown.updateOptionsVisibility(e,t),this.selectedImageSource.value=t.imageSource)}getSelectedPlatform(){let e=this.platforms.find(e=>e.checked);return e?e.value:"linux-x64"}getSelectedImageVersion(e){return 0===this.imageVersions.length?null:this.imageVersions.find(t=>t.imagePlatform===e&&t.checked)??this.imageVersions[0]}updateImageTabContent(e){let t=this.imageContents.map(e=>e.getAttribute("data-image-label"));for(let o=0;o<t.length;o++)this.imageContents[o].hidden=e!==t[o]}updateSelectedImageHint(e){for(let t of this.selectedImageHints)t.renderContent(e)}updateCustomImageGenerationOptions(e){let t=this.isBaseImage(e.imageId);this.customImageGenerationOptions.hidden=!t,t||(this.persistentOsDiskCheckbox.checked=!1)}isBaseImage(e){return"canonical:0001-com-ubuntu-server-focal:20_04-lts"===e||"microsoftwindowsserver:windowsserver:2022-datacenter"===e}updateMaxLimit(){let e=this.machineSpecsDropdown.getSelectedItem(),t=document.querySelector("input[name='maximum_runners']"),o=document.querySelector("span[id='max-gpu-runners-error']"),r=document.querySelector("span[id='max-runners-error']"),s=document.querySelector("span[id='min-runners-error']"),i=document.querySelector("div[id='max-group']"),n=document.querySelector(".js-submit-custom-hosted-runner-button");t&&(o.hidden=!0,r.hidden=!0,s.hidden=!0,n.disabled=!1,i.classList.remove("errored"),"gpu_optimized"===e.runnerType&&"false"===this.bypassMaxGpuRunners.value?(t.max="20",parseInt(t.value)>20&&(o.hidden=!1,n.disabled=!0,i.classList.add("errored"))):(t.max="1000",parseInt(t.value)>1e3&&(r.hidden=!1,n.disabled=!0,i.classList.add("errored"))))}};l([n.GO],c.prototype,"platforms",void 0),l([n.GO],c.prototype,"imageVersions",void 0),l([n.GO],c.prototype,"selectedImageHints",void 0),l([n.fA],c.prototype,"customImageUriInput",void 0),l([n.fA],c.prototype,"machineSpecsDropdown",void 0),l([n.fA],c.prototype,"selectedImageSource",void 0),l([n.fA],c.prototype,"customImageGenerationOptions",void 0),l([n.fA],c.prototype,"persistentOsDiskCheckbox",void 0),l([n.GO],c.prototype,"imageContents",void 0),l([n.fA],c.prototype,"bypassMaxGpuRunners",void 0),c=l([n.Ih],c);let d=class MachineSpecsDropdownElement extends HTMLElement{updateOptionsVisibility(e,t){for(let o of this.items)o.setVisibility(e,t);this.updateTabsVisibility();let o=this.getSelectedItem();if(!o||!o.visible){let e=this.getFirstVisibleItem();e?.selectItem(),o=e}o&&this.selectTabByType(o.runnerType)}getSelectedItem(){return this.items.find(e=>e.checked)}updateTabsVisibility(){let e=0;for(let t of this.tabs){let o=this.items.some(e=>e.runnerType===t.type&&e.visible);e+=o?1:0,t.setVisibility(o)}this.tabsHeader&&(this.tabsHeader.hidden=e<2)}selectTabByType(e){let t=this.tabs.find(t=>t.type===e);t?.selectTab()}getFirstVisibleItem(){return this.items.find(e=>e.visible)}};l([n.GO],d.prototype,"tabs",void 0),l([n.GO],d.prototype,"items",void 0),l([n.fA],d.prototype,"tabsHeader",void 0),d=l([n.Ih],d);let u=class MachineSpecsTabElement extends HTMLElement{selectTab(){this.clickArea.click()}setVisibility(e){this.hidden=!e}};l([n.fA],u.prototype,"clickArea",void 0),l([n.Lj],u.prototype,"type",void 0),u=l([n.Ih],u);let p=((r=class MachineSpecsItemElement extends HTMLElement{get checked(){return this.checkbox.checked}get visible(){return!this.hidden}selectItem(){this.checkbox.click()}setVisibility(e,t){this.hidden=!this.shouldBeVisible(e,t)}shouldBeVisible(e,t){return("win-x64"!==e&&"linux-x64"!==e||"gpu_optimized"!==this.runnerType||"Curated"!==t.imageSource)&&!(this.storageGb<t.sizeGb)}constructor(...e){super(...e),this.storageGb=0}}).attrPrefix="",r);l([n.fA],p.prototype,"checkbox",void 0),l([n.Lj],p.prototype,"storageGb",void 0),l([n.Lj],p.prototype,"runnerType",void 0),p=l([n.Ih],p);let m=((s=class RunnerImageVersionElement extends HTMLElement{get checked(){return this.checkbox.checked}constructor(...e){super(...e),this.sizeGb=0}}).attrPrefix="",s);l([n.fA],m.prototype,"checkbox",void 0),l([n.Lj],m.prototype,"sizeGb",void 0),l([n.Lj],m.prototype,"imagePlatform",void 0),l([n.Lj],m.prototype,"imageSource",void 0),l([n.Lj],m.prototype,"imageId",void 0),m=l([n.Ih],m);let h=class RunnerSelectedImageHint extends HTMLElement{renderContent(e){this.innerHTML=this.getContent(e)}getContent(e){let t="";if("Curated"===e.imageSource){let o=this.getCuratedImageInfoUrl(e);t+=`
        <p class='text-small color-fg-muted'>
          GitHub images are kept up to date and secure, containing all the tools you need to get started building and testing your applications. <a class="Link--inTextBlock" href='${o}'>Learn more about images.</a>
        </p>
      `,("ubuntu-latest"===e.imageId||"windows-latest"===e.imageId)&&(t+=`
          <p class="text-small color-fg-muted">
            "Latest" tag matches with standard GitHub-hosted runners latest tag for the images. <a class="Link--inTextBlock" href='https://github.com/actions/runner-images#label-scheme'>Learn more about latest tags. </a>
          </p>
        `)}else"Marketplace"===e.imageSource&&(t+=`
        <p class="text-small color-fg-muted">
          Partner images are created and managed by members of GitHub's Technology Partner Program. <a class="Link--inTextBlock" href="https://github.com/actions/partner-runner-images">Learn more about partner images.</a>
        </p>
      `);return t}getCuratedImageInfoUrl(e){return"codespaces-prebuild"===e.imageId?"https://github.com/github/codespaces":"https://github.com/actions/runner-images/releases"}};h=l([n.Ih],h);var f=o(15345);function g(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}let y=document.querySelector("input[name='maximum_runners']"),b=class RunnerScalingElement extends HTMLElement{disableSubmitButton(){let e=document.querySelector(".js-submit-custom-hosted-runner-button");e.disabled=!0}enableSubmitButton(){let e=document.querySelector(".js-submit-custom-hosted-runner-button");e.disabled=!1}validateMax(){if(this.resetMaxState(),!this.maxInput.value)return;let e=+this.maxInput.value,t=parseInt(y.max),o=parseInt(y.min);if(e<o){this.maxGroup.classList.add("errored"),this.maxTooLowErrorMessage.hidden=!1,(0,f.N)(this.maxNote),this.disableSubmitButton();return}if(e>t){this.maxGroup.classList.add("errored"),20===t?(this.maxGpuTooHighErrorMessage.hidden=!1,this.maxTooHighErrorMessage.hidden=!0):(this.maxGpuTooHighErrorMessage.hidden=!0,this.maxTooHighErrorMessage.hidden=!1),(0,f.N)(this.maxNote),this.disableSubmitButton();return}}resetMaxState(){this.maxTooHighErrorMessage.hidden=!0,this.maxTooLowErrorMessage.hidden=!0,this.maxGpuTooHighErrorMessage.hidden=!0,this.maxGroup.classList.remove("errored"),this.enableSubmitButton()}};function v(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}g([n.fA],b.prototype,"maxInput",void 0),g([n.fA],b.prototype,"maxGroup",void 0),g([n.fA],b.prototype,"maxTooLowErrorMessage",void 0),g([n.fA],b.prototype,"maxTooHighErrorMessage",void 0),g([n.fA],b.prototype,"maxGpuTooHighErrorMessage",void 0),g([n.fA],b.prototype,"maxNote",void 0),b=g([n.Ih],b);let T=((i=class PublicIpElement extends HTMLElement{connectedCallback(){this.isAllowed=this.hasAttribute("is-allowed")}checkboxChanged(){let e=this.checkbox.checked,t=this.isAllowed;t||e||(this.checkbox.setAttribute("disabled","disabled"),this.description.classList.remove("color-fg-muted"),this.labelSection.classList.add("color-fg-subtle"))}constructor(...e){super(...e),this.isAllowed=!1}}).attrPrefix="",i);v([n.fA],T.prototype,"checkbox",void 0),v([n.fA],T.prototype,"description",void 0),v([n.fA],T.prototype,"labelSection",void 0),v([n.Lj],T.prototype,"isAllowed",void 0),T=v([n.Ih],T)},84700:(e,t,o)=>{var r=o(76006),s=o(58700);function i(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}let n=class AdvancedSecurityNewReposElement extends HTMLElement{toggle(e){this.checkbox.checked?(this.status.hidden=!0,this.dialog.show(),e.stopPropagation()):(this.status.hidden=!1,(0,s.Bt)(this.form))}confirm(){this.status.hidden=!1,(0,s.Bt)(this.form),this.dialog.open=!1}close(){this.checkbox.checked=!1}};i([r.fA],n.prototype,"checkbox",void 0),i([r.fA],n.prototype,"status",void 0),i([r.fA],n.prototype,"dialog",void 0),i([r.fA],n.prototype,"form",void 0),n=i([r.Ih],n)},15345:(e,t,o)=>{o.d(t,{N:()=>s,x:()=>i});var r=o(86283);function s(e,t){i((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function i(e,t){let{assertive:o}=t??{};!function(e,t){let o=r.n4?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");o&&(o.textContent===e?o.textContent=`${e}\u00A0`:o.textContent=e)}(e,o)}},54177:(e,t,o)=>{o.d(t,{W:()=>s});var r=o(59753);async function s(e){let t=document.querySelector("#site-details-dialog"),o=t.content.cloneNode(!0),s=o.querySelector("details"),i=s.querySelector("details-dialog"),n=s.querySelector(".js-details-dialog-spinner");e.detailsClass&&s.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&i.classList.add(...e.dialogClass.split(" ")),e.label?i.setAttribute("aria-label",e.label):e.labelledBy&&i.setAttribute("aria-labelledby",e.labelledBy),document.body.append(o);try{let t=await e.content;n.remove(),i.prepend(t)}catch(o){n.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),i.prepend(t)}return s.addEventListener("toggle",()=>{s.hasAttribute("open")||((0,r.f)(i,"dialog:remove"),s.remove())}),i}},82873:(e,t,o)=>{o.d(t,{DF:()=>d,Fr:()=>u,a_:()=>c});var r=o(18699);let s=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};var i=o(22490),n=o(7180);let a="server-x-safe-html",l=i.ZO.createPolicy(a,{createHTML:(e,t)=>n.O.apply({policy:()=>(!function(e,t,o=!1){let r=t.headers.get("content-type")||"";if(!o&&!r.startsWith("text/html"))throw new s(`expected response with text/html, but was ${r}`,t);if(o&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new s(`expected response with text/html or application/json, but was ${r}`,t);let i=t.headers.get("x-html-safe");if(i){if(!e.includes(i))throw new s("response X-HTML-Safe nonce did not match",t)}else throw new s("missing X-HTML-Safe nonce",t)}(function(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}(document),t),e),policyName:a,fallback:e,silenceErrorReporting:!0})});async function c(e,t,o){let s=new Request(t,o);s.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(s);if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);let n=l.createHTML(await i.text(),i);return(0,r.r)(e,n)}function d(e,t,o=1e3,r=[200],s=[202]){return async function o(i){let n=new Request(e,t);n.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(n);if(s.includes(a.status))return await new Promise(e=>setTimeout(e,i)),o(1.5*i);if(r.includes(a.status))return a;if(a.status<200||a.status>=300)throw Error(`HTTP ${a.status}${a.statusText||""}`);throw Error(`Unexpected ${a.status} response status from poll endpoint`)}(o)}async function u(e,t,o){let{wait:r=500,acceptedStatusCodes:s=[200],max:i=3,attempt:n=0}=o||{},a=async()=>new Promise((o,a)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(r);if(s.includes(a.status)||n+1===i)return o(a);o("retry")}catch(e){a(e)}},r*n)}),l=await a();return"retry"!==l?l:u(e,t,{wait:r,acceptedStatusCodes:s,max:i,attempt:n+1})}},95253:(e,t,o)=>{let r;o.d(t,{YT:()=>p,qP:()=>m,yM:()=>h});var s=o(88149),i=o(86058),n=o(44544),a=o(71643);let{getItem:l}=(0,n.Z)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,s.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function u(e){let t=(0,s.n)("octolytics").baseContext||{};if(t)for(let[e,o]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=o,delete t[e]);let o=document.querySelector("meta[name=visitor-payload]");if(o){let e=JSON.parse(atob(o.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,o]of r)d.includes(e.toLowerCase())&&(t[e]=o);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function p(e){r?.sendPageView(u(e))}function m(e,t={}){let o=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,s=o?{service:o}:{};for(let[e,o]of Object.entries(t))null!=o&&(s[e]=`${o}`);if(r){let t=e||"unknown";u(s),r.sendEvent(t,u(s))}}function h(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},18699:(e,t,o)=>{o.d(t,{r:()=>a});var r=o(22490),s=o(7180);let i="parse-html-no-op",n=r.ZO.createPolicy(i,{createHTML:e=>s.O.apply({policy:()=>e,policyName:i,fallback:e,sanitize:!1,fallbackOnError:!0})});function a(e,t){let o=e.createElement("template");return o.innerHTML=n.createHTML(t),e.importNode(o.content,!0)}},7180:(e,t,o)=>{o.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var r=o(46426),s=o(71643),i=o(24601),n=o(27856),a=o.n(n),l=o(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:o,fallbackOnError:n=!1,sanitize:c,silenceErrorReporting:d=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return o;(0,s.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return c&&new Promise(e=>{let o=window.performance.now(),r=a().sanitize(i,{FORBID_ATTR:[]}),s=window.performance.now();if(i.length!==r.length){let n=Error("Trusted Types policy output sanitized"),a=n.stack?.slice(0,1e3),c=i.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:a,outputLength:i.length,sanitizedLength:r.length,executionTime:s-o}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(d||(0,i.eK)(e),(0,s.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!n))throw e}return o}}},22490:(e,t,o)=>{o.d(t,{ZO:()=>c});var r=o(86283),s=o(71643);function i(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let n={createHTML:i("createHTML"),createScript:i("createScript"),createScriptURL:i("createScriptURL")},a=new Map,l=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...n,...t})},c={createPolicy:(e,t)=>{if(a.has(e))return(0,s.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),a.get(e);{let o=l.createPolicy(e,t);return a.set(e,o),o}}},d=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),d=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_onfocus_ts-app_assets_modules_github_settings_actions-policy-form_t-6a1c83-9fa3209ce0b8.js.map