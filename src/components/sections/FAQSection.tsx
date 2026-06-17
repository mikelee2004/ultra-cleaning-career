'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Нужен ли опыт работы?',           a: 'Нет, мы обучаем с нуля. На первых выездах рядом будет опытный наставник.' },
  { q: 'Как выплачивается зарплата?',      a: 'Оплата каждый день. Без задержек и авансов — получаешь сразу после смены.' },
  { q: 'Нужно ли своё оборудование?',      a: 'Нет. Всю профессиональную химию и технику предоставляем мы.' },
  { q: 'Можно ли работать неполный день?', a: 'Да, у нас есть варианты частичной занятости и работы только в выходные.' },
  { q: 'Как быстро рассматривают заявку?', a: 'Перезваниваем в течение 1 часа в рабочее время.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border-2 overflow-hidden transition-colors duration-200 ${open ? 'border-[#A70000] bg-[#FEF2F2]' : 'border-[#F1F5F9] bg-white'}`}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 bg-transparent border-none cursor-pointer text-left"
      >
        <span className={`text-base font-bold ${open ? 'text-[#A70000]' : 'text-[#1C2B3A]'}`}>{q}</span>
        <ChevronDown size={18} className={`shrink-0 ml-3 transition-transform duration-300 ${open ? 'rotate-180 text-[#A70000]' : 'text-[#94A3B8]'}`} />
      </button>
      {open && <p className="px-6 pb-5 text-[#64748B] text-sm leading-[1.7]">{a}</p>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-[700px] mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block bg-[#FEE2E2] text-[#A70000] rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-4">
            Вопросы
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black text-[#1C2B3A] tracking-[-0.02em]">
            Частые вопросы
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}
