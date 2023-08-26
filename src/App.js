// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/counter';
import Firstcomp from './components/first-comp';
import Secondcomp from './components/second';
import StyleComp from './components/styleComp';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import ChildComp from './components/childComp';
import ParentComp from './components/parentComp';
import BlogList from './components/blogList';
import Portfolio from './components/Portfolio';
// import './components//styleComp'
// import Firstcomp from './components/first-comp';
// import Secondcomp from './components/second';
// import Counter from './components/counter';
// import StyleComp from './components/styleComp';
// import { BrowserRouter, Route, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <div className="App">
     <BrowserRouter>
    <Navbar/>
     <Routes>
      {/* <Route path="/" element={<Firstcomp />}/>
      <Route path="/second" element={<Secondcomp/>}/> */}
      <Route path="/counter" element={<Counter/>}/>
      {/* <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> */}
      <Route path="/props" element={<ParentComp/>}/>
      {/* <Route path="/blogList" element={<BlogList/>}/> */}
      <Route path="/https://devkaushik0007.github.io/portfolio/" />
      {/* <Route path="/posts/:id" element={<SinglePost/>}/> */}
      {/* <Route path="/parentComp" element={<ParentComp/>}/> */}
      
      
      </Routes>
      </BrowserRouter>
      </div>
     
    </>
    );
    }
    
    export default App;
    
      {/* <h1>check the output</h1>
      <StyleComp/>
      <Firstcomp/>
      <Secondcomp/>
      <Counter/> */}
     


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          kumar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
  

