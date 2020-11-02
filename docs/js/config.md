---
title: MathJax Configuration
parent: MathJax
grand_parent: Tests
nav_order: 1
---
# MathJax Configuration

Add in `_config.yml`, for example:
```yaml
mathjax:
  source: 
    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
  config:
    "{ tex: { tags: 'ams' },
    svg: { fontCache: 'global', displayAlign: 'left', displayIndent: '2em' }
    }"
```

See also [further MathJax configuration options](https://docs.mathjax.org/en/latest/web/configuration.html).

Add in `_includes/head_custom.html`:
{% raw %}
```html
{% if page.mathjax %}
  <script>MathJax = {{ site.mathjax.config }};</script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="{{ site.mathjax.source }}"></script>
{% endif %}
```
{% endraw %}

Add in front matter of all files that use MathJax (or add to `defaults`):
```yaml
mathjax: true
```
