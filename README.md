# personal-site

Sean Soh's personal brand website: a home for thoughts, knowledge sharing, and business collaboration opportunities.

## What's here

A plain HTML and CSS starter with no build step, so you can open any file in a browser and see it.

```
index.html            Home page: intro, recent writing, collaboration call-to-action
about.html            About you, with links elsewhere
work-with-me.html     Collaboration and contact page
writing/index.html    List of all posts
writing/hello-world.html  Example post (copy this to write a new one)
assets/style.css      All styling (light and dark mode)
```

## Preview locally

Open `index.html` in your browser, or run a tiny local server from the repo folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Writing a new post

1. Copy `writing/hello-world.html` to `writing/your-post-name.html`.
2. Edit the title, date, and content.
3. Add a link to it in `writing/index.html` (and on the home page under "Recent writing").

## Publishing with GitHub Pages

1. On GitHub, go to **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. After a minute the site will be live at `https://sean-soh.github.io/personal-site/`.

A custom domain can be added on the same settings page later.

## To do

- [ ] Replace placeholder text on About and Work with me
- [ ] Set your real contact email in `work-with-me.html`
- [ ] Add your LinkedIn link in `about.html`
- [ ] Write the first real post
