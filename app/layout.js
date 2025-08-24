import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import { ThemeProvider } from 'next-themes';
import { metaDataContent } from "@/_components/Data";
import StructuredData from "@/_components/StructuredData";
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // add weights you need
  display: 'swap',
  variable: '--font-poppins', // optional, for Tailwind use
})

export const metadata = {
  ...metaDataContent,
  metadataBase: new URL(metaDataContent.metadataBase),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${poppins.variable}`}
       >
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar/>
            {children}
          <Footer />
           
        </ThemeProvider>
      </body>
    </html>
  );
}
