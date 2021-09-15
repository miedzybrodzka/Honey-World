import React, { Component } from 'react';
import './Css/App.css';
import { Header } from './Shop/Header';
import { Categories } from './Shop/Categories';
import { Products } from './Shop/Products';
import { ProductPage } from './Shop/ProductPage';
import {Start} from './Shop/Start';
import { Cart } from './Shop/Cart';
import {Selector} from './Shop/Selector';
import {Footer} from './Shop/Footer';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import dataStore from './Store';
import {connector} from './Store/Connector';

const ConnectedHeader = withRouter(connector(Header));
const ConnectedCategories = connector(Categories);
export const ConnectedProducts = connector(Products);
export const ConnectedProductPage = connector(ProductPage);
export const ConnectedCart = connector(Cart);

export default class App extends Component {
    render() {
        return (
        <Provider store = {dataStore}>
            <div className = 'page-container'>
                <Router>
                    <ConnectedHeader />
                    <section className = 'main-section'>
                        <ConnectedCategories />
                        <Selector>
                            <Start />
                            <ConnectedProducts />
                            <ConnectedProductPage />
                            <ConnectedCart />
                        </Selector>
                    </section>
                    <Footer />
                </Router>
            </div>  
            </Provider>
        )
    }
}