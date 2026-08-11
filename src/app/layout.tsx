import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PROACTIVE ACCOUNTING AND FINANCIAL SERVICES",
  description: "CA firm providing quick tax solutions, bookkeeping, full-cycle accounting, and financial services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <header className="bg-primary text-on-primary py-4 px-6 md:px-12 flex justify-between items-center shadow-md sticky top-0 z-50">
          <div className="font-heading font-bold text-xl md:text-2xl tracking-tight">
            PROACTIVE
            <span className="block text-xs font-normal opacity-80 uppercase tracking-widest mt-1">
              Accounting & Financial Services
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-accent transition-colors font-medium">Home</a>
            <a href="#about" className="hover:text-accent transition-colors font-medium">About</a>
            <a href="#contact" className="hover:text-accent transition-colors font-medium">Contact</a>
            <a href="#contact" className="bg-accent text-on-primary px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-sm">
              Get Started
            </a>
          </nav>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="bg-secondary text-white py-12 px-6 md:px-12 mt-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Proactive Accounting</h3>
              <p className="opacity-80 max-w-sm">Professional CA firm providing quick tax solutions, bookkeeping, and GAAP compliance services.</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
              <p className="opacity-80">Email: <a href="mailto:proactiveafs@gmail.com" className="hover:text-accent transition-colors">proactiveafs@gmail.com</a></p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-60 text-sm">
            &copy; {new Date().getFullYear()} PROACTIVE ACCOUNTING AND FINANCIAL SERVICES. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
