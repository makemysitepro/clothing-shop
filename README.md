# StyleHub - Clothing Shop Website

A modern, production-ready clothing shop website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 16 App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Complete metadata, OpenGraph tags, and JSON-LD schema markup
- **Mobile-First Design**: Fully responsive across all devices
- **Performance Optimized**: Server components, optimized images, and fast loading
- **Lead Generation**: Contact forms, WhatsApp integration, and click-to-call
- **Product Categories**: Men, Women, Kids, and Accessories
- **Reusable Components**: DRY architecture with modular components

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Product category pages
│   └── layout.tsx         # Root layout with Header/Footer
├── components/
│   ├── ui/                # Reusable UI components
│   └── sections/          # Section components (Header, Footer, etc.)
├── constants/             # Site configuration and data
├── schemas/               # JSON-LD schema generators
├── seo/                   # SEO metadata helpers
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Customization

### Site Configuration

Edit `src/constants/index.ts` to update:
- Site name, tagline, and description
- Contact information (phone, email, WhatsApp)
- Business address and hours
- Social media links
- Navigation links

### Products

Add or modify products in `src/constants/index.ts` in the `FEATURED_PRODUCTS` array.

### Styling

All styling uses Tailwind CSS utility classes. Update `tailwind.config.ts` to customize:
- Colors
- Typography
- Spacing
- Breakpoints

### Fonts

The project uses:
- **Montserrat** for headings
- **Open Sans** for body text

Change fonts in `src/app/layout.tsx`.

## Adding Images

Place images in the `public/images/` directory:
- `/images/categories/` - Category images
- `/images/products/` - Product images
- `/images/testimonials/` - Customer photos
- `/images/og-image.jpg` - Social media preview image

## SEO & Schema

- SEO metadata is generated in `src/seo/metadata.ts`
- JSON-LD schemas are in `src/schemas/`
- Each page has unique metadata and canonical URLs

## Lead Capture

The site includes:
- Contact form with validation
- WhatsApp click-to-chat
- Click-to-call phone links
- Sticky CTAs on mobile

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Icons**: SVG icons
- **Image Optimization**: next/image

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved.
