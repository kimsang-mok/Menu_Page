import { Link } from "react-router-dom"

function DisplayMenu(props) {
    return (
        <Link to={`/${props.id}`}>
            <h2>{props.sub_category}</h2>
            <img src={props.image_path}></img>
        </Link>

    )
}

export default DisplayMenu