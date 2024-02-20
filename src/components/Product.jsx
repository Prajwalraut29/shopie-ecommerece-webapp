import React from "react";
import { useParams } from "react-router-dom";
import Data from "./../data/Data";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Product = () => {
  let { productId } = useParams();
  const item = Data.find((item) => item.id == productId);
  const dispatch = useDispatch();
  return (
    <div className=" flex mt-5 mx-5  items-center justify-center ">
      <div class="relative bg-gradient-to-tr from-red-300 to-purple-400 flex flex-col items-center bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] ">
        <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={item.image}
            alt="card-image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="p-6">
          <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            {item.category}
          </h6>
          <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {item.title}
          </h4>
          <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {item.description}
          </p>
          <div className="flex gap-3 items-center justify-center">
          <button
            class="flex bg-black text-white items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
            onClick={() => dispatch(AddToCart(item))}
          >
            {" "}
            Add to Cart
          </button>
<Link to='/'>
<button
            class="flex bg-transparent slate-50 text-dark items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Continue shopping
          </button>

</Link>
         

          </div>
         
       
        </div>
      </div>
    </div>
  );
};

export default Product;
