import React from 'react';

export default function PublicNavbar({ currentPage = 'home', onNavigate, onGoToApp }) {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-primary border-b-4 border-on-surface">
      <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <span 
            className="text-headline-md font-display-lg font-black text-on-surface tracking-tighter skew-neg-1 cursor-pointer select-none" 
            onClick={() => onNavigate('home')}
          >
            KASIRIFY
          </span>
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

        <div className="flex items-center gap-4">
          <button 
            onClick={onGoToApp}
            className="hidden md:block font-label-bold text-on-surface underline decoration-4 underline-offset-4 hover:no-underline cursor-pointer"
          >
            Masuk App
          </button>
          <button 
            onClick={onGoToApp}
            className="bg-white border-2 border-on-surface text-on-surface font-label-bold uppercase px-6 py-2 expressive-btn skew-1 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
