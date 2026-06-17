import HeroSection         from '@/components/sections/HeroSection';
import ApplySection        from '@/components/sections/ApplySection';
import BenefitsSection     from '@/components/sections/BenefitsSection';
import EarningsSection     from '@/components/sections/EarningsSection';
import RequirementsSection from '@/components/sections/RequirementsSection';
import HowToStartSection   from '@/components/sections/HowToStartSection';
import TeamReviewsSection  from '@/components/sections/TeamReviewsSection';
import FAQSection          from '@/components/sections/FAQSection';
import CTASection          from '@/components/sections/CTASection';

// SEO: Метаданные для главной страницы
export const metadata = {
  title: 'Работа клинером в Краснодаре от 87 000 ₽ | Вакансии Ультра Клининг 2026',
  description: 'Ищем клинеров в Краснодаре! Зарплата от 87 000 ₽/мес, официальное оформление по ГПХ, гибкий график. Опыт не нужен — обучим с нуля. Звоните: +7 (918) 467-66-19',
  alternates: {
    canonical: 'https://rabota.cleankrd23.ru',
  },
};

export default function JobsPage() {
  return (
    <>
      {/* Hero секция с главным призывом */}
      <HeroSection />
      
      {/* Форма заявки - важная для конверсии */}
      <ApplySection />
      
      {/* Преимущества работы */}
      <BenefitsSection />
      
      {/* Информация о заработке */}
      <EarningsSection />
      
      {/* Требования к кандидатам */}
      <RequirementsSection />
      
      {/* Как начать работать */}
      <HowToStartSection />
      
      {/* Отзывы команды */}
      <TeamReviewsSection />
      
      {/* Часто задаваемые вопросы */}
      <FAQSection />
      
      {/* Финальный призыв к действию */}
      <CTASection />
    </>
  );
}
