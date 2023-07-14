import { Link } from "react-router-dom"

function DisplayItems(props) {
    return (
        <Link to={`/${props.info.item_type}/${props.item_id}`} className="items" >
            <div>{props.info.item_name}</div>
            <img src={props.info.item_img_path} />
        </Link>


    )

}

export default DisplayItems