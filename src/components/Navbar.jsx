import logo from'../assests/logo.jpg';
import { FaSearch } from "react-icons/fa";
 import { NavLink } from 'react-router-dom';
 
function Navbar(){
   const navItem=[
      
      
   ];
 return(
    <>
    <div className='fixed w-full'>
    <nav className=' w-full text-center h-10 p-2 bg-emerald-100  '>
        <h3>Relex, unwind & treat yourself!</h3>
    </nav>
     <nav className='flex justify-between h-10 w-full item-center  bg-stone-100 '>
     <div className=' flex px-28  text-2xl'>
        <img src={logo} alt="image"  className=' h-10 ' />
        <h1 className=' '>Naivedya</h1>
     </div>
     <div className='flex justify-around  p-2 w-1/2'>
      {navItem.map((item)=>(
         <NavLink to={item.address}>
            <li className='text-black text-xl capitalize'>{item.tittle}</li>
         </NavLink>
      ))}
     </div>
     <div className='px-10 p-2'>
     <FaSearch />
     </div>
     </nav>
     </div>   
    </>
 )
}
export default Navbar;
