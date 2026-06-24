'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-muted p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">Баярлалаа!</h3>
        <p className="mt-2 text-muted-foreground">Бид тантай удахгүй холбогдох болно.</p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Дахин илгээх
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Нэр</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={cn(
            'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
            errors.name && 'border-destructive'
          )}
          placeholder="Таны нэр"
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Имэйл</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
              errors.email && 'border-destructive'
            )}
            placeholder="info@example.mn"
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">Утас</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={cn(
              'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
              errors.phone && 'border-destructive'
            )}
            placeholder="+976 0000 0000"
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Мессеж</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={cn(
            'w-full border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none',
            errors.message && 'border-destructive'
          )}
          placeholder="Төслийнхөө талаар товч мэдээлэл бичнэ үү"
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? 'Илгээж байна...' : 'Илгээх'}
      </Button>
    </form>
  );
}
