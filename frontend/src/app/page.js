import ProductCard from "@/components/components/ProductCard";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-teal-100 ">
  
      {/* <h1> </h1> */}
      <div className="grid lg:grid-cols-5  md:grid grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-5" onClick={""}>
        
        <ProductCard slug="product1"/>
        <ProductCard slug="product2"/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
        </div>

    </main>
  );
}
