import { TrendingUp } from 'lucide-react';

const plans = [
  {
    title: 'Подработка',
    schedule: 'Выходные / неполный день',
    amount: 'до 40 000 ₽',
    period: 'в месяц',
    points: ['2–3 смены в неделю', 'Свободный график', 'Подходит студентам'],
    accent: false,
  },
  {
    title: 'Полная занятость',
    schedule: '5 дней в неделю',
    amount: 'от 87 000 ₽',
    period: 'в месяц',
    points: ['Стабильный доход', 'Постоянные объекты', 'Премии за качество'],
    accent: true,
  },
  {
    title: 'Максимум',
    schedule: '6 дней + сложные объекты',
    amount: 'до 120 000 ₽',
    period: 'в месяц',
    points: ['Срочные заказы', 'Бонусы и чаевые', 'Объекты после ремонта'],
    accent: false,
  },
];

export default function EarningsSection() {
  return (
    <section className="py-24 px-5 bg-[#F9FAFB]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="inline-block bg-[#FEE2E2] text-[#A70000] rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-5">
            Доход
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-black text-[#1C2B3A] tracking-[-0.02em] leading-[1.1]">
            Сколько можно <span className="text-[#A70000]">заработать</span>
          </h2>
          <p className="text-[#64748B] text-lg mt-4">
            Доход зависит от графика и количества смен. Выбирай свой темп.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ title, schedule, amount, period, points, accent }) => (
            <div
              key={title}
              className={`relative rounded-[28px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                accent
                  ? 'bg-[#1C2B3A] shadow-[0_20px_50px_rgba(28,43,58,0.25)] lg:scale-105'
                  : 'bg-white border border-[#F1F5F9] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]'
              }`}
            >
              {accent && (
                <span className="absolute top-6 right-6 inline-flex items-center gap-1 bg-[#A70000] text-white text-xs font-extrabold px-3 py-1 rounded-full">
                  <TrendingUp size={13} /> Хит
                </span>
              )}

              <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${accent ? 'text-[#A70000]' : 'text-[#94A3B8]'}`}>
                {title}
              </p>
              <p className={`text-sm mb-6 ${accent ? 'text-white/60' : 'text-[#64748B]'}`}>{schedule}</p>

              <div className="mb-6">
                <div className={`text-[40px] font-black leading-none ${accent ? 'text-white' : 'text-[#1C2B3A]'}`}>
                  {amount}
                </div>
                <div className={`text-sm mt-1 ${accent ? 'text-white/50' : 'text-[#94A3B8]'}`}>{period}</div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                {points.map(p => (
                  <div key={p} className="flex items-center gap-2.5">
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent ? 'bg-[#A70000]' : 'bg-[#A70000]'}`} />
                    <span className={`text-sm font-medium ${accent ? 'text-white/80' : 'text-[#475569]'}`}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
