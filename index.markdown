---
layout: default
title: Home
nav_exclude: true
---

# Tests for Just the Docs
{: .no_toc }

Various [tests](docs/) illustrate how the theme renders various elements.

The following sections are a log of the creation of this website, with links to some relevant resources.

[Bug reports and suggestions for improvement](https://github.com/pdmosses/just-the-docs-tests/issues) are welcome!

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
    - GitHub Pages: Source: `master` or `main` (Save)
    - Change repository visibility: `public`

7. Browser: <https://pdmosses.github.io/just-the-docs-tests/>
    - The site appears on GitHub Pages

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
    
    Replace the Minima theme by Just the Docs [Jekyll remote theme]\:
    ```yaml
    # Build settings
    # theme: minima
    remote_theme: pmarsceill/just-the-docs
    plugins:
      - jekyll-feed
      - jekyll-remote-theme
    ```
    
    Avoid need for `layout: default` in `docs` pages using [Jekyll front matter defaults]\:
    ```yaml
    defaults:
      -
        scope:
          path: "docs" # an empty string here means all files in the project
        values:
          layout: "default"
    ```
    **Warning:** Using `path: ""` above corrupts files in the `assets` folder (also when restricted to `type: "pages"`).

2.  Edit `Gemfile`: replace the Minima theme by Just the Docs remote theme
    ```ruby
    # Happy Jekylling!
    gem "jekyll", "~> 4.1.1"
    # This is the default theme for new Jekyll sites. You may change this to anything you like.
    # gem "minima", "~> 2.5"
    gem "jekyll-remote-theme"
    gem "just-the-docs"
    ```
    **Warning:** The `github-pages` gem currently requires Jekyll 3, and cannot be installed together with Jekyll 4.

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

7.  Browser: <https://pdmosses.github.io/just-the-docs-tests/>
    - The site appears on GitHub Pages
    - The site is automatically built using Jekyll 3.8.5

## Use Jekyll Actions on GitHub Pages with Jekyll 4

[Jekyll Actions], [Jekyll Actions Demo], [Deploy your Jekyll blog using Github Pages and Github Actions]

Updated April 2021
{: .label .label-green }

The `Gemfile` is used by the action, so make sure it is **not** in `.gitignore`
(in contrast to `Gemfile.lock`, which should be ignored by git).

**N.B.** The following steps **overwrite** the `gh-pages` branch!

1.  Browser: GitHub repository: Actions:
    - Click on the link to `set up a workflow yourself`
    - Change the file name from `main.yml` to `github-pages.yml`
    - Replace the file contents by the following YAML code from [Jekyll Actions]
      {% raw %}
      ```yaml
      name: Build and deploy Jekyll site to GitHub Pages

      on:
        push

      jobs:
        github-pages:
          runs-on: ubuntu-latest
          steps:
          - uses: actions/checkout@v2

          # Use GitHub Actions' cache to shorten build times and decrease load on servers
          - uses: actions/cache@v2
            with:
              path: vendor/bundle
              key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile') }}
              restore-keys: |
                ${{ runner.os }}-gems-

          # Standard usage
          - uses:  helaili/jekyll-action@v2
            with:
              token: ${{ secrets.GITHUB_TOKEN }}
      ```
      {% endraw %}
    - Click `Start commit` then `Commit new file`

2.  Browser: GitHub repository: Settings: Pages:
    - GitHub Pages: Source: should still be set to `master` or `main`

3. Browser: GitHub repository:
    - Click on the status symbol (tick or X) in the latest commit information
    - Click on `Details`
    - A successful build: ![screenshot](assets/images/workflow-details.png)
    - The site has now been built using **Jekyll 4**, as specified in `Gemfile`

4.  Browser: <https://pdmosses.github.io/just-the-docs-tests/>
    - Check the site has been published on GitHub Pages


[Just the Docs Quickstart]: https://pmarsceill.github.io/just-the-docs/#quick-start-use-as-a-github-pages-remote-theme

[Jekyll remote theme]: https://github.com/benbalter/jekyll-remote-theme

[Jekyll front matter defaults]: https://jekyllrb.com/docs/configuration/front-matter-defaults/

[Prevent `favicon.ico` requests]: https://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests

[Jekyll Actions]: https://jekyllrb.com/docs/continuous-integration/github-actions/

[Jekyll Actions Demo]: https://github.com/MichaelCurrin/jekyll-actions-quickstart

[Deploy your Jekyll blog using Github Pages and Github Actions]: https://sujaykundu.com/blog/post/deploy-jekyll-using-github-pages-and-github-actions#/

[GitHub Profile]: https://github.com/settings/profile

[Personal Access Tokens]: https://github.com/settings/tokens
