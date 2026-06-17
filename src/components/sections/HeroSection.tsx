'use client';

import Image from 'next/image';
import { Phone, Clock, Banknote, Sparkles, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white pt-[72px] pb-0">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-72px)] py-8">

          {/* Левая часть — текст */}
          <div>
            {/* <div className="inline-flex items-center gap-2 bg-[#FEE2E2] text-[#A70000] rounded-full px-4 py-1.5 text-sm font-bold mb-8">
              🧹 Открытый набор — Краснодар
            </div> */}

            <h1 className="text-[clamp(40px,3.5vw,52px)] font-black text-[#1C2B3A] leading-[1.1] tracking-[-0.03em] mb-6">
              Твои руки создают <span className="text-[#A70000]">чистоту.</span> Мы платим за это <span className="text-[#A70000]">достойно.</span>
            </h1>

            <p className="text-[clamp(16px,1.8vw,20px)] text-[#64748B] leading-[1.6] mb-10 max-w-[500px]">
              Присоединяйся к команде Ультра Клининг — стабильная работа, официальное оформление и коллектив, который поддерживает.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: Banknote, text: 'от 87 000 ₽/мес' },
                { icon: Clock,    text: 'Гибкий график' },
                { icon: Shield,   text: 'Оформление по ГПХ' },
                { icon: Sparkles, text: 'Обучим с нуля' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-[#F8FAFC] border border-[#F1F5F9] text-[#1C2B3A] px-4 py-2.5 rounded-xl text-sm font-semibold">
                  <Icon size={16} className="text-[#A70000] shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-[#A70000] text-white px-8 py-4 rounded-2xl font-extrabold text-lg no-underline shadow-[0_10px_30px_rgba(167,0,0,0.25)] hover:-translate-y-0.5 transition-transform"
              >
                Оставить заявку
              </a>
              <a
                href="tel:+79184676619"
                className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] text-[#1C2B3A] px-8 py-4 rounded-2xl font-bold text-lg no-underline hover:border-[#A70000] hover:text-[#A70000] transition-colors"
              >
                <Phone size={20} fill="currentColor" />
                Позвонить
              </a>
            </div>
          </div>

          {/* Правая часть — фото */}
          <div className="flex items-center justify-center">
            <Image
              src="/team.png"
              alt="Команда Ультра Клининг"
              width={560}
              height={600}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
