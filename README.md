# MoMo – More, please!

Website for MoMo, themed activity boxes for children ages 3–5.
A plain HTML / CSS / JavaScript site. No build tools needed.

## What each file does

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `shop.html` | All boxes |
| `about.html` | About page (**replace the placeholder text with your own story**) |
| `faq.html` | Questions and answers |
| `contact.html` | Contact form (not connected to email yet) |
| `cart.html` | Shopping cart |
| `css/styles.css` | All colors, fonts and layout. Brand colors are at the top, in `:root` |
| `js/main.js` | Cart, mobile menu and pop-ups |
| `images/` | Logo and photos |
| `.github/workflows/deploy.yml` | Publishes the site automatically when you push to GitHub |

## See it on your computer

1. Install [VS Code](https://code.visualstudio.com/).
2. Open this folder in VS Code (File → Open Folder).
3. Install the extension **Live Server**, then right-click `index.html` → **Open with Live Server**.
   (Double-clicking `index.html` also works.)

Save a file and the browser refreshes by itself.

## Put it on GitHub (first time)

1. Install [Git](https://git-scm.com/downloads) and make a free account at github.com.
2. On github.com click **+ → New repository**. Name it `momo-website`. Leave it empty
   (no README, no .gitignore). Click **Create repository**.
3. In a terminal inside this folder, run these one at a time:

```bash
git init -b main
git add .
git commit -m "First version of the MoMo website"
git remote add origin https://github.com/YOUR-USERNAME/momo-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If it asks you to sign in, follow the prompts.

## Turn on the live website (GitHub Pages)

1. On your repository go to **Settings → Pages**.
2. Under **Source** choose **GitHub Actions**.
3. Open the **Actions** tab. Wait for "Deploy site to GitHub Pages" to show a green check (about a minute).
4. Your site is at `https://YOUR-USERNAME.github.io/momo-website/`.

## Everyday workflow

```bash
# 1. edit files in VS Code and check them in the browser
# 2. save them to Git
git add .
git commit -m "Describe what you changed"
# 3. send to GitHub (the site updates itself in about a minute)
git push
```

Tip: for bigger changes, work on a branch (`git switch -c halloween-box`), push it,
open a **Pull Request** on GitHub, then merge it. That is how teams work and it keeps `main` safe.

## Common edits

- **Change a price or product:** edit the card in `shop.html`, and the `PRODUCTS` list at the top of `js/main.js` for the cart.
- **Add a new box page:** copy `shop.html`, rename it, and link to it.
- **Change brand colors:** edit the variables at the top of `css/styles.css`.
- **Add a photo:** put it in `images/` and use `<img src="images/your-photo.jpg" alt="Describe it">`.
- **Use your own domain** (like momobox.com): Settings → Pages → Custom domain.

## Not finished yet

- **Checkout / payments:** needs a store service (Shopify Buy Button, Stripe Payment Links or Square). Easiest first step: a Stripe Payment Link for the Cooking Box.
- **Contact form and mailing list:** need a service such as Formspree or Mailchimp.
- **Placeholder text:** About and FAQ copy, and emoji tiles for boxes without photos yet.
