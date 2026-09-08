import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Monitor, Award, CheckCircle2, Sparkles, Shield, Cpu, Lock, ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { translations } from '../i18n/translations';
import domixLogoImg from '../assets/domix_official_logo.png';
import domixOrbImg from '../assets/domix_ocean_water_orb.png';

export default function Coin98HeroSection({ onNavigate, lang }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const t = translations[lang].hero;

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse move handler for smooth 3D parallax tilt
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Overlay Canvas animation for orbital light pulse & artistic wire laser motion
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

    let rotationAngle = 0;
    let time = 0;
    const orbFizzyBubbles = [];

    // Cosmic starlight energy dust
    const cosmicDust = Array.from({ length: 28 }, (_, i) => ({
      angle: (Math.PI * 2 * i) / 28,
      speed: 0.008 + (i % 3) * 0.004,
      distMult: 0.7 + (i % 5) * 0.08,
      size: Math.random() * 2.5 + 1,
      color: i % 2 === 0 ? '#FBBF24' : '#38BDF8',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.02;
      rotationAngle += 0.007;

      // Artistic fluid levitation offset
      const levitateX = Math.sin(time * 0.7) * 8;
      const levitateY = Math.cos(time * 0.5) * 12;

      const centerX = width / 2 + levitateX;
      const centerY = height / 2 + levitateY;
      const radius = Math.min(width, height) * 0.42;

      // 4 Fine Golden Metallic Wires rotating dynamically around 3D axes ("Dây vàng nhỏ xoay quanh trục")
      const goldenRings = [
        { tiltX: 0.42, tiltZ: 0.25, speed: 0.016, radiusMult: 0.88, color: 'rgba(251, 191, 36, 0.85)', beadCount: 4 },
        { tiltX: -0.52, tiltZ: -0.35, speed: -0.014, radiusMult: 0.94, color: 'rgba(245, 158, 11, 0.85)', beadCount: 3 },
        { tiltX: 0.65, tiltZ: 0.55, speed: 0.020, radiusMult: 0.82, color: 'rgba(253, 224, 71, 0.9)', beadCount: 4 },
        { tiltX: -0.28, tiltZ: 0.75, speed: -0.018, radiusMult: 0.98, color: 'rgba(234, 179, 8, 0.85)', beadCount: 3 },
      ];

      goldenRings.forEach((ring, idx) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        
        // Continuous 3D multi-axis rotation
        const currentRotation = rotationAngle * ring.speed * 120 + (idx * Math.PI) / 2;
        ctx.rotate(ring.tiltZ);
        ctx.scale(1, Math.cos(ring.tiltX));
        ctx.rotate(currentRotation);

        // Draw fine 3D metallic golden wire
        ctx.beginPath();
        ctx.arc(0, 0, radius * ring.radiusMult, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = '#FBBF24';
        ctx.shadowBlur = 14;
        ctx.stroke();

        // Laser Light Pulse Arc sweeping along golden wire
        const laserGrad = ctx.createConicGradient(currentRotation, 0, 0);
        laserGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        laserGrad.addColorStop(0.15, 'rgba(251, 191, 36, 0.9)');
        laserGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0)');

        ctx.beginPath();
        ctx.arc(0, 0, radius * ring.radiusMult, 0, Math.PI * 0.7);
        ctx.strokeStyle = laserGrad;
        ctx.lineWidth = 3.5;
        ctx.stroke();

        // Draw Glass Spheres & Golden Energy Nodes traveling along the rotating wire
        for (let b = 0; b < ring.beadCount; b++) {
          const beadAngle = (Math.PI * 2 * b) / ring.beadCount;
          const bx = Math.cos(beadAngle) * (radius * ring.radiusMult);
          const by = Math.sin(beadAngle) * (radius * ring.radiusMult);

          ctx.save();
          ctx.translate(bx, by);
          
          if (b % 2 === 0) {
            // Glass sphere bead on the wire
            const glassGrad = ctx.createRadialGradient(-2, -2, 0.5, 0, 0, 7);
            glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
            glassGrad.addColorStop(0.5, 'rgba(251, 191, 36, 0.45)');
            glassGrad.addColorStop(1, 'rgba(245, 158, 11, 0.15)');

            ctx.beginPath();
            ctx.arc(0, 0, 7.5, 0, Math.PI * 2);
            ctx.fillStyle = glassGrad;
            ctx.shadowColor = '#FBBF24';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          } else {
            // Glowing golden energy node
            ctx.beginPath();
            ctx.arc(0, 0, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#FBBF24';
            ctx.shadowColor = '#F59E0B';
            ctx.shadowBlur = 18;
            ctx.fill();
          }
          
          ctx.restore();
        }

        ctx.restore();
      });

      // Cosmic Dust Sparkles floating around Orb
      cosmicDust.forEach((d) => {
        d.angle += d.speed;
        const dx = centerX + Math.cos(d.angle) * (radius * d.distMult);
        const dy = centerY + Math.sin(d.angle * 1.5) * (radius * d.distMult * 0.6);

        ctx.save();
        ctx.beginPath();
        ctx.arc(dx, dy, d.size, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.shadowColor = d.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      // Effervescent rising micro air bubbles inside DOMIX Orb ("Vài giây lại sủi bọt khí")
      if (Math.random() < 0.12) {
        orbFizzyBubbles.push({
          x: centerX + (Math.random() - 0.5) * (radius * 0.7),
          y: centerY + radius * 0.4 + Math.random() * 20,
          radius: Math.random() * 3.5 + 1,
          vy: -(Math.random() * 1.8 + 0.8),
          vx: (Math.random() - 0.5) * 0.5,
          alpha: 0.9,
          hue: Math.random() > 0.3 ? 45 : 195,
        });
      }

      for (let i = orbFizzyBubbles.length - 1; i >= 0; i--) {
        const fb = orbFizzyBubbles[i];
        fb.x += fb.vx;
        fb.y += fb.vy;
        fb.alpha -= 0.008;

        if (fb.alpha <= 0 || fb.y < centerY - radius * 0.8) {
          orbFizzyBubbles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(fb.x, fb.y, fb.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${fb.hue}, 90%, 75%, ${fb.alpha})`;
        ctx.shadowColor = `hsla(${fb.hue}, 90%, 60%, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();

        // High glossy glare highlight
        ctx.beginPath();
        ctx.arc(fb.x - fb.radius * 0.3, fb.y - fb.radius * 0.3, fb.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${fb.alpha})`;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-transparent text-white"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & BADGES */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left flex flex-col justify-center">
            
            {/* Top Security & Verification Laurel Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 glass-pill-masterpiece text-xs font-bold tracking-wide border-amber-400/60 shadow-xl shadow-amber-500/30">
                <Award className="w-4 h-4 text-amber-300 filter drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                <span className="text-sharp-crisp text-amber-200 font-extrabold">{t.laurelBadge}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-pill-masterpiece text-amber-300 text-xs font-mono font-bold tracking-wide border-amber-400/50 shadow-xl shadow-amber-500/20">
                <span className="text-sharp-crisp">🏛️ TRỤ SỞ HÀ NỘI</span>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-xs font-mono uppercase tracking-widest text-amber-300 font-extrabold text-sharp-crisp">
              {t.heroTagline}
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] lg:leading-[1.1] text-sharp-crisp">
              {t.heroTitle1} <br />
              <span className="text-gold-leaf animate-pulse-glow">
                {t.heroTitle2}
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-sm sm:text-base text-zinc-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-sharp-crisp font-semibold">
              {t.heroSub}
            </p>

            {/* MOBILE ONLY 3D OCEAN WATER ORB PREVIEW (Visible on mobile between headline and CTAs) */}
            <div className="block lg:hidden my-4 py-2">
              <div 
                className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto aspect-square flex items-center justify-center transition-transform duration-300 ease-out rounded-full overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 42%, transparent 62%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 42%, transparent 62%)',
                }}
              >
                <img
                  src={domixOrbImg}
                  alt="DOMIX Seamless 3D Ocean Water Bubble Orb Mobile"
                  className="w-full h-full object-contain rounded-full filter drop-shadow-[0_0_60px_rgba(251,191,36,0.65)] animate-float mix-blend-screen"
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 60%)',
                  }}
                />
              </div>
            </div>

            {/* INTERACTIVE AI LAUNCH CONTROL PORTAL */}
            <div className="glass-panel p-4 sm:p-5 rounded-3xl border border-amber-400/30 shadow-xl space-y-4 text-left bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-amber-400/20 pb-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-extrabold text-sharp-crisp">
                    DOMIX AI LAUNCH CONTROL CENTER v4.2
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-bold shadow-sm shadow-amber-500/20">
                  ⚡ KHÔNG CẦN ĐĂNG NHẬP
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Main Launch Button -> Launches domixhub.com */}
                <a
                  href="https://domixhub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-300 hover:to-yellow-400 text-slate-950 p-4 rounded-2xl flex items-center gap-3.5 transition-all shadow-xl shadow-amber-500/30 text-left group touch-ripple font-extrabold"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950/25 border border-slate-950/40 p-1 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden shadow-inner">
                    <img 
                      src={domixLogoImg} 
                      alt="DOMIX Official Logo" 
                      className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]" 
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-900 uppercase tracking-wider block font-black">SUPER-APP SÁNG TẠO</span>
                    <span className="text-sm font-black text-slate-950 block">Khởi Chạy DOMIX AI</span>
                  </div>
                </a>

                {/* Official Facebook Fanpage Portal */}
                <a
                  href="https://www.facebook.com/profile.php?id=61567232442735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill-masterpiece p-4 rounded-2xl flex items-center gap-3.5 transition-all text-left group touch-ripple border-amber-400/40 hover:border-amber-300 hover:bg-amber-400/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-amber-300" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-300 uppercase tracking-wider block font-bold">FANPAGE CHÍNH THỨC</span>
                    <span className="text-sm font-bold text-white block flex items-center gap-1">
                      DOMIX Facebook Page ↗
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* INTERNATIONAL STANDARD ENTERPRISE TRUST & COMPLIANCE GRID */}
            <div className="p-5 rounded-3xl border border-white/10 space-y-4 mt-6 text-left shadow-lg bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-extrabold">
                    TIÊU CHUẨN NĂNG LỰC & BẢO MẬT DOANH NGHIỆP DOMIX
                  </span>
                </div>
                <button 
                  onClick={() => onNavigate('/business')}
                  className="text-[10px] font-mono text-amber-300 hover:text-amber-200 flex items-center gap-1 font-bold group"
                >
                  <span>Hồ Sơ Doanh Nghiệp</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-300 font-bold flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      Pháp Nhân Đăng Ký
                    </span>
                    <span className="text-amber-300 text-[10px] font-mono font-bold">100% VERIFIED</span>
                  </div>
                  <p className="text-white font-bold text-xs">Công Ty TNHH Công Nghệ DOMIX</p>
                  <p className="text-[11px] font-mono text-amber-300">MST: 0111575532</p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-300 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      Hạ Tầng Điện Toán AI
                    </span>
                    <span className="text-amber-300 text-[10px] font-mono font-bold">99.99% UPTIME SLA</span>
                  </div>
                  <p className="text-white font-bold text-xs">Architectural Multimodal Gateway</p>
                  <p className="text-[11px] text-zinc-300">High-Throughput SDK & REST API</p>
                </div>
              </div>
            </div>

            {/* Verified & Audited By Partner Logos Strip (Coin98 Style) */}
            <div className="pt-8 border-t border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.auditedTitle}</span>
              </div>

              {/* Logos Matrix */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-1 opacity-80 text-xs font-extrabold font-mono text-zinc-400 tracking-wider">
                <span className="hover:text-amber-400 transition-colors">{t.audit1}</span>
                <span>•</span>
                <span className="hover:text-amber-400 transition-colors">{t.audit2}</span>
                <span>•</span>
                <span className="hover:text-amber-400 transition-colors">{t.audit3}</span>
                <span>•</span>
                <span className="hover:text-amber-400 transition-colors">{t.audit4}</span>
                <span>•</span>
                <span className="hover:text-amber-400 transition-colors">{t.audit5}</span>
              </div>
            </div>

          </div>

          {/* DESKTOP COLUMN: 3D GALAXY WATER BUBBLE ORB WITH ARTISTIC PARALLAX & LEVITATION */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div 
              className="relative w-full max-w-lg aspect-square flex items-center justify-center transition-transform duration-300 ease-out rounded-full overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(20px)`,
                maskImage: 'radial-gradient(circle at center, black 42%, transparent 62%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 42%, transparent 62%)',
              }}
            >
              
              {/* 3D High-Res Seamless Ocean Water Orb Render with Large Glowing DOMIX Text */}
              <img
                src={domixOrbImg}
                alt="DOMIX Seamless 3D Ocean Water Bubble Orb"
                className="w-full h-full object-contain rounded-full filter drop-shadow-[0_0_80px_rgba(251,191,36,0.6)] animate-float mix-blend-screen"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 60%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 60%)',
                }}
              />

              {/* Canvas Overlay for Orbit Sparkles & Artistic Laser Wires */}
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
