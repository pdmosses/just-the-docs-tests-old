---
title: MathJax Configuration
parent: MathJax
grand_parent: Tests
nav_order: 1
---
# MathJax Configuration

> MathJax [version 3](https://docs.mathjax.org/en/latest/web/configuration.html) 
> is a major update, but does not yet include all the features provided by version 2.7.
> The following configuration examples are for MathJax 2.7.

Add in `_config.yml`, for example:
```yaml
mathjax:
  source: 
    "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_SVG"
  config: 
    'MathJax.Hub.Config({
      displayAlign: "left",
      displayIndent: "2em",
      TeX: { 
        equationNumbers: { autoNumber: "AMS" }
      },
      SVG: {
        mtextFontInherit: true
      }
    })'
```

See also [further MathJax configuration options](https://docs.mathjax.org/en/v2.7-latest/configuration.html#configuring-mathjax).

Add in `_includes/head_custom.html`:
{% raw %}
```html
{% if page.mathjax %}
<script type="text/x-mathjax-config">
  {{ site.mathjax.config }};
</script>
<script type="text/javascript" async 
  src="{{ site.mathjax.source }}">
</script>
{% endif %}
```
{% endraw %}

Add in front matter of all files that use MathJax (or add to `defaults`):
```yaml
mathjax: true
```
