'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ApplyFormProps {
  /** Заголовок формы */
  title?: string;
  /** Подзаголовок */
  subtitle?: string;
}

export default function ApplyForm({
  title = 'Оставить заявку',
  subtitle = 'Перезвоним в течение часа',
}: ApplyFormProps) {
  const [form, setForm] = useState({ name: '', phone: '+7', age: '', experience: '', schedule: 'full' });
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  const handlePhone = (v: string) => {
    if (!v.startsWith('+7')) v = '+7';
    const digits = v.slice(2).replace(/\D/g, '').slice(0, 10);
    setForm(f => ({ ...f, phone: '+7' + digits }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { setError('Введите имя'); return; }
    if (!/^\+7\d{10}$/.test(form.phone)) { setError('Введите корректный номер'); return; }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Не удалось отправить. Позвоните нам напрямую.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto mb-6 shadow-[0_10px_25px_rgba(16,185,129,0.3)]">
          <CheckCircle size={40} strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black text-white mb-3">Заявка отправлена!</h3>
        <p className="text-white/70 leading-[1.6]">Мы перезвоним вам в течение часа для уточнения деталей.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-2xl font-black text-white mb-1">{title}</h3>
      <p className="text-white/60 text-sm mb-2">{subtitle}</p>

      <input
        aria-label="Ваше имя"
        placeholder="Ваше имя *"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/g, '').slice(0, 30) }))}
        className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors text-base"
      />

      <input
        type="tel"
        aria-label="Номер телефона"
        placeholder="+7 (___) ___-__-__ *"
        value={form.phone}
        onChange={e => handlePhone(e.target.value)}
        className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors text-base"
      />

      <input
        type="number"
        aria-label="Возраст"
        placeholder="Возраст (необязательно)"
        min={18} max={70}
        value={form.age}
        onChange={e => setForm(f => ({ ...f, age: e.target.value }))}
        className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors text-base"
      />

      <textarea
        aria-label="Опыт работы"
        placeholder="Расскажите об опыте уборки (необязательно)"
        rows={3}
        value={form.experience}
        onChange={e => setForm(f => ({ ...f, experience: e.target.value.slice(0, 300) }))}
        className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors text-base resize-none"
      />

      <div>
        <p className="text-white/60 text-sm mb-2">Желаемый график:</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: 'full',    label: 'Полный день' },
            { value: 'partial', label: 'Частичная' },
            { value: 'weekend', label: 'Выходные' },
          ].map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setForm(f => ({ ...f, schedule: opt.value }))}
              className={`py-2.5 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${
                form.schedule === opt.value
                  ? 'bg-[#A70000] border-[#A70000] text-white'
                  : 'bg-white/10 border-white/10 text-white/70 hover:border-white/30'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-[#ff6b6b] text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 py-[18px] rounded-2xl bg-[#A70000] text-white font-extrabold text-lg border-none cursor-pointer shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:-translate-y-0.5 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? 'Отправка...' : 'Отправить заявку'}
      </button>

      <p className="text-xs text-white/30 text-center">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}
