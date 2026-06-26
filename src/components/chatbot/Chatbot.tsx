'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { MessageCircle, X, Send, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  options?: string[];
}

export function Chatbot() {
  const t = useTranslations('chatbot');
  const locale = useLocale();
  const isEn = locale === 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
      text: t('welcome'),
      options: [t('options.services'), t('options.quote'), t('options.contact'), t('options.priceList')],
    },
      ]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOption = (option: string) => {
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: option };
    setMessages((prev) => [...prev, userMsg]);

    let botResponse: Message;

    if (option === t('options.services') || option === t('options.services')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.services'),
        options: [t('options.glass'), t('options.metalWindows'), t('options.metalFacade'), t('options.insulation'), t('options.back')],
      };
    } else if (option === t('options.priceList')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.priceList'),
        options: [t('options.quote'), t('options.back')],
      };
    } else if (option === t('options.glass')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.glass'),
        options: [t('options.quote'), t('options.back')],
      };
    } else if (option === t('options.metalWindows')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.metalWindows'),
        options: [t('options.quote'), t('options.back')],
      };
    } else if (option === t('options.metalFacade')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.metalFacade'),
        options: [t('options.quote'), t('options.back')],
      };
    } else if (option === t('options.insulation')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.insulation'),
        options: [t('options.quote'), t('options.back')],
      };
    } else if (option === t('options.quote')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.quote'),
        options: [t('options.openForm'), t('options.back')],
      };
    } else if (option === t('options.openForm')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.formLink'),
        options: [t('options.back')],
      };
    } else if (option === t('options.contact')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.contact'),
        options: [t('options.back'), t('options.close')],
      };
    } else if (option === t('options.prices') || option === t('options.priceList')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.priceList'),
        options: [t('options.quote'), t('options.back')],
      };
    } else if (option === t('options.back')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('welcome'),
        options: [t('options.services'), t('options.quote'), t('options.contact'), t('options.prices')],
      };
    } else {
      botResponse = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: t('responses.fallback'),
        options: [t('options.quote'), t('options.contact'), t('options.back')],
      };
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    handleOption(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105',
          isOpen ? 'bg-foreground text-background rotate-90' : 'bg-accent text-white'
        )}
        aria-label={isOpen ? t('close') : t('open')}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[360px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-lg border border-border bg-background shadow-2xl">
          {/* Header */}
          <div className="bg-card p-4 text-card-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-white">{t('title')}</div>
                <div className="text-xs text-white/60">{t('subtitle')}</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex h-[380px] flex-col gap-4 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div key={msg.id} className={cn('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}>
                <div
                  className={cn(
                    'max-w-[85%] rounded-lg px-4 py-3 text-sm',
                    msg.role === 'user' ? 'bg-accent text-white' : 'bg-muted text-foreground'
                  )}
                >
                  {msg.text}
                </div>
                {msg.options && (
                  <div className="mt-2 flex max-w-[95%] flex-wrap gap-2">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOption(opt)}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent hover:text-white transition-colors"
                      >
                        {opt}
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    ))}
                  </div>
                )}
                {msg.text === t('responses.formLink') && (
                  <div className="mt-2">
                    <Button variant="primary" size="sm" asChild>
                      <Link href="/contact">{isEn ? 'Open form' : 'Маягт нээх'}</Link>
                    </Button>
                  </div>
                )}
                {msg.text === t('responses.contact') && (
                  <div className="mt-2 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +976 7000 9559</div>
                    <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> gergroup11@gmail.com</div>
                    <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {isEn ? 'Bayanzurkh district, 5th khoroo' : 'Баянзүрх дүүрэг, 5-р хороо'}</div>
                    <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> 08:00 - 18:00</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('placeholder')}
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white hover:bg-accent/90"
              aria-label={t('send')}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
