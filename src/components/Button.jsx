import React from 'react'

const Button = ({ children, primary, secondary, last }) => {
    return (
        // onClick={() => addToCart(product)}
        <>
            <button className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${secondary} rounded-lg hover:${last} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:${primary} dark:hover:${secondary} dark:focus:ring-blue-800`}>
                {children}

            </button>
        </>
    )
}

export default Button
