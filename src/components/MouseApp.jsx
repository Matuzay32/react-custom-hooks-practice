import React  from 'react';
import useBackground from '../hooks/useBackground';



const MouseApp = () => {
const {background,mousePosition} = useBackground();




    return (
			<div style={{background: background ,height:'100vh'}}>
				<pre>{
                    
                    JSON.stringify(mousePosition, null, 2)
                    
                    }</pre>
			</div>
		);
};


export default MouseApp;