import {actionTypes, dataTypes} from './Types'


export const loadCategories = () => ({
    type: actionTypes.DATA_LOAD,
    dataType: dataTypes.CATEGORIES,
    payload: []
})

export const loadProducts = (params) => ({
    type: actionTypes.DATA_LOAD,
    dataType: dataTypes.PRODUCTS,
    params: params,
    payload:  []
})

export const addToCart = (product) => ({
    type: actionTypes.ADD_TO_CART,
    dataType: dataTypes.CART,
    payload: product
})

export const updateCart = (product) => ({
    type: actionTypes.UPDATE_CART,
    dataType: dataTypes.CART,
    payload: product
})


export const updateProductAmount = (product) => ({  
    type: actionTypes.UPDATE_PRODUCT_AMOUNT,
    dataType: dataTypes.PRODUCT_TO_UPDATE,
    payload: product
})

export const getOneProduct = (id) => ({
    type: actionTypes.GET_ONE_PRODUCT,
    dataType: dataTypes.ONE_PRODUCT,
    id: id,
    payload: {}
})


export const sumCart = (payload) => ({
    type: actionTypes.SUM_CART,
    dataTypes: dataTypes.SUMMARY_CART,
    payload: payload
})

export const deleteFromCart = (id) => ({
    type: actionTypes.DELETE_FROM_CART,
    payload: id
})

export const deleteOneProduct = (id) => ({
    type: actionTypes.DELETE_ONE_PRODUCT,
    payload: id
})

