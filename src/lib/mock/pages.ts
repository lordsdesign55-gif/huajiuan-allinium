export interface CmsPage {
  _id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  status: string;
}

export interface CmsPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  createdAt: string;
  categories: { _id: string; name: string }[];
}

export interface CmsMenuItem {
  _id: string;
  labelKey: string;
  url: string;
  order: number;
  kind: 'header' | 'footer';
}

export const pages: CmsPage[] = [
  {
    _id: 'page-home',
    name: 'Нүүр',
    slug: '/',
    description: 'Huajiuan Allinium — EOSS шилэн пасад, металл пасад, гадна дуулаалга',
    content: '',
    status: 'published',
  },
  {
    _id: 'page-about',
    name: 'Бидний тухай',
    slug: 'about',
    description: 'Huajian Aluminium Mongolia — 26 жилийн олон улсын туршлага. Монгол дахь албан ёсны төлөөлөгч Huajiuan Allinium.',
    content:
      '<p>Huajiuan Allinium нь 4 жилийн орон нутгийн туршлагатай, барилгын салбарт шилэн пасад, металл пасад, барилгын гадна дулаалга, дагалдах хэрэгсэл тоноглолын худалдаа болон угсралтын үйлчилгээ үзүүлдэг мэргэжлийн компани юм.</p>\n' +
      '<p>Бид Хятадын Huajian Aluminium Mongolia компанийн EOSS брендийн албан ёсны хэрэглэгч бөгөөд Монгол улсад тус брендийн шилэн пасадын бүтээгдэхүүнийг албан ёсоор нэвтрүүлж, борлуулж, угсарч байна. EOSS систем нь Passive House сертификаттай, Монголын хатуу уур амьсгалд тохируулсан, эрчим хүчний хэмнэлттэй шийдэл юм.</p>\n' +
      '<p>Манай баг 50 гаруй төсөлд оролцож, стандарт, чанар, бүтээмжийг эрхэмлэн ажиллаж байна.</p>',
    status: 'published',
  },
  {
    _id: 'page-services',
    name: 'Үйлчилгээ',
    slug: 'services',
    description: 'EOSS шилен пасад, металл дулаан цонх, металл пасад, гадна дуулаалга, дагалдах тоноглол',
    content:
      '<h2>EOSS шилен пасад</h2>\n' +
      '<p>Huajian Aluminium Mongolia-ийн EOSS бренд нь Passive House сертификаттай, өндөр чанарын шилен пасадын систем юм. Schüco-той ижил төрлийн үйл ажиллагаа явуулдаг бөгөөд олон улсын стандарт, Passive House шаардлагыг хангасан ч үнийн хувьд арай оновчтой.</p>\n' +
      '<p>Манайд 2 болон 3 давхар Low-E шил, хатсан шил, unitized хөндлөнгийн шийдэл бий.</p>\n' +
      '<h2>Металл дулаан цонх</h2>\n' +
      '<p>Passive House сертификаттай EOSS брендийн металл дулаан цонх нь 10 см зузаантай хөнгөн цагаан профиль, 3 давхар Low-E шилэн багц, Argon хийн бөглөрөлтэй. Энгийн цонхнаас 3-4 дахин илүү дулаан тусгаарлалттай, Монголын -40°C хүйтэнд ч өрөөний дулааныг хадгална. Бидний хамгийн их борлуулалттай best-seller бүтээгдэхүүн.</p>\n' +
      '<h2>Металл пасад</h2>\n' +
      '<p>Alucobond болон хөнгөн цагаан хавтангийн өнгөлгөө, уян хатан дизайн, удаан эдэлгээтэй.</p>\n' +
      '<h2>Гадна дуулаалга</h2>\n' +
      '<p>Rockwool стандартад нийцсэн дулаан, дуу чимээ тусгаарлалт — эрчим хүчний хэмнэлттэй барилга.</p>\n' +
      '<h2>Дагалдах тоноглол</h2>\n' +
      '<p>Төмөр тогтоогч бүрдэл, резин хөндлөнгийн холболт, ус зайлуулах профиль болон бусад дагалдах хэрэгсэл.</p>\n' +
      '<h2>Техникийн стандартууд</h2>\n' +
      '<ul><li>ASTM E2190 — хүйтэн уур амьсгалд зориулсан IGU стандарт</li><li>EN 1279-2 — хийн бөглөрөлтэй шилэн багцын чийгний тэсвэр</li><li>EN 673 — U-утасны коэффициент тооцох</li><li>CSA A440.2 — Канадын эрчим хүчний үр ашиг</li><li>GOST 30674 — ОХУ-ын баталгаат ашиглалт</li><li>Passive House — U ≤ 0.8 W/m²K</li></ul>',
    status: 'published',
  },
  {
    _id: 'page-gallery',
    name: 'Зургийн цомог',
    slug: 'gallery',
    description: 'Huajiuan Allinium-ийн гүйцэтгэсэн төслүүд',
    content: '',
    status: 'published',
  },
  {
    _id: 'page-blog',
    name: 'Мэдээ',
    slug: 'blog',
    description: 'Салбарын мэдээ, брэндийн танилцуулга',
    content: '',
    status: 'published',
  },
  {
    _id: 'page-contact',
    name: 'Холбоо барих',
    slug: 'contact',
    description: 'Холбоо барих мэдээлэл, үнийн санал авах маягт',
    content: '',
    status: 'published',
  },
  {
    _id: 'page-unitized',
    name: 'Unitized Glass System',
    slug: 'unitized-glass-system',
    description: 'Unitized Glass System — урьдчилан үйлдвэрлэсэн шилэн панелийн шийдэл',
    content: '',
    status: 'published',
  },
];

export function getPageBySlug(slug: string): CmsPage | undefined {
  return pages.find((p) => p.slug === slug);
}
