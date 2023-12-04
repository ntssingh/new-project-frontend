import React, { useState } from 'react';
import Style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";


const SignPage = () => {
    const[visible, setVisible]=useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    let toggleClass = visible ? Style.active : null;
    
    const handleSignin = async (e) => {
        e.preventDefault();
    
        await axios
          .post(
            `${server}/user/login-user`,
            {
              email,
              password,
            },
            { withCredentials: true }
          )
          .then((res) => {
            toast.success("Login Success!");
            navigate("/dashboard/analytics");
            window.location.reload(true);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      };

      const handleSignup = async (e) => {
        e.preventDefault();
    
        axios
          .post(`${server}/user/create-user`, { name, email, password})
          .then((res) => {
            toast.success(res.data.message);
            setName("");
            setEmail("");
            setPassword("");
            setVisible(false);
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
      };

  return (
    <div className={Style.body}>
        <div className={`${Style.container} ${toggleClass}`}>
        <div className={`${Style.formcontainer} ${Style.signup}`}>
            <form onSubmit={handleSignup}>
                <h1>Create Account</h1>
                <span>use your email for registeration</span>
                <input type="text" placeholder="Name" autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div className={`${Style.formcontainer} ${Style.signin}`}>
            <form onSubmit={handleSignin}>
                <h1>Sign In</h1>
                <span>use your email & password for sign in</span>
                <input type="email" placeholder="Email"  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <Link to= "/">Forget Your Password?</Link>
                <button type="submit">Sign In</button>
            </form>
        </div>
        <div className={Style.togglecontainer}>
            <div className={Style.toggle}>
                <div className={`${Style.togglepanel} ${Style.toggleleft}`}>
                    <h1>Welcome Back!</h1>
                    <p>Have an account?</p>
                    <button className={Style.hidden} onClick={()=>setVisible(false)}>Sign In</button>
                </div>
                <div className={`${Style.togglepanel} ${Style.toggleright}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Don't have an account?</p>
                    <button className={Style.hidden} onClick={()=>setVisible(true)}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignPage