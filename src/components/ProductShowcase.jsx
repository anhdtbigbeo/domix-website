import React, { useState } from 'react';
import { Lightbulb, FileText, Image as ImageIcon, Mic, Video, Share2, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function ProductShowcase({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 'idea',
      title: '01. IDEA',
      icon: Lightbulb,
      subtitle: 'Khởi tạo Ý Tưởng',
      desc: 'Nhập chủ đề thô hoặc yêu cầu truyền thông. DOMIX AI phân tích xu hướng và đề xuất các góc khai phá nội dung độc đáo.',
      badge: 'GenAI Brain'
    },
    {
      id: 'script',
      title: '02. SCRIPT',
      icon: FileText,
      subtitle: 'Xây dựng Kịch Bản',
      desc: 'Tự động biên soạn kịch bản chi tiết theo phân cảnh (Scene-by-scene), bao gồm thoại, hành động nhân vật và góc máy.',
      badge: 'NLP Scriptwriter'
    },
    {
      id: 'image',
      title: '03. IMAGE',
      icon: ImageIcon,
      subtitle: 'Tạo Hình Ảnh Phân Cảnh',
      desc: 'Sinh ra tài nguyên hình ảnh nhất quán về nhân vật và bối cảnh cho từng frame trong kịch bản với chất lượng 4K.',
      badge: 'Visual Engine'
    },
    {
      id: 'voice',
      title: '04. VOICE',
      icon: Mic,
      subtitle: 'Lồng Tiếng AI Truyền Cảm',
      desc: 'Tổng hợp giọng đọc AI đa ngôn ngữ (TTS), tùy chỉnh tông giọng, nhịp điệu và cảm xúc phù hợp với thông điệp thương hiệu.',
      badge: 'Neural Audio'
    },
    {
      id: 'video',
      title: '05. VIDEO',
      icon: Video,
      subtitle: 'Render Video Điện Ảnh',
      desc: 'Ghép nối hình ảnh, chuyển động AI, giọng đọc và nhạc nền thành video hoàn chỉnh sẵn sàng xuất bản.',
      badge: 'Render Pipeline'
    },
    {
      id: 'publish',
      title: '06. PUBLISH',
      icon: Share2,
      subtitle: 'Tự Động Xuất Bản',
      desc: 'Tùy chỉnh định dạng khung hình (9:16 Reels/TikTok, 16:9 Youtube) và phát hành trực tiếp lên hệ sinh thái kênh.',
      badge: 'Auto Publisher'
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-white/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-pill-masterpiece text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <span className="text-sharp-crisp">SẢN PHẨM CHỦ LỰC — AI CREATIVE WORKSPACE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-sharp-crisp">
            MEET <span className="shimmer-gold-text">DOMIX AI.</span>
          </h2>
          <p className="text-lg font-bold text-amber-400 text-sharp-crisp">
            Your intelligent creative workspace.
          </p>
          <p className="text-sm sm:text-base text-zinc-200 max-w-2xl mx-auto leading-relaxed text-sharp-crisp font-medium">
            DOMIX AI brings AI-powered video, image, voice and content creation into one connected workflow.
          </p>
        </div>

        {/* WORKFLOW STEPS PIPELINE DIAGRAM */}
        <div className="card-masterpiece-glow p-6 sm:p-10 relative mb-12 rounded-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-6 flex items-center justify-between text-sharp-crisp">
            <span>DOMIX AI End-to-End Content Pipeline</span>
            <span className="text-amber-400 font-mono font-bold">Workflow 6/6 Modules</span>
          </div>

          {/* Stepper Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {workflowSteps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl text-left transition-all relative overflow-hidden border touch-ripple ${
                    isActive
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-xl shadow-amber-500/20 backdrop-blur-md'
                      : 'bg-slate-950/30 border-white/10 text-zinc-400 hover:border-amber-500/40 hover:text-white backdrop-blur-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'text-zinc-500'}`} />
                    <span className="text-[10px] font-mono text-zinc-400 font-bold">0{idx + 1}</span>
                  </div>
                  <span className="text-xs font-bold block text-sharp-crisp">{step.id.toUpperCase()}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Content Preview Card */}
          <div className="bg-slate-950/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                <span>{workflowSteps[activeStep].badge}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {workflowSteps[activeStep].subtitle}
              </h3>
              <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                {workflowSteps[activeStep].desc}
              </p>

              <ul className="space-y-2 text-xs text-zinc-200 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                   Tự động xử lý song song trên đám mây DOMIX Cloud
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                   Đồng bộ không gian làm việc nhóm (Workspace Team Collaboration)
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-950/40 backdrop-blur-md p-6 rounded-xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-300 font-mono font-bold">
                <span>Pipeline Node Preview</span>
                <span className="text-amber-300">Step {activeStep + 1} of 6</span>
              </div>
              <div className="h-32 bg-slate-950/40 rounded-lg border border-white/10 p-4 flex flex-col justify-center items-center text-center space-y-2">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                  {workflowSteps[activeStep].title}
                </span>
                <p className="text-[11px] text-zinc-300 max-w-xs font-medium">
                  Dữ liệu được chuyển tiếp tự động sang bước tiếp theo trong quy trình sáng tạo.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="text-zinc-300 hover:text-white font-medium"
                >
                  ← Bước trước
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < 5 ? prev + 1 : 0))}
                  className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1"
                >
                  Bước tiếp theo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('/products/domix-ai')}
            className="btn-primary text-sm !py-3.5 !px-8 inline-flex items-center gap-2"
          >
            <span>Explore DOMIX AI Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
