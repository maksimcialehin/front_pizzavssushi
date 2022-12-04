import React, { Component } from 'react';
import PizzaDetail from './pizzeriadetail';
import axios from 'axios';
import PizzaForm from './pizzeriaform';

class PizzaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzeriasData: [],
            pizzeria: " ",
            showComponent: false,
        }
        this.getPizzaDetail=this.getPizzaDetail.bind(this);
        this.showPizzeriaDetail=this.showPizzeriaDetail.bind(this);
    }
   
    getPizzaDetail(item){
        axios
            .get(process.env.REACT_APP_URL.concat(item.absolute_url))
            .then((response) => {
                this.setState({pizzeria: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    showPizzeriaDetail(item){
        this.getPizzaDetail(item);
        this.setState({ showComponent: true });
    }

    componentDidMount(){
        axios
            .get(process.env.REACT_APP_URL)
            .then((response) => {
                this.setState({pizzeriasData: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return(
            <div>
                {this.state.pizzeriasData.map((item) => {
                    return (
                        <h3 key={item.id} onClick={() => this.showPizzeriaDetail(item)}>
                            {item.restaurant_name}, {item.city}
                        </h3>
                    );
                })}
                {this.state.showComponent ? (
                    <PizzaDetail pizzeriaDetail={this.state.pizzeria} />
                ) : null}
                <PizzaForm/>
            </div>
        );
    }
}
export default PizzaList;