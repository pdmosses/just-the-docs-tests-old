---
title: Visited code links
parent: Obsolete Tests
nav_order: 5
---
# Visited code links

On Safari (13.1.2, macOS 10.15.6) code in a visited link has a dark border. This doesn't happen in Firefox (79.0).

The following setting in `_config.yml` fixes the issue in Safari:

```yaml
color_scheme: fix-visited
```

by loading the following CSS:

```css
a:visited code {
  border-color: $border-color;
}
```

`some unlinked code`

[`some code in a link`](#visited-code-links)

[some plain text in a link](#visited-code-links)
