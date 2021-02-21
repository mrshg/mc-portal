import React, { useEffect, useState } from "react";
import Link from "next/link";

function Home() {
    return (
        <div>
        <div>
            <div>Home 3</div>
            <Contador/>
        </div>
        <Link href="/sobre">
            <a>Sobre</a>
        </Link>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);
    function adicionarContador(){
        setContador(contador+1)
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adiciona Contador</button>
        </div>
    )
}

export default Home