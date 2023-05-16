import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/artlogo.svg";
import cartIcon from "../../img/cart.svg";
import userIcon from "../../img/user.svg";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdminAC, setIsAuthAC } from "../../store/userReducer";
import { ADMIN_ORDERS_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE } from "../../utils/consts";

function Header() {

  const users=useSelector((state)=>state.users)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
  const logOut =()=>{
    dispatch(setIsAuthAC(false))
    dispatch(setIsAdminAC(false))
    localStorage.clear();
    console.log(localStorage)
    navigate(LOGIN_ROUTE)
  }

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Company logo" className="header__logo" />
      </div>
      <div className="header__right">
      <NavLink to="/"><a className="header__button">Каталог</a></NavLink>
      {users.isAdmin ? 
      <>
        <button className="user" onClick={()=>navigate(ADMIN_ROUTE)}>Админ</button>
        <button className="user" onClick={()=>navigate(ADMIN_ORDERS_ROUTE)}>Заказы</button>
        </>
      : <></>}
      {users.isAuth ? 
        <><img src={userIcon} alt="User" onClick={()=>logOut()} className="header__icon" />
        <img style={{width:"30px", marginLeft:"5px"}} src={cartIcon} alt="Cart" onClick={()=>navigate(BASKET_ROUTE)}/>
        </> 
      : (<button className="user" onClick={()=>navigate(LOGIN_ROUTE)}><img src={userIcon} alt="User" className="header__icon" /></button>)}
      
      </div>
    </header>
  );
}

export default Header;
