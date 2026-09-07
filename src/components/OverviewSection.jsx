import React from 'react';
import { Video, Image as ImageIcon, Mic, FileText, Settings, Code, ArrowRight } from 'lucide-react';

export default function OverviewSection({ onNavigate }) {
  const capabilities = [
    {
      icon: Video,
      title: 'AI VIDEO',
      tagline: 'Create and transform video content with AI.',
      desc: 'Công nghệ tạo và chuyển đổi video tự động từ văn bản, kịch bản hoặc hình ảnh với độ phân giải cao và chuyển động sinh động.',
      color: 'from-indigo-500/20 to-indigo-600/5',
      borderColor: 'group-hover:border-indigo-500/50'
    },
    {
      icon: ImageIcon,
      title: 'AI IMAGE',
      tagline: 'Generate visual assets for modern digital content.',
      desc: 'Sinh ra tài nguyên hình ảnh chất lượng cao, photorealistic phục vụ thiết kế banner, sản phẩm e-commerce và truyền thông.',
      color: 'from-sky-500/20 to-sky-600/5',
      borderColor: 'group-hover:border-sky-500/50'
    },
    {
      icon: Mic,
      title: 'AI VOICE',
      tagline: 'Create natural audio and voice experiences.',
      desc: 'Tạo giọng đọc AI đa ngôn ngữ với âm điệu truyền cảm, tự nhiên như người thật, phục vụ thuyết minh video và trợ lý thoại.',
      color: 'from-violet-500/20 to-violet-600/5',
      borderColor: 'group-hover:border-violet-500/50'
    },
    {
      icon: FileText,
      title: 'AI CONTENT',
      tagline: 'Turn ideas into structured content and creative workflows.',
      desc: 'Biến ý tưởng thô thành kịch bản chuyên nghiệp, nội dung mạng xã hội và cấu trúc chiến dịch sáng tạo trong vài giây.',
      color: 'from-pink-500/20 to-pink-600/5',
      borderColor: 'group-hover:border-pink-500/50'
    },
    {
      icon: Settings,
      title: 'AUTOMATION',
      tagline: 'Automate repetitive creative and operational processes.',
      desc: 'Tự động hóa các công đoạn lặp đi lặp lại trong quy trình sản xuất nội dung và vận hành số của doanh nghiệp.',
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      icon: Code,
      title: 'AI API',
      tagline: 'Connect AI capabilities to your own products and workflows.',
      desc: 'Cung cấp cổng tích hợp API high-throughput giúp các nhà phát triển dễ dàng đưa năng lực AI của DOMIX vào hệ thống riêng.',
      color: 'from-amber-500/20 to-amber-600/5',
      borderColor: 'group-hover:border-amber-500/50'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DOMIX INTRODUCTION BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              VỀ CÔNG NGHỆ DOMIX
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              WE BUILD WITH AI.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
              DOMIX is a technology company focused on building practical AI-powered products and solutions for creators, businesses and digital teams.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              From content creation to intelligent automation, we design technology that helps people move faster, work smarter and create more.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Abstract 3D Visual Object Simulation */}
            <div className="w-full max-w-sm aspect-square glass-panel p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Settings className="w-6 h-6 text-indigo-400 group-hover:rotate-90 transition-transform duration-500" />
              </div>

              <div className="space-y-2 relative z-10">
                <span className="text-xs font-mono text-indigo-300">DOMIX Tech Architecture</span>
                <h4 className="text-xl font-bold text-white">Multimodal Intelligent Engine</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Kết hợp năng lực của LLMs, Generative Vision & Audio Engine trong một hệ thống đồng nhất.
                </p>
              </div>

              <div className="pt-4 border-t border-[#242424] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Core Efficiency: +400%</span>
                <span className="text-emerald-400 font-semibold">Active Engine</span>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT WE BUILD GRID SECTION */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              LĨNH VỰC NĂNG LỰC
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              FROM IDEAS TO INTELLIGENT EXPERIENCES.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Hệ sinh thái công nghệ AI đa dạng đáp ứng mọi nhu cầu sáng tạo nội dung và tự động hóa doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`glass-card-interactive p-6 space-y-4 group border border-[#242424] ${item.borderColor}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center`}>
                    <IconComp className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-400/90 font-mono">
                      {item.tagline}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    <span>Tìm hiểu giải pháp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
