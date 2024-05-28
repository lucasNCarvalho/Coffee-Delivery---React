import { ReactNode, createContext, useReducer } from "react";
import { orderReducer } from "../reducers/order/reducer";
import { addNewOrderAction, completeOrderAction, decrementOrderAction, deleteOrderAction, incrementOrderAction } from "../reducers/order/actions";
import { checoutFormData } from "../pages/Checkout";

interface OrderContextProviderProps {
    children: ReactNode;
}

export interface orderType {
    id: string,
    img: string,
    label: string[],
    title: string,
    description: string,
    quantity: number,
    price: number
}

export interface CreateOrderData {
    order: orderType[],
    formDetails: {
        cep: string,
        street: string,
        number: string,
        complement: string,
        city: string,
        state: string,
        paymentMethod: 'Débito' | 'Cartão de crédito' | 'Dinheiro'
    }
}

interface OrderContextType {
    createNewOrder: (data: CreateOrderData) => void, 
    orderState:  CreateOrderData, 
    incrementQuantity: (id: string) => void, 
    decrementQuantity: (id: string) => void, 
    deleteOrder: (id: string) => void, 
    completeOrder: (data: checoutFormData) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({ children }: OrderContextProviderProps) => {

    const [orderState, dispatch] = useReducer(orderReducer, {
        order: [],
        formDetails: 0
    })
    console.log('orderState', orderState)

    function createNewOrder(data: CreateOrderData) {
        dispatch(addNewOrderAction(data))
    }

    function incrementQuantity(id: string) {
        dispatch(incrementOrderAction(id))
    }

    function decrementQuantity(id: string) {
        dispatch(decrementOrderAction(id))
    }

    function deleteOrder(id: string) {
        dispatch(deleteOrderAction(id))
    }

    function completeOrder(data: checoutFormData ) {
        dispatch(completeOrderAction(data))
    }


    return (
        <OrderContext.Provider value={{ createNewOrder, orderState, incrementQuantity, decrementQuantity, deleteOrder, completeOrder }}>
            {children}
        </OrderContext.Provider>
    )
}
