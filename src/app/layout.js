import ClientSideProviderTest from "@/components/clientSideProviderTest";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}

        <div className="container">

          <Navbar />
          {children}

          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}

      </body>
    </html>
  )
}