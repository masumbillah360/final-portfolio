'use client';

import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';

import { CallOut } from './callout';
import { Heading } from './heading';
import { Paragraph } from './paragraph';
import { MDXButton } from './button';

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

const components = {
    Image,
    CallOut,
    Heading,
    Paragraph,
    MDXButton
};

interface MdxProps {
    code: string;
}

export function MDXContent({ code }: Readonly<MdxProps>) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;
}
