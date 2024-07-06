import { Link } from "react-router-dom/cjs/react-router-dom.min"
import classes from './MainNavigation.module.css'
import FavoritesContext from "../../store/favorite-context";
import { useContext } from "react";
function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>
            React Meetups
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>AllMeetups
                    </Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add NewMeetup
                    </Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites
                    <span className={classes.badge}>{favoritesCtx.totalfavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation