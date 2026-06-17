import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import './globals.css';
import { contacts } from '@/lib/contacts'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rabota.cleankrd23.ru'),
  title: {
    default: 'Работа клинером в Краснодаре от 87 000 ₽ | Вакансии Ультра Клининг 2026',
    template: '%s | Ультра Клининг Вакансии'
  },
  description:
    'Ищем клинеров в Краснодаре! Зарплата от 87 000 ₽/мес, официальное оформление по ГПХ, гибкий график (полный день/частичная/выходные). Опыт не нужен — обучим с нуля. Звоните: +7 (918) 467-66-19',
  keywords: [
    // Основные ключевые слова
    'работа клинером Краснодар',
    'уборщица Краснодар вакансия',
    'клининговая компания Краснодар вакансии',
    'вакансии клинер Краснодар',
    'работа уборщицей Краснодар',
    
    // Длинный хвост (long-tail)
    'работа клинером Краснодар без опыта',
    'вакансия уборщица Краснодар свежие',
    'клинер Краснодар зарплата 87000',
    'работа уборщицей с ежедневной оплатой Краснодар',
    'уборщица Краснодар официальное трудоустройство',
    
    // По графику
    'работа клинером гибкий график Краснодар',
    'уборщица полный день Краснодар',
    'подработка уборкой Краснодар',
    'работа уборщицей выходные Краснодар',
    
    // Локальные
    'Ультра Клининг вакансии',
    'работа в клининговой компании Краснодар',
    'cleankrd23 вакансии',
    
    // Целевая аудитория
    'работа для женщин Краснодар',
    'работа для пенсионеров Краснодар уборка',
    'работа для студентов Краснодар уборка',
    'работа рядом с домом Краснодар',
    
    // Условия
    'работа уборщицей с обучением',
    'вакансия клинер от прямого работодателя',
    'уборщица без вредных привычек Краснодар',
  ],
  authors: [{ name: 'Ультра Клининг', url: 'https://rabota.cleankrd23.ru' }],
  creator: 'Ультра Клининг',
  publisher: 'Ультра Клининг',
  
  // Favicon и иконки
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/favicon-32x32.png',
  },
  
  // Манифест PWA
  manifest: '/manifest.json',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph для соцсетей
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://rabota.cleankrd23.ru',
    siteName: 'Работа в Ультра Клининг',
    title: 'Работа клинером в Краснодаре от 87 000 ₽ — Ультра Клининг',
    description: 'Стабильная работа, достойная зарплата, дружный коллектив. Опыт не обязателен — обучим с нуля. Гибкий график: полный день, частичная занятость или выходные.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Работа клинером в Краснодаре - Ультра Клининг',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Работа клинером в Краснодаре от 87 000 ₽',
    description: 'Стабильная работа, гибкий график, обучение с нуля. Присоединяйтесь к команде Ультра Клининг!',
    images: ['/og-image.png'],
    creator: '@ultraclean',
  },
  
  // Альтернативные языки (на будущее)
  alternates: {
    canonical: 'https://rabota.cleankrd23.ru',
    languages: {
      'ru-RU': 'https://rabota.cleankrd23.ru',
    },
  },
  
  // Верификация для поисковых систем
  verification: {
    // google: 'your-google-verification-code', // Добавь после регистрации в Google Search Console
    // yandex: 'your-yandex-verification-code', // Добавь после регистрации в Яндекс.Вебмастер
  },
  
  // Дополнительные метатеги
  other: {
    // Геотаргетинг
    'geo.region': 'RU-KDA',
    'geo.placename': 'Краснодар',
    'geo.position': '45.0355;38.9753',
    'ICBM': '45.0355, 38.9753',
    
    // Отключаем автоопределение телефонов (форматирование контролируем сами)
    'format-detection': 'telephone=no',
    
    // Безопасность
    'referrer': 'strict-origin-when-cross-origin',
    
    // Для мобильных браузеров
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Работа УК',
    
    // Категория контента
    'article:publisher': contacts.vk,
    'article:author': contacts.companyName,
    
    // Rating (для контента)
    'rating': 'general',
    'audience': 'all',
    
    // Для ВКонтакте
    'vk:image': 'https://rabota.cleankrd23.ru/og-image.png',
  },
};

// Настройки viewport (вынесены отдельно в Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#A70000' },
    { media: '(prefers-color-scheme: dark)', color: '#A70000' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* Структурированные данные JSON-LD */}
        <StructuredData />
        
        {/* Prefetch для критичных ресурсов */}
        <link rel="dns-prefetch" href="https://api.telegram.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-[family-name:var(--font-inter)] text-[#1C2B3A] overflow-x-hidden">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
