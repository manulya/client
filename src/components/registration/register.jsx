import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css";
import { registration } from "../../http/userAPI";
import { CATALOG_ROUTE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { addUserAC, setIsAdminAC, setIsAuthAC } from "../../store/userReducer";

const Registeration=()=>{
  const [name, setUserName]=useState("")
  const [email, setUserLogin]=useState("")
  const [password, setUserPassword]=useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlerSubmit = async(event) => {
    event.preventDefault()
    try {
      console.log(email, name, password)
      const data = await registration(email, name, password)
      dispatch(addUserAC(data))
      dispatch(setIsAuthAC(true))
      if(data.role==='admin'){
        dispatch(setIsAdminAC(true))
      }
      navigate(CATALOG_ROUTE)
    } catch (error) {
      
    }

  }
  return (
    <div className="register-page">
      <div className="form">
        <h2>Регистрация</h2>
        <form className="register-form" onSubmit={event=>handlerSubmit(event) }>
          <input type="text" placeholder="Имя пользователя" value={name} onChange={(event)=>setUserName(event.target.value)}/>
          <input type="text" placeholder="Логин" value={email} onChange={(event)=>setUserLogin(event.target.value)}/>
          <input type="password" placeholder="Пароль" value={password} onChange={(event)=>setUserPassword(event.target.value)}/>
          <button className="btn" type ="submit">Зарегистрироваться</button>
          <p className="message">Уже зарегистрированы? <NavLink to="/login"><a>Войдите</a></NavLink></p>
        </form>
      </div>
    </div>
  );
}

export default Registeration;
