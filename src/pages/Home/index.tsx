import { PageSlide } from "@/components/PageSlide";
import { Signature } from "@/components/Signature";
import { projects } from "@/data/projects";
import { recordings } from "@/data/recordings";
import { BasicLayout } from "@/layouts/BasicLayout";
import { Carousel } from "@/components/Carousel";
import {
  useEffect, useRef
} from "react";

import "./index.scss";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const homeSlide = useRef<HTMLDivElement>(null);
  const aboutSlide = useRef<HTMLDivElement>(null);
  const programmingSlide = useRef<HTMLDivElement>(null);
  const musicSlide = useRef<HTMLDivElement>(null);

  const { hash } = useLocation();

  useEffect(() => {
    switch (hash) {
    case "#home":
      homeSlide.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case "#programming":
      programmingSlide.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case "#music":
      musicSlide.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case "#career":
      aboutSlide.current?.scrollIntoView({ behavior: "smooth" });
      break;
    };
  }, [hash]);

  return (
    <BasicLayout>
      <div className="content">
        <PageSlide ref={homeSlide} style={{ backgroundColor: "transparent" }} targetHash="#programming">
          <Signature />
        </PageSlide>

        <PageSlide ref={programmingSlide} style={{ backgroundColor: "#0e0e0ef0" }} targetHash="#music">
          <h1>A little bit about my programming talent</h1>
          <Carousel cards={projects}/>
        </PageSlide>

        <PageSlide ref={musicSlide} style={{ backgroundColor: "#653630f0" }} targetHash="#career">
          <h1>A little bit about my music talent</h1>
          <Carousel cards={recordings}/>
        </PageSlide>

        <PageSlide ref={aboutSlide} style={{ backgroundColor: "#488ab8f0" }}>
          <h1>A little bit about myself</h1>
        </PageSlide>
      </div>
    </BasicLayout>
  );
};
