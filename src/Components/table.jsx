import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import {server} from "../server"

const Table = () => {

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
      
    
    const columns = [
        {
            name: ' Programming Language',
            selector: row => row.lang
        },
        {
            name: 'No. of Students',
            selector: row => row.num
        },
    ];
    


  return (
    <div>
        <DataTable
    columns={columns}
    data={lang}/>
</div>
  )
}

export default Table