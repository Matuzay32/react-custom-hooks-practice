import { useEffect, useState } from "react";




const intialPosition = {
    x:null,
    y:null
};




const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState(intialPosition);




	useEffect(() => {
		const handdleMouseMove = ({ clientX, clientY }) => {
			console.log(clientX, clientY);

			setMousePosition({ x: clientX, y: clientY });
		};

		window.addEventListener("mousemove", handdleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handdleMouseMove);
		};
	}, []);

     return mousePosition;
};

export default useMousePosition;
