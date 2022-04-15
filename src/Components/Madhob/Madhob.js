import React, { useEffect, useState } from 'react';
import Breakdown from './Breakdown';
import MadhobData from './MadhobData';

const Madhob = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('AllData.json')
        .then(res=>res.json())
        .then(data=>setData(data.MadhobSowrov))
    },[])
    return (
        <div>
            <h1 className='my-2 text-4xl antialiased flex justify-center'>Expense from taliBazar</h1>
            <table>
                {
                    data.slice(0,5).map(x=><MadhobData key={x.Expense_From_Tatibazar} obj={x}></MadhobData>)
                }
            </table>
            <h1 className='my-2 text-3xl antialiased flex justify-center'>Breakdown(27,224BDT)</h1>
            <table>
                {
                    data.slice(7,13).map(x=><Breakdown key={x.Expense_From_Tatibazar} obj={x}></Breakdown>)
                }
            </table>
        </div>
    );
};

export default Madhob;