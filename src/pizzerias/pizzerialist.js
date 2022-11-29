import React, { Component } from 'react';
import Data from '../data.json';

class PizzaList extends Component {
    render(){
        return(
            <div>
                {Data.map( p =>
                    <h4>{p.restaurant_name} - {p.city}</h4>
                    )            
                }
            </div>
        )
    }
}
export default PizzaList;