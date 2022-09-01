import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Todo from '../components/Todo'

export default function Home() {

  const [todo, setTodo] = useState([])

  const[input,setInput] = useState('')

  
  function addInput(e){

    setInput(e.target.value)
  console.log("work1")
    }

    function addTodo(){
         
      setTodo(prev => [input, ...prev])
      console.log("work2")
    }

  return (

    
    <div className={styles.container}>
     
      <main className={styles.main}>
      <input className = {styles.input} onChange = {addInput}type="text" />
            
            <button className = {styles.button} onClick = {addTodo}>add todo</button>

            <Todo todo = {todo} />
        
      </main>

    </div>
  )
}
