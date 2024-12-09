// import {React,useEffect} from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import Review from "../Components/Review";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../Styles/corouselStyle.css";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// const Corousel = () => {
//   useEffect(()=>{
//   })
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Review />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Review />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Review />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Review />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Review />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };
// export default Corousel;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../Components/Review";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/corouselStyle.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Corousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/customer/support"
        );
        console.log(response.data.result);
        setReviews(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Corousel;
