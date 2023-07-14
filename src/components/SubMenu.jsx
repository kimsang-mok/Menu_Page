import { useParams } from "react-router-dom";
import data from "../data/sub_type.json";
import DisplaySubMenu from "./DisplaySubMenu";


function SubMenu() {
    const { sub_cat_id } = useParams()
    const subCatId = parseInt(sub_cat_id);

    const subCatItem = []
    const itemType = []

    for (const item of data) {
        if (item.sub_category_id === subCatId) {
            subCatItem.push(item)
        }
    }
    for (const i of subCatItem) {
        itemType.push(i.type)
    }
    console.log(subCatItem)

    return (
        <>
            <h1>{subCatItem[0].sub_category}</h1>
            /////////////
            <section className="item-type">
                {subCatItem.map((item) => (
                    <>{DisplaySubMenu(item)}</>
                ))}
            </section>
        </>

    )
}

export default SubMenu