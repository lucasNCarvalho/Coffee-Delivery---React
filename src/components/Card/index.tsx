import type_americano from '../../assets/type coffee/type_americano.svg'
import { defaultTheme } from '../../styles/themes/default'
import { IncrementButton } from '../IncrementButton'



import { CardContainer, Footer, Header, Label } from './style'
import { ShoppingCart, SpeakerNone } from '@phosphor-icons/react'

interface CardProps {
    id?: string,
    img: string,
    label: string[],
    title: string,
    description: string,
    price: number,
}

export const Card = ({ id, img, label, title, description, price }: CardProps) => {
    return (
        <CardContainer>
            <Header>
                <img src={img} alt="" />
                <Label>
                    {label.map((item) => (
                        <span>{item}</span>
                    ))}
                </Label>
                <h1>{title}</h1>
                <p>{description}</p>
            </Header>
            <Footer>
                <h1>R$<span>{price}</span></h1>
                <div>
                    <IncrementButton />
                    <ShoppingCart
                        color={defaultTheme['base-card']}
                        style={{ background: defaultTheme['purple-dark'] }}
                        weight='fill'
                        size={32}
                    />
                </div>
            </Footer>
        </CardContainer>

    )
}
