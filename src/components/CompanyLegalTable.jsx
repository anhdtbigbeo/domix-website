import React from 'react';
import { Building2, ShieldCheck } from 'lucide-react';
import { translations } from '../i18n/translations';

export default function CompanyLegalTable({ lang, theme }) {
  const t = translations[lang].legalTable;

  const companyDetails = [
    { label: t.brandLabel, value: 'DOMIX', note: lang === 'vi' ? 'Thương hiệu đã đăng ký' : 'Registered Trademark' },
    { label: t.nameViLabel, value: 'CÔNG TY TNHH CÔNG NGHỆ DOMIX', note: 'Pháp nhân đăng ký kinh doanh' },
    { label: t.nameEnLabel, value: 'DOMIX TECHNOLOGY COMPANY LIMITED', note: 'International Registered Entity' },
    { label: t.taxLabel, value: '0111575532', note: 'Mã số thuế doanh nghiệp' },
    { label: t.repLabel, value: 'ĐỖ VĂN NGHỊ', note: 'Chức danh: Giám đốc' },
    { label: t.addressLabel, value: 'Ngọc Trai 6-142, Vinhomes Ocean Park, Xã Gia Lâm, Thành phố Hà Nội, Việt Nam', note: 'Registered Headquarters' },
    { label: t.emailLabel, value: 'domix@domixtik.com', note: 'Official Developer Support Email' },
    { label: t.phoneLabel, value: '0375899199', note: 'Official Developer Hotline' },
    { label: t.websiteLabel, value: 'https://domix.ai', note: 'Official Corporate Website' }
  ];

  return (
    <section className="py-24 relative border-t transition-colors bg-grid-pattern" id="company-info">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-extrabold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-medium">
            {t.sub}
          </p>
        </div>

        {/* Structured Table */}
        <div className="glass-panel overflow-hidden border border-white/10 max-w-4xl mx-auto shadow-xl">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.03] backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                DOMIX Corporate Developer Credentials
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full font-bold">
              100% Verified Entity
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {companyDetails.map((item, idx) => (
              <div key={idx} className="p-5 sm:px-6 hover:bg-white/5 transition-colors grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4 font-semibold text-xs text-zinc-300">
                  {item.label}
                </div>
                <div className="sm:col-span-5 text-xs font-bold font-mono text-amber-300">
                  {item.value}
                </div>
                <div className="sm:col-span-3 text-[11px] text-zinc-400 text-left sm:text-right">
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10 text-[11px] text-zinc-300 text-center bg-white/[0.03] backdrop-blur-md">
            💡 <em>Cam kết minh bạch: Mọi thông tin pháp lý nêu trên hoàn toàn trùng khớp với Giấy phép ĐKKD và hồ sơ xác minh doanh nghiệp quốc tế.</em>
          </div>
        </div>

      </div>
    </section>
  );
}
