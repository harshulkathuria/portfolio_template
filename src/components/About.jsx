import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Copy, Check, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About = () => {
  const { personal, stats, terminalData } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyTerminal = () => {
    navigator.clipboard.writeText(JSON.stringify(terminalData.output, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const corePillars = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Performance First",
      desc: "Obsessed with lightning fast load times, minimal bundle weights, and high Core Web Vitals scores."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      title: "Resilient Architecture",
      desc: "Building rock-solid, typed codebases with comprehensive test coverage and defensive API designs."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
      title: "Empathy & Inclusion",
      desc: "Creating accessible, intuitive, and delightful interfaces designed for all humans and devices."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafting software with purpose and precision.
          </h2>
        </div>

        {/* Top Grid: Bio Narrative & Terminal Code Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Bio text & Quick stats */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              {personal.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal / Code Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden flex flex-col font-mono text-sm">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-slate-400" />
                    developer@terminal:~
                  </span>
                </div>
                <button
                  onClick={handleCopyTerminal}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors"
                  title="Copy JSON data"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Window Content */}
              <div className="p-5 flex-1 overflow-x-auto text-slate-300 space-y-3 leading-relaxed">
                <div className="text-emerald-400 flex items-center gap-2">
                  <span className="text-indigo-400">$</span> {terminalData.command}
                </div>

                <div className="text-slate-400">
                  <span className="text-purple-400">"{'currentRole'}"</span>: <span className="text-emerald-300">"{terminalData.output.currentRole}"</span>,
                </div>

                <div>
                  <span className="text-purple-400">"{'coreStack'}"</span>: [
                  <div className="pl-4 flex flex-wrap gap-1 my-1">
                    {terminalData.output.coreStack.map((tech, i) => (
                      <span key={i} className="text-amber-300">
                        "{tech}"{i < terminalData.output.coreStack.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                  ],
                </div>

                <div>
                  <span className="text-purple-400">"{'interests'}"</span>: [
                  <div className="pl-4 flex flex-wrap gap-1 my-1">
                    {terminalData.output.interests.map((item, i) => (
                      <span key={i} className="text-sky-300">
                        "{item}"{i < terminalData.output.interests.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                  ],
                </div>

                <div>
                  <span className="text-purple-400">"{'quote'}"</span>: <span className="text-indigo-300 italic">"{terminalData.output.quote}"</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Cards: Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
