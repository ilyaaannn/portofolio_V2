# Portfolio Website — React + Tailwind CSS

A single-page portfolio landing page with 6 main navigation items::
**Home · About Me · Skills · Experience · Projects · Contact**

Built with React 19 + Vite, Tailwind CSS v4, and Framer Motion for animations.
The color palette uses only 3 colors (primary / secondary / accent) on a white background
to keep the interface looking clean and bright without feeling cluttered.

## How To Running

Ensure [Node.js](https://nodejs.org) version 18 or higher is installed.

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. Code changes will automatically hot-reload.

To build the production version (used when deploying):

```bash
npm run build
```

The output will be generated in the `dist/` directory — this is the folder you upload to your
hosting provider.

You can also preview the production build locally with:

```bash
npm run preview
```

## How to Customize Content

**Almost all text content resides in a single file:** `src/data/portfolioData.js`.

Simply replace the contents of this file with your own details — name, bio, email, skills, certifications, work experience, and projects. You do not need to touch any components in `src/components/` **at all**.

Here is what you can customize in that file:

| Section                                                | Variabel          |
| ------------------------------------------------------ | ----------------- |
| Name, role, bio, contact, social media                 | `personalInfo`    |
| Quick facts in the hero section (location, exp, focus) | `quickFacts`      |
| Tech skills categorized                                | `skillCategories` |
| Certifications & awards                                | `certifications`  |
| Work experience                                        | `experiences`     |
| Project list                                           | `projects`        |

Tech skill icons use [`react-icons/si`](https://react-icons.github.io/react-icons/icons/si/)
(Simple Icons) — you can search for other icon names on their website if you want to add or
modify your tech stack. Certification icons use [`lucide-react`](https://lucide.dev/icons/).

### Profile Picture & CV

- The About section uses an initial monogram instead of an image so that this template can be used
  immediately without additional assets. If you prefer to use a real photo, replace the
  `<span className="text-gradient">{personalInfo.initials}</span>` block in
  `src/components/About.jsx` with in `<img>` tag.
- The "Download CV" button in the hero section links to `/cv.pdf`. Place your CV file inside the
  `public/` folder and name it `cv.pdf` for the button to work seamlessly.

### Contact Form

By default, the form in the Contact section **does not require a backend** — upon submission,
it opens the visitor's mail client with a pre-filled email template
addressed to `personalInfo.email`. If you prefer the messages to be sent seamlessly
in the background (without opening an email app), replace the `handleSubmit` function in
`src/components/Contact.jsx` with integrations like
[EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/).

## Customizing Colors & Fonts

All design tokens are defined in `src/index.css`, inside the `@theme` directive:

```css
@theme {
  --color-primary-500: #4f63d2;   /* primary color */
  --color-secondary-500: #17a398; /* Secondart color */
  --color-accent-500: #f5a623;    /* accent/highlight color */
  ...
}
```

Simply update these hex values, and all components across the site
will adapt automatically (as they utilize classes like `bg-primary-500`,
`text-secondary-600`, etc. — no colors are hardcoded in the components).

Fonts are managed via the `--font-display` variable (Space Grotesk, for headings),
`--font-body` (Inter, for body text), and `--font-mono` (JetBrains Mono, for
code-styled tags). These fonts are loaded from Google Fonts via `index.html`.

## Directory Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Container.jsx      # page width wrapper
│   │   └── SectionHeading.jsx # section titles + JSX-tag-style labels
│   ├── Navbar.jsx             # nav + scroll-spy + mobile menu
│   ├── Hero.jsx               # Home — includes the typing "code card" animation
│   ├── About.jsx              # About Me + Certifications & Awards
│   ├── Skills.jsx             # Tech Skills categorized
│   ├── Experience.jsx         # Work experience timeline
│   ├── Projects.jsx           # Project card grid
│   ├── Contact.jsx            # Contact info + form
│   └── Footer.jsx             # Footer + back-to-top button
├── data/
│   └── portfolioData.js       # ALL CONTENT IS MANAGED HERE
├── utils/
│   └── animations.js          # shared Framer Motion animation variants
├── App.jsx
├── main.jsx
└── index.css                  # color tokens, typography, and base styles
```

## Deployment

The easiest way to deploy is by connecting this repository to [Vercel](https://vercel.com) or
[Netlify](https://netlify.com) — can simply link your GitHub repository or upload the
`dist/` folder generated from `npm run build`, without any extra configuration.

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) — animation engine
- [lucide-react](https://lucide.dev/) & [react-icons](https://react-icons.github.io/react-icons/) — icon libraries
