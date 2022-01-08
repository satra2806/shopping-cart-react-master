import React from 'react'
import './ItemPage.css'

class ItemPage extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={"ItemsContainer"}>
                {this.props.items.map(item => (
                    <Item key = {item._id} item ={item} onAddToCart = {() => this.props.onAddToCart(item)} />
                ))}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

class Item extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={"ItemContainer"}>
                <div className={"ItemImage"}>
                    <img src={"https://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png"}  alt={"product"} width={100} height={100}/>
                </div>

                <span className={"ItemName"}>
                    {this.props.item.make}
                </span>

                <span className={"ItemPrice"}>
                    ₹ {this.props.item.price}
                </span>

                <span className={"ItemDesc"}>
                    {this.props.item.year_model}
                </span>

                <button className={"addToCart"} onClick={this.props.onAddToCart}>
                    Add To Cart
                </button>

            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

export default ItemPage;