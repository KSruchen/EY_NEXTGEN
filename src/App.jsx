import Test from './test'
import Test1 from './assets/components/Test1'
import Test3 from './Test3'
import './App.css'
function App() {

  return (
    <>
      <h2>This code is called as JSX</h2>
      <h3 style={{"color":"red"}}>This is one of the jsx code</h3>
      <Test/>
      <Test1/>
      <Test3/>
    </>
  )
}

export default App