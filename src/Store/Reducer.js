import { actionTypes } from "./Types";
import { initialData } from "./initialData";
import { dataTypes } from "./Types";

export const Reducer = (storeData, action) => {
    
    switch(action.type){
        case actionTypes.DATA_LOAD:
            return {...storeData,
                [action.dataType]: action.payload,
                [dataTypes.PARAMS]: action.params || {},
                [dataTypes.TOTAL]: action.total || {},
            }
        case actionTypes.ADD_TO_CART :
            return {...storeData,
                [dataTypes.CART]: storeData[dataTypes.CART].concat(action.payload)
            }
        case actionTypes.GET_ONE_PRODUCT:
            return {...storeData,
            [dataTypes.ONE_PRODUCT]: storeData[dataTypes.ONE_PRODUCT].concat(action.payload)
        }
        case actionTypes.UPDATE_CART:
            return {...storeData,
                [dataTypes.CART]: storeData[dataTypes.CART].map(prod => prod.id === action.payload.id? action.payload : prod)
            }
        case actionTypes.SUM_CART:
            return {...storeData,
                [dataTypes.SUMMARY_CART]: storeData[dataTypes.SUMMARY_CART] + (action.payload.price * action.payload.amount)
            }
        case actionTypes.DELETE_FROM_CART:
            return {...storeData,
                [dataTypes.CART]: storeData[dataTypes.CART].filter(prod => prod.id !== action.payload)
            }
        case actionTypes.DELETE_ONE_PRODUCT:
            return {...storeData,
                [dataTypes.ONE_PRODUCT]: storeData[dataTypes.ONE_PRODUCT].filter(prod => prod.id !== action.payload)}
     
        case actionTypes.UPDATE_PRODUCT_AMOUNT:
           return {...storeData,
               [dataTypes.PRODUCTS]: [dataTypes.PRODUCTS].map(prod => prod.id === action.payload.id? action.payload : prod)
            }
        default:
            return initialData || storeData
    }
}