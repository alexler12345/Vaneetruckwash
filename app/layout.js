import {Noto_Sans} from 'next/font/google'
import "./globals.css";
import React from 'react';
const poppins = Noto_Sans({
  weight:'700',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      
      <body className='m-0 bg-[#f9f9f9]'>
        
        {children}

      </body>
    </html>
  );
}
