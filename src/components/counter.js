// import { useState } from "react";

// function Counter(){
//     const[count, setCount]=useState(0);
//     const[heading, setHeading]=useState(" This is my counter");
//     function add(){
//         if(count==9){
//             setHeading("hurryyyy");
//         }
//         if(count<10){
//             setCount(count+1);
//             // setCount(10);

            
        
//         }
//     }
//     function sub(){
//         if(count<11){
//             setHeading("This is my counter");
//         }
//         if(count>0){
//             setCount(count-1);
//             // setCount(0)
        
//         }
//     }
//     return(
//         <>
//         <div className="counter">
//         <h1>
//           {heading} : {count}
//         </h1>
//         <button className="counter-btn" onClick={add}>add</button>
//         <button className="counter-sub-btn"  onClick={sub}>sub</button>
//         </div>
//         </>
//     )
// }
// export default Counter;



import React, { useState } from "react";
  
// Importing app.css is css file to add styling
// import "./App.css";
  
const App = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }
  
  return (
    <div style={{
    //   display: 'flex',
    //   flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '100%',
    //   top: '-15%',
    padding:'231px',
      background: '#081b29',
      color:'white',
    }}>
      Counter App
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '20px',
          backgroundColor: '#112e42',
        
          color: 'white',
        }}
          onClick={handleClick1}>Increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '20px',
          backgroundColor: '#112e42',
        
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
      </div>
    </div>
  )
}
  
export default App