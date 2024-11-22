import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"
import 'swiper/css';

function Home(){
  
  return (
    <div className="h-60vh w-100vw p-10">
    <Swiper
      modules={[Navigation,Pagination,Scrollbar,Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      navigation
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4TcSumML6M-Ei1N0JfXcZoUHs1HsSwYvbw&s" alt="image"  /></SwiperSlide>
      <SwiperSlide><img src="https://lh3.googleusercontent.com/p/AF1QipPABp9Ife0LiSrtpDYF4kH9mMMIlEy_biG-daiZ=s1360-w1360-h1020" alt="image"  /></SwiperSlide>
      <SwiperSlide><img src="https://lh3.googleusercontent.com/p/AF1QipOqmZM0SxMjHdPsmIlx73LRBznH5qyb-TDA469U=s1360-w1360-h1020" alt="image" /></SwiperSlide>
    
      ...

    </Swiper>
    </div>
  );
};

export default Home;
