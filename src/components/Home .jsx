import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules"

function Home(){
    const sliderImages=[
        "https://media.licdn.com/dms/image/v2/D4E05AQE5LY7h7gkP0A/videocover-high/videocover-high/0/1680276029533?e=2147483647&v=beta&t=QNc8UaXpPrHNHjXEJIrvsCE2QudccMTMu5vuk-mj-9I",
        "https://content.jdmagicbox.com/comp/dhar/p8/9999p7292.7292.230314153029.a9p8/catalogue/naivedya-cafe-and-restaurant-dhamnod-dhar-restaurants-roi6jcf5hl-250.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4TcSumML6M-Ei1N0JfXcZoUHs1HsSwYvbw&s",
    ]
    return(
        <>
      <Swiper
        className="mySwiper w-[100vw] h-[60vh]"
        slidesPerView={1}
        spaceBetween={32}
        modules={[Autoplay, Pagination]}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }}
      >
        {sliderImages.map((item) => (
          <SwiperSlide>
            <div
              className="w-screen h-full"
              style={{
                background:' url(${item})',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
)
}
export default Home;
