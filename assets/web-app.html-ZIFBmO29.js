import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as d,a as e,d as a,b as t,w as o,e as l}from"./app-afDYyRWx.js";const p={},h=e("code",null,"HMAC-SHA-256",-1),u=e("code",null,"HMAC-SHA-256",-1),_=e("code",null,"WebAppData",-1),m={href:"https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app",target:"_blank",rel:"noopener noreferrer"},f=l(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token variable">$initData</span> <span class="token operator">=</span> <span class="token variable">$bot</span><span class="token operator">-&gt;</span><span class="token function">validateInitData</span><span class="token punctuation">(</span>
  <span class="token argument-name">initData</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;query_id=...&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),b=e("h3",{id:"initdata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initdata","aria-hidden":"true"},"#"),a(),e("code",null,"initData")],-1),g=e("ul",null,[e("li",null,[a("Type: "),e("code",null,"string")]),e("li",null,"Required: Yes")],-1),k=e("p",null,"A string of raw user data passed to the applet.",-1),w={href:"https://core.telegram.org/bots/webapps#initializing-mini-apps",target:"_blank",rel:"noopener noreferrer"},x=l('<h3 id="throw" tabindex="-1"><a class="header-anchor" href="#throw" aria-hidden="true">#</a> <code>throw</code></h3><ul><li>Type: <code>bool</code></li><li>Required: No</li><li>Default: <code>null</code>. Default settings apply</li></ul><p>If set to <code>true</code>, the library will throw an exception if validation fails.</p>',3),y={class:"hint-container warning"},D=e("p",{class:"hint-container-title"},"Warning",-1),A=e("p",null,"Be sure to use `try/catch' if you plan to handle exceptions 😉",-1);function I(E,N){const n=i("ExternalLinkIcon"),s=i("RouterLink");return c(),d("div",null,[e("p",null,[a("We verify the integrity of the received data by comparing the received hash parameter with the hexadecimal representation of the "),h,a(" signature of the data validation string with the secret key that is the "),u,a(" signature of the bot token with the constant string "),_,a(" used as a key Details "),e("a",m,[a("here"),t(n)])]),f,e("p",null,[a("💡 Upon successful validation, the method will return an "),t(s,{to:"/en/docs/entity/init-data/"},{default:o(()=>[a("InitData")]),_:1}),a(" entity that contains all available data that can be used on your server.")]),v,b,g,k,e("p",null,[e("a",w,[a("Additional Information"),t(n)])]),x,e("div",y,[D,A,e("p",null,[a("If exceptions are enabled, you will get a "),t(s,{to:"/en/docs/exception/validation.html"},{default:o(()=>[a("ValidationException")]),_:1}),a(" exception after a validation failure. Otherwise, `false' will be returned.")])])])}const B=r(p,[["render",I],["__file","web-app.html.vue"]]);export{B as default};