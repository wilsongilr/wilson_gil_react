

function Details(props) {

    return (

        <div className="card_text">
            <p><b>Genero:</b>  {props.genre}</p>
            <p><b>Status:</b> {props.status}</p>
        </div>
    );

}

export default Details;
