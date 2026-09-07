import React from 'react';
import { Smartphone, QrCode, ShieldCheck, Download, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import aiCorePreview from '../assets/domix_ai_core_preview.png';
import { translations } from '../i18n/translations';

export default function MobileAppShowcase({ onNavigate, lang, theme }) {
  const t = translations[lang].mobileApp;

  return (
    <section className="py-24 relative border-t overflow-hidden transition-colors bg-grid-pattern" id="mobile-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/30 text-violet-600 text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              {t.title}
            </h2>

            <p className="text-base font-semibold text-slate-700 dark:text-zinc-300">
              {t.sub}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              DOMIX tập trung nghiên cứu R&D và sản xuất các ứng dụng phần mềm chất lượng cao, đồng bộ dữ liệu đám mây giữa Web và ứng dụng di động iOS / Android.
            </p>

            {/* QR Scanner Card */}
            <div className="glass-panel p-6 border flex flex-col sm:flex-row items-center gap-6 shadow-md border-white/10">
              <div className="w-28 h-28 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/10 p-2.5 flex flex-col items-center justify-center shrink-0 shadow-xl">
                <QrCode className="w-16 h-16 text-cyan-400" />
                <span className="text-[9px] text-slate-400 font-mono mt-1">Scan QR Code</span>
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">{t.scanText}</span>
                <p className="text-xs text-slate-500 dark:text-zinc-400">{t.storeStatus}</p>
                
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="text-[10px] font-mono bg-blue-600/10 border border-blue-500/30 text-blue-600 px-3 py-1 rounded-full font-bold">
                    DOMIX Android Edition
                  </span>
                  <span className="text-[10px] font-mono bg-blue-600/10 border border-blue-500/30 text-blue-600 px-3 py-1 rounded-full font-bold">
                    DOMIX iOS Edition
                  </span>
                </div>
              </div>
            </div>

            {/* Store Legal Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-zinc-400">
              <button
                onClick={() => onNavigate('/legal/privacy-policy')}
                className="hover:text-blue-600 underline font-medium transition-colors"
              >
                {t.linkPrivacy}
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('/legal/delete-account')}
                className="text-blue-600 hover:text-blue-700 underline font-bold transition-colors flex items-center gap-1"
              >
                {t.linkDeleteAccount}
              </button>
            </div>
          </div>

          {/* Right Floating Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-slate-950/40 backdrop-blur-2xl border-4 border-white/10 rounded-[44px] p-5 shadow-2xl space-y-4 transform hover:rotate-1 transition-transform duration-500">
                <div className="w-28 h-4 bg-slate-900/60 rounded-full mx-auto" />
                
                <div className="flex items-center justify-between text-xs font-bold text-white border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DOMIX Mobile App</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">v2.6 Operational</span>
                </div>

                <div className="space-y-3">
                  <div className="h-44 rounded-2xl border border-white/10 overflow-hidden relative">
                    <img src={aiCorePreview} alt="Mobile UI Preview" className="w-full h-full object-cover" />
                  </div>

                  <div className="bg-slate-950/40 p-3 rounded-xl border border-white/10 backdrop-blur-md space-y-1">
                    <span className="text-xs font-bold text-white block">One-Tap AI Video Creation</span>
                    <p className="text-[11px] text-slate-400">Tự động tạo kịch bản và video ngắn tối ưu đa phương thức.</p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => onNavigate('/download')}
                    className="w-full btn-primary text-xs justify-center py-2.5"
                  >
                    Details & Mobile App Access
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
