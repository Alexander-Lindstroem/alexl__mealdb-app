import { Nunito, Bodoni_Moda, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { UserContextProvider, useUserContext } from "@/utils/contexts";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import UserLogic from '@/components/UserLogic';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-button',
  display: 'swap',
});

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-header',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${bodoniModa.variable} ${nunito.variable}`}>
      <body className='relative min-h-[100vh] h-full m-auto flex flex-col items-center lg:w-[960px] w-full'>
        <UserContextProvider>
            <Header />
            <UserLogic/>
            <main className='grow flex flex-col justify-center items-center'>
              {children}
            </main>
            <Footer/>
        </UserContextProvider>
      </body>
    </html>
  );
}
