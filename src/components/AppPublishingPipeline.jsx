import React from 'react';
import { Smartphone, ShieldCheck, Cpu, Rocket, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { translations } from '../i18n/translations';

export default function AppPublishingPipeline({ onNavigate, lang, theme }) {
  const isVi = lang === 'vi';

  const pipelineStages = [
    {
      step: '01',
      title: isVi ? 'Nghiên Cứu & Mô Hình Hóa AI (R&D)' : 'AI Algorithm R&D & Modeling',
      desc: isVi 
        ? 'Nghiên cứu các thuật toán xử lý đa phương thức (Multimodal AI), tối ưu kích thước mô hình để chạy mượt mà trên hạ tầng Cloud và thiết bị di động.'
        : 'Researching multimodal AI algorithms, optimizing model footprint for cloud infrastructure and mobile edge compute.',
      badge: 'Core R&D Engine'
    },
    {
      step: '02',
      title: isVi ? 'Lập Trình Đa Nền Tảng Hiệu Năng Cao' : 'High-Performance Mobile Engineering',
      desc: isVi 
        ? 'Xây dựng kiến trúc phần mềm di động native tối ưu cho iOS (Swift/UIKit) và Android (Kotlin), đảm bảo độ trễ phản hồi dưới 15ms.'
        : 'Engineering native mobile architectures optimized for iOS and Android, ensuring sub-15ms response latency.',
      badge: 'Native Mobile SDK'
    },
    {
      step: '03',
      title: isVi ? 'Chuẩn Hóa An Toàn Dữ Liệu & Bảo Mật' : 'Data Safety & Store Compliance',
      desc: isVi 
        ? 'Thiết lập đầy đủ hồ sơ Data Safety, Privacy Policy URL và cơ chế Yêu cầu Xóa tài khoản (/legal/delete-account) theo chuẩn quy định khắt khe của Store.'
        : 'Configuring Data Safety manifests, Privacy Policy URL, and Account Deletion mechanisms adhering strictly to Store guidelines.',
      badge: 'ISO/IEC 27001 Certified'
    },
    {
      step: '04',
      title: isVi ? 'Kiểm Duyệt Ứng Dụng Doanh Nghiệp' : 'Enterprise App Approval',
      desc: isVi 
        ? 'Định danh hồ sơ Nhà phát triển doanh nghiệp chính thức (DOMIX Technology Co., Ltd) với tỉ lệ duyệt hồ sơ thành công 100%.'
        : 'Verifying official corporate developer credentials (DOMIX Technology Co., Ltd) with a 100% approval rate.',
      badge: 'Developer Profile Verified'
    },
    {
      step: '05',
      title: isVi ? 'Xuất Bản & Tăng Trưởng Toàn Cầu' : 'Global Publishing & Scaling',
      desc: isVi 
        ? 'Xuất bản ứng dụng di động chính thức toàn cầu, liên tục cập nhật phiên bản và tối ưu hóa trải nghiệm người dùng.'
        : 'Publishing official applications globally, continuously shipping updates, and optimizing user experiences at scale.',
      badge: 'Global Distribution'
    }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-[#242424]/40 overflow-hidden" id="app-pipeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{isVi ? 'QUY TRÌNH NGUYÊN TẮC KHẮT KHE CHUẨN QUỐC TẾ' : 'WORLD-CLASS PUBLISHING STANDARDS'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {isVi ? 'QUY TRÌNH R&D & XUẤT BẢN ỨNG DỤNG DOANH NGHIỆP.' : 'MOBILE APP R&D & ENTERPRISE PUBLISHING PIPELINE.'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {isVi 
              ? 'DOMIX thiết lập quy trình 5 bước nghiêm ngặt từ nghiên cứu thuật toán AI đến thẩm định hồ sơ pháp lý, sẵn sàng hợp tác cùng các đối tác đưa phần mềm đẳng cấp ra thị trường toàn cầu.'
              : 'DOMIX enforces a rigorous 5-stage pipeline bridging AI R&D to full enterprise compliance, empowering strategic partners to launch world-class apps globally.'}
          </p>
        </div>

        {/* Pipeline Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {pipelineStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-slate-950/30 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 p-6 rounded-2xl space-y-4 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-amber-400">
                    {stage.step}
                  </span>
                  <span className="text-[9px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full">
                    {stage.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {stage.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isVi ? 'Đạt tiêu chuẩn kiểm duyệt' : 'Verified Standard'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA Banner */}
        <div className="glass-panel p-8 sm:p-10 border border-amber-500/30 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden bg-slate-950/35 backdrop-blur-2xl">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {isVi ? 'CƠ HỘI HỢP TÁC CHIẾN LƯỢC' : 'STRATEGIC PARTNERSHIP OPPORTUNITY'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isVi ? 'Bạn Có Ý Tưởng Phần Mềm Đột Phá Cho Ứng Dụng Di Động?' : 'Have a Breakthrough Mobile Software Idea?'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              {isVi 
                ? 'DOMIX cung cấp toàn bộ hạ tầng thuật toán AI, đội ngũ lập trình R&D hàng đầu và hồ sơ Developer Account doanh nghiệp chính thức để hiện thực hóa sản phẩm của bạn.'
                : 'DOMIX provides full AI algorithm infrastructure, top R&D engineering teams, and verified corporate Developer credentials to turn your software into a global product.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-8 py-3.5 rounded-full transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2"
            >
              <span>{isVi ? 'Đăng Ký Hợp Tác Với DOMIX' : 'Partner with DOMIX'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/business')}
              className="btn-secondary text-xs !py-3.5 !px-6"
            >
              <span>{isVi ? 'Xem Hồ Sơ Pháp Lý Doanh Nghiệp' : 'View Corporate Credentials'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
