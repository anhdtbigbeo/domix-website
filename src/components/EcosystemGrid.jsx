import React, { useState } from 'react';
import { Sparkles, Video, Image as ImageIcon, Mic, FileText, Settings, Code, ArrowRight, CheckCircle2, Layers, ShoppingBag, ExternalLink } from 'lucide-react';
import { translations } from '../i18n/translations';
import domixLogoImg from '../assets/domix_official_logo.png';

const shoptikLogoImg = "/assets/shoptik_logo.png";
const shoptikLogoFallback = "/@fs/C:/Users/Admin/.gemini/antigravity/brain/8dc7a5a2-68aa-468c-8c25-5e3b6c9ed633/media__1788776524016.png";


export default function EcosystemGrid({ onNavigate, lang, theme }) {
  const t = translations[lang].ecosystem;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t.catAll },
    { id: 'ecommerce', name: t.catEcommerce },
    { id: 'creators', name: t.catCreators },
    { id: 'developers', name: t.catDevelopers },
    { id: 'enterprise', name: t.catEnterprise }
  ];

  const products = [
    {
      id: 'shoptik',
      title: 'ShopTik',
      badge: lang === 'vi' ? 'HOÀN TIỀN ĐA SÀN' : 'MULTI-PLATFORM CASHBACK',
      category: ['ecommerce', 'creators', 'enterprise'],
      url: 'https://shoptikvn.com/dang-nhap?next=%2Fapp%2Fprofile',
      logoImg: shoptikLogoImg,
      tagline: lang === 'vi' ? 'Mua sắm thông minh. Hoàn tiền tối ưu.' : 'Smart Shopping. Optimal Cashback.',
      desc: lang === 'vi' 
        ? 'Dán link sản phẩm bất kỳ — ShopTik tự tính và trả lại tiền hoàn vào ví.'
        : 'Paste any product link — ShopTik automatically calculates and deposits your cashback directly into your wallet.',
      icon: ShoppingBag,
      color: 'from-amber-400 to-amber-600',
      features: lang === 'vi'
        ? [
            'Mua sắm thông minh. Hoàn tiền tối ưu',
            'Dán link sản phẩm bất kỳ trên các sàn TMĐT',
            'Tự động tính & trả tiền hoàn về ví ShopTik'
          ]
        : [
            'Smart Shopping. Optimal Cashback',
            'Paste any product URL from top E-Com platforms',
            'Auto-calculate & credit cashback to your wallet'
          ]
    },
    {
      id: 'domixai',
      title: 'DomixAI',
      badge: 'ALL-IN-ONE AI STUDIO',
      category: ['creators', 'ecommerce', 'enterprise'],
      url: 'https://domixhub.com/',
      logoImg: domixLogoImg,
      tagline: lang === 'vi' ? 'Một Studio AI. Mọi công cụ bạn cần.' : 'One AI Studio. Every tool you need.',
      desc: lang === 'vi' 
        ? 'DomixAI tích hợp mọi công cụ AI mạnh mẽ nhất, giúp bạn tạo nội dung chuyên nghiệp nhanh chóng, dễ dàng.'
        : 'DomixAI integrates the most powerful AI tools into one seamless platform to accelerate content creation.',
      icon: Sparkles,
      color: 'from-violet-600 to-blue-600',
      features: lang === 'vi'
        ? [
            'Tạo Giọng Đọc AI: Clone & phối giọng tiếng Việt',
            'Tạo Video & Ảnh Affiliate bán hàng hút triệu view',
            'Kho Prompt tuyển chọn & Tool dịch Sub tự động'
          ]
        : [
            'AI Voice Studio: Voice cloning & multilingual TTS',
            'Affiliate Video & Image generator for high conversion',
            'Curated Prompt Library & Automated Subtitle Translator'
          ]
    },
    {
      id: 'coming-soon',
      title: lang === 'vi' ? 'Sản Phẩm Mới (Coming Soon)' : 'Next Product (Coming Soon)',
      badge: lang === 'vi' ? '⚡ SỚM RA MẮT' : '⚡ COMING SOON',
      category: ['creators', 'ecommerce', 'enterprise', 'developers'],
      comingSoon: true,
      tagline: lang === 'vi' ? 'Đang Trong Quy Trình R&D Hoàn Thiện' : 'Currently in R&D Pipeline',
      desc: lang === 'vi'
        ? 'Đội ngũ kỹ sư DOMIX đang nghiên cứu & hoàn thiện sản phẩm công nghệ tiếp theo. Sẽ chính thức xuất bản trong thời gian sớm nhất.'
        : 'DOMIX R&D engineering team is currently perfecting the next technology product. Launching soon.',
      icon: Video,
      color: 'from-amber-500/20 to-yellow-600/20',
      features: lang === 'vi'
        ? [
            'Hạ tầng Multimodal AI thế hệ mới',
            'Tối ưu hóa quy trình doanh nghiệp tự động',
            'Chuẩn bị chính thức phát hành'
          ]
        : [
            'Next-Gen Multimodal AI Engine',
            'Automated Enterprise Workflow Optimization',
            'Preparing Official Public Release'
          ]
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category.includes(activeCategory));

  return (
    <section className="py-24 relative border-t transition-colors bg-grid-pattern" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-medium">
            {t.sub}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all border ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 border-amber-300 font-extrabold shadow-md shadow-amber-500/20'
                  : 'bg-white/[0.03] backdrop-blur-md border-white/10 text-zinc-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => {
            const IconComp = prod.icon;
            return (
              <div
                key={prod.id}
                className="card-masterpiece-glow p-8 rounded-3xl space-y-6 flex flex-col justify-between group touch-ripple"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="icon-container-5d p-1 flex items-center justify-center overflow-hidden">
                      {prod.logoImg ? (
                        <img 
                          src={prod.logoImg} 
                          onError={(e) => {
                            if (prod.id === 'shoptik') e.currentTarget.src = shoptikLogoFallback;
                            if (prod.id === 'domixai') e.currentTarget.src = domixaiLogoFallback;
                          }}
                          alt={prod.title} 
                          className="w-8 h-8 object-contain rounded-xl filter drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" 
                        />
                      ) : (
                        <IconComp className="w-6 h-6 text-amber-300 filter drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono glass-pill-masterpiece text-amber-300 px-3 py-1 font-bold">
                      {prod.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold transition-colors text-white group-hover:text-amber-300 text-sharp-crisp">
                      {prod.title}
                    </h3>
                    {prod.tagline && (
                      <p className="text-xs font-extrabold text-amber-300 mt-1 text-sharp-crisp">
                        {prod.tagline}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-zinc-200 leading-relaxed font-medium text-sharp-crisp">
                    {prod.desc}
                  </p>

                  <div className="pt-3 border-t border-zinc-800 space-y-2">
                    {prod.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-200 font-medium text-sharp-crisp">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 filter drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  {prod.comingSoon ? (
                    <div className="w-full text-xs text-center py-2.5 rounded-2xl bg-white/[0.03] border border-amber-400/30 text-amber-300 font-extrabold font-mono tracking-wider backdrop-blur-md shadow-inner">
                      🔒 SỚM RA MẮT / COMING SOON
                    </div>
                  ) : prod.url ? (
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-secondary text-xs justify-center py-2.5 !bg-amber-500/20 border-amber-400/50 text-amber-300 hover:!bg-amber-500/30 font-extrabold flex items-center gap-1.5 shadow-md shadow-amber-500/10"
                    >
                      <span>{lang === 'vi' ? `Khởi Chạy ${prod.title} ↗` : `Launch ${prod.title} ↗`}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onNavigate('/products/domix-ai')}
                      className="w-full btn-secondary text-xs justify-center py-2.5 !bg-amber-500/10 border-amber-500/30 text-amber-300 hover:!bg-amber-500/20 font-bold flex items-center gap-1.5"
                    >
                      <span>{t.btnModule}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
