import React, { useEffect, useState } from 'react';
import Header from './Header';
import MoneyFlowBody from './MoneyFlowBody';
import MoneyflowHead from './MoneyflowHead';
import MoneyflowTail from './MoneyflowTail';

const MoneyFlow = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('Moneyflow.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <div className='my-4 p-3'>
            <Header></Header>
             <table className='shadow'>
                      
                     <MoneyflowHead></MoneyflowHead>
                     {
                         data.map(x=><MoneyFlowBody  key={x.checkNO} obj={x}></MoneyFlowBody>)
                     }

                     <MoneyflowTail></MoneyflowTail>
                     
                     

              </table>
        </div>
    );
};

export default MoneyFlow;