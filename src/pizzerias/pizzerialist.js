import React, { Component } from 'react';
import Data from './data.json';
import PizzaDetail from './pizzeriadetail'
import axios from 'axios';

class PizzaList extends Component {
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
            })
        }
    
    render(){
        return(
            <div>
                {Data.map( item =>{
                return <PizzaDetail p = {item}/>

                    })            
                }
            </div>
        )
    }
}
export default PizzaList;