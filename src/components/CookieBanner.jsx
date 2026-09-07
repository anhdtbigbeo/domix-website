import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieBanner({ onNavigate }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('domix_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('domix_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('domix_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-fadeIn">
      <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl relative">
        <button 
          onClick={handleReject}
          className="absolute top-3 right-3 text-zinc-500 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-bold text-white">Quyền riêng tư & Cookie</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Chúng tôi sử dụng cookie để cải thiện trải nghiệm người dùng và phân tích lưu lượng. Xem chi tiết tại <button onClick={() => onNavigate('/legal/cookie-policy')} className="text-indigo-400 underline hover:text-indigo-300">Cookie Policy</button>.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleAccept}
                className="btn-primary text-xs !py-1.5 !px-4"
              >
                <Check className="w-3.5 h-3.5" />
                Chấp nhận tất cả
              </button>
              <button
                onClick={handleReject}
                className="btn-secondary text-xs !py-1.5 !px-4"
              >
                Từ chối
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
