
import { useContext, useState } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import { IncrementButton } from '../IncrementButton'
import { CardContainer, Footer, Header, Label } from './style'
import { ShoppingCart } from '@phosphor-icons/react'
import { OrderContext } from '../../contexts/OrderContext'
import { v4 as uuidv4 } from 'uuid';

interface CardProps {
    id?: string,
    img: string,
    label: string[],
    title: string,
    description: string,
    price: number,
}

export const Card = ({ img, label, title, description, price }: CardProps) => {
    const { createNewOrder } = useContext(OrderContext)
    const [quantity, setQuantity] = useState(0)

    function handleCreateNewOrder() {
        const id = uuidv4()
        const data = { id, img, label, title, description, quantity, price };
        if(quantity > 0) {
            createNewOrder(data)
        }
    }

    function incrementAdd() {
        setQuantity(quantity => quantity += 1)
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity => quantity -= 1)

        }
    }

    return (
        <CardContainer>
            <Header>
                <img src={img} alt="" />
                <Label>
                    {label.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </Label>
                <h1>{title}</h1>
                <p>{description}</p>
            </Header>
            <Footer>
                <h1>R$<span>{price.toFixed(2)}</span></h1>
                <div>
                    <IncrementButton
                        quantity={quantity}
                        incrementAdd={incrementAdd}
                        decrement={decrement}
                    />
                    <ShoppingCart
                        color={defaultTheme['base-card']}
                        style={{ background: defaultTheme['purple-dark'] }}
                        weight='fill'
                        size={32}
                        onClick={handleCreateNewOrder}
                    />
                </div>
            </Footer>
        </CardContainer>

    )
}
