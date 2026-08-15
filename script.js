// ==========================================
// MENU DATA — sourced from official CRÊPE STORY menu
// ==========================================
const MENU_DATA = [
    // عشاق الدجاج
    { cat: 'chicken', name: 'بانية', eng: 'Bania Chicken', price: 'وسط 73 | كبير 90 EGP', desc: 'قطع فراخ مقلية، فلفل، زيتون، كلوتشا، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'كرانشي', eng: 'Crunchy Chicken', price: 'وسط 90 | كبير 120 EGP', desc: 'صدور فراخ مقرمشة، فلفل، زيتون، كلوتشا، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'زنجر', eng: 'Zinger', price: 'وسط 95 | كبير 133 EGP', desc: 'صدور مقرمشة، تركي مدخن، موزاريلا، فلفل، زيتون، كلوتشا، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'كوردون بلو', eng: 'Cordon Bleu', price: 'وسط 90 | كبير 112 EGP', desc: 'صدور فراخ محشي، موزاريلا، زيتون، كلوتشا، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'شيش طاووق', eng: 'Shish Tawook', price: 'وسط 100 | كبير 128 EGP', desc: 'شيش جريل، موزاريلا، فلفل، طماطم، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'فاهيتا', eng: 'Fajita', price: 'وسط 112 | كبير 138 EGP', desc: 'صدور فراخ جريل، موزاريلا، فلفل، زيتون، مشروم، باربيكيو، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'تندر', eng: 'Tender', price: 'وسط 107 | كبير 128 EGP', desc: 'تندر، موزاريلا، فلفل، زيتون، مشروم، باربيكيو، شيدر', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'شاورما', eng: 'Shawarma', price: 'وسط 100 | كبير 133 EGP', desc: 'صدور فراخ جريل، موزاريلا، بصل، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'ميكس فراخ', eng: 'Mix Chicken', price: 'وسط 111 | كبير 138 EGP', desc: 'شيش جريل، صدور مقرمشة، فراخ مقلية، موزاريلا، بصل، زيتون، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'تشيزي عادنس', eng: 'Cheesy Adams', price: 'وسط 100 | كبير 123 EGP', desc: 'صدور مقرمشة، فلفل، زيتون، كلوتشا، شيدر، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'تشيكن رانش', eng: 'Chicken Ranch', price: 'وسط 100 | كبير 123 EGP', desc: 'صدور مقرمشة، فلفل، زيتون، كلوتشا، رانش، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'تشيكن باربيكيو', eng: 'Chicken BBQ', price: 'وسط 100 | كبير 123 EGP', desc: 'صدور مقرمشة، فلفل، كلوتشا، باربيكيو', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'سموكي', eng: 'Smokey', price: 'وسط 100 | كبير 123 EGP', desc: 'صدور مقرمشة، فلفل، زيتون، لحم مدخن، خيار مخلل، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'chicken', name: 'هالبينو', eng: 'Jalapeño', price: 'وسط 100 | كبير 123 EGP', desc: 'صدور مقرمشة، موزاريلا، زيتون، فلفل، كلوتشا، هالبينو، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    // عشاق اللحوم
    { cat: 'meat', name: 'هوت دوج', eng: 'Hot Dog', price: 'وسط 78 | كبير 95 EGP', desc: 'هوت دوج، موزاريلا، فلفل، بصل، زيتون، باربيكيو، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'meat', name: 'كفتة', eng: 'Kofta', price: 'وسط 84 | كبير 107 EGP', desc: 'كفتة جريل، موزاريلا، فلفل، بصل، خيار مخلل، باربيكيو، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'meat', name: 'سجق', eng: 'Sujuk', price: 'وسط 89 | كبير 113 EGP', desc: 'سجق، موزاريلا، فلفل، زيتون، باربيكيو، كاتشب، مسترده', img: 'assets/savory_crepe.png' },
    { cat: 'meat', name: 'برجر لحم', eng: 'Burger Meat', price: 'وسط 89 | كبير 118 EGP', desc: 'برجر، موزاريلا، فلفل، بصل، خيار مخلل، باربيكيو، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'meat', name: 'ميكس لحوم', eng: 'Mix Meat', price: 'وسط 108 | كبير 143 EGP', desc: 'برجر، هوت دوج، سجق، فلفل، بصل، خيار مخلل، باربيكيو، كاتشب', img: 'assets/savory_crepe.png' },
    // ميكسات
    { cat: 'mix', name: 'دوينو', eng: 'Douino', price: 'وسط 78 | كبير 100 EGP', desc: 'قطع فراخ مقلية، هوت دوج، فلفل، زيتون، كلوتشا، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'بيج شو', eng: 'Big Show', price: 'وسط 90 | كبير 100 EGP', desc: 'هوت دوج، برجر، خيار مخلل، فلفل، باربيكيو، شيدر، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'الأكيل', eng: 'Al Akeel', price: 'وسط 112 | كبير 139 EGP', desc: 'شيش، صدور مقرمشة، موزاريلا، سجق، فلفل، بصل، زيتون، باربيكيو، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'الصاروخ', eng: 'Al Saroukh', price: 'وسط 100 | كبير 118 EGP', desc: 'فراخ مقلية، موزاريلا، كفتة، هوت دوج، بطاطس، طماطم، زيتون، فلفل، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'كريب الوحش', eng: 'Monster Crepe', price: 'وسط 135 | كبير 160 EGP', desc: 'صدور مقرمشة، فاهيتا، شيش طاووق، كوردون بلو، لحم مدخن، تركي، سجق، هوت دوج، موزاريلا', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'كريب إستوري', eng: 'Crepe Story Special', price: 'وسط 119 | كبير 133 EGP', desc: 'صدور مقرمشة، هوت دوج، تركي مدخن، رانش، موزاريلا، زيتون، فلفل، كلوتشا، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'واعتين', eng: 'Double Trouble', price: 'وسط 95 | كبير 113 EGP', desc: 'عيش خار، فراخ مقلية حار، صدور مقرمشة، موزاريلا، زيتون، فلفل، باربيكيو، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'ميكسيكان مكس', eng: 'Mexican Mix', price: 'وسط 89 | كبير 118 EGP', desc: 'فاهيتا، فراخ، هوت دوج، موزاريلا، بصل، باربيكيو، فلفل ألوان، زيتون، كاتشب', img: 'assets/savory_crepe.png' },
    { cat: 'mix', name: 'ميكس جبن', eng: 'Cheese Mix', price: 'وسط 80 | كبير 100 EGP', desc: 'موزاريلا، رومي، شيدر، زيتون، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    // كريب الفطار
    { cat: 'breakfast', name: 'كريب بطاطس', eng: 'Potato Crepe', price: 'وسط 45 | كبير 56 EGP', desc: 'بطاطس، موزاريلا، فلفل، زيتون، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'breakfast', name: 'بطاطس بالبيض', eng: 'Potato & Egg Crepe', price: 'وسط 56 | كبير 68 EGP', desc: 'بطاطس، بيض مقلي، موزاريلا، فلفل، زيتون، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'breakfast', name: 'بطاطس مدخن', eng: 'Smoky Potato Crepe', price: 'وسط 55 | كبير 68 EGP', desc: 'بطاطس، هوت دوج، لحم مدخن، فلفل، زيتون، موزاريلا، صدر مدخن', img: 'assets/savory_crepe.png' },
    // كريب الحلو
    { cat: 'sweet', name: 'نيوتيلا', eng: 'Nutella Crepe', price: '90 EGP', desc: 'كريب مع نيوتيلا فاخرة', img: 'assets/sweet_crepe.png' },
    { cat: 'sweet', name: 'شيكولاته', eng: 'Chocolate Crepe', price: '50 EGP', desc: 'كريب مع صوص شيكولاته', img: 'assets/sweet_crepe.png' },
    // الوافل
    { cat: 'waffle', name: 'وافل نيوتيلا', eng: 'Nutella Waffle', price: '95 EGP', desc: 'وافل ذهبي مع نيوتيلا فاخرة', img: 'assets/waffle.png' },
    { cat: 'waffle', name: 'وافل شيكولاته', eng: 'Chocolate Waffle', price: '70 EGP', desc: 'وافل ذهبي مع صوص شيكولاته', img: 'assets/waffle.png' },
    // تشيز برجر
    { cat: 'burger', name: 'كلاسيك برجر', eng: 'Classic Burger', price: '80 EGP', desc: 'برجر لحم، خس، جبنة شيدر، كاتشب، مايونيز', img: 'assets/savory_crepe.png' },
    { cat: 'burger', name: 'برجر إستوري', eng: 'Story Burger', price: '120 EGP', desc: 'برجر لحم، بيف مدخن، خس، شيدر، بصل، طماطم', img: 'assets/savory_crepe.png' },
    // القسم السوري
    { cat: 'syrian', name: 'بطاطس سادة', eng: 'Plain Fries', price: '30 EGP', desc: 'بطاطس مقلية سادة', img: 'assets/savory_crepe.png' },
    { cat: 'syrian', name: 'بطاطس موزاريلا', eng: 'Mozzarella Fries', price: '40 EGP', desc: 'بطاطس مع جبن موزاريلا', img: 'assets/savory_crepe.png' },
    { cat: 'syrian', name: 'بطاطس سوسيس', eng: 'Sausage Fries', price: '50 EGP', desc: 'بطاطس مع سوسيس', img: 'assets/savory_crepe.png' },
    { cat: 'syrian', name: 'بطاطس برجر', eng: 'Burger Fries', price: '50 EGP', desc: 'بطاطس مع قطع برجر', img: 'assets/savory_crepe.png' },
    { cat: 'syrian', name: 'بطاطس بانية', eng: 'Bania Fries', price: '55 EGP', desc: 'بطاطس مع فراخ مقلية', img: 'assets/savory_crepe.png' },
    { cat: 'syrian', name: 'بطاطس إستريس', eng: 'Stress Fries', price: '75 EGP', desc: 'بطاطس مع تشكيلة مميزة', img: 'assets/savory_crepe.png' },
];

function renderMenu(category, searchQuery = '') {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    let items = MENU_DATA;
    if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        items = MENU_DATA.filter(i => 
            i.name.toLowerCase().includes(query) || 
            i.eng.toLowerCase().includes(query) ||
            i.desc.toLowerCase().includes(query)
        );
    } else if (category) {
        items = MENU_DATA.filter(i => i.cat === category);
    }

    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 30px; color: var(--text-gray);">
                <p class="lang-ar">عذراً، لم نجد أصنافا تطابق بحثك 🔍</p>
                <p class="lang-en">No items found matching your search 🔍</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(item => {
        const hasSizes = item.price.includes('وسط') || item.price.includes('كبير');
        let orderBtnHtml = '';

        let badgeHtml = '';
        if (item.name.includes('زنجر') || item.name.includes('الوحش') || item.name.includes('نيوتيلا')) {
            badgeHtml = `<span class="badge-tag badge-hot"><span class="lang-ar">🔥 الأكثر طلباً</span><span class="lang-en">🔥 Popular</span></span>`;
        } else if (item.name.includes('إستوري') || item.name.includes('الصاروخ')) {
            badgeHtml = `<span class="badge-tag badge-star"><span class="lang-ar">⭐ مميز</span><span class="lang-en">⭐ Special</span></span>`;
        }

        if (hasSizes) {
            orderBtnHtml = `
        <div class="order-buttons-group">
          <button class="btn-select-order" data-item-ar="${item.name}" data-item-en="${item.eng}" data-size="medium">
            <span class="lang-ar">وسط <i class="fa-solid fa-plus"></i></span>
            <span class="lang-en">Medium <i class="fa-solid fa-plus"></i></span>
          </button>
          <button class="btn-select-order" data-item-ar="${item.name}" data-item-en="${item.eng}" data-size="large">
            <span class="lang-ar">كبير <i class="fa-solid fa-plus"></i></span>
            <span class="lang-en">Large <i class="fa-solid fa-plus"></i></span>
          </button>
        </div>
      `;
        } else {
            orderBtnHtml = `
        <button class="btn-select-order" data-item-ar="${item.name}" data-item-en="${item.eng}">
          <span class="lang-ar">اطلب <i class="fa-solid fa-plus"></i></span>
          <span class="lang-en">Order <i class="fa-solid fa-plus"></i></span>
        </button>
      `;
        }

        return `
      <div class="menu-item-card" data-category="${item.cat}">
        ${badgeHtml}
        <div class="item-img-wrapper"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'"></div>
        <div class="item-details">
          <h3 class="item-name">${item.name}</h3>
          <span class="item-price">${item.price}</span>
          <p class="item-desc">${item.desc}</p>
          ${orderBtnHtml}
        </div>
      </div>
    `;
    }).join('');
    // Re-bind order buttons after render
    bindOrderButtons();
}

function setFormSize(size) {
    const sizeInput = document.getElementById('order-size');
    if (sizeInput) {
        sizeInput.value = size;
    }
    document.querySelectorAll('.size-type-btn').forEach(btn => {
        const btnSize = btn.getAttribute('data-size');
        btn.classList.toggle('active', btnSize === size);
    });
}

function bindOrderButtons() {
    document.querySelectorAll('.btn-select-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemAr = btn.getAttribute('data-item-ar');
            const clickedSize = btn.getAttribute('data-size');
            const sel = document.getElementById('order-item');

            if (!sel) {
                // We are on menu.html, store selection and redirect
                localStorage.setItem('selectedMenuItem', itemAr);
                if (clickedSize) {
                    localStorage.setItem('selectedMenuSize', clickedSize);
                }
                window.location.href = 'order.html';
                return;
            }

            // We are on index.html, select normal items
            for (let i = 0; i < sel.options.length; i++) {
                if (sel.options[i].value.includes(itemAr)) { sel.selectedIndex = i; break; }
            }

            const qtyInput = document.getElementById('order-qty');
            if (qtyInput) {
                qtyInput.value = 1;
            }

            if (clickedSize) {
                setFormSize(clickedSize);
            }

            sel.dispatchEvent(new Event('change'));

            const orderFormSec = document.getElementById('order-form-section');
            if (orderFormSec) {
                orderFormSec.scrollIntoView({ behavior: 'smooth' });
            }

            const fc = document.querySelector('.form-container');
            if (fc) {
                fc.style.borderColor = 'var(--primary-color)';
                fc.style.boxShadow = '0 0 30px rgba(197,160,89,0.45)';
                setTimeout(() => { fc.style.borderColor = ''; fc.style.boxShadow = ''; }, 1200);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0a. PARTICLE DISSOLVE SPLASH SCREEN
    // ==========================================
    const splash = document.getElementById('door-splash');
    if (splash) {
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            // 1. Fade out the logo
            const logoWrap = document.getElementById('door-logo-wrap');
            if (logoWrap) logoWrap.classList.add('dissolving');

            // 2. Build the particle grid
            const layer = document.createElement('div');
            layer.className = 'particles-layer';
            splash.appendChild(layer);

            const CELL = 55; // size of each particle tile (px)
            const W = window.innerWidth;
            const H = window.innerHeight;
            const cols = Math.ceil(W / CELL) + 1;
            const rows = Math.ceil(H / CELL) + 1;
            const pw = Math.ceil(W / cols);
            const ph = Math.ceil(H / rows);
            const cx = W / 2;
            const cy = H / 2;
            const maxDist = Math.sqrt(cx * cx + cy * cy);

            // Build fragment for performance
            const frag = document.createDocumentFragment();

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const p = document.createElement('div');

                    // Gold tint: ~15% gold, ~10% gold-dim, rest dark
                    const roll = Math.random();
                    if (roll < 0.10)      p.className = 'splash-particle gold';
                    else if (roll < 0.22) p.className = 'splash-particle gold-dim';
                    else                  p.className = 'splash-particle';

                    const px = c * pw;
                    const py = r * ph;
                    p.style.left   = px + 'px';
                    p.style.top    = py + 'px';
                    p.style.width  = pw + 'px';
                    p.style.height = ph + 'px';

                    // Direction: fly outward from center
                    const dx    = (px + pw / 2) - cx;
                    const dy    = (py + ph / 2) - cy;
                    const dist  = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx);
                    // Particles near center travel slower, edges faster
                    const speed = 220 + (dist / maxDist) * 480 + Math.random() * 120;
                    const tx    = Math.cos(angle) * speed;
                    const ty    = Math.sin(angle) * speed;
                    const rot   = (Math.random() - 0.5) * 600;
                    // Delay: center first (ripple outward)
                    const delay = (dist / maxDist) * 0.22 + Math.random() * 0.08;
                    const dur   = 0.75 + Math.random() * 0.3;

                    p.style.setProperty('--tx',    tx + 'px');
                    p.style.setProperty('--ty',    ty + 'px');
                    p.style.setProperty('--rot',   rot + 'deg');
                    p.style.setProperty('--delay', delay + 's');
                    p.style.setProperty('--dur',   dur + 's');
                    p.style.animationDelay    = delay + 's';
                    p.style.animationDuration = dur + 's';

                    frag.appendChild(p);
                }
            }

            layer.appendChild(frag);

            // 3. Remove splash after all particles have flown
            //    Max delay (~0.30s) + max duration (~1.05s) + small buffer
            setTimeout(() => {
                splash.classList.add('hidden');
                document.body.style.overflow = '';
            }, 1500);

        }, 1900);
    }

    // ==========================================
    // 0. THEME COLOR SWITCHER
    // ==========================================
    const THEMES = {
        midnight: { bg: '#0B1215', glow1: 'rgba(197,160,89,0.22)', glow2: '#172F3A', glow3: 'rgba(197,160,89,0.1)' },
        ocean: { bg: '#0D1B2A', glow1: 'rgba(30,90,160,0.25)', glow2: '#0A2240', glow3: 'rgba(197,160,89,0.1)' },
        forest: { bg: '#0A1A0F', glow1: 'rgba(30,120,60,0.25)', glow2: '#102010', glow3: 'rgba(197,160,89,0.1)' },
        espresso: { bg: '#1A0F0A', glow1: 'rgba(160,80,30,0.25)', glow2: '#2C1810', glow3: 'rgba(197,160,89,0.1)' },
        plum: { bg: '#160D24', glow1: 'rgba(120,40,180,0.25)', glow2: '#1E0F2E', glow3: 'rgba(197,160,89,0.1)' },
        slate: { bg: '#141820', glow1: 'rgba(80,100,140,0.22)', glow2: '#1C2028', glow3: 'rgba(197,160,89,0.1)' },
    };

    const applyTheme = (themeName) => {
        const t = THEMES[themeName];
        if (!t) return;
        const root = document.documentElement;
        root.style.setProperty('--bg-color', t.bg);
        document.body.style.backgroundColor = t.bg;
        document.documentElement.style.backgroundColor = t.bg;
        // Save preference
        localStorage.setItem('crepe_story_theme', themeName);
        // Update active dot
        document.querySelectorAll('.theme-dot').forEach(d => {
            d.classList.toggle('active', d.getAttribute('data-theme') === themeName);
        });
    };

    // Bind theme dots
    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            applyTheme(dot.getAttribute('data-theme'));
        });
    });

    // Toggle open/close on palette button click
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeDots = document.getElementById('theme-dots');
    themeToggleBtn.addEventListener('click', () => {
        themeDots.classList.toggle('open');
    });
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!document.getElementById('theme-switcher').contains(e.target)) {
            themeDots.classList.remove('open');
        }
    });

    // Restore saved theme
    const savedTheme = localStorage.getItem('crepe_story_theme') || 'midnight';
    applyTheme(savedTheme);

    // ==========================================
    // 1. LANGUAGE SWITCHING SYSTEM
    // ==========================================
    const langBtn = document.getElementById('lang-btn');
    const htmlTag = document.documentElement;
    const bodyTag = document.body;

    // Retrieve language from localStorage or default to 'ar'
    let currentLang = localStorage.getItem('crepe_story_lang') || 'ar';

    const setLanguage = (lang) => {
        currentLang = lang;
        bodyTag.setAttribute('data-lang', lang);

        if (lang === 'ar') {
            htmlTag.setAttribute('dir', 'rtl');
            htmlTag.setAttribute('lang', 'ar');
        } else {
            htmlTag.setAttribute('dir', 'ltr');
            htmlTag.setAttribute('lang', 'en');
        }

        localStorage.setItem('crepe_story_lang', lang);

        // Update WhatsApp form item select options placeholder based on language
        updateFormPlaceholder(lang);
    };

    const updateFormPlaceholder = (lang) => {
        const orderItemSelect = document.getElementById('order-item');
        if (orderItemSelect) {
            const firstOption = orderItemSelect.options[0];
            if (lang === 'ar') {
                firstOption.text = '-- اختر صنفاً من القائمة --';
            } else {
                firstOption.text = '-- Choose an item --';
            }
        }
    };

    // Initialize language
    setLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        const targetLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(targetLang);
    });

    // ==========================================
    // 2. SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ==========================================
    // 3. DIGITAL MENU CATEGORY TABS & LIVE SEARCH
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('menu-search-input');

    // Initial render
    renderMenu('chicken');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (searchInput) searchInput.value = '';
            renderMenu(btn.getAttribute('data-category'));
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            const activeTab = document.querySelector('.tab-btn.active');
            const activeCategory = activeTab ? activeTab.getAttribute('data-category') : 'chicken';
            renderMenu(query ? '' : activeCategory, query);
        });
    }

    // Floating Cart visibility handler
    const floatingCart = document.getElementById('floating-cart-btn');
    if (floatingCart) {
        const storedItem = localStorage.getItem('selectedMenuItem');
        if (storedItem) {
            floatingCart.classList.add('visible');
        }
    }
    // ==========================================
    // 4. WHATSAPP FORM SUBMISSION
    // ==========================================

    // Order type toggle (delivery / pickup)
    document.querySelectorAll('.order-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('order-type').value = btn.getAttribute('data-type');
        });
    });

    // Payment type toggle (cash / vodafone)
    document.querySelectorAll('.payment-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.payment-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('payment-type').value = btn.getAttribute('data-pay');
        });
    });

    // Size type toggle (medium / large)
    document.querySelectorAll('.size-type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('order-size').value = btn.getAttribute('data-size');
        });
    });

    // Show/hide size selection dynamically based on chosen item
    const orderItemSelect = document.getElementById('order-item');
    const formGroupSize = document.getElementById('form-group-size');
    if (orderItemSelect && formGroupSize) {
        const toggleSizeVisibility = () => {
            if (orderItemSelect.selectedIndex < 0) return;
            const selectedText = orderItemSelect.options[orderItemSelect.selectedIndex].text;
            const hasSizes = selectedText.includes('وسط') || selectedText.includes('كبير') || selectedText.includes('|');
            if (hasSizes) {
                formGroupSize.style.display = 'block';
            } else {
                formGroupSize.style.display = 'none';
            }
        };
        orderItemSelect.addEventListener('change', toggleSizeVisibility);
        // Run initially
        toggleSizeVisibility();
    }

    const whatsappForm = document.getElementById('whatsapp-form');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('user-name').value.trim();
            const phone = document.getElementById('user-phone').value.trim();
            const orderItemSelect = document.getElementById('order-item');
            const orderQtyInput = document.getElementById('order-qty');
            const notes = document.getElementById('order-notes').value.trim();

            const item = orderItemSelect ? orderItemSelect.value : '';
            const qty = orderQtyInput ? orderQtyInput.value : '1';
            const orderTypeInput = document.getElementById('order-type');
            const orderType = orderTypeInput ? orderTypeInput.value : 'delivery';
            const orderTypeAr = orderType === 'delivery' ? '🏍️ توصيل (أوردر)' : '🏪 استلام من المحل';
            const orderTypeEn = orderType === 'delivery' ? '🏍️ Delivery' : '🏪 Pickup';

            const paymentTypeInput = document.getElementById('payment-type');
            const paymentType = paymentTypeInput ? paymentTypeInput.value : 'cash';
            const paymentTypeAr = paymentType === 'cash' ? '💵 نقدي (كاش)' : '📱 فودافون كاش';
            const paymentTypeEn = paymentType === 'cash' ? '💵 Cash' : '📱 Vodafone Cash';

            const showSize = formGroupSize && formGroupSize.style.display !== 'none';
            const sizeInput = document.getElementById('order-size');
            const size = sizeInput ? sizeInput.value : 'medium';
            const sizeAr = size === 'medium' ? 'وسط' : 'كبير';
            const sizeEn = size === 'medium' ? 'Medium' : 'Large';

            if (!item) {
                alert(currentLang === 'ar' ? 'يرجى اختيار صنف من قائمة الطعام!' : 'Please select an item from the menu!');
                return;
            }

            const waNumber = '201099564544'; // 20 is Egypt code
            let messageText = '';

            if (currentLang === 'ar') {
                messageText = `🥞 *طلب جديد - CRÊPE STORY* 🥞\n` +
                    `-----------------------------------------\n` +
                    `👤 *الاسم:* ${name}\n` +
                    `📞 *الهاتف:* ${phone}\n` +
                    `🍽️ *الطلب:* ${item}\n` +
                    `🔢 *الكمية:* ${qty}\n`;
                if (showSize) {
                    messageText += `📐 *الحجم:* ${sizeAr}\n`;
                }
                messageText += `📦 *نوع الطلب:* ${orderTypeAr}\n` +
                    `💳 *طريقة الدفع:* ${paymentTypeAr}\n`;
                if (notes) {
                    messageText += `✍️ *ملاحظات إضافية:* ${notes}\n`;
                }
                messageText += `-----------------------------------------\n` +
                    `✨ نسعد بخدمتكم ونتمنى لكم وجبة شهية! ✨`;
            } else {
                messageText = `🥞 *New Order - CRÊPE STORY* 🥞\n` +
                    `-----------------------------------------\n` +
                    `👤 *Name:* ${name}\n` +
                    `📞 *Phone:* ${phone}\n` +
                    `🍽️ *Dish:* ${item}\n` +
                    `🔢 *Quantity:* ${qty}\n`;
                if (showSize) {
                    messageText += `📐 *Size:* ${sizeEn}\n`;
                }
                messageText += `📦 *Order Type:* ${orderTypeEn}\n` +
                    `💳 *Payment Method:* ${paymentTypeEn}\n`;
                if (notes) {
                    messageText += `✍️ *Special Requests:* ${notes}\n`;
                }
                messageText += `-----------------------------------------\n` +
                    `✨ We look forward to serving you! Bon appétit! ✨`;
            }

            const encodedText = encodeURIComponent(messageText);
            const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

            window.open(waUrl, '_blank');
        });
    }

    // ==========================================
    // 6. PARALLAX EFFECT FOR GLOW BULBS
    // ==========================================
    const glows = document.querySelectorAll('.bg-glow');

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (mouseX - centerX) * 0.03;
            const moveY = (mouseY - centerY) * 0.03;

            glows.forEach((glow, index) => {
                const factor = (index + 1) * 0.5;
                if (index === 0) {
                    glow.style.transform = `translate(calc(-50% + ${moveX * factor}px), ${moveY * factor}px)`;
                } else {
                    glow.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
                }
            });
        });
    }

    // ==========================================
    // 7. CARD CLICK RIPPLE EFFECT
    // ==========================================
    const rippleElements = document.querySelectorAll('.social-card, .btn-order, .btn-order-now, .btn-submit-order, .tab-btn');

    rippleElements.forEach(el => {
        el.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('card-ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add dynamically styled ripple elements to head
    const style = document.createElement('style');
    style.innerHTML = `
        .social-card, .btn-order, .btn-submit-order, .tab-btn {
            position: relative;
            overflow: hidden;
        }
        .card-ripple {
            position: absolute;
            background: rgba(197, 160, 89, 0.22);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
            width: 160px;
            height: 160px;
            margin-left: -80px;
            margin-top: -80px;
        }
        @keyframes rippleEffect {
            to {
                transform: scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    // Check if redirecting from menu.html with selected item
    const storedItem = localStorage.getItem('selectedMenuItem');
    if (storedItem) {
        const sel = document.getElementById('order-item');
        if (sel) {
            for (let i = 0; i < sel.options.length; i++) {
                if (sel.options[i].value.includes(storedItem)) {
                    sel.selectedIndex = i;
                    break;
                }
            }

            const storedSize = localStorage.getItem('selectedMenuSize');
            if (storedSize) {
                setFormSize(storedSize);
                localStorage.removeItem('selectedMenuSize');
            }

            sel.dispatchEvent(new Event('change'));

            setTimeout(() => {
                const orderFormSec = document.getElementById('order-form-section');
                if (orderFormSec) {
                    orderFormSec.scrollIntoView({ behavior: 'smooth' });
                }
                const fc = document.querySelector('.form-container');
                if (fc) {
                    fc.style.borderColor = 'var(--primary-color)';
                    fc.style.boxShadow = '0 0 30px rgba(179, 143, 77, 0.45)';
                    setTimeout(() => { fc.style.borderColor = ''; fc.style.boxShadow = ''; }, 1200);
                }
            }, 500);
            localStorage.removeItem('selectedMenuItem');
        }
    }
});

// ==========================================
// 8. PWA SERVICE WORKER REGISTRATION & INSTALL PROMPT
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('PWA Service Worker registered successfully with scope:', reg.scope))
            .catch((err) => console.warn('PWA Service Worker registration failed:', err));
    });
}

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showPwaInstallBanner();
});

function showPwaInstallBanner() {
    if (document.getElementById('pwa-install-banner')) return;

    const isAr = (localStorage.getItem('crepe_story_lang') || 'ar') === 'ar';
    const banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.className = 'pwa-install-banner';

    banner.innerHTML = `
        <div class="pwa-banner-info">
            <img src="logo.jpg" alt="Crêpe Story Logo" class="pwa-banner-icon">
            <div class="pwa-banner-text">
                <span class="pwa-banner-title">${isAr ? 'تطبيق كريب ستوري 📱' : 'Crêpe Story App 📱'}</span>
                <span class="pwa-banner-sub">${isAr ? 'ثبّت التطبيق على هاتفك لطلب أسرع' : 'Install app on your phone for quick orders'}</span>
            </div>
        </div>
        <div class="pwa-banner-actions">
            <button class="btn-pwa-install" id="btn-pwa-install-action">
                ${isAr ? 'تثبيت الآن' : 'Install'}
            </button>
            <button class="btn-pwa-close" id="btn-pwa-close-action" title="إغلاق">&times;</button>
        </div>
    `;

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.classList.add('show');
    }, 1000);

    document.getElementById('btn-pwa-install-action').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`PWA install outcome: ${outcome}`);
            deferredPrompt = null;
        }
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 400);
    });

    document.getElementById('btn-pwa-close-action').addEventListener('click', () => {
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 400);
    });
}