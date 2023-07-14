import data from "../data/starbucks_data.json"
import { useParams } from "react-router-dom"

function Customize() {
    const { item_id } = useParams()
    const itemId = parseInt(item_id)

    const itemObj = []
    for (const item of data) {
        if (item.item_id === itemId) {
            itemObj.push(item)
        }

    }
    let [item] = itemObj
    console.log(item)


    return (
        <div>

        </div>
    )
}

export default Customize