(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,93512,e=>{"use strict";var t=e.i(43476),a=e.i(68877),i=e.i(57688),r=e.i(22016),l=e.i(71645),n=e.i(54181),o=e.i(87314),s=e.i(28747),c=e.i(98867),d=e.i(97630);let u=[{label:"All",value:"All"},{label:"Functional Probiotics",value:"Functional Probiotics"},{label:"Functional Nature’s food ingredients",value:"Nature-derived Ingredients"}],g=new Set(["med01","med02","nvp2106","nvp1702","nvp1703","nvp1704"]);e.s(["ProductIngredientExplorer",0,function({items:e,title:b,description:h,koTitle:f,koDescription:v}){let{language:A}=(0,n.useDevLanguage)(),[y,m]=(0,l.useState)("All"),[p,x]=(0,l.useState)("All"),k=(0,l.useMemo)(()=>"ko"===A?e.map(e=>(0,s.getKoreanIngredient)(e)):e,[e,A]),j=(0,l.useMemo)(()=>new Set(e.filter(e=>!!g.has(e.id)||[...e.origin??[],...e.evidenceTags,...e.healthClaims??[],...e.featurePoints??[]].some(e=>/個別認定型|개별인정|KFDA/.test(e))).map(e=>e.id)),[e]),C=(0,l.useMemo)(()=>u.map(e=>({...e,label:"ko"===A&&"All"!==e.value?s.devKoreanLabels.line[e.value]:"ko"===A?"전체":e.label})),[A]),L=(0,l.useMemo)(()=>{let e=new Set(["All"]);return k.forEach(t=>{("All"===y||t.line===y)&&e.add(t.category)}),e},[y,k]),N=(0,l.useMemo)(()=>["All",...Array.from(new Set(k.map(e=>e.category))).filter(e=>L.has(e))],[k,L]),S=L.has(p)?p:"All",E=(0,l.useMemo)(()=>k.filter(e=>{let t="All"===y||e.line===y,a="All"===S||e.category===S;return t&&a}),[y,k,S]);return(0,l.useEffect)(()=>{document.querySelectorAll("[data-ingredient-filter-root]").forEach(e=>{e instanceof HTMLElement&&(e.dataset.reactFilterReady="true")})},[]),(0,t.jsxs)("section",{className:"dh-ingredient-explorer","aria-label":"Ingredient detail index","data-fallback-category":"All","data-fallback-line":"All","data-ingredient-filter-root":!0,children:[(0,t.jsxs)("div",{className:"dh-explorer-head",children:[(0,t.jsx)("p",{className:"dh-detail-primary",children:"INGREDIENT INDEX"}),(0,t.jsx)("h2",{children:"ko"===A&&f?f:b}),(0,t.jsx)("p",{children:"ko"===A&&v?v:h})]}),(0,t.jsxs)("div",{className:"dh-filter-stack","aria-label":"Product filters",children:[(0,t.jsx)("div",{className:"dh-filter-row","aria-label":"Product line",children:C.map(e=>(0,t.jsx)("button",{"aria-pressed":y===e.value,className:y===e.value?"is-active":"","data-line-filter":e.value,onClick:()=>{m(e.value),x("All")},type:"button",children:e.label},e.value))}),(0,t.jsx)("div",{className:"dh-filter-row dh-filter-row-soft","aria-label":"Ingredient category",children:N.map(e=>(0,t.jsx)("button",{"aria-pressed":S===e,className:S===e?"is-active":"","data-category-filter":e,onClick:()=>x(e),type:"button",children:"ko"===A&&"All"===e?"전체":e},e))})]}),(0,t.jsx)("div",{className:"dh-ingredient-count","data-ingredient-count":!0,children:"ko"===A?`${E.length}개 소재`:`${E.length}素材`}),(0,t.jsx)("div",{className:"dh-ingredient-card-grid",children:E.map(e=>{let l;return(0,t.jsxs)(r.default,{className:"dh-ingredient-card","data-category":e.category,"data-ingredient-card":!0,"data-line":e.line,href:(l="Functional Probiotics"===e.line?"/products/microbiome-probiotics":"/products/nature-ingredients",`${l}/${e.id}/`),children:[(0,t.jsx)(i.default,{alt:"","aria-hidden":"true",height:320,loading:"eager",src:(0,d.getIngredientCardImage)(e.image),width:480}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"dh-ingredient-card-badges",children:[(0,t.jsx)(o.IngredientLineBadge,{label:"Functional Probiotics"===e.line?"Functional Probiotics":"Functional Nature’s food ingredients",line:e.line}),j.has(e.id)?(0,t.jsx)("span",{className:"dh-recognition-chip",children:"ko"===A?"개별인정형":"個別認定型素材"}):null]}),(0,t.jsx)("h3",{children:e.name}),(0,t.jsx)("strong",{children:e.area}),(0,t.jsxs)("span",{className:"dh-ingredient-card-intake",children:[(0,t.jsx)("em",{children:(0,c.getIngredientSpecLabel)(e,"ko"===A)}),e.intake]}),(0,t.jsxs)("em",{className:"dh-ingredient-card-cta",children:["DETAIL",(0,t.jsx)(a.ArrowRight,{"aria-hidden":"true",size:12,strokeWidth:3})]})]})]},e.id)})}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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