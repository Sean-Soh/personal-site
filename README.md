# personal-site

Sean Soh's personal brand website: a home for thoughts, knowledge sharing and business collaboration. Live at www.seansoh.com (GitHub Pages).

Built with [Jekyll](https://jekyllrb.com/), which GitHub Pages runs for you. You never need to build anything to publish: push to `main` and the site updates. Content is plain Markdown.

## Where things live

```
_config.yml         Site name, role line, email, navigation  ← edit first
_data/focus.yml     "What I focus on" chips on the home page
_data/social.yml    Contact icons (email, LinkedIn, GitHub, X)
_data/experience.yml  Timeline on the About page

_posts/             Writing. One Markdown file per post
_projects/          Projects / ventures / case studies
_resources/         Guides, templates, reading lists to share

index.html          Home: hero, focus, Projects / Writing / Resources rails, Let's connect
about.md            About page
work-with-me.md     Collaboration offerings and contact
writing/ projects/ resources/   Listing pages (generated from the folders above)

_layouts/  _includes/  assets/   Templates, styles (assets/style.css) and scripts
```

## Adding content

**A post:** create `_posts/YYYY-MM-DD-my-title.md`:

```markdown
---
title: "My title"
summary: One sentence shown on cards and in search results.
tags: [Business, Lessons]
hue: 200          # optional: colour of the generated cover (0-360)
# image: /assets/images/my-cover.jpg   # optional real cover image
---

Write here in Markdown.
```

It shows up on the home page, the Writing page (with tag filters), search and the RSS feed automatically.

**A project or resource:** add a Markdown file to `_projects/` or `_resources/` with the same fields plus `meta` (the small line above the title, e.g. `Founder · 2024 – now`), `order` (position), and optional `link` / `link_label`.

## Features

- Light and dark mode (follows the system, with a toggle)
- Sticky header, mobile menu, site search (press `/`)
- Horizontal card rails with arrows on the home page
- Tag filters on Writing (shareable via `/writing/?tag=business`)
- RSS feed at `/feed.xml`, Open Graph tags for link previews

## Preview locally (optional)

Needs Ruby. From the repo folder:

```
bundle install
bundle exec jekyll serve
```

Then visit http://localhost:4000.

## To do

- [ ] Set your role line and contact email in `_config.yml` and `_data/social.yml`
- [ ] Add your LinkedIn URL in `_data/social.yml`
- [ ] Rewrite the hero headline and intro in `index.html`
- [ ] Replace placeholder posts, projects and resources
- [ ] Fill in About and Work with me
