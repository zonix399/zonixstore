const products = {
    "SSD داخلي NVMe GEN5": [
        { id: 1, name: "XPG MARS BLADE 980 - 2TB", price: 13000, description: "جديد ريفيو\nالسعر الحالي: 13,000 ج\nالسعر الأصلي: 15,000 ج\nالخصم: 2,000 ج" },
        { id: 2, name: "ADATA LEGEND 970 - 1TB", price: 8000, description: "جديد ريفيو\nالسعر الحالي: 8,000 ج\nالسعر الأصلي: 9,000 ج\nالخصم: 1,000 ج" },
        { id: 3, name: "T FORCE Z540 - 1TB", price: 8000, description: "جديد ريفيو\nالسعر الحالي: 8,000 ج\nالسعر الأصلي: 9,000 ج\nالخصم: 1,000 ج" },
        { id: 4, name: "XPG GAMMIX S55 - 2230 - 1TB", price: 5000, description: "جديد ريفيو\nالسعر الحالي: 5,000 ج\nالسعر الأصلي: 6,000 ج\nالخصم: 1,000 ج" }
    ],
    "هارد داخلي SATA": [
        { id: 5, name: "BARRACUDA - 500GB - 7200RPM", price: 525, description: "استيراد، هيلث 100%\nالسعر الحالي: 525 ج\nالسعر الأصلي: 700 ج\nالخصم: 175 ج" },
        { id: 6, name: "WD BLUE - 1TB - 7200RPM", price: 2200, description: "جديد خلع ضمان\nالسعر الحالي: 2,200 ج\nالسعر الأصلي: 2,500 ج\nالخصم: 300 ج" },
        { id: 7, name: "BARRACUDA - 2TB - 7200RPM", price: 2700, description: "استعمال، هيلث 100%\nالسعر الحالي: 2,700 ج\nالسعر الأصلي: 3,000 ج\nالخصم: 300 ج" }
    ],
    "هارد خارجي USB3": [
        { id: 8, name: "WD - 1TB - EXTERNAL", price: 1800, description: "استعمال، هيلث 100%\nالسعر الحالي: 1,800 ج\nالسعر الأصلي: 2,200 ج\nالخصم: 400 ج" },
        { id: 9, name: "WD - 4TB - EXTERNAL", price: 4200, description: "استعمال، هيلث 100%\nالسعر الحالي: 4,200 ج\nالسعر الأصلي: 4,800 ج\nالخصم: 600 ج" },
        { id: 10, name: "WD ELEMENTS - 14TB", price: 16000, description: "كسر زيرو\nالسعر الحالي: 16,000 ج\nالسعر الأصلي: 18,000 ج\nالخصم: 2,000 ج" },
        { id: 11, name: "SEAGATE EXPANSION - 28TB", price: 37000, description: "جديد بالعلبة\nالسعر الحالي: 37,000 ج\nالسعر الأصلي: 42,000 ج\nالخصم: 5,000 ج" }
    ],
    "SSD خارجي تايب سي / USB": [
        { id: 12, name: "ADATA UE800 - 500GB", price: 3000, description: "جديد ريفيو\nالسعر الحالي: 3,000 ج\nالسعر الأصلي: 3,500 ج\nالخصم: 500 ج" },
        { id: 13, name: "ADATA SC610 - 500GB", price: 3000, description: "جديد ريفيو\nالسعر الحالي: 3,000 ج\nالسعر الأصلي: 3,500 ج\nالخصم: 500 ج" },
        { id: 14, name: "ADATA SD620 - 500GB", price: 3000, description: "جديد ريفيو\nالسعر الحالي: 3,000 ج\nالسعر الأصلي: 3,500 ج\nالخصم: 500 ج" },
        { id: 15, name: "ADATA SC750 - 1TB", price: 4000, description: "جديد ريفيو\nالسعر الحالي: 4,000 ج\nالسعر الأصلي: 4,500 ج\nالخصم: 500 ج" },
        { id: 16, name: "SABRENT ROCKET NANO - 1TB", price: 4500, description: "استخدام كسر زيرو\nالسعر الحالي: 4,500 ج\nالسعر الأصلي: 5,000 ج\nالخصم: 500 ج" }
    ],
    "كروت الشاشة": [
        { id: 17, name: "RTX 5070 Gigabyte Windforce SFF 12GB", price: 35500, image: "images/RTX-5070-windforce.jpg", description: "جديد متبرشم\nالسعر الحالي: 35,500 ج\nالسعر الأصلي: 39,000 ج\nالخصم: 3,500 ج" },
        { id: 18, name: "RTX 3070 - AORUS MASTER", price: 16750, description: "حالة ممتازة بدون متعلقات\nالسعر الحالي: 16,750 ج\nالسعر الأصلي: 20,000 ج\nالخصم: 3,250 ج" }
    ]
};

let cart = {};

function renderProducts(filteredCategory = null, maxPrice = 40000, conditions = { new: true, review: true }) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    for (const category in products) {
        if (filteredCategory && category !== filteredCategory) continue;
        const section = document.createElement('section');
        section.className = 'featured';
        const heading = document.createElement('h3');
        heading.textContent = category;
        section.appendChild(heading);

        const productList = document.createElement('div');
        productList.className = 'product-list';

        products[category].forEach(product => {
            // Filter by price
            if (product.price > maxPrice) return;

            // Filter by condition keywords in description
            const isNew = product.description.includes('جديد');
            const isReview = product.description.includes('ريفيو');
            if ((conditions.new && isNew) || (conditions.review && isReview)) {
                const card = document.createElement('div');
                card.className = 'product-card';

                if (product.image) {
                    const img = document.createElement('img');
                    img.src = product.image;
                    img.alt = product.name;
                    img.className = 'product-img';
                    card.appendChild(img);
                }

                const title = document.createElement('h4');
                title.textContent = product.name;
                card.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `💵 ${product.price} جنيه`;
                card.appendChild(price);

                const previewBtn = document.createElement('button');
                previewBtn.className = 'preview-btn';
                previewBtn.textContent = 'معاينة';
                previewBtn.onclick = () => previewItem(product);
                card.appendChild(previewBtn);

                const cartBtn = document.createElement('button');
                cartBtn.className = 'cart-btn';
                cartBtn.textContent = 'أضف إلى السلة';
                cartBtn.onclick = () => addToCart(product);
                card.appendChild(cartBtn);

                productList.appendChild(card);
            }
        });

        section.appendChild(productList);
        container.appendChild(section);
    }
}

function addToCart(product) {
    if (cart[product.id]) {
        cart[product.id].quantity++;
    } else {
        cart[product.id] = { ...product, quantity: 1 };
    }
    updateCartCount();
    alert(`تمت إضافة ${product.name} إلى السلة!`);
}

function updateCartCount() {
    const count = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cartNum').textContent = count;
}

function previewItem(product) {
    let modal = document.getElementById('preview-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'preview-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';

        const modalContent = document.createElement('div');
        modalContent.id = 'modal-content';
        modalContent.style.backgroundColor = '#0a0a0a';
        modalContent.style.padding = '30px';
        modalContent.style.borderRadius = '16px';
        modalContent.style.maxWidth = '500px';
        modalContent.style.color = '#fff';
        modalContent.style.textAlign = 'right';
        modalContent.style.boxShadow = '0 0 20px 4px #6c2eb6';
        modalContent.style.transform = 'translateY(-20px)';
        modalContent.style.transition = 'transform 0.3s ease';

        modal.appendChild(modalContent);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'إغلاق';
        closeBtn.style.marginTop = '20px';
        closeBtn.style.padding = '12px 24px';
        closeBtn.style.backgroundColor = '#6c2eb6';
        closeBtn.style.color = '#fff';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '10px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontWeight = 'bold';
        closeBtn.onclick = () => {
            modal.style.opacity = '0';
            modalContent.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        };
        modalContent.appendChild(closeBtn);

        document.body.appendChild(modal);
    }

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 style="color:#6c2eb6; text-shadow: 0 0 8px #1e90ff;">${product.name}</h2>
        <img src="${product.image || 'images/placeholder.jpg'}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 12px; margin: 15px 0;">
        <p style="font-size: 1.1rem; margin-bottom: 10px;">${product.description || 'وصف المنتج غير متوفر.'}</p>
        <p style="font-weight: bold; font-size: 1.3rem; color: #1e90ff;">💵 ${product.price} جنيه</p>
        <button id="addToCartBtn" style="background-color: #6c2eb6; color: white; padding: 12px 28px; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px #1e90ff; transition: background-color 0.3s ease;">أضف إلى السلة</button>
    `;
    modalContent.style.transform = 'translateY(0)';
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);

    document.getElementById('addToCartBtn').onclick = () => {
        addToCart(product);
        modal.style.opacity = '0';
        modalContent.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Sticky header
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function filterProducts() {
        const query = searchInput.value.trim().toLowerCase();
        const filteredProducts = {};
        for (const category in products) {
            filteredProducts[category] = products[category].filter(product =>
                product.name.toLowerCase().includes(query) ||
                (product.description && product.description.toLowerCase().includes(query))
            );
        }
        renderProductsFiltered(filteredProducts);
    }

    searchBtn.addEventListener('click', filterProducts);
    searchInput.addEventListener('input', filterProducts);

    // Category filter
    const categoryList = document.getElementById('categoryList');
    categoryList.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-card')) {
            const selectedCategory = e.target.getAttribute('data-category');
            renderProducts(selectedCategory);
        }
    });

    // Sidebar filters
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const conditionNew = document.getElementById('conditionNew');
    const conditionReview = document.getElementById('conditionReview');

    function applyFilters() {
        const maxPrice = parseInt(priceRange.value, 10);
        priceValue.textContent = maxPrice;
        const conditions = {
            new: conditionNew.checked,
            review: conditionReview.checked
        };
        renderProducts(null, maxPrice, conditions);
    }

    priceRange.addEventListener('input', applyFilters);
    conditionNew.addEventListener('change', applyFilters);
    conditionReview.addEventListener('change', applyFilters);
});

function renderProductsFiltered(filteredProducts) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    for (const category in filteredProducts) {
        if (filteredProducts[category].length === 0) continue;
        const section = document.createElement('section');
        section.className = 'featured';
        const heading = document.createElement('h3');
        heading.textContent = category;
        section.appendChild(heading);

        const productList = document.createElement('div');
        productList.className = 'product-list';

        filteredProducts[category].forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            if (product.image) {
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;
                img.className = 'product-img';
                card.appendChild(img);
            }

            const title = document.createElement('h4');
            title.textContent = product.name;
            card.appendChild(title);

            const price = document.createElement('p');
            price.textContent = `💵 ${product.price} جنيه`;
            card.appendChild(price);

            const previewBtn = document.createElement('button');
            previewBtn.className = 'preview-btn';
            previewBtn.textContent = 'معاينة';
            previewBtn.onclick = () => previewItem(product);
            card.appendChild(previewBtn);

            const cartBtn = document.createElement('button');
            cartBtn.className = 'cart-btn';
            cartBtn.textContent = 'أضف إلى السلة';
            cartBtn.onclick = () => addToCart(product);
            card.appendChild(cartBtn);

            productList.appendChild(card);
        });

        section.appendChild(productList);
        container.appendChild(section);
    }
}
