import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";
import { ThemeProvider } from 'next-themes';
import { metaDataContent } from "@/_components/Data";
import StructuredData from "@/_components/StructuredData";

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
       className={poppins.className}
      >
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar/>
          <div className="w-full md:w-[65%] mx-auto">
            {children}
          </div>
            <Footer />
           
        </ThemeProvider>
      </body>
    </html>
  );
}
