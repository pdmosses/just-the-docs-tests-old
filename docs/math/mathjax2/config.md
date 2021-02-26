---
title: MathJax v2 Configuration
parent: MathJax v2
grand_parent: Math
nav_order: 1
---
# MathJax v2 Configuration

In `_includes/head_custom.html` add, for example:

{% raw %}
```html
{% case page.math %}
     
  {% when "mathjax2" %}

    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        TeX: { 
          equationNumbers: { autoNumber: "AMS" }
        }
      });
    </script>
    <script type="text/javascript" async 
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_SVG">
    </script>
   
{% endcase %}
```
{% endraw %}

See also [further MathJax v2 configuration options](https://docs.mathjax.org/en/v2.7-latest/configuration.html).

In the front matter of pages using MathJax v2 (or as a global front-matter default) add:

```yaml
math: mathjax2
```

The suggested field name `math` and the key `mathjax2` can be replaced.
  
