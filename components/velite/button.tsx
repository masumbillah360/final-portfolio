import Link from 'next/link';
import { Button } from '../ui/button';

interface ButtonProps {
    label: string;
    type?: 'primary' | 'ghost' | 'outline' | 'secondary' | 'link';
    path: string;
}

export function MDXButton({
    label,
    type = 'primary',
    path,
}: Readonly<ButtonProps>) {
    return (
        <Link target="_blank" href={path} className="block m-2">
            <Button>{label}</Button>
        </Link>
    );
}
