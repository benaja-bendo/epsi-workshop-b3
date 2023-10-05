import {Head, Link} from "@inertiajs/react";
import "../../css/card.css";
function CardAssoBP(props) {

    return(
        <Link href={''}>
            <div className={"cardCarouselHome"}>
                <img className={"cardCarouselImage"} src={props.image} alt={`image de fond ${props.titre}`}/>
                <div className={"cardCarouselDescriptionLogo"}>
                    <img className={"cardCarouselLogo"} src={props.logo} alt={`logo ${props.titre}`}/>
                    <p className={"cardCarouselDescription"}>{props.description} </p>
                </div>
            </div>
        </Link>
    );
}
export default CardAssoBP;