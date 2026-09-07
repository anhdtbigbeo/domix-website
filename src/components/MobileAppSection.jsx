import React from 'react';
import { Smartphone, Download, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function MobileAppSection({ onNavigate }) {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-[#242424] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>DOMIX MOBILE ECOSYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              DOMIX IN YOUR POCKET.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-medium">
              Experience the power of DOMIX wherever you go.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
              Ứng dụng di động DOMIX AI đưa toàn bộ năng lực khởi tạo video, kịch bản và giọng đọc AI trực quan lên thiết bị di động iOS và Android của bạn.
            </p>

            {/* Store Readiness Indicators */}
            <div className="space-y-2 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hoàn thiện URL Privacy Policy & Điều khoản dịch vụ theo tiêu chuẩn Google Console</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Trang tiếp nhận Yêu cầu Xóa Tài khoản & Dữ liệu (/legal/delete-account) sẵn sàng</span>
              </div>
            </div>

            {/* Store Badges with Status */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* App Store */}
              <div className="bg-[#111111] border border-[#242424] rounded-xl px-5 py-3 flex items-center gap-3 opacity-90">
                <div className="text-left">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Download on the</span>
                  <span className="text-sm font-bold text-white">App Store</span>
                </div>
                <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
                  Coming Soon
                </span>
              </div>

              {/* Google Play */}
              <div className="bg-[#111111] border border-[#242424] rounded-xl px-5 py-3 flex items-center gap-3 opacity-90">
                <div className="text-left">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">GET IT ON</span>
                  <span className="text-sm font-bold text-white">Google Play</span>
                </div>
                <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
                  Coming Soon
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 italic">
              * Lưu ý: Đường link chính thức trên Store sẽ được công bố ngay sau khi hoàn tất kiểm duyệt App Store Connect & Google Play Console.
            </p>
          </div>

          {/* Right Mobile Visual Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="bg-[#0A0A0A] border-4 border-[#242424] rounded-[40px] p-5 shadow-2xl space-y-4">
                <div className="w-20 h-4 bg-[#111111] rounded-full mx-auto" />
                <div className="flex items-center justify-between text-xs font-bold text-white border-b border-[#242424] pb-2">
                  <span>DOMIX AI Mobile</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Build v2.6.0</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="bg-[#111111] p-3 rounded-xl border border-zinc-800 space-y-1">
                    <span className="text-[11px] font-bold text-indigo-300 block">AI Video Creator</span>
                    <p className="text-[10px] text-zinc-400">Tạo video từ prompt thoại hoặc văn bản trong 30s</p>
                  </div>
                  <div className="bg-[#111111] p-3 rounded-xl border border-zinc-800 space-y-1">
                    <span className="text-[11px] font-bold text-indigo-300 block">Voice Studio</span>
                    <p className="text-[10px] text-zinc-400">Thu âm & biến đổi giọng đọc AI trực tiếp</p>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <button 
                    onClick={() => onNavigate('/legal/delete-account')}
                    className="text-[11px] text-indigo-400 underline hover:text-indigo-300"
                  >
                    Xem chính sách Xóa tài khoản App
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
