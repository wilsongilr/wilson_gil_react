import Details from "./Detail/Detail"
import Title from "./Title"
import Image from "./Image"


const Card = (props) => {

    return (

       
            <div className="card">
                
                    <Title className="card_title" title={props.title}/>
                
                <div className="card_image">
                    <Image url={props.img}/>
                </div>
                <div className="card_content">
                    <p className="card_text">
                        <Details genre={props.genre} status={props.status}/>
                        
                    </p>
                </div>
            </div>

            
    )

}

export default Card;