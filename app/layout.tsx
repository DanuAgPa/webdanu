// layout.tsx - All in One
import Head from 'next/head';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Resep Nusantara - Berita Kuliner Indonesia</title>
        <meta name="description" content="Portal berita dan resep masakan Indonesia terbaru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="layout">
        {children}
      </div>
    </>
  );
}