import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

function Location(){
return(
    <>
    <h1 className="text-4xl p-5 font-cursiv text-center "> Venue Location</h1>
    <div className="flex px-32 p-5 gap-36">
    <div className="pt-36">
        <h1 className="text-xl"><b>Naivedya Restaurant</b></h1>
        <h2 className="flex gap-3 p-5"><b><FaLocationDot />
               <p>Service Road, Near Industrial Area ,Lodhipura,<br />Dhamnod(Dhar),454552 (MP)</p></b>
        </h2>
        <h2 className="flex gap-3 p-5"><b>
        <IoCall /><p>9424908000</p>
        </b>
        </h2>
    </div>
    <div>
    <iframe width="700" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
    src="https://maps.google.com/maps?width=520&amp;height=450&amp;hl=en&amp;q=Service%20road,%20near%20industrial%20area,%20lodhipura,%20dhamnod,%20Dhamnod,%20Madhya%20Pradesh%20454552+(Naivedya%20Restaurant)
    &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
    </div>
    </div>
    </>
)
}

export default Location