import { useState } from "react";

const useCounter = (valorInicial) => {

const [counter , setCounter] = useState(valorInicial);

const increment  = ()=>{
setCounter(counter +1 );
}

const reset  = ()=>{
setCounter(0);

}

    return [counter , increment , reset ]


};


export default useCounter;