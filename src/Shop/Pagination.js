import React, { Component } from 'react';
import { ActionButton } from './ActionButton';

export class Pagination extends Component {

    getPageButtons = (amountOfPages, actualPage) => {
        const pageNumbers = []; 
        for(let i = 2; i < amountOfPages; i++){
            pageNumbers.push(i);
        }
    
        switch(true){
            case amountOfPages <= 5 :
                return pageNumbers;
            case (amountOfPages > 5 && actualPage === 1) || actualPage === 2:
                return pageNumbers.slice(0,3);
            case amountOfPages > 5 && actualPage >= amountOfPages - 2 :
                   return pageNumbers.slice(pageNumbers.length-3);
            case amountOfPages > 5 && actualPage >= 3 :
                return pageNumbers.filter(elem => elem === actualPage - 1 || elem === actualPage || elem === actualPage + 1);
            default:
                return pageNumbers;
            }
            
        }
    

  
    render(){
        const amountOfPages = Math.ceil(this.props.total/this.props.savedParams._limit);
        const actualPage = this.props.savedParams._page;
        return (
            <div>
                <div className = 'select-box'>
                    <label className = 'product-list-settings select-one'> Sortuj:
                        <select name = 'sort' onChange = {this.props.setSortMethod} value = {this.props.savedParams._sort}>
                            <option value = 'name'>Nazwa</option>
                            <option value = 'price'>Cena</option>
                        </select>
                    </label>
                    <label className = 'product-list-settings select-two'> Ilość produktów na stronie:
                        <select name = 'amount' onChange = {this.props.setAmountOnPage} value = {this.props.savedParams._limit}>
                            <option value = '5'>5</option>
                            <option value = '10'>10</option>
                            <option value = '20'>20</option>
                            <option value = '50'>50</option>
                        </select>
                    </label>
                </div>
                <div className = 'pagination-controls'>
                    <ActionButton content = {1} action = {this.props.setNumberOfPage} value = '1' active = {actualPage === 1} className = 'page-button' activeClassName = 'active-page-button'/>
                    {actualPage >= 4 && <span>...</span>}
                    {this.getPageButtons(amountOfPages, actualPage).map(nr => <ActionButton key = {nr} content = {nr} value = {nr} action = {this.props.setNumberOfPage} active = {actualPage === nr} className = 'page-button' activeClassName = 'active-page-button'/>)}
                    {actualPage <= amountOfPages - 3 && <span>...</span>}
                    {amountOfPages > 1 && <ActionButton content = {amountOfPages} value = {amountOfPages} action = {this.props.setNumberOfPage} active = {actualPage === amountOfPages} className = 'page-button' activeClassName = 'active-page-button'/>}
                </div>     
            </div>
        )
    }
}