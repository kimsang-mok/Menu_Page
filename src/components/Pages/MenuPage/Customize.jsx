import data from "../../../data/starbucks_data.json"
import { useParams } from "react-router-dom"
import "./Customize.scss"
import stars from "./stars.png"

function Customize() {
    const { item_id } = useParams()
    const itemId = parseInt(item_id)

    let item_name = ''
    let item_image = ''
    for (const item of data) {
        if (item.item_id === itemId) {
            item_name = item.item_name
            item_image = '.' + item.item_img_path
        }

    }

    const handleClick = (event) => {
        const circle = document.querySelector('.circle')
        const tall = document.querySelector('.tall')
        const grande = document.querySelector('.grande')
        const venti = document.querySelector('.venti')
        const trenta = document.querySelector('.trenta')

        if (tall.contains(event.target)) {
            circle.style.marginLeft = `${16}px`;
        }
        if (grande.contains(event.target)) {
            circle.style.marginLeft = `${106}px`;
        }
        if (venti.contains(event.target)) {
            console.log(event.target)
            circle.style.marginLeft = `${196}px`;
        }
        if (trenta.contains(event.target)) {
            circle.style.marginLeft = `${282}px`;
        }
    }


    return (
        <div>
            <h2></h2>
            <img />


            <section className="wrapper">
                <main className="content-wrapper">
                    <article className="main-content product-content">
                        <div className="product-picture">
                            <img
                                src={item_image}
                                alt={item_name}
                            />
                        </div>
                        <div className="product-context">
                            <h1>{item_name}</h1>
                            <p>
                                <span>100 Calories</span>
                            </p>
                        </div>
                    </article>
                    {/* Structure for Section that Cover User Option */}
                    <article className="product-customize">
                        <div className="size-option">
                            <h2>Size options</h2>
                            <form action="get">
                                <ul className="size-types">
                                    <li className="circle">

                                    </li>
                                    <li>
                                        <div onClick={handleClick} className="size tall">
                                            <img
                                                src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                                                alt="Coffee Cup Size"
                                            />
                                            <h4>Tall</h4>
                                            <small>12 fl oz</small>
                                        </div>
                                    </li>
                                    <li>
                                        <div onClick={handleClick} className="size grande">
                                            <img
                                                src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                                                alt="Coffee Cup Size"
                                            />
                                            <h4>Grande</h4>
                                            <small>16 fl oz</small>
                                        </div>
                                    </li>
                                    <li>
                                        <div onClick={handleClick} className="size venti">
                                            <img
                                                src="https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg"
                                                alt="Coffee Cup Size"
                                            />
                                            <h4>Venti</h4>
                                            <small>24 fl oz</small>
                                        </div>
                                    </li>
                                    <li>
                                        <div onClick={handleClick} className="size trenta">
                                            <img
                                                src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                                                alt="Coffee Cup Size"
                                            />
                                            <h4>Trenta</h4>
                                            <small>30 fl oz</small>
                                        </div>
                                    </li>
                                </ul>
                            </form>
                            <a href="https://www.google.com/maps" target="_blank">
                                Available at your nearest shop
                            </a>
                        </div>
                        <div className="additional-option">
                            <h2>What's included</h2>
                            {/* Form for selected Milk */}
                            <div className="info-option">
                                <div className="milk-option">
                                    <fieldset>
                                        <legend htmlFor="">
                                            <small>Milk</small>
                                        </legend>
                                        <select name="Milk" id="milk-option">
                                            <option value="">Heavy Milk</option>
                                            <option value="">Vanilla Sweet Cream</option>
                                            <option value="">Nonfat Milk</option>
                                            <option value="" selected="">
                                                2% Milk
                                            </option>
                                            <option value="">Whole Milk</option>
                                            <option value="">Breve (Half &amp; Half)</option>
                                            <option value="">Almond</option>
                                            <option value="">Coconut</option>
                                            <option value="">Oatmilk</option>
                                            <option value="">Soy</option>
                                        </select>
                                    </fieldset>
                                </div>
                                {/* Form For Add/Decrease Sweetness */}
                                <div className="flex-selection">
                                    <fieldset>
                                        <legend htmlFor="">
                                            <small>Sweeteners</small>
                                        </legend>
                                        <p>Classic Syrup pumps</p>
                                        <div>
                                            <button className="flex-sub">-</button>
                                            <span>num</span>
                                            <button className="flex-add">+</button>
                                        </div>
                                    </fieldset>
                                </div>
                                {/* Form For Espresson & Shot Option */}
                                <div className="milk-option">
                                    <fieldset>
                                        <legend htmlFor="">
                                            <small>Espresso &amp; Shot Options</small>
                                        </legend>
                                        <select name="Espresso&Shots" id="espresso-option">
                                            <option value="">Signature Espresso Roast</option>
                                            <option value="">Blond Espresso Roast</option>
                                            <option value="">1/3 Decaf Espresso</option>
                                            <option value="">1/2 Decaf Espresso</option>
                                            <option value="">2/3 Decaf Espresso</option>
                                        </select>
                                    </fieldset>
                                </div>
                                {/* Form For Add/Decrease Shots */}
                                <div className="flex-selection">
                                    <fieldset>
                                        <legend htmlFor="">
                                            <small>Espresso &amp; Shot Options</small>
                                        </legend>
                                        <p>Shots</p>
                                        <div>
                                            <button className="flex-sub">-</button>
                                            <span>num</span>
                                            <button className="flex-add">+</button>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="btn-section">
                                    <button className="btn-customize">
                                        <img src={stars} alt="" />
                                        <span>customize</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    {/* Start Nutritional Page */}
                    <article className="main-content nutrition-container">
                        <div>200Item</div>
                        <div>
                            <small>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
                                earum cupiditate in atque fuga qui ipsum libero laboriosam voluptatum.
                                Voluptatibus a quos beatae ab expedita eaque maiores facere quis,
                                facilis quisquam nihil, dolores ipsa enim inventore error impedit,
                                autem placeat nostrum rem? Dolorum placeat sint quaerat, qui tenetur
                                autem blanditiis temporibus, in totam iste molestias suscipit maiores
                                sit id molestiae at fugiat quas obcaecati dicta similique ad soluta!
                                Odio magni error accusantium expedita vitae, vero maxime, rem officiis
                                explicabo molestias omnis, reprehenderit aperiam quibusdam officia
                                ipsum ullam illo unde quam cumque quidem? Nobis veniam sapiente
                                deserunt molestiae, dolor aspernatur debitis.
                            </small>
                            <p>
                                <strong>160 calories, 22g Sugar, 3g fat</strong>
                            </p>
                        </div>
                        <button className="btn-nutri">Full nutition &amp; ingrdients list</button>
                    </article>
                    {/* End of Nutitional Section */}
                </main>
            </section>

        </div>
    )
}

export default Customize