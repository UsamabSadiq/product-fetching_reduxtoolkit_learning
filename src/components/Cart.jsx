import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

// import Button from './Button';

const Cart = () => {
    const dispatch = useDispatch()
    // 1. Hamain cart k page pr apny wo products show kr ny ha jo hum na home page sa add kry thy thy, aur wo products hamari cart ki state ma pary ha jo hum na store.js(cart:cartSlice) ki file ma bnayi ha.
    //2. agr hamain koi bhi state globally access kr ni ha tw store ki state ko call krain ga.
    const cartProduct = useSelector(state => state.cart)

    const removeFromCart = (id) => {
        // dispatch add action
        dispatch(remove(id))
    }
    return (
        <>

            <div className="main grid grid-cols-3 md:grid-cols-5 gap-3 m-3">
                {
                    cartProduct.map((product => {
                        return (
                            <div key={product.id} className="max-w-[15rem] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='overflow-hidden'>
                                    <img className="rounded-t-lg h-60 w-full hover:scale-105 duration-150" src={product.image} alt="" />
                                </div>
                                <div className="p-5">
                                    <a href="/">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate ">{product.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ">{product.description}</p>
                                    {/* onClick={() => addToCart(product)}  */}
                                    <button onClick={() => removeFromCart(product.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        Remove From Cart
                                    </button>
                                    {/* <Button primary="bg-red-600" secondary="bg-red-700 " last="bg-red-800" >Remove From Cart</Button> */}
                                </div>
                            </div>
                        )
                    }))
                }

            </div>
        </>
    )
}

export default Cart
