import React, { useEffect, useState } from 'react';
import Tablebody from '../TableBody/Tablebody';
import Tabletitle from '../Tabletitle/Tabletitle';
import TableTail from './TableTail';
import('./Tablehead.css')
const Tablehead = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return (
        <div>
                
                <table className='shadow'>
                      
                        <Tabletitle></Tabletitle>

                       {
                           data.map(x=> <Tablebody obj={x} key={x.id}></Tablebody>)
                       }
                      <TableTail></TableTail> 
  
                </table>
            
        </div>
    );
};

export default Tablehead;