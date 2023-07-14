import data from "../data/cat_subcat.json"
import DisplayMenu from "./DisplayMenu";

function Menu() {
    const drinks = [];
    const food = [];
    const atHomeCoffee = [];
    const merchandise = [];
    for (const item of data) {
        if (item.categories === "Drinks") {
            drinks.push(item)
        }
        else if (item.categories === "Food") {
            food.push(item)
        }
        else if (item.categories === "At Home Coffee") {
            atHomeCoffee.push(item)
        }
        else {
            merchandise.push(item)
        }
    }
    console.log(drinks)
    console.log(food)

    return (
        <section className="menu-item drinks">
            <h1>Menu</h1>
            {drinks.map((item) => (
                <>{DisplayMenu(item)}</>
            ))}
        </section>
    )
}

export default Menu