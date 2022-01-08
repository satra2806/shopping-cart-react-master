import React from 'react'
import Nav from './Nav'
import './App.css'
import ItemPage from './ItemPage'
import CartPage from './CartPage'
import axios from 'axios';

class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state={
            activeTab: 0,
            cart : [],
            garageData: []
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.onAddToCart = this.onAddToCart.bind(this);
        
    }

    componentDidMount() {
        axios('https://garageapi20220108093501.azurewebsites.net/api/garage')
        .then((res) =>{ 
            const
                { data } = res,
                details = data;
            // console.log(data)
            var newData = []
            data.map((item)=>{
                newData = [...newData,...item.cars.vehicles]
            })
            newData = newData.filter(x=>x.licensed===true)
            // console.log(newData)
            this.setState({
                garageData : [...newData]
                
            });

        })
        

    }

    handleTabChange = (i) => {
        this.setState({
            activeTab : i
            }
        )
        
    };

    onAddToCart(item){
        // console.log(car)
        console.log(this.state.garageData)
        this.setState({
            cart : [...this.state.cart, item]
        });
        alert("Added")
    }

    renderContent(){
            console.log(this.state.garageData)
            switch(this.state.activeTab){
                default:
                case 0: return this.state.garageData.length>0 ?  <ItemPage items={this.state.garageData} onAddToCart = {this.onAddToCart}/> : '';
                case 1: return <CartPage CartItems={this.state.cart}/>;
            }
    }

    render() {
        return(
            <div className={"App"}>
                <Nav activeTab = {this.state.activeTab} handleTabChange = {this.handleTabChange}/>
                <main className={"App-content"}>
                    {this.renderContent()}
                </main>
            </div>
        )
    }
}

export default App;
