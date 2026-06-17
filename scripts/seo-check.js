#!/usr/bin/env node

/**
 * Скрипт для быстрой проверки SEO на локальном сайте
 * Запуск: node scripts/seo-check.js
 */

const https = require('https');
const http = require('http');

console.log('🔍 Проверка SEO конфигурации...\n');

const baseUrl = process.argv[2] || 'http://localhost:3000';
const protocol = baseUrl.startsWith('https') ? https : http;

let passed = 0;
let failed = 0;

// Функция для проверки URL
function checkUrl(path, checkFn, description) {
  return new Promise((resolve) => {
    const url = `${baseUrl}${path}`;
    console.log(`\n📄 Проверка: ${description}`);
    console.log(`   URL: ${url}`);

    protocol.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const result = checkFn(res, data);
        if (result.success) {
          console.log(`   ✅ ${result.message}`);
          passed++;
        } else {
          console.log(`   ❌ ${result.message}`);
          failed++;
        }
        resolve();
      });
    }).on('error', (err) => {
      console.log(`   ❌ Ошибка: ${err.message}`);
      failed++;
      resolve();
    });
  });
}

// Проверки
async function runChecks() {
  // 1. Главная страница
  await checkUrl('/', (res, data) => {
    if (res.statusCode === 200) {
      // Проверяем наличие важных элементов
      const hasTitle = data.includes('<title>');
      const hasOG = data.includes('og:title');
      const hasJsonLD = data.includes('application/ld+json');
      
      if (hasTitle && hasOG && hasJsonLD) {
        return { success: true, message: 'Title, OG и JSON-LD найдены' };
      } else {
        return { success: false, message: `Отсутствуют элементы: ${!hasTitle ? 'Title ' : ''}${!hasOG ? 'OG ' : ''}${!hasJsonLD ? 'JSON-LD' : ''}` };
      }
    }
    return { success: false, message: `Статус ${res.statusCode}` };
  }, 'Главная страница');

  // 2. Robots.txt
  await checkUrl('/robots.txt', (res, data) => {
    if (res.statusCode === 200 && data.includes('User-agent')) {
      return { success: true, message: 'Доступен и содержит правила' };
    }
    return { success: false, message: 'Не найден или некорректен' };
  }, 'robots.txt');

  // 3. Sitemap.xml
  await checkUrl('/sitemap.xml', (res, data) => {
    if (res.statusCode === 200 && data.includes('<?xml') && data.includes('urlset')) {
      return { success: true, message: 'Доступен и корректен' };
    }
    return { success: false, message: 'Не найден или некорректен' };
  }, 'sitemap.xml');

  // 4. Manifest.json
  await checkUrl('/manifest.json', (res, data) => {
    if (res.statusCode === 200) {
      try {
        const manifest = JSON.parse(data);
        if (manifest.name && manifest.icons) {
          return { success: true, message: 'Корректный PWA манифест' };
        }
      } catch (e) {
        return { success: false, message: 'Некорректный JSON' };
      }
    }
    return { success: false, message: 'Не найден' };
  }, 'manifest.json');

  // 5. Favicon
  await checkUrl('/favicon-32x32.png', (res) => {
    if (res.statusCode === 200 && res.headers['content-type'].includes('image')) {
      return { success: true, message: 'Favicon доступен' };
    }
    return { success: false, message: 'Не найден' };
  }, 'Favicon');

  // 6. OG Image
  await checkUrl('/og-image.png', (res) => {
    if (res.statusCode === 200 && res.headers['content-type'].includes('image')) {
      return { success: true, message: 'OG изображение доступно' };
    }
    return { success: false, message: 'Не найдено' };
  }, 'OG Image');

  // Итоги
  console.log('\n' + '='.repeat(50));
  console.log(`\n📊 Результаты:`);
  console.log(`   ✅ Пройдено: ${passed}`);
  console.log(`   ❌ Провалено: ${failed}`);
  console.log(`   📈 Процент: ${Math.round((passed / (passed + failed)) * 100)}%\n`);

  if (failed === 0) {
    console.log('🎉 Отлично! Все проверки пройдены.\n');
    console.log('📝 Следующие шаги:');
    console.log('   1. Задеплой сайт на production');
    console.log('   2. Проверь через Google Rich Results Test');
    console.log('   3. Зарегистрируй в Search Console');
    console.log('   4. Отправь sitemap\n');
  } else {
    console.log('⚠️  Некоторые проверки не прошли.');
    console.log('   Проверь конфигурацию и перезапусти dev-сервер.\n');
  }

  // Дополнительные рекомендации
  console.log('🔗 Полезные ссылки для проверки:');
  console.log('   • Rich Results: https://search.google.com/test/rich-results');
  console.log('   • PageSpeed: https://pagespeed.web.dev/');
  console.log('   • Mobile-Friendly: https://search.google.com/test/mobile-friendly\n');
}

// Запуск
console.log(`🌐 Проверяю сайт: ${baseUrl}`);
console.log('⏳ Подождите...\n');

runChecks().catch(err => {
  console.error('❌ Ошибка при выполнении проверок:', err);
  process.exit(1);
});
