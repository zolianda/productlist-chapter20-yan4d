import React from 'react'

const CartProduct = (props) => {
    const {children} = props
  return (
    <div className='w-full bg-[#065AD7] border border-[#065AD7] rounded-lg shadow my-2 flex'>
        {children}
    </div>
  )
}

const ImageCart = (props) => {
    const { image } = props;
    return <img src={image} className='p-2 rounded-t-lg w-1/3 h-20 object-cover'/>
}

const BodyCart = (props) => {
    const { name, price, qty, total } = props;
    return (
        <div className='p-2 w-full'>
            <div className='flex justify-between'>
                <p className='text-md text-white'>{name.substring(0,20)}</p>
                <p className='text-md text-white font-bold'>{price}</p>
            </div>
            <div className='text-md font-semibold tracking-tight text-white'>
                Qty :  {qty}
            </div>
            <span className='text-md font-bold text-yellow-400'>
                Total : Rp. {total}
            </span>
        </div>
    )
}

const TotalCart = (props) => {
    const {title, totalAll} = props;
    return (
        <div className='p-2 w-full flex justify-between'>
            <div className='text-md text-white'>{title}</div>
            <div className='text-md font-bold text-white'>{totalAll}</div>
        </div>
    )
}
CartProduct.ImageCart = ImageCart;
CartProduct.BodyCart = BodyCart;
CartProduct.TotalCart = TotalCart;
export default CartProduct