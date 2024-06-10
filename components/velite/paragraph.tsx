'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps {
    children: ReactNode;
}

export function Paragraph({ children }: Readonly<ParagraphProps>) {
    return <span className={cn('block py-2 px-0')}>{children}</span>;
}
