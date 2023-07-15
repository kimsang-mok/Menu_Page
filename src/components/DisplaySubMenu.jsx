import "./DisplaySubMenu.scss"
import data from "../data/starbucks_data.json"
import DisplayItems from "./DisplayItems"

function DisplaySubMenu(props) {
    const items = []
    for (const item of data) {
        if (item.item_type_id === props.id) {
            items.push(item)
        }
    }




    return (
        <div className="sub-menu-items">
            <h2>{props.type}</h2>
            {items.map((item) => (
                <>{DisplayItems(item)}</>
            ))}
        </div>


    )
}

export default DisplaySubMenu