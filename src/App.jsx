import React, { useState, useEffect } from 'react';
import InteractiveTechCanvas from './components/InteractiveTechCanvas';
import TopCorporateHeaderBar from './components/TopCorporateHeaderBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Coin98HeroSection from './components/Coin98HeroSection';
import StatsBar from './components/StatsBar';
import EcosystemGrid from './components/EcosystemGrid';
import AppPublishingPipeline from './components/AppPublishingPipeline';
import ProductShowcase from './components/ProductShowcase';
import ProductExperience from './components/ProductExperience';
import DeveloperSandbox from './components/DeveloperSandbox';
import SolutionsSection from './components/SolutionsSection';
import TechStackSection from './components/TechStackSection';
import AboutSection from './components/AboutSection';
import CompanyLegalTable from './components/CompanyLegalTable';
import MobileAppShowcase from './components/MobileAppShowcase';
import SupportCenter from './components/SupportCenter';
import LegalViews from './components/LegalViews';
import ContactSection from './components/ContactSection';
import FloatingChatBubble from './components/FloatingChatBubble';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("DOMIX Error Boundary caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="card-royal-luxury p-8 rounded-3xl max-w-2xl border-amber-400/50 space-y-4 shadow-2xl">
            <h2 className="text-2xl font-bold text-amber-300">DOMIX SYSTEM RECOVERY</h2>
            <p className="text-xs text-zinc-300">Hệ thống phát hiện ngoại lệ trong quy trình render:</p>
            <div className="p-4 bg-red-950/80 border border-red-500/40 rounded-xl text-left font-mono text-xs text-red-200 overflow-auto max-h-60">
              <strong>Error:</strong> {this.state.error?.toString()}
              <br />
              <pre className="mt-2 text-[10px] text-red-300 whitespace-pre-wrap">{this.state.error?.stack}</pre>
            </div>
            <button
              onClick={() => { window.location.hash = '/'; window.location.reload(); }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-6 py-3 rounded-full transition-all shadow-lg shadow-amber-500/20"
            >
              Tải Lại Trang Chủ DOMIX
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [lang, setLang] = useState('vi'); // 'vi' or 'en'
  const [theme, setTheme] = useState('dark'); // Dark default

  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash ? hash : '/';
  });

  useEffect(() => {
    window.location.hash = currentRoute;
  }, [currentRoute]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const isLegalRoute = currentRoute.startsWith('/legal/');
  const legalSubRoute = isLegalRoute ? currentRoute.replace('/legal/', '') : null;

  return (
    <ErrorBoundary>
      <div className={`min-h-screen flex flex-col font-sans relative selection:bg-amber-500 selection:text-slate-950 transition-colors ${
        theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#F8FAFC] text-slate-900'
      }`}>
      {/* Dynamic Interactive Tech & Water Bubble Canvas */}
      <InteractiveTechCanvas theme={theme} />

      {/* Top Navbar Menu */}
      <Navbar 
        currentRoute={currentRoute} 
        setCurrentRoute={setCurrentRoute}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {isLegalRoute ? (
          <LegalViews 
            subRoute={legalSubRoute} 
            onNavigate={setCurrentRoute}
            lang={lang}
            theme={theme}
          />
        ) : (
          <>
            {/* ROUTE 1: HOMEPAGE (Default fallback for '/' or unrecognized hash) - SUPER CONCISE & SHORT */}
            {(!['/about', '/products', '/products/domix-ai', '/solutions', '/technology', '/business', '/download', '/support', '/contact'].includes(currentRoute)) && (
              <>
                <Coin98HeroSection onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <StatsBar lang={lang} theme={theme} />
                
                {/* Homepage Category Hub Navigation Cards */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="text-center space-y-3 mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      {lang === 'vi' ? 'HỆ SINH THÁI CÔNG NGHỆ' : 'TECHNOLOGY ECOSYSTEM'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {lang === 'vi' ? 'KHÁM PHÁ DANH MỤC DOMIX' : 'EXPLORE DOMIX CATEGORIES'}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-200 max-w-lg mx-auto font-medium">
                      {lang === 'vi' 
                        ? 'Nhấp vào từng chuyên mục bên dưới để truy cập trang thông tin chi tiết' 
                        : 'Click on any category below to access dedicated feature pages'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <button
                      onClick={() => { setCurrentRoute('/products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-6 text-left space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-amber-400/50 backdrop-blur-sm transition-all group hover:-translate-y-1 shadow-lg focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                        📦
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>Sản Phẩm AI</span>
                          <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                          Hệ sinh thái Workspace, AI Video, Voice Studio & Mobile Apps.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => { setCurrentRoute('/solutions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-6 text-left space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-amber-400/50 backdrop-blur-sm transition-all group hover:-translate-y-1 shadow-lg focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                        💡
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>Giải Pháp AI</span>
                          <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                          Giải pháp chuyên sâu cho Creators, E-Commerce, Marketing & Enterprise.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => { setCurrentRoute('/technology'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-6 text-left space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-amber-400/50 backdrop-blur-sm transition-all group hover:-translate-y-1 shadow-lg focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                        ⚡
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>Hạ Tầng Công Nghệ</span>
                          <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                          Developer SDK, REST API Gateway & Kiến trúc Multimodal AI.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => { setCurrentRoute('/business'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-6 text-left space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-amber-400/50 backdrop-blur-sm transition-all group hover:-translate-y-1 shadow-lg focus:outline-none"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                        🏛️
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>Doanh Nghiệp</span>
                          <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                          Hồ sơ pháp lý MST 0111575532, Năng lực R&D & Quy trình Xuất bản Store.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* ROUTE 2: VỀ DOMIX (/about) */}
            {currentRoute === '/about' && (
              <div className="pt-8 space-y-8">
                <AboutSection onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <CompanyLegalTable lang={lang} theme={theme} />
                <ContactSection lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 3: SẢN PHẨM / HỆ SINH THÁI (/products) */}
            {currentRoute === '/products' && (
              <div className="pt-8 space-y-8">
                <EcosystemGrid onNavigate={setCurrentRoute} lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 4: DOMIX AI WORKSPACE (/products/domix-ai) */}
            {currentRoute === '/products/domix-ai' && (
              <div className="pt-8 space-y-8">
                <EcosystemGrid onNavigate={setCurrentRoute} lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 5: GIẢI PHÁP (/solutions) */}
            {currentRoute === '/solutions' && (
              <div className="pt-8 space-y-8">
                <SolutionsSection onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <AppPublishingPipeline onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <ContactSection lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 6: CÔNG NGHỆ (/technology) */}
            {currentRoute === '/technology' && (
              <div className="pt-8 space-y-8">
                <TechStackSection onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <DeveloperSandbox lang={lang} theme={theme} />
                <StatsBar lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 7: DOANH NGHIỆP (/business) */}
            {currentRoute === '/business' && (
              <div className="pt-8 space-y-8">
                <CompanyLegalTable lang={lang} theme={theme} />
                <AboutSection onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <AppPublishingPipeline onNavigate={setCurrentRoute} lang={lang} theme={theme} />
                <ContactSection lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 8: TẢI APP MOBILE (/download) */}
            {currentRoute === '/download' && (
              <div className="pt-16">
                <MobileAppShowcase onNavigate={setCurrentRoute} lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 9: HỖ TRỢ (/support) */}
            {currentRoute === '/support' && (
              <div className="pt-16">
                <SupportCenter onNavigate={setCurrentRoute} lang={lang} theme={theme} />
              </div>
            )}

            {/* ROUTE 10: LIÊN HỆ (/contact) */}
            {currentRoute === '/contact' && (
              <div className="pt-16">
                <ContactSection lang={lang} theme={theme} />
              </div>
            )}

            {/* FINAL CTA SECTION - Seamless background */}
            <section className="py-16 relative overflow-hidden text-center max-w-4xl mx-auto px-4 my-8">
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 p-0.5 mx-auto shadow-2xl shadow-amber-500/30 flex items-center justify-center animate-float">
                  <div className="w-full h-full bg-slate-950/40 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {lang === 'vi' ? 'SẴN SÀNG HỢP TÁC CHIẾN LƯỢC CÙNG DOMIX?' : 'READY TO PARTNER WITH DOMIX TECHNOLOGY?'}
                </h2>

                <p className="text-base text-zinc-300 max-w-lg mx-auto leading-relaxed">
                  {lang === 'vi' 
                    ? 'Hiện thực hóa các phần mềm AI đột phá và cùng DOMIX đưa sản phẩm của bạn xuất bản toàn cầu với hạ tầng R&D chuẩn quốc tế.'
                    : 'Turn your software ideas into global mobile applications with DOMIX enterprise R&D infrastructure.'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <button 
                    onClick={() => { setCurrentRoute('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-8 py-3.5 rounded-full transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2"
                  >
                    <span>{lang === 'vi' ? 'Gửi Đề Xuất Hợp Tác' : 'Submit Partnership Proposal'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => { setCurrentRoute('/business'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="btn-secondary text-xs !py-3.5 !px-7"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Xem Thông Tin Doanh Nghiệp' : 'Corporate Credentials'}</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Corporate Credentials & Contact Bar (Đưa xuống dưới cùng Footer) */}
      <TopCorporateHeaderBar onNavigate={setCurrentRoute} lang={lang} />

      {/* Footer */}
      <Footer setCurrentRoute={setCurrentRoute} lang={lang} theme={theme} />

      {/* Cookie Banner */}
      <CookieBanner onNavigate={setCurrentRoute} />

      {/* 3D Ocean Water Bubble Floating Chat Widget */}
      <FloatingChatBubble />
    </div>
    </ErrorBoundary>
  );
}
