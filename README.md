# Omotola Oyelami: personal website

**Live at https://www.tolaoyelami.org** (Netlify project: `omotola-oyelami`; the old omotola-oyelami.netlify.app address forwards here).

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

## Updating the live site

The site is hosted on Netlify as the project `omotola-oyelami`. It is not connected to GitHub, so a push does not update it.
To publish changes, either ask Claude to redeploy it, or open the project at app.netlify.com, go to Deploys, and drag this folder onto the upload area.

The public site is open to everyone. Preview deploys require a Netlify team login.

### Custom domain

A domain like `omotolaoyelami.com` costs about $10–15 a year. Add it under Domain management in the Netlify project, then update `og:url`, `og:image` and the canonical link at the top of `index.html` to the new address.

After any change to the preview image or text, paste the link into https://www.linkedin.com/post-inspector/ to refresh LinkedIn's cached preview.
