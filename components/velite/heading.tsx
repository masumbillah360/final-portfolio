'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    children: ReactNode;
    type?: 'default' | 'warning' | 'danger';
    typo?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    classNames?: string;
}

export function Heading({ children, type, typo, classNames }: Readonly<Props>) {
    let fontSize = 'text-4xl';
    switch (typo) {
        case 'h2':
            fontSize = 'text-3xl';
            break;
        case 'h3':
            fontSize = 'text-2xl';
            break;
        case 'h4':
            fontSize = 'text-xl';
            break;
        case 'h5':
            fontSize = 'text-lg';
            break;
        case 'h6':
            fontSize = 'text-base';
            break;
    }
    return (
        <span
            className={cn(
                'block py-2 px-0 font-semibold',
                fontSize,
                classNames,
                {
                    'border-red-900 bg-red-50 dark:bg-slate-800':
                        type === 'danger',
                    'border-yellow-900 bg-yellow-50 dark:bg-slate-800':
                        type === 'warning',
                    'text-center': type === 'danger' && fontSize === 'text-4xl',
                }
            )}>
            {children}
        </span>
    );
}
