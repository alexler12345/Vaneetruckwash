import {Noto_Sans} from 'next/font/google'
import "./globals.css";
import React from 'react';

const poppins = Noto_Sans({
  weight:'700',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Vanee Truck Wash",
  description: "Where Big Rigs Shine and Trailers Sparkle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>

      <script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5MHJN69F');
          `}
        </script>
     
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

      </head>
      <body className='m-0 bg-[#f9f9f9]'>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MHJN69F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}

      </body>
    </html>
  );
}
