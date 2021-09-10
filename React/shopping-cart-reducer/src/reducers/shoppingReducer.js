import {
    TYPES
} from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [{
            id: 1,
            name: 'Product1',
            price: 1000,
            qty: 0,
        },
        {
            id: 2,
            name: 'Product2',
            price: 2000,
            qty: 0
        },
        {
            id: 3,
            name: 'Product3',
            price: 3000,
            qty: 0
        },
        {
            id: 4,
            name: 'Product4',
            price: 4000
        },
        {
            id: 5,
            name: 'Product5',
            price: 5000
        },
        {
            id: 6,
            name: 'Product6',
            price: 6000
        }
    ],
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            let itemExists = state.cart.find(item => item.id === action.payload)

            return itemExists ? {
                ...state,
                cart: state.cart.map(item => item.id === newItem.id ? {
                    ...item,
                    qty: item.qty + 1
                } : item)
            } : {
                ...state,
                cart: [...state.cart, {
                    ...newItem,
                    qty: 1
                }]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.qty > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                        ...item,
                        qty: item.qty - 1
                    } :
                    item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {...state,
            cart: state.cart.filter(item => item.id !== action.payload)}
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState
        default:
            return shoppingInitialState
    }
}