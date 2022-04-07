import React from 'react';
import('./Tablebody.css')
const Tablebody = (props) => {
  const {id ,purpose , cost , company} =props.obj;
    return (
        
  <tr className='p-6'>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{purpose}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{company}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{id}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{cost}</td>
    
  </tr>
  

       
    );
};

export default Tablebody;