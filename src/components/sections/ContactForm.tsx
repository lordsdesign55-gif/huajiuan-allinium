'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Нэр хамгийн багадаа 2 үсэг байх ёстой'),
  email: z.string().email('Зөв имэйл хаяг оруулна уу'),
  phone: z.string().min(8, 'Утасны дугаар бүрэн оруулна уу'),
  message: z.string().min(10, 'Мессеж хамгийн багадаа 10 үсэг байх ёстой'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitError(null);
      setMailtoLink(null);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        reset();
      } else if (result.mailto) {
        setMailtoLink(result.mailto);
        setSubmitError(t('emailNotConfigured'));
      } else {
        setSubmitError(t('error'));
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setSubmitError(t('error'));
    }
  };

  const openMailto = () => {
    const data = getValues();
    const body = `Нэр: ${data.name}\nИмэйл: ${data.email}\nУтас: ${data.phone}\n\n${data.message}`;
    window.location.href = `mailto:gergroup11@gmail.com?subject=${encodeURIComponent('Үнийн санал хүсэлт')}&body=${encodeURIComponent(body)}`;
  };

  if (submitted) {
    return (
      <div className="bg-muted p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">{t('successTitle')}</h3>
        <p className="mt-2 text-muted-foreground">{t('successMessage')}</p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          {t('again')}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {submitError && (
        <div className="bg-destructive/10 border border-destructive p-3 text-sm text-destructive">
          {submitError}
          {mailtoLink && (
            <div className="mt-2">
              <Button type="button" variant="outline" size="sm" onClick={openMailto}>
                {t('sendViaEmail')}
              </Button>
            </div>
          )}
        </div>
      )}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">{t('name')}</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={cn(
            'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
            errors.name && 'border-destructive'
          )}
          placeholder={t('namePlaceholder')}
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">{t('email')}</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
              errors.email && 'border-destructive'
            )}
            placeholder={t('emailPlaceholder')}
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">{t('phone')}</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={cn(
              'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
              errors.phone && 'border-destructive'
            )}
            placeholder={t('phonePlaceholder')}
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">{t('message')}</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={cn(
            'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
            errors.message && 'border-destructive'
          )}
          placeholder={t('messagePlaceholder')}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
}
