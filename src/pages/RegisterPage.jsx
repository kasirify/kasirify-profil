import React, { useState } from 'react';

export default function RegisterPage({ onNavigate, onGoToApp }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    password: '',
    agreeTerms: false
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms & Privacy Policy');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onGoToApp();
    }, 600);
  };

  return (
    <div className="bg-background text-on-background min-h-screen w-full relative flex flex-col justify-between selection:bg-primary-container selection:text-on-background">
      {/* Header / Brand Anchor */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-margin-desktop py-6">
        <div className="flex justify-between items-center max-w-[1440px] mx-auto">
          <div 
            onClick={() => onNavigate('home')}
            className="bg-primary-container border-[3px] border-black px-4 py-2 hard-shadow-sm tilt-left cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-background">
              KASIRIFY
            </span>
          </div>
          <button 
            onClick={() => onNavigate('login')}
            className="font-label-bold text-label-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4 cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            LOGIN
          </button>
        </div>
      </header>

      {/* Main Register Content */}
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-margin-desktop flex flex-col md:flex-row items-center justify-center gap-12 max-w-[1440px] mx-auto relative flex-grow">
        
        {/* Left Side: Hero Text */}
        <div className="flex-1 space-y-8 z-10 distort-1">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-primary transform -rotate-1 opacity-20 border-2 border-black"></div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase leading-none font-black">
              Kill the <br />
              <span className="text-primary italic bg-on-background text-primary-container px-2">Ordinary.</span> <br />
              Start Selling.
            </h1>
          </div>
          <p className="font-body-lg text-body-lg max-w-md text-on-surface-variant font-bold italic">
            Ditch the corporate spreadsheets. Embrace a point-of-sale system that actually matches your vibe. Fast, loud, and built for builders.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-black text-white px-4 py-2 font-label-bold text-label-bold uppercase border-2 border-black">
              #NotACorp
            </div>
            <div className="bg-primary-container text-black px-4 py-2 font-label-bold text-label-bold uppercase border-2 border-black">
              #GrungePOS
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="flex-1 w-full max-w-lg z-20">
          <div className="bg-white border-[3px] border-black hard-shadow p-8 md:p-12 tilt-right relative overflow-hidden">
            
            <div className="mb-8">
              <h2 className="font-headline-lg text-headline-md font-extrabold uppercase tracking-tight">
                Create Account
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant font-bold italic">
                Join 2,400+ businesses defying the norm.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold uppercase block text-xs">Full Name</label>
                <input 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe" 
                  type="text"
                  className="w-full bg-white border-[3px] border-black p-4 focus:ring-0 focus:outline-none focus:border-secondary transition-all hard-shadow-sm font-body-md" 
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-bold text-label-bold uppercase block text-xs">Business Name</label>
                <input 
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Radical Retail" 
                  type="text"
                  className="w-full bg-white border-[3px] border-black p-4 focus:ring-0 focus:outline-none focus:border-secondary transition-all hard-shadow-sm font-body-md" 
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-bold text-label-bold uppercase block text-xs">Email Address</label>
                <input 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@radical.com" 
                  type="email"
                  className="w-full bg-white border-[3px] border-black p-4 focus:ring-0 focus:outline-none focus:border-secondary transition-all hard-shadow-sm font-body-md" 
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-bold text-label-bold uppercase block text-xs">Password</label>
                <input 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••" 
                  type="password"
                  className="w-full bg-white border-[3px] border-black p-4 focus:ring-0 focus:outline-none focus:border-secondary transition-all hard-shadow-sm font-body-md" 
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input 
                  id="terms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1 border-2 border-black rounded-none text-primary focus:ring-0 w-5 h-5 cursor-pointer" 
                />
                <label htmlFor="terms" className="font-body-md text-sm text-on-surface-variant leading-tight cursor-pointer font-bold">
                  I agree to the <a href="#" onClick={(e) => e.preventDefault()} className="font-bold underline decoration-primary underline-offset-2">Terms of Chaos</a> and Privacy Policy.
                </label>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary-container text-on-background font-label-bold text-body-lg uppercase py-5 border-[3px] border-black hard-shadow button-press sticker-btn group relative overflow-hidden cursor-pointer font-black"
              >
                <span className="relative z-10">{loading ? 'CREATING ACCOUNT...' : 'Create Account'}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t-2 border-black/10 text-center">
              <p className="font-body-md text-body-md font-bold">
                Already have an account? 
                <button 
                  onClick={() => onNavigate('login')} 
                  className="font-bold text-secondary hover:underline decoration-2 underline-offset-4 ml-1 cursor-pointer"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 md:px-margin-desktop border-t border-black/10 bg-background">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-label-bold text-label-bold text-on-surface-variant opacity-60 text-xs">
            © 2024 KASIRIFY INDUSTRIES. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-8">
            <a className="font-label-bold text-label-bold uppercase hover:text-primary transition-colors text-xs" href="#">Manifesto</a>
            <a className="font-label-bold text-label-bold uppercase hover:text-primary transition-colors text-xs" href="#">Support</a>
            <a className="font-label-bold text-label-bold uppercase hover:text-primary transition-colors text-xs" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
