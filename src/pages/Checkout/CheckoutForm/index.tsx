import { MapPinLine } from "@phosphor-icons/react"
import { useFormContext } from "react-hook-form"
import { FormContainer, GridForm, Header, Input } from "./styled"
import { defaultTheme } from "../../../styles/themes/default"


export const CheckoutForm = () => {

  const { register } = useFormContext()


  return (
    <FormContainer>
      <Header>
        <MapPinLine color={defaultTheme["yellow-dark"]} />
        <div>
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Header>

      <Input placeholder="CEP" id="cep" {...register('cep')} />
      <Input placeholder="Rua" id="street" {...register('street')} full={true} />
      <GridForm>
        <Input placeholder="Número" id="number" {...register('number')} />
        <Input placeholder="Complemento" id="complement" {...register('complement')} full={true} />

      </GridForm>
      <GridForm>
        <Input placeholder="Bairro" id="neighborhood" {...register('neighborhood')} />
        <Input placeholder="Cidade" id="city" {...register('city')} full={true}/>
        <Input placeholder="UF" id="state" {...register('state')} customWidth="3.75rem" />
      </GridForm>
    
    </FormContainer>
  )
}
