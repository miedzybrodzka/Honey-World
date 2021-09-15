import React, { Component } from 'react';
import honey from '../Images/honey.jpg';
import { ActionButton } from './ActionButton';

export class ProductPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            chosenAmount: 0,
            warning: ''
        }
    }

    addToCart = (ev, amount) => {
        
        if(this.state.chosenAmount > 0 && this.state.chosenAmount <= amount){
            this.props.cart.some(prod => prod.id === ev.target.id) 
            ? this.props.updateCart({productName: ev.target.name, price:  Number(ev.target.value), amount: this.props.cart.find(prod => prod.id === ev.target.id).amount + this.state.chosenAmount, id: ev.target.id})
            : this.props.addToCart({productName: ev.target.name, price: Number(ev.target.value), amount: this.state.chosenAmount, id: ev.target.id});
            const prodToUpdate = this.props.products.find(prod => prod.id === Number(ev.target.id));
            this.props.updateProductAmount({...prodToUpdate, amount: prodToUpdate.amount - this.state.chosenAmount});
            this.props.sumCart({price: Number(ev.target.value), amount: this.state.chosenAmount});
            setTimeout(() =>this.props.routeProps.history.push('/cart'),0);
        }
        else {
            this.setState({warning: 'red-warning'});
        }
        
        
    }

    backToShop = () => {
        const category = this.props.savedParams.category_like === ''? 'wszystkie produkty' : this.props.savedParams.category_like;
        this.props.routeProps.history.push(`/${category}/${this.props.savedParams._page}`)
    }

    chooseAmount = (ev) => {
        this.setState({chosenAmount: Math.round(ev.target.value)});
    }

    render(){
        const product = this.props.products.find(prod => prod.id === Number(this.props.routeProps.match.params.id));
        return (
            <div className = 'products product-container'>
                <div className = 'big-product-picture-box'>
                    <img src = {honey} alt = ''/>
                </div>
                <div className = 'product-description'>
                    <h1 className = 'big-product-name'>{product.name}</h1>
                    <p className = 'description'>{product.description}</p>
                    <h3>Cena:</h3>
                    <h2 className = 'price'>{`${Number(product.price).toFixed(2)} zł`}</h2>
                    <h5 className = 'amount'>Ilość sztuk w magazynie: {product.amount}</h5>
                    <label className = {`check-amount ${this.state.warning}`}>Wybierz ilość: <input type = 'number' min = '0' max = {product.amount} onChange = {this.chooseAmount}/></label>
                    <ActionButton content = 'Dodaj do koszyka' className = 'add-button' action = {(ev) => this.addToCart(ev, product.amount)}  value = {product.price} name = {product.name} id = {product.id}/>
                    <ActionButton content = 'Powrót do sklepu' className = 'back-button' action = {this.backToShop}/>
                </div>
            </div>
        )
    }
}