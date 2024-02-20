import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, Decrement, RemoveCart, emptycart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import btn  from '../assets/back-button.png'
import delet from '../assets/delete.png'
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalqty = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce(
    (total, items) => total + items.price * items.qty,
    0
  );

  return (
    <>
      <div class="container mx-auto px-4 py-8">
      <Link to='/'>
   <img src={btn} className='w-10' alt="" />
</Link>
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
        <button onClick={()=>dispatch(emptycart())} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Delete All
    </button>
    </div>

    <div class="mt-8">
       {cart.map((item)=>{
          return (
            <div key={item.id}  className="flex items-center justify-center ">
            <div class=" flex justify-between items-center  md:flex-row border-b border-gray-400 py-1 m-1 shadow-md rounded-md">
            <div class="flex-shrink-0">
                <img src={item.image} alt="Product image" class="w-32 h-32 object-contain"/>
            </div>
            <div class="mt-2  md:mt-0 md:ml-2 ">
                <h2 class="text-lg font-bold">{item.title.slice(0,20)}</h2>
                <div class="mt-4 flex items-center">
                    <div class="flex items-center px-3">
                        <button class="bg-gray-200 rounded-l-lg px-2 py-1 font-semibold" onClick={()=>dispatch(Decrement(item))} >-</button>
                        <span class="mx-2 text-gray-600 font-semibold">{item.qty}</span>
                        <button class="bg-gray-200 rounded-r-lg px-2 py-1 font-semibold" onClick={()=>dispatch(AddToCart(item))} >+</button>
                    </div>
                    <div>
                <button className="text-red-400 px-5 " onClick={()=>dispatch(RemoveCart(item))}>
                  <img className="w-6" src={delet} alt="" />
                </button>

                    </div>
                    <span class="ml-auto px-3 font-bold">{item.price}rs</span>
                </div>
            </div>
        </div>
            </div>
          )
        })
       }
       
    </div>
    <div class="flex justify-end items-center mt-8 flex-col">
    <div>
    <span class="text-gray-600 mr-4 font-semibold">TotalQty:</span>
        <span class="text-xl font-bold">{totalqty}</span>
    </div>
    <div>
    <span class="text-gray-600 mr-4 font-semibold">Subtotal:</span>
        <span class="text-xl font-bold">{totalPrice}</span>
    </div>
      

    </div>
</div>
    </>
    
  );
};

export default Cart;
