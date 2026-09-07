import React, { useEffect, useRef } from 'react';
import oceanParkBg from '../assets/ocean_park_bg.png';

export default function InteractiveTechCanvas({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse / Touch Position
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    // Ripples array on touch/click
    const shockwaves = [];
    // Sparkle particles array
    const particles = [];

    const getPointerPos = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      if (e.changedTouches && e.changedTouches.length > 0) {
        return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      }
      return { x: typeof e.clientX === 'number' ? e.clientX : pointer.x, y: typeof e.clientY === 'number' ? e.clientY : pointer.y };
    };

    const handlePointerMove = (e) => {
      const { x: clientX, y: clientY } = getPointerPos(e);
      if (isNaN(clientX) || isNaN(clientY)) return;
      pointer.targetX = clientX;
      pointer.targetY = clientY;
      pointer.isHovered = true;

      // Add trail particles
      if (Math.random() > 0.4) {
        particles.push({
          x: clientX + (Math.random() - 0.5) * 20,
          y: clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          radius: Math.random() * 3 + 1,
          alpha: 1,
          color: Math.random() > 0.5 ? '#FBBF24' : '#38BDF8',
          life: 0,
          maxLife: 40 + Math.random() * 20,
        });
      }
    };

    const handlePointerDown = (e) => {
      const { x: clientX, y: clientY } = getPointerPos(e);
      if (isNaN(clientX) || isNaN(clientY)) return;
      
      // Trigger liquid shockwave ripple on tap/click
      shockwaves.push({
        x: clientX,
        y: clientY,
        radius: 5,
        maxRadius: 160 + Math.random() * 80,
        alpha: 0.9,
        lineWidth: 4,
        color: '#F59E0B',
      });

      shockwaves.push({
        x: clientX,
        y: clientY,
        radius: 2,
        maxRadius: 110 + Math.random() * 50,
        alpha: 0.8,
        lineWidth: 2,
        color: '#06B6D4',
      });

      // Spawn effervescent rising fizzy micro air bubbles ("sủi bọt khí")
      spawnFizzyStream(clientX, clientY, 15);

      // Burst particles
      for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 * i) / 18;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: clientX,
          y: clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3.5 + 1.5,
          alpha: 1,
          color: i % 3 === 0 ? '#FBBF24' : i % 3 === 1 ? '#38BDF8' : '#A855F7',
          life: 0,
          maxLife: 50 + Math.random() * 30,
        });
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('touchstart', handlePointerDown, { passive: true });

    // Initialize 3D Fluid Floating Water Bubbles ("Bóng Nước")
    const numBubbles = 18;
    const bubbles = [];
    const techTags = ['DOMIX AI', 'NEURAL CORE', 'QUANTUM 4K', 'SDK API', 'OCEAN PARK 1', 'SSL 256-BIT', 'DOMIX HUB', '10M TOKENS/S'];

    for (let i = 0; i < numBubbles; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() * 35 + 20,
        radius: 0,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8 - 0.3,
        phase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.02,
        tag: i < techTags.length ? techTags[i] : null,
        hue: i % 3 === 0 ? 45 : i % 3 === 1 ? 195 : 270, // Gold, Cyan, Violet
      });
    }

    // Fizzy micro air bubbles array ("Sủi bọt khí")
    const fizzyAirBubbles = [];
    let fizzTimer = 0;

    const spawnFizzyStream = (originX, originY, count = 8) => {
      for (let i = 0; i < count; i++) {
        fizzyAirBubbles.push({
          x: originX + (Math.random() - 0.5) * 40,
          y: originY + (Math.random() - 0.5) * 20,
          radius: Math.random() * 4 + 1.5,
          vy: -(Math.random() * 2.2 + 1.2), // Rising up
          vx: (Math.random() - 0.5) * 0.6,
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.05 + Math.random() * 0.05,
          alpha: 0.95,
          hue: Math.random() > 0.4 ? 45 : 195,
        });
      }
    };

    // Grid animation offset
    let gridOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer lerp
      pointer.x += (pointer.targetX - pointer.x) * 0.1;
      pointer.y += (pointer.targetY - pointer.y) * 0.1;

      // 2. Dong Son Drum & Lotus Hairline Motif
      const timeCenterX = width * 0.5;
      const timeCenterY = height * 0.45;

      [280, 480, 680].forEach((r, idx) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(timeCenterX, timeCenterY, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx % 2 === 0 ? 'rgba(251, 191, 36, 0.08)' : 'rgba(56, 189, 248, 0.06)';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([4, 12]);
        ctx.stroke();
        ctx.restore();
      });

      // 3. Ambient Pointer Glow
      if (pointer.isHovered) {
        const glowGrad = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          360
        );
        glowGrad.addColorStop(0, 'rgba(245, 158, 11, 0.08)');
        glowGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.04)');
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 360, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Render Shockwaves (Touch Ripple Effects)
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += (sw.maxRadius - sw.radius) * 0.08 + 1.5;
        sw.alpha *= 0.94;

        if (sw.alpha < 0.01 || sw.radius >= sw.maxRadius - 2) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.globalAlpha = sw.alpha;
        ctx.lineWidth = sw.lineWidth;
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 20;
        ctx.stroke();
        ctx.restore();
      }

      // 5. Render Particle Trail & Bursts
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - p.life / p.maxLife;

        if (p.life >= p.maxLife || p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // 6. Periodic Effervescent Air Fizz Spawner ("Sủi bọt khí")
      fizzTimer++;
      if (fizzTimer % 90 === 0) {
        const randomBubble = bubbles[Math.floor(Math.random() * bubbles.length)];
        if (randomBubble) {
          spawnFizzyStream(randomBubble.x, randomBubble.y, 10);
        }
        spawnFizzyStream(Math.random() * width, height - 10, 8);
      }

      // Render Fizzy Micro Air Bubbles
      for (let i = fizzyAirBubbles.length - 1; i >= 0; i--) {
        const fb = fizzyAirBubbles[i];
        fb.wobblePhase += fb.wobbleSpeed;
        fb.x += Math.sin(fb.wobblePhase) * 0.8 + fb.vx;
        fb.y += fb.vy;
        fb.alpha -= 0.005;
        fb.radius += 0.02;

        if (fb.alpha <= 0 || fb.y < -20) {
          fizzyAirBubbles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(fb.x, fb.y, fb.radius, 0, Math.PI * 2);
        
        const fbGrad = ctx.createRadialGradient(
          fb.x - fb.radius * 0.3,
          fb.y - fb.radius * 0.3,
          0.5,
          fb.x,
          fb.y,
          fb.radius
        );
        fbGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        fbGrad.addColorStop(0.5, `hsla(${fb.hue}, 90%, 70%, 0.4)`);
        fbGrad.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

        ctx.fillStyle = fbGrad;
        ctx.globalAlpha = Math.max(0, fb.alpha);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // 7. Render Fluid Water Bubbles ("Bóng Nước 3D")
      bubbles.forEach((b) => {
        b.phase += b.wobbleSpeed;
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -b.baseRadius) b.x = width + b.baseRadius;
        if (b.x > width + b.baseRadius) b.x = -b.baseRadius;
        if (b.y < -b.baseRadius) b.y = height + b.baseRadius;
        if (b.y > height + b.baseRadius) b.y = -b.baseRadius;

        const dx = pointer.x - b.x;
        const dy = pointer.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = 180;

        if (dist < minDist) {
          const force = (minDist - dist) / minDist;
          b.x -= (dx / dist) * force * 4;
          b.y -= (dy / dist) * force * 4;
        }

        b.radius = b.baseRadius + Math.sin(b.phase) * 4;

        ctx.save();

        const bubbleGrad = ctx.createRadialGradient(
          b.x - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          b.x,
          b.y,
          b.radius
        );

        if (theme === 'dark') {
          bubbleGrad.addColorStop(0, `hsla(${b.hue}, 90%, 75%, 0.35)`);
          bubbleGrad.addColorStop(0.4, `hsla(${b.hue}, 80%, 50%, 0.12)`);
          bubbleGrad.addColorStop(0.8, `hsla(${b.hue}, 90%, 30%, 0.05)`);
          bubbleGrad.addColorStop(1, `hsla(${b.hue}, 100%, 60%, 0.25)`);
        } else {
          bubbleGrad.addColorStop(0, `hsla(${b.hue}, 80%, 60%, 0.25)`);
          bubbleGrad.addColorStop(1, `hsla(${b.hue}, 70%, 40%, 0.08)`);
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubbleGrad;
        ctx.fill();

        ctx.strokeStyle = `hsla(${b.hue}, 90%, 65%, 0.4)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          b.x - b.radius * 0.35,
          b.y - b.radius * 0.35,
          b.radius * 0.45,
          Math.PI * 1.1,
          Math.PI * 1.7
        );
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        if (b.tag) {
          ctx.font = 'bold 9px monospace';
          ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.9)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(b.tag, b.x, b.y + b.radius + 14);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Ocean Park 1 Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-[14px] scale-105 opacity-35 transition-opacity duration-1000 mix-blend-screen"
        style={{ backgroundImage: `url(${oceanParkBg})` }}
      />

      {/* Dark Ambient Vignette Gradient */}
      <div className="absolute inset-0 bg-radial-vignette opacity-75" />

      {/* Canvas Layer for Particles, Touch Ripples & Water Bubbles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-90"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
