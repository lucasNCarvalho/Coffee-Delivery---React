import { FormProvider, useForm } from "react-hook-form"
import { CheckoutForm } from "./CheckoutForm"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'
import { CheckoutContainer, Title } from "./styled"
import { CheckoutOrder } from "./CheckoutOrder"
import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"
import { useNavigate } from "react-router-dom";



export type checoutFormData = zod.infer<typeof checkoutFormValidationSchema>

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número da residência, não não tenha informar zero'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe um estado'),
  paymentMethod: zod.string()
})


export const Checkout = () => {
  const checkoutForm = useForm<checoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: ''
    }
  })
  const { completeOrder , orderState } = useContext(OrderContext)

  const { handleSubmit } = checkoutForm;
  const navigate = useNavigate();

  function handleCreateOrderForm(data: checoutFormData) {
    if(orderState.order.length > 0) {
      completeOrder(data)
      navigate('/success')
    } 
    
  }



  return (
    <form action="" onSubmit={handleSubmit(handleCreateOrderForm)}>
      <CheckoutContainer>
        <div>
          <Title>Complete seu pedido</Title>

          <FormProvider {...checkoutForm}>
            <CheckoutForm />
          </FormProvider>
        </div>

        <div>
          <Title>Cafés selecionados</Title>
          <div>
            <CheckoutOrder />
          </div>
        </div>

      </CheckoutContainer>
    </form>
  )
}
