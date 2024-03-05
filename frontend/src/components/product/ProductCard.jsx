
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({  }) => {
    return (
        <Link
            href={`/product/`}
            className=" overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            {/* <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            /> */}

            <img src="/assests/barbie pink.png" className=" w-full"/>
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-sm font-semibold"> 6777
                        {/* &#8377;{p.price} */}
                    </p>
                    <p className=" mr-2 text-lg font-small font-semibold line-through"> 566</p>
                    <p className="ml-auto text-base font-small text-green-500">25% off</p>

              
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;