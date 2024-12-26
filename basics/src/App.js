// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
import Greeting from "./Greeting";

function App() {
  // let name = 'Pooja';
  return (
    <div>
    <h1>Hello from ReactJS</h1>
    <Greeting name = {'Ayush'}/>
    <Greeting name = {'Riya'}/>
    <Greeting name = {'Isha'}/>
    {/* <Home name = {name} age = {24}/>
    <About />
    <Contact /> */}
    </div>
  );
}

export default App;
