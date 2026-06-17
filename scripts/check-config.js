#!/usr/bin/env node

/**
 * Проверка конфигурации для интеграции с Cloudflare Worker и Telegram
 * Запуск: node scripts/check-config.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Проверка конфигурации...\n');

let hasErrors = false;

// Проверка .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('❌ Файл .env.local не найден');
  console.log('   Создай его на основе .env.local.example\n');
  hasErrors = true;
} else {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  
  // Проверяем CLOUDFLARE_WORKER_URL
  if (!envContent.includes('CLOUDFLARE_WORKER_URL=')) {
    console.error('❌ CLOUDFLARE_WORKER_URL не найден в .env.local');
    hasErrors = true;
  } else if (envContent.includes('CLOUDFLARE_WORKER_URL=https://your-worker-name')) {
    console.warn('⚠️  CLOUDFLARE_WORKER_URL содержит placeholder значение');
    console.log('   Замени на реальный URL твоего Worker\n');
    hasErrors = true;
  } else {
    console.log('✅ CLOUDFLARE_WORKER_URL настроен');
  }

  // Проверяем WORKER_API_KEY
  if (!envContent.includes('WORKER_API_KEY=')) {
    console.warn('⚠️  WORKER_API_KEY не найден (опционально, но рекомендуется)');
  } else if (envContent.includes('WORKER_API_KEY=your_secret')) {
    console.warn('⚠️  WORKER_API_KEY содержит placeholder значение');
  } else {
    console.log('✅ WORKER_API_KEY настроен');
  }
}

// Проверка Cloudflare Worker файла
const workerJsPath = path.join(__dirname, '..', 'cloudflare-worker.js');
const workerTsPath = path.join(__dirname, '..', 'cloudflare-worker.ts');

if (fs.existsSync(workerJsPath)) {
  console.log('✅ cloudflare-worker.js найден');
} else {
  console.warn('⚠️  cloudflare-worker.js не найден');
}

if (fs.existsSync(workerTsPath)) {
  console.log('✅ cloudflare-worker.ts найден');
} else {
  console.warn('⚠️  cloudflare-worker.ts не найден');
}

// Проверка wrangler.toml
const wranglerPath = path.join(__dirname, '..', 'wrangler.toml');
if (fs.existsSync(wranglerPath)) {
  console.log('✅ wrangler.toml найден');
} else {
  console.warn('⚠️  wrangler.toml не найден (нужен только для деплоя через CLI)');
}

// Проверка API route
const apiRoutePath = path.join(__dirname, '..', 'src', 'app', 'api', 'apply', 'route.ts');
if (fs.existsSync(apiRoutePath)) {
  console.log('✅ API route (src/app/api/apply/route.ts) существует');
} else {
  console.error('❌ API route не найден');
  hasErrors = true;
}

console.log('\n' + '='.repeat(50));

if (hasErrors) {
  console.log('\n❌ Найдены ошибки в конфигурации');
  console.log('📖 Смотри инструкцию: CLOUDFLARE_WORKER_SETUP.md\n');
  process.exit(1);
} else {
  console.log('\n✅ Конфигурация выглядит хорошо!');
  console.log('\n📝 Следующие шаги:');
  console.log('   1. Деплой Worker в Cloudflare');
  console.log('   2. Настрой переменные окружения в Worker:');
  console.log('      - TELEGRAM_BOT_TOKEN');
  console.log('      - TELEGRAM_CHAT_ID');
  console.log('      - API_KEY (опционально)');
  console.log('   3. Запусти: npm run dev');
  console.log('   4. Протестируй форму на сайте\n');
}
