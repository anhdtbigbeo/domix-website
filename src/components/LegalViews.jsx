import React, { useState } from 'react';
import { ShieldCheck, Trash2, FileText, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

export default function LegalViews({ subRoute, onNavigate, lang, theme }) {
  const [deleteEmail, setDeleteEmail] = useState('');
  const [deleteScope, setDeleteScope] = useState('full');
  const [deleteReason, setDeleteReason] = useState('');
  const [deleteSubmitted, setDeleteSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    if (!deleteEmail) return;
    const generatedTicket = 'DOMIX-DEL-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setDeleteSubmitted(true);
  };

  return (
    <div className="py-28 min-h-screen relative bg-grid-pattern transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'vi' ? 'Quay lại Trang chủ DOMIX' : 'Back to DOMIX Home'}
        </button>

        {/* PRIVACY POLICY VIEW */}
        {subRoute === 'privacy-policy' && (
          <div className="glass-panel p-6 sm:p-10 space-y-8 border border-blue-500/20 shadow-2xl">
            <div className="border-b border-slate-200 dark:border-[#242424] pb-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-600 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Data Privacy & Security Compliant</span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'vi' ? 'Chính Sách Quyền Riêng Tư (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                {lang === 'vi' ? 'Cập nhật: 07/09/2026 | Áp dụng cho Web & Mobile App DOMIX AI' : 'Last updated: 09/07/2026 | Web & Mobile App'}
              </p>
            </div>

            <div className="space-y-6 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
              <section className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase">1. Introduction</h3>
                <p>
                  {lang === 'vi' 
                    ? 'CÔNG TY TNHH CÔNG NGHỆ DOMIX ("DOMIX") cam kết bảo vệ dữ liệu cá nhân của người dùng trên toàn bộ hệ thống ứng dụng di động iOS, Android và website.'
                    : 'DOMIX TECHNOLOGY COMPANY LIMITED ("DOMIX") is dedicated to protecting user personal data across all web and mobile app platforms.'}
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase">2. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-zinc-400">
                  <li><strong>Account Data:</strong> Email address, user name, profile avatar.</li>
                  <li><strong>Device Data:</strong> IP address, operating system, unique mobile device identifiers.</li>
                  <li><strong>User Content:</strong> Prompts, text scripts, uploaded image/audio files for AI processing.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase">3. Data Retention & Account Deletion</h3>
                <p>
                  {lang === 'vi'
                    ? 'Người dùng có quyền yêu cầu xóa hoàn toàn tài khoản và dữ liệu cá nhân bất kỳ lúc nào tại trang:'
                    : 'Users have full rights to request complete account and data deletion at any time via:'}{' '}
                  <button onClick={() => onNavigate('/legal/delete-account')} className="text-blue-600 font-bold underline">
                    Account Deletion Request (/legal/delete-account)
                  </button>
                </p>
              </section>

              <section className="space-y-2 border-t border-slate-200 dark:border-[#242424] pt-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase">Contact Data Protection Officer</h3>
                <p>Email: <strong>domix@domixtik.com</strong></p>
              </section>
            </div>
          </div>
        )}

        {/* ACCOUNT DELETION VIEW */}
        {subRoute === 'delete-account' && (
          <div className="glass-panel p-6 sm:p-10 space-y-8 border border-red-500/30 shadow-2xl">
            <div className="border-b border-slate-200 dark:border-[#242424] pb-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-bold">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Mandatory Data Protection Policy Requirement</span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'vi' ? 'Yêu Cầu Xóa Tài Khoản & Dữ Liệu DOMIX' : 'Account & Data Deletion Request'}
              </h1>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                {lang === 'vi'
                  ? 'Tuân thủ quy định bảo mật dữ liệu cá nhân quốc tế. Cung cấp phương thức cho phép người dùng xóa tài khoản và dữ liệu liên quan.'
                  : 'Compliant with international data privacy guidelines for user data deletion.'}
              </p>
            </div>

            {deleteSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {lang === 'vi' ? 'Yêu cầu xóa tài khoản đã được ghi nhận!' : 'Account deletion request submitted successfully!'}
                    </h3>
                    <p className="text-xs text-emerald-600 font-mono">Ticket ID: <strong className="font-bold">{ticketId}</strong></p>
                  </div>
                </div>

                <div className="bg-slate-100 dark:bg-[#050505] p-4 rounded-xl text-xs text-slate-700 dark:text-zinc-300 space-y-2">
                  <p><strong>Email:</strong> {deleteEmail}</p>
                  <p><strong>Scope:</strong> {deleteScope === 'full' ? 'Full account & all media data' : 'Uploaded media files only'}</p>
                  <p><strong>Processing Timeframe:</strong> Completed within 7 - 30 business days.</p>
                </div>

                <button
                  onClick={() => { setDeleteSubmitted(false); setDeleteEmail(''); }}
                  className="btn-secondary text-xs !py-2 !px-4"
                >
                  {lang === 'vi' ? 'Gửi yêu cầu mới' : 'Submit another request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleDeleteSubmit} className="space-y-6">
                <div className="bg-slate-100 dark:bg-[#0A0A0A] p-4 rounded-xl border border-slate-200 dark:border-[#242424] space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    {lang === 'vi' ? 'Lưu ý trước khi thực hiện xóa tài khoản:' : 'Important notes before proceeding:'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-zinc-400">
                    <li>{lang === 'vi' ? 'Hành động này sẽ xóa vĩnh viễn quyền truy cập ứng dụng DOMIX AI của bạn.' : 'This action permanently revokes access to your DOMIX AI app account.'}</li>
                    <li>{lang === 'vi' ? 'Toàn bộ file kịch bản, video và giọng đọc AI đã lưu sẽ bị hủy.' : 'All saved scripts, video renders, and audio files will be removed.'}</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-white mb-2">
                      {lang === 'vi' ? 'Nhập địa chỉ Email tài khoản DOMIX cần xóa *' : 'Enter registered DOMIX account email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={deleteEmail}
                      onChange={(e) => setDeleteEmail(e.target.value)}
                      placeholder="account@domain.com"
                      className="w-full bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-[#242424] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-white mb-2">
                      {lang === 'vi' ? 'Chọn phạm vi xóa dữ liệu' : 'Select deletion scope'}
                    </label>
                    <select
                      value={deleteScope}
                      onChange={(e) => setDeleteScope(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-[#242424] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                    >
                      <option value="full">Full account & all associated AI data</option>
                      <option value="media">Uploaded media files only</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary !bg-red-600 hover:!bg-red-700 justify-center text-sm py-3 shadow-lg shadow-red-600/20"
                >
                  <Trash2 className="w-4 h-4" />
                  {lang === 'vi' ? 'Gửi Yêu Cầu Xóa Tài Khoản' : 'Submit Deletion Request'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* TERMS */}
        {subRoute === 'terms' && (
          <div className="glass-panel p-6 sm:p-10 space-y-6">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
            <p className="text-xs text-slate-600 dark:text-zinc-400">Usage terms for DOMIX AI website & mobile applications.</p>
          </div>
        )}

      </div>
    </div>
  );
}
