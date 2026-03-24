import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Future Farms Initiative | Modernizing East African Agriculture",
  description:
    "Leading the transition of traditional East African farms into future-ready, profitable, and tech-driven enterprises. Join our mission to create 100,000 sustainable farm businesses by 2035.",
  keywords: [
    "Future Farms Initiative",
    "Agri-tech East Africa",
    "Sustainable Farming Kenya",
    "Farm Management Rwanda",
    "Agricultural Innovation Africa",
    "Investor Ready Farms",
    "Farming as a Business",
  ],
  openGraph: {
    title: "Future Farms Initiative",
    description:
      "Redesigning agricultural systems to be efficient, resilient, and market-aligned across East Africa.",
    url: "https://arbarnegroup.com/",
    siteName: "Future Farms Initiative",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased  `}
      >
        
        <Navbar />

       <SidebarProvider>
          
          <div className="flex max-w-full overflow-hidden ">
            
           
            <AppSidebar />

            
            <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
              
              
              <main className="flex-1 p-1 md:p-2 ">
                <div className="max-w-7xl mx-auto">
                  {children}
                </div>
              </main>

              
              <Footer />
              
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
