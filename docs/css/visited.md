---
title: Visited code links
parent: Tests
---
# Visited code links

On Safari (13.1.2, macOS 10.15.6) code in a visited link has a dark border.
This doesn't happen in Firefox (79.0).

`some unlinked code`

[`some code in a link`](#visited-code-links)

[some plain text in a link](#visited-code-links)

The following CSS fixes the issue:

```css
a:visited code {
  border-color: $border-color;
}
```
