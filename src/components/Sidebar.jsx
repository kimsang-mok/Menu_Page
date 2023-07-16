import { Link } from "react-router-dom"
import "./Sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
            <p>Drinks</p>
            <ul>
                <Link to="/Oleato™">Oleato</Link>
                <Link to="/Hot Coffees">Hot Coffees</Link>
                <Link to="/Hot Teas">Hot Teas</Link>
                <Link to="/Hot Drinks">Hot Drinks</Link>
                <Link to="/Frappuccino® Blended Beverages">Frappuccino® Blended Beverages</Link>
                <Link to="/Cold Coffees">Cold Coffees</Link>
                <Link to="/Iced Teas">Iced Teas</Link>
                <Link to="/Cold Drinks">Cold Drinks</Link>

            </ul>
            <p>Foods</p>
            <ul>
                <Link to="/Hot Breakfast">Hot Breakfast</Link>
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
            </ul>
            <p>Teas</p>
            <ul>
                <Link to=""></Link>
                <Link to=""></Link>
            </ul>
            <p>Teas</p>
            <ul>
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
            </ul>
        </div>
    )
}

export default Sidebar