import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const[country,setCountry] = useState([])


  const getData = e =>{
    
    e.preventDefault()

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => console.log(data))

  }

  return (

    <div className={styles.container}>

      <main className={styles.main}>
     
      <input type="text" />
     
      </main>

    </div>
  )
}
