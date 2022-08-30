import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {
      
  const[count,setCount] = useState(0)

function increase() {

  setCount(prev =>prev + 1)
}

function decrease(){

  setCount(prev => prev -1)
}

  return (
    <div className={styles.container}>

      <main className={styles.main}>
             <button className={styles.button} onClick = {increase}>ADD</button>
                        <p className ={styles.count}>{count}</p>
             <button className={styles.button} onClick = {decrease}>SUBTRACT</button>
      </main>

      
    </div>
  )
}
