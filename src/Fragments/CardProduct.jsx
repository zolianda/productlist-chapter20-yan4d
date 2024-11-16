import ButtonComponent from "../Elements/Button"


const CardProduct = (props) => {
    const { children } = props
    return (
        <div className='w-full max-w-sm bg-[#065AD7] border border-[#065AD7] rounded-lg shadow mx-2 flex flex-col justify-between '>
            { children }
 
        </div>
    )
}

const HeaderCard = (props) => {
    const { image, title} = props
    return (
        <div className=' flex flex-row  items-center p-4 gap-4'>
            <img src={image} alt="" className='w-24 h-24 rounded-full object-cover'/>
            <p className='text-xl font-semibold tracking-tight text-white'>{title.substring(0,20)}</p>
        </div>
    )
}

const BodyCard  = (props) => {
    const {description } = props
    return (
        <div className="px-5 pb-5 h-full">
            <p className="text-xl  text-white">
                {description.substring(0,100)}
            </p>
        </div>
    )
}

const FooterCard = (props) => {
    const { price , handleAddtocart, id} = props
    return(
        <div className='flex items-center justify-between px-5 pb-5'>
            <span className='text-xl font-bold text-white'>Rp. {price.toLocaleString('id-ID', {styles:'currency', currency:'IDR'})}</span>
            <ButtonComponent className="bg-[6194E0]" onClick={() => handleAddtocart(id)}>add to cart
            </ButtonComponent>
        </div>
    )
}

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;
export default CardProduct