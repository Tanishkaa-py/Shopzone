import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Guest</button>
    </div>
  );
};

export default Login;