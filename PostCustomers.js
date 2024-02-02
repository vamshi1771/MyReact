import React from 'react';

import Forms from '../components/Forms';
import DarkMode from './DarkMode';




function PostCustomer(){



    
    return(
        <div className='Froms' style={{ 'font-weight': '500','font-size': 'large', 'display': 'grid', 'place-items':'center', 'boxSizing':'content-box', 'height': '100vh','min-width': '936px','min-height': '475px'}}>
		
        <h1>Enter Customer Details</h1> 
        <Forms></Forms>
	</div>
    );
}
export default PostCustomer;