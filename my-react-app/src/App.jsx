import './App.css'
import Student from './student'
import { useState } from 'react'

function App() {

const[name, setName] = useState("")
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")


function Show(){
  if(name==="" || email==="" || password===""){
    alert("Please fill all the fields")
  } else {
    alert('Registered successfully')
  }
}
  // const [count, setCount] = useState(0)

  // const increment = () => setCount(count + 1)
  // const decrement = () => setCount(count - 1)
  // const reset = () => setCount(0)

  return (
    <>

<h1>Registration Form</h1>
<input type = "text" placeholder = "Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
<input type = "email" placeholder = "Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
<input type = "password" placeholder = "Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
<button onClick={Show}>Register</button>

      {/* <h2>React Counter Application</h2>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button><br></br>
      <button onClick={decrement}>Decrement</button><br></br>
      <button onClick={reset}>Reset</button><br></br> */}
    </>
  )
}

export default App
