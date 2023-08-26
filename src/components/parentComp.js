// import ChildComp from "./childComp";
// import Bholaasposter from "./Bholaasposter.webp";
import antman from "./antman.jpg";
import iphone13 from"./iphone13.avif"
import iphone14 from"./iphone14.avif"
import ironman1 from"./ironman1.avif"
import superman1 from"./superman1.avif"
import dog from"./dog.avif"
import dog1 from"./dog1.avif"
// import iphone14 from"./iphone14.avif"
// function ParentComp(){
//     const myCardsData =[
//         {name: "Antman",message:"This is Antman",image:<img src={antman} style={{width:"100%",height:"400px"}}/>},
//         {name: "Rocky",message:"This is Rocky",image:<img src={kgf} style={{width:"100%",height:"400px"}}/>},
//         {name: "Bholaa",message:"This is bholaa ",image:<img src={Bholaasposter} style={{width:"100%",height:"400px"}}/>},
//         {name: "doraemon",message:"This is doraemon",image:<img src={antman} style={{width:"100%",height:"400px"}}/>},
//         {name: "kumar",message:"This is kumar",image:<img src={antman} style={{width:"100%",height:"400px"}}/>},
//     ];
//     return(
//         <>
//         {myCardsData.map((oneObj)=>{
//             return(

           
       
//         <ChildComp 
//         name={oneObj.name}
//         message={oneObj.message}
//         // image={<img src={antman } style={{width:"100%",height:"500px"}}/>}
//         image={oneObj.image}
//         />
//         );
//     })}
//         </>
//     );
// }
// export default ParentComp;




function Contact(){
    return(
        <>


<body>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <img src={ironman1} style={{width:"100%",height:"200px"}}></img>
                       
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="#" target="_blank">Iron Man</a>
                    </h3>
                    <p>Genius billionaire inventor, Tony Stark, dons high-tech suit, becomes Iron Man</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <img src={superman1} style={{width:"100%",height:"200px"}}></img>
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="#" target="_blank">Superman</a>
                    </h3>
                    <p>Kryptonian hero, Superman, fights for truth, justice with superhuman strength, powers.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <img src={dog} style={{width:"100%",height:"200px"}}></img>
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="#" target="_blank">gabru</a>
                    </h3>
                    <p>Loyal, affectionate companions, dogs offer love, joy, and unwavering friendship.</p>
                </div>
            </div>
        </div>
          <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <img src={dog1} style={{width:"100%",height:"200px"}}></img>
                   
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://github.com/atom888" target="_blank">Dog Day</a>
                    </h3>
                    <p>Celebrate Dog Day with treats, play, and endless canine cuddles.</p>
                </div>
            </div>
        </div>
    </div>
</body>


    </>
    );
    }
export default Contact;