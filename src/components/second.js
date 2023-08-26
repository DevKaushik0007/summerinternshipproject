import Firstcomp from "./first-comp";
import { useState } from "react";

function Secondcomp(){
    const [number, setName]= useState(0);
    // const[name, setName]

// function ChangeHeroFunction(){
//     console.log("check test");

//     setName("doraemon");
    
// }
function add(){
    console.log("check test");
    setName(number+1);

    
    
}
function Sub(){
    setName(number-1);

    
    
}

    return(
        <>
        <h1>
            this is second comp
        </h1>

        {/* My hero is {name} */}
       value of number is : {number}
        <br></br>
        {/* <button onClick={ChangeHeroFunction}>Change Hero</button> */}
           
        <button style={{color: "red" , width:"50px",height:"50px"}}  onClick={add}>+</button>
        <button style={{color: "red" , width:"50px",height:"50px"}} onClick={Sub}>-</button>

        {/* <Firstcomp/> */}
        </>
    );
}
export default Secondcomp;