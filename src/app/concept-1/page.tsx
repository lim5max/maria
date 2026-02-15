"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Scale, Shield, Globe, TrendingUp, Users, FileText, Briefcase, Award, Copyright, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

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
    { title: "Слияния и поглощения (М&A)", icon: <Users size={20} /> },
    { title: "Купля-продажа бизнеса", icon: <Briefcase size={20} /> },
    { title: "Инвестиционные сделки", icon: <TrendingUp size={20} /> },
    { title: "Совместные предприятия (JV) и партнерства", icon: <HandshakeIcon /> },
    { title: "Корпоративная практика и реструктуризации", icon: <FileText size={20} /> },
    { title: "Венчурные проекты", icon: <Award size={20} /> },
    { title: "Международные сделки", icon: <Globe size={20} /> },
    { title: "Коммерческая практика", icon: <Scale size={20} /> },
    { title: "Личное благосостояние", icon: <Shield size={20} /> },
    { title: "Интеллектуальная собственность (IP)", icon: <Copyright size={20} /> },
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
              src="/maria.jpg"
              alt="Мария Мирошникова"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 right-0 p-8 z-20 bg-[#0a0a0a] border-t border-l border-[#222]">
              <ArrowDownRight className="text-[#C15950]" size={32} />
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
          <footer id="footer" className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#222] bg-[#0a0a0a]">
             <div className="hidden lg:block col-span-1 border-r border-[#222]"></div>

             <div className="col-span-11 grid grid-cols-1 md:grid-cols-3">
                <div className="p-10 border-b md:border-b-0 md:border-r border-[#222]">
                  <h4 className="text-stone-500 text-xs uppercase tracking-widest mb-6">Адрес</h4>
                  <div className="flex gap-4 items-start text-stone-300">
                    <MapPin size={18} className="text-[#C15950] shrink-0 mt-1" />
                    <p className="font-light">Москва, Пресненская наб., 12<br/>Башня Федерация</p>
                  </div>
                </div>

                <div className="p-10 border-b md:border-b-0 md:border-r border-[#222]">
                   <h4 className="text-stone-500 text-xs uppercase tracking-widest mb-6">Связь</h4>
                   <div className="flex flex-col gap-4">
                     <a href="tel:+74950000000" className="flex gap-4 items-center text-stone-300 hover:text-white transition-colors">
                        <Phone size={18} className="text-[#C15950]" />
                        <span>+7 (495) 000-00-00</span>
                     </a>
                     <a href="mailto:info@miraligal.ru" className="flex gap-4 items-center text-stone-300 hover:text-white transition-colors">
                        <Mail size={18} className="text-[#C15950]" />
                        <span>info@miraligal.ru</span>
                     </a>
                   </div>
                </div>

                <div className="p-10 flex flex-col justify-between">
                   <h4 className="text-stone-500 text-xs uppercase tracking-widest mb-6">Miraligal</h4>
                   <p className="font-sans-custom text-[10px] text-stone-600 uppercase tracking-widest">
                     &copy; {new Date().getFullYear()} All rights reserved.
                   </p>
                </div>
             </div>
          </footer>
        </section>

      </main>
    </div>
  );
}
