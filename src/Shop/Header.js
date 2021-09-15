import React, {Component} from 'react';
import { ActionButton } from './ActionButton';

export class Header extends Component {

    showCart = () => {
        this.props.history.push('/cart');
    }
    render(){
        return (
            <header className = 'shop-strap'>    
                <h1 className = 'title'>Honey World</h1>
                <h4>PRODUKTY PSZCZELE</h4>
                <p className = 'short-cart'>Koszyk: ({this.props.summaryCart === 0? 'pusty' : `${this.props.summaryCart.toFixed(2)} zł`}) <ActionButton action = {this.showCart}className = 'cart-button' content = {<i className = 'fa fa-shopping-cart'></i>}/></p>
            </header>
        )
    }
}