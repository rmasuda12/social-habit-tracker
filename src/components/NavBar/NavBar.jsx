import "./NavBar.scss"
import group from '../../assets/icons/group.svg'
import home from '../../assets/icons/home.svg'
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    return (
        <>
        <section className="nav-bar">
            <Link to={"/"}>
                <ReactSVG className={location.pathname==="/"? "nav-bar__icon--filled" :"nav-bar__icon"} src={home}/>
            </Link>
            <Link to={"/friends"}>
                <ReactSVG className={location.pathname==="/friends"? "nav-bar__icon--filled" :"nav-bar__icon"} src={group}/>
            </Link>
        </section>
        </>
    )
}

export default NavBar;