'use client';

import { Phone, Clock, Banknote, Shield } from 'lucide-react';
import ApplyForm from '@/components/ui/ApplyForm';

export default function ApplySection() {
  return (
    <section id="apply" className="relative bg-[#1C2B3A] overflow-hidden py-20 px-5">
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#A70000]/15 blur-[80px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#A70000]/10 blur-[60px] pointer-events-none" />

      <div className="relative z-[1] max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Левая часть */}
          <div>
            <div className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white rounded-full px-4 py-1.5 text-sm font-bold mb-6">
              🧹 Открытый набор
            </div>

            <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-[1.1] tracking-[-0.02em] mb-6">
              Работа клинером<br />
              в <span className="text-[#A70000]">Краснодаре</span>
            </h2>

            <p className="text-xl text-white/80 leading-[1.6] mb-8">
              Стабильная зарплата, гибкий график и дружный коллектив. Опыт не нужен — обучим всему с нуля.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Banknote, text: 'от 87 000 ₽/мес' },
                { icon: Clock,    text: 'Гибкий график' },
                { icon: Shield,   text: 'Оформление по ГПХ' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10">
                  <Icon size={20} className="text-[#A70000]" />
                  <span className="text-white font-bold">{text}</span>
                </div>
              ))}
            </div>

            <a
              href={`tel:+79184676619`}
              className="inline-flex items-center gap-3 bg-white text-[#1C2B3A] px-7 py-4 rounded-2xl font-extrabold text-lg no-underline hover:-translate-y-0.5 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <Phone size={20} fill="currentColor" className="text-[#A70000]" />
              +7 (918) 467-66-19
            </a>
          </div>

          {/* Форма */}
          <div className="bg-[#0F1E2B] rounded-[32px] p-6 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            <ApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
