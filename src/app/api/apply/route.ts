import { NextRequest, NextResponse } from 'next/server';

// URL вашего Cloudflare Worker
const WORKER_URL = process.env.CLOUDFLARE_WORKER_URL;

export async function POST(req: NextRequest) {
  if (!WORKER_URL) {
    return NextResponse.json({ error: 'Worker URL not configured' }, { status: 500 });
  }

  const body = await req.json();
  const { name, phone, age, experience, schedule } = body;

  // Валидация
  if (!name || !phone) {
    return NextResponse.json({ error: 'Заполните обязательные поля' }, { status: 400 });
  }

  // Отправляем данные на Cloudflare Worker
  try {
    console.log('Sending to Worker:', WORKER_URL);
    
    const res = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        // Опционально: добавь секретный ключ для защиты воркера
        'X-API-Key': process.env.WORKER_API_KEY || '',
      },
      body: JSON.stringify({
        name,
        phone,
        age,
        experience,
        schedule,
        timestamp: new Date().toISOString(),
      }),
    });

    console.log('Worker response status:', res.status);

    if (!res.ok) {
      const error = await res.text().catch(() => 'Unknown error');
      console.error('Worker error response:', error);
      return NextResponse.json({ 
        error: 'Failed to submit application',
        details: error 
      }, { status: 500 });
    }

    const result = await res.json();
    console.log('Worker success:', result);
    return NextResponse.json({ ok: true, data: result });
  } catch (e) {
    console.error('Network error:', e);
    return NextResponse.json({ 
      error: 'Network error',
      details: e instanceof Error ? e.message : 'Unknown error'
    }, { status: 500 });
  }
}
