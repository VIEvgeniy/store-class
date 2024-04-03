import React from 'react';
import PropTypes from 'prop-types'

// const ShopItemClass = ({item}) => (
//     <div className="main-content">
//     <h2>{item.brand}</h2>
//     <h1>{item.title}</h1>
//     <h3>{item.description}</h3>
//     <div className="description">{item.descriptionFull}</div>
//     <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
//     <div className="divider"></div>
//     <div className="purchase-info">
//     <div className="price">{item.currency}{item.price.toFixed(2)}</div>
//     <button>Добавить в корзину</button>
//     </div>
// </div>    
// )

class ShopItemClass extends React.Component {
    render(props) {
        return (
            <div className="main-content">
            <h2>{this.props.item.brand}</h2>
            <h1>{this.props.item.title}</h1>
            <h3>{this.props.item.description}</h3>
            <div className="description">{this.props.item.descriptionFull}</div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
            <div className="price">{this.props.item.currency}{this.props.item.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
            </div>
        </div>    
        )
    }
}

ShopItemClass.propTypes = {
    item: PropTypes.shape(
        {
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.oneOf(['₽','£','$','€']),
        }
    )
}

export default ShopItemClass