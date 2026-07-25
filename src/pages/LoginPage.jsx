import React, { useState } from 'react';

export default function LoginPage({ onNavigate, onGoToApp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onGoToApp();
    }, 600);
  };

  return (
    <div className="bg-background text-on-background min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 px-4 md:px-margin-desktop py-6">
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
            onClick={() => onNavigate('register')}
            className="font-label-bold text-label-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4 cursor-pointer"
          >
            CREATE ACCOUNT
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </header>

      {/* Main Login Container */}
      <main className="flex-grow flex items-center justify-center pt-28 pb-12 px-4 md:px-margin-desktop relative z-10">
        <div className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-0 border-[3px] border-black hard-shadow bg-white overflow-hidden tilted-element">
          
          {/* Left Side: Visual/Branding Section */}
          <div className="relative bg-primary-container p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col justify-between overflow-hidden">
            <div className="halftone-bg absolute inset-0 z-0 opacity-20"></div>
            
            <div className="relative z-10">
              <h1 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-tighter mb-4 font-black">
                Kasirify
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface max-w-[280px] font-black italic leading-tight">
                THE FUTURE OF COMMERCE, RAW AND UNFILTERED.
              </p>
            </div>

            <div className="relative z-10 my-8 self-center w-full flex justify-center">
              <div className="relative w-full aspect-square max-w-[280px] border-[3px] border-black hard-shadow-sm bg-white overflow-hidden transform rotate-2">
                <img 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500" 
                  alt="Kasirify POS Terminal" 
                  src="/screen.png" 
                />
                <div className="absolute inset-0 mix-blend-multiply bg-primary-container opacity-40 pointer-events-none"></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-12 h-1 bg-black"></span>
                <span className="font-label-bold text-label-bold uppercase text-xs tracking-wider">
                  Industrial Edition v1.0
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form Section */}
          <div className="bg-background p-8 md:p-14 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="font-headline-md text-headline-md mb-2 font-extrabold uppercase">WELCOME BACK</h2>
              <p className="font-body-md text-body-md text-on-surface-variant font-bold italic">
                Enter your credentials to access the terminal.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold uppercase block text-xs" htmlFor="email">
                  User Identification
                </label>
                <div className="relative">
                  <input 
                    id="email" 
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kasirify.com"
                    className="w-full px-4 py-4 bg-white border-[3px] border-black rounded-none focus:outline-none focus:border-secondary font-body-md transition-all hard-shadow-sm focus:translate-x-[-2px] focus:translate-y-[-2px]" 
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                    alternate_email
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <label className="font-label-bold text-label-bold uppercase block text-xs" htmlFor="password">
                    Secure Code
                  </label>
                  <a href="#" onClick={(e) => e.preventDefault()} className="font-label-bold text-[12px] uppercase text-primary hover:underline decoration-2 underline-offset-4">
                    Lost access?
                  </a>
                </div>
                <div className="relative">
                  <input 
                    id="password" 
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-4 bg-white border-[3px] border-black rounded-none focus:outline-none focus:border-secondary font-body-md transition-all hard-shadow-sm focus:translate-x-[-2px] focus:translate-y-[-2px]" 
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                    lock
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary-container text-black font-label-bold text-label-bold uppercase border-[3px] border-black hard-shadow-sm button-press transition-all flex items-center justify-center gap-2 cursor-pointer font-black"
                >
                  <span>{loading ? 'AUTHENTICATING...' : 'Execute Login'}</span>
                  <span className="material-symbols-outlined">login</span>
                </button>

                <div className="flex items-center gap-4 my-2">
                  <hr className="flex-grow border-t-2 border-outline-variant" />
                  <span className="font-label-bold text-[12px] text-outline uppercase font-bold">OR ACCESS VIA</span>
                  <hr className="flex-grow border-t-2 border-outline-variant" />
                </div>

                <button 
                  type="button"
                  onClick={onGoToApp}
                  className="w-full py-3 bg-white text-black font-label-bold text-label-bold uppercase border-[3px] border-black hover:bg-surface-container transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined">fingerprint</span>
                  <span>Biometric ID</span>
                </button>
              </div>
            </form>

            <div className="mt-10 text-center">
              <p className="font-body-md text-body-md font-bold">
                NO ACCOUNT? 
                <button 
                  onClick={() => onNavigate('register')} 
                  className="font-label-bold text-label-bold text-secondary uppercase ml-2 hover:underline decoration-2 underline-offset-4 cursor-pointer"
                >
                  Request Access
                </button>
              </p>
            </div>
          </div>

        </div>

        {/* Floating decorative badge */}
        <div className="hidden lg:block fixed bottom-8 right-8 z-20">
          <div className="bg-black text-primary-fixed-dim px-6 py-2 border-[2px] border-primary rounded-full transform rotate-12 hard-shadow-sm">
            <span className="font-label-bold text-label-bold italic tracking-widest uppercase text-xs">
              Verified System
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 border-t border-black/10 text-center text-xs font-label-bold uppercase tracking-widest text-on-surface-variant">
        © 2024 KASIRIFY INDUSTRIES. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
