import {
  Swiper, SwiperSlide
} from "swiper/react";
import {
  EffectCoverflow,
  Navigation, Pagination
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";

type Props<T extends object> = {
  dataList: T[];
  children(data: T): React.ReactNode;
};


export const Carousel = <T extends object>({
  dataList, children
}: Props<T>) => {
  const isPortrait = window.innerHeight > window.innerWidth;

  return (
    <Swiper effect="coverflow" direction="horizontal" coverflowEffect={{
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }} centeredSlides slidesPerView={isPortrait ? 1 : 3}
    modules={[Navigation, Pagination, EffectCoverflow]} pagination>
      {
        dataList.map((data, index) => (
          <SwiperSlide key={index}>
            {children(data)}
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
