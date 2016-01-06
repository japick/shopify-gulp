<h1>Shopify Gulp</h1>
<p>Shopify Gulp uses <strong>gulp-shopify-upload</strong> and <strong>gulp-cssimport</strong> to watch for changes to SCSS files, before uploading them to the Shopify server.</p>
<p>This guide assumes you already gulp installed globally (npm install -g gulp).</p>
<p>Using Terminal, cd to your working directory and run:</p>
<pre>npm install --save-dev gulp gulp-watch gulp-shopify-upload gulp-cssimport</pre>
<p>Add <em>{{ 'theme.scss.css' | asset_url | stylesheet_tag }}</em> to your <em>theme.liquid</em> header.</p>
