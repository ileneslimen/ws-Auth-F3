import React,{useEffect,useState} from "react";
import {governorateData} from "../data/data"
import {Form} from 'react-bootstrap'
function Home() {
  const [governorates, setGovernorates] = useState([])
  const [delegateData, setDelegateData] = useState("")
  
  useEffect(() => {
    setGovernorates(governorateData);
  }, [])
  const handleChange = e => {
     setDelegateData(e.target.value);
  };
  let data = governorates.filter((gov)=>gov.name===delegateData).map(el=>el.delegation.map(el=>{
    return (
      <option key={Math.random()}>{el}</option>
    )
  }))
  let items = governorates.map((governorate)=> {
    return (
  <option key={governorate.name} name={governorate.name} onClick={(e)=>setDelegateData(e.target.value)} value={governorate.name}>{governorate.name}</option>
  )
})
  return (
    <>
   <div style={{display:"flex",justifyContent:'center',alignItems:"baseline",gap:"10px",flexDirection:"column"}} > 
    <label value="choisir" htmlFor="pet-select">Choose a governorate:</label>
      <select onChange={handleChange} name="pets" id="pet-select">
        {items}
      </select> 
    <label  htmlFor="pet-select">Choose a delegation:</label>
      <select name="pets" id="pet-select">
        {data}
      </select>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Max Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Min Price" />
      </Form.Group>
  </div>
  {

  }
    </>
  )
}

export default Home;
