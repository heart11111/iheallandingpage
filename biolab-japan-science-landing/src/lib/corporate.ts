import type { Ingredient } from "@/lib/ingredients";
import { natureIngredients, probioticsIngredients } from "@/lib/ingredients";

export const companyPages = [
  {
    label: "代表取締役 ご挨拶",
    koLabel: "대표이사 인사말",
    menuLabel: "CEO Message",
    href: "/company/greeting",
    summary: "BIOLAB Japanの代表メッセージと事業姿勢を紹介します。",
    koSummary: "BIOLAB Japan의 대표 메시지와 사업 방향을 소개합니다.",
  },
  {
    label: "ビジョン及び目標",
    koLabel: "비전 및 목표",
    menuLabel: "Vision & Goals",
    href: "/company/vision",
    summary: "日本市場で目指すヘルスケア事業ブリッジの方向性を整理します。",
    koSummary: "일본 시장에서 지향하는 기능성 헬스케어 사업 브리지의 방향성입니다.",
  },
];

export const businessPages = [
  {
    label: "機能性素材供給",
    koLabel: "기능성 식품 원료 사업",
    menuLabel: "Ingredient Supply",
    href: "/business/materials",
    summary: "製品企画に必要な機能性素材を、用途と根拠情報に合わせて提案します。",
    koSummary: "제품 기획에 필요한 기능성 원료를 용도와 근거 자료에 맞춰 제안합니다.",
  },
  {
    label: "OEM/ODMサービス",
    koLabel: "ODM/OEM",
    menuLabel: "OEM/ODM Service",
    href: "/business/odm-oem",
    summary: "韓国製造ネットワークを活用し、処方・剤形・量産・供給条件を設計します。",
    koSummary: "일본 내 브랜드 유통사 전용 상품 개발 및 ODM / OEM 생산을 설계합니다.",
  },
  {
    label: "ブランドマネジメント",
    koLabel: "Brand Royalty",
    menuLabel: "Brand Management",
    href: "/business/brand-management",
    summary: "iHEALブランド運営経験をもとに、商品資料・チャネル・パートナー対応を支援します。",
    koSummary: "iHEAL 브랜드 사용에 대한 상품 로열티 사업과 브랜드 협업을 지원합니다.",
  },
];

export const communicationPages = [
  {
    label: "Eカタログ",
    koLabel: "E-카탈로그",
    menuLabel: "E-Catalog",
    href: "/communication/catalog",
    summary: "素材供給、OEM/ODM、ブランド協業の検討に必要な情報をまとめます。",
    koSummary: "기능성 식품 원료 사업, ODM/OEM, Brand Royalty 검토에 필요한 정보를 안내합니다.",
  },
  {
    label: "開発お問い合わせ",
    koLabel: "개발 문의",
    menuLabel: "Development Inquiries",
    href: "/communication/inquiries",
    summary: "機能性素材、ODM/OEM、日本B2B流通、ブランド協業の開発相談を受け付けます。",
    koSummary: "기능성 원료, ODM/OEM, 일본 B2B 유통, 브랜드 협업 개발 상담을 접수합니다.",
  },
  {
    label: "コミュニケーションチャネル",
    koLabel: "커뮤니케이션 채널",
    menuLabel: "Channels",
    href: "/communication/channels",
    summary: "BIOLAB Japan、BIOLAB Korea、iHEAL Mallへの公式導線を案内します。",
    koSummary: "BIOLAB Japan, BIOLAB Korea, iHEAL Mall 공식 연결 경로입니다.",
  },
];

const natureProductIds = [
  "testofen",
  "thinkgin",
  "neulearn",
  "applephenon",
  "collagen",
  "dermania",
  "agrimony",
  "pinitol",
  "acetobeta",
  "immulink",
];

export const microbiomeProductItems = probioticsIngredients;
export const natureProductItems = natureIngredients.filter((item) => natureProductIds.includes(item.id));

export const productLinePages = [
  {
    label: "個別認定型プロバイオティクス",
    koLabel: "Probiotics Strain by Application",
    menuLabel: "Ⅰ. Functional Probiotics line",
    href: "/products/microbiome-probiotics",
    summary: "女性、体脂肪、脳・記憶、肝臓、鼻、ストレス、腸の7種を整理します。",
    koSummary: "질내 마이크로바이옴, 체지방·항비만, 인지·기억, 간건강, 면역 과민반응에 따른 코 상태, 스트레스·수면·릴랙스, 장건강·배변활동 영역의 프로바이오틱스 7종입니다.",
    items: microbiomeProductItems,
  },
  {
    label: "機能性天然素材",
    koLabel: "Nature’s food ingredients by Application",
    menuLabel: "Ⅱ. Functional Nature‘s food ingredients Line",
    href: "/products/nature-ingredients",
    summary: "男性健康、記憶、認知、体脂肪、肌、肝臓・血糖、二日酔い、免疫の10種を整理します。",
    koSummary: "남성 갱년기·남성 건강, 기억·인지 기능, 노화 관련 인지기능, 다이어트·체지방, 피부 수분·탄력, 주름·보습, 간·혈당 건강, 알코올 대사 지원, 면역기능 영역의 자연 유래 기능성 소재 10종입니다.",
    items: natureProductItems,
  },
];

export const siteMapGroups = [
  { label: "会社紹介", menuLabel: "COMPANY", href: "/company", children: companyPages },
  { label: "事業 & サービス", menuLabel: "BUSINESS", href: "/business", children: businessPages },
  { label: "供給製品", menuLabel: "PRODUCTS", href: "/products", children: productLinePages },
  { label: "お問い合わせ", menuLabel: "COMMUNICATION", href: "/communication", children: communicationPages },
];

export const productGroups = [
  {
    slug: "probiotics",
    menuLabel: "Ⅰ. Functional Probiotics line",
    eyebrow: "個別認定型・特許菌株",
    koEyebrow: "개별인정형 기능성 소재 / 특허 유산균",
    title: "Ⅰ. Functional Probiotics line",
    koTitle: "Ⅰ. Functional Probiotics line",
    subtitle: "用途別プロバイオティクス",
    koSubtitle: "Probiotics Strain by Application",
    image: "/images/products-microbiome-probiotics-card-v3.webp",
    description:
      "女性、体脂肪、認知、肝臓、鼻、ストレス、腸のコンディションに合わせて、菌株レベルで素材情報を整理します。",
    koDescription:
      "질내 마이크로바이옴, 체지방·항비만, 인지·기억, 간건강, 면역 과민반응에 따른 코 상태, 스트레스·수면·릴랙스, 장건강·배변활동 영역의 인체시험 완료 프로바이오틱스 소재입니다.",
    items: probioticsIngredients,
  },
  {
    slug: "nature",
    menuLabel: "Ⅱ. Functional Nature‘s food ingredients Line",
    eyebrow: "自然由来機能性素材",
    koEyebrow: "인체시험 완료 / 자연 유래 기능성 소재",
    title: "Ⅱ. Functional Nature‘s food ingredients Line",
    koTitle: "Ⅱ. Functional Nature‘s food ingredients Line",
    subtitle: "自然由来素材",
    koSubtitle: "Nature’s food ingredients by Application",
    image: "/images/products-functional-nature-card-v3.webp",
    description:
      "記憶、肌、肝臓、免疫、男性健康など、商品カテゴリーに合わせた自然由来機能性素材を提案します。",
    koDescription:
      "남성 갱년기·남성 건강, 기억·인지 기능, 노화 관련 인지기능, 다이어트·체지방, 피부 수분·탄력, 주름·보습, 간·혈당 건강, 알코올 대사 지원, 면역기능 등 상품 카테고리별 자연 유래 기능성 소재입니다.",
    items: natureIngredients,
  },
  {
    slug: "odm-oem",
    menuLabel: "ODM/OEM",
    eyebrow: "商品化・供給設計",
    koEyebrow: "상품 개발 및 ODM/OEM 생산",
    title: "ODM / OEM Planning",
    koTitle: "ODM/OEM",
    subtitle: "韓国製造ネットワーク連携",
    koSubtitle: "한국 Major 제조업체 Direct 생산 및 납품",
    image: "/images/biolab-global-factory-bg.png",
    description:
      "韓国主要メーカーとの製造ネットワークを活用し、日本市場向けの処方、剤形、量産、供給条件を設計します。",
    koDescription:
      "한국 Major 제조업체 Direct 생산 및 납품, 제조 상품 수입/통관, 일본 내 브랜드 유통사 전용 상품 개발을 연결합니다.",
    items: [] as Ingredient[],
  },
  {
    slug: "brand-royalty",
    menuLabel: "Brand Royalty",
    eyebrow: "ブランド協業",
    koEyebrow: "상품 로열티 사업",
    title: "Brand Royalty",
    koTitle: "Brand Royalty",
    subtitle: "iHEALブランド活用",
    koSubtitle: "iHEAL 브랜드 사용에 대한 상품 로열티 사업",
    image: "/images/clinical-platform-hero.png",
    description:
      "iHEALブランド、共同商品化、販売会社向け商品展開を含めたロイヤリティ型の事業協業を検討します。",
    koDescription:
      "iHEAL 브랜드 사용에 대한 상품 로열티 사업과 일본 내 브랜드 유통사 전용 상품 개발 협업을 검토합니다.",
    items: [] as Ingredient[],
  },
];

export const corporateNews = [
  {
    slug: "korea-japan-bridge",
    date: "2026.06.08",
    title: "韓国R&Dから日本B2B流通までをつなぐ事業構造を整理",
    koTitle: "한국 R&D부터 일본 B2B 유통까지 연결하는 사업 구조 정리",
    summary:
      "BIOLAB Japanは、素材開発、製造、ブランド管理、日本側販売ネットワークを一体で設計する事業ブリッジとして機能します。",
    koSummary:
      "BIOLAB Japan은 한국의 소재 개발, 제조, 브랜드 관리와 일본 측 판매 네트워크를 하나로 설계하는 사업 브리지입니다.",
    image: "/images/biolab-global-factory-bg.png",
  },
  {
    slug: "ingredient-portfolio",
    date: "2026.06.08",
    title: "用途別機能性素材ポートフォリオを日本向けに再構成",
    koTitle: "용도별 기능성 식품 소재 포트폴리오를 일본 시장 기준으로 재구성",
    summary:
      "プロバイオティクスと自然由来機能性素材を、カテゴリー、摂取量、エビデンスタグ別に整理しました。",
    koSummary:
      "Ⅰ. Functional Probiotics line 7종과 Ⅱ. Functional Nature‘s food ingredients Line 10종을 용도별로 정리했습니다.",
    image: "/images/global-evidence-bg.png",
  },
  {
    slug: "partnership-inquiry",
    date: "2026.06.08",
    title: "ODM/OEM・素材調達・ブランド協業の相談受付を開始",
    koTitle: "ODM/OEM, 소재 조달, Brand Royalty 상담 접수",
    summary:
      "機能性素材の調達、日本B2B流通、iHEALブランド協業に関する相談をWebフォームから受け付けます。",
    koSummary:
      "기능성 식품 원료 사업, 일본 B2B 유통, iHEAL 브랜드 사용에 대한 상품 로열티 사업 상담을 접수합니다.",
    image: "/images/clinical-platform-hero.png",
  },
];

export const partnerRows = [
  {
    label: "募集領域",
    value: "機能性素材調達、ODM/OEM商品開発、日本B2B流通、ブランド協業",
    koLabel: "모집 영역",
    koValue: "기능성 식품 원료 사업, ODM/OEM 상품 개발, 일본 B2B 유통, Brand Royalty",
  },
  {
    label: "対象企業",
    value: "販売会社、健康食品ブランド、メーカー、卸、商品企画会社",
    koLabel: "대상 기업",
    koValue: "판매회사, 건강기능식품 브랜드, 제조사, 도매, 상품 기획사",
  },
  {
    label: "提案素材",
    value: "プロバイオティクス、自然由来機能性素材、iHEALブランド活用",
    koLabel: "제안 소재",
    koValue: "Ⅰ. Functional Probiotics line, Ⅱ. Functional Nature‘s food ingredients Line, iHEAL 브랜드 활용",
  },
  {
    label: "進行方法",
    value: "問い合わせ受付後、カテゴリー、発売時期、必要資料を確認して個別にご案内します。",
    koLabel: "진행 방법",
    koValue: "문의 접수 후 카테고리, 출시 시기, 필요 자료를 확인합니다.",
  },
  {
    label: "提出資料",
    value: "会社概要、検討カテゴリー、希望素材、想定販売チャネル",
    koLabel: "제출 자료",
    koValue: "회사 소개, 검토 카테고리, 희망 소재, 예상 판매 채널",
  },
  {
    label: "連絡方法",
    value: "CONTACTページのフォームよりお問い合わせください。",
    koLabel: "연락 방법",
    koValue: "CONTACT 페이지의 문의 폼으로 연락해 주세요.",
  },
];

export function getProductGroup(slug: string) {
  return productGroups.find((group) => group.slug === slug);
}
