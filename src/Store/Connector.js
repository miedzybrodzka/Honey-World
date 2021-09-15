import {connect} from 'react-redux';
import {loadCategories, loadProducts, addToCart, sumCart, deleteFromCart, updateProductAmount, updateCart,  getOneProduct, deleteOneProduct} from './ActionCreators';

export const connector = (presentationComponent) => {
    const mapStateToProps = (storeData) => ({
        categories: storeData.categories,
        products: storeData.products,
        savedParams: storeData.params,
        total: storeData.total,
        cart: storeData.cart,
        summaryCart: storeData.summary_cart,
        oneProduct: storeData.one_product
    
        
    })

    const mapDispatchToProps = {
        loadCategories: loadCategories,
        loadProducts: loadProducts,
        addToCart: addToCart,
        updateCart: updateCart,
        sumCart: sumCart,
        deleteFromCart: deleteFromCart,
        updateProductAmount: updateProductAmount,
        getOneProduct: getOneProduct,
        deleteOneProduct: deleteOneProduct

    }

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}