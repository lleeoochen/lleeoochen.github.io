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
import { ICard } from "@/types";
import { lazy } from "react";
import "./index.scss";

type Props = {
  cards: ICard[];
};

const Card = lazy(() => import("@/components/Card"));

export const Carousel = ({ cards }:Props) => {
  const isPortrait = window.innerHeight > window.innerWidth;

  return (
    <Swiper effect="coverflow" direction="horizontal" loop coverflowEffect={{
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }} centeredSlides slidesPerView={isPortrait ? 1 : 3}
    modules={[Navigation, Pagination, EffectCoverflow]} pagination>
      {
        cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card {...card} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
