import {useMemo} from "react";
import useMousePosition from "./useMousePosition";




const useBackground = () => {


    const mousePosition = useMousePosition();

    let background   = useMemo(() =>  mousePosition.x >= window.innerWidth /2 ? 'orange' : 'green' , [mousePosition]);
        
    

    return {background, mousePosition};



};


export default useBackground;