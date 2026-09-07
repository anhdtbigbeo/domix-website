import React from 'react';
import { UserCheck, ShoppingBag, Target, Briefcase, ArrowRight, Check } from 'lucide-react';

export default function SolutionsSection({ onNavigate }) {
  const solutions = [
    {
      id: 'creators',
      title: 'CREATORS',
      subtitle: 'Tạo nội dung nhanh hơn với AI',
      desc: 'Giúp các YouTuber, Podcaster, TikToker và nhà sáng tạo nội dung rút ngắn 80% thời gian biên tập video, dựng kịch bản và làm thumbnail.',
      benefits: ['Tự động chuyển ý tưởng thành video kịch bản', 'Đa dạng giọng đọc AI giàu cảm xúc', 'Tối ưu định dạng cho nhiều nền tảng'],
      icon: UserCheck
    },
    {
      id: 'ecommerce',
      title: 'E-COMMERCE',
      subtitle: 'Tăng tốc sản xuất nội dung sản phẩm',
      desc: 'Tự động tạo hàng trăm hình ảnh và video quảng cáo sản phẩm đa góc nhìn chỉ từ hình ảnh gốc thô.',
      benefits: ['Tạo ảnh phông nền sản phẩm Photorealistic', 'Video review ngắn tự động cho TikTok Shop & Shopee', 'Tối ưu chi phí chụp ảnh studio'],
      icon: ShoppingBag
    },
    {
      id: 'marketing',
      title: 'MARKETING',
      subtitle: 'Tạo creative & campaign content hiệu quả',
      desc: 'Hỗ trợ các Agency và Marketing team tạo hàng loạt biến thể quảng cáo (Ad Creatives) để A/B testing quy mô lớn.',
      benefits: ['Thử nghiệm nhanh nhiều kịch bản quảng cáo', 'Sản xuất hình ảnh banner và nội dung truyền thông', 'Đồng bộ nhận diện thương hiệu'],
      icon: Target
    },
    {
      id: 'businesses',
      title: 'BUSINESSES',
      subtitle: 'Xây dựng quy trình AI cho vận hành doanh nghiệp',
      desc: 'Giải pháp tích hợp AI toàn diện giúp doanh nghiệp tự động hóa truyền thông nội bộ, đào tạo và chăm sóc khách hàng số.',
      benefits: ['Tự động hóa sản xuất video hướng dẫn', 'Kết nối API AI vào quy trình nội bộ', 'Bảo mật dữ liệu doanh nghiệp'],
      icon: Briefcase
    }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-[#242424]/40" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            GIẢI PHÁP THEO ĐỐI TƯỢNG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI FOR EVERY DIGITAL WORKFLOW.
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-medium">
            DOMIX cung cấp giải pháp AI được tối ưu hóa cho từng quy trình công việc và mô hình hoạt động.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => {
            const IconComp = sol.icon;
            return (
              <div
                key={sol.id}
                className="glass-panel p-8 space-y-6 flex flex-col justify-between border border-white/10 hover:border-amber-400/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-extrabold font-mono text-amber-300 tracking-wider">
                      {sol.title}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {sol.subtitle}
                  </h3>
                  
                  <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                    {sol.desc}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-zinc-200 font-medium">
                    {sol.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onNavigate('/solutions')}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Khám phá chi tiết giải pháp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
