import { Banknote, Clock, Shield, Sparkles, Users, CheckCircle } from 'lucide-react';

const benefits = [
  { icon: Banknote,     title: 'Зарплата от 87 000 ₽',  desc: 'Оплата каждый день. Без задержек. Бонусы за качество.' },
  { icon: Clock,        title: 'Гибкий график',           desc: 'Полный день, частичная занятость или только выходные — выбираешь сам.' },
  { icon: Shield,       title: 'Оформление по ГПХ',       desc: 'Официальный договор, прозрачные условия работы.' },
  { icon: Sparkles,     title: 'Обучение с нуля',         desc: 'Опыт не нужен — научим всему. Наставник на первых выездах.' },
  { icon: Users,        title: 'Дружный коллектив',       desc: 'Молодая команда, корпоративы, поддержка на каждом этапе.' },
  { icon: CheckCircle,  title: 'Всё оборудование наше',   desc: 'Профессиональная химия и техника — ничего покупать не нужно.' },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-5 bg-[#F9FAFB]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#FEE2E2] text-[#A70000] rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-4">
            Почему мы
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black text-[#1C2B3A] tracking-[-0.02em]">
            Работать у нас — <span className="text-[#A70000]">выгодно</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 border border-[#F1F5F9] hover:border-[#A70000] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FEE2E2] flex items-center justify-center mb-5">
                <Icon size={28} className="text-[#A70000]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1C2B3A] mb-2">{title}</h3>
              <p className="text-sm text-[#64748B] leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
