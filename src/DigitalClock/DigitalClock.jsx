import React, { useEffect, useState } from 'react'
import styles from './DigitalClock.module.css'
function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=>{
      clearInterval(intervalId)
    }
  },[])

  const formatTime= ()=>{
    const arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const week = ['Sun', 'Mon', 'Tue', 'Wed' ,'Thu', 'Fri', 'Sat']
    let dayWeek = week[time.getDay()]
    
    let day = time.getDate()
    
    let month = arrMonth[time.getMonth()]
    
    let year = time.getFullYear()
    
    
    let Hours = time.getHours()
    const Minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const meridian = Hours >= 12? "PM" : "AM"
    
    Hours = Hours%12 || 12 ; 
    return `${dayWeek} ${badZero(day)} ${month} ${year}  ${badZero(Hours)} :${badZero(Minutes)} :${badZero(seconds)} ${meridian}`

  }

  const badZero = (number)=> {
  
    return (number < 10 ? "0" : "") + number
  }
  return (
    <div >
       <p className={styles.container}>{formatTime()}</p> 
    </div>
  )
}

export default DigitalClock