import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, Globe } from 'lucide-react';
import domixLogoImg from '../assets/domix_official_logo.png';
import { translations } from '../i18n/translations';

export default function Navbar({ currentRoute, setCurrentRoute, lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const handleNavClick = (routeId) => {
    setCurrentRoute(routeId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  };

  return (
    <>
      <header className="sticky top-2 z-40 px-4 mb-4">
        {/* Floating Pill Capsule Bar with soft glassmorphic transparency */}
        <div className="max-w-5xl mx-auto bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-slate-950/40 transition-all">
          
          {/* Left Brand Badge with Official 3D DOMIX Logo */}
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform overflow-hidden bg-amber-500/10 border border-amber-400/20 backdrop-blur-sm">
              <img src={domixLogoImg} alt="DOMIX Official Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors text-sharp-crisp">
                DOMIX
              </span>
              <div className="flex items-center gap-1.5 -mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400/80" />
                <span className="text-[9px] font-mono text-amber-300 uppercase tracking-widest font-bold">CÔNG NGHỆ DOMIX</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-xs font-semibold transition-all ${
                currentRoute === '/' ? 'text-amber-400 font-extrabold' : 'text-zinc-200 hover:text-amber-300 font-medium'
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('/products')}
              className={`text-xs font-semibold transition-all ${
                currentRoute === '/products' ? 'text-amber-400 font-extrabold' : 'text-zinc-200 hover:text-amber-300 font-medium'
              }`}
            >
              {t.products}
            </button>
            <button
              onClick={() => handleNavClick('/solutions')}
              className={`text-xs font-semibold transition-all ${
                currentRoute === '/solutions' ? 'text-amber-400 font-extrabold' : 'text-zinc-200 hover:text-amber-300 font-medium'
              }`}
            >
              {t.solutions}
            </button>
            <button
              onClick={() => handleNavClick('/technology')}
              className={`text-xs font-semibold transition-all ${
                currentRoute === '/technology' ? 'text-amber-400 font-extrabold' : 'text-zinc-200 hover:text-amber-300 font-medium'
              }`}
            >
              {t.technology}
            </button>
            <button
              onClick={() => handleNavClick('/business')}
              className={`text-xs font-semibold transition-all ${
                currentRoute === '/business' ? 'text-amber-400 font-extrabold' : 'text-zinc-200 hover:text-amber-300 font-medium'
              }`}
            >
              {t.business}
            </button>
            <button
              onClick={() => handleNavClick('/support')}
              className={`text-xs font-semibold transition-all ${
                currentRoute === '/support' ? 'text-amber-400 font-extrabold' : 'text-zinc-200 hover:text-amber-300 font-medium'
              }`}
            >
              {t.support}
            </button>
          </nav>

          {/* Right Action: Language Button (🌐 VI / 🌐 EN) + Golden CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-extrabold text-white bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-1.5 rounded-full transition-all shadow-md backdrop-blur-md"
              title="Click to switch language between Vietnamese and English"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'vi' ? 'VI' : 'EN'}</span>
            </button>

            <button
              onClick={() => handleNavClick('/products/domix-ai')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-5 py-2 rounded-full transition-all shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-400 border border-zinc-800 bg-[#18181C]"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-1.5"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {['/', '/products', '/solutions', '/technology', '/business', '/about', '/support', '/contact'].map((path) => (
              <button
                key={path}
                onClick={() => handleNavClick(path)}
                className="text-left text-sm font-semibold py-2.5 text-zinc-300 border-b border-zinc-900"
              >
                {path === '/' ? t.home : path.replace('/', '').toUpperCase()}
              </button>
            ))}
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => handleNavClick('/products/domix-ai')}
              className="w-full bg-amber-400 text-slate-950 font-bold text-xs py-3 rounded-full justify-center flex items-center gap-2"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
