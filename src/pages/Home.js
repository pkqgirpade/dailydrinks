import React, { useState } from 'react';
import Order from './Order';
import OrderFrom from './OrderForm';
import '../styles/Home.css'

const Home = () => {

    const [orderFormVisible, setorderFormVisible] = useState(false)

    return (
        <>
            <div className='form-container'>
                    <div className='div-order'>
                        <button className='btn-order' onClick={()=>setorderFormVisible(true)} >place order</button>
                    </div>
                    <div>
                        {orderFormVisible ? <OrderFrom /> : null}
                    </div>
                    
                
            </div>
             <div className='order-itemsa' >
                <Order />
            </div> 
        </>
    );
};

export default Home;