"use client";
import { IVideo } from "@/@types/video.interface";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";

const Slider: FC<{ videos: IVideo[] }> = ({ videos }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={2}
      className="slider_wf"
      autoplay={{
        delay: 4500,
      }}
    >
      {/* {videos.map((video) => (
        <SwiperSlide key={video._id}>
          <VideoItem item={video} />
          Video
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};

export default Slider;
