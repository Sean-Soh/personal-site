---
title: About
eyebrow: About
lede: A short introduction. Who you are, what you do and what you care about.
permalink: /about/
---

Replace this with your story. A few paragraphs on your background, the problems you like working on, and what readers can expect from this site.

Keep it human. People who land here want to know whether you are someone they would enjoy working with.

## Experience

<ol class="timeline">
{%- for e in site.data.experience -%}
  <li>
    <span class="meta">{{ e.period }}</span>
    <h3>{{ e.title }} <span class="muted">· {{ e.org }}</span></h3>
    <p>{{ e.summary }}</p>
  </li>
{%- endfor -%}
</ol>

## Elsewhere

<div class="social">
{%- for s in site.data.social -%}{%- if s.url != "" -%}
  <a href="{{ s.url }}" aria-label="{{ s.name }}" title="{{ s.name }}">{% include icon.html name=s.icon %}</a>
{%- endif -%}{%- endfor -%}
</div>
