import React from 'react';

const Disbusement = (props) => {
    const {Source_of_Money ,Column2 ,Column3 ,Column4} = props.obj ;
    return (
      <tr>
          <td  className='p-3 border bg-gray-400 shadow-2xl'>{Source_of_Money}</td>
          <td  className='p-3 border bg-gray-400 shadow-2xl'>{Column2}</td>
          <td  className='p-3 border bg-gray-400 shadow-2xl'>{Column3}</td>
          <td  className='p-3 border bg-gray-400 shadow-2xl'>{Column4}</td>
      </tr>
    );
};

export default Disbusement;