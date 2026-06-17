/**
 * Компонент для структурированных данных (JSON-LD Schema.org)
 * Помогает поисковым системам лучше понимать содержимое страницы
 */

import { contacts } from '@/lib/contacts';

export default function StructuredData() {
  // Схема организации
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://rabota.cleankrd23.ru/#organization',
    name: contacts.companyName,
    alternateName: 'UltraClining',
    legalName: 'ООО "Ультра Клининг"',
    url: contacts.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${contacts.siteUrl}/ultra-cleaning-logo.svg`,
      width: 250,
      height: 60,
    },
    image: `${contacts.siteUrl}/og-image.png`,
    description: 'Профессиональная клининговая компания в Краснодаре. Мы предлагаем стабильную работу клинером с официальным трудоустройством и достойной зарплатой.',
    telephone: contacts.phone,
    email: contacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Северная, 320',
      addressLocality: 'Краснодар',
      addressRegion: 'Краснодарский край',
      postalCode: '350000',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.0355,
      longitude: 38.9753,
    },
    areaServed: {
      '@type': 'City',
      name: 'Краснодар',
      sameAs: 'https://ru.wikipedia.org/wiki/Краснодар',
    },
    sameAs: [
      contacts.vk,
      contacts.telegram,
      contacts.whatsapp,
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contacts.phone,
        contactType: 'Отдел кадров',
        areaServed: 'RU',
        availableLanguage: ['Russian'],
        contactOption: 'TollFree',
      },
    ],
  };

  // Схема вакансии для клинеров
  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': 'https://rabota.cleankrd23.ru/#jobposting',
    title: 'Клинер / Уборщица / Уборщик',
    description: 'Приглашаем на работу клинеров в Краснодаре. Мы предлагаем стабильную работу с официальным оформлением, достойную зарплату от 87 000 рублей в месяц и гибкий график. Опыт работы не требуется - обучим всему необходимому.',
    datePosted: '2026-01-01',
    validThrough: '2026-12-31',
    employmentType: ['FULL_TIME', 'PART_TIME'],
    hiringOrganization: {
      '@type': 'Organization',
      name: contacts.companyName,
      sameAs: contacts.siteUrl,
      logo: `${contacts.siteUrl}/ultra-cleaning-logo.svg`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Северная, 320',
        addressLocality: 'Краснодар',
        addressRegion: 'Краснодарский край',
        postalCode: '350000',
        addressCountry: 'RU',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'RUB',
      value: {
        '@type': 'QuantitativeValue',
        value: 87000,
        minValue: 87000,
        maxValue: 120000,
        unitText: 'MONTH',
      },
    },
    workHours: 'Гибкий график: полный день, частичная занятость или только выходные',
    experienceRequirements: {
      '@type': 'OccupationalExperienceRequirements',
      monthsOfExperience: 0,
    },
    educationRequirements: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Не требуется',
    },
    qualifications: 'Ответственность, аккуратность, желание работать. Опыт не обязателен - обучим с нуля.',
    responsibilities: 'Уборка помещений, поддержание чистоты, работа с профессиональным оборудованием',
    benefits: 'Официальное оформление по ГПХ, стабильные выплаты, обучение, выдача инвентаря и средств, дружный коллектив',
    incentiveCompensation: 'Бонусы за качественную работу',
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: {
      '@type': 'City',
      name: 'Краснодар',
    },
    directApply: true,
    industry: 'Клининговые услуги',
  };

  // Схема хлебных крошек
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: contacts.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Вакансии',
        item: `${contacts.siteUrl}/`,
      },
    ],
  };

  // Схема веб-сайта
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${contacts.siteUrl}/#website`,
    url: contacts.siteUrl,
    name: 'Работа клинером в Краснодаре - Ультра Клининг',
    description: 'Вакансии клинеров в Краснодаре. Стабильная работа, достойная зарплата, гибкий график.',
    publisher: {
      '@id': `${contacts.siteUrl}/#organization`,
    },
    inLanguage: 'ru-RU',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${contacts.siteUrl}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Схема FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Какая зарплата у клинера?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Средняя зарплата клинера в Ультра Клининг составляет от 87 000 рублей в месяц. Итоговый доход зависит от количества отработанных смен и качества работы.',
        },
      },
      {
        '@type': 'Question',
        name: 'Нужен ли опыт работы?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нет, опыт работы не требуется. Мы обучим вас всем необходимым навыкам с нуля. Главное - желание работать и ответственность.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какой график работы?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мы предлагаем гибкий график: полный день, частичная занятость или работа только в выходные. Вы можете выбрать удобный для вас вариант.',
        },
      },
      {
        '@type': 'Question',
        name: 'Как оформляются сотрудники?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мы оформляем сотрудников официально по договору ГПХ (гражданско-правовой характер). Это законное трудоустройство с регулярными выплатами.',
        },
      },
      {
        '@type': 'Question',
        name: 'Нужно ли покупать свой инвентарь?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нет, компания предоставляет весь необходимый инвентарь и моющие средства за свой счёт. Вам не нужно ничего покупать.',
        },
      },
    ],
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Job Posting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
