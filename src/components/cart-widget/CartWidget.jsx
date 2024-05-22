import ShoppingCart from '../../assets/shopping-cart.png';
import './CartWidget.css'
const CartWidget = () => {
    const clickHandler=()=>{
        console.log('showCart')
    }
    return(
        <div className='cart'>
            <img src={ShoppingCart} alt="imagen de carrito" width="25"
                height="25" onClick={clickHandler}
            />
            <p className="cart-count">1</p>         
        </div>
    )
}
export default CartWidget