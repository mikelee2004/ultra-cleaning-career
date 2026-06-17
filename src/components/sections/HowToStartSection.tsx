import { FileText, PhoneCall, GraduationCap, Sparkles } from 'lucide-react';

const steps = [
  { icon: FileText,      num: '01', title: 'Оставляешь заявку', desc: 'Заполни короткую форму на сайте или позвони — это займёт минуту' },
  { icon: PhoneCall,     num: '02', title: 'Мы перезваниваем',  desc: 'В течение часа в рабочее время. Расскажем условия и ответим на вопросы' },
  { icon: GraduationCap, num: '03', title: 'Обучение',          desc: 'Покажем все стандарты уборки. Наставник сопровождает первые выезды' },
  { icon: Sparkles,      num: '04', title: 'Первый выезд',      desc: 'Выходишь на объект и начинаешь зарабатывать с первого дня' },
];

export default function HowToStartSection() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="inline-block bg-[#FEE2E2] text-[#A70000] rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-5">
            Как начать
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-black text-[#1C2B3A] tracking-[-0.02em] leading-[1.1]">
            Всего <span className="text-[#A70000]">4 шага</span> до работы
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <div key={num} className="relative">
              {/* Соединительная линия (desktop) */}
              {i < steps.length - 1 && (
                <div aria-hidden="true" className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-24px] h-0.5 bg-gradient-to-r from-[#FEE2E2] to-transparent" />
              )}

              <div className="relative bg-[#F9FAFB] rounded-3xl p-7 border border-[#F1F5F9] h-full hover:border-[#A70000]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                {/* Номер фоном */}
                <span className="absolute top-5 right-6 text-[44px] font-black text-[#F1F5F9] leading-none select-none">{num}</span>

                <div className="relative w-14 h-14 rounded-2xl bg-[#A70000] flex items-center justify-center mb-5">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1C2B3A] mb-2 relative">{title}</h3>
                <p className="text-sm text-[#64748B] leading-[1.6] relative">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
