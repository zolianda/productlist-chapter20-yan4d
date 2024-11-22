import React, { useEffect, useRef, useState } from 'react'
import CardProduct from '../Fragments/CardProduct'
import CartProduct from '../Fragments/CartProduct'
import ButtonComponent from '../Elements/Button'
import { getProduct } from '../services/product'
import { useLogin } from '../services/uselogin'

const Product = () => {
    const email = localStorage.getItem('email')
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "block";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    useEffect(() => {
        getProduct((data) => {
            setProducts(data)
        })
    }, [])

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0)
            setTotalPrice(sum);
        }
    }, [cart, products]);

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <>
            <div className='flex justify-end h-20 bg-gray-500 text-white items-center px-10'>
                {username}
                <ButtonComponent classname="bg-stone-500 ml-5"
                    onClick={handleLogout}>Logout</ButtonComponent>
            </div>
            <div className='flex md:flex-row flex-col md:items-start items-center'>
                <div className='flex justify-center py-5 flex-wrap gap-5 md:w-4/6 w-full'>
                    {
                        products.length > 0 && products.map((items) => (
                            <CardProduct key={items.id}>
                                <CardProduct.HeaderCard image={items.image} title={items.title} />
                                <CardProduct.BodyCard
                                    description={items.description} />
                                <CardProduct.FooterCard
                                    price={items.price}
                                    id={items.id}
                                    handleAddtocart={handleAddToCart} />
                            </CardProduct>
                        ))
                    }
                </div>
                <div className="md:w-2/6 py-3 w-full max-w-sm flex flex-col justify-center">
                    <h1 className='text-3xl font-bold text-black'>Cart Items</h1>
                    {
                        products.length > 0 && cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <CartProduct key={item.id}>
                                    <CartProduct.ImageCart
                                        image={product.image}
                                    />
                                    <CartProduct.BodyCart
                                        name={product.title}
                                        price={`Rp. ${product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}`}
                                        qty={item.qty}
                                        total={(product.price * item.qty).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}
                                    />
                                </CartProduct>
                            )
                        })
                    }
                    <div ref={totalPriceRef}>
                        <CartProduct>
                            <CartProduct.TotalCart
                                title="Total belanjaan"
                                totalAll={totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}
                        />
                        </CartProduct>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product
