"use strict";

const API_URL = "https://fakestoreapi.com";

// DOM Elements
const proSection = document.querySelector("#pro");
const productsGrid = document.querySelector("#productsGrid");
const skeletonLoader = document.querySelector("#skeletonLoader");
const emptyState = document.querySelector("#emptyState");
const productCountEl = document.querySelector("#productCount");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const sortSelect = document.querySelector("#sortSelect");
const categoryButtons = document.querySelectorAll(".category-pill");
const resetFiltersBtn = document.querySelector("#resetFiltersBtn");

// Cart Elements
const cartToggleBtn = document.querySelector("#cartToggleBtn");
const cartCountBadge = document.querySelector("#cartCount");
const cartHeaderCount = document.querySelector("#cartHeaderCount");
const cartItemsList = document.querySelector("#cartItemsList");
const cartSubtotal = document.querySelector("#cartSubtotal");
const cartTotal = document.querySelector("#cartTotal");
const checkoutBtn = document.querySelector("#checkoutBtn");

// Wishlist Elements
const wishlistCountBadge = document.querySelector("#wishlistCount");
const wishlistToggleBtn = document.querySelector("#wishlistToggleBtn");

// Quick View Modal Elements
const quickViewModalEl = document.getElementById("quickViewModal");
const modalImg = document.getElementById("modalImg");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalStars = document.getElementById("modalStars");
const modalRateScore = document.getElementById("modalRateScore");
const modalRateCount = document.getElementById("modalRateCount");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
const modalWishlistBtn = document.getElementById("modalWishlistBtn");

// Toast
const liveToastEl = document.getElementById("liveToast");
const toastMessageEl = document.getElementById("toastMessage");

// State
let allProducts = [];
let activeCategory = "all";
let searchQuery = "";
let sortBy = "default";
let cart = JSON.parse(localStorage.getItem("novastore_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("novastore_wishlist") || "[]");
let activeModalProduct = null;
let bsToast = null;
let bsQuickModal = null;

// Category translations and styling
const CATEGORY_MAP = {
    "men's clothing": { label: "Kişi Geyimi", class: "category-men" },
    "women's clothing": { label: "Qadın Geyimi", class: "category-women" },
    "electronics": { label: "Elektronika", class: "category-electronics" },
    "jewelery": { label: "Zərgərlik", class: "category-jewelery" }
};

// Fallback demo data in case of offline or API temporary outage
const FALLBACK_PRODUCTS = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695.0,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: 5,
        title: "Solid Gold Petite Micropave",
        price: 168.0,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: 6,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64.0,
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: 7,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109.0,
        description: "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: 8,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: "Note:The Jackets is US standard size, Please choose size as your usual wear. Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 2.6, count: 235 }
    }
];

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    if (window.bootstrap) {
        if (liveToastEl) bsToast = new bootstrap.Toast(liveToastEl, { delay: 2800 });
        if (quickViewModalEl) bsQuickModal = new bootstrap.Modal(quickViewModalEl);
    }

    updateCartUI();
    updateWishlistUI();
    fetchPosts();
    initEvents();
});

// Fetch products from API
async function fetchPosts() {
    showSkeleton(true);
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.length > 0) {
            allProducts = data;
        } else {
            allProducts = FALLBACK_PRODUCTS;
        }
    } catch (error) {
        console.warn("API fetch xətası baş verdi, ehtiyat məhsullar göstərilir:", error);
        allProducts = FALLBACK_PRODUCTS;
    } finally {
        showSkeleton(false);
        applyFiltersAndRender();
    }
}

// Show/Hide Skeleton loader
function showSkeleton(show) {
    if (skeletonLoader) {
        skeletonLoader.style.display = show ? "flex" : "none";
    }
    if (productsGrid) {
        productsGrid.style.display = show ? "none" : "flex";
    }
}

// Filter and Sort Logic
function applyFiltersAndRender() {
    let filtered = [...allProducts];

    // 1. Category Filter
    if (activeCategory !== "all") {
        filtered = filtered.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        );
    }

    // 3. Sorting
    switch (sortBy) {
        case "price-asc":
            filtered.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            filtered.sort((a, b) => b.price - a.price);
            break;
        case "rating-desc":
            filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
            break;
        case "title-asc":
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            // default API order
            break;
    }

    renderProducts(filtered);
}

// Render products to DOM
function renderProducts(products) {
    if (!productsGrid) return;

    if (productCountEl) {
        productCountEl.textContent = products.length;
    }

    if (products.length === 0) {
        productsGrid.style.display = "none";
        if (emptyState) emptyState.style.display = "block";
        return;
    }

    if (emptyState) emptyState.style.display = "none";
    productsGrid.style.display = "flex";

    productsGrid.innerHTML = products.map(product => {
        const catInfo = CATEGORY_MAP[product.category] || { label: product.category, class: "" };
        const isWishlisted = wishlist.includes(product.id);
        const ratingScore = product.rating ? product.rating.rate : 0;
        const ratingCount = product.rating ? product.rating.count : 0;
        const starsHtml = generateStarsHtml(ratingScore);

        return `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <article class="product-card" data-id="${product.id}">
                    <div class="product-img-wrapper">
                        <span class="category-badge ${catInfo.class}">${catInfo.label}</span>
                        <div class="card-floating-actions">
                            <button type="button" class="btn-action-icon ${isWishlisted ? 'active-wishlist' : ''}" 
                                onclick="toggleWishlist(${product.id})" 
                                title="${isWishlisted ? 'Bəyənməkdən çıxar' : 'Bəyən'}">
                                <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
                            </button>
                            <button type="button" class="btn-action-icon" 
                                onclick="openQuickView(${product.id})" 
                                title="Sürətli Baxış">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy">
                    </div>
                    <div class="product-body">
                        <div class="product-rating">
                            <span class="stars">${starsHtml}</span>
                            <span class="rating-score">${ratingScore.toFixed(1)}</span>
                            <span class="rating-count">(${ratingCount})</span>
                        </div>
                        <h3 class="product-title" onclick="openQuickView(${product.id})" title="${escapeHtml(product.title)}">
                            ${escapeHtml(product.title)}
                        </h3>
                        <p class="product-desc" title="${escapeHtml(product.description)}">
                            ${escapeHtml(product.description)}
                        </p>
                        <div class="product-footer">
                            <div class="price-box">
                                <span class="price-label">Qiymət</span>
                                <div class="price-val">
                                    <span class="currency">$</span>${product.price.toFixed(2)}
                                </div>
                            </div>
                            <button type="button" class="btn-add-cart" onclick="addToCart(${product.id})">
                                <i class="bi bi-cart-plus"></i> Səbətə at
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        `;
    }).join("");
}

// Generate star rating icons
function generateStarsHtml(rate) {
    let stars = "";
    const fullStars = Math.floor(rate);
    const hasHalf = (rate - fullStars) >= 0.4;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="bi bi-star-fill"></i>';
        } else if (i === fullStars + 1 && hasHalf) {
            stars += '<i class="bi bi-star-half"></i>';
        } else {
            stars += '<i class="bi bi-star"></i>';
        }
    }
    return stars;
}

// ==================== CART MANAGEMENT ====================
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`"${truncate(product.title, 26)}" səbətə əlavə edildi!`);
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    if (item) {
        showToast(`"${truncate(item.title, 24)}" səbətdən silindi.`);
    }
}

function saveCart() {
    localStorage.setItem("novastore_cart", JSON.stringify(cart));
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartCountBadge) cartCountBadge.textContent = totalCount;
    if (cartHeaderCount) cartHeaderCount.textContent = totalCount;
    if (cartSubtotal) cartSubtotal.textContent = `$${totalPrice.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x text-muted" style="font-size: 3.5rem;"></i>
                <h6 class="mt-3 fw-bold">Səbətiniz boşdur</h6>
                <p class="text-muted small">Bəyəndiyiniz məhsulları səbətə əlavə edərək alış-verişə başlayın.</p>
            </div>
        `;
        if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
        if (checkoutBtn) checkoutBtn.disabled = false;
        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="cart-item-img">
                <div class="cart-item-info">
                    <h6 class="cart-item-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h6>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div class="qty-controls">
                    <button type="button" class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">
                        <i class="bi bi-dash"></i>
                    </button>
                    <span class="qty-num">${item.quantity}</span>
                    <button type="button" class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
                <button type="button" class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Sil">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        `).join("");
    }
}

// ==================== WISHLIST MANAGEMENT ====================
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = allProducts.find(p => p.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Məhsul bəyənilənlərdən çıxarıldı.");
    } else {
        wishlist.push(productId);
        showToast(`"${product ? truncate(product.title, 24) : 'Məhsul'}" bəyəndiklərinizə əlavə edildi!`);
    }

    localStorage.setItem("novastore_wishlist", JSON.stringify(wishlist));
    updateWishlistUI();
    applyFiltersAndRender();
}

function updateWishlistUI() {
    if (wishlistCountBadge) {
        wishlistCountBadge.textContent = wishlist.length;
    }
}

// ==================== QUICK VIEW MODAL ====================
function openQuickView(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    activeModalProduct = product;
    const catInfo = CATEGORY_MAP[product.category] || { label: product.category, class: "" };

    if (modalImg) modalImg.src = product.image;
    if (modalCategory) modalCategory.textContent = catInfo.label;
    if (modalTitle) modalTitle.textContent = product.title;
    if (modalPrice) modalPrice.textContent = product.price.toFixed(2);
    if (modalDesc) modalDesc.textContent = product.description;

    const ratingScore = product.rating ? product.rating.rate : 0;
    const ratingCount = product.rating ? product.rating.count : 0;
    if (modalStars) modalStars.innerHTML = generateStarsHtml(ratingScore);
    if (modalRateScore) modalRateScore.textContent = ratingScore.toFixed(1);
    if (modalRateCount) modalRateCount.textContent = `(${ratingCount} rəy)`;

    if (modalWishlistBtn) {
        const isWish = wishlist.includes(product.id);
        modalWishlistBtn.innerHTML = `<i class="bi ${isWish ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>`;
        modalWishlistBtn.onclick = () => {
            toggleWishlist(product.id);
            const updated = wishlist.includes(product.id);
            modalWishlistBtn.innerHTML = `<i class="bi ${updated ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>`;
        };
    }

    if (modalAddToCartBtn) {
        modalAddToCartBtn.onclick = () => {
            addToCart(product.id);
            if (bsQuickModal) bsQuickModal.hide();
        };
    }

    if (bsQuickModal) {
        bsQuickModal.show();
    }
}

// ==================== TOAST HELPER ====================
function showToast(message) {
    if (!toastMessageEl) return;
    toastMessageEl.textContent = message;
    if (bsToast) {
        bsToast.show();
    }
}

// ==================== EVENT LISTENERS ====================
function initEvents() {
    // Category pills
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.dataset.category || "all";
            applyFiltersAndRender();
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchQuery ? "block" : "none";
            }
            applyFiltersAndRender();
        });
    }

    // Clear search
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchQuery = "";
                clearSearchBtn.style.display = "none";
                searchInput.focus();
                applyFiltersAndRender();
            }
        });
    }

    // Sort select
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            sortBy = e.target.value;
            applyFiltersAndRender();
        });
    }

    // Reset filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            activeCategory = "all";
            searchQuery = "";
            sortBy = "default";
            if (searchInput) searchInput.value = "";
            if (clearSearchBtn) clearSearchBtn.style.display = "none";
            if (sortSelect) sortSelect.value = "default";
            categoryButtons.forEach(b => {
                if (b.dataset.category === "all") b.classList.add("active");
                else b.classList.remove("active");
            });
            applyFiltersAndRender();
        });
    }

    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (cart.length === 0) return;
            const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            showToast(`Sifarişiniz qəbul olundu! Məbləğ: $${totalPrice.toFixed(2)}`);
            cart = [];
            saveCart();
            updateCartUI();
            const offcanvasEl = document.getElementById("cartOffcanvas");
            if (offcanvasEl && window.bootstrap) {
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
                if (offcanvasInstance) offcanvasInstance.hide();
            }
        });
    }

    // Wishlist Toggle in Navbar shows only wishlisted products
    if (wishlistToggleBtn) {
        wishlistToggleBtn.addEventListener("click", () => {
            if (wishlist.length === 0) {
                showToast("Hələ heç bir məhsulu bəyənməmisiniz.");
                return;
            }
            const wishlistedProducts = allProducts.filter(p => wishlist.includes(p.id));
            renderProducts(wishlistedProducts);
            showToast(`${wishlistedProducts.length} bəyənilən məhsul göstərilir.`);
        });
    }
}

// Global category click helper (for footer links)
window.filterByCategory = function (category) {
    activeCategory = category;
    categoryButtons.forEach(b => {
        if (b.dataset.category === category) b.classList.add("active");
        else b.classList.remove("active");
    });
    window.scrollTo({ top: document.querySelector(".filters-bar").offsetTop - 70, behavior: "smooth" });
    applyFiltersAndRender();
};

// Utilities
function truncate(text, length) {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
}

function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Expose functions called from HTML inline onclicks
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.toggleWishlist = toggleWishlist;
window.openQuickView = openQuickView;
