import React, { useEffect, useState } from "react"
import "./App.css"

function Card(props) {
  return (
    <div className="card">
      <img src={props.flag.png} alt="flag" />
      <div className="card-body">
        <h3>{props.name}</h3>
        <p>Capital: {props.capital}</p>
        <p>Region: {props.region}</p>
        <p>Population: {props.population}</p>
        <p>Language: {props.language}</p>
        <p>Currency: {props.currency}</p>
      </div>
    </div>
  )
}

function App(){
  const [search, setSearch] = useState("india")
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData(){
      if(search !== "" && search.length > 1){  
        const response = await fetch(`https://restcountries.com/v3.1/name/${search}`) 
        console.log(response)
        const json = await response.json()
        setData(json)
      }}
      
      getData()


  }, [search]);

  return(
    <>
    <form onSubmit={(e) => {
      e.preventDefault() 
      setSearch(e.target.search.value)
    }}>
    <input type="text" name="search" placeholder="Search Country" />
    <button type="submit">Search</button>
    </form>
    <div className="container">
      {data.status !== 404 ? data.map((item, index) => {
        return (
          <Card
            key={index}
            flag={item.flags}
            name={item.name.common}
            capital={item.capital}
            region={item.region}
            population={item.population}
            language={Object.values(item.languages)[0]}
            currency={Object.keys(item.currencies)[0]}
          /> 
        )
      }): "Data not found"}
    </div>
    </>
  )
}

export default App