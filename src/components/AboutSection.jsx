import React from 'react';
import { Compass, Eye, ShieldCheck, Cpu, Lightbulb, Users, RefreshCw } from 'lucide-react';

export default function AboutSection({ onNavigate }) {
  const values = [
    {
      title: 'Innovation',
      desc: 'Không ngừng thử nghiệm và đưa các đột phá AI mới nhất vào tính năng thực tiễn.',
      icon: Lightbulb
    },
    {
      title: 'Technology',
      desc: 'Lấy kiến trúc công nghệ hiện đại, ổn định và bảo mật làm nền tảng phát triển.',
      icon: Cpu
    },
    {
      title: 'User First',
      desc: 'Thiết kế sản phẩm xoay quanh nhu cầu thực tế của nhà sáng tạo và doanh nghiệp.',
      icon: Users
    },
    {
      title: 'Transparency',
      desc: 'Minh bạch trong chính sách dữ liệu, nguyên tắc bảo mật và quyền riêng tư người dùng.',
      icon: ShieldCheck
    },
    {
      title: 'Continuous Improvement',
      desc: 'Lắng nghe phản hồi để nâng cấp hiệu suất và trải nghiệm ứng dụng liên tục.',
      icon: RefreshCw
    }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            VỀ CHÚNG TÔI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ABOUT DOMIX
          </h2>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-semibold">
            DOMIX is a technology company founded with a simple belief: powerful technology should be accessible, practical and easy to use.
          </p>
          <p className="text-sm text-zinc-200 leading-relaxed font-medium">
            We build AI-powered products that help creators and businesses turn ideas into meaningful digital experiences.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel p-8 space-y-4 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <Compass className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-xl font-extrabold text-white uppercase">Mission</h3>
            <p className="text-base font-bold text-amber-300">
              Make AI more accessible and useful.
            </p>
            <p className="text-xs text-zinc-200 leading-relaxed font-medium">
              Đưa công nghệ trí tuệ nhân tạo trở nên dễ tiếp cận, trực quan và tạo ra giá trị thiết thực trong công việc hàng ngày của mọi cá nhân và tổ chức.
            </p>
          </div>

          <div className="glass-panel p-8 space-y-4 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <Eye className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-xl font-extrabold text-white uppercase">Vision</h3>
            <p className="text-base font-bold text-amber-300">
              Build an AI technology ecosystem for the next generation of creators and businesses.
            </p>
            <p className="text-xs text-zinc-200 leading-relaxed font-medium">
              Trở thành một hệ sinh thái công nghệ AI toàn diện, đáng tin cậy đồng hành cùng thế hệ doanh nghiệp số và nhà sáng tạo toàn cầu.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-white">CORE VALUES</h3>
            <p className="text-xs text-zinc-200 font-medium mt-1">5 Giá trị cốt lõi định hình mọi hoạt động tại DOMIX</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={idx} className="glass-panel p-5 space-y-3 border border-white/10 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-amber-300" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{v.title}</h4>
                  <p className="text-[11px] text-zinc-200 leading-relaxed font-medium">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
