import React, { useState } from 'react';
import '../styles/OrderForm.css';
import {useDispatch, useSelector} from 'react-redux';
import {addOrder} from '../actions/index'



const OrderFrom = () => {
    const orders = useSelector( (state) => state );
    const dispatch = useDispatch();

    const drinks = [{
        name : 'orange',
        description : 'freshly squeezed delicous oranges',
        price : 30,
    },
    {
        name : 'apple',
        description : 'freshly squeezed delicous apples',
        price : 32,
    },
    {
        name : 'cola',
        description : 'freshly cold drink',
        price : 40,
    },
]

    const [data, setData] = useState({
        name: '',
        description : '',
        quantity : 0,
        price : 0,
    })

    
    const [selected, setSelected] = useState(false)

    const inputHandler = (e) => {
        console.log('inside handler');
        const item = drinks.find( x => x.name === e.target.value )
        setData({
            name: item.name,
            description : item.description,
            price : item.price,
        })

        setSelected(true)
    }

    console.log('order form', orders)

    return (
        <div className='main-div'>
            <label>Select Drink</label><br/>
            <select value="Radish"  onChange={inputHandler}>
                {drinks.map( (item,index) => <option key={index} value= {item.name} > {item.name} </option> )}
            </select><br />

            <div className={selected ? 'show' : 'hide'} >
                {data.name} <br /> {data.description} <br /> {data.price}<br/>
                <button onClick={() => dispatch(addOrder(data))} >Check out</button>
            </div>

        </div>
    );
};

export default OrderFrom;