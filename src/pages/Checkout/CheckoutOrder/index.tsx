
import { DeleteButton } from '../../../components/DeleteButton'
import { IncrementButton } from '../../../components/IncrementButton'
import { MainContainer, OrderButtons, OrderContainer, OrderContent, OrderValue, PriceButton, PriceContainer, PriceItem } from './styled'
import { useContext } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'

export const CheckoutOrder = () => {
    const { orderState, incrementQuantity, decrementQuantity, deleteOrder} = useContext(OrderContext)
    const taxDelivery = 3.50;
  

    console.log("OrderState checkout", orderState)

    function handlerIncrementAdd(id: string) {
        incrementQuantity(id)
    }

    function handlerDecrement(id: string, quantity: number) {
        if(quantity > 1) {
            decrementQuantity(id)
        }
    }

    function handlerDeleteOrder(id: string) {
            deleteOrder(id)
    }

    const sumItems = orderState.order.reduce((sum, item) => {
        return (sum += item.price * item.quantity);
    }, 0)

    const totalOrder = sumItems + taxDelivery;

    return (
        <MainContainer>
            <div>
                {orderState.order.map((item) => (
                    <OrderContainer key={item.id}>
                        <img src={item.img} alt="" />
                        <OrderContent>
                            <h1>{item.title}</h1>
                            <OrderButtons>
                                <IncrementButton quantity={item.quantity} incrementAdd={() => handlerIncrementAdd(item.id)} decrement={() => handlerDecrement(item.id, item.quantity)}/>
                                <DeleteButton deleteOrder={() => handlerDeleteOrder(item.id)}/>
                            </OrderButtons>
                        </OrderContent>
                        <OrderValue >R$ {item.price.toFixed(2)}</OrderValue>
                    </OrderContainer>
                ))}
            </div>

            <PriceContainer>
                <PriceItem>
                    <p>Total de itens</p>
                    <span>R$ {sumItems > 0 && sumItems.toFixed(2)}</span>
                </PriceItem>
                <PriceItem>
                    <p>Entrega</p>
                    <span>R$ 3,50</span>
                </PriceItem>
                <PriceItem $bold={true}>
                    <p>Total</p>
                    <span>R$ {sumItems > 0 && totalOrder.toFixed(2)}</span>
                </PriceItem>
                <PriceButton type='submit'>CONFIRMAR PEDIDO</PriceButton>
            </PriceContainer>
        </MainContainer>
    )
}
