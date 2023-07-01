import { useState } from "react";
import { getUsers } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [registered, setRegistered] = useState("");

  
  const navigate = useNavigate();

  const validateUserName = () => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!fullName) {
      setNameError("Username is required!");
      return false;
    } else if (!regex.test(fullName)) {
      setNameError(
        "Username should be 3-16 characters and shouldn't include any special character!"
      );
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setEmailError("Email is required!");
      return false;
    } else if (!regex.test(email)) {
      setEmailError("It should be a valid email address!");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!password) {
      setPassError("Password is required!");
      return false;
    } else if (!regex.test(password)) {
      setPassError(
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      );
      return false;
    } else {
      setPassError("");
      return true;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const isUserNameValid = validateUserName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isUserNameValid && isEmailValid && isPasswordValid) {
      const users = getUsers();
      const check = users.some((user) => user.email === email);

      if (check) {
        setRegistered("User already registered");
      } else {
        users.push({
          id:Date.now(),
          fullName,
          email,
          password,
          isSubscribed: false,
          isLogin:false
        });
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("You have registered", {
          autoClose: 1000
        })
        navigate("/login");
      }
    }

    setEmail("");
    setFullName("");
    setPassword("");
  }

  function handleFormChange() {
    navigate("/login");
  }

  return (
    <div className={styles.regContainer}>
      <div className={styles.registerContainer}>
      <div className={styles.headRegister}>
        <p className={styles.isRegistered}>{registered}</p>
        <h2 className={styles.register}>Register</h2>
        </div>
        <form className={styles.regFormContainer} onSubmit={handleSubmit}>
          {/* <label htmlFor="fname"></label> */}
          <input
            id="fname"
            type="text"
            value={fullName}
            placeholder="enter your name..."
            onChange={(e) => setFullName(e.target.value)}
            className={styles.regInput}
          />

          <span className={styles.errMsgName}>{nameError}</span>

          <br />

          {/* <label htmlFor="email"></label> */}
          <input
            id="email"
            type="email"
            value={email}
            placeholder="enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            className={styles.regInput}
          />
          <span className={styles.errMsgEmail}>{emailError}</span>
          <br />

          {/* <label htmlFor="pwd"></label> */}
          <input
            id="pwd"
            type="password"
            placeholder="enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.regInput}
          />
          <span className={styles.errMsgPass}>{passError}</span>
          <br />

          <button className={styles.regbtn}>Register</button>
        </form>
        <h4 className={styles.regfoot}>
          Already a user?
          <span className={styles.spanReg} onClick={handleFormChange}>
            Login here...
          </span>
        </h4>
      </div>
      <ToastContainer />
    </div>
  );
}
