import {Noto_Sans} from 'next/font/google'
import "./globals.css";
import React from 'react';

const poppins = Noto_Sans({
  weight:'700',
  subsets: ['latin'],
  display: 'swap',
})



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
     
      
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="VTW" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="canonical" href="https://vaneetruckwash.net"/>
      </head>
      <body className='m-0'>
        {children}

      </body>
    </html>
  );
}
