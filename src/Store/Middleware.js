import {RestDataSource} from '../WebService/RestDataSource';
import { dataTypes } from './Types';

const dataSource = new RestDataSource();

export const asyncActions = () => (next) => (action) => {

    switch(action.dataType){
        case dataTypes.CATEGORIES:
            dataSource.getData(action.dataType, (response) => next({...action, payload: response.data}))
        break;
        case dataTypes.PRODUCTS:
            dataSource.getData(action.dataType, (response) => next({...action, payload: response.data.length === 0? ['Brak produktów'] : response.data, total: Number(response.headers['x-total-count'])}), action.params)
        break;
        case dataTypes.PRODUCT_TO_UPDATE:
            dataSource.updateProduct('products', (response) => next({...action, payload: response.data}), action.payload);
        break;
        case dataTypes.ONE_PRODUCT:
            dataSource.getOne('products', (response) =>  next({...action, payload: response.data}), action.id);
        break;
        default:
            next(action);
    }

}