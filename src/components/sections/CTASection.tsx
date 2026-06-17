import { Phone, CheckCircle } from 'lucide-react';
import ApplyForm from '@/components/ui/ApplyForm';

export default function CTASection() {
  return (
    <section className="relative bg-[#A70000] overflow-hidden py-20 px-5">
      {/* Декоративные блобы */}
      <div aria-hidden="true" className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-white/10 blur-[90px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-24 -right-24 w-[350px] h-[350px] rounded-full bg-black/10 blur-[80px] pointer-events-none" />

      <div className="relative z-[1] max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Левая часть — текст */}
          <div>
            <h2 className="text-[clamp(30px,4.5vw,48px)] font-black text-white leading-[1.1] tracking-[-0.02em] mb-6">
              Готовы начать<br />зарабатывать?
            </h2>
            <p className="text-white/80 text-lg leading-[1.6] mb-8">
              Оставьте заявку — перезвоним в течение часа, расскажем детали и пригласим на собеседование.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                'Перезвоним в течение 1 часа',
                'Обучение и наставник с первого дня',
                'Оплата каждый день без задержек',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white shrink-0" />
                  <span className="text-white font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+79184676619"
              className="inline-flex items-center gap-3 bg-white text-[#A70000] px-8 py-4 rounded-2xl font-extrabold text-lg no-underline hover:-translate-y-0.5 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <Phone size={20} fill="currentColor" />
              +7 (918) 467-66-19
            </a>
          </div>

          {/* Правая часть — форма */}
          <div className="bg-[#1C2B3A] rounded-[32px] p-6 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            <ApplyForm
              title="Быстрая заявка"
              subtitle="Заполни — и мы свяжемся с тобой"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
