import React, {useState}from 'react'
import Style from "./style.module.css"
import axios from 'axios';
import {server} from "../../server"
import { toast } from "react-toastify";

const Datacollection = () => {
    const [num, setNum]= useState("");
    const [lang, setLang]= useState("");

    const handleSubmit = async (e) => {
  
      axios
        .post(`${server}/lang/lang-info`, { num, lang})
        .then((res) => {
          toast.success("Update Success");
          setNum("");
          setLang("");

        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <ul className={Style.form1}>
       
      <li>
          <label htmlFor=" programming language" > Programming Language <span className={Style.required}>*</span></label>
          <select className={Style.fieldselect} name=" programming language" reuired={true} value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="">Select programming language</option>
            <option value="c++">C++</option>
            <option value="java">java</option>
            <option value="python">Python</option>
            <option value="javascript">Javascript</option>
            <option value="kotlin">Kotlin</option>
          </select>
        </li>
        <li>
        <label>No. of Students <span className={Style.required}>*</span></label>
        <input type="number" name="no" className={Style.fieldlong} required={true} value={num} onChange={(e) => setNum(e.target.value)}/>
    </li>
        <li>
        <button className={Style.btn} type='submit'>Submit</button>
    </li>
        </ul>
        </form>
    </div>
  )
}

export default Datacollection