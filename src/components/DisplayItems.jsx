import { Link } from "react-router-dom"

function DisplayItems(props) {
    return (
        <Link to={`/${props.info.item_type}/${props.item_id}`} className="items" >
            <img src={props.info.item_img_path} />
            <p>{props.info.item_name}</p>
        </Link>


    )

}

export default DisplayItems