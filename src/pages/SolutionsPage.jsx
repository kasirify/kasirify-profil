import React from 'react';
import PublicNavbar from '../components/layout/PublicNavbar';

export default function SolutionsPage({ onNavigate, onGoToApp }) {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen w-full overflow-x-hidden">
      {/* Shared Consistent Public Navbar */}
      <PublicNavbar currentPage="solutions" onNavigate={onNavigate} onGoToApp={onGoToApp} />

      <main className="w-full pt-[76px] min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden pt-12 md:pt-16 pb-16 md:pb-20 bg-primary border-b-8 border-on-surface halftone-bg">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6 distort-1">
              <span className="inline-block bg-on-surface text-primary px-3 py-1 font-label-bold text-xs md:text-label-bold uppercase italic tracking-widest">
                RADICAL EFFICIENCY
              </span>
              <h1 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-surface leading-[0.9] md:leading-[0.85] uppercase font-black">
                TAILORED <span className="text-secondary italic">INFRASTRUCTURE</span> FOR BUSINESS.
              </h1>
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 border-4 border-on-surface grunge-border-sm shadow-[4px_4px_0px_0px_rgba(28,27,27,1)] max-w-xl">
                <p className="font-body-lg text-base md:text-body-lg text-on-surface font-extrabold italic leading-relaxed">
                  Kasirify provides high-performance POS infrastructure customized for the unique operational demands of your sector. No fluff. Just raw power.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('vertical-expertise');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary text-on-surface px-6 sm:px-8 py-4 font-label-bold text-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-on-surface hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer text-center"
                >
                  EXPLORE SECTORS
                </button>
                <button 
                  onClick={onGoToApp}
                  className="bg-white text-on-surface border-4 border-on-surface px-6 sm:px-8 py-4 font-label-bold text-label-bold uppercase hover:bg-on-surface hover:text-white transition-all cursor-pointer text-center"
                >
                  WATCH DEMO
                </button>
              </div>
            </div>

            <div className="md:col-span-5 relative w-full">
              <div className="relative border-4 md:border-8 border-on-surface bg-secondary p-2 md:p-4 shadow-[8px_8px_0px_0px_rgba(112,93,0,1)] md:shadow-[12px_12px_0px_0px_rgba(112,93,0,1)] distort-2 overflow-hidden">
                <img 
                  alt="Kasirify Screen System" 
                  className="w-full aspect-[4/3] object-cover rounded-sm" 
                  src="/screen.png" 
                />
                <div className="absolute inset-0 border-4 border-white/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Bento Grid Section (Vertical Expertise) */}
        <section id="vertical-expertise" className="w-full py-16 md:py-24 bg-background border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="mb-12 md:mb-16 distort-1">
              <h2 className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg text-on-surface uppercase tracking-tighter font-black">
                VERTICAL EXPERTISE
              </h2>
              <div className="h-2 w-32 md:w-48 bg-primary mt-2"></div>
              <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mt-4 max-w-lg font-bold italic">
                Precision tools designed for your specific industry challenges. Built heavy, built fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Coffee Shop & Cafe (Span 8) */}
              <div className="group md:col-span-8 bg-white border-4 border-on-surface p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:shadow-[8px_8px_0px_0px_#705d00] md:hover:shadow-[12px_12px_0px_0px_#705d00] transition-all distort-2">
                <div className="flex-1 space-y-4 w-full">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined font-bold text-3xl md:text-4xl text-on-surface">local_cafe</span>
                    <span className="font-label-bold text-xs md:text-label-bold uppercase italic bg-primary text-on-surface px-2 py-0.5 border border-on-surface">
                      F&B SECTOR
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl md:text-headline-md uppercase tracking-tight font-extrabold">Coffee Shop & Cafe</h3>
                  <p className="text-on-surface-variant font-body-md italic text-sm md:text-base">
                    Master your craft with ingredient-level inventory tracking and recipe management. Handle morning rushes with a lightning-fast checkout interface.
                  </p>
                  <ul className="space-y-2 pt-2 font-bold uppercase text-xs md:text-sm">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      Recipe-Based Inventory
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      Split Bill & Open Tables
                    </li>
                  </ul>
                </div>
                <div className="flex-1 border-4 border-on-surface bg-white p-2 overflow-hidden h-48 md:h-64 w-full flex items-center justify-center">
                  <img 
                    alt="Coffee shop cashier setup" 
                    className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
                    src="/kopi.png" 
                  />
                </div>
              </div>

              {/* Gyms & Wellness (Span 4 - Rust Red) */}
              <div className="group md:col-span-4 bg-tertiary text-white border-4 border-on-surface p-6 md:p-8 flex flex-col justify-between hover:bg-on-surface transition-colors distort-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-3xl md:text-4xl">fitness_center</span>
                    <span className="font-label-bold text-xs md:text-label-bold uppercase bg-white text-on-surface px-2 py-0.5 font-bold">SERVICES</span>
                  </div>
                  <h3 className="font-headline-md text-xl md:text-headline-md uppercase tracking-tight text-white font-extrabold">Gyms & Wellness</h3>
                  <p className="font-body-sm text-tertiary-fixed font-bold italic text-xs md:text-sm">
                    Integrated member portals, automated billing, and biometric attendance tracking for modern fitness centers.
                  </p>
                </div>
                <div className="border-4 border-on-surface bg-white p-2 overflow-hidden h-40 w-full my-4 flex items-center justify-center">
                  <img 
                    alt="Gym Fitness POS" 
                    className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
                    src="/gym.png" 
                  />
                </div>
                <div 
                  onClick={onGoToApp}
                  className="pt-4 border-t-2 border-white/30 flex items-center justify-between font-label-bold uppercase tracking-widest cursor-pointer group-hover:text-primary transition-colors text-xs md:text-sm"
                >
                  <span>Portal Ready</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                </div>
              </div>

              {/* UMKM & Multi-Branch Retail (Span 5 - Electric Blue) */}
              <div className="group md:col-span-5 bg-secondary text-white border-4 border-on-surface p-6 md:p-8 flex flex-col justify-between hover:bg-on-surface transition-colors distort-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-3xl md:text-4xl">storefront</span>
                    <span className="font-label-bold text-xs md:text-label-bold uppercase bg-primary text-on-surface px-2 py-0.5 border border-on-surface font-bold">RETAIL</span>
                  </div>
                  <h3 className="font-headline-md text-xl md:text-headline-md uppercase tracking-tight font-extrabold">UMKM & Multi-Branch</h3>
                  <p className="font-body-sm opacity-90 font-bold italic text-xs md:text-sm">
                    Scale your retail business with centralized stock opname, multi-outlet management, and real-time cloud reporting.
                  </p>
                </div>
                <div className="relative w-full h-44 my-4 border-4 border-on-surface bg-white p-2 overflow-hidden flex items-center justify-center">
                  <img 
                    alt="Retail checkout counter" 
                    className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
                    src="/retail.png" 
                  />
                </div>
                <div 
                  onClick={onGoToApp}
                  className="pt-4 border-t-2 border-white/30 flex items-center justify-between font-label-bold uppercase tracking-widest cursor-pointer group-hover:text-primary transition-colors text-xs md:text-sm"
                >
                  <span>Cloud Sync</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">cloud_upload</span>
                </div>
              </div>

              {/* Unified Operations (Span 7 - Yellow) */}
              <div className="group md:col-span-7 bg-primary border-4 border-on-surface p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 hover:shadow-[8px_8px_0px_0px_#0b00e7] md:hover:shadow-[12px_12px_0px_0px_#0b00e7] transition-all distort-1">
                <div className="space-y-4 flex flex-col justify-center">
                  <h3 className="font-headline-md text-xl md:text-headline-md uppercase tracking-tight font-extrabold">Unified Operations</h3>
                  <p className="font-body-sm text-on-surface font-bold italic text-xs md:text-sm">
                    Kasirify isn't just software. It's a stable financial infrastructure that grows with your business needs.
                  </p>
                  <button 
                    onClick={onGoToApp}
                    className="bg-on-surface text-white px-6 py-2 mt-2 font-label-bold uppercase flex items-center gap-2 group self-start cursor-pointer hover:bg-secondary transition-colors text-xs md:text-sm"
                  >
                    Features 
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-all">chevron_right</span>
                  </button>
                </div>
                <div className="relative border-4 border-on-surface bg-white p-2 h-40 md:h-44 flex items-center justify-center overflow-hidden">
                  <img 
                    alt="Services POS" 
                    className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
                    src="/services.png" 
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="w-full py-16 md:py-24 bg-on-surface text-white border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="mb-12 md:mb-16 distort-1">
              <h2 className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg uppercase text-primary tracking-tighter font-black">Feature Comparison</h2>
              <p className="font-body-md text-surface-container font-bold italic text-sm md:text-base">Find the raw power you need. No compromises.</p>
            </div>
            
            {/* Responsive Table Container */}
            <div className="w-full overflow-x-auto border-4 border-primary shadow-lg">
              <table className="w-full min-w-[600px] text-left border-collapse bg-on-surface">
                <thead>
                  <tr className="bg-primary text-on-surface border-b-4 border-on-surface">
                    <th className="px-4 md:px-6 py-4 font-label-bold uppercase tracking-widest border-r-2 border-on-surface text-xs md:text-sm">Capabilities</th>
                    <th className="px-4 md:px-6 py-4 font-label-bold uppercase tracking-widest border-r-2 border-on-surface text-xs md:text-sm">Coffee Shop</th>
                    <th className="px-4 md:px-6 py-4 font-label-bold uppercase tracking-widest border-r-2 border-on-surface text-xs md:text-sm">UMKM Retail</th>
                    <th className="px-4 md:px-6 py-4 font-label-bold uppercase tracking-widest text-xs md:text-sm">Gym & Fitness</th>
                  </tr>
                </thead>
                <tbody className="font-label-bold uppercase text-xs md:text-sm italic">
                  <tr className="border-b-2 border-primary/20 hover:bg-white/10 transition-colors">
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20 bg-white/5 text-primary">Inventory</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">Recipe-level</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">Branch Sync</td>
                    <td className="px-4 md:px-6 py-4">Merch Only</td>
                  </tr>
                  <tr className="border-b-2 border-primary/20 hover:bg-white/10 transition-colors">
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20 bg-white/5 text-primary">CRM</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">Points</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">History</td>
                    <td className="px-4 md:px-6 py-4">Full Portal</td>
                  </tr>
                  <tr className="border-b-2 border-primary/20 hover:bg-white/10 transition-colors">
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20 bg-white/5 text-primary">Staff</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">Shifts</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">Commish</td>
                    <td className="px-4 md:px-6 py-4">Attendance</td>
                  </tr>
                  <tr className="hover:bg-white/10 transition-colors">
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20 bg-white/5 text-primary">Speed</td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">
                      <span className="bg-secondary text-white font-black px-2 py-0.5 text-xs">ULTRA</span>
                    </td>
                    <td className="px-4 md:px-6 py-4 border-r-2 border-primary/20">High</td>
                    <td className="px-4 md:px-6 py-4">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 bg-background border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonial 1 */}
              <div className="p-6 md:p-8 bg-white border-4 border-on-surface shadow-[6px_6px_0px_0px_rgba(11,0,231,1)] md:shadow-[8px_8px_0px_0px_rgba(11,0,231,1)] distort-1 flex flex-col justify-between">
                <div>
                  <div className="flex text-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-body-md italic text-on-surface mb-6 md:mb-8 leading-relaxed font-bold text-sm md:text-base">
                    "The recipe management in Kasirify changed how we handle inventory. No more guessing how much milk we used today."
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t-2 border-outline-variant pt-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-on-surface bg-primary flex items-center justify-center font-black text-on-surface text-sm md:text-base">AT</div>
                  <div>
                    <h4 className="font-label-bold uppercase text-primary font-black text-sm">Andri Tan</h4>
                    <p className="text-xs uppercase font-extrabold text-on-surface">Founder, Bean & Brew</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-6 md:p-8 bg-primary border-4 border-on-surface shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] distort-2 flex flex-col justify-between">
                <div>
                  <div className="flex text-on-surface mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-body-md italic text-on-surface mb-6 md:mb-8 leading-relaxed font-bold text-sm md:text-base">
                    "Managing 12 branches from my phone seemed impossible until we switched. Stock opname is now 70% faster."
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t-2 border-on-surface pt-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-on-surface bg-white flex items-center justify-center font-black text-on-surface text-sm md:text-base">SR</div>
                  <div>
                    <h4 className="font-label-bold uppercase text-secondary font-black text-sm">Siti Rahayu</h4>
                    <p className="text-xs uppercase font-extrabold text-on-surface">Owner, Rahayu Retail Group</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-6 md:p-8 bg-white border-4 border-on-surface shadow-[6px_6px_0px_0px_#ae3200] md:shadow-[8px_8px_0px_0px_#ae3200] distort-1 flex flex-col justify-between">
                <div>
                  <div className="flex text-tertiary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-body-md italic text-on-surface mb-6 md:mb-8 leading-relaxed font-bold text-sm md:text-base">
                    "The member portal and automated attendance reduced our front-desk workload significantly. It's stable."
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t-2 border-outline-variant pt-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-on-surface bg-on-surface text-primary flex items-center justify-center font-black text-sm md:text-base">MW</div>
                  <div>
                    <h4 className="font-label-bold uppercase text-tertiary font-black text-sm">Marcus Wong</h4>
                    <p className="text-xs uppercase font-extrabold text-on-surface">GM, Titan Fitness Lab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 bg-secondary border-y-8 border-on-surface text-white text-center overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop space-y-6 md:space-y-8 distort-2">
            <h2 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-white uppercase italic font-black">
              Ready to transform?
            </h2>
            <p className="font-body-lg text-primary-fixed-dim font-bold max-w-2xl mx-auto uppercase tracking-tighter text-sm md:text-base">
              Join over 5,000 businesses trusting Kasirify for their daily transactions and growth strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4">
              <button 
                onClick={onGoToApp}
                className="bg-primary text-on-surface px-8 md:px-12 py-4 md:py-5 font-label-bold text-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] border-4 border-on-surface hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer font-black"
              >
                Get Started Free
              </button>
              <button 
                onClick={onGoToApp}
                className="bg-white text-on-surface border-4 border-on-surface px-8 md:px-12 py-4 md:py-5 font-label-bold text-label-bold uppercase hover:bg-primary transition-all cursor-pointer font-black"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-16 md:pt-20 pb-12 bg-on-surface text-white border-t-8 border-primary overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4 distort-1">
              <div 
                className="text-headline-md font-display-lg font-bold text-primary italic cursor-pointer"
                onClick={() => onNavigate('home')}
              >
                KASIRIFY
              </div>
              <p className="font-body-sm text-surface-container font-bold italic text-xs md:text-sm">
                Empowering commerce through intelligent, industry-specific POS infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-3 font-label-bold uppercase text-xs md:text-sm">
              <h5 className="text-primary mb-1">Product</h5>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}>Solutions</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}>Pricing</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Resources</a>
            </div>
            <div className="flex flex-col gap-3 font-label-bold uppercase text-xs md:text-sm">
              <h5 className="text-primary mb-1">Company</h5>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>Contact</a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            </div>
            <div className="flex flex-col gap-3 font-label-bold uppercase text-xs md:text-sm">
              <h5 className="text-primary mb-1">Legal</h5>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
              <div className="flex gap-3 mt-2">
                <span className="material-symbols-outlined text-primary cursor-pointer border-2 border-primary p-1 hover:bg-primary hover:text-on-surface">public</span>
                <span className="material-symbols-outlined text-primary cursor-pointer border-2 border-primary p-1 hover:bg-primary hover:text-on-surface">chat</span>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-20 pt-8 border-t-2 border-white/10 text-center">
            <p className="font-label-bold uppercase opacity-60 text-xs tracking-widest">© 2024 Kasirify. Raw & Radical POS Infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
