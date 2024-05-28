import { MapPinLine } from "@phosphor-icons/react"
import { useFormContext } from "react-hook-form"
import { CheckoutFooter, FormContainer, GridForm, Header, HeaderFooter, Input, PaymentContainer } from "./styled"
import { defaultTheme } from "../../../styles/themes/default"
import { IconLabelButton } from "../../../components/IconLabelButton/IndexButton"
import { CreditCard, Cardholder, Money, CurrencyDollar } from "@phosphor-icons/react"

export const CheckoutForm = () => {

  const { register, setValue } = useFormContext()


  const handlePaymentMethodChange = (method: string) => {
    setValue('paymentMethod', method)
  }


  return (
    <>

      <FormContainer>
        <Header>
          <MapPinLine color={defaultTheme["yellow-dark"]} />
          <div>
            <h1>Endereço de Entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Header>

        <Input placeholder="CEP" id="cep" {...register('cep')} />
        <Input placeholder="Rua" id="street" {...register('street')} $full={true} />
        <GridForm>
          <Input placeholder="Número" id="number" {...register('number')} />
          <Input placeholder="Complemento" id="complement" {...register('complement')} $full={true} />

        </GridForm>
        <GridForm>
          <Input placeholder="Bairro" id="neighborhood" {...register('neighborhood')} />
          <Input placeholder="Cidade" id="city" {...register('city')} $full={true} />
          <Input placeholder="UF" id="state" {...register('state')} customwidth="3.75rem" />
        </GridForm>

 
      </FormContainer>
      =
      <CheckoutFooter>
        <HeaderFooter>
          <CurrencyDollar size={22} color={defaultTheme["purple-dark"]} />
          <div>
            <h1>Pagamento</h1>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </HeaderFooter>
        <PaymentContainer>
  
          <IconLabelButton.Root onClick={() => handlePaymentMethodChange('Cartão de crédito')}>
            <IconLabelButton.Icon icon={CreditCard} />
            <IconLabelButton.Content text="CARTÃO DE CRÉDITO" />
          </IconLabelButton.Root>

          <IconLabelButton.Root onClick={() => handlePaymentMethodChange('Débito')}>
            <IconLabelButton.Icon icon={Cardholder} />
            <IconLabelButton.Content text="CARTÃO DE DEBITO" />
          </IconLabelButton.Root>

          <IconLabelButton.Root onClick={() => handlePaymentMethodChange('Dinheiro')}>
            <IconLabelButton.Icon icon={Money} />
            <IconLabelButton.Content text="DINHEIRO" />
          </IconLabelButton.Root>
        </PaymentContainer>
      </CheckoutFooter>
    </>
  )
}
