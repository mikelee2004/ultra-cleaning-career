# 🧹 Ultra Cleaning Jobs - Сайт вакансий клинеров

Лендинг для привлечения клинеров в компанию "Ультра Клининг" (Краснодар).

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Запуск production
npm start
```

Открой [http://localhost:3000](http://localhost:3000) в браузере.

---

## 📋 Возможности

### ✨ Основные функции:
- 📝 Форма заявки с отправкой в Telegram через Cloudflare Worker
- 📱 Полностью адаптивный дизайн (mobile-first)
- ⚡ Оптимизированная производительность (Next.js 16 + Turbopack)
- 🎨 Современный UI с Tailwind CSS 4
- ♿ Доступность (ARIA, семантический HTML)

### 🔍 SEO оптимизация (полная):
- ✅ Метатеги (Title, Description, Keywords)
- ✅ Open Graph для соцсетей (VK, Facebook, Telegram)
- ✅ Twitter Card
- ✅ JSON-LD Schema.org (Organization, JobPosting, FAQ, WebSite, Breadcrumbs)
- ✅ Динамические robots.txt и sitemap.xml
- ✅ PWA-ready (manifest.json)
- ✅ Геотаргетинг на Краснодар
- ✅ 35+ целевых ключевых слов
- ✅ Google for Jobs интеграция

---

## 📂 Структура проекта

```
ultra-cleaning-jobs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Главный layout с SEO
│   │   ├── page.tsx            # Главная страница
│   │   ├── sitemap.ts          # Динамический sitemap
│   │   ├── robots.ts           # Динамический robots.txt
│   │   └── api/apply/          # API для отправки заявок
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Секции страницы
│   │   ├── seo/                # SEO компоненты
│   │   │   ├── StructuredData.tsx  # JSON-LD схемы
│   │   │   └── Breadcrumbs.tsx     # Хлебные крошки
│   │   └── ui/                 # UI компоненты (форма)
│   └── lib/                    # Утилиты, константы
├── public/                     # Статические файлы
│   ├── robots.txt              # SEO (резервная версия)
│   ├── sitemap.xml             # SEO (резервная версия)
│   ├── manifest.json           # PWA манифест
│   ├── og-image.png            # Open Graph изображение
│   └── *.png                   # Favicon, изображения
├── scripts/                    # Вспомогательные скрипты
│   ├── seo-check.js            # Проверка SEO
│   ├── check-config.js         # Проверка конфигурации
│   └── test-worker.js          # Тест Cloudflare Worker
├── SEO_SUMMARY.md              # Итоги SEO оптимизации
├── SEO_CHECKLIST.md            # Полный SEO чеклист
├── SEO_QUICK_GUIDE.md          # Быстрая инструкция (10 мин)
└── CLOUDFLARE_WORKER_SETUP.md  # Настройка Worker
```

---

## 🛠️ Доступные команды

```bash
# Разработка
npm run dev              # Запуск dev-сервера (Turbopack)

# Production
npm run build            # Сборка для production
npm start                # Запуск production сервера

# Проверки
npm run lint             # ESLint проверка кода
npm run seo-check        # Проверка SEO на localhost:3000
npm run seo-check:prod   # Проверка SEO на production

# Конфигурация
npm run check-config     # Проверка .env.local
npm run test-worker      # Тест Cloudflare Worker
```

---

## 🔍 SEO - Что сделано

### Полная оптимизация для поисковых систем:

✅ **Метаданные**
- Title: "Работа клинером в Краснодаре от 87 000 ₽ | Вакансии Ультра Клининг 2026"
- Description: 160 символов с призывом к действию
- 35+ целевых ключевых слов (основные + long-tail)

✅ **Структурированные данные (JSON-LD)**
- Organization - информация о компании
- JobPosting - вакансия для Google for Jobs
- FAQPage - 5 вопросов-ответов
- WebSite - схема сайта с поиском
- BreadcrumbList - навигация

✅ **Технический SEO**
- Динамические robots.txt и sitemap.xml
- Canonical URL
- Viewport оптимизация
- Favicon всех размеров
- PWA манифест
- Геотаргетинг (Краснодар)

✅ **Производительность**
- Next.js 16 с Turbopack
- Image optimization (WebP/AVIF)
- Compression (gzip/brotli)
- Cache-Control headers
- DNS prefetch

✅ **Соцсети**
- Open Graph (VK, Facebook, Telegram)
- Twitter Card
- OG изображение 1200x630

### 📖 Подробная документация:
- `SEO_SUMMARY.md` - итоги работы
- `SEO_CHECKLIST.md` - полный чеклист
- `SEO_QUICK_GUIDE.md` - быстрый старт за 10 минут

---

## 🎯 Следующие шаги

### Критически важные (сделай сразу):

1. **Google Search Console**
   ```
   1. Открой: https://search.google.com/search-console
   2. Добавь: https://rabota.cleankrd23.ru
   3. Верифицируй сайт
   4. Отправь sitemap.xml
   ```

2. **Яндекс.Вебмастер**
   ```
   1. Открой: https://webmaster.yandex.ru
   2. Добавь сайт
   3. Верифицируй
   4. Отправь sitemap
   ```

3. **Cloudflare Worker**
   ```
   Настрой отправку заявок в Telegram
   См. CLOUDFLARE_WORKER_SETUP.md
   ```

### Рекомендуемые:

4. Google Analytics 4
5. Яндекс.Метрика
6. Google Business Profile
7. Оптимизация изображений (WebP)

Подробности в `SEO_CHECKLIST.md`

---

## 🔧 Технологии

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Build**: Turbopack
- **Deploy**: Vercel (рекомендуется)

---

## 📊 Ожидаемые результаты

| Период | Показы/день | Клики/день | Заявки |
|--------|-------------|------------|--------|
| 1 месяц | 100-300 | 5-15 | 1-2/неделя |
| 3 месяца | 500-1000 | 25-50 | 3-5/неделя |
| 6 месяцев | 1000-2000 | 50-100 | 10-15/неделя |

---

## 🌐 Деплой

### Vercel (рекомендуется):

```bash
# Установи Vercel CLI
npm i -g vercel

# Деплой
vercel
```

### Другие платформы:
- Netlify
- Railway
- DigitalOcean App Platform

---

## 📞 Контакты

- **Сайт**: https://rabota.cleankrd23.ru
- **Компания**: Ультра Клининг
- **Телефон**: +7 (918) 467-66-19
- **Email**: commerce@uclea.ru
- **VK**: https://vk.com/ultra23ru
- **Telegram**: https://t.me/ultracleaninfo

---

## 📄 Лицензия

© 2026 Ультра Клининг. Все права защищены.

---

## 🙌 Поддержка

Если возникнут вопросы:
1. Проверь документацию в папке проекта
2. Запусти `npm run seo-check` для диагностики
3. Смотри логи в консоли браузера (F12)

**Удачи с продвижением! 🚀**
