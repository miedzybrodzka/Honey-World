import React, { Component } from 'react';
import { ActionButton } from './ActionButton';

export class Cart extends Component {

    componentDidMount(){
        this.props.cart.forEach(product => {    
               if(!this.props.oneProduct.find(prod => prod.id === Number(product.id))) {
                   this.props.getOneProduct(Number(product.id));
                }
                else{
                    this.props.deleteOneProduct(Number(product.id));
                    setTimeout(() => this.props.getOneProduct(Number(product.id)), 0);
                }
               }      
            )
        }

    deleteProductFromCart = (ev) => {
     console.log(ev.target.value);
        this.props.deleteFromCart(ev.target.id);
        const prodToUpdate = this.props.oneProduct.find(prod => prod.id === Number(ev.target.id));
        console.log(prodToUpdate);
        this.props.updateProductAmount({...prodToUpdate, amount: prodToUpdate.amount - Number(ev.target.value)});
        this.props.sumCart({price: ev.target.name, amount: ev.target.value})
        
    }

    backToShopping = () => {
        const isSavedParams = this.props.savedParams.hasOwnProperty('category_like') && this.props.savedParams.hasOwnProperty('_page');
        const category = this.props.savedParams.category_like === ''? 'wszystkie produkty' : this.props.savedParams.category_like;
        const path = isSavedParams ?`/${category}/${this.props.savedParams._page}` : '/';
        this.props.routeProps.history.push(path);
    }

    render(){
        return (
            <div className = 'products cart'>
                <h1>TWÓJ KOSZYK</h1>
                <table>
                    <tbody>
                        {this.props.cart.map((prod, indx) => <tr className = 'table-row'key = {indx}>
                        <td>{indx + 1}.</td>
                        <td>{prod.productName}</td>
                        <td>Cena: {prod.price} zł</td>
                        <td>Ilość: {prod.amount}</td>
                        <td>Wartość: {prod.amount * prod.price} zł</td>
                        <td ><ActionButton className = 'delete' content = 'USUŃ' action = {this.deleteProductFromCart} id = {prod.id} value = {-prod.amount} name = {prod.price}/>
                        </td>
                        </tr>)}
                    </tbody>
                </table>
                <h3>Suma zamówień: {this.props.summaryCart} zł</h3>
                <ActionButton  className = 'main-button' content = 'POWRÓT' action = {this.backToShopping}/>
                <ActionButton content = 'ZŁÓŻ ZAMÓWIENIE'/>   
            </div>
        )
    }
}