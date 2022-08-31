import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react'

export default function Home() {

  const [todo, setTodo] = useState([])

  useEffect({

      setTodo(prev => todo, ...prev)

  },[todo])

  function(){

    

  }
  return (
    <div className={styles.container}>
     

      <main className={styles.main}>
      <input type="text" />
            

      </main>

     
    </div>
  )
}
