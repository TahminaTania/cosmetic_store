// import React from 'react'
// import { useRouter } from 'next/router'

// function ProductDetails() {
//     const router = useRouter()
//   return (
//     <div>ProductDetails :
// {/* 
// <p>Post: {router.query.slug}</p> */}

// <div>
//     <img src=''/>
//     <div>details.......................</div>
//     <div><button
//   onClick={() => addToCart()}
//   className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2"
// >
//   Add to cart
// </button></div>
// </div>
//     </div>
//   )
// }

// export default ProductDetails


//
// pages/details/[slug].js
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch the product details based on the slug from your data source

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product Slug: {slug}</p>
      {/* Display other product details here */}
    </div>
  );
};

export default ProductDetails;

