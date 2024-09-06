import React , {useContext} from 'react'
import  {userContext}  from './ComponentA'

function ComponentD() {
    const user = useContext(userContext)
  return (
    <div>
        <h1> bye {user}</h1>
    </div>
  )
}

export default ComponentD