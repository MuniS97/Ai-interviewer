import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className='root-layout'>
            <nav>
                <Link href='/' className='flex items-center gap-2'>
                    <Image src={"/logo.svg"} width={38} height={32} alt={"logo"} />
                    <h2 className='text-primary-100'>PrepWise</h2>
                </Link>
            </nav>

            {children}
        </div>
    );
};

export default RootLayout;