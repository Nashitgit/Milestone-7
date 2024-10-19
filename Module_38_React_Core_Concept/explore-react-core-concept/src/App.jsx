
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore';

function App() {

  const books = [
    
      {id:1, name: 'Physics', price:120},
      {id:2, name: 'Chemistry', price:150},
      {id:3, name: 'Biology', price:180},
      {id:4, name: 'Mathematics', price:200}
    
  ]

  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel']

  const singers = [
    {id:1, name: 'Mahfuz', age: 60},
    {id:2, name: 'Eva', age: 38},
    {id:3, name: 'Shuvro', age: 40},
    {id:4, name: 'Pritom', age: 32}
  ]


  return (
    <>

      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>


      {
        singers.map(singer => <Singer  singer={singer}></Singer>)
      }

      
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Todo task={'Learn React'} isdone={true}></Todo>
      <Todo task={'Explore Core Concept'} isdone={false}></Todo>
      <Todo task={'Try Jsx'} isdone={true}></Todo>  */}


      {/* <Device name="Laptop" price="80k"></Device>
      <Device name="Mobile" price="25k"></Device>
      <Device name="Watch" price = "5k"></Device>
      <Person/>
      <Student grade='7' score='99'/>
      <Student grade='9' score='88'/>
      <Developer></Developer> */}

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
  const person = { name: 'Sakib', age: 40 }
  return <h3>I am {person.name} with age {age + money}</h3>
}


// const {grade, score } = {grade: '7', score: '99'}
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);

  return <div className='student'>
    <h3>This is a student</h3>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
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
