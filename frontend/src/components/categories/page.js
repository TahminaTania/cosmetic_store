import React from 'react'
import Link from 'next/link';
import SearchBar from './searchbar';

function Categoriespage() {

  const categories= [
    { id: 1, name: "LIP", doc_count: 11 },
    { id: 2, name: "NAIL", doc_count: 8 },
    { id: 3, name: "HAIR", doc_count: 64 },
    { id: 4, name: "FACE", doc_count: 107 },
];
  return (
    <div>
      <div  className="w-full h-[40px] md:h-[40px] bg-gray-300 flex items-center justify-between z-20 top-0 transition-transform duration-300">
      <div className="flex flex-row items-center font-extrabold w-full">
          {categories.map((category) => (
            <Link href="/" key={category.id} className="text-white py-2 text-center hover:bg-blue-700 transition duration-300 w-full" >
           
              <div> {category.name} </div> 
            
            </Link>
          ))}
        </div>
      </div>
      <div className='p-5 w-full'>  <SearchBar/></div>
      
      
     </div>
  )
}

export default Categoriespage