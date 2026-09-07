import React from 'react';
import { Sparkles, ShieldCheck, Smartphone } from 'lucide-react';
import domixLogoImg from '../assets/domix_official_logo.png';
import { translations } from '../i18n/translations';

export default function Footer({ setCurrentRoute, lang, theme }) {
  const t = translations[lang].footer;

  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t pt-16 pb-12 relative overflow-hidden transition-colors ${
      theme === 'dark' ? 'bg-slate-950/40 backdrop-blur-2xl border-white/10' : 'bg-slate-900/90 backdrop-blur-xl text-white border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-cyan-400/30 p-1 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <img src={domixLogoImg} alt="DOMIX Official Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">DOMIX</span>
            </div>
            <p className="text-xs text-amber-300 font-semibold tracking-wide uppercase">
              {lang === 'vi' ? 'KIẾN TẠO TƯƠNG LAI CÙNG TRÍ TUỆ NHÂN TẠO.' : 'BUILD THE FUTURE WITH AI.'}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {lang === 'vi' 
                ? 'Công ty công nghệ DOMIX tập trung nghiên cứu R&D sản phẩm phần mềm AI hàng đầu và xuất bản ứng dụng di động cho doanh nghiệp.' 
                : 'DOMIX technology company focuses on R&D of cutting-edge AI software products and enterprise app publishing.'}
            </p>
          </div>

          {/* Col 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">{t.companyTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/about')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Về Công Ty DOMIX' : 'About DOMIX'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/technology')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Kiến Trúc Công Nghệ' : 'Technology Architecture'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/business')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Năng Lực Doanh Nghiệp' : 'Developer Credentials'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Liên Hệ Hỗ Trợ' : 'Contact Support'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">{t.productsTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://shoptikvn.com/dang-nhap?next=%2Fapp%2Fprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold flex items-center gap-1"
                >
                  {lang === 'vi' ? 'ShopTik (Hoàn Tiền Đa Sàn) ↗' : 'ShopTik (Cashback Platform) ↗'}
                </a>
              </li>
              <li>
                <a 
                  href="https://domixhub.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold flex items-center gap-1"
                >
                  {lang === 'vi' ? 'DomixAI (All-in-One Studio) ↗' : 'DomixAI (All-in-One Studio) ↗'}
                </a>
              </li>
              <li>
                <button onClick={() => handleNav('/products')} className="text-zinc-400 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Sản Phẩm Mới (Sớm Ra Mắt)' : 'Next Product (Coming Soon)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">{t.resourcesTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/support')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Trung Tâm Hỗ Trợ & FAQ' : 'Help Center & FAQ'}
                </button>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61567232442735" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold flex items-center gap-1"
                >
                  {lang === 'vi' ? 'Fanpage Facebook Chính Thức ↗' : 'Official Facebook Fanpage ↗'}
                </a>
              </li>
              <li>
                <a 
                  href="https://zalo.me/g/r0grj2ikrlqcactahpi7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold flex items-center gap-1"
                >
                  {lang === 'vi' ? 'Nhóm Zalo Support 24/7 ↗' : '24/7 Zalo Support Group ↗'}
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/shoptikvn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold flex items-center gap-1"
                >
                  {lang === 'vi' ? 'Kênh Telegram @shoptikvn ↗' : 'Telegram @shoptikvn ↗'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Store */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              {t.legalTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('/legal/privacy-policy')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Chính Sách Quyền Riêng Tư' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/legal/delete-account')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium flex items-center gap-1">
                  {lang === 'vi' ? 'Trang Yêu Cầu Xóa Tài Khoản' : 'Account & Data Deletion'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/legal/terms')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium">
                  {lang === 'vi' ? 'Điều Khoản Dịch Vụ' : 'Terms of Service'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/download')} className="text-zinc-300 hover:text-amber-300 transition-colors font-medium flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  {lang === 'vi' ? 'Tải Ứng Dụng Di Động' : 'Mobile App Downloads'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate Banner */}
        <div className="py-6 border-b border-slate-800 text-xs text-zinc-300 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-4 font-medium text-white">
            <span className="text-sm font-bold text-amber-300">CÔNG TY TNHH CÔNG NGHỆ DOMIX</span>
            <span className="text-zinc-300 font-semibold">DOMIX TECHNOLOGY COMPANY LIMITED</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-2 text-zinc-300 text-[11px]">
            <div><strong className="text-white font-bold">{lang === 'vi' ? 'Mã số thuế:' : 'Tax Code:'}</strong> 0111575532</div>
            <div><strong className="text-white font-bold">{lang === 'vi' ? 'Người đại diện:' : 'Representative:'}</strong> ĐỖ VĂN NGHỊ</div>
            <div className="sm:col-span-2"><strong className="text-white font-bold">{lang === 'vi' ? 'Trụ sở:' : 'Address:'}</strong> Ngọc Trai 6-142, Vinhomes Ocean Park, Hà Nội</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <p>{t.copyRight}</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full text-amber-300 font-mono font-bold">
              {lang === 'vi' ? 'Hạ Tầng R&D Doanh Nghiệp Chuẩn Quốc Tế' : 'Verified Enterprise R&D Infrastructure'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
