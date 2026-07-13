// ==========================================
// MENU DATA — sourced from official CRÊPE STORY menu
// ==========================================
const MENU_DATA = [
  // عشاق الدجاج
  { cat:'chicken', name:'بانية', eng:'Bania Chicken', price:'وسط 73 | كبير 90 EGP', desc:'قطع فراخ مقلية، فلفل، زيتون، كلوتشا، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'كرانشي', eng:'Crunchy Chicken', price:'وسط 90 | كبير 120 EGP', desc:'صدور فراخ مقرمشة، فلفل، زيتون، كلوتشا، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'زنجر', eng:'Zinger', price:'وسط 95 | كبير 133 EGP', desc:'صدور مقرمشة، تركي مدخن، موزاريلا، فلفل، زيتون، كلوتشا، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'كوردون بلو', eng:'Cordon Bleu', price:'وسط 90 | كبير 112 EGP', desc:'صدور فراخ محشي، موزاريلا، زيتون، كلوتشا، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'شيش طاووق', eng:'Shish Tawook', price:'وسط 100 | كبير 128 EGP', desc:'شيش جريل، موزاريلا، فلفل، طماطم، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'فاهيتا', eng:'Fajita', price:'وسط 112 | كبير 138 EGP', desc:'صدور فراخ جريل، موزاريلا، فلفل، زيتون، مشروم، باربيكيو، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'تندر', eng:'Tender', price:'وسط 107 | كبير 128 EGP', desc:'تندر، موزاريلا، فلفل، زيتون، مشروم، باربيكيو، شيدر', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'شاورما', eng:'Shawarma', price:'وسط 100 | كبير 133 EGP', desc:'صدور فراخ جريل، موزاريلا، بصل، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'ميكس فراخ', eng:'Mix Chicken', price:'وسط 111 | كبير 138 EGP', desc:'شيش جريل، صدور مقرمشة، فراخ مقلية، موزاريلا، بصل، زيتون، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'تشيزي عادنس', eng:'Cheesy Adams', price:'وسط 100 | كبير 123 EGP', desc:'صدور مقرمشة، فلفل، زيتون، كلوتشا، شيدر، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'تشيكن رانش', eng:'Chicken Ranch', price:'وسط 100 | كبير 123 EGP', desc:'صدور مقرمشة، فلفل، زيتون، كلوتشا، رانش، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'تشيكن باربيكيو', eng:'Chicken BBQ', price:'وسط 100 | كبير 123 EGP', desc:'صدور مقرمشة، فلفل، كلوتشا، باربيكيو', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'سموكي', eng:'Smokey', price:'وسط 100 | كبير 123 EGP', desc:'صدور مقرمشة، فلفل، زيتون، لحم مدخن، خيار مخلل، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'chicken', name:'هالبينو', eng:'Jalapeño', price:'وسط 100 | كبير 123 EGP', desc:'صدور مقرمشة، موزاريلا، زيتون، فلفل، كلوتشا، هالبينو، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  // عشاق اللحوم
  { cat:'meat', name:'هوت دوج', eng:'Hot Dog', price:'وسط 78 | كبير 95 EGP', desc:'هوت دوج، موزاريلا، فلفل، بصل، زيتون، باربيكيو، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'meat', name:'كفتة', eng:'Kofta', price:'وسط 84 | كبير 107 EGP', desc:'كفتة جريل، موزاريلا، فلفل، بصل، خيار مخلل، باربيكيو، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'meat', name:'سجق', eng:'Sujuk', price:'وسط 89 | كبير 113 EGP', desc:'سجق، موزاريلا، فلفل، زيتون، باربيكيو، كاتشب، مسترده', img:'assets/savory_crepe.png' },
  { cat:'meat', name:'برجر لحم', eng:'Burger Meat', price:'وسط 89 | كبير 118 EGP', desc:'برجر، موزاريلا، فلفل، بصل، خيار مخلل، باربيكيو، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'meat', name:'ميكس لحوم', eng:'Mix Meat', price:'وسط 108 | كبير 143 EGP', desc:'برجر، هوت دوج، سجق، فلفل، بصل، خيار مخلل، باربيكيو، كاتشب', img:'assets/savory_crepe.png' },
  // ميكسات
  { cat:'mix', name:'دوينو', eng:'Douino', price:'وسط 78 | كبير 100 EGP', desc:'قطع فراخ مقلية، هوت دوج، فلفل، زيتون، كلوتشا، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'بيج شو', eng:'Big Show', price:'وسط 90 | كبير 100 EGP', desc:'هوت دوج، برجر، خيار مخلل، فلفل، باربيكيو، شيدر، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'الأكيل', eng:'Al Akeel', price:'وسط 112 | كبير 139 EGP', desc:'شيش، صدور مقرمشة، موزاريلا، سجق، فلفل، بصل، زيتون، باربيكيو، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'الصاروخ', eng:'Al Saroukh', price:'وسط 100 | كبير 118 EGP', desc:'فراخ مقلية، موزاريلا، كفتة، هوت دوج، بطاطس، طماطم، زيتون، فلفل، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'كريب الوحش', eng:'Monster Crepe', price:'وسط 135 | كبير 160 EGP', desc:'صدور مقرمشة، فاهيتا، شيش طاووق، كوردون بلو، لحم مدخن، تركي، سجق، هوت دوج، موزاريلا', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'كريب إستوري', eng:'Crepe Story Special', price:'وسط 119 | كبير 133 EGP', desc:'صدور مقرمشة، هوت دوج، تركي مدخن، رانش، موزاريلا، زيتون، فلفل، كلوتشا، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'واعتين', eng:'Double Trouble', price:'وسط 95 | كبير 113 EGP', desc:'عيش خار، فراخ مقلية حار، صدور مقرمشة، موزاريلا، زيتون، فلفل، باربيكيو، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'ميكسيكان مكس', eng:'Mexican Mix', price:'وسط 89 | كبير 118 EGP', desc:'فاهيتا، فراخ، هوت دوج، موزاريلا، بصل، باربيكيو، فلفل ألوان، زيتون، كاتشب', img:'assets/savory_crepe.png' },
  { cat:'mix', name:'ميكس جبن', eng:'Cheese Mix', price:'وسط 80 | كبير 100 EGP', desc:'موزاريلا، رومي، شيدر، زيتون، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  // كريب الفطار
  { cat:'breakfast', name:'كريب بطاطس', eng:'Potato Crepe', price:'وسط 45 | كبير 56 EGP', desc:'بطاطس، موزاريلا، فلفل، زيتون، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'breakfast', name:'بطاطس بالبيض', eng:'Potato & Egg Crepe', price:'وسط 56 | كبير 68 EGP', desc:'بطاطس، بيض مقلي، موزاريلا، فلفل، زيتون، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'breakfast', name:'بطاطس مدخن', eng:'Smoky Potato Crepe', price:'وسط 55 | كبير 68 EGP', desc:'بطاطس، هوت دوج، لحم مدخن، فلفل، زيتون، موزاريلا، صدر مدخن', img:'assets/savory_crepe.png' },
  // كريب الحلو
  { cat:'sweet', name:'نيوتيلا', eng:'Nutella Crepe', price:'90 EGP', desc:'كريب مع نيوتيلا فاخرة', img:'assets/sweet_crepe.png' },
  { cat:'sweet', name:'شيكولاته', eng:'Chocolate Crepe', price:'50 EGP', desc:'كريب مع صوص شيكولاته', img:'assets/sweet_crepe.png' },
  // الوافل
  { cat:'waffle', name:'وافل نيوتيلا', eng:'Nutella Waffle', price:'95 EGP', desc:'وافل ذهبي مع نيوتيلا فاخرة', img:'assets/waffle.png' },
  { cat:'waffle', name:'وافل شيكولاته', eng:'Chocolate Waffle', price:'70 EGP', desc:'وافل ذهبي مع صوص شيكولاته', img:'assets/waffle.png' },
  // تشيز برجر
  { cat:'burger', name:'كلاسيك برجر', eng:'Classic Burger', price:'80 EGP', desc:'برجر لحم، خس، جبنة شيدر، كاتشب، مايونيز', img:'assets/savory_crepe.png' },
  { cat:'burger', name:'برجر إستوري', eng:'Story Burger', price:'120 EGP', desc:'برجر لحم، بيف مدخن، خس، شيدر، بصل، طماطم', img:'assets/savory_crepe.png' },
  // القسم السوري
  { cat:'syrian', name:'بطاطس سادة', eng:'Plain Fries', price:'30 EGP', desc:'بطاطس مقلية سادة', img:'assets/savory_crepe.png' },
  { cat:'syrian', name:'بطاطس موزاريلا', eng:'Mozzarella Fries', price:'40 EGP', desc:'بطاطس مع جبن موزاريلا', img:'assets/savory_crepe.png' },
  { cat:'syrian', name:'بطاطس سوسيس', eng:'Sausage Fries', price:'50 EGP', desc:'بطاطس مع سوسيس', img:'assets/savory_crepe.png' },
  { cat:'syrian', name:'بطاطس برجر', eng:'Burger Fries', price:'50 EGP', desc:'بطاطس مع قطع برجر', img:'assets/savory_crepe.png' },
  { cat:'syrian', name:'بطاطس بانية', eng:'Bania Fries', price:'55 EGP', desc:'بطاطس مع فراخ مقلية', img:'assets/savory_crepe.png' },
  { cat:'syrian', name:'بطاطس إستريس', eng:'Stress Fries', price:'75 EGP', desc:'بطاطس مع تشكيلة مميزة', img:'assets/savory_crepe.png' },
];

function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  const items = MENU_DATA.filter(i => i.cat === category);
  grid.innerHTML = items.map(item => `
    <div class="menu-item-card" data-category="${item.cat}">
      <div class="item-img-wrapper"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="item-details">
        <div class="item-header">
          <h3>${item.name}</h3>
          <span class="item-price">${item.price}</span>
        </div>
        <p>${item.desc}</p>
        <button class="btn-select-order" data-item-ar="${item.name}" data-item-en="${item.eng}">
          <span class="lang-ar">اطلب <i class="fa-solid fa-plus"></i></span>
          <span class="lang-en">Order <i class="fa-solid fa-plus"></i></span>
        </button>
      </div>
    </div>`).join('');
  // Re-bind order buttons after render
  bindOrderButtons();
}

function bindOrderButtons() {
  document.querySelectorAll('.btn-select-order').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemAr = btn.getAttribute('data-item-ar');
      const sel = document.getElementById('order-item');
      for (let i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value.includes(itemAr)) { sel.selectedIndex = i; break; }
      }
      document.getElementById('order-qty').value = 1;
      document.getElementById('order-form-section').scrollIntoView({ behavior:'smooth' });
      const fc = document.querySelector('.form-container');
      fc.style.borderColor = 'var(--primary-color)';
      fc.style.boxShadow = '0 0 30px rgba(197,160,89,0.45)';
      setTimeout(() => { fc.style.borderColor = ''; fc.style.boxShadow = ''; }, 1200);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {

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
    // 3. DIGITAL MENU CATEGORY TABS
    // ==========================================
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Initial render
    renderMenu('chicken');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.getAttribute('data-category'));
        });
    });
    // ==========================================
    // 4. WHATSAPP FORM SUBMISSION
    // ==========================================
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
    const rippleElements = document.querySelectorAll('.social-card, .btn-order, .btn-submit-order, .tab-btn');
    
    rippleElements.forEach(el => {
        el.addEventListener('click', function(e) {
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
});
