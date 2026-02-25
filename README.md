# Cass — Singer & Entertainer Website

Production-ready static website for the **Cass** singer/entertainer brand.
Built with pure HTML + CSS (no frameworks), designed for GitHub Pages hosting.

**Design:** Dark luxury aesthetic — matte black backgrounds, neon pink/magenta glow,
smoky stage atmosphere, spotlight lighting, high contrast.

---

## Running Locally

No build step required. Simply open `index.html` in any modern browser:

```bash
# Option 1 — double-click
open index.html        # macOS
start index.html       # Windows

# Option 2 — local dev server (optional, avoids any CORS quirks)
npx serve .            # Node.js — installs serve temporarily
python -m http.server  # Python 3 — then visit http://localhost:8000
```

---

## Publishing to GitHub Pages

1. Push (or upload) this repository to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Branch**, select `main` (or `master`) and the root folder `/`.
4. Click **Save**.
5. GitHub will provide a URL like `https://yourusername.github.io/repo-name/` within a minute or two.

> **Tip:** Make sure `index.html` is in the root of the repository (it is, by default).

---

## Asset Setup

All images and overlays referenced in the site live in the `/assets/` folder.

| Filename | Used in |
|---|---|
| `main-logo.jpg` | Navbar logo + Hero logo |
| `hero-background-smoke.jpg` | Hero section full-screen background |
| `smoke-overlay.png` | Hero overlay (`mix-blend-mode: screen`) |
| `glitter-overlay.png` | Hero overlay (`mix-blend-mode: overlay`) |
| `velvet-dark-section-background.jpg` | About section background |
| `microphone-stage.jpg` | About section image card |
| `stage-spotlight-texture.jpg` | Media section subtle background |
| `social-banner-background.jpg` | Gallery section background |
| `press-kit-background.jpg` | Press Kit section background |
| `booking-section-background.jpg` | Booking section background |
| `neon-divider-line.png` | Decorative divider between sections |

Place all files directly inside `/assets/` — no sub-folders needed.

### EPK / Download files

When ready, place the following files in `/assets/` to activate the Press Kit downloads:

- `assets/epk.pdf` — Full Electronic Press Kit
- `assets/press-photos.zip` — High-resolution press photos

---

## Replacing the Formspree Form ID

The booking form uses [Formspree](https://formspree.io) to handle submissions without a backend.

**Steps:**

1. Create a free account at [formspree.io](https://formspree.io).
2. Click **New Form** and give it a name (e.g. "Cass Booking").
3. Copy the **Form ID** from the embed snippet (looks like `xpwzabcd`).
4. Open `index.html` and find this line (around the `<form>` tag):

   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

5. Replace `YOUR_FORM_ID` with your real form ID:

   ```html
   action="https://formspree.io/f/xpwzabcd"
   ```

6. Save and push. Form submissions will now appear in your Formspree dashboard and be emailed to you.

---

## Updating Social Links

Search for `YOUR_HANDLE` / `YOUR_CHANNEL` / `YOUR_ARTIST_ID` / `YOUR_PAGE` in `index.html`
and replace with the real social profile URLs.

---

## Gallery Photos

To add real photos to the Gallery section, drop images into `/assets/` and update the
placeholder `<div>` tiles in `index.html` with `<img>` tags:

```html
<!-- Before -->
<div class="gallery-tile">
  <div class="gallery-tile-placeholder" aria-label="Gallery photo 1"> ... </div>
</div>

<!-- After -->
<div class="gallery-tile">
  <img src="assets/gallery-1.jpg" alt="Cass performing live, 2024" />
</div>
```

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox, responsive breakpoints
- No JavaScript frameworks, no build tools, no dependencies
- Hosting: **GitHub Pages** (static)

---

## Contact

**CassidyAccasia@gmail.com** &bull; Alabama &bull; Available to Travel
