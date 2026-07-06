(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()])},71987,88973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],71987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],88973)},5014,e=>{"use strict";var t=e.i(71645),a=e.i(71987),r=e.i(88973),i=e.i(96661);let l=(0,t.createContext)({}),o=(0,t.forwardRef)(({color:e,size:o,strokeWidth:n,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...g},h)=>{let{size:f=24,strokeWidth:b=2,absoluteStrokeWidth:v=!1,color:A="currentColor",className:m=""}=(0,t.useContext)(l)??{},y=s??v?24*Number(n??b)/Number(o??f):n??b;return(0,t.createElement)("svg",{ref:h,...a.default,width:o??f??a.default.width,height:o??f??a.default.height,stroke:e??A,strokeWidth:y,className:(0,i.mergeClasses)("lucide",m,c),...!d&&!(0,r.hasA11yProp)(g)&&{"aria-hidden":"true"},...g},[...u.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(d)?d:[d]])});e.s(["default",0,o],5014)},93512,e=>{"use strict";var t=e.i(43476),a=e.i(57688),r=e.i(22016),i=e.i(71645),l=e.i(54181),o=e.i(87314),n=e.i(28747),s=e.i(97630);let c=[{label:"All",value:"All"},{label:"Ⅰ. Functional Probiotics line",value:"Functional Probiotics"},{label:"Ⅱ. Functional Nature‘s food ingredients Line",value:"Nature-derived Ingredients"}],d=new Set(["med01","med02","nvp2106","nvp1702","nvp1703","nvp1704"]);e.s(["ProductIngredientExplorer",0,function({items:e,title:u,description:g,koTitle:h,koDescription:f}){let{language:b}=(0,l.useDevLanguage)(),[v,A]=(0,i.useState)("All"),[m,y]=(0,i.useState)("All"),p=(0,i.useMemo)(()=>"ko"===b?e.map(e=>(0,n.getKoreanIngredient)(e)):e,[e,b]),k=(0,i.useMemo)(()=>new Set(e.filter(e=>!!d.has(e.id)||[...e.origin??[],...e.evidenceTags,...e.healthClaims??[],...e.featurePoints??[]].some(e=>/個別認定型|개별인정|KFDA/.test(e))).map(e=>e.id)),[e]),x=(0,i.useMemo)(()=>c.map(e=>({...e,label:"ko"===b&&"All"!==e.value?n.devKoreanLabels.line[e.value]:"ko"===b?"전체":e.label})),[b]),C=(0,i.useMemo)(()=>{let e=new Set(["All"]);return p.forEach(t=>{("All"===v||t.line===v)&&e.add(t.category)}),e},[v,p]),j=(0,i.useMemo)(()=>["All",...Array.from(new Set(p.map(e=>e.category))).filter(e=>C.has(e))],[p,C]),L=C.has(m)?m:"All",N=(0,i.useMemo)(()=>p.filter(e=>{let t="All"===v||e.line===v,a="All"===L||e.category===L;return t&&a}),[v,p,L]);return(0,i.useEffect)(()=>{document.querySelectorAll("[data-ingredient-filter-root]").forEach(e=>{e instanceof HTMLElement&&(e.dataset.reactFilterReady="true")})},[]),(0,t.jsxs)("section",{className:"dh-ingredient-explorer","aria-label":"Ingredient detail index","data-fallback-category":"All","data-fallback-line":"All","data-ingredient-filter-root":!0,children:[(0,t.jsxs)("div",{className:"dh-explorer-head",children:[(0,t.jsx)("p",{className:"dh-detail-primary",children:"INGREDIENT INDEX"}),(0,t.jsx)("h2",{children:"ko"===b&&h?h:u}),(0,t.jsx)("p",{children:"ko"===b&&f?f:g})]}),(0,t.jsxs)("div",{className:"dh-filter-stack","aria-label":"Product filters",children:[(0,t.jsx)("div",{className:"dh-filter-row","aria-label":"Product line",children:x.map(e=>(0,t.jsx)("button",{"aria-pressed":v===e.value,className:v===e.value?"is-active":"","data-line-filter":e.value,onClick:()=>{A(e.value),y("All")},type:"button",children:e.label},e.value))}),(0,t.jsx)("div",{className:"dh-filter-row dh-filter-row-soft","aria-label":"Ingredient category",children:j.map(e=>(0,t.jsx)("button",{"aria-pressed":L===e,className:L===e?"is-active":"","data-category-filter":e,onClick:()=>y(e),type:"button",children:"ko"===b&&"All"===e?"전체":e},e))})]}),(0,t.jsx)("div",{className:"dh-ingredient-count","data-ingredient-count":!0,children:"ko"===b?`${N.length}개 소재`:`${N.length}素材`}),(0,t.jsx)("div",{className:"dh-ingredient-card-grid",children:N.map(e=>{let i;return(0,t.jsxs)(r.default,{className:"dh-ingredient-card","data-category":e.category,"data-ingredient-card":!0,"data-line":e.line,href:(i="Functional Probiotics"===e.line?"/products/microbiome-probiotics":"/products/nature-ingredients",`${i}/${e.id}`),children:[(0,t.jsx)(a.default,{alt:"","aria-hidden":"true",height:320,loading:"eager",src:(0,s.getIngredientCardImage)(e.image),width:480}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.IngredientLineBadge,{label:"Functional Probiotics"===e.line?"Ⅰ. Functional Probiotics line":"Ⅱ. Functional Nature‘s food ingredients Line",line:e.line}),k.has(e.id)?(0,t.jsx)("span",{className:"dh-recognition-chip",children:"ko"===b?"개별인정형":"個別認定型素材"}):null,(0,t.jsx)("h3",{children:e.name}),(0,t.jsx)("strong",{children:e.area}),(0,t.jsx)("span",{children:e.intake}),(0,t.jsx)("em",{children:"DETAIL"})]})]},e.id)})}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:`
(() => {
  const roots = Array.from(document.querySelectorAll("[data-ingredient-filter-root]"));
  if (roots.length === 0) return;

  function sync(root, activeLine, activeCategory) {
    if (root.dataset.reactFilterReady === "true") return;

    const cards = Array.from(root.querySelectorAll("[data-ingredient-card]"));
    const lineButtons = Array.from(root.querySelectorAll("[data-line-filter]"));
    const categoryButtons = Array.from(root.querySelectorAll("[data-category-filter]"));
    const count = root.querySelector("[data-ingredient-count]");
    const visibleCategories = new Set(["All"]);

    cards.forEach((card) => {
      if (activeLine === "All" || card.getAttribute("data-line") === activeLine) {
        visibleCategories.add(card.getAttribute("data-category") || "");
      }
    });

    if (!visibleCategories.has(activeCategory)) activeCategory = "All";

    lineButtons.forEach((button) => {
      const isActive = button.getAttribute("data-line-filter") === activeLine;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    categoryButtons.forEach((button) => {
      const category = button.getAttribute("data-category-filter") || "All";
      const visible = visibleCategories.has(category);
      button.hidden = !visible;
      const isActive = category === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    let visibleCount = 0;
    cards.forEach((card) => {
      const lineMatch = activeLine === "All" || card.getAttribute("data-line") === activeLine;
      const categoryMatch = activeCategory === "All" || card.getAttribute("data-category") === activeCategory;
      const visible = lineMatch && categoryMatch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (count) count.textContent = visibleCount + "素材";
    root.dataset.fallbackLine = activeLine;
    root.dataset.fallbackCategory = activeCategory;
  }

  roots.forEach((root) => {
    root.dataset.fallbackLine = root.dataset.fallbackLine || "All";
    root.dataset.fallbackCategory = root.dataset.fallbackCategory || "All";
    sync(root, root.dataset.fallbackLine, root.dataset.fallbackCategory);
  });

  document.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-line-filter], [data-category-filter]") : null;
    if (!button) return;

    const root = button.closest("[data-ingredient-filter-root]");
    if (!root || root.dataset.reactFilterReady === "true") return;

    event.preventDefault();
    if (button.hasAttribute("data-line-filter")) {
      sync(root, button.getAttribute("data-line-filter") || "All", "All");
    } else {
      sync(root, root.dataset.fallbackLine || "All", button.getAttribute("data-category-filter") || "All");
    }
  });
})();
`}})]})}])}]);