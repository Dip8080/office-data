import React, { useEffect, useState } from 'react';
import Tabletitle from '../Tabletitle/Tabletitle';
import Header from './Header';
import MoneyFlowBody from './MoneyFlowBody';
import MoneyflowHead from './MoneyflowHead';
import MoneyflowTail from './MoneyflowTail';

const MoneyFlow = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('AllData.json')
        .then(res=>res.json())
        .then(data=>setData(data.Requisition_09_03_22))
    },[])

    return (
        <div className='my-4 p-3'>
            <Header></Header>
             <table className='shadow'>
                      
             <Tabletitle></Tabletitle>
                     {
                         data.slice(23,29).map(x=><MoneyFlowBody obj={x}></MoneyFlowBody>)
                     }

                     <MoneyflowTail></MoneyflowTail>
                     
                     

              </table>
        </div>
    );
};

export default MoneyFlow;