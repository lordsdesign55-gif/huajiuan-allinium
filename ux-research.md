# UX Research Document — Huajiuan Allinium

> **Version:** 1.0  
> **Date:** 2026-06-23  
> **Author:** UX Researcher (AI)  
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives

- B2B хэрэглэгчдэд бүтээгдэхүүн, үйлчилгээний мэдээллийг хурдан олохад туслах
- Төслийн зураг үзсэний дараа үнийн санал авах үйл явцыг хялбарчлах
- Итгэл үнэмшилтэй, мэргэжлийн дүр төрх бий болгох
- Мобайл болон десктоп төхөөрөмжүүдэд адилхан сайн туршлага өгөх

### 1.2 Methodology

- BRD болон site.config.json дээр үндэслэсэн баримт шинжилгээ
- Хэрэглэгчийн асуулгын мэдээлэл
- Өрсөлдөгчийн хязгаарлагдмал мэдээлэл дээр үндэслэсэн харьцуулалт

### 1.3 Scope

- Нүүр хуудас, бидний тухай, үйлчилгээ, зургийн цомог, мэдээ, холбоо барих хуудас
- B2B хэрэглэгчийн жорneys
- Мобайл-first responsive дизайн
- Accessibility шаардлагууд

### 1.4 Key Findings Summary

1. **Primary Device:** Хэрэглэгчид компьютер болон гар утас хоёул ашиглана → responsive дизайн чухал.
2. **Top Tasks:** Бүтээгдэхүүний мэдээлэл хайх, шинэ мэдээ унших, төслийн зураг үзэх, үнийн санал авах.
3. **Conversion Trigger:** Төслийн зураг хараад дараа нь үнийн санал авах хүсэлт илгээнэ.
4. **Content Priority:** Мэдээлэл олоход хялбар, итгэл үнэмшилтэй, хэт их интерактив биш байх.

---

## 2. User Personas

### Persona 1: B2B Contractor / Construction Manager "Бат"

#### Demographics & Context

- **Age Range:** 32–52
- **Location:** Улаанбаатар, барилгын компани
- **Occupation:** Гүйцэтгэгч, төслийн менежер
- **Tech Proficiency:** Дундаас өндөр
- **Primary Device:** Компьютер (оффис дээр), гар утас (талбай дээр)

#### Behavioral Patterns

- **Usage Frequency:** Төсөл эхлэхээр эсвэл нийлүүлэгч хайхдаа
- **Task Priorities:** Бүтээгдэхүүн харах, үнэ авах, холбоо барих
- **Decision Factors:** Чанар, үнэ, хугацаа, өмнөх төсөл
- **Pain Points:** Мэдээлэл олоход хүнд, хариу өгөх удаан, чанар нь тодорхой бус
- **Motivations:** Төслөө цагт нь, чанартай дуусгах

#### Goals & Needs

- **Primary Goals:** Шилэн/металл пасад, дуулаалга, тоноглолын нийлүүлэгч олох
- **Secondary Goals:** Шинэ бүтээгдэхүүн, технологийн мэдээлэл авах
- **Success Criteria:** 2-3 товчлуур дараад үнийн саналын хүсэлт илгээнэ

#### Context of Use

- **Environment:** Оффис, барилгын талбай, машин
- **Time Constraints:** Хурдан шийдвэр гаргах хэрэгтэй
- **Distractions:** Дуудлага, хурал, талбайн шуугиан

#### Quote

> "Надад хурдан, ойлгомжтой мэдээлэл хэрэгтэй. Зургийг нь хараад л үнийн санал авахыг хүснэ."

### Persona 2: Architect / Designer "Сараа"

#### Demographics & Context

- **Age Range:** 28–45
- **Location:** Улаанбаатар
- **Occupation:** Архитектор, дизайнер
- **Tech Proficiency:** Өндөр
- **Primary Device:** Компьютер, таблет

#### Behavioral Patterns

- **Usage Frequency:** Төсөл боловсруулах үед
- **Task Priorities:** Техник үзүүлэлт, стандарт, суулгах заавар
- **Decision Factors:** Техник деталь, загвар, чанар
- **Pain Points:** Бүтээгдэхүүний мэдээлэл дутуу, зургийн чанар муу
- **Motivations:** Төсөлдөө зөв материал сонгох

#### Goals & Needs

- **Primary Goals:** Техник мэдээлэл, бүтээгдэхүүний каталог үзэх
- **Secondary Goals:** Шинэ брэнд, шийдэл танилцуулах
- **Success Criteria:** Дэлгэрэнгүй мэдээлэл, өндөр чанартай зураг

#### Context of Use

- **Environment:** Оффис, зураг төсөлтэй өрөө
- **Time Constraints:** Төслийн хугацаа шахуу
- **Distractions:** Хурал, дуудлага

#### Quote

> "Би материалын техник үзүүлэлт, стандартыг нь харахыг илүүд үздэг. Зураг нь чанартай байвал итгэл үнэмшилтэй."

---

## 3. Customer Journey Mapping

### Journey Overview

**Stages:** Discovery → Consideration → Conversion → Retention

### Stage 1: Discovery

- **Touchpoints:** Google search, линкдэн, санал болгох, business card
- **User Actions:** Сайтад орж, hero, бидний тухай хэсэг харна
- **Emotions:** Сонирхолтой, эргэлзээтэй
- **Pain Points:** Компани найдвартай юу, юу хийдэг вэ гэдгийг мэдэхгүй
- **Opportunities:** Hero-г түлхүүр үнэ цэнэ, CTA-тай хийх

### Stage 2: Consideration

- **Touchpoints:** Үйлчилгээний хуудас, зургийн цомог, мэдээ
- **User Actions:** Бүтээгдэхүүн, төслийн зураг харна, блог уншина
- **Emotions:** Сонирхол нэмэгдэнэ, итгэл багахан нэмэгдэнэ
- **Pain Points:** Мэдээлэл олоход хэцүү, хайх зүйлээ олдоггүй
- **Opportunities:** Үйлчилгээний хуудас хялбар ангилалтай, gallery-д төслүүдийг тод харуулах

### Stage 3: Conversion

- **Touchpoints:** Холбоо барих хуудас, үнийн саналын маягт
- **User Actions:** Маягт бөглөж, хүсэлт илгээнэ
- **Emotions:** Итгэл үнэмшилтэй, найдвартай
- **Pain Points:** Маягт төвөгтэй, хариу ирэхгүй
- **Opportunities:** Богино, ойлгомжтой маягт, success message

### Stage 4: Retention

- **Touchpoints:** Мэдээний захиалга, дахин хандалт
- **User Actions:** Шинэ мэдээ унших, дахин холбоо барих
- **Emotions:** Сэтгэл ханамжтай
- **Pain Points:** Шинэ контент бага
- **Opportunities:** Тогтмол блог нийтлэх, төслүүд шинэчлэх

---

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy

```text
Home (Нүүр)
├── Hero
├── About (Бидний тухай — товч)
├── Services (Үйлчилгээ — 4 ангилал)
├── Gallery (Зургийн цомог — сонгодог төслүүд)
├── Blog (Мэдээ — хамгийн сүүлийн 3)
└── CTA (Холбоо барих / үнийн санал)

About (Бидний тухай)
├── Компанийн тухай
├── Давуу тал
├── Туршлага / статистик
└── CTA

Services (Үйлчилгээ)
├── Шилэн пасад
├── Металл пасад
├── Гадна дуулаалга
├── Дагалдах хэрэгсэл, тоноглол
└── CTA

Gallery (Зургийн цомог)
├── Filter by service
├── Project cards
└── Lightbox detail

Blog (Мэдээ)
├── Latest posts grid
├── Categories
└── Post detail

Contact (Холбоо барих)
├── Contact info
├── Map (optional)
└── Quotation form
```

### 4.2 Navigation Design

- **Primary Navigation:** Нүүр | Бидний тухай | Үйлчилгээ | Зураг | Мэдээ | Холбоо барих
- **Secondary Navigation:** Үйлчилгээний дэд ангилал (hover эсвэл дэлгэрэнгүй хуудас дээр)
- **Footer Navigation:** Холбоо барих, нийгмийн хаягууд, хуулиар шаардлагатай холбоосууд
- **Mobile Navigation:** Hamburger цэс, нэг баганаар харуулах

### 4.3 Content Organization Principles

- Хамгийн чухал мэдээлэл дээд хэсэгт
- Үйлчилгээ бүр ангиллаар тусдаа хуудас/карт
- Төслийн зураг үйлчилгээ тус бүртэй холбогдох
- Мэдээ, блог нь шинэ контент, брэнд танилцуулгыг илчлэнэ

### 4.4 Search & Filter Strategy

- **Search Scope:** Эхний хувилбарт хайлтгүй
- **Filter Categories:** Gallery-д үйлчилгээгээр шүүх (шилэн пасад, металл пасад, гадна дуулаалга)
- **Search Results Display:** N/A

---

## 5. Wireframe Guidance

### 5.1 Global Layout Structure

- **Header:** Logo (зүүн), navigation (баруун), mobile-д hamburger
- **Footer:** Холбоо барих мэдээлэл, холбоосууд, copyright
- **Content Width:** 1280px max-width, 16px/24px padding
- **Grid System:** 12 багана, 24px gap

### 5.2 Section Layouts

#### Hero

- **Layout Type:** Full-width background image/video
- **Content Priority:** Компани нэр, товч тайлбар, 2 CTA
- **Component Types:** Heading, subheading, buttons
- **White Space:** Их, төвлөрсөн
- **Responsive Behavior:** Мобайлд текст доошоо, button full-width

#### About (Homepage teaser)

- **Layout Type:** 2-column (text + image)
- **Content Priority:** Туршлага, давуу тал
- **Component Types:** Heading, body text, stats, image
- **White Space:** Дунд
- **Responsive Behavior:** Мобайлд нэг багана

#### Services

- **Layout Type:** 4-card grid
- **Content Priority:** Icon/image, гарчиг, тайлбар, CTA
- **Component Types:** Cards, icons
- **White Space:** Дунд
- **Responsive Behavior:** 4 → 2 → 1

#### Gallery

- **Layout Type:** Masonry/grid
- **Content Priority:** Зураг, төслийн нэр
- **Component Types:** Image cards, lightbox
- **White Space:** Бага
- **Responsive Behavior:** 3 → 2 → 1

#### Blog

- **Layout Type:** 3-card grid
- **Content Priority:** Зураг, гарчиг, товч, "унших" холбоос
- **Component Types:** Cards, badges
- **White Space:** Дунд
- **Responsive Behavior:** 3 → 2 → 1

#### Contact

- **Layout Type:** 2-column (info + form)
- **Content Priority:** Утас, имэйл, хаяг, маягт
- **Component Types:** Form inputs, buttons
- **White Space:** Дунд
- **Responsive Behavior:** Мобайлд нэг багана

### 5.3 Content Priority

1. **Homepage:** Hero → About → Services → Gallery → Blog → Contact CTA

### 5.4 Component Patterns

- **Cards:** Uniform height, hover lift, shadow
- **Lists:** Icon + text, хялбар унших
- **Forms:** Label дээрээ, баталгаажуулалт, success state
- **Media:** Full-width, lazy loading, alt text

---

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|---|---|---|
| Keyboard Navigation | Бүх интерактив элемент keyboard-оор нэвтрэх боломжтой | High |
| Screen Reader Support | ARIA labels, landmarks, skip link | High |
| Color Contrast | Жирийн текст 4.5:1, том текст 3:1 | High |
| Focus Indicators | Focus хийсэн элемент тод харагдана | High |
| Alt Text | Зураг бүрд тайлбар | High |
| Form Labels | Input бүрд label | High |
| Text Resizing | 200% zoom дээр алдагдалгүй | Medium |
| Motion Sensitivity | `prefers-reduced-motion` хүндэтгэх | Medium |

### 6.2 Multi-language Accessibility

- Зөвхөн монгол хэл
- Ирээдүйд англи хэл нэмэхэд layout зай тавих

### 6.3 Mobile Accessibility

- Touch target 44x44px+
- Gesture-ийн альтернатив
- Zoom хийх боломж

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|---|---|---|---|
| Mobile | 375px | Гар утас | Нэг багана, том текст, full-width button |
| Tablet | 768px | Tablet | 2 багана, жижиг текст |
| Desktop | 1280px | Laptop, desktop | 3–4 багана, бүтэн layout |

### 7.2 Mobile-first Approach

- Эхлээд мобайлд зориулж дизайн хийж, дараа нь том дэлгэцрүү өргөтгөнө
- Хамгийн чухал контентоо дээш нь байрлуулна
- Навигацийг hamburger цэсээр хялбаршуулна

### 7.3 Content Adaptation

- Hero текст мобайлд богиносох
- Grid картууд мобайлд нэг багана болох
- Маягт мобайлд full-width input

### 7.4 Performance Budget

- Mobile: < 1MB initial load, < 3s load time
- Desktop: < 2MB initial load, < 2s load time

---

## 8. Interaction & Motion Design

### 8.1 Animation Principles

- Бага, зорилготой хөдөлгөөн
- Мэдээлэл олоход саад болохгүй
- Профессионал, биш хэт тоглож буй мэт биш

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---|---|---|---|
| Buttons | Hover | Scale 1.02, shadow нэмэгдэх | 200ms |
| Cards | Hover | Дээш өргөгдөх, shadow | 250ms |
| Links | Hover | Өнгө шилжих, доогуур зураас | 150ms |
| Form Inputs | Focus | Border өнгө, shadow | 200ms |
| Loading | Active | Spinner эсвэл skeleton | Continuous |

### 8.3 Page Transitions

- Next.js-ийн хөнгөн page transition
- Хэт удаан шилжилтгүй

### 8.4 Scroll Behaviors

- Smooth scroll anchor links
- Sections дээр харагдах үед бага animation
- `prefers-reduced-motion` хүндэтгэх

---

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice

- Мэргэжлийн, итгэл үнэмшилтэй
- Хялбар ойлгомжтой (хэт техникийн үгээс зайлсхийх)
- Харилцах, урих

### 9.2 Terminology

| Term | Usage | Avoid |
|---|---|---|
| Пасад | Шилэн/металл пасад | "хана" гэх мэт ерөнхий үг |
| Дуулаалга | Гадна дуулаалга | "дотор дулаалга" гэж андуурах |
| Тоноглол | Дагалдах хэрэгсэл, тоноглол | "хэрэгсэл" гэж ойлгомжгүй |
| Үнийн санал | Quote/request | "үнэ" гэж богино бичих |

### 9.3 CTA Copy Guidelines

- Үйл үгээр эхлэх: "Үнийн санал авах", "Холбоо барих", "Дэлгэрэнгүй унших"
- Тодорхой байх
- Мобайлд 2-3 үгнээс хэтрэхгүй

### 9.4 Multi-language UX Writing

- Одоогоор зөвхөн монгол хэл
- Англи хэл нэмэхэд CTA богино байхыг анхаарах

### 9.5 Error Messages

- "Утасны дугаараа оруулна уу"
- "Имэйл хаяг буруу байна"
- "Мессеж бичнэ үү"
- "Алдаа гарлаа, дахин оролдоно уу"

---

## 10. Usability Testing Plan

### 10.1 Test Scenarios

1. Нүүр хуудаснаас үйлчилгээний мэдээлэл олох
2. Төслийн зураг үзээд үнийн санал авах
3. Мобайл дээр холбоо барих маягт бөглөх
4. Мэдээний жагсаалтаас нийтлэл унших

### 10.2 Testing Methods

- Remote moderated testing
- 3–5 B2B хэрэглэгчид
- Task completion + SUS score

### 10.3 Success Metrics

- Task completion rate > 80%
- Average time on task < 2 минут
- SUS score > 70

---

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|---|---|---|---|
| makbn.mn | Local brand awareness | Unknown digital specifics | Better project gallery, clearer CTA |
| Үлэмж ХХК | Local experience | Limited digital presence | Modern responsive site, contact form |
| seele.com (reference) | Premium visual, strong gallery | Complex for B2B Mongolia market | Adapt clean professional layout locally |

---

## 12. Success Metrics & KPIs

### 12.1 UX Metrics

- Task completion rate
- Time to find product info
- Contact form completion rate
- Mobile vs desktop bounce rate

### 12.2 Business Metrics

- Үнийн саналын хүсэлтийн тоо
- Холбоо барих хандалтын тоо
- Төслийн gallery хуудасны хандалт

### 12.3 Technical Metrics

- Page load time < 3s
- Core Web Vitals бүх ногоон
- Mobile usability score 100%

---

## 13. Design Agent Collaboration

- Дизайн агент нь UX research-ийн wireframe guidance, color palette, typography-г дагаж Pencil-д дизайн үүсгэнэ.
- Батлагдсан BRD болон UX research-ийг дагаж homepage direction previews хийнэ.
- Motion level 2–3 хооронд байхаар төлөвлөсөн (scroll animations, hover micro-interactions).

---

## 14. Assumptions & Constraints

### Assumptions

- Хэрэглэгчид голчлон компьютер болон гар утас ашиглана
- Төслийн зураг нь итгэл үнэмшил бий болгох хамгийн чухал элемент
- B2B худалдан авагч мэргэжлийн, богино хугацаанд мэдээлэл авдаг

### Constraints

- Зөвхөн монгол хэл
- E-commerce cart/checkout хэрэгжүүлэхгүй
- node.js runtime байхгүй тул зарим скрипт гараар ажиллана

---

## 15. Next Steps

1. Дизайны чиглэлүүдийг Pencil-д үүсгэх
2. 2–3 homepage direction previews гаргах
3. Хэрэглэгчид сонголт хийлгэх
4. Сонгосон чиглэлийг бүрэн дизайн болгон өргөтгөх
5. Frontend код generate хийх
6. erxes CMS-тэй холбох, контент оруулах
7. GitHub руу push хийх

Энэ UX research-ийг баталж болох уу, эсвэл өөрчлөлт хийх үү?
