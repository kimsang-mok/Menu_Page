import { useParams } from "react-router-dom";
import data from "../data/sub_type.json";
import DisplaySubMenu from "./DisplaySubMenu";
import Sidebar from "./Sidebar";
import "./SubMenu.scss"


function SubMenu() {
    const { sub_category } = useParams()


    const subCatItem = []

    for (const item of data) {
        if (item.sub_category === sub_category) {
            subCatItem.push(item)
        }
    }

    return (
        <div className="sub-menu-container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <h1>{subCatItem[0].sub_category}</h1>
            <div className="sub-menu">
                <section className="item-type">
                    {subCatItem.map((item) => (
                        <>{DisplaySubMenu(item)}</>
                    ))}
                </section>

            </div>

        </div>

    )
}

export default SubMenu