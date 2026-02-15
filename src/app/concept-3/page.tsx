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
        <div className="text-[#C5A059]">
          <svg width="119" height="13" viewBox="0 0 238 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M237.822 25.0833H225.07V0.289062H228.435V21.8601H237.822V25.0833Z"/>
            <path d="M212.806 25.0833H209.299L207.67 19.0264H199.063L197.434 25.0833H193.892L200.728 0.289062H205.97L212.806 25.0833ZM203.101 3.8311L199.878 15.874H206.855L203.632 3.8311H203.101Z"/>
            <path d="M173.335 12.22H182.013V25.0776H179.427L179.179 21.6773H179.037C178.494 22.6927 177.703 23.5664 176.664 24.2984C175.625 25.0068 174.409 25.361 173.016 25.361C171.292 25.361 169.71 24.8415 168.27 23.8025C166.853 22.7635 165.731 21.2877 164.905 19.375C164.078 17.4386 163.665 15.2072 163.665 12.6805C163.665 10.1538 164.078 7.93417 164.905 6.02146C165.755 4.08515 166.888 2.59749 168.305 1.5585C169.746 0.519499 171.351 0 173.122 0C174.586 0 175.92 0.354204 177.125 1.06261C178.329 1.7474 179.333 2.70376 180.136 3.93166C180.962 5.13596 181.529 6.50554 181.836 8.04043H178.471C178.022 6.57638 177.314 5.41932 176.346 4.56923C175.401 3.71914 174.327 3.2941 173.122 3.2941C171.965 3.2941 170.926 3.67191 170.005 4.42755C169.084 5.18318 168.352 6.26941 167.809 7.68622C167.29 9.10304 167.03 10.7678 167.03 12.6805C167.03 14.5932 167.29 16.258 167.809 17.6748C168.352 19.0916 169.084 20.1778 170.005 20.9334C170.926 21.6891 171.965 22.0669 173.122 22.0669C174.09 22.0669 174.988 21.7599 175.814 21.146C176.641 20.5084 177.314 19.6701 177.833 18.6311C178.353 17.5685 178.636 16.4351 178.683 15.2308V15.1245H173.335V12.22Z"/>
            <path d="M150.932 25.0833H137.862V0.289062H150.932V3.51232H141.227V11.0214H150.401V14.2093H141.227V21.8601H150.932V25.0833Z"/>
            <path d="M125.097 25.0833H112.346V0.289062H115.711V21.8601H125.097V25.0833Z"/>
            <path d="M100.08 25.0833H96.5729L94.9436 19.0264H86.3364L84.7071 25.0833H81.165L88.0012 0.289062H93.2434L100.08 25.0833ZM90.3743 3.8311L87.1511 15.874H94.1289L90.9056 3.8311H90.3743Z"/>
            <path d="M70.6365 25.0833H66.6695L59.6916 15.9449H58.3102V25.0833H54.9453V0.289062H63.0212C64.3199 0.289062 65.5124 0.619653 66.5986 1.28083C67.7085 1.94201 68.5822 2.87475 69.2197 4.07904C69.8573 5.25972 70.1761 6.61751 70.1761 8.15239C70.1761 9.66366 69.8691 10.9978 69.2551 12.1549C68.6412 13.312 67.8265 14.2093 66.8111 14.8468C65.7958 15.4608 64.7095 15.7796 63.5525 15.8032L70.6365 25.0833ZM58.3102 12.757H62.9857C64.0484 12.757 64.9457 12.3438 65.6777 11.5173C66.4333 10.6672 66.8111 9.54559 66.8111 8.15239C66.8111 6.75919 66.4333 5.64935 65.6777 4.82287C64.9457 3.97278 64.0484 3.54774 62.9857 3.54774H58.3102V12.757Z"/>
            <path d="M40.2995 25.0833H36.9346V0.289062H40.2995V25.0833Z"/>
            <path d="M3.36494 25.0833H0V0.289062H5.7381L10.8741 20.3016H11.4054L16.5413 0.289062H22.2794V25.0833H18.9145V5.35418H18.3478L13.2472 25.0833H8.99678L3.93166 5.35418H3.36494V25.0833Z"/>
          </svg>
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
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden">
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
            <div className="text-[#C5A059] mb-2">
              <svg width="119" height="13" viewBox="0 0 238 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M237.822 25.0833H225.07V0.289062H228.435V21.8601H237.822V25.0833Z"/>
                <path d="M212.806 25.0833H209.299L207.67 19.0264H199.063L197.434 25.0833H193.892L200.728 0.289062H205.97L212.806 25.0833ZM203.101 3.8311L199.878 15.874H206.855L203.632 3.8311H203.101Z"/>
                <path d="M173.335 12.22H182.013V25.0776H179.427L179.179 21.6773H179.037C178.494 22.6927 177.703 23.5664 176.664 24.2984C175.625 25.0068 174.409 25.361 173.016 25.361C171.292 25.361 169.71 24.8415 168.27 23.8025C166.853 22.7635 165.731 21.2877 164.905 19.375C164.078 17.4386 163.665 15.2072 163.665 12.6805C163.665 10.1538 164.078 7.93417 164.905 6.02146C165.755 4.08515 166.888 2.59749 168.305 1.5585C169.746 0.519499 171.351 0 173.122 0C174.586 0 175.92 0.354204 177.125 1.06261C178.329 1.7474 179.333 2.70376 180.136 3.93166C180.962 5.13596 181.529 6.50554 181.836 8.04043H178.471C178.022 6.57638 177.314 5.41932 176.346 4.56923C175.401 3.71914 174.327 3.2941 173.122 3.2941C171.965 3.2941 170.926 3.67191 170.005 4.42755C169.084 5.18318 168.352 6.26941 167.809 7.68622C167.29 9.10304 167.03 10.7678 167.03 12.6805C167.03 14.5932 167.29 16.258 167.809 17.6748C168.352 19.0916 169.084 20.1778 170.005 20.9334C170.926 21.6891 171.965 22.0669 173.122 22.0669C174.09 22.0669 174.988 21.7599 175.814 21.146C176.641 20.5084 177.314 19.6701 177.833 18.6311C178.353 17.5685 178.636 16.4351 178.683 15.2308V15.1245H173.335V12.22Z"/>
                <path d="M150.932 25.0833H137.862V0.289062H150.932V3.51232H141.227V11.0214H150.401V14.2093H141.227V21.8601H150.932V25.0833Z"/>
                <path d="M125.097 25.0833H112.346V0.289062H115.711V21.8601H125.097V25.0833Z"/>
                <path d="M100.08 25.0833H96.5729L94.9436 19.0264H86.3364L84.7071 25.0833H81.165L88.0012 0.289062H93.2434L100.08 25.0833ZM90.3743 3.8311L87.1511 15.874H94.1289L90.9056 3.8311H90.3743Z"/>
                <path d="M70.6365 25.0833H66.6695L59.6916 15.9449H58.3102V25.0833H54.9453V0.289062H63.0212C64.3199 0.289062 65.5124 0.619653 66.5986 1.28083C67.7085 1.94201 68.5822 2.87475 69.2197 4.07904C69.8573 5.25972 70.1761 6.61751 70.1761 8.15239C70.1761 9.66366 69.8691 10.9978 69.2551 12.1549C68.6412 13.312 67.8265 14.2093 66.8111 14.8468C65.7958 15.4608 64.7095 15.7796 63.5525 15.8032L70.6365 25.0833ZM58.3102 12.757H62.9857C64.0484 12.757 64.9457 12.3438 65.6777 11.5173C66.4333 10.6672 66.8111 9.54559 66.8111 8.15239C66.8111 6.75919 66.4333 5.64935 65.6777 4.82287C64.9457 3.97278 64.0484 3.54774 62.9857 3.54774H58.3102V12.757Z"/>
                <path d="M40.2995 25.0833H36.9346V0.289062H40.2995V25.0833Z"/>
                <path d="M3.36494 25.0833H0V0.289062H5.7381L10.8741 20.3016H11.4054L16.5413 0.289062H22.2794V25.0833H18.9145V5.35418H18.3478L13.2472 25.0833H8.99678L3.93166 5.35418H3.36494V25.0833Z"/>
              </svg>
            </div>
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
