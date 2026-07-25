import React, { useState } from 'react';
import PublicNavbar from '../components/layout/PublicNavbar';

export default function AboutPage({ onNavigate, onGoToApp }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'RETAIL POS',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const team = [
    {
      name: 'Bapak masing"',
      role: 'Chief Executive Officer',
      bg: 'bg-white',
      img: '/hero-pos.jpg'
    },
    {
      name: 'Ahmad Farid Z.',
      role: 'Chief Technology Officer',
      bg: 'bg-primary',
      img: '/screen.png'
    },
    {
      name: 'Akbar Ramadhan',
      role: 'Head of Operations',
      bg: 'bg-white',
      img: '/retail.png'
    }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen w-full">
      {/* Shared Consistent Public Navbar */}
      <PublicNavbar currentPage="about" onNavigate={onNavigate} onGoToApp={onGoToApp} />

      <main className="w-full pt-[76px] min-h-screen">
        {/* Hero & Mission Section */}
        <section className="w-full relative overflow-hidden pt-20 pb-24 bg-background border-b-4 border-on-surface halftone-bg">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8 distort-1">
              <span className="inline-block px-4 py-1 bg-on-surface text-primary font-label-bold uppercase tracking-widest">
                Digital Revolution
              </span>
              <h1 className="font-display-lg text-display-lg text-on-surface leading-none uppercase italic">
                Digitalisasi Bisnis <span className="text-primary italic bg-on-surface px-2 inline-block skew-1">Tanpa</span> Batas.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface max-w-xl border-l-4 border-primary pl-6 font-bold italic">
                Kami percaya setiap pelaku usaha berhak mendapatkan akses ke infrastruktur keuangan yang stabil, modern, dan efisien. Inklusi teknologi adalah misi utama kami.
              </p>
              <div className="pt-4 flex gap-4">
                <button
                  onClick={onGoToApp}
                  className="bg-primary text-on-surface px-8 py-4 font-label-bold uppercase expressive-btn skew-neg-1 cursor-pointer"
                >
                  MULAI SEKARANG
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-on-surface border-4 border-on-surface px-8 py-4 font-label-bold uppercase expressive-btn skew-1 cursor-pointer"
                >
                  HUBUNGI KAMI
                </button>
              </div>
            </div>

            <div className="flex-1 w-full aspect-square relative distort-2">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 -z-10 border-4 border-on-surface"></div>
              <div className="w-full h-full border-4 border-on-surface overflow-hidden relative group bg-white">
                <img
                  alt="Kasirify Mission Graphics"
                  className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src="/screen.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-on-surface py-20 border-b-4 border-on-surface">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-primary grunge-border">
              <div className="font-display-lg text-4xl text-on-surface mb-2 font-black">10k+</div>
              <div className="font-label-bold uppercase tracking-tighter text-on-surface font-extrabold">Merchant Aktif</div>
            </div>
            <div className="text-center p-8 bg-white grunge-border">
              <div className="font-display-lg text-4xl text-on-surface mb-2 font-black">25+</div>
              <div className="font-label-bold uppercase tracking-tighter text-on-surface font-extrabold">Kota Terlayani</div>
            </div>
            <div className="text-center p-8 bg-primary grunge-border">
              <div className="font-display-lg text-4xl text-on-surface mb-2 font-black">5M+</div>
              <div className="font-label-bold uppercase tracking-tighter text-on-surface font-extrabold">Transaksi</div>
            </div>
            <div className="text-center p-8 bg-white grunge-border">
              <div className="font-display-lg text-4xl text-on-surface mb-2 font-black">99.9%</div>
              <div className="font-label-bold uppercase tracking-tighter text-on-surface font-extrabold">Uptime Server</div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-24 bg-background border-b-4 border-on-surface text-center">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display-lg text-headline-lg text-on-surface uppercase mb-16 italic inline-block bg-primary px-4 py-1 skew-1">
              Partner Ekosistem
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="px-8 py-4 border-4 border-on-surface font-label-bold bg-white text-on-surface transform -rotate-2 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer font-black">
                BANK PARTNER
              </div>
              <div className="px-8 py-4 border-4 border-on-surface font-label-bold bg-primary text-on-surface transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer font-black">
                HARDWARE CO
              </div>
              <div className="px-8 py-4 border-4 border-on-surface font-label-bold bg-white text-on-surface transform -rotate-1 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer font-black">
                CLOUD PROVIDER
              </div>
              <div className="px-8 py-4 border-4 border-on-surface font-label-bold bg-primary text-on-surface transform rotate-2 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer font-black">
                PAYMENT GATEWAY
              </div>
              <div className="px-8 py-4 border-4 border-on-surface font-label-bold bg-white text-on-surface transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer font-black">
                LOGISTICS SYNC
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-24 bg-surface-container-high border-b-4 border-on-surface">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 text-center distort-1">
              <h2 className="font-display-lg text-display-lg text-on-surface uppercase leading-none">
                Penggerak Inovasi
              </h2>
              <p className="font-body-lg text-on-surface-variant mt-4 font-bold italic">
                Bukan sekadar tim, tapi revolusioner industri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, idx) => (
                <div key={idx} className={`grunge-card relative group p-6 ${member.bg} border-4 border-on-surface distort-1`}>
                  <div className="aspect-square bg-white overflow-hidden border-4 border-on-surface relative">
                    <img
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                      src={member.img}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-black">{member.name}</h3>
                    <p className="font-label-bold text-secondary uppercase font-bold">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contact" className="w-full py-24 bg-background border-b-4 border-on-surface">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col lg:flex-row gap-16">

              {/* Form */}
              <div className="flex-1 bg-primary p-10 border-4 border-on-surface grunge-border relative">
                <div className="absolute -top-6 -left-6 bg-on-surface text-primary px-4 py-2 font-label-bold uppercase border-2 border-on-surface">
                  Get In Touch
                </div>
                <h2 className="font-display-lg text-display-lg text-on-surface mb-8 uppercase italic leading-none pt-4">
                  Hubungi Kami
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-white border-4 border-on-surface font-label-bold text-on-surface">
                    ✓ Pesan Anda telah terkirim! Tim Kasirify akan menghubungi Anda segera.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-bold text-on-surface uppercase text-xs mb-2">Nama Lengkap</label>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-on-surface outline-none focus:bg-primary-light transition-colors font-label-bold"
                        placeholder="JOHN DOE"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block font-label-bold text-on-surface uppercase text-xs mb-2">Email Bisnis</label>
                      <input
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-on-surface outline-none focus:bg-primary-light transition-colors font-label-bold"
                        placeholder="DEPT@BUSINESS.COM"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-bold text-on-surface uppercase text-xs mb-2">Layanan</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-on-surface outline-none font-label-bold"
                    >
                      <option value="RETAIL POS">RETAIL POS</option>
                      <option value="F&B SYSTEMS">F&B SYSTEMS</option>
                      <option value="ENTERPRISE SOLUTIONS">ENTERPRISE SOLUTIONS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-bold text-on-surface uppercase text-xs mb-2">Pesan</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-on-surface outline-none focus:bg-primary-light transition-colors font-label-bold"
                      placeholder="TULIS PESAN ANDA..."
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-on-surface text-primary font-label-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all expressive-btn cursor-pointer"
                  >
                    Kirim Sekarang
                  </button>
                </form>
              </div>

              {/* Map & Info */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex-grow min-h-[350px] border-4 border-on-surface relative overflow-hidden group bg-white">
                  <img
                    alt="Map View SCBD Jakarta"
                    className="w-full h-full object-cover filter grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                    src="/screen.png"
                  />
                  <div className="absolute bottom-6 left-6 bg-on-surface text-primary p-3 font-label-bold uppercase flex items-center gap-2 border-2 border-on-surface">
                    <span className="material-symbols-outlined">location_on</span> SCBD, JAKARTA
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-on-surface text-white grunge-border border-4 border-on-surface">
                    <h4 className="font-label-bold text-primary uppercase mb-4 tracking-widest font-black">Markas Besar</h4>
                    <p className="font-body-md text-white/90 italic uppercase font-bold">
                      Treasury Tower, Lt. 32<br />
                      District 8, SCBD<br />
                      Jakarta Selatan, 12190
                    </p>
                  </div>
                  <div className="p-8 bg-white text-on-surface grunge-border border-4 border-on-surface">
                    <h4 className="font-label-bold text-secondary uppercase mb-4 tracking-widest font-black">Support Line</h4>
                    <p className="font-body-md italic uppercase font-bold">
                      hello@kasirify.id<br />
                      +62 21 5550 1234<br />
                      Senin-Jumat: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-20 pb-12 bg-on-surface text-white border-t-8 border-primary">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4 distort-1">
              <div
                className="text-headline-md font-display-lg font-bold text-primary italic cursor-pointer"
                onClick={() => onNavigate('home')}
              >
                KASIRIFY
              </div>
              <p className="font-body-sm text-surface-container font-bold italic">
                Revolusi POS modern untuk ekonomi digital inklusif Indonesia.
              </p>
            </div>
            <div className="flex flex-col gap-3 font-label-bold uppercase text-sm">
              <h5 className="text-primary mb-1">Resources</h5>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}>Blog & News</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}>Documentation</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}>Help Center</a>
            </div>
            <div className="flex flex-col gap-3 font-label-bold uppercase text-sm">
              <h5 className="text-primary mb-1">Legal</h5>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>Security</a>
            </div>
            <div className="flex flex-col gap-3 font-label-bold uppercase text-sm">
              <h5 className="text-primary mb-1">Newsletter</h5>
              <div className="flex gap-0 border-2 border-primary bg-white">
                <input
                  className="bg-white text-on-surface px-4 py-2 border-none outline-none w-full font-label-bold uppercase text-xs"
                  placeholder="YOUR EMAIL"
                  type="email"
                />
                <button className="bg-primary text-on-surface px-4 py-2 font-label-bold uppercase hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t-2 border-white/10 text-center">
            <p className="font-label-bold uppercase opacity-60 text-xs tracking-widest">© 2024 Kasirify. Raw & Authentic POS Infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
