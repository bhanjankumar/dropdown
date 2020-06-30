import React, { useEffect, useState } from "react";
import "./styles.css";
import Dropdown from "./components/Dropdown";
import axios from 'axios';
export default function App() {
  const [data, setData] = useState([]);
  const [rdata, setrData] = useState([]);
  const [search, Setsearch] = useState("");
  const [update,setUpdate] = useState(false);
  const [more,setMore] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/country")
    .then(response=>{
      if(update){
        setMore(false);
      }
      let filtData = update ? response.data:response.data.filter((d, i) => i < 5);
      setData(filtData);
      setrData(filtData);
    })
    .catch(error=>{
      console.log(error)
    })
  }, [update]);

  function handleChange(e) {
    let curval = e.target.value;
    Setsearch(e.target.value);
    axios.get("http://localhost:5000/country")
    .then(response=>{
      let dataSearch = response.data.filter((d, i) => d.name.indexOf(curval) !== -1);
      curval ? setData(dataSearch) : setData(rdata);
    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  function loadData() {
    setUpdate(true);
    setMore(false);
  }

  function addCountry(){
    let addArrayData = {
      name:search
    };
    axios.post("http://localhost:5000/country",addArrayData)
    .then(response=>{
      setUpdate(true)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="App">
      <Dropdown data={data} handleChange={handleChange} loadAll={loadData} more={more} search={search} addCountry={addCountry} />
    </div>
  );
}
