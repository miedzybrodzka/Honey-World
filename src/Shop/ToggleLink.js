import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

export class ToggleLink extends Component {
    render(){
            return (
                <Route path = {this.props.to} children = {routeProps => {
                    const activeClassName = routeProps.location.pathname.includes(this.props.category.toLowerCase()) ? 'active-category-element' : '';
                    return <Link to = {this.props.to} className = {`category-element ${activeClassName}`}>{this.props.children}</Link>
                }}/>
            )
    }
}