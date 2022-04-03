import './cart-item.styles.scss'


const CartItem = ({cartItem}) => {
const {name, quantity,imgUrl,price} = cartItem;
console.log(imgUrl)
    return (
        <div className='cart-item-container' >
            <img src={imgUrl} />
            <div className='item-details'>
            <span className='name' >{name}</span>
            <span>{quantity} x {price} </span>
            </div>
            
        </div>
    )

}

export default CartItem;