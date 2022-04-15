import React from 'react';

const MoneyFlowBody = (props) => {
    const { Bengal_Diamond_Limited , Column2 , Column3 , Column4 ,
      Column5} =props.obj
    

    return (
        <tr className='p-6'>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{Bengal_Diamond_Limited}</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{Column2 }</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{Column3 }</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{Column4 ? Column4 : "null"}</td>
    <td className='p-3 border bg-gray-400 shadow-2xl'>{Column5 }</td>
   
   
    
    
    
  </tr>
    );
};

export default MoneyFlowBody;