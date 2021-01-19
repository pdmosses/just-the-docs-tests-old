---
title: KaTeX
parent: Math
has_children: true
nav_order: 1
math: katex
---
# $$\KaTeX$$

Just the Docs sites can be customised to support [$$\KaTeX$$](https://katex.org),
as explained in the [configuration suggestions](config). 
Pages with `math: katex` in the front matter then render $$\LaTeX$$ code in [kramdown math blocks](https://kramdown.gettalong.org/syntax.html#math-blocks) using $$\KaTeX$$.
For example:

$$
\begin{aligned}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{aligned}
$$

To see the $$\LaTeX$$ source of the formula, select the formula[^Safari] and copy it to the clipboard.

Some [tests](tests) illustrate the use of math in Markdown.

----

[^Safari]:
    When using Safari, the selection highlighting may include some of the surrounding text,
    but only the formula itself is copied to the clipboard.
