import { CurrencyDollar, Timer, MapPin } from "@phosphor-icons/react";
import Illustration from '../../assets/Illustration.svg'
import { OrderConfirmedContainer, OrderContent, OrderItem } from "./styled";
import { defaultTheme } from "../../styles/themes/default";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export const OrderConfirmed = () => {
  const { orderState } = useContext(OrderContext)

  const {paymentMethod} = orderState.formDetails
  let methodPayment = ''

  if(paymentMethod === 'credit') {
    methodPayment = 'Crédito';
  }

  if(paymentMethod === 'cash') {
    methodPayment = 'Dinheiro'
  }

  if(paymentMethod === 'debit') {
    methodPayment = 'Débito'
  }

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
            <p>Entrega em <span>{orderState.formDetails.street},{orderState.formDetails.number}</span> {orderState.formDetails.neighborhood}- {orderState.formDetails.city}, {orderState.formDetails.state}</p>
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
              <span>{methodPayment}</span>
            </div>
          </OrderItem>
        </OrderContent>
      </div>
      <img src={Illustration} alt="" />
    </OrderConfirmedContainer>
  )
}
