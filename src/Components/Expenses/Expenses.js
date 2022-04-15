import React, { useEffect, useState } from 'react';
import Disbusement from './Disbusement';
import TableDataEx from './TableDataEx';


const Expenses = () => {
    const [data , setData] = useState([])
useEffect(()=>{
    fetch('AllData.json')
    .then(res=>res.json())
    .then(data=>setData(data.BDL_Cheque_Expense))
},[])

    return (
        <div>
            <h1 className='my-2 text-4xl antialiased flex justify-center'>Source of money</h1>
            <table>
                {
                    data.slice(0,10).map(x=><TableDataEx key={x.Source_of_Money} obj={x}></TableDataEx>)
                }
            </table>
            <h1 className='my-2 text-4xl antialiased flex justify-center'>Direct check Disbursement</h1>

            <table>
                {
                    data.slice(13,20).map(x=><Disbusement key={x.Source_of_Money} obj={x}></Disbusement>)
                }
            </table>
        </div>
    );
};

export default Expenses;