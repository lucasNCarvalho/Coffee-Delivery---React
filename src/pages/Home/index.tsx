import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
import Coffee_Art_01 from '../../assets/Coffee_Art_01.svg'
import { Body, Container, GridIcon, Header, HeaderTextSection, HomeContainer } from "./style";
import { defaultTheme } from "../../styles/themes/default";
import { Card } from "../../components/Card";


export const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <div>
          <HeaderTextSection>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </HeaderTextSection>
          <GridIcon>

            <p><ShoppingCart
              color={defaultTheme.background}
              style={{ background: defaultTheme["yellow-dark"] }}
              weight="fill"
              size={32}
            />
              Compra simples se segura
            </p>

            <p><Package
              color={defaultTheme.background}
              style={{ background: defaultTheme["base-text"] }}
              weight="fill"
              size={32}
            />
              Embalagem mantém o café intacto
            </p>

            <p><Timer
              color={defaultTheme.background}
              style={{ background: defaultTheme.yellow }}
              weight="fill" size={32}
            />
              Entrega rápida e rastreada
            </p>

            <p><Coffee
              color={defaultTheme.background}
              style={{ background: defaultTheme["purple-dark"] }}
              weight="fill"
              size={32}
            /> O café chega fresquinho até você
            </p>

          </GridIcon>
        </div>


        <img src={Coffee_Art_01} alt="" />

      </Header>
      <Body>
        <p>Nossos Cafés</p>
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </Body>

    </HomeContainer>
  )
}
