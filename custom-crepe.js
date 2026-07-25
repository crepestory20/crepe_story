// ==========================================
// CUSTOM CREPE BUILDER INTERACTIVE LOGIC & VISUAL STAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // DOM References
    const categoryRadios = document.querySelectorAll('input[name="crepeCategory"]');
    const categoryCards = document.querySelectorAll('.option-card[data-group="crepeCategory"]');
    const sizeToggleBtns = document.querySelectorAll('.btn-size-toggle');

    const savoryFillingsSection = document.getElementById('savory-fillings');
    const sweetFillingsSection = document.getElementById('sweet-fillings');

    const savoryCheesesSection = document.getElementById('savory-cheeses');
    const sweetToppingsSection = document.getElementById('sweet-toppings');

    const savorySaucesSection = document.getElementById('savory-sauces');
    const sweetSaucesSection = document.getElementById('sweet-sauces');

    const step5Container = document.getElementById('step5-container');

    const step3TitleAr = document.getElementById('step3-title-ar');
    const step3TitleEn = document.getElementById('step3-title-en');

    const totalPriceEl = document.getElementById('builder-total-price');
    const summaryTagsEl = document.getElementById('crepe-summary-tags');

    const btnWa = document.getElementById('btn-builder-whatsapp');
    const btnCheckout = document.getElementById('btn-builder-checkout');

    // Visual Stage Elements
    const crepeBaseArt = document.getElementById('crepe-base-art');
    const crepeLayersCanvas = document.getElementById('crepe-layers-canvas');
    const crepeStatusTextAr = document.getElementById('crepe-status-text');
    const crepeStatusTextEn = document.getElementById('crepe-status-text-en');

    // Current State
    let currentCategory = 'savory'; // 'savory' | 'sweet'
    let currentSize = 'medium'; // 'medium' | 'large'
    let currentBasePrice = 30; // Medium base

    // Bind Category Radio Cards
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            categoryCards.forEach(c => {
                c.classList.remove('selected');
                c.querySelector('input').checked = false;
            });
            card.classList.add('selected');
            const radio = card.querySelector('input');
            radio.checked = true;
            currentCategory = radio.value;

            // Trigger visual particle effect
            const icon = card.querySelector('.chip-icon')?.textContent || '🥞';
            const title = card.querySelector('.chip-title')?.textContent || '';
            triggerFloatingParticle(e, `${icon} ${title}`);

            // Update UI for selected category
            switchCategoryUI(currentCategory);
            calculateTotal();
        });
    });

    // Bind Size Toggle Buttons
    sizeToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            sizeToggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSize = btn.getAttribute('data-size');
            currentBasePrice = parseInt(btn.getAttribute('data-price')) || 30;

            const sizeText = currentSize === 'medium' ? 'حجم وسط' : 'حجم كبير';
            triggerFloatingParticle(e, `📐 ${sizeText}`);
            calculateTotal();
        });
    });

    // Function to switch visible options based on category
    function switchCategoryUI(category) {
        if (category === 'savory') {
            savoryFillingsSection.style.display = 'grid';
            sweetFillingsSection.style.display = 'none';

            savoryCheesesSection.style.display = 'grid';
            sweetToppingsSection.style.display = 'none';

            savorySaucesSection.style.display = 'grid';
            sweetSaucesSection.style.display = 'none';

            step5Container.style.display = 'block';

            if (step3TitleAr) step3TitleAr.textContent = 'الأجبان والتركي 🧀';
            if (step3TitleEn) step3TitleEn.textContent = 'Cheeses & Toppings 🧀';

            if (crepeBaseArt) {
                crepeBaseArt.className = 'crepe-base-art savory-base';
            }
        } else {
            savoryFillingsSection.style.display = 'none';
            sweetFillingsSection.style.display = 'grid';

            savoryCheesesSection.style.display = 'none';
            sweetToppingsSection.style.display = 'grid';

            savorySaucesSection.style.display = 'none';
            sweetSaucesSection.style.display = 'grid';

            step5Container.style.display = 'none';

            if (step3TitleAr) step3TitleAr.textContent = 'الفواكه والمكسرات 🍌🍓';
            if (step3TitleEn) step3TitleEn.textContent = 'Fruits & Sweets 🍌🍓';

            if (crepeBaseArt) {
                crepeBaseArt.className = 'crepe-base-art sweet-base';
            }
        }
    }

    // Bind all single-select radio card groups (Fillings)
    function bindRadioGroup(groupName, containerId) {
        const cards = document.querySelectorAll(`#${containerId} .option-card`);
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                cards.forEach(c => {
                    c.classList.remove('selected');
                    const inp = c.querySelector('input');
                    if (inp) inp.checked = false;
                });
                card.classList.add('selected');
                const radio = card.querySelector('input');
                if (radio) radio.checked = true;

                const icon = card.querySelector('.chip-icon')?.textContent || '✨';
                const name = card.getAttribute('data-name-ar') || '';
                triggerFloatingParticle(e, `${icon} ${name}`);

                calculateTotal();
            });
        });
    }

    bindRadioGroup('mainFilling', 'savory-fillings');
    bindRadioGroup('sweetFilling', 'sweet-fillings');

    // Bind all multi-select checkbox cards (Cheeses, Sauces, Extras, Sweet Toppings)
    const checkboxCards = document.querySelectorAll('.checkbox-card');
    checkboxCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const input = card.querySelector('input[type="checkbox"]');
            if (e.target !== input) {
                input.checked = !input.checked;
            }
            if (input.checked) {
                card.classList.add('selected');
                const icon = card.querySelector('.chip-icon')?.textContent || '✨';
                const name = card.getAttribute('data-name-ar') || '';
                triggerFloatingParticle(e, `+ ${icon} ${name}`);
            } else {
                card.classList.remove('selected');
            }
            calculateTotal();
        });
    });

    // Particle Effect Emitter
    function triggerFloatingParticle(event, text) {
        if (!event) return;
        const x = event.clientX || window.innerWidth / 2;
        const y = event.clientY || window.innerHeight / 2;

        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.textContent = text;
        particle.style.left = `${x - 20}px`;
        particle.style.top = `${y - 20}px`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 750);
    }

    // Main calculation and summary builder function
    function calculateTotal() {
        let total = currentBasePrice;
        const selectedSummaryItems = [];
        const visualChips = [];
        const isAr = (document.body.getAttribute('data-lang') || 'ar') === 'ar';

        // Add size & category to summary tags
        const categoryLabel = currentCategory === 'savory' ? (isAr ? 'كريب حادق' : 'Savory Crepe') : (isAr ? 'كريب حلو' : 'Sweet Crepe');
        const sizeLabel = currentSize === 'medium' ? (isAr ? 'وسط' : 'Medium') : (isAr ? 'كبير' : 'Large');
        selectedSummaryItems.push(`${categoryLabel} (${sizeLabel})`);

        // 1. Main filling
        const fillingContainerId = currentCategory === 'savory' ? 'savory-fillings' : 'sweet-fillings';
        const activeFillingCard = document.querySelector(`#${fillingContainerId} .option-card.selected`);
        if (activeFillingCard) {
            const price = parseInt(activeFillingCard.getAttribute('data-price')) || 0;
            const nameAr = activeFillingCard.getAttribute('data-name-ar');
            const nameEn = activeFillingCard.getAttribute('data-name-en');
            const icon = activeFillingCard.querySelector('.chip-icon')?.textContent || '🍗';
            const name = isAr ? nameAr : nameEn;
            total += price;
            if (name && !name.includes('بدون')) {
                selectedSummaryItems.push(name);
                visualChips.push({ icon, name });
            }
        }

        // 2. Cheeses / Sweet Toppings
        const cheeseContainerId = currentCategory === 'savory' ? 'savory-cheeses' : 'sweet-toppings';
        const activeCheeses = document.querySelectorAll(`#${cheeseContainerId} .checkbox-card.selected input:checked`);
        activeCheeses.forEach(inp => {
            const card = inp.closest('.checkbox-card');
            const price = parseInt(card.getAttribute('data-price')) || 0;
            const nameAr = card.getAttribute('data-name-ar');
            const nameEn = card.getAttribute('data-name-en');
            const icon = card.querySelector('.chip-icon')?.textContent || '🧀';
            const name = isAr ? nameAr : nameEn;
            total += price;
            if (name) {
                selectedSummaryItems.push(name);
                visualChips.push({ icon, name });
            }
        });

        // 3. Sauces
        const sauceContainerId = currentCategory === 'savory' ? 'savory-sauces' : 'sweet-sauces';
        const activeSauces = document.querySelectorAll(`#${sauceContainerId} .checkbox-card.selected input:checked`);
        activeSauces.forEach(inp => {
            const card = inp.closest('.checkbox-card');
            const price = parseInt(card.getAttribute('data-price')) || 0;
            const nameAr = card.getAttribute('data-name-ar');
            const nameEn = card.getAttribute('data-name-en');
            const icon = card.querySelector('.chip-icon')?.textContent || '🥛';
            const name = isAr ? nameAr : nameEn;
            total += price;
            if (name) {
                selectedSummaryItems.push(name);
                visualChips.push({ icon, name });
            }
        });

        // 4. Savory Extras
        if (currentCategory === 'savory') {
            const activeExtras = document.querySelectorAll(`#step5-container .checkbox-card.selected input:checked`);
            activeExtras.forEach(inp => {
                const card = inp.closest('.checkbox-card');
                const price = parseInt(card.getAttribute('data-price')) || 0;
                const nameAr = card.getAttribute('data-name-ar');
                const nameEn = card.getAttribute('data-name-en');
                const icon = card.querySelector('.chip-icon')?.textContent || '🍟';
                const name = isAr ? nameAr : nameEn;
                total += price;
                if (name) {
                    selectedSummaryItems.push(name);
                    visualChips.push({ icon, name });
                }
            });
        }

        // Update Total Price display
        if (totalPriceEl) {
            totalPriceEl.textContent = total;
        }

        // Render Summary Tags
        if (summaryTagsEl) {
            summaryTagsEl.innerHTML = selectedSummaryItems.map(item => `
                <span class="tag-pill"><i class="fa-solid fa-check"></i> ${item}</span>
            `).join('');
        }

        // Render Visual Crepe Layers Canvas
        updateCrepeVisualStage(visualChips, isAr);

        return { total, selectedSummaryItems };
    }

    // Update Visual Crepe Stage Canvas & Status Text
    function updateCrepeVisualStage(chips, isAr) {
        if (!crepeLayersCanvas) return;

        // Render pop chips inside the crepe circle
        if (chips.length === 0) {
            crepeLayersCanvas.innerHTML = `<span style="font-size:0.75rem; opacity:0.65; color:#fff;">(الكريب فارغ، أضف الحشوة)</span>`;
        } else {
            crepeLayersCanvas.innerHTML = chips.map(c => `
                <span class="visual-ingredient-chip"><span>${c.icon}</span> <span>${c.name}</span></span>
            `).join('');
        }

        // Update Status Text
        if (crepeStatusTextAr && crepeStatusTextEn) {
            const itemsCount = chips.length;
            if (itemsCount === 0) {
                crepeStatusTextAr.textContent = 'كريب ذهبي مقرمش جاهز للإضافة...';
                crepeStatusTextEn.textContent = 'Crispy golden crepe ready for toppings...';
            } else {
                const summaryStr = chips.map(c => c.name).join(' + ');
                crepeStatusTextAr.textContent = `الكريب محشو بـ (${summaryStr}) 🔥`;
                crepeStatusTextEn.textContent = `Crepe filled with (${summaryStr}) 🔥`;
            }
        }
    }

    // Helper to get formatted order string
    function buildOrderDetails() {
        const { total, selectedSummaryItems } = calculateTotal();
        const isAr = (document.body.getAttribute('data-lang') || 'ar') === 'ar';
        const categoryText = currentCategory === 'savory' ? (isAr ? 'كريب حادق مخصص' : 'Custom Savory Crepe') : (isAr ? 'كريب حلو مخصص' : 'Custom Sweet Crepe');
        const sizeText = currentSize === 'medium' ? (isAr ? 'حجم وسط' : 'Medium') : (isAr ? 'حجم كبير' : 'Large');
        const itemsListStr = selectedSummaryItems.slice(1).join(' + ');

        const formattedTitle = `${categoryText} (${sizeText}) - [${itemsListStr}] - بسعر ${total} ج`;
        return {
            title: formattedTitle,
            total: total,
            category: categoryText,
            size: sizeText,
            items: itemsListStr
        };
    }

    // Direct WhatsApp Button Listener
    if (btnWa) {
        btnWa.addEventListener('click', () => {
            const orderData = buildOrderDetails();
            const isAr = (document.body.getAttribute('data-lang') || 'ar') === 'ar';
            const waNumber = '201099564544';

            let msg = '';
            if (isAr) {
                msg = `🥞 *طلب كريب مخصص (اصنع كريبك بنفسك)* 🥞\n` +
                    `-----------------------------------------\n` +
                    `✨ *النوع:* ${orderData.category} (${orderData.size})\n` +
                    `🍽️ *المكونات المختارة:* ${orderData.items}\n` +
                    `💰 *إجمالي السعر:* ${orderData.total} EGP\n` +
                    `-----------------------------------------\n` +
                    `أرجو تأكيد الطلب والتوصيل 🙏`;
            } else {
                msg = `🥞 *Custom Crepe Order (Build Your Own)* 🥞\n` +
                    `-----------------------------------------\n` +
                    `✨ *Type:* ${orderData.category} (${orderData.size})\n` +
                    `🍽️ *Ingredients:* ${orderData.items}\n` +
                    `💰 *Total Price:* ${orderData.total} EGP\n` +
                    `-----------------------------------------\n` +
                    `Please confirm order delivery! 🙏`;
            }

            const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        });
    }

    // Checkout / Continue Form Button Listener
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            const orderData = buildOrderDetails();
            // Store item string in localStorage so order.html auto selects it!
            localStorage.setItem('selectedMenuItem', orderData.title);
            window.location.href = 'order.html';
        });
    }

    // Initial calculations
    switchCategoryUI('savory');
    calculateTotal();
});
