'use client';

import { useTranslations } from 'next-intl';
import { MotionSection } from '@/components/motion/MotionSection';

const standards = ['ASTM E2190', 'EN 1279-2', 'EN 673', 'CSA A440.2', 'GOST 30674', 'Passive House сертификат'];

const comparison = [
  { labelKey: 'uValue', v2: '1.4 W/m²K', v3: '0.9 W/m²K' },
  { labelKey: 'sound', v2: '32 dB', v3: '40 dB' },
  { labelKey: 'gValue', v2: '0.62', v3: '0.48' },
  { labelKey: 'standard', v2: 'Тохиромжтой', v3: 'Маш тохиромжтой' },
];

export function LowESection() {
  const t = useTranslations('services.lowE');

  return (
    <MotionSection className="mt-20 border-t border-border pt-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">{t('title')}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t('intro')}</p>
          <ul className="mt-6 grid gap-3">
            {standards.map((standard) => (
              <li key={standard} className="flex items-center gap-3 text-sm text-foreground">
                <span className="h-1.5 w-1.5 bg-accent" />
                {standard}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-muted p-6 lg:p-8">
          <h4 className="text-lg font-semibold text-foreground">{t('paneTitle')}</h4>
          <div className="mt-6 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="py-3 font-medium text-muted-foreground">{t('uValue')}</th>
                  <th className="py-3 font-medium text-foreground">{t('pane2')}</th>
                  <th className="py-3 font-medium text-foreground">{t('pane3')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map(({ labelKey, v2, v3 }) => (
                  <tr key={labelKey}>
                    <td className="py-3 text-muted-foreground">{t(labelKey)}</td>
                    <td className="py-3 text-foreground">{v2}</td>
                    <td className="py-3 font-medium text-accent">{v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t('note')}</p>
        </div>
      </div>
    </MotionSection>
  );
}
