
import React, { useState } from 'react';
import Section from './Section';
import { Mail, MapPin, Send, CheckCircle2, Clock, GitBranch, Globe, MessageSquare, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const INQUIRY_PRESETS = [
  'Full-Time Engineering Role',
  'Frontend Architecture / React 19',
  'Full Stack MVP Development',
  'Code Audit & Performance Tuning',
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: INQUIRY_PRESETS[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('msiyab10492@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00BFFF', '#8A2BE2', '#00FFFF', '#FF1493'],
      });
    }, 1000);
  };

  return (
    <>
      <Section id="contact" title="Get In Touch" className="bg-slate-50 dark:bg-[#060912] relative overflow-hidden transition-colors duration-500">
        {/* Ambient background blur */}
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct channels & Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Available for Hire
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Let's engineer something extraordinary together.
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 leading-relaxed">
                  Whether you have an upcoming project, are building a high-performing engineering team, or want to discuss full-stack architecture, my inbox is always open.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-3">
                <div
                  onClick={handleCopyEmail}
                  className="group cursor-pointer p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 hover:border-neon-blue dark:hover:border-neon-cyan/40 transition-all duration-200 flex items-center justify-between shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#141d33] text-neon-blue dark:text-neon-cyan">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-gray-400 block">Direct Email:</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                        msiyab10492@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white flex items-center gap-1 font-mono">
                    {copiedEmail ? (
                      <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 flex items-center gap-3 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#141d33] text-neon-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-gray-400 block">Location:</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Islamabad, Pakistan • Global Remote
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 flex items-center gap-3 shadow-sm">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#141d33] text-neon-blue">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-gray-400 block">Typical Response:</span>
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Within 4 Hours (Standard Working Days)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-gray-400 block mb-3">
                  Developer Networks
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-neon-blue dark:hover:border-neon-cyan transition-all shadow-sm"
                  >
                    <GitBranch className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-neon-blue dark:hover:border-neon-cyan transition-all shadow-sm"
                  >
                    <Globe className="w-4 h-4 text-neon-purple" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#0b1220]/90 border border-slate-200 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm dark:shadow-xl backdrop-blur-sm relative">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in-up">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500 dark:text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Message Transmitted!</h4>
                    <p className="text-sm text-slate-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="text-neon-blue dark:text-neon-cyan font-bold">{formData.name}</span>. Your inquiry regarding "{formData.subject}" has been queued. Siab will reply to{' '}
                      <span className="font-mono text-neon-purple">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: INQUIRY_PRESETS[0], message: '' });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-[#141f36] hover:bg-slate-200 dark:hover:bg-[#1a2744] text-xs font-semibold text-slate-800 dark:text-white border border-slate-200 dark:border-gray-700 transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-gray-800/80 mb-4">
                      <MessageSquare className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                        Direct Inquiry Portal
                      </span>
                    </div>

                    {/* Preset topic pills */}
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400 block mb-2">
                        Inquiry Focus:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_PRESETS.map(preset => (
                          <button
                            type="button"
                            key={preset}
                            onClick={() => setFormData({ ...formData, subject: preset })}
                            className={`text-[11px] px-3 py-1 rounded-lg border transition-all ${
                              formData.subject === preset
                                ? 'bg-neon-blue/15 border-neon-blue text-neon-blue dark:text-neon-cyan font-semibold'
                                : 'bg-slate-100 dark:bg-[#101728] border-slate-200 dark:border-gray-800 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            {preset}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0e1628] border border-slate-300 dark:border-gray-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-neon-blue dark:focus:border-neon-cyan transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0e1628] border border-slate-300 dark:border-gray-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-neon-blue dark:focus:border-neon-cyan transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1.5">
                        Project Overview or Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your timeline, tech requirements, or role details..."
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0e1628] border border-slate-300 dark:border-gray-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-neon-blue dark:focus:border-neon-cyan transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan hover:opacity-95 transition-all duration-300 shadow-lg shadow-neon-blue/20 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Modern High-Craft Footer */}
      <footer className="bg-slate-100 dark:bg-[#05070d] border-t border-slate-200 dark:border-gray-900 py-10 text-xs text-slate-500 dark:text-gray-400 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-slate-900 dark:text-white tracking-wider font-mono">
              SIAB AHMAD KHAN
            </span>
            <span className="text-slate-400 dark:text-gray-600">/</span>
            <span className="text-slate-500 dark:text-gray-400 font-mono text-[11px]">PORTFOLIO V3.4</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-600 dark:text-gray-400">
            <span>React 19</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>

          <div className="text-slate-500 dark:text-gray-400 text-[11px]">
            &copy; {new Date().getFullYear()} Siab Ahmad Khan. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;

