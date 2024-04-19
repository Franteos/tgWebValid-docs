import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as n}from"./app-o9pMMYPL.js";const s={},o=n(`<p>该库可以开箱即用，无需太多配置，唯一需要的参数是 Telegram API 令牌</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>例子</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>TgWebValid</span><span class="token punctuation">;</span>

<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$tgWebValid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TgWebValid</span><span class="token punctuation">(</span>
  <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">false</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 这将设置机器人和<strong>默认</strong>配置</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>参数</span></a></h2><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><code>token</code></span></a></h3><ul><li>类型: <code>string</code></li><li>必需的: 是的</li></ul><p>应代表其进行验证的机器人的 Telegram 令牌。</p><h3 id="throw" tabindex="-1"><a class="header-anchor" href="#throw"><span><code>throw</code></span></a></h3><ul><li>类型: <code>bool</code></li><li>必需的: 不</li><li>默认: <code>false</code></li></ul><p>如果设置为 <code>true</code>，则如果验证失败，库将引发异常。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果您打算处理异常或在多机器人模式下工作，请务必使用 <code>try/catch</code> 😉</p></div>`,12),l=[o];function r(i,p){return t(),a("div",null,l)}const m=e(s,[["render",r],["__file","config.html.vue"]]),h=JSON.parse('{"path":"/zh/docs/get-started/config.html","title":"配置","lang":"zh-CN","frontmatter":{"title":"配置","icon":"gears","order":2,"description":"该库可以开箱即用，无需太多配置，唯一需要的参数是 Telegram API 令牌 例子 💡 这将设置机器人和默认配置 参数 token 类型: string 必需的: 是的 应代表其进行验证的机器人的 Telegram 令牌。 throw 类型: bool 必需的: 不 默认: false 如果设置为 true，则如果验证失败，库将引发异常。 注意 ...","head":[["link",{"rel":"alternate","hreflang":"uk-ua","href":"https://tgwebvalid.com/docs/get-started/config.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://tgwebvalid.com/en/docs/get-started/config.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/zh/docs/get-started/config.html"}],["meta",{"property":"og:site_name","content":"用于验证 Telegram 用户的 PHP 库"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"该库可以开箱即用，无需太多配置，唯一需要的参数是 Telegram API 令牌 例子 💡 这将设置机器人和默认配置 参数 token 类型: string 必需的: 是的 应代表其进行验证的机器人的 Telegram 令牌。 throw 类型: bool 必需的: 不 默认: false 如果设置为 true，则如果验证失败，库将引发异常。 注意 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"uk-UA"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-19T06:43:02.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-04-19T06:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T06:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]]},"headers":[{"level":2,"title":"例子","slug":"example","link":"#example","children":[]},{"level":2,"title":"参数","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"token","slug":"token","link":"#token","children":[]},{"level":3,"title":"throw","slug":"throw","link":"#throw","children":[]}]}],"git":{"createdTime":1713508982000,"updatedTime":1713508982000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.5,"words":149},"filePathRelative":"zh/docs/get-started/config.md","localizedDate":"2024年4月19日","autoDesc":true}');export{m as comp,h as data};
