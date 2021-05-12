---
title: KaTeX Configuration
parent: KaTeX
grand_parent: Math
nav_order: 1
---
# KaTeX Configuration

In `_includes/head_custom.html` add (for version 0.13.3):

{% raw %}
```html
{% case page.math %}
     
  {% when "katex" %}

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13/dist/katex.min.css" crossorigin="anonymous">

    <!-- The loading of KaTeX is deferred to speed up page rendering -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13/dist/katex.min.js" crossorigin="anonymous"></script>

    <!-- To automatically render math in text elements, include the auto-render extension: -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.13/dist/contrib/auto-render.min.js" crossorigin="anonymous"
    onload="renderMathInElement(document.body, {
      globalGroup: true,
      trust: true,
      strict: false,
      throwOnError: false,
      macros: {
        '\\\n': '\\ '
      }
    });"></script>

    <!-- Override the KaTeX default of font-size: 1.21em -->
    <style>
      .katex { 
        font-size: 1em; 
      }
    </style>

    <!-- Potential workaround for KaTeX 0.13 bug https://github.com/KaTeX/KaTeX/issues/2815 -->
    <style>
      .katex .vlist-t2 > .vlist-r:nth-child(2) > .vlist {
        pointer-events: none;
    }
    </style>
   
{% endcase %}
```
{% endraw %}

See also [further KaTeX configuration options](https://katex.org/docs/options.html).

In the front matter of pages using KaTeX (or as a global front-matter default) add:

```yaml
math: katex
```

(The suggested field name `math` and the key `katex` can be replaced.)

## Preamble

To implement a preamble that defines additional commands for use on all KaTeX pages:

- define a custom layout that includes the command definitions
- use it on KaTeX pages instead of the default layout.
  
