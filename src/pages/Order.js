import React from 'react';
import { useSelector, useStore } from 'react-redux';


const Order = () => {

    const orders = useSelector( (state) => state.orderReducer.orders );

    console.log('orders component', orders)

    return (
        <div>
            <center>
             <h2>Orders</h2>
            </center>
            
                {orders.map( (item) => {
                    return (
                        <div key={item.id} className='order-items' >
                            Item: <p>{item.data.name}</p> <br />

                            <p>{item.data.description}</p> <br />

                            Price: <p>{item.data.price}</p> <br />
                        </div>
                        )
                    } )}
            
            
        </div>
    );
};

export default Order;