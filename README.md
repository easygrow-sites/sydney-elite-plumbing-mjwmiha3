# Sydney Elite Plumbing Website

A comprehensive, SEO-optimized plumbing services website built with Next.js 14.

## Business Details
- **Business Name:** Sydney Elite Plumbing
- **Service Niche:** Plumbing
- **Service Area:** Sydney, NSW
- **Business ID:** cmjwlzj7o00021ve0k3tmnqc9
- **Subdomain:** sydney-elite-plumbing-mjwmiha3

## Website Statistics
- **Total Services:** 12
- **Total Locations:** 45
- **Service Pages:** 12
- **Location Pages:** 45
- **Service+Location Combination Pages:** 540 (12 × 45)
- **Core Pages:** 6 (Home, About, Contact, Services Index, Locations Index, Blog)
- **Blog Pages:** 2 (Blog Index, Dynamic Post Pages)
- **Total Pages:** 605+

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

This will generate a static export in the `out/` directory.

## Features

- ✅ 605+ SEO-optimized pages
- ✅ Service+Location combination pages for maximum local SEO
- ✅ Mobile-first responsive design
- ✅ Contact form integrated with lead management API
- ✅ Blog infrastructure ready for content
- ✅ Schema markup for LocalBusiness
- ✅ Fast loading with Next.js 14
- ✅ Click-to-call functionality
- ✅ 24/7 emergency service messaging

## Directory Structure

```
├── app/
│   ├── [service]-in-[location]/   # 540 service+location pages
│   ├── about/
│   ├── blog/
│   │   └── [slug]/
│   ├── contact/
│   ├── locations/
│   │   └── [location]/            # 45 location pages
│   ├── services/
│   │   └── [service]/             # 12 service pages
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BlogCard.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LocationCard.tsx
│   └── ServiceCard.tsx
├── content/
│   └── blog/                      # Blog posts (JSON files)
├── lib/
│   ├── blog.ts
│   ├── locations.ts
│   └── services.ts
├── locations.json                 # 45 Sydney suburbs
├── services.json                  # 12 plumbing services
└── public/
```

## SEO Strategy

Each service+location page is optimized for:
- Local keywords: "[service] in [location]"
- Unique, relevant content
- Click-to-call CTAs
- Internal linking to related services and locations
- Mobile-responsive design
- Fast page load times

## Services

1. Emergency Plumbing
2. Blocked Drains
3. Hot Water Systems
4. Leak Detection
5. Pipe Relining
6. Bathroom Renovations
7. Kitchen Plumbing
8. Gas Fitting
9. Toilet Repairs
10. Tap Repairs
11. Stormwater Drainage
12. Sewer Services

## Service Areas

45 Sydney suburbs including:
- Sydney CBD
- Bondi
- Manly
- Parramatta
- Chatswood
- And 40 more...

## Contact Form

The contact form is integrated with the EasyGrow lead management system:
- **API Endpoint:** https://dashboard-sigma-six-16.vercel.app/api/leads/submit
- **Business ID:** cmjwlzj7o00021ve0k3tmnqc9

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Static Export (no server required)

## License

All rights reserved - Sydney Elite Plumbing
