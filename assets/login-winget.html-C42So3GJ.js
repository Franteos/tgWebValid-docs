import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-wj6CG0dg.js";const t={},p=e(`<p>Ми намагаємось відобразити максимально повний приклад яким ви, скоріш за все, будете користуватись.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>TgWebValid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>BotException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>ValidationException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Exception</span><span class="token punctuation">;</span>

<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 
     * Вказую налаштування токена, та вмикаю роботу з винятками
     */</span>
    <span class="token variable">$tgWebValid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TgWebValid</span><span class="token punctuation">(</span>
      <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Налашту ще один додатковий бот щоб працювати з ними */</span>
    <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">addBot</span><span class="token punctuation">(</span>
      <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span><span class="token punctuation">,</span>
      <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN_2&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Використаю бот за замовчуванням */</span>
    <span class="token variable">$bot</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Або, вказую з яким ботом хочу працювати*/</span>
    <span class="token variable">$bot</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span>
      <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * Викликаю метод validateLoginWidget який перевіре дані
     * отримані від Telegram Login Widget
     */</span>
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$bot</span><span class="token operator">-&gt;</span><span class="token function">validateLoginWidget</span><span class="token punctuation">(</span>
      <span class="token argument-name">user</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token doc-comment comment">/** Дані користувача */</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Якщо перевірка успішна, виведу сутність LoginWidget з усіма даними */</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ValidationException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Отримаю виняток валідації якщо перевірку провалено</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BotException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Помилившись з назвою бота буду перехоплювати цей виняток</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Оброблю інші помилки, якщо такі будуть</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","login-winget.html.vue"]]),m=JSON.parse('{"path":"/docs/example/login-winget.html","title":"Віджет входу","lang":"uk-UA","frontmatter":{"title":"Віджет входу","icon":"right-to-bracket","order":2,"head":[["meta",{"name":"description","content":"Як перевірити дані користувача, отримані через Telegram Login Widget на PHP"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://tgwebvalid.com/en/docs/example/login-winget.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/docs/example/login-winget.html"}],["meta",{"property":"og:site_name","content":"PHP бібліотека для перевірки користувачів Telegram"}],["meta",{"property":"og:title","content":"Віджет входу"}],["meta",{"property":"og:description","content":"Ми намагаємось відобразити максимально повний приклад яким ви, скоріш за все, будете користуватись. "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"uk-UA"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-15T21:54:00.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-02-15T21:54:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Віджет входу\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-15T21:54:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]],"description":"Ми намагаємось відобразити максимально повний приклад яким ви, скоріш за все, будете користуватись. "},"headers":[],"git":{"createdTime":1708034040000,"updatedTime":1708034040000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"docs/example/login-winget.md","localizedDate":"15 лютого 2024 р.","autoDesc":true}');export{d as comp,m as data};
