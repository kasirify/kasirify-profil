import React, { useEffect } from 'react';
import PublicNavbar from '../components/layout/PublicNavbar';

export default function LandingPage({ onNavigate, onGoToApp }) {
  useEffect(() => {
    // Intersection Observer for scroll reveal with grunge feel
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.grunge-card');
    elements.forEach((el) => {
      el.classList.add('transition-all', 'duration-500', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen w-full overflow-x-hidden">
      {/* Consistent Shared Navbar */}
      <PublicNavbar currentPage="home" onNavigate={onNavigate} onGoToApp={onGoToApp} />

      <main className="w-full pt-[76px] overflow-x-hidden">
        {/* Hero Section - Full Width Halftone Background & Border */}
        <section className="w-full relative overflow-hidden pt-12 md:pt-16 pb-20 md:pb-32 halftone-bg border-b-4 border-on-surface">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
              
              <div className="space-y-6 md:space-y-8 p-5 sm:p-8 bg-white border-4 border-on-surface grunge-border">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 bg-on-surface text-primary font-label-bold text-xs sm:text-sm uppercase tracking-tighter">
                  <span className="w-2.5 h-2.5 bg-primary"></span>
                  BARU: POS GENERASI CLOUD 2.0
                </div>
                <h1 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-surface leading-[0.9] md:leading-[0.85] uppercase font-black">
                  KASIR PINTAR <br /> UNTUK <span className="bg-primary px-2 skew-1 inline-block">BISNIS ANDA</span>
                </h1>
                <p className="font-body-lg text-base md:text-body-lg text-on-surface max-w-xl font-bold italic">
                  Kelola Coffee Shop, UMKM, hingga Gym dengan sistem POS yang handal, aman, dan mudah digunakan. Pantau performa bisnis dari mana saja.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 md:pt-4">
                  <button
                    onClick={onGoToApp}
                    className="bg-on-surface text-primary px-6 sm:px-8 py-4 sm:py-5 font-display-lg uppercase text-xl sm:text-2xl expressive-btn skew-neg-1 flex items-center justify-center gap-2 cursor-pointer font-black"
                  >
                    MULAI SEKARANG
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">arrow_forward</span>
                  </button>
                  <button
                    onClick={onGoToApp}
                    className="bg-white border-4 border-on-surface text-on-surface px-6 sm:px-8 py-4 sm:py-5 font-display-lg uppercase text-xl sm:text-2xl expressive-btn skew-1 flex items-center justify-center gap-2 cursor-pointer font-black"
                  >
                    LIHAT DEMO
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">play_circle</span>
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t-2 border-outline-variant">
                  <div className="flex -space-x-3 sm:-space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-on-surface bg-primary flex items-center justify-center font-black text-on-surface rotate-6 text-sm sm:text-base">K</div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-on-surface bg-white flex items-center justify-center font-black text-on-surface -rotate-12 text-sm sm:text-base">I</div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-on-surface bg-on-surface flex items-center justify-center font-black text-primary rotate-3 text-sm sm:text-base">!</div>
                  </div>
                  <p className="text-xs sm:text-label-bold text-on-surface uppercase tracking-tighter font-bold">
                    Dipercaya oleh <span className="bg-primary px-1 font-black">5,000+</span> pebisnis Indonesia
                  </p>
                </div>
              </div>

              <div className="relative w-full">
                <div className="relative z-10 grunge-card p-2 bg-on-surface rotate-1 md:rotate-2 overflow-hidden">
                  <div className="bg-white p-0">
                    <img
                      alt="Kasirify POS System"
                      className="w-full object-cover rounded-sm"
                      src="/screen.png"
                    />
                  </div>
                </div>
                {/* Graphic badge */}
                <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-primary border-4 border-on-surface rounded-full flex items-center justify-center font-black text-2xl md:text-4xl -rotate-12 z-20 shadow-lg">
                  POS
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sector Section (Bento Grid) - Full Width Background & Border */}
        <section id="solutions" className="w-full py-16 md:py-24 bg-surface-container-high border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg text-on-surface uppercase tracking-tighter skew-1 inline-block bg-primary px-4 font-black">
                PILIH SOLUSI TEPAT
              </h2>
              <p className="font-body-lg font-bold text-on-surface-variant max-w-2xl mx-auto italic text-sm md:text-base">
                Fitur yang dirancang khusus untuk memenuhi kebutuhan spesifik industri Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Coffee Shop Card */}
              <div className="group bg-white p-6 sm:p-8 grunge-card hover:bg-primary transition-colors">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-on-surface bg-white flex items-center justify-center mb-6 sm:mb-8 rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl font-black">coffee</span>
                </div>
                <h3 className="font-display-lg text-xl sm:text-headline-md mb-3 sm:mb-4 uppercase leading-none font-black">Coffee Shop</h3>
                <p className="text-xs sm:text-body-md font-bold mb-6 sm:mb-8 opacity-80 italic">Optimasi pesanan cepat dan manajemen meja yang intuitif.</p>
                <div className="layered-graphic h-40 sm:h-44 w-full flex items-center justify-center bg-white p-2 overflow-hidden">
                  <img
                    alt="Coffee Shop POS"
                    className="w-full h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    src="/kopi.png"
                  />
                </div>
              </div>

              {/* UMKM / Retail Card */}
              <div className="group bg-white p-6 sm:p-8 grunge-card hover:bg-primary transition-colors lg:translate-y-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-on-surface bg-white flex items-center justify-center mb-6 sm:mb-8 -rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl font-black">inventory_2</span>
                </div>
                <h3 className="font-display-lg text-xl sm:text-headline-md mb-3 sm:mb-4 uppercase leading-none font-black">Retail</h3>
                <p className="text-xs sm:text-body-md font-bold mb-6 sm:mb-8 opacity-80 italic">Kelola ribuan stok produk dengan scan barcode otomatis.</p>
                <div className="layered-graphic h-40 sm:h-44 w-full flex items-center justify-center bg-white p-2 overflow-hidden">
                  <img
                    alt="Retail POS"
                    className="w-full h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    src="/retail.png"
                  />
                </div>
              </div>

              {/* Gym & Fitness Card */}
              <div className="group bg-white p-6 sm:p-8 grunge-card hover:bg-primary transition-colors">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-on-surface bg-white flex items-center justify-center mb-6 sm:mb-8 rotate-6 group-hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl font-black">fitness_center</span>
                </div>
                <h3 className="font-display-lg text-xl sm:text-headline-md mb-3 sm:mb-4 uppercase leading-none font-black">Fitness</h3>
                <p className="text-xs sm:text-body-md font-bold mb-6 sm:mb-8 opacity-80 italic">Manajemen keanggotaan dan sistem billing otomatis.</p>
                <div className="layered-graphic h-40 sm:h-44 w-full flex items-center justify-center bg-white p-2 overflow-hidden">
                  <img
                    alt="Fitness POS"
                    className="w-full h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    src="/gym.png"
                  />
                </div>
              </div>

              {/* Services Card */}
              <div className="group bg-white p-6 sm:p-8 grunge-card hover:bg-primary transition-colors lg:translate-y-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-on-surface bg-white flex items-center justify-center mb-6 sm:mb-8 -rotate-6 group-hover:rotate-0 transition-transform">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl font-black">event_available</span>
                </div>
                <h3 className="font-display-lg text-xl sm:text-headline-md mb-3 sm:mb-4 uppercase leading-none font-black">Services</h3>
                <p className="text-xs sm:text-body-md font-bold mb-6 sm:mb-8 opacity-80 italic">Sistem booking janji temu terintegrasi untuk salon.</p>
                <div className="layered-graphic h-40 sm:h-44 w-full flex items-center justify-center bg-white p-2 overflow-hidden">
                  <img
                    alt="Service POS"
                    className="w-full h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    src="/services.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Full Width Border */}
        <section id="about" className="w-full py-16 md:py-24 border-b-4 border-on-surface overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 order-2 lg:order-1">
                <div className="bg-white p-6 sm:p-8 grunge-card rotate-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 text-on-surface mb-3 sm:mb-4">
                    <span className="material-symbols-outlined text-4xl sm:text-5xl font-black">bolt</span>
                  </div>
                  <h4 className="font-display-lg text-base sm:text-body-lg uppercase mb-2 font-black">Fast Deals</h4>
                  <p className="text-xs sm:text-body-sm font-bold opacity-70">Antrian hilang dengan proses bayar super cepat.</p>
                </div>
                <div className="bg-primary p-6 sm:p-8 grunge-card -rotate-2 sm:mt-8 md:mt-12">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 text-on-surface mb-3 sm:mb-4">
                    <span className="material-symbols-outlined text-4xl sm:text-5xl font-black">cloud_sync</span>
                  </div>
                  <h4 className="font-display-lg text-base sm:text-body-lg uppercase mb-2 font-black">Cloud Sync</h4>
                  <p className="text-xs sm:text-body-sm font-bold opacity-70">Data aman di cloud. Akses dari mana saja.</p>
                </div>
                <div className="bg-white p-6 sm:p-8 grunge-card -rotate-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 text-on-surface mb-3 sm:mb-4">
                    <span className="material-symbols-outlined text-4xl sm:text-5xl font-black">analytics</span>
                  </div>
                  <h4 className="font-display-lg text-base sm:text-body-lg uppercase mb-2 font-black">Insight</h4>
                  <p className="text-xs sm:text-body-sm font-bold opacity-70">Laporan mendalam untuk keputusan strategis.</p>
                </div>
                <div className="bg-primary p-6 sm:p-8 grunge-card rotate-3 sm:mt-8 md:mt-12">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 text-on-surface mb-3 sm:mb-4">
                    <span className="material-symbols-outlined text-4xl sm:text-5xl font-black">verified_user</span>
                  </div>
                  <h4 className="font-display-lg text-base sm:text-body-lg uppercase mb-2 font-black">Hardened</h4>
                  <p className="text-xs sm:text-body-sm font-bold opacity-70">Enkripsi data tingkat perbankan.</p>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8 order-1 lg:order-2 p-6 sm:p-8 bg-on-surface text-primary grunge-border">
                <h2 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg uppercase leading-[0.9] md:leading-[0.85] font-black">
                  LEVEL <br />
                  <span className="text-white">SELANJUTNYA</span>
                </h2>
                <p className="text-base sm:text-body-lg font-bold italic text-white">
                  Kami mengerti bahwa setiap detik sangat berharga bagi bisnis Anda. Kasirify dirancang untuk menghilangkan hambatan operasional.
                </p>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-center gap-3 sm:gap-4 border-b-2 border-primary/30 pb-3 sm:pb-4">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      add_box
                    </span>
                    <span className="font-display-lg text-base sm:text-xl uppercase font-black">Metode Pembayaran Digital</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 border-b-2 border-primary/30 pb-3 sm:pb-4">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      add_box
                    </span>
                    <span className="font-display-lg text-base sm:text-xl uppercase font-black">Inventaris Real-Time</span>
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      add_box
                    </span>
                    <span className="font-display-lg text-base sm:text-xl uppercase font-black">Support 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Full Width Border */}
        <section id="pricing" className="w-full py-16 md:py-24 border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="bg-on-surface p-6 sm:p-12 md:p-20 relative overflow-hidden text-center grunge-border halftone-bg !bg-fixed">
              <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-12">
                <h2 className="font-display-lg text-2xl sm:text-4xl md:text-display-lg uppercase text-on-surface leading-tight md:leading-none font-black">
                  SIAP MODERNISASI BISNIS ANDA?
                </h2>
                <p className="text-base sm:text-xl font-black italic bg-white inline-block px-3 sm:px-4 py-2 border-4 border-on-surface">
                  Coba gratis selama 14 hari. Tanpa ribet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
                  <button
                    onClick={onGoToApp}
                    className="bg-primary text-on-surface px-8 sm:px-12 py-4 sm:py-6 font-display-lg uppercase text-xl sm:text-3xl expressive-btn skew-neg-1 cursor-pointer font-black"
                  >
                    MULAI SEKARANG
                  </button>
                  <button
                    onClick={onGoToApp}
                    className="bg-white text-on-surface border-4 border-on-surface px-8 sm:px-12 py-4 sm:py-6 font-display-lg uppercase text-xl sm:text-3xl expressive-btn skew-1 cursor-pointer font-black"
                  >
                    HUBUNGI SALES
                  </button>
                </div>
                <p className="font-label-bold uppercase tracking-widest bg-on-surface text-primary inline-block px-2 text-xs sm:text-sm">
                  Tidak perlu kartu kredit untuk memulai uji coba.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Full Width Background & Border */}
      <footer className="w-full pt-16 md:pt-20 pb-12 bg-on-surface text-white border-t-8 border-primary overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <span className="text-3xl md:text-display-lg font-black text-primary skew-neg-1 inline-block">KASIRIFY</span>
              <p className="font-body-sm font-bold opacity-60 uppercase tracking-tighter text-xs md:text-sm">
                Solusi POS terpadu untuk percepatan bisnis Indonesia. Kami membangun teknologi untuk memberdayakan UMKM dan korporasi.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 md:w-12 md:h-12 bg-primary border-2 border-white flex items-center justify-center text-on-surface hover:scale-110 transition-transform" href="#">
                  <span className="material-symbols-outlined">language</span>
                </a>
                <a className="w-10 h-10 md:w-12 md:h-12 bg-primary border-2 border-white flex items-center justify-center text-on-surface hover:scale-110 transition-transform" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-display-lg text-primary uppercase tracking-widest text-lg md:text-xl font-black">Layanan</h4>
              <ul className="space-y-2 md:space-y-4 text-xs md:text-sm">
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">POS Coffee Shop</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Retail & Inventory</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Manajemen Gym</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Sistem Booking Salon</a></li>
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-display-lg text-primary uppercase tracking-widest text-lg md:text-xl font-black">Perusahaan</h4>
              <ul className="space-y-2 md:space-y-4 text-xs md:text-sm">
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Tentang Kami</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Karir</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Blog & Berita</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Kontak Kami</a></li>
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-display-lg text-primary uppercase tracking-widest text-lg md:text-xl font-black">Dukungan</h4>
              <ul className="space-y-2 md:space-y-4 text-xs md:text-sm">
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Pusat Bantuan</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Panduan Pengguna</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Kebijakan Privasi</a></li>
                <li><a className="font-label-bold uppercase opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 md:mt-20 pt-8 border-t-2 border-white/10 text-center">
            <p className="font-label-bold uppercase opacity-40 text-xs tracking-widest">© 2024 Kasirify. All rights reserved. Bangga buatan Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
