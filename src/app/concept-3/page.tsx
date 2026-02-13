"use client";

import React from 'react';

const services = [
  "Слияния и поглощения (М&A)",
  "Купля-продажа бизнеса",
  "Инвестиционные сделки",
  "Совместные предприятия (JV) и партнерства",
  "Корпоративная практика. Корпоративные реструктуризации",
  "Венчурные проекты",
  "Международные сделки",
  "Коммерческая практика",
  "Личное благосостояние",
  "Интеллектуальная собственность (IP)",
];

export default function Concept3() {
  return (
    <div className="min-h-screen bg-[#1a0a10] text-white antialiased selection:bg-[#C5A059] selection:text-white font-sans-g">
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css');
        @import url('https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-mono/style.css');

        .font-sans-g { font-family: 'Geist', sans-serif; }
        .font-mono-g { font-family: 'Geist Mono', monospace; }

        .hero-title {
          font-size: clamp(2.5rem, 5.5vw, 6rem);
          line-height: 1.05;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes widthGrow {
          from { width: 0; }
          to { width: 80px; }
        }
        .anim { animation: fadeUp 0.8s ease-out forwards; opacity: 0; }
        .anim-d1 { animation-delay: 0.15s; }
        .anim-d2 { animation-delay: 0.3s; }
        .anim-d3 { animation-delay: 0.45s; }
        .anim-d4 { animation-delay: 0.6s; }
        .anim-fade { animation: fadeIn 1.2s ease-out forwards; opacity: 0; }
        .anim-line { animation: widthGrow 1s ease-out 0.8s forwards; width: 0; }

        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .scroll-hint { animation: bounce-down 2s ease-in-out infinite; }
      `}</style>

      {/* Навигация */}
      <nav className="fixed w-full z-50 top-0 px-6 py-5 md:px-12 flex justify-between items-center bg-[#1a0a10]/60 backdrop-blur-md">
        <div className="text-xs tracking-[0.25em] font-medium uppercase text-[#C5A059]">
          Миралигал
        </div>
        <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-white/50">
          <a href="#hero" className="hover:text-white transition-colors duration-300">Главная</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">Практика</a>
          <a href="#footer" className="hover:text-white transition-colors duration-300">Контакты</a>
        </div>
        <div className="md:hidden">
          <div className="space-y-1.5 cursor-pointer">
            <span className="block w-6 h-0.5 bg-white/60"></span>
            <span className="block w-6 h-0.5 bg-white/60"></span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <img
          src="/scales.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Градиент для лучшей читаемости */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10] via-[#1a0a10]/40 to-transparent" />

        {/* Контент внизу */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-12 md:pb-20">
          {/* Аватарка */}
          <div className="mb-8 anim anim-d1">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-2 ring-[#C5A059]/30 ring-offset-4 ring-offset-[#1a0a10]">
              <img
                src="/maria-avatar.png"
                alt="Мария Мирошникова"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Заголовок */}
          <h1 className="hero-title font-medium tracking-tight anim anim-d2">
            Юридическая практика<br />
            адвоката Марии Мирошниковой
          </h1>
        </div>

        {/* Иконка скролла вниз */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-10 scroll-hint">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Блок с описанием */}
      <section className="relative bg-[#1a0a10] overflow-hidden">
        {/* Декоративное число */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-bold text-white/[0.015] leading-none select-none pointer-events-none">
          25
        </div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-32">
          {/* Золотая линия-акцент */}
          <div className="anim-line h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent mb-12 md:mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7 anim anim-d4">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/80 font-light">
                Мария — ваш надежный юридический советник с опытом более <span className="text-[#C5A059] font-normal">25 лет</span> по вопросам создания и развития бизнеса, совершения инвестиций, покупки и продажи активов, управления активами и личным благосостоянием.
              </p>
            </div>
            <div className="md:col-span-5 md:flex md:items-end">
              <div className="border-l-2 border-[#C5A059]/20 pl-6">
                <p className="text-base md:text-lg text-white/40 leading-relaxed">
                  Помогает найти оптимальное решение в нестандартной ситуации, опираясь на лучшие юридические практики.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Области практики */}
      <section id="services" className="bg-[#1a0a10] border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 md:mb-20">
            <h2 className="text-2xl md:text-4xl text-white/90 font-light tracking-tight">
              Области практики
            </h2>
            <span className="text-xs text-[#C5A059] tracking-[0.3em] uppercase font-medium mt-4 md:mt-0">Миралигал</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-white/5">
            {services.map((title, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-5 py-6 px-5 border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#C5A059] group-hover:h-1/2 transition-all duration-300"></span>
                <span className="font-mono-g text-sm text-[#C5A059]/50 group-hover:text-[#C5A059] transition-colors w-7 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg md:text-xl text-white/50 group-hover:text-white/90 transition-colors duration-300">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#120610] border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-14 flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <div>
            <h3 className="text-lg font-medium text-[#C5A059] mb-2">Miralegal</h3>
            <p className="text-white/25 text-xs max-w-xs leading-relaxed">
              Эксклюзивная юридическая практика для бизнеса и частных лиц.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a href="mailto:contact@miralegal.ru" className="text-sm text-white/60 hover:text-[#C5A059] transition-colors">
              contact@miralegal.ru
            </a>
            <span className="text-xs text-white/25">Москва, Россия</span>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 mt-10 pt-6 border-t border-white/5 flex justify-between text-[10px] text-white/15 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Miralegal</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
