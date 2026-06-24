'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function MotionSection({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
