import { useState } from 'react';


// Quando começar com 'use...', quer dizer que é um hook
// Usamos o 'state' só para variáveis que vão renderizar na tela
// ou seja, só essas variáveis que o React renderiza novamente se
// tiver seu valor alterado

export function Counter() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    );
}