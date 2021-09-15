import React, { Component } from 'react';
import { ActionButton } from './ActionButton';
import honey from '../Images/honey.jpg';
import { Pagination } from './Pagination';


export class Products extends Component {
    
    constructor(props){
        super(props);
            this.params = {
                _sort:  this.props.savedParams._sort || 'name',
                category_like: this.props.routeProps.match.params.category === 'wszystkie produkty'? '' : this.props.routeProps.match.params.category,
                _limit: this.props.savedParams._limit || 5,
                _page: this.props.savedParams._page || 1
                }    
            }
        

    componentDidMount(){
        this.props.loadProducts(this.params);
        
    }
        

    componentDidUpdate(){
        const catLike = this.props.routeProps.match.params.category === 'wszystkie produkty'? '' : this.props.routeProps.match.params.category;
        if(this.props.savedParams.category_like !== catLike ){
        this.params.category_like = catLike;
        this.params._page = 1; 
        this.props.loadProducts(this.params);
        }
       
             
    }

    setSortMethod = (ev) => {
        
        this.params._sort = ev.target.value;
        this.props.loadProducts(this.params);
            
    }

    setAmountOnPage = (ev) => {
        
        this.params._limit = Number(ev.target.value);
        this.params._page = 1;
        this.props.routeProps.history.push(`/${this.props.routeProps.match.params.category}/1`);
        this.props.loadProducts(this.params);
        
            
        
    }

    setNumberOfPage = (ev) => {
        
        this.params._page = Number(ev.target.value);
        this.props.routeProps.history.push(`${ev.target.value}`);
        this.props.loadProducts(this.params);
        
    }

    showProductPage = (ev) => {
    this.props.routeProps.history.push(`produkt/${ev.target.value}`);
    }

    render(){
            if (this.props.products[0] === 'Brak produktów'){
                return <div className = 'products'><h1 className = 'no-products'>{this.props.products[0]}</h1></div>}
            return (
                <div className = 'products'>
                    <Pagination {...this.props} setSortMethod = {this.setSortMethod} setAmountOnPage = {this.setAmountOnPage} setNumberOfPage = {this.setNumberOfPage}/>
                    {this.props.products.map(prod => <div className = 'row' key = {prod.id}>
                        <div className = 'child'>
                            <img className = 'product-picture' src = {honey} alt =''/>
                        </div>
                        <div className = 'child-2'>
                            <p className = 'product-title'>{prod.name}</p>
                            <p className = 'product-price'>{Number(prod.price).toFixed(2)} zł</p>
                        </div>
                        <div className = 'child'>
                            <ActionButton action = {this.showProductPage} className ='main-button' content = {'OPIS PRODUKTU'} value = {prod.id}/>
                        </div>
                    </div>)}
                </div>
            )
        }   
    }
