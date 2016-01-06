<h1>Shopify Gulp</h1>
<p>Shopify Gulp uses <strong>gulp-shopify-upload</strong> and <strong>gulp-cssimport</strong> to watch for changes to SCSS files, before uploading them to the Shopify server.</p>
<p>This guide assumes you already gulp installed globally (npm install -g gulp).</p>
<p>Simply run:</p>
<pre>npm install --save-dev gulp gulp-watch gulp-shopify-upload gulp-cssimport</pre>
<p>Add <pre>{{ 'theme.scss.css' | asset_url | stylesheet_tag }}</pre> to your <pre>theme.liquid</pre> header.</p>
