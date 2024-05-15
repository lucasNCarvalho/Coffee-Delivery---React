import Logo_coffee from '../../assets/Logo_coffee.svg'
import Location from '../../assets/Location.svg'
import Cart from '../../assets/Cart.svg'
import { HeaderContainer } from './style'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      
      <Link to={'/'}>
        <img src={Logo_coffee} alt="Logo website, it's a purple cup and a text at right side 'Coffee Delivery'" />
      </Link>

      <div>
        <img src={Location} alt="Location icon" />
        <Link to={'/checkout'}>
          <img src={Cart} alt="Cart icon" />
        </Link>
      </div>
    </HeaderContainer>
  )
}
