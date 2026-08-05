# EXD site

A Jekyll site, built for GitHub Pages, split into two parts:

## The public marketing site (root of the repo)

This is a normal Jekyll site — GitHub Pages builds it automatically on every push, no build step needed on your end.

**To edit content**, go to GitHub, open the file, click the pencil icon, edit, commit. The site rebuilds itself within a minute or two.

- `_data/services.yml` — the six services listed on the Services page and Home
- `_data/steps.yml` — the six How We Work stages
- `_data/disciplines.yml` — the six disciplines on the About page
- `_data/cases.yml` — the four case studies (used on Work, Home teasers, and the individual case pages)
- `_data/nav.yml` — the main navigation links
- `index.md`, `services.md`, `how-we-work.md`, `about.md`, `work.md`, `start-a-project.md` — the page shells and any copy that isn't in a data file
- `_includes/header.html`, `_includes/footer.html` — the nav and footer, shared across every page
- `_layouts/default.html` — the outer page shell (fonts, meta tags)
- `_layouts/case.html` — the template used for every individual case study page
- `assets/css/main.css` — all visual styling for the public site
- `assets/js/main.js` — mobile menu, header scroll state, scroll-reveal animation

## The internal tool (`/admin`)

Deliberately **not** part of the Jekyll build — plain static HTML/CSS/JS, so it's excluded from the templating system on purpose. This is Stage 1: a working prototype with no backend yet.

- `admin/login.html`, `admin/pipeline.html`, `admin/request.html`, `admin/capacity.html`
- `admin/assets/css/admin.css` — separate visual language from the public site (light, high-contrast, functional)
- `admin/assets/js/data.js` — seed data + `localStorage` persistence for this prototype stage
- `admin/assets/js/auth.js` — a simple session flag, not real authentication yet

**Known limitation, expected at this stage:** anything you change in the pipeline (status, notes) is saved to your browser's `localStorage`, not a real database. It'll persist for you, in that browser, but won't sync across devices or people, and a public form submission on `/start-a-project/` doesn't go anywhere yet. That's Stage 2.

## Stage 2 (later, not built yet)

- Connect a free-tier backend (Supabase) so pipeline data is real and shared
- Wire the public intake form to write into it
- Add an email notification on new submissions
- Add a real login

## Local preview (optional)

If you want to preview changes before pushing, you'll need Ruby + Jekyll installed locally:

```
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Not required — GitHub Pages will build it for you either way.
