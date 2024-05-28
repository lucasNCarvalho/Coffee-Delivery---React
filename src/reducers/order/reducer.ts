import { orderType } from "../../contexts/OrderContext";
import { ActionTypes } from "./actions";

interface ActionOrderData {
    payload: {
        order: {
            id: string,
            img: string,
            label: string,
            title: string,
            description: string,
            quantity: number,
            price: number
        },
        id?: string,
        formData: object
    }
    type: string
}



export function orderReducer(state, action: ActionOrderData) {
   
    switch (action.type) {
        case ActionTypes.ADD_NEW_ORDER: {
            console.log('state', state, 'action', action);
    
            const updatedOrder = [
                ...state.order,
                {
                    id: action.payload.order.id,
                    img: action.payload.order.img,
                    label: action.payload.order.label,
                    title: action.payload.order.title,
                    description: action.payload.order.description,
                    quantity: action.payload.order.quantity,
                    price: action.payload.order.price
                }
            ];
            
            
            return {
                ...state,
                order: updatedOrder,
            };
        }

        case ActionTypes.INCREMENT_QUANTITY_ORDER: {

            const updatedOrder = {
                ...state,
                order: state.order.map((item: orderType ) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                })
            };

       

            return {
                ...state,
                order: updatedOrder.order,
            
            }
        }

        case ActionTypes.DECREMENT_QUANTITY_ORDER: {
            const updatedOrder = {
                ...state,
                order: state.order.map((item: orderType ) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
            };


            return {
                ...state,
                order: updatedOrder.order,

            }
        }

        case ActionTypes.DELETE_ORDER: {
            
            return {
                ...state,
                order: state.order.filter((item: orderType) => item.id !== action.payload.id)
            };

        }

        case ActionTypes.COMPLETE_ORDER: {
            
            return {
                ...state,
                formDetails: action.payload.formData
            };

        }

        default:
            return state
    }
}