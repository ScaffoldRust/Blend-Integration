import React, { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FinalCTASectionProps {
  headline?: string;
  subtitle?: string;
  buttons?: {
    variant: 'secondary' | 'outline';
    title: string;
    link: string | ((params: any) => void); // eslint-disable-line @typescript-eslint/no-explicit-any
    icon?: ReactNode;
  }[];
}

export default function FinalCTASection({
  headline = '',
  subtitle = '',
  buttons = [],
}: FinalCTASectionProps) {
  return (
    <section className="w-full px-6 py-20 text-center text-white bg-gradient-to-r from-orange-500 to-red-500">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl">{headline}</h2>

        <p className="text-lg text-white/90">{subtitle}</p>

        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          {buttons.map((btn, i) => {
            return (
              <Button
                key={i}
                asChild={typeof btn.link === 'string'}
                variant={btn.variant}
                className={
                  'px-6 py-3 transition-transform hover:scale-105 ' +
                  (btn.variant === 'secondary'
                    ? 'text-gray-900 bg-white '
                    : 'text-white !bg-transparent border-white hover:!bg-white/10 hover:text-white')
                }
              >
                {typeof btn.link === 'string' ? (
                  <Link href={btn.link}>
                    {btn.icon ?? ''}
                    {btn.title}
                  </Link>
                ) : (
                  <>
                    {btn.icon ?? ''}
                    {btn.title}
                  </>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
