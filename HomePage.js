import React from 'react';
import Vamshi from '../components/Navigator';
import Forms from '../components/Forms';

import '../App.css';

function Home(){
return (
<div>
	
	<div className='Forms' style={{ 'font-weight': '500','font-size': 'large', 'display': 'grid', 'place-items':'center', 'boxSizing':'content-box', 'height': '100vh','min-width': '936px','min-height': '475px'}}>
		<Forms></Forms>
	</div>
	
</div>
);
}

export default Home;