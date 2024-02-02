import React from 'react';

import OrdersForms from '../components/OrdersForm';

function PostOrders(){
    return(
        <div className='Froms' style={{ 'font-weight': '500','font-size': 'large', 'display': 'grid', 'place-items':'center', 'boxSizing':'content-box', 'height': '100vh','min-width': '936px','min-height': '475px'}}>
        <h1>Enter Order Details</h1>
        <OrdersForms></OrdersForms>
	</div>
    );
}
export default PostOrders;