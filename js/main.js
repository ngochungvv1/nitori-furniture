
/* ─────────────────────────────────────────────────────────────
   NITORI Vietnam — Main JavaScript
   Đọc dữ liệu từ js/products.js và render giao diện động
───────────────────────────────────────────────────────────── */

function formatPrice(n) {
  return n.toLocaleString('vi-VN') + 'đ';
}

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ══ TRANG CHỦ — render lưới sản phẩm ══ */
function renderProductGrid(list) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p class="empty-icon">🔍</p>
        <p class="empty-title">Không tìm thấy sản phẩm</p>
        <p class="empty-sub">Thử từ khoá khác hoặc xoá bộ lọc</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <a href="product.html?id=${p.id}" class="product-card" data-cat="${p.cat}"
       style="animation-delay:${i * 0.07}s">
      <div class="card-img-wrap">
        ${p.badge ? `<span class="card-tag ${p.badgeType}">${p.badge}</span>` : ''}
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <div class="card-overlay">
          <button class="card-quick">Xem chi tiết</button>
        </div>
      </div>
      <div class="card-body">
        <p class="card-category">${p.category}</p>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-footer">
          <div>
            ${p.oldPrice ? `<span class="card-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
            <span class="card-price">${formatPrice(p.price)}</span>
          </div>
          <span class="card-rating">
            ${renderStars(p.rating)}
            <span class="review-count">(${p.reviewCount})</span>
          </span>
        </div>
      </div>
    </a>`).join('');
}

let currentCat    = 'all';
let currentSearch = '';

function applyFilters() {
  let list = PRODUCTS;
  if (currentCat !== 'all')  list = list.filter(p => p.cat === currentCat);
  if (currentSearch.trim())  list = list.filter(p =>
    p.name.toLowerCase().includes(currentSearch) ||
    p.category.toLowerCase().includes(currentSearch)
  );
  renderProductGrid(list);
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = cat;
  applyFilters();
}

function initSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');
  if (!input) return;

  input.addEventListener('input', () => {
    currentSearch = input.value.toLowerCase().trim();
    clear.style.display = currentSearch ? 'flex' : 'none';
    applyFilters();
  });

  clear.addEventListener('click', () => {
    input.value   = '';
    currentSearch = '';
    clear.style.display = 'none';
    applyFilters();
    input.focus();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') clear.click();
  });
}

/* ══ TRANG CHI TIẾT ══ */
function loadProductDetail() {
  const id = parseInt(new URLSearchParams(window.location.search).get('id'));
  const p  = PRODUCTS.find(x => x.id === id);

  if (!p) {
    document.body.innerHTML = `
      <div style="text-align:center;padding:120px 24px;">
        <p style="font-size:48px;margin-bottom:16px">🛋️</p>
        <h2 style="font-family:var(--font-display);font-size:32px;color:var(--espresso);margin-bottom:12px">
          Không tìm thấy sản phẩm</h2>
        <a href="index.html" style="color:var(--accent)">← Quay về trang chủ</a>
      </div>`;
    return;
  }

  document.title = `${p.name} — NITORI Vietnam`;
  setText('breadcrumb-name', p.name);

  const badge = document.getElementById('product-badge');
  if (badge) {
    if (p.badge) { badge.textContent = p.badge; badge.className = `product-badge ${p.badgeType}`; }
    else         { badge.style.display = 'none'; }
  }

  setText('product-category', p.category);
  setText('product-name-line1', p.name.split(' ')[0]);
  setText('product-name-line2', p.name.split(' ').slice(1).join(' '));
  setText('rating-stars',  renderStars(p.rating));
  setText('rating-count',  `${p.rating} · ${p.reviewCount} đánh giá`);

  const oldEl = document.getElementById('price-old');
  if (oldEl) { oldEl.textContent = p.oldPrice ? formatPrice(p.oldPrice) : ''; oldEl.style.display = p.oldPrice ? 'block' : 'none'; }
  setText('price-current', formatPrice(p.price));

  const mainImg = document.getElementById('mainImg');
  if (mainImg) mainImg.src = p.images[0];

  const thumbsWrap = document.getElementById('galleryThumbs');
  if (thumbsWrap) {
    thumbsWrap.innerHTML = p.images.map((src, i) => `
      <div class="thumb ${i === 0 ? 'active' : ''}" onclick="switchImg(this,'${src}')">
        <img src="${src.replace('w=1200','w=200')}" alt="Ảnh ${i+1}" loading="lazy">
      </div>`).join('');
  }

  const colorsWrap = document.getElementById('colorsWrap');
  if (colorsWrap) {
    colorsWrap.innerHTML = p.colors.map((c, i) => `
      <div class="color-swatch ${i === 0 ? 'active' : ''}"
           style="background:${c.hex};" title="${c.name}"
           onclick="selectColor(this,'${c.name}')"></div>`).join('');
    setText('color-name', '· ' + p.colors[0].name);
  }

  const sizesWrap = document.getElementById('sizesWrap');
  if (sizesWrap) {
    sizesWrap.innerHTML = p.sizes.map(s => `
      <button class="size-btn ${s === p.defaultSize ? 'active' : ''}"
              onclick="selectSize(this)">${s}</button>`).join('');
  }

  const specBody = document.getElementById('specTableBody');
  if (specBody) specBody.innerHTML = p.specs.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');

  const descEl = document.getElementById('product-description');
  if (descEl) descEl.innerHTML = p.description.split('\n\n').map(x => `<p>${x}</p>`).join('');
  setText('product-care', p.care);

  // Sản phẩm liên quan
  let related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 3);
  if (related.length < 3) {
    const extra = PRODUCTS.filter(x => x.id !== p.id && !related.find(r => r.id === x.id)).slice(0, 3 - related.length);
    related = [...related, ...extra];
  }
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(r => `
      <a href="product.html?id=${r.id}" class="mini-card">
        <div class="mini-card-img">
          <img src="${r.images[0].replace('w=1200','w=600')}" alt="${r.name}" loading="lazy">
        </div>
        <p class="mini-card-cat">${r.category}</p>
        <p class="mini-card-name">${r.name}</p>
        <p class="mini-card-price">${formatPrice(r.price)}</p>
      </a>`).join('');
  }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ══ UI INTERACTIONS ══ */
function switchImg(thumb, src) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  document.getElementById('mainImg').src = src;
}

function selectColor(el, name) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  setText('color-name', '· ' + name);
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function toggleAcc(header) {
  header.parentElement.classList.toggle('open');
}

function toggleWish(btn) {
  const wished = btn.textContent.trim() === '♥';
  btn.textContent = wished ? '♡' : '♥';
  btn.style.color = wished ? '' : 'var(--accent)';
}

function orderNow() {
  window.location.href = 'tel:19001800';
}

/* ══ KHỞI CHẠY ══ */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productsGrid')) {
    renderProductGrid(PRODUCTS);
    initSearch();
  }
  if (document.getElementById('product-name-line1')) {
    loadProductDetail();
  }
});
