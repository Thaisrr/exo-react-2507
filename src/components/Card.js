const Card = function ({serie, setStatut}) {

    return (
        <div className={(serie.finished)? 'card finished' : 'card'}>
            <div className="card-header">
                <img src={serie.image} alt=""/>
            </div>
            <div className="card-body">
                <h3>{serie.title}</h3>
                <p>{serie.description}</p>
                <p>
                    <button onClick={() => setStatut(serie)}>
                        {(serie.finished)? 'Vu' : 'Pas Vu'}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Card;