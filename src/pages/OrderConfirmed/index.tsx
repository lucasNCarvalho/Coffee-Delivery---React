import { CurrencyDollar, Timer, MapPin } from "@phosphor-icons/react";
import Illustration from '../../assets/Illustration.svg'
import { OrderConfirmedContainer, OrderContent, OrderItem } from "./styled";
import { defaultTheme } from "../../styles/themes/default";

export const OrderConfirmed = () => {
  return (
    <OrderConfirmedContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderContent>
          <OrderItem>
            <MapPin
              color={defaultTheme.background}
              style={{ background: defaultTheme["purple-dark"] }}
              weight="fill"
              size={32}
            />
            <p>Entrega em <span>Rua joão Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p>
          </OrderItem>
          <OrderItem>
            <Timer
              color={defaultTheme.background}
              style={{ background: defaultTheme.yellow }}
              weight="fill"
              size={32}
            />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </OrderItem>
          <OrderItem>
            <CurrencyDollar
              color={defaultTheme.background}
              style={{ background: defaultTheme["yellow-dark"] }}
              weight="fill"
              size={32} />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </OrderItem>
        </OrderContent>
      </div>
      <img src={Illustration} alt="" />
    </OrderConfirmedContainer>
  )
}