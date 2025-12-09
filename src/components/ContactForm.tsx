'use client';

import { useState, useRef } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setErrorMessage('Por favor, completa la verificación de seguridad');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      }
    } catch {
      setStatus('error');
      setErrorMessage('Error de conexión. Intenta de nuevo.');
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold">Nombre</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[#3a4757] border border-[#9DB8CC]/20 rounded-lg focus:border-[#9DB8CC] focus:outline-none focus:ring-2 focus:ring-[#9DB8CC]/20 text-[#f1e2c2] placeholder-[#9DB8CC]/50 transition-all duration-200"
            placeholder="Tu nombre"
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-[#3a4757] border border-[#9DB8CC]/20 rounded-lg focus:border-[#9DB8CC] focus:outline-none focus:ring-2 focus:ring-[#9DB8CC]/20 text-[#f1e2c2] placeholder-[#9DB8CC]/50 transition-all duration-200"
            placeholder="tu@email.com"
            required
            disabled={status === 'loading'}
          />
        </div>
      </div>
      <div>
        <label className="block mb-2 font-semibold">¿Cómo podemos ayudarte?</label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-[#3a4757] border border-[#9DB8CC]/20 rounded-lg focus:border-[#9DB8CC] focus:outline-none focus:ring-2 focus:ring-[#9DB8CC]/20 text-[#f1e2c2] placeholder-[#9DB8CC]/50 resize-none transition-all duration-200"
          placeholder="Cuéntanos sobre tu proyecto o desafío..."
          required
          disabled={status === 'loading'}
        />
      </div>

      {/* Turnstile CAPTCHA */}
      <div className="flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={setTurnstileToken}
          onError={() => {
            setTurnstileToken(null);
            setErrorMessage('Error en la verificación. Intenta de nuevo.');
          }}
          onExpire={() => setTurnstileToken(null)}
          options={{
            theme: 'dark',
          }}
        />
      </div>

      {/* Mensajes de estado */}
      {status === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
          <p className="text-green-300">¡Mensaje enviado! Te contactaremos pronto.</p>
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
          <p className="text-red-300">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !turnstileToken}
        className="w-full px-8 py-4 bg-[#D97C7E] text-[#414d6e] rounded-lg font-bold hover:bg-[#E68A8C] transition-all duration-300 text-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D97C7E]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
