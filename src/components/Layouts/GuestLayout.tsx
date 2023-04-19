import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
    children?: ReactNode;
}

const GuestLayout = ({ children }: Props) => (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
);

export {GuestLayout};
