"use client";

import React from 'react';

const services = [
  { num: "01", title: "Слияния и поглощения", sub: "Mergers & Acquisitions" },
  { num: "02", title: "Купля-продажа бизнеса", sub: "Transaction Support" },
  { num: "03", title: "Инвестиционные сделки", sub: "Investments" },
  { num: "04", title: "Совместные предприятия", sub: "Partnerships & JV" },
  { num: "05", title: "Корпоративная практика", sub: "Restructuring" },
  { num: "06", title: "Венчурные проекты", sub: "Venture Capital" },
  { num: "07", title: "Международные сделки", sub: "Cross-border" },
  { num: "08", title: "Личное благосостояние", sub: "Private Wealth" },
  { num: "09", title: "Интеллектуальная собственность", sub: "IP Rights" },
];

export default function Concept2() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] antialiased selection:bg-[#0D2419] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        .font-serif-c { font-family: 'Cormorant Garamond', serif; }
        .font-sans-c { font-family: 'Manrope', sans-serif; }

        @keyframes customFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-load { animation: customFadeIn 1s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.5s; }
        .delay-500 { animation-delay: 0.8s; }

        .hover-underline-animation {
          display: inline-block;
          position: relative;
        }
        .hover-underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #121212;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>

      {/* Навигация */}
      <nav className="fixed w-full z-50 top-0 px-6 py-8 md:px-12 flex justify-between items-center bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-gray-100/50">
        <img src="/logo.svg" alt="Миралигал" className="h-3 md:h-3.5" />
        <div className="hidden md:flex gap-10 text-sm font-sans-c tracking-wide font-medium text-[#121212]/80">
          <a href="#" className="hover-underline-animation transition-colors hover:text-[#121212]">Обо мне</a>
          <a href="#practice" className="hover-underline-animation transition-colors hover:text-[#121212]">Практика</a>
          <a href="#footer" className="hover-underline-animation transition-colors hover:text-[#121212]">Контакты</a>
        </div>
        <div className="md:hidden">
          <div className="space-y-1.5 cursor-pointer">
            <span className="block w-6 h-0.5 bg-[#121212]"></span>
            <span className="block w-6 h-0.5 bg-[#121212]"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto min-h-screen flex flex-col justify-between">
        <div className="flex flex-col gap-12 lg:gap-24 mt-8">

          {/* Фото + Заголовок */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12 animate-load delay-100">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
                <img src="/maria-avatar.png" alt="Мария Мирошникова" className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="lg:col-span-8 animate-load delay-200">
              <h1 className="font-serif-c text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-[#121212] font-normal tracking-tight">
                Юридическая практика <br />
                <span className="text-[#8c8c8c] italic relative">
                  адвоката г. Москвы
                  <span className="hidden md:block absolute top-1/2 -right-32 w-24 h-[1px] bg-[#0D2419]/50"></span>
                </span><br />
                Марии Мирошниковой
              </h1>
            </div>
          </div>

          {/* Описание */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="hidden lg:block lg:col-span-6"></div>
            <div className="lg:col-span-6 animate-load delay-300 pl-0 lg:pl-12">
              <p className="font-sans-c text-lg md:text-xl leading-relaxed text-[#121212]/80 font-light border-l border-[#0D2419] pl-6">
                Мария — ваш надежный юридический советник с опытом более <span className="font-medium text-[#121212]">25 лет</span> по вопросам создания и развития бизнеса, совершения инвестиций, покупки и продажи активов.
              </p>
              <p className="font-sans-c text-base text-[#8c8c8c] mt-6 pl-6">
                Помогаю найти оптимальное решение в нестандартной ситуации, опираясь на лучшие международные практики.
              </p>
            </div>
          </div>

        </div>

        {/* Факты */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-8 border-t border-gray-200/60 animate-load delay-500">
          <div className="col-span-2 md:col-span-1 flex items-end">
            <span className="font-serif-c italic text-2xl text-[#0D2419]">Миралигал</span>
          </div>
          <div>
            <span className="block font-serif-c text-3xl md:text-4xl text-[#0D2419] mb-1">25+</span>
            <span className="block font-sans-c text-xs font-bold tracking-widest uppercase text-[#8c8c8c]">Лет опыта</span>
          </div>
          <div>
            <span className="block font-serif-c text-3xl md:text-4xl text-[#0D2419] mb-1">80+</span>
            <span className="block font-sans-c text-xs font-bold tracking-widest uppercase text-[#8c8c8c]">Проектов</span>
          </div>
          <div>
            <span className="block font-serif-c text-3xl md:text-4xl text-[#0D2419] mb-1">$100M+</span>
            <span className="block font-sans-c text-xs font-bold tracking-widest uppercase text-[#8c8c8c]">Impact</span>
          </div>
        </div>
      </main>

      {/* Области практики */}
      <section id="practice" className="px-6 md:px-12 py-24 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="font-serif-c text-4xl md:text-5xl text-[#121212]">
              Области практики
            </h2>
            <div className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase text-[#8c8c8c] pb-2">
              Экспертиза
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((s) => (
              <div key={s.num} className="group relative border-b border-gray-100 pb-8 hover:border-[#0D2419] transition-colors duration-500">
                <div className="flex justify-between items-start">
                  <span className="block text-[#0D2419] text-2xl font-serif-c mb-4 italic">{s.num}</span>
                  <svg className="w-5 h-5 text-[#0D2419] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
                <h3 className="text-xl font-sans-c font-medium text-[#121212] mb-2">{s.title}</h3>
                <p className="font-sans-c text-xs text-[#8c8c8c] uppercase tracking-wider">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#121212] text-white py-16 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <div>
            <img src="/logo.svg" alt="Miralegal" className="h-5 mb-2 brightness-0 invert" />
            <p className="text-[#8c8c8c] text-xs max-w-xs leading-relaxed">Эксклюзивная юридическая практика для бизнеса и частных лиц.</p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a href="mailto:contact@miralegal.ru" className="text-lg hover:text-[#0D2419] transition-colors">contact@miralegal.ru</a>
            <span className="text-sm font-sans-c opacity-60">Москва, Россия</span>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-white/10 flex justify-between text-[10px] text-[#8c8c8c] uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Miralegal</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
