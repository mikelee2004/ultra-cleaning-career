import Image from 'next/image';
import { Banknote, Wallet, FileText, CalendarDays, Flag, GraduationCap, Dumbbell, Star } from 'lucide-react';

/* Условия — то, что компания даёт */
const perks = [
  { icon: Banknote, label: 'Зарплата от 87 000 ₽' },
  { icon: Wallet,   label: 'Оплата каждый день' },
  { icon: FileText, label: 'Оформление по ГПХ' },
];

/* Требования — то, что нужно от кандидата */
const requirements = [
  { icon: CalendarDays,  label: 'Возраст 18–55 лет' },
  { icon: Flag,          label: 'Гражданство РФ' },
  { icon: GraduationCap, label: 'Опыт не обязателен — обучим' },
  { icon: Dumbbell,      label: 'Исполнительность и хорошая физическая форма' },
];

export default function RequirementsSection() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1100px] mx-auto">

        {/* Заголовок */}
        <div className="text-center mb-16 max-w-[640px] mx-auto">
          <span className="inline-block bg-[#FEE2E2] text-[#A70000] rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-5">
            Условия и требования
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-black text-[#1C2B3A] tracking-[-0.02em] leading-[1.1]">
            Что мы <span className="text-[#A70000]">даём</span> и что <span className="text-[#A70000]">ждём</span> от тебя
          </h2>
        </div>

        {/* Главный блок */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ── Левая колонка: фото с плашкой ─────────────────────────────── */}
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden h-full min-h-[420px]">
              <Image
                src="/cleaning.png"
                alt="Команда клинеров Ультра Клининг за работой"
                width={640}
                height={560}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Плавающая плашка с рейтингом */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-4">
              <div className="flex -space-x-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full bg-[#A70000] border-2 border-white flex items-center justify-center text-white text-xs font-extrabold">
                    {['А', 'М', 'К'][i]}
                  </div>
                ))}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-[13px] font-semibold text-[#1C2B3A] leading-tight">
                  Более 50 человек в команде
                </p>
              </div>
            </div>
          </div>

          {/* ── Правая колонка: условия + требования ──────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Что даём */}
            <div className="bg-[#1C2B3A] rounded-[28px] p-8">
              <p className="text-white/50 text-xs font-extrabold uppercase tracking-[0.15em] mb-5">
                Мы предлагаем
              </p>
              <div className="flex flex-col gap-4">
                {perks.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#A70000] flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-bold text-[17px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Что ждём */}
            <div className="bg-[#F9FAFB] border border-[#F1F5F9] rounded-[28px] p-8 flex-1">
              <p className="text-[#A70000] text-xs font-extrabold uppercase tracking-[0.15em] mb-5">
                Что нужно от тебя
              </p>
              <div className="flex flex-col gap-4">
                {requirements.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#F1F5F9] flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#A70000]" />
                    </div>
                    <span className="text-[#1C2B3A] font-semibold text-[16px] leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
