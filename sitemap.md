---
layout: empty
permalink: sitemap.xml
---
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
{% for web-page in site.pages %}{% unless web-page.url contains "xml"%}{% unless web-page.url contains "css"%}{% unless web-page.url contains "404"%}{% unless web-page.url contains "json"%}{% if web-page.layout == "generic" or web-page.layout == "index-page"%}
<url>
  <loc>https://a510.ru{{web-page.url}}</loc>
  <lastmod>{{site.time | date_to_xmlschema}}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.00</priority>
</url>
{% endif %}{% endunless %}{% endunless %}{% endunless %}{% endunless %}{% endfor %}{% for web-page in site.proekty %}
<url>
  <loc>https://a510.ru{{web-page.url}}</loc>
  <lastmod>{{site.time | date_to_xmlschema}}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.00</priority>
</url>
{% endfor %}{% for web-page in site.portfolio %}
<url>
  <loc>https://a510.ru{{web-page.url}}</loc>
  <lastmod>{{site.time | date_to_xmlschema}}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.90</priority>
</url>
{% endfor %}</urlset>