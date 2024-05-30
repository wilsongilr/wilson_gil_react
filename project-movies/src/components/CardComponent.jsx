import Details from "./Detail/Detail"
import Title from "./Title"
import Image from "./Image"


const Card = (props) => {
    return (
            <div className="card">
                   
                <div className="card_image">
                    <Image url={props.img}/>
                </div>
                <Title className="card_title" title={props.title}/>
                <div className="card_content">
                        <Details genre={props.genre} status={props.status}/>
                </div>
            </div>
    )
}

export default Card;