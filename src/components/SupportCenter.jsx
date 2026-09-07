import React, { useState } from 'react';
import { Search, HelpCircle, ChevronDown, BookOpen, Shield, CreditCard, User, Wrench, MessageSquare, ArrowRight } from 'lucide-react';

export default function SupportCenter({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { title: 'Getting Started', icon: BookOpen, desc: 'Hướng dẫn cài đặt và bắt đầu nhanh' },
    { title: 'Account & Security', icon: User, desc: 'Bảo mật tài khoản và xác thực' },
    { title: 'DOMIX AI Features', icon: HelpCircle, desc: 'Chi tiết tính năng Video, Voice, Image' },
    { title: 'Billing & Subscriptions', icon: CreditCard, desc: 'Thanh toán và quản lý gói dịch vụ' },
    { title: 'Technical Issues', icon: Wrench, desc: 'Xử lý lỗi kỹ thuật và API' },
    { title: 'Privacy & Data', icon: Shield, desc: 'Quyền riêng tư và xóa dữ liệu' }
  ];

  const faqs = [
    {
      q: 'DOMIX là gì?',
      a: 'DOMIX là công ty công nghệ tập trung nghiên cứu và phát triển các sản phẩm, giải pháp ứng dụng trí tuệ nhân tạo (AI) trong sáng tạo nội dung, tự động hóa quy trình và vận hành số cho cá nhân, nhà sáng tạo và doanh nghiệp.'
    },
    {
      q: 'DOMIX AI là gì?',
      a: 'DOMIX AI là nền tảng workspace sáng tạo tích hợp các module AI Video, AI Image, AI Voice, AI Content và Automation vào một quy trình làm việc duy nhất, giúp tối ưu thời gian sản xuất nội dung.'
    },
    {
      q: 'DOMIX phục vụ ai?',
      a: 'DOMIX phục vụ các Nhà sáng tạo nội dung (Creators), Marketers, Đội ngũ E-commerce, Doanh nghiệp chuyển đổi số và các Nhà phát triển phần mềm (Developers).'
    },
    {
      q: 'DOMIX có ứng dụng mobile không?',
      a: 'DOMIX phát triển các ứng dụng di động cho cả iOS và Android. Bạn có thể dễ dàng trải nghiệm và đồng bộ dữ liệu đám mây.'
    },
    {
      q: 'Làm thế nào để liên hệ bộ phận hỗ trợ DOMIX?',
      a: 'Bạn có thể gửi tin nhắn qua trang Liên hệ (/contact), gọi hotline 0375899199 hoặc gửi email về domix@domixtik.com để được hỗ trợ nhanh chóng.'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-transparent relative border-t border-[#242424]/40" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search Bar */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            TRUNG TÂM HỖ TRỢ & HƯỚNG DẪN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            DOMIX SUPPORT CENTER
          </h2>
          <p className="text-sm text-zinc-200 font-medium">
            Tìm kiếm câu trả lời nhanh chóng cho các thắc mắc về sản phẩm, tài khoản và công nghệ DOMIX.
          </p>

          <div className="relative max-w-xl mx-auto pt-2">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm hướng dẫn, lỗi kỹ thuật, tài khoản..."
              className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400 font-medium"
            />
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="glass-card-interactive p-6 space-y-3 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-base font-bold text-white">{cat.title}</h3>
                <p className="text-xs text-zinc-200 font-medium">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Câu Hỏi Thường Gặp (FAQ)
          </h3>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="glass-panel overflow-hidden border border-white/10">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/10 pt-3 bg-slate-950/20 backdrop-blur-md">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-8 text-center bg-slate-950/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-3">
            <h4 className="text-base font-bold text-white">Bạn vẫn cần trợ giúp thêm?</h4>
            <p className="text-xs text-zinc-400">Đội ngũ hỗ trợ kỹ thuật của DOMIX luôn sẵn sàng giải đáp mọi thắc mắc.</p>
            <button 
              onClick={() => onNavigate('/contact')}
              className="btn-primary text-xs !py-2.5 !px-6 inline-flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Gửi yêu cầu hỗ trợ</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
