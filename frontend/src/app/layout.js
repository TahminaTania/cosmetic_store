import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/components/Header";
import Footer from "@/components/components/Footer";
import Categoriespage from "./categories/page";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>Cosmetic Store</title></head>
    
      <body className={inter.className}>

       <div>
        <Header/>
        <Categoriespage/>
         {children}
         <Footer/>
         </div>

        </body>
    
    </html>
  );
}

