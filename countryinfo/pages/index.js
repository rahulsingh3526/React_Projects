import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {
  const[countryData,setCountryData] = useState([])
  const[country,setCountry] = useState([])
  const[currency,setCurrency] = useState([])
  const[loading,setLoading] = useState(true)

 const newCountry = e =>{
  setCountry(e.target.value)
 }
  const getData = e =>{
    
    e.preventDefault()

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      
           console.log(data);
           setCountryData(data)
          //  const curr = data.
          //  setCurrency(curr)
        const curr =Object.values(data[1].currencies)[0].name;
        setCurrency(curr)
        setLoading(false)
    })
  }

  return (

    <div className={styles.container}>

      <main className={styles.main}>

        <form onSubmit={getData}>
          <input className = {styles.input}onChange= {newCountry} type="text" />
          <button className = {styles.button}>get info</button>
        </form>

        <div>

              <p className ={styles.para}>  {!loading && currency} </p>
              <p className ={styles.para}>  {!loading &&  countryData[1].capital}  </p>
              <p className ={styles.para}>  {!loading &&  countryData[1].area}  </p>

        </div>

      </main>

    </div>
  )

  }

