---
title: Admonitions
parent: Tests
nav_order: 3
---
# Admonitions

Support for common markdown callouts like NOTE, TIP, HINT has been [requested](https://github.com/pmarsceill/just-the-docs/issues/171) as an enhancement for Just the Docs.

Various other platforms for documentation websites support *admonitions*, *alerts*, or *callouts*. Some examples:

- [Python-Markdown](https://python-markdown.github.io/extensions/admonition/#admonition)
  ```markdown
  !!! type "optional explicit title within double quotes"
      Any number of other indented markdown elements.

      This is the second paragraph.
  ```

- [Pandoc](https://pandoc.org/MANUAL.html#divs-and-spans)
  ```
  ::: Warning ::::::
  This is a warning.

  ::: Danger
  This is a warning within a warning.
  :::
  ::::::::::::::::::
  ```

- [reStructuredText](https://docutils.sourceforge.io/docs/ref/rst/directives.html#id31)
  - attention, caution, danger, error, hint, important, note, tip, warning, admonition

- [Jekyll Doc](https://idratherbewriting.com/documentation-theme-jekyll/mydoc_alerts.html#about-alerts)

  - Alerts: note, tip, warning, important
    {% raw %}
    ```liquid
    {% include note.html content="This is my note. All the content I type here
    is treated as a single paragraph. <br/><br/> Now I'm typing on a  new line." %}
    ```
    {% endraw %}
    
  - Callouts: danger, default, primary, success, info, warning
    {% raw %}
    ```liquid
    {% include callout.html content="This is my callout. It has a border on the left 
    whose color you define by passing a type parameter. I typically use this style of
    callout when I have more information that I want to share, often spanning
    multiple paragraphs. " type="primary" %}
    ```
    {% endraw %}


- [Bootstrap](https://getbootstrap.com/docs/4.5/components/alerts/)
  - primary, secondary, success, danger, warning, info, light, dark

A [kramdown extension for admonition blocks](https://github.com/gettalong/kramdown/issues/300) has been proposed, but needs a PR.

## Using IALs in kramdown with [custom styles](https://github.com/pmarsceill/just-the-docs/issues/171#issuecomment-538794741)

{: .info }
Do not blah blah blah...

{: .warn }
Do not blah blah blah...

{: .danger }
Do not blah blah blah...

The markup is neat enough for a single paragraph:

```markdown
{: .info }
Do not blah blah blah...
```

But that doesn't work for multiple paragraphs. The following workaround using HTML would not look so nice:

```markdown
{: .info }
<div markdown="block">
Do not blah blah blah...

Do not blah blah blah...
</div>
```

{: .info }
<div markdown="block">
Do not blah blah blah...

Do not blah blah blah...
</div>

Fortunately, block quotes allow multiple paragraphs (etc.) without HTML tags:

```markdown
{: .info }
> Do not blah blah blah...
>
> Do not blah blah blah...
```

The margins need adjusting. For example:
```sass
blockquote.info {
  margin-left: 0;
  
  > p:first-child {
    margin-top: 0;
  }
    
  > p:last-child {
    margin-bottom: 0;
  }
}
```

Then we get:

{: .info }
> Do not blah blah blah...
>
> Do not blah blah blah...

It seems unlikely that a block quote would otherwise be wanted as the body of an admonition, so perhaps that is the simplest markup style for use in kramdown?
