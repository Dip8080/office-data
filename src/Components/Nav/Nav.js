import React from 'react';
import { Link } from 'react-router-dom';
import('./Nav.css')

const Nav = () => {
    return (
        <div className='p-5 bg-gray-500  shadow navbar'>
          <ul className=' flex subpixel-antialiased p-3'>
          <li><Link to={'/'}>Requisition</Link></li>
          <li><Link to={'Expenses'}>Expenses(BDL-check)</Link></li>
          <li><Link to={'Madhob'}>Madhob_Sowrov</Link></li>
          </ul>
        </div>
    );
};

export default Nav;