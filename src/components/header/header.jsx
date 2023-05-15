import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/artlogo.svg";
import cartIcon from "../../img/cart.svg";
import userIcon from "../../img/user.svg";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdminAC, setIsAuthAC } from "../../store/userReducer";
import { LOGIN_ROUTE } from "../../utils/consts";

function Header() {

  const users=useSelector((state)=>state.users)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
  const logOut =()=>{
    dispatch(setIsAuthAC(false))
    dispatch(setIsAdminAC(false))
    localStorage.clear();
    navigate(LOGIN_ROUTE)
  }

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="Company logo" className="header__logo" />
      </div>
      <div className="header__right">
      <NavLink to="/header"><a className="header__button">О нас</a></NavLink>
      <NavLink to="/"><a className="header__button">Каталог</a></NavLink>
      <NavLink to="/header"><a className="header__button">Покупателям</a></NavLink>
      <NavLink to="/header"><a className="header__button">123-456-7890</a></NavLink>
      {users.isAuth ? 
        <><button className="user" onClick={()=>logOut()}><img src={userIcon} alt="User" className="header__icon" /></button>
        <img src={cartIcon} alt="Cart" className="header__icon" /></> 
      : (<button className="user" onClick={()=>navigate(LOGIN_ROUTE)}><img src={userIcon} alt="User" className="header__icon" /></button>)}
      
      </div>
    </header>
  );
}

export default Header;
