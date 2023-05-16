import { useEffect, useState } from "react";

export const Assincronos = () => {

    const [render, setRender] = useState()

    useEffect(() => { request() }, [])
    async function request() {
        //fatch anexada ao arquivo de prova
        let response = fetch(
            "https://restcountries.com/v3.1/region/europe?fields=capital,population"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //retornando data recebida do then a cima
                return data;
            })
            .catch((error) => console.log(error));

        async function renderizar() {
            let temp = await response;
            var allpopulation = 0;
            temp.map((a) => {
                //aglomeração da media
                allpopulation += a.population;
            })
            return temp.map((a) => {
                //fazendo a verificação de maior que a media
                if (a.population > allpopulation / temp.length) {
                    return (
                        <div>
                            {a.capital.join(", ")}
                            <br></br>
                        </div>
                    )
                }
            })
        }
        setRender(await renderizar());
    }

    return (
        <div>
            {render}
        </div>
    );
};
