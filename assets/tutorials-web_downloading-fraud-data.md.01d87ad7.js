import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.c4d6cd72.js";const r="/assets/s-download.d2bf42dc.png",n="/assets/s-download-purchase.f3d67dcd.png",s="/assets/s-download-success.76c6ff3b.png",v=JSON.parse('{"title":"Downloading fraud data","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials-web/downloading-fraud-data.md","filePath":"tutorials-web/downloading-fraud-data.md"}'),d={name:"tutorials-web/downloading-fraud-data.md"},i=o('<h1 id="downloading-fraud-data" tabindex="-1">Downloading fraud data <a class="header-anchor" href="#downloading-fraud-data" aria-label="Permalink to &quot;Downloading fraud data&quot;">​</a></h1><p>To download fraud event data via FIB Web App, perform the following steps:</p><ol><li><p>On the <a href="./../overview/web-interface.html#dashboard">Dashboard</a> screen, select <strong>Download fraud data</strong> from the <a href="./../overview/web-interface.html#download">Download</a> tab.</p></li><li><p>On the <strong>Download fraud data</strong> screen that appears, specify the following information about the fraud event:</p><ul><li><p><strong>Fraud data</strong> — select the fraud <a href="./../overview/fraud-events.html#types-of-fraud-events">type of the fraud events</a> that you wish to download.<br> Multiple fraud types can be selected.</p></li><li><p><strong>Origination countries</strong> — select the countries where the fraud events originated from.<br> Either all or specific countries can be selected.</p></li><li><p><strong>Destination countries</strong> — select the countries where the fraud event was identified as such.<br> Either all or specific countries can be selected.</p></li><li><p><strong>Scope of data novelty</strong> — select the kind of fraud events in terms of how they relate to your account.<br> Can be one of the following:</p><ul><li><strong>Any</strong> — all fraud events.</li><li><strong>Only old</strong> — fraud events that either have already been downloaded or have been uploaded by your account.</li><li><strong>Only new</strong> — fraud events that have not been downloaded previously.</li></ul></li><li><p><strong>Date range</strong> — if necessary, specify the timeframe that the requested fraud events are filtered by either as a predetermined time period (e.g., last week, last month) or a custom one.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If left unspecified, the requested fraud events will be collected since the establishment of the FIB network.</p></div></li></ul></li><li><p>If necessary, select the <a href="./../overview/tokenomics.html#confidence-index"><strong>Confidence index</strong></a> checkbox.</p><p><img src="'+r+'" alt="Download fraud data" data-zoomable="" class="mini"></p></li><li><p>When ready, select <strong>Confirm purchase</strong>.</p></li><li><p>On the <strong>Purchase has completed</strong> screen that appears, select <strong>Download fraud data</strong>.</p><p><img src="'+n+'" alt="Purchase has completed" data-zoomable="" class="mini"></p></li></ol><h3 id="expected-result" tabindex="-1">Expected result <a class="header-anchor" href="#expected-result" aria-label="Permalink to &quot;Expected result&quot;">​</a></h3><p><img src="'+s+'" alt="Fraud data successfully downloaded" data-zoomable="" class="mini"></p><p>The fraud events data, filtered according to your specified criteria, is downloaded to your device as a <code>.csv</code> file, which can be opened using any spreadsheet software available to you (e.g., Microsoft Excel, Google Sheets); and the <a href="./../overview/web-interface.html#balance">token balance</a> of the signed-in user is decreased based on the current conversion rate active in the network (see <a href="./../overview/tokenomics.html#current-conversion-rate">Current conversion rate</a>).</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For more information on fraud event data, including fraud identifiers, fraud types, and other relevant concepts, see <a href="./../overview/fraud-events.html">Fraud events</a> and <a href="./../overview/contributions.html">Contributions</a>.</p></div><h4 id="csv-file-template" tabindex="-1">.CSV file template <a class="header-anchor" href="#csv-file-template" aria-label="Permalink to &quot;.CSV file template&quot;">​</a></h4><p>In the downloaded <code>.csv</code> file each row of the table contains a single fraud event entry saved in a single cell. Each entry adheres to the following data format:</p><p><code>Fraud type</code>, <code>Fraud Identifier</code> (Number or range of numbers), <code>Origination country two-letter code</code> (<a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" rel="noreferrer">ISO 3166</a>, Alpha-2), <code>Destination country two-letter code</code> (<a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" rel="noreferrer">ISO 3166</a>, Alpha-2)</p>',10),l=[i];function c(f,h,u,p,g,m){return t(),a("div",null,l)}const b=e(d,[["render",c]]);export{v as __pageData,b as default};
