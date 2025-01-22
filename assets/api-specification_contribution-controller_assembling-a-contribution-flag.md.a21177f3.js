import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.c4d6cd72.js";const b=JSON.parse('{"title":"Assembling a contribution flag","description":"","frontmatter":{},"headers":[],"relativePath":"api-specification/contribution-controller/assembling-a-contribution-flag.md","filePath":"api-specification/contribution-controller/assembling-a-contribution-flag.md"}'),t={name:"api-specification/contribution-controller/assembling-a-contribution-flag.md"},o=e(`<h1 id="assembling-a-contribution-flag" tabindex="-1">Assembling a contribution flag <a class="header-anchor" href="#assembling-a-contribution-flag" aria-label="Permalink to &quot;Assembling a contribution flag&quot;">​</a></h1><blockquote><p>Assembles a contribution flag that must be later <a href="./submitting-a-contribution-flag.html">submitted</a> in order to flag a contribution as a False Positive.<br> For details, see <a href="./../../overview/contributions.html#flagging-contributions">Contributions: Flagging contributions</a>.</p></blockquote><p><strong>Protocol</strong>: <code>HTTP</code></p><p><strong>Encoding</strong>: <code>JSON</code></p><p><strong>Endpoint</strong>: <code>/data/api/v1/contribution-manager/contribution/flag/assemble</code></p><p><strong>Method</strong>: <code>PATCH</code></p><p><strong>Header</strong>: <code>Authorization</code> — represented by a <code>string</code> that is the <code>accessToken</code> value that was returned either at the authorization, or the previous time the token <a href="./../auth-controller/refreshing-authentication-tokens.html">has been refreshed</a>.</p><h4 id="input-request-structure" tabindex="-1">Input/request structure <a class="header-anchor" href="#input-request-structure" aria-label="Permalink to &quot;Input/request structure&quot;">​</a></h4><details class="details custom-block"><summary>Show</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lxHhV" id="tab-Xv56Bb2" checked="checked"><label for="tab-Xv56Bb2">Structure</label><input type="radio" name="group-lxHhV" id="tab-rDrNVhl"><label for="tab-rDrNVhl">Example</label></div><div class="blocks"><div class="language-json5 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">assetDefinitionIds</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">assetDefinitionIds</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">assetDefinitionIds</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;+79991234567_12345#contribution&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">assetDefinitionIds</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;+79991234567_12345#contribution&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div></details><h4 id="output-response-structure" tabindex="-1">Output/response structure <a class="header-anchor" href="#output-response-structure" aria-label="Permalink to &quot;Output/response structure&quot;">​</a></h4><details class="details custom-block"><summary>Show</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-C96C3" id="tab-djY0xTH" checked="checked"><label for="tab-djY0xTH">Structure</label><input type="radio" name="group-C96C3" id="tab-DhJfoL_"><label for="tab-DhJfoL_">Example</label></div><div class="blocks"><div class="language-json5 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">integer($int</span><span style="color:#79B8FF;">32</span><span style="color:#FDAEB7;font-style:italic;">)</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;transactionHex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">integer($int</span><span style="color:#005CC5;">32</span><span style="color:#B31D28;font-style:italic;">)</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;transactionHex&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">code</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;OK&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ecd5253b23902f3f1a9e6a62d092d9911ef8f663737f215188062679fd895bd0e07d2858a80ccf30e341c68c651dc50f87d4782f5e5f35a31649f0979eaf4c46141133e4ae298da96295da8299edc3467a2929603caf77abeb9e81175516c997fff943a63fece49f8613a983b7481faaeedf885babd5d0dc47cf1cd990c104fe&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">status</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">code</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;OK&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">data</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;ecd5253b23902f3f1a9e6a62d092d9911ef8f663737f215188062679fd895bd0e07d2858a80ccf30e341c68c651dc50f87d4782f5e5f35a31649f0979eaf4c46141133e4ae298da96295da8299edc3467a2929603caf77abeb9e81175516c997fff943a63fece49f8613a983b7481faaeedf885babd5d0dc47cf1cd990c104fe&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div></details><h3 id="responses" tabindex="-1">Responses <a class="header-anchor" href="#responses" aria-label="Permalink to &quot;Responses&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">Response Code</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>200</code></td><td>Contribution flag has been assembled and its <code>transactionHex</code> string has been retrieved successfully.</td></tr><tr><td style="text-align:center;"><code>400</code></td><td>The request body of the contribution flag is incorrect or premium contribution can&#39;t be changed.</td></tr><tr><td style="text-align:center;"><code>401</code></td><td><code>accessToken</code> is either expired or invalid.</td></tr><tr><td style="text-align:center;"><code>404</code></td><td>Asset not found.</td></tr><tr><td style="text-align:center;"><code>500</code></td><td>Internal server error.</td></tr></tbody></table>`,13),l=[o];function p(c,r,i,d,E,y){return a(),n("div",null,l)}const h=s(t,[["render",p]]);export{b as __pageData,h as default};
