import { useContext } from 'react';
import ShoppingCart from '../../assets/shopping-cart.png';
import { ShopContext } from '../../context/shopContext'
import './CartWidget.css'
import { Link } from 'react-router-dom';
const CartWidget = () => {
    const { cart } = useContext(ShopContext)

    const clickHandler=()=>{
        console.log('showCart')
    }
    return(
        <Link to={'/cart'}>
            <div className='cart'>
                <img src={ShoppingCart} alt="imagen de carrito" width="25"
                    height="25" onClick={clickHandler}
                />
                <p className="cart-count">{ cart ? cart.length : 0 }</p>         
            </div>
        </Link>
    )
}
export default CartWidget