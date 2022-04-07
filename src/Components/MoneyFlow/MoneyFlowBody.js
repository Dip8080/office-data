import React from 'react';

const MoneyFlowBody = (props) => {
    const {checkNO,withdrowAmmount,receiver,bankName,company,date} = props.obj;
    

    return (
        <tr className='p-6'>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{company}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{bankName}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{checkNO}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{date}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{receiver}</td>
    <td className='p-3 border bg-purple-400 shadow-2xl'>{withdrowAmmount}</td>
   
    
    
    
  </tr>
    );
};

export default MoneyFlowBody;