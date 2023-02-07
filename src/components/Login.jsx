import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //const REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email == "" || password == "") {
      swal.fire("ingrese todos los datos", "", "error");
      return;
    }
    /* if (REGEXP_EMAIL.test(email)) {
      alert("ingrese una direccion de correo valida");
      return; 
    }*/
    if (email == "challenge@alkemy.org" && password == "react") {
      swal.fire("Sesión iniciada", "¡Inicio de sesion exitoso!", "success");
      axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("/movies");
        });
    } else {
      alert("datos incorrectos");
    }
  };
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electronico:</span>
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <span>
          <span>Contraseña:</span>
          <br />
          <input type="password" name="password" id="" />
        </span>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
