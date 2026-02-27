"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Scale, Shield, Globe, TrendingUp, FileText, Award, Copyright, Menu, X, Phone } from 'lucide-react';

const HandshakeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.05l1.84 1.84a6 6 0 0 1 0 8.48l-1.8 1.8a2 2 0 0 1-2.82 0l-2-2" />
  </svg>
);

const ServiceCard = ({ item, index }: { item: { title: string; icon: React.ReactNode }; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative border-b border-r border-[#222] p-10 hover:bg-[#141414] transition-colors duration-500 flex flex-col h-64 justify-between"
    >
      <div className="flex justify-between items-start">
        <span className="font-sans-custom text-xs text-stone-600 font-light">0{index + 1}</span>
        <div className="text-stone-600 group-hover:text-[#C15950] transition-colors duration-300">
           {item.icon}
        </div>
      </div>

      <div>
        <h4 className="font-serif-custom text-xl lg:text-2xl text-stone-300 font-light group-hover:text-white transition-colors duration-300 pr-4">
          {item.title}
        </h4>
        <div className="w-0 group-hover:w-12 h-[1px] bg-[#C15950] mt-6 transition-all duration-500 ease-out"></div>
      </div>
    </motion.div>
  );
};

export default function Concept1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    { title: "M&A · Купля-продажа бизнеса · Инвестиции", icon: <TrendingUp size={20} /> },
    { title: "Совместные предприятия (JV)", icon: <HandshakeIcon /> },
    { title: "Корпоративная практика", icon: <FileText size={20} /> },
    { title: "Венчурные проекты", icon: <Award size={20} /> },
    { title: "Международные сделки", icon: <Globe size={20} /> },
    { title: "Коммерческая практика", icon: <Scale size={20} /> },
    { title: "Личное благосостояние", icon: <Shield size={20} /> },
    { title: "Интеллектуальная собственность", icon: <Copyright size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-[#C15950] selection:text-black overflow-x-hidden font-sans-custom">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Manrope', sans-serif; }

        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>

      <main className="relative z-10 max-w-[1600px] mx-auto border-l border-r border-[#222]">

        {/* --- BLOCK 1: HERO & BIO --- */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 min-h-screen border-b border-[#222]">

          {/* Brand Vertical Text (Desktop) - Left Sidebar */}
          <div className="hidden lg:flex col-span-1 border-r border-[#222] items-center justify-center py-10 sticky top-0 h-screen">
            <span className="writing-vertical-lr rotate-180 text-[#C15950] tracking-[0.3em] text-[10px] font-sans-custom uppercase opacity-80">
              Miraligal
            </span>
          </div>

          {/* Center Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col relative">

            {/* Top Navigation Bar */}
            <header className="flex justify-between items-center p-8 lg:px-16 lg:py-10 border-b border-[#222] lg:border-none">
               <div className="flex items-center gap-4">
                  <span className="text-[#C15950] uppercase tracking-[0.2em] text-[10px] font-sans-custom">
                    Москва
                  </span>
               </div>

               {/* Desktop Menu */}
               <nav className="hidden lg:flex gap-8">
                 {['Услуги', 'О нас', 'Контакты'].map((item) => (
                   <button
                     key={item}
                     onClick={() => scrollToSection(item === 'Услуги' ? 'services' : 'footer')}
                     className="text-xs uppercase tracking-widest text-stone-400 hover:text-[#C15950] transition-colors duration-300"
                   >
                     {item}
                   </button>
                 ))}
               </nav>

               {/* Mobile Menu Icon */}
               <button className="lg:hidden text-stone-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-20 left-0 right-0 bg-[#0f0f0f] border-b border-[#222] z-50 p-8 flex flex-col gap-6 lg:hidden"
              >
                 {['Услуги', 'О нас', 'Контакты'].map((item) => (
                   <button
                     key={item}
                     onClick={() => scrollToSection(item === 'Услуги' ? 'services' : 'footer')}
                     className="text-left text-sm uppercase tracking-widest text-stone-300"
                   >
                     {item}
                   </button>
                 ))}
              </motion.div>
            )}

            {/* Hero Content */}
            <div className="flex-grow flex flex-col justify-center p-8 lg:p-16 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif-custom text-4xl lg:text-6xl leading-[1.1] mb-8 text-white font-light">
                  Юридическая практика <br/>
                  <span className="italic text-stone-400">адвоката</span> Марии Мирошниковой
                </h1>

                <h2 className="font-sans-custom text-[10px] tracking-[0.4em] text-[#C15950] uppercase mb-16">
                  Миралигал
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-auto max-w-lg"
              >
                <p className="font-sans-custom font-light text-stone-300 text-lg leading-relaxed mb-8">
                  Мария — ваш надежный юридический советник с опытом более <span className="text-white border-b border-[#C15950]">25 лет</span>.
                </p>
                <div className="flex flex-col gap-4 pl-4 border-l border-[#333]">
                  <p className="font-sans-custom text-sm text-stone-400 leading-relaxed">
                    Специализация: создание и развитие бизнеса, инвестиции, покупка и продажа активов, управление личным благосостоянием.
                  </p>
                  <p className="font-sans-custom text-sm text-stone-500 italic">
                    «Мы находим оптимальное решение в нестандартной ситуации, опираясь на лучшие юридические практики.»
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Photo Section - Right Sidebar */}
          <div className="col-span-1 lg:col-span-5 relative h-[50vh] lg:h-auto border-l border-[#222] overflow-hidden group">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              src="/maria.png"
              alt="Мария Мирошникова"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 right-0 p-8 z-20 bg-[#0a0a0a] border-t border-l border-[#222]">
              <ArrowDownRight className="text-[#C15950]" size={32} />
            </div>
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="relative bg-[#0a0a0a]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="hidden lg:block col-span-1 border-r border-[#222]"></div>
            <div className="col-span-11 grid grid-cols-1 md:grid-cols-3">
              {[
                { value: "25+", label: "Лет опыта" },
                { value: "80+", label: "Проектов" },
                { value: "$100M+", label: "Объём сделок" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-10 lg:p-14 border-b border-r border-[#222] flex flex-col gap-3"
                >
                  <span className="font-serif-custom text-4xl lg:text-5xl text-white font-light">{stat.value}</span>
                  <span className="font-sans-custom text-[10px] tracking-[0.3em] text-[#C15950] uppercase">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BLOCK 2: SERVICES --- */}
        <section id="services" className="relative bg-[#0f0f0f]">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#222]">
            <div className="hidden lg:block col-span-1 border-r border-[#222]"></div>
            <div className="col-span-11 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between">
               <h3 className="font-serif-custom text-3xl lg:text-4xl text-white font-light">
                 Области практики
               </h3>
               <span className="font-sans-custom text-[10px] tracking-[0.3em] text-[#C15950] uppercase mt-4 lg:mt-0">
                 Миралигал
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-1 border-r border-[#222] min-h-full bg-[#0a0a0a]"></div>
            <div className="col-span-1 md:col-span-2 lg:col-span-11 grid grid-cols-1 md:grid-cols-2">
              {services.map((item, index) => (
                <ServiceCard key={index} index={index} item={item} />
              ))}
            </div>
          </div>

          {/* Footer / Contacts */}
          <footer id="footer" className="border-t border-[#222] bg-[#0a0a0a]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block col-span-1 border-r border-[#222]"></div>

              <div className="col-span-11 p-10 lg:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                {/* Contact */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-serif-custom text-2xl text-white font-light mb-1">Мария Мирошникова</h4>
                    <p className="font-sans-custom text-xs text-stone-500 tracking-wider uppercase">Партнер, адвокат, к.ю.н.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <a href="tel:+79031490249" className="group flex gap-3 items-center text-stone-300 hover:text-white transition-colors duration-300">
                      <Phone size={15} className="text-[#C15950]" />
                      <span className="text-sm">+7 (903) 149-02-49</span>
                    </a>
                    <a href="https://t.me/miroshnikova_maria" target="_blank" rel="noopener noreferrer" className="group flex gap-3 items-center text-stone-300 hover:text-white transition-colors duration-300">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#C15950]">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      <span className="text-sm">@miroshnikova_maria</span>
                    </a>
                  </div>
                </div>

                {/* Brand + Copyright */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <span className="font-sans-custom text-[10px] tracking-[0.3em] text-[#C15950] uppercase">Miraligal</span>
                  <p className="font-sans-custom text-[10px] text-stone-600 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </section>

      </main>
    </div>
  );
}
