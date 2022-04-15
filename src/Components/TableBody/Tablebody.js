import React from 'react';
import('./Tablebody.css')
const Tablebody = (props) => {
  const {SerialNo ,purpose,cost , Remarks} =props.obj;
    return (
        
  <tr className='p-6'>
    <td className='p-3 border bg-gray-400 shadow-2xl shadow-inner'>{SerialNo}</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{purpose }</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{cost ? cost  : 'not fournd'}</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{Remarks ? Remarks : 'null'}</td>
    
  </tr>
  

       
    );
};

export default Tablebody;