import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, Play, Cpu, Video, Image as ImageIcon, Mic, FileText, Zap, Code, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  const canvasRef = useRef(null);

  // Live Sandbox state
  const [activeTab, setActiveTab] = useState('video');
  const [promptText, setPromptText] = useState('Tạo kịch bản và video cinematic giới thiệu sản phẩm DOMIX AI năm 2026');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationOutput, setGenerationOutput] = useState(null);

  // Interactive HTML5 Canvas for DOMIX AI CORE node system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Nodes radiating from DOMIX AI CORE
    const coreNode = { x: width / 2, y: height / 2, radius: 24 };
    const peripheralNodes = [
      { label: 'AI VIDEO', angle: 0, distance: 160, color: '#6366F1' },
      { label: 'AI IMAGE', angle: (Math.PI * 1) / 3, distance: 170, color: '#38BDF8' },
      { label: 'AI VOICE', angle: (Math.PI * 2) / 3, distance: 160, color: '#8B5CF6' },
      { label: 'AI CONTENT', angle: Math.PI, distance: 180, color: '#EC4899' },
      { label: 'AUTOMATION', angle: (Math.PI * 4) / 3, distance: 160, color: '#10B981' },
      { label: 'AI API', angle: (Math.PI * 5) / 3, distance: 170, color: '#F59E0B' }
    ];

    let particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    }));

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();
      });

      const centerX = width / 2;
      const centerY = height / 2;

      rotationAngle += 0.003;

      // Draw lines and nodes
      peripheralNodes.forEach((node, i) => {
        const currentAngle = node.angle + rotationAngle;
        const nx = centerX + Math.cos(currentAngle) * node.distance;
        const ny = centerY + Math.sin(currentAngle) * (node.distance * 0.65); // Elliptical 3D effect

        // Connecting glowing line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated data pulse along line
        const pulseProgress = (Date.now() / 1500 + i * 0.3) % 1;
        const px = centerX + (nx - centerX) * pulseProgress;
        const py = centerY + (ny - centerY) * pulseProgress;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Peripheral Node outer ring
        ctx.beginPath();
        ctx.arc(nx, ny, 16, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(17, 17, 17, 0.85)';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        // Label text
        ctx.font = '600 10px "Inter", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + 3.5);
      });

      // Core Central Node (DOMIX CORE)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 32, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 32);
      gradient.addColorStop(0, '#8B5CF6');
      gradient.addColorStop(0.6, '#6366F1');
      gradient.addColorStop(1, '#050505');
      ctx.fillStyle = gradient;
      ctx.shadowColor = '#6366F1';
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 36, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = '800 11px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText('DOMIX AI', centerX, centerY - 2);
      ctx.font = '600 8px "Inter", sans-serif';
      ctx.fillStyle = '#A5B4FC';
      ctx.fillText('CORE ENGINE', centerX, centerY + 10);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Sandbox simulation trigger
  const handleGenerate = () => {
    setIsGenerating(true);
    setGenerationOutput(null);
    setTimeout(() => {
      setIsGenerating(false);
      if (activeTab === 'video') {
        setGenerationOutput({
          type: 'video',
          title: 'Cinematic AI Video Preview',
          details: 'Đã hoàn thành render 4K - 60 FPS | 1080p Web Export',
          script: 'Cảnh 1: Futuristic City AI skyline -> Cảnh 2: DOMIX Core interface glowing -> Cảnh 3: High conversion CTA.',
          duration: '00:30',
          frames: '1,800 frames generated'
        });
      } else if (activeTab === 'image') {
        setGenerationOutput({
          type: 'image',
          title: 'Generative Photorealism Visual Asset',
          details: 'Độ phân giải 3840x2160 (4K UHD) | Lighting: Cinematic Cyber Neon',
          aspect: '16:9 Landscape',
          seed: 'Seed #88492019'
        });
      } else if (activeTab === 'voice') {
        setGenerationOutput({
          type: 'voice',
          title: 'Multilingual Natural AI Voiceover',
          details: 'Giọng đọc: Nam Hà Nội (Truyền cảm) & Tiếng Anh chuẩn US',
          waveform: [40, 70, 30, 90, 100, 60, 80, 50, 95, 45, 85, 30, 60],
          duration: '00:42'
        });
      } else {
        setGenerationOutput({
          type: 'content',
          title: 'Structured Marketing Script & Content Matrix',
          details: '3 Kịch bản TikTok/Reels Viral Hook + 1 Article SEO outline',
          hook: '"Biến ý tưởng thành sản phẩm AI chỉ trong 30 giây với DOMIX AI..."'
        });
      }
    }, 1800);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050505]">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>DOMIX TECHNOLOGY COMPANY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              BUILD THE FUTURE <br />
              <span className="text-gradient-accent">WITH AI.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              DOMIX phát triển các giải pháp công nghệ ứng dụng trí tuệ nhân tạo (AI), giúp biến ý tưởng sáng tạo thành nội dung, quy trình tự động hóa và trải nghiệm số thế hệ mới.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button 
                onClick={() => onNavigate('/products/domix-ai')}
                className="btn-primary text-sm !py-3.5 !px-7 shadow-xl shadow-indigo-600/20"
              >
                <span>Khám phá DOMIX AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('/about')}
                className="btn-secondary text-sm !py-3.5 !px-7"
              >
                <span>Về công ty DOMIX</span>
              </button>
            </div>

            {/* Micro Feature Indicators */}
            <div className="pt-6 border-t border-[#242424]/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Nền tảng</span>
                <span className="text-sm font-bold text-white">DOMIX AI Core</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Tích hợp</span>
                <span className="text-sm font-bold text-white">API & Cloud</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Ứng dụng</span>
                <span className="text-sm font-bold text-white">Multimodal AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: DOMIX AI CORE Canvas Node Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md h-[380px] sm:h-[420px] glass-panel relative overflow-hidden flex items-center justify-center p-2">
              <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#242424] rounded-xl p-3 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-white">DOMIX AI Ecosystem Status</span>
                </div>
                <span className="text-[11px] font-mono text-indigo-400">v2.6 Operational</span>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 01 INTERACTIVE PLAYGROUND: Live Sandbox */}
        <div className="mt-16 glass-panel p-6 sm:p-8 relative overflow-hidden border border-indigo-500/20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#242424]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Trải Nghiệm Trực Tiếp DOMIX AI Playground</h3>
                <p className="text-xs text-zinc-400">Thử nghiệm trực quan khả năng xử lý của các Engine AI thuộc hệ sinh thái DOMIX</p>
              </div>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex items-center gap-1.5 bg-[#0A0A0A] p-1 rounded-xl border border-[#242424] overflow-x-auto">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'video' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                AI Video
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'image' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                AI Image
              </button>
              <button
                onClick={() => setActiveTab('voice')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'voice' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Mic className="w-3.5 h-3.5" />
                AI Voice
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'content' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                AI Content
              </button>
            </div>
          </div>

          {/* Sandbox Input & Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="relative">
                <textarea
                  rows={3}
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Nhập câu lệnh/ý tưởng của bạn tại đây..."
                  className="w-full bg-[#0A0A0A] border border-[#242424] rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <div className="absolute bottom-3 right-3 text-[11px] text-zinc-500 font-mono">
                  DOMIX AI Sandbox Engine v2.6
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400 font-medium">Gợi ý mẫu:</span>
                  <button
                    onClick={() => setPromptText('Tạo video cinematic giới thiệu dòng sản phẩm thời trang cao cấp năm 2026')}
                    className="text-[11px] bg-[#111111] hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md border border-[#242424] transition-colors"
                  >
                    Video thời trang 30s
                  </button>
                  <button
                    onClick={() => setPromptText('Sinh kịch bản bài đăng Facebook giới thiệu dịch vụ AI cho doanh nghiệp')}
                    className="text-[11px] bg-[#111111] hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md border border-[#242424] transition-colors"
                  >
                    Kịch bản Marketing
                  </button>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="btn-primary text-xs !py-2.5 !px-5"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Đang khởi chạy AI Engine...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>Chạy thử AI DOMIX</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sandbox Output Preview Panel */}
            <div className="lg:col-span-5 bg-[#0A0A0A] border border-[#242424] rounded-xl p-5 min-h-[160px] flex flex-col justify-between">
              {isGenerating ? (
                <div className="py-8 flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                  <p className="text-xs text-indigo-300 animate-pulse font-mono">Đang kết nối DOMIX AI Multimodal Pipeline...</p>
                </div>
              ) : generationOutput ? (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold border-b border-[#242424] pb-2">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      {generationOutput.title}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">240ms</span>
                  </div>

                  <p className="text-xs text-zinc-300 font-mono leading-relaxed bg-[#111111] p-3 rounded-lg border border-zinc-800">
                    {generationOutput.details}
                  </p>

                  {generationOutput.script && (
                    <p className="text-xs text-zinc-400 italic">
                      "{generationOutput.script}"
                    </p>
                  )}

                  {generationOutput.waveform && (
                    <div className="flex items-end gap-1 h-8 py-1">
                      {generationOutput.waveform.map((h, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${h}%` }}
                          className="flex-1 bg-indigo-500 rounded-full animate-pulse"
                        />
                      ))}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 border-t border-[#242424]">
                    <span>Trạng thái: Hoàn tất</span>
                    <button 
                      onClick={() => onNavigate('/products/domix-ai')}
                      className="text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Mở trên DOMIX AI Workspace <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-zinc-500 text-xs">
                  Nhấp vào nút <strong className="text-zinc-300">"Chạy thử AI DOMIX"</strong> để xem preview kết quả thực tế của công nghệ DOMIX.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
