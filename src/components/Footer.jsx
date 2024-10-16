import logo from'../assests/logo.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
function Footer(){
    return(
        <>
           <footer className='bg-emerald-100 h-93 w-full flex flex-col items-center'>
            <img src={logo} alt="image" className='h-20 w-20 ' />
            <p>A unit of Adited Coworking</p>
            <h2 className=' bg-gray-400 w-1/3 text-center '> Dine in | Takeaway | Dilivery</h2>
            <h2 className='mt-5'><b>Average Cost</b></h2>
            <p>INR 600 for two peaple(approx)</p>
            <h1 className='mt-5'><b>OPENING HOURS</b></h1>
            <p>11:00AM - 2:00AM</p>
            <p>Happily Serving You Everyday!</p>
            <hr className='w-2'/>
            <h1 className='mt-5'><b>CONTACT US</b></h1>
            <p className='item-center flex  gap-2'>
            <FaWhatsapp/>
            <p>Whatsapp: +91 9424808000</p>
            </p>
            <p className='item-center flex justify-center gap-2'>
               <CiLocationOn/>
               <p>Service Road, Near Industrial Area ,Lodhipura,<br />Dhamnod(Dhar),454552 (MP)</p>
            </p>
            <h1 className='mt-5'><b>FOLLOW US</b></h1>
            <span className='item-center flex justify-center mb-5'>
           <FiFacebook className='text-center'/><FaInstagram/>
            </span>
           </footer>
        </>
    )
}
export default Footer;