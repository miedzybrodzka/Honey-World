import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import { ConnectedProducts } from '../App';
import {ConnectedProductPage} from '../App';
import { ConnectedCart } from '../App';
import {Start} from './Start';


export class Selector extends Component {
    render(){
        return (
            <Switch>
                <Route path = '/:category/:product/:id' render = {routeProps => <ConnectedProductPage routeProps = {routeProps}/>}/>
                <Route path = '/:category/:page' render = {routeProps => <ConnectedProducts routeProps = {routeProps}/>}/>
                <Route path = '/cart' render = {routeProps => <ConnectedCart routeProps = {routeProps}/>}/>
                <Route path = '/' component = {Start} exact = {true}/>
            </Switch>
        )
    }
}