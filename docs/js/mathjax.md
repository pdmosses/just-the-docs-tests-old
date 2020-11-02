---
title: MathJax
parent: Tests
has_children: true
nav_order: 4
mathjax: true
---
# MathJax

Although Just the Docs does not include support for using [MathJax](https://www.mathjax.org), it is easy for users to add it, see [configuration suggestions](config). It renders $$\LaTeX$$ code like this:

$$
\begin{align*}
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
\end{align*}
$$

To see the $$\LaTeX$$ source of a formula, right-click anywhere on it.

Use of MathJax in Markdown is illustrated by a series of [tests](test).
