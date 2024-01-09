import React from 'react';
import HeaderTwo from '@/components/HeaderTwo';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderTwo isDarkLogoSame={true} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
