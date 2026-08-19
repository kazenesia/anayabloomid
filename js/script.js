/* =========================================================
   ANAYA BLOOM.ID — FLOWER BOX CATALOG JAVASCRIPT
   Separated JS File (script.js) - Updated with inline SVGs
   ========================================================= */

// Data Struktur Koleksi 3 Jenis Flower Box sesuai README.txt
const FLOWER_BOX_DATA = {
  "lingkar-depan": {
    title: "Flower Box Lingkar Depan",
    theme: "Pink & Rose Dominant",
    totalItems: 9,
    price: "Rp 120.000 (Promo) / Rp 150.000",
    description: "Rangkaian bunga melingkar indah di sisi depan papan ucapan putih. Dirangkai dengan paduan warna menawan dan kelopak segar.",
    items: [
      { id: 1, name: "Lingkar Depan #01 — Soft Pink", desc: "Nuansa pink fuchsia cerah dengan sentuhan anggrek dan mawar muda.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155438/box-01.webp", fallbackImg: "images/box-01.jpg" },
      { id: 2, name: "Lingkar Depan #02 — Maroon & Pink", desc: "Rangkaian pink lembut pastel dengan dahlia dan baby breath segar.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155473/box-02.webp", fallbackImg: "images/box-02.jpg" },
      { id: 3, name: "Lingkar Depan #03 — Baby Blue & Blue Denim", desc: "Kombinasi warna cerah ceria untuk kesan meriah dan mencolok.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155509/box-03.webp", fallbackImg: "images/box-03.jpg" },
      { id: 4, name: "Lingkar Depan #04 — Baby Blue & Pink", desc: "Nuansa warna peach dan krem hangat yang manis dan ramah.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155513/box-04.webp", fallbackImg: "images/box-04.jpg" },
      { id: 5, name: "Lingkar Depan #05 — Coffee & Cream", desc: "Perpaduan kelopak putih bersih dengan aksen pita gold mewah.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155515/box-05.webp", fallbackImg: "images/box-05.jpg" },
      { id: 6, name: "Lingkar Depan #06 — White & Cream", desc: "Dominasi merah dan maroon yang berani untuk perayaan bergengsi.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155516/box-06.webp", fallbackImg: "images/box-06.jpg" },
      { id: 7, name: "Lingkar Depan #07 — White & Pink", desc: "Kombinasi ungu lilac dan pink dengan susunan bunga padat.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155517/box-07.webp", fallbackImg: "images/box-07.jpg" },
      { id: 8, name: "Lingkar Depan #08 — Orange & Cream", desc: "Rangkaian putih polos elegan yang serbaguna untuk semua acara.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155519/box-08.webp", fallbackImg: "images/box-08.jpg" },
      { id: 9, name: "Lingkar Depan #09 — White & Baby Blue", desc: "Sentuhan bunga kuning emas dan sage green yang menyegarkan mata.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787154675/box-09.webp", fallbackImg: "images/box-09.jpg" }
    ]
  },
  "vortex-putih": {
    title: "Flower Box Vortex Putih",
    theme: "White Board & Modern Vortex",
    totalItems: 6,
    price: "Rp 120.000 (Promo) / Rp 150.000",
    description: "Desain papan ucapan berona putih bersih dengan susunan bunga bergaya vortex (pusaran elok) yang modern dan anggun.",
    items: [
      { id: 1, name: "Vortex Putih #01 — Mix Color", desc: "Susunan vortex bunga putih eksklusif dengan sentuhan gold foil.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157067/vortex-putih.webp", fallbackImg: "images/box-01.jpg" },
      { id: 2, name: "Vortex Putih #02 — Full Maroon", desc: "Papan putih berseri dengan pusaran bunga mawar pink yang romantis.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157068/vortex-putih-2.webp", fallbackImg: "images/box-02.jpg" },
      { id: 3, name: "Vortex Putih #03 — Baby Blue & Blue Denim", desc: "Nuansa tenang dengan paduan dedaunan sage green dan bunga krem.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157071/vortex-putih-3.webp", fallbackImg: "images/box-03.jpg" },
      { id: 4, name: "Vortex Putih #04 — Orange & Cream", desc: "Pusaran bunga ungu violet yang elegan di atas papan putih suci.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157075/vortex-putih-4.webp", fallbackImg: "images/box-04.jpg" },
      { id: 5, name: "Vortex Putih #05 — White & Blue", desc: "Kontras indah bunga merah merona menyelimuti papan ucapan putih.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157076/vortex-putih-5.webp", fallbackImg: "images/box-05.jpg" },
      { id: 6, name: "Vortex Putih #06 — Soft Pink", desc: "Desain vortex minimalis dengan mutiara dan kelopak putih lembut.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157094/vortex-putih-6.webp", fallbackImg: "images/box-06.jpg" },
      { id: 7, name: "Vortex Putih #07 — Maroon & Pink", desc: "Desain vortex minimalis dengan mutiara dan kelopak putih lembut.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157097/vortex-putih-7.webp", fallbackImg: "images/box-07.jpg" },
      { id: 8, name: "Vortex Putih #08 — White & Maroon", desc: "Desain vortex minimalis dengan mutiara dan kelopak putih lembut.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157100/vortex-putih-8.webp", fallbackImg: "images/box-08.jpg" }
    ]
  },
  "vortex-maroon": {
    title: "Flower Box Vortex Maroon",
    theme: "Maroon Board & Modern Vortex",
    totalItems: 6,
    price: "Rp 120.000 (Promo) / Rp 150.000",
    description: "Kombinasi papan dan rangkaian bunga dominasi merah maroon yang berani serta mewah dengan susunan pusaran bergaya prestisius.",
    items: [
      { id: 1, name: "Vortex Maroon #01 — Red, Pink & White", desc: "Papan maroon dengan rangkaian bunga merah pekat dan aksen pita emas.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157250/vortex-maroon.webp", fallbackImg: "images/box-01.jpg" },
      { id: 2, name: "Vortex Maroon #02 — Burgundy & White", desc: "Susunan mawar burgundy yang mendalam, menciptakan kesan aristokrat.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157256/vortex-maroon-2.webp", fallbackImg: "images/box-02.jpg" },
      { id: 3, name: "Vortex Maroon #03 — Burgundy & White", desc: "Perpaduan kontras papan maroon pekat dengan kelopak pink blush.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157258/vortex-maroon-3.webp", fallbackImg: "images/box-03.jpg" },
      { id: 4, name: "Vortex Maroon #04 — Red & Burgundy", desc: "Bunga putih bersih bersinar di atas latar belakang papan maroon.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157261/vortex-maroon-4.webp", fallbackImg: "images/box-04.jpg" },
      { id: 5, name: "Vortex Maroon #05 — White & Pink", desc: "Detail daun kemilau emas berpadu dengan mawar merah gelap.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157264/vortex-maroon-5.webp", fallbackImg: "images/box-05.jpg" },
      { id: 6, name: "Vortex Maroon #06 — Mix Flower", desc: "Sentuhan bunga lavender dan ungu tua memperkaya tekstur papan maroon.", price: "Rp 120.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157266/vortex-maroon-6.webp", fallbackImg: "images/box-06.jpg" }
    ]
  },
    "capsule": {
    title: "Flower Box Capsule",
    theme: "Modern & Futuristic Capsule",
    totalItems: 7,
    price: "Rp 130.000 (Promo) / Rp 160.000",
    description: "Desain flower box berbentuk capsule yang modern dan unik. Memberikan kesan futuristik namun tetap elegan dengan kombinasi warna yang menarik.",
    items: [
      { id: 1, name: "Capsule #01 — Galaxy Purple", desc: "Nuansa ungu galaksi yang memukau dengan sentuhan bunga putih.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155150/box_01.webp", fallbackImg: "images/box-01.jpg" },
      { id: 2, name: "Capsule #02 — Ocean Blue", desc: "Warna biru laut yang menyegarkan dengan aksen silver.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155152/box_02.webp", fallbackImg: "images/box-02.jpg" },
      { id: 3, name: "Capsule #03 — Sunset Orange", desc: "Gradasi oranye matahari terbenam yang hangat dan romantis.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155190/box_03.webp", fallbackImg: "images/box-03.jpg" },
      { id: 4, name: "Capsule #04 — Rose Gold", desc: "Perpaduan warna rose gold yang mewah dan feminin.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155192/box_04.webp", fallbackImg: "images/box-04.jpg" },
      { id: 5, name: "Capsule #05 — Mint Fresh", desc: "Nuansa mint yang segar dan menenangkan untuk semua acara.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155197/box_05.webp", fallbackImg: "images/box-05.jpg" },
      { id: 6, name: "Capsule #06 — Classic Black", desc: "Desain hitam klasik dengan aksen emas yang elegan.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155224/box_06.webp", fallbackImg: "images/box-06.jpg" },
      { id: 7, name: "Capsule #07 — Classic Brown", desc: "Desain hitam klasik dengan aksen emas yang elegan.", price: "Rp 130.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787155227/box_07.webp", fallbackImg: "images/box-07.jpg" }
    ]
  },
  "hologram": {
    title: "Flower Box Hologram",
    theme: "Premium Holographic Collection",
    totalItems: 10,
    price: "Rp 165.000 (Promo) / Rp 200.000",
    description: "Flower box dengan efek hologram yang memukau dan penuh warna. Koleksi eksklusif yang memberikan kesan mewah dan modern untuk acara spesial Anda.",
    items: [
      { id: 1, name: "Hologram #01 — Rainbow Shine", desc: "Efek pelangi holografik yang mencolok dan memukau.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157856/hologram.webp", fallbackImg: "images/box-01.jpg" },
      { id: 2, name: "Hologram #02 — Silver Starlight", desc: "Kilauan perak dan putih yang elegan seperti bintang.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157886/hologram-2.webp", fallbackImg: "images/box-02.jpg" },
      { id: 3, name: "Hologram #03 — Golden Aurora", desc: "Aksen emas holografik dengan gradasi yang dramatis.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157890/hologram-3.webp", fallbackImg: "images/box-03.jpg" },
      { id: 4, name: "Hologram #04 — Pink Dream", desc: "Nuansa pink holografik yang lembut dan romantis.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157905/hologram-4.webp", fallbackImg: "images/box-04.jpg" },
      { id: 5, name: "Hologram #05 — Blue Ice", desc: "Efek es biru yang sejuk dan berkilau.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157930/hologram-5.webp", fallbackImg: "images/box-05.jpg" },
      { id: 6, name: "Hologram #06 — Purple Mystic", desc: "Ungu mistis dengan kilauan holografik yang magis.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157930/hologram-6.webp", fallbackImg: "images/box-06.jpg" },
      { id: 7, name: "Hologram #07 — Rose Quartz", desc: "Pink muda quarzt rose dengan efek holografik lembut.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157925/hologram-7.webp", fallbackImg: "images/box-07.jpg" },
      { id: 8, name: "Hologram #08 — Emerald Luxe", desc: "Hijau zamrud luxo dengan kilauan emas holografik.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157936/hologram-8.webp", fallbackImg: "images/box-08.jpg" },
      { id: 9, name: "Hologram #09 — Coral Sunset", desc: "Oranye coral dengan gradasi pink holografik.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157945/hologram-9.webp", fallbackImg: "images/box-09.jpg" },
      { id: 10, name: "Hologram #10 — Diamond Elite", desc: "Putih kristal eksklusif dengan efek berlian holografik.", price: "Rp 165.000", img: "https://res.cloudinary.com/fvlmesou/image/upload/v1787157947/hologram-10.webp", fallbackImg: "images/box-10.jpg" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. IntersectionObserver untuk Scroll Dots Navigation (smooth performance)
  const sections = document.querySelectorAll("main section");
  const dots = document.querySelectorAll("nav.dots a");
  const accentOf = (sec) => getComputedStyle(sec).getPropertyValue("--accent").trim() || "#C1637E";
  let currentIndex = 0;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        const idx = [...sections].indexOf(e.target);
        if (idx !== currentIndex) {
          currentIndex = idx;
          dots.forEach((d) => d.classList.remove("active"));
          if (dots[idx]) {
            dots[idx].classList.add("active");
            const acc = accentOf(e.target);
            dots[idx].style.setProperty("--accent-dot", acc);
          }
        }
      }
    });
  }, { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" });

  sections.forEach((s) => io.observe(s));

  // 2. Trigger reveal animations when section comes into view
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.3) {
        e.target.querySelectorAll(".reveal").forEach((el, i) => {
          setTimeout(() => el.classList.add("in"), i * 80);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach((s) => revealObserver.observe(s));

  // 2. Setup Event Listeners untuk Tombol Detail Galeri
  const detailButtons = document.querySelectorAll(".btn-detail[data-category]");
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const categoryKey = btn.getAttribute("data-category");
      openModal(categoryKey);
    });
  });

  // Setup Tutup Modal via Tombol & Overlay & Keyboard
  const modalOverlay = document.getElementById("detailModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const bottomCloseBtn = document.getElementById("bottomCloseModalBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (bottomCloseBtn) bottomCloseBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
});

/**
 * Fungsi untuk membuka Modal Galeri dan merender item berdasarkan kategori
 */
function openModal(categoryKey) {
  const data = FLOWER_BOX_DATA[categoryKey];
  if (!data) return;

  const modalOverlay = document.getElementById("detailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalEyebrow = document.getElementById("modalEyebrow");
  const modalGrid = document.getElementById("modalGrid");
  const modalItemCount = document.getElementById("modalItemCount");

  modalTitle.textContent = data.title;
  modalEyebrow.textContent = `KOLEKSI ${data.theme} (${data.totalItems} ITEM)`;
  if (modalItemCount) modalItemCount.textContent = `Menampilkan ${data.totalItems} pilihan desain varian`;

  // Render HTML untuk setiap item gambar dalam grid dengan inline SVG icon
  modalGrid.innerHTML = data.items.map((item) => {
    const waText = encodeURIComponent(`Halo Anaya Bloom, saya ingin pesan ${data.title} (${item.name}) seharga ${item.price}. Mohon informasi ketersediaan tanggalnya ya.`);
    const waUrl = `https://wa.me/6285608347662?text=${waText}`;

    return `
      <div class="item-card">
        <div class="item-img-box">
          <span class="item-badge">Item #${item.id < 10 ? '0' + item.id : item.id}</span>
          <img src="${item.img}" alt="${item.name}" 
               onerror="if(this.src.endsWith('${item.fallbackImg}')){this.style.display='none'; this.nextElementSibling.style.display='flex';} else {this.src='${item.fallbackImg}';}">
          <div class="img-fallback">
            <div class="fi-icon">
              <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div class="fi-title">${item.name}</div>
            <div class="fi-path">${item.img}</div>
          </div>
        </div>
        <div class="item-info">
          <h4 class="item-title">${item.name}</h4>
          <p class="item-desc">${item.desc}</p>
          <div class="item-footer">
            <span class="item-price">${item.price}</span>
            <a href="${waUrl}" target="_blank" rel="noopener" class="item-btn">Pesan Item →</a>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Tampilkan Modal & Nonaktifkan scroll snap background
  modalOverlay.classList.add("active");
  document.body.classList.add("modal-open");
}

/**
 * Fungsi untuk menutup Modal
 */
function closeModal() {
  const modalOverlay = document.getElementById("detailModal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
}
