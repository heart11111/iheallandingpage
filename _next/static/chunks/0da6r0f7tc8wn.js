(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71987,88973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],71987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],88973)},96661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()])},5014,e=>{"use strict";var t=e.i(71645),r=e.i(71987),a=e.i(88973),i=e.i(96661);let l=(0,t.createContext)({}),o=(0,t.forwardRef)(({color:e,size:o,strokeWidth:n,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...g},h)=>{let{size:b=24,strokeWidth:f=2,absoluteStrokeWidth:v=!1,color:y="currentColor",className:A=""}=(0,t.useContext)(l)??{},m=s??v?24*Number(n??f)/Number(o??b):n??f;return(0,t.createElement)("svg",{ref:h,...r.default,width:o??b??r.default.width,height:o??b??r.default.height,stroke:e??y,strokeWidth:m,className:(0,i.mergeClasses)("lucide",A,c),...!d&&!(0,a.hasA11yProp)(g)&&{"aria-hidden":"true"},...g},[...u.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(d)?d:[d]])});e.s(["default",0,o],5014)},87314,e=>{"use strict";var t=e.i(43476),r=e.i(89765),a=e.i(88465);e.s(["IngredientLineBadge",0,function({line:e,label:i}){return(0,t.jsxs)("span",{className:`dh-category-badge dh-line-badge is-${"Functional Probiotics"===e?"probiotics":"Nature-derived Ingredients"===e?"nature":"category"}`,children:["Nature-derived Ingredients"===e?(0,t.jsx)(a.Sprout,{"aria-hidden":"true",size:15,strokeWidth:2.4}):(0,t.jsx)(r.FlaskConical,{"aria-hidden":"true",size:15,strokeWidth:2.4}),(0,t.jsx)("span",{children:i})]})}])},93512,e=>{"use strict";var t=e.i(43476),r=e.i(57688),a=e.i(22016),i=e.i(71645),l=e.i(87314);let o=[{label:"All",value:"All"},{label:"Microbiome Probiotics",value:"Functional Probiotics"},{label:"Nature Ingredients",value:"Nature-derived Ingredients"}];e.s(["ProductIngredientExplorer",0,function({items:e,title:n,description:s}){let[c,d]=(0,i.useState)("All"),[u,g]=(0,i.useState)("All"),h=(0,i.useMemo)(()=>{let t=new Set(["All"]);return e.forEach(e=>{("All"===c||e.line===c)&&t.add(e.category)}),t},[c,e]),b=(0,i.useMemo)(()=>["All",...Array.from(new Set(e.map(e=>e.category))).filter(e=>h.has(e))],[e,h]),f=h.has(u)?u:"All",v=(0,i.useMemo)(()=>e.filter(e=>{let t="All"===c||e.line===c,r="All"===f||e.category===f;return t&&r}),[c,e,f]);return(0,i.useEffect)(()=>{document.querySelectorAll("[data-ingredient-filter-root]").forEach(e=>{e instanceof HTMLElement&&(e.dataset.reactFilterReady="true")})},[]),(0,t.jsxs)("section",{className:"dh-ingredient-explorer","aria-label":"Ingredient detail index","data-ingredient-filter-root":!0,children:[(0,t.jsxs)("div",{className:"dh-explorer-head",children:[(0,t.jsx)("p",{className:"dh-detail-primary",children:"INGREDIENT INDEX"}),(0,t.jsx)("h2",{children:n}),(0,t.jsx)("p",{children:s})]}),(0,t.jsxs)("div",{className:"dh-filter-stack","aria-label":"Product filters",children:[(0,t.jsx)("div",{className:"dh-filter-row","aria-label":"Product line",children:o.map(e=>(0,t.jsx)("button",{"aria-pressed":c===e.value,className:c===e.value?"is-active":"","data-line-filter":e.value,onClick:()=>{d(e.value),g("All")},type:"button",children:e.label},e.value))}),(0,t.jsx)("div",{className:"dh-filter-row dh-filter-row-soft","aria-label":"Ingredient category",children:b.map(e=>(0,t.jsx)("button",{"aria-pressed":f===e,className:f===e?"is-active":"","data-category-filter":e,onClick:()=>g(e),type:"button",children:e},e))})]}),(0,t.jsxs)("div",{className:"dh-ingredient-count","data-ingredient-count":!0,children:[v.length,"素材"]}),(0,t.jsx)("div",{className:"dh-ingredient-card-grid",children:v.map(e=>{let i;return(0,t.jsxs)(a.default,{className:"dh-ingredient-card","data-category":e.category,"data-ingredient-card":!0,"data-line":e.line,href:(i="Functional Probiotics"===e.line?"/products/microbiome-probiotics":"/products/nature-ingredients",`${i}/${e.id}`),children:[(0,t.jsx)(r.default,{alt:"","aria-hidden":"true",height:320,src:e.image,width:480}),(0,t.jsxs)("div",{children:[(0,t.jsx)(l.IngredientLineBadge,{label:"Functional Probiotics"===e.line?"MICROBIOME PROBIOTICS":"NATURE INGREDIENTS",line:e.line}),(0,t.jsx)("h3",{children:e.name}),(0,t.jsx)("strong",{children:e.area}),(0,t.jsx)("span",{children:e.intake}),(0,t.jsx)("em",{children:"DETAIL"})]})]},e.id)})}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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