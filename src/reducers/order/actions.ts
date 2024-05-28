import { CreateOrderData } from "../../contexts/OrderContext";
import { checoutFormData } from "../../pages/Checkout";

export enum ActionTypes {
    ADD_NEW_ORDER = 'ADD_NEW_ORDER',
    INCREMENT_QUANTITY_ORDER = 'INCREMENT_QUANTITY_ORDER',
    DECREMENT_QUANTITY_ORDER = 'DECREMENT_QUANTITY_ORDER',
    DELETE_ORDER = 'DELETE_ORDER',
    COMPLETE_ORDER = 'COMPLETE_ORDER'
}

export function addNewOrderAction(order: CreateOrderData) {
    return {
        type: ActionTypes.ADD_NEW_ORDER,
        payload: {
            order
        }
    }
}

export function incrementOrderAction(id: string) {
    return {
        type: ActionTypes.INCREMENT_QUANTITY_ORDER,
        payload: {
            id
        }
    }
}

export function decrementOrderAction(id: string) {
    return {
        type: ActionTypes.DECREMENT_QUANTITY_ORDER,
        payload: {
            id
        }
    }
}


export function deleteOrderAction(id: string) {
    return {
        type: ActionTypes.DELETE_ORDER,
        payload: {
            id
        }
    }
}

export function completeOrderAction(formData: checoutFormData) {
    return {
        type: ActionTypes.COMPLETE_ORDER,
        payload: {
            formData
        }
    }
}



