import React from 'react';
import { Cpu, Layers, Zap, Server, Shield, Globe, ArrowDown } from 'lucide-react';

export default function TechStackSection({ onNavigate }) {
  const techLayers = [
    {
      layer: '01. AI MODELS INTEGRATION',
      name: 'State-of-the-Art AI Models',
      desc: 'Tích hợp linh hoạt các mô hình ngôn ngữ lớn (LLMs), mô hình sinh hình ảnh & video tiên tiến thông qua cổng kết nối bảo mật.',
      tags: ['LLMs API', 'Diffusion Engines', 'Neural Audio Models']
    },
    {
      layer: '02. MULTIMODAL GENERATION',
      name: 'Multimodal Orchestration Engine',
      desc: 'Hệ thống điều phối kết hợp đồng thời kịch bản chữ, hình ảnh phân cảnh và âm thanh giọng đọc thành luồng dữ liệu thống nhất.',
      tags: ['Multi-Modal Sync', 'Latent Space Mapping', 'Prompt Compiler']
    },
    {
      layer: '03. CONTENT ENGINE',
      name: 'DOMIX Intelligent Content Engine',
      desc: 'Bộ công cụ xử lý biên tập điện ảnh, căn chỉnh thời lượng tự động và tối ưu màu sắc/âm thanh.',
      tags: ['Auto Layout', 'Keyframe Motion', 'Subtitle Sync']
    },
    {
      layer: '04. AUTOMATION & API',
      name: 'Automation & High-Throughput API',
      desc: 'Hạ tầng xử lý đa luồng trên điện toán đám mây với băng thông cao, cho phép tự động hóa quy trình hàng loạt.',
      tags: ['Cloud Queue', 'Webhook SDK', 'Batch Processing']
    },
    {
      layer: '05. DOMIX PLATFORM',
      name: 'Unified Workspace & Mobile Ecosystem',
      desc: 'Nền tảng giao diện người dùng tối giản, hỗ trợ trình duyệt web và ứng dụng di động iOS/Android.',
      tags: ['Web Application', 'iOS / Android App', 'Role Management']
    }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-[#242424]/40" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            NĂNG LỰC CÔNG NGHỆ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            POWERED BY INTELLIGENT TECHNOLOGY.
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 font-medium">
            Hạ tầng công nghệ AI của DOMIX được thiết kế theo kiến trúc Layered Architecture minh bạch, an toàn và dễ dàng mở rộng.
          </p>
        </div>

        {/* TECH LAYERS DATA FLOW ANIMATION CONTAINER */}
        <div className="max-w-4xl mx-auto space-y-4">
          {techLayers.map((layer, idx) => (
            <div key={idx} className="space-y-4">
              <div className="glass-panel p-6 border border-white/10 hover:border-amber-400/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-amber-300 font-bold tracking-wider">
                    {layer.layer}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {layer.name}
                  </h3>
                  <p className="text-xs text-zinc-200 max-w-xl leading-relaxed font-medium">
                    {layer.desc}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-1.5 shrink-0">
                  {layer.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-white/[0.03] backdrop-blur-sm border border-white/10 text-zinc-200 px-2.5 py-1 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {idx < techLayers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-amber-400 backdrop-blur-md">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Infrastructure Transparency Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-4xl mx-auto text-center text-xs text-zinc-200 font-medium">
          <p>
            💡 <strong className="text-white font-bold">Minh bạch hạ tầng:</strong> DOMIX ứng dụng tích hợp đa dạng các mô hình AI thế hệ mới (AI integrations / AI-powered infrastructure) nhằm mang lại hiệu suất tối ưu và trải nghiệm tốt nhất cho người dùng.
          </p>
        </div>

      </div>
    </section>
  );
}
