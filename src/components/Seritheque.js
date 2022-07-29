import "../style/Seritheque.css";
import {useState} from "react";
import Card from "./Card";
import Formulaire from "./Formulaire";

const Seritheque = function() {


    const [series, setSeries] = useState([
        {
            title: 'Lost',
            description: 'Il y a une île qui fait grrr',
            image: './images/lost.png',
            finished: true
        },
        {
            title: 'Russian Doll', 
            description: '.....', 
            image: './images/russian-doll.jpg', 
            finished: true
        },
        {
            title: 'The Witcher', 
            description: '....', 
            image: './images/the_witcher.jpg', 
            finished: false
        },
        {
            title: 'Stranger Things',
            description: 'Il y a des monstres pas beaux',
            image: './images/stranger-things-3.jpg',
            finished : true
        }
    ]);


    function setStatutIndex(index) {

      /*  if(serie_copy[index].finished === true) {
            serie_copy[index].finished = false;
        } else {
            serie_copy[index].finished = true;
        }
       */
       //  serie_copy[index].finished = (serie_copy[index].finished )? false : true;
        const series_copy = [...series];
        //const index = series_copy.indexOf(serie)
        series_copy[index].finished = !series_copy[index].finished;
        setSeries(series_copy);
    }

    function setStatut(serie) {
        serie.finished = !serie.finished;
        const series_copy = [...series];
        const index = series_copy.findIndex((el) => el.title === serie.title);
        series_copy[index] = serie;
        setSeries(series_copy);
    }

    function addSerie(serie) {
        setSeries([...series, serie]);
    }




    return (
        <main id="Seritheque">

            <Formulaire action={addSerie}/>


            <h2>Mes Séries</h2>

            <section className="grid">
                {series.map(function(serie) {
                    return (
                        <Card serie={serie} setStatut={setStatut} key={serie.title}/>
                    )
                })}
            </section>
        </main>
    )
}

export default Seritheque;