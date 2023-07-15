import { Link } from "react-router-dom"
import "./Sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
            <p>Drinks</p>
            <ul>
                <Link to="/Oleato™">Oleato</Link>
                <Link to="/Hot Coffees">Hot Coffees</Link>
                <Link to="/Hot Drinks">Hot Drinks Hot Coffees</Link>
                <Link to="/Hot Coffees">Hot Teas</Link>
            </ul>
            <p>Foods</p>
            <ul>
                <li>Oleato</li>
                <li>Hot Coffes</li>
                <li>Hot Drinks</li>
                <li>Hot Teas</li>
            </ul>
            <p>Teas</p>
            <ul>
                <li>Oleato</li>
                <li>Hot Coffes</li>
                <li>Hot Drinks</li>
                <li>Hot Teas</li>
            </ul>
        </div>
    )
}

export default Sidebar