import React, { useState } from 'react';
import { Monitor, Smartphone, Layers, Sliders, Play, Sparkles, Folder, Check, Terminal } from 'lucide-react';
import aiCorePreview from '../assets/domix_ai_core_preview.png';

export default function ProductExperience({ onNavigate }) {
  const [deviceView, setDeviceView] = useState('desktop');
  const [selectedFeature, setSelectedFeature] = useState('video');

  const features = [
    { id: 'video', name: 'AI Video Studio', tag: 'Render 4K Gen-2' },
    { id: 'image', name: 'AI Image Engine', tag: 'Photorealism' },
    { id: 'voice', name: 'AI Voice Cloning', tag: 'Natural TTS' },
    { id: 'prompt', name: 'Prompt Studio', tag: 'LLM Orchestration' },
    { id: 'automation', name: 'Workflow Pipelines', tag: 'Batch Queue' },
    { id: 'workspace', name: 'Team Workspace', tag: 'Cloud Sync' }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              TRẢI NGHIỆM GIAO DIỆN SẢN PHẨM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              PRODUCT EXPERIENCE.
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Giao diện tối giản, tối ưu cho tốc độ và khả năng tương tác mượt mà trên cả máy tính và ứng dụng di động.
            </p>
          </div>

          {/* Device Switcher */}
          <div className="flex items-center gap-2 bg-slate-950/30 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                deviceView === 'desktop' ? 'bg-indigo-600 text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Desktop Web App
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                deviceView === 'mobile' ? 'bg-indigo-600 text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App
            </button>
          </div>
        </div>

        {/* Feature Sub-Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {features.map((feat) => (
            <button
              key={feat.id}
              onClick={() => setSelectedFeature(feat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border shrink-0 transition-all ${
                selectedFeature === feat.id
                  ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300 backdrop-blur-md'
                  : 'bg-slate-950/30 border-white/10 text-zinc-400 hover:text-zinc-200 backdrop-blur-md'
              }`}
            >
              <span>{feat.name}</span>
              <span className="ml-2 text-[10px] text-zinc-500 font-mono">[{feat.tag}]</span>
            </button>
          ))}
        </div>

        {/* MOCKUP SHOWCASE CONTAINER */}
        <div className="glass-panel p-4 sm:p-8 relative overflow-hidden border border-indigo-500/20 shadow-2xl">
          {deviceView === 'desktop' ? (
            /* DESKTOP SIMULATED BROWSER UI */
            <div className="bg-slate-950/35 backdrop-blur-2xl rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Top Browser Bar */}
              <div className="bg-slate-900/40 backdrop-blur-md px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[11px] font-mono text-zinc-400 ml-4 bg-slate-950/40 px-3 py-1 rounded border border-white/10">
                    https://app.domix.ai/workspace/{selectedFeature}
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  DOMIX AI v2.6 Connected
                </span>
              </div>

              {/* Workspace Main Interface */}
              <div className="grid grid-cols-12 min-h-[420px]">
                {/* Left Sidebar */}
                <div className="col-span-3 bg-slate-950/40 backdrop-blur-md p-4 border-r border-white/10 space-y-4 hidden sm:block">
                  <div className="text-[11px] font-bold uppercase text-zinc-500 tracking-wider">PROJECT WORKSPACE</div>
                  <div className="space-y-1">
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 text-xs font-semibold flex items-center gap-2">
                      <Folder className="w-3.5 h-3.5" /> Campaign 2026 Launch
                    </div>
                    <div className="p-2 rounded-lg text-zinc-400 text-xs font-medium flex items-center gap-2 hover:bg-white/10">
                      <Folder className="w-3.5 h-3.5" /> E-commerce Assets
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-[11px] font-bold uppercase text-zinc-500 tracking-wider">AI ENGINES</div>
                  <div className="space-y-1 text-xs text-zinc-400">
                    <div className="p-1.5 text-white font-semibold">● DOMIX Video Gen-2</div>
                    <div className="p-1.5">● DOMIX Audio Studio</div>
                    <div className="p-1.5">● DOMIX Prompt Studio</div>
                  </div>
                </div>

                {/* Center Canvas / Image Preview */}
                <div className="col-span-12 sm:col-span-9 p-6 bg-slate-950/20 backdrop-blur-md space-y-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">{selectedFeature} - Active Workspace</h4>
                      <p className="text-xs text-zinc-500">Real-time Multimodal Generation Engine</p>
                    </div>
                    <button onClick={() => onNavigate('/products/domix-ai')} className="btn-primary text-xs !py-1.5 !px-3">
                      Khám phá tính năng
                    </button>
                  </div>

                  {/* High Resolution Simulated Visual UI Asset */}
                  <div className="h-64 rounded-xl border border-white/10 overflow-hidden relative group">
                    <img
                      src={aiCorePreview}
                      alt="DOMIX AI Platform Mockup"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                        <span className="font-mono text-indigo-300">DOMIX AI Multimodal Core Dashboard</span>
                      </div>
                      <span className="text-[10px] font-mono bg-slate-950/80 px-2 py-1 rounded border border-white/10 text-emerald-400">
                        4K UHD Rendering Engine
                      </span>
                    </div>
                  </div>

                  {/* Timeline Bar */}
                  <div className="bg-slate-950/40 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-indigo-400" />
                      <span className="font-mono">00:15 / 00:30</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full flex-1 mx-4 overflow-hidden">
                      <div className="w-1/2 h-full bg-indigo-500" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">Render Ready</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* MOBILE SIMULATED UI */
            <div className="max-w-sm mx-auto bg-slate-950/40 backdrop-blur-2xl rounded-[36px] border-4 border-white/10 p-4 shadow-2xl space-y-4">
              {/* Speaker Notch */}
              <div className="w-24 h-4 bg-slate-900/60 rounded-full mx-auto mb-2" />
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                <span>DOMIX AI Mobile</span>
                <span className="text-[10px] text-indigo-400 font-mono">v2.6 iOS/Android</span>
              </div>
              <div className="bg-slate-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-3">
                <div className="text-xs font-bold text-indigo-300">Fast Creation Mobile Workflow</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Tạo nhanh kịch bản và video ngẫu hứng ngay trên điện thoại với giao diện chạm tối ưu.
                </p>
                <div className="h-36 rounded-xl border border-white/10 overflow-hidden relative">
                  <img src={aiCorePreview} alt="Mobile UI" className="w-full h-full object-cover" />
                </div>
                <button onClick={() => onNavigate('/download')} className="w-full btn-primary text-xs justify-center py-2">
                  Xem ứng dụng Mobile App
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
