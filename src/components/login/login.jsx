import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { login } from "../../http/userAPI";
import { CATALOG_ROUTE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { setIsAdminAC, setIsAuthAC } from "../../store/userReducer";

const Login=() =>{
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlerSubmit = async(event) => {
    event.preventDefault()
    try {
      const data = await login(email, password)
      dispatch(setIsAuthAC(true))
      if(data.role==='admin'){
        dispatch(setIsAdminAC(true))
      }
      navigate(CATALOG_ROUTE)
    } catch (error) {
      
    }

  }

  return (
    <div className="login-page">
      <div className="form">
        <h2>Авторизация</h2>
        <form className="login-form" onSubmit={event=>handlerSubmit(event) }>
          <input type="text" placeholder="Логин" value={email} onChange={(event)=>setEmail(event.target.value)}/>
          <input type="password" placeholder="Пароль" value={password} onChange={(event)=>setPassword(event.target.value)}/>
          <button className="btn" type ="submit">Войти</button>
          <p className="message">Нет аккаунта? 
            <NavLink to="/registration"><a> Зарегистрируйтесь</a></NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
