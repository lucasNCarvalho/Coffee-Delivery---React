import type_americano from '../../assets/type coffee/type_americano.svg'
import { defaultTheme } from '../../styles/themes/default'
import { CardButton } from './CardButton'
import { CardContainer, Footer, Header } from './style'
import { ShoppingCart } from '@phosphor-icons/react'

export const Card = () => {
    return (
        <CardContainer>
            <Header>
                <img src={type_americano} alt="" />
                <span>Tradicional</span>
                <h1>Expresso tradicional</h1>
                <p>O tradional café feito com água quente e grãoes moídos</p>
            </Header>
            <Footer>
                <h1>R$<span>9,90</span></h1>
                <div>
                    <CardButton />
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
