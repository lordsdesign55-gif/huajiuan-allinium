# Design Handoff — Huajiuan Allinium

## 0. Approval Record

- **Homepage options shown:** Option A (Faithful), Option B (Improved), Option C (Bold)
- **Selected option:** Option C — Bold
- **Preview artifact file paths:**
  - `output/huajiuan-allinium/designs/homepage-option-a.png`
  - `output/huajiuan-allinium/designs/homepage-option-b.png`
  - `output/huajiuan-allinium/designs/homepage-option-c.png`
- **Pencil project paths used:**
  - `output/huajiuan-allinium/designs/homepage-directions.pen`
  - `output/huajiuan-allinium/designs/design.pen`
- **Source audit:** `output/huajiuan-allinium/source-audit.json`
- **Full design export:** `output/huajiuan-allinium/designs/design.png`
- **Locked constraints:**
  - Dark hero/header/footer on Option C
  - Sharp corners (radius 0) on Option C
  - Primary brown `#5D3A1A`, accent orange `#F97316`
  - Inter font family

## 1. Design Summary

Huajiuan Allinium — барилгын шилэн/металл пасад, гадна дуулаалга, тоноглолын B2B компани. Хитад улсын Huajian Aluminium компанийн EOSS брендийн шилэн пасадын бүтээгдэхүүнийг Монгол улсад албан ёсоор нэвтрүүлж, борлуулж, угсарч байна. Сайт нь орчин үеийн, мэргэжлийн, итгэл үнэмшилтэй дүр төрхтэй. Сонгосон чиглэл: **Bold** — хар background, кино шиг hero, хатуу ирмэг, minimal интерфейс.

## 2. Visual Direction

- **Style:** Bold industrial, minimal, high-contrast
- **Primary color:** `#5D3A1A` (хүрэн)
- **Secondary:** `#4A2E15`
- **Accent:** `#F97316` (улбар шар гарчиг)
- **Background:** `#FFFFFF`
- **Foreground:** `#111827`
- **Muted:** `#F8F9FA`
- **Dark surfaces:** `#111827`
- **Typography:** Inter (display + body)
- **Motion level:** 3 (Expressive)

## 3. Motion & Interaction

- Scroll-triggered fade-in-up on sections
- Hover: buttons scale 1.02, cards lift with shadow
- Links: color transition + underline
- Form inputs: focus border color change
- Hero: static cinematic, no heavy animation to keep performance
- Respect `prefers-reduced-motion`

## 4. Responsive Behavior

- Desktop: 1440px max-width, multi-column grids
- Tablet: 2-column grids, reduced spacing
- Mobile: single column, hamburger nav, full-width CTAs
- Breakpoints: 375px, 768px, 1280px

## 5. Section-by-Section Layout Guidance

### Header
- Dark background on Option C
- Logo left, nav right
- Mobile: hamburger menu

### Hero
- Full-width dark background
- Kicker tag, large headline, subtitle, 2 CTAs
- Left-aligned text

### Services
- 4 dark cards in a row, first card is **EOSS шилэн пасад** (Passive House certified)
- Each card: title + short description
- No icons (minimal)

### About
- Light gray background
- Company intro includes EOSS official partnership statement
- Left text with stats, right image placeholder
- 3 stats: 4+ Жил, 50+ Төсөл, 100% Стандарт

### Gallery
- Full-width 2x2 grid of large image placeholders on homepage, each labeled with project name + system type
- Gallery page: 3x3 grid with captions, intro text states projects use Huajian Aluminium / EOSS systems
- Image placeholders to be replaced with real project photography during CMS seeding

### Blog
- 3 cards with image, title, excerpt
- Header with title + "Бүх мэдээ" CTA

### Contact CTA
- Primary brown background
- Centered headline + button

### Footer
- Dark background
- Brand info left, 3 nav columns right

## 6. Component Inventory

- Header
- Footer
- PageHero (used on /about, /services, /gallery, /blog, /contact)
- ServiceCard
- ProjectGallery
- BlogCard
- ContactForm
- Button variants: primary, secondary/outline, dark

## 7. Animation Rules

- Use `framer-motion` for scroll reveals and micro-interactions
- Lenis for smooth scrolling
- Duration: 150ms micro, 250ms normal, 400ms slow
- Easing: `cubic-bezier(0.4,0,0.2,1)`

## 8. Accessibility

- WCAG 2.1 AA contrast
- Keyboard navigation
- Focus indicators
- Alt text for images
- Form labels

## 9. Content Tone

- Mongolian, professional, direct
- B2B audience
- Use "Үнийн санал авах" as primary CTA

## 10. Frontend Build Map

- Homepage: Header → Hero → Services → About → Gallery → Blog → Contact CTA → Footer
- `/about`: PageHero → Company text → Values grid
- `/services`: PageHero (with EOSS badge in subtitle) → Service list with detailed technical sections:
  - Шилэн пасад (EOSS mention)
  - **EOSS бренд** — Huajian Aluminium-ийн албан ёсны хэрэглэгч, брендийн давуу талууд, EOSS vs энгийн шилэн пасад харьцуулалт
  - Металл пасад, Гадна дуулаалга, Тоноглол
  - **Low-E шил** — Монголын -40°C ~ +40°C уур амьсгалд зориулсан техник үзүүлэлт, 2/3 давхар харьцуулалт, дэлхийн хүйтэн уур амьсгалын пасадны стандартууд (ASTM E2190, EN 1279-2, EN 673, CSA A440.2, GOST 30674, Passive House), budagtai шил + гэрлийн дамжуулалт бууруулах визуал
  - Хатсан шил, Unitized Glass System, Alucobond стандарт, металл хавтан төрөл/өнгө/техник үзүүлэлт, Rockwool стандарт, төмөр тогтоогч бүрдэл
- `/unitized-glass-system`: PageHero → танилцуулга → давуу талууд → техник үзүүлэлт → төслийн жишээ
- `/gallery`: PageHero → 3x3 image grid
- `/blog`: PageHero → blog list rows
- `/contact`: PageHero → contact info + form

## 11. erxes CMS Field Map

- **Pages:** home, about, services, unitized-glass-system, gallery, blog, contact
- **Page slugs:** `/`, `/about`, `/services`, `/unitized-glass-system`, `/gallery`, `/blog`, `/contact`
- **Header menu:** Нүүр, Бидний тухай, Үйлчилгээ, Unitized Glass System, Зураг, Мэдээ, Холбоо барих
- **Footer menu:** same pages + legal links
- **Blog:** required, category optional
- **Translations:** none (only mn)

## 12. Setup Commands

```bash
pnpm add framer-motion clsx tailwind-merge lucide-react next-themes
pnpm add lenis
```

## 13. Notes

- Source site `seele.com` was audited and used as structural reference.
- Option C is deliberately bold and dark; do not soften corners or add gradients beyond the defined palette.
- Image placeholders in design are to be replaced with real project photography during CMS seeding.
