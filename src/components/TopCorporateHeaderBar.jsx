import React from 'react';
import { Building2, Mail, Phone, MapPin, ShieldCheck, FileCheck } from 'lucide-react';
import domixLogoImg from '../assets/domix_official_logo.png';

export default function TopCorporateHeaderBar({ onNavigate, lang }) {
  return (
    <div className="w-full bg-slate-950/40 border-t border-amber-500/20 text-white py-2 px-4 relative z-50 text-xs font-sans backdrop-blur-xl shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left Side: Official Legal Entity & Tax Code */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] font-bold">
          <div className="flex items-center gap-2 text-amber-300">
            <img src={domixLogoImg} alt="DOMIX Logo" className="w-4 h-4 object-contain filter drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <span className="uppercase tracking-wider text-sharp-crisp font-extrabold">CÔNG TY TNHH CÔNG NGHỆ DOMIX</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-zinc-300 font-mono">
            <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>MST: <strong className="text-amber-300 font-bold">0111575532</strong></span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Đại diện: <strong className="text-white font-bold">ĐỖ VĂN NGHỊ</strong> (Giám đốc)</span>
          </div>
        </div>

        {/* Right Side: Email, Phone/Hotline & Address */}
        <div className="flex items-center gap-4 text-[11px] font-semibold">
          {/* Email */}
          <a 
            href="mailto:domix@domixtik.com" 
            className="flex items-center gap-1.5 text-zinc-200 hover:text-amber-300 transition-colors font-mono"
            title="Email liên hệ chính thức"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>domix@domixtik.com</span>
          </a>

          {/* Hotline / SĐT */}
          <a 
            href="tel:0375899199" 
            className="flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 px-2.5 py-0.5 rounded-full transition-all font-mono font-bold"
            title="Hotline tư vấn doanh nghiệp"
          >
            <Phone className="w-3 h-3 text-amber-400 shrink-0 animate-pulse" />
            <span>SĐT/Hotline: 0375899199</span>
          </a>

          {/* Address */}
          <div className="hidden lg:flex items-center gap-1.5 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate max-w-xs">Ngọc Trai 6-142, Vinhomes Ocean Park, Hà Nội</span>
          </div>
        </div>

      </div>
    </div>
  );
}
