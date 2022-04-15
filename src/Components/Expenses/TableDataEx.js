import React from 'react';

const TableDataEx = (props) => {
  const {Source_of_Money , Column2 , Column3 ,Column4 , Column5 , Column6 ,Column7 ,Column8 } = props.obj ;
  console.log(props.obj.Source_of_Money )
    return (
        <tr className='p-6'>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Source_of_Money}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column2}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column3}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column4}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column5}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column6}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column7}</td>
            <td className='p-3 border bg-gray-400 shadow-2xl'>{Column8}</td>
        </tr>
    );
};

export default TableDataEx;