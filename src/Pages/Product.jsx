import React, { useEffect, useRef, useState } from 'react'
import CardProduct from '../Fragments/CardProduct'
import CartProduct from '../Fragments/CartProduct'
import ButtonComponent from '../Elements/Button'
import { getProduct } from '../services/product'
import { useLogin } from '../services/uselogin'

// const products = [
//     {
//         id: 1,
//         title: "Tas Wanita",
//         description: "visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
//         image: "https://plus.unsplash.com/premium_photo-1680373109883-47a3617e9acd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 1000000
//     },
//     {
//         id: 2,
//         title: "Tas Pria",
//         description: "the final copy is available",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//         price: 8000000
//     },
//     {
//         id: 3,
//         title: "Tas Wanita",
//         description: "visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//         price: 4000000
//     },
// ]

const Product = () => {
    const email = localStorage.getItem('email')
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const  totalPriceRef = useRef(null);
    const {username, handleLogout} = useLogin();

    useEffect(() => {
        if(cart.length >0){
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
    if(products.length >0 && cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc +  product.price * item.qty; 
        }, 0)
        setTotalPrice(sum);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}, [cart, products]);

useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
},[]);

    // const  = () => {
    //     localStorage.removeItem('email');
    //     localStorage.removeItem('password');
    //     window.location.href = '/login';
    // }

    const handleAddtocart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
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
                        products.length>0 && products.map((items) => (
                            <CardProduct key={items.id}>
                                <CardProduct.HeaderCard image={items.image} title={items.title} />
                                <CardProduct.BodyCard
                                    description={items.description} />
                                <CardProduct.FooterCard
                                    price={items.price}
                                    id={items.id}
                                    handleAddtocart={handleAddtocart} />
                            </CardProduct>
                        ))
                    }
                </div>
                <div className="md:w-2/6 py-3 w-full max-w-sm flex flex-col justify-center">
                    <h1 className='text-3xl font-bold text-black'>Cart Items</h1>
                    {
                        products.length>0 && cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <CartProduct key={item.id}>
                                    <CartProduct.ImageCart
                                        image={product.image}
                                    />
                                    <CartProduct.BodyCart
                                        name={product.title}
                                        price={`Rp. ${ product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}`}
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
