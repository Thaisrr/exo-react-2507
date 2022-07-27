import "../style/Seritheque.css";

const Seritheque = function() {

    const s1 = {
        title: 'Lost', 
        description: 'Il y a une île qui fait grrr',
        image: './images/lost.png',
        finished: true
    }

    const series = [
        s1,
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
    ]





    return (
        <main id="Seritheque">
            <h2>Mes Séries</h2>

            <section className="grid">

                {series.map(function(serie) {
                    return (
                        <div className={(serie.finished)? 'card finished' : 'card'}>
                            <div className="card-header">
                                <img src={serie.image} alt=""/>
                            </div>
                            <div className="card-body">
                                <h3>{serie.title}</h3>
                                <p>{serie.description}</p>
                            </div>
                        </div>
                    )
                })}

            </section>

        </main>
    )
}

export default Seritheque;