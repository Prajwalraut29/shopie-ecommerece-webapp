import React, { useSyncExternalStore } from 'react'
import cart from '../assets/bag.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchproduct } from '../redux/searchSlice';
const Navbar = () => {
  const cartItems = useSelector((state)=>state.cart.cart)
 const dispatch = useDispatch()
  return (
    <>
        <nav className='shadow-md w-full h-16 flex items-center justify-around  bg-gradient-to-tr from-purple-400 to-pink-500'>
            <div>
            <Link to='/'>
            <h2 className='text-3xl'>Shopie</h2>
            </Link>
            </div>
             <div className='flex items-center gap-5'>
             <input onChange={(e)=>dispatch(searchproduct(e.target.value))} placeholder='search your fev products' type="text" className='w-[25vw] h-9 rounded-md bg-slate-50' />
               <div>
               <Link to='/cart'>
               {cartItems.length > 0 ? (
          <span className=" bg-red-500 shadow-md absolute text-sm rounded-full p-1  top-1 right-30">
            {cartItems.length}
          </span>
        ) : null}
               <img src={cart} className='w-10' alt="" />          
               </Link>
               </div>
             </div>
        </nav>
    </>
  )
}

export default Navbar
