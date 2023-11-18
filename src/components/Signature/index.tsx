/// <reference types="vite-plugin-svgr/client" />
import SignatureSvg from "@/assets/images/signature.svg?react";
import "./index.scss";
import anime from "animejs";
import { useEffect } from "react";


export const Signature = () => {

  useEffect(() => {
    anime
      .timeline({
        easing: "easeInOutSine",
        duration: 1000,
        loop: false
      })
      .add(
        {
          targets: ".signature path",
          stroke: "#ffffff",
          opacity: 1
        },
        0
      );

    anime
      .timeline({
        easing: "easeInOutSine",
        duration: 2000,
        loop: false
      })
      .add(
        {
          targets: ".signature path",
          fill: "#ffffff",
          opacity: 1
        },
        0
      );

    anime({
      targets: ".signature path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: function (_, i) {
        return i * 150;
      },
      loop: false
    });
  }, []);

  return (
    <div className="signature">
      <SignatureSvg />
    </div>
  );
};

