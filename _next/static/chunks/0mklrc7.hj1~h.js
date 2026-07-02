(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()])},71987,88973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],71987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],88973)},5014,e=>{"use strict";var t=e.i(71645),a=e.i(71987),r=e.i(88973),i=e.i(96661);let l=(0,t.createContext)({}),o=(0,t.forwardRef)(({color:e,size:o,strokeWidth:n,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...g},h)=>{let{size:b=24,strokeWidth:f=2,absoluteStrokeWidth:v=!1,color:A="currentColor",className:y=""}=(0,t.useContext)(l)??{},m=s??v?24*Number(n??f)/Number(o??b):n??f;return(0,t.createElement)("svg",{ref:h,...a.default,width:o??b??a.default.width,height:o??b??a.default.height,stroke:e??A,strokeWidth:m,className:(0,i.mergeClasses)("lucide",y,c),...!d&&!(0,r.hasA11yProp)(g)&&{"aria-hidden":"true"},...g},[...u.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(d)?d:[d]])});e.s(["default",0,o],5014)},93512,e=>{"use strict";var t=e.i(43476),a=e.i(57688),r=e.i(22016),i=e.i(71645),l=e.i(54181),o=e.i(87314),n=e.i(28747),s=e.i(97630);let c=[{label:"All",value:"All"},{label:"Functional Probiotics",value:"Functional Probiotics"},{label:"Functional Nature's Food Ingredients",value:"Nature-derived Ingredients"}];e.s(["ProductIngredientExplorer",0,function({items:e,title:d,description:u,koTitle:g,koDescription:h}){let{language:b}=(0,l.useDevLanguage)(),[f,v]=(0,i.useState)("All"),[A,y]=(0,i.useState)("All"),m=(0,i.useMemo)(()=>"ko"===b?e.map(e=>(0,n.getKoreanIngredient)(e)):e,[e,b]),k=(0,i.useMemo)(()=>c.map(e=>({...e,label:"ko"===b&&"All"!==e.value?n.devKoreanLabels.line[e.value]:"ko"===b?"전체":e.label})),[b]),p=(0,i.useMemo)(()=>{let e=new Set(["All"]);return m.forEach(t=>{("All"===f||t.line===f)&&e.add(t.category)}),e},[f,m]),C=(0,i.useMemo)(()=>["All",...Array.from(new Set(m.map(e=>e.category))).filter(e=>p.has(e))],[m,p]),x=p.has(A)?A:"All",j=(0,i.useMemo)(()=>m.filter(e=>{let t="All"===f||e.line===f,a="All"===x||e.category===x;return t&&a}),[f,m,x]);return(0,i.useEffect)(()=>{document.querySelectorAll("[data-ingredient-filter-root]").forEach(e=>{e instanceof HTMLElement&&(e.dataset.reactFilterReady="true")})},[]),(0,t.jsxs)("section",{className:"dh-ingredient-explorer","aria-label":"Ingredient detail index","data-fallback-category":"All","data-fallback-line":"All","data-ingredient-filter-root":!0,children:[(0,t.jsxs)("div",{className:"dh-explorer-head",children:[(0,t.jsx)("p",{className:"dh-detail-primary",children:"INGREDIENT INDEX"}),(0,t.jsx)("h2",{children:"ko"===b&&g?g:d}),(0,t.jsx)("p",{children:"ko"===b&&h?h:u})]}),(0,t.jsxs)("div",{className:"dh-filter-stack","aria-label":"Product filters",children:[(0,t.jsx)("div",{className:"dh-filter-row","aria-label":"Product line",children:k.map(e=>(0,t.jsx)("button",{"aria-pressed":f===e.value,className:f===e.value?"is-active":"","data-line-filter":e.value,onClick:()=>{v(e.value),y("All")},type:"button",children:e.label},e.value))}),(0,t.jsx)("div",{className:"dh-filter-row dh-filter-row-soft","aria-label":"Ingredient category",children:C.map(e=>(0,t.jsx)("button",{"aria-pressed":x===e,className:x===e?"is-active":"","data-category-filter":e,onClick:()=>y(e),type:"button",children:"ko"===b&&"All"===e?"전체":e},e))})]}),(0,t.jsx)("div",{className:"dh-ingredient-count","data-ingredient-count":!0,children:"ko"===b?`${j.length}개 소재`:`${j.length}素材`}),(0,t.jsx)("div",{className:"dh-ingredient-card-grid",children:j.map(e=>{let i;return(0,t.jsxs)(r.default,{className:"dh-ingredient-card","data-category":e.category,"data-ingredient-card":!0,"data-line":e.line,href:(i="Functional Probiotics"===e.line?"/products/microbiome-probiotics":"/products/nature-ingredients",`${i}/${e.id}`),children:[(0,t.jsx)(a.default,{alt:"","aria-hidden":"true",height:320,loading:"eager",src:(0,s.getIngredientCardImage)(e.image),width:480}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.IngredientLineBadge,{label:"ko"===b?n.devKoreanLabels.line[e.line]:"Functional Probiotics"===e.line?"MICROBIOME PROBIOTICS":"NATURE INGREDIENTS",line:e.line}),(0,t.jsx)("h3",{children:e.name}),(0,t.jsx)("strong",{children:e.area}),(0,t.jsx)("span",{children:e.intake}),(0,t.jsx)("em",{children:"DETAIL"})]})]},e.id)})}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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