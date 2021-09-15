import React, {Component} from 'react';
import {ToggleLink} from './ToggleLink';

export class Categories extends Component {
  

    componentDidMount() {
        this.props.loadCategories();
    }

    render(){
        return (
            <div className = 'categories'>
                {this.props.categories.map(cat => <ToggleLink to = {`/${cat}/1`.toLowerCase()} className = 'category-element' key = {cat} category = {cat}>{cat}</ToggleLink>)}
            </div>
        )
    }

}