import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    department: 'sales',
    message: '',
    agreePrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreePrivacy) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-24 bg-transparent relative border-t border-[#242424]/40" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                LIÊN HỆ VỚI CHÚNG TÔI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                LET'S BUILD WITH AI.
              </h2>
              <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                Bạn đang tìm kiếm giải pháp AI cho doanh nghiệp hoặc muốn hợp tác cùng DOMIX? Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Email Liên Hệ</span>
                    <a href="mailto:domix@domixtik.com" className="text-xs font-mono text-amber-300 font-bold hover:underline">domix@domixtik.com</a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">SĐT / Hotline Doanh Nghiệp</span>
                    <a href="tel:0375899199" className="text-xs font-mono text-amber-300 font-bold hover:underline">0375899199</a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Building className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Trụ Sở Doanh Nghiệp</span>
                    <span className="text-xs text-zinc-200 font-medium">Ngọc Trai 6-142, Vinhomes Ocean Park, Xã Gia Lâm, TP. Hà Nội, Việt Nam</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold text-blue-400 text-xs font-mono">
                    ZALO
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Cộng Đồng Zalo Support</span>
                    <a href="https://zalo.me/g/r0grj2ikrlqcactahpi7" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-amber-300 font-bold hover:underline flex items-center gap-1">
                      Nhóm Zalo Trợ Giúp 24/7 ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-xs">
                    TG
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Telegram Channel</span>
                    <a href="https://t.me/shoptikvn" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-amber-300 font-bold hover:underline flex items-center gap-1">
                      @shoptikvn Telegram ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-amber-300" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Facebook Fanpage Chính Thức</span>
                    <a href="https://www.facebook.com/profile.php?id=61567232442735" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-amber-300 font-bold hover:underline flex items-center gap-1">
                      DOMIX Technology Facebook Page ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 space-y-2 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Pháp Nhân</span>
                    <span className="text-xs text-zinc-200 font-medium">CÔNG TY TNHH CÔNG NGHỆ DOMIX (MST: 0111575532)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 border border-[#242424] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Yêu cầu đã được gửi thành công!</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Cảm ơn bạn đã liên hệ với DOMIX. Bộ phận tương ứng sẽ phản hồi qua email trong vòng 24h làm việc.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs !py-2 !px-4"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-[#242424] pb-4">
                    Gửi Thông Tin Yêu Cầu Hợp Tác & Trợ Giúp
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Họ và tên *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Email công việc *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Tên công ty / Tổ chức</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Tên doanh nghiệp của bạn"
                        className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Phòng ban cần liên hệ</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full bg-slate-950/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 backdrop-blur-sm"
                      >
                        <option value="sales">Kinh doanh & Giải pháp Doanh nghiệp</option>
                        <option value="tech">Hỗ trợ Kỹ thuật & API</option>
                        <option value="legal">Pháp lý & Quyền riêng tư</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Nội dung tin nhắn *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mô tả chi tiết nhu cầu hoặc thắc mắc của bạn..."
                      className="w-full bg-slate-950/40 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 backdrop-blur-sm"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="privacyCheck"
                      required
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="rounded border-[#242424] text-indigo-600 focus:ring-0"
                    />
                    <label htmlFor="privacyCheck" className="text-xs text-zinc-400">
                      Tôi đồng ý với <span className="text-indigo-400 font-semibold">Chính sách Quyền riêng tư</span> của DOMIX.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreePrivacy}
                    className="w-full btn-primary justify-center text-xs py-3"
                  >
                    {isSubmitting ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message (Gửi Yêu Cầu)</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
