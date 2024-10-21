
import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {

  function handleButton() {
    alert('Button clicked')
  }

  const handleButton2 = () => {
    alert('Button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>

      <h3>React Core Concept 2</h3>

      <Team></Team>
      <Counter></Counter>


      <button onClick={handleButton}>Click Me</button>
      <button onClick={handleButton2}> Click 2</button>
      <button onClick={() => { alert('Button 3 clicked') }}>Click 3</button>
      
      {/* it can not be used like this while passing value. cause it is called instantly*/}
      {/* <button onClick={addToFive(5)}>Click 4</button> */}

      <button onClick={() => {addToFive(3)}}>Click 4</button>

    </>
  )
}

export default App
