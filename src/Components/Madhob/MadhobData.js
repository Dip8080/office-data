import React from 'react';

const MadhobData = (props) => {
    const {Expense_From_Tatibazar , Column2 , Column3 ,  Column4 } = props.obj ;
    return (
       <tr>
           <td  className='p-3 border bg-gray-400 shadow-2xl'>{Expense_From_Tatibazar}</td>
           <td  className='p-3 border bg-gray-400 shadow-2xl'>{Column2}</td>
           <td  className='p-3 border bg-gray-400 shadow-2xl'>{Column3}</td>
           <td  className='p-3 border bg-gray-400 shadow-2xl'>{Column4}</td>
       </tr>
    );
};

export default MadhobData;