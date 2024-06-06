'use client';

import { useEffect, useState } from 'react';

const usePathname = () => {
    const [pathname, setPathname] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.location.hash.slice(1) || '/';
        }
        return '/';
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleHashChange = () => {
            setPathname(window.location.hash.slice(1) || '/');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return pathname;
};

export default usePathname;
