'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [hasMounted, setHasMounted] = React.useState(false)
    React.useEffect(() => {
        setHasMounted(true)
    }, [])
    if(!hasMounted) {
        return null;
    }
    const themeToggler = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <Button onClick={themeToggler} variant="outline" size="icon">
            {theme === 'dark' ? (
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
