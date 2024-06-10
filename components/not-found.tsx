'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

interface Props {
    message: string;
    path: string;
    pathLabel: string;
    keyWord: string;
}
const NotFound = ({ message, path, pathLabel, keyWord }: Props) => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="font-extrabold text-3xl text-slate-500 uppercase">
                    {message}
                </h1>
                <h4>
                    With This <span className="font-bold">{keyWord}</span>{' '}
                    Keyword
                </h4>
                <Link className="block mt-3" href={path || '/'}>
                    <Button>{pathLabel}</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
