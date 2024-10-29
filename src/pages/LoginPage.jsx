import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services/mutations";
import { setCookie } from "../utils/cookie";
import "./LoginPage.css"

function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate } = useLogin();

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const { username, password } = form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");

    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
        setCookie("token", data?.token);
        navigate("/");
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };
  const clickHandler=(event)=>{
        event.preventDefault();
    // navigate("/registration");
  }

  return (
    <div className="container">
      <h1 className="title">فرم ورود</h1>
      <form className="registration-form" onSubmit={loginHandler}>
        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          className="input-field"
          value={form.username}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          className="input-field"
          value={form.password}
          onChange={changeHandler}
        />
        <button type="submit" className="submit-button">
          ورود
        </button>
      </form>
      <p className="login-prompt" onClick={clickHandler}>ایجاد حساب کاربری !</p>
    </div>
    // <form onSubmit={loginHandler}>
    //   <input
    //     type="text"
    //     name="username"
    //     placeholder="username"
    //     value={form.username}
    //     onChange={changeHandler}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="password"
    //     value={form.password}
    //     onChange={changeHandler}
    //   />
    //   <button type="submit">Login</button>
    // </form>
  );
}

export default LoginPage;
