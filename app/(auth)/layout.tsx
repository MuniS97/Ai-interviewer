import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
    const isUserAuthenticated = await isAuthenticated();

    if (isUserAuthenticated) redirect('/');

    return (
        <div className='auth-layout'>{children}</div>
    );
};

export default AuthLayout;