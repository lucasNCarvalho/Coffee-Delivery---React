import { MapPinLine } from "@phosphor-icons/react"
import { useFormContext } from "react-hook-form"
import { CheckoutFooter, FormContainer, GridForm, Header, HeaderFooter, Input, PaymentContainer } from "./styled"
import { defaultTheme } from "../../../styles/themes/default"
import { CreditCard, Cardholder, Money, CurrencyDollar } from "@phosphor-icons/react"
import { Radio } from "../../../components/Radio"
import { useState } from "react"

export const CheckoutForm = () => {

  const { register, setValue } = useFormContext()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method: string) => {
    console.log('met', method)
    setSelectedPaymentMethod(method)
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
          <Radio
            handlePaymentMethodChange={handlePaymentMethodChange}
            name="payment"
            value="credit"
            isSelected={selectedPaymentMethod === 'credit'}
          >
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </Radio>
          <Radio
          handlePaymentMethodChange={handlePaymentMethodChange}
            name="payment"
            value="debit"
            isSelected={selectedPaymentMethod === 'debit'}
          >
            <Cardholder size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </Radio>
          <Radio
            handlePaymentMethodChange={handlePaymentMethodChange}
            name="payment"
            value="cash"
            isSelected={selectedPaymentMethod === 'cash'}
          >
            <Money size={16} />
            <span>DINHEIRO</span>
          </Radio>
        </PaymentContainer>
      </CheckoutFooter>
    </>
  )
}
