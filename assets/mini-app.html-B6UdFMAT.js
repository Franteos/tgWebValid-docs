import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c,a as t,d as e,b as a,w as s,e as l}from"./app-o7s5eRQq.js";const d={},h=t("code",null,"HMAC-SHA-256",-1),m=t("code",null,"HMAC-SHA-256",-1),u=t("code",null,"WebAppData",-1),g={href:"https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app",target:"_blank",rel:"noopener noreferrer"},_=l(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>例子</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token variable">$initData</span> <span class="token operator">=</span> <span class="token variable">$bot</span><span class="token operator">-&gt;</span><span class="token function">validateInitData</span><span class="token punctuation">(</span>
  <span class="token argument-name">initData</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;query_id=...&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 验证成功后，该方法将返回可在您的服务器上使用的所有现有用户数据。</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>参数</span></a></h2><h3 id="initdata" tabindex="-1"><a class="header-anchor" href="#initdata"><span><code>initData</code></span></a></h3><ul><li>类型: <code>string</code></li><li>必需的: 是的</li></ul><p>传递给小程序的原始用户数据字符串。</p>`,7),v={href:"https://core.telegram.org/bots/webapps#initializing-mini-apps",target:"_blank",rel:"noopener noreferrer"},b=l('<h3 id="throw" tabindex="-1"><a class="header-anchor" href="#throw"><span><code>throw</code></span></a></h3><ul><li>类型: <code>bool</code></li><li>必需的: 不</li><li>默认: <code>null</code>. 应用默认设置</li></ul><p>如果设置为 <code>true</code>，则如果验证失败，库将引发异常。</p>',3),k={class:"hint-container warning"},f=t("p",{class:"hint-container-title"},"注意",-1),y=t("p",null,[e("如果您打算处理异常，请务必使用 "),t("code",null,"try/catch"),e(" 😉")],-1),A=t("code",null,"false",-1);function x(w,H){const n=i("ExternalLinkIcon"),o=i("RouteLink");return r(),c("div",null,[t("p",null,[e("我们通过将接收到的哈希参数与数据验证字符串的 "),h,e(" 签名的十六进制表示与密钥（即数据验证字符串的 "),m,e(" 签名）进行比较来验证接收到的数据的完整性。 机器人令牌，其中常量字符串 "),u,e(" 用作密钥详细信息"),t("a",g,[e("此处"),a(n)])]),t("p",null,[e("🚀 完整的代码示例可在 "),a(o,{to:"/zh/docs/example/mini-app.html"},{default:s(()=>[e("此页面")]),_:1})]),_,t("p",null,[t("a",v,[e("附加信息"),a(n)])]),b,t("div",k,[f,y,t("p",null,[e("如果启用了异常，您将在验证失败后收到 "),a(o,{to:"/zh/docs/exception/validation.html"},{default:s(()=>[e("ValidationException")]),_:1}),e(" 异常。 否则，将返回 "),A,e("。")])])])}const z=p(d,[["render",x],["__file","mini-app.html.vue"]]),D=JSON.parse('{"path":"/zh/docs/validator/mini-app.html","title":"迷你应用程序","lang":"zh-CN","frontmatter":{"title":"迷你应用程序","icon":"tablet-screen-button","order":1,"head":[["meta",{"name":"description","content":"使用 TgWebValid 库在 PHP 项目后端安全地验证 Telegram Mini App 用户。"}],["link",{"rel":"alternate","hreflang":"uk-ua","href":"https://tgwebvalid.com/docs/validator/mini-app.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://tgwebvalid.com/en/docs/validator/mini-app.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/zh/docs/validator/mini-app.html"}],["meta",{"property":"og:site_name","content":"用于验证 Telegram 用户的 PHP 库"}],["meta",{"property":"og:title","content":"迷你应用程序"}],["meta",{"property":"og:description","content":"我们通过将接收到的哈希参数与数据验证字符串的 HMAC-SHA-256 签名的十六进制表示与密钥（即数据验证字符串的 HMAC-SHA-256 签名）进行比较来验证接收到的数据的完整性。 机器人令牌，其中常量字符串 WebAppData 用作密钥详细信息此处 🚀 完整的代码示例可在 例子 💡 验证成功后，该方法将返回可在您的服务器上使用的所有现有用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"uk-UA"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-19T06:43:02.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-04-19T06:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迷你应用程序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T06:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]],"description":"我们通过将接收到的哈希参数与数据验证字符串的 HMAC-SHA-256 签名的十六进制表示与密钥（即数据验证字符串的 HMAC-SHA-256 签名）进行比较来验证接收到的数据的完整性。 机器人令牌，其中常量字符串 WebAppData 用作密钥详细信息此处 🚀 完整的代码示例可在 例子 💡 验证成功后，该方法将返回可在您的服务器上使用的所有现有用..."},"headers":[{"level":2,"title":"例子","slug":"example","link":"#example","children":[]},{"level":2,"title":"参数","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"initData","slug":"initdata","link":"#initdata","children":[]},{"level":3,"title":"throw","slug":"throw","link":"#throw","children":[]}]}],"git":{"createdTime":1713508982000,"updatedTime":1713508982000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"zh/docs/validator/mini-app.md","localizedDate":"2024年4月19日","autoDesc":true}');export{z as comp,D as data};