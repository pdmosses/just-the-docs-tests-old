---
title: KaTeX Configuration
parent: KaTeX
grand_parent: Math
nav_order: 1
---
# KaTeX Configuration

In `_includes/head_custom.html` add, for example:

{% raw %}
```html
{% case page.math %}
     
  {% when "katex" %}

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">

    <!-- The loading of KaTeX is deferred to speed up page rendering -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
    
    <!-- Copy-tex extension https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex -->
    <link href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/copy-tex.css" rel="stylesheet" type="text/css">
    <script src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/copy-tex.min.js" integrity="sha384-XhWAe6BtVcvEdS3FFKT7Mcft4HJjPqMQvi5V4YhzH9Qxw497jC13TupOEvjoIPy7" crossorigin="anonymous"></script>

    <!-- To automatically render math in text elements, include the auto-render extension: -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous"
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
  
