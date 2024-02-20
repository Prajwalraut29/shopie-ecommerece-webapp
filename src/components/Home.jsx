import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/productSlice";
import { AddToCart } from "../redux/cartSlice";
import { motion } from "framer-motion";
import Data from "../data/Data";
import { Link } from 'react-router-dom';
import logo from '../assets/shopping-bag.png'
import image from '../assets/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.webp'
const Home = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const search = useSelector((state)=>state.search.search)
  const sortedProducts = [...Data].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh");
  };

  const GetData = () => {
    Data.map((item) => {
      return dispatch(addProducts(item));
    });
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-purple-300 to-blue-300">
    <div>
      <img src={image}  alt="" />
    </div>
      <button className="m-3 px-[18vw] py-2 rounded-md  bg-gradient-to-tr from-purple-300 to-pink-700 text-white font-semibold " onClick={toggleSortOrder}>
        {sortOrder === "lowToHigh" ? "Low to High" : "High to Low"}
      </button>
      <div className="flex gap-12 flex-wrap mt-5 items-center justify-center">
        { sortedProducts.map((item) => {
          return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&  (
            <motion.div whileHover={{ scale: 1.1 }} key={item.id}>
              <div className="relative bg-gradient-to-tr from-red-300 to-purple-400  flex flex-col text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-80 h-80">
                <div className="relative object-cover mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-90">
                  <img
                    src={item.image}
                    alt="card-image"
                    className="object-contain w-full h-full "
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {item.title.slice(0, 20)}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ">
                      {item.price} ₹
                    </p>
                  </div>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {item.description.slice(0, 40)}....
                  </p>
                </div>
                <div className="p-6 pt-0 flex items-center justify-around ">
                  <button
                    class="select-none rounded-lg bg-gradient-to-tr from-green-600 to-blue-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => dispatch(AddToCart(item))}
                  >
                    Add to cart
                  </button>
                  <Link to={`/product/${item.id}`}>
                  <button 
                    class="select-none rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    View Product
                  </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) 
        })}
      </div>
      <div>

      <footer class="w-full p-8 bg-white bg-gradient-to-tr from-purple-300 to-blue-300">
  <div
    class=" bg-gradient-to-tr from-purple-300 to-blue-300 flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
    <img src={logo} alt="logo-ct" class="w-10" />
    <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a href="#"
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          About Us
        </a>
      </li>
      <li>
        <a href="#"
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          License
        </a>
      </li>
      <li>
        <a href="#"
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          Contribute
        </a>
      </li>
      <li>
        <a href="#"
          class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          Contact Us
        </a>
      </li>
    </ul>
  </div>
  <span class="block my-8 border-t border-blue-gray-50" />
  <p class="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
 shopie    copyright reserved© 2024 
  </p>
</footer>
      </div>
    </div>
  );
};

export default Home;
