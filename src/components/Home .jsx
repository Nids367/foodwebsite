import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"
import 'swiper/css';
import { Link } from "react-router-dom";

function Home(){
  
  return (
    <div className=" w-full p-5 pt-20">
    <Swiper
      modules={[Navigation,Pagination,Scrollbar,Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      navigation
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide><div><img src="https://lh3.googleusercontent.com/p/AF1QipPABp9Ife0LiSrtpDYF4kH9mMMIlEy_biG-daiZ=s1360-w1360-h1020" alt="image" style={{width:"100%",height:"56vh"}} />
      <Link to="../pages/MenuPage">
      <button className="absolute  transform-translate-x-1/2 bottom-32 ml-28 rounded text-xl bg-purple-400 text-black border-none cursor-pointer  transition-all duration-300 hover:bg-white ">OUR MENU</button>
      </Link></div></SwiperSlide>
      


      <SwiperSlide><div><img src="https://lh3.googleusercontent.com/p/AF1QipOqmZM0SxMjHdPsmIlx73LRBznH5qyb-TDA469U=s1360-w1360-h1020" alt="image" style={{width:"100%",height:"56vh"}} />
      <Link to="../pages/MenuPage">
      <button className="absolute  transform-translate-x-1/2 bottom-32 ml-28 rounded text-xl bg-purple-400 text-black border-none cursor-pointer  transition-all duration-300 hover:bg-white">OUR MENU</button>
      </Link></div></SwiperSlide>
      

    </Swiper>
    </div>
  );
};

export default Home;
