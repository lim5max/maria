"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Scale, Shield, Globe, TrendingUp, Users, FileText, Briefcase, Award, Copyright } from 'lucide-react';

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
        <span className="font-sans-custom text-xs text-stone-600">0{index + 1}</span>
        <div className="text-stone-500 group-hover:text-[#D4AF37] transition-colors duration-300">
           {item.icon}
        </div>
      </div>

      <div>
        <h4 className="font-serif-custom text-xl lg:text-2xl text-stone-200 font-light group-hover:text-white transition-colors duration-300">
          {item.title}
        </h4>
        <div className="w-0 group-hover:w-12 h-[1px] bg-[#D4AF37] mt-4 transition-all duration-500 ease-out"></div>
      </div>
    </motion.div>
  );
};

export default function Concept1() {
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
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Manrope', sans-serif; }

        .grid-lines {
          background-image: linear-gradient(to right, #222 1px, transparent 1px),
                            linear-gradient(to bottom, #222 1px, transparent 1px);
          background-size: 100px 100px;
          opacity: 0.3;
        }

        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>

      <div className="fixed inset-0 grid-lines pointer-events-none z-0" />

      <main className="relative z-10 max-w-[1600px] mx-auto border-l border-r border-[#222]">

        {/* --- BLOCK 1: HERO & BIO --- */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 min-h-screen border-b border-[#222]">

          <div className="hidden lg:flex col-span-1 border-r border-[#222] items-center justify-center py-10">
            <span className="writing-vertical-lr rotate-180 text-[#D4AF37] tracking-[0.3em] text-xs font-sans-custom uppercase opacity-80">
              Miraligal Law Firm
            </span>
          </div>

          <div className="col-span-1 lg:col-span-6 flex flex-col justify-between p-8 lg:p-16 relative">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-sans-custom">
                  Москва
                </span>
              </div>

              <h1 className="font-serif-custom text-4xl lg:text-6xl leading-[1.1] mb-6 text-white font-light">
                Юридическая практика <br/>
                <span className="italic text-stone-400">адвоката</span> Марии Мирошниковой
              </h1>

              <h2 className="font-sans-custom text-sm tracking-[0.4em] text-[#D4AF37] uppercase mb-12">
                Миралигал
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-auto max-w-md"
            >
              <p className="font-sans-custom font-light text-stone-300 text-lg leading-relaxed mb-8">
                Мария — ваш надежный юридический советник с опытом более <span className="text-white border-b border-[#D4AF37]">25 лет</span>.
              </p>
              <p className="font-sans-custom text-sm text-stone-400 leading-relaxed mb-6 pl-4 border-l border-[#333]">
                Специализация: создание и развитие бизнеса, инвестиции, покупка и продажа активов, управление личным благосостоянием.
              </p>
              <p className="font-sans-custom text-sm text-stone-400 italic">
                «Мы находим оптимальное решение в нестандартной ситуации, опираясь на лучшие юридические практики.»
              </p>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-5 relative h-[50vh] lg:h-auto border-l border-[#222] overflow-hidden group">
            <div className="absolute inset-0 bg-[#0a0a0a] opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10 mix-blend-multiply"></div>

            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&grayscale"
              alt="Мария Мирошникова"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />

            <div className="absolute bottom-0 right-0 p-8 z-20 bg-[#0a0a0a]">
              <ArrowDownRight className="text-[#D4AF37]" size={32} />
            </div>
          </div>
        </section>

        {/* --- BLOCK 2: SERVICES --- */}
        <section className="relative min-h-screen bg-[#0f0f0f]">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#222]">
            <div className="hidden lg:block col-span-1 border-r border-[#222]"></div>
            <div className="col-span-11 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between">
               <h3 className="font-serif-custom text-3xl lg:text-4xl text-white font-light">
                 Области практики
               </h3>
               <span className="font-sans-custom text-xs tracking-[0.3em] text-[#D4AF37] uppercase mt-4 lg:mt-0">
                 Миралигал
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-1 border-r border-[#222] min-h-full"></div>
            <div className="col-span-1 md:col-span-2 lg:col-span-11 grid grid-cols-1 md:grid-cols-2">
              {services.map((item, index) => (
                <ServiceCard key={index} index={index} item={item} />
              ))}
            </div>
          </div>

          <footer className="border-t border-[#222] py-8 text-center">
             <p className="font-sans-custom text-xs text-stone-600 uppercase tracking-widest">
               &copy; {new Date().getFullYear()} Miraligal. All rights reserved.
             </p>
          </footer>
        </section>

      </main>
    </div>
  );
}
