import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink, Sparkles, Phone, Send } from 'lucide-react';

export default function FloatingChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      id: 'zalo',
      title: 'Cộng Đồng Zalo Support',
      sub: 'Tham gia nhóm Zalo hỗ trợ 24/7',
      url: 'https://zalo.me/g/r0grj2ikrlqcactahpi7',
      badge: 'ZALO GROUP',
      color: 'from-blue-600 to-cyan-500',
      icon: (
        <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center font-bold text-blue-400 shrink-0 text-xs font-mono">
          ZALO
        </div>
      )
    },
    {
      id: 'telegram',
      title: 'Telegram Community',
      sub: '@shoptikvn chính thức',
      url: 'https://t.me/shoptikvn',
      badge: 'TELEGRAM',
      color: 'from-sky-500 to-blue-600',
      icon: (
        <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
          <Send className="w-4 h-4 text-sky-300" />
        </div>
      )
    },
    {
      id: 'facebook',
      title: 'Facebook Fanpage',
      sub: 'DOMIX Technology Page',
      url: 'https://www.facebook.com/profile.php?id=61567232442735',
      badge: 'FANPAGE',
      color: 'from-blue-700 to-indigo-600',
      icon: (
        <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 fill-amber-300" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      )
    },
    {
      id: 'hotline',
      title: 'Hotline / Zalo Trực Tiếp',
      sub: '0375899199',
      url: 'tel:0375899199',
      badge: 'HOTLINE',
      color: 'from-amber-500 to-yellow-600',
      icon: (
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
        </div>
      )
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Contact Panel */}
      {isOpen && (
        <div className="w-84 p-5 rounded-3xl border border-amber-400/30 bg-white/[0.02] backdrop-blur-xl shadow-2xl space-y-4 mb-4 animate-fadeIn transition-all">
          <div className="flex items-center justify-between border-b border-amber-400/20 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-amber-300 text-sharp-crisp">
                KÊNH HỖ TRỢ TRỰC TUYẾN
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-200 leading-relaxed font-medium text-sharp-crisp">
            Chọn kênh liên hệ bên dưới để nhận tư vấn & trợ giúp trực tiếp từ đội ngũ DOMIX:
          </p>

          <div className="space-y-3">
            {contactLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-amber-400/50 backdrop-blur-md transition-all flex items-center justify-between group touch-ripple"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-white group-hover:text-amber-300 transition-colors text-sharp-crisp">
                        {item.title}
                      </span>
                      <span className="text-[9px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded font-bold">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-200 font-medium block text-sharp-crisp">
                      {item.sub}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating 3D Water Orb Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-0.5 rounded-full focus:outline-none touch-ripple"
        title="Bảng tương tác Hỗ trợ Trực tuyến Zalo & Telegram DOMIX"
      >
        {/* Pulsing Outer Water Ring Glow */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 opacity-70 blur-md group-hover:opacity-100 transition-opacity animate-pulse-glow" />

        {/* Floating Bubble Circle */}
        <div className="relative w-14 h-14 rounded-full bg-slate-950/20 backdrop-blur-xl border-2 border-amber-400/60 flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform bg-white/[0.02]">
          
          {isOpen ? (
            <X className="w-6 h-6 text-amber-300" />
          ) : (
            <div className="relative flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-amber-300 filter drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
              {/* Notification Badge Dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-slate-950 animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-slate-950" />
            </div>
          )}

        </div>
      </button>

    </div>
  );
}
