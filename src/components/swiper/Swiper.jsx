import s from "./Swiper.module.scss";

import { Swiper, SwiperSlide } from "./Swiper.jsx";

// Import Swiper styles
import "Swiper/css";
import "Swiper/css/pagination"
import "Swiper/css/navigation"




// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);




export default function Swiper () {
  
  
  
    return (
      <>
      <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
    "clickable": true
  }} navigation={true} className="mySwiper">
    <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
      </>
    )
  }


