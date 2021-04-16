---
title: KaTeX Issues
parent: KaTeX
grand_parent: Math
nav_order: 3
math: katex
---

# $$\KaTeX$$ (0.13.0) Issues

The issues listed below concern LaTeX markup that is either rejected by KaTeX,
or accepted by KaTex but rendered differently from pdflatex.

This list supplements the KaTeX [support table].
After some general issues, commands and environments are grouped as in the KaTeX list of [supported functions].

## Macros

### Supported

LaTeX2e defines various character macros named `\text...`.
Do they render the same as ``\char`\.``, assuming the back-tick is supported?

$$
  \char`\\
$$

$$
  A = `A
$$

### Optional arguments

[KaTeX issue 2228](https://github.com/KaTeX/KaTeX/issues/2228)

Optional arguments are not supported by `\newcommand`, nor by the KaTeX rendering options, although they are used internally by some macros.

Adding an optional argument to an existing argument-less command or environment is a __breaking change__:
when the first non-space character following a command is `[`,
it will be eaten by the parser, together with following text until `]`.
As explained in §2.4 of the [unofficial LaTeX2e reference manual]:

> if an optional argument comes last, with no required argument after it, 
> then to make the first character of the following text be an open square bracket,
> hide it inside curly braces.

`\raisebox{1ex}[2ex][3ex]{hbox}`

[KaTeX issue 2140](https://github.com/KaTeX/KaTeX/issues/2140)

$$
  \text{Raised } \raisebox{1ex}[2ex][3ex]{hbox}
$$

`\begin{aligned}[t]...`

[KaTeX issue 2760](https://github.com/KaTeX/KaTeX/issues/2760)

The [amsmath user guide] (§3.7) explains that for the `gathered`, `aligned`, and `alignedat` environments:

> Like the `array` environment, these `-ed` variants also take an optional `[t]`,
> `[b]` or the default `[c]` argument to specify vertical positioning.

$$
  A ::= \begin{aligned}[t]~ & B \\ ~ & C \end{aligned}
$$

`\begin{array}[t]{l}...`

[KaTeX issue 2172](https://github.com/KaTeX/KaTeX/issues/2172)

$$
  A ::= \begin{array}[t]{l} B \\ C \end{array}
$$

### href not active in last line(s) of vertical displays

[KaTeX issue 2815](https://github.com/KaTeX/KaTeX/issues/2815)

Potential workaround in CSS:

```css
.katex .vlist-t2 > .vlist-r:nth-child(2) > .vlist {
  pointer-events: none;
}
```

Using the above style, all the links in the following examples become active.

$$
  \frac
  {\url{https://katex.org/} \text{ is active}}
  {\url{https://katex.org/} \text{ is inactive}}
$$

$$
  \begin{array}{c}
    \url{https://katex.org/} \text{ is active} \\
    \url{https://katex.org/} \text{ is active} \\
    \url{https://katex.org/} \text{ is inactive}
  \end{array}
$$

$$
  \begin{aligned}
    \url{https://katex.org/} \text{ is active} \\
    \url{https://katex.org/} \text{ is active} \\
    \url{https://katex.org/} \text{ is inactive}
  \end{aligned}
$$


## Macro definitions fail if parameters are omitted in expansions

Definitions with `\newcommand` work:

```latex
\newcommand{\FirstCommand}[2]{#1}
\newcommand{\SecondCommand}[2]{#2}
\FirstCommand{A}{B}, \SecondCommand{C}{D}
```

produces:

$$
\newcommand{\FirstCommand}[2]{#1}
\newcommand{\SecondCommand}[2]{#2}
\FirstCommand{A}{B}, \SecondCommand{C}{D}
$$

The corresponding definitions as macros do not work:

```html
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossorigin="anonymous"
    onload="renderMathInElement(document.body, {
      globalGroup: true,
      trust: true,
      macros: {
        '\\FirstMacro': '#1',
        '\\SecondMacro': '#2'
      }
    });"></script>
```

The JavaScript console shows:
```
TypeError: undefined is not an object (evaluating 't.text')
```

`\FirstMacro{A}{B}, \SecondMacro{C}{D}` produces
$$\First{A}{B}$$, $$\Second{C}{D}$$



[support table]: https://katex.org/docs/support_table.html

[supported functions]: https://katex.org/docs/supported.html

[unofficial LaTeX2e reference manual]: http://tug.org/texinfohtml/latex2e.html

[amsmath user guide]: http://mirrors.ctan.org/macros/latex/required/amsmath/amsldoc.pdf
