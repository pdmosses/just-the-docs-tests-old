---
title: Lists
parent: Obsolete Tests
nav_order: 2
mathjax: true
---
# Lists

The following sections contain lists where the first child of each item is a block-level element, using blank lines following [Kramdown syntax]. 

For some combinations (especially those involving description list elements) vertical alignment in the rendered web pages is not ideal in v0.3.1.

The following setting in `_config.yml` loads the custom CSS in [`fix-lists.scss`], which fixes most of the alignment issues:

```yaml
color_scheme: fix-lists
```

as shown in this [PDF]({{ "/assets/images/fix-lists.pdf" | absolute_url }}).

[Kramdown syntax]: https://kramdown.gettalong.org/syntax.html

[`fix-lists.scss`]: {{ "/assets/css/fix-lists.scss.txt" | absolute_url }}


## Unordered lists

- paragraph text

  paragraph text

- ### Header

  paragraph text

- > block quote

  paragraph text

- ```sh
  fenced code block
  ```

  paragraph text

- + unordered list item
  + unordered list item

  paragraph text

- 1. ordered list item
  2. ordered list item

  paragraph text

- term
  : description
  
  term
  : description

  paragraph text

- |-----------------+------------+-----------------+----------------|
  | Default aligned |Left aligned| Center aligned  | Right aligned  |
  |-----------------|:-----------|:---------------:|---------------:|
  | First body part |Second cell | Third cell      | fourth cell    |
  | Second line     |foo         | **strong**      | baz            |
  | Third line      |quux        | baz             | bar            |
  |-----------------+------------+-----------------+----------------|
  | Second body     |            |                 |                |
  | 2 line          |            |                 |                |
  |=================+============+=================+================|
  | Footer row      |            |                 |                |
  |-----------------+------------+-----------------+----------------|

  paragraph text

- ***

  paragraph text

- $$ \mathit{math} \{ \mathit{block} \} $$

  paragraph text


## Ordered lists

1.  paragraph text

    paragraph text

1.  ### Header

    paragraph text

1.  > block quote

    paragraph text

1.  ```sh
    fenced code block
    ```

    paragraph text

1.  + unordered list item
    + unordered list item

    paragraph text

1.  1. ordered list item
    2. ordered list item

    paragraph text

1.  term
    : description
  
    term
    : description

    paragraph text

1.  |-----------------+------------+-----------------+----------------|
    | Default aligned |Left aligned| Center aligned  | Right aligned  |
    |-----------------|:-----------|:---------------:|---------------:|
    | First body part |Second cell | Third cell      | fourth cell    |
    | Second line     |foo         | **strong**      | baz            |
    | Third line      |quux        | baz             | bar            |
    |-----------------+------------+-----------------+----------------|
    | Second body     |            |                 |                |
    | 2 line          |            |                 |                |
    |=================+============+=================+================|
    | Footer row      |            |                 |                |
    |-----------------+------------+-----------------+----------------|

    paragraph text

1.  ***

    paragraph text

1.  $$ \mathit{math} \{ \mathit{block} \} $$

    paragraph text


## Description lists

term

: paragraph text

  paragraph text

term

: ### Header

  paragraph text

term

: > block quote

  paragraph text

term

: ```sh
  fenced code block
  ```

  paragraph text

term

: + unordered list item
  + unordered list item

  paragraph text

term

: 1. ordered list item
  2. ordered list item

  paragraph text

term

: sub-term
  : sub-description
  
  sub-term
  : sub-description

  paragraph text

term

: |-----------------+------------+-----------------+----------------|
  | Default aligned |Left aligned| Center aligned  | Right aligned  |
  |-----------------|:-----------|:---------------:|---------------:|
  | First body part |Second cell | Third cell      | fourth cell    |
  | Second line     |foo         | **strong**      | baz            |
  | Third line      |quux        | baz             | bar            |
  |-----------------+------------+-----------------+----------------|
  | Second body     |            |                 |                |
  | 2 line          |            |                 |                |
  |=================+============+=================+================|
  | Footer row      |            |                 |                |
  |-----------------+------------+-----------------+----------------|

  paragraph text

term

: ***

  paragraph text

term

: $$ \mathit{math} \{ \mathit{block} \} $$

  paragraph text
