import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {server} from "../server"
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";
import { useSelector } from "react-redux";



const AnalyticsPage = () => {

  const { user} = useSelector((state) => state.user);

  const [lang, setLang]= useState([]);

  useEffect(() => {
       
          axios
            .get(`${server}/lang/getlang`)
            .then((res) => {
              setLang(res.data.plang);
            })
            .catch((err) => {
              console.log(err);
            });
       
      
    }, []);

  return (
    <div style={{margin: "20px"}}>
      <div > <h3 style={{textAlign: "center"}}>Hello...! {user.name}</h3></div>
      <div style={{margin: "100px"}}>
      <ResponsiveContainer width="60%" aspect={3} >
      <BarChart data={lang} width={400} height={400}>
        <XAxis dataKey="lang"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="num" fill='#512da8' barSize={30}/>
      </BarChart>
    </ResponsiveContainer>
      </div>

   


    </div>
  )
}

export default AnalyticsPage
