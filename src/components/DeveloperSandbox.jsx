import React, { useState } from 'react';
import { Code, Terminal, Copy, Check, Key, BookOpen, ExternalLink } from 'lucide-react';

export default function DeveloperSandbox() {
  const [activeLang, setActiveLang] = useState('javascript');
  const [copied, setCopied] = useState(false);
  const [simulatedApiKey, setSimulatedApiKey] = useState('');

  const codeSnippets = {
    javascript: `import { DomixAI } from '@domix/sdk';

const domix = new DomixAI({
  apiKey: 'dmx_live_984021893120'
});

// Render 4K AI Video from Script
const video = await domix.video.create({
  prompt: 'Cinematic product overview for DOMIX AI Ecosystem',
  resolution: '4K',
  fps: 60,
  voiceOver: {
    language: 'vi-VN',
    speaker: 'Nam_HaNoi_Pro'
  }
});

console.log('DOMIX Video Render Ready:', video.url);`,
    python: `from domix import DomixClient

client = DomixClient(api_key="dmx_live_984021893120")

# Generate Multimodal Content & Voice
response = client.video.generate(
    prompt="Cinematic product overview for DOMIX AI Ecosystem",
    resolution="4K",
    fps=60,
    voice_over={"lang": "vi-VN", "speaker": "Nam_HaNoi_Pro"}
)

print(f"Rendered Video Stream: {response.stream_url}")`,
    curl: `curl -X POST https://api.domix.ai/v2/video/generate \\
  -H "Authorization: Bearer dmx_live_984021893120" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Cinematic product overview for DOMIX AI Ecosystem",
    "resolution": "4K",
    "fps": 60
  }'`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateKey = () => {
    const key = 'dmx_test_' + Math.random().toString(36).substring(2, 12);
    setSimulatedApiKey(key);
  };

  return (
    <section className="py-24 bg-transparent relative border-t border-[#242424]/40" id="developers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Developer Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold">
              <Code className="w-3.5 h-3.5" />
              <span>DEVELOPER SDK & API HUB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              BUILD WITH DOMIX HIGH-THROUGHPUT API.
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Tích hợp sức mạnh của hệ sinh thái DOMIX AI trực tiếp vào nền tảng, ứng dụng di động hoặc quy trình làm việc tự động của riêng bạn thông qua API RESTful và SDK chính thức.
            </p>

            {/* Quick Benefits */}
            <div className="space-y-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Độ trễ phản hồi thấp (&lt; 15ms latency)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Hỗ trợ Webhook callback và Streaming sse</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Bảo mật dữ liệu chuẩn OAuth 2.0 & TLS 1.3</span>
              </div>
            </div>

            {/* API Key Generator Simulator */}
            <div className="bg-slate-950/30 backdrop-blur-xl p-4 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  API Key Simulator
                </span>
                <button
                  onClick={handleGenerateKey}
                  className="text-indigo-400 font-semibold hover:underline"
                >
                  Tạo Key thử nghiệm
                </button>
              </div>

              {simulatedApiKey && (
                <div className="p-2.5 bg-slate-950/40 backdrop-blur-md rounded-lg border border-white/10 text-xs font-mono text-emerald-400 flex items-center justify-between">
                  <span>{simulatedApiKey}</span>
                  <span className="text-[10px] text-zinc-500">Test Environment</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Interactive Code Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/35 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Header Bar */}
              <div className="bg-slate-900/40 backdrop-blur-md px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-zinc-400 ml-3 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    domix-sdk-example.{activeLang === 'javascript' ? 'js' : activeLang === 'python' ? 'py' : 'sh'}
                  </span>
                </div>

                {/* Language Switcher & Copy */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-slate-950/40 p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveLang('javascript')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeLang === 'javascript' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      JS
                    </button>
                    <button
                      onClick={() => setActiveLang('python')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeLang === 'python' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Python
                    </button>
                    <button
                      onClick={() => setActiveLang('curl')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeLang === 'curl' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      cURL
                    </button>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg bg-slate-900/40 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Syntax Display Box */}
              <div className="p-6 overflow-x-auto text-xs font-mono leading-relaxed text-indigo-200">
                <pre>{codeSnippets[activeLang]}</pre>
              </div>

              {/* Status bar */}
              <div className="bg-slate-950/40 backdrop-blur-md px-4 py-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>DOMIX API Gateway v2.6</span>
                <span className="text-emerald-400">Response Status: 200 OK</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
