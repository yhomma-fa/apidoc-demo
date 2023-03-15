<template><div><!-- Generator: Widdershins v4.0.1 -->
<h1 id="swagger-petstore-openapi-3-0">Swagger Petstore - OpenAPI 3.0 v1.0.11</h1>
<blockquote>
<p>Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.</p>
</blockquote>
<p>This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at <a href="https://swagger.io" target="_blank" rel="noopener noreferrer">https://swagger.io<ExternalLinkIcon/></a>. In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.</p>
<p><em>If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click <a href="https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>. Alternatively, you can load via the <code v-pre>Edit &gt; Load Petstore OAS 2.0</code> menu option!</em></p>
<p>Some useful links:</p>
<ul>
<li><a href="https://github.com/swagger-api/swagger-petstore" target="_blank" rel="noopener noreferrer">The Pet Store repository<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml" target="_blank" rel="noopener noreferrer">The source API definition for the Pet Store<ExternalLinkIcon/></a></li>
</ul>
<p><a href="http://swagger.io/terms/">Terms of service</a>
Email: <a href="mailto:apiteam@swagger.io">Support</a>
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a></p>
<h1 id="swagger-petstore-openapi-3-0-pet">pet</h1>
<p>Everything about your Pets</p>
<p><a href="http://swagger.io">Find out more</a></p>
<h2 id="updatepet" tabindex="-1"><a class="header-anchor" href="#updatepet" aria-hidden="true">#</a> updatePet</h2>
<p><a id="opIdupdatePet"></a></p>
<p><code v-pre>PUT /pet</code></p>
<p><em>Update an existing pet</em></p>
<p>Update an existing pet by Id</p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"string"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updatepet-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>body</td>
<td>body</td>
<td><a href="#schemapet">Pet</a></td>
<td>true</td>
<td>Update an existent pet in the store</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"string"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updatepet-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>Successful operation</td>
<td><a href="#schemapet">Pet</a></td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid ID supplied</td>
<td>None</td>
</tr>
<tr>
<td>404</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.4" target="_blank" rel="noopener noreferrer">Not Found<ExternalLinkIcon/></a></td>
<td>Pet not found</td>
<td>None</td>
</tr>
<tr>
<td>405</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.5" target="_blank" rel="noopener noreferrer">Method Not Allowed<ExternalLinkIcon/></a></td>
<td>Validation exception</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h2 id="addpet" tabindex="-1"><a class="header-anchor" href="#addpet" aria-hidden="true">#</a> addPet</h2>
<p><a id="opIdaddPet"></a></p>
<p><code v-pre>POST /pet</code></p>
<p><em>Add a new pet to the store</em></p>
<p>Add a new pet to the store</p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"string"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addpet-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>body</td>
<td>body</td>
<td><a href="#schemapet">Pet</a></td>
<td>true</td>
<td>Create a new pet in the store</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"string"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addpet-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>Successful operation</td>
<td><a href="#schemapet">Pet</a></td>
</tr>
<tr>
<td>405</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.5" target="_blank" rel="noopener noreferrer">Method Not Allowed<ExternalLinkIcon/></a></td>
<td>Invalid input</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h2 id="findpetsbystatus" tabindex="-1"><a class="header-anchor" href="#findpetsbystatus" aria-hidden="true">#</a> findPetsByStatus</h2>
<p><a id="opIdfindPetsByStatus"></a></p>
<p><code v-pre>GET /pet/findByStatus</code></p>
<p><em>Finds Pets by status</em></p>
<p>Multiple status values can be provided with comma separated strings</p>
<h3 id="findpetsbystatus-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>query</td>
<td>string</td>
<td>false</td>
<td>Status values that need to be considered for filter</td>
</tr>
</tbody>
</table>
<h4 id="enumerated-values" tabindex="-1"><a class="header-anchor" href="#enumerated-values" aria-hidden="true">#</a> Enumerated Values</h4>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>available</td>
</tr>
<tr>
<td>status</td>
<td>pending</td>
</tr>
<tr>
<td>status</td>
<td>sold</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
    <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"string"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findpetsbystatus-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td>Inline</td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid status value</td>
<td>None</td>
</tr>
</tbody>
</table>
<h3 id="findpetsbystatus-responseschema">Response Schema</h3>
<p>Status Code <strong>200</strong></p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>anonymous</em></td>
<td>[<a href="#schemapet">Pet</a>]</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» category</td>
<td><a href="#schemacategory">Category</a></td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» photoUrls</td>
<td>[string]</td>
<td>true</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» tags</td>
<td>[<a href="#schematag">Tag</a>]</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» status</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>pet status in the store</td>
</tr>
</tbody>
</table>
<h4 id="enumerated-values-1" tabindex="-1"><a class="header-anchor" href="#enumerated-values-1" aria-hidden="true">#</a> Enumerated Values</h4>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>available</td>
</tr>
<tr>
<td>status</td>
<td>pending</td>
</tr>
<tr>
<td>status</td>
<td>sold</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h2 id="findpetsbytags" tabindex="-1"><a class="header-anchor" href="#findpetsbytags" aria-hidden="true">#</a> findPetsByTags</h2>
<p><a id="opIdfindPetsByTags"></a></p>
<p><code v-pre>GET /pet/findByTags</code></p>
<p><em>Finds Pets by tags</em></p>
<p>Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.</p>
<h3 id="findpetsbytags-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>tags</td>
<td>query</td>
<td>array[string]</td>
<td>false</td>
<td>Tags to filter by</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
    <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"string"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findpetsbytags-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td>Inline</td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid tag value</td>
<td>None</td>
</tr>
</tbody>
</table>
<h3 id="findpetsbytags-responseschema">Response Schema</h3>
<p>Status Code <strong>200</strong></p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>anonymous</em></td>
<td>[<a href="#schemapet">Pet</a>]</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» category</td>
<td><a href="#schemacategory">Category</a></td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» photoUrls</td>
<td>[string]</td>
<td>true</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» tags</td>
<td>[<a href="#schematag">Tag</a>]</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>»» name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>» status</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>pet status in the store</td>
</tr>
</tbody>
</table>
<h4 id="enumerated-values-2" tabindex="-1"><a class="header-anchor" href="#enumerated-values-2" aria-hidden="true">#</a> Enumerated Values</h4>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>available</td>
</tr>
<tr>
<td>status</td>
<td>pending</td>
</tr>
<tr>
<td>status</td>
<td>sold</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h2 id="getpetbyid" tabindex="-1"><a class="header-anchor" href="#getpetbyid" aria-hidden="true">#</a> getPetById</h2>
<p><a id="opIdgetPetById"></a></p>
<p><code v-pre>GET /pet/{petId}</code></p>
<p><em>Find pet by ID</em></p>
<p>Returns a single pet</p>
<h3 id="getpetbyid-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>petId</td>
<td>path</td>
<td>integer(int64)</td>
<td>true</td>
<td>ID of pet to return</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"string"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pet</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>doggie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>Dogs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>category</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>photoUrls</span><span class="token punctuation">></span></span>string<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>photoUrls</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tags</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>string<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tags</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>status</span><span class="token punctuation">></span></span>available<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>status</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pet</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getpetbyid-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td><a href="#schemapet">Pet</a></td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid ID supplied</td>
<td>None</td>
</tr>
<tr>
<td>404</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.4" target="_blank" rel="noopener noreferrer">Not Found<ExternalLinkIcon/></a></td>
<td>Pet not found</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, None ( Scopes: write:pets read:pets )
</aside>
<h2 id="updatepetwithform" tabindex="-1"><a class="header-anchor" href="#updatepetwithform" aria-hidden="true">#</a> updatePetWithForm</h2>
<p><a id="opIdupdatePetWithForm"></a></p>
<p><code v-pre>POST /pet/{petId}</code></p>
<p><em>Updates a pet in the store with form data</em></p>
<h3 id="updatepetwithform-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>petId</td>
<td>path</td>
<td>integer(int64)</td>
<td>true</td>
<td>ID of pet that needs to be updated</td>
</tr>
<tr>
<td>name</td>
<td>query</td>
<td>string</td>
<td>false</td>
<td>Name of pet that needs to be updated</td>
</tr>
<tr>
<td>status</td>
<td>query</td>
<td>string</td>
<td>false</td>
<td>Status of pet that needs to be updated</td>
</tr>
</tbody>
</table>
<h3 id="updatepetwithform-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>405</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.5" target="_blank" rel="noopener noreferrer">Method Not Allowed<ExternalLinkIcon/></a></td>
<td>Invalid input</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h2 id="deletepet" tabindex="-1"><a class="header-anchor" href="#deletepet" aria-hidden="true">#</a> deletePet</h2>
<p><a id="opIddeletePet"></a></p>
<p><code v-pre>DELETE /pet/{petId}</code></p>
<p><em>Deletes a pet</em></p>
<p>delete a pet</p>
<h3 id="deletepet-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>api_key</td>
<td>header</td>
<td>string</td>
<td>false</td>
<td>none</td>
</tr>
<tr>
<td>petId</td>
<td>path</td>
<td>integer(int64)</td>
<td>true</td>
<td>Pet id to delete</td>
</tr>
</tbody>
</table>
<h3 id="deletepet-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid pet value</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h2 id="uploadfile" tabindex="-1"><a class="header-anchor" href="#uploadfile" aria-hidden="true">#</a> uploadFile</h2>
<p><a id="opIduploadFile"></a></p>
<p><code v-pre>POST /pet/{petId}/uploadImage</code></p>
<p><em>uploads an image</em></p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>string

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uploadfile-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>petId</td>
<td>path</td>
<td>integer(int64)</td>
<td>true</td>
<td>ID of pet to update</td>
</tr>
<tr>
<td>additionalMetadata</td>
<td>query</td>
<td>string</td>
<td>false</td>
<td>Additional Metadata</td>
</tr>
<tr>
<td>body</td>
<td>body</td>
<td>string(binary)</td>
<td>false</td>
<td>none</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"string"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uploadfile-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td><a href="#schemaapiresponse">ApiResponse</a></td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None ( Scopes: write:pets read:pets )
</aside>
<h1 id="swagger-petstore-openapi-3-0-store">store</h1>
<p>Access to Petstore orders</p>
<p><a href="http://swagger.io">Find out more about our store</a></p>
<h2 id="getinventory" tabindex="-1"><a class="header-anchor" href="#getinventory" aria-hidden="true">#</a> getInventory</h2>
<p><a id="opIdgetInventory"></a></p>
<p><code v-pre>GET /store/inventory</code></p>
<p><em>Returns pet inventories by status</em></p>
<p>Returns a map of status codes to quantities</p>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"property1"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"property2"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getinventory-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td>Inline</td>
</tr>
</tbody>
</table>
<h3 id="getinventory-responseschema">Response Schema</h3>
<p>Status Code <strong>200</strong></p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>» <strong>additionalProperties</strong></td>
<td>integer(int32)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>
<h2 id="placeorder" tabindex="-1"><a class="header-anchor" href="#placeorder" aria-hidden="true">#</a> placeOrder</h2>
<p><a id="opIdplaceOrder"></a></p>
<p><code v-pre>POST /store/order</code></p>
<p><em>Place an order for a pet</em></p>
<p>Place a new order in the store</p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"petId"</span><span class="token operator">:</span> <span class="token number">198772</span><span class="token punctuation">,</span>
  <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">"shipDate"</span><span class="token operator">:</span> <span class="token string">"2019-08-24T14:15:22Z"</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"approved"</span><span class="token punctuation">,</span>
  <span class="token property">"complete"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="placeorder-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>body</td>
<td>body</td>
<td><a href="#schemaorder">Order</a></td>
<td>false</td>
<td>none</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"petId"</span><span class="token operator">:</span> <span class="token number">198772</span><span class="token punctuation">,</span>
  <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">"shipDate"</span><span class="token operator">:</span> <span class="token string">"2019-08-24T14:15:22Z"</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"approved"</span><span class="token punctuation">,</span>
  <span class="token property">"complete"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="placeorder-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td><a href="#schemaorder">Order</a></td>
</tr>
<tr>
<td>405</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.5" target="_blank" rel="noopener noreferrer">Method Not Allowed<ExternalLinkIcon/></a></td>
<td>Invalid input</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="getorderbyid" tabindex="-1"><a class="header-anchor" href="#getorderbyid" aria-hidden="true">#</a> getOrderById</h2>
<p><a id="opIdgetOrderById"></a></p>
<p><code v-pre>GET /store/order/{orderId}</code></p>
<p><em>Find purchase order by ID</em></p>
<p>For valid response try integer IDs with value &lt;= 5 or &gt; 10. Other values will generate exceptions.</p>
<h3 id="getorderbyid-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>orderId</td>
<td>path</td>
<td>integer(int64)</td>
<td>true</td>
<td>ID of order that needs to be fetched</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"petId"</span><span class="token operator">:</span> <span class="token number">198772</span><span class="token punctuation">,</span>
  <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">"shipDate"</span><span class="token operator">:</span> <span class="token string">"2019-08-24T14:15:22Z"</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"approved"</span><span class="token punctuation">,</span>
  <span class="token property">"complete"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getorderbyid-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td><a href="#schemaorder">Order</a></td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid ID supplied</td>
<td>None</td>
</tr>
<tr>
<td>404</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.4" target="_blank" rel="noopener noreferrer">Not Found<ExternalLinkIcon/></a></td>
<td>Order not found</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="deleteorder" tabindex="-1"><a class="header-anchor" href="#deleteorder" aria-hidden="true">#</a> deleteOrder</h2>
<p><a id="opIddeleteOrder"></a></p>
<p><code v-pre>DELETE /store/order/{orderId}</code></p>
<p><em>Delete purchase order by ID</em></p>
<p>For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors</p>
<h3 id="deleteorder-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>orderId</td>
<td>path</td>
<td>integer(int64)</td>
<td>true</td>
<td>ID of the order that needs to be deleted</td>
</tr>
</tbody>
</table>
<h3 id="deleteorder-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid ID supplied</td>
<td>None</td>
</tr>
<tr>
<td>404</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.4" target="_blank" rel="noopener noreferrer">Not Found<ExternalLinkIcon/></a></td>
<td>Order not found</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h1 id="swagger-petstore-openapi-3-0-user">user</h1>
<p>Operations about user</p>
<h2 id="createuser" tabindex="-1"><a class="header-anchor" href="#createuser" aria-hidden="true">#</a> createUser</h2>
<p><a id="opIdcreateUser"></a></p>
<p><code v-pre>POST /user</code></p>
<p><em>Create user</em></p>
<p>This can only be done by the logged in user.</p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createuser-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>body</td>
<td>body</td>
<td><a href="#schemauser">User</a></td>
<td>false</td>
<td>Created user object</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>default Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createuser-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>Default</td>
<td>successful operation</td>
<td><a href="#schemauser">User</a></td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="createuserswithlistinput" tabindex="-1"><a class="header-anchor" href="#createuserswithlistinput" aria-hidden="true">#</a> createUsersWithListInput</h2>
<p><a id="opIdcreateUsersWithListInput"></a></p>
<p><code v-pre>POST /user/createWithList</code></p>
<p><em>Creates list of users with given input array</em></p>
<p>Creates list of users with given input array</p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
    <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
    <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
    <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createuserswithlistinput-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>body</td>
<td>body</td>
<td><a href="#schemauser">User</a></td>
<td>false</td>
<td>none</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createuserswithlistinput-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>Successful operation</td>
<td><a href="#schemauser">User</a></td>
</tr>
<tr>
<td>default</td>
<td>Default</td>
<td>successful operation</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="loginuser" tabindex="-1"><a class="header-anchor" href="#loginuser" aria-hidden="true">#</a> loginUser</h2>
<p><a id="opIdloginUser"></a></p>
<p><code v-pre>GET /user/login</code></p>
<p><em>Logs user into the system</em></p>
<h3 id="loginuser-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>query</td>
<td>string</td>
<td>false</td>
<td>The user name for login</td>
</tr>
<tr>
<td>password</td>
<td>query</td>
<td>string</td>
<td>false</td>
<td>The password for login in clear text</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token string">"string"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="loginuser-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td>string</td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid username/password supplied</td>
<td>None</td>
</tr>
</tbody>
</table>
<h3 id="response-headers" tabindex="-1"><a class="header-anchor" href="#response-headers" aria-hidden="true">#</a> Response Headers</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Header</th>
<th>Type</th>
<th>Format</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>X-Rate-Limit</td>
<td>integer</td>
<td>int32</td>
<td>calls per hour allowed by the user</td>
</tr>
<tr>
<td>200</td>
<td>X-Expires-After</td>
<td>string</td>
<td>date-time</td>
<td>date in UTC when token expires</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="logoutuser" tabindex="-1"><a class="header-anchor" href="#logoutuser" aria-hidden="true">#</a> logoutUser</h2>
<p><a id="opIdlogoutUser"></a></p>
<p><code v-pre>GET /user/logout</code></p>
<p><em>Logs out current logged in user session</em></p>
<h3 id="logoutuser-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>Default</td>
<td>successful operation</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="getuserbyname" tabindex="-1"><a class="header-anchor" href="#getuserbyname" aria-hidden="true">#</a> getUserByName</h2>
<p><a id="opIdgetUserByName"></a></p>
<p><code v-pre>GET /user/{username}</code></p>
<p><em>Get user by user name</em></p>
<h3 id="getuserbyname-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>path</td>
<td>string</td>
<td>true</td>
<td>The name that needs to be fetched. Use user1 for testing.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Example responses</p>
</blockquote>
<blockquote>
<p>200 Response</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getuserbyname-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK<ExternalLinkIcon/></a></td>
<td>successful operation</td>
<td><a href="#schemauser">User</a></td>
</tr>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid username supplied</td>
<td>None</td>
</tr>
<tr>
<td>404</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.4" target="_blank" rel="noopener noreferrer">Not Found<ExternalLinkIcon/></a></td>
<td>User not found</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="updateuser" tabindex="-1"><a class="header-anchor" href="#updateuser" aria-hidden="true">#</a> updateUser</h2>
<p><a id="opIdupdateUser"></a></p>
<p><code v-pre>PUT /user/{username}</code></p>
<p><em>Update user</em></p>
<p>This can only be done by the logged in user.</p>
<blockquote>
<p>Body parameter</p>
</blockquote>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updateuser-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>path</td>
<td>string</td>
<td>true</td>
<td>name that need to be deleted</td>
</tr>
<tr>
<td>body</td>
<td>body</td>
<td><a href="#schemauser">User</a></td>
<td>false</td>
<td>Update an existent user in the store</td>
</tr>
</tbody>
</table>
<h3 id="updateuser-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>Default</td>
<td>successful operation</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h2 id="deleteuser" tabindex="-1"><a class="header-anchor" href="#deleteuser" aria-hidden="true">#</a> deleteUser</h2>
<p><a id="opIddeleteUser"></a></p>
<p><code v-pre>DELETE /user/{username}</code></p>
<p><em>Delete user</em></p>
<p>This can only be done by the logged in user.</p>
<h3 id="deleteuser-parameters">Parameters</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>In</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>path</td>
<td>string</td>
<td>true</td>
<td>The name that needs to be deleted</td>
</tr>
</tbody>
</table>
<h3 id="deleteuser-responses">Responses</h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Meaning</th>
<th>Description</th>
<th>Schema</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.1" target="_blank" rel="noopener noreferrer">Bad Request<ExternalLinkIcon/></a></td>
<td>Invalid username supplied</td>
<td>None</td>
</tr>
<tr>
<td>404</td>
<td><a href="https://tools.ietf.org/html/rfc7231#section-6.5.4" target="_blank" rel="noopener noreferrer">Not Found<ExternalLinkIcon/></a></td>
<td>User not found</td>
<td>None</td>
</tr>
</tbody>
</table>
<aside class="success">
This operation does not require authentication
</aside>
<h1 id="schemas" tabindex="-1"><a class="header-anchor" href="#schemas" aria-hidden="true">#</a> Schemas</h1>
<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"petId"</span><span class="token operator">:</span> <span class="token number">198772</span><span class="token punctuation">,</span>
  <span class="token property">"quantity"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">"shipDate"</span><span class="token operator">:</span> <span class="token string">"2019-08-24T14:15:22Z"</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"approved"</span><span class="token punctuation">,</span>
  <span class="token property">"complete"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>petId</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>quantity</td>
<td>integer(int32)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>shipDate</td>
<td>string(date-time)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>Order Status</td>
</tr>
<tr>
<td>complete</td>
<td>boolean</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
<h4 id="enumerated-values-3" tabindex="-1"><a class="header-anchor" href="#enumerated-values-3" aria-hidden="true">#</a> Enumerated Values</h4>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>placed</td>
</tr>
<tr>
<td>status</td>
<td>approved</td>
</tr>
<tr>
<td>status</td>
<td>delivered</td>
</tr>
</tbody>
</table>
<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"fehguy"</span><span class="token punctuation">,</span>
  <span class="token property">"address"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"437 Lytton"</span><span class="token punctuation">,</span>
      <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Palo Alto"</span><span class="token punctuation">,</span>
      <span class="token property">"state"</span><span class="token operator">:</span> <span class="token string">"CA"</span><span class="token punctuation">,</span>
      <span class="token property">"zip"</span><span class="token operator">:</span> <span class="token string">"94301"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>address</td>
<td>[<a href="#schemaaddress">Address</a>]</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"street"</span><span class="token operator">:</span> <span class="token string">"437 Lytton"</span><span class="token punctuation">,</span>
  <span class="token property">"city"</span><span class="token operator">:</span> <span class="token string">"Palo Alto"</span><span class="token punctuation">,</span>
  <span class="token property">"state"</span><span class="token operator">:</span> <span class="token string">"CA"</span><span class="token punctuation">,</span>
  <span class="token property">"zip"</span><span class="token operator">:</span> <span class="token string">"94301"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-2" tabindex="-1"><a class="header-anchor" href="#properties-2" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>street</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>city</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>state</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>zip</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-3" tabindex="-1"><a class="header-anchor" href="#properties-3" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"theUser"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"James"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john@email.com"</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
  <span class="token property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-4" tabindex="-1"><a class="header-anchor" href="#properties-4" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>firstName</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>lastName</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>email</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>phone</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>userStatus</td>
<td>integer(int32)</td>
<td>false</td>
<td>none</td>
<td>User Status</td>
</tr>
</tbody>
</table>
<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-5" tabindex="-1"><a class="header-anchor" href="#properties-5" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"doggie"</span><span class="token punctuation">,</span>
  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dogs"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"photoUrls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"string"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-6" tabindex="-1"><a class="header-anchor" href="#properties-6" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>integer(int64)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>true</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>category</td>
<td><a href="#schemacategory">Category</a></td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>photoUrls</td>
<td>[string]</td>
<td>true</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>tags</td>
<td>[<a href="#schematag">Tag</a>]</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>pet status in the store</td>
</tr>
</tbody>
</table>
<h4 id="enumerated-values-4" tabindex="-1"><a class="header-anchor" href="#enumerated-values-4" aria-hidden="true">#</a> Enumerated Values</h4>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>status</td>
<td>available</td>
</tr>
<tr>
<td>status</td>
<td>pending</td>
</tr>
<tr>
<td>status</td>
<td>sold</td>
</tr>
</tbody>
</table>
<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"string"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties-7" tabindex="-1"><a class="header-anchor" href="#properties-7" aria-hidden="true">#</a> Properties</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Restrictions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>integer(int32)</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>message</td>
<td>string</td>
<td>false</td>
<td>none</td>
<td>none</td>
</tr>
</tbody>
</table>
</div></template>


