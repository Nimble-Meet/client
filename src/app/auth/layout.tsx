import React from 'react';

import AuthLayout from '@/view/authLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
