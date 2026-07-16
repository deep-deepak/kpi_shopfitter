
import Accreditations from '@/components/Accreditations';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main >{children}</main>
            <Accreditations />
            <Footer />
        </>
    );
};

export default Layout;
