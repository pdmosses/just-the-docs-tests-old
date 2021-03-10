---
title: KaTeX Configuration
parent: KaTeX
grand_parent: Math
nav_order: 1
---
# KaTeX Configuration

In `_includes/head_custom.html` add (for version 0.13.0):

{% raw %}
```html
{% case page.math %}
     
  {% when "katex" %}

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css" integrity="sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw" crossorigin="anonymous">

  <!-- The loading of KaTeX is deferred to speed up page rendering -->
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js" integrity="sha384-FaFLTlohFghEIZkw6VGwmf9ISTubWAVYW8tG8+w2LAIftJEULZABrF9PPFv+tVkH" crossorigin="anonymous"></script>
  
  <!-- Copy-tex extension https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex -->
  <link href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/copy-tex.css" rel="stylesheet" type="text/css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/copy-tex.min.js" integrity="sha384-Ep9Es0VCjVn9dFeaN2uQxgGcGmG+pfZ4eBaHxUpxXDORrrVACZVOpywyzvFRGbmv" crossorigin="anonymous"></script>

  <!-- Override the KaTeX 0.13.0 default of font-size: 1.21em -->
  <style>
    .katex { 
      font-size: 1em; 
    }
  </style>

  <!-- Workaround for KaTeX 0.13.0 bug https://github.com/KaTeX/KaTeX/issues/2815 -->
  <style>
    .katex .vlist-r {
      display: table-cell;
    }
  </style>

  <!-- To automatically render math in text elements, include the auto-render extension: -->
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/auto-render.min.js" integrity="sha384-bHBqxz8fokvgoJ/sc17HODNxa42TlaEhB+w8ZJXTc2nZf1VgEaFZeZvT4Mznfz0v" crossorigin="anonymous"
      onload="renderMathInElement(document.body, {
        globalGroup: true,
        trust: true
      });"></script>
   
{% endcase %}
```
{% endraw %}

See also [further KaTeX configuration options](https://katex.org/docs/options.html).

In the front matter of pages using KaTeX (or as a global front-matter default) add:

```yaml
math: katex
```

(The suggested field name `math` and the key `katex` can be replaced.)
  
