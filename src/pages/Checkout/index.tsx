import { FormProvider, useForm } from "react-hook-form"
import { CheckoutForm } from "./CheckoutForm"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'
import { CheckoutContainer, CheckoutFooter, Header, PaymentContainer, Title } from "./styled"
import { CurrencyDollar } from "@phosphor-icons/react"
import { defaultTheme } from "../../styles/themes/default"
import { CheckoutOrder } from "./CheckoutOrder"
import { IconLabelButton } from "../../components/IconLabelButton/IndexButton"
import { CreditCard, Cardholder, Money } from "@phosphor-icons/react"

type checoutFormData = zod.infer<typeof checkoutFormValidationSchema>

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número da residência, não não tenha informar zero'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe um estado')
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
      state: ''
    }
  })

  const { handleSubmit } = checkoutForm;

  function handleCreateRequest() {

  }

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <form action="" onSubmit={handleSubmit(handleCreateRequest)}>
          <FormProvider {...checkoutForm}>
            <CheckoutForm />
          </FormProvider>
        </form>
        <CheckoutFooter>
          <Header>
            <CurrencyDollar size={22} color={defaultTheme["purple-dark"]} />
            <div>
              <h1>Pagamento</h1>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </Header>
          <PaymentContainer>
            <IconLabelButton.Root>
              <IconLabelButton.Icon icon={CreditCard} />
              <IconLabelButton.Content text="CARTÃO DE CRÉDITO" />
            </IconLabelButton.Root>

            <IconLabelButton.Root>
              <IconLabelButton.Icon icon={Cardholder} />
              <IconLabelButton.Content text="CARTÃO DE DEBITO" />
            </IconLabelButton.Root>

            <IconLabelButton.Root>
              <IconLabelButton.Icon icon={Money} />
              <IconLabelButton.Content text="DINHEIRO" />
            </IconLabelButton.Root>
          </PaymentContainer>
        </CheckoutFooter>

      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <div>
          <CheckoutOrder />
        </div>
      </div>

    </CheckoutContainer>
  )
}
