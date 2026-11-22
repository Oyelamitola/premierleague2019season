# Omotola Oyelami: personal website

A one-page personal brand site. It's plain HTML, CSS and JavaScript, so there's no build step and nothing to install.

```
index.html          all the content (text, roles, case studies)
styles.css          design; colours are at the top under :root
script.js           menu, light/dark toggle, scroll animations
assets/favicon.svg  browser tab icon
assets/og-image.png preview image shown when the link is shared on LinkedIn/WhatsApp
assets/portrait.jpg your photo goes here (square, 800×800 or larger)
```

## Common edits

- **Add your photo:** save it as `assets/portrait.jpg`. It replaces the "OO" monogram automatically.
- **Add a family or personal paragraph:** in `index.html`, find `FAMILY / PERSONAL` in the Background section and replace the comment with your own `<p class="reveal">…</p>`.
- **Update a role or number:** every role, metric and case study is plain text in `index.html`.
- **Preview locally:** open `index.html` in a browser.

## Putting it online (free)

**Netlify (simplest):** go to app.netlify.com/drop and drag this folder onto the page. You get a link like `omotola-oyelami.netlify.app`, which you can rename in Site settings.

**GitHub Pages:** in the repository, go to Settings → Pages, choose "Deploy from a branch", then pick the branch and `/ (root)`.

**Custom domain:** a domain like `omotolaoyelami.com` costs about $10–15 a year. Both Netlify and GitHub Pages can connect one under their domain settings.

### After it's live

Change the two lines in `index.html` that start with `<meta property="og:image"` and add `og:url` so they use the full address, for example:

```html
<meta property="og:image" content="https://your-domain.com/assets/og-image.png" />
<meta property="og:url" content="https://your-domain.com/" />
```

LinkedIn needs the full address to show the preview card. After you publish, paste the link into https://www.linkedin.com/post-inspector/ to refresh LinkedIn's cache.
