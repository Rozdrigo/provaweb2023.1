import { useState } from "react"

export const Pokemon = () => {

    var urls = [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
    ]

    const [initial, setInitial] = useState(false);
    const [url, setUrl] = useState(urls[0]);

    //essa função monitora a flag e de acordo com a flag escolhe qual rederizar
    function btnClick() {
        if (initial) {
            setUrl(urls[0])
        } else {
            setUrl(urls[1])
        }
        //alterna a flag ao executar a função
        setInitial(!initial);
    }

    return (
        <div>
            <img src={url}></img>
            {/* botão possui referencia da função de modificação de url e altenador de flag */}
            <button onClick={btnClick}>MUDAR IMAGEM</button>
        </div>
    )
}