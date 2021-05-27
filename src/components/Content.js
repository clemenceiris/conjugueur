import React, { useState, useEffect } from 'react';
import './Content.css';
import Form from './Form';

function Content() {

  const [data, setData] = useState([]);

  const getData=()=>{
    fetch('https://conjugueur.drupal.pm/json/verbes.json'
    ,{
      method: 'GET',
      headers : {
        'mode':'no-cors',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then((res) => {
        //console.log(res)
        return res.json();
      })
      .then((myJson) => {
        //console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  
    return(
      <div className="container">
        <h2>CONJUGUEUR</h2>
        <br></br>
        <Form />
          {data.map((value, index) => {
            return(
              <div key={value.path} className="card-contain item">
                
                <div className="card-body">
                      <h4 className="card-title">{value.title}</h4>
                </div>
              </div>
            ) 
          })}
      </div>
    )
}

export default Content;
  