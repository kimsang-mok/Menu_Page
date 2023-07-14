
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
        <>
            <h2>{props.type}</h2>
            {items.map((item) => (
                <>{DisplayItems(item)}</>
            ))}
        </>


    )
}

export default DisplaySubMenu