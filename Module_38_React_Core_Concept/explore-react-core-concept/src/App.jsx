
import './App.css'

function App() {
  

  return (
    <>
     
      <h1>Vite + React</h1>
      
      <Person/>
      <Student/>
      
    </>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {name: 'Sakib', age:40}
  return <h3>I am {person.name} with age {age + money}</h3>
}


function Student() {
  return <div>
    <h3>This is a student</h3>
    <p>Name: Sakib</p>
    <p>Age:</p>
  </div>
}

export default App
