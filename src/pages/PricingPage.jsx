import React, { useState } from 'react';
import PublicNavbar from '../components/layout/PublicNavbar';

export default function PricingPage({ onNavigate, onGoToApp }) {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What hardware is compatible with Kasirify?',
      a: 'Kasirify is hardware-agnostic. We work with almost any Android or iOS tablet, as well as Windows-based terminals. We support ESC/POS thermal printers, Bluetooth barcode scanners, and multiple payment gateway terminals.'
    },
    {
      q: 'Can I change my plan later?',
      a: 'Absolutely! You can upgrade or downgrade your plan at any time through your dashboard. If you upgrade, the new features will be available instantly.'
    },
    {
      q: 'Is my data secure?',
      a: 'We utilize bank-level AES-256 encryption for all data storage and SSL/TLS for data in transit. Your financial data is hosted on highly secure, isolated cloud infrastructure.'
    }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen w-full overflow-x-hidden">
      {/* Consistent Shared Navbar */}
      <PublicNavbar currentPage="pricing" onNavigate={onNavigate} onGoToApp={onGoToApp} />

      <main className="w-full pt-[76px] min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16 halftone-bg border-b-4 border-on-surface">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop relative z-10 text-center">
            <h1 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-surface mb-6 max-w-4xl mx-auto uppercase leading-tight md:leading-none font-black">
              CHOOSE THE PERFECT PLAN FOR BUSINESS GROWTH.
            </h1>
            <p className="font-body-lg text-base md:text-body-lg text-on-surface max-w-2xl mx-auto mb-8 md:mb-12 bg-white/80 backdrop-blur-sm p-4 border-2 border-on-surface font-bold italic">
              From small neighborhood stalls to multi-national gym chains, Kasirify provides the stable financial infrastructure you need to scale.
            </p>

            {/* Toggle Monthly/Yearly */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
              <span className={`font-label-bold uppercase text-sm md:text-base ${!isYearly ? 'text-secondary font-black' : 'text-on-surface'}`}>
                Monthly
              </span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className={`w-14 md:w-16 h-7 md:h-8 border-4 border-on-surface relative p-1 flex items-center transition-all duration-300 cursor-pointer ${
                  isYearly ? 'bg-secondary' : 'bg-white'
                }`}
              >
                <div 
                  className={`bg-on-surface w-4 md:w-5 h-4 md:h-5 transition-transform duration-300 ${
                    isYearly ? 'translate-x-6 md:translate-x-7 bg-white' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`font-label-bold uppercase flex flex-col items-start leading-none text-sm md:text-base ${isYearly ? 'text-secondary font-black' : 'text-on-surface'}`}>
                Yearly 
                <span className="text-secondary text-xs font-black">(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="w-full py-12 md:py-20 bg-background border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
              
              {/* Starter Tier */}
              <div className="non-rigid-card flex flex-col p-6 md:p-10 bg-white border-4 border-on-surface grunge-border text-on-surface" style={{ '--rotation': '-1.5deg' }}>
                <div className="mb-6 md:mb-8">
                  <h3 className="font-display-lg text-2xl md:text-headline-md uppercase mb-2 font-black">Starter</h3>
                  <p className="font-body-md text-on-surface-variant italic text-xs md:text-sm">Best for UMKM and home-based businesses.</p>
                </div>
                <div className="mb-6 md:mb-8 border-b-2 border-dashed border-outline-variant pb-6">
                  <span className="font-display-lg text-4xl md:text-display-lg text-secondary leading-none font-black">$0</span>
                  <span className="font-label-bold uppercase opacity-60 text-xs md:text-sm">/forever</span>
                </div>
                <ul className="flex-grow space-y-3 md:space-y-4 mb-8 md:mb-10 text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Single register terminal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Standard inventory tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Email-only support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Basic sales reports</span>
                  </li>
                </ul>
                <button 
                  onClick={onGoToApp}
                  className="w-full py-4 border-4 border-on-surface bg-white text-on-surface font-label-bold uppercase hover:bg-primary transition-colors expressive-btn cursor-pointer font-black text-sm md:text-base"
                >
                  Start Free
                </button>
              </div>

              {/* Professional Tier */}
              <div className="non-rigid-card flex flex-col p-6 md:p-10 bg-white border-4 border-on-surface grunge-border text-on-surface md:scale-105 z-20 relative" style={{ '--rotation': '1deg' }}>
                <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 md:px-6 py-1.5 md:py-2 border-4 border-on-surface font-label-bold uppercase tracking-widest text-xs md:text-sm transform -rotate-2 shadow-md font-black whitespace-nowrap">
                  Most Popular
                </div>
                <div className="mb-6 md:mb-8 pt-4">
                  <h3 className="font-display-lg text-2xl md:text-headline-md uppercase mb-2 font-black">Professional</h3>
                  <p className="font-body-md text-on-surface-variant italic text-xs md:text-sm">Perfect for growing Coffee Shops and Retailers.</p>
                </div>
                <div className="mb-6 md:mb-8 border-b-4 border-on-surface pb-6">
                  <span className="font-display-lg text-4xl md:text-display-lg text-secondary leading-none font-black">
                    {isYearly ? '$24' : '$29'}
                  </span>
                  <span className="font-label-bold uppercase opacity-60 text-xs md:text-sm">/mo</span>
                </div>
                <ul className="flex-grow space-y-3 md:space-y-4 mb-8 md:mb-10 text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-bold uppercase tracking-tight">Up to 3 register terminals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-bold uppercase tracking-tight">Advanced Stock Forecasting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-bold uppercase tracking-tight">24/7 Priority Chat Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-bold uppercase tracking-tight">Table Management (F&B)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-bold uppercase tracking-tight">Customer Loyalty Program</span>
                  </li>
                </ul>
                <button 
                  onClick={onGoToApp}
                  className="w-full py-4 bg-primary text-on-surface border-4 border-on-surface font-label-bold uppercase hover:bg-secondary hover:text-white transition-all expressive-btn cursor-pointer font-black text-sm md:text-base"
                >
                  Go Professional
                </button>
              </div>

              {/* Enterprise Tier */}
              <div className="non-rigid-card flex flex-col p-6 md:p-10 bg-white border-4 border-on-surface grunge-border text-on-surface" style={{ '--rotation': '-0.5deg' }}>
                <div className="mb-6 md:mb-8">
                  <h3 className="font-display-lg text-2xl md:text-headline-md uppercase mb-2 font-black">Enterprise</h3>
                  <p className="font-body-md text-on-surface-variant italic text-xs md:text-sm">Scale your multi-branch chains and Gyms.</p>
                </div>
                <div className="mb-6 md:mb-8 border-b-2 border-dashed border-outline-variant pb-6">
                  <span className="font-display-lg text-4xl md:text-display-lg text-secondary leading-none font-black">
                    {isYearly ? '$71' : '$89'}
                  </span>
                  <span className="font-label-bold uppercase opacity-60 text-xs md:text-sm">/mo</span>
                </div>
                <ul className="flex-grow space-y-3 md:space-y-4 mb-8 md:mb-10 text-xs md:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Unlimited terminals & branches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Gym Membership Tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Dedicated Success Manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-2xl">token</span>
                    <span className="font-body-md font-medium uppercase tracking-tight">Custom API & ERP Integration</span>
                  </li>
                </ul>
                <button 
                  onClick={onGoToApp}
                  className="w-full py-4 border-4 border-on-surface bg-white text-on-surface font-label-bold uppercase hover:bg-primary transition-colors expressive-btn cursor-pointer font-black text-sm md:text-base"
                >
                  Contact Sales
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="w-full py-16 md:py-24 bg-surface-container-high border-b-4 border-on-surface overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
            <h2 className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg mb-12 md:mb-16 text-center uppercase tracking-tighter italic font-black">
              Built for Operational Peak Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8 h-auto md:h-[650px]">
              
              <div className="md:col-span-2 md:row-span-2 p-6 md:p-10 bg-white border-4 border-on-surface grunge-border flex flex-col justify-end relative overflow-hidden halftone-bg text-on-surface">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl md:text-6xl text-secondary mb-4 md:mb-6">dynamic_feed</span>
                  <h4 className="font-display-lg text-xl md:text-headline-md mb-2 md:mb-4 uppercase font-black">Real-time Cloud Sync</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-xs md:text-sm">
                    Your data is synced across all branches instantly. Even if your internet goes down, offline-first sync ensures you never lose a single transaction.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 p-6 md:p-10 bg-secondary text-white border-4 border-on-surface grunge-border flex items-center justify-between overflow-hidden relative">
                <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none"></div>
                <div className="relative z-10">
                  <h4 className="font-display-lg text-xl md:text-headline-md mb-2 uppercase font-black">99.9% Uptime SLA</h4>
                  <p className="font-body-sm opacity-90 uppercase tracking-widest font-label-bold text-xs md:text-sm">Corporate-grade reliability.</p>
                </div>
                <span className="material-symbols-outlined text-6xl md:text-8xl opacity-30 relative z-10">verified_user</span>
              </div>

              <div className="p-6 md:p-8 bg-primary text-on-surface border-4 border-on-surface grunge-border flex flex-col justify-between transform -rotate-1">
                <span className="material-symbols-outlined text-3xl md:text-4xl">devices</span>
                <h5 className="font-label-bold uppercase text-base md:text-lg font-black mt-4">Hardware Agnostic</h5>
              </div>

              <div className="p-6 md:p-8 bg-white border-4 border-on-surface grunge-border flex flex-col justify-between transform rotate-1 text-on-surface">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary">support_agent</span>
                <h5 className="font-label-bold uppercase text-base md:text-lg font-black mt-4">Human-first Support</h5>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 border-b-4 border-on-surface bg-background overflow-x-hidden">
          <div className="max-w-4xl mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg mb-4 uppercase italic font-black">Frequently Asked Questions</h2>
              <p className="font-body-md text-on-surface/80 uppercase font-bold tracking-widest border-y-2 border-on-surface inline-block py-2 text-xs md:text-sm">
                Everything you need to know about setting up your POS.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-4 border-on-surface grunge-border-sm bg-white overflow-hidden transform hover:-translate-y-1 transition-transform">
                  <button 
                    className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-primary transition-colors group cursor-pointer"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span className="font-label-bold text-sm md:text-lg uppercase text-on-surface font-black pr-2">{faq.q}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 md:px-8 pb-6 md:pb-8">
                      <p className="font-body-md text-on-surface-variant italic border-l-4 border-secondary pl-4 text-xs md:text-sm font-bold">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 text-center bg-on-surface text-primary relative overflow-hidden border-b-4 border-on-surface">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto relative z-10 px-4 md:px-margin-desktop">
            <h2 className="font-display-lg text-3xl sm:text-5xl md:text-display-lg mb-6 md:mb-8 uppercase leading-tight md:leading-none tracking-tighter font-black">
              Ready to transform your business?
            </h2>
            <p className="font-body-lg text-primary/80 mb-8 md:mb-12 uppercase tracking-widest font-bold text-xs md:text-base">
              Join over 5,000+ businesses running on Kasirify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button 
                onClick={onGoToApp}
                className="bg-secondary text-white px-8 md:px-10 py-4 md:py-5 grunge-border-sm border-white font-label-bold text-sm md:text-lg uppercase hover:scale-105 transition-all expressive-btn cursor-pointer font-black"
              >
                Create Free Account
              </button>
              <button 
                onClick={onGoToApp}
                className="border-4 border-primary text-primary px-8 md:px-10 py-4 md:py-5 font-label-bold text-sm md:text-lg uppercase hover:bg-white/10 transition-all cursor-pointer font-black"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-16 md:pt-20 pb-12 border-t-8 border-primary bg-on-surface text-white overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 space-y-4 md:space-y-6">
              <div 
                className="text-headline-md font-display-lg font-extrabold text-primary tracking-tighter italic cursor-pointer"
                onClick={() => onNavigate('home')}
              >
                KASIRIFY
              </div>
              <p className="font-body-sm text-white/70 font-medium uppercase leading-relaxed text-xs md:text-sm">
                Building the future of retail and service commerce with reliable, high-performance tools.
              </p>
            </div>
            <div>
              <h4 className="font-label-bold text-primary uppercase mb-4 md:mb-6 border-b-2 border-primary inline-block text-xs md:text-sm font-black">Product</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <li><a className="font-body-sm text-white/80 hover:text-primary uppercase font-bold" href="#" onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}>Solutions</a></li>
                <li><a className="font-body-sm text-primary uppercase font-bold" href="#" onClick={(e) => e.preventDefault()}>Pricing</a></li>
                <li><a className="font-body-sm text-white/80 hover:text-primary uppercase font-bold" href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-bold text-primary uppercase mb-4 md:mb-6 border-b-2 border-primary inline-block text-xs md:text-sm font-black">Company</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <li><a className="font-body-sm text-white/80 hover:text-primary uppercase font-bold" href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
                <li><a className="font-body-sm text-white/80 hover:text-primary uppercase font-bold" href="#" onClick={(e) => e.preventDefault()}>Privacy</a></li>
                <li><a className="font-body-sm text-white/80 hover:text-primary uppercase font-bold" href="#" onClick={(e) => e.preventDefault()}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-bold text-primary uppercase mb-4 md:mb-6 border-b-2 border-primary inline-block text-xs md:text-sm font-black">Newsletter</h4>
              <div className="flex gap-0 border-4 border-primary bg-white grunge-border-sm">
                <input 
                  className="flex-grow bg-transparent border-none px-4 py-3 text-xs md:text-sm focus:ring-0 text-on-surface placeholder:text-on-surface/40 font-label-bold" 
                  placeholder="EMAIL" 
                  type="email"
                />
                <button className="bg-primary text-on-surface px-4 py-3 hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">trending_flat</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-20 text-center pt-8 border-t-2 border-white/10">
            <p className="font-label-bold text-white/60 uppercase text-xs tracking-widest">© 2024 Kasirify. Raw & Unfiltered Retail Tech.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
