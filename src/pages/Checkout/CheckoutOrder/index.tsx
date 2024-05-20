import type_americano from '../../../assets/type coffee/type_americano.svg'
import { DeleteButton } from '../../../components/DeleteButton'
import type_latte from '../../../assets/type coffee/type_latte.svg'

import { IncrementButton } from '../../../components/IncrementButton'

import { MainContainer, OrderButtons, OrderContainer, OrderContent, OrderValue, PriceButton, PriceContainer, PriceItem } from './styled'

export const CheckoutOrder = () => {
    return (
        <MainContainer>
            <div>
                <OrderContainer>
                    <img src={type_americano} alt="" />
                    <OrderContent>
                        <h1>Expresso Tradicional</h1>
                        <OrderButtons>
                            <IncrementButton />
                            <DeleteButton />
                        </OrderButtons>
                    </OrderContent>
                    <OrderValue >R$ 9,90</OrderValue>
                </OrderContainer>

                <OrderContainer>
                    <img src={type_latte} alt="" />
                    <OrderContent>
                        <h1>Expresso Latte</h1>
                        <OrderButtons>
                            <IncrementButton />
                            <DeleteButton />
                        </OrderButtons>
                    </OrderContent>
                    <OrderValue >R$ 9,90</OrderValue>
                </OrderContainer>
            </div>

            <PriceContainer>
                <PriceItem>
                    <p>Total de itens</p>
                    <span>R$ 29,70</span>
                </PriceItem>
                <PriceItem>
                    <p>Entrega</p>
                    <span>R$ 3,50</span>
                </PriceItem>
                <PriceItem bold={true}>
                    <p>Total</p>
                    <span>R$ 33,20</span>
                </PriceItem>
                <PriceButton>CONFIRMAR PEDIDO</PriceButton>
            </PriceContainer>
        </MainContainer>
    )
}
