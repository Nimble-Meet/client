import React from 'react';

import AuthLayout from '@/view/layout/auth';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
