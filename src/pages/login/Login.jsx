import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth;
  const navigate = useNavigate()
  return (
    <h1>Login</h1>
  )
}

export default Login