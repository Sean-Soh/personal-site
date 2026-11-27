---
title: About
eyebrow: About
lede: Technical Art Manager at Riot Games, bridging art, engineering and game development to bring ambitious creative visions to life.
permalink: /about/
---

I'm a Technical Art Manager at Riot Games in Singapore, with 11+ years in game development, 10 years in TV and film, and 5 years managing Technical Art teams on League of Legends and Teamfight Tactics. My work spans real-time rendering, shader and material development, visual realization, performance optimization and technical art direction.

Over the years my focus has moved from hands-on technical problem-solving to building scalable Technical Art capabilities: developing teams, shaping technical strategy, improving production pipelines and creating stronger collaboration between Art, Engineering and Production.

I approach Technical Art with three principles:

- **Creative ambition deserves thoughtful technical execution.** Great visuals need a deep understanding of both artistic intent and engineering constraints.
- **Scalability matters as much as immediate delivery.** Sustainable tools, workflows and rendering systems let teams innovate without piling up unnecessary complexity.
- **Strong teams multiply technical impact.** Mentorship, clear ownership, knowledge sharing and real cross-disciplinary collaboration make Technical Artists better.

I enjoy connecting with fellow Technical Artists, Rendering Engineers, Art Directors and game development leaders to exchange ideas and advance the craft.

## Experience

<ol class="timeline">
{%- for e in site.data.experience -%}
  {%- assign work = site.projects | where: "studio", e.org | sort: "order" -%}
  <li>
    {%- if e.roles -%}
    <span class="meta">{{ e.period }}{% if e.location %} · {{ e.location }}{% endif %}</span>
    <h3>{{ e.org }}</h3>
    <ul class="roles">
      {%- for r in e.roles -%}
      <li><strong>{{ r.title }}</strong> <span class="muted">· {{ r.period }}</span></li>
      {%- endfor -%}
    </ul>
    {%- else -%}
    <span class="meta">{{ e.period }}{% if e.location %} · {{ e.location }}{% endif %}</span>
    <h3>{{ e.title }} <span class="muted">· {{ e.org }}</span></h3>
    {%- endif -%}
    <p>{{ e.summary }}</p>
    {%- if e.highlights -%}
    <ul class="highlights">
      {%- for h in e.highlights -%}<li>{{ h }}</li>{%- endfor -%}
    </ul>
    {%- endif -%}
    {%- if work.size > 0 -%}
    <ul class="tags timeline-work">
      {%- for p in work -%}<li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>{%- endfor -%}
    </ul>
    {%- endif -%}
  </li>
{%- endfor -%}
</ol>

## Education

<ol class="timeline">
  <li>
    <span class="meta">1999 – 2003</span>
    <h3>Bachelor, Computer Engineering <span class="muted">· National University of Singapore</span></h3>
  </li>
  <li>
    <span class="meta">1993 – 1998</span>
    <h3>Chinese High School</h3>
  </li>
</ol>

## Elsewhere

<div class="social">
{%- for s in site.data.social -%}{%- if s.url != "" -%}
  <a href="{{ s.url }}" aria-label="{{ s.name }}" title="{{ s.name }}">{% include icon.html name=s.icon %}</a>
{%- endif -%}{%- endfor -%}
</div>
