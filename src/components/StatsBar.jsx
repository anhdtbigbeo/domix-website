import React from 'react';
import { Cpu, ShieldCheck, Zap, Server, Activity } from 'lucide-react';
import { translations } from '../i18n/translations';

export default function StatsBar({ lang, theme }) {
  const t = translations[lang].stats;

  const stats = [
    {
      label: t.stat1Label,
      value: t.stat1Val,
      desc: t.stat1Desc,
      icon: Cpu,
      iconColor: 'text-amber-400',
      valColor: 'text-amber-300 drop-shadow-[0_0_14px_rgba(252,211,77,0.9)]'
    },
    {
      label: t.stat2Label,
      value: t.stat2Val,
      desc: t.stat2Desc,
      icon: Server,
      iconColor: 'text-amber-400',
      valColor: 'text-amber-300 drop-shadow-[0_0_14px_rgba(252,211,77,0.9)]'
    },
    {
      label: t.stat3Label,
      value: t.stat3Val,
      desc: t.stat3Desc,
      icon: Zap,
      iconColor: 'text-amber-400',
      valColor: 'text-amber-300 drop-shadow-[0_0_14px_rgba(252,211,77,0.9)]'
    },
    {
      label: t.stat4Label,
      value: t.stat4Val,
      desc: t.stat4Desc,
      icon: Activity,
      iconColor: 'text-amber-400',
      valColor: 'text-amber-300 drop-shadow-[0_0_14px_rgba(252,211,77,0.9)]'
    },
    {
      label: t.stat5Label,
      value: t.stat5Val,
      desc: t.stat5Desc,
      icon: ShieldCheck,
      iconColor: 'text-amber-400',
      valColor: 'text-amber-300 drop-shadow-[0_0_14px_rgba(252,211,77,0.9)]'
    }
  ];

  return (
    <div className={`w-full py-8 border-y transition-colors ${
      theme === 'dark' ? 'bg-transparent border-white/10' : 'bg-slate-100/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all space-y-2 group shadow-xl ${
                  theme === 'dark' 
                    ? 'bg-slate-950/70 border-white/15 hover:bg-slate-900/90 hover:border-amber-400/60 backdrop-blur-md' 
                    : 'bg-white border-slate-200 hover:border-blue-500/40 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                    {item.label}
                  </span>
                  <IconComponent className={`w-4 h-4 ${item.iconColor} group-hover:scale-110 transition-transform filter drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]`} />
                </div>
                <div className={`text-xl sm:text-2xl font-black tracking-tight font-mono ${item.valColor}`}>
                  {item.value}
                </div>
                <p className="text-[11px] text-zinc-100 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
