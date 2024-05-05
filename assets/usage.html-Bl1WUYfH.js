import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as r,a as e,d as t,b as n,w as s,e as c}from"./app-Dxs6hYG-.js";const p={},d=c(`<p>First of all, specify the name of the bot, the name of which you need to check the user. Or leave the option blank to get the default bot.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token doc-comment comment">/**
 * Set up a basic configuration first
 * Add other bots if needed
 */</span>

<span class="token doc-comment comment">/** I use the default bot */</span>
<span class="token variable">$bot</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** Or, specify which bot I want to work with */</span>
<span class="token variable">$bot</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span>
  <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span><code>name</code></span></a></h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>By specifying the name, you will get access to the multibot added in the previous step.</p>`,7),m={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"Warning",-1),u=e("h2",{id:"validators",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#validators"},[e("span",null,"Validators")])],-1),g=e("p",null,"Next, you need to decide on the type of authentication that needs to be done.",-1);function b(v,f){const a=i("RouteLink");return l(),r("div",null,[d,e("div",m,[h,e("p",null,[t("If you specify a bot name but don't add it, we'll be forced to throw a "),n(a,{to:"/en/docs/exception/bot.html"},{default:s(()=>[t("BotException")]),_:1}),t(" in order to maintain integrity")])]),u,g,e("p",null,[t("The list of available validators can be found on "),n(a,{to:"/en/docs/validator/"},{default:s(()=>[t("this page")]),_:1})])])}const _=o(p,[["render",b],["__file","usage.html.vue"]]),x=JSON.parse('{"path":"/en/docs/get-started/usage.html","title":"Usage","lang":"en-US","frontmatter":{"title":"Usage","icon":"play","order":4,"description":"First of all, specify the name of the bot, the name of which you need to check the user. Or leave the option blank to get the default bot. Example Parameters name Type: string R...","head":[["link",{"rel":"alternate","hreflang":"uk-ua","href":"https://tgwebvalid.com/docs/get-started/usage.html"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://tgwebvalid.com/zh/docs/get-started/usage.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/en/docs/get-started/usage.html"}],["meta",{"property":"og:site_name","content":"The PHP library for validate Telegram users"}],["meta",{"property":"og:title","content":"Usage"}],["meta",{"property":"og:description","content":"First of all, specify the name of the bot, the name of which you need to check the user. Or leave the option blank to get the default bot. Example Parameters name Type: string R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"uk-UA"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-15T22:13:59.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-02-15T22:13:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Usage\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-15T22:13:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]]},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]}]},{"level":2,"title":"Validators","slug":"validators","link":"#validators","children":[]}],"git":{"createdTime":1704439395000,"updatedTime":1708035239000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":0.52,"words":156},"filePathRelative":"en/docs/get-started/usage.md","localizedDate":"January 5, 2024","autoDesc":true}');export{_ as comp,x as data};