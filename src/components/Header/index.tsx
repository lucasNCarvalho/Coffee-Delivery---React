import Logo_coffee from '../../assets/Logo_coffee.svg'
import Location from '../../assets/Location.svg'
import Cart from '../../assets/Cart.svg'
import { CartContainer, CartOrderNotification, HeaderContainer } from './style'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export const Header = () => {
  const { orderState } = useContext(OrderContext)
  return (
    <HeaderContainer>

      <Link to={'/'}>
        <img src={Logo_coffee} alt="Logo website, it's a purple cup and a text at right side 'Coffee Delivery'" />
      </Link>

      <div>
        <img src={Location} alt="Location icon" />
        <CartContainer>
          <Link to={'/checkout'}>
            <img src={Cart} alt="Cart icon" />
          </Link>
          {orderState.order.length > 0  && <CartOrderNotification>{orderState.order.length}</CartOrderNotification> }
        </CartContainer>
      </div>
    </HeaderContainer>
  )
}
