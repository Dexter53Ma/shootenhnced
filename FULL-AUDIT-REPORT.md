# Full SEO Audit Report — ShootYourListing

**Date:** June 22, 2026  
**Domain:** www.shootyourlisting.com  
**Framework:** Next.js 16.2.9 (React 19.2.4)  
**Pages Crawled:** 20 (13 static + 6 blog posts + 1 dynamic blog index)

---

## Executive Summary

### Overall SEO Health Score: 52/100

| Category | Score | Weight |
|----------|-------|--------|
| Technical SEO | 65/100 | 22% |
| Content Quality | 40/100 | 23% |
| On-Page SEO | 70/100 | 20% |
| Schema / Structured Data | 35/100 | 10% |
| Performance (CWV) | 30/100 | 10% |
| AI Search Readiness | 48/100 | 10% |
| Images | 25/100 | 5% |

### Top 5 Critical Issues
1. **54 MB hero video** destroying LCP and page load
2. **67 MB of unoptimized JPGs** (55 files, avg 1.2 MB each)
3. ~~**Blog posts missing from sitemap** — 6 URLs invisible to Google~~ ✅ FIXED
4. ~~**No `llms.txt`** — invisible to AI search (ChatGPT, Perplexity, AI Overviews)~~ ✅ FIXED
5. ~~**BreadcrumbList schema is hardcoded wrong** — same 6-item nav list on every page~~ ✅ FIXED

### Top 5 Quick Wins
1. ~~Create `public/llms.txt` with business info (10 min)~~ ✅ DONE
2. ~~Add 6 blog posts to `public/sitemap.xml` (15 min)~~ ✅ DONE
3. ~~Fix placeholder phone number on Contact page (2 min)~~ ✅ DONE
4. ~~Add `FAQPage` schema to Photography Pricing page (20 min)~~ ✅ DONE
5. ~~Add `twitter` card metadata to layout (5 min)~~ ✅ DONE

---

## 1. Technical SEO

### What's Working ✅
- `robots.txt` exists with correct `Allow: /` and `Disallow: /api/`
- Sitemap referenced in robots.txt
- Canonical URLs on every page via `alternates.canonical`
- `metadataBase` set to `https://www.shootyourlisting.com`
- `poweredByHeader: false` (removes X-Powered-By)
- `compress: true` (gzip enabled)
- Strong security headers (HSTS, X-Frame-Options, CSP-lite)
- Image optimization configured (AVIF/WebP, device sizes)

### Issues Found ❌

| Issue | Severity | Detail |
|-------|----------|--------|
| Static sitemap (no blog posts) | ~~**Critical**~~ ✅ FIXED | ~~`public/sitemap.xml` lists 13 pages but **misses all 6 `/blog/[slug]` URLs**.~~ Now includes all 20 URLs. |
| No Next.js `sitemap.ts` | High | Using static XML instead of dynamic generation. Blog posts and future pages won't auto-include. |
| No custom 404 page | Medium | No `not-found.tsx`. Next.js default 404 is used. |
| No `hreflang` tags | Medium | Navigation offers EN/FR toggle but no `hreflang` tags exist. Language toggle is non-functional. |
| No Google/Bing verification meta | Low | No site verification tags found. |
| 3 render-blocking Typekit font `<link>` tags | High | `layout.tsx` loads "the-seasons" font from `use.typekit.net` with no `font-display` control. |

---

## 2. On-Page SEO

### What's Working ✅
- Every page has unique `<title>` with brand name
- Every page has unique `<meta description>`
- Every page has Open Graph tags (title, description, url, type)
- Every page has canonical URL
- Heading hierarchy is correct (H1 > H2 > H3)
- Blog posts use `generateMetadata()` for dynamic SEO

### Issues Found ❌

| Issue | Severity | Detail |
|-------|----------|--------|
| No `openGraph.images` on ANY page | **Critical** | Zero OG images across all 20 pages. Social shares on Facebook, LinkedIn, Slack, Twitter show no preview image. |
| No `twitter` card metadata | **Critical** | No `twitter:card`, `twitter:title`, `twitter:description`, or `twitter:image` anywhere. |
| Blog posts use `openGraph.type: "website"` | High | Should be `"article"` for blog posts. Missing `article:published_time`, `article:author`. |
| Blog posts don't use `post.image` in OG | High | The `post.image` field exists but is never passed to metadata. |
| Placeholder phone number | ~~**Critical**~~ ✅ FIXED | ~~Contact page shows `+212 6 00 00 00 00` (placeholder).~~ Now shows real `+212 6 21 18 94 96`. |
| Broken privacy consent text | High | "for details on how we handle your data" — grammatically broken, missing privacy policy link. |
| Non-functional pricing buttons | High | Drone and Videography pricing page plan buttons are `<button>` elements with no navigation. |

---

## 3. Schema / Structured Data

### What's Working ✅
- LocalBusiness schema with name, phone, email, address, geo, areaServed, serviceType
- BreadcrumbList schema present (but hardcoded)
- `metadataBase` set correctly for resolving relative URLs

### Issues Found ❌

| Issue | Severity | Detail |
|-------|----------|--------|
| BreadcrumbList is hardcoded static | ~~**Critical**~~ ✅ FIXED | ~~Same 6-item nav list on every page.~~ Removed from layout; dynamic per-page breadcrumbs added to blog posts. |
| `sameAs: []` is empty | High | No social media profiles linked in LocalBusiness schema. |
| Missing `streetAddress` | High | LocalBusiness address only has city/country. Footer shows "Office 1204, Media Hub Tower". |
| Missing `image`/`logo` | High | No logo specified. Google requires image for rich snippet eligibility. |
| No `WebSite` + `SearchAction` schema | Medium | Missing Google Sitelinks Search Box opportunity. |
| No `FAQPage` schema | **Critical** | Photography Pricing page has 3 FAQ entries rendered as HTML but zero JSON-LD. Massive missed rich snippet opportunity. |
| No `Article`/`BlogPosting` schema | **Critical** | 6 blog posts with rich content but no structured data. Missing author, datePublished, image. |
| No `Service` schema | Medium | 3 service pages describe offerings but lack Service structured data. |
| No `Product`/`Offer` schema | Medium | Pricing pages define clear packages with prices but no Offer schema. |
| LocalBusiness `<script>` in `<body>` | Low | Should be in `<head>` for consistency. |

---

## 4. Content Quality & E-E-A-T

### E-E-A-T Score: 4/10

| Signal | Status |
|--------|--------|
| Team bios with credentials | ❌ No bios, no photos, no credentials for 3 listed team members |
| Named expertise | ❌ All content authored as "ShootYourListing Team" |
| Client testimonials with identity | ⚠️ 4 testimonials, all anonymous (no names, companies, photos) |
| Portfolio case studies | ❌ Pure image gallery with zero project descriptions |
| Awards / recognition | ❌ "AwardsSection" shows platform logos, not actual awards |
| Source citations for statistics | ❌ Stats like "118% more views" have no source links |
| Business hours | ❌ Not listed anywhere |
| Physical address | ✅ Present on Contact page and Footer |
| SSL / HTTPS | ✅ Enforced |

### Thin Content Pages (under 300 words)

| Page | Words | Assessment |
|------|-------|------------|
| `/portfolio` | ~30 | **CRITICAL** — Zero descriptive text |
| `/` (Homepage) | ~100 | **THIN** — Almost entirely visual |
| `/services/photography-and-videography` | ~250 | **THIN** |
| `/services/drone-footage` | ~200 | **THIN** |
| `/services/virtual-tours` | ~200 | **THIN** |
| `/pricing/videography` | ~150 | **THIN** |
| `/pricing/custom` | ~150 | **THIN** |
| `/contact-us` | ~100 | **THIN** — Missing business hours |
| `/be-an-agent` | ~200 | **THIN** |

### Content Contradictions
- **"500+ Properties"** (Homepage) vs **"25+"** (About page) — same stat, different numbers
- **Phone number mismatch** — Contact page placeholder vs Footer real number

### Internal Linking Gaps
- Blog posts have **zero internal links** to service or pricing pages
- Service pages don't cross-link to each other
- Service pages don't link to their pricing pages
- Portfolio has no links to services
- "Be An Agent" page not in navigation or footer
- No visual breadcrumbs on any page

---

## 5. Performance (Core Web Vitals)

### Estimated Performance Score: 30/100

| Metric | Risk | Detail |
|--------|------|--------|
| **LCP** | 🔴 Critical | 54 MB hero video + 67 MB unoptimized images + 20 CSS background-image bypassing next/image |
| **CLS** | 🟡 Medium | Hero has fixed dimensions (good), but images missing explicit sizing |
| **INP** | 🔴 Critical | 28 client components, framer-motion on 13 components, 3 unthrottled scroll listeners |

### Critical Performance Issues

| Issue | Impact |
|-------|--------|
| 54.1 MB hero MP4 video | LCP delayed by seconds |
| 55 JPGs totaling 67 MB | Average 1.2 MB per image |
| 20 CSS `background-image` bypassing next/image | No WebP/AVIF, no lazy loading, no responsive sizing |
| Zero `next/dynamic` usage | Everything eagerly loaded |
| `framer-motion` in 13 components | ~50-80 KB extra JS on every page |
| `AiSupportAgent` loaded on every page via layout | Hydration cost on every route |
| `BookingForm` (648 lines) bundled with Navigation | Available on every page even when hidden |
- 3 unthrottled scroll listeners causing re-renders on every frame
- Only 1 image uses `priority` prop
- 3 render-blocking Typekit `<link>` tags
- Entire page tree is client components (no SSR benefits)

---

## 6. AI Search Readiness (GEO)

### GEO Score: 4.8/10

| Category | Score |
|----------|-------|
| `llms.txt` | ~~0/10 — Does not exist~~ ✅ CREATED | Now at `public/llms.txt` with full business info for AI search |
| `ai-plugin.json` | 0/10 — Does not exist |
| AI Agent data exposure | 3/10 — Great data in SYSTEM_PROMPT, zero server-side exposure |
| Content citability | 7/10 — Good factual content, weak source attribution |
| Brand consistency | 9/10 — Excellent, one placeholder phone to fix |
| Heading hierarchy | 8/10 — Good structure |
| Featured snippet optimization | 5/10 — FAQ content exists, no FAQ schema |
| Blog structure | 6/10 — Good content, missing Article schema |
| Crawlability | 10/10 — Fully open, proper sitemap and canonicals |

### Missing AI Files
- `public/llms.txt` — Critical for ChatGPT, Perplexity, AI Overviews
- `public/.well-known/ai-plugin.json` — AI assistant discovery
- No `speakable` schema for voice assistants

---

## 7. Priority Action Plan

### 🔴 CRITICAL (Fix Immediately)

| # | Issue | Est. Time |
|---|-------|-----------|
| 1 | Compress hero video from 54 MB to <5 MB (WebM/H.265) | 1 hour |
| 2 | Optimize 55 JPGs — compress to <200 KB each, convert to WebP | 2 hours |
| 3 | ~~Add 6 blog posts to `public/sitemap.xml`~~ ✅ | ~~15 min~~ |
| 4 | ~~Create `public/llms.txt`~~ ✅ | ~~10 min~~ |
| 5 | ~~Fix placeholder phone on Contact page~~ ✅ | ~~2 min~~ |
| 6 | ~~Add `openGraph.images` to layout~~ ✅ | ~~10 min~~ |
| 7 | ~~Add `twitter` card metadata to layout~~ ✅ | ~~5 min~~ |
| 8 | ~~Fix BreadcrumbList — make it dynamic per-page or remove~~ ✅ | ~~30 min~~ |

### 🟠 HIGH (Fix Within 1 Week)

| # | Issue | Est. Time |
|---|-------|-----------|
| 9 | ~~Add `FAQPage` schema to Photography Pricing page~~ ✅ | ~~20 min~~ |
| 10 | ~~Add `Article`/`BlogPosting` schema to all 6 blog posts~~ ✅ | ~~1 hour~~ |
| 11 | ~~Create `public/.well-known/ai-plugin.json`~~ ✅ | ~~10 min~~ |
| 12 | Fix `sameAs` in LocalBusiness — add social profiles | 10 min |
| 13 | ~~Add `streetAddress` to LocalBusiness schema~~ ✅ | ~~5 min~~ |
| 14 | ~~Add `image`/`logo` to LocalBusiness schema~~ ✅ | ~~5 min~~ |
| 15 | ~~Fix blog `openGraph.type` from `"website"` to `"article"`~~ ✅ | ~~5 min~~ |
| 16 | ~~Fix broken privacy consent text on Contact form~~ ✅ | ~~10 min~~ |
| 17 | ~~Make Drone/Videography pricing buttons functional links~~ ✅ | ~~15 min~~ |
| 18 | Self-host "the-seasons" font (remove Typekit `<link>` tags) | 1 hour |

### 🟡 MEDIUM (Fix Within 1 Month)

| # | Issue | Est. Time |
|---|-------|-----------|
| 19 | Add 1,000+ words to each service page | 3 hours |
| 20 | Add internal links from blog posts to service/pricing pages | 1 hour |
| 21 | Cross-link service pages to each other | 30 min |
| 22 | Add portfolio case studies with descriptions | 2 hours |
| 23 | Add real team bios with credentials on About page | 1 hour |
| 24 | Attribute testimonials with real client names | 30 min |
| 25 | Add `WebSite` + `SearchAction` schema | 15 min |
| 26 | Add `Service` schema to 3 service pages | 30 min |
| 27 | Add `Product`/`Offer` schema to pricing pages | 1 hour |
| 28 | Convert static sitemap to Next.js `sitemap.ts` | 30 min |
| 29 | Lazy-load `AiSupportAgent` with `next/dynamic` | 10 min |
| 30 | Lazy-load `BookingForm` with `next/dynamic` | 10 min |
| 31 | Replace CSS `background-image` with `next/image` | 3 hours |
| 32 | Add `priority` to above-the-fold images | 15 min |
| 33 | Throttle scroll listeners in Navigation and Carousel | 30 min |
| 34 | Add business hours to Contact page | 10 min |
| 35 | Add "Be An Agent" to navigation and footer | 15 min |
| 36 | Resolve "500+" vs "25+" property count contradiction | 5 min |

### 🟢 LOW (Backlog)

| # | Issue | Est. Time |
|---|-------|-----------|
| 37 | Create custom `not-found.tsx` page | 30 min |
| 38 | Add `hreflang` tags if FR version is built | 1 hour |
| 39 | Add Google/Bing verification meta tags | 5 min |
| 40 | Replace `framer-motion` scroll animations with CSS | 4 hours |
| 41 | Convert client components to server components where possible | 4 hours |
| 42 | Add `speakable` schema for voice assistants | 30 min |
| 43 | Reduce Manrope font weights from 5 to 3 | 10 min |
| 44 | Remove unused Montserrat font | 5 min |
| 45 | Replace `react-icons` with inline SVGs | 30 min |

---

## 8. What's Working Well

- ✅ Professional visual design and consistent branding
- ✅ Proper SEO metadata on all pages (title, description, OG, canonical)
- ✅ Strong security headers (HSTS preload, X-Frame-Options, X-XSS-Protection)
- ✅ Image format optimization configured (AVIF/WebP)
- ✅ Blog content quality is good — well-structured, informative
- ✅ Clean heading hierarchy on all pages
- ✅ Accessibility: skip-to-content link, aria-labels
- ✅ robots.txt properly configured
- ✅ AI Support Agent with 12-language fallback system
- ✅ Custom calendar in booking form
- ✅ Modern sticky header with scroll animations

---

*Report generated by SEO Audit Agent — June 22, 2026*
