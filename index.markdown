---
title: Home
nav_exclude: true
---

# Tests for Just the Docs
{: .no_toc }

<details open markdown="block">
   <summary>
     Table of contents
   </summary>
   {: .text-delta }
 - TOC
 {:toc}
 </details>


## Create a Jekyll site on GitHub Pages

1.  Shell:
    ```sh
    jekyll new just-the-docs-tests
    ...
    cd just-the-docs-tests
    bundle exec jekyll serve
    ```

2.  Browser: <http://localhost:4000>
    - Shows the site home page with `Minima` layout

3.  GitHub Desktop:
    - Create repository `just-the-docs-tests`

4.  Shell:
    ```sh
    git config user.email ...@users.noreply.github.com
    ```
    
5.  GitHub Desktop:
    - Publish repository `just-the-docs-tests`

6.  Browser: GitHub repository: Settings:
    - GitHub Pages: Source: `master` (Save)
    - Change repository visibility: `public`
    - The site is published at <https://pdmosses.github.io/just-the-docs-tests/>

## Use Just the Docs as a remote theme

[Just the Docs Quickstart]

1.  Edit `_config.yml`:
    ```yaml
    title: Testing Just the Docs
    # email: your-email@example.com
    description: >- # this means to ignore newlines until "baseurl:"
      This site tests some features of Just the Docs, a remote theme for Jekyll on GitHub Pages.
    baseurl: "/just-the-docs-tests" # the subpath of your site, e.g. /blog
    url: "" # the base hostname & protocol for your site, e.g. http://example.com
    ```
    
    [Jekyll remote theme]
    ```yaml
    # Build settings
    # theme: minima
    remote_theme: pmarsceill/just-the-docs
    plugins:
      - jekyll-feed
      - jekyll-remote-theme
    ```
    
    [Jekyll front matter defaults]:
    ```yaml
    defaults:
      -
        scope:
          path: "" # an empty string here means all files in the project
        values:
          layout: "default"
    ```

2.  Edit `Gemfile`:
    ```
    # gem "minima", "~> 2.5"
    gem "jekyll-remote-theme"
    gem "just-the-docs"
    ```

3.  Files:
    - delete `about.markdown`
    - update `index.markdown`
    - add `README.md`
    - add `docs/index.md`
    - add `docs/grandchildren/*`
    - add `_includes/head_custom.html` to [prevent `favicon.ico` requests]
      ```
      <link rel="icon" href="data:,">
      ```
    
4.  Shell:
    ```sh
    bundle install
    bundle exec jekyll serve
    ```

5.  Browser: <http://localhost:4000/just-the-docs-tests/>
    - Shows the site home page with Just the Docs layout

6.  GitHub Desktop:
    - Push


[Just the Docs Quickstart]: https://pmarsceill.github.io/just-the-docs/#quick-start-use-as-a-github-pages-remote-theme

[Jekyll remote theme]: https://github.com/benbalter/jekyll-remote-theme

[Jekyll front matter defaults]: https://jekyllrb.com/docs/configuration/front-matter-defaults/

[Prevent `favicon.ico` requests]: https://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests
