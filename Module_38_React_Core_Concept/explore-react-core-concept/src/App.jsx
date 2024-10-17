
import './App.css'

function App() {
  

  return (
    <>
     
      <h1>Vite + React</h1>
      
      <Device name="Laptop" price="80k"></Device>
      <Device name="Mobile" price="25k"></Device>
      <Device name="Watch" price = "5k"></Device>
      <Person/>
      <Student grade='7' score='99'/>
      <Student grade='9' score='88'/>
      <Developer></Developer>
      
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {name: 'Sakib', age:40}
  return <h3>I am {person.name} with age {age + money}</h3>
}


const {grade, score } = {grade: '7', score: '99'}
function Student(props) {
  return <div className='student'>
    <h3>This is a student</h3>
    <p>Name: Sakib</p>
    <p>Age:</p>
  </div>
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    // <div style={{
    //   margin: '20px',
    //   padding: '20px',
    //   border: '2px solid purple',
    //   borderRadius: '20px'
    // }}>

    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
