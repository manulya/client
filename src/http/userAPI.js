import jwtDecode from "jwt-decode";
import { $authHost, $host } from "./index";

export const registration = async (email, name, password) => {
  const { data } = await $host.post("/api/user/registration", {
    email, 
    name, 
    password, 
    role: "user"
    
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("/api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  const decodedToken = jwtDecode(data.token);
  const userId = decodedToken.id;
  localStorage.setItem("userId", userId);
  console.log("log", localStorage)
  return jwtDecode(data.token);
};

export const check = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const { data } = await $authHost.get("/api/user/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
  
};
