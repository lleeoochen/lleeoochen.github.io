import { PageSlide } from "@/components/PageSlide";
import { Signature } from "@/components/Signature";
import { projects } from "@/data/projects";
import { recordings } from "@/data/recordings";
import { BasicLayout } from "@/layouts/BasicLayout";
import { Carousel } from "@/components/Carousel";
import {
  useCallback, useRef
} from "react";

import "./index.scss";
import { Menu } from "@/components/Menu";
import { HomePageSlideAnchor } from "@/constants";

export const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const homeSlideRef = useRef<HTMLDivElement>(null);
  const programmingSlideRef = useRef<HTMLDivElement>(null);
  const musicSlideRef = useRef<HTMLDivElement>(null);
  const aboutSlideRef = useRef<HTMLDivElement>(null);

  const handleNavigate = useCallback((anchor: HomePageSlideAnchor) => {
    if (!contentRef.current) {
      return;
    }

    switch (anchor) {
    case HomePageSlideAnchor.HOME:
      homeSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case HomePageSlideAnchor.PROGRAMMING:
      programmingSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case HomePageSlideAnchor.MUSIC:
      musicSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    case HomePageSlideAnchor.ABOUT:
      aboutSlideRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    };
  }, []);

  const navigteToProgramming = useCallback(() => handleNavigate(HomePageSlideAnchor.PROGRAMMING), []);
  const navigteToMusic = useCallback(() => handleNavigate(HomePageSlideAnchor.MUSIC), []);
  const navigteToAbout = useCallback(() => handleNavigate(HomePageSlideAnchor.ABOUT), []);

  return (
    <BasicLayout>
      <Menu handleNavigate={handleNavigate}/>
      <div ref={contentRef} className="content">
        <PageSlide ref={homeSlideRef} style={{ backgroundColor: "transparent" }} handleNavigate={navigteToProgramming}>
          <Signature />
        </PageSlide>

        <PageSlide ref={programmingSlideRef} style={{ backgroundColor: "#646da3" }} handleNavigate={navigteToMusic}>
          <h1>A little bit about my programming talent</h1>
          <Carousel cards={projects}/>
        </PageSlide>

        <PageSlide ref={musicSlideRef} style={{ backgroundColor: "#653630" }} handleNavigate={navigteToAbout}>
          <h1>A little bit about my music talent</h1>
          <Carousel cards={recordings}/>
        </PageSlide>

        <PageSlide ref={aboutSlideRef} style={{ backgroundColor: "#488ab8" }}>
          <h1>A little bit about myself</h1>
        </PageSlide>
      </div>
    </BasicLayout>
  );
};
