import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
// import Button from './Button'


const Products = () => {
    const dispatch = useDispatch()

    const [stateData, setStateData] = useState([])
    const dataFetching = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setStateData(data)
        // console.log(data);
    }

    useEffect(() => {
        dataFetching()
    }, [])

    const addToCart = (product) => {
        // console.log(product);
        // dispatch add action
        dispatch(add(product))
    }
    return (
        <>
            <div className="main grid grid-cols-3 md:grid-cols-5 gap-3 m-3">
                {
                    stateData.map((product) => {
                        return (
                            <div key={product.id} className="max-w-[15rem] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='overflow-hidden'>
                                    <img className="rounded-t-lg h-60 w-full hover:scale-105 duration-150" src={product.image} alt="" />
                                </div>
                                <div className="p-5">
                                    <a href="/">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{product.description}</p>
                                    <button onClick={() => addToCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add To Cart

                                    </button>
                                    {/* <Button primary="bg-blue-600" secondary="bg-blue-700 " last="bg-blue-800" onClick={() => addToCart(product)}>Add To Cart</Button> */}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Products
