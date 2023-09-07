import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const cartProduct = useSelector(state => state.cart)

    const navItem = [
        {
            item: "Home",
            route: "/"
        },
        {
            item: "Products",
            route: "/products"
        }
    ]
    return (
        <>

            <nav className="bg-white sticky dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Redux Toolkit</span>
                    </Link>
                    <div className="flex md:order-2">
                        <Link to="/cart" type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">My Bag: {cartProduct.length} </Link>

                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex gap-4 p-4 md:p-0 mt-4 font-medium ">
                            {
                                navItem.map(item => {
                                    return (
                                        <li key={item.route}>
                                            <Link to={item.route} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-blue-700 ">{item.item}</Link>
                                        </li>
                                    )
                                })
                            }


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
