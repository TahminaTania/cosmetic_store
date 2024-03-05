'use client'
import React from 'react'
import { useRouter } from 'next/router'

function ProductDetails() {
    // const router = useRouter()
  return (
    <div>ProductDetails :
{/* 
<p>Post: {router.query.slug}</p> */}

<div>
    <img src=''/>
    <div>details.......................</div>
    <div><button
  // onClick={() => addToCart()}
  className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2"
>
  Add to cart
</button></div>
</div>
    </div>
  )
}

export default ProductDetails

