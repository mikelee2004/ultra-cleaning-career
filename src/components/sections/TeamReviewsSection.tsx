import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Анна Соколова',
    role: 'Клинер, стаж 6 месяцев',
    initial: 'АС',
    tag: 'Обучение с нуля',
    text: 'Пришла сюда без опыта — меня всему научили с нуля. Руководитель всегда на связи, никогда не бросает в трудной ситуации. Коллектив как одна большая семья. Работаю с удовольствием каждый день!',
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Старший клинер, стаж 3 года',
    initial: 'ДК',
    tag: 'Стабильная зарплата',
    text: 'Три года здесь — и ни разу не пожалел. Зарплата всегда вовремя, без задержек. Руководитель ценит каждого сотрудника лично. Когда у меня были семейные обстоятельства, мне пошли навстречу без лишних вопросов.',
  },
  {
    name: 'Ольга Морозова',
    role: 'Менеджер объектов, стаж 4 года',
    initial: 'ОМ',
    tag: 'Карьерный рост',
    text: 'Начинала рядовым клинером, сейчас управляю командой из 12 человек. Здесь реально растут! Наш руководитель видит потенциал в людях и даёт возможности. Горжусь тем, чего достигла за эти годы.',
  },
  {
    name: 'Иван Власов',
    role: 'Специалист по глубокой уборке',
    initial: 'ИВ',
    tag: 'Крутое оборудование',
    text: 'Оборудование всегда в отличном состоянии, профессиональная химия — всё лучшего качества. Руководство не экономит на инструментах. Работать приятно, когда есть всё необходимое. Клиенты довольны — и мы довольны!',
  },
  {
    name: 'Наталья Петрова',
    role: 'Клинер, стаж 1.5 года',
    initial: 'НП',
    tag: 'Уважение к людям',
    text: 'До этого работала в трёх других компаниях — везде была текучка и хаос. Здесь всё иначе: чёткие графики, уважительное отношение, боссы здороваются с тобой по имени. Чувствуешь себя человеком, а не расходным материалом.',
  },
  {
    name: 'Екатерина Захарова',
    role: 'Администратор смены',
    initial: 'ЕЗ',
    tag: 'Забота о команде',
    text: 'Руководитель — это отдельная история. Всегда спокойный, никогда не кричит, объясняет всё по делу. Корпоративы, бонусы за хорошую работу, поздравления с праздниками — мелочи, но они важны. Рекомендую всем, кто ищет нормальную работу!',
  },
];

export default function TeamReviewsSection() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="inline-block bg-[#FEE2E2] text-[#A70000] rounded-full px-5 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-5">
            Отзывы команды
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-black text-[#1C2B3A] tracking-[-0.02em] leading-[1.1]">
            Что говорят <span className="text-[#A70000]">наши сотрудники</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, role, initial, tag, text }) => (
            <div
              key={name}
              className="relative flex flex-col bg-[#F9FAFB] rounded-3xl p-7 border border-[#F1F5F9] hover:border-[#A70000]/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Шапка: иконка + звёзды */}
              <div className="flex items-center justify-between mb-4">
                <Quote size={32} className="text-[#FEE2E2]" fill="currentColor" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
              </div>

              {/* Тег */}
              <span className="inline-flex self-start bg-[#FEE2E2] text-[#A70000] rounded-full px-3 py-1 text-xs font-extrabold mb-4">
                {tag}
              </span>

              {/* Текст */}
              <p className="text-[#475569] leading-[1.7] text-[15px] mb-6 grow">«{text}»</p>

              {/* Автор */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#F1F5F9]">
                <div className="w-11 h-11 rounded-full bg-[#A70000] flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                  {initial}
                </div>
                <div>
                  <div className="font-extrabold text-[#1C2B3A] leading-tight">{name}</div>
                  <div className="text-sm text-[#94A3B8]">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
