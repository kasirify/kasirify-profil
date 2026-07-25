import React, { useState } from 'react';

export default function PublicNavbar({ currentPage = 'home', onNavigate, onGoToApp }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-primary border-b-4 border-on-surface">
      <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop py-4 flex justify-between items-center">
        {/* Brand Logo & Desktop Nav Links */}
        <div className="flex items-center gap-8">
          <span 
            className="text-headline-md font-display-lg font-black text-on-surface tracking-tighter skew-neg-1 cursor-pointer select-none" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onNavigate('home');
            }}
          >
            KASIRIFY
          </span>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a 
              className={`font-label-bold text-label-bold uppercase tracking-widest px-2 py-1 transition-colors ${
                currentPage === 'solutions' 
                  ? 'bg-on-surface text-primary border-2 border-on-surface font-black' 
                  : 'text-on-surface hover:bg-white'
              }`}
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('solutions');
              }}
            >
              Solutions
            </a>
            <a 
              className={`font-label-bold text-label-bold uppercase tracking-widest px-2 py-1 transition-colors ${
                currentPage === 'pricing' 
                  ? 'bg-on-surface text-primary border-2 border-on-surface font-black' 
                  : 'text-on-surface hover:bg-white'
              }`}
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('pricing');
              }}
            >
              Pricing
            </a>
            <a 
              className={`font-label-bold text-label-bold uppercase tracking-widest px-2 py-1 transition-colors ${
                currentPage === 'about' 
                  ? 'bg-on-surface text-primary border-2 border-on-surface font-black' 
                  : 'text-on-surface hover:bg-white'
              }`}
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
            >
              About Us
            </a>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onGoToApp}
            className="font-label-bold text-on-surface underline decoration-4 underline-offset-4 hover:no-underline cursor-pointer"
          >
            Masuk App
          </button>
          <button 
            onClick={onGoToApp}
            className="bg-white border-2 border-on-surface text-on-surface font-label-bold uppercase px-6 py-2 expressive-btn skew-1 cursor-pointer font-bold"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white border-2 border-on-surface p-2 text-on-surface expressive-btn cursor-pointer flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined font-black text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t-4 border-on-surface px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              onNavigate('solutions');
            }}
            className={`font-label-bold text-base uppercase tracking-widest px-4 py-3 border-2 border-on-surface transition-colors flex items-center justify-between ${
              currentPage === 'solutions' 
                ? 'bg-on-surface text-primary font-black' 
                : 'bg-white text-on-surface font-bold'
            }`}
          >
            <span>Solutions</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              onNavigate('pricing');
            }}
            className={`font-label-bold text-base uppercase tracking-widest px-4 py-3 border-2 border-on-surface transition-colors flex items-center justify-between ${
              currentPage === 'pricing' 
                ? 'bg-on-surface text-primary font-black' 
                : 'bg-white text-on-surface font-bold'
            }`}
          >
            <span>Pricing</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              onNavigate('about');
            }}
            className={`font-label-bold text-base uppercase tracking-widest px-4 py-3 border-2 border-on-surface transition-colors flex items-center justify-between ${
              currentPage === 'about' 
                ? 'bg-on-surface text-primary font-black' 
                : 'bg-white text-on-surface font-bold'
            }`}
          >
            <span>About Us</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onGoToApp();
              }}
              className="w-full bg-on-surface text-primary font-label-bold uppercase py-3 border-2 border-on-surface expressive-btn cursor-pointer font-black text-center"
            >
              Masuk App
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onGoToApp();
              }}
              className="w-full bg-white text-on-surface font-label-bold uppercase py-3 border-2 border-on-surface expressive-btn cursor-pointer font-black text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
