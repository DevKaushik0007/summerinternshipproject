import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <>
        <div className='navbar'>
        <ul className='ul'>
            {/* <li>
                <Link class="active to=" / " > Home</Link>
            </li> */}
{/*         
  <li><Link to="/">Firstcomp</Link></li>
  <li><Link to="/second">Secondcomp</Link></li> */}
  <li ><Link to="/counter">Counter</Link></li>
  {/* <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li> */}
  <li><Link to="/props">Props</Link></li>
  {/* <li><Link to="/blogList">BlogList</Link></li>
  <li><Link to="/posts/">SinglePost</Link></li> */}
  <li><Link to="https://devkaushik0007.github.io/portfolio/" target='_blank'>Portfolio</Link></li>
  
  {/* <li><Link to="/childComp">ChildComp</Link></li>
  <li><Link to="/parentComp">ParentComp</Link></li> */}
 </ul>
  </div>
        </>
    );
}
export default Navbar;