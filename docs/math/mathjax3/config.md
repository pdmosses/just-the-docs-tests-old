---
title: MathJax v3 Configuration
parent: MathJax v3
grand_parent: Math
nav_order: 1
---
# MathJax v3 Configuration

In `_includes/head_custom.html` add, for example:

{% raw %}
```html
{% case page.math %}
     
  {% when "mathjax3" %}
    
    <script>
      MathJax = { 
        tex: { 
          tags: 'ams',
          packages: {'[+]': ['textmacros']},
        },
        loader: {
          load: ['[tex]/textmacros']
        }
      };
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
    </script>
   
{% endcase %}
```
{% endraw %}

See also [further MathJax v3 configuration options](http://docs.mathjax.org/en/latest/web/configuration.html).

In the front matter of pages using MathJax v3 (or as a global front-matter default) add:

```yaml
math: mathjax3
```

(The suggested field name `math` and the key `mathjax3` can be replaced.)
  
