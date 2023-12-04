import React, {useState} from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Style from "./ProSidebar.module.css";
import {
  FaBars,
  FaRegChartBar,
  FaThList
}from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const ProfileSidebar = ({ children}) => {
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.user);
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
       
        {
            path:"/dashboard/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
      
        {
            path:"/dashboard/table",
            name:"Data Table",
            icon:<FaThList/>
        }
    ]



     const logoutHandler = () => {
       
       axios
         .get(`${server}/user/logout`, { withCredentials: true })
         .then((res) => {
           toast.success(res.data.message);
           window.location.reload(true);
           navigate("/");
         })
         .catch((error) => {
           console.log(error.response.data.message);
         });
     };
  return (
    <div className={Style.container}>
    <div style={{width: isOpen ? "200px" : "50px"}} className={Style.sidebar}>
        <div className={Style.top_section}>
            <h1 style={{display: isOpen ? "block" : "none"}} className={Style.logo}>Dashboard</h1>
            <div style={{marginLeft: isOpen ? "30px" : "0px"}} className={Style.bars}>
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className={Style.link} >
                    <div className={Style.icon}>{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className={Style.link_text}>{item.name}</div>
                </NavLink>
            ))
        }
        <NavLink onClick={logoutHandler} className={Style.link} >
                    <div className={Style.icon}><IoIosLogOut /></div>
                    <div style={{display: isOpen ? "block" : "none"}} className={Style.link_text}>Sign out</div>
                </NavLink>
    </div>
    <main>{children}</main>
 </div>
  )
}

export default ProfileSidebar