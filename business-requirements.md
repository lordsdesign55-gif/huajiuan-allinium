# Business Requirements Document — Huajiuan Allinium

> **Version:** 1.0  
> **Date:** 2026-06-23  
> **Author:** Business Analyst (AI)  
> **Status:** Draft

---

## 1. Executive Summary

Huajiuan Allinium нь 4 жилийн туршлагатай, барилгын салбарт шилэн пасад, металл пасад, барилгын гадна дуулаалга, дагалдах хэрэгсэл тоноглолын худалдаа болон угсралтын үйлчилгээ үзүүлдэг мэргэжлийн компани юм. Энэхүү вэб сайт нь B2B захиалагчдад чанартай бүтээгдэхүүн, ажлын өндөр бүтээмж, өрсөлдөхүйц үнээр үйлчилдэг компанийн мэдээллийг танилцуулах, үнийн санал авах хүсэлт хүлээн авах, бүтээгдэхүүн болон үйлчилгээний каталогыг харуулах, олон улсын чанартай брэндүүдийг нэвтрүүлэх зорилготой.

Сайт нь орчин үеийн, мэргэжлийн, итгэл үнэмшилтэй дүр төрхтэй байх бөгөөд монгол хэл дээр ажиллана.

---

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|---|---|---|
| 1 | B2B захиалга, үнийн саналын хүсэлт нэмэгдүүлэх | Холбоо барих/үнэ авах хүсэлтийн тоо | Сар бүр 10+ хүсэлт |
| 2 | Бүтээгдэхүүн болон үйлчилгээ танилцуулах | Үйлчлүүлэгчийн сайт дээр өнгөрүүлсэн хугацаа | 3+ минут |
| 3 | Брэндийн итгэл үнэмшил бий болгох | Хандалт, давтан хандалт | Сарын хандалт 500+ |
| 4 | Олон улсын чанартай брэндүүдийг нэвтрүүлэх | Брэндийн хуудас, мэдээний тоо | 4+ брэндийн танилцуулга |

---

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|---|---|---|
| Owner / Director | Huajiuan Allinium management | Strategy, branding, final approval |
| Sales / Operations | Sales team | Lead response, quotation, project execution |
| Marketing / Content | Marketing team | Updates, blog posts, project gallery |
| Development / IT | External partner / erxes admin | CMS, deployment, maintenance |
| End users | B2B clients, contractors, architects | Browse services, request quotes, contact |

---

## 4. Scope

### 4.1 In-scope

- Орчин үеийн, мэргэжлийн бизнес вэб сайт
- Нүүр хуудас (hero, бидний тухай, үйлчилгээ, зураг, мэдээ, холбоо барих)
- Бидний тухай хуудас
- Үйлчилгээ хуудас (шилэн пасад, металл пасад, гадна дуулаалга, дагалдах тоноглол)
- Зургийн цомог / төслийн gallery
- Мэдээ / блог хэсэг
- Холбоо барих хуудас + холбоо барих маягт
- erxes CMS-тэй холбогдох контент удирдлага
- GitHub руу push хийх

### 4.2 Out-of-scope

- E-commerce cart/checkout (энэ хувилбарт)
- Хэрэглэгчийн бүртгэл, нэвтрэх систем
- Онлайн төлбөрийн систем
- Олон хэлний дэмжлэг (зөвхөн монгол)
- Real-time chat / support

---

## 5. Target Audience & User Personas

### Primary Persona: B2B Contractor / Construction Company

- **Demographics:** 30–55 нас, Улаанбаатар болон бүс нутаг, барилгын компани, гүйцэтгэгч, архитектор, инженер
- **Goals:** Чанартай пасад, дуулаалга, тоноглол нийлүүлэгч олох; үнийн санал авах; төслийн туршлага харах
- **Pain Points:** Хямд чанар муутай бүтээгдэхүүн, хугацаа барихгүй нийлүүлэлт, мэргэжлийн зөвлөгөө дутагдалтай
- **Tech Proficiency:** Дундаас өндөр; компьютер, утас ашиглан мэдээлэл хайдаг

### Secondary Persona: Architect / Project Manager

- **Demographics:** 28–50 нас, төслийн менежер, дизайнер
- **Goals:** Бүтээгдэхүүний техник үзүүлэлт, стандарт, суулгах мэдээлэл олох
- **Pain Points:** Техник мэдээлэл бүрэн бус, зураг төсөлд тохирох бүтээгдэхүүн сонгоход хүндрэлтэй
- **Tech Proficiency:** Өндөр; мэргэжлийн баримт бичиг, каталог судалдаг

---

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy

```text
Home (Нүүр)
├── About (Бидний тухай)
├── Services (Үйлчилгээ)
│   ├── Glass Facade (Шилэн пасад)
│   ├── Metal Facade (Металл пасад)
│   ├── External Insulation (Гадна дуулаалга)
│   └── Accessories & Equipment (Дагалдах хэрэгсэл, тоноглол)
├── Gallery (Зургийн цомог / Төслүүд)
├── Blog (Мэдээ)
└── Contact (Холбоо барих)
    └── Request Quotation (Үнийн санал авах)
```

### 6.2 Navigation Structure

- **Header:** Нүүр | Бидний тухай | Үйлчилгээ | Зураг | Мэдээ | Холбоо барих
- **Footer:** Холбоо барих мэдээлэл, утас, имэйл, хаяг, хуудасны холбоосууд
- **Mobile:** Hamburger цэс, цэсний бүх холбоос

---

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Hero

- **Purpose:** Компанийн нэр, онцлог, гол үнэ цэнийг анхны харахад харуулах
- **Content:** Компани нэр, slogan, гол CTA
- **CTA:** "Үнийн санал авах", "Бидний тухай"
- **Interactions:** Background image / video, smooth scroll

#### About (Бидний тухай)

- **Purpose:** Компанийн туршлага, зорилго, давуу тал танилцуулах
- **Content:** 4 жилийн туршлага, чанарын стандарт, ажлын бүтээмж, өрсөлдөхүйц үнэ
- **CTA:** "Дэлгэрэнгүй", "Холбоо барих"
- **Interactions:** Text reveal, stats counter

#### Services (Үйлчилгээ)

- **Purpose:** Үндсэн бүтээгдэхүүн, үйлчилгээг ангилан харуулах
- **Content:** Шилэн пасад, металл пасад, гадна дуулаалга, дагалдах хэрэгсэл тоноглол
- **CTA:** "Дэлгэрэнгүй", "Үнийн санал авах"
- **Interactions:** Hover cards, service detail modal/page

#### Gallery (Зураг)

- **Purpose:** Гүйцэтгэсэн төслүүд, ажлын зургийг харуулах
- **Content:** Төслийн зураг, тайлбар, байршил
- **CTA:** "Бүх зургийг харах"
- **Interactions:** Lightbox, masonry/grid layout, filter

#### Blog (Мэдээ)

- **Purpose:** Компанийн мэдээ, салбарын мэдээлэл, брэнд танилцуулга
- **Content:** Мэдээний жагсаалт, нийтлэл
- **CTA:** "Дэлгэрэнгүй унших"
- **Interactions:** Card grid, pagination, detail page

#### Contact (Холбоо барих)

- **Purpose:** Холбоо барих мэдээлэл, үнийн саналын хүсэлт хүлээн авах
- **Content:** Утас, имэйл, хаяг, холбоо барих маягт
- **CTA:** "Илгээх"
- **Interactions:** Form validation, success message

### 7.2 E-commerce Requirements

- Онлайн худалдааны cart/checkout хэрэгжүүлэхгүй.
- Бүтээгдэхүүний каталог, үнийн санал авах маягт ашиглана.

### 7.3 Content Management Requirements

- erxes CMS-ээр хуудас, мэдээ, цэс, категори удирдах
- Homepage sections CMS-ээс динамикаар контент авах
- Blog пост нэмэх, засах, устгах боломж

### 7.4 Multi-language Requirements

- Зөвхөн монгол хэл (mn) — үндсэн хэл.
- Ирээдүйд англи хэл нэмэх боломжтой.

### 7.5 User Account & Authentication

- Хэрэглэгчийн бүртгэл хэрэггүй.
- Холбоо барих маягт нь зочин хэрэглэгчээр бөглөнө.

### 7.6 Search & Filtering

- Базаар хайлт хэрэггүй (эхний хувилбарт).
- Services хуудасанд ангиллаар шүүх боломжтой.

---

## 8. Non-functional Requirements

### 8.1 Performance

- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### 8.2 SEO

- Meta title, description бүрэн бүх хуудас дээр
- Open Graph tags
- Semantic HTML
- Alt text for images
- Sitemap

### 8.3 Accessibility

- WCAG 2.1 Level AA зарчим
- Хөтөчийн keyboard navigation
- Color contrast хангах
- Alt text, ARIA labels

### 8.4 Security

- HTTPS
- reCAPTCHA/anti-spam on contact form
- Secure env variables

### 8.5 Browser & Device Support

- Chrome, Firefox, Safari, Edge (хамгийн сүүлийн 2 хувилбар)
- Responsive: mobile, tablet, desktop

---

## 9. Design Direction

### 9.1 Visual Style

- Орчин үеийн, мэргэжлийн, цэвэрхэн
- Барилгын материал, шил, металлын мэдрэмж
- Итгэл үнэмшилтэй, тогтвортой дүр төрх
- Logo-ны цэнхэр өнгийг үндсэн өнгө болгон ашиглах

### 9.2 Color Palette

- **Primary:** #0077B6 (цэнхэр — logo өнгө)
- **Secondary:** #005F8C (хар цэнхэр)
- **Accent:** #00B4D8 (цайвар цэнхэр)
- **Neutral:** #F8F9FA (цайвар саарал), #212529 (хар)

### 9.3 Typography

- Үндсэн фонт: системийн sans-serif эсвэл Google Fonts (Inter / Roboto)
- Гарчиг: том, тод
- Биеийн текст: уншихад хялбар

### 9.4 Imagery & Photography

- Барилгын гадаад төрх, шилэн пасад, металл пасадын өндөр чанартай зураг
- Төслийн before/after зураг
- Цэвэрхэн workshop, угсралтын зураг

---

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|---|---|---|---|
| Hero | "Үнийн санал авах" | /contact | Lead generation |
| Hero | "Бидний тухай" | /about | Engagement |
| Services | "Дэлгэрэнгүй" | /services | Content discovery |
| Services | "Холбоо барих" | /contact | Lead generation |
| Gallery | "Бүх төслүүд" | /gallery | Trust building |
| Blog | "Дэлгэрэнгүй унших" | /blog/[slug] | Engagement |
| Contact | "Илгээх" | form submit | Lead generation |
| Footer | "Үнийн санал авах" | /contact | Lead generation |

---

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics

- Сарын хандалт: 500+
- Холбоо барих хүсэлт: 10+/сар
- Үйлчилгээний хуудас дээрх хугацаа: 1+ минут
- Bounce rate: < 60%

### 11.2 Qualitative Criteria

- Дизайн нь орчин үеийн, мэргэжлийн харагдана
- Мобайл дээр бүрэн ажиллана
- Контент нь ойлгомжтой, хялбар
- Холбоо барих маягт ажиллана

---

## 12. Assumptions & Constraints

### Assumptions

- erxes CMS ашиглан контент удирдана
- Logo, зурагны материал ашиглах боломжтой
- GitHub account болон token хүчинтэй

### Constraints

- Зөвхөн монгол хэл дээр
- E-commerce cart/checkout хэрэгжүүлэхгүй
- node.js runtime байхгүй тул PowerShell / TSX-гүй GraphQL хүсэлтээр CMS үүсгэсэн

---

## 13. References & Appendices

### 13.1 Reference Documents

- Logo file: `output/huajiuan-allinium/logo.png`
- site.config.json: `site.config.json`
- Reference site for design: `https://seele.com`

### 13.2 Competitor Analysis

| Competitor | URL | Strengths | Weaknesses |
|---|---|---|---|
| Makbn.mn | makbn.mn | Local presence, established brand | Unknown specifics — audit required |
| Үлэмж ХХК | - | Local market experience | Limited digital presence |

### 13.3 Glossary

| Term | Definition |
|---|---|
| Пасад | Building facade / cladding system |
| Дуулаалга | Thermal / acoustic insulation |
| Тоноглол | Equipment and accessories |
| B2B | Business-to-business sales |
| CMS | Content Management System (erxes) |
