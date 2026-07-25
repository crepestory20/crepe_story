// ==========================================
// CUSTOM CREPE BUILDER INTERACTIVE LOGIC
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

    // Current State
    let currentCategory = 'savory'; // 'savory' | 'sweet'
    let currentSize = 'medium'; // 'medium' | 'large'
    let currentBasePrice = 30; // Medium base

    // Bind Category Radio Cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => {
                c.classList.remove('selected');
                c.querySelector('input').checked = false;
            });
            card.classList.add('selected');
            const radio = card.querySelector('input');
            radio.checked = true;
            currentCategory = radio.value;

            // Update UI for selected category
            switchCategoryUI(currentCategory);
            calculateTotal();
        });
    });

    // Bind Size Toggle Buttons
    sizeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeToggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSize = btn.getAttribute('data-size');
            currentBasePrice = parseInt(btn.getAttribute('data-price')) || 30;
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
        }
    }

    // Bind all single-select radio card groups (Fillings)
    function bindRadioGroup(groupName, containerId) {
        const cards = document.querySelectorAll(`#${containerId} .option-card`);
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => {
                    c.classList.remove('selected');
                    const inp = c.querySelector('input');
                    if (inp) inp.checked = false;
                });
                card.classList.add('selected');
                const radio = card.querySelector('input');
                if (radio) radio.checked = true;
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
            // Prevent default double toggling if clicking directly on input
            const input = card.querySelector('input[type="checkbox"]');
            if (e.target !== input) {
                input.checked = !input.checked;
            }
            if (input.checked) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
            calculateTotal();
        });
    });

    // Main calculation and summary builder function
    function calculateTotal() {
        let total = currentBasePrice;
        const selectedSummaryItems = [];
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
            const name = isAr ? activeFillingCard.getAttribute('data-name-ar') : activeFillingCard.getAttribute('data-name-en');
            total += price;
            if (name && !name.includes('بدون')) {
                selectedSummaryItems.push(name);
            }
        }

        // 2. Cheeses / Sweet Toppings
        const cheeseContainerId = currentCategory === 'savory' ? 'savory-cheeses' : 'sweet-toppings';
        const activeCheeses = document.querySelectorAll(`#${cheeseContainerId} .checkbox-card.selected input:checked`);
        activeCheeses.forEach(inp => {
            const card = inp.closest('.checkbox-card');
            const price = parseInt(card.getAttribute('data-price')) || 0;
            const name = isAr ? card.getAttribute('data-name-ar') : card.getAttribute('data-name-en');
            total += price;
            if (name) selectedSummaryItems.push(name);
        });

        // 3. Sauces
        const sauceContainerId = currentCategory === 'savory' ? 'savory-sauces' : 'sweet-sauces';
        const activeSauces = document.querySelectorAll(`#${sauceContainerId} .checkbox-card.selected input:checked`);
        activeSauces.forEach(inp => {
            const card = inp.closest('.checkbox-card');
            const price = parseInt(card.getAttribute('data-price')) || 0;
            const name = isAr ? card.getAttribute('data-name-ar') : card.getAttribute('data-name-en');
            total += price;
            if (name) selectedSummaryItems.push(name);
        });

        // 4. Savory Extras
        if (currentCategory === 'savory') {
            const activeExtras = document.querySelectorAll(`#step5-container .checkbox-card.selected input:checked`);
            activeExtras.forEach(inp => {
                const card = inp.closest('.checkbox-card');
                const price = parseInt(card.getAttribute('data-price')) || 0;
                const name = isAr ? card.getAttribute('data-name-ar') : card.getAttribute('data-name-en');
                total += price;
                if (name) selectedSummaryItems.push(name);
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

        return { total, selectedSummaryItems };
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
