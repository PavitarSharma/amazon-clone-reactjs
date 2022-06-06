import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../state/StateProvider";
import { auth } from '../../firebase'
import { signOut } from "firebase/auth";


const Header = () => {
  const [{ basket , user }, dispatch] = useStateValue()
  const navigate = useNavigate()
  const handleAuthentication = () => {
    if(user) {
      signOut(auth)
        .then(() => {
          alert('User sign out successfully')
          navigate('/login')
        })
        .catch(error => alert(error.message))
    }
  }
  return (
    <div className={user ? "header": "header__hidden"}>
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="hearder__nav">
        <Link to="/login">
          <div className="header__options" onClick={handleAuthentication}>
            <span className="header__optionLineOne">{user && user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__options">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__optionBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        
      </div>
    </div>
  );
};

export default Header;
